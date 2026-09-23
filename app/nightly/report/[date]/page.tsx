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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ date: string }>;
}) {
  const { date } = await params;
  return {
    title: `Stand Up · ${date}`,
    robots: { index: true, follow: true },
  };
}

export default async function NightlyReportPage({
  params,
}: {
  params: Promise<{ date: string }>;
}) {
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
          What shipped
        </a>
        <a className="jump" href="#landed">
          How it landed
        </a>
        <a className="jump" href="#inbox">
          Inbox
        </a>
        <a className="jump" href="#loops">
          Open loops
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
            <div className="ny-metric">
              <div className="n">{report.meta.deploysInWindow ?? "—"}</div>
              <div className="l">In-window deploys</div>
            </div>
            <div className="ny-metric">
              <div className="n">{report.meta.xPostsMeasured ?? "—"}</div>
              <div className="l">X posts measured</div>
            </div>
            <div className="ny-metric">
              <div className="n">
                {report.meta.inboxSignalItems ?? report.inbox.length}
              </div>
              <div className="l">Inbox signal</div>
            </div>
          </div>
          {report.meta.windowEt ? (
            <p className="ny-note" style={{ marginTop: 16 }}>
              <strong style={{ color: "var(--ny-text)" }}>ET range:</strong>{" "}
              {report.meta.windowEt}
              {report.meta.windowUtc ? (
                <>
                  <br />
                  <strong style={{ color: "var(--ny-text)" }}>UTC:</strong>{" "}
                  {report.meta.windowUtc}
                </>
              ) : null}
              {report.meta.generatedEt ? (
                <>
                  <br />
                  <span style={{ color: "var(--ny-dim)" }}>
                    Generated {report.meta.generatedEt}
                  </span>
                </>
              ) : null}
            </p>
          ) : null}
        </header>

        <section id="shipped">
          <h2>
            <span className="num">01</span> What shipped
          </h2>
          <p className="ny-lede">
            Releases, merged PRs, notable commits, and deploys from the window.
          </p>
          <div className="ny-cards">
            {report.shipped.map((c) => (
              <ReportCardView key={c.title} card={c} />
            ))}
          </div>
        </section>

        <section id="landed">
          <h2>
            <span className="num">02</span> How it landed
          </h2>
          <p className="ny-lede">Public distribution metrics.</p>
          <div className="ny-grid-2">
            {report.landed.map((c) => (
              <ReportCardView key={c.title} card={c} />
            ))}
          </div>
        </section>

        <section id="inbox">
          <h2>
            <span className="num">03</span> Inbox as a result
          </h2>
          <p className="ny-lede">Signal from the window.</p>
          <div className="ny-cards">
            {report.inbox.map((c) => (
              <ReportCardView key={c.title} card={c} />
            ))}
          </div>
        </section>

        <section id="loops">
          <h2>
            <span className="num">04</span> Open loops
          </h2>
          <p className="ny-lede">Concrete next moves from the day above.</p>
          <ol className="ny-loops">
            {report.loops.map((l) => (
              <li key={l.title}>
                <div>
                  <strong>{l.title}</strong>
                  <span>{l.detail}</span>
                </div>
              </li>
            ))}
          </ol>
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
