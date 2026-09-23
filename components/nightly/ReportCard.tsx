import { kindPillClass } from "@/lib/nightly/format";
import type { ReportCard } from "@/lib/nightly/types";

export function ReportCardView({ card }: { card: ReportCard }) {
  return (
    <article className="ny-card">
      <div className="ny-card-h">
        <div className="ny-card-title">{card.title}</div>
        <span className={kindPillClass(card.kind)}>{card.kind}</span>
      </div>
      <p>{card.summary}</p>
      {card.quote ? (
        <p style={{ marginTop: 8, color: "var(--ny-text)", fontSize: 13 }}>
          &ldquo;{card.quote}&rdquo;
        </p>
      ) : null}
      {card.bullets?.length ? (
        <ul>
          {card.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      ) : null}
      {card.metrics ? (
        <div className="ny-metrics-inline">
          {Object.entries(card.metrics).map(([k, v]) => (
            <div className="ny-mpill" key={k}>
              {v} <span>{k}</span>
            </div>
          ))}
        </div>
      ) : null}
      {card.when ? <p className="ny-when">{card.when}</p> : null}
      {card.links?.length ? (
        <p className="ny-when" style={{ marginTop: 6 }}>
          {card.links.map((l, i) => (
            <span key={l.href}>
              {i > 0 ? " · " : null}
              <a href={l.href} target="_blank" rel="noreferrer">
                {l.label}
              </a>
            </span>
          ))}
        </p>
      ) : null}
    </article>
  );
}
