import { type AgentTool, createAgentTools } from "@/lib/agent-tools";
import { serverBackend } from "@/lib/agent-backend-server";
import { PROFILE, SITE_URL } from "@/lib/site-profile";

/**
 * Minimal stateless MCP server (Streamable HTTP, JSON responses) exposing the shared agent tools.
 * Speaks the 2026-07-28 revision (per-request _meta, server/discover) and answers the legacy
 * initialize handshake for 2025-03-26 through 2025-11-25 clients.
 */
export const MODERN_VERSION = "2026-07-28";
export const LEGACY_VERSIONS = ["2025-11-25", "2025-06-18", "2025-03-26"];
export const SUPPORTED_VERSIONS = [MODERN_VERSION, ...LEGACY_VERSIONS];
export const SERVER_INFO = {
  name: "michaelchurley.com",
  title: "Michael C. Hurley",
  version: "1.0.0",
};
export const INSTRUCTIONS = `Tools for ${PROFILE.name}'s site: resume, portfolio, blog, page Markdown, search, and scheduling a 30-minute call (get_booking_options -> get_availability -> book_meeting). Guide: ${SITE_URL}/agents.md`;

type JsonRpcRequest = {
  jsonrpc: "2.0";
  id?: string | number | null;
  method: string;
  params?: Record<string, unknown> & { _meta?: Record<string, unknown> };
};

export type McpReply = { status: number; body?: unknown };

const rpcError = (id: JsonRpcRequest["id"], code: number, message: string, data?: unknown) => ({
  jsonrpc: "2.0" as const,
  id: id ?? null,
  error: { code, message, ...(data === undefined ? {} : { data }) },
});

function toolDescriptor(tool: AgentTool) {
  return {
    name: tool.name,
    title: tool.title,
    description: tool.description,
    inputSchema: tool.inputSchema,
    annotations: { title: tool.title, ...tool.annotations },
  };
}

async function callTool(tools: AgentTool[], params: JsonRpcRequest["params"]) {
  const name = typeof params?.name === "string" ? params.name : "";
  const tool = tools.find((t) => t.name === name);
  if (!tool) return null;
  try {
    const args = (params?.arguments ?? {}) as Record<string, unknown>;
    const result = await tool.execute(args);
    if (typeof result === "string") {
      return { content: [{ type: "text", text: result }], isError: false };
    }
    return {
      content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
      structuredContent: result,
      isError: false,
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Tool failed";
    return { content: [{ type: "text", text: message }], isError: true };
  }
}

function decodeHeader(value: string | null) {
  const match = value?.match(/^=\?base64\?(.*)\?=$/);
  return match?.[1] ? Buffer.from(match[1], "base64").toString("utf8") : value;
}

/** 2026-07-28 header/body validation: MCP-Protocol-Version, Mcp-Method, Mcp-Name. */
function headerMismatch(req: JsonRpcRequest, headers: Headers, bodyVersion: unknown) {
  const version = headers.get("mcp-protocol-version");
  if (!version) return "MCP-Protocol-Version header is required";
  if (typeof bodyVersion === "string" && bodyVersion !== version) {
    return "MCP-Protocol-Version does not match _meta protocolVersion";
  }
  const method = headers.get("mcp-method");
  if (method !== req.method) return "Mcp-Method header is missing or does not match method";
  if (req.method === "tools/call") {
    const name = decodeHeader(headers.get("mcp-name"));
    if (name !== req.params?.name)
      return "Mcp-Name header is missing or does not match params.name";
  }
  return null;
}

/** Handles one JSON-RPC message posted to /mcp. */
export async function handleMcp(message: unknown, headers: Headers, ip: string): Promise<McpReply> {
  const headerVersion = headers.get("mcp-protocol-version");
  if (!message || typeof message !== "object" || Array.isArray(message)) {
    return {
      status: 400,
      body: rpcError(null, -32600, "Invalid Request: send one JSON-RPC message"),
    };
  }
  const req = message as JsonRpcRequest;
  if (req.jsonrpc !== "2.0" || typeof req.method !== "string") {
    return { status: 400, body: rpcError(req.id, -32600, "Invalid Request") };
  }
  const isNotification = req.id === undefined;
  if (isNotification) return { status: 202 };

  const tools = createAgentTools(serverBackend(ip));

  // Legacy handshake (2025-11-25 and earlier).
  if (req.method === "initialize") {
    const requested =
      typeof req.params?.protocolVersion === "string" ? req.params.protocolVersion : "";
    const protocolVersion = LEGACY_VERSIONS.includes(requested) ? requested : LEGACY_VERSIONS[0];
    return {
      status: 200,
      body: {
        jsonrpc: "2.0",
        id: req.id,
        result: {
          protocolVersion,
          capabilities: { tools: { listChanged: false } },
          serverInfo: SERVER_INFO,
          instructions: INSTRUCTIONS,
        },
      },
    };
  }

  const bodyVersion = req.params?._meta?.["io.modelcontextprotocol/protocolVersion"];
  const version = headerVersion ?? (typeof bodyVersion === "string" ? bodyVersion : "2025-03-26");
  if (!SUPPORTED_VERSIONS.includes(version)) {
    return {
      status: 400,
      body: rpcError(req.id, -32022, "Unsupported protocol version", {
        supported: SUPPORTED_VERSIONS,
        requested: version,
      }),
    };
  }
  const modern = version === MODERN_VERSION;
  const mismatch = modern ? headerMismatch(req, headers, bodyVersion) : null;
  if (mismatch)
    return { status: 400, body: rpcError(req.id, -32020, `Header mismatch: ${mismatch}`) };
  const ok = (result: Record<string, unknown>) => ({
    status: 200,
    body: {
      jsonrpc: "2.0",
      id: req.id,
      result: modern ? { resultType: "complete", ...result } : result,
    },
  });

  switch (req.method) {
    case "server/discover":
      return ok({
        supportedVersions: SUPPORTED_VERSIONS,
        capabilities: { tools: {} },
        _meta: { "io.modelcontextprotocol/serverInfo": SERVER_INFO },
        instructions: INSTRUCTIONS,
      });
    case "ping":
      return ok({});
    case "tools/list":
      return ok({ tools: tools.map(toolDescriptor) });
    case "tools/call": {
      const result = await callTool(tools, req.params);
      if (!result) {
        return {
          status: 200,
          body: rpcError(req.id, -32602, `Unknown tool: ${String(req.params?.name)}`),
        };
      }
      return ok(result);
    }
    default:
      return {
        status: modern ? 404 : 200,
        body: rpcError(req.id, -32601, `Method not found: ${req.method}`),
      };
  }
}

/** MCP Server Card (experimental io.modelcontextprotocol/server-card extension). */
export function serverCard() {
  const tools = createAgentTools(serverBackend("card"));
  return {
    name: "com.michaelchurley/site",
    title: SERVER_INFO.title,
    description: INSTRUCTIONS,
    version: SERVER_INFO.version,
    websiteUrl: SITE_URL,
    documentationUrl: `${SITE_URL}/agents.md`,
    serverInfo: SERVER_INFO,
    protocolVersions: SUPPORTED_VERSIONS,
    remotes: [{ type: "streamable-http", url: `${SITE_URL}/mcp` }],
    transport: { type: "streamable-http", url: `${SITE_URL}/mcp` },
    authentication: { required: false },
    capabilities: { tools: { listChanged: false } },
    tools: tools.map(toolDescriptor),
  };
}
