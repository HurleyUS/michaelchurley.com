# Hygiene

The catalog was lying. Two posts wore the next essay's title. Pack also filed the same GitHub issue twice on a pile of repos. Titles match slugs now. Leftover duplicates are closed.

## What was true

Pack copy-pasted catalog titles onto the wrong slugs. Excerpts and essay bodies were already the right constants. I did not rewrite the essays.

| slug | live H1 (wrong) |
|---|---|
| `waynesville-zaxbys-single-store-ops-portal` | modern-design-playground: I left agents running for ten hours and they rebuilt nine worlds |
| `omnux-report-one-command-diagnostics-redaction` | WNC History Tours: I shipped the booking shell before the tour pages existed |

Live receipts (2026-09-09, still production until this diff deploys):

- `https://www.michaelchurley.com/blog/waynesville-zaxbys-single-store-ops-portal` **HTTP 200** — H1/og: playground title
- `https://www.michaelchurley.com/blog/omnux-report-one-command-diagnostics-redaction` **HTTP 200** — H1/og: WNC History Tours title
- `https://www.michaelchurley.com/blog/modern-design-playground-afk-webgl-nine-worlds` **HTTP 200** — correct playground title
- `https://www.michaelchurley.com/blog/wnc-history-tours-booking-shell-before-detail-pages` **HTTP 200** — correct tours title

Pack double-filed identical titles ~2 minutes apart on 2026-09-09 (waves ~01:39 and ~01:41–01:44 UTC). GraphQL search: 96 duplicate-title groups across `michaelmonetized` + `HurleyUS`. Most were already closed. **21 leftover opens** remained (16 open/open pairs + 5 opens whose lowest twin was already closed). Unique issues were left alone.

## What is true now

### Title fixes (`lib/static-posts.ts`)

Excerpts already matched the content constants. Only titles moved.

1. **slug** `waynesville-zaxbys-single-store-ops-portal`
   - was: `modern-design-playground: I left agents running for ten hours and they rebuilt nine worlds`
   - now: `Waynesville Zaxby's: I built a single-store ops portal so Russ Avenue's public face and shift office share one origin`
   - excerpt unchanged (424 Russ Ave, single-store ops, not the franchise sibling)
   - content constant `WAYNESVILLE_ZAXBYS_CONTENT` untouched

2. **slug** `omnux-report-one-command-diagnostics-redaction`
   - was: `WNC History Tours: I shipped the booking shell before the tour pages existed`
   - now: `omnux-report: I shipped one-command diagnostics with consent and redaction as the default`
   - excerpt unchanged (consenting redacted `.tar.zst` + SHA256, HEAD `f9729a6`)
   - content constant `OMNUX_REPORT_CONTENT` untouched

Catalog scan after the edit: no remaining duplicate titles. Titles match slugs. `bun lint` → 0 errors (15 inherited warnings, none in `static-posts.ts`).

Same two-line edit is dirty in the hygiene worktree and in `/home/michael/Projects/michaelchurley.com` @ `dd67e07`. Production still serves the old H1s until this ships.

### Issues closed

Rule: keep the lowest number unless the higher one has comments. Close the copy as not planned. Do not close unique issues.

Open/open leftover (keep lowest, except ileague-app):

