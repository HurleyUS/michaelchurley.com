"use client";

import { useMutation } from "convex/react";
import { useEffect, useRef } from "react";
import { api } from "@/convex/_generated/api";
import { type AgentBackend, type AgentTool, createAgentTools } from "@/lib/agent-tools";
import { submitBooking } from "@/lib/booking";
import { markdownPath } from "@/lib/markdown-path";
import type { BlogIndex, PortfolioIndex } from "@/lib/site-json";

type WebMcpTool = Omit<AgentTool, "execute"> & {
  execute: (args: Record<string, unknown>) => Promise<string>;
};
type ModelContextLike = {
  registerTool: (tool: WebMcpTool, options?: { signal?: AbortSignal }) => unknown;
};

async function fetchText(path: string) {
  const res = await fetch(path);
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`${path} returned ${res.status}`);
  return res.text();
}

async function fetchJson<T>(path: string): Promise<T> {
  const text = await fetchText(path);
  if (text === null) throw new Error(`${path} not found`);
  return JSON.parse(text) as T;
}

/** Browser backend: reads the site's own endpoints; books through the /book widget path. */
function browserBackend(book: AgentBackend["book"]): AgentBackend {
  return {
    resume: () => fetchJson("/resume.json"),
    resumeMarkdown: async () => (await fetchText("/resume.md")) ?? "",
    portfolio: () => fetchJson<PortfolioIndex>("/portfolio.json"),
    blog: () => fetchJson<BlogIndex>("/blog.json"),
    pageMarkdown: (path) => fetchText(markdownPath(path)),
    book,
  };
}

/** WebMCP tool results are strings: Markdown as-is, everything else as JSON text. */
function toWebMcp(tool: AgentTool): WebMcpTool {
  return {
    ...tool,
    annotations: { readOnlyHint: tool.annotations.readOnlyHint },
    execute: async (args) => {
      const result = await tool.execute(args ?? {});
      return typeof result === "string" ? result : JSON.stringify(result, null, 2);
    },
  };
}

/** Registers this site's WebMCP tools when the browser supports WebMCP; does nothing otherwise. */
export function WebMcpTools() {
  const createBooking = useMutation(api.bookings.create);
  const createRef = useRef(createBooking);
  createRef.current = createBooking;

  useEffect(() => {
    const ctx =
      (document as unknown as { modelContext?: ModelContextLike }).modelContext ??
      (navigator as unknown as { modelContext?: ModelContextLike }).modelContext;
    if (!ctx || typeof ctx.registerTool !== "function") return;

    const backend = browserBackend(async (request) => {
      await submitBooking(request, (booking) => createRef.current(booking));
    });
    const controller = new AbortController();
    const handles: unknown[] = [];
    for (const tool of createAgentTools(backend).map(toWebMcp)) {
      try {
        const handle = ctx.registerTool(tool, { signal: controller.signal });
        handles.push(handle);
        if (handle instanceof Promise) handle.catch(() => undefined);
      } catch {
        // A tool with the same name may already be registered; skip it.
      }
    }
    return () => {
      controller.abort();
      for (const handle of handles) {
        const unregister = (handle as { unregister?: () => void } | undefined)?.unregister;
        if (typeof unregister === "function") unregister.call(handle);
      }
    };
  }, []);

  return null;
}
