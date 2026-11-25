# Quick deploys

The pages that were 404/500 are 200. The fake Google bearer is gone. `.env` is out of git.

## Table

| repo | was | now | URL | issues closed |
| --- | --- | --- | --- | --- |
| simple | old alias `DEPLOYMENT_NOT_FOUND`; `simple-two-silk.vercel.app` already 200; SA leftovers ticket open | public 200 on both production aliases; Firebase still env-only, no SA in the tree | https://simple-two-silk.vercel.app/ · https://simple-hustle-launch.vercel.app/ | #8, #9, #11 (dup of #10) |
| kitchen | `/discover` `/vision` `/mission` 404 on an 83-day-old deploy | those three routes 200 | https://kitchen-hustle-launch.vercel.app/discover · /vision · /mission also https://kitchen-gilt-nine.vercel.app | #1, #3 (dup) |
| citation-manager | placeholder JWT `Bearer type:project`; alias already 200 | real RS256 JWT + token exchange; alias still 200 | https://citation-manager-pi.vercel.app/ | #45, #48 (dup) |
| getfarmin.com | every route 500 (`clerkMiddleware` with no keys); `getfarmin.com` DNS NXDOMAIN | showcase 200 with labeled sample cards; dashboard/sign-in degrade instead of exploding | https://getfarmin-com.vercel.app/ · /browse · /about | none open (prior dups already closed) |
| santabox.org | `/impact` `/subscribe` `/create-wishlist` 500; OG/favicon 404; homepage already 200 | those routes 200 with honest “not live” copy; OG/favicon 200 | https://santabox.org/impact → www · https://www.santabox.org/og-image.png | none open (OG tickets already closed; needed a deploy) |
| agent-os | `@anthropic-ai/sdk` imported, missing from package.json; `.env` tracked | dep added; `.env` untracked; `.env.example` in tree | n/a (CLI, not a site) | #1, #2 (dup) |

## HTTP receipts (2026-09-09)

```
200  https://simple-two-silk.vercel.app/
200  https://simple-two-silk.vercel.app/login
200  https://simple-two-silk.vercel.app/register
200  https://simple-hustle-launch.vercel.app/

200  https://kitchen-hustle-launch.vercel.app/
200  https://kitchen-hustle-launch.vercel.app/discover
200  https://kitchen-hustle-launch.vercel.app/vision
200  https://kitchen-hustle-launch.vercel.app/mission
200  https://kitchen-gilt-nine.vercel.app/discover
200  https://kitchen-gilt-nine.vercel.app/vision
200  https://kitchen-gilt-nine.vercel.app/mission

200  https://citation-manager-pi.vercel.app/
200  https://citation-manager-pi.vercel.app/auth

200  https://getfarmin-com.vercel.app/
200  https://getfarmin-com.vercel.app/browse
200  https://getfarmin-com.vercel.app/about
200  https://getfarmin-com.vercel.app/sign-in
200  https://getfarmin-com.vercel.app/dashboard
DNS  getfarmin.com / www.getfarmin.com  NXDOMAIN

200  https://santabox.org/            (307 → www)
200  https://santabox.org/impact
200  https://santabox.org/subscribe
200  https://santabox.org/create-wishlist
200  https://www.santabox.org/og-image.png          image/png
200  https://www.santabox.org/favicon.ico           image/vnd.microsoft.icon
200  https://www.santabox.org/apple-touch-icon.png  image/png
```

## What was true

- simple: overnight made Firebase env-only and got `simple-two-silk` up. Old alias still 404. SA ticket still open. Auth middleware still missing.
- kitchen: marketing nav pointed at routes the 83-day-old production build did not have.
- citation-manager: `generateGoogleJWT` returned `Bearer ${account.type}:${account.project_id}`. Alias already 200 after the middleware strip.
- getfarmin: Clerk middleware ran with no keys and 500’d the whole site. Browse was honest sample data in git, never deployed. Apex DNS does not exist.
- santabox: May 20 guarded the homepage. Impact/subscribe/create-wishlist still called Convex hooks with no provider. OG files were in git, not on the 32-day-old deploy.
- agent-os: `core.ts` imported Anthropic. package.json did not. `.env` with `ANTHROPIC_API_KEY` was tracked.

## What is true now

- simple public aliases 200. SSO on the project was blocking `simple-hustle-launch`; that’s off. Firebase env vars are still empty on Vercel, so auth is a dead button, not a crash.
- kitchen `/discover` `/vision` `/mission` 200. Shipped from a clean worktree on top of origin/main so the dirty local marketing rewrite was left alone.
- citation-manager signs a PKCS8 RS256 JWT and exchanges it at `https://oauth2.googleapis.com/token`. No fake bearer in the tree. Tested with a generated key.
- getfarmin showcase 200. No Clerk → no protect, dashboard/sign-in tell you accounts aren’t live, browse still says sample.
- santabox public routes 200 without Convex. Copy says the backend isn’t on this deploy. Assets 200.
- agent-os has `@anthropic-ai/sdk`. `.env` is gitignored. `.env.example` is the template.

## Commits

- simple `be1a14c`
- kitchen `5e9a120`
- citation-manager `a73466b`
- getfarmin.com `e87a0ff`
- santabox.org `8844a57`
- agent-os `65ee118`

## getfarmin.com DNS (Cloudflare API not used)

Vercel already has `www.getfarmin.com` as an alias. The names do not resolve. I did not fake DNS.

| host | type | value |
| --- | --- | --- |
| getfarmin.com | CNAME | cname.vercel-dns.com |
| www.getfarmin.com | CNAME | cname.vercel-dns.com |

Until those records exist, the live URL is https://getfarmin-com.vercel.app/

## Leftover for Michael

- simple **#10 still open**: no auth middleware / protected routes. Pages 200. Auth will not work until `NEXT_PUBLIC_FIREBASE_*` is set on Vercel production. I did not invent those keys.
- citation Google submit still needs `GOOGLE_SERVICE_ACCOUNT_JSON` or `GOOGLE_ACCESS_TOKEN` in Convex. The code will sign a real JWT when you put a real key there.
- agent-os: **rotate `ANTHROPIC_API_KEY`**. It was in git history. Untracking does not un-publish it.
- kitchen local tree is still a huge dirty WIP (lander rewrite). Production is origin/main + the three marketing routes. Don’t mix the two without looking.
- santabox Convex/Clerk/Stripe still unset. Public site stays up. Donations/subscriptions are not live.
- `~/bin/freview` is not on this machine. Fallow on citation/getfarmin/santabox returned `{ "error": true }` (missing baseline) — treated as non-blocking per the repo rule.
