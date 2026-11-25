# Hustle Launch product hosts are subdomains. We never owned the apexes.

Punch: `hustlechat.com` and friends were a past-agent hallucination. The products live under hustlelaunch.com. Vercel has every subdomain attached. Cloudflare CNAME is the only missing punch. I could not write DNS — wrangler OAuth is dead (expired 2026-06-07, API 401/403), no `CLOUDFLARE_API_TOKEN` in the environment, and that old OAuth grant did not include DNS write anyway.

Do not buy `hustlechat.com`. Do not claim it. Same for crm/desk/forms/convert/mail.

hustlelaunch.com apex already serves on Vercel. Nameservers are Cloudflare (`becky.ns.cloudflare.com`, `yevgen.ns.cloudflare.com`). Vercel’s intended NS do not match. That is why these are Cloudflare CNAMEs, not a NS cutover.

## What was true

- Marketing shells claimed `hustlechat.com`, `hustlecrm.com`, `hustledesk.com`, `hustleforms.com`, `hustleconvert.com`, `hustlemail.com`.
- Some of those apexes are other people’s sites (GoDaddy park, PHP login, WordPress). Some are NXDOMAIN.
- `launchpad.hustlelaunch.com` was NXDOMAIN. The app was still create-next-app. Providers got mounted overnight. Clerk/Resend still assumed keys existed.

## What is true now

- All seven hosts are added on the Vercel project. Project-side: verified. DNS-side: invalid until Cloudflare gets the records below.
- In-repo URLs, OG metadata, sitemaps, READMEs, and support mail now use hustlelaunch.com. Support mail is `support@hustlelaunch.com`. Old `app.*` / `cdn.*` host claims are gone except as “that was fiction.”
- LaunchPad has an honest landing: starter kit, not a live product, no `/pro`. Clerk and Resend no-op without keys.
- `*.vercel.app` fallbacks for the six product apps still **200**.
- LaunchPad production deploy **failed** on Resend key construction. That is fixed on the branch. Redeploy is blocked by Vercel’s free daily cap (`api-deployments-free-per-day`, more than 100). `launchpad.vercel.app` is **someone else’s Svelte app**. Do not claim it.

## Table

| old lie | new host | vercel add | DNS | HTTP |
|---|---|---|---|---|
| hustlechat.com | chat.hustlelaunch.com | Success — attached to `hustlechat-com`. Project verified. | NXDOMAIN (no CNAME yet) | public: NXDOMAIN. Fallback `https://hustlechat-com.vercel.app` **200**. Production redeployed with new copy. |
| hustlecrm.com | crm.hustlelaunch.com | Success — `hustlecrm-com`. Project verified. | NXDOMAIN | public: NXDOMAIN. `https://hustlecrm-com.vercel.app` **200**. Production redeployed with new copy. |
| hustledesk.com | desk.hustlelaunch.com | Success — `hustledesk-com`. Project verified. | NXDOMAIN | public: NXDOMAIN. `https://hustledesk-com.vercel.app` **200** (old copy; redeploy hit the 100/day cap). |
| hustleforms.com | forms.hustlelaunch.com | Success — `hustleforms-com`. Project verified. | NXDOMAIN | public: NXDOMAIN. `https://hustleforms-com.vercel.app` **200** (old copy; cap). |
| hustleconvert.com | convert.hustlelaunch.com | Success — `hustleconvert-com`. Project verified. | NXDOMAIN | public: NXDOMAIN. `https://hustleconvert-com.vercel.app` **200** (old copy; cap). |
| hustlemail.com | mail.hustlelaunch.com | Success — `hustlemail-com`. Project verified. | NXDOMAIN | public: NXDOMAIN. `https://hustlemail-com.vercel.app` **200** (old copy; cap). |
| launchpad.hustlelaunch.com (claimed, NXDOMAIN) | launchpad.hustlelaunch.com | Success — new project `launchpad` (`prj_m1SX3XAZET4cyKiLp84VnwGcF2yd`). Project verified. | NXDOMAIN | public: NXDOMAIN. Production deploy **Error** (Resend). Retry: `Resource is limited - try again in 24 hours (more than 100, code: "api-deployments-free-per-day")`. Failed dpl SSO 302. `https://launchpad-hustle-launch.vercel.app` **404** `DEPLOYMENT_NOT_FOUND`. |

Vercel add command used: `/home/michael/.vite-plus/bin/vercel domains add <host> <project> --scope hustle-launch`.

## Cloudflare CNAME table (DNS-only / proxy disabled)

Vercel verify did **not** ask for generic `cname.vercel-dns.com` on these. It printed unique `*.vercel-dns-017.com` targets. Existing working subs (`my`, `boilerplate`) still resolve via `cname.vercel-dns.com`. Use what Vercel printed:

