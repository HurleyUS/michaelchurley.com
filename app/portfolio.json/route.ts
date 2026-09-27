import { portfolioJson } from "@/lib/site-json";

/** Portfolio pieces, generated from lib/portfolio/pieces.ts. */
export const dynamic = "force-static";

export function GET() {
  return Response.json(portfolioJson());
}
