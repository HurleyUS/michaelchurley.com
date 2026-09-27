import { SITE_URL } from "@/lib/site-profile";

/** Content for /aeo and /aeo.md: every machine-readable surface on this site and why it exists. */
export type Surface = { name: string; href: string; what: string; why: string };

export const AEO_INTRO =
  "This site is built to be read correctly by search engines, AI answer engines, and browsing agents, not only by people. Every surface below is live and generated from the same source data as the human pages, so the machine versions cannot drift from what visitors see.";

export const AEO_GROUPS: { title: string; id: string; surfaces: Surface[] }[] = [
  {
    title: "Crawler access and discovery",
    id: "crawlers",
    surfaces: [
      {
        name: "robots.txt with Content-Signal",
        href: "/robots.txt",
        what: "Allows search and answer-engine crawlers (OAI-SearchBot, ChatGPT-User, GPTBot, PerplexityBot, ClaudeBot, Google-Extended, and others) and user-triggered agents; keeps private paths out; blocks CCBot.",
        why: "Retrieval bots have to be allowed before a page can be cited. Content-Signal (search=yes, ai-input=yes, ai-train=no) separates being cited from being used for training.",
      },
      {
        name: "sitemap.xml",
        href: "/sitemap.xml",
        what: "Every public page and post with a lastmod taken from the content itself.",
        why: "Accurate lastmod tells crawlers what changed so fresh content is recrawled first.",
      },
      {
        name: "IndexNow key",
        href: "/indexnow-key.txt",
        what: "Key file for IndexNow, plus a script that pings changed URLs after a deploy.",
        why: "Bing and other IndexNow engines feed several AI answer products; pinging shortens the time to index.",
      },
      {
        name: "Canonical URLs",
        href: "/",
        what: "Every HTML page declares its own canonical URL.",
        why: "One URL per piece of content keeps ranking and citation signals from splitting across duplicates.",
      },
    ],
  },
  {
    title: "Content for language models",
    id: "llm-content",
    surfaces: [
      {
        name: "llms.txt",
        href: "/llms.txt",
        what: "The resume in llms.txt format: H1, a quotable summary, the resume sections, and links to every machine endpoint.",
        why: "A short, curated entry point a model can read in one pass to answer who Michael is and what he does.",
      },
      {
        name: "llms-full.txt",
        href: "/llms-full.txt",
        what: "The whole site as one Markdown file: resume, every page, the portfolio, and every published post.",
        why: "Lets an agent load all of the context at once instead of crawling page by page.",
      },
      {
        name: "Markdown for every page",
        href: "/index.md",
        what: 'Append .md to any path (/blog.md, /portfolio.md, /blog/<slug>.md), or request any page with Accept: text/markdown. Pages advertise it with a Link header and <link rel="alternate" type="text/markdown">, and the footer links to it.',
        why: "Markdown uses far fewer tokens than rendered HTML and has no layout noise, so agents quote the content, not the chrome.",
      },
      {
        name: "Answer-first home page",
        href: "/#who-is-michael-c-hurley",
        what: 'A "Who is Michael C. Hurley?" section near the top with a self-contained summary and stable heading ids.',
        why: "Answer engines lift short, self-contained passages. Stable ids make the passage linkable.",
      },
    ],
  },
  {
    title: "Structured data",
    id: "structured-data",
    surfaces: [
      {
        name: "JSON-LD",
        href: "/",
        what: "Person (sameAs, knowsAbout, hasOccupation, alumniOf), WebSite, and Organization site-wide; ProfilePage on the home page; BlogPosting and BreadcrumbList on posts; CollectionPage with CreativeWork and SoftwareSourceCode items on the portfolio; FAQPage on this page.",
        why: "Entity markup states the facts (who, where, what, which profiles are the same person) so engines do not have to infer them.",
      },
      {
        name: "resume.json",
        href: "/resume.json",
        what: "The resume in the JSON Resume schema.",
        why: "A standard, typed format that resume tools and agents already parse.",
      },
      {
        name: "portfolio.json and blog.json",
        href: "/blog.json",
        what: "Portfolio pieces and blog posts as JSON, each post with a link to its Markdown.",
        why: "Lists an agent can filter without scraping. See also /portfolio.json.",
      },
      {
        name: "RSS and JSON Feed",
        href: "/feed.xml",
        what: "The blog as RSS 2.0 (/feed.xml) and JSON Feed 1.1 (/feed.json).",
        why: "Feeds are still how aggregators and many agents notice new posts.",
      },
      {
        name: "OpenAPI",
        href: "/openapi.json",
        what: "OpenAPI 3.1 description of the JSON endpoints, the Markdown routes, the booking API, and the MCP endpoint.",
        why: "Agents and tool builders can generate a client instead of guessing request shapes.",
      },
    ],
  },
  {
    title: "Tools for agents",
    id: "agent-tools",
    surfaces: [
      {
        name: "agents.md",
        href: "/agents.md",
        what: "A usage guide for AI agents: every endpoint, the .md convention, crawler policy, the MCP and WebMCP tools with their inputs and outputs, and the booking flow.",
        why: "One document that tells an agent exactly how to use the site. The footer on every page points to it.",
      },
      {
        name: "Remote MCP server",
        href: "/mcp/server-card",
        what: "A Model Context Protocol server at /mcp (Streamable HTTP) with tools for the resume, portfolio, blog, page Markdown, search, and booking. Discovery via /mcp/server-card, /.well-known/mcp/server-card.json, /.well-known/mcp.json, and /.well-known/ai-catalog.json.",
        why: "Agents that speak MCP can use the site as a tool server without a browser.",
      },
      {
        name: "WebMCP",
        href: "/agents.md",
        what: "The same tools registered in the browser through the WebMCP API (document.modelContext) when the browser supports it, sharing one implementation with the MCP server.",
        why: "Browser agents can call typed tools instead of clicking through the UI.",
      },
      {
        name: "Agent booking",
        href: "/book",
        what: "get_booking_options, get_availability, and book_meeting use the same rules, validation, rate limit, and confirmation emails as the /book form.",
        why: "An agent acting for a recruiter can schedule a call end to end.",
      },
    ],
  },
];

export const AEO_FAQ: { question: string; answer: string }[] = [
  {
    question: "How can an AI agent read this site?",
    answer: `Start with ${SITE_URL}/agents.md. For content, append .md to any page URL or send Accept: text/markdown. For everything at once, use ${SITE_URL}/llms-full.txt.`,
  },
  {
    question: "Can an agent book a call with Michael?",
    answer:
      "Yes. Use the MCP server at /mcp or the WebMCP tools: get_booking_options, then get_availability, then book_meeting with a slot_start, name, and email. The visitor gets a confirmation email with a calendar invite.",
  },
  {
    question: "Is the content allowed in AI answers?",
    answer:
      "Yes for search and answers (Content-Signal: search=yes, ai-input=yes). Training use is opted out (ai-train=no), and CCBot is blocked.",
  },
  {
    question: "Why does the site publish the same content in several formats?",
    answer:
      "Each format fits a different reader: HTML for people, Markdown for language models, JSON and JSON-LD for software, and MCP or WebMCP tools for agents. All of them are generated from the same source data.",
  },
];
