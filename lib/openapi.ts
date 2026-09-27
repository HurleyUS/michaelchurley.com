import { PROFILE, SITE_URL } from "@/lib/site-profile";

const text = (type: string, description: string) => ({
  description,
  content: { [type]: { schema: { type: "string" } } },
});
const json = (description: string, schema: object = { type: "object" }) => ({
  description,
  content: { "application/json": { schema } },
});
const get = (operationId: string, summary: string, response: object) => ({
  get: { operationId, summary, responses: { "200": response } },
});

/** OpenAPI 3.1 document for /openapi.json. */
export function openApiDocument() {
  return {
    openapi: "3.1.0",
    info: {
      title: `${PROFILE.name} site API`,
      version: "1.0.0",
      description: `Read-only site data plus booking for ${SITE_URL}. Agent guide: ${SITE_URL}/agents.md. The same operations are exposed as MCP tools at ${SITE_URL}/mcp.`,
      contact: { name: PROFILE.name, email: PROFILE.email, url: SITE_URL },
    },
    servers: [{ url: SITE_URL }],
    paths: {
      "/resume.json": get(
        "getResume",
        "Resume in JSON Resume v1.0.0 format",
        json("JSON Resume", {
          $ref: "https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json",
        }),
      ),
      "/portfolio.json": get(
        "listPortfolio",
        "Portfolio pieces",
        json("Portfolio", { $ref: "#/components/schemas/Portfolio" }),
      ),
      "/blog.json": get(
        "listBlogPosts",
        "Published blog posts, newest first",
        json("Blog index", { $ref: "#/components/schemas/BlogIndex" }),
      ),
      "/feed.json": get("blogJsonFeed", "Blog as JSON Feed 1.1", {
        description: "JSON Feed",
        content: { "application/feed+json": { schema: { type: "object" } } },
      }),
      "/feed.xml": get("blogRss", "Blog as RSS 2.0", text("application/rss+xml", "RSS feed")),
      "/llms.txt": get("getLlmsTxt", "Resume in llms.txt format", text("text/plain", "llms.txt")),
      "/llms-full.txt": get(
        "getLlmsFullTxt",
        "Whole site as Markdown",
        text("text/plain", "Full site Markdown"),
      ),
      "/agents.md": get(
        "getAgentGuide",
        "Usage guide for AI agents",
        text("text/markdown", "Agent guide"),
      ),
      "/{path}.md": {
        get: {
          operationId: "getPageMarkdown",
          summary: "Markdown version of any page (use index.md for the home page)",
          parameters: [
            {
              name: "path",
              in: "path",
              required: true,
              schema: { type: "string" },
              example: "blog",
            },
          ],
          responses: {
            "200": text("text/markdown", "Page as Markdown"),
            "404": text("text/markdown", "No such page"),
          },
        },
      },
      "/api/booking": {
        post: {
          operationId: "sendBookingConfirmation",
          summary:
            "Send booking confirmation emails (second step of the /book widget, after the booking is stored)",
          description:
            "Rate limited to 5 requests per hour per IP. Agents should prefer the book_meeting MCP or WebMCP tool, which stores the booking and sends the emails in one call.",
          requestBody: {
            required: true,
            content: {
              "application/json": { schema: { $ref: "#/components/schemas/BookingRequest" } },
            },
          },
          responses: {
            "200": json("Emails sent", {
              type: "object",
              properties: { success: { type: "boolean" } },
            }),
            "400": json("Missing required fields", { $ref: "#/components/schemas/Error" }),
            "429": json("Rate limited", { $ref: "#/components/schemas/Error" }),
            "503": json("Email service not configured", { $ref: "#/components/schemas/Error" }),
          },
        },
      },
      "/mcp": {
        post: {
          operationId: "mcp",
          summary: "Remote MCP server (Streamable HTTP, JSON-RPC 2.0)",
          requestBody: {
            required: true,
            content: { "application/json": { schema: { type: "object" } } },
          },
          responses: {
            "200": json("JSON-RPC response"),
            "202": { description: "Notification accepted" },
          },
        },
      },
    },
    components: {
      schemas: {
        Portfolio: {
          type: "object",
          properties: {
            url: { type: "string", format: "uri" },
            markdown: { type: "string", format: "uri" },
            items: {
              type: "array",
              items: {
                type: "object",
                required: ["id", "title", "category", "media"],
                properties: {
                  id: { type: "string" },
                  title: { type: "string" },
                  category: { type: "string", enum: ["sites", "interfaces", "marks"] },
                  media: { type: "string", format: "uri" },
                  url: { type: "string", format: "uri" },
                },
              },
            },
          },
        },
        BlogIndex: {
          type: "object",
          properties: {
            url: { type: "string", format: "uri" },
            markdown: { type: "string", format: "uri" },
            count: { type: "integer" },
            posts: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  title: { type: "string" },
                  slug: { type: "string" },
                  url: { type: "string", format: "uri" },
                  markdown: { type: "string", format: "uri" },
                  date: { type: ["string", "null"], format: "date" },
                  description: { type: "string" },
                  tags: { type: "array", items: { type: "string" } },
                },
              },
            },
          },
        },
        BookingRequest: {
          type: "object",
          required: ["name", "email", "date", "timeSlot"],
          properties: {
            name: { type: "string" },
            email: { type: "string", format: "email" },
            phone: { type: "string" },
            message: { type: "string" },
            date: { type: "string", format: "date", description: "YYYY-MM-DD, Eastern Time" },
            timeSlot: {
              type: "string",
              pattern: "^\\d{2}:\\d{2}$",
              description: "HH:MM, Eastern Time, 07:30-20:30 on the half hour",
            },
          },
        },
        Error: { type: "object", properties: { error: { type: "string" } } },
      },
    },
  };
}
