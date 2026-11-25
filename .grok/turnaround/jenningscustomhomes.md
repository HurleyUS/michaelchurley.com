# Jennings Custom Homes — 2026-09-09

The site is still WordPress on a Bluehost account. The public repo is a 4-file ops checklist. There is no Next rebuild, so there is nothing to ship to Vercel.

Spectrum/Charter CUJO on this network 302s HTTP to a CloudFront **AmazonS3** warn page and answers 443 as HTTP, which is why local `curl` screams `SSL_ERROR_WRONG_VERSION_NUMBER`. Off this ISP, HTTPS is 200 LiteSpeed with a living Let's Encrypt cert. The S3 200 is the ISP block page, not the builder.

## What was true

Public [Hustle-Launch/jenningscustomhomes](https://github.com/Hustle-Launch/jenningscustomhomes). 5 commits, 4 tracked files, `.gitignore` deletes the entire WordPress tree.

2024-06-06 `ad1f91f` "Launched" flipped nine boxes to `[x]` and left two honest:

- `[-] Setup trustindex reviews // client does not have any reviews`
- `[-] Send login details`

Pack-day note (2026-09-08): still Bluehost LiteSpeed at `75.98.174.238`, WP 7.1, Hello Elementor 3.5.1, child `jch` 2.0.0, Elementor 4.2.4 / Pro 3.24.4, `G-85CPJ4D64C` missing on homepage, About Partners still lorem, Rank Math claimed and not observed.

## What is true now

Still that host. Still that checklist. Still no wp-admin in this repo.

Web A moved onto A2 metal under the same Bluehost nameservers. Mail and cPanel did not move. Sucuri today: no active malware, TLS A, `sitemap.xml` 404. Spectrum still treats the hostname like a dirty site. TrustIndex.io now has 3 reviews and the widget is still not on the page.

I did not touch Bluehost DNS. That is not a one-command I can run.

**NEED_WP_UPLOADS: no.** No rebuild. Gallery files already live at `/wp-content/uploads/` on the WP box. The gitignore is why they were never in git.

Cannot kill the Partners lorem without wp-admin. Login handoff is still the open box from 2024.

## Route / page inventory

Live REST `GET /wp-json/wp/v2/pages?per_page=100&_fields=id,slug,link,title,status,modified` (200):

| slug | URL | id | modified | nav |
|---|---|---|---|---|
| sample-page | `/` Home | 2 | 2024-10-24 | yes |
| about | `/about/` | 236 | 2024-09-06 | yes |
| home-building-process | `/home-building-process/` | 272 | 2024-10-24 | yes |
| builder-projects | `/builder-projects/` | 291 | 2024-09-06 | yes |
| contact | `/contact/` | 269 | 2024-06-05 | yes |
| thank-you | `/thank-you/` | 387 | 2024-06-05 | form target |
| privacy-policy | `/privacy-policy/` | 11 | 2024-06-05 | footer-adjacent |
| blog | `/blog/` | 13 | 2024-05-31 | sitemap only, **zero posts** (`/wp-json/wp/v2/posts` → `[]`) |

Also live:

- `/wp-login.php` 200 "Log In ‹ Jennings Custom Homes — WordPress"
- `/author/jenningscustomhomes/` 200 (user enum)
- `/wp-sitemap.xml` 200 (core WP). Children: `wp-sitemap-posts-page-1.xml`, `wp-sitemap-users-1.xml`
- `/robots.txt` 200 → `Sitemap: https://www.jenningscustomhomes.com/wp-sitemap.xml`
- `/wp-json/` 200. Namespaces: `wp/v2`, `elementor/v1`, `elementor-pro/v1`, `wp-toolkit/api` (Bluehost WP Toolkit)

404 (WP chrome, title `Page not found`): `/partners/`, `/about/partners/`, `/sitemap.xml`, `/sitemap_index.xml`, `/st/`, `/ps/`, `/si/`, `/about.php`, `/wp-plain.php`, `/radio.php`, `/wp-info.php`

403: `/xmlrpc.php`, `/wp-content/uploads/index.php`

Staging leftover still answering: `http://jch.hustlelaunch.com/` 200, same WP homepage (A `75.98.174.238`). Privacy policy still says `Our website address is: https://jch.hustlelaunch.com.`

## TLS diagnosis

**Remote (real cert, real site)**

Sucuri sitecheck `2026-09-09T11:05:01Z`:

- `final_url`: `https://www.jenningscustomhomes.com/`
- IP `75.98.174.238`
- Hosting labeled **A2 Hosting**, server **LiteSpeed**, `PHP/8.3.33`
- CMS WordPress 7.1, theme Hello Elementor
- TLS issuer Let's Encrypt **YR1**, expires **29 Nov 2026**, rating **A**
- Warning: `https://www.jenningscustomhomes.com/sitemap.xml` **404**

crt.sh: current leaf `www.jenningscustomhomes.com` + apex, Let's Encrypt YR1, not_before 2026-08-31, not_after 2026-11-29. Separate cPanel SAN cert still names `cpanel` / `webmail` / `mail` / `autodiscover` (those A records still sit on `50.87.199.144`).

urlscan 2026-07-30: `https://www.jenningscustomhomes.com/ps/` → 404 LiteSpeed, TLS valid, PTR `75.98.174.238.static.a2webhosting.com`, AS55293 A2HOSTING.

Jina reader:

- `https://www.jenningscustomhomes.com/` 200 WordPress home
- `https://jenningscustomhomes.com/` 200 same home
- `http://www.jenningscustomhomes.com/` 200 same home

**This network (Spectrum CUJO) — the "weird AmazonS3 200"**

```
$ curl -sI http://www.jenningscustomhomes.com/
HTTP/1.1 302 Found
Location: https://block.charter-prod.hosted.cujo.io/warn.html?url=http://www.jenningscustomhomes.com/

$ curl -sI https://www.jenningscustomhomes.com/
* Host www.jenningscustomhomes.com:443 was resolved.
* IPv4: 75.98.174.238
* TLS connect error: error:0A00010B:SSL routines::wrong version number

$ curl -sI --http1.1 http://75.98.174.238:443/ -H 'Host: www.jenningscustomhomes.com'
HTTP/1.1 302 Found
Location: https://block.charter-prod.hosted.cujo.io/warn.html?url=http://www.jenningscustomhomes.com/
```

Follow the 302 and you get the S3 object, not WordPress:

```
HTTP/2 200
content-type: text/html
content-length: 1621
last-modified: Mon, 17 Nov 2025 14:37:32 GMT
etag: "4c727577fce4085b2d1143be3b74ccaf"
server: AmazonS3
x-cache: Hit from cloudfront
via: 1.1 …cloudfront.net (CloudFront)
x-amz-cf-pop: ATL59-P15
```

Body title: **Suspicious Site Blocked**. Spectrum Security Shield copy. That is why HTTP "returns 200 AmazonS3."

Raw TCP to the IP **without** the customer Host header (CUJO does not match):

```
HTTP/1.1 200 OK
Server: LiteSpeed
Strict-Transport-Security: max-age=63072000; includeSubDomains
X-Frame-Options: SAMEORIGIN
Content-Length: 163
Last-Modified: Tue, 13 Jan 2026 17:15:01 GMT

<meta http-equiv="refresh" content="0;URL=/cgi-sys/defaultwebpage.cgi">
```

cPanel default page. Vhost only serves the site when `Host: www.jenningscustomhomes.com` (or apex) is intact and the ISP is not hijacking it.

**Verdict:** cert is fine off-net. Local WRONG_VERSION_NUMBER is CUJO speaking HTTP on 443 for a hostname it still thinks is unsafe. Reputation leftover from the Bluehost malware era, not a broken Let's Encrypt install.

## Checklist boxes vs live

Repo `README.md` at `ad1f91f` vs HTTP today. Updated on branch `turnaround/live-pass-2026-09-09`.

| Box | 2024 "Launched" | Live 2026-09-09 |
|---|---|---|
| Design new site after Bluehost malware | `[x]` | `[x]` WP/Elementor is up. Home slug still `sample-page`. |
| CSS cleanup | `[x]` | `[x]` claimed. No wp-admin to audit. |
| Optimize WP settings | `[x]` | Mixed. xmlrpc 403. REST user enum still open. |
| Point cname | `[x]` | www is an **A**, not a CNAME. Both names → `75.98.174.238`. |
| Setup Analytics | `[x]` | **Partial / treat as open.** `G-85CPJ4D64C` on about, process, projects, contact, blog, privacy, thank-you, 404. **Not in homepage HTML.** |
| Setup rankmath | `[x]` | **False.** No rank-math assets. Core `wp-sitemap.xml` only. `/sitemap.xml` 404. |
| Connect socials | `[x]` | **False.** Facebook / Instagram / Youtube / Store hrefs loop to the current URL. |
| TrustIndex reviews | `[-]` no reviews | Still no widget. TrustIndex.io now **5.0 / 3 reviews** (Cheryl U 2024-10-14, Local Cashiers NC 2024-09-22, +1). Comment is stale. |
| Form actions | `[x]` | Form is there (name / phone / email / message). Thank-you page exists. Submit not re-fired this pass. |
| Optimize SPF | `[x]` | Record exists and is sloppy. |
| Send login details | `[-]` | Still `[-]`. `wp-login.php` 200. No password in git. |

SPF TXT:

```
v=spf1 a mx include:websitewelcome.com include:jch.hustlelaunch.com include:mi3-ts103.a2hosting.com include:www.jenningscustomhomes.com include:jenningscustomhomes.com ip4:75.98.174.68 ~all
```

- `a` = `75.98.174.238`
- `mx` = `mail.jenningscustomhomes.com` → `50.87.199.144`
- `include:jenningscustomhomes.com` is a self-include
- `include:jch.hustlelaunch.com` has **no TXT**
- `include:www.jenningscustomhomes.com` has **no TXT**
- `ip4:75.98.174.68` ≠ live web A `238`
- leftover HostGator `websitewelcome.com`
- DMARC `p=none` to mxtoolbox

GA snippet on about (and the other injecting pages):

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-85CPJ4D64C"></script>
gtag('config', 'G-85CPJ4D64C');
```

Homepage template is `elementor_canvas` (page-id-2). That canvas is the GA hole.

About Partners (need wp-admin to edit):

```html
<h2 class="elementor-heading-title">Partners</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
```

No `trustindex` string on home / about / contact / process / projects / blog / privacy / thank-you / 404.

## Malware leftovers

- Spectrum CUJO still blocks the hostname on this residential path. That is the live reputation problem.
- urlscan kept hitting `/st/` `/ps/` `/si/` through 2026-07. Those are 404 WP pages now, not spam documents.
- April 2026 urlscan still saw the site on `50.87.199.144` `box2356.bluehost.com` nginx. By July the web A was `75.98.174.238` LiteSpeed. Mail/cPanel stayed on the old box.
- Sucuri 2026-09-09: rating B, no malware signatures, "needs WAF", leaked PHP version, no CSP. Not a clean bill. Not an active infection.
- Privacy policy and `jch.hustlelaunch.com` still advertise the staging hostname.
- xmlrpc is 403. Good.
- Author + REST user enum still public.

## HTTP receipts

Local, this machine, 2026-09-09:

| Probe | Result |
|---|---|
| `http://www.jenningscustomhomes.com/` | **302** → `block.charter-prod.hosted.cujo.io` |
| follow that Location | **200** AmazonS3 / CloudFront, 1621 bytes, "Suspicious Site Blocked" |
| `https://www.jenningscustomhomes.com/` | TLS `wrong version number` (CUJO HTTP on 443) |
| `http://75.98.174.238/` Host=IP | **200** LiteSpeed `defaultwebpage.cgi` |
| `http://75.98.174.238:443/` Host=www | **302** CUJO |

Off-net:

| Probe | Result |
|---|---|
| Sucuri `https://www.jenningscustomhomes.com/` | **200** LiteSpeed PHP/8.3.33 WP 7.1, TLS A |
| Jina `https://www.jenningscustomhomes.com/` | **200** home |
| Jina `http://www.jenningscustomhomes.com/about/` | **200**, Partners lorem, `G-85CPJ4D64C` |
| Jina `http://www.jenningscustomhomes.com/contact/` | **200**, form, `G-85CPJ4D64C` |
| Jina `http://www.jenningscustomhomes.com/home-building-process/` | **200** |
| Jina `http://www.jenningscustomhomes.com/builder-projects/` | **200** gallery |
| Jina `http://www.jenningscustomhomes.com/thank-you/` | **200** |
| Jina `http://www.jenningscustomhomes.com/blog/` | **200** empty |
| Jina `http://www.jenningscustomhomes.com/privacy-policy/` | **200**, staging URL leftover |
| Jina `http://www.jenningscustomhomes.com/wp-login.php` | **200** |
| Jina `http://www.jenningscustomhomes.com/wp-sitemap.xml` | **200** (jina also warned 404 on `/sitemap.xml` itself) |
| Jina `http://www.jenningscustomhomes.com/robots.txt` | **200** |
| Jina `http://www.jenningscustomhomes.com/xmlrpc.php` | **403** |
| Jina `http://www.jenningscustomhomes.com/wp-json/wp/v2/users` | **200** `[{id:1,slug:jenningscustomhomes}]` |
| Jina `http://jch.hustlelaunch.com/` | **200** same site |
| DoH A apex/www | `75.98.174.238` |
| DoH NS | `ns1.bluehost.com` `ns2.bluehost.com` |
| DoH MX | `0 mail.jenningscustomhomes.com.` → `50.87.199.144` |

Contact block on every page: 83 Village Walk Wy, Cashiers, NC 28717 · 828-743-2307 · sam@jenningscustomhomes.com.

## URLs

- Product: https://www.jenningscustomhomes.com/
- Login: https://www.jenningscustomhomes.com/wp-login.php
- Staging leftover: http://jch.hustlelaunch.com/
- TrustIndex profile (widget not on site): https://www.trustindex.io/reviews/www.jenningscustomhomes.com
- Repo: https://github.com/Hustle-Launch/jenningscustomhomes
- Sucuri scan: https://sitecheck.sucuri.net/results/https/www.jenningscustomhomes.com

## Commits

Checklist truth-up: `abe944e` on branch `turnaround/live-pass-2026-09-09` in `Hustle-Launch/jenningscustomhomes`. Pushed, no force-push. `main` left at `ad1f91f` until you merge. PR: https://github.com/Hustle-Launch/jenningscustomhomes/pull/new/turnaround/live-pass-2026-09-09

Story file: this path. Did not touch `lib/static-posts.ts`.

## Leftover for Michael

1. **wp-admin.** Send login is still the 2024 open box. Without it: Partners lorem stays, privacy policy still names `jch.hustlelaunch.com`, homepage never gets `G-85CPJ4D64C`, socials stay self-links, TrustIndex widget never lands, Rank Math never happens.
2. **Spectrum CUJO.** Remote TLS is fine. This ISP still intercepts the hostname. Reputation cleanup (Google Safe Browsing / Spectrum shield) is a ticket, not a deploy.
3. **Do not migrate DNS from here.** NS is Bluehost. Mail is still on `box2356.bluehost.com`. Moving web off that account without the mailbox is how you nuke `sam@`.
4. **SPF is a mess.** Fix after you decide whether mail stays on Bluehost.
5. **No Next app is waiting.** If you want off Bluehost later, that is a new build plus a mail plan. This repo will not grow a site by wishing.

Would you rather I wait for the login and punch the lorem + homepage GA, or leave the checklist red until Sam sends the password?
