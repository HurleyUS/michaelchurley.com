import type { DailyMetric } from "./types";

export function audienceChartData(metrics: DailyMetric[]) {
  return metrics.map((metric) => ({
    date: metric.date,
    reach:
      metric.audience.totalReach ??
      metric.audience.xImpressions ??
      metric.audience.xFollowers ??
      metric.audience.linkedInFollowers ??
      null,
  }));
}
