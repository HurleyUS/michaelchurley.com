import { SERVER_INFO } from "@/lib/mcp-server";
import { SITE_URL } from "@/lib/site-profile";

/** AI Catalog: site-level index of agent-facing surfaces, pointing at the MCP Server Card. */
export const dynamic = "force-static";

export function GET() {
  return Response.json(
    {
      name: SERVER_INFO.title,
      url: SITE_URL,
      documentation: `${SITE_URL}/agents.md`,
      mcpServers: [
        {
          name: "com.michaelchurley/site",
          url: `${SITE_URL}/mcp`,
          serverCard: `${SITE_URL}/mcp/server-card`,
          transport: "streamable-http",
        },
      ],
      resources: {
        llms: `${SITE_URL}/llms.txt`,
        llmsFull: `${SITE_URL}/llms-full.txt`,
        openapi: `${SITE_URL}/openapi.json`,
      },
    },
    { headers: { "Access-Control-Allow-Origin": "*" } },
  );
}
