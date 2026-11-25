# twelveux lives on this site now

twelveux never needed a domain. It lives at https://www.michaelchurley.com/twelveux.

## What was true

- Playground was a separate Vercel app: https://twelveux.vercel.app
- `registry.json` homepage said https://twelveux.com
- twelveux.com has no public DNS. We do not claim it.
- michaelchurley.com had a blog post about it and no host for the product.

## What is true now

Vendored the playground, kit, og, Glass runtime, and shadcn registry into this site. A rewrite to twelveux.vercel.app would have stolen `/_next` from this Next 16 app. That is a broken proxy. Files in the tree instead.

Routes:

- `/twelveux` playground
- `/twelveux/kit` glass kit
- `/twelveux/og` 2009–2012 chrome
- `/r/*.json` installable registry
- `/twelveux/r/*.json` same JSON via rewrite

Canonical is `https://www.michaelchurley.com/twelveux`. Footer has a one-word link. Blog post "Where" now points here. Site chrome is off on those routes so the playground can own the glass.

`html-to-image` is in `dependencies` because Glass capture needs it at runtime.

## URLs

- https://www.michaelchurley.com/twelveux (after this branch ships)
- Local proof: http://localhost:3000/twelveux
- Install: `npx shadcn add https://www.michaelchurley.com/r/glass.json`
- Mirror, not home: https://twelveux.vercel.app
- Repo: https://github.com/michaelmonetized/twelveux

## HTTP receipts (localhost:3000, 2026-09-09)

| URL | status | notes |
| --- | --- | --- |
| `/twelveux` | 200 | canonical `https://www.michaelchurley.com/twelveux`, title `twelveux \| Michael C. Hurley`, no `twelveux.com` |
| `/twelveux/kit` | 200 | canonical `/twelveux/kit` |
| `/twelveux/og` | 200 | canonical `/twelveux/og` |
| `/r/registry.json` | 200 | `homepage` = `https://www.michaelchurley.com/twelveux`, CORS `*` |
| `/r/glass.json` | 200 | CORS `*` |
| `/r/theme.json` | 200 | CORS `*` |
| `/r/max.json` | 200 | 2.5MB, fonts inlined, CORS `*` |
| `/twelveux/r/registry.json` | 200 | rewrite to `/r/` |
| `/twelveux/r/glass.json` | 200 | rewrite to `/r/` |
| `/twelveux/r/theme.json` | 200 | rewrite to `/r/` |
| `/twelveux/r/max.json` | 200 | rewrite to `/r/` |
| `/scene.jpg` | 200 | playground plate |
| `/og/hero.jpg` | 200 | kit/og plate |

`bun tsc` clean. `bun lint` 0 errors, inherited warnings only.

## Commits

- Site worktree `twelveux/host-under-michaelchurley` `388a4f3387f6967634281aa6449403835d8ac946` — Host twelveux at /twelveux
- twelveux repo `main` `f26df3c34e956281c23d79ab6776fd66cfff9e8c` — Point registry homepage at michaelchurley.com/twelveux (local, not pushed; Vercel mirror still has the old JSON until that ships)

## Leftover for Michael

- This branch is not production until you merge/deploy. Local `/twelveux` is 200.
- twelveux.vercel.app still serves the old app. Homepage JSON there still says twelveux.com until that repo ships. Do not buy twelveux.com.
- Next 16 loads `next.config.mjs`, not `next.config.ts`. The COEP/security headers in the `.ts` file have never been the live config. I put the registry rewrite + CORS on `.mjs`. I did not flip the site onto the unused `.ts` file.
- `public/r/max.json` is 2.5MB because shadcn inlines the Max faces. That is the installable item.
- Graphite is not on this machine (`gt` missing). Plain git branch.
