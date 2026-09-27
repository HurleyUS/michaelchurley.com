"use client";

import { useMutation } from "convex/react";
import { useEffect, useRef } from "react";
import { api } from "@/convex/_generated/api";
import {
  ALL_TIME_SLOTS,
  availableSlots,
  BOOKING_DURATION_MINUTES,
  BOOKING_LEAD_MINUTES,
  BOOKING_TIMEZONE,
  submitBooking,
  validateBookingRequest,
  zonedParts,
  zonedToInstant,
} from "@/lib/booking";
import { markdownPath } from "@/lib/markdown-path";

type Args = Record<string, unknown>;
type Tool = {
  name: string;
  title: string;
  description: string;
  inputSchema: object;
  annotations: { readOnlyHint: boolean };
  execute: (args: Args) => Promise<string>;
};
type ModelContextLike = {
  registerTool: (tool: Tool, options?: { signal?: AbortSignal }) => unknown;
};

const MEETING_TYPE = "intro-call";

async function fetchText(path: string) {
  const res = await fetch(path, { headers: { Accept: "text/markdown, application/json" } });
  if (!res.ok) throw new Error(`${path} returned ${res.status}`);
  return res.text();
}

async function fetchJson<T>(path: string): Promise<T> {
  return JSON.parse(await fetchText(path)) as T;
}

const json = (value: unknown) => JSON.stringify(value, null, 2);
const str = (value: unknown) => (typeof value === "string" ? value : "");

function isValidTimeZone(tz: string) {
  try {
    new Intl.DateTimeFormat("en-US", { timeZone: tz });
    return true;
  } catch {
    return false;
  }
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

type BlogIndex = {
  posts: {
    title: string;
    slug: string;
    url: string;
    markdown: string;
    date: string | null;
    description: string;
    tags: string[];
  }[];
};
type PortfolioIndex = {
  items: { id: string; title: string; category: string; media: string; url?: string }[];
};

function readTools(): Tool[] {
  const readOnly = { readOnlyHint: true };
  return [
    {
      name: "get_resume",
      title: "Get resume",
      description: "Michael C. Hurley's resume in JSON Resume format (same as /resume.json).",
      inputSchema: { type: "object", properties: {} },
      annotations: readOnly,
      execute: () => fetchText("/resume.json"),
    },
    {
      name: "list_portfolio",
      title: "List portfolio",
      description: "Portfolio pieces (sites, interfaces, marks) with media and live links.",
      inputSchema: {
        type: "object",
        properties: { category: { type: "string", enum: ["sites", "interfaces", "marks"] } },
      },
      annotations: readOnly,
      execute: async ({ category }) => {
        const data = await fetchJson<PortfolioIndex>("/portfolio.json");
        const items = category ? data.items.filter((i) => i.category === category) : data.items;
        return json({ items });
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
          limit: { type: "number", description: "Maximum posts to return" },
        },
      },
      annotations: readOnly,
      execute: async ({ tag, limit }) => {
        const data = await fetchJson<BlogIndex>("/blog.json");
        const posts = data.posts.filter((p) => !tag || p.tags.includes(String(tag)));
        return json({ posts: typeof limit === "number" ? posts.slice(0, limit) : posts });
      },
    },
    {
      name: "get_blog_post",
      title: "Get blog post",
      description: "Full Markdown of one blog post by slug.",
      inputSchema: {
        type: "object",
        properties: { slug: { type: "string" } },
        required: ["slug"],
      },
      annotations: readOnly,
      execute: ({ slug }) => fetchText(`/blog/${encodeURIComponent(str(slug))}.md`),
    },
    {
      name: "get_page_markdown",
      title: "Get page as Markdown",
      description: 'Markdown for any page on this site, e.g. "/", "/portfolio", "/blog/<slug>".',
      inputSchema: {
        type: "object",
        properties: { path: { type: "string" } },
        required: ["path"],
      },
      annotations: readOnly,
      execute: ({ path }) => {
        const clean = new URL(str(path) || "/", window.location.origin).pathname;
        return fetchText(clean.endsWith(".md") ? clean : markdownPath(clean));
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
      annotations: readOnly,
      execute: async ({ query }) => {
        const q = str(query).toLowerCase().trim();
        if (!q) throw new Error("query is required");
        const [resume, blog, portfolio] = await Promise.all([
          fetchText("/resume.md"),
          fetchJson<BlogIndex>("/blog.json"),
          fetchJson<PortfolioIndex>("/portfolio.json"),
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
              url: "/",
              markdown: "/resume.md",
              snippet: line.trim(),
            });
          }
        }
        for (const p of blog.posts) {
          const hay = `${p.title} ${p.description} ${p.tags.join(" ")}`.toLowerCase();
          if (hay.includes(q)) {
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
              url: i.url ?? "/portfolio",
              snippet: i.category,
            });
          }
        }
        return json({ query: q, results: results.slice(0, 25) });
      },
    },
  ];
}

type CreateBooking = Parameters<typeof submitBooking>[1];

