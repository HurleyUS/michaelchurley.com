# Nightly data (CoS publish contract)

Morning routine appends JSON here, commits, and pushes. Vercel redeploys
`HurleyUS/michaelchurley.com` and `/nightly` updates.

## Files

- `metrics.json` — array of daily points:
  `{ date, productivity, audience, source?, notes? }`
- `reports/YYYY-MM-DD.json` — stand-up walkthrough:
  `{ date, label?, timezone?, meta, shipped[], landed[], inbox[], loops[] }`

## Window

For report date `D` (America/New_York):

- Start: `(D - 1 day) at 05:00:00 America/New_York`
- End: `D at 05:00:00 America/New_York` (exclusive)
- Label: `5am–5am ET`

## Rules

- **No money in/out on the public Nightly.** Do not publish revenue, Stripe,
  invoices, past-due, payments, billing amounts, payouts, or `$` framing in
  metrics, reports, inbox, loops, or UI copy.
- Prefer omit over invented follower counts.
- Mark any chart filler with `"source": "seed-placeholder"`.
- Productivity may be a simple ship/deploy (or merged PR + release) index.
- `/nightly` is `noindex` until auth is added.
- Public charts: **productivity + audience only**.

## Publish checklist

1. Append/update `metrics.json` for the day (no `revenueUsd`).
2. Write `reports/YYYY-MM-DD.json` (non-financial inbox/loops only).
3. `git add data/nightly && git commit -m "nightly: YYYY-MM-DD" && git push`
