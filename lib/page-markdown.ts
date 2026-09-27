import { AEO_FAQ, AEO_GROUPS, AEO_INTRO } from "@/lib/aeo";
import { getLlmsPosts, getSitePost, MACHINE_ENDPOINTS, postDate, type SitePost } from "@/lib/llms";
import { getLatestReport, getMetrics, getReport, listReportDates } from "@/lib/nightly/data";
import type { ReportCard } from "@/lib/nightly/types";
import { CATEGORIES, listPieces } from "@/lib/portfolio/pieces";
import { resumeMarkdown } from "@/lib/resume";
import { PROFILE, SITE_URL } from "@/lib/site-profile";
import { bigThree, plans, stackFeatures, testimonials, trustStats } from "@/lib/vizible";

function source(path: string) {
  return `Source: ${SITE_URL}${path}`;
}

function indexMarkdown() {
  return `${resumeMarkdown()}
## Contact

- Book a 30-minute call: ${PROFILE.bookingUrl}
- Email: ${PROFILE.email}
- Call or text: ${PROFILE.telephoneDisplay}

## More on this site

- [Portfolio](${SITE_URL}/portfolio) ([Markdown](${SITE_URL}/portfolio.md))
- [Blog](${SITE_URL}/blog) ([Markdown](${SITE_URL}/blog.md))
- [Agent usage guide](${SITE_URL}/agents.md)
`;
}

function bookMarkdown() {
  return `# Book a Meeting

${source("/book")}

Schedule a 30-minute call with ${PROFILE.name} to discuss business opportunities, technology projects, or collaboration ideas.

- Booking form: ${PROFILE.bookingUrl}
- Email: [${PROFILE.email}](mailto:${PROFILE.email})
- Call or text: [${PROFILE.telephoneDisplay}](${PROFILE.telephoneHref})
`;
}

function portfolioMarkdown() {
  const pieces = listPieces();
  const sections = CATEGORIES.map((category) => {
    const items = pieces
      .filter((piece) => piece.category === category.id)
      .map((piece) => {
        const live = piece.href ? ` · [Live](${piece.href})` : "";
        return `- **${piece.title}** · [Media](${SITE_URL}${piece.src})${live}`;
      })
      .join("\n");
    return `## ${category.label}\n\n${items}`;
  }).join("\n\n");
  return `# Portfolio\n\n${source("/portfolio")}\n\nSites, interfaces, and marks by ${PROFILE.name}. Machine-readable: ${SITE_URL}/portfolio.json\n\n${sections}\n`;
}

function blogIndexMarkdown(posts: SitePost[]) {
  const items = posts
    .map((post) => {
      const date = postDate(post);
      return `- [${post.title}](${SITE_URL}/blog/${post.slug}.md)${date ? ` (${date})` : ""}: ${post.excerpt}`;
    })
    .join("\n");
  return `# Blog\n\n${source("/blog")}\n\nBuild logs and notes from ${PROFILE.name} on web development, SEO, and AI agents. Machine-readable: ${SITE_URL}/blog.json\n\n${items}\n`;
}

/** A single post as Markdown with a small metadata header. */
function postMarkdown(post: SitePost) {
  const body = post.content.trim();
  const title = body.startsWith("# ") ? "" : `# ${post.title}\n\n`;
  const meta = [
    source(`/blog/${post.slug}`),
    postDate(post) ? `Published: ${postDate(post)}` : "",
    `Author: ${PROFILE.name}`,
    post.tags.length ? `Tags: ${post.tags.join(", ")}` : "",
  ]
    .filter(Boolean)
    .join("  \n");
  return `${title}${meta}\n\n${body}\n`;
}

function omadesignMarkdown() {
  return `# omadesign: your Linux, for making things

${source("/omadesign")}

Native Linux studio for design, paint, and photograph. No Electron. This page embeds the omadesign lander.

- Lander: https://michaelmonetized.github.io/omadesign/
- Source and releases: https://github.com/michaelmonetized/omadesign
- Blog posts: ${SITE_URL}/blog.md
`;
}

