import { pageMarkdown } from "@/lib/page-markdown";

/**
 * Markdown version of any page. proxy.ts rewrites "/<path>.md" here
 * ("/index.md" and "/" map to the home page).
 */
export const revalidate = 3600;

const HEADERS = {
  "Content-Type": "text/markdown; charset=utf-8",
  "X-Robots-Tag": "noindex",
};

export async function GET(_request: Request, { params }: { params: Promise<{ path?: string[] }> }) {
  const { path = [] } = await params;
  const body = await pageMarkdown(path.map((segment) => decodeURIComponent(segment)));
  if (body === null) {
    return new Response(
      "# Not found\n\nNo Markdown version exists for this path. See /agents.md.\n",
      {
        status: 404,
        headers: HEADERS,
      },
    );
  }
  return new Response(body, { headers: HEADERS });
}
