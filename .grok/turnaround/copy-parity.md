# Copy vs HEAD

The README lied. The lander lied. Billing told the truth and nobody asked it.

Six fixes are on origin. Three repos were dirty with another agent's Clerk banner work, so I left them. YourZaxbys copy is on the unpaid-showcase branch, not fought.

## What was true

- AppEstateSales README: Convex and Resend "coming soon" while `app/api/contact/route.ts` already writes Convex and sends Resend.
- Milkup README: Milkdown textarea POC. HEAD is TipTap + Convex. No Milkdown package.
- MerchWinner homepage: "Earn 70%". `lib/billing.ts` takes 20%. Catalog `/courses` pretended it was a library.
- HMS README: TanStack Start, Zustand, Stripe checkouts that always complete, pnpm-plus-npm lockfiles. HEAD is a Vite+ SPA with `react-router-dom`. `package-lock.json` was leftover.
- Assessment-Toolbar: "google lighthouse" and a checked `background.js`. The bar opens PageSpeed Insights. There is no background worker.
- redactthing: `jquery.js` in `content_scripts`. `foreground.js` never uses it.
- ConnectedIn: already had `content_scripts` from `c7ba332`. Nothing to punch.
- Coordinator homepage waitlist: already gone (PR #38). Pricing page still sells `$29/user` and `$79/user` against `$19 / $49 / $149` in `lib/billing.ts`. `convex/waitlist.ts` still exists.
- Cravees pages: Starter `$299` / Growth `$599` / Premium `$999`. Stripe ladder is Bronze `$499` / Silver `$999` / Gold `$1,999`.
- iLeague live lander: Top 54. README: Top 36. `getInfluencers` is still the Convex query name.
- YourZaxbys lander: 500+ / 25% / 99.9% / 4.9 with no receipts. Custom domain dead.

## What is true now

| Repo | Commit | On origin |
|---|---|---|
| appestatesales.com | `1986ac3467c0ee2d0ab54d2c1c550bb0346e0f2e` fix: README Convex and Resend are live | yes, `main` |
| milkup | `997daa0d3bb331fae1b158222441e59aa2b30a88` fix: README sells TipTap, not Milkdown | yes, `master` |
| merchwinner.com | `accc903416f70e9aa540dd1ea797d5efaba3b644` fix: creator keep 80% and label empty catalog | yes, `main` |
| hms | `c0e42a50b179dc9cc116f8b774a6503df4094bf9` fix: README matches Vite+ SPA and drop npm lockfile | yes, `main` |
| Assessment-Toolbar | `99c61bac7a28bf0bc718b34d29d06ffdbcc8a0da` fix: PageSpeed is not Lighthouse; background.js does not exist | yes, `main` |
| redactthing | `c022424dd88509efdaea9a6b6bcd4a36476eb611` fix: drop unused jQuery from content_scripts | yes, `main` |

YourZaxbys copy (demo labels, not receipts) is in `6c28fe67b1c46a142607be5565a7909932571267` on `fix/unpaid-showcase` / `fix/unpaid-client-showcase`. I did not push that branch. Unpaid-showcase owns it.

## URLs and HTTP

Public GitHub (200):

- `200` https://github.com/michaelmonetized/milkup/commit/997daa0d3bb331fae1b158222441e59aa2b30a88
- `200` https://github.com/michaelmonetized/hms/commit/c0e42a50b179dc9cc116f8b774a6503df4094bf9
- `200` https://github.com/michaelmonetized/Assessment-Toolbar/commit/99c61bac7a28bf0bc718b34d29d06ffdbcc8a0da
- `200` https://github.com/michaelmonetized/redactthing/commit/c022424dd88509efdaea9a6b6bcd4a36476eb611
- `200` https://raw.githubusercontent.com/michaelmonetized/milkup/master/README.md (starts "Not Milkdown")
- `200` https://raw.githubusercontent.com/michaelmonetized/hms/main/README.md (Vite+ SPA, live URL)

Private GitHub HTML 404 (expected, no session):

- `404` https://github.com/Hustle-Launch/appestatesales-com/commit/1986ac3467c0ee2d0ab54d2c1c550bb0346e0f2e
- `404` https://github.com/HurleyUS/merchwinner.com/commit/accc903416f70e9aa540dd1ea797d5efaba3b644

Live:

- `200` https://www.appestatesales.com/
- `200` https://www.merchwinner.com/ — production HTML still says **Earn 70%**. Commit is on main. Vercel has not shipped it.
- `200` https://www.merchwinner.com/courses
- `200` https://hms-cyan-six.vercel.app/
- `200` https://wwwyourzaxbyscom.vercel.app/ — still prints 500+ / 99.9%. Demo labels are on the unpaid-showcase branch, not this alias yet.
- `000` https://www.yourzaxbys.com/ — custom domain dead. Did not fight it.
- `200` https://ileague.golf/ — Top 54 on the lander.
- `200` https://www.coordinatorapp.com/pricing — still `$29/user/month` and `$79/user/month`.
- `200` https://www.cravees.com/pricing — still Starter `$299`.
- `200` https://github.com/michaelmonetized/ConnectedIn — content_scripts already wired.

## Skipped (dirty worktrees)

Clerk agent on `fix/clerk-test-mode-banner` with a dirty `.gitignore`. I did not rebase over them.

- `/home/michael/Projects/coordinatorapp.com`
- `/home/michael/Projects/cravees.com`
- `/home/michael/Projects/ileague.golf`

Unpaid-showcase agent on `/home/michael/Projects/www.yourzaxbys.com` branch `fix/unpaid-client-showcase`. Copy labels are in their commit. I left the branch alone.

## Leftover for Michael

1. **MerchWinner production still says 70%.** Wait for Vercel to build `accc903`. If it does not auto-deploy, kick it.
2. **Coordinator pricing is still a lie.** `app/pricing/page.tsx` vs `lib/billing.ts`. Homepage waitlist is already gone. `convex/waitlist.ts` is dead weight.
3. **Cravees pages vs Stripe ladder.** Starter/Growth/Premium `$299/$599/$999` vs Bronze/Silver/Gold `$499/$999/$1999`. Do this after Clerk is out of the tree.
4. **iLeague README still says Top 36.** Lander is Top 54. `api.users.getInfluencers` is leftover naming in Convex + explore pages. Copy-only until Clerk is done; renaming the query is not copy.
5. **YourZaxbys demo labels are not on the live vercel alias yet.** Merge/push `fix/unpaid-client-showcase`. Custom domain stays dead.
6. **ConnectedIn** is honest enough. Inject fallback in `popup.js` is belt-and-suspenders on top of content_scripts.
7. **AppEstateSales previous/upcoming sales** are still Facebook embeds, not Convex galleries. README now says so.

Do not merge Clerk banner work with this. Two stories. Two PRs.

---

## Follow-up — Clerk trees free (2026-09-09)

Clerk is done. I committed honesty on top of `fix/clerk-test-mode-banner` and pushed those branches. Did not rewind Clerk's TEST MODE work. YourZaxbys already labeled; I skipped a second edit.

### What was still true

- Coordinator homepage had no waitlist (PR #38). Pricing still sold `$29/user` and `$79/user` against `$19 / $49 / $149`.
- Cravees lander still Starter `$299` / Growth `$599` / Premium `$999` vs Bronze `$499` / Silver `$999` / Gold `$1,999`.
- iLeague README still Top 36. Live lander Top 54. Explore still called `getInfluencers`.
- YourZaxbys demo labels already in `6c28fe6`.

### What is true now

| Repo | Commit | Branch | On origin |
|---|---|---|---|
| coordinatorapp.com | `6f226a56427cb98ce59854dd0bfeee6910134b4f` fix: pricing from billing.ts, homepage is not a waitlist | `fix/clerk-test-mode-banner` | yes |
| cravees.com | `3e811748d4f7e62613cc72791da0383e34f16d67` fix: lander prices match Stripe ladder in billing.ts | `fix/clerk-test-mode-banner` | yes |
| ileague.golf | `233eda06ee86e3e42d0e934be8d5f821a1dc2491` fix: Top 54 copy and getCreators query name | `fix/clerk-test-mode-banner` | yes |

iLeague TEST MODE banner still in `apps/web/src/components/test-mode-banner.tsx`. `getInfluencers` is now an alias of `getCreators`. Schema still has `influencerProfiles` / `isInfluencer`.

YourZaxbys: skipped. Labels already there. Live alias now prints the disclaimer.

### Git status (after push)

```
===== coordinatorapp.com =====
On branch fix/clerk-test-mode-banner
nothing to commit, working tree clean

===== cravees.com =====
On branch fix/clerk-test-mode-banner
nothing to commit, working tree clean

===== ileague.golf =====
On branch fix/clerk-test-mode-banner
nothing to commit, working tree clean

===== www.yourzaxbys.com =====
On branch fix/unpaid-client-showcase
nothing to commit, working tree clean
```

### HTTP

Live (production is still `main`, so prices are still the old lie until these branches merge):

- `200` https://www.coordinatorapp.com/
- `200` https://www.coordinatorapp.com/pricing — still `$29` and `/user/month` (2× `$29`, 4× `/user/month`)
- `200` https://www.cravees.com/
- `200` https://www.cravees.com/pricing — still Starter `$299` (6× `$299`, 9× `Starter`)
- `200` https://ileague.golf/ — Top 54 (8×). README fix is on the branch, not `main`.
- `200` https://wwwyourzaxbyscom.vercel.app/ — `Demo copy for this unpaid showcase` + `Not measured results`. Numbers 500+ / 99.9% remain, labeled.
- `000` https://www.yourzaxbys.com/ — custom domain still dead. Did not fight it.

Private GitHub HTML (no session):

- `404` https://github.com/HurleyUS/coordinatorapp.com/commit/6f226a56427cb98ce59854dd0bfeee6910134b4f
- `404` https://github.com/HurleyUS/cravees.com/commit/3e811748d4f7e62613cc72791da0383e34f16d67
- `404` https://github.com/HurleyUS/ileague.golf/commit/233eda06ee86e3e42d0e934be8d5f821a1dc2491

### Leftover for Michael

1. **Merge `fix/clerk-test-mode-banner` on coordinator, cravees, ileague.** Honesty is on the branch, not production. Production still lies on prices.
2. **YourZaxbys `fix/unpaid-client-showcase` still needs merge to `main`.** Alias already shows demo labels. Custom domain stays dead.
3. **`convex/waitlist.ts` still exists** on Coordinator. Homepage is not a waitlist. Dead table.
4. **iLeague schema leftover:** `influencerProfiles`, `isInfluencer`. Query name is honest. Table name is not.
5. **MerchWinner `accc903` still needs a Vercel ship** if `/` still says 70%. That commit is already on `main`.
6. **AppEstateSales previous/upcoming** still Facebook embeds. README already says so.
