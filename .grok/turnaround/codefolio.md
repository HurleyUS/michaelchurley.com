# Codefolio

Codefolio is a GitHub-sync developer portfolio that never launched. Specs and UI shipped. Auth, billing, and the name did not.

## What was true

- Private repo, three commits, spec-first (~4k lines). Clerk + Convex in the tree. Stripe and Resend in `package.json`, never imported as working code.
- Vercel project `codefolio` on hustle-launch existed. Production was **404** `DEPLOYMENT_NOT_FOUND`.
- Build died without Convex: `No address provided to ConvexReactClient` during prerender of `/_not-found`.
- `DEPLOY.md` was a docs-only close. No env vars on the project.
- Marketing OG claimed `codefolio.dev`. That domain is Abdel Ahzab's site. Not ours.
- Homepage sold a live SaaS: fake 10K developers, fake team, "Get started free" into Clerk shells that could not sign anyone in.

## What is true now

Canonical host is the alias we actually ship: https://codefolio-hustle-launch.vercel.app

It is a showcase. Not a product you can join.

- Convex and Clerk are optional. Missing env does not crash the build. Signup, login, and dashboard say they are dark.
- Specs are public at `/spec` (DESIGN, TECH-REQ, CONTRACTS, COMPLIANCE, REVIEW).
- `/demo` is a static mock of a public `/:username` page. Labeled as a mock. Stars are zero.
- Every product claim of `codefolio.dev` is gone. Remaining mentions are the disclaimer: we do not own it, we do not point DNS there.
- Vercel SSO protection was on (`all_except_custom_domains`). That 302'd the alias to login. Disabled. Alias is **200**.
- Health endpoint reports the missing keys instead of pretending they exist.

## URLs

- Canonical: https://codefolio-hustle-launch.vercel.app
- Also aliased: https://codefolio-rho.vercel.app
- Inspect: https://vercel.com/hustle-launch/codefolio/J9iVpPMMDPDEtQ8Hshv43K61VHSS
- Repo: https://github.com/michaelmonetized/codefolio
- Branch: `turnaround/showcase`
- Not ours: https://codefolio.dev (Abdel Ahzab)

## HTTP receipts (2026-09-09, after SSO off)

| URL | status | notes |
| --- | --- | --- |
| https://codefolio-hustle-launch.vercel.app | **200** | title `Codefolio — spec showcase`, prerender, canonical host in body, Abdel named, no "Get started free", no "10K+" |
| `/spec` | 200 | spec index |
| `/spec/design` | 200 | DESIGN.md |
| `/spec/tech-req` | 200 | TECH-REQ.md |
| `/spec/contracts` | 200 | CONTRACTS.md |
| `/spec/compliance` | 200 | COMPLIANCE.md |
| `/spec/review` | 200 | REVIEW.md |
| `/demo` | 200 | static public-page UI |
| `/demo/resume` | 200 | static resume |
| `/demo/design-system` | 200 | static project page |
| `/dashboard` | 200 | "Dashboard is dark" |
| `/login` | 200 | "Sign in is dark" |
| `/signup` | 200 | not a join form |
| `/about` `/pricing` `/features` `/examples` `/privacy` `/terms` `/blog` `/careers` | 200 | honest copy |
| `/api/health` | 200 | `{"ok":true,"showcase":true,"missing":["NEXT_PUBLIC_CONVEX_URL","NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY","CLERK_SECRET_KEY"]}` |
| https://codefolio-rho.vercel.app | 200 | extra production alias |
| https://codefolio-3cv7rj1sq-hustle-launch.vercel.app | 200 | this deploy |
| https://codefolio.vercel.app | **404** | `DEPLOYMENT_NOT_FOUND` — never assigned to this project |
| https://codefolio.dev | 308 → www | someone else's site. left it alone. |

Before this ship, the canonical alias was:

```
HTTP/2 404
x-vercel-error: DEPLOYMENT_NOT_FOUND
```

First deploy of the showcase 302'd to `https://vercel.com/sso-api` until SSO protection was disabled.

## Commits

- Repo `/home/michael/Projects/codefolio`
- Branch `turnaround/showcase` (pushed)
- `0993bac07d5dbb8c090892c4b7f4c223fac033fe` — `feat: ship the spec showcase, drop the stolen name`
- Production deploy `dpl_J9iVpPMMDPDEtQ8Hshv43K61VHSS` (CLI `--prod`, not a main merge)

## Leftover for Michael

- `main` is still the old tree. Production is this branch via CLI. Merge `turnaround/showcase` before anyone redeploys `main`, or prod snaps back to a 404.
- No Clerk keys. No Convex address. No Stripe. No Resend. Do not invent them. `/api/health` lists what is missing.
- Do not buy or CNAME `codefolio.dev`. Pick a domain you own if this ever becomes a product.
- `codefolio.vercel.app` is still 404. The live aliases are `codefolio-hustle-launch.vercel.app` and `codefolio-rho.vercel.app`.
- Vercel still sends `x-robots-tag: noindex` on the `.vercel.app` host. Fine for a showcase. Flip it if you want it indexed.
- Turbopack warns that `/spec/[slug]` traces `process.cwd()` for the markdown files. Pages are SSG; the HTML is baked. Warning, not a 404.
