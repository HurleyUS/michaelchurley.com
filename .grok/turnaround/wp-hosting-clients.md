# WordPress clients on hosting.com — follow-up

Punch: "remove key" did not take these sites down and did not migrate them off WordPress. It yanked a hardcoded Salespromis intake key out of the bathroom child theme and deleted vendored WP File Manager 7.2.9. Live bathroom is still supposed to be WordPress. Live salespromis.com is not.

You remember hosting.com. Public DNS does not.

## What was true

Overnight pack language made "remove key" sound like an off-switch. Issues #4 / #5 on `HurleyUS/www.mybathroomconversion.com` were the real job:

- Child theme `hello-theme-child-master/functions.php` POSTed Elementor Opt In leads to `https://api.salespromis.com/endpoint/intake/` with a hardcoded `API-KEY`.
- WP File Manager 7.2.9 sat in `wp-content/plugins/wp-file-manager` (~906 files).
- `local-xdebuginfo.php` had already been deleted (PR #2, `dc5a091`).

PR **#7** merged `2026-09-09T01:41:28Z` as `bb20ecf` / `928819d`. HEAD of bathroom is `6aecbff` (PLAN.md honesty, PR #9). File Manager is gone from the tree. Intake now reads `SALESPROMIS_API_KEY` from env or a `wp-config.php` constant. If unset, it logs `SALESPROMIS_API_KEY is not configured; skipping Salespromis intake.` and returns. That skip is why leads die if nobody set the env on the host. It is not "we turned WordPress off."

`HurleyUS/SalesPromis` README still claimed "This is the production site for SalesPromis!" The tree is a WP Engine `wp-content` dump. Live already was a Lovable SPA in the pack notes.

TLS 526 on bathroom was an open wound. Nobody was supposed to "fix" it by rebuilding in Next.

## What is true now

Probed **2026-09-09 ~11:01–11:05 UTC** from ATL.

### www.mybathroomconversion.com — still WordPress in git, not answering

| Check | Receipt |
| --- | --- |
| DNS NS | `ns-cloud-a{1-4}.googledomains.com` (Squarespace / Google Domains) |
| `www` CNAME | `wp.wpenginepowered.com` |
| A | `141.193.213.10`, `141.193.213.11` |
| IP whois | **WPEngine, Inc.** (`WPENG`) |
| HTTPS | curl **35** — `ssl/tls alert handshake failure` (alert 40). OpenSSL: **no peer certificate**. SNI `www.mybathroomconversion.com` on the WPE IP fails. SNI `wp.wpenginepowered.com` on the same IP serves `CN=wpenginepowered.com` (Let's Encrypt). |
| HTTP | **409 Conflict**, `Server: cloudflare`, body `error code: 1001` (16 bytes). Same on apex, `/wp-login.php`, `/wp-json/`. CF-RAY examples: `a385b206de35a720-ATL`. |
| crt.sh | 92 certs. Newest Let's Encrypt for `www` **expired 2026-01-17**. Apex expired **2026-01-16**. Nothing newer. That is the old 526 (origin cert dead) rotting into "the edge will not even handshake." |
| Guessed WPE install `mybathroomconversion.wpengine.com` | HTTPS **404**, Google Cloud Storage `UploadServer`, IP `130.211.29.77`. Install name is not the domain slug. |
| `*.hosting.com` for this brand | NXDOMAIN |

Repo HEAD: still WordPress. Child theme still hooks `elementor_pro/forms/new_record`. No Next app. Do not migrate to Vercel.

Conflict, not a blend: you said hosting.com. The domain currently CNAMEs at WP Engine's Cloudflare GES. If the files also live on a hosting.com box, that box is not what DNS hits.

### salespromis.com — live is Lovable, git is an old WP dump

| Check | Receipt |
| --- | --- |
| HTTPS apex | **200**, `server: cloudflare`, `x-deployment-id: cec7d3b9-93a2-459f-a65c-291996f62a00`, IP `185.158.133.1` → PTR `lovable-app-cd-1-4.p.l5e.io` |
| HTTPS www | **200**, same deployment id |
| HTML | Vite SPA. Title `SalesPromis \| AI-Powered Lead Generation - Pay Per Result`. `/lovable-uploads/80dcb74e-d506-4db2-88bd-d89dee8a7434-compressed.jpg`, `/assets/index-DRXtBQRf.js` (**200**, `content-type: text/javascript`, 750920 bytes) |
| `/wp-json/` | **200** — same SPA HTML, not WordPress JSON |
| `/wp-login.php`, `/xmlrpc.php` | **403** Cloudflare "Attention Required!", not `wp-login` |
| Git dump | WP Engine mu-plugin `wpe-cache-plugin`, `object-cache.php`, Elementor SSDI funnel, `ssdi-qualify.js`. HEAD `c543864` (2026-01-31 Stripe cursor rule only). |
| Guessed `salespromis.wpengine.com` | GCS **404**. That install is gone or renamed. |

Live is not WordPress. The GitHub dump is archive. README on a branch now says so.

### api.salespromis.com — intake is down

| Check | Receipt |
| --- | --- |
| A | `34.117.222.65` (`65.222.117.34.bc.googleusercontent.com`) |
| crt.sh | **0** certificates |
| TCP 443 | connects, then TLS **unexpected EOF** (curl 35) |
| HTTP POST `/endpoint/intake/` | **empty reply** / **connection reset** |
| `intake.salespromis.com` | `34.110.140.201`, HTTPS GET/POST **404**, `via: 1.1 google` |

A bathroom Opt In cannot land a lead right now even if the env is set. The form host does not handshake. The intake host does not complete TLS.

## What "remove key" actually was

In `wp-content/themes/hello-theme-child-master/functions.php` on bathroom:

```php
$salespromisapi_key = getenv('SALESPROMIS_API_KEY');
if (($salespromisapi_key === false || $salespromisapi_key === '') && defined('SALESPROMIS_API_KEY')) {
  $salespromisapi_key = SALESPROMIS_API_KEY;
}
if ($salespromisapi_key === false || $salespromisapi_key === '') {
  error_log('SALESPROMIS_API_KEY is not configured; skipping Salespromis intake.');
  return;
}
```

`.env.example` is an empty placeholder. `.gitignore` covers `.env.*` and `.log/`. Working tree has **no** quoted key assignment.

Old value: still in git history at `bb20ecf^`. JWT-shaped, length 24. Not reprinted here. **Rotate it at Salespromis/api** so the committed secret is dead. That is rotation. That is not "delete the WordPress lead pipe."

HEAD of bathroom has no remaining hardcoded intake secret in the child theme. Plugin vendor noise (`api_key` in Rank Math / Elementor) is not the Salespromis key.

SalesPromis dump: no File Manager, no hardcoded Salespromis key in the child theme. Dump root still has `local-xdebuginfo.php` (`<?php xdebug_info();`). Archive only. Not live.

## Leftover for Michael

1. **Bathroom TLS.** WP Engine User Portal: confirm the real install still exists, add `mybathroomconversion.com` + `www` to it, issue a new cert. Or, if the site really moved to hosting.com, point DNS at *that* origin and stop CNAMEing `wp.wpenginepowered.com`. Do not Vercel this.
2. **Rotate the old Salespromis API key.** History still has it. Invalidate at the API. Issue a new key. Put the new one in host env or `wp-config.php` as `SALESPROMIS_API_KEY`.
3. **Bring `api.salespromis.com` back.** Zero public certs. TCP then EOF. Until that POSTs, Opt In is a black hole.
4. **Do not deploy the git tree until env is set.** Unset env = silent skip. That was the point of the safety return.
5. **File Manager on the live host copy.** Git is clean. Confirm the production plugin directory actually dropped 7.2.9. We cannot see the host while TLS is dead.
6. **SalesPromis dump vs live.** README honesty is on a branch. Live stays Lovable. Dump stays WP archive. No Next rebuild.

## URLs / commits

- Story: this file
- Bathroom repo: https://github.com/HurleyUS/www.mybathroomconversion.com
- Bathroom security PR: https://github.com/HurleyUS/www.mybathroomconversion.com/pull/7 (`bb20ecf`, merged 2026-09-09T01:41:28Z)
- Bathroom main HEAD: `6aecbff`
- Bathroom README honesty: https://github.com/HurleyUS/www.mybathroomconversion.com/pull/10 branch `docs/live-hosting-honesty` commit `c8cff3a`
- SalesPromis dump: https://github.com/HurleyUS/SalesPromis main `c543864`
- SalesPromis README honesty: https://github.com/HurleyUS/SalesPromis/pull/1 branch `docs/readme-archive-vs-live` commit `7923941`
- Live bathroom (broken): https://www.mybathroomconversion.com
- Live salespromis (Lovable 200): https://salespromis.com
- Intake (down): https://api.salespromis.com/endpoint/intake/