function vizibleMarkdown() {
  const stats = trustStats.map((s) => `- ${s.label}: ${s.sub}`).join("\n");
  const cards = bigThree
    .map(
      (c) =>
        `### ${c.num}. ${c.title}\n\n${c.desc}\n\n${c.checks.map((x) => `- ${x}`).join("\n")}\n\n> ${c.quote}`,
    )
    .join("\n\n");
  const stack = stackFeatures.map((f) => `- **${f.name}:** ${f.desc}`).join("\n");
  const quotes = testimonials
    .map((t) => `> ${t.quote}\n>\n> ${[t.name, t.title, t.location].filter(Boolean).join(", ")}`)
    .join("\n\n");
  const pricing = plans
    .map(
      (p) =>
        `### ${p.name}: ${p.tagline} (${p.price}${p.period})\n\n${p.features.map((f) => `- ${f}`).join("\n")}`,
    )
    .join("\n\n");
  return `# A Quiet Revolution in Local Marketing

${source("/vizible")}

Official partnership with Vizible Agency: a Personal CMO, a real-time Business Dashboard, and an All-in-One CRM for local businesses. No contracts.

${stats}

## Three Things That Convinced Me

${cards}

## Everything Else, Handled

${stack}

## What Business Owners Say

${quotes}

## Plans & Pricing

${pricing}

## Get started

Email michael@hurleyus.com or call or text ${PROFILE.telephoneDisplay}.
`;
}

async function nightlyMarkdown() {
  const [metrics, dates, latest] = await Promise.all([
    getMetrics(),
    listReportDates(),
    getLatestReport(),
  ]);
  const last = metrics[metrics.length - 1];
  const archive = dates
    .map((date) => `- [${date}](${SITE_URL}/nightly/report/${date}.md)`)
    .join("\n");
  return `# Nightly · Daily Stand Up

${source("/nightly")}

${PROFILE.name}'s daily stand-up: what shipped, how it landed, inbox signal, and open loops, plus productivity and audience trends.

- Reports: ${dates.length}
- Latest productivity: ${last?.productivity ?? "n/a"}
${latest ? `- Latest report: [${latest.date}](${SITE_URL}/nightly/report/${latest.date}.md)${latest.meta.tldr ? `: ${latest.meta.tldr}` : ""}` : ""}

## Archive

${archive}
`;
}

function cardMarkdown(card: ReportCard) {
  const parts = [`### ${card.title} (${card.kind})`, card.summary];
  if (card.quote) parts.push(`> ${card.quote}`);
  if (card.bullets?.length) parts.push(card.bullets.map((b) => `- ${b}`).join("\n"));
  if (card.metrics) {
    parts.push(
      Object.entries(card.metrics)
        .map(([k, v]) => `- ${k}: ${v}`)
        .join("\n"),
    );
  }
  if (card.when) parts.push(`_${card.when}_`);
  if (card.links?.length) parts.push(card.links.map((l) => `[${l.label}](${l.href})`).join(" · "));
  return parts.join("\n\n");
}

async function nightlyReportMarkdown(date: string) {
  const report = await getReport(date);
  if (!report) return null;
  const section = (title: string, cards: ReportCard[]) =>
    `## ${title}\n\n${cards.length ? cards.map(cardMarkdown).join("\n\n") : "None."}`;
  const loops = report.loops.map((l) => `- **${l.title}:** ${l.detail}`).join("\n") || "None.";
  return `# Daily Stand Up Report · ${date}

${source(`/nightly/report/${date}`)}

${report.meta.tldr ?? ""}

${section("What shipped", report.shipped)}

${section("How it landed", report.landed)}

${section("Inbox", report.inbox)}

## Open loops

${loops}
`;
}

