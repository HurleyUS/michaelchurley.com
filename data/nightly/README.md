# Nightly data (CoS publish contract)

Morning routine appends JSON here, commits, and pushes. Vercel redeploys
`HurleyUS/michaelchurley.com` and `/nightly` updates.

## Files

- `metrics.json` — array of daily points:
  `{ date, productivity, revenueUsd, audience, source?, notes? }`
- `reports/YYYY-MM-DD.json` — stand-up walkthrough:
  `{ date, label?, timezone?, meta, shipped[], landed[], inbox[], loops[] }`

## Rules

- Prefer `null` / omit over invented Stripe revenue or follower counts.
- Mark any chart filler with `"source": "seed-placeholder"`.
- Productivity may be a simple ship/deploy index for the window.
- `/nightly` is `noindex` until auth is added.

## Publish checklist

1. Append/update `metrics.json` for the day.
2. Write `reports/YYYY-MM-DD.json`.
3. `git add data/nightly && git commit -m "nightly: YYYY-MM-DD" && git push`
