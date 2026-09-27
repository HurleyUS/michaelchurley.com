import { serverCard } from "@/lib/mcp-server";

/** MCP Server Card at the reserved "<endpoint>/server-card" location. */
export const dynamic = "force-static";

export function GET() {
  return Response.json(serverCard(), { headers: { "Access-Control-Allow-Origin": "*" } });
}
