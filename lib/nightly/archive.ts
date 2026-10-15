import archive from "../../data/nightly/audience-archive.json";
import type { DailyMetric, DailyReport } from "./types";

/** Preserve approved numeric snapshots independently of editable report prose. */
export function assertAudienceArchive(metrics: DailyMetric[], reports: (DailyReport | null)[]) {
  for (const expected of archive.entries) {
    const metric = metrics.find((item) => item.date === expected.date);
    const report = reports.find((item) => item?.date === expected.date);
    if (
      !metric ||
      !report ||
      JSON.stringify(metric.audience) !== JSON.stringify(expected.audience) ||
      report.meta.xPostsMeasured !== expected.xPostsMeasured
    ) {
      throw new Error("Archived audience values must be preserved");
    }
    const card = report.landed.find((item) => item.archivedFrom === archive.sourceCommit);
    const hasAudience = Object.keys(expected.audience).length > 0;
    if (!hasAudience) {
      if (card || metric.archivedFrom) throw new Error("Missing audience values must stay missing");
      continue;
    }
    const engagement = expected.engagement ?? { impressions: expected.audience.xImpressions };
    if (
      metric.archivedFrom !== archive.sourceCommit ||
      JSON.stringify(card?.metrics) !== JSON.stringify(engagement)
    ) {
      throw new Error("Archived engagement values and provenance must be preserved");
    }
  }
}
