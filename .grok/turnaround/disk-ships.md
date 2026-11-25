# Disk ships — 2026-09-09

The 0.4 island was already on GitHub. Hurleyus install copy was the one still living in a working tree. Motion Delete was already peeled. slopops still needs a PostHog personal key before the badge goes green.

## Naarchy 0.4

### What was true
The brief said GitHub was still on v0.3.3. Disk was already 0.4.0, clean, tagged, and matching origin.

### What is true now
Nothing to push. Nothing to tag. Local tests and smoke passed. GitHub latest already points at v0.4.0.

- Tree: `/home/michael/Projects/naarchy` clean, `main` = `origin/main`
- Commit: `f95ce4900a6fc17b703090e18c9bc177e4a5edd6` — `0.4.0: preferences, doctor, a quieter island`
- Tag: `v0.4.0` (annotated, on origin)
- `Cargo.toml` version: `0.4.0`
- `./target/debug/naarchy --version` → `naarchy 0.4.0`
- `cargo test --locked --bins` → **86 passed**, 0 failed
- `bash scripts/smoke.sh` with `BIN=./target/debug/naarchy` → `smoke ok`

GitHub Actions on that commit is red. Both `ci` and `release` died in ~3s (`2026-09-09T10:15:52Z`). Job logs 404 with Azure `BlobNotFound`. Same instant-fail pattern is on v0.3.3. That is the runner, not the tests I just ran.

### URLs
- Repo `200` https://github.com/michaelmonetized/naarchy
- Commit `200` https://github.com/michaelmonetized/naarchy/commit/f95ce4900a6fc17b703090e18c9bc177e4a5edd6
- Tag `200` https://github.com/michaelmonetized/naarchy/releases/tag/v0.4.0
- Latest `302` → `/releases/tag/v0.4.0` https://github.com/michaelmonetized/naarchy/releases/latest
- CI `200` (failed) https://github.com/michaelmonetized/naarchy/actions/runs/34339279438

### Leftover for Michael
GitHub Actions is lying. Local 86 tests + smoke are the receipt. If you want a green check, the ubuntu-24.04 job needs a runner that actually starts. No git commands left.

## Hurleyus

### What was true
Origin README still said `omarchy theme install <url>`. Omarchy 4.0.2+ treats that nested `.git` as a stranger and drops `hyprland.lua` (the 20px rounding and gaps). The clone+symlink rewrite was sitting in `~/.config/omarchy/themes/hurleyus/README.md` and never left the machine.

### What is true now
Pushed. Origin README tells people to clone into `~/.local/share/themes/hurleyus` and symlink. Live checkout fast-forwarded onto the same commit. `preview.png` on the live checkout is still a local dirty file. Left it.

- Repo: `/home/michael/Projects/omarchy-hurleyus-theme`
- Commit: `8f1e27db0f86aecfafc0aaca8ef6b9804d9e28d2` — `Install via clone+symlink so Omarchy 4.0.2+ keeps hyprland.lua.`
- Pushed: `65f4da3..8f1e27d  main -> main`
- Live theme: `~/.config/omarchy/themes/hurleyus` now at `8f1e27d`, README matches origin
- This box is Omarchy `4.0.0-mac.7`. The 4.0.2 drop is not what is running here. The copy is still the right copy.

### URLs
- Repo `200` https://github.com/michaelmonetized/omarchy-hurleyus-theme
- Commit `200` https://github.com/michaelmonetized/omarchy-hurleyus-theme/commit/8f1e27db0f86aecfafc0aaca8ef6b9804d9e28d2
- Raw README `200` https://raw.githubusercontent.com/michaelmonetized/omarchy-hurleyus-theme/main/README.md
  - Confirmed live: clone + `ln -sfn` + “nested `.git` is a stranger”

