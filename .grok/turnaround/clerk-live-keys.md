# Clerk live keys — six products still on test (or missing)

Punch: none of these six had a `pk_live` on Vercel. Not production, not preview, not development, not a leftover unused var. Clerk CLI is not installed. I will not invent keys. Live HTML now says **TEST MODE** instead of pretending.

## Table

| product | was | now | HTML receipt | leftover for Michael |
|---|---|---|---|---|
| s12.in | Production `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` = `pk_test` (instance `sweet-gannet-34.clerk.accounts.dev`). Live HTML loaded `pk_test`. | Same test keys. Banner on every page. Deploy aliased to `www.s12.in`. | `200 https://www.s12.in/` — `TEST MODE — Clerk is on pk_test, not pk_live.` + `pk_test` still in HTML. | Create Clerk **production** instance from `sweet-gannet-34`. Put `pk_live` / `sk_live` on Vercel production. Redeploy. Banner dies when `pk_live` is present. Merge `fix/clerk-test-mode-banner` (`f9ba9b8`). |
| reaferral | Production `pk_test` / `sk_test`. JWT issuer `ace-bass-12.clerk.accounts.dev` (trailing newline on the env value). Live app: `https://reaferral.vercel.app` had `pk_test`. `reaferral.com` / `www.reaferral.com` = Cloudflare parking page, not the Vercel alias. | Banner on `reaferral.vercel.app`. Vercel still aliases `www.reaferral.com` but DNS does not point there. | `200 https://reaferral.vercel.app/` — `TEST MODE — Clerk is on pk_test, not pk_live.` + `pk_test`. `200 https://www.reaferral.com/` — Cloudflare Registrar parking (1513 bytes). No TEST MODE. No Clerk. | Clerk production instance from `ace-bass-12`. Replace Vercel production Clerk env (and fix `CLERK_JWT_ISSUER_DOMAIN` — strip the newline, point it at the **production** Clerk Frontend API). Point DNS. Merge `8736cac`. |
| ileague.golf | Production + preview both `pk_test` (`loving-orca-29.clerk.accounts.dev`). Stripe on this project is already `pk_live` — Clerk was the lie. | Banner. Still `pk_test`. Deploy aliased to `ileague.golf`. Stale unused project `ileague-web` also only has `pk_test` on all three envs. | `200 https://www.ileague.golf/` — `TEST MODE — Clerk is on pk_test, not pk_live.` + `pk_test`. | Clerk production instance from `loving-orca-29`. Set `pk_live` / `sk_live` on Vercel project `ileague.golf` production (and preview if you want previews honest). Redeploy. Merge `20b15c2`. Ignore or delete `ileague-web`. |
| itour.golf | Live was a **212-day-old** production deploy serving **“2026 Season Now Open”**. Repo HEAD is the 2027 lander. **Zero** Clerk env vars on `itour-golf`. No `pk` in HTML. Project has **no Git link**. | HEAD deployed from `web/`. Custom domain aliased. Season is 2027. Banner because Clerk keys are missing. | `200 https://www.itour.golf/` — `TEST MODE — Clerk production keys are missing.` `May 12, 2027` true. `2027 Season` true. `2026 Season Now Open` **false**. No `pk_test` / `pk_live`. | Create a Clerk app (or production instance) for itour.golf. Add `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` + `CLERK_SECRET_KEY` to Vercel project `itour-golf` production. Connect GitHub `HurleyUS/itour.golf` with root `web` so this cannot rot for 212 days again. Merge `0302351`. |
| cravees.com | No Clerk env on production/preview/development. Marketing HTML had no `pk`. Dashboard/sign-in still import Clerk. Stripe is already `pk_live`. | Banner on every page. Still no Clerk keys. | `200 https://www.cravees.com/` — `TEST MODE — Clerk production keys are missing.` No `pk`. | Create Clerk production instance. Add `pk_live` / `sk_live` (and webhook secret if you use it) to Vercel project `cravees-com` production. Redeploy. Merge `abc3887`. |
| coordinatorapp.com | No Clerk env at all. Sign-in page already said “Clerk keys required.” Stripe is `pk_live`. | Banner on every page including `/sign-in`. Still no Clerk keys. | `200 https://www.coordinatorapp.com/` — `TEST MODE — Clerk production keys are missing.` No `pk`. | Same as cravees: Clerk production instance, then Vercel env on `coordinatorapp-com`. Redeploy. Merge `a3aedec`. |

