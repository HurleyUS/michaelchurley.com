# Monarch Mountain Foundations — 1:1 vs live WP

Punch: the Next rebuild was hotlinking live PHP for the homepage hero video and the rock-drilling gif. That is done in git. The Vercel alias is still the Aug 8 production deploy, so it still hotlinks until you ship the branch. Apex DNS was not touched. PHP still serves the real site.

## What was true

- Live site: `https://www.monarchmountainfoundations.com` — PHP/8.3.33 LiteSpeed, HTTP 200.
- Next alias: `https://monarchmountainfoundations-com.vercel.app` — Vercel, HTTP 200, `X-Robots-Tag: index, follow`.
- Homepage HTML on the alias pointed at:
  - `https://www.monarchmountainfoundations.com/wp-content/uploads/Monarch-Post-FX.m4v` (152,499,558 bytes, HTTP 200)
  - `https://www.monarchmountainfoundations.com/wp-content/uploads/Rock-Drilling.gif` (29,710,074 bytes, HTTP 200)
- Next `images.remotePatterns` allowed the WP host so the gif could even render.
- Inner pages were a rewrite of the WP copy, not a clone. `/gallery` existed on Next and 404'd on WP. Review funnel pages existed on WP and 404'd on Next.

## What is true now

Branch `turnaround/wp-parity-no-hotlink` commit `b90d2f67625afc1860aabc2fb515faa108d545b2`.

- Homepage hero video is `/videos/monarch-post-fx.mp4` (31.5MB, same 187.7s 720p cut, poster vendored).
- Rock drilling is a looping `/videos/rock-drilling.mp4` (1.3MB) instead of the 29MB gif.
- Surveying page now plays the WP clips: surveying, site-prep, drone, rock drilling. Copy for Grading + Excavating and Rock Drilling is on the page.
- Foundations page plays the drone clip.
- Homepage slabs/footings/driveway stills now use the same job photos WP uses.
- About copy is family-owned, not invented "500+ projects / 15+ years".
- WP hostname removed from `next.config.ts` image remote patterns.
- `NEED_WP_UPLOADS.md` is in the repo.

The alias at `monarchmountainfoundations-com.vercel.app` is still the 32-day-old production deploy (`dpl_GsJqa8zmUFseay1P1zygChqaQq91`, created Sat Aug 08 2026). Git deploys on main are off. This branch did not mint a new Vercel preview. Ship it if you want the alias to stop hotlinking.

DNS: not cut. Apex still PHP on purpose.

## URLs

| What | URL |
|---|---|
| Live WP (production) | https://www.monarchmountainfoundations.com |
| Next alias (stale until ship) | https://monarchmountainfoundations-com.vercel.app |
| Branch | `turnaround/wp-parity-no-hotlink` |
| Commit | https://github.com/Hustle-Launch/monarchmountainfoundations.com/commit/b90d2f67625afc1860aabc2fb515faa108d545b2 |
| Open PR | https://github.com/Hustle-Launch/monarchmountainfoundations.com/pull/new/turnaround/wp-parity-no-hotlink |

## HTTP receipts — 2026-09-09 11:12 UTC

Server on every WP row: LiteSpeed, `x-powered-by: PHP/8.3.33`. Next rows: `server: Vercel`, `x-robots-tag: index, follow`.

### Route-by-route

| Route | Live WP | Next alias | Notes |
|---|---|---|---|
| `/` | **200** | **200** | Same H1: Structural Concrete. Alias HTML still hotlinks WP (stale deploy). Branch does not. |
| `/about/` | **200** | **200** (`/about`) | WP: Family Owned + Operated. Next was a rewrite; branch copy now matches. Layout is still Next, not Elementor. |
| `/foundations/` | **200** | **200** | WP has drone-2.mov + big photo grid. Branch plays drone mp4. Not pixel-identical Elementor. |
| `/driveways-sidewalks/` | **200** | **200** | WP: Poured Concrete Sidewalks / Concrete Driveways + 576x1024 gif. Next is a rewrite (finishes, process). Gif vendored at `/images/rock-drilling.gif`, not wired on this page. |
| `/surveying-job-site-preparation/` | **200** | **200** | WP videos: Surveying.mp4, Site-Prep.mp4, drone-2.mp4, rock-drilling.mp4. Branch now plays all four locally. |
| `/contact/` | **200** | **200** | WP has **no quote form** — phone/email/photo (`IMG_1232`). Next has a Resend quote form. Keep it. WP header also has a dummy `tel:8285555555` leftover. Real number is 828-508-3602. |
| `/gallery/` | **404** | **200** | Extra on Next. Not in WP nav. Keep it. Added to Next sitemap on the branch. |
| `/rate/` | **200** | **404** | Review funnel. Not in nav. |
| `/review/` | **200** | **404** | Google / Yelp / Bark logos. Vendored, pages not rebuilt. |
| `/thank-you/` | **200** | **404** | Review funnel. |
| `/feedback/` | **200** | **404** | Only real Elementor form on WP (message/email/phone). |
| `/announcements/` | **200** | **404** | Category archive. One leftover "New Website!" post. |
| `/announcements/hello-world/` | **200** | **404** | Skip. |
| `/sitemap.xml` | 301 → `/sitemap_index.xml` **200** | **200** | Next sitemap was missing `/gallery`. Fixed on branch. |
| `/robots.txt` | **200** `User-agent: * Crawl-Delay: 20` | **200** Allow /, Disallow /api/ | |
| `/feed/` | **200** rss | n/a | |

