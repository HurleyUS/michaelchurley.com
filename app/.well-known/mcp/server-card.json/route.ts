import { serverCard } from "@/lib/mcp-server";

/** MCP Server Card at the widely deployed /.well-known/mcp/server-card.json location. */
export const dynamic = "force-static";

export function GET() {
  return Response.json(serverCard(), { headers: { "Access-Control-Allow-Origin": "*" } });
}
