import { z } from "zod";
import type { DailyMetric, DailyReport } from "./types";

// Add sources only after checking anonymous public access and reviewing their content.
const publicRepositories = new Set([
  "hurleyus/getat.me",
  "hurleyus/michaelchurley.com",
  "hurleyus/www.yourzaxbys.com",
  "hustle-launch/hustlemail",
  "hustle-launch/mission-control-os",
  "michaelmonetized/editbay",
  "michaelmonetized/flea-omadesign",
  "michaelmonetized/hustlemail",
  "michaelmonetized/math-skills",
  "michaelmonetized/naarchy",
  "michaelmonetized/nfglyph",
  "michaelmonetized/omacut",
  "michaelmonetized/omadesign",
  "michaelmonetized/omatainer",
  "michaelmonetized/omnux-gpu",
  "michaelmonetized/resend-listening-daemon",
  "michaelmonetized/slopops",
]);

export function isPublicSource(href: string): boolean {
  try {
    const url = new URL(href);
    if (
      url.protocol !== "https:" ||
      url.username ||
      url.password ||
      url.port ||
      url.search ||
      url.hash ||
      url.href !== href ||
      /[%\\]/.test(href)
    )
      return false;
    if (url.hostname === "github.com") {
      const [, owner, repo, ...rest] = url.pathname.split("/");
      if (!publicRepositories.has(`${owner}/${repo}`.toLowerCase())) return false;
      const resource = rest.join("/");
      return (
        resource === "" ||
        /^(?:pull|issues)\/\d+$/.test(resource) ||
        /^commit\/[a-f\d]{7,40}$/i.test(resource) ||
        /^releases\/tag\/[\w.-]+$/.test(resource)
      );
    }
    if (url.hostname === "x.com") {
      return /^\/michaelh_rley\/status\/\d+$/i.test(url.pathname);
    }
    if (url.hostname === "www.michaelchurley.com") {
      return /^\/(?:blog\/[\w-]+|portfolio\/naarchy|nightly(?:\/report\/\d{4}-\d{2}-\d{2})?)$/.test(
        url.pathname,
      );
    }
    return (
      href === "https://omadesign.app/" || href === "https://alternativeto.net/software/omadesign/"
    );
  } catch {
    return false;
  }
}

// Defense in depth; source review remains mandatory for prose that rules cannot classify.
const privateCopy =
  /\b(?:inbox|open[ -]loops?|e-?mails?|appointments?|meetings?|invoices?|billing|payments?|payouts?|past[ -]due|revenue|credentials?|secrets?|allowlists?|support (?:tickets?|cases?)|account (?:balance|access|status)|token (?:rotation|temp)|scheduled run|team scope)\b|\b1:1\b|\$\s*\d|[\w.+-]+@[\w.-]+\.[a-z]{2,}|https?:\/\/|mailto:|\/home\/|\/Users\//i;
const text = z.string().refine((value) => !privateCopy.test(value), "Private or unreviewed copy");
const date = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/)
  .refine((value) => {
    const parsed = new Date(`${value}T00:00:00Z`);
    return Number.isFinite(parsed.getTime()) && parsed.toISOString().slice(0, 10) === value;
  });
const count = z.number().finite().nonnegative();
const link = z.strictObject({ label: text, href: z.string().refine(isPublicSource) });
const card = z.strictObject({
  title: text,
  kind: z.enum(["shipped", "outside", "audience", "measured"]),
  summary: text,
  bullets: z.array(text).optional(),
  quote: text.optional(),
  metrics: z
    .partialRecord(
      z.enum(["impressions", "likes", "replies", "reposts", "downloads", "stars", "upvotes"]),
      count,
    )
    .optional(),
  when: text.optional(),
  links: z.array(link).min(1),
});
const report = z.strictObject({
  date,
  label: z.literal("5am–5am ET").optional(),
  timezone: z.literal("America/New_York").optional(),
  meta: z.strictObject({
    tldr: text.optional(),
    windowEt: text.optional(),
    windowUtc: text.optional(),
  }),
  shipped: z.array(card),
  landed: z.array(card),
});
const metric = z
  .strictObject({
    date,
    productivity: count.nullable(),
    audience: z.strictObject({
      xFollowers: count.optional(),
      xImpressions: count.optional(),
      linkedInFollowers: count.optional(),
      totalReach: count.optional(),
    }),
    source: z.enum(["public-project-cards", "seed-placeholder"]).optional(),
    links: z.array(link).min(1).optional(),
  })
  .refine((value) => Object.keys(value.audience).length === 0 || Boolean(value.links?.length));

function parsePublic<T>(schema: z.ZodType<T>, value: unknown): T {
  const result = schema.safeParse(value);
  // Never log the rejected value or Zod issues: they may contain private data.
  if (!result.success) throw new Error("Nightly publication contract rejected data");
  return result.data;
}

export function parsePublicReport(value: unknown): DailyReport {
  return parsePublic(report, value);
}

export function parsePublicMetrics(value: unknown): DailyMetric[] {
  return parsePublic(z.array(metric), value);
}
