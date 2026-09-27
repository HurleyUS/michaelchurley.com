import { fetchQuery } from "convex/nextjs";
import { api } from "@/convex/_generated/api";
import { getStaticPosts } from "@/lib/static-posts";
import { PROFILE, SITE_URL } from "@/lib/site-profile";

type LlmsPost = {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  publishedAt?: number;
};

/** Published posts from Convex plus static posts, newest first, de-duplicated by slug. */
export async function getLlmsPosts(): Promise<LlmsPost[]> {
  const remote = await fetchQuery(api.blog.list, { onlyPublished: true }).catch(() => []);
  const bySlug = new Map<string, LlmsPost>();
  for (const post of [...remote, ...getStaticPosts()]) {
    if (!post.published || bySlug.has(post.slug)) continue;
    bySlug.set(post.slug, post);
  }
  return [...bySlug.values()].sort((a, b) => (b.publishedAt ?? 0) - (a.publishedAt ?? 0));
}

export function llmsHeader() {
  return `# ${PROFILE.name}

> ${PROFILE.name} (also "${PROFILE.alternateName}") builds and optimizes websites for search engines, AI answer engines, and browsing agents. Director at Hustle Launch, a performance marketing and web design agency in the Southeast US. Based in ${PROFILE.locality}, ${PROFILE.region}. Author of "Technical SEO in the Age of Agentic AI."

## Services

- Technical SEO, Answer Engine Optimization (AEO), and Generative Engine Optimization (GEO): crawler and AI-agent access policy, llms.txt, structured data, rendering, information architecture
- Local SEO: Google Business Profile, directory citations, NAP consistency
- Web design and development on Next.js, Convex, Stripe, and Vercel
- AI agent tooling and automation

## Key pages

- [Home](${SITE_URL}/): About Michael and current work
- [Book a call](${PROFILE.bookingUrl}): Schedule time with Michael
- [Portfolio](${SITE_URL}/portfolio): Selected client and product work
- [Blog](${SITE_URL}/blog): Build logs and notes on web development, SEO, and AI agents
- [Nightly](${SITE_URL}/nightly): Public daily stand-up dashboard of what shipped each day
- [Technical SEO Field Guide](${PROFILE.fieldGuideUrl}): 68-page guide plus workbook and toolkit on pages that people and browsing agents can understand and use (free sample available)

## Elsewhere

${PROFILE.sameAs.map((url) => `- ${url}`).join("\n")}
`;
}
