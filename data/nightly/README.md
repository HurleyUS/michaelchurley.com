# Nightly public publication contract

Everything here is public source data. HTML, React payloads, Markdown, and the
combined AI-readable site export use it. `/nightly` remains indexable.

## Files

- `reports/YYYY-MM-DD.json`: `{ date, label?, timezone?, meta, shipped[], landed[] }`
- `meta`: only `tldr?`, `windowEt?`, `windowUtc?`, and recorded `xPostsMeasured?`.
- Project cards: `title`, `kind`, `summary`, and at least one reviewed public
  `links[]` source; optional `bullets`, `quote`, `metrics`, and `when`.
- `metrics.json`: `{ date, productivity, audience, source?, links? }`.
  `public-project-cards` productivity counts retained in-window project cards,
  excluding `outside` cards. It is an activity index, not a deployment count.
  Audience values require reviewed public source links or approved archived provenance; omit unsupported measurements.
  Filler must use `seed-placeholder`.

Report date D summarizes D at 05:00 through D+1 at 05:00 America/New_York
(exclusive). Use the label `5am–5am ET` and the work-day date.

- `audience-archive.json` preserves the approved numeric snapshots from commit
  `6ad43ac3a54a5bfc4ec805a041648315d1979907`: 33 daily impression values,
  18 engagement records, and 42 recorded post counts. These are historical
  snapshots, not newly verified provider measurements. Do not restore source
  prose, private evidence, or old operational notes with the numbers.
- `archivedFrom` identifies that approved source commit on metric points and
  numeric audience cards. It never substitutes for sources on project cards.
- Missing audience values remain missing; zero is a measurement only when
  explicitly recorded. Audience charts retain gaps for unmeasured days.
- Local archive validation and regression tests prevent existing numeric snapshots
  from being cleared, altered, or replaced by invented values during a cleanup.

## Content review

Publish completed public project work and clearly labeled public PR activity or
announcements supported by sources accessible without signing in. Review every
field, including summaries, quotes, bullets, link labels, metrics, and metadata.
A public repository link does not make private operational context publishable.

Inbox-as-evidence and open-loops sections are allowed (policy 2026-10-15), but
they must never include financial obligations (debts, collections, bills,
settlements, payments owed), personal or private information, or personal or
private engagements and partnerships. Examples that must never appear: Vizible
Agency, Leadminerr, Birdeye, Sinclair, TalentFoot job hunting, and any
collections agency. Lists of items Michael should follow up on must never appear
in the public report; send them to him privately in chat instead.

Also exclude email links, personal meetings or appointments, billing or account
information, credentials and security administration, private support
conversations, and private operational status. Do not move excluded copy to
another card, notes, metadata, test fixture, commit message, or public log. When
public evidence is missing, omit the item; do not substitute inferred
achievements or chart totals.

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
5. Commit a sanitized category summary and publish without waiting for approval.

Web production builds use Blacksmith through the GitHub organization and deploy
archived Vercel prebuilt output. Local checks do not deploy. Replacing current
reports does not remove old Git history, immutable deployments, or third-party
search/cache copies; do not rewrite history as part of a report correction.
