"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { DailyMetric } from "@/lib/nightly/types";

const accent = "#5eead4";
const blue = "#7dd3fc";
const muted = "#71717a";
const grid = "#27272a";
const tooltipBg = "#16161a";

type Props = { metrics: DailyMetric[] };

function ChartShell({
  title,
  subtitle,
  empty,
  children,
}: {
  title: string;
  subtitle: string;
  empty?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="ny-card">
      <div className="ny-card-h">
        <div>
          <div className="ny-card-title">{title}</div>
          <p className="ny-lede" style={{ marginBottom: 0 }}>
            {subtitle}
          </p>
        </div>
      </div>
      {empty ? (
        <div className="ny-empty" style={{ marginTop: 12 }}>
          No data yet — charts fill as CoS appends{" "}
          <code>data/nightly/metrics.json</code>
        </div>
      ) : (
        <div style={{ width: "100%", height: 220, marginTop: 8 }}>{children}</div>
      )}
    </div>
  );
}

export function ProductivityChart({ metrics }: Props) {
  const data = metrics
    .filter((m) => m.productivity != null)
    .map((m) => ({
      date: m.date,
      value: m.productivity as number,
      source: m.source,
    }));
  return (
    <ChartShell
      title="Productivity index"
      subtitle="Derived from in-window ships / deploys (evidence days only)"
      empty={!data.length}
    >
      <ResponsiveContainer>
        <AreaChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="nyProdFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={accent} stopOpacity={0.35} />
              <stop offset="100%" stopColor={accent} stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke={grid} strokeDasharray="3 3" />
          <XAxis
            dataKey="date"
            tick={{ fill: muted, fontSize: 11 }}
            tickFormatter={(v) => {
              const [, m, d] = String(v).split("-");
              return `${m}/${d}`;
            }}
          />
          <YAxis tick={{ fill: muted, fontSize: 11 }} width={36} allowDecimals={false} />
          <Tooltip
            contentStyle={{
              background: tooltipBg,
              border: `1px solid ${grid}`,
              borderRadius: 10,
              fontSize: 12,
            }}
          />
          <Area
            type="monotone"
            dataKey="value"
            name="Productivity"
            stroke={accent}
            fill="url(#nyProdFill)"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartShell>
  );
}


export function AudienceChart({ metrics }: Props) {
  const data = metrics
    .map((m) => {
      const a = m.audience || {};
      const reach =
        a.totalReach ?? a.xImpressions ?? a.xFollowers ?? a.linkedInFollowers ?? null;
      if (reach == null) return null;
      return { date: m.date, reach, source: m.source };
    })
    .filter(Boolean) as Array<{ date: string; reach: number; source?: string }>;

  return (
    <ChartShell
      title="Audience growth"
      subtitle="X impressions / followers when measured — no invented counts"
      empty={!data.length}
    >
      <ResponsiveContainer>
        <AreaChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="nyAudFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={blue} stopOpacity={0.35} />
              <stop offset="100%" stopColor={blue} stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke={grid} strokeDasharray="3 3" />
          <XAxis
            dataKey="date"
            tick={{ fill: muted, fontSize: 11 }}
            tickFormatter={(v) => {
              const [, m, d] = String(v).split("-");
              return `${m}/${d}`;
            }}
          />
          <YAxis tick={{ fill: muted, fontSize: 11 }} width={40} allowDecimals={false} />
          <Tooltip
            contentStyle={{
              background: tooltipBg,
              border: `1px solid ${grid}`,
              borderRadius: 10,
              fontSize: 12,
            }}
          />
          <Area
            type="monotone"
            dataKey="reach"
            name="Reach / impressions"
            stroke={blue}
            fill="url(#nyAudFill)"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartShell>
  );
}
