# Bar-B-Que Wagon — keep it alive on Vercel

The site is alive at https://barbquewagoncom.vercel.app. Apex `barbquewagon.com` has no DNS. I did not fight the apex.

## What was true

- Alias https://barbquewagoncom.vercel.app returned **200** on a 32-day-old production deploy (`dpl_6sJW2tHSTrfXjfaF6bimtunh5Qwe`, 2026-08-08).
- `/` `/menu` `/about` `/catering` `/contact` were **200**.
- `barbquewagon.com` and `www.barbquewagon.com` did not resolve. `curl` to the apex: **000 / could not resolve host**.
- Footer Instagram was `href="#"`. Facebook URL was real. No real Instagram exists for this shop.
- JSON-LD restaurant `url` was `https://barbquewagon.com` — a dead hostname. Homepage claimed a domain that is dark.
- README did not say where the site actually lives.
- PLAN.md was already honest that contact/catering forms are wired. That was not drift.
- `POST /api/contact` and `POST /api/catering` with valid bodies returned **500**. Empty body: **400**. GET: **405**.
- Vercel production env had Convex (`NEXT_PUBLIC_CONVEX_URL`, `CONVEX_DEPLOYMENT`, `CONVEX_DEPLOY_KEY`). No `RESEND_API_KEY`, no `FROM_EMAIL`, no `OWNER_EMAIL`.
- Convex prod (`prod:clean-goldfinch-839`) is over the free plan. Mutations return Server Error. I deployed the functions anyway; writes stay disabled until the plan is upgraded.

## What is true now

- Production alias is **200** on `dpl_8Unu6hpqkXwtJ9QJsA4HLjH2332N` (2026-09-09).
- Canonical, Open Graph, and JSON-LD point at https://barbquewagoncom.vercel.app.
- Instagram pound-sign is gone. Facebook stays.
- README and PLAN name the Vercel alias as the homepage.
- Form routes no longer 500 when Convex/Resend cannot accept a lead. They return **503** and tell the visitor to call (828) 488-9521.
- Git deploys on `main` are still off. This went out as a prebuilt `vercel deploy --prod --archive=tgz`.

## HTTP receipts (2026-09-09)

| URL | Status |
| --- | --- |
| https://barbquewagoncom.vercel.app/ | **200** (`x-robots-tag: index, follow`) |
| https://barbquewagoncom.vercel.app/menu | **200** |
| https://barbquewagoncom.vercel.app/about | **200** |
| https://barbquewagoncom.vercel.app/catering | **200** |
| https://barbquewagoncom.vercel.app/contact | **200** |
| https://barbquewagon-pl33n7yqj-hustle-launch.vercel.app/ | **200** |
| https://barbquewagon.com | **000** (no DNS) |
| POST `/api/contact` `{}` | **400** `Invalid form data` |
| POST `/api/contact` valid body | **503** `Could not send right now. Call (828) 488-9521.` |
| POST `/api/catering` valid body | **503** `Could not send right now. Call (828) 488-9521.` |
| GET `/api/contact` | **405** |

Homepage HTML: no Instagram, no `href="#"`, Facebook link present, `rel="canonical"` = `https://barbquewagoncom.vercel.app`, JSON-LD `url` = `https://barbquewagoncom.vercel.app`.

## URLs

- Live: https://barbquewagoncom.vercel.app
- This deploy: https://barbquewagon-pl33n7yqj-hustle-launch.vercel.app
- Inspect: https://vercel.com/hustle-launch/barbquewagon.com/8Unu6hpqkXwtJ9QJsA4HLjH2332N
- Branch: `fix/keep-alive-vercel-alias`
- Open PR from: https://github.com/HurleyUS/barbquewagon.com/pull/new/fix/keep-alive-vercel-alias

## Commits

- `31ce2bd18082131cf68aaa394e9c1f1295ad471e` — `fix: keep the Vercel alias honest and stop form 500s`
- `c5f31098c74b3630ab25662fbb9ee198e2d71186` — `fix: stop form 500s when Convex is over quota`

Pushed to `origin/fix/keep-alive-vercel-alias`. Graphite is not installed here. `~/bin/freview` does not exist; fallow audit errored on a missing baseline (`{"error":true,...}`) and was treated as non-blocking.

## Leftover for Michael

- Forms will not land until Convex is upgraded **or** Resend is wired. Resend needs `RESEND_API_KEY` + `FROM_EMAIL` on a verified domain. Do not use `@barbquewagon.com` — that domain has no DNS.
- Owner inbox on the public site is `bbqwagon@gmail.com`. Phone is (828) 488-9521.
- Apex stays dark on purpose.
- `robots.txt` and `sitemap.xml` are still **404**. ROADMAP.
- Convex deploy key is stored on Vercel as "Non-sensitive". Lock that if you care.
- Probe posts from this turnaround never persisted (Convex refused them). Nothing to delete.
- Merge the branch when you want `main` to match production. Shipping still needs the prebuilt path; git deploys on `main` are disabled.
