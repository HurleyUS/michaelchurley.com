import { pageMarkdown } from "@/lib/page-markdown";
import { SITE_URL } from "@/lib/site-profile";

/**
 * Markdown version of any page. proxy.ts rewrites "/<path>.md" (and Accept: text/markdown
 * requests) here; "/index.md" maps to the home page. The HTML page stays canonical.
 */
export const revalidate = 3600;

export async function GET(_request: Request, { params }: { params: Promise<{ path?: string[] }> }) {
  const { path = [] } = await params;
  const segments = path.map((segment) => decodeURIComponent(segment));
  const body = await pageMarkdown(segments);
  const headers = {
    "Content-Type": "text/markdown; charset=utf-8",
    Link: `<${SITE_URL}/${segments.join("/")}>; rel="canonical"`,
  };
  if (body === null) {
    return new Response(
      "# Not found\n\nNo Markdown version exists for this path. See /agents.md.\n",
      {
        status: 404,
        headers: { "Content-Type": headers["Content-Type"] },
      },
    );
  }
  return new Response(body, { headers });
}