function bookingTools(createBooking: CreateBooking): Tool[] {
  return [
    {
      name: "get_booking_options",
      title: "Get booking options",
      description:
        "How to schedule a call with Michael: meeting types, duration, time zone, hours, and the fields a booking needs. Step 1 of get_booking_options -> get_availability -> book_meeting.",
      inputSchema: { type: "object", properties: {} },
      annotations: { readOnlyHint: true },
      execute: async () =>
        json({
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
          optional: ["meeting_type", "phone", "notes", "timezone"],
          confirmation:
            "The visitor gets a confirmation email with a calendar invite; Michael is notified.",
          limits: "5 booking requests per hour per IP.",
          booking_page: "https://www.michaelchurley.com/book",
        }),
    },
    {
      name: "get_availability",
      title: "Get availability",
      description:
        "Open 30-minute slots between two dates (inclusive, max 62 days). Pass slot_start from a result to book_meeting.",
      inputSchema: {
        type: "object",
        properties: {
          date_from: { type: "string", description: "YYYY-MM-DD (default: today)" },
          date_to: { type: "string", description: "YYYY-MM-DD (default: date_from + 7 days)" },
          timezone: {
            type: "string",
            description: "IANA zone for the 'local' labels, e.g. America/Chicago",
          },
          meeting_type: { type: "string", enum: [MEETING_TYPE] },
        },
      },
      annotations: { readOnlyHint: true },
      execute: async ({ date_from, date_to, timezone }) => {
        const tz = str(timezone) || BOOKING_TIMEZONE;
        if (!isValidTimeZone(tz)) throw new Error(`Unknown timezone: ${tz}`);
        const from = str(date_from) || zonedParts(new Date(), BOOKING_TIMEZONE).date;
        const toDefault = new Date(`${from}T12:00:00Z`);
        toDefault.setUTCDate(toDefault.getUTCDate() + 7);
        const to = str(date_to) || toDefault.toISOString().slice(0, 10);
        if (!/^\d{4}-\d{2}-\d{2}$/.test(from) || !/^\d{4}-\d{2}-\d{2}$/.test(to)) {
          throw new Error("date_from and date_to must be YYYY-MM-DD");
        }
        const days = availableSlots(from, to).map((d) => ({
          date: d.date,
          slots: d.slots.map((s) => slotView(d.date, s, tz)),
        }));
        return json({
          meeting_type: MEETING_TYPE,
          duration_minutes: BOOKING_DURATION_MINUTES,
          timezone: tz,
          days,
        });
      },
    },
    {
      name: "book_meeting",
      title: "Book a meeting",
      description:
        "Books a 30-minute call with Michael for an open slot from get_availability. Uses the same path as the /book form: saves the booking and emails a confirmation with a calendar invite to the visitor. Set dry_run to validate without booking.",
      inputSchema: {
        type: "object",
        properties: {
          slot_start: { type: "string", description: "ISO 8601 start time from get_availability" },
          name: { type: "string" },
          email: { type: "string" },
          phone: { type: "string" },
          notes: { type: "string" },
          timezone: {
            type: "string",
            description: "Visitor's IANA zone, used for the confirmation text",
          },
          meeting_type: { type: "string", enum: [MEETING_TYPE] },
          dry_run: { type: "boolean", description: "Validate only; nothing is booked or emailed" },
        },
        required: ["slot_start", "name", "email"],
      },
      annotations: { readOnlyHint: false },
      execute: async (args) => {
        const tz = str(args.timezone) || BOOKING_TIMEZONE;
        if (!isValidTimeZone(tz)) throw new Error(`Unknown timezone: ${tz}`);
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
            "That slot is not available. Call get_availability and pick a slot_start from it.",
          );
        }
        const request = {
          name: str(args.name),
          email: str(args.email),
          phone: str(args.phone),
          message: str(args.notes),
          date: eastern.date,
          timeSlot,
        };
        const invalid = validateBookingRequest(request);
        if (invalid) throw new Error(invalid);
        const summary = {
          meeting_type: MEETING_TYPE,
          duration_minutes: BOOKING_DURATION_MINUTES,
          ...slotView(eastern.date, timeSlot, tz),
          name: request.name.trim(),
          email: request.email.trim(),
        };
        if (args.dry_run === true)
          return json({ status: "valid", dry_run: true, booking: summary });
        await submitBooking(request, createBooking);
        return json({
          status: "confirmed",
          booking: summary,
          message: `Booked. A confirmation email with a calendar invite is on its way to ${summary.email}.`,
        });
      },
    },
  ];
}

/** Registers this site's WebMCP tools when the browser supports WebMCP; does nothing otherwise. */
export function WebMcpTools() {
  const createBooking = useMutation(api.bookings.create);
  const createRef = useRef(createBooking);
  createRef.current = createBooking;

  useEffect(() => {
    const ctx =
      (document as unknown as { modelContext?: ModelContextLike }).modelContext ??
      (navigator as unknown as { modelContext?: ModelContextLike }).modelContext;
    if (!ctx || typeof ctx.registerTool !== "function") return;

    const controller = new AbortController();
    const handles: unknown[] = [];
    const tools = [...readTools(), ...bookingTools((booking) => createRef.current(booking))];
    for (const tool of tools) {
      try {
        const handle = ctx.registerTool(tool, { signal: controller.signal });
        handles.push(handle);
        if (handle instanceof Promise) handle.catch(() => undefined);
      } catch {
        // A tool with the same name may already be registered; skip it.
      }
    }
    return () => {
      controller.abort();
      for (const handle of handles) {
        const unregister = (handle as { unregister?: () => void } | undefined)?.unregister;
        if (typeof unregister === "function") unregister.call(handle);
      }
    };
  }, []);

  return null;
}
