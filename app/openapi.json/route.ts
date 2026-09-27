import { openApiDocument } from "@/lib/openapi";

/** OpenAPI 3.1 description of the site's JSON endpoints and booking API. */
export const dynamic = "force-static";

export function GET() {
  return Response.json(openApiDocument(), { headers: { "Access-Control-Allow-Origin": "*" } });
}
