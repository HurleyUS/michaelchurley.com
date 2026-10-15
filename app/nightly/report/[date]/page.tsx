import Link from "next/link";
import { notFound } from "next/navigation";
import { ReportCardView } from "@/components/nightly/ReportCard";
import { getReport, listReportDates } from "@/lib/nightly/data";
import { formatDateLabel } from "@/lib/nightly/format";

export const dynamic = "force-static";

export async function generateStaticParams() {
  const dates = await listReportDates();
  return dates.map((date) => ({ date }));
}

export async function generateMetadata({ params }: { params: Promise<{ date: string }> }) {
  const { date } = await params;
  return {
    title: `Stand Up · ${date}`,
    robots: { index: true, follow: true },
    alternates: { canonical: `https://www.michaelchurley.com/nightly/report/${date}` },
  };
}

export default async function NightlyReportPage({ params }: { params: Promise<{ date: string }> }) {
  const { date } = await params;
  const report = await getReport(date);
  if (!report) notFound();

  return (
    <>
      <nav className="ny-nav" aria-label="Report sections">
        <Link href="/nightly" className="brand">
          Nightly · {date}
        </Link>
        <a className="jump" href="#shipped">
          Project activity
        </a>
        <a className="jump" href="#landed">
          How it landed
        </a>
        <Link className="jump" href="/nightly">
          ← Dashboard
        </Link>
      </nav>
      <div className="ny-wrap">
        <header className="ny-hero">
          <h1>Daily Stand Up Report</h1>
          <p className="ny-subtitle">
            Michael Hurley · {formatDateLabel(date)}
            {report.meta.tldr ? ` — ${report.meta.tldr}` : ""}
          </p>
          <div className="ny-meta-grid">
            <div className="ny-metric">
              <div className="n">24h</div>
              <div className="l">Window</div>
            </div>
            {report.meta.xPostsMeasured !== undefined ? (
              <div className="ny-metric">
                <div className="n">{report.meta.xPostsMeasured}</div>
                <div className="l">X posts recorded in archive</div>
              </div>
            ) : null}
          </div>
          {report.meta.windowEt ? (
            <p className="ny-note" style={{ marginTop: 16 }}>
              <strong style={{ color: "var(--ny-text)" }}>ET range:</strong> {report.meta.windowEt}
              {report.meta.windowUtc ? (
                <>
                  <br />
                  <strong style={{ color: "var(--ny-text)" }}>UTC:</strong> {report.meta.windowUtc}
                </>
              ) : null}
            </p>
          ) : null}
        </header>

        <section id="shipped">
          <h2>
            <span className="num">01</span> Project activity
          </h2>
          <p className="ny-lede">
            Public releases, pull requests, and project updates from the window.
          </p>
          <div className="ny-cards">
            {report.shipped.length === 0 ? (
              <p className="ny-empty">No public project activity recorded.</p>
            ) : null}
            {report.shipped.map((c) => (
              <ReportCardView key={c.title} card={c} />
            ))}
          </div>
        </section>

        <section id="landed">
          <h2>
            <span className="num">02</span> How it landed
          </h2>
          <p className="ny-lede">Public project announcements and distribution.</p>
          <div className="ny-grid-2">
            {report.landed.length === 0 ? (
              <p className="ny-empty">No public project announcements recorded.</p>
            ) : null}
            {report.landed.map((c) => (
              <ReportCardView key={c.title} card={c} />
            ))}
          </div>
        </section>

        <footer className="ny-footer">
          <p>
            <Link href="/nightly">← Back to Nightly dashboard</Link>
          </p>
          <p style={{ marginTop: 6 }}>{date}</p>
        </footer>
      </div>
    </>
  );
}
