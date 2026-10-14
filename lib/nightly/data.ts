import { promises as fs } from "fs";
import path from "path";
import type { DailyMetric, DailyReport } from "./types";
import { parsePublicMetrics, parsePublicReport } from "./publication";

const dataRoot = path.join(process.cwd(), "data", "nightly");

export async function getMetrics(): Promise<DailyMetric[]> {
  try {
    const raw = await fs.readFile(path.join(dataRoot, "metrics.json"), "utf8");
    const parsed = parsePublicMetrics(JSON.parse(raw));
    return parsed.sort((a, b) => a.date.localeCompare(b.date));
  } catch {
    throw new Error("Nightly metrics unavailable: publication validation failed");
  }
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
    const report = parsePublicReport(JSON.parse(raw));
    if (report.date !== date) throw new Error("Nightly report date mismatch");
    return report;
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return null;
    throw new Error("Nightly report unavailable: publication validation failed");
  }
}

export async function getLatestReport(): Promise<DailyReport | null> {
  const dates = await listReportDates();
  const latest = dates[0];
  if (!latest) return null;
  return getReport(latest);
}
