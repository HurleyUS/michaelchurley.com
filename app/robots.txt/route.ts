import { SITE_URL } from "@/lib/site-profile";

/**
 * robots.txt as a route handler so we can emit a Content-Signal line
 * (MetadataRoute.Robots has no field for it).
 *
 * Search and answer-engine crawlers (and user-triggered agents) are allowed.
 * AI training stays opted out: ai-train=no, and CCBot (Common Crawl) stays blocked,
 * preserving the intent of the Feb 2026 "Block AI crawlers" change.
 */
export const dynamic = "force-static";

const PRIVATE_PATHS = [
  "/api/",
  "/manage/",
  "/private/",
  "/tmp/",
  "/profile/",
  "/billing/",
  "/settings/",
  "/support/",
  "/nightly",
  "/nightly/",
];

const ANSWER_ENGINE_AGENTS = [
  "OAI-SearchBot",
  "ChatGPT-User",
  "GPTBot",
  "PerplexityBot",
  "Perplexity-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "Google-Extended",
  "Applebot-Extended",
];

function group(agents: string[]) {
  return [
    ...agents.map((agent) => `User-agent: ${agent}`),
    "Content-Signal: search=yes, ai-input=yes, ai-train=no",
    "Allow: /",
    ...PRIVATE_PATHS.map((path) => `Disallow: ${path}`),
  ].join("\n");
}

const body = [
  group(["*"]),
  group(ANSWER_ENGINE_AGENTS),
  ["User-agent: CCBot", "Disallow: /"].join("\n"),
  `Host: www.michaelchurley.com\nSitemap: ${SITE_URL}/sitemap.xml`,
].join("\n\n");

export function GET() {
  return new Response(`${body}\n`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
