import Link from "next/link";
import {
  AudienceChart,
  ProductivityChart,
} from "@/components/nightly/Charts";
import { getLatestReport, getMetrics, listReportDates } from "@/lib/nightly/data";
import { formatDateLabel } from "@/lib/nightly/format";

export const dynamic = "force-static";

export default async function NightlyDashboardPage() {
  const [metrics, dates, latest] = await Promise.all([
    getMetrics(),
    listReportDates(),
    getLatestReport(),
  ]);
  const latestMetric = metrics[metrics.length - 1];

  return (
    <>
      <nav className="ny-nav" aria-label="Nightly">
        <Link href="/nightly" className="brand">
          Nightly · Daily Stand Up
        </Link>
        <a className="jump" href="#charts">
          Charts
        </a>
        <a className="jump" href="#latest">
          Latest
        </a>
        <a className="jump" href="#archive">
          Archive
        </a>
        <Link className="jump" href="/">
          michaelchurley.com
        </Link>
      </nav>
      <div className="ny-wrap">
        <header className="ny-hero">
          <h1>Nightly</h1>
          <p className="ny-subtitle">
            Michael Hurley · first-party ops dash on michaelchurley.com — productivity
            and audience over time, plus the daily stand-up walkthrough (shipped /
            landed / inbox / loops). Evidence-only JSON under{" "}
            <code>data/nightly/</code>. CoS appends &amp; commits; Vercel redeploys.
            Public Nightly is ships, social, and ops only.
          </p>
          <div className="ny-meta-grid">
            <div className="ny-metric">
              <div className="n">{dates.length || "—"}</div>
              <div className="l">Reports</div>
            </div>
            <div className="ny-metric">
              <div className="n">
                {latestMetric?.productivity != null ? latestMetric.productivity : "—"}
              </div>
              <div className="l">Latest productivity</div>
            </div>
            <div className="ny-metric">
              <div className="n">
                {latestMetric?.audience?.xImpressions ??
                  latestMetric?.audience?.totalReach ??
                  "—"}
              </div>
              <div className="l">Latest audience signal</div>
            </div>
          </div>
          <p className="ny-note" style={{ marginTop: 16 }}>
            Archive covers{" "}
            <strong style={{ color: "var(--ny-text)" }}>2026-09-03 → 2026-09-23</strong>{" "}
            (5am–5am ET windows). Charts are productivity + audience only.
          </p>
        </header>

        <section id="charts">
          <h2>
            <span className="num">01</span> Trends
          </h2>
          <p className="ny-lede">
            Sparse by design. Charts render empty states until CoS appends metrics.
          </p>
          <div className="ny-charts">
            <ProductivityChart metrics={metrics} />
            <AudienceChart metrics={metrics} />
          </div>
        </section>

        <section id="latest">
          <h2>
            <span className="num">02</span> Latest report
          </h2>
          {latest ? (
            <div className="ny-card">
              <div className="ny-card-h">
                <div className="ny-card-title">
                  {formatDateLabel(latest.date)}
                  {latest.label ? ` · ${latest.label}` : ""}
                </div>
                <Link href={`/nightly/report/${latest.date}`} className="ny-pill ny-ship">
                  Open walkthrough →
                </Link>
              </div>
              <p>{latest.meta.tldr || "No TLDR yet."}</p>
              <div className="ny-meta-grid" style={{ marginTop: 14 }}>
                <div className="ny-metric">
                  <div className="n">{latest.meta.deploysInWindow ?? "—"}</div>
                  <div className="l">Deploys</div>
                </div>
                <div className="ny-metric">
                  <div className="n">{latest.shipped?.length ?? 0}</div>
                  <div className="l">Shipped cards</div>
                </div>
                <div className="ny-metric">
                  <div className="n">{latest.inbox?.length ?? 0}</div>
                  <div className="l">Inbox</div>
                </div>
                <div className="ny-metric">
                  <div className="n">{latest.loops?.length ?? 0}</div>
                  <div className="l">Open loops</div>
                </div>
              </div>
              {latest.meta.windowEt ? (
                <p className="ny-when">Window (ET): {latest.meta.windowEt}</p>
              ) : null}
            </div>
          ) : (
            <div className="ny-empty">No reports in data/nightly/reports yet.</div>
          )}
        </section>

        <section id="archive">
          <h2>
            <span className="num">03</span> Past reports
          </h2>
          <p className="ny-lede">
            One JSON file per day under data/nightly/reports/YYYY-MM-DD.json
          </p>
          {dates.length ? (
            <ul className="ny-archive">
              {dates.map((d) => (
                <li key={d}>
                  <Link href={`/nightly/report/${d}`}>
                    <span>{formatDateLabel(d)}</span>
                    <span className="d">{d}</span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="ny-empty">Archive empty.</div>
          )}
        </section>

        <footer className="ny-footer">
          <p>
            Nightly v0 · sources land as committed JSON · auth (shared secret /
            Clerk) TBD · path: <code>www.michaelchurley.com/nightly</code>
          </p>
        </footer>
      </div>
    </>
  );
}
