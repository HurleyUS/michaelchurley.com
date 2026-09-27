import { jsonResume } from "@/lib/resume";

/** Resume in JSON Resume format, generated from lib/resume.ts. */
export const dynamic = "force-static";

export function GET() {
  return Response.json(jsonResume());
}