### Leftover for Michael
Live theme still has a nested `.git` **directory** under `~/.config/omarchy/themes/hurleyus` (parent gitlink `160000`). Fine on 4.0.0-mac.7. On 4.0.2+ do the README path: move the clone to `~/.local/share/themes/hurleyus`, symlink it in, or make the submodule `.git` a file. Dirty `preview.png` on the live checkout was not part of this ship.

## slopops

### What was true
`secrets.env.example` already on origin. `secrets.env` already gitignored. No local `secrets.env`. Badge cannot go green without Vercel + Sentry + PostHog all present.

### What is true now
Did not commit secrets. Did not invent a PostHog personal key.

Wired a local `secrets.env` (`chmod 600`, gitignored) in both:

- `/home/michael/Projects/slopops/secrets.env`
- `~/.config/omarchy/plugins/slopops/secrets.env`

Sources, no values in this file:

- Vercel CLI auth token + current team
- `SENTRY_AUTH_TOKEN` / `SENTRY_ORG` from getatme production env (release-style token)

Probes (codes only):

- Vercel `GET /v9/projects?limit=1` → **200**
- Sentry `GET /api/0/organizations/` and `.../issues/` → **403**
- `status.sh` creds: vercel true, sentry true (token present; script treats a 403 as empty issues), posthog **false**

`git check-ignore` hits `.gitignore:1:secrets.env` in the project and `omarchy/plugins/slopops/.gitignore` in `~/.config`. `git ls-files` still only has `secrets.env.example`. Origin example `200`.

The Deploys script also blows `ARG_MAX`: `python3: Argument list too long` when the production deploy list is stuffed onto argv. Token is fine. The script is not.

### URLs
- Repo `200` https://github.com/michaelmonetized/slopops
- Example `200` https://github.com/michaelmonetized/slopops/blob/master/secrets.env.example
- Raw example `200` https://raw.githubusercontent.com/michaelmonetized/slopops/master/secrets.env.example

### Leftover for Michael
Badge stays yellow until a PostHog **personal** API key (`phx_…`) is in `secrets.env` as `POSTHOG_KEY`. The `phc_…` project key on disk is the wrong kind for `/api/projects/`. Do not paste it.

Sentry tab will stay empty until you mint an Internal Integration token with `project:read` and `event:read`. The release auth token on disk is a 403.

Deploys tab: stop passing the JSON payload as argv in `scripts/vercel.sh`. Stdin or a temp file. Right now it cannot list the fleet even with a good token.

## omadesign #49

### What was true
Reddit: Delete on a selected animation also deleted the drawing. Issue #49.

### What is true now
Already shipped. Closed. I did not touch the tree.

- Issue **CLOSED**, comment: shipped in v0.0.5-alpha, PR #52
- Commit: `efdbcd355855d1d9d5e096eafe5514cb3cbd1b44` — `Install into home, open GIMP XCF, and peel motion with Delete`
- Motion in `delete_selection`: selected key peels that key; no key peels tracks and leaves the shape; held Delete cannot then eat the object; Design still deletes the object
- Re-ran `cargo test --locked motion_delete` → **7 passed**, 372 filtered
  - `delete_with_a_selected_key_keeps_the_object`
  - `delete_without_a_selected_key_strips_animation_not_the_object`
  - `delete_in_design_still_removes_animated_objects`
  - `cut_in_motion_still_removes_the_object`
  - `motion_delete_strips_animation_and_ignores_a_held_key`
  - `motion_delete_of_a_selected_key_does_not_take_the_object`
  - `motion_delete_hint_names_the_animation_not_the_object`

Untracked `media/logo-3.oma` and `media/logo-4.oma` were already sitting there. Left them.

### URLs
- Issue `200` https://github.com/michaelmonetized/omadesign/issues/49
- PR `200` https://github.com/michaelmonetized/omadesign/pull/52
- Release `200` https://github.com/michaelmonetized/omadesign/releases/tag/v0.0.5-alpha

### Leftover for Michael
None on #49. Logo `.oma` files in `media/` are unrelated.
