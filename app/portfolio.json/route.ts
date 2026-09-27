import { CATEGORIES, listPieces } from "@/lib/portfolio/pieces";
import { SITE_URL } from "@/lib/site-profile";

/** Portfolio pieces, generated from lib/portfolio/pieces.ts. */
export const dynamic = "force-static";

export function GET() {
  return Response.json({
    url: `${SITE_URL}/portfolio`,
    markdown: `${SITE_URL}/portfolio.md`,
    categories: CATEGORIES,
    items: listPieces().map((piece) => ({
      id: piece.id,
      title: piece.title,
      category: piece.category,
      media: `${SITE_URL}${piece.src}`,
      ...(piece.href ? { url: piece.href } : {}),
    })),
  });
}