| closed | kept | title |
|---|---|---|
| [HurleyUS/citation-manager#48](https://github.com/HurleyUS/citation-manager/issues/48) | [#45](https://github.com/HurleyUS/citation-manager/issues/45) | Replace placeholder Google JWT |
| [HurleyUS/coordinatorapp.com#35](https://github.com/HurleyUS/coordinatorapp.com/issues/35) | [#34](https://github.com/HurleyUS/coordinatorapp.com/issues/34) | Wire waitlist form into homepage |
| [HurleyUS/iPro-main-web#6](https://github.com/HurleyUS/iPro-main-web/issues/6) | [#3](https://github.com/HurleyUS/iPro-main-web/issues/3) | Replace contact form stub with real Resend wiring |
| [HurleyUS/ileague-app#5](https://github.com/HurleyUS/ileague-app/issues/5) | [#8](https://github.com/HurleyUS/ileague-app/issues/8) | Replace Coming Soon waitlist shells — **kept higher** (`#8` had comments) |
| [HurleyUS/itour.golf#52](https://github.com/HurleyUS/itour.golf/issues/52) | [#50](https://github.com/HurleyUS/itour.golf/issues/50) | Replace mobile Expo stub with real app surface |
| [HurleyUS/s12.in#34](https://github.com/HurleyUS/s12.in/issues/34) | [#31](https://github.com/HurleyUS/s12.in/issues/31) | Wire analytics into dashboard UI |
| [michaelmonetized/Assessment-Toolbar#6](https://github.com/michaelmonetized/Assessment-Toolbar/issues/6) | [#4](https://github.com/michaelmonetized/Assessment-Toolbar/issues/4) | Implement promised Lighthouse tool link |
| [michaelmonetized/Sonny-s-Shining#5](https://github.com/michaelmonetized/Sonny-s-Shining/issues/5) | [#3](https://github.com/michaelmonetized/Sonny-s-Shining/issues/3) | Ship missing game engine promised by marketing |
| [michaelmonetized/agent-os#2](https://github.com/michaelmonetized/agent-os/issues/2) | [#1](https://github.com/michaelmonetized/agent-os/issues/1) | Add missing package dependency imported in source |
| [michaelmonetized/boilerplate#6](https://github.com/michaelmonetized/boilerplate/issues/6) | [#2](https://github.com/michaelmonetized/boilerplate/issues/2) | Add tracked `.env.example` README expects missing file |
| [michaelmonetized/hustleforms-com#6](https://github.com/michaelmonetized/hustleforms-com/issues/6) | [#2](https://github.com/michaelmonetized/hustleforms-com/issues/2) | Resolve NXDOMAIN / missing DNS for claimed domain (hustleforms.com) |
| [michaelmonetized/hustlemail-com#4](https://github.com/michaelmonetized/hustlemail-com/issues/4) | [#1](https://github.com/michaelmonetized/hustlemail-com/issues/1) | Fix TLS / origin serving errors 526/handshake/409 |
| [michaelmonetized/kitchen#3](https://github.com/michaelmonetized/kitchen/issues/3) | [#1](https://github.com/michaelmonetized/kitchen/issues/1) | Fix live 404 routes discover vision |
| [michaelmonetized/launchpad#4](https://github.com/michaelmonetized/launchpad/issues/4) | [#1](https://github.com/michaelmonetized/launchpad/issues/1) | Resolve NXDOMAIN / missing DNS for claimed domain (launchpad.hustlelaunch.com) |
| [michaelmonetized/launchpad#5](https://github.com/michaelmonetized/launchpad/issues/5) | [#2](https://github.com/michaelmonetized/launchpad/issues/2) | Ship or document live deploy (pack reports no live deploy URL) |
| [michaelmonetized/simple#11](https://github.com/michaelmonetized/simple/issues/11) | [#10](https://github.com/michaelmonetized/simple/issues/10) | Add auth middleware protected routes |

Mixed leftover (lowest already closed; closed the stray higher copy):

| closed | kept (already closed) | title |
|---|---|---|
| [michaelmonetized/hustleforms-com#5](https://github.com/michaelmonetized/hustleforms-com/issues/5) | [#1](https://github.com/michaelmonetized/hustleforms-com/issues/1) | Fix Vercel DEPLOYMENT_NOT_FOUND / restore live deploy |
| [michaelmonetized/hustlemail-com#5](https://github.com/michaelmonetized/hustlemail-com/issues/5) | [#2](https://github.com/michaelmonetized/hustlemail-com/issues/2) | Fix Vercel DEPLOYMENT_NOT_FOUND / restore live deploy |
| [michaelmonetized/launchpad#6](https://github.com/michaelmonetized/launchpad/issues/6) | [#3](https://github.com/michaelmonetized/launchpad/issues/3) | Wire providers into layout (deps advertised but never mounted) |
| [michaelmonetized/simple#8](https://github.com/michaelmonetized/simple/issues/8) | [#6](https://github.com/michaelmonetized/simple/issues/6) | Fix Vercel DEPLOYMENT_NOT_FOUND / restore live deploy |
| [michaelmonetized/simple#9](https://github.com/michaelmonetized/simple/issues/9) | [#7](https://github.com/michaelmonetized/simple/issues/7) | Remove security residue (hardcoded firebaseConfig / serviceAccount leftovers) |

**21 closed. 0 remaining open/open duplicate-title groups.** 64 unique opens left standing.

GitHub API receipts (HTTP 200):

- `citation-manager#48` closed
- `ileague-app#5` closed, `#8` still open (kept)
- `simple#8` closed, `#6` already closed (kept)
- `launchpad#4` closed

## URLs

- Catalog: worktree `lib/static-posts.ts`
- Live still-wrong until deploy: [waynesville](https://www.michaelchurley.com/blog/waynesville-zaxbys-single-store-ops-portal), [omnux-report](https://www.michaelchurley.com/blog/omnux-report-one-command-diagnostics-redaction)

## commits

None. Two-line catalog fix is dirty in both checkouts (`dd67e07`). Did not commit: both sit on `main`.

## leftover for Michael

- Commit and deploy the two title lines so production H1s stop lying.
- Unique pack issues still open on purpose (JWT, waitlist, NXDOMAIN, Lighthouse, Expo stub, etc.). Those are real work, not copies.
- ileague-app `#8` is the Coming Soon thread that stays. Domain still served a Coming Soon last time that comment was written.
