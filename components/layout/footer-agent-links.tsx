"use client";

import { usePathname } from "next/navigation";
import { markdownPath } from "@/lib/markdown-path";

/** Footer links to this page's Markdown version and the agent usage guide. */
export function FooterAgentLinks() {
  const pathname = usePathname() ?? "/";
  return (
    <p className="text-xs text-muted-foreground">
      <a href={markdownPath(pathname)} type="text/markdown" rel="alternate">
        Markdown
      </a>
      {" · "}
      <a href="/agents.md" type="text/markdown">
        Agents: read /agents.md for usage
      </a>
      {" · "}
      <a href="/aeo">How this site is built for AI search</a>
    </p>
  );
}
