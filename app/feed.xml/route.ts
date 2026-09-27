import { getLlmsPosts } from "@/lib/llms";
import { PROFILE, SITE_URL } from "@/lib/site-profile";

/** RSS 2.0 feed of published blog posts. */
export const revalidate = 3600;

const escapeXml = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export async function GET() {
  const posts = (await getLlmsPosts()).slice(0, 50);
  const items = posts
    .map((post) => {
      const url = `${SITE_URL}/blog/${post.slug}`;
      const date = post.publishedAt
        ? `<pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>`
        : "";
      const tags = post.tags.map((tag) => `<category>${escapeXml(tag)}</category>`).join("");
      return `<item><title>${escapeXml(post.title)}</title><link>${url}</link><guid isPermaLink="true">${url}</guid>${date}<description>${escapeXml(post.excerpt)}</description>${tags}</item>`;
    })
    .join("\n");
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>${escapeXml(PROFILE.name)} · Blog</title>
<link>${SITE_URL}/blog</link>
<atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
<description>Build logs and notes on web development, SEO, and AI agents.</description>
<language>en-us</language>
${items}
</channel>
</rss>
`;
  return new Response(body, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
