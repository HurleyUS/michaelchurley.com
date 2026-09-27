import type { SitePost } from "@/lib/llms";
import { CATEGORIES, listPieces } from "@/lib/portfolio/pieces";
import { SITE_URL } from "@/lib/site-profile";

export type PortfolioItem = {
  id: string;
  title: string;
  category: string;
  media: string;
  url?: string;
};
export type PortfolioIndex = { url: string; markdown: string; items: PortfolioItem[] };

export type BlogIndexPost = {
  title: string;
  slug: string;
  url: string;
  markdown: string;
  date: string | null;
  description: string;
  tags: string[];
};
export type BlogIndex = { url: string; markdown: string; count: number; posts: BlogIndexPost[] };

/** Body of /portfolio.json. */
export function portfolioJson() {
  return {
    url: `${SITE_URL}/portfolio`,
    markdown: `${SITE_URL}/portfolio.md`,
    categories: CATEGORIES,
    items: listPieces().map(
      (piece): PortfolioItem => ({
        id: piece.id,
        title: piece.title,
        category: piece.category,
        media: `${SITE_URL}${piece.src}`,
        ...(piece.href ? { url: piece.href } : {}),
      }),
    ),
  };
}

function isoDate(post: Pick<SitePost, "publishedAt">) {
  return post.publishedAt ? new Date(post.publishedAt).toISOString().slice(0, 10) : null;
}

/** Body of /blog.json. */
export function blogJson(posts: SitePost[]): BlogIndex {
  return {
    url: `${SITE_URL}/blog`,
    markdown: `${SITE_URL}/blog.md`,
    count: posts.length,
    posts: posts.map((post) => ({
      title: post.title,
      slug: post.slug,
      url: `${SITE_URL}/blog/${post.slug}`,
      markdown: `${SITE_URL}/blog/${post.slug}.md`,
      date: isoDate(post),
      description: post.excerpt,
      tags: post.tags,
    })),
  };
}
