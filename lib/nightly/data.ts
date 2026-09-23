import { promises as fs } from "fs";
import path from "path";
import type { DailyMetric, DailyReport } from "./types";

const dataRoot = path.join(process.cwd(), "data", "nightly");

export async function getMetrics(): Promise<DailyMetric[]> {
  const raw = await fs.readFile(path.join(dataRoot, "metrics.json"), "utf8");
  const parsed = JSON.parse(raw) as DailyMetric[];
  return parsed.sort((a, b) => a.date.localeCompare(b.date));
}

export async function listReportDates(): Promise<string[]> {
  const dir = path.join(dataRoot, "reports");
  const files = await fs.readdir(dir);
  return files
    .filter((f) => /^\d{4}-\d{2}-\d{2}\.json$/.test(f))
    .map((f) => f.replace(/\.json$/, ""))
    .sort()
    .reverse();
}

export async function getReport(date: string): Promise<DailyReport | null> {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return null;
  const file = path.join(dataRoot, "reports", `${date}.json`);
  try {
    const raw = await fs.readFile(file, "utf8");
    return JSON.parse(raw) as DailyReport;
  } catch {
    return null;
  }
}

export async function getLatestReport(): Promise<DailyReport | null> {
  const dates = await listReportDates();
  const latest = dates[0];
  if (!latest) return null;
  return getReport(latest);
}