/** Usage guide for AI agents, served at /agents.md. */
function agentsMarkdown() {
  const endpoints = MACHINE_ENDPOINTS.map(([path, desc]) => `| \`${path}\` | ${desc} |`).join("\n");
  return `# Agents: how to use michaelchurley.com

${source("/agents.md")}

This is the personal site of ${PROFILE.name} (${PROFILE.headline}). It holds his resume, portfolio, blog, and a public daily stand-up log. Everything below is read-only and free to use for search, answers, and user-requested tasks. Training use is opted out (see Policy).

## Machine-readable endpoints

| Path | What it returns |
| --- | --- |
${endpoints}
| \`/robots.txt\` | Crawler policy with Content-Signal |
| \`/sitemap.xml\` | Sitemap of public pages with lastmod |
| \`/.well-known/ai-catalog.json\` | AI Catalog pointing to the MCP Server Card |

All \`.md\` and \`.txt\` endpoints return \`text/markdown\` or \`text/plain\` (UTF-8). JSON endpoints return \`application/json\`.

## Markdown for any page

Append \`.md\` to any page path to get that page's content as Markdown, generated from the same source data as the HTML page:

- \`/\` -> \`/index.md\`
- \`/resume.md\` (resume only)
- \`/blog\` -> \`/blog.md\`, \`/blog/<slug>\` -> \`/blog/<slug>.md\`
- \`/portfolio\` -> \`/portfolio.md\`
- \`/book\` -> \`/book.md\`, \`/vizible\` -> \`/vizible.md\`, \`/omadesign\` -> \`/omadesign.md\`
- \`/aeo\` -> \`/aeo.md\`
- \`/nightly\` -> \`/nightly.md\`, \`/nightly/report/<YYYY-MM-DD>\` -> \`/nightly/report/<YYYY-MM-DD>.md\`

Or request any page URL with \`Accept: text/markdown\`. HTML pages advertise their Markdown twin with a \`Link: <...md>; rel="alternate"; type="text/markdown"\` header and a matching \`<link rel="alternate">\` tag. Every page footer also has a "Markdown" link to its \`.md\` version. Unknown paths return 404.

## Remote MCP server

\`POST ${SITE_URL}/mcp\`: a Model Context Protocol server over Streamable HTTP. It is stateless and answers with \`application/json\` (no SSE stream; \`GET /mcp\` returns 405). No authentication.

- Protocol versions: \`2026-07-28\` (per-request \`_meta\`, \`server/discover\`, \`MCP-Protocol-Version\` / \`Mcp-Method\` / \`Mcp-Name\` headers validated) and the legacy \`initialize\` handshake for \`2025-11-25\`, \`2025-06-18\`, and \`2025-03-26\`.
- Methods: \`server/discover\`, \`initialize\`, \`ping\`, \`tools/list\`, \`tools/call\`.
- Results: \`content\` (text) plus \`structuredContent\` for JSON results; tool errors come back with \`isError: true\`.
- Discovery: Server Card at \`/mcp/server-card\` (also \`/.well-known/mcp/server-card.json\` and \`/.well-known/mcp.json\`), AI Catalog at \`/.well-known/ai-catalog.json\`.

Example (legacy handshake, then a call):

\`\`\`bash
curl -s ${SITE_URL}/mcp -H 'Content-Type: application/json' -H 'Accept: application/json, text/event-stream' \\
  -H 'MCP-Protocol-Version: 2025-11-25' \\
  -d '{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"get_booking_options","arguments":{}}}'
\`\`\`

## WebMCP tools

When the browser supports WebMCP, every page registers the same tools with \`document.modelContext.registerTool()\` (falling back to \`navigator.modelContext\` in older previews). Browsers without WebMCP are unaffected. WebMCP results are strings: Markdown, or JSON text.

The MCP server and WebMCP share one implementation (\`lib/agent-tools.ts\`), so names, inputs, and outputs are identical.

### Read-only tools

| Tool | Input | Returns |
| --- | --- | --- |
| \`get_resume\` | none | JSON Resume text (same as \`/resume.json\`) |
| \`list_portfolio\` | \`{ category?: "sites" \\| "interfaces" \\| "marks" }\` | JSON: \`{ items: [{ id, title, category, media, url? }] }\` |
| \`list_blog_posts\` | \`{ tag?: string, limit?: number }\` | JSON: \`{ posts: [{ title, slug, url, markdown, date, description, tags }] }\` |
| \`get_blog_post\` | \`{ slug: string }\` | Markdown of the post |
| \`get_page_markdown\` | \`{ path: string }\` (e.g. "/", "/portfolio") | Markdown of that page |
| \`search_site\` | \`{ query: string }\` | JSON: \`{ query, results: [{ type, title, url, markdown?, snippet }] }\` |
| \`get_booking_options\` | none | JSON: meeting types, duration, host time zone, hours, required fields, limits |
| \`get_availability\` | \`{ date_from?: "YYYY-MM-DD", date_to?: "YYYY-MM-DD", timezone?: IANA zone, meeting_type?: "intro-call" }\` | JSON: \`{ meeting_type, duration_minutes, timezone, days: [{ date, slots: [{ slot_start, eastern, local }] }] }\` |

### Booking tool (writes)

| Tool | Input | Returns |
| --- | --- | --- |
| \`book_meeting\` | \`{ slot_start: ISO 8601 (from get_availability), name: string, email: string, phone?: string, notes?: string, timezone?: IANA zone, meeting_type?: "intro-call", dry_run?: boolean }\` | JSON: \`{ status: "confirmed", booking: { meeting_type, duration_minutes, slot_start, eastern, local, name, email }, message }\`, or \`{ status: "valid", dry_run: true, booking }\` for a dry run |

### Booking flow

1. \`get_booking_options\`: one meeting type today, \`intro-call\` (30 minutes). Host time zone is America/New_York. Slots run Monday to Friday, 07:30 to 20:30 Eastern, every 30 minutes; same-day slots must be at least 30 minutes out.
2. \`get_availability\` with a date range (and the visitor's \`timezone\` for readable \`local\` labels). Up to 62 days per call.
3. \`book_meeting\` with a \`slot_start\` from step 2 plus the visitor's name and email. No extra confirmation step is required; the agent can book directly. The booking goes through the same path as the form on /book: it is saved, Michael is notified, and the visitor receives a confirmation email with a calendar invite. The same validation (name, valid email, open slot) and the same limit (5 booking requests per hour per IP) apply. Use \`dry_run: true\` to validate without booking.

Without WebMCP, send the visitor to ${PROFILE.bookingUrl}: pick a day and time (Eastern), enter name, email, and optional phone, then press Book.

## Policy

- robots.txt allows search engines, answer engines, and user-triggered agents (OAI-SearchBot, ChatGPT-User, GPTBot, PerplexityBot, ClaudeBot, Google-Extended, and others) with \`Content-Signal: search=yes, ai-input=yes, ai-train=no\`.
- CCBot is blocked. Private paths (\`/api/\`, \`/manage/\`, and \`/nightly\`) are disallowed for crawlers.
- Please cite the canonical page URL (without \`.md\`) when quoting.

## Contact or book Michael

- Book a 30-minute call: the booking tools above, or ${PROFILE.bookingUrl}
- Email: ${PROFILE.email}
- Call or text: ${PROFILE.telephoneDisplay}
- LinkedIn: https://www.linkedin.com/in/michaelchurley
- GitHub: https://github.com/michaelmonetized
`;
}

