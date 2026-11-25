# Kings Roofing NC — 526, not a missing Next app

The custom domain is dead because Cloudflare cannot complete TLS to whatever is sitting behind the orange cloud. The Next site is already live and healthy on Vercel. I added the hostnames to the project. I could not flip SSL or origin DNS — no Cloudflare API in this environment.

## What was true

- `https://kingsroofingnc.com` and `https://www.kingsroofingnc.com` returned **HTTP 2 526** from Cloudflare (`cf_ob_info=526`, empty body, `server: cloudflare`).
- Chromium screenshot of the apex: “This page isn't working / HTTP ERROR 526”.
- `https://kingsroofingnccom.vercel.app` returned **HTTP 2 200**, `server: Vercel`, `x-matched-path: /`.
- Custom domain was **not** on the Vercel project. TODO still said “add kingsroofingnc.com”.
- DNS is Cloudflare (`becky.ns.cloudflare.com` / `yevgen.ns.cloudflare.com`). Public A records are CF proxy IPs `104.21.43.203` and `172.67.185.40`. Vercel reports the domain **misconfigured**.
- Edge cert on the 526 is Cloudflare/Google Trust Services `CN=kingsroofingnc.com` (WE1). That is CF’s cert, not origin.
- Origin is **not** visible without the Cloudflare zone. Connecting to Vercel IPs with SNI `kingsroofingnc.com` dropped the handshake (`SSL routines::unexpected eof`) — expected when the hostname was not on the project.
- Old WordPress is gone from the public internet. Last good copies are Wayback 2024 (Hello Elementor + Elementor Pro). Live origin is not serving WP today.

## What is true now

- Vercel project `hustle-launch/kingsroofingnc.com` (`prj_9xy2mJdIuTIyIGDTaB6xyu3Vs0E6`) now has **both** `kingsroofingnc.com` and `www.kingsroofingnc.com` attached, `verified: true`.
- Live custom domain is **still 526**. Adding the hostname does not fix Cloudflare origin TLS. I did not touch CF DNS (no API token).
- Next repo on branch `fix/live-526-parity`: YouTube unblocked in CSP, old WP location URLs redirect, sitemap lists real routes, footer socials are the real URLs, contact meta interpolates the phone, OG image set, product photos restored from Wayback and wired into the color picker / carport / pole-truss / about pages.
- Intended origin is **Vercel**, not WordPress. The WP migration already happened. CF is still sitting in front of a host that cannot present a valid cert for this name.

## 526 diagnosis

Cloudflare **526** = SSL mode is Full (strict) and the origin certificate is invalid, expired, self-signed, or the wrong hostname.

Not 525 (handshake never completed). CF reached *something* on 443 and hated the cert.

Two remaining possibilities. Both need you in the Cloudflare dashboard:

1. **Origin is still the old WP box.** Cert died. CF Full (strict) explodes. Fix: point origin at Vercel, grey-cloud, keep SSL Full (strict) if you insist on orange-cloud.
2. **Origin is already a CNAME to Vercel**, but the hostname was not on the Vercel project, so Vercel would not serve a matching cert. I added the hostname. If this is the case, wait for cert issue — or grey-cloud so Vercel terminates TLS.

I cannot see the grey-cloud target. Do not guess.

Cloudflare API/auth is missing here. I did not fake DNS.

### DNS you need in Cloudflare

Keep MX on Cloudflare (email routing is live: `route1/2/3.mx.cloudflare.net`). Only change web records.

| Name | Type | Value | Proxy |
| --- | --- | --- | --- |
| `@` | CNAME (flatten) | `cname.vercel-dns.com` | **DNS only** (grey) |
| `www` | CNAME | `cname.vercel-dns.com` | **DNS only** (grey) |

Vercel also accepts `479fd555fadd6193.vercel-dns-017.com` or A `216.198.79.1` + `64.29.17.1`.

If you keep orange-cloud: SSL **Full (strict)**, origin those same Vercel targets, hostname already on the project. Grey-cloud is simpler. Vercel handles the cert.

## HTTP receipts — 2026-09-09 11:17 UTC

| URL | Status | Server |
| --- | --- | --- |
| `https://kingsroofingnc.com/` | **526** | cloudflare, cf-ray `a385c9ce7ad633df-ATL` |
| `https://www.kingsroofingnc.com/` | **526** | cloudflare |
| `http://kingsroofingnc.com/` | **301** → `https://kingsroofingnc.com/` | cloudflare |
| `https://kingsroofingnccom.vercel.app/` | **200** | Vercel, `x-matched-path: /` |

Screenshots: `.grok/turnaround/kingsroofingnc-shots/` (`LIVE-apex-526.png`, `home.png`, every Next route).

## Route-by-route: Next vs Wayback WP vs live

Live custom domain is 526 on every path. Comparison is Next (`kingsroofingnccom.vercel.app`) vs Wayback HTML from Aug 2024.