## What was true

- `pk_live` does not exist on these Vercel projects. I pulled production, preview, and development. Encrypted `ls` is useless; `env pull` showed prefixes only. Result: `pk_test`/`sk_test` or nothing.
- Clerk CLI: not installed. No `~/.clerk`. I did not mint keys.
- itour production was the Feb 9 2026 deploy (`dpl_YCgVVV5eB75NkR4Bt5NcfcYJKsY1`) with the fake 2026 season.

## What is true now

TEST MODE is in the HTML. That was the lie. It is gone.

| live URL | HTTP | TEST MODE | Clerk pk in HTML |
|---|---|---|---|
| https://www.s12.in/ | 200 | yes (`pk_test`) | `pk_test` |
| https://reaferral.vercel.app/ | 200 | yes (`pk_test`) | `pk_test` |
| https://www.ileague.golf/ | 200 | yes (`pk_test`) | `pk_test` |
| https://www.itour.golf/ | 200 | yes (keys missing) | none |
| https://www.cravees.com/ | 200 | yes (keys missing) | none |
| https://www.coordinatorapp.com/ | 200 | yes (keys missing) | none |
| https://www.reaferral.com/ | 200 | no — Cloudflare parking | none |

Banner source: `TestModeBanner` in root layout. It renders unless `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` starts with `pk_live_`. So when you actually install live keys and rebuild, the banner disappears. No extra flag.

itour is the 2027 lander. “2026 Season Now Open” is dead.

## Deploys / commits

Vercel CLI `/home/michael/.vite-plus/bin/vercel` scope `hustle-launch`. Production deploys from the banner branches (git deploy on `main` is off for coordinator/cravees; itour has no git link anyway).

| project | commit | branch | production deploy | aliased |
|---|---|---|---|---|
| s12-in | `f9ba9b8` | `fix/clerk-test-mode-banner` | https://s12-cdq2y2wfl-hustle-launch.vercel.app | https://www.s12.in |
| reaferral | `8736cac` | `fix/clerk-test-mode-banner` | https://reaferral-24cdh59w8-hustle-launch.vercel.app | https://www.reaferral.com (DNS not following) |
| ileague.golf | `20b15c2` | `fix/clerk-test-mode-banner` | https://ileaguegolf-6pnb8egsu-hustle-launch.vercel.app | https://ileague.golf |
| itour-golf | `0302351` | `fix/clerk-test-mode-banner` | https://itour-golf-2jvh4dt5z-hustle-launch.vercel.app | https://www.itour.golf |
| cravees-com | `abc3887` | `fix/clerk-test-mode-banner` | https://cravees-9d4gfccsx-hustle-launch.vercel.app | https://www.cravees.com |
| coordinatorapp-com | `a3aedec` | `fix/clerk-test-mode-banner` | https://coordinatorapp-h8dbe12u5-hustle-launch.vercel.app | https://www.coordinatorapp.com |

Pushed to HurleyUS. PR links:

- https://github.com/HurleyUS/s12.in/pull/new/fix/clerk-test-mode-banner
- https://github.com/HurleyUS/reaferral/pull/new/fix/clerk-test-mode-banner
- https://github.com/HurleyUS/ileague.golf/pull/new/fix/clerk-test-mode-banner
- https://github.com/HurleyUS/itour.golf/pull/new/fix/clerk-test-mode-banner
- https://github.com/HurleyUS/cravees.com/pull/new/fix/clerk-test-mode-banner
- https://github.com/HurleyUS/coordinatorapp.com/pull/new/fix/clerk-test-mode-banner

## Clerk instances Michael must promote

Dashboard: https://dashboard.clerk.com

At the top: **Development** → **Create production instance**. Clone settings or start clean. SSO / integrations / paths do **not** copy. Add the production domain. Copy `pk_live_` and `sk_live_` from API keys.