### Nav

WP header: About, Foundations, Driveways + Sidewalks, Surveying + Job Site Prep, Contact. Phone CTA.

Next header: same plus **Gallery**, plus the phone CTA. Footer on Next omits Gallery (WP footer sitemap also omits it).

### Footer

WP: commitment blurb, Talk To An Expert (Sam Jennings, 828-508-3602, gmail, Highlands/Cashiers), logo, Angi/Chamber/BBB, sitemap of pages, counties, `© Copyright 2025` + "Web Design + Marketing by Hustle Launch".

Next: dark slate footer, same phone/email/areas, badges, `© 2024–2026` + "Web Design + Development by Hustle Launch". Close enough. Not pixel-identical.

### Forms

| Location | WP | Next |
|---|---|---|
| Header/footer | Elementor search (`name=s`) | none |
| `/contact` | none | quote form → `POST /api/contact` (name, email, phone, service, message) |
| `/feedback` | Elementor form | 404 |
| `/announcements/hello-world` | WP comments | 404 |

### Schema

WP Rank Math `@graph`: Organization named **"Company"**, WebSite, WebPage. Logo is a 150x150 of the wide wordmark.

Next: `LocalBusiness` with phone, email, Highlands geo, service catalog. Better than WP. Not the same graph.

### Gallery (on-page, not the extra `/gallery` route)

WP home Elementor gallery: `61356447511…`, `IMG_2076`, `63008139341…`. Branch home now uses those three. WP foundations has a 4-up (`61356447511`, `66854576026`, `IMG_1330`, `IMG_2078`). Next foundations still uses the compressed webp/jpg set.

## Missing asset list

**Fresh wp-uploads dump: no.**

Every file the live marketing pages actually use answered HTTP 200 from `/wp-content/uploads/`. Job photos were already in `public/images/`. The problem was size, not reachability.

| Live file | Live bytes | HTTP | In repo? |
|---|---:|---|---|
| `Monarch-Post-FX.m4v` | 152,499,558 | 200 | No. GitHub 100MB cap. Replaced with `public/videos/monarch-post-fx.mp4` (31,511,325). Poster: `public/images/monarch-post-fx-poster.jpg`. |
| `Rock-Drilling.gif` | 29,710,074 | 200 | No. Same footage as `rock-drilling.mp4`. Committed `public/videos/rock-drilling.mp4` (1,275,424) + `public/images/rock-drilling.gif` (451,880, the 576x1024 WP derivative). |
| `Surveying.mp4` | 82,544,922 | 200 | Already had compressed `public/videos/surveying.mp4` (3,788,868). |
| `Site-Prep.mp4` | 91,006,875 | 200 | Already had compressed `public/videos/site-prep.mp4` (14,906,617). |
| `drone-2.mp4` | 41,814,186 | 200 | Committed compressed `public/videos/drone-2.mp4` (3,657,153). |
| `drone-2.mov` | 9,019,277 | 200 | Same clip. MP4 is enough. |
| `IMG_0882.mov` | 16,291,636 | 200 | Media library only. Not on any marketing page. |
| `google-2-1.png` / `yelp_trademark_rgb_outline_0-1.png` / `barklogo-dark.pngdmzRSJ4.png` | 6–10KB | 200 | Vendored under `public/images/*-review.png`. Review pages not rebuilt. |
| `New-Website.jpg` | 354,101 | 200 | Hello-world leftover. Skipped. |
| Rank Math `-scaled` / `-1024x` / `.webp` derivatives | varies | 200 | Originals already in `public/images/`. |

WP media library: 84 items (`X-WP-Total: 84`). 79 returned from `/wp-json/wp/v2/media?per_page=100`. Nothing the homepage needed 404'd.

## Leftover for Michael

1. **Ship the branch.** Alias still hotlinks until Blacksmith/Vercel production catches up. Do not cut DNS.
2. Driveways inner page is still a Next rewrite, not the WP "Poured Concrete Sidewalks / Concrete Driveways" layout. Gif is on disk if you want it.
3. Review funnel (`/rate` `/review` `/thank-you` `/feedback`) is 404 on Next. Logos are vendored. Rebuild only if you still use that SMS/email sequence.
4. `/gallery` is extra. Fine. Just know WP 404s it.
5. WP contact header still has `tel:8285555555`. That's their Elementor junk, not ours.
6. Pixel-faithful is "same routes, same photos, same videos, same phone." It is not a CSS clone of Hello Elementor. Don't pretend otherwise.

## Commits

- `b90d2f67625afc1860aabc2fb515faa108d545b2` feat: stop hotlinking WP uploads, vendor homepage video locally
