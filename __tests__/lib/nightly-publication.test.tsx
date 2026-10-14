import { describe, expect, test } from "bun:test";
import { renderToStaticMarkup } from "react-dom/server";
import NightlyDashboardPage from "../../app/nightly/page";
import NightlyReportPage from "../../app/nightly/report/[date]/page";
import { getMetrics, getReport, listReportDates } from "../../lib/nightly/data";
import {
  isPublicSource,
  parsePublicMetrics,
  parsePublicReport,
} from "../../lib/nightly/publication";
import { pageMarkdown } from "../../lib/page-markdown";

// Synthetic examples only. Never make a regression fixture out of removed report copy.
const publicCard = {
  title: "Example public release",
  kind: "shipped",
  summary: "Released a public project update.",
  links: [{ label: "Source", href: "https://github.com/michaelmonetized/omadesign" }],
};
function fixture() {
  return {
    date: "2026-10-01",
    meta: { tldr: "Public release." },
    shipped: [structuredClone(publicCard)],
    landed: [],
  };
}
const rejectedCopy = [
  "Example planning meeting with Synthetic Person",
  "Example inbox evidence",
  "Example open loops",
  "Example billing account status",
  "Example private email correspondence",
  "Example support ticket",
  "Example credential rotation",
  "synthetic.person@example.test",
  "Private appointment at 1:1",
  "Private reference https://mail.example.test/message/123",
  "Private local reference /Users/example/private.txt",
];

describe("public-only nightly contract", () => {
  test("accepts a source-linked public accomplishment and ordinary times", () => {
    expect(parsePublicReport(fixture()).shipped).toHaveLength(1);
    const report = fixture();
    Object.assign(report.shipped[0], { when: "Oct 1 · 11:16 AM EDT", metrics: { stars: 3 } });
    expect(parsePublicReport(report).shipped).toHaveLength(1);
  });

  test("rejects private sections even if empty, plus hidden metadata and card fields", () => {
    for (const field of ["inbox", "loops", "notes"]) {
      expect(() => parsePublicReport({ ...fixture(), [field]: [] })).toThrow(
        "Nightly publication contract rejected data",
      );
    }
    const report = fixture();
    Object.assign(report.meta, { inboxSignalItems: 1 });
    expect(() => parsePublicReport(report)).toThrow();
    const nested = fixture();
    Object.assign(nested.shipped[0], { privateEvidence: "PRIVATE_FIXTURE_VALUE" });
    expect(() => parsePublicReport(nested)).toThrow();
  });

  test("rejects private copy anywhere in a rendered card or summary without echoing it", () => {
    for (const copy of rejectedCopy) {
      for (const field of ["title", "summary", "quote", "when"]) {
        const report = fixture();
        Object.assign(report.shipped[0], { [field]: copy });
        expect(() => parsePublicReport(report)).toThrow(
          "Nightly publication contract rejected data",
        );
      }
      for (const section of ["shipped", "landed"]) {
        const report = fixture();
        Object.assign(report, { [section]: [{ ...publicCard, bullets: [copy] }] });
        expect(() => parsePublicReport(report)).toThrow();
      }
      expect(() => parsePublicReport({ ...fixture(), meta: { tldr: copy } })).toThrow();
      const linked = fixture();
      linked.shipped[0].links[0].label = copy;
      expect(() => parsePublicReport(linked)).toThrow();
    }
  });

  test("requires reviewed public sources and rejects private URL and redirect forms", () => {
    for (const href of [
      "https://mail.google.com/mail/u/0/#inbox/synthetic",
      "mailto:synthetic.person@example.test",
      "https://calendar.example.test/private",
      "https://github.com/example/private-project/pull/1",
      "https://github.com/michaelmonetized/omadesign/settings",
      "https://github.com/michaelmonetized/omadesign?redirect=private",
      "https://github.com/michaelmonetized/%6fmadesign",
      "https://github.com/michaelmonetized/private/../omadesign",
      "https://github.com.evil.example/michaelmonetized/omadesign",
      "https://example@github.com/michaelmonetized/omadesign",
      "file:///tmp/example-private.txt",
    ])
      expect(isPublicSource(href)).toBe(false);
    expect(() =>
      parsePublicReport({ ...fixture(), shipped: [{ ...publicCard, links: [] }] }),
    ).toThrow();
  });

  test("rejects private chart fields and unsupported audience totals", () => {
    const point = {
      date: "2026-10-01",
      productivity: 1,
      audience: {},
      source: "public-project-cards",
    };
    expect(parsePublicMetrics([point])).toHaveLength(1);
    for (const field of ["notes", "revenueUsd", "inboxCount", "accountBalance"]) {
      expect(() => parsePublicMetrics([{ ...point, [field]: "PRIVATE_FIXTURE_VALUE" }])).toThrow();
    }
    expect(() => parsePublicMetrics([{ ...point, audience: { xImpressions: 10 } }])).toThrow();
    expect(() => parsePublicReport({ ...fixture(), date: "2026-02-30" })).toThrow();
  });
});

test("every archived date renders only public data in HTML and Markdown", async () => {
  const dates = await listReportDates();
  const metrics = await getMetrics();
  expect(dates.length).toBeGreaterThan(0);
  expect(metrics).toHaveLength(dates.length);
  const forbidden =
    /Inbox(?: as a result| signal)?|Open loops|mail\.google\.com|mailto:|PRIVATE_FIXTURE_VALUE/i;
  for (const date of dates) {
    const report = await getReport(date);
    expect(report).not.toBeNull();
    if (!report) throw new Error("Missing public report");
    const html = renderToStaticMarkup(
      await NightlyReportPage({ params: Promise.resolve({ date }) }),
    );
    const markdown = await pageMarkdown(["nightly", "report", date]);
    expect(html).not.toMatch(forbidden);
    expect(markdown).not.toMatch(forbidden);
    expect(report.shipped.every((card) => markdown!.includes(card.title))).toBe(true);
    expect(
      report.shipped.flatMap((card) => card.links).every((link) => isPublicSource(link.href)),
    ).toBe(true);
    const point = metrics.find((item) => item.date === date);
    expect(point!.productivity).toBe(
      report.shipped.filter((card) => card.kind !== "outside").length,
    );
  }
  const dashboard = renderToStaticMarkup(await NightlyDashboardPage());
  expect(dashboard).not.toMatch(forbidden);
  expect(dashboard).toContain(dates[0]);
  expect(dashboard).toContain(dates.at(-1) ?? "");
  expect(await pageMarkdown(["nightly"])).not.toMatch(forbidden);
});
