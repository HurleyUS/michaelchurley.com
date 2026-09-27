import { serverCard } from "@/lib/mcp-server";

/** MCP discovery at /.well-known/mcp.json (same Server Card). */
export const dynamic = "force-static";

export function GET() {
  return Response.json(serverCard(), { headers: { "Access-Control-Allow-Origin": "*" } });
}
