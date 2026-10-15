import { getMetrics, getReport, listReportDates } from "../lib/nightly/data";
import { assertAudienceArchive } from "../lib/nightly/archive";

try {
  const dates = await listReportDates();
  const metrics = await getMetrics();
  const reports = await Promise.all(dates.map(getReport));
  assertAudienceArchive(metrics, reports);
  if (
    metrics.length !== dates.length ||
    new Set(metrics.map((m) => m.date)).size !== metrics.length
  ) {
    throw new Error("Archive dates and metrics must match");
  }
  for (const report of reports) {
    if (!report) throw new Error("Missing report");
    const metric = metrics.find((item) => item.date === report.date);
    const activity = report.shipped.filter((card) => card.kind !== "outside").length;
    if (!metric || (metric.source === "public-project-cards" && metric.productivity !== activity)) {
      throw new Error("Public activity index must match retained cards");
    }
  }
  console.log(
    `Nightly publication validation passed: ${dates.length} reports, ${metrics.length} metric points`,
  );
} catch {
  console.error(
    "Nightly publication validation failed; review the local source against the contract",
  );
  process.exitCode = 1;
}
