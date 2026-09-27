import {
  ALL_TIME_SLOTS,
  availableSlots,
  BOOKING_DURATION_MINUTES,
  BOOKING_LEAD_MINUTES,
  BOOKING_TIMEZONE,
  type BookingRequest,
  validateBookingRequest,
  zonedParts,
  zonedToInstant,
} from "@/lib/booking";
import type { BlogIndex, PortfolioIndex } from "@/lib/site-json";

/**
 * Agent tools shared by WebMCP (in the browser) and the remote MCP server at /mcp.
 * Each surface supplies a backend: the browser fetches the site's endpoints, the server
 * calls the same functions directly. Tools return JSON-serializable data or Markdown strings.
 */
export type AgentBackend = {
  resume: () => Promise<unknown>;
  resumeMarkdown: () => Promise<string>;
  portfolio: () => Promise<PortfolioIndex>;
  blog: () => Promise<BlogIndex>;
  /** Markdown for a site path such as "/", "/portfolio", "/blog/<slug>"; null if missing. */
  pageMarkdown: (path: string) => Promise<string | null>;
  /** Creates a booking through the /book code path (Convex + /api/booking emails and rate limit). */
  book: (request: BookingRequest) => Promise<void>;
};

export type AgentTool = {
  name: string;
  title: string;
  description: string;
  inputSchema: Record<string, unknown>;
  annotations: {
    readOnlyHint: boolean;
    destructiveHint?: boolean;
    idempotentHint?: boolean;
    openWorldHint?: boolean;
  };
  execute: (args: Record<string, unknown>) => Promise<unknown>;
};

const MEETING_TYPE = "intro-call";
const BOOKING_PAGE = "https://www.michaelchurley.com/book";

const str = (value: unknown) => (typeof value === "string" ? value : "");
const READ_ONLY = { readOnlyHint: true, openWorldHint: false } as const;
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

function isValidTimeZone(tz: string) {
  try {
    new Intl.DateTimeFormat("en-US", { timeZone: tz });
    return true;
  } catch {
    return false;
  }
}

function requireTimeZone(value: unknown) {
  const tz = str(value) || BOOKING_TIMEZONE;
  if (!isValidTimeZone(tz))
    throw new Error(`Unknown timezone: ${tz}. Use an IANA name like America/Chicago.`);
  return tz;
}

function slotView(date: string, slot: string, timeZone: string) {
  const start = zonedToInstant(date, slot, BOOKING_TIMEZONE);
  return {
    slot_start: start.toISOString(),
    eastern: `${date} ${slot}`,
    local: start.toLocaleString("en-US", {
      timeZone,
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      timeZoneName: "short",
    }),
  };
}

function normalizePath(value: unknown) {
  const raw = str(value).trim() || "/";
  const path = raw.startsWith("http")
    ? new URL(raw).pathname
    : raw.startsWith("/")
      ? raw
      : `/${raw}`;
  return path.replace(/\.md$/, "").replace(/\/index$/, "/");
}

function bookingOptions() {
  return {
    meeting_types: [
      {
        id: MEETING_TYPE,
        name: "30-minute call",
        duration_minutes: BOOKING_DURATION_MINUTES,
        description: "Business opportunities, technology projects, or collaboration ideas.",
      },
    ],
    host_timezone: BOOKING_TIMEZONE,
    hours: `Monday to Friday, ${ALL_TIME_SLOTS[0]} to ${ALL_TIME_SLOTS[ALL_TIME_SLOTS.length - 1]} Eastern Time, every 30 minutes`,
    same_day_lead_minutes: BOOKING_LEAD_MINUTES,
    required: ["slot_start", "name", "email"],
    optional: ["meeting_type", "phone", "notes", "timezone", "dry_run"],
    flow: ["get_booking_options", "get_availability", "book_meeting"],
    confirmation:
      "The visitor gets a confirmation email with a calendar invite; Michael is notified.",
    limits: "5 booking requests per hour per IP.",
    booking_page: BOOKING_PAGE,
  };
}