| product | current development Frontend API | production domain to add in Clerk |
|---|---|---|
| s12.in | `sweet-gannet-34.clerk.accounts.dev` | `www.s12.in` (and `s12.in`) |
| reaferral | `ace-bass-12.clerk.accounts.dev` | `reaferral.vercel.app` until DNS is fixed, then `www.reaferral.com` |
| ileague.golf | `loving-orca-29.clerk.accounts.dev` | `www.ileague.golf` / `ileague.golf` |
| itour.golf | none on Vercel | `www.itour.golf` |
| cravees.com | none on Vercel | `www.cravees.com` |
| coordinatorapp.com | none on Vercel | `www.coordinatorapp.com` |

Optional CLI once you are logged into Clerk: `npx clerk@latest deploy` (not installed here; I did not run it).

## Vercel env commands (after you have real `pk_live` / `sk_live`)

Do not paste test keys back. Replace `pk_live_…` / `sk_live_…` with the dashboard values. `printf` so a trailing newline cannot sneak in like reaferral’s JWT issuer.

```bash
VERCEL=/home/michael/.vite-plus/bin/vercel
SCOPE=hustle-launch

put_live() {
  local project="$1"
  # overwrite if a test key already occupies production
  $VERCEL env rm NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY production --yes --scope "$SCOPE" --project "$project" || true
  $VERCEL env rm CLERK_SECRET_KEY production --yes --scope "$SCOPE" --project "$project" || true
  printf '%s' "$PK_LIVE" | $VERCEL env add NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY production --scope "$SCOPE" --project "$project"
  printf '%s' "$SK_LIVE" | $VERCEL env add CLERK_SECRET_KEY production --scope "$SCOPE" --project "$project"
}

PK_LIVE='pk_live_…'
SK_LIVE='sk_live_…'

put_live s12-in
put_live reaferral
put_live ileague.golf
put_live itour-golf
put_live cravees-com
put_live coordinatorapp-com
```

Convex-backed apps also need the **production** Clerk issuer, not `*.clerk.accounts.dev`:

```bash
printf '%s' 'https://YOUR_PROD_FAPI' | $VERCEL env add CLERK_JWT_ISSUER_DOMAIN production --scope hustle-launch --project reaferral
# s12 / ileague: set whatever Convex auth config already expects (issuer / JWKS), then convex env set
```

Then rebuild production so `NEXT_PUBLIC_*` is inlined:

```bash
$VERCEL deploy --prod --yes --scope hustle-launch --cwd /home/michael/Projects/s12.in
$VERCEL deploy --prod --yes --scope hustle-launch --cwd /home/michael/Projects/reaferral
$VERCEL deploy --prod --yes --scope hustle-launch --cwd /home/michael/Projects/ileague.golf
$VERCEL deploy --prod --yes --scope hustle-launch --cwd /home/michael/Projects/itour.golf/web
$VERCEL deploy --prod --yes --scope hustle-launch --cwd /home/michael/Projects/cravees.com
$VERCEL deploy --prod --yes --scope hustle-launch --cwd /home/michael/Projects/coordinatorapp.com
```

Receipt that it worked:

```bash
curl -sL https://www.s12.in/ | grep -E 'pk_live_|pk_test_|TEST MODE'
# expect: pk_live_   and NO "TEST MODE"
```

## DNS leftover (Cloudflare API was not available)

`reaferral.com` / `www.reaferral.com` resolve to Cloudflare (`104.21.72.64`) and serve the Registrar parking page. Vercel already has both domains verified on project `reaferral` (`www` is the target, apex redirects to `www`).

| host | record | value |
|---|---|---|
| `www.reaferral.com` | CNAME | `cname.vercel-dns.com` |
| `reaferral.com` | keep Vercel apex / redirect to `www` | already configured on the project |

Until that CNAME exists, the live product URL is `https://reaferral.vercel.app`.

## What I will not claim

- I did not put `pk_live` on anything. There was none to copy.
- I did not create Clerk production instances. That is your dashboard.
- `reaferral.com` is not the app until DNS moves.