| type | name | target | proxy |
|---|---|---|---|
| CNAME | chat | `e470962c3532378f.vercel-dns-017.com.` | DNS only |
| CNAME | crm | `b1ada24e2477d645.vercel-dns-017.com.` | DNS only |
| CNAME | desk | `c6b6d7058b8ec8db.vercel-dns-017.com.` | DNS only |
| CNAME | forms | `2d0354128fe8523e.vercel-dns-017.com.` | DNS only |
| CNAME | convert | `fa3d669177e54033.vercel-dns-017.com.` | DNS only |
| CNAME | mail | `9e59f95c9c113a29.vercel-dns-017.com.` | DNS only |
| CNAME | launchpad | `c2e49a2edf5bf344.vercel-dns-017.com.` | DNS only |

Zone: `hustlelaunch.com`. One-click Domain Connect (needs you logged into Cloudflare):

- chat: `https://vercel.com/api/v9/projects/prj_486YDjZP9hr9ALbnyXTfpGWZy6Vt/domains/chat.hustlelaunch.com/domain-connect/apply?teamId=team_wwR9daVDbhcAIxrz4GtDXKsI`
- crm: `https://vercel.com/api/v9/projects/prj_3Qpgh88SD21UBNlm2PuHhuYgvQkK/domains/crm.hustlelaunch.com/domain-connect/apply?teamId=team_wwR9daVDbhcAIxrz4GtDXKsI`
- desk: `https://vercel.com/api/v9/projects/prj_2qg2uUv4sSFrJnZw3hUsLW1Rba7E/domains/desk.hustlelaunch.com/domain-connect/apply?teamId=team_wwR9daVDbhcAIxrz4GtDXKsI`
- forms: `https://vercel.com/api/v9/projects/prj_4kLYWdDzgGTjQvpNuvsAlaHZ4fG1/domains/forms.hustlelaunch.com/domain-connect/apply?teamId=team_wwR9daVDbhcAIxrz4GtDXKsI`
- convert: `https://vercel.com/api/v9/projects/prj_K7VMLCybFiwKMXATRU0TmFbJxYnZ/domains/convert.hustlelaunch.com/domain-connect/apply?teamId=team_wwR9daVDbhcAIxrz4GtDXKsI`
- mail: `https://vercel.com/api/v9/projects/prj_TfIlUcv71kYB9iYInxm9OKTaQobR/domains/mail.hustlelaunch.com/domain-connect/apply?teamId=team_wwR9daVDbhcAIxrz4GtDXKsI`
- launchpad: `https://vercel.com/api/v9/projects/prj_m1SX3XAZET4cyKiLp84VnwGcF2yd/domains/launchpad.hustlelaunch.com/domain-connect/apply?teamId=team_wwR9daVDbhcAIxrz4GtDXKsI`

Then: `vercel domains verify <host> --scope hustle-launch`.

## URLs that already 200

- https://hustlechat-com.vercel.app — 200, new copy (`chat.hustlelaunch.com`)
- https://hustlecrm-com.vercel.app — 200, new copy (`crm.hustlelaunch.com`)
- https://hustledesk-com.vercel.app — 200, previous production
- https://hustleforms-com.vercel.app — 200, previous production
- https://hustleconvert-com.vercel.app — 200, previous production
- https://hustlemail-com.vercel.app — 200, previous production
- https://www.hustlelaunch.com — 200 (apex 301s here)
- https://my.hustlelaunch.com — 200
- https://boilerplate.hustlelaunch.com — 200

## Commits / PRs

Branch on every repo: `fix/hustlelaunch-subdomains`

| repo | commit | PR |
|---|---|---|
| hustlechat-com | `32e8451` | https://github.com/michaelmonetized/hustlechat-com/pull/7 |
| hustlecrm-com | `a55e3f8` | https://github.com/michaelmonetized/hustlecrm-com/pull/9 |
| hustledesk-com | `9cfcb98` | https://github.com/michaelmonetized/hustledesk-com/pull/9 |
| hustleforms-com | `0fa8e0f` | https://github.com/michaelmonetized/hustleforms-com/pull/10 |
| hustleconvert-com | `3fd639c` | https://github.com/michaelmonetized/hustleconvert-com/pull/6 |
| hustlemail-com | `664b383` | https://github.com/michaelmonetized/hustlemail-com/pull/8 |
| launchpad | `3cf6138` landing, `8e29502` Resend lazy-init | https://github.com/michaelmonetized/launchpad/pull/8 |

## Leftover for Michael

1. Paste the seven CNAMEs in Cloudflare for `hustlelaunch.com` (DNS only). Or click the Domain Connect links while logged into Cloudflare. I could not. Wrangler is logged out.
2. After the Vercel daily deploy cap resets: `cd ~/Projects/launchpad && /home/michael/.vite-plus/bin/vercel --prod --yes --scope hustle-launch`. That is the only way launchpad.hustlelaunch.com gets a real 200. Merge PR #8 first or deploy from that branch.
3. Merge the six product PRs. Redeploy desk/forms/convert/mail after the cap so production copy matches the new hosts. Chat and CRM already shipped.
4. Re-auth Cloudflare with a token that can write zone DNS (`zone:dns:edit` on `hustlelaunch.com`). The June wrangler OAuth is trash.
5. Do not switch hustlelaunch.com nameservers to Vercel. Cloudflare is the source of truth. Apex already works.
