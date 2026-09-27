import { getLlmsPosts, postDate } from "@/lib/llms";
import { SITE_URL } from "@/lib/site-profile";

/** Published blog posts (Convex + static), newest first. */
export const revalidate = 3600;

export async function GET() {
  const posts = await getLlmsPosts();
  return Response.json({
    url: `${SITE_URL}/blog`,
    markdown: `${SITE_URL}/blog.md`,
    count: posts.length,
    posts: posts.map((post) => ({
      title: post.title,
      slug: post.slug,
      url: `${SITE_URL}/blog/${post.slug}`,
      markdown: `${SITE_URL}/blog/${post.slug}.md`,
      date: postDate(post) ?? null,
      description: post.excerpt,
      tags: post.tags,
    })),
  });
}
