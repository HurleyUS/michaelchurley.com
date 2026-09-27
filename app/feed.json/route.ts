import { getLlmsPosts } from "@/lib/llms";
import { PROFILE, SITE_URL } from "@/lib/site-profile";

/** JSON Feed 1.1 of published blog posts. */
export const revalidate = 3600;

export async function GET() {
  const posts = (await getLlmsPosts()).slice(0, 50);
  return Response.json(
    {
      version: "https://jsonfeed.org/version/1.1",
      title: `${PROFILE.name} · Blog`,
      home_page_url: `${SITE_URL}/blog`,
      feed_url: `${SITE_URL}/feed.json`,
      language: "en-US",
      authors: [{ name: PROFILE.name, url: SITE_URL }],
      items: posts.map((post) => ({
        id: `${SITE_URL}/blog/${post.slug}`,
        url: `${SITE_URL}/blog/${post.slug}`,
        title: post.title,
        summary: post.excerpt,
        content_text: post.content,
        ...(post.publishedAt ? { date_published: new Date(post.publishedAt).toISOString() } : {}),
        tags: post.tags,
        _markdown: `${SITE_URL}/blog/${post.slug}.md`,
      })),
    },
    { headers: { "Content-Type": "application/feed+json; charset=utf-8" } },
  );
}
