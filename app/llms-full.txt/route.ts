import { fullSiteMarkdown } from "@/lib/page-markdown";

/** llms-full.txt: the whole site as Markdown (resume, pages, portfolio, every published post). */
export const revalidate = 3600;

export async function GET() {
  return new Response(await fullSiteMarkdown(), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
