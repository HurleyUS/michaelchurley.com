import { llmsTxt } from "@/lib/llms";

/** llms.txt: Michael's resume in llms.txt Markdown format, plus links to the site's machine endpoints. */
export const dynamic = "force-static";

export function GET() {
  return new Response(llmsTxt(), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