function aeoMarkdown() {
  const groups = AEO_GROUPS.map(
    (g) =>
      `## ${g.title}\n\n${g.surfaces.map((s) => `- **[${s.name}](${SITE_URL}${s.href})**: ${s.what} Why: ${s.why}`).join("\n")}`,
  ).join("\n\n");
  const faq = AEO_FAQ.map((f) => `### ${f.question}\n\n${f.answer}`).join("\n\n");
  return `# How this site is built for AI search and agents\n\n${source("/aeo")}\n\n${AEO_INTRO}\n\n${groups}\n\n## FAQ\n\n${faq}\n`;
}

const STATIC_PAGES: Record<string, () => string> = {
  aeo: aeoMarkdown,
  "": indexMarkdown,
  index: indexMarkdown,
  resume: resumeMarkdown,
  agents: agentsMarkdown,
  book: bookMarkdown,
  portfolio: portfolioMarkdown,
  omadesign: omadesignMarkdown,
  vizible: vizibleMarkdown,
};

/** Resolve a site path (without ".md") to Markdown, or null when there is no such page. */
export async function pageMarkdown(segments: string[]): Promise<string | null> {
  const key = segments.join("/");
  const staticPage = STATIC_PAGES[key];
  if (staticPage) return staticPage();
  if (key === "blog") return blogIndexMarkdown(await getLlmsPosts());
  if (key === "nightly") return nightlyMarkdown();
  if (segments.length === 2 && segments[0] === "blog" && segments[1]) {
    const post = await getSitePost(segments[1]);
    return post ? postMarkdown(post) : null;
  }
  if (
    segments.length === 3 &&
    segments[0] === "nightly" &&
    segments[1] === "report" &&
    segments[2]
  ) {
    return nightlyReportMarkdown(segments[2]);
  }
  return null;
}

/** Whole site as Markdown for /llms-full.txt. */
export async function fullSiteMarkdown() {
  const posts = await getLlmsPosts();
  const pages = [
    resumeMarkdown(),
    bookMarkdown(),
    portfolioMarkdown(),
    vizibleMarkdown(),
    omadesignMarkdown(),
    aeoMarkdown(),
    await nightlyMarkdown(),
    agentsMarkdown(),
    blogIndexMarkdown(posts),
    ...posts.map(postMarkdown),
  ];
  const header = `# ${PROFILE.name}: full site as Markdown\n\n> ${PROFILE.headline}. The resume, every page, the portfolio, and every published blog post on ${SITE_URL}, generated from the site's source data. Short version: ${SITE_URL}/llms.txt. Agent guide: ${SITE_URL}/agents.md\n`;
  return [header, ...pages].join("\n---\n\n");
}
