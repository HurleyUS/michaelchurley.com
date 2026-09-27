import { clientIp } from "@/lib/booking-server";
import { handleMcp } from "@/lib/mcp-server";

/** Remote MCP server (Streamable HTTP, stateless, JSON responses). See /agents.md. */
export const dynamic = "force-dynamic";

const ALLOWED_ORIGINS = [
  /^https:\/\/(www\.)?michaelchurley\.com$/,
  /^http:\/\/localhost(:\d+)?$/,
  /^http:\/\/127\.0\.0\.1(:\d+)?$/,
];

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin && !ALLOWED_ORIGINS.some((re) => re.test(origin))) {
    return Response.json(
      { jsonrpc: "2.0", id: null, error: { code: -32000, message: "Origin not allowed" } },
      { status: 403 },
    );
  }
  let message: unknown;
  try {
    message = await request.json();
  } catch {
    return Response.json(
      { jsonrpc: "2.0", id: null, error: { code: -32700, message: "Parse error" } },
      { status: 400 },
    );
  }
  const reply = await handleMcp(message, request.headers, clientIp(request.headers));
  if (reply.body === undefined) return new Response(null, { status: reply.status });
  return Response.json(reply.body, { status: reply.status });
}

/** No server-initiated stream: this server only answers POSTs. */
export function GET() {
  return new Response(
    "This MCP endpoint accepts JSON-RPC over POST (Streamable HTTP). See /agents.md.\n",
    {
      status: 405,
      headers: { Allow: "POST", "Content-Type": "text/plain; charset=utf-8" },
    },
  );
}

export function DELETE() {
  return new Response(null, { status: 405, headers: { Allow: "POST" } });
}
