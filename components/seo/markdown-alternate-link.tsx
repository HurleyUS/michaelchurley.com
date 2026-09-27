"use client";

import { usePathname } from "next/navigation";
import { markdownPath } from "@/lib/markdown-path";

/** <link rel="alternate" type="text/markdown"> for the current page (React hoists it into <head>). */
export function MarkdownAlternateLink() {
  const pathname = usePathname() ?? "/";
  return <link rel="alternate" type="text/markdown" href={markdownPath(pathname)} />;
}
