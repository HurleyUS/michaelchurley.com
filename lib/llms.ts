import { fetchQuery } from "convex/nextjs";
import { api } from "@/convex/_generated/api";
import { getStaticPostBySlug, getStaticPosts } from "@/lib/static-posts";
import { contactMarkdown, RESUME, resumeSectionsMarkdown } from "@/lib/resume";
import { PROFILE, SITE_URL } from "@/lib/site-profile";

export type SitePost = {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  tags: string[];
  coverImage?: string;
  publishedAt?: number;
  published: boolean;
};

/** Published posts from Convex plus static posts, newest first, de-duplicated by slug. */
export async function getLlmsPosts(): Promise<SitePost[]> {
  const remote = await fetchQuery(api.blog.list, { onlyPublished: true }).catch(() => []);
  const bySlug = new Map<string, SitePost>();
  for (const post of [...remote, ...getStaticPosts()]) {
    if (!post.published || bySlug.has(post.slug)) continue;
    bySlug.set(post.slug, post);
  }
  return [...bySlug.values()].sort((a, b) => (b.publishedAt ?? 0) - (a.publishedAt ?? 0));
}

/** One published post by slug (static first, then Convex), or null. */
export async function getSitePost(slug: string): Promise<SitePost | null> {
  const post =
    getStaticPostBySlug(slug) ?? (await fetchQuery(api.blog.getBySlug, { slug }).catch(() => null));
  return post?.published ? post : null;
}

export function postDate(post: Pick<SitePost, "publishedAt">) {
  return post.publishedAt ? new Date(post.publishedAt).toISOString().slice(0, 10) : undefined;
}

/** Machine-readable endpoints, listed in llms.txt and /agents.md. */
export const MACHINE_ENDPOINTS = [
  ["/llms.txt", "This file: Michael's resume in llms.txt format"],
  [
    "/llms-full.txt",
    "The whole site as Markdown: resume, every page, portfolio, and every blog post",
  ],
  ["/agents.md", "Usage guide for AI agents: endpoints, .md routes, WebMCP tools, contact"],
  ["/resume.json", "Resume in JSON Resume (jsonresume.org) format"],
  ["/portfolio.json", "Portfolio pieces with titles, categories, media, and live links"],
  ["/blog.json", "Blog posts with title, slug, URL, date, description, tags, and Markdown link"],
  ["/resume.md", "Resume as Markdown"],
] as const;

/** llms.txt: the resume in llms.txt Markdown format plus links to the site and its endpoints. */
export function llmsTxt() {
  const endpoints = MACHINE_ENDPOINTS.map(
    ([path, desc]) => `- [${path}](${SITE_URL}${path}): ${desc}`,
  ).join("\n");
  return `# ${PROFILE.name}

> ${RESUME.headline}. ${RESUME.summary}

${contactMarkdown()}

${resumeSectionsMarkdown()}
## Site

- [Home](${SITE_URL}/): Resume and contact
- [Book a call](${PROFILE.bookingUrl}): Schedule a 30-minute call with Michael
- [Portfolio](${SITE_URL}/portfolio): Sites, interfaces, and marks
- [Blog](${SITE_URL}/blog): Build logs and notes on web development, SEO, and AI agents
- [Technical SEO Field Guide](${PROFILE.fieldGuideUrl}): Technical SEO in the Age of Agentic AI (68 pages, workbook, toolkit)

## Machine-readable

${endpoints}
- Markdown for any page: append \`.md\` to its path (for example ${SITE_URL}/index.md, ${SITE_URL}/blog.md, ${SITE_URL}/portfolio.md)

## Optional

- [Full site as Markdown](${SITE_URL}/llms-full.txt)
${PROFILE.sameAs.map((url) => `- [${new URL(url).hostname}](${url})`).join("\n")}
`;
}
