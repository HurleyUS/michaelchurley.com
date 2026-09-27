import { getLlmsPosts, llmsHeader } from "@/lib/llms";
import { SITE_URL } from "@/lib/site-profile";

/** llms-full.txt: llms.txt header plus the full Markdown of every published post. */
export const revalidate = 3600;

export async function GET() {
  const posts = await getLlmsPosts();
  const full = posts
    .map((post) => {
      const date = post.publishedAt ? new Date(post.publishedAt).toISOString().slice(0, 10) : "";
      return `---\n\nSource: ${SITE_URL}/blog/${post.slug}\nPublished: ${date}\n\n${post.content.trim()}\n`;
    })
    .join("\n");
  return new Response(`${llmsHeader()}\n## Posts\n\n${full}`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
