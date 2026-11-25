# Turnaround swarm — 2026-09-09

Michael's corrections. Treat as law.

## Voice
Write follow-up stories in Michael's voice: terse, punch first, no jargon, no commission breath. Story file: this directory, one markdown file per workstream. Do not edit `lib/static-posts.ts` unless you are the twelveux or blog-titles agent.

## Shared receipts
Every agent MUST leave:
- `.grok/turnaround/<slug>.md` with What was true / What is true now / URLs / commits / leftover for Michael
- Real HTTP receipts (status codes), not vibes

## Vercel
CLI: `/home/michael/.vite-plus/bin/vercel`
Scope: `hustle-launch` (team_wwR9daVDbhcAIxrz4GtDXKsI)
User: michaelmonetized
Do not print secret values. Names of env vars are fine.

## DNS
hustlelaunch.com nameservers are Cloudflare (`becky.ns.cloudflare.com`, `yevgen.ns.cloudflare.com`). Apex already serves on Vercel.
Subdomains must be added on the Vercel project AND as Cloudflare CNAMEs to `cname.vercel-dns.com`.
If Cloudflare API/auth is missing, add the Vercel domain, write the exact CNAME table, and say so in the story. Do not fake DNS.

## Do not
- Invent Clerk keys
- Migrate bathroom/salespromis off WordPress
- Fight unpaid client custom domains (WNC tours, yourzaxbys, waynesville)
- Claim twelveux.com
- Claim codefolio.dev
- Stop without a story file
