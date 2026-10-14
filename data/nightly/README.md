# Nightly public publication contract

Everything here is public source data. HTML, React payloads, Markdown, and the
combined AI-readable site export use it. `/nightly` remains indexable.

## Files

- `reports/YYYY-MM-DD.json`: `{ date, label?, timezone?, meta, shipped[], landed[] }`
- `meta`: only `tldr?`, `windowEt?`, and `windowUtc?`.
- Project cards: `title`, `kind`, `summary`, and at least one reviewed public
  `links[]` source; optional `bullets`, `quote`, `metrics`, and `when`.
- `metrics.json`: `{ date, productivity, audience, source?, links? }`.
  `public-project-cards` productivity counts retained in-window project cards,
  excluding `outside` cards. It is an activity index, not a deployment count.
  Audience values require public source links; omit unsupported measurements.
  Filler must use `seed-placeholder`.

Report date D summarizes D at 05:00 through D+1 at 05:00 America/New_York
(exclusive). Use the label `5am–5am ET` and the work-day date.

## Content review

Publish completed public project work and clearly labeled public PR activity or
announcements supported by sources accessible without signing in. Review every
field, including summaries, quotes, bullets, link labels, metrics, and metadata.
A public repository link does not make private operational context publishable.

Exclude inbox evidence, email messages or links, open loops and private task
lists, personal meetings or appointments, billing or account information,
credentials and security administration, private support conversations, and
private operational status. Do not move excluded copy to another card, notes,
metadata, test fixture, commit message, or public log. When public evidence is
missing, omit the item; do not substitute inferred achievements or chart totals.
Keep private daily planning in its private channel.

`lib/nightly/publication.ts` rejects unknown fields, excluded sections, common
private-content patterns, and links outside reviewed public source paths.
Failures stop rendering and report only a generic message. These checks are
necessary but cannot replace human review of meaning or current source access.
Adding a source requires checking anonymous access and reviewing its content.

## Local preparation and validation

1. Re-check current main and use an isolated worktree to preserve concurrent work.
2. Review all changed report fields against their public sources.
3. Run `bun run validate:nightly`, `bun test __tests__/lib/nightly-publication.test.tsx`,
   `bun tsc`, and `bun lint --fix`. The local lint gate includes archive validation.
4. Check dashboard, every dated HTML and Markdown report, and combined site export.
   Feeds currently contain blog posts only; re-check any new consumer.
5. Commit a sanitized category summary. Publishing requires the user's approval.

Web production builds use Blacksmith through the GitHub organization and deploy
archived Vercel prebuilt output. Local checks do not deploy. Replacing current
reports does not remove old Git history, immutable deployments, or third-party
search/cache copies; do not rewrite history as part of a report correction.
