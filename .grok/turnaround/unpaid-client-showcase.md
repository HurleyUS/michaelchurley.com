# Unpaid client showcases live on vercel.app

Punch: three dead custom domains, three live `*.vercel.app` proofs. 200. No Clerk middleware 500. No Vercel 429 challenge. Sample inventory is labeled sample.

Do not send anyone to the custom domains. They slide on purpose.

## Table

| Product | Custom domain status | vercel.app URL | HTTP | What I fixed |
|---|---|---|---|---|
| WNC History Tours | `wnchistorytours.com` **526** (Cloudflare, left it) | https://wnchistorytours-com.vercel.app | **200** | Clerk middleware was 500ing (`Missing publishableKey`). No Clerk/Convex secrets in Vercel. Skip Clerk when keys are missing. Homepage is a static demo. Sample tours labeled sample. README points at vercel.app. |
| Your ZAXBYS franchise | `www.yourzaxbys.com` **NXDOMAIN** (left it) | https://wwwyourzaxbyscom.vercel.app | **200** | Already 200. README now leads with vercel.app. Lander stats labeled demo copy. No "Coming Soon". Clerk still signed-out, page still ships. |
| Waynesville store portal | `waynesville.yourzaxbys.com` **NXDOMAIN** (left it) | https://waynesvilleyourzaxbyscom.vercel.app | **200** | Bot Protection managed rule was `challenge` → 429 Security Checkpoint. Turned it off. Clerk `auth.protect()` was rewriting `/` to 404. Storefront routes are public. `/` `/about` `/menu` `/events` `/careers` `/catering` `/robots.txt` all 200. |

Browser UA used for receipts: Chrome 131 Windows.

## What was true

- WNC alias: **500** Internal Server Error. Log: `@clerk/nextjs: Missing publishableKey`. Production env had PostHog + a Resend email name. No `CLERK_*`. No `NEXT_PUBLIC_CONVEX_URL`.
- Zaxbys alias: **200** already. README and sitemap still worshipped the dead custom domain. Lander bragged 500+ locations / 25% cost cut like it was measured.
- Waynesville alias: **429** `x-vercel-mitigated: challenge`. Firewall `managedRules.bot_protection.action = challenge`. After that was off, Clerk still 404'd `/` (`x-clerk-auth-reason: protect-rewrite`) because `/` was not a public route.

Custom domains: WNC 526, the two Zaxbys hosts NXDOMAIN. Untouched.

## What is true now

- All three aliases return HTML 200 to a normal browser UA.
- WNC homepage: "Sample / example tours only." Cards are demo, not bookable.
- Zaxbys homepage: "Demo copy for this unpaid showcase. Not measured results."
- Waynesville homepage: real storefront (Wheelin' Wednesdays, Russ Avenue). Not a login wall.
- `robots.txt` on all three: `Disallow: /`. Sitemap URLs are the vercel.app hosts.
- Vanity 555 stays scrubbed.

## URLs

- https://wnchistorytours-com.vercel.app
- https://wwwyourzaxbyscom.vercel.app
- https://waynesvilleyourzaxbyscom.vercel.app

Deploys (hustle-launch, CLI `/home/michael/.vite-plus/bin/vercel`):

- WNC `dpl_9cQ75M7nfud4zgy44unXfL7mZ3Nm` aliased to `wnchistorytours-com.vercel.app`
- Zaxbys `dpl_CmF6rfAksKgcZyVgqC9q6SPYxBKN`
- Waynesville `dpl_Fkh1vjiCFXD8DcTJfRdmShP6Uu6x`

## Commits

Branches: `fix/unpaid-client-showcase`. Not force-pushed to main.

| Repo | SHA | Message |
|---|---|---|
| HurleyUS/wnchistorytours.com | `dba9e78e5` | fix: vercel.app showcase without Clerk 500 |
| HurleyUS/www.yourzaxbys.com | `6c28fe67b` | fix: point showcase at vercel.app and label demo copy |
| HurleyUS/waynesville.yourzaxbys.com | `6bab20c51` | fix: public storefront on vercel.app |

PRs (not merged, on purpose):

- https://github.com/HurleyUS/wnchistorytours.com/pull/new/fix/unpaid-client-showcase
- https://github.com/HurleyUS/www.yourzaxbys.com/pull/new/fix/unpaid-client-showcase
- https://github.com/HurleyUS/waynesville.yourzaxbys.com/pull/new/fix/unpaid-client-showcase

## Leftover for Michael

- Custom domains stay dead. Do not fight DNS.
- `X-Robots-Tag` on the aliases is still `index, follow` even though `robots.txt` disallows all. Project-level header from the old "index, follow" pass is winning over `vercel.json`. Optional. Showcase 200s either way.
- Zaxbys + Waynesville Clerk headers say `dev-browser-missing`. Test keys on a vercel.app host. Homepage 200s. Sign-in on the alias may not. Do not invent production Clerk secrets.
- WNC has no Convex in production. That is the point. Demo cards only.
- Waynesville dashboard/team routes still require Clerk. Correct. Public storefront is the showcase.
- Merge the three branches when you want Blacksmith/ship on main. Production is already the CLI `--prod` deploys above.
