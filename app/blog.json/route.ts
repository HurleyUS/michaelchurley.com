import { getLlmsPosts } from "@/lib/llms";
import { blogJson } from "@/lib/site-json";

/** Published blog posts (Convex + static), newest first. */
export const revalidate = 3600;

export async function GET() {
  return Response.json(blogJson(await getLlmsPosts()));
}