| Route | Next now | Wayback WP | Notes |
| --- | --- | --- | --- |
| `/` | 200 | 200 (2024-05-17 / later 2024-08) | Copy matches. Hero, lion, YouTube, location cards present on Next. CSP had `frame-src 'none'` so the YouTube embed was blocked — fixed on the branch. |
| `/about` | 200 | 200 `20240808171404` | Copy matches. Restored `slide4.jpeg`. |
| `/residential` | 200 | 200 `20240814142039` | Copy matches. |
| `/residential/asheville` | 200 | 200 `20240720190612` | Copy matches. |
| `/residential/cashiers` | 200 | 200 `20240720200151` | Copy matches. |
| `/residential/highlands` | 200 | 200 `20240814142033` | Copy matches. |
| `/residential/waynesville` | 200 | 200 `20240814142034` | Copy matches. |
| `/commercial` | 200 | 200 `20240814142035` | Copy matches. |
| `/contact` | 200 | 200 `20240720184318` | Next form is Resend, not Elementor. Meta string was a literal `${COMPANY.phone}` — fixed. |
| `/contact/thank-you` | 200 | (WP thank-you) | Present. |
| `/contact/feedback` | 200 | listed in ORIGINAL_CONTENT | Present. |
| `/contact/feedback/rate` | 200 | listed | Present. |
| `/contact/feedback/review` | 200 | listed | Google / Yelp / Angi links already in the repo. |
| `/roofing-color-pickers` | 200 | 200 `20240720183243` | Was text-only. Now has product photos. |
| `/roofing-color-pickers/metal-roofing` | 200 | 200 `20240720190906` | Colors were labels. Swatches + Tuff-Rib / R-Panel / 5V / corrugated diagrams restored. |
| `/roofing-color-pickers/shingles` | 200 | 200 `20240720184723` | Timberline HD photos restored. |
| `/metal-structures` | 200 | 200 `20240720181634` | Landing, copy matches. |
| `/metal-structures/metal-carport-kits` | 200 | 200 `20240720183431` | Carport photos restored. |
| `/metal-structures/pole-truss-kits` | 200 | 200 `20240814142039` | Truss + enclosed photos restored. |
| `/regular-style-metal-carports` | 200 | 200 `20240720175314` | Photo restored. |
| `/boxed-eave-style-metal-carport` | 200 | 200 `20240720185130` | Photo restored. |
| `/vertical-roof-style-metal-carport` | 200 | 200 `20240814142039` | Photo restored. |
| `/pole-truss-stand-roof-kit` | 200 | 200 `20240720184757` | Used `metal-trusses-800x600.jpg` (no dedicated stand-roof photo in Wayback). |
| `/pole-truss-enclosed-kits` | 200 | 200 `20240720174905` | Photo restored. |
| `/waynesville` `/highlands` `/cashiers` `/asheville` | **404** on production today | WP used `/residential/{city}/` only | Branch 301s them to `/residential/{city}`. Old sitemap.xml listed the 404s. |
| `/sitemap` | **404** on production | WP linked `/sitemap.xml` | Footer pointed at `/sitemap`. Branch links `/sitemap.xml` and 301s `/sitemap`. |
| `/sitemap.xml` | 200 `application/xml` | RankMath index | Next sitemap was missing most routes. Fixed. |
| `/robots.txt` | 200 | — | Points at `https://kingsroofingnc.com/sitemap.xml`. |

Public images already on Vercel production: logos, hero `khc-green-big.jpeg`, location cards, `img_0059_0.jpg`, `roof-repair-1024x683.jpeg`, `Leaping-Lion-Vector.svg`. All **200**.

## Missing assets

**Need a fresh wp-uploads backup? Yes — job/gallery photos only.**

Product shots came back from Wayback into `public/images/`. Job photos did not. Exact list: `NEED_WP_UPLOADS.md` in the Kings repo.

Still not on Next (and not coming back without a dump):

- Gallery thumbs `001-300x225.jpg` … `023-300x225.jpg` and the full-size `001.jpg` series
- `dsc01744.jpg` … `dsc01754.jpg`
- `img_0002.jpg` … `img_4454_0.jpg`
- `kings_haywood_construction_pictures_*.jpg`
- `kingshaywood-banner-large.jpeg`, `footermap-2.png`, `GS2zPeYLo68_HiAKs8G-5OyFIOszZqaQw.jpeg`
- 18 `bestbuymetal-picker-large-*.jpeg` (swatches are restored; large hover plates are not)

Wayback 403’d several full-size originals in Sep 2024. Thumbs from `20240814` survived.

`Voted-Best.png` and `Only-Corwn.png` are in `public/images/` from Wayback, not wired into a page.

## Leftover for Michael

1. Cloudflare dashboard for `kingsroofingnc.com`: grey-cloud the apex + www to `cname.vercel-dns.com`. Do not break MX.
2. SSL Full (strict) if you keep orange-cloud. Grey-cloud is the clean fix.
3. Dump `wp-content/uploads` if you want the job gallery. Paths are in `NEED_WP_UPLOADS.md`.
4. After DNS: hit `https://kingsroofingnc.com/` — should be Vercel 200, not 526.
5. Merge `fix/live-526-parity`. Production git deploys are off (`vercel.json` `deploymentEnabled.main: false`). Ship however you ship this repo.
6. Contact form still needs `RESEND_API_KEY` on Vercel if it is not set.

## URLs

- Working Next: https://kingsroofingnccom.vercel.app
- Dead custom: https://www.kingsroofingnc.com (526)
- Wayback about: https://web.archive.org/web/20240808171404id_/https://www.kingsroofingnc.com/about/
- Repo: https://github.com/Hustle-Launch/kingsroofingnc.com
- Vercel project: hustle-launch / kingsroofingnc.com

## Commits

Branch `fix/live-526-parity` (`dfb2619`), pushed. Open PR: https://github.com/Hustle-Launch/kingsroofingnc.com/pull/new/fix/live-526-parity. Not main. Not force-pushed.
