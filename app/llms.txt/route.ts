import { getLlmsPosts, llmsHeader } from "@/lib/llms";
import { SITE_URL } from "@/lib/site-profile";

/** llms.txt: a Markdown map of the site for AI answer engines and agents. */
export const revalidate = 3600;

export async function GET() {
  const posts = await getLlmsPosts();
  const blog = posts
    .map((post) => `- [${post.title}](${SITE_URL}/blog/${post.slug}): ${post.excerpt}`)
    .join("\n");
  const body = `${llmsHeader()}\n## Blog posts\n\n${blog}\n\n## Optional\n\n- [Full text of all posts](${SITE_URL}/llms-full.txt)\n`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
