import fs from "node:fs";
import path from "node:path";
import type { StaticPost } from "./static-posts";

type CatalogEntry = {
  id: string;
  n: number;
  title: string;
  slug: string;
  tweet: string;
  section: string;
  video: string;
  cover: string;
  prev: string | null;
  next: string | null;
};

const ROOT = path.join(process.cwd(), "content/blog/omadesign-0.5.8");

let cache: StaticPost[] | null = null;

function field(raw: string, key: string) {
  const match = raw.match(new RegExp(`^${key}:\\s*(.*)$`, "m"));
  return match?.[1]?.trim().replace(/^["']|["']$/g, "") ?? "";
}

function tags(raw: string) {
  const value = field(raw, "tags");
  if (!value.startsWith("[")) return ["omadesign"];
  return value
    .slice(1, -1)
    .split(",")
    .map((tag) => tag.trim().replace(/^["']|["']$/g, ""))
    .filter(Boolean);
}

/** Frontmatter `publishedAt` (ISO 8601) wins; otherwise the original thread timestamp. */
function publishedAt(front: string, entry: CatalogEntry) {
  const parsed = Date.parse(field(front, "publishedAt"));
  if (Number.isFinite(parsed)) return parsed;
  return Date.parse("2026-09-23T18:00:00Z") - (entry.n - 1) * 60_000;
}

const PUBLIC = path.join(process.cwd(), "public");

/**
 * Drops an empty media path, or a site-absolute one whose file is missing from public/.
 * If public/ isn't on disk (for example, a serverless runtime), the path is kept as-is.
 */
function localAsset(src: string) {
  if (!src) return undefined;
  if (!src.startsWith("/") || !fs.existsSync(PUBLIC)) return src;
  return fs.existsSync(path.join(PUBLIC, src)) ? src : undefined;
}

function seriesNote(entry: CatalogEntry, part: number, total: number) {
  const prev = entry.prev ? `[Previous](/blog/${entry.prev})` : "Start of the thread";
  const next = entry.next ? `[Next](/blog/${entry.next})` : "End of the thread";
  return `\n\n## The thread\n\nPart ${part} of ${total} in the Omadesign feature thread.\n\n${prev} · ${next}\n`;
}

/**
 * Omadesign feature thread posts.
 * Reads the markdown series from content/blog and attaches the film and OG image.
 */
export function getOmaFeaturePosts(): StaticPost[] {
  if (cache) return cache;
  if (!fs.existsSync(ROOT)) {
    cache = [];
    return cache;
  }
  const catalog = JSON.parse(
    fs.readFileSync(path.join(ROOT, "catalog.json"), "utf8"),
  ) as CatalogEntry[];
  const bySlug = new Map(catalog.map((entry) => [entry.slug, entry]));
  const posts: StaticPost[] = [];
  for (const [index, entry] of catalog.entries()) {
    const file = path.join(ROOT, `${entry.slug}.md`);
    if (!fs.existsSync(file)) continue;
    const raw = fs.readFileSync(file, "utf8");
    if (!raw.startsWith("---")) continue;
    const end = raw.indexOf("\n---", 3);
    if (end < 0) continue;
    const front = raw.slice(4, end);
    const body = raw.slice(end + 4).replace(/^\n/, "");
    const slug = field(front, "slug") || entry.slug;
    const known = bySlug.get(slug) ?? entry;
    const words = body.split(/\s+/).filter(Boolean).length;
    posts.push({
      _id: `static:${slug}`,
      title: field(front, "title") || known.title,
      slug,
      excerpt: field(front, "excerpt") || known.tweet.slice(0, 220),
      content: `${body.trim()}\n${seriesNote(known, index + 1, catalog.length)}`,
      coverImage: localAsset(field(front, "coverImage") || known.cover),
      video: localAsset(field(front, "video") || known.video),
      tags: tags(front),
      featured: false,
      published: true,
      publishedAt: publishedAt(front, known),
      readingTime: Math.max(1, Math.round(words / 220)),
    });
  }
  cache = posts;
  return posts;
}