export function createAgentTools(backend: AgentBackend): AgentTool[] {
  return [
    {
      name: "get_resume",
      title: "Get resume",
      description: "Michael C. Hurley's resume in JSON Resume format (same as /resume.json).",
      inputSchema: { type: "object", properties: {} },
      annotations: READ_ONLY,
      execute: () => backend.resume(),
    },
    {
      name: "list_portfolio",
      title: "List portfolio",
      description: "Portfolio pieces (sites, interfaces, marks) with media and live links.",
      inputSchema: {
        type: "object",
        properties: { category: { type: "string", enum: ["sites", "interfaces", "marks"] } },
      },
      annotations: READ_ONLY,
      execute: async ({ category }) => {
        const { items } = await backend.portfolio();
        return { items: category ? items.filter((i) => i.category === category) : items };
      },
    },
    {
      name: "list_blog_posts",
      title: "List blog posts",
      description: "Published blog posts, newest first, with URLs and Markdown links.",
      inputSchema: {
        type: "object",
        properties: {
          tag: { type: "string", description: "Only posts with this tag" },
          limit: { type: "integer", minimum: 1, description: "Maximum posts to return" },
        },
      },
      annotations: READ_ONLY,
      execute: async ({ tag, limit }) => {
        const { posts } = await backend.blog();
        const filtered = posts.filter((p) => !tag || p.tags.includes(String(tag)));
        return { posts: typeof limit === "number" ? filtered.slice(0, limit) : filtered };
      },
    },
    {
      name: "get_blog_post",
      title: "Get blog post",
      description: "Full Markdown of one blog post by slug (see list_blog_posts).",
      inputSchema: { type: "object", properties: { slug: { type: "string" } }, required: ["slug"] },
      annotations: READ_ONLY,
      execute: async ({ slug }) => {
        const clean = str(slug)
          .replace(/^\/?blog\//, "")
          .replace(/\.md$/, "");
        if (!clean) throw new Error("slug is required");
        const md = await backend.pageMarkdown(`/blog/${clean}`);
        if (md === null) throw new Error(`No published post with slug "${clean}"`);
        return md;
      },
    },
    {
      name: "get_page_markdown",
      title: "Get page as Markdown",
      description:
        'Markdown for any page on this site, e.g. "/", "/portfolio", "/blog/<slug>", "/aeo".',
      inputSchema: { type: "object", properties: { path: { type: "string" } }, required: ["path"] },
      annotations: READ_ONLY,
      execute: async ({ path }) => {
        const clean = normalizePath(path);
        const md = await backend.pageMarkdown(clean);
        if (md === null) throw new Error(`No page at ${clean}`);
        return md;
      },
    },
    {
      name: "search_site",
      title: "Search site",
      description: "Keyword search across the resume, portfolio, and blog posts.",
      inputSchema: {
        type: "object",
        properties: { query: { type: "string" } },
        required: ["query"],
      },
      annotations: READ_ONLY,
      execute: async ({ query }) => {
        const q = str(query).toLowerCase().trim();
        if (!q) throw new Error("query is required");
        const [resume, blog, portfolio] = await Promise.all([
          backend.resumeMarkdown(),
          backend.blog(),
          backend.portfolio(),
        ]);
        const results: {
          type: string;
          title: string;
          url: string;
          markdown?: string;
          snippet: string;
        }[] = [];
        for (const line of resume.split("\n")) {
          if (line.toLowerCase().includes(q)) {
            results.push({
              type: "resume",
              title: "Resume",
              url: "https://www.michaelchurley.com/",
              markdown: "https://www.michaelchurley.com/resume.md",
              snippet: line.trim(),
            });
          }
        }
        for (const p of blog.posts) {
          if (`${p.title} ${p.description} ${p.tags.join(" ")}`.toLowerCase().includes(q)) {
            results.push({
              type: "blog",
              title: p.title,
              url: p.url,
              markdown: p.markdown,
              snippet: p.description,
            });
          }
        }
        for (const i of portfolio.items) {
          if (`${i.title} ${i.category}`.toLowerCase().includes(q)) {
            results.push({
              type: "portfolio",
              title: i.title,
              url: i.url ?? portfolio.url,
              snippet: i.category,
            });
          }
        }
        return { query: q, results: results.slice(0, 25) };
      },
    },
    {
      name: "get_booking_options",
      title: "Get booking options",
      description:
        "How to schedule a call with Michael: meeting types, duration, time zone, hours, and required fields. Step 1 of get_booking_options -> get_availability -> book_meeting.",
      inputSchema: { type: "object", properties: {} },
      annotations: READ_ONLY,
      execute: async () => bookingOptions(),
    },
    {
      name: "get_availability",
      title: "Get availability",
      description:
        "Open 30-minute slots between two dates (inclusive, up to 62 days). Pass a slot_start from the result to book_meeting.",
      inputSchema: {
        type: "object",
        properties: {
          date_from: { type: "string", description: "YYYY-MM-DD (default: today, Eastern)" },
          date_to: { type: "string", description: "YYYY-MM-DD (default: date_from + 7 days)" },
          timezone: {
            type: "string",
            description: "IANA zone for the 'local' labels, e.g. America/Chicago",
          },
          meeting_type: { type: "string", enum: [MEETING_TYPE] },
        },
      },
      annotations: READ_ONLY,
      execute: async ({ date_from, date_to, timezone }) => {
        const tz = requireTimeZone(timezone);
        const from = str(date_from) || zonedParts(new Date(), BOOKING_TIMEZONE).date;
        const toDefault = new Date(`${from}T12:00:00Z`);
        toDefault.setUTCDate(toDefault.getUTCDate() + 7);
        const to = str(date_to) || toDefault.toISOString().slice(0, 10);
        if (!DATE_RE.test(from) || !DATE_RE.test(to))
          throw new Error("date_from and date_to must be YYYY-MM-DD");
        const days = availableSlots(from, to).map((d) => ({
          date: d.date,
          slots: d.slots.map((s) => slotView(d.date, s, tz)),
        }));
        return {
          meeting_type: MEETING_TYPE,
          duration_minutes: BOOKING_DURATION_MINUTES,
          timezone: tz,
          days,
        };
      },
    },
    {
      name: "book_meeting",
      title: "Book a meeting",
      description:
        "Books a 30-minute call with Michael for an open slot from get_availability. Same path as the /book form: saves the booking and emails the visitor a confirmation with a calendar invite. Set dry_run to validate without booking.",
      inputSchema: {
        type: "object",
        properties: {
          slot_start: { type: "string", description: "ISO 8601 start time from get_availability" },
          name: { type: "string" },
          email: { type: "string", format: "email" },
          phone: { type: "string" },
          notes: { type: "string" },
          timezone: {
            type: "string",
            description: "Visitor's IANA zone, used for the 'local' label",
          },
          meeting_type: { type: "string", enum: [MEETING_TYPE] },
          dry_run: { type: "boolean", description: "Validate only; nothing is booked or emailed" },
        },
        required: ["slot_start", "name", "email"],
      },
      annotations: {
        readOnlyHint: false,
        destructiveHint: false,
        idempotentHint: false,
        openWorldHint: true,
      },
      execute: async (args) => {
        const tz = requireTimeZone(args.timezone);
        if (args.meeting_type && args.meeting_type !== MEETING_TYPE) {
          throw new Error(`Unknown meeting_type. Use "${MEETING_TYPE}".`);
        }
        const start = new Date(str(args.slot_start));
        if (Number.isNaN(start.getTime()))
          throw new Error("slot_start must be an ISO 8601 date-time");
        const eastern = zonedParts(start, BOOKING_TIMEZONE);
        const timeSlot = `${String(Math.floor(eastern.minutes / 60)).padStart(2, "0")}:${String(eastern.minutes % 60).padStart(2, "0")}`;
        const open = availableSlots(eastern.date, eastern.date)[0]?.slots ?? [];
        if (!open.includes(timeSlot)) {
          throw new Error(
            "That slot is not available. Call get_availability and use one of its slot_start values.",
          );
        }
        const request: BookingRequest = {
          name: str(args.name).trim(),
          email: str(args.email).trim(),
          phone: str(args.phone).trim(),
          message: str(args.notes).trim(),
          date: eastern.date,
          timeSlot,
        };
        const invalid = validateBookingRequest(request);
        if (invalid) throw new Error(invalid);
        const booking = {
          meeting_type: MEETING_TYPE,
          duration_minutes: BOOKING_DURATION_MINUTES,
          ...slotView(eastern.date, timeSlot, tz),
          name: request.name,
          email: request.email,
        };
        if (args.dry_run === true) return { status: "valid", dry_run: true, booking };
        await backend.book(request);
        return {
          status: "confirmed",
          booking,
          message: `Booked. A confirmation email with a calendar invite is on its way to ${request.email}.`,
        };
      },
    },
  ];
}
