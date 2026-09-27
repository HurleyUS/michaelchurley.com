/** Markdown URL for a site path: "/" -> "/index.md", "/blog/foo" -> "/blog/foo.md". */
export function markdownPath(pathname: string) {
  const clean = pathname.replace(/\/+$/, "");
  return `${clean || "/index"}.md`;
}
