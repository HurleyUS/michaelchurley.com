import { getOmaFeaturePosts } from "./oma-feature-posts";

export type StaticPost = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  video?: string;
  tags: string[];
  featured: boolean;
  published: boolean;
  publishedAt: number;
  readingTime: number;
};

const NAARCHY_COVER =
  "https://raw.githubusercontent.com/michaelmonetized/naarchy/main/docs/screenshots/v0.3/panel-home.jpg";

const NAARCHY_CONTENT = `# I put a Dynamic Island on Linux

Droppy is Mac-only. NotchNook is Mac-only. My 16" M1 Pro is running Omarchy. The camera hole was sitting there doing nothing.

So I built **[Naarchy](https://github.com/michaelmonetized/naarchy)**. Native GTK4. Hyprland layer-shell. MIT. Not Electron.

The idle island is **370×67** because that is the hole, measured on 3456×2234 at scale 1. When a timer is running it hangs **72px** with ears so the countdown sits on the glass, not in the webcam.

![Timer wrapping the camera](https://raw.githubusercontent.com/michaelmonetized/naarchy/main/docs/screenshots/v0.3/strip-timer-live.jpg)

## The island is the product

Hover the top edge. A black glass card grows out of the notch. Timer on the left, media on the right, a dock underneath. Clicks only land on the capsule and the dock. Everything else at the top of the screen stays yours. That is \`set_input_region\`, not a slogan.

![Home](https://raw.githubusercontent.com/michaelmonetized/naarchy/main/docs/screenshots/v0.3/panel-home.jpg)

The timer is a ruler. Scrub it. Let go. It starts. Click to pause. Click again to resume. When it hits zero the whole display strobes and an alarm loops until you click the flash, hit a key, or dismiss. The first version of that fire check was \`remaining == 0 && running()\`. \`running()\` requires remaining > 0. Dead code. It fires now.

## Drop a file anywhere on it

GTK4 file managers send \`GdkFileList\`, not a \`text/uri-list\` string. We were listening for the string. Drops felt like they only worked on Inbox because that's the only tab that *looked* like a drop zone.

Every tab accepts files now. Hold a file over the island and a dotted **Drop to Inbox** overlay fades in. Release and it jumps you to Inbox with a thumbnail grid.

![Inbox](https://raw.githubusercontent.com/michaelmonetized/naarchy/main/docs/screenshots/v0.3/panel-inbox.jpg)

Collapsed, you get a stacked pile of the latest thumbs and a count. Timer still wins if one is running.

![Collapsed file pile](https://raw.githubusercontent.com/michaelmonetized/naarchy/main/docs/screenshots/v0.3/strip-files.jpg)

## The rest

Clipboard history with search and pin. Calendar with ICS feeds, Meet/Zoom join, and "leave at 9:23." Volume and brightness HUDs. Omarchy theme follow.

No telemetry. Socket is \`$XDG_RUNTIME_DIR/naarchy.sock\`, mode 600.

## Install

\`\`\`bash
sudo pacman -S --needed gtk4 gtk4-layer-shell rust
git clone https://github.com/michaelmonetized/naarchy
cd naarchy
cargo install --path . --locked
systemctl --user enable --now naarchy.service
\`\`\`

Source, screenshots, and a 10-second recording: **[github.com/michaelmonetized/naarchy](https://github.com/michaelmonetized/naarchy)**.

If you are still staring at a dead strip of pixels above your display, you already know what to do.

— Michael C. Hurley`;


const OMADESIGN_COVER =
  "/blog/omadesign-native-linux-studio-13-days/cover.png";

const OMADESIGN_CONTENT = `![omadesign welcome screen. Make something, 52 templates, New document presets](https://raw.githubusercontent.com/michaelmonetized/omadesign/master/media/design.jpg)

## Who

I design on Linux now. Omarchy. Asahi. The camera hole has Naarchy. The creative suite did not make the move.

Adobe stayed on the other OS. Affinity is partial. Browser tools are tabs that die when the laptop sleeps. Electron "studios" burn RAM and still feel like a website with window chrome.

omadesign is for the operator who already lives in a themed Linux desktop and refuses to open four apps to finish one mark. Designers leaving macOS. Photographers who want LibRaw without leaving the seat. Brand freelancers who carry palettes and type roles as files, not screenshots in Slack.

If you build MarTech, ship local tools, or just want \`cargo\` and a tarball instead of a Creative Cloud invoice, this is for you.

## What

I built a native Rust studio on \`eframe\` / egui. GTK and Electron stayed off the table.

Four personas share one document and one layer stack: **Design** (vector), **Pixel** (paint/retouch), **Photo** (RAW develop), **Motion** (timeline to animated SVG / Lottie). Geometry is defined once. Drawn for the live canvas and for PNG/SVG export. Mutations go through \`Cmd\` + \`History\`.

![Design persona. Block Party poster, rotated color block at 19°, Inspect panel](https://michaelmonetized.github.io/omadesign/media/showcase/design.webp)

Current version is **0.0.4-alpha**, "The handles got the memo." aarch64 and x86_64 \`*-unknown-linux-gnu\` tarballs on GitHub Releases. Linked against **glibc 2.35**. Phosphor Light icons. Omarchy theme colors and \`fontconfig\` / \`omarchy font current\`. Max as the default face.

Fifty-two editable vector templates. Brand kits travel as \`.omacolors\`, \`.omatype\`, \`.omabrand/\`. Photo side: LibRaw for DNG/CR2/CR3/NEF/ARW/RAF, 16-bit linear source, \`.omaphoto\` sidecars, \`.omapreset\` looks, folder batch. Motion: thirteen presets, Lottie JSON with unsupported-feature reporting.

Interop is boring on purpose: PSD/PSB, PDF, AI-compatible PDF, OpenRaster, SVG/SVGZ, optional Affinity bridge, native \`.oma\`. CLI \`--inspect\` / \`--convert\`. MIT. Copyright 2026 Michael C Hurley.

![Photo persona. Coast at golden hour, Develop Color panel, Place in Design](https://michaelmonetized.github.io/omadesign/media/showcase/photo.webp)

## Where

It runs where I run: Asahi Omarchy, Arch-class ARM, anything glibc 2.35 or newer. Same binary story on x86_64 via zig cross-compile. local release builds, uploaded by hand. No GitHub Actions bill.

Repo: [michaelmonetized/omadesign](https://github.com/michaelmonetized/omadesign). Studio site on Pages: [michaelmonetized.github.io/omadesign](https://michaelmonetized.github.io/omadesign/). Manual under \`/docs/manual/\`.

![Repo layout. assets, docs, examples, media, remotion, scripts](https://raw.githubusercontent.com/michaelmonetized/omadesign/master/media/mark.png)

On this machine the binary is \`~/.local/bin/omadesign\`, reporting \`omadesign 0.0.4-alpha\`. Install one-liner lives in \`scripts/install-remote.sh\`. The audience sits next to the Omarchy / Asahi tribe and the indie builders who already read Cargo.toml before they read the landing page.

![Motion persona. After Hours listening room, timeline keyframes, Make it move presets](https://michaelmonetized.github.io/omadesign/media/showcase/motion.webp)

## When

**2026-08-26.** Spike as "Atelier v0.1". Rust + egui all-in-one. Prove the canvas before naming the product.

**2026-08-28.** Rename to omadesign. glibc 2.35 link. Canvas handles, pen, live type, zoom-to-box. Phosphor + desktop theme. First lander and docs.

**2026-08-29.** fontconfig enumeration, Google Fonts on demand, Max default. Palettes. Compound paths. Shape and asset browsers. Zig cross-compile for x86_64. Remotion hero. GPU texture reuse. First alpha-rc tags.

**2026-09-02–03.** Motion timeline, Lottie, welcome that fits. QA pass on the early user-test list.

**2026-09-05.** Precision guides, masks, healing. Fifty-two templates. Shortcut HUD. Portable brand libraries. Pen/type/logo film. Website rebuild. Catppuccin, studio tour, real recordings.

**2026-09-06.** v0.0.1-alpha packages verified. Layered interop. Camera RAW. v0.0.2-alpha same day.

**2026-09-07.** Selection and layer QA. Photo batch + presets to v0.0.3-alpha. Rotated node editing and context-menu flips to v0.0.4-alpha.

**2026-09-08.** Sixty-eight commits from init. Four tagged alphas. Same-day docs experiment: a scoped First-File Setup offer went up and came back down; CHANGELOG keeps the record, app and license never changed.

Thirteen days. That is the clock.

![omadesign mark. geometric design wordmark](https://raw.githubusercontent.com/michaelmonetized/omadesign/master/media/mark.png)

## Why

Linux got my daily driver. The design suite did not. That gap is the reason.

I needed one seat: vector precision, paint, RAW, light motion, without renting four subscriptions or babysitting an Electron process. I needed the chrome to follow my desktop colors and fonts, not a baked orange skin. I needed releases I can rebuild on the machine that ships them.

So I linked glibc 2.35, zig-cross-compiled x86_64, uploaded tarballs with SHA-256, and kept shipping alphas until the handles behaved on rotated nodes. Own the toolchain. Build in public.

omadesign is still alpha. advanced text layout, symbols, collab, PDF/X + CMYK are on the roadmap, not in the tarball. Affinity write is not there. RAW varies by camera. That is fine. The document model works. The personas share a layer stack. The downloads exist for ARM64 and x86_64 today.

What would you put in the first \`.oma\` file if you sat down on a fresh Omarchy box tonight?
`;

const NAARCHY_04_COVER =
  "/blog/naarchy-0-4-preferences-privacy/cover.png";

const NAARCHY_04_CONTENT = `## Update — 2026-09-09

**0.4.0 is tagged.** [v0.4.0](https://github.com/michaelmonetized/naarchy/releases/tag/v0.4.0) is the Latest GitHub release. Commit \`f95ce49\`.

Packages: \`naarchy-aarch64-unknown-linux-gnu.tar.gz\` (built on \`m1pro16\`), \`naarchy-x86_64-unknown-linux-gnu.tar.gz\` (built on \`hpeliteclient\`), source tarball, \`SHA256SUMS\`. GitHub Actions is still billing-locked, so the binaries were built on those two boxes and uploaded by hand, same as 0.3.3.

Extract a package and run \`bash scripts/install.sh\`.

Everything below is the 0.4 overhaul as I wrote it before the push. The "not tagged yet" lines were true on September 8.

After the [Sep 3 island post](https://www.michaelchurley.com/blog/naarchy-linux-dynamic-island), I hardened Naarchy locally to **0.4.0**: native Preferences, \`naarchy doctor\`, atomic stores, travel opt-in, IPC cleanup. Validated on three machines. **Not pushed / not tagged yet.** GitHub tip remains **v0.3.3**.

![Naarchy 0.4 Home: Focus Timer and Now Playing, gear for Preferences](/blog/naarchy-0-4-preferences-privacy/screenshots/home.png)

## Who

This one is for people already living in the island: Omarchy / Hyprland operators who installed Naarchy after the Sep 3 post and started trusting it with clipboard history, file drops, and calendar feeds.

If you care whether state files are written atomically, whether the socket is mode 0600, whether travel estimates ask before they phone Nominatim, and whether \`doctor\` can tell you the session is sane without opening a GUI, you are the audience.

Builders who ship local-first GTK tools. Multi-machine QA types who refuse to call a release done until it runs on more than the laptop that authored it.

The origin story is already live. This post assumes you know what Naarchy is.

## What

Local tip is **0.4.0**. GitHub tip is still **v0.3.3**. Say that out loud before anything else.

0.4 is the overhaul I validated on September 5 and have been running since: Preferences window, reduced motion, \`naarchy --version\`, read-only \`naarchy doctor\`, stricter CLI rejection, atomic clipboard/Inbox/Home state, feature-gated services, travel estimates behind an explicit opt-in, IPC/CLI cleanup, CI that drafts releases with checksums. Roughly fifty-one files, +4937/−4096 against \`origin/main\` @ \`ef9cf87\`. Uncommitted. Unpushed. No \`v0.4.0\` tag.

![Clipboard 0.4: newest-first history, pin, Clear history, gear for Preferences](/blog/naarchy-0-4-preferences-privacy/screenshots/clipboard.png)

Concrete deltas that matter day-to-day:

- **Native Preferences.** Gear opens a bounded floating window for appearance, motion, behavior, and feature controls. Advanced bits stay in \`~/.config/naarchy/config.toml\`. Appearance reloads live; feature flags and calendar feeds still want a restart.
- **\`naarchy doctor\`.** Read-only desktop check: Wayland, Hyprland, session bus, daemon, config, timer sound, volume/brightness HUD detection. On this box it prints nine OKs and points at the config path.
- **IPC honesty.** Second process talks JSON over \`$XDG_RUNTIME_DIR/naarchy.sock\` (mode 0600), waits for a bounded ack that the command entered the queue, not that the UI finished. Single-instance lock. Malformed durations exit 2.
- **Privacy pass.** No telemetry (unchanged). Clipboard + shelf stay owner-only on disk; history is still **not encrypted** while capture is on (disabling Clipboard stops the watcher). Travel estimates (Nominatim / IPinfo|ipapi / OSRM) require opt-in. Clear Inbox does not delete originals. Duplicate drops rejected. Corrupt JSON gets a backup instead of a silent wipe.
- **Atomic stores.** Clipboard, Inbox, and Home preferences write privately and atomically. Failed write keeps previous state.
- **Perf sample (directional, 8s):** collapsed CPU 0.125% then below sample; expanded 0.625% then 0.375%; RSS roughly flat (~82 to 84 MiB collapsed, ~102 to 101 MiB expanded) vs installed 0.3.3.
- **86 Rust tests.** fmt, Clippy \`-D warnings\`, debug + opt builds, smoke. Fixed a GTK 4.22.4 crash disposing a never-realized hidden window during monitor hotplug / prefs rebuild.

Battery widget is already gone as of 0.3.3 (bar shows %, \`hud battery\` remains). 0.4 does not bring it back.

![Inbox 0.4](/blog/naarchy-0-4-preferences-privacy/screenshots/inbox.png)

![Widgets 0.4](/blog/naarchy-0-4-preferences-privacy/screenshots/widgets.png)

![Calendar 0.4](/blog/naarchy-0-4-preferences-privacy/screenshots/calendar.png)

## Where

Same seat: Asahi Omarchy / Hyprland on the 16" M1 Pro (\`m1pro16\`), plus QA on \`hpeliteclient\` and \`intelpro\`. Local binary: \`naarchy 0.4.0\` via \`~/.cargo/bin\`. Local aarch64 dist archive exists under \`target/release/dist/\` with SHA256SUMS; that archive wants **glibc 2.39+**. Public GitHub Releases are still the 0.3.3 tarballs until push + remote CI succeed.

Repo: [michaelmonetized/naarchy](https://github.com/michaelmonetized/naarchy). Origin story (Sep 3): [Naarchy: a Dynamic Island for Linux that owns the notch](https://www.michaelchurley.com/blog/naarchy-linux-dynamic-island).

\`doctor\` on the machine that wrote this draft:

\`\`\`
Naarchy 0.4.0 · desktop check

OK    Wayland session
OK    Hyprland integration
OK    Session bus
OK    Daemon
OK    Configuration
OK    File opening
OK    Timer sound
OK    Volume HUD detection
OK    Brightness HUD detection
\`\`\`

## When

**2026-09-03.** Shipped 0.3.0–0.3.3 and published the island post. GitHub tip froze at \`ef9cf87\` / tag \`v0.3.3\`.

**2026-09-05 (local).** 0.4.0 overhaul + \`docs/VALIDATION.md\`. Native prefs, doctor, atomic state, travel opt-in, IPC/CLI refactor. Desktop checks: calendar nav, 48h timer, prefs rebuild, 3× monitor hotplug, fullscreen hide/restore, notification queue. Three-machine QA: m1pro16, hpeliteclient, intelpro.

**2026-09-08.** Still running 0.4.0 locally. Still dirty vs \`origin/main\`. Still no public release. This EXTEND draft is the trail for when that push lands, or for saying "RC on my boxes" if the story publishes first.

## Why

The Sep 3 post proved the island. 0.4 is about trusting it with operator data.

Preferences belong in a window, not only in TOML. A second process should not hang forever waiting for UI. Travel estimates should not quietly enrich a calendar event. A hidden GTK window should not crash on hotplug dispose. \`doctor\` should answer "is this session actually wired?" without expanding the panel.

So I hardened the stores, gated the network, measured CPU against 0.3.3, ran eighty-six tests, and installed the same binary on three machines before calling the overhaul validated. Release gates that remain: push, remote GHA with Rust 1.92 pin, sustained everyday use, physical multi-monitor on the targets that matter.

0.4.0 is real on my desktops. It is not on GitHub until I push it. That gap is why this post exists as an EXTEND, not a rewrite.

**Engagement Q:** If your island already sits in the camera notch, what should \`naarchy doctor\` check next that it does not check today?
`;

const GETAT_COVER =
  "/blog/getat-me-relationship-first-link-in-bio/cover.png";

const GETAT_CONTENT = `![GetAt.Me landing. Turn your audience into fans & customers](screenshots/landing.png)

## Who

I kept watching creators and consultants park their whole business behind a vertical stack of blue links.

Linktree-class pages are fine for "here are my URLs." They are a dead end when someone is ready to book a call, leave a review, ask a question, or pay. That visitor opens five more tabs. Intent cools. The operator never sees the near-miss.

GetAt.Me is for the people who already have attention and need a destination that behaves like a small CRM on a single handle. consultants, service-led shops, solo brands, creators who sell time and trust, not just clicks.

If you build MarTech, ship Clerk + Convex stacks, or just hate bolting Calendly + Typeform + Intercom onto a bio link, this is for you.

## What

I shipped an interactive landing page at [getat.me](https://getat.me). Claim a handle. Theme it. Drop links. Then unlock the relationship surfaces as you grow.

Stack facts: **Next.js 16.1.6** (Turbopack) on Vercel, **Convex** for real-time data, **Clerk** for auth and billing (\`has()\` feature gates), Stripe through Clerk Billing, Resend for mail, Sentry + PostHog for the ops trail. Tailwind 4, Radix/shadcn, Phosphor icons. TipTap / markdown editor for posts. \`@dnd-kit\` for link reorder. Package version **0.1.0**. Public repo under HurleyUS.

![Features lander](screenshots/features.png)

Nine themes live in the selector: Mocha, Frappe, Macchiato, Monokai, Tokyo, Tomorrow, One, Rosepine, Dracula. Links reorder by weight. Sections group them. Owners get an analytics dashboard. page views, link clicks, bookings, messages with PostHog and Convex events that ignore the owner so you do not inflate yourself.

Plans from \`.config/plans.ts\`: Free starter (no card). Premium at $4.99/mo ($3.99 annual). Pro at $9.99 ($7.99). ProMax at $19.99 ($14.99). Pro is where booking, referrals, live chat, and conversion analytics harden. ProMax is payments, custom availability, rich posts with likes/replies/quote reposts/threads, and the verification surfaces.

![Owner profile edit view from the repo](screenshots/profile-edit-view.jpg)

## Where

The product lives on the open web: [getat.me](https://getat.me). Profiles at \`getat.me/{handle}\`. Owner tools under \`/{handle}/dashboard\` and account routes. Marketing shell: features, pricing, FAQ, contact, privacy, terms, plus a small SEO blog cluster comparing link-in-bio options.

Code: [github.com/HurleyUS/getat.me](https://github.com/HurleyUS/getat.me). Topics: \`links\`, \`social\`. Deploy path is Vercel continuous. no GitHub Release tarballs, because this is a hosted SaaS seat, not a desktop binary.

The audience sits next to every creator tool thread that still treats a bio link like a footer.

![Pricing page](screenshots/pricing.png)

## When

**2024-10-27.** Create Next App. Three commits. Then a long quiet.

**2025-10-30.** "forming the profile." Themes (Tomorrow Night, Mocha/Frappe/Macchiato HSL). Clerk catch-all auth routes. Unlimited links gated through Clerk billing features. Convex provider switched to \`@clerk/nextjs\` so mutations stop lying about "User not found."

**2025-11.** Ninety-eight commits in one month. Pricing page and PricingTable styling. Centralized plans config. Free / Premium / Pro / ProMax PlanInfo ladder. Features lander. FAQ, contact, footer, privacy, terms. Homepage hero that says the product out loud.

**2026-01-31.** Posts grow a social graph. likes, replies, quote reposts, nested threads for ProMax.

**2026-02.** Analytics dashboard. Click and view tracking for visitors only. Onboarding with live handle availability. Drag-and-drop link reorder. SEO sitemap/robots/manifest. Clerk webhooks for user.updated / user.deleted. Lucide to Phosphor.

**2026-03.** Brand customization with live preview. QR and social share. Link sections. Next.js 16 and the middleware to proxy migration. Demo showcase profiles. SEO blog pages.

**2026-05.** Blacksmith CI gates. Convex/Clerk build fallbacks. Sentry project routing.

**2026-08-08.** \`X-Robots-Tag: index, follow\` on Vercel.

**2026-09-08.** One hundred seventy-seven commits on the clock. PR #43 fixes profile ownership and Clerk billing fulfillment. PR #44 puts Bun on the production build. PR #45 includes the TypeScript packages production installs actually need. HEAD \`0b96e39\`.

That is the journey from empty Next scaffold to a live relationship console with billing that fulfills.

## Why

A bio link that only lists URLs trains your audience to leave. I wanted the stay. book the slot, send the referral, open the chat, leave the rating, pay when the work is ready. without exporting the visitor to a scavenger hunt.

So I put the surfaces on the handle, gated them with Clerk plans, synced them on Convex, and kept shipping until ownership and billing fulfillment stopped being a customer-journey cliff.

It is still 0.1.0. Custom domains and deeper analytics sit on the roadmap. That is fine. The document model for a profile already holds links, bookings, messages, posts, and referrals in one place.

What would you put on \`getat.me/yourname\` first, the booking calendar, the live chat, or the three links you actually want people to hit this week?
`;

const OMNUX_COVER =
  "/blog/omnux-linux-apple-silicon-truth-table/cover.png";

const OMNUX_CONTENT = `<!-- Cover: upload og.png or screenshots/truth-table.png to Convex storage; embed storage URLs below after upload. -->

![OMNUX landing. curl install one-liner](screenshots/landing.png)

![OMNUX truth table. M1/M2 shipping, M3 experimental, M4 bring-up, M5/M6 nothing public](screenshots/truth-table.png)

## Who

I run Linux on Macs. Omarchy. Asahi. The camera hole already has Naarchy. The install story for "buy an M3 in the store and walk out on Hyprland" did not.

Upstream Asahi did the science. Caution is correct for a research project. Operators who want Omarchy-class polish still hit a wall of half-truths: installers that whisper "coming soon," GPU claims without pixels, M4 rows that pretend ADT dumps are optional.

Omnux is for the person who already lives on Apple Silicon or is about to, and who wants the frontier packaged with a truth table that wins when marketing loses. M1/M2 daily drivers. M3 experimental owners who will share traces. Contributors and agents grinding DCP and AGX against real metal. Builders who read STEERING before the landing page.

If you file issues with receipts and refuse vaporware, that is the room.

## What

I stood up an integration-first umbrella: **omnux**.

Not a mega-fork that absorbs the world. A monorepo that coordinates docs, steering, and component wiring. Kernel work lives in \`linux/\` on an \`omnux\` branch. Boot stack in \`m1n1/\`. Installer in the asahi-installer track. Packages in PKGBUILDs. GPU attempt in \`omnux-gpu\` under MIT. clean-room, hardware-trace driven, and honest that nothing is "working" until DRM render nodes exist on a physical M3.

![omnux monorepo layout. linux, m1n1, installer, pkgs, gpu, docs](screenshots/monorepo.png)

One sentence of north star from GOAL.md: a person walks into an Apple Store, buys an M3 MacBook, and walks out running Omnux. Omarchy's Hyprland desktop on Asahi's foundation with everything working, installed without a single manual step.

That sentence is not true yet. The definition of done is a checklist: install, boot, display, GPU, power, input, connectivity, audio, desktop meta package, recovery stick. M0 Foundation is checked. M1 "M3 installs are boring" is next: GPU acceleration is the moonshot long pole.

Install today from macOS or recoveryOS:

\`\`\`bash
curl -fsSL https://raw.githubusercontent.com/michaelmonetized/asahi-installer/omnux/scripts/bootstrap-omnux.sh | sh
\`\`\`

![Install one-liner. curl bootstrap-omnux.sh](screenshots/install-command.png)

M1/M2: daily-drivable, full acceleration on the Asahi baseline. M3: experimental track, \`OMNUX_EXPERIMENTAL\`, software rendering until the GPU and proper DCP land. NVMe, WiFi, Bluetooth, keyboard/trackpad, audio paths already in the working column. M4: bring-up patches ahead of upstream; blocked on physical ADT dumps. M5/M6: nothing public exists; September 22, 2026 customer availability is the earliest realistic dump date for the August 25 lineup.

Sibling tooling: **omnux-report**. one command, offline-capable, consent + redaction, \`.tar.zst\` + SHA256. Validated on a real M1 Pro Omarchy box. SEP evidence collector added without scooping keys or biometrics. Live USB story: **omarchy-mx-mac-iso** S4 installer pipeline verified on loopback (plain + LUKS2, 51 assertions); hardware USB boot still open.

STEERING is non-negotiable: truth is a feature, upstream first, integration not fabrication, local CI on own metal, MIT where we wrote it, user owns the machine, fire with receipts.

Landing / truth table: [michaelmonetized.github.io/asahi-installer](https://michaelmonetized.github.io/asahi-installer/).

## Where

It lives where Apple Silicon owners actually sit, and where the signed boot chain forces honesty.

First install is still recoveryOS or macOS. Apple Silicon does not boot PC-style ISOs from cold. A USB stick becomes bootable after Linux is on internal storage. We track direct-USB-boot work; we do not pretend it shipped.

Repo: [michaelmonetized/omnux](https://github.com/michaelmonetized/omnux). Landing and truth table on Pages: [michaelmonetized.github.io/asahi-installer](https://michaelmonetized.github.io/asahi-installer/). GPU siege issues on [omnux-gpu](https://github.com/michaelmonetized/omnux-gpu). Diagnostics: [omnux-report](https://github.com/michaelmonetized/omnux-report).

On this machine the clone is \`/home/michael/Projects/omnux\` at \`9b5e80d\`. Builds and releases are meant to run on maintainer metal via Makefile + installer \`build-local.sh\`. no hosted Actions gatekeeper. Audience sits next to the Omarchy / Asahi tribe and anyone who already treats a SUPPORT matrix as sacred text.

## When

**2026-08-25.** Monorepo init. README, GOAL, ROADMAP, STEERING, build targets. Submodules wired: kernel, m1n1, installer, pkgs, gpu. Same day Apple announces Mac mini M6/M5 Pro and Mac Studio M5 Max/Ultra. installer gate gains explicit M6 messaging; status snapshot notes September 22 as earliest ADT dump date. MX Mac live installer S4 lands in code with the asahi mkinitcpio hook fix that would have shipped every install without WiFi/GPU firmware. M3 GPU siege plan drafted; seventeen public issues filed. Announcement drafts get the marketing language stripped out.

**2026-08-26.** omnux-report linked and validated at v0.1.0. complete redacted bundle on M1 Pro Omarchy, ten fixture checks green. Founder rewrite of the announcement; agent-army mandate recorded in GOAL (DHH / Omarchy community: deploy agents, owners share telemetry). TouchID confirmed on Omarchy for T1-chip TouchBar Macs by @0xBOYD3. first known Linux TouchID. SEP research program filed across omnux-gpu issues; report grows a \`sep/\` collector.

**2026-08-27.** SEP enablement frontier verified from first principles against apstrand/m2-air-touchid work: \`apple_sep\` can bind, firmware stages, and still the AP cannot start the halted SEP. \`CPU_CONTROL\` read-as-zero, write-ignored. Lever is firmware / boot-policy, not a tidy Linux driver patch. Biometric \`stac\` reverse-engineering remains the multi-year wall. Sixteen commits from init to HEAD. Progress log closed the week with receipts.

Three days of foundation. That is the clock so far.

![August 25–27 shipped snapshot](screenshots/progress-snapshot.png)

## Why

Asahi proved locked silicon is not impossible silicon. Upstream moves at the speed of caution. I needed a shipping lane that compresses time-to-user for every public patch, and a voice that refuses to call software rendering a desktop.

I wanted the truth table to beat the press release. I wanted M3 owners to install with eyes open: experimental, hot, battery-hungry until GPU and DCP land, and still useful for traces. I wanted diagnostics owners control, a live stick path rehearsed on loopback before metal, and a GPU project that stays MIT so upstream can take everything.

So the umbrella exists. The curl bootstrap exists. The seventeen-issue siege map exists. The report produces a tarball with a SHA256. TouchID on T1 is celebrated without pretending M-series SEP is solved.

Omnux is still early. M3 installs are not boring yet, Hyprland is not hardware-accelerated on M3, USB hardware boot is unverified, M4 needs ADTs nobody has dumped into our tree. That is fine. The steering holds. The receipts link. The silicon generations are labeled honestly.

The truth table is for people who bought the Mac for the metal and stayed for the desktop.
`;

const SLOPOPS_COVER =
  "/blog/slopops-omarchy-ops-bar-panel/cover.png";

const SLOPOPS_CONTENT = `![slopops hero: fleet tab in the ops popup beside the one-icon five-tabs card](/blog/slopops-omarchy-ops-bar-panel/screenshots/app.png)

## Who

I run a small fleet and a loud SaaS stack. Tailscale peers. Vercel production. Sentry unresolved. PostHog events. GitHub issues assigned to me.

That used to mean five browser tabs I leave open like a superstition. Refresh. Squint. Miss the deploy that went ERROR while I was in a terminal.

slopops is for the Omarchy operator who already lives in the bar and refuses another Electron tray for the same five APIs. Solo builders. MarTech people who ship on Vercel and still SSH into boxes. Anyone who already typed \`gh auth login\` once and does not want a sixth personal access token living in a random JSON file under \`~/Library\`.

If your morning starts with "is the fleet up, did prod deploy, what is screaming in Sentry," this is the glance surface.

## What

I built an Omarchy **bar-widget**. QML. Quickshell. Id \`slopops\`. Display name SlopOps. Version **0.1.0**. Category Monitoring. One instance. Default section: right.

One icon. Nerd Font server glyph. Tiny badge dot in the corner.

![Fleet tab: peers, online count, ts / 22 / 5900 / t3 status lights](/blog/slopops-omarchy-ops-bar-panel/screenshots/fleet.png)

Five tabs in a 620×450 popup:

**Fleet**: every device on the tailnet. Online count. TCP probes for whatever ports you configure (default \`22,5900\`). Optional \`t3Port\` (default 3773) lights green when t3 serve is reachable on that peer's tailnet IP.

**Deploys**: Vercel projects sorted by most recent production deploy. Anything with an ERROR since the last good deploy gets pinned to the top in pink. You see the fire before you open the dashboard.

![Deploys tab: failing projects pinned above READY rows](/blog/slopops-omarchy-ops-bar-panel/screenshots/deploys.png)

**Sentry**: unresolved issues, last 24 hours, grouped by project, loudest first. A \`+ issue\` button runs \`promote.sh\`: open a GitHub issue in \`issueRepo\` with event count, level, culprit, and the Sentry URL, then \`notify-send\`.

**Traffic**: PostHog all-time event total, a 30-day daily series, per-project totals down the side.

**Issues**: \`gh search\` for open issues and PRs for you (or a configured \`ghOwner\`).

![Sentry tab: unresolved 24h groups with + issue promote](/blog/slopops-omarchy-ops-bar-panel/screenshots/sentry.png)

The badge is the whole point when the popup is closed. Red if deploy errors or Sentry events. Yellow if tokens are missing or peers are offline. Green if nominal. \`status.sh\` rolls that up. Timer defaults to 90 seconds. Right-click the icon to refresh everything.

Data plane is boring on purpose: bash scripts print JSON; QML \`Process\` parses a line. Tokens sit in \`secrets.env\` (gitignored, chmod 600). Missing a token does not crash the tab; it shows a hint and moves on. GitHub never needed a token in that file; it uses your existing \`gh\` login.

Settings are widget keys, not forks: \`omarchy bar set slopops fleetPorts "22,5900,3389"\`, \`sentryOrg\`, \`sentryUrl\` for self-hosted, \`posthogUrl\` for EU, \`vercelTeamId\`, \`issueRepo\`, \`t3Port 0\` to hide the t3 light.

![PostHog traffic tab: all-time total, 30-day bars, per-project counts](/blog/slopops-omarchy-ops-bar-panel/screenshots/traffic.png)

## Where

It runs where Omarchy's bar runs: Quickshell on the desktop I already stare at. Plugin path on this machine: \`~/.config/omarchy/plugins/slopops\`. Same tree mirrored under the dotfiles-omarchy project copy.

Repo: [michaelmonetized/slopops](https://github.com/michaelmonetized/slopops). Public. Branch \`master\`. No Pages homepage. No GitHub Release tag. Linguist says mostly QML, then Shell, a little JavaScript helper for \`ago\` / \`fmt\` / \`levelColor\`.

![Repo layout: Ops.qml, tabs, scripts, secrets example](/blog/slopops-omarchy-ops-bar-panel/screenshots/repo-structure.png)

The audience already has Omarchy, Tailscale, Vercel, Sentry, and PostHog CLIs and tokens. This is not a demo of what a deploy is.

![Issues tab: open issues and PRs via gh search](/blog/slopops-omarchy-ops-bar-panel/screenshots/issues.png)

## When

**2026-08-26, 9:23 AM Eastern.** First commit. Message: \`michael.ops 0.1.0: multi-service ops bar panel for Omarchy\`. Twenty files. 1,780 lines. The whole panel lands in one shot: \`Ops.qml\`, five tabs, seven scripts, manifest, README, \`secrets.env.example\`.

**Same morning, 9:55 AM Eastern.** Second commit. \`rename plugin id to slopops\`. Manifest id and name, README, moduleName/ipcTarget. \`michael.ops\` becomes the public name that matches the repo.

**2026-08-26, 1:55 PM UTC.** Last push on GitHub. Still \`0.1.0\`. Still two commits. No LICENSE file in the tree. One star.

**2026-09-08.** Pack day. Plugin still on disk. \`omarchy bar put slopops\` puts it on the bar. \`secrets.env\` is still not created on this machine; the degrade path is the live path until tokens land.

Thirty-two minutes from first commit to rename. That is the clock.

## Why

I was paying the context-switch tax every day. Fleet health in one place. Deploys in another. Sentry in a third. PostHog for "is anyone even using this." GitHub for the work the errors become.

The bar was already the glance surface. Omarchy already had a widget schema. So I put the stack behind one icon and made the badge tell the truth when I am too busy to open the popup.

Shell fetchers. JSON out. Tokens optional. Promote from Sentry to GitHub without leaving the seat. Ports as settings, not a new plugin fork.

That is the tool I reached for when the dashboards started feeling like chores.

**Engagement Q:** Which of the five tabs would earn the badge on your bar first: Fleet, Deploys, Sentry, Traffic, or Issues?
`;

const BESTWNC_COVER =
  "/blog/bestwnc-honest-analytics-local-directory/cover.png";

const BESTWNC_CONTENT = `![BestWNC homepage. Find the places that make Western North Carolina feel local](screenshots/home.png)

## Who

I live in the Blue Ridge ops lane. Locals need a directory that feels like a map, not a lead-gen trap. Owners need a page they can claim without a sales call. Operators need dashboards that do not invent click-through rates.

BestWNC is for people hunting restaurants, coffee, contractors, wellness, and shops from Asheville to Boone, and for the owners of those places who will list free, claim if we already seeded them, and upgrade only when reach matters.

If you build MarTech, local SEO products, or Stripe-backed owner tools, this post is field notes.

## What

I shipped a local business directory for Western North Carolina.

Stack on the box: **Next.js 16.2.6**, React 19, **Convex**, **Clerk**, **Stripe**, PostHog, Sentry, Resend, Tailwind v4, Bun, Phosphor icons, Vercel. Repo is private under \`HurleyUS/bestwnc.com\`. Site is public at [bestwnc.com](https://www.bestwnc.com/).

![Owners lander. Add or claim your BestWNC page in minutes](screenshots/owners.png)

Listings start free. Paid plans live in code in \`lib/billing.ts\`, not as a fragile Stripe Dashboard catalog:

- **Unlimited**: $10/mo or $80/yr. photos, video, posts, events, widgets, social links, contact, messaging
- **Featured**: $50/mo or $480/yr. Unlimited plus priority / pinned placement
- **Max**: $100/mo or $960/yr. Featured plus ad credits and the top tooling tier

Manual add-ons stay manual until fulfilled: Online Presence Analysis $8, Vetted Badge $80, Listing Sync $480. Dynamic checkout builds the price at session time.

Seed data is 101 real WNC businesses. Asheville-heavy, plus Waynesville, Brevard, Hendersonville, Black Mountain, and the rest of the corridor. Claim if we already have you. Add if we do not.

The part that matters this week: **analytics honesty**. Owner analytics used to look busier than the measurement layer could defend. On September 8 I changed the API and UI so recorded cumulative views, review count, and average rating stay; period views, clicks, conversion rates, and weekly series return **\`null\`** with an explicit \`availability\` object. README says the same thing out loud. Cumulative views include repeat, owner, and bot traffic. they are not unique visitors. \`null\` is the product.

Same two days: ownership claims and billing hardened, unsupported sales claims stripped from marketing surfaces, Stripe webhooks allowed through session middleware when signed, and honeypot fields on every public contact / newsletter form because spam was flooding Advertising and General Inquiry. Fill the hidden field and you get silent success, no email, no lead row.

![Owner plans. Free, Unlimited, Featured](screenshots/pricing.png)

## Where

It runs on Vercel against Convex. Auth is Clerk. Money is Stripe. Mail is Resend. Errors go to Sentry. Product events go to PostHog.

Surfaces that matter:

- Public discovery: explore, categories, cities, top-rated, trending, search, business pages
- Owner funnel: \`/owners\`, \`/claim\`, \`/add-business\`, dashboard edit / photos / reviews / analytics / upgrade
- Pricing: \`/pricing\` with the plan cards that match \`PLAN_DEFINITIONS\`

Audience sits in Western North Carolina and with builders who ship local directories instead of another generic "AI growth" wrapper.

![Explore. directory discovery surface](screenshots/explore.png)

## When

**2026-01-08.** Init. Next.js + Convex + Tailwind. Directory MVP the same day.

**January–February.** Categories, seed scripts, Mountain Modern redesign, mobile nav, instant listing (no review queue), Sentry, claim + email verification, PostHog, Schema.org, PWA, design variant lab, Phosphor icons, Stripe checkout/portal/webhook, **101 real WNC businesses**, photo upload via Convex storage, owner dashboard, admin moderation queue.

**March.** Launch-week security and reliability. Env validation that fails fast. Stripe monetization sprint. Dynamic pricing documented. Revenue-ready checklist. Owner plans, billing roles, social tables and signed-in pages.

**April–May.** Listing boosts on the owner dashboard. Real PostHog wiring passes. Blacksmith CI gates. Production deploy prep. Robots set to index, follow.

**2026-09-07.** PR #109. secure ownership claims and billing; remove unsupported sales claims; keep purchased manual services pending until fulfillment.

**2026-09-08.** PR #110. report only recorded business analytics (\`null\` where unmeasured). PR #111. honeypot fields on public contact forms. HEAD \`ae65364\`. Two hundred sixty-one commits on \`main\`.

That is the clock from empty repo to an honest owner dashboard.

![About. BestWNC product story surface](screenshots/about.png)

## Why

Directories lie by default. Fake weekly charts. Fake conversion. Fake "impressions" that never existed as rows.

I refused that for BestWNC. If the counter is cumulative and polluted by owners and crawlers, say so. If period CTR is not instrumented, return \`null\`, not zero dressed as insight.

I also refused a soft claim path and a spam inbox. Claims require verified identity. Billing routes have security tests. Inquiry forms fail closed for bots without giving them a bounce they can learn from.

The product is still a directory: find a place, claim a place, pay for reach when you want it. Shipping the revenue path and deleting the metrics theater in the same week is the operator move.

If you own a shop between Asheville and Boone, what would you fix first on your BestWNC page: photos, hours, or the claim so nobody else can edit it?
`;

const MACKS_COVER =
  "/blog/macks-bbq-shack-canton-condensation-site/cover.png";

const MACKS_CONTENT = `![Mack's Shack homepage. Wood nav, shield logo, chalk value prop over pit fire](https://www.macksbbqshack.com/ribs-sack.avif)

## Who

I build for operators. Sometimes that operator is me. Sometimes it is a pit crew on Main Street in Canton, North Carolina.

Mack's Shack BBQ needed a site that looked like the shack, with a catering path that dropped leads somewhere durable when Chris was on the line. Guests needed hours, address, phone, and a menu that matched the board on the wall. Planners needed "mouths to feed" and an event date without playing phone tag first.

I am the builder. Hustle Launch is on the footer. The food is theirs. The stack is mine to keep honest.

## What

I shipped a private Next.js 16 App Router site. React 19. Bun. Tailwind 4. Biome. Framer Motion on the hero. Cabin Sketch for chalk. Source Sans for the rest.

The homepage is a condensation-glass hero over looping pit video. Pointer clears fog. Mobile drops the canvas and keeps the video. Wood strip across the nav. Tomato catering CTA. Outline button into the menu board.

![Mack's Shack BBQ logo mark](https://www.macksbbqshack.com/logo.avif)

The menu is a skeuomorphic blackboard: real blackboard texture, wood dividers with inset depth, taped Polaroids for brisket, pork, sides, banana pudding. Item copy lives in one content module so the Schema.org Restaurant JSON-LD and the chalk board drink from the same list. Wings brined, smoked, fried, tossed in Bama white. Mack Sack Combo. Family packs. Pick N Choose by the pound.

Catering is a real form: name, email, phone, event date, mouths-to-feed slider, details. The API writes a Convex \`cateringLeads\` row and fires Resend from \`Mack's Shack Bbq <notify@uncap.us>\` to \`macks.shack.bbq@gmail.com\` (CC me). Contact does the same with \`contactSubmissions\` and a "Message Chris" button next to Chris Lewallen's photo and a Maps embed. Sentry on the error boundaries. PostHog on the pageviews. Reviews via a Jotform widget that cannot take the page down with it.

![Brisket. Bark and smoke ring](https://www.macksbbqshack.com/brisket.avif)

## Where

366 Main St. Canton, NC 28716. Phone 828-631-2520. Hours Fri–Sun 11–7, Monday 12–7.

Canonical URL is [www.macksbbqshack.com](https://www.macksbbqshack.com). Vercel also serves the project alias. Repo is private: [michaelmonetized/macksbbqshack-com](https://github.com/michaelmonetized/macksbbqshack-com).

Footer socials hit Yelp, Instagram, Google Maps, Facebook. Footer credit names Hustle Launch for web design and app development. The audience for *this* write-up is builders who care how a local business site actually captures a wedding headcount, and anyone in WNC who already knows the Main Street pit.

![Pulled pork plate asset from the live site](https://www.macksbbqshack.com/pork.avif)

## When

**2026-05-19.** Init. Condensation glass hero mockup. Mobile video fallback. Same day: live business copy, catering flow, hero refinements, mobile drawer, section photos.

**2026-05-20.** Blackboard background. Wood textures. Hustle Launch footer credit. Hero CTA polish until the catering button went tomato. Chris on the contact page. Maps embed. Contact form + Convex persist. Menu Polaroids. Structured data. Sentry. PostHog. Social icons.

**2026-05-22.** Merge PR #1 from \`dev\`. Deploy prod.

**2026-06-04.** Launch prep. Button fix.

**2026-06-27.** Phone update.

**2026-07-12.** Dirty rice off the board.

**2026-07-13.** SEO and custom error boundaries, twice, because the first pass lied. Google/Jotform reviews on about and the other pages. Script moved to the end of body so it stopped breaking the layout.

**2026-07-29.** Sitewide vacation dialog for the Aug 2–3 closure. Cookie dismiss. Sticky banner.

**2026-08-08.** \`X-Robots-Tag: index, follow\` locked in Vercel headers.

**2026-08-30.** Ten commits titled \`[fix] convex + resend connections\`. HEAD settled. Sixty-seven commits from init. That is the clock.

![Nutter Butter banana pudding. Dessert Polaroid source](https://www.macksbbqshack.com/nana-puddin.avif)

## Why

A Main Street BBQ needs the board, the hours, the phone, and a catering form that still works when the dining room is loud.

I wanted the hero to feel wet and hot: condensation over real pit video. I wanted the menu to feel like chalk on wood. I wanted leads in Convex and in the inbox from a domain I control (\`notify@uncap.us\`). I wanted Schema.org to carry the same wings and family packs the chalkboard shows.

So I linked the textures, wired the mutations, shipped the vacation banner before the holiday, and kept fixing the Resend path until August 30 stopped yelling. Operator stack. Local business. Own the notify domain.

The repo is still private. The site is live. The Polaroids are still taped to the board.

If you were standing at 366 Main tonight, which section of that chalkboard would you photograph first?
`;

const UNCAP_COVER =
  "/blog/uncap-us-repo-native-social-layer/cover.png";

const UNCAP_CONTENT = `![uncap.us Raycast-style signed-out landing — Your shortcut to shipped work](/blog/uncap-us-repo-native-social-layer/screenshots/landing-raycast.png)

## Who

I ship software for a living. The repo is where the truth should live. It usually does not.

Code sits in GitHub. Launch posts sit in a thread that dies in three days. Design decisions live as screenshots in Slack. Hiring signal is a PDF from last year. CI cost hides in a vendor dashboard. AI review output never becomes part of the project graph.

uncap.us is for maintainers and operators who want that whole graph attached to the repository — not for people who need another place to perform. If you already think in owner/repo, org routes, and what shipped this week, you are the room.

I also wrote the manifesto out loud: open source should not mean every byte is public every minute. Commits and branches are a bad primary primitive. Worktrees as we inherited them are an abomination. Agents and humans deserve a VFS that tracks work as it happens.

## What

I built a repo-native social layer. Live site: www.uncap.us. App version in package.json: 0.2.0. Private product repo under HurleyUS.

README-first repo pages at /:owner/:repo. Organizations that own repos. Issues and PRs. Explore. Dashboard. A Lens feed for launches, releases, jobs, design updates, and links tied to the project (Lens replaced the earlier wall naming). Pricing and docs. A downloadable Uncap CLI (UnGit) with device-flow login.

![README-first repository home from launch gallery](/blog/uncap-us-repo-native-social-layer/screenshots/repo-home.png)

Origin sync connects public Git origins (GitHub, GitLab, Bitbucket, Codeberg, Forgejo, Gitea), caches shape, and reads files on demand. Native Uncap-hosted Git remotes are a separate rollout; empty states say that out loud instead of faking clone URLs.

The CLI is the manifesto as a tool. uncap watch auto-tracks. Snapshots and virtual worktrees. Visibility flags for private/staging/public artifacts. Maintainer commands cover issues, pull requests, and continuous integration.

Backend is Convex with Clerk auth.

Stack at HEAD includes TanStack Start, Vite, pnpm, React 19, Convex, Clerk. Production deploys as tanstack-start on Vercel. That replaced an earlier Next.js plus Bun era; README badges lag the real stack.

![Origin code browser from launch gallery](/blog/uncap-us-repo-native-social-layer/screenshots/repo-code.png)

## Where

Production is public even though the GitHub repo is private: www.uncap.us. Health at /api/health reports Clerk, Convex, PostHog, Resend, Sentry, and Stripe ready, with origin imports, native Git refs capability flags, and production telemetry enabled — verified 2026-09-08.

Local clone on this machine: /home/michael/Projects/uncap.us @ ce53c96. CLI install assets under /cli. Brand kit under public/ including the u mark.

The audience sits next to maintainers who already connect forges, and builders who read MANIFESTO.md before the pricing page.

![Explore — What's shipping today?](/blog/uncap-us-repo-native-social-layer/screenshots/explore.png)

## When

**2026-01-08.** Init: Next.js, Convex, Tailwind. Early product was closer to a job-seeker platform loop than a forge.

**2026-02.** Schema, Clerk auth, onboarding, job matching, then a hard security and auth hardening pass.

**2026-05-04 to 06.** Rebuild as a social forge. Real services. Auth and repository creation.

**2026-05-14 to 15.** Launch pack: screenshots, announcement drafts, runbook, health gates. Target drop May 15, 8:00 AM ET. Positioning locked.

**2026-06-09 to 12.** Full app migration across nine phases. Legacy Next tree deleted. Downloadable CLI with device auth. Origin sync and Convex file cache. GTM integrations at the code layer.

**2026-06-13 to 16.** Terminology: lens and repo. Marketing docs and signed-out home. Commit graph redesign. u mark lands in the brand set.

**2026-08-08.** X-Robots-Tag set to index, follow on Vercel.

**2026-08-30 to 31.** Signed-out landing redesigned like raycast.com. Command palette hero. Your shortcut to shipped work. Mobile signup overflow fixed. Duplicate Log in removed. AI-slop highlight pill removed. HEAD ce53c96. 338 commits from init to that tip.

![Historical May social-forge home from launch assets](/blog/uncap-us-repo-native-social-layer/screenshots/home.png)

## Why

Git hosts optimized for storing files. The work I actually do spills sideways — launches, design versions, hiring signal, review output, deploy state. I wanted the repository to be the hub that holds that graph without turning the feed into performative noise.

I also wanted source control primitives that match how I work now: auto-tracking instead of nagging myself to commit, granular visibility instead of all-or-nothing public, virtual worktrees instead of copying trees by hand for agents.

So uncap.us is live with origin-aware repo pages, Lens, orgs, and a CLI on the site. Native hosted remotes are still a rollout, not a pretend clone button. The frame under the product changed once while shipping stayed continuous.

Eight months. Three product shapes. One domain. The file cabinet was never going to grow the graph I needed.
`;

const OMARCHYSITE_COVER =
  "/blog/omarchy-site-tanstack-start-rebuild/cover.png";

const OMARCHYSITE_CONTENT = `![Omarchy hero end plate](https://raw.githubusercontent.com/michaelmonetized/omarchy-site-tanstack-start/master/public/assets/images/bg/home/hero-end.jpeg)

## Who

I run Omarchy. Asahi. Hyprland. Quickshell draws the bar. Naarchy sits in the camera hole. The creative suite became omadesign. The public Omarchy site was still a static tree I had forked as omarchy-site.

I ship other properties in TypeScript and TanStack. When the site I point people at does not match the stack I build in, I feel the seam every time I open a PR.

This rewrite is for the operator who already lives on Omarchy and wants install, manual, news, and foundation raise inside a TanStack Start app. Also for anyone evaluating Start on a real content-heavy surface.

I did not invent Omarchy. DHH and Omacom did. I rebuilt the site shell.

## What

Repo on GitHub: michaelmonetized/omarchy-site-tanstack-start
Live vercel.app deploy named after the repo.

Stack is TanStack Start plus Router and React 19.

Also Tailwind v4 and the shadcn UI kit.

Root title stays the Omarchy brand line.

![Tokyo Night](https://raw.githubusercontent.com/michaelmonetized/omarchy-site-tanstack-start/master/public/assets/images/mocks/tokyo-night-preview.webp)

Home plays Quattro first-boot, holds empty sky, then etches the mark.
Below that: foundation raise chart, patrons, menu, themes, Hyprland, Quickshell, plugins.

Manual: 52 chapters as typed modules. News: 16 posts. Install for PC, Intel Mac, and Apple Silicon community builds.
ISO constant is 4.0.2. Import helpers pull HTML from the sibling static site checkout.

![Quickshell bar](https://raw.githubusercontent.com/michaelmonetized/omarchy-site-tanstack-start/master/public/assets/images/mocks/shell-bar.webp)

Deploy config turns off git auto-deploy for main and master. Ship is deliberate.

## Where

It runs on the Vercel preview URL. OS truth remains omarchy.org and omacom/omarchy.
Import sibling on this machine: Projects/omarchy-site. App clone: Projects/omarchy-site-tanstack-start at d98a362.

![Four-way tiling](https://raw.githubusercontent.com/michaelmonetized/omarchy-site-tanstack-start/master/public/assets/images/mocks/navigation-fourway-tiling.webp)

Audience sits next to Omarchy and Asahi people and next to builders already on TanStack Router.

## When

**2026-08-31.** init scaffold.

**2026-09-01.** Landing, layout, shell. Full manual chapters. Rest of site including PC and Mac install. Hero mark and empty sky etch.

**2026-09-02.** Square patrons, 13M raise, Quickshell on home. Three commits on Safari etch. CTAs to install, manual, repo. Nav pinned right.

**2026-09-03.** README plays the desktop walkthrough. Fifteen commits. About three days from scaffold to the URL that still answers.

![Clipboard history](https://raw.githubusercontent.com/michaelmonetized/omarchy-site-tanstack-start/master/public/assets/images/mocks/clipboard-history.webp)

## Why

I needed the Omarchy public face in the same toolchain I use for everything else I ship. Static HTML is fine for the upstream project. My working copy wanted file routes, typed content modules, and a deploy I control.

So I imported the manual and news, wired the raise chart, fixed the etch until Safari stopped lying about the canvas, and left auto-deploy off. The OS stays theirs. The Start app is mine to break and rebuild.

ISO still downloads from omarchy.org. Plugins still live at omarchyplugins.com. This repo is the site rewrite as of September 3, 2026.
`;

const OMNUXGPU_COVER =
  "/blog/omnux-gpu-mit-clean-room-m3-siege/cover.png";

const OMNUXGPU_CONTENT = `![OMNUX-GPU, MIT clean-room siege for M3 pixels](/blog/omnux-gpu-mit-clean-room-m3-siege/cover.png)

![Honest state, scaffold only; no working driver](/blog/omnux-gpu-mit-clean-room-m3-siege/screenshots/honest-state.png)

## Who

I am the person who already said the quiet part on the Omnux umbrella post: M3 installs today, software-rendered, and software rendering is not a desktop.

This piece is for a narrower audience.

M3 owners who will lend a machine for m1n1 proxyclient captures. Reverse engineers who already know Asahi's AGX story on M1/M2 and want the T603x/T8122 delta wall documented without contamination. DRM and Mesa people who treat "working" as render nodes plus glmark on metal, not a README adjective. License hawks who care that MIT stays clean before \`src/\` fills. Agent operators grinding capture loops under the same agent-army mandate that sits in Omnux GOAL.

If you need an install one-liner or a diagnostics tarball, see the sibling posts. If you need the GPU long pole named as a project with acceptance criteria, this is it.

## What

I stood up **omnux-gpu**, a standalone MIT repo whose value is honesty about what is missing.

It is an attempt at a clean-room GPU driver for Apple M3-series silicon. License: MIT. Upstream may take everything; that is the point. The repository holds scaffolding, a research roadmap, tooling stubs, and eventually driver code. It does **not** yet contain a working driver. Nothing here claims otherwise until pixels appear on a physical M3.

![Repo layout, docs, tools, empty src, MIT LICENSE](/blog/omnux-gpu-mit-clean-room-m3-siege/screenshots/repo-layout.png)

Three reverse-engineering walls stand between scaffold and acceleration:

1. **Command processor submission model.** How macOS userspace submits work to AGX firmware on T8122/T603x (differs from M2).
2. **Shader ISA deltas.** M3 brought Dynamic Caching, mesh shaders, hardware ray tracing; instruction encoding moved vs M1/M2.
3. **Firmware interface.** Version negotiation, queues, faults against shipping macOS AGX firmware (issues call 14.8.3+ as the field floor).

![Three RE walls, CP submission, ISA deltas, firmware interface](/blog/omnux-gpu-mit-clean-room-m3-siege/screenshots/re-walls.png)

Each wall is only discoverable against real hardware, using m1n1's proxyclient tracing on a machine booted into macOS with instrumentation. Code written away from the metal is guesswork.

The method is a loop:

1. **Capture.** Target M3 into m1n1 proxyclient from a second USB host; run macOS GPU workloads under \`agx_*\` experiments adapted for newer ABI.
2. **Diff.** Compare to known M1/M2 models; land deltas in \`docs/\`.
3. **Implement.** Clean-room sources in \`src/\` from documented behavior only.
4. **Validate.** kexec Omnux kernel with the driver; iterate until DRM render nodes exist and glmark runs.
5. **Publish.** Every milestone upstream to Asahi first.

![Method loop, Capture Diff Implement Validate Upstream](/blog/omnux-gpu-mit-clean-room-m3-siege/screenshots/method-loop.png)

Fifteen public issues map the work. Issues #1–#8 are the GPU spine: capture harness, submission-model docs, ISA delta docs, firmware-interface docs, DRM skeleton (probe + firmware load + first render node **without** claiming acceleration), Mesa Honeykrisp/agx bring-up for G15-class, t603x power/PMP/thermal, and a local validation harness (kexec + glmark2/vkcube to signed JSON, own metal, no hosted CI theater). Issue #9 is the license immune system: \`docs/CLEANROOM.md\`, PR source disclosure, taint procedure, before any non-scaffold code lands. Issues #10–#15 park SEP/TouchID research on the same tracker so the wall is visible; the biometrics frontier and omnux-report evidence collectors are sibling stories.

\`src/\` is empty on purpose. Contaminated contribution (decompiled Apple code, NDA headers, GPL-mixed paste) poisons the MIT claim. The audit process has to exist before the directory fills.

## Where

It lives where M3 metal and a second USB host can sit on the same desk.

Repo: [michaelmonetized/omnux-gpu](https://github.com/michaelmonetized/omnux-gpu). Parent umbrella wires it as \`gpu/\` under [michaelmonetized/omnux](https://github.com/michaelmonetized/omnux). Diagnostics sibling: [omnux-report](https://github.com/michaelmonetized/omnux-report). Logs, sysinfo, ADT helper, SEP collectors with redaction; useful for evidence, not a substitute for AGX traces.

SoCs in scope: T603x / T8122 class. Capture target: shipping macOS firmware on those chips. Validation target: Omnux kernel kexec'd from m1n1 until \`/dev/dri/renderD*\` appears and the acceptance harness stops lying.

If you have hardware to lend, the README says open an issue. That is the bottleneck.

## When

**2026-08-24.** Single scaffold commit \`a3b7f74\`: MIT LICENSE, honest README, \`docs/NOTES.md\` placeholder, empty \`src/\`, stub \`tools/\`. Created the repo the day before the Omnux umbrella monorepo week. One commit. That is still the commit graph.

**2026-08-25.** Siege map lands as public issues #1 through #9 while Omnux M0 is getting wired. Capture harness called the critical path. Clean-room audit filed as blocking-by-convention and cheap: do it before code, not after a lawsuit hypothetical.

**2026-08-26 to 2026-08-27.** Issues #10–#15 add the SEP/TouchID research program to this tracker (T1 community win, T2 bridge, omnux-report SEP section, apstrand frontier notes). Useful adjacency. Still zero GPU capture artifacts under \`docs/captures/\`. Still no DRM skeleton. The calendar moved; the metal bottleneck did not.

**2026-09-08.** This pack. Still scaffold. Still fifteen open issues. Still waiting on an M3-class machine in the harness loop.

![Issue map, GPU #1–#8, clean-room #9, SEP adjacency #10–#15](/blog/omnux-gpu-mit-clean-room-m3-siege/screenshots/issue-map.png)

## Why

Omnux can already tell the truth about M3 installs. Truth without a GPU project is a permanent software-render sentence dressed up as a roadmap.

I wanted a repo whose license Asahi can absorb without a negotiation. I wanted "working" defined as pixels and scores on metal. I wanted the three RE walls named so contributors argue about captures. I wanted the clean-room gate written before the first real C file, because MIT is easy to claim and hard to un-poison.

The ask is not stars. The ask is hardware in the capture loop, and issue checkboxes that turn green only when the acceptance criteria say so.
`;

const HURLEYUS_COVER =
  "/blog/hurleyus-omarchy-catppuccin-rally-theme/cover.png";

const HURLEYUS_CONTENT = `![Hurleyus hero. desktop preview beside Plymouth unlock](/blog/hurleyus-omarchy-catppuccin-rally-theme/screenshots/hero-desktop-unlock.png)

## Who

I run Omarchy as the daily desk. Catppuccin Mocha is already the right palette: soft contrast, blue accent, pink errors, the whole mocha set.

Stock Mocha still looks like everybody else's laptop.

Hurleyus is for the Omarchy operator who wants Mocha without anonymity. For the Hurley / quattro / rally-art orbit who want the desk to match the brand. For Asahi Mac people who care that the unlock screen and the compiled-in U-Boot splash say the same name as the bar. For theme authors who already learned that shipping Foot or Ghostty palette files inside a theme is how you get a black terminal.

If your Style menu is full of fine defaults and none of them feel like yours, this is the pack.

## What

I built an Omarchy **theme package**. Id folder \`hurleyus\`. Display name **Hurleyus**. MIT. Public repo. Branch \`main\`.

![Desktop preview. Mocha chrome over rally wall](/blog/hurleyus-omarchy-catppuccin-rally-theme/screenshots/desktop-preview.png)

**Palette.** \`colors.toml\` is the source of truth. Background \`#1e1e2e\`. Accent \`#89b4fa\`. Omarchy expands that into Foot, Ghostty, Kitty, Alacritty, btop, Chromium, shell chrome. README is blunt: do not ship terminal palette files in the theme. Those files block the templates. You get a black terminal. I have no interest in that support thread.

**Window chrome.** \`hyprland.lua\`: 20px rounding, 20px gaps in and out, Mocha active/inactive borders. Editors: \`neovim.lua\` points LazyVim at Catppuccin; \`vscode.json\` names the Catppuccin Mocha extension. Icons: Yaru-purple.

![Repo layout. colors, lua, walls, branding, unlock](/blog/hurleyus-omarchy-catppuccin-rally-theme/screenshots/repo-structure.png)

**Walls.** Seven 4K JPEGs, 3840×2160, pre-darkened so the bar and terminals stay readable. Titles in the gallery: Canyon run, Hairpin, The jump, Donuts, Tunnel blast, Service park, Last light. Cycle with \`omarchy theme bg next\` or Style to Background.

![Seven pre-darkened 4K Hurleyus walls](/blog/hurleyus-omarchy-catppuccin-rally-theme/screenshots/walls-gallery.png)

**Boot.** \`unlock.png\` for Plymouth / SDDM. Set with \`omarchy plymouth set by theme hurleyus\` (same path Lumon uses). Branding ASCII for about + screensaver. Logo PNG. And the Asahi-specific piece: \`branding/install-uboot-logo.sh\` finds the 160×160 8-bit BMP slot inside \`/usr/lib/asahi-boot/u-boot-nodtb.bin\`, writes a patched copy under cache, runs \`update-m1n1\`. The splash that ships in U-Boot becomes Hurleyus.

**Install.** Origin README still shows \`omarchy theme install <url>\`. Pack-day local note (not pushed yet): Omarchy 4.0.2+ treats a nested \`.git\` directory as a stranger theme and drops \`hyprland.lua\` on install. Keep the Lua by cloning into \`~/.local/share/themes/hurleyus\`, symlinking into \`~/.config/omarchy/themes/hurleyus\`, then \`omarchy theme set hurleyus\`. A symlink counts as yours. A submodule's \`.git\` *file* also keeps the Lua.

![Install path that keeps hyprland.lua on Omarchy 4.0.2+](/blog/hurleyus-omarchy-catppuccin-rally-theme/screenshots/install-path.png)

## Where

It lives where Omarchy themes live: \`~/.config/omarchy/themes/hurleyus\` on the machine I actually use. Same tree is the git checkout of [michaelmonetized/omarchy-hurleyus-theme](https://github.com/michaelmonetized/omarchy-hurleyus-theme).

Boot path is Plymouth / SDDM for unlock, and Asahi's \`u-boot-nodtb.bin\` for the early splash. No Pages marketing site. No GitHub Release tag. Linguist is mostly the U-Boot install shell plus a little Lua; the walls are the byte mass.

Audience sits next to Omarchy, Catppuccin, Asahi / Omnux Mac desks, and the quattro / Hurley brand lane. People who already know Style to Theme, not people who need a tutorial on what a wallpaper is.

![Boot unlock preview](/blog/hurleyus-omarchy-catppuccin-rally-theme/screenshots/unlock-preview.png)

## When

**2026-08-21, 7:57 PM Eastern.** First commit. \`Fork stock Omarchy Catppuccin into Hurleyus.\` Twenty files. Mocha \`colors.toml\`, hyprland/neovim/vscode/icons, six PNG walls, branding ASCII, preview, MIT, README.

**Same night, 8:09 PM Eastern.** Twelve minutes later. \`Add Hurleyus unlock screen and Asahi U-Boot splash.\` Unlock assets, BMPs, \`install-uboot-logo.sh\`.

**2026-08-22, 6:36 AM Eastern.** \`init\`. Wall refresh, bigger about/screensaver ASCII, hyprland tweak.

**2026-08-26, 5:58 AM Eastern.** \`Package for distribution: 4K JPEG walls, README gallery, cleanup.\` PNG walls out. Seven JPEGs in. Gallery in the README. Fat binaries gone so \`theme install\` is not a joke.

Four commits. Still. Last push \`65f4da3\`. Zero stars. Local README has an unpushed install-path rewrite for the 4.0.2+ Lua drop. Pack day tells that truth instead of pretending origin already has it.

## Why

Mocha was correct and still felt rental.

I want one \`colors.toml\` driving the terminals and the rally art carrying the identity, not a fork of every emulator config.

On an Asahi Mac the splash in U-Boot is part of the machine's face, and patching a 160×160 slot is a real receipt, not a settings-app wallpaper picker.

Omarchy's theme system rewards packages that respect templates. I refuse to relearn the black-terminal lesson.

Fork Thursday night. Unlock and U-Boot twelve minutes later. Slim JPEG distribution five mornings after that.

Would you keep the nested \`.git\` and lose \`hyprland.lua\` on Omarchy 4.0.2+, or clone + symlink so the Lua stays yours?
`;

const REAFERAL_COVER =
  "/blog/reaferral-agent-referral-platform/cover.png";

const REAFERAL_CONTENT = `![Reaferral Inman-style landing. BREAKING referral tracking hero](/blog/reaferral-agent-referral-platform/screenshots/home.png)

## Who

I watch real estate agents make a quarter to a third of their income on referrals and still track those deals in spreadsheets, group texts, and vibes.

That is not a CRM problem. That is a **referral accountability** problem. Who sent it. What fee was agreed. What stage the deal is in. Whether the check showed up when it closed.

Reaferral is for licensed agents who are tired of losing money to ambiguity. Solo producers who want a link in the email signature that actually attributes. Team leads who need roles and a shared pipeline. Builders who already speak Next.js, Convex, and Clerk and want the vertical product without another Electron tray.

If your week includes "did that referral ever close" and a half-finished Google Sheet. that is the room.

## What

I built **Reaferral**: an agent-to-agent real estate referral platform.

Stack on the wire: **Next.js 16.1.6** (App Router, Turbopack), **Convex** for the reactive backend, **Clerk** for auth, Tailwind v4, Radix/shadcn-style UI, Recharts, PostHog, Sentry configs, Resend, Stripe Connect routes. Bun monorepo. Workspaces: \`web\` (\`reaferral-web\` 0.1.0) and \`mobile\` (Expo \`reaferral-app\` 1.0.0). Hosted at [reaferral.vercel.app](https://reaferral.vercel.app). GitHub repo private under HurleyUS.

![Features page: product surfaces and mockups](/blog/reaferral-agent-referral-platform/screenshots/features.png)

What ships in the product surface:

**Referral tracking**. create, send, receive; fee percent or flat; status through the deal.

**Trackable links**. short codes under \`/r/[code]\`, click analytics, campaign names.

**Pipeline**. lead to active to under contract to closed (and payout adjacency in schema).

**Teams**. slugs, invites, roles (owner/admin/financial/assistant/member), pending joins that survive signup.

**Messaging**. per-referral threads in Convex.

**Twelve dashboard themes**. neumorphism, gradient-wave, dark-pro, inman-style, minimal-light, plus brokerage-inspired skins (Keller Williams, RE/MAX, Zillow, eXp, Trulia), Raycast, Brutalist.

**Content engine**. **423** MDX files under \`web/content/stories/\`. Linguist says MDX is ~76% of the repo by bytes. The landing still says "66+ Expert Articles." The filesystem disagrees in the agent's favor.

![Stories journal index](/blog/reaferral-agent-referral-platform/screenshots/stories.png)

![Example story. 47-second setup](/blog/reaferral-agent-referral-platform/screenshots/story-47.png)

Public GTM pages: Inman-style editorial landing (orange LIVE strip, green REA**FERRAL** wordmark, navy stats band), Features, Stories, Investors. Auth: Clerk sign-in/up to \`/dashboard\`.

![Clerk sign-up](/blog/reaferral-agent-referral-platform/screenshots/sign-up.png)

![Investors page](/blog/reaferral-agent-referral-platform/screenshots/investors.png)

Positioning in the ProductHunt/HN drafts on disk: core tracking **free forever**; premium later (follow-ups, agreements, payment tracking). I am not pretending the Stripe Connect routes mean the billing story is finished.

![Illustrative pipeline mock, not a live authenticated dashboard](/blog/reaferral-agent-referral-platform/screenshots/pipeline-mock.png)

## Where

It runs on Vercel at **reaferral.vercel.app**. Clerk on the live deploy is still a **dev** instance (\`pk_test_…\`), the marketing pages render signed-out; the dashboard sits behind auth.

Repo: [HurleyUS/reaferral](https://github.com/HurleyUS/reaferral). Private. Branch \`main\`. HEAD at pack time \`8ba157a\`. **501** commits. Zero GitHub Releases. MIT license file present (copyright line dated 2021).

![Monorepo map](/blog/reaferral-agent-referral-platform/screenshots/repo-structure.png)

The audience sits next to agent networks, Inman-shaped media, and the same Convex/Clerk/Vercel family I use elsewhere, not next to "what is a referral fee" explainers.

Chrome extension lives in a **sibling** repo (\`michaelmonetized/reaferral-chrome-extension\`). Not this pack.

## When

**2024-08-07.** \`init\`.

**2026-01-08.** Docs snap into focus: OPPORTUNITIES, PLAN, README. this is a real-estate referral platform, a tracked referral pipeline.

**2026-02-04.** The real ship week. \`feat: complete Convex backend and core web app\`. GitHub repo created. Landing design variants. Vercel monorepo wiring. Clerk to Convex user sync.

**2026-02-05–06.** Theme system expands. Features + Stories infrastructure. Investors, privacy, terms. Shared chrome. Mobile-friendly dashboard.

**Late February through April.** The content firehose. Hundreds of \`content: add new story\` commits. 413 of them by pack count. Journal becomes the bulk of the tree.

**2026-02-27 onward.** Security passes. auth checks on mutations, collect bounds, Svix verification on Clerk webhooks, console cleanup for production.

**2026-05–06.** CI thrash (Blacksmith) then removal; promo banner overlap fix; nightly commits.

**2026-08-08, morning Eastern.** X-Robots-Tag set to \`index, follow\`, then three unblock fixes so production deploy stops choking. Last push. That is the clock stop for this pack.

**2026-09-08.** Pack day. Site up. \`og-image.png\` 404s. Draft only. no blog publish, no social blast, no git push from this task.

## Why

Because referral income is real and the tooling agents use for it is mostly improvisation.

Because I already had the Convex/Clerk/Next pattern and the missing piece was the vertical: links, fees, stages, teams, and a journal that attracts the people who feel the spreadsheet tax.

Because shipping 423 MDX stories into a private monorepo is a weird flex and also a concrete SEO loop, even when the hero still says 66+.

Because the badge of honesty here is the timeline: February MVP, spring content factory, August robots unblock, still private, still free-forever core, still no tagged release.

What dashboard or sheet are you still using to remember who owes whom on a referral?
`;

const BESTJEEP_COVER =
  "/blog/best-jeep-decals-convex-stripe-storefront/cover.png";

const BESTJEEP_CONTENT = `![Best Jeep Decals. Upgrade Your Off-Road Identity](/blog/best-jeep-decals-convex-stripe-storefront/screenshots/landing.png)

## Who

I kept seeing Jeep owners treat identity like an afterthought: a random sticker from a gas-station rack, peeling after one summer on a Wrangler hood.

The people I built for already know their JL from their JK, their Gladiator JT from an XJ Cherokee. They want hood blackouts, "rated" fender badges, side graphics that look like they belong on the trail, not clip art. They want USA vinyl that lasts 5–7 years outdoors, air-release installs, and a checkout that does not feel like 2014 Magento.

If you ship MarTech, Convex + Clerk + Stripe stacks, or local-commerce sites that have to take real money, this is for you. This is a private HurleyUS storefront (Best Jeep Decals), not a theme demo.

## What

I shipped a dark-first e-commerce site at [bestjeepdecals.com](https://www.bestjeepdecals.com). Orange accent. Italic wordmark. Hero that says the quiet part: **Upgrade Your Off-Road Identity.** Made in the USA badge. Shop All Decals / Browse Wrangler.

![Shop filters. vehicle fitment and price range](/blog/best-jeep-decals-convex-stripe-storefront/screenshots/shop.png)

Stack facts: **Next.js 16.2.6** (Turbopack) on Vercel, **React 19**, **Convex** for products/categories/carts/orders/reviews/wishlists/discounts/subscriptions, **Clerk** for auth, **Stripe** for checkout, webhooks, portal, and promo codes, **Resend** from \`orders@bestjeepdecals.com\`, **Sentry** + **PostHog** (+ GA). Tailwind 4, Phosphor icons, Zustand cart with persist + promo, Zod + React Hook Form on checkout/admin/newsletter. Package **0.1.0**. Private repo.

Seeded catalog: **30** SKUs at **$29.99** across Hood Decals, Fender Decals, Side Graphics. Compass/Tread/Explorer/Star hood blackouts, Beach/Trail/Squatch/Rescue rated badges, Renegade mountain set, Zombie Outbreak Response Team badge, Since 1941 left/right, and the rest under \`public/products/png\`. Shop filters cover category, $0–$200 price range, and fitment checkboxes for Wrangler JL/JK/TJ, Gladiator JT, Cherokee XJ, Grand Cherokee, Renegade, Compass.

![Empty cart. trust path still on-brand](/blog/best-jeep-decals-convex-stripe-storefront/screenshots/cart.png)

Admin lives under \`(private)/admin\` with \`requireAdmin\`. product CRUD (soft delete), orders, CSV export. Wishlist hearts persist in Convex. Reviews attach to products. Related products on PDPs. Billing defs include a **Decal of the Month Club** at **$14.99/mo** plus gift-card and rush-production add-ons. ROADMAP marks the Zod/RHF, Stripe+Resend, and Zustand modernization pass complete.

![Catalog collage from seeded PNGs](/blog/best-jeep-decals-convex-stripe-storefront/screenshots/catalog-grid.png)

## Where

The storefront lives on the open web: [www.bestjeepdecals.com](https://www.bestjeepdecals.com) (apex redirects to www). GitHub homepage still lists the Vercel alias \`bestjeepdecalscom.vercel.app\`. Code: private [HurleyUS/bestjeepdecals.com](https://github.com/HurleyUS/bestjeepdecals.com).

Public routes: shop, product, category, cart, checkout, wishlist. Auth under Clerk catch-alls. Robots.txt allows shop/product/category and blocks admin/api/sign-in/sign-up. Aug 8 added \`X-Robots-Tag: index, follow\` on Vercel so the deploy stops asking crawlers to ignore it.

Audience sits next to Jeep forums, jamborees, and every Instagram wrap account that still cannot take a Stripe payment without a third-party form.

## When

**2024-12-16.** Create Next App. Next day: shadcn init. Dec 27: a "ghostty released" commit. Three commits. Then silence through 2025.

**2026-01-08.** The product actually starts. OPPORTUNITIES.md. Homepage pass. Migrate to convex-nextfaster. **Build MVP e-commerce storefront.** Seed script and \`.env.example\` for production readiness.

**2026-02.** Superadmin email gate. then security move to a server component. Stripe webhook signature verification. Admin auth on product mutations. Cart wired with localStorage session and honest success toasts. Checkout rate limiting. Error and loading boundaries. Next.js thrash: bump to 16.1.6 for a CVE, temporary downgrade to 15.5.12 for middleware, Tailwind v3 to v4, dark-first production audit.

**2026-03-09–17.** Next 15 to 16 for real. Delete deprecated \`middleware.ts\`. Restore Clerk on \`proxy.ts\`. Trust signals on cart. Sentry 10 for Next 16. Revenue unlock doc. Google Analytics. robots + next-sitemap. Stripe webhook + order payment flow. Admin dashboard for products and orders. Soft delete. Edit product. CSV export. Promo codes. Shop filters with category, price, Jeep model (#26). Reviews. Wishlists. Related products. Missing catalog images filled in.

**2026-05-14–15.** Blacksmith CI gates on repeat until they stick. Convex URL and Clerk key fallbacks so CI builds do not cry. Deploy health check targets fixed.

**2026-05-22–26.** Redesign commits. Package update PR #28. Sentry instrumentation. dx-maxxing PR #29. Broken images chased. UX passes. **Real catalog seeded** (\`24758dd\`).

**2026-08-08.** Four commits to finish the clock: force \`X-Robots-Tag: index, follow\`, unblock that deploy in \`next.config.ts\`, pin Stripe to package default API version for build compatibility. HEAD \`fd105bd\`. **Ninety-nine commits** from empty Next scaffold to an indexable commerce deploy.

On 2026-09-08 the live \`/\` sometimes hit the error boundary during capture while \`/shop\` and \`/cart\` still painted the dark chrome. Convex/runtime weather, not a rewrite of the journey.

## Why

A Jeep without identity graphics is fine. A checkout that cannot take money, moderate reviews, or keep a wishlist is not a store. it is a mood board.

I wanted the full path: seeded catalog, model fitment filters, Zustand cart with promos, Stripe webhooks that create orders, Resend that tells you it shipped, admin that can soft-delete a SKU and export CSV, CI that builds without secret theater, and a robots header that admits the site wants to be found.

So I kept shipping until the redesign matched the trail aesthetic and the seed matched the PNG drawer. It is still 0.1.0. Decal Club and gift-card add-ons sit in billing defs waiting for the live Stripe dial. That is fine. The document model already holds products, carts, orders, reviews, wishlists, and subscriptions in one Convex project.

What would you put on a Wrangler hood first: a compass blackout, a tread pattern, or a beach-rated badge that starts arguments at the trailhead?
`;

const SONNY_COVER =
  "/blog/sonnys-shining-rubber-hose-beat-em-up/cover.png";

const SONNY_CONTENT = `![The Shining Gazette landing composite](/blog/sonnys-shining-rubber-hose-beat-em-up/screenshots/landing.png)

## Who

I kept catching myself wanting a beat-em-up that felt like Max Fleischer had a bad New Year's Eve and a bowling league problem.

I wanted the cast, the fatalities, the alley transitions, and the joke about Lucy's heart following the leaderboard on disk before I pretended an empty engine folder meant progress. A Unity purple-capsule template would not get me there. A pitch deck that says "Cuphead vibes" and ships nothing readable would not either.

Sonny's Shining is for people who will sit with a Game Design Document. Indie animation nerds. Silent-film weirdos. Operators who treat Stripe Checkout and a refund policy as pre-production work. If you build MarTech by day and still care whether Bertie the bartender gets stuffed in a trash can, this is for you.

## What

I wrote the IP as a stack of plain Markdown and a marketing site that looks like a 1935 newspaper.

The story: New Year's Eve. Bertie's Bustling Bubbles. Sonny (lanky hound dog man, Sonny Tufts energy, ball-shining towel in the back pocket) holds Lucy, a red fox with Lucille Ball danger in the smile. The bartender whispers. She leaves. Kewpie's bowling-pin limo peels out. Eight levels of Kewpie's payroll stand between a tournament bowler and a girl whose heart tracks the standings.

![Eight bosses / levels](/blog/sonnys-shining-rubber-hose-beat-em-up/screenshots/bosses.png)

Combat is bowling-native. Towel catch-and-return. Barehand bottle returns when the timing is honest. Later, a modified ball-return device becomes an over-the-shoulder launcher. Bosses are silent-film and vaudeville ghosts wearing animal suits: Bert Williams behind the bar, Chaplin as a mouse puppeteering a Fabio crab, Desi on the fire escape, Tippi in the dance school, Bessie on the decks, Snub Pollard in the hangar, Ivy Lee on the docks, Kewpie Morgan as the pig kingpin with a shipboard alley that sways on purpose.

Art bible is rubber hose / Fleischer / Roger Rabbit: noodle limbs, pie-cut eyes, four-finger gloves, springy idle. \`GDD.md\` is ~1,250 lines. \`NOVEL.md\` ~1,600. \`SCRIPT.md\` ~800. \`PLAY.md\` stages it as a tragedy in three acts. \`PLAN.md\` still says engine TBD (Unity or Godot). That sentence is accurate. There is no \`.unity\` or Godot project in this repo yet.

The web half is real software. Next.js 16.2.6, React 19, Tailwind 4, Bun lockfile, package **0.1.0**. Landing is "The Shining Gazette": ticker tape, masthead, drop caps, classified boxes. \`PreorderButton\` collects email, hits \`POST /api/checkout\`, opens Stripe Checkout for **$8.00** (\`unit_amount: 800\`) with metadata \`sonnys-shining-preorder\` and expected release **Christmas 2026**. Privacy, terms, refunds, and success routes shipped with that checkout.

![Preorder / Stripe surface](/blog/sonnys-shining-rubber-hose-beat-em-up/screenshots/preorder.png)

## Where

Marketing lives at [sonnysshining.com](https://sonnysshining.com). Code at [github.com/michaelmonetized/Sonny-s-Shining](https://github.com/michaelmonetized/Sonny-s-Shining). Public. Empty GitHub description. Empty topics. Zero stars. That is fine. The README and the Gazette carry the pitch.

Audience: people who want Cuphead's lineage without Cuphead's budget, and builders who know a preorder page without a refund policy becomes an apology later.

## When

**2025-12-27.** Four commits in one afternoon. \`init\`. Web submodule and last names stripped from the celebrity inspo list. Novel pass. "initalize marketing website for the novel" (yes, that typo is in the commit message). Next 16.1.1 scaffold era.

**2026-01-31.** \`chore: sync all changes\`, one big dump, +1,640 / −79. Writing and early web catching up with each other.

**2026-03-17.** The money day. Privacy, terms, refunds, success. Stripe checkout route. PreorderButton. Newspaper redesign of \`page.tsx\`. \`PLAN.md\` lands. \`ROADMAP.md\` also lands, and it is wrong. It talks about a cleaning/detailing client site. I am leaving that stale stub in the tree rather than rewriting history.

**2026-06-22.** Two \`nightly\` commits. GDD, Stripe cursor rules, fallow review hooks, dependency bump to Next 16.2.6 and \`stripe\` ^22. HEAD \`d6ae3ac\`. Still no engine.

**2026-08-16.** GitHub \`pushed_at\` moves. Main still ends at the June nightly. Eight commits on the ledger. Pack day is September 8, 2026.

Empty repo to a design-complete tragedy with a live preorder path and a missing engine folder.

## Why

I did not want to lie to myself with a blank game project named after a feeling.

So I wrote the characters until Sonny's ears twitched in idle. I wrote the levels until the alley between Bertie and Charlie was a cut you can read. I put $8 and Christmas 2026 on a Stripe session so the promise had a price and a date. I left Unity/Godot as a checkbox in \`PLAN.md\` because checking a box is not shipping a towel mechanic.

It is still web 0.1.0. The newsletter form on the lander is client-side only, with no list backend. \`ROADMAP.md\` needs to be deleted or rewritten. The game does not run. The bible does.

Would you lock the Christmas 2026 preorder first, or open the engine folder and refuse to write another fatality until Bertie's bottle timing feels true?
`;


const HMS_COVER =
  "/blog/hms-hustle-management-system-live-editor/cover.png";

const HMS_CONTENT = `![HMS public home mock. ship the site, edit the site](/blog/hms-hustle-management-system-live-editor/screenshots/public-home.png)

## Who

I kept paying the WordPress tax.

The other tax: Elementor for layout, Dynamic.ooo when Elementor ran out of road, WooCommerce when something had to sell, a pile of PHP templates that only one agency intern understood, and a publish button that still felt like deploying a missile.

HMS is for operators who already know that stack and are done leasing their content model from it. Marketing teams that need a revision trail and a split-test variant without forking a theme. Builders who are happier in Convex + Clerk + Vite+ than in another page-builder SaaS seat.

If you have ever opened a live URL, winced, and opened a totally different admin URL to fix one sentence, this is for you.

## What

I shipped **HMS (Hustle Management System)**. The public site is the product. Pages, posts, products, forms, and templates are **block trees** stored as JSON. Signed-in, you append \`?edit=1\` and edit in place. Visitors keep the same URL. That is the whole thesis.

Stack facts from the lockfile, not the README brochure: **Vite+** (\`vp\` for dev/build/lint/test), **React 19**, **react-router-dom 7**, **Tailwind 4**, shadcn + Base UI, **Zod 4** schemas driving **Convex** tables through \`zodToConvexFields\`, **Clerk** for auth, **Resend** as a Convex email action. Package version **0.0.0**. Public repo under michaelmonetized. Six commits. HEAD \`6f8fa73\`.

![Live editor three-panel mock](/blog/hms-hustle-management-system-live-editor/screenshots/live-editor.png)

The catalog is blunt: Basics, Media, Layout, Proof, Dynamic. Hero, CTA, features, columns, stats, testimonials, FAQ, pricing, logos, collections, menu, search, add-to-cart, cart, forms, document-body. Collections pull pages, posts, products, or media into grid, table, carousel, gallery, or list. and can paint each row with a **loop item** blueprint.

**Blueprints** are one kinded table (ADR 0001): component, form, loop-item, template. Templates carry \`appliesTo\`. header, footer, 404, search, blog archive/single, shop archive, product single. Tokens like \`{{site.name}}\`, \`{{doc.title}}\`, \`{{cart.count}}\` resolve with modifiers. Visibility groups AND/OR on field, schedule, role, referrer, cookie. Revisions snapshot on content update. Variants sit ready for split tests.

Data layer: local store with seed data for offline/dev; Convex when Clerk + Convex env are real (\`isLive\`). Cart lines live in localStorage. Commerce key fields exist on site settings and products. treat full checkout as schema-ready, not a finished money path in this window.

![Manage pages workspace mock](/blog/hms-hustle-management-system-live-editor/screenshots/manage-pages.png)

## Where

Code lives at [github.com/michaelmonetized/hms](https://github.com/michaelmonetized/hms). No homepage URL is set on the GitHub repo. this pack does not invent a marketing domain. Local path is \`vp install\` then \`vp dev\`. Manage workspace under \`/manage/*\`. Public surfaces: \`/\`, \`/blog\`, \`/shop\`, \`/search\`, plus typed entries and slugs.

Audience sits next to every thread still arguing Elementor vs Webflow while the real cost is "two URLs for one sentence." Sibling mail default in the Resend action points at the \`uncap.us\` from-address. same operator family.

![Shop archive mock](/blog/hms-hustle-management-system-live-editor/screenshots/shop.png)

## When

**2026-08-12, 11:17 ET.** \`a62d31d\` initialize. Vite+ scaffold, Max fonts, a full shadcn dump, hero PNG. Two hours later \`07e6672\` configured.

**2026-08-13, 09:40 ET.** \`d95789a\` needs work. Convex pages, posts, products, media, sites, users. First page-builder. Manage shell routes. The CMS bones.

**That evening, 20:57 ET.** \`2404b20\` Ship public site, live editor, revisions, and manage workspace. The thesis lands: the site is the editor.

**2026-08-14, 10:34 ET.** \`12835c6\` new page builder. Catalog depth, finder, blueprints, collections, cart, theme templates. Four minutes later \`6f8fa73\` documents theme templates, search, cart, and library in the changelog. HEAD. Six commits total. Two per day for three days.

![Blueprint library mock](/blog/hms-hustle-management-system-live-editor/screenshots/library-blueprints.png)

## Why

I did not want another theme marketplace. I wanted the visitor URL to be the edit surface, with block JSON on Convex, revisions you can restore, and variants you can assign. without opening a separate Elementor canvas that misrepresents the front end.

So I compressed the escape into six commits: scaffold, configure, Convex bones, ship public+editor, deepen the builder, write the changelog. Version 0.0.0 on purpose. The README still talks like tanstack-start and zustand are still named there; the lockfile says Vite+ and react-router-dom. I would rather say that out loud than ship a brochure.

What would you put on the first HMS page: the home hero, the shop archive, or the form that finally emails without a PHP plugin?
`;

const TWELVEUX_COVER =
  "/blog/twelveux-hosted-shadcn-registry-glass/cover.png";

const TWELVEUX_CONTENT = `![twelveux Glass playground, circle and NEW MATERIAL card](/blog/twelveux-hosted-shadcn-registry-glass/screenshots/playground.png)

## Who

I still install UI the shadcn way. Copy the files. Own the code. The default face is still Inter. The default kit is still New York.

That is fine for a starter. It is not the system I already run on uncap.us and hms: Max type, phi type scale, Catppuccin surfaces.

twelveux is for operators who want that system as a registry namespace they can install. Frontend builders who already type \`npx shadcn add\`. People who remember twelve.ux from the WHATWG-era chrome. Anyone who wants liquid glass from the actual shader, not a CSS blur.

## What

I built a hosted shadcn/ui registry. Next.js 15. React 19. Tailwind 4. Package version 0.1.0.

Three installable items ship in \`public/r\` today: **max**, **theme**, **glass**.

**Max** is the typeface. Local woff faces, weights 100 through 900, roman and italic.

**theme** is phi type and spacing, Catppuccin light and dark CSS variables, Max as sans. Same grammar as uncap.us and hms.

**Glass** is the first real component. Official pen.dev \`glass.glsl\`. Wrapper. Circle defaults baked in. GlassText is a second path with softer defaults for type.

The playground is the product surface. Live circle. Live card. CIRCLE PROPS sliders. Same wrapper on a shadcn button and a navbar over a photo.

![2012 twelve.ux chrome mock](https://raw.githubusercontent.com/michaelmonetized/twelveux/main/public/og/mock-full.jpg)

\`/og\` is the archive: exact 2009-2012 twelve.ux chrome. \`/kit\` is the same chrome under glass.

![glass kit](/blog/twelveux-hosted-shadcn-registry-glass/screenshots/kit-page.png)

## Where

Live on Vercel: https://twelveux.vercel.app (playground, \`/og\`, \`/kit\`, and \`/r\` JSON).

Repo: https://github.com/michaelmonetized/twelveux

\`registry.json\` still says homepage https://twelveux.com. That name has no public DNS as of this writing. The host that answers is the Vercel app.

![scene backdrop](https://raw.githubusercontent.com/michaelmonetized/twelveux/main/public/scene.jpg)

## When

**2009-2012.** twelve.ux chrome. The mock on \`/og\` still wears that date.

**2026-08-15, 4:42 PM ET.** Initial commit: registry, Glass playground, Max fonts, og/kit mocks, built \`public/r\`.

**4:44.** Vercel install freeze fix. **4:46.** Production typecheck fix for Glass. **4:58.** Phone playground. **5:15.** Accordion panes and price ribbon. HEAD \`8b9773b\`.

Five Production deploys the same evening. Five commits. One afternoon.

## Why

I already had a visual system (Max, phi, Catppuccin) living on uncap.us and hms as CSS and fonts. I could not \`npx\` it into a fresh app.

I wanted Glass as installable files: the real shader and the circle props.

I also still have the 2012 chrome in my head. studioTWELVE. twelve.ux. Putting \`/og\` and \`/kit\` next to the 2026 playground keeps the timeline honest.

The registry is the portable form. The playground is the proof. The archive is the old chrome, still online.

What would you install first on a greenfield Next app: \`@twelveux/max\`, \`@twelveux/theme\`, or \`@twelveux/glass\`?
`;


const GETFARMIN_COVER =
  "/blog/getfarmin-farm-equipment-marketplace-scaffold/cover.png";

const GETFARMIN_CONTENT = `![GetFarmin home mock. Find. Buy. Farm.](/blog/getfarmin-farm-equipment-marketplace-scaffold/screenshots/home.png)

## Who

I got tired of watching six-figure iron move on hope and a Facebook comment thread.

Farm equipment is not a $49 SaaS seat. A 2022 John Deere 8R 370 placeholder in this repo lists at **$385,000**. A Case IH 9250 combine sits at **$425,000**. That is not "add to cart and pray." That is escrow, hours, condition enums, oversize permits, and a seller who might be a dealer with a storefront slug.

GetFarmin is for operators who want that marketplace shape on a real stack. Next, Convex, Clerk, Stripe Connect. before they pretend they have 10,000 live listings. Ag buyers and dealers who are done leasing trust from a local classifieds culture. Builders who would rather ship fee constants in a Convex mutation than wait for the perfect deploy key.

If you have ever tried to move a center pivot across state lines with a spreadsheet and a handshake, this is for you.

## What

I built **GetFarmin**. package name \`getfarmin\`, version **0.1.0**, private under **HurleyUS/getfarmin.com**. Metadata line: *Global Farm Equipment Marketplace*. Hero line: **Find. Buy. Farm.**

Stack facts from the lockfile and tree, not the stale sitrep: **Next.js 16.2.6**, **React 19.2.6**, **Tailwind 4.3**, Bun, **Convex** schema + queries/mutations, **Clerk** auth surfaces, **Stripe** webhook route + Connect escrow scaffolding, Catppuccin Mocha default with green primary, Resend/Sentry/PostHog wired in \`.env.example\`. Thirty-six commits. HEAD \`4b5df30\`.

![Browse mock with placeholder iron](/blog/getfarmin-farm-equipment-marketplace-scaffold/screenshots/browse.png)

Surfaces that exist in \`app/\`: \`/\` marketing, \`/browse\` with URL \`searchParams\` filters and placeholder cards from \`lib/placeholder-data.ts\`, \`/about\`, \`/dashboard\`, \`/listing/new\` multi-step form, \`/dealers/[slug]\`, Clerk sign-in/up catch-alls, \`POST /api/shipping/estimate\`, Stripe webhook route.

Convex tables: \`listings\`, \`categories\`, \`users\`, \`dealerProfiles\`, \`messages\`, \`savedListings\`, \`payments\`. Listing tiers: basic / enhanced / dealer. Conditions: new through salvage. Escrow math in \`convex/payments.ts\`: platform **2.9% + $0.30**, escrow **1.5%**, optional buyer protection **+2%**. Comments say PaymentIntent creation is deferred. schema-ready money path, not a finished Connect onboarding wizard.

Shipping estimator in \`lib/shipping-estimate.ts\`: base **$250**, **$2.10**/mile, **$38**/1000 lb, oversize and expedite flags, honest notes about permits and long-haul variance.

![Dashboard mock. inbox + escrow](/blog/getfarmin-farm-equipment-marketplace-scaffold/screenshots/dashboard.png)

## Where

Code lives at [github.com/HurleyUS/getfarmin.com](https://github.com/HurleyUS/getfarmin.com). **private**. GitHub homepage points at [getfarmin-com.vercel.app](https://getfarmin-com.vercel.app). At pack time that URL returned **HTTP 500** with \`X-Robots-Tag: index, follow\` (the Aug 8 header fix). This pack does not invent a healthy production story.

Audience sits next to MachineryTrader / TractorHouse energy, with a builder twist: Catppuccin dark-first UI, compound Convex indexes, issue-driven February feature closeout. Sibling operator furniture is present. \`.hustlemc\`, Blacksmith ship workflow, fallow REVIEW, Stripe sanity rule file.

![New listing multi-step mock](/blog/getfarmin-farm-equipment-marketplace-scaffold/screenshots/listing-new.png)

## When

**2026-01-08.** \`8107c34\` Initial commit: Next.js, Convex, Tailwind. Same morning \`f717dcf\` OPPORTUNITIES + homepage. Afternoon \`381035b\` PLAN improvement list. The market thesis lands day one: global farm equipment, used market, listing tiers, escrow, shipping.

**2026-01-31 / 2026-02-05.** Sync. Prod build ready.

**2026-02-06.** \`6f764f9\` upgrade to Next.js 16, React 19. Tailwind v4 globals \`@import\` fix follows.

**2026-02-13.** \`0afe002\` dark mode, Catppuccin theme system, browse/about pages, Convex schema.

**2026-02-21–22.** Standards debt burned down. error/loading/not-found, env validation, Zod validations, providers, schema foreign keys as \`v.id("users")\`, merged fix PRs.

**2026-02-23–24.** The marketplace week. Search and filtering. Clerk buyer/seller dashboard. Listing creation flow. In-app messaging. Stripe Connect + escrow scaffolding. Dealer storefronts + tiers. Convex bootstrap scripts. Heavy-equipment shipping estimate API. Issues **#1–#8** closed with matching PRs.

**2026-05-14–15.** Eleven commits of Blacksmith CI gates, Biome, preflight, deploy URL verification.

**2026-08-08, 06:54 ET.** \`4b5df30\` set X-Robots-Tag to index, follow on Vercel. HEAD. Thirty-six commits total.

**Pack day 2026-09-08.** Draft and assets only. Live preview still 500s. \`sitrep.md\` still claims purpose unclear and last commit February 5. treat it as drift, not truth.

![Shipping estimate mock](/blog/getfarmin-farm-equipment-marketplace-scaffold/screenshots/shipping-estimate.png)

## Why

I did not want another "agriculture somehow" landing page with emoji tractors.

I wanted fee constants next to listing status enums. I wanted a shipping function that admits a 22-foot load needs permits. I wanted dealer slugs and message threads on the same Convex deployment shape as the browse grid, even while the browse grid still reads placeholder data and the Vercel deployment throws 500s.

So the February issue board became the product: close search, auth, listing form, chat, escrow, dealers, shipping, bootstrap. May hardened the gates. August flipped robots headers on a site that still needs a living Convex URL.

Would you price a six-figure tractor listing as free basic inventory, or charge the $49 enhanced tier before the first escrow release clears?
`;

const MERCHWINNER_COVER =
  "/blog/merchwinner-pod-course-marketplace/cover.png";

const MERCHWINNER_CONTENT = `![MerchWinner live home. Start Learning / Become an Instructor](/blog/merchwinner-pod-course-marketplace/screenshots/home.png)

## Who

I kept meeting people who wanted Amazon Merch, Etsy POD, and Shopify print-on-demand to pay rent, and who were buying theory courses from people who had not shipped a design in years.

MerchWinner is for aspiring merch sellers who want practitioners. It is for active sellers who will teach if the split and the platform are not a second job. It is for operators who want to see a full Clerk + Convex + Stripe course-marketplace shape on Next.js 16 without pretending the catalog is full.

If you have ever built the checkout before the first SKU, this is for you.

## What

I shipped **MerchWinner.com**: a user-contributed course marketplace for learning how to sell merch online. Public surfaces: home, \`/courses\` with search/category/sort, course detail + lesson player, \`/instructors\`, \`/about\`. Instructor workspace for create/edit/publish, lesson reorder, earnings, analytics, profile. Student enrollment dashboard. Money path on Stripe: one-time course and bundle checkout, Pro/Unlimited memberships, webhook to Convex purchases/subscriptions, Resend mail for enrollment, invoice, renewal, review reminders.

Stack from the lockfile, not the stale README line: **Next.js ^16.2.6**, **React ^19.2.6**, **Convex ^1.38.0**, **Clerk**, **Stripe ^22.1.1**, **Resend**, PostHog, Sentry, Tailwind v4, Radix, Catppuccin Mocha default. Package **0.1.0**, private under HurleyUS. **86** commits. HEAD \`65c4413\`.

![Live courses page: search UI with empty catalog](/blog/merchwinner-pod-course-marketplace/screenshots/courses-live.png)

Billing facts in \`lib/billing.ts\`: \`PLATFORM_FEE_PERCENT = 20\` (creator net 80%). Plans: Pro **$29/mo** / **$278/yr** (3 courses/month) and Unlimited **$49/mo** / **$470/yr**. Homepage marketing still says "Earn 70% of every course sale." I would rather name the mismatch than paper it over.

Convex schema covers users (student/instructor/admin), instructorProfiles, courses, lessons, enrollments with progress, subscriptions, coursePurchases, bundlePurchases, payoutRequests, reviews. Eighteen App Router pages. Fourteen API routes. Bun + Biome + ship script.

![About page: practitioner POD curriculum](/blog/merchwinner-pod-course-marketplace/screenshots/about.png)

## Where

Code lives at [github.com/HurleyUS/merchwinner.com](https://github.com/HurleyUS/merchwinner.com) (private). Live site: [www.merchwinner.com](https://www.merchwinner.com). Vercel project URL on the repo homepage field: [merchwinner-com.vercel.app](https://merchwinner-com.vercel.app). Apex redirects to www.

Audience sits next to every POD Discord still arguing Redbubble vs Merch while nobody ships curriculum. Contact in README: michael@hustlelaunch.com. Same operator family as the other HurleyUS Next/Convex products.

![Instructors page: shell loaded, no profiles yet](/blog/merchwinner-pod-course-marketplace/screenshots/instructors-live.png)

## When

**2026-01-08.** \`91c1e8e\` Initial commit: Next.js, Convex, Tailwind. Same day: opportunities doc and homepage pass.

**February.** Next 16 + React 19. Catppuccin dark mode, layout variants, stub \`/courses\` and \`/about\`. Feb 21 standards mega-fix closes a pile of issues. middleware, providers, schema, icons, fonts, email docs.

**March 20–22.** Stripe checkout patterns, instructor profile and earnings, webhook typing. Money enters the building.

**March 25.** Fourteen commits. Resend templates. Phase 2 webhook to email. Phase 3a–3c: instructor course creation, lesson manage UI, student enrollment and lesson player.

**March 26.** Nineteen commits. Phase 4 search/filters/SEO/schema markup. Phase 5 reviews UI + reminders. Phase 6a/6b earnings and analytics merges. Production-ready checklist docs.

**March 27.** Catppuccin unify across the site. Instructor and enrollment CTAs.

**May 13–15.** shipprep standards and a Blacksmith CI/deploy verification flurry.

**2026-08-08, 06:55 ET.** \`65c4413\` set X-Robots-Tag to index, follow on Vercel. HEAD. Eighty-six commits total.

On September 8, 2026 the live \`/courses\` page still reads **"No courses available yet."** The marketplace shipped. The catalog did not.

![Illustrative instructor earnings mock. 20% platform fee math](/blog/merchwinner-pod-course-marketplace/screenshots/instructor-earnings-mock.png)

## Why

I did not want another "courses coming soon" landing page with a Mailchimp box. I wanted the boring spine: auth roles, course/lesson tables, Stripe sessions, webhooks that enroll, email that confirms, instructor earnings that know the fee, student progress that is not a Google Sheet.

So I compressed the spine across six phases and left the honesty visible: empty catalog, empty instructors grid, README still claiming Next 15.5.6 and Payments N/A while Stripe and Next 16 are in the lockfile. Version 0.1.0. Private on purpose until the first real courses earn the public launch.

What would you publish first on MerchWinner: Amazon Merch niche research, Etsy POD ops, or TikTok ads that actually sell shirts?
`;

const OMNUX_REPORT_COVER =
  "/blog/omnux-report-one-command-diagnostics-redaction/cover.png";

const OMNUX_REPORT_CONTENT = `<!-- Cover: upload og.png to Convex storage; embed storage URLs below after upload. Local refs for draft review. -->

![OMNUX-REPORT OG: one-command diagnostics with consent + redaction](/blog/omnux-report-one-command-diagnostics-redaction/cover.png)

![Honest state: shipped, validated, unfinished named](/blog/omnux-report-one-command-diagnostics-redaction/screenshots/honest-state.png)

## Who

I already published the Omnux truth table and the omnux-gpu siege wall. Those posts are live. This piece is the attachable evidence lane.

This is for owners who will file a bug with receipts and refuse to paste a 400 MB journal that still contains a MAC address. For operators who need backlight, WiFi, DRM, speakersafetyd, and sleep lines before the archaeology starts. For SEP/TouchID researchers who need device-tree names and module hints without biometric material. For agent operators who are supposed to produce owner telemetry under the Omnux mandate with real consent, not theater.

Curl install and the truth table live in the umbrella post. M3 AGX pixels with acceptance criteria live in the GPU post. An attachable evidence bundle the owner controls lives here.

## What

I shipped **omnux-report**, a MIT Shell tool whose entire job is to make Apple Silicon Omnux machines comparable in an issue tracker without scooping secrets by default.

One command. Offline. Installed system or live USB. Consent summary prints exactly what will be gathered. Redaction is on unless you opt out. The output is a single \`.tar.zst\` (gzip fallback if zstd is missing) plus a SHA256 sidecar. Attach both.

![Collection pipeline: Consent Collect Cap Triage Redact Archive](/blog/omnux-report-one-command-diagnostics-redaction/screenshots/pipeline.png)

The pipeline is boring on purpose:

1. **Consent** list journal/sysinfo/SEP structure, optional benches, optional ADT helper; show redaction state; wait for \`y\` unless \`--yes\`.
2. **Collect** sysinfo, severity-scoped logs, SEP structure, optional benchmarks, optional ADT instructions.
3. **Cap** any single file over 50 MiB keeps its last 50 MiB with a TRUNCATED header so a pathological journal cannot produce an unattachable blob.
4. **Triage** \`summary.txt\` with PASS / INFO / WARN / FAIL / SKIP per subsystem.
5. **Redact** MACs to \`XX:XX:XX:XX:XX:XX\`; key=value secret backstops; count written to \`redaction-count.txt\`.
6. **Archive** deterministic tar (\`--sort=name\`, fixed mtime) compressed; checksum sidecar.

![Bundle schema v1: logs sysinfo sep benches adt skipped](/blog/omnux-report-one-command-diagnostics-redaction/screenshots/bundle-schema.png)

The schema is documented in \`docs/SCHEMA.md\`. Logs arrive as current boot, previous boot, error, warning. Full history is opt-in because long-lived installs turn "helpful" into hundreds of megabytes. Sysinfo covers identity (model, compatible, chip ids), CPU/memory/kernel, package versions and Omarchy markers, device-tree \`/chosen\` **property names only**, block devices without serials, NVMe model+firmware, displays, Type-C roles, scrubbed network, audio/speaker-safety, GPU DRM/EGL state. Benchmarks default to CPU openssl + portable dd probes; glmark2 and vulkaninfo stay opt-in and always sit next to \`benchmarks/context.txt\` so a number without a model/kernel/mesa line is treated as noise.

![Redaction rules: scrubbed, never collected, kept deliberately](/blog/omnux-report-one-command-diagnostics-redaction/screenshots/redaction-rules.png)

Redaction is the product feature, not the apology. Serial numbers, WiFi/Bluetooth keys, NetworkManager secrets, and \`/etc/machine-id\` are never collected. Interface addresses and SSIDs are scrubbed at collection time so a global regex cannot corrupt timestamps. Secret scrubbing matches only \`key=value\` / \`key:value\` forms. Journal prose like "Forward Password Requests to Wall" survives. Filesystem UUIDs stay because boot debugging needs them; hostnames stay because owners can edit a bundle before attaching if they care.

The SEP section exists for the TouchID-on-Apple-Silicon research program tracked on omnux-gpu issues #10 and #13. It captures device-tree node names and \`reg\` bytes, \`/dev\` and \`/sys\` bus matches, module and modprobe hints, and firmware identifiers. It skips enrollment data, biometric templates, keys, tickets, nonces, TSS responses, and FDR dictionaries. Structure that helps match hardware. Nothing that reproduces security state.

\`--adt\` does not dump an Apple Device Tree on the reporting machine. It writes guided instructions for a second host running m1n1's proxyclient, pre-filled with this machine's model, plus a scrub checklist before attach to omnux#4.

![Triage vocabulary: PASS INFO WARN FAIL SKIP](/blog/omnux-report-one-command-diagnostics-redaction/screenshots/triage-vocab.png)

Triage is the first screen a bug reader should see: machine Apple-or-fail, DRM render node presence, backlight class, WiFi interface/soft-block, Omarchy release marker, mem_sleep states, speakersafetyd, SEP-named DT nodes. Honest and boring.

On 2026-08-26 this produced a complete redacted 3.5 MB bundle on a real MacBook Pro 16-inch M1 Pro running Omarchy. The same day, \`test/fixture-test.sh\` ran ten checks against a synthetic Apple Silicon sysroot on ordinary Linux: model identity, compatible string, journal skip in fixture mode, triage PASS, ADT helper text, size cap, MAC scrub, secret scrub, prose survival, SHA256 verify. That is the receipt that the pipeline is more than "works on my journal."

Still open: packaging into the mx-mac live image, glmark2/vulkaninfo validation on machines that actually have them installed, and an owner-facing release. Working tool. Validated. Unfinished product marketing.

## Where

It lives where an Omnux or Omarchy Apple Silicon machine, or the live USB, can run a bash script without a network. Fixture mode lives anywhere Linux so CI cosplay is unnecessary for the collectors themselves.

Repo: [michaelmonetized/omnux-report](https://github.com/michaelmonetized/omnux-report). Normative feature spec still points at [omnux#2](https://github.com/michaelmonetized/omnux/issues/2). ADT collection issue: [omnux#4](https://github.com/michaelmonetized/omnux/issues/4). SEP research adjacency: omnux-gpu #10/#13. Parent ship lane: [omnux](https://github.com/michaelmonetized/omnux). GPU siege: [omnux-gpu](https://github.com/michaelmonetized/omnux-gpu).

Local clone used for this pack: \`/home/michael/Projects/omnux-report\` on m1pro16 @ \`f9729a6\`.

## When

**2026-08-26.** Scaffold commit \`1019bda\`: honest state, omnux#2 pointer, layout, offline/consent/evidence principles. Same day: \`aac9244\` lands v0.1.0, working collectors, triage, redaction, archive. Same day validation: real M1 Pro Omarchy redacted bundle at 3.5 MB; fixture harness ten checks green.

**2026-08-27.** Commit \`f9729a6\` adds the SEP/TouchID evidence collector wired to the omnux-gpu research issues: structure only, secrets excluded by design. Last push \`2026-08-27T18:34:44Z\`.

**2026-09-08.** Content pack drafted. Live omnux and omnux-gpu posts already cover install truth and the AGX wall. This draft stays unique: diagnostics consent and redaction. Still no mx-mac packaging. Still no owner-facing release ceremony.

## Why

Owner telemetry without owner control is just surveillance with a README. I wanted a command that tells you what it will gather before it gathers it. I wanted redaction as the default path so attaching a bug is not a privacy coin-flip. I wanted numbers that only mean something next to model, kernel, and Mesa lines. I wanted SEP research to have evidence without becoming a biometric vacuum. I wanted a fixture that proves the pipeline on machines that are not Apple silicon so the tool does not only exist in folklore.

The Omnux story splits cleanly across three repos: the umbrella ships the install lane and the truth table; omnux-gpu names the driver wall without claiming pixels; omnux-report turns "please attach logs" into a consenting, redacted, checksummed artifact. That is the ask: run the command, read the triage, attach the two files.

**Engagement Q:** When an owner files an Omnux bug, do you want a consenting redacted \`.tar.zst\` + SHA256 by default, or a raw journal dump they have to scrub by hand first?
`;

const WNC_TOURS_COVER =
  "/blog/wnc-history-tours-booking-shell-before-detail-pages/cover.png";

const WNC_TOURS_CONTENT = `![WNC History Tours homepage mock: Discover the Rich History of Western North Carolina](/blog/wnc-history-tours-booking-shell-before-detail-pages/screenshots/home.png)

## Who

I live in the Blue Ridge ops lane. Visitors want a walking tour, a ghost walk, a cemetery afternoon, or a Cherokee heritage day without bouncing between five operator websites and a generic Viator card. Guides want a place to list and take a booking without building their own Next app.

WNC History Tours is for people hunting history experiences from Asheville to Cherokee, and for the small companies that run those walks.

If you build MarTech, local directories, or Stripe-backed booking surfaces, this post is the field notes on what shipped and what did not.

## What

I built a tour booking platform shell for Western North Carolina history tours.

Stack on the box: **Next.js 16.2.6**, React 19, **Convex**, **Clerk**, Stripe (dependency + env slots), PostHog, Sentry, Resend, Tailwind v4, Bun, Vitest, Vercel config. Repo is private under \`HurleyUS/wnchistorytours.com\`. Package version **0.1.0**. README still says Next 15.5.6; the lockfile moved on.

![Convex schema: companies, tours, bookings, reviews](/blog/wnc-history-tours-booking-shell-before-detail-pages/screenshots/schema.png)

What exists in code:

- Amber/stone homepage with search form, city chips, category cards, featured tour grid
- Convex tables for \`companies\`, \`tours\`, \`bookings\`, \`reviews\` with search indexes
- Tour queries (featured, search, by company/slug) and booking create/status mutations
- Seed mutation for three demo companies and five tours
- Clerk middleware in \`proxy.ts\` with public matchers for the routes I planned to build
- SEO (\`sitemap.ts\`, \`robots.ts\`), error boundaries, HTTP security headers, Blacksmith/shipprep CI gates

What does **not** exist as \`app/\` routes despite the nav and cards linking to them: \`/tours\`, \`/companies\`, \`/city/*\`, \`/category/*\`, \`/search\`, \`/tour/[company]/[tour]\`, \`/list-your-business\`, booking checkout. No \`components/\` folder. No Stripe checkout route.

Homepage falls back to hardcoded demo tours when Convex queries are still loading or empty. Category counts (24 walking, 12 ghost, …) are UI constants. The seed script drifts from the schema (\`rating\` vs \`averageRating\`, duration type, missing required company fields), so production readiness in that commit message is aspirational.

![Declared stack vs actual app tree](/blog/wnc-history-tours-booking-shell-before-detail-pages/screenshots/stack-gap.png)

## Where

Intended host: [wnchistorytours.com](https://wnchistorytours.com). Layout OG, sitemap, and robots all point there. On pack day the domain returned **Cloudflare 526** (origin TLS/unreachable). \`vercel.json\` also sets \`deploymentEnabled\` for \`main\`/\`master\` to **false**; auto-deploy from those branches is off.

Auth path is Clerk. Money path is declared Stripe in \`.env.example\`. Mail is Resend. Errors go to Sentry. Product events go to PostHog. Maps key slot exists for meeting points later.

Audience sits in Western North Carolina heritage tourism and with builders shipping local vertical directories next to products like BestWNC.

## When

**2026-01-08.** Init. Same day: opportunities doc, homepage pass, Convex tour booking MVP (schema + bookings + tours + provider), PLAN updates, \`.env.example\` + seed. Six January commits. The product idea and the shell landed together.

**January 31.** Chore sync.

**February.** Upgrade to Next.js 16 and React 19. Tailwind v4 CSS-first. Clerk middleware and \`cn()\`. Strict TypeScript. Error boundaries. Sitemap and robots. Security headers. Auth check on \`bookings.updateStatus\`. Query \`.take(100)\` bounds. TypeScript fix PRs.

**March.** Vitest smoke coverage. More TS cleanup. Remove GitHub Actions; Vercel called out as CI. ESLint flat config.

**May.** Densest month (15 commits). shipprep standards, Blacksmith CI gate standardization (many near-duplicate gate commits), local preflight, deploy URL and health-check fixes. Platform reliability work while detail pages stay unbuilt.

**2026-08-08 6:55 AM ET.** \`c298e54\` set \`X-Robots-Tag\` to \`index, follow\` on Vercel. HEAD. Thirty-seven commits on \`main\`.

That is the clock from empty repo to a hardened shell with an unfinished booking funnel.

![Commit journey Jan through Aug](/blog/wnc-history-tours-booking-shell-before-detail-pages/screenshots/journey.png)

## Why

Directories and booking marketplaces fail two ways: vapor landers with no schema, or beautiful CI with no product routes. I did the honest middle (real Convex models and a real lander), then spent spring on Next 16, Clerk, SEO, and Blacksmith while the tour detail and Stripe checkout pages stayed on PLAN.md.

The domain is named. The robots header asks to be indexed. The origin was 526 when I checked. That gap is part of the story.

Sibling context: BestWNC is the wider WNC business directory. This repo is the narrower history-tour vertical. Same region, different job.

If you run walking tours in Asheville or Cherokee, would you list on a WNC-only history board, or is Viator still the only checkout that matters?
`;

const YOURZAXBYS_COVER =
  "/blog/yourzaxbys-franchise-management-platform/cover.png";

const YOURZAXBYS_CONTENT = `![Your ZAXBYS landing hero on Vercel](/blog/yourzaxbys-franchise-management-platform/screenshots/landing.png)

## Who

I kept catching myself watching franchise operators bounce between a POS export, a Steritech PDF, a schedule spreadsheet, and a text thread that somehow became HR.

I wanted the above-store view and the store-level pain in the same repo family: real auth, real email, and an honest note that the custom domain DNS still does not answer from my network. A generic restaurant dashboard template with fake charts would not cut it. Neither would a pitch that says multi-unit without a stores table.

Your ZAXBYS is for multi-unit Zaxby's owners, above-store folks, and GMs who will sit with a CAP form. Operators who treat Clerk + Convex as a product decision. If you run MarTech by day and still care whether a food-safety observation has a written plan, this is for you.

## What

I built a franchise management platform as a Next.js app with a marketing shell and a gated dashboard.

Public surface: hero lander, features, pricing, about, testimonials, blog stub, contact, privacy. Clerk sign-in / sign-up. CTAs now point at \`/signup\`. That wiring was a March 1 fix, not day-one. Pricing page sells **Starter $99/mo**, **Professional $199/mo**, **Enterprise Custom**, plus add-ons ($25 per extra location, analytics, integrations setup, priority support). FinalCTA still shows a placeholder \`(555) 123-ZAXBYS\`. That is not a real phone bank.

![Pricing lander on Vercel](/blog/yourzaxbys-franchise-management-platform/screenshots/pricing.png)

Private surface: \`/dashboard\` with stores, employees, schedule, audits, reports, settings. Convex schema is the spine: \`employees\` (roles from \`franchise_owner\` down to \`team_member\`, \`eid\` like \`ZAX######\`, **\`ssnLast4\` only**), \`stores\`, \`schedules\` + \`shifts\`, \`caps\` (food safety / RER with observation, solution, plan), \`audits\` (Steritech, health department, internal, RER), \`salesData\`, \`feedback\`, \`notifications\`. Resend routes send confirmation, invite, and notification mail from \`notify@yourzaxbys.com\`. Invite copy still names **Zaxby's Waynesville, NC**. The sibling store product is real.

Stack on disk: Next **16.1.6**, React 19, Convex, Clerk, Radix + Tailwind, Sentry (\`hustle-launch\` / \`shipthing\`), PostHog provider, Bun lockfile, package **\`zaxbys-franchise-management-platform\` \`1.0.0\`**. \`proxy.ts\` is the Next 16 rename of middleware. Blacksmith \`ship.yml\` pulls Vercel env and Convex deploy keys.

![Illustrative dashboard composite from schema + routes](/blog/yourzaxbys-franchise-management-platform/screenshots/dashboard-composite.png)

Honesty checks: the lander brags \`500+\` locations / \`25%\` cost reduction / \`99.9%\` uptime / \`4.9★\`. Those strings live in \`app/page.tsx\`. They are marketing copy, not a warehouse receipt. Unauthenticated \`/dashboard\` on the Vercel alias returned 404 at pack time, so there is no logged-in screenshot. README still tells you to clone \`michaelmonetized/www.yourzaxbys.com\`; the GitHub org is **HurleyUS**. AUTOPSY.md from February roasted a missing navbar and missing SEO files; HEAD has \`manifest.ts\`, \`sitemap.ts\`, \`robots.ts\`. Treat the autopsy as a scar, not the current build report.

## Where

Code: [github.com/HurleyUS/www.yourzaxbys.com](https://github.com/HurleyUS/www.yourzaxbys.com). Public. Empty description. Empty topics. Zero stars.

Live alias that answered HTTP 200 for this pack: [wwwyourzaxbyscom.vercel.app](https://wwwyourzaxbyscom.vercel.app). GitHub homepage field points there. Custom domain \`www.yourzaxbys.com\` did **not** resolve from the pack hosts (NXDOMAIN). Sibling store app: private [waynesville.yourzaxbys.com](https://github.com/HurleyUS/waynesville.yourzaxbys.com) with its own Vercel alias.

Audience: franchise teams that want one login for labor, audits, and CAP follow-ups, and builders who know a SaaS pricing page without a \`protect()\` boundary is unfinished.

## When

**2025-03-07 to 03-09.** First \`init\` commits under Michael Monetized. Fonts. Style passes. The classic "we gotta push to main to see minor changes yuck" loop. Repo created on GitHub 2025-03-08.

**2025-10-02.** Another \`init\`, reboot marker on the timeline.

**2025-10-15.** The YOLO pivot. Commit message literally: letting CodeRabbit and GPT5 duke out a refactor into a new project idea. Missing deps. Bun trusts. "Updated everything YOLO." "says ready for prod :shrug:" Accessibility vibing. That afternoon is when the franchise platform stopped being a mood and became a tree.

**2025-10-16.** Marketing pages land.

**2025-12-29.** CVE dependency passes.

**2026-01-08.** \`PLAN.md\`: multi-store dashboard, unified reporting, document library, the above-store wishlist.

**2026-01-31.** Big \`chore: sync all changes\`.

**2026-02-04.** \`Add complete franchise management dashboard\`, the product-shaped commit.

**2026-02-06 to 02-21.** Next 16 \`proxy.ts\` rename. Security: SSN off the wire, \`ssnLast4\` in schema, encrypt-at-rest notes in changelog, email domain / EID standardization (#11, #12).

**2026-02-28 to 03-09.** TypeScript fix PR. Strip thirteen console statements. Wire CTAs to \`/signup\`. Bump Next to **16.1.6** for CVEs (#21).

**2026-05-14.** Blacksmith CI gates standardized across a stack of commits. Lazy-init Resend clients. Skip Convex provider when public env is missing so the marketing shell does not die without a deployment.

**2026-08-08.** \`fix: set X-Robots-Tag to index, follow on Vercel\`. HEAD \`705473f\`. Forty-six commits on the ledger. Pack day is September 8, 2026.

Font fiddling to a versioned franchise ops platform with a live Vercel alias and a custom domain that still needs DNS honesty.

## Why

I did not want the store and the above-store to keep living in different tabs forever.

So I put employees, stores, schedules, CAPs, and audits in one Convex schema. I put Clerk in front of the dashboard and Resend on the invite path. I left the marketing stats labeled as marketing. I left the Waynesville invite copy as a breadcrumb to the sibling store app. I set package **1.0.0** knowing "1.0" here means the platform shape shipped, not that every \`PLAN.md\` checkbox is green.

sitrep still says WIP and HIGH client priority. ROADMAP still wants owner UAT. That is fine. The repo has receipts in git: schema, auth, email, CI.

Would you fix \`www.yourzaxbys.com\` DNS and run a real owner pilot next, or delete the fake 500+ lander stats before anyone quotes them as proof?
`;

const MOCKUP_GALLERY_COVER =
  "/blog/mockup-gallery-ten-industry-cold-outreach/cover.png";

const MOCKUP_GALLERY_CONTENT = `![Web Design Portfolio chrome with Prestige luxury real estate tab](/blog/mockup-gallery-ten-industry-cold-outreach/screenshots/gallery-home.png)

## Who

I sell web design the old way sometimes. Email. Industry angle. Proof.

Prospects do not want a Figma file. They want to see what *their* kind of site could look like — real estate, HVAC, SaaS, a restaurant booker — without waiting on a custom sprint.

mockup-gallery is for that motion. Local operators. SMB owners. Anyone I can send a link and a short note. Frontend people who care how a sales kit is actually built under Next 16 and Tailwind 4. Not the twelveux registry crowd. Not a single vertical client delivery.

## What

I built a public Next.js gallery. Package name \`design-mockups\`. Version **1.0.0**. React 19. Tailwind 4. Bun lockfile. Lucide icons.

One client page. Sticky dark portfolio chrome. Ten tabs. Each tab mounts a full-page industry lander under \`app/components/mockups/\`.

The brands on the tabs: **Prestige**, **Velocity Motors**, **Nexus Consulting**, **ARIA**, **ZENITH**, **HandyPro**, **Analytics Pro**, **LearnHub**, **TableHub**, **VoyageNow**.

Roughly twenty-six hundred lines of mockup TSX. No per-mockup routes — tab state only. README ships a cold-outreach template (sign-off in-file still says “—Rusty”).

Observability landed later: Sentry, PostHog, Fallow, Blacksmith \`ship.yml\`.

![Ten industry mockup cards](/blog/mockup-gallery-ten-industry-cold-outreach/screenshots/ten-mockups-grid.png)

## Where

Live on Vercel: https://mockup-gallery-nu.vercel.app — at pack time \`X-Robots-Tag: index, follow\`.

Repo: https://github.com/HurleyUS/mockup-gallery

Contact chrome: hello@hurleyus.com · +1 (828) 593-1935

![HandyPro home services mockup](/blog/mockup-gallery-ten-industry-cold-outreach/screenshots/home-services.png)

## When

**2026-03-28, 7:21 PM ET.** Ten mockups land. Same evening Tailwind v4 / PostCSS / Vercel CSS fight through \`61dda20\`.

**2026-05-14 afternoon.** Blacksmith CI standardization + Fallow/FReview scaffolding + formatter green.

**2026-08-08, 6:55 AM ET.** HEAD \`21f44ec\` — robots \`index, follow\`. Twenty commits. Package 1.0.0.

## Why

I needed a link for industry email without a bespoke repo per vertical. Ten tabbed landers is that link.

Tailwind v4 pain is part of the truth. May CI/observability is the operator habit. August robots flip says the page is meant to be found.

What industry tab would you send first?
`;

const S12IN_COVER =
  "/blog/s12-in-url-shortener-file-hosting/cover.png";

const S12IN_CONTENT = `![s12.in landing. Short links, powerful results](/blog/s12-in-url-shortener-file-hosting/screenshots/landing.png)

## Who

I got tired of leasing short links from tools that treat a redirect like a subscription upsell.

Operators (marketers, founders, agencies, anyone pasting campaign URLs into SMS and decks) need a domain they own, a dashboard that lists what they created, and click facts that survive the redirect. Developers already on Convex and Clerk do not need a fifth SaaS login for "paste URL, get code."

s12.in is for that seat: MarTech folks, Next.js-on-Vercel shippers, and anyone who wants \`s12.in/abc\` instead of a twenty-character tracking URL.

## What

I shipped a URL shortener and file host at [s12.in](https://s12.in).

Stack facts: **Next.js 16.1.6** (App Router, Turbopack) on Vercel, **React 19.2**, **Convex** for links/files/clicks/users plus \`_storage\` uploads, **Clerk** for auth, **Tailwind CSS v4**, Radix primitives, Resend in the lockfile, Biome + oxlint + tsgo. Package name \`s12\`, version **0.1.0**, packageManager **bun@1.3.1**. Repo is **private** under HurleyUS.

![Dashboard. Shorten, upload, manage](/blog/s12-in-url-shortener-file-hosting/screenshots/dashboard.png)

Paste a long URL on the homepage or dashboard. Convex \`links.create\` issues a short code (optional \`customCode\` / \`password\` / \`expiresAt\` exist on the schema; the public form only sends \`url\` + optional \`userId\`). \`app/[code]/route.ts\` resolves the code, parses user-agent, reads Vercel geo headers, hashes the IP with SHA-256 + a salt (16 hex chars), fires \`recordClick\` without blocking, then **302**s. Files take the same path: viewable MIME types redirect to the Convex storage URL; others return an attachment stream.

Dashboard tabs list your links and files with copy/delete. Click and download counters are denormalized on the row. \`getAnalytics\` can roll up by day/country/browser/device/referrer. Charts are not on the dashboard yet.

A Manifest V3 Chrome extension scaffold lives under \`extension/\` and posts to \`/api/shorten\` with CORS. Icon PNGs are still marked \`ICONS_NEEDED.md\` (SVG only in tree).

Honesty operators can smell: the hero still prints **10M+ / 50K+ / 99.9%** as static JSX. The live Clerk publishable key I hit was **pk_test** on \`*.clerk.accounts.dev\`. README still names PostHog and Sentry; those packages were removed Feb 21. Footer GitHub still points at \`michaelmonetized/s12.in\` while the working private remote is **HurleyUS/s12.in**. Schema \`users.plan\` free|pro|team is ahead of any billing UI.

![Redirect pipeline](/blog/s12-in-url-shortener-file-hosting/screenshots/redirect-pipeline.png)

## Where

Product: [s12.in](https://s12.in) (apex redirects toward www). Vercel project alias on the GitHub homepage field: [s12-in.vercel.app](https://s12-in.vercel.app). Routes that matter: \`/\`, \`/dashboard\`, \`/sign-in\`, \`/sign-up\`, \`/privacy\`, \`/terms\`, \`/refunds\`, \`/api/shorten\`, \`/[code]\`.

Code: [github.com/HurleyUS/s12.in](https://github.com/HurleyUS/s12.in). Private, no topics, no license file, no tagged releases. Deploy path is Vercel continuous with a Blacksmith \`ship.yml\` gate. Local path: \`bun install\`, \`bunx convex dev\`, \`bun dev\`.

Audience sits next to every "just use Bitly" thread and every Convex starter that never grew a redirect route.

![Chrome extension scaffold](/blog/s12-in-url-shortener-file-hosting/screenshots/extension.png)

## When

**2026-01-08.** Initial commit: Next.js, Convex, Tailwind. Same day: OPPORTUNITIES.md and homepage improvements; PLAN.md improvement list. Early docs still daydream about a CDN. The product that shipped is the shortener + files.

**2026-01-31 to 02-05.** Sync. Tailwind v4 \`@import\`. Prod build ready.

**2026-02-06.** The spine. Core URL shortening. Upgrade to Next.js 16 and React 19; middleware renamed toward \`proxy.ts\` (and briefly back during Next's naming war). Convex backend configured and deployed. Clerk auth keys landed.

**2026-02-11.** Dashboard UI improvements: links/files mental model.

**2026-02-15–21.** Docs say \`proxy.ts\`. Footer gets real social URLs. Unused \`posthog-js\` and \`@sentry/nextjs\` leave the lockfile.

**2026-02-27.** Security headers in \`next.config.ts\`. \`sitemap.ts\` / \`robots.ts\`. Error boundaries. Auth checks on links and files mutations.

**2026-03-23.** PR #23 strips \`console.error\` noise.

**2026-05-14–15.** Blacksmith CI standardized. Providers tolerate missing Clerk keys so builds do not die. Deploy URL / health-check fixes.

**2026-08-08.** HEAD \`d6c074f\`. \`vercel.json\` sets \`X-Robots-Tag: index, follow\`. Thirty-eight commits on the clock.

## Why

A short link you do not control is a tax with a dashboard skin. I wanted the domain, the Convex tables, and the redirect that writes analytics before the visitor leaves, on the same Clerk identity I already use everywhere else.

Shortening and file hosting landed on \`s12.in\`. Clicks record geo and device fields. Shipping continued until CI and robots headers stopped being the embarrassment.

It is still 0.1.0. Custom codes, password gates, plan limits, and analytics charts sit in schema or queries waiting for UI. Clerk on the observed deploy is still test-mode. That is fine to say out loud. The redirect path and the dashboard list already do the job a rented shortener charges monthly for.

What would you put on \`s12.in/yourcode\` first: the campaign URL, the PDF, or the deck you keep resending as a thirty-line Google Drive link?
`;

const THENATIONALNC_COVER =
  "/blog/thenationalnc-live-rss-before-bias-ai/cover.png";

const THENATIONALNC_CONTENT = `![The National NC homepage: LIVE Latest NC News](/blog/thenationalnc-live-rss-before-bias-ai/screenshots/home-live.png)

## Who

I got tired of opening five tabs to see how the same North Carolina story landed in Charlotte, Raleigh, and the wire services. then pretending I had "read around."

Most "balanced news" products either editorialize or hide the sausage. I wanted a pipe: aggregate first, label leanings when we can prove them, compare coverage when the model earns the pixel.

The National NC is for NC locals and remote watchers who want AP, Reuters, and regional headlines in one dark UI, and for builders who will tolerate an honest placeholder where the AI comparison card still says "coming."

If you ship Next + Convex + Clerk and care about media literacy without a cable-news costume, this is for you.

## What

Live at [thenationalnc.com](https://www.thenationalnc.com/). Private repo [HurleyUS/thenationalnc.com](https://github.com/HurleyUS/thenationalnc.com). Package **0.1.0**, Bun, Next.js **16.2.6**, React 19, Tailwind 4, Catppuccin Mocha by default.

Stack in the lockfile: Convex, Clerk, PostHog, Sentry, Resend, Radix, lucide, next-themes, Vitest. Payments README still says N/A; freemium (ad-free / advanced comparison) is in the opportunities doc, not a Stripe catalog.

![News feed. Live / Editorial](/blog/thenationalnc-live-rss-before-bias-ai/screenshots/news.png)

What actually works today:

- **\`GET /api/news\`** pulls Google News RSS. AP site query, Reuters site query, NC \`when:3d\`. parses items, filters with 30+ NC city/region/team keywords, dedupes by title similarity, caches **15 minutes** in process memory.
- Homepage embeds a **LIVE** feed with source tabs (All / AP / Reuters / NC News) and refresh.
- \`/news\` defaults to Live; Editorial tab still serves eight demo NC articles with Left / Center / Right badges.
- \`/news/[id]\` renders demo content + related sidebar + an **AI comparison placeholder**, not a live model call.
- Convex \`schema.ts\` defines articles, sources, comparisons, categories (optional embeddings). Deployment not initialized; demo data still wins.

On 2026-09-08 the live API returned **50** NC-relevant headlines in one sample (WXII, Citizen Times, Carolina Journal, WRAL, ABC11, NYT, …). AP/Reuters tabs can show zero when those fetches abort. 8s timeout per feed, independent failure.

![About. mission and L/C/R source lists](/blog/thenationalnc-live-rss-before-bias-ai/screenshots/about.png)

## Where

Public product: [www.thenationalnc.com](https://www.thenationalnc.com/). Vercel alias \`thenationalnc-com.vercel.app\`. Routes: \`/\`, \`/news\`, \`/news/[id]\`, \`/about\`, \`/api/news\`. Robots allow site, disallow \`/api/\`. Sitemap is thin (homepage-weighted) as of last deploy.

Code stays private under HurleyUS. Host Vercel; Blacksmith/prebuilt CI path; \`vercel.json\` disables git auto-deploy on \`main\` and sets \`X-Robots-Tag: index, follow\`.

## When

**2026-01-08.** Scaffold Next + Convex + Tailwind. PLAN and OPPORTUNITIES spell the bias-comparison dream before a single feed parses.

**2026-02-06–08.** Next 16.1.6, Tailwind v4 CSS import fix, wire dead homepage buttons, yank Clerk off the homepage when env keys are missing.

**2026-02-13.** The real jump: Catppuccin dark mode, shared layout, demo news + article pages, Convex schema, and **live NC feeds** through Google News RSS (\`44dfae3\`). That is when the site stopped being a brochure.

**Late February.** Clerk middleware, error boundaries, sitemap/robots, security headers, console to Sentry cleanup.

**March.** Vitest smoke coverage.

**May.** shipprep / Blacksmith CI standardization and deploy URL verification. lots of "Standardize Blacksmith CI gates," little product surface change.

**2026-08-08.** HEAD \`bfb6723\`. robots index/follow header on Vercel. Thirty-three commits on the clock.

## Why

Bias detection without articles is a slide deck. I wanted the NC headline pipe in production first: cache, filters, source badges, dark UI. so when OpenRouter (or whatever) comparison lands, it has real URLs to argue about.

The gap is intentional and visible: leaning badges on demos, placeholder comparison card, Convex not live yet. Better than fake AI chrome.

When the comparison model finally ships, which NC story do you want side-by-side first: legislature, weather disaster, or Carolina basketball?
`;

const ILEAGUE_COVER =
  "/blog/ileague-golf-patreon-meets-18birdies/cover.png";

const ILEAGUE_CONTENT = `![iLeague.golf homepage mock. Patreon meets 18birdies, Top 54 qualify for iTour](/blog/ileague-golf-patreon-meets-18birdies/screenshots/home.png)

## Who

I build products in public for operators, not for pitch decks. Golf creators already duct-tape a scorecard app to a Patreon to a tip jar. Fans already bounce between three tabs to follow a round and pay for the good stuff.

iLeague.golf is for those creators and those fans, and for anyone shipping a Bun monorepo that has to hold a Next.js web app, an Expo companion, and a Convex backend without lying about what is finished.

If you care about creator-economy plumbing, Stripe tier math, or how a generic "influencer" scaffold gets rebranded into a sport vertical: this is the field notes.

## What

I shipped a golf creator platform under \`HurleyUS/ileague.golf\`.

The README line is blunt: **Patreon meets 18birdies**. The live lander says the same badge, then: **Where Golf Creators Build Empires**. Track rounds. Build a following. Get paid through subscriptions and tips. **Top 54** creators qualify for [iTour.golf](https://itour.golf). Winners aim at iConference.

Stack on the box: **Next.js 15.5.9**, React 18.3.1, **Convex**, **Clerk**, **Stripe**, PostHog, Sentry, Resend, Tailwind v4, Bun workspaces, Expo 52 mobile, Phosphor icons via react-icons, Vercel. Package version **1.0.0**. Repo is private. Site is public at [ileague.golf](https://ileague.golf).

![Creator profile mock. followers, subscribers, earnings, content grid](/blog/ileague-golf-patreon-meets-18birdies/screenshots/creator-profile.png)

Monetization is not a slide. It is \`apps/web/src/lib/billing.ts\`:

- Platform fee **15%**
- Tip presets **$5 / $10 / $20 / $50 / $100**
- Suggested creator tiers. Bronze $4.99, Silver $9.99, Gold $24.99 monthly (yearly suggested too)
- Real tiers live in Convex \`subscriptionTiers\` and check out through dynamic Stripe \`price_data\` (web API + Convex actions)

Content model covers video, shorts, images, links, text, and **round recaps** tied to scorecards. Visibility: public / followers / subscribers. Courses, course reviews, rounds (FIR/GIR/putts), standings, leagues, notifications. all in \`convex/schema.ts\`.

What is also true: the dashboard still says **influencers**. Explore still calls \`getInfluencers\`. The README still says **Top 36** while the live hero says **Top 54**. Production HTML still loads Clerk **\`pk_test\`** from a \`*.clerk.accounts.dev\` instance. The scorecard schema is ahead of the hole-entry UI. That is the product, part of the story.

![Billing mock. Bronze / Silver / Gold + tip presets](/blog/ileague-golf-patreon-meets-18birdies/screenshots/billing-tiers.png)

## Where

It runs on Vercel against Convex. Auth is Clerk. Money is Stripe. Mail is Resend. Errors go to Sentry. Product events go to PostHog. Mobile is Expo with EAS configs and placeholder Apple submit IDs.

Surfaces that matter:

- Public lander. emerald/slate hero, feature grid, creator/fan columns, ecosystem footer
- Auth + onboarding. Clerk sign-in/up, role/profile setup
- App shell. dashboard, explore, leagues, notifications
- Creator profile. \`/creator/[id]\` with hero, featured courses, content grid
- Payments. \`/api/stripe/checkout\`, portal, webhook; Convex \`/stripe-webhook\`

Audience sits with golf creators, golf fans, and builders watching a sport vertical on a creator-economy stack. Sibling properties: iTour.golf and iConference.golf under the HurleyUS lane.

![Scorecard / schema mock. hole-by-hole model vs missing UI](/blog/ileague-golf-patreon-meets-18birdies/screenshots/scorecard.png)

## When

**2026-01-09.** Initial monorepo. web + mobile. Convex stubs. React 19 downgraded to 18 for Clerk/Convex. Vercel monorepo config. First production deploy on a hustle-launch Vercel URL. CHANGELOG also remembers the earlier \`michaelmonetized/ileague-app\` GitHub link.

**January 31.** Chore sync.

**February 4.** Mobile leagues pushed toward Convex. EAS config. Roadmap honesty about hardcoded mobile screens.

**February 11.** HurleyUS repo created. Golf schema and plan. Golf-focused homepage, header, footer, Convex functions. This is the rebrand day: influencer scaffold becomes iLeague.golf.

**February 12–28.** Stripe API version bump. Search indexes. Metadata rewritten for golf. Golf category. lucide to react-icons. Root \`/convex\` consolidation. CI experiments. Mobile TypeScript cleanup. Vercel as the only CI/CD.

**March.** Security headers. Middleware runtime fights. **www vs apex redirect loop**. normalize middleware, dual aliases, then disable middleware so Vercel stops bouncing. robots.txt, sitemap, trending creators carousel. Stripe checkout patterns standardized. **Creator profile page** ships. Dashboard starts showing real follower/subscriber/earnings stats. Convex package versions aligned.

**May 14–15.** Blacksmith CI gate spam, then removed.

**May 21.** Production Convex crash fix. Missing creator queries for the lander and profile pages. Stripe/Resend factories so deploy analysis does not need live keys. CSP \`worker-src\`. CHANGELOG **1.0.4**.

**June 22.** Nightly commits.

**August 8, 6:55 AM ET.** HEAD \`508df8e\`. set \`X-Robots-Tag\` to \`index, follow\` on Vercel. Fifty-four commits on \`main\`.

**September 8 pack day.** Live site returns 200. Robots tag present. Clerk still on test keys. Draft only.

![Ecosystem mock. iLeague to iTour to iConference](/blog/ileague-golf-patreon-meets-18birdies/screenshots/ecosystem.png)

## When (clock)

Fifty-four commits. January 9 to August 8. HEAD \`508df8e\`. Private monorepo. Public emerald lander.

## Why

Creator tools fail in two directions: beautiful landers with no money path, or Stripe dashboards with no sport-specific object model. I wanted both. scorecards that can become content, tiers that can become iTour qualification, tips that are not a third-party link-in-bio.

I also refused to pretend the rebrand was complete. Influencer function names, Top 36 vs Top 54, and \`pk_test\` on a real domain are operator signals. They tell you where the product still is.

The ecosystem bet is explicit: iLeague feeds iTour feeds iConference. This pack is only the first node.

If you create golf content today, what would you rather ship next on iLeague: a real hole-by-hole entry flow, or flipping Clerk to live keys so the first paying subscriber is not on test mode?
`;

const HURLEYUS_COM_COVER =
  "/blog/hurleyus-com-membership-growth-parent-site/cover.png";

const HURLEYUS_COM_CONTENT = `![Hurley US homepage — Membership Growth for Private & Resort Golf Clubs](/blog/hurleyus-com-membership-growth-parent-site/screenshots/home.png)

## Who

I run Hurley US as the parent company for a golf-media and SaaS portfolio. Clubs do not buy a story about the future of golf. They buy membership revenue.

This site is for private and resort club operators who treat acquisition as a lever, and for builders who want to see how a parent domain can stop performing brand theater and still keep the ecosystem pages in the repo.

## What

I shipped hurleyus.com — private repo under HurleyUS, public site on Vercel.

Live \`/\` mounts **HomeA**: membership growth for private and resort golf clubs. Compensation tied to incremental revenue. No upfront fees. Call CTA to (828) 269-8280. Named proof: Linville Land Harbor Golf Club and Laurel Ridge Resort & Country Club. Sticky mobile call bar.

Stack at HEAD (\`ac2327f\`, package.json **0.1.0**): **Next.js 16.1.6**, React 19, Bun, Tailwind v4, shadcn/Radix, Resend, Sentry, Convex client that no-ops without a real \`NEXT_PUBLIC_CONVEX_URL\`, PostHog that no-ops without a key. README still says Next 15 — deps say 16.

![About — Hurley US](/blog/hurleyus-com-membership-growth-parent-site/screenshots/about.png)

Still in the tree: **HomeB** — Growing the game together, iLeague / iTour / iCon pillars. Not what \`/\` renders today.

Lead forms on partners / sponsors / investors / contact hit \`/api/email\` with Zod validation and an in-memory IP rate limit (5/min). Booking hits \`/api/booking\` and emails an ICS. From: \`notify@uncap.us\`. Owner: \`contact@hurleyus.com\`.

Clerk routes \`/sign-in\` \`/sign-up\` are TODO stubs — **no \`@clerk/*\` in package.json**. Stripe exists as a cursor rule doc, not a dependency.

![Partners](/blog/hurleyus-com-membership-growth-parent-site/screenshots/partners.png)

## Where

Production: [www.hurleyus.com](https://www.hurleyus.com). Apex 301 to www. Verified 2026-09-08: \`X-Robots-Tag: index, follow\`, CSP, HSTS, sitemap for home + partners/investors/sponsors/about/contact.

Quirk: root layout metadata still titles the site Growing the game together while the body is HomeA — \`page.tsx\` imports HomeA without re-exporting its metadata.

![Contact](/blog/hurleyus-com-membership-growth-parent-site/screenshots/contact.png)

## When

**2025-11-25.** Create Next App.

**December 2025.** Theme, copy, A/B homepage (membership lander vs media ecosystem).

**2026-02-05.** Page-B set as permanent homepage. Within two weeks the split collapses; \`/\` is HomeA only. Resend from notify@uncap.us. Booking form. Static/ISR pass.

**2026-02-22 → 04-03.** Convex schema typed. Messaging Phases 1–3 through real-time subscriptions.

**2026-05-13 → 15.** shipprep + Blacksmith CI + deploy health.

**2026-08-08.** \`ac2327f\` — X-Robots-Tag index, follow. 109 commits total.

## Why

A parent domain that only tells the influencer story leaves club operators with nothing to buy. HomeA is the commercial door: own the acquisition pipeline, get paid on incremental membership revenue, stay discreet.

I kept HomeB in the repo because iLeague / iTour / iCon are real product mythology — just not the \`/\` bet right now. The A/B history is on the record: we tried always-B, then shipped always-A.

The stack is honest: Convex and PostHog degrade. Clerk is a TODO. Stripe is a doc. Indexing was the last commit because a public site still needs to be findable.
`;

const WAYNESVILLE_ZAXBYS_COVER =
  "/blog/waynesville-zaxbys-single-store-ops-portal/cover.png";

const WAYNESVILLE_ZAXBYS_CONTENT = `![Waynesville public lander composite from repo event assets](/blog/waynesville-zaxbys-single-store-ops-portal/screenshots/landing-composite.png)

## Who

I kept watching one store, 424 Russ Avenue, Waynesville, NC, try to be three products at once: a community lander for locals and tourists, a hiring funnel, and a shift office that still lived in spreadsheets, Steritech PDFs, and whoever answered the group text first.

This is not the multi-unit franchise SaaS story. That sibling already has its own pack. This one is for the GM and shift leaders who need lunch daypart labor against a ≤17% goal before the dinner rush, and for the parent looking up Kids Night on the same domain.

If you run MarTech by day and still care whether a CAP finding has an observation, cause, prevention trail, this is for you. If you only want a pricing page with fake "500+ locations," read the franchise platform post.

## What

I built a **single-store** Zaxby's management and customer portal.

Public surface (\`app/(public)\`): home with local events (Wheelin' Wednesdays, bounce party, Kids Night), about, careers + apply, catering (redirects to corporate catering), community, events, menu (redirects to zaxbys.com menu), contact. Store truth lives in \`_project.ts\`: **424 Russ Avenue**, Waynesville NC 28786, phone **828-456-2888**, email \`eat@waynesville.yourzaxbys.com\`, hours 10:30–21:00, dayparts lunch / snack / dinner / late.

![Ops map, public, shift, people, numbers](/blog/waynesville-zaxbys-single-store-ops-portal/screenshots/ops-map-composite.png)

Private surface: \`/dashboard\` with live shift, performance, metrics (including SOS and SMG pages), goals and 6-week trends, hiring Kanban, schedule + swaps + time-off, daypart checklists, Steritech CAP reports, training sessions + Zaxby's University tracking, attendance + points, leadership scores, maintenance, uniforms/smallwares orders, announcements, events CRUD, and CSV ingest under \`/dashboard/injest\`.

Convex is the spine: thirty-plus modules. Employees, applicants, shifts, metrics daily/weekly/periodic, caps, checklists, training/ZU progress, attendance points, orders. Package name matches the host: **\`waynesville.yourzaxbys.com\` \`0.1.0\`**. Stack: Next **16.1.6**, React 19, Convex, Clerk, Resend + React Email, Sentry, PostHog, Radix + Tailwind 4, Bun, Blacksmith \`ship.yml\`.

![Illustrative live-shift dashboard composite](/blog/waynesville-zaxbys-single-store-ops-portal/screenshots/dashboard-composite.png)

Honesty checks: sitrep still whispers WIP and "maybe superseded by www." HEAD has more store-ops depth than the franchise sibling. Custom domain \`waynesville.yourzaxbys.com\` did **not** resolve from pack hosts. Vercel alias answered with a **429 bot challenge**, so there is no clean live screenshot and composites are labeled. README growth notes and franchise-purchase storytelling are provenance in the repo. AUTOPSY roasted missing SEO files; HEAD has \`manifest.ts\`, \`sitemap.ts\`, \`robots.ts\`.

## Where

Code: [github.com/HurleyUS/waynesville.yourzaxbys.com](https://github.com/HurleyUS/waynesville.yourzaxbys.com). **Private.** Empty description. Empty topics. Zero stars.

GitHub homepage field: [waynesvilleyourzaxbyscom.vercel.app](https://waynesvilleyourzaxbyscom.vercel.app). Alias host resolves; HTTPS challenged at pack time. Canonical claim \`https://waynesville.yourzaxbys.com/\` sits in \`_project.ts\` and README. DNS unresolved here.

Sibling franchise platform (already packed): [www.yourzaxbys.com](https://github.com/HurleyUS/www.yourzaxbys.com). Same family. Different job. Platform sells above-store; this repo runs **one** store's public face and back-office.

Audience: independent franchisees who need store software that knows Russ Avenue dayparts, and builders who can tell a "restaurant dashboard" template from a Steritech CAP form.

## When

**2025-05-02.** Create Next App to init to first Vercel deploy. Repo created on GitHub the same day. Package starts as a location product.

**2025-05 to 08.** Fonts, navbar, employee headway, image upload fights, ranking UI. The slow work of making a store site feel like a store.

**2025-10-16 to 10-21.** Security and Convex hardening week. Secure server-side SSN verification. External-link \`rel\` discipline. Full-text employee search. Build compilation fixes for production.

**2026-01-03 to 01-04.** Dashboard redesign: Spotify Wrapped energy, scroll snap, metrics tables that calculate labor %, LY comparisons, placeholder rows for the current week, double-click cell edits, charts with 6-week averages and goals.

**2026-01-08 to 01-09.** The suite ships in a day: CSV import/reporting, employee onboarding/self-registration, Indeed hiring Kanban, live shift dashboard, shift checklists, announcements, scheduling, uniforms/smallwares, Steritech CAP, training agendas, attendance tracker, then a training rebuild with scheduled sessions and ZU course tracking.

**2026-01-12.** Delete buttons and missing-week detection on metrics. Practical GM requests.

**2026-02-15 to 02-26.** Security that matters: remove hardcoded encryption key fallback; fix proxy middleware that had made routes public; encrypt SSN at rest AES-256-GCM (#34/#41); strip SSN context from console logs (#43/#50); enforce auth on Convex public mutations (#42/#51).

**2026-03-21.** Remaining \`console.*\` to Sentry logging (#53).

**2026-05-14.** Blacksmith CI gates standardized across a stack of commits. Clerk/email client check fixes. Lazy Resend. Skip Convex provider without public env.

**2026-08-08.** \`fix: set X-Robots-Tag to index, follow on Vercel\`. HEAD **\`c9f97b7\`**. Two hundred thirty-five commits on the ledger. Pack day is September 8, 2026.

May Create-Next-App on Russ Avenue to a versioned single-store ops portal that still wears package **0.1.0**.

## Why

I did not want one location's public community face and its shift office to keep living on different planets.

So I put events and careers on the same origin as live dayparts, Steritech CAPs, hiring, training, and attendance. I put Clerk on the door and Convex under the floor. I left package **0.1.0** because "store software that GMs touch" is not the same milestone as a franchise SaaS **1.0.0** marketing claim. I left the sibling relationship explicit: www is the platform pack; this is the store pack.

sitrep can keep saying LOW priority. The git log disagrees with "empty." The schema disagrees with "template."

Would you point real DNS at this alias and run a week of live shift entry next, or keep the franchise platform and the store portal honest as two products with two jobs?
`;

const MODERN_DESIGN_PLAYGROUND_COVER =
  "/blog/modern-design-playground-afk-webgl-nine-worlds/cover.png";

const MODERN_DESIGN_PLAYGROUND_CONTENT = `![Modern Design Playground: WebGL home instrument](/blog/modern-design-playground-afk-webgl-nine-worlds/screenshots/home.png)

## Who

I do not want another marketing landing that scrolls like a PDF with bounce.

I want an instrument. Pointer gravity. Camera dolly. A stage that listens when you strike it.

modern-design-playground is for operators who already live in Max type, Catppuccin surfaces, and shadcn primitives, and who have watched a WebGL canvas go black after an HDRI 404 and refused to ship the apology screenshot.

It is also for anyone curious what happens when you leave agents AFK with a Playwright density score and a mandate to polish the weakest PNG.

## What

I built **Modern Design Playground**: Vite 8, React 19, TanStack Router, Three.js + R3F, GSAP, Lenis, Motion, Tailwind 4, shadcn base-nova, Max fonts. Private package, unversioned. Nine commits. HEAD \`d16a7e3\`.

Home \`/\` is one continuous WebGL field. Liquid core. Cosmic backdrop. Helix of archive plates that becomes a tunnel. Strike the field. Hold to resonate. Glass / metal / matte. Case study sheet. \`Stage.tsx\` ~1k lines. \`Chapters.tsx\` ~1.4k.

![Landing gallery: nine instruments, zero templates](/blog/modern-design-playground-afk-webgl-nine-worlds/screenshots/landings-gallery.png)

\`/landings\` is nine worlds, not nine templates: editorial, brutalist, noir, zen, neon, paper, atlas, pulse, prism. \`pages.tsx\` is **10,682 lines** of CSS micro-theaters. Immersive routes hide the site chrome.

The honest middle of the story: on July 12 the homepage WebGL died. Remote HDRI Environment suspended the scene. CDN 404s. Postprocessing wiped alpha to zero. I did not hand-paint a hero. I left a marathon (iterate-loop, marathon-forever, smoke-interact): screenshot every surface, score by PNG density, upgrade the weakest, repeat for ~10 hours while I was AFK. STATUS-MARATHON.md is the log. Opaque clear \`#11111b\`. Local lights. No EffectComposer on the home stage. Liquid core came back.

![Brutalist world: paint floor instrument](/blog/modern-design-playground-afk-webgl-nine-worlds/screenshots/landing-brutalist.png)

July 14 I shoved it onto Vercel as a static SPA, ripped Clerk, stripped Convex/PostHog providers for performance. August 8 I set \`X-Robots-Tag: index, follow\`. Live host: **https://mdp-seven.vercel.app**.

Sibling surfaces to keep straight: twelveux (hosted shadcn registry + Glass), HMS (live-edit CMS). Helix stills share energy with uncap; different product surface.

## Where

Live on Vercel: https://mdp-seven.vercel.app (home instrument, \`/landings\`, \`/landings/{slug}\`).

Repo: https://github.com/michaelmonetized/modern-design-playground

## When

**2026-07-12, 10:39 ET.** \`baa3c67\` init.

**That afternoon into night.** Marathon AFK ~12:00 to ~23:00 ET. Passes A through I. WebGL repaired. Nine worlds densified. Commit \`06d6555\` next morning: *speechless, requires a full case study and log analysis*.

**2026-07-14.** Push fixes. \`.debug-screenshots\` gitignored. Deploy to Vercel. SSR to static SPA. Clerk out. Performance strip.

**2026-08-08, 06:55 ET.** \`d16a7e3\` robots index/follow. HEAD. Nine commits total.

## Why

I wanted proof that scroll can be an instrument and that an agent loop with screenshot density as the scoreboard can recover a dead WebGL stage without me babysitting every frame.

So the pack is the playground plus the marathon scar. The live URL is the proof. The STATUS log is the receipt.

If your hero is still a paused MP4 pretending to be 3D, you already know the blank canvas I was staring at.

Which world would you open first after the instrument: brutalist, neon, or zen?
`;


const DJSIDETHREE_COVER =
  "/blog/djsidethree-wnc-wedding-dj-funnel-after-clerk-cut/cover.png";

const DJSIDETHREE_CONTENT = `![DJ Side Three homepage hero](/blog/djsidethree-wnc-wedding-dj-funnel-after-clerk-cut/screenshots/home.png)

## Who

I wanted a wedding DJ site for Western North Carolina that put package prices on the page instead of hiding them behind “request a quote.”

Couples in Asheville, Boone, and Highlands still get Instagram DMs and PDF menus. I wanted a one-pager: soundtrack promise up top, three packages with numbers, availability form at the bottom, admin board for whoever answers the phone.

This is for engaged couples shopping entertainment, for venues that need a real link, and for operators who will ship Convex inquiries before they mount a full SaaS auth stack on a marketing page.

## What

Live at [djsidethree.com](https://www.djsidethree.com/). Private repo [HurleyUS/djsidethree.com](https://github.com/HurleyUS/djsidethree.com). Package **djsideThree** **0.1.0**, Bun, Next.js **16.2.6**, React 19, Tailwind 4, purple/pink on black.

Lockfile reality: Convex, Resend, PostHog, Stripe, Phosphor, Zod, React Hook Form, next-themes. README still lists Clerk/Sentry/Radix from the scaffold era. Those got cut or never shipped in the live tree.

![Services. ceremony, reception, lighting](/blog/djsidethree-wnc-wedding-dj-funnel-after-clerk-cut/screenshots/services.png)

What the page actually sells:

- **Ceremony** from **$500**. sound, two wireless mics, prelude/processional/recessional, officiant coordination
- **Reception** from **$1,200** (Most Popular). four-hour DJ, lighting, MC, requests, cocktail hour, backup gear
- **Full Day** from **$1,500**. ceremony + reception, up to eight hours, upgraded lighting, rehearsal/timeline help

![Wedding packages $500 / $1200 / $1500](/blog/djsidethree-wnc-wedding-dj-funnel-after-clerk-cut/screenshots/packages.png)

Inquiry path: \`#contact\` form to Zod client validation to Convex \`inquiries.create\` (future date check, normalize email, **3/email/hour** server rate limit, Resend notification schedule). Client also throttles resubmits to 60 seconds. Testimonials pull approved Convex rows or fall back to three static couple quotes. \`/admin\` shows New / Contacted / Booked / Total. On 2026-09-08 capture: all zeros and skeleton rows (no live inquiry data in that session).

![Check Availability inquiry form](/blog/djsidethree-wnc-wedding-dj-funnel-after-clerk-cut/screenshots/contact.png)

Honesty: hero claims **200+** weddings / **5.0** / **10+** years are marketing copy. Footer phone is \`(828) 555-0123\`. Stripe is a dependency and a Cursor rule, not a deposit checkout on the page. Clerk identity checks remain in Convex admin functions after the Clerk provider was removed. The admin board is not secure by UI hope.

## Where

Public product: [www.djsidethree.com](https://www.djsidethree.com/) (apex 307s to www). Vercel alias \`djsidethree-com.vercel.app\`. Routes: \`/\`, \`/admin\`. Single-page anchors: \`#services\` \`#packages\` \`#testimonials\` \`#contact\`.

Code stays private under HurleyUS. Host Vercel; Blacksmith/prebuilt CI path in May; HEAD sets \`X-Robots-Tag: index, follow\`.

## When

**2026-01-08.** Scaffold Next + Convex + Tailwind. Same day: OPPORTUNITIES/PLAN, then **complete DJ landing MVP**. hero, services, packages, testimonials, contact, plus seed script, Resend path, and admin dashboard. That is the product surface.

**2026-02-06 to 13.** Next 16 / React 19, Tailwind v4 CSS import fix, Convex generated types, dark mode defaults, build/design-rule cleanup.

**2026-02-21-22.** Hardening week: inquiry auth checks + validation, focus rings, label associations, mobile hamburger, skeletons, Phosphor instead of lucide, Zod + rate limiting, Turnstile CAPTCHA, Server Component extract for static sections, Clerk middleware on \`/admin\`.

**2026-02-27.** Plot twist: **\`fix: remove Clerk, Turnstile, and Sentry, fix production 500 error\`** (\`be461fc\`). Auth/CAPTCHA/error-tracking chrome was cheaper to delete than to keep misconfigured in prod.

**Late Feb to early March.** P1 security follow-ups, inquiry rate limit **3/email/hour**, env validation fail-fast.

**May.** Seven “Standardize Blacksmith CI gates” commits plus deploy URL verification. CI theater, little marketing surface change.

**2026-08-08.** HEAD \`2c804ad\`. robots index/follow header. Forty-three commits on the clock.

## Why

A wedding DJ site that hides price and inquiry behind “book a call” is a brochure. I wanted packages and a form in production first.

When Clerk + Turnstile + Sentry 500’d the marketing page, I cut them. Zod, rate limits, Phosphor, and the Convex inquiry shape stayed. Deposits and real admin auth can earn their way back. The soundtrack page should not die for missing keys.

Would you keep an unprotected \`/admin\` board after ripping Clerk, or is a single shared secret / Convex auth identity the next Saturday morning?
`;

const EVERYTHINGMONETIZED_COVER =
  "/blog/everythingmonetized-parody-lms-course-bros/cover.png";

const EVERYTHINGMONETIZED_CONTENT = `![EverythingMonetized live hero, Cohort 04 parody LMS academy redesign](/blog/everythingmonetized-parody-lms-course-bros/screenshots/home-live.png)

## Who

I build products in public for operators who can smell a funnel from across the room. The course economy already sells the same promise on a loop: buy a course about making money by selling courses about making money. Fans of that bit, and builders who want the satire to have a real schema, are who this is for.

If you already read the MerchWinner pack (POD course marketplace, empty catalog) or iLeague (golf creator Stripe), this is a different lane. EverythingMonetized is intentional parody of the guru machine.

## What

I shipped a parody LMS under \`HurleyUS/everythingmonetized.com\`.

README one-liner: **Parody site where AI generated course bros sell course bro courses to aspiring course bros.** Live metadata: **Where Course Bros Monetize Everything.** The May 22 redesign hero is blunter: **The parody LMS for learning how the course economy sells itself.**

Stack on the box: **Next.js 16.2.6**, React 19.2.6, **Convex**, Tailwind v4, Phosphor, Framer Motion, Radix, next-themes (dark default), PostHog, Sentry, Resend. Bun. Package **everythingmonetized** **0.1.0**. Private HurleyUS repo. Public site at [www.everythingmonetized.com](https://www.everythingmonetized.com).

![Illustrative course catalog, 9 of 10 seeded absurd titles](/blog/everythingmonetized-parody-lms-course-bros/screenshots/courses.png)

Convex schema is the product spine:

- \`courseBros\`: name, slug, tagline, bio, catchphrases, specialties, socialProof, featured
- \`courses\`: absurd titles, inflated \`originalPrice\`, modules/lessons, category, search index
- \`testimonials\`: always-verified parody outcomes
- \`subscribers\`: newsletter with email dedupe + source
- \`purchases\`: pending/completed/refunded; paymentMethod includes **exposure**
- \`rateLimits\`: newsletter + purchase mutations

Seed ships **5** AI gurus (Chad Hustlemax, Brandon Scale, Tiffany Funnel, Derek Dropship, Maximilian Leverage) and **10** courses from $2,997 to $8,997, titles like *How to Find Your First Course Idea (By Buying This Course)* and *Mindset Mastery: Think Rich, Stay Poor (Until You Buy This)*. Avatars and thumbs are Pollinations prompt URLs.

Admin is a full CRUD plane: bros, courses, testimonials, subscribers. Auth is a **password cookie** (\`ADMIN_PASSWORD\`, fail-secure after Feb 15). \`@clerk/nextjs\` sits in package.json; public Clerk billing is README fiction. TODO from Feb 13 says no Clerk auth.

Purchase success copy is the thesis: congratulations, course bro, **no actual course will be delivered**. Commitment to the bit is the product.

![Illustrative course detail, High-Ticket Alchemy parody checkout](/blog/everythingmonetized-parody-lms-course-bros/screenshots/course-detail.png)

What is also true on pack day: the live \`/courses\` page says **Showing 0 of 0 courses**. Seed exists. Production Convex is empty or unconfigured. TODO still blocks on GitHub issue #1, Convex env vars on Vercel. sitrep.md still claims PROTOTYPE / last commit Jan 31 / LOW priority. README still says Next 15.5.6. That drift is the story.

## Where

It runs on Vercel. Apex \`everythingmonetized.com\` 307s to www. Alias \`everythingmonetized-com.vercel.app\` also 200. \`vercel.json\` disables git auto-deploy on main/master and, as of Aug 8, sends \`X-Robots-Tag: index, follow\`.

Surfaces that matter:

- Public lander: teal academy hero, learning-dashboard.tsx card, featured tracks, faculty, learner outcomes, weekly lab newsletter
- Catalog: search / category / price / sort / pagination
- Bro profiles: \`/bros/[slug]\`
- Course detail: modules + parody purchase form
- About: mission + core values (Hustle Over Health, etc.)
- Admin: password gate via \`proxy.ts\`

Audience: satire builders, MarTech operators, and anyone comparing a seeded Convex backend to a live empty catalog.

![Live courses page, Showing 0 of 0](/blog/everythingmonetized-parody-lms-course-bros/screenshots/courses-live.png)

## When

**2026-01-08.** Initial Next.js + Convex + Tailwind. OPPORTUNITIES.md and PLAN.md the same day. The bit was named early.

**January 31.** Chore sync.

**February 6.** Next.js 16 + React 19. Tailwind v4 \`@import\` fix.

**February 8.** The product day. Admin panel, tests, search/filter/SEO, edit pages. CHANGELOG **0.1.0** lists five tables, parody purchase, Pollinations images, 48 unit tests, Playwright config, PostHog, Sentry, rate limits.

**February 13.** Production readiness: BUILDING.md button compliance, dark mode via next-themes, \`proxy.ts\` naming for Next 16.

**February 15.** Security: remove hardcoded admin password + fallback. Fail closed if \`ADMIN_PASSWORD\` missing.

**February 21.** lucide to \`@phosphor-icons/react\`.

**April 6.** ESLint / vitest chore.

**May 13–15.** shipprep + Blacksmith CI gate spam, then deploy health URL fixes. Same CI noise pattern as sibling HurleyUS templates, but this repo already had the Feb product pass underneath.

**May 22.** **redesign.** Teal/slate academy UI on home, cards, header/footer, newsletter. Orange hustle-gradient brand in DESIGN.md becomes the light-theme leftover; dark default is the live look.

**August 8, 6:54 AM ET.** HEAD \`e7c6a61\`, \`X-Robots-Tag: index, follow\`. Thirty-one commits on \`main\`.

**September 8 pack day.** Live lander matches redesign. Catalog still 0/0. Draft only.

![Illustrative faculty row, five AI course-bro operators](/blog/everythingmonetized-parody-lms-course-bros/screenshots/bros.png)

## Why

Satire of the course economy fails when it is only a landing meme. It needs personas, a catalog, an admin plane, and a checkout that confesses the joke. I wanted that spine in Convex.

I also refused to pretend production was seeded. Robots say index,follow. Courses say 0 of 0. Seed.ts says ten high-ticket absurdities. Those three sentences together are the operator note.

If you ship a parody LMS next, what do you fix first: seed Convex so the bit has inventory, or leave Showing 0 of 0 as the meta punchline?
`;

const CRAVEES_COVER =
  "/blog/cravees-catering-martech-agency-site/cover.png";

const CRAVEES_CONTENT = `![Cravees home. Turn hungry searches into booked tables](/blog/cravees-catering-martech-agency-site/screenshots/home.png)

## Who

I got tired of watching catering businesses buy generic agency retainers that treat a wedding buffet like a SaaS landing page.

Catering is feast-or-famine. Wedding season starts when venues book. Corporate lunch messaging is not private-event messaging. Deposit timing matters. A Google Business profile can become tasting appointments, or a photo graveyard.

Cravees is for caterers and restaurant catering arms who need demand this month: inquiry lift, reorder lists, review velocity. Operators who want a vertical agency site on a real stack (Next, Convex, Clerk, Stripe) with lead status enums that survive a failed Resend delivery. Builders who will admit the public pricing cards and the Stripe \`planSlug\` ladder are not the same numbers yet.

If you have ever explained to a marketing generalist why plated service and buffet are different offers, this is for you.

## What

I built **Cravees**, package name \`cravees\`, version **0.1.0**, private under **HurleyUS/cravees.com**. Metadata line: *Marketing Agency for the Catering Industry*. Hero line: **Turn hungry searches into booked tables, events, and repeat orders.**

Stack facts from the lockfile and tree, not the stale sitrep: **Next.js 16.2.6**, **React 19.2.6**, **Tailwind 4.3**, Bun, **Convex** schema + mutations, **Clerk** auth surfaces, **Stripe** checkout/portal/webhook, Catppuccin Mocha with peach primary, Resend/Sentry/PostHog/GA wired. Seventy-three commits. HEAD \`ab0c4cb\`.

![Pricing. Starter Growth Premium](/blog/cravees-catering-martech-agency-site/screenshots/pricing.png)

Surfaces that exist in \`app/\`: \`/\` marketing with demand cockpit + case studies + testimonials + FAQ + ROI embed, \`/about\`, \`/pricing\` with comparison table, \`/blog\` + three SEO posts, \`/contact\` enhanced form (business type + service interests), \`/book\` Calendly, \`/roi-calculator\`, four \`/services/*\` landings, Clerk catch-alls, private \`/dashboard\` (+ messages, assets), newsletter + Stripe API routes.

Convex tables: \`leads\`, \`subscribers\`, \`clients\`, \`subscriptions\`, \`addOnPurchases\`. Lead pipeline: **new to contacted to qualified to proposal to won | lost**. Public packages: Starter **$299**, Growth **$599**, Premium **$999**. Stripe definitions in \`lib/billing.ts\`: Bronze **$499**, Silver **$999**, Gold **$1,999** (+ annual labels). Add-ons: extra social post $49, rush design $199, additional listing $99.

That dual ladder is not a typo in this write-up. It is the product honesty.

![ROI calculator](/blog/cravees-catering-martech-agency-site/screenshots/roi-calculator.png)

## Where

Code lives at [github.com/HurleyUS/cravees.com](https://github.com/HurleyUS/cravees.com). **private**. GitHub homepage points at [cravees-com.vercel.app](https://cravees-com.vercel.app). Custom domain [www.cravees.com](https://www.cravees.com) also **200** at pack time. Apex redirects to www. Auth-gated \`/dashboard\` and \`/sign-in\` returned **500** without living Clerk keys. marketing stays up because May commits taught the app to tolerate missing auth/env.

Audience sits next to restaurant marketing shops, with a catering-only pitch: inquiry funnels, seasonal search pages, winback email for lapsed brunch guests. Sibling operator furniture is present. \`.hustlemc\`, Blacksmith ship workflow, Vitest/Playwright, Stripe type-safe webhooks.

![About. catering-only positioning](/blog/cravees-catering-martech-agency-site/screenshots/about.png)

## When

**2026-01-08.** \`8b80d36\` Initial commit: Next.js, Convex, Tailwind. Same morning OPPORTUNITIES. Afternoon PLAN. Market thesis lands day one: ~12k dedicated caterers, $60B+ industry framing, Starter/Growth/Premium sketch.

**2026-01-31 / 2026-02-05.** Sync. Prod build ready. Tailwind v4 globals \`@import\` fix.

**2026-02-13.** Catppuccin Mocha default. Routes, contact, pricing, about. Four service landing pages. Replace a real business name with fictional **Copper Kettle Catering**. quiet ethics commit.

**2026-02-21–24.** The agency week. Zod schemas shared across form + API. XSS sanitize on contact HTML email. Clerk middleware. Convex lead storage. FAQ. Testimonials. Pricing comparison table. Blog section. Calendly booking. PostHog. ROI calculator page. Portfolio/case-study cards. Newsletter + Resend double opt-in. Protected client portal scaffold.

**2026-03.** SEO robots/sitemap/GA. Stripe type-safety and event guards. Enhanced contact form. Interactive ROI on the homepage.

**2026-05-14–22.** Blacksmith CI and deploy verification. Keep public site up without auth env; disable Clerk UI for dummy keys; tolerate invalid Resend sender. Redesign commits. Merge blacksmith migration PR #64.

**2026-08-08, 06:54 ET.** \`ab0c4cb\` set X-Robots-Tag to index, follow on Vercel. HEAD. Seventy-three commits total.

**Pack day 2026-09-08.** Draft and assets only. Live marketing 200 on vercel + www. \`sitrep.md\` still claims purpose unclear and last commit February 5. treat it as drift, not truth.

![Blog index. three catering posts](/blog/cravees-catering-martech-agency-site/screenshots/blog.png)

## Why

I did not want another hospitality brochure with stock plate photography and a contact form that emails into the void.

I wanted lead status enums next to subscription sync. I wanted an ROI calculator that routes into the same contact pipeline as the pricing CTA. I wanted newsletter double opt-in and a client portal sidebar even while \`/dashboard\` still 500s without Clerk. I wanted the public $299/$599/$999 story and the Stripe bronze/silver/gold amounts to be visible in the same repo so nobody pretends they already match.

So the February issue board became the agency: close FAQ, social proof, pricing table, blog, book, analytics, ROI, newsletter, portal. March hardened SEO and Stripe. May made the public site survive missing secrets. August flipped robots headers on a site that actually answers.

Would you ship the public Starter/Growth/Premium ladder first, or make the Stripe bronze/silver/gold amounts match the pricing page before the next catering discovery call?
`;

const COORDINATORAPP_COVER =
  "/blog/coordinatorapp-api-queue-control-plane/cover.png";

const COORDINATORAPP_CONTENT = `![Coordinator home. Reliable queues for the APIs your product depends on](/blog/coordinatorapp-api-queue-control-plane/screenshots/home.png)

## Who

I got tired of watching production workers invent their own Stripe and GitHub throttles.

Every SaaS eventually grows a Friday-night 429 story. Someone hard-codes a sleep. Someone else adds a Redis queue "just for this provider." Zapier looks fine until flood protection is the product and connector count is the brochure.

Coordinator is for operators who want a **hosted control plane** for rate limits, retries, backoff, and replay. before they pretend the SDK already ships. Production teams who need queue depth and provider health readable in one zinc panel. Builders comparing Zapier / Make / n8n on backpressure instead of logo walls.

If you have ever paused a HubSpot sync because the provider blinked, this is for you.

## What

I built **Coordinator**. package name \`coordinatorapp\`, version **0.1.0**, private under **HurleyUS/coordinatorapp.com**. Metadata: *Smart API Queueing & Rate Limiting*. Tagline energy: **Connect. Queue. Execute.** Hero: **Reliable queues for the APIs your product depends on.**

Stack facts from the lockfile and tree, not the stale sitrep: **Next.js 16.2.6**, **React 19.2.6**, **Tailwind 4.3**, Bun, **Convex**, **Clerk**, **Stripe** checkout/portal/webhook with dynamic \`price_data\`, Sentry, PostHog, GA. Fifty-two commits. HEAD \`b7e9b3b\`.

![Live pricing. Free / $29 / $79](/blog/coordinatorapp-api-queue-control-plane/screenshots/pricing.png)

Surfaces that exist: \`/\` zinc lander with DashboardPreview (24,891 queued / 1,204 429s prevented / 2.4s retry; Stripe / GitHub / HubSpot rows), \`/pricing\`, \`/docs\` (every guide card says Coming soon), \`/privacy\`, \`/terms\`, \`/sign-in\`, \`/sign-up\`, \`/events/[eventId]\`, Stripe API routes under \`app/api/stripe/\`.

Convex tables: \`waitlist\`, \`events\`, \`attendees\`, \`users\`, \`subscriptions\`, \`addOnPurchases\`. Waitlist mutation + \`WaitlistForm\` exist. **not wired into the May redesign homepage**. Event RSVP (Mar 20 #31) tracks capacity, dietary notes, confirmed/tentative/cancelled.

![Billing drift. pricing page vs lib/billing.ts](/blog/coordinatorapp-api-queue-control-plane/screenshots/billing-drift.png)

Money path split brain: **live pricing page** sells Starter Free / Pro **$29**/user/mo / Business **$79**/user/mo. **\`lib/billing.ts\`** (what checkout reads) prices Starter **$19**, Pro **$49**, Business **$149**, plus Extra Executions **$19** and Priority Support **$99**. OPPORTUNITIES still promises an **n8n** backend. There is **no n8n** in the tree. Homepage teases \`coordinator.queue(...)\`, the SDK is marketing, not a package.

## Where

Code: [github.com/HurleyUS/coordinatorapp.com](https://github.com/HurleyUS/coordinatorapp.com). **private**. Live: [www.coordinatorapp.com](https://www.coordinatorapp.com) (**HTTP 200**, apex 307 to www). GitHub homepage: [coordinatorapp-com.vercel.app](https://coordinatorapp-com.vercel.app) (same prerender etag). \`X-Robots-Tag: index, follow\` from the Aug 8 \`vercel.json\` fix.

![Docs. Coming soon](/blog/coordinatorapp-api-queue-control-plane/screenshots/docs.png)

Audience sits next to Zapier / Make / n8n / Tray. flood protection and retry observability as the wedge. Sibling operator furniture: Blacksmith ship gates, Biome, Stripe snake_case webhook casting, Enterprise mailto \`michael@hustlelaunch.com\`.

![Sign-in. Clerk keys required](/blog/coordinatorapp-api-queue-control-plane/screenshots/sign-in.png)

## When

**2026-01-08.** \`ae06d85\` init Next/Convex/Tailwind. Same day OPPORTUNITIES + PLAN. Zapier competitors, flood protection, n8n-powered claim on day one.

**2026-02-06.** \`2b54644\` ship landing page: Next 16, dark theme, queue visualization.

**2026-02-13–22.** Stub pages, Clerk middleware + env validation, strip unverified SOC 2 claim, Navbar/Footer, Sentry, PostHog, site config, error/loading/not-found.

**2026-03-17–18.** www / Clerk middleware 500 debug cascade (aliases, middleware off, vercel.json thrash). robots, sitemap, GA, next-themes. Waitlist + Convex backend.

**2026-03-20–22.** Event signup form + attendee management (#31). Stripe standardization + webhook type casting.

**2026-05-13–15.** shipprep + Blacksmith CI / deploy verification burst.

**2026-05-22, 06:09 ET.** \`3eec7ae\` **redesign**, the live zinc control-plane lander.

**2026-08-08, 06:54 ET.** \`b7e9b3b\` set X-Robots-Tag to index, follow. HEAD. Fifty-two commits.

**Pack day 2026-09-08.** Live Chromium shots. www 200. Sign-in: **Clerk keys required**. \`sitrep.md\` still says prototype / no auth / Feb 6. treat as drift.

![SDK teaser on the lander](/blog/coordinatorapp-api-queue-control-plane/screenshots/sdk-snippet.png)

## Why

I did not want another automation brochure with a fake connector grid and no backoff story.

I wanted a control plane face. queued requests, 429s prevented, retry delay. before the worker existed. I wanted Stripe subscription sync and Convex waitlist/events on disk even while docs say Coming soon and the homepage SDK call is a \`<pre>\`.

So January named the category. February shipped the face. March fought www 500s, captured waitlist emails, bolted on event RSVP, and hardened Stripe. May redesign locked the zinc hero. August flipped robots on a live site that still needs Clerk env vars.

Would you fix the pricing page to match \`billing.ts\`, or ship Clerk keys to www before anyone can Start with GitHub?
`;

const HURLEYMC_COVER =
  "/blog/hurley-mission-control-human-agent-comms/cover.png";

const HURLEYMC_CONTENT = `## Who

I run agents and humans on the same company. Slack does not know what an agent is. A terminal log does not know what a delivery receipt is. The Go repo named mission-control is a p10k-inspired TUI for deploys and git status. Hustle Launch mission-control-os is a different product. This room is the HurleyUS comms plane.

This piece is for operators who need a human and an agent in the same membership list. For people who want queued/delivered/failed rows next to a message instead of hoping a webhook fired. For anyone who has already confused the three Mission Control names in this portfolio and needs the cut named out loud.

## What

I shipped Hurley Mission Control — a public HurleyUS repo whose README says the quiet part: unified comms plane for agents and humans.

Stack facts: Next.js 16.2.1 App Router, React 19.2, Clerk, Convex, TypeScript, cmdk and framer-motion in the lockfile, package name flattened to \`web\` after the monorepo fight, packageManager bun@latest, local port 3410.

![Dashboard — threads with dm group project ops kinds](/blog/hurley-mission-control-human-agent-comms/screenshots/dashboard-threads.png)

The Convex schema is the product. users.kind is human or agent. Agents can carry agentId and machineId. Threads are dm, group, project, or ops. Messages support replyTo and optional type text|event|system. sendMessage checks clientMessageId before insert so retries do not double-post. Deliveries fan out to other members as queued rows with attempts and lastError. Presence tracks online and lastSeenAt.

The web path is a thread grid with kind icons, a detail route for the feed, optimistic yellow sending states in the sprint writeup, and a quick-stats strip that literally advertises 2s message refresh. getThreads still collects all threads and filters membership in the handler — honest, not cute.

Auth is hybrid. Clerk packages are real. useUser also reads localStorage userId and testUserId and can POST /api/sync-user to mint a Convex user for sprint testing without the full Clerk dance. The live root paints Redirecting... and aims at sign-in when that key is missing. Title in the document: HurleyUS Mission Control.

![Daemon stub and OpenClaw plugin WIP](/blog/hurley-mission-control-human-agent-comms/screenshots/daemon-plugin-wip.png)

Honesty on the edges: apps/daemon/src/index.ts is two console.log lines and a TODO to subscribe to assigned threads and relay into a local OpenClaw session. packages/channel-plugin is a README promising send, reply, and receive mapping — not an implemented adapter. PLAN.md checkboxes still look more empty than the sprint summary claims. That gap is the story, not a cover-up.

![Vercel monorepo thrash](/blog/hurley-mission-control-human-agent-comms/screenshots/vercel-thrash.png)

The secondary plot is deploy theater.

Forty-nine commits on master.
Most of those commits are deploy config thrash.
Roughly forty-one are Vercel root/bun/npm config flip-flops.

The fight ends by moving the web app to the repo root.

Also: Next 16.2.1 bump, npmrc legacy-peer-deps, HEAD b3d11ec env cleanup.

## Where

Live: https://hurley-mission-control.vercel.app (HTTP 200, title HurleyUS Mission Control).
Code: https://github.com/HurleyUS/hurley-mission-control master. HEAD b3d11ec. 49 commits. Public.
Contrast: michaelmonetized/mission-control is a Go TUI. mission-control-os is a different product. Do not merge the three names.
Dev port 3410. No fresh coding clone for this pack.

## When

2026-03-19 ET evening: 05f475c Phase 1 complete. Deploy docs same hour.
2026-03-20: Vercel monorepo storm; 8d9708e getThreads filter fix.
2026-03-21: sprint status; flatten monorepo; Next 16.2.1; HEAD b3d11ec ~10:52 PM ET.
2026-08-08: pushed_at bump, no new commit after HEAD.
2026-09-08: pack drafted; slug hurley-mission-control-human-agent-comms unused.

## Why

Agent work without a shared thread is gossip, not ops. Humans and agents as first-class users. clientMessageId so retries do not double-post. Delivery rows beat hope. Name the thrash. Cut three Mission Control names apart.

Engagement: if your agents and your humans do not share a thread id, what exactly are you operating?
`;

const CITATION_MANAGER_COVER =
  "/blog/citation-manager-uberall-competitor-958-directories/cover.png";

const CITATION_MANAGER_CONTENT = `![Citation Manager dashboard mock. locations, submit, directories, submissions](/blog/citation-manager-uberall-competitor-958-directories/screenshots/dashboard.png)

## Who

I build operator tools for people who get paid when the NAP is right: agencies, multi-location owners, anyone tired of logging into Google, Yelp, and a dozen legacy directories by hand.

Citation Manager is that lane. Business listings out. Tracking what stuck. Skip the academic bibliography frame and the WNC city-guide frame.

If you care about local SEO plumbing, directory registries, or how a two-week SaaS sprint accumulates three auth stacks and a 500 on the homepage URL, these are the field notes.

## What

I shipped \`HurleyUS/citation-manager\`. Public TypeScript repo, package **0.0.1**, **83** commits, HEAD \`78e9fb1\`.

GitHub description is blunt: manage business listings across 1000+ directories. **Uberall competitor.** The README narrows it to **958+** directories and names Uberall, BrightLocal, and Yext as the alternatives it wants to undercut on price ($99 vs $500–2000/mo copy in the roadmap).

Stack on the box: **Next.js 16.2**, React 19, **Convex**, Tailwind v4, Bun, Lucide, Puppeteer, Argon2. Clerk and \`@convex-dev/auth\` sit in \`package.json\`; Fallow marks both unused while the UI talks to \`/api/auth\` and \`localStorage\` tokens.

![Directory registry mock. rank, method, API flags from directories.json](/blog/citation-manager-uberall-competitor-958-directories/screenshots/directories.png)

The real artifact is \`data/directories.json\`: **958** rows. Rank 1 is Google Business Profile. Methods break down api 88 / form 773 / manual 70 / email 27. \`apiAvailable\` is true on 219. Convex schema mirrors that world: \`locations\`, \`directories\`, \`submissions\` with pending to submitted to verified to failed, plus \`verifications\`.

Surfaces that exist: auth, dashboard, locations CRUD, directories browser with "View All 958", bulk submit with search/filter, submissions tracker, seed-directories API, google/yelp/facebook API routes.

What is also true:

- \`bulkSubmit\` inserts \`pending\` rows. The schedule helpers flip to \`submitted\` only if env keys exist. They do **not** call the fetch helpers in that path.
- \`generateGoogleJWT\` is a documented **placeholder**.
- Login hashes the password with Argon2 again and string-compares to the stored hash. New salt means verify cannot work as written.
- Dashboard copy still says "100+ directories" while the registry is 958.

![Bulk submit mock. location + directory multi-select](/blog/citation-manager-uberall-competitor-958-directories/screenshots/submit.png)

## Where

It is supposed to run on Vercel against Convex. Dev uses Caddy \`cm.localhost:8080\` to Next on 3000.

Probed 2026-09-08:

- **https://citation-manager-pi.vercel.app** (GitHub homepageUrl) returns **500** \`MIDDLEWARE_INVOCATION_FAILED\`
- **https://citation-manager.vercel.app** returns **200**, but it is a different "research workflow" citation app with Admin/User portals. **Name collision, not this product.**

Audience: local-SEO operators, agencies replacing BrightLocal/Yext spend, builders watching auth and integration honesty in a Convex/Next SaaS.

![Deploy reality mock. 500 homepage vs name-collision 200](/blog/citation-manager-uberall-competitor-958-directories/screenshots/deploy-reality.png)

## When

Created **2026-03-22**. Same day: scaffold, directory research, API skeletons, Clerk blank-page fix, Convex Auth swap, "FULL PHASE 2 READY FOR 6PM SHIP," Google Maps submission claim, locations wired to Convex.

Late March: Argon2, push-to-directories UI, View All 958, submissions dashboard.

**2026-04-01–02.** Registry expanded 100 to 958, Issue #12 Google/Yelp/Facebook modules, Clerk middleware returns, Phase 2B bypass + test infra, form validation, GBP PR.

**2026-05-14–15.** Seven "Standardize Blacksmith CI gates" commits (same batch pattern as sibling repos) plus deploy verification fixes.

**2026-08-08.** HEAD sets \`X-Robots-Tag: index, follow\`. Same day pattern as other HurleyUS pushes.

README still says Phase 2A 100% complete and Phase 2B "current" as of early April. Stripe is still Phase 4 fiction.

![Auth whiplash timeline. Clerk to Convex Auth to Argon2 to Clerk middleware to bypass](/blog/citation-manager-uberall-competitor-958-directories/screenshots/auth-whiplash.png)

## Why

Local citations are still a grind. The expensive tools win on coverage and integrations, not on elegance. I wanted an API-first Convex backend, a ranked directory registry I own as JSON, and a submit queue I can reason about in one schema.

I also wanted to ship before the story was clean. That is why the homepage 500s, why login verify is wrong, why Clerk middleware and a bypass flag coexist, and why the integration modules look finished while bulkSubmit mostly writes \`pending\`.

The registry is real. The competitor framing is real. The production URL on the GitHub homepage is not a product yet. It is an error page.

If you run citations for clients: would you trust a 958-row registry with honest \`pending\` states more than a vendor dashboard that always says "submitted"? What is the minimum live integration (Google only) before this is worth putting a real domain on?
`;

const BARBQUEWAGON_COVER =
  "/blog/barbquewagon-bryson-city-hickory-smokehouse-site/cover.png";

const BARBQUEWAGON_CONTENT = `![Bar-B-Que Wagon homepage. Slow Smoked / Hand Pulled / Soul Fed over the Main Street sign](/blog/barbquewagon-bryson-city-hickory-smokehouse-site/screenshots/home.png)

## Who

I build for operators. Sometimes that operator is me. Sometimes it is a pitmaster on Main Street in Bryson City, North Carolina.

Bar-B-Que Wagon needed a site that smelled like hickory, not a beige restaurant theme with a stock smoke PNG, and a catering path that did not die in a "we will call you back" void. Guests needed hours, address, phone, and a board that matched what Pat Monteith actually smokes. Planners needed guest count and event type without playing phone tag first.

I am the builder. The food is theirs. The repo is public under HurleyUS. The stack is mine to keep honest.

## What

I shipped a Next.js 16 App Router site. React 19. Bun. Tailwind 4. Biome and oxlint. Phosphor icons. Playfair Display for the smokehouse voice. DM Sans for the rest. Dark tokens: deep-smoke background, amber accents, cream type.

The homepage hero stacks three lines. Slow Smoked. Hand Pulled. Soul Fed. Over the exterior sign photo with a charcoal gradient. Nav is sticky and blurred. Logo mark on warm-white tile. Tagline Smoke · Soul · Flavor. Amber Order Now button that routes to \`/contact\` because there is no DoorDash integration pretending to be hospitality.

![Brisket plate. Yelp-sourced food photography in the repo](/blog/barbquewagon-bryson-city-hickory-smokehouse-site/screenshots/brisket-plate.jpg)

The menu is a real board in the page: smoked meat plates with two sides and cornbread, sandwiches including The Wagon Burger, sides made from scratch. Featured cards and a gallery pull Yelp food and exterior shots that landed in the repo on February 15. About is Pat's story: twenty-plus years, 610 Main Street, no franchise fiction.

Catering is a real form: name, email, phone, event date, guest-count select, event-type select, optional message. The API validates with Zod, writes a Convex \`leads\` row when Convex is configured, and fires Resend to the owner inbox. Contact does the same twin path. Sentry on the edges. PostHog on the pageviews. Restaurant, Menu, and FoodService JSON-LD from one business-info object.

![Pork ribs plate asset](/blog/barbquewagon-bryson-city-hickory-smokehouse-site/screenshots/pork-ribs.jpg)

## Where

610 Main St. Bryson City, NC 28713. Phone 828-488-9521. Hours Tue–Sat 11–8, Sunday 11–6, closed Monday.

The URL that answers today is [barbquewagoncom.vercel.app](https://barbquewagoncom.vercel.app). That is what GitHub lists as the homepage. Schema and copy still say \`barbquewagon.com\`. At pack time that apex has no DNS. Facebook is wired in the footer. Instagram is still a dead pound-sign href. Repo is public: [HurleyUS/barbquewagon.com](https://github.com/HurleyUS/barbquewagon.com).

The audience for *this* write-up is builders who care how a local BBQ site actually captures a wedding headcount, and anyone in the Smokies who already knows the wagon on Main.

![Exterior. Building hero source](/blog/barbquewagon-bryson-city-hickory-smokehouse-site/screenshots/building-1.jpg)

## When

**2026-02-13.** Create Next App. Same night: full restaurant website. Same night again: throw out the placeholder details for real Bar-B-Que Wagon facts.

**2026-02-15.** Zod on the contact form. Yelp photos across the homepage: food gallery, menu cards, exterior. Hero background with gradient overlay.

**2026-02-21.** Lexington was wrong. Bryson City is right. That correction shipped across metadata and catering copy. Then full try/catch and Zod on both forms.

**2026-02-22.** next.config. Drop unused ThemeProvider. PLAN and CHANGELOG. Wire contact and catering to Resend. JSON-LD for Google rich results.

**2026-03-01.** TODO.md. It still lists "wire Convex/Resend" as unchecked. The commits disagree.

**2026-05-13 through 15.** Shipprep. Logo assets. Bun on Vercel. Form refactor and Fallow cleanup. Roadmap. A string of Blacksmith CI gate commits. Observability scaffolding. Deploy URL verification until Blacksmith stopped lying.

**2026-08-08.** \`X-Robots-Tag: index, follow\` in Vercel headers. HEAD settled. Thirty-eight commits from init. That is the clock.

![Pulled pork platter](/blog/barbquewagon-bryson-city-hickory-smokehouse-site/screenshots/pulled-pork-platter.jpg)

## Why

A Main Street BBQ needs the board, the hours, the phone, and a catering form that still works when the dining room is loud.

I wanted the hero to feel like the sign on Main, not a stock smoke photo. I wanted leads in Convex and in the inbox, from Zod-validated routes, not a mailto cosplay. I wanted Schema.org to carry the same brisket and pulled pork the menu page shows. I wanted the city name to be Bryson City everywhere a crawler looks.

Yelp plates went into \`public/\`. Resend and JSON-LD shipped. Geography got fixed. May ops gauntlet ran. Robots header locked in August. Operator stack. Local business. Public repo.

The custom domain is still dark. The Vercel alias is live. The Instagram link is still a pound sign. PLAN.md still thinks the forms are unwired.

If you were standing at 610 Main tonight, which plate would you order before the kitchen sells out?
`;

const SANTABOX_COVER =
  "/blog/santabox-charity-lootbox-rebuild/cover.png";

const SANTABOX_CONTENT = `![SantaBox home. Christmas 2026 campaign](/blog/santabox-charity-lootbox-rebuild/screenshots/home.png)

## Who

I got tired of charity landers that look like Christmas and behave like a brochure.

Toy drives need funding progress. Parents need a tax receipt path. Partners need an inquiry form that emails a human. Operators who inherit a wrong-vertical Next scaffold need an autopsy that says the quiet part: this README used to be BestWNC.

SantaBox is for people funding age-tagged gift boxes before December 15 delivery cutoffs, and for builders who will delete fake partner names when legal risk shows up in a commit message.

## What

I built **SantaBox.org**. Package \`santabox.org\`, version **0.1.0**, private under **HurleyUS/santabox.org**. Metadata line: *Christmas Gift Boxes for Children in Need.* Campaign badge on the live hero: **Christmas 2026 Campaign Now Open.**

Stack facts from the lockfile and tree: **Next.js 16.1.6**, **React 19.2.4**, **Tailwind 4.1**, Bun, **Convex** schema for gift boxes / donations / donors / subscribers / nonprofits / partner inquiries / impact stories, **Clerk** (optional when keys missing), **Stripe** checkout + subscribe APIs, Resend, Sentry, PostHog. Forty-two commits. HEAD \`67712cb\`.

Donate presets: $25 stocking · $50 half box · $75 small · $100 full (default) · $150 premium · $250 two boxes. Cover processing fees (\`2.9% + $0.30\`) so the gift side can stay whole. Subscribe UI/schema: **$10/mo** or **$100/yr**.

![Donate presets](/blog/santabox-charity-lootbox-rebuild/screenshots/donate.png)

## Where

Code stays private on GitHub. Product answers at **https://www.santabox.org** (apex 307 to www) and the GitHub homepage URL **https://web-iota-topaz-45.vercel.app**. Both returned marketing **HTTP 200** with \`X-Robots-Tag: index, follow\` on pack day.

Routes that still 500 without service env: \`/impact\`, \`/subscribe\`, \`/create-wishlist\`. May 20 commits explicitly keep the public site up when service env is missing. The 500s are the other side of that bargain.

No \`public/\` directory in the tree. Layout still points at \`/og-image.png\` and favicons that are not on disk. Partners page now sells “Team Up with SantaBox” plus a grid of real team projects instead of invented orgs.

![Partners. inquiry + project grid](/blog/santabox-charity-lootbox-rebuild/screenshots/partners.png)

## When

**January 8, 2026:** \`eebf7a1\`. Next.js, Convex, Tailwind scaffold. GitHub \`created_at\` is later (Feb 6). The clock and the hosting console do not owe each other an apology; the commit log does.

**February 6:** Next 16 / React 19 / Tailwind v4 import fix.

**February 9:** Docs stop lying about BestWNC. Major rebuild commit lands the charity storytelling surface. Clerk becomes optional so builds survive missing keys. AUTOPSY.md records the crime scene: wrong layout title, empty Convex, dead buttons, wrong year, subscription-box confusion vs donation README.

**February 13:** \`10377d8\`. remove fabricated nonprofit/sponsor data. Commit body names the liability. Replacement: partner inquiry form + Resend \`/api/partner-inquiry\` + project grid of confirmed live sites.

**February 15:** Stripe webhook + signature verification + donate button actually calls checkout.

**Late February:** force-dynamic for Clerk/Convex pages, \`proxy.ts\` protection, error boundaries, sitemap/robots, security headers, auth on user mutations, \`.take(100)\` on collects.

**March:** Sentry instead of console.error spam; Vitest; then drop GitHub Actions because Vercel is CI.

**May:** Blacksmith ship gates, Santabox typecheck fixes, deploy URL verification, public-site-without-service-env.

**August 8, 2026 6:50 AM ET:** \`67712cb\`. X-Robots-Tag index, follow. HEAD. Forty-two commits.

![Boxes browse](/blog/santabox-charity-lootbox-rebuild/screenshots/boxes.png)

## Why

A Christmas charity site that still wears another product's metadata is worse than an unfinished one.

Fabricated partner logos are not placeholder content. They are a lawsuit with good lighting.

Dual honesty shows up here too: PLAN.md still lists Convex schema and Stripe as not started while \`convex/schema.ts\` and \`/api/checkout\` exist; AUTOPSY celebrates “production ready” with unchecked env boxes; homepage hardcodes \`statesReached: 42\` even on the live Convex path; marketing claims 501(c)(3) without an EIN file in-repo. Say the drift out loud.

The money path is real enough to document: fee cover math, taxReceiptSent boolean, subscriber Stripe IDs, wishlist create client, box status enum \`pending\` to \`open\` to \`funded\` to \`shipped\` to \`delivered\`.

![Stories. Maya narrative](/blog/santabox-charity-lootbox-rebuild/screenshots/stories.png)

![About](/blog/santabox-charity-lootbox-rebuild/screenshots/about.png)

What would you delete first if you found another vertical's partner logos still living in your charity repo: the logos, or the launch date?
`;

const SHIPTHING_COVER =
  "/blog/shipthing-contacts-spine-not-carrier-rates/cover.png";

const SHIPTHING_CONTENT = `![ShipThing home. lead form + signed-in contacts table](/blog/shipthing-contacts-spine-not-carrier-rates/screenshots/home-contacts.png)

## Who

I wanted a shipping-rate desk for e-commerce sellers: compare USPS, UPS, FedEx, print labels, stop guessing retail rates.

What I built instead is an honest stack spine: Clerk auth, Convex contacts, Resend lead email, Sentry, PostHog, and a Next 16 \`proxy.ts\` filename law. People who read PLAN.md, then open the tree, and do not pretend the carrier boxes are checked.

If you have ever named a repo after the product you meant to ship and then shipped the scaffolding that every later app copies, this is that receipt.

## What

I built **ShipThing**. Package \`shipthing\` **0.1.0**, public under **michaelmonetized/shipthing**. Layout metadata title: **Shipthing**. Description: **Combining convex, posthog, clerk and sentry**. That description is more accurate than the repo name.

Stack from the lockfile: **Next.js 16.1.1**, **React 19.2.3**, Tailwind **4**, Bun, **Clerk**, **Convex**, **Resend** + React Email, **Sentry** (org \`hustle-launch\`, project \`shipthing\`), PostHog, zod 4, react-hook-form, Radix/shadcn UI. \`stripe\` sits in dependencies with a long \`.cursor/rules/STRIPE.md\`. **Zero app imports.** Thirty-nine commits. HEAD \`9f91d97\`.

![PLAN.md Not Started vs what the tree actually contains](/blog/shipthing-contacts-spine-not-carrier-rates/screenshots/plan-vs-shipped.png)

Surfaces that exist: \`/\` lead form ("Be the first to contact us!" / Send Message with name, 10-digit phone, email, message) plus signed-in **Contacts** table with delete; \`/login\`; \`/sentry-example-page\`; API routes \`/api/send/notification\` and \`/api/send/confirmation\`; \`proxy.ts\` Clerk middleware file; \`sitemap.ts\` / \`robots.ts\`.

Convex schema is a single \`contacts\` table. Search index on name, indexes by name/phone/email/page. Notification mail sends from \`Notifications <notify@uncap.us>\` to \`michaelmonetized@gmail.com\` and \`8285931935@vtext.com\`. Confirmation is a short "Hey {name}, we received your message" React Email.

Navbar lists Security, Auth, Layout, Typography, Forms, Analytics, Error Tracking, Email, Realtime Data Sync, APIs, More. **No \`/features/*\` pages** in the tree. Footer still links Learn / Examples / nextjs.org from create-next-app.

\`PLAN.md\` still sells the other product: carrier APIs, rate comparison, ZPL/PDF labels, address validation, Shopify import, batch labels, tracking, cost analytics. Success metrics: active users > 500, monthly labels > 10,000, savings > 30%. Every checkbox is empty.

## Where

Code: [github.com/michaelmonetized/shipthing](https://github.com/michaelmonetized/shipthing). **Public.** Live: [shipthing.vercel.app](https://shipthing.vercel.app) (**HTTP 200**, Clerk signed-out chrome, \`X-Robots-Tag: index, follow\`).

![proxy.ts + check:proxy Next 16 guardrail](/blog/shipthing-contacts-spine-not-carrier-rates/screenshots/proxy-guardrail.png)

Audience sits next to every "I'll bolt carriers on next sprint" SaaS skeleton. Sibling operator furniture: Fallow gate notes in \`AGENTS.md\`, Bun-only local law, Blacksmith/Vercel prebuilt rules, env.template for Clerk + Resend + Convex.

![Resend notification + confirmation lead path](/blog/shipthing-contacts-spine-not-carrier-rates/screenshots/resend-lead-path.png)

## When

**2025-03-22.** Create Next App. Same day: Convex + PostHog + Sentry, not-found + shadcn button, middleware build thrash, Clerk, forms.

**2025-03-26–27.** Convex contacts land. Resend starts. Real bugs: could not access \`name\` in notification email, copy-pasta, split emails so sending stops after the first try/catch, more Resend fixes, light-mode toggle attempt.

**2025-03-28–29.** Navbar, error boundary, login. Then: \`convex dev, i finally recovered my github login 🎉\`.

**2025-04.** Layout components; **box, stack, deck** + Next update.

**2025-12-29.** React Server Components CVE pass.

**2026-01-08.** \`PLAN.md\` with shipping-rate "improvement opportunities." Jan 31 chore sync.

**2026-02.** CVE PR #1; rename \`middleware.ts\` to \`proxy.ts\` (#7); env.template (#8); proxy filename guardrail (#10); security headers (#11); sitemap + robots (#12).

**2026-06-22.** Nightly ×2.

**2026-08-08.** HEAD \`9f91d97\`: set \`X-Robots-Tag\` to \`index, follow\` on Vercel.

![Commit arc Mar 2025 to Aug 2026](/blog/shipthing-contacts-spine-not-carrier-rates/screenshots/commit-arc.png)

## Why

The shipping product needed a spine before it needed a carrier SDK, and the spine is what survived.

Next 16 renamed the middleware file. I wanted a script that fails if \`middleware.ts\` comes back (\`bun run check:proxy\`).

A lead form that emails me and texts \`8285931935@vtext.com\` is a product loop I can prove. A FedEx rate matrix I never integrated is not.

Naming the repo ShipThing and leaving PLAN.md full of unchecked USPS boxes is more useful as an operator story than as a fake launch post.

When your PLAN.md still lists the vertical and your \`layout.tsx\` description lists the stack, which one should the blog title obey?
`;

const CONVEX_NEXTFASTER_COVER =
  "/blog/convex-nextfaster-perf-meets-convex-ecommerce-scaffold/cover.png";

const CONVEX_NEXTFASTER_CONTENT = `![Convex NextFaster home mock](/blog/convex-nextfaster-perf-meets-convex-ecommerce-scaffold/screenshots/home.png)

## Who

I got tired of cloning e-commerce starters that worship Postgres or pretend performance is a CSS animation.

NextFaster proved PPR, prefetch, mouseDown nav, React Compiler, inline CSS. I wanted that DNA on Convex with Clerk, Stripe, Resend, Sentry, PostHog.

For operators who ship schema before fake catalog. If you clicked Shop Now on your own template and hit a 404, you are in the room.

## What

I built Convex NextFaster — package convex-nextfaster v1.0.0, public HurleyUS/convex-nextfaster. fork=false; 355 upstream + 5 mine.

Stack: Next.js 15.3.0, React 19, PPR + inlineCss + reactCompiler, Convex (1115 LOC), Clerk, Stripe, Sentry, PostHog, Resend.

## Where

https://github.com/HurleyUS/convex-nextfaster — public. No homepage. No demo.

## When

2026-01-08 a18c09c cutover; c635ab3 drop data.zip; e1164e9 PLAN.
2026-01-31 db28fe7 sync.
2026-08-08 125dd75 X-Robots-Tag. HEAD. 360 commits; 5 mine.

## Why

Perf demos that force SQL as destiny are a tax. A Convex cart with expiry beats Lighthouse of a deleted tree. Shipping 1.0.0 with PLAN Not Started is honesty.

Who else stars templates that document routes they never created?
`;

const MISSION_CONTROL_TUI_COVER =
  "/blog/mission-control-go-tui-p10k-portfolio-ops/cover.png";

const MISSION_CONTROL_TUI_CONTENT = `![p10k-style TUI zones. status, search, project list, chat, totals](/blog/mission-control-go-tui-p10k-portfolio-ops/screenshots/tui-p10k-layout.png)

## Who

I keep too many projects hot at once. Vercel rows. Swift builds. git dirt. GitHub issues and PRs. Browser tabs do not scale.

Hurley Mission Control is a different product: humans and agents on one Convex thread model with deliveries. mission-control-os is another name. This pack is the local operator strip: a p10k-inspired Go TUI named Mission Control under michaelmonetized.

If you want one \`mc\` binary, a Nerd Font, and a scrollable portfolio instead of five CLIs in five tabs, this is for you.

## What

I built **Mission Control**, public **michaelmonetized/mission-control**. README: a p10k-inspired TUI for managing all your projects. Phase 1 complete badge. 18 tests. Go.

Shipped local stack: **Go 1.25.4**, Charm **Bubble Tea** + Lipgloss, \`cmd/mc\` builds to \`mc\`, discovery + \`~/.hustlemc/\` cache, OpenClaw client foundation. Shell suite under \`bin/\`: discover, git/gh/vercel/swift status, stats, cache, dev, caddy, chat, deploy, and more, with \`--json\`.

![Shell suite mc-* with --json](/blog/mission-control-go-tui-p10k-portfolio-ops/screenshots/shell-suite-json.png)

Phase 2 scaffold: \`apps/web\` \`@mission-control/web@2.0.0\`. Next **16.1.0**, React 19, Clerk, Convex on port **3410**. Schema: users (GitHub + BYO Claude key + Stripe customer + free minutes), repos, workspaces (Fly VM lifecycle), usageRecords, threads/messages (**sender user|openclaw**), webhookEvents. \`services/vm-manager\` Go service for Fly Machines, terminal WebSocket relay, $0.02/min, idle kill.

![Phase 2 cloud. repos workspaces usage Fly VMs](/blog/mission-control-go-tui-p10k-portfolio-ops/screenshots/phase2-cloud-vm.png)

Not the HurleyUS human|agent deliveries plane. PLAN.md still mentions Ink/React. the entrypoint is Bubble Tea. March 21 "Phases 3–7 Complete" is mostly docs + scaffold burst. No dedicated public homepage on this repo; \`vercel.json\` only sets robots index,follow. HEAD **fd25166**. **22** commits.

![Three Mission Control names cut apart](/blog/mission-control-go-tui-p10k-portfolio-ops/screenshots/name-cut.png)

## Where

Code: [github.com/michaelmonetized/mission-control](https://github.com/michaelmonetized/mission-control) (**public**, **main**).

Contrast: [hurley-mission-control.vercel.app](https://hurley-mission-control.vercel.app) is the other product.

Install: \`go build -o mc-tui ./cmd/mc\`, then symlink \`~/.local/bin/mc\`. Config: \`~/.hustlemc/\`.

## When

**2026-02-16.** initial TUI, tests, Phase 2 plan, OpenClaw foundation.

**2026-02-21.** TUI redesign matching original spec (#2).

**2026-02-27–28.** CI gate; Vercel-only; drop GH Actions config.

**2026-03-20.** LOCATIONS.md; relay/webhook/daemon/E2E.

**2026-03-21.** Phases 3–7 claim + Phase 2 Convex/docs/go-live stack.

**2026-08-08.** HEAD fd25166 robots tag.

**2026-09-08.** draft pack; slug unused.

## Why

One keyboard surface for deploy + git + issues beats gossip across tabs. \`--json\` scripts keep the TUI accountable. Phase 2's bet is BYO Claude + metered VMs. Say the three Mission Control names so they stay separate.

If deploy state and git dirt only live in browser tabs, what are you actually controlling?
`;

const GLASS_DESIGN_SYSTEM_COVER =
  "/blog/glass-design-system-apple-svg-refraction-showcase/cover.png";

const GLASS_DESIGN_SYSTEM_CONTENT = `![Glass Design System home, video hero and glass contact form](/blog/glass-design-system-apple-svg-refraction-showcase/screenshots/home.png)

## Who

I needed liquid glass on the web that bent the photograph behind it. A CSS blur was not enough. A WebGL sphere from a registry was the wrong shape for this demo.

That operator is me on a March afternoon with a BRIEF.md that names five effects and hard rules: real Catppuccin \`dark:\` classes, no \`filter: invert()\`, Tailwind v4 only, Next 16.

It is also anyone comparing two glass paths in my queue. twelveux ships pen.dev **glass.glsl** as a hosted shadcn item. This repo is the other path: SVG \`feDisplacementMap\`, animated conic borders, jelly nav, Apple-style sidebar. A full demo site over HustleLaunch photo and video plates.

Frontend builders who live in shadcn New York primitives but want the chrome to refract. Catppuccin people who refuse grayscale hacks. MarTech / indie product people who need cards, forms, dialogs, and a contact sidebar that still read when the backdrop is a real campaign still.

## What

I built **glass-design-system**: Next.js 16.2.6, React 19.2.6, Tailwind 4.3, shadcn New York, package \`0.1.0\` private. Bun lockfile. Live title: Glass Design System.

Five effects from the project brief, all in the tree:

1. **Apple Liquid Glass.** \`GlassPanel\` + \`src/lib/displacement.ts\`. SVG displacement map, chromatic aberration, strength/depth/radius props, \`backdropFilter: url(...)\`.
2. **AnimatedBorder.** \`@property --conic-gradient-angle\`, mask compositing, optional glow. Pink to Blue Catppuccin conic.
3. **Glass morphism.** Layered \`color-mix\` gradients + blur. Opacity got walked down hard so the displacement stays visible.
4. **GlassNav.** framer-motion jelly indicator that follows the active route.
5. **Catppuccin Mocha / Latte.** Real tokens in \`globals.css\`. Geist on the page (Max stays on twelveux / uncap / hms).

Glass barrel at \`src/components/glass/\`: panel, border, card, nav, button, dialog, sheet, sidebar (+ provider), form controls, \`use-glass-surface\`.

Routes:

- \`/\`: video hero, YouTube embed, glass contact form in AnimatedBorder, value copy, CTA.
- \`/components\`: ~3,215 lines. Commit message says 80+ example variations across commerce, auth, analytics, productivity, messaging, and states.
- \`/about\`: content page using the system.

Layout shell: sticky GlassNav + non-modal right **GlassSidebar** titled Quick Contact.

Backgrounds under \`public/bg/\`: hero-video.webm, hero-michael.jpg, campaign-monitoring.webp, web-designer.png, and the rest of the HustleLaunch stills. March 21 replaced flat gradient section shells with full-width photographic plates so the glass has something to bend.

Reference originals stay in-tree (\`reference-apple-glass/\`, \`reference-animated-border.css\`). Fallow marks them unused. That is honest: they are the port sources, not runtime.

Fallow REVIEW snapshot: ~10,194 LOC, dead files 11.1%, dead exports 24.9%, one circular dep. GlassSheet / GlassButton / GlassSidebar sit in the high-CRAP table. Live response sends \`X-Robots-Tag: index, follow\`.

![Components showcase, glass cards over photographic backdrop](/blog/glass-design-system-apple-svg-refraction-showcase/screenshots/components-loaded.png)

## Where

Live: https://glass-design-system.vercel.app

Repo: https://github.com/michaelmonetized/glass-design-system

Homepage field on GitHub points at that Vercel app. Adjacent systems in the same operator map: twelveux (WebGL registry Glass), modern-design-playground (WebGL instrument + nine worlds), uncap.us and hms (Max + Catppuccin product surfaces, different jobs).

## When

**2026-03-05, 1:41 PM ET.** Brief + reference files.

**2:12.** Core feat: apple glass refraction, animated borders, jelly nav, Catppuccin.

**2:30–3:14.** Photo/video sections, HustleLaunch assets, local webm instead of a dead WordPress URL, fixed parallax plates.

**3:23–3:53.** Opacity and contrast wars: glass-morphism thin enough for displacement, Tailwind utility backgrounds overridden, nav readable, gradient repeat tuned, button/dialog/sheet contrast fixed.

**4:01–4:31.** Apple-style non-modal glass sidebar, glass form components, hero wireframe iterations until video left + form right matched the layout.

Sixteen commits the same afternoon.

**2026-03-21, 7:25–9:35 AM ET.** Comprehensive showcase (80+), mobile 375px stacking, animated gradients then real \`/public/bg/\` assets, full-width absolute section shells.

**2026-06-22.** Two \`nightly\` commits.

**2026-08-08, 6:49 AM ET.** HEAD \`0814e1f\`, X-Robots-Tag index, follow. Same robots batch as several sibling Vercel repos that morning. **24** commits on main.

## Why

I already had Apple-glass and animated-border references sitting as ports. I wanted them inside Next 16 / Tailwind 4 / shadcn with Catppuccin that does not cheat.

Glass only proves itself against a photograph or a video plate. Gradients flatter. The March 21 backdrop swap is the reason the showcase exists at that density.

twelveux answers a different question: can I \`npx\` Max, theme, and a real WebGL Glass shader. This repo answers: can the whole chrome stack refract with SVG displacement and still ship a contact sidebar and an 80-variation gallery.

## Engagement

If you already run twelveux Glass, what breaks first when you try SVG displacement over a busy campaign still: chromatic fringe, text contrast, or the nav jelly fighting the sidebar?

![About page on Glass Design System](/blog/glass-design-system-apple-svg-refraction-showcase/screenshots/about.png)
`;

const BREAZYAPP_COVER =
  "/blog/breazyapp-pocket-peo-aes-before-stripe/cover.png";

const BREAZYAPP_CONTENT = `# BreazyApp pocket PEO

**Slug:** breazyapp-pocket-peo-aes-before-stripe

**Excerpt:** Next.js 16 + Convex + Clerk pocket PEO for chain restaurants. Four portals. Waitlist live. Billing UI 49/location + 4/employee. No stripe package. HEAD 2402b35.

**Tags:** breazyapp, peo, hr, payroll, restaurants, nextjs, convex, clerk, hurleyus

---

![home](/blog/breazyapp-pocket-peo-aes-before-stripe/screenshots/home.png)

## Who

Multi-unit restaurant and franchise operators who need HR, payroll, accounting, and benefits in one pocket PEO.

## What

breazyapp 0.1.0 private HurleyUS. Live www.breazyapp.com. Portals: employee, manager, HR, admin. Commit 062ade1 at-rest field protection. Feb 6 smoke-shop lander reverted in 15 minutes.

![waitlist](/blog/breazyapp-pocket-peo-aes-before-stripe/screenshots/waitlist.png)

## Where

github.com/HurleyUS/breazyapp.com · www.breazyapp.com (200) · apex 307 · robots index,follow

## When

2026-01-08 init. 2026-02 PEO + Clerk + Catppuccin. 2026-08-08 HEAD robots. Pack 2026-09-08 draft only.

## Why

Portal shells and field protection before pretending checkout shipped.

Which tool would you delete first across five restaurants?
`;

const ITOUR_GOLF_COVER =
  "/blog/itour-golf-tour-lander-ahead-of-deploy/cover.png";

const ITOUR_GOLF_CONTENT = `![iTour.golf HEAD homepage mock. May 12 2027 inaugural, Join iLeague to Qualify](/blog/itour-golf-tour-lander-ahead-of-deploy/screenshots/home.png)

## Who

I build ecosystem products that have to stay distinct under one brand family. Golf creators already get a scorecard-and-tips platform on [iLeague.golf](https://ileague.golf). That pack is a different story. Patreon meets 18Birdies, Stripe tiers, fifteen percent fee.

iTour.golf is for the next layer: creators who need a **season** to aim at, courses that want to **host** a stop, and sponsors who buy **tour inventory** instead of a creator subscription.

If you care about monorepo landers that outrun their Vercel deploy, Convex schemas that model tournaments before any admin UI exists, or how not to collapse three golf domains into one blog post: this is the field notes.

## What

I shipped a national golf **creator tour** under \`HurleyUS/itour.golf\`.

README one-liner: iPro.golf's national influencer golf tour. Brain note (\`iLeague Golf.md\`): **36-week** tour; **top 54** qualify for iConference. HEAD lander badge: **The National Golf Influencer Tour**. H1: **iTour.golf**. Line: **Where Golf Creators Become Champions**.

Stack on the box: **Next.js 15.5.6**, **React 19**, Convex, Clerk (optional when the publishable key is missing), PostHog, Sentry, Resend, Tailwind v4, Bun workspaces (\`web\` + \`mobile\`), Inter + Oswald, Vercel. Package **itour-monorepo** **1.0.0**. Repo private. Site public at [www.itour.golf](https://www.itour.golf) (apex 307s to www).

![Championship path mock. iLeague to iTour to iConference](/blog/itour-golf-tour-lander-ahead-of-deploy/screenshots/championship-path.png)

This is separate from the creator billing product. There is **no Stripe dependency** in \`web/package.json\`. README monetization is blunt:

1. Sponsors, ads, vendors, partners, investors  
2. Courses bid to host stops on the iTour  

HEAD page CTAs: **Join iLeague to Qualify** (outbound to ileague.golf) and **Become a Sponsor** / **Host a Tour Stop** (on-page sections with buttons, not checkout).

Convex \`web/convex/schema.ts\` is tour-shaped: \`users\` (creator|fan|admin), \`courses\` (optional week), \`tournaments\` (weeks 1–36), \`entries\` (score + videoUrl), \`standings\`. No \`subscriptionTiers\`. No \`tips\`. No content feed. Those tables live on the iLeague sibling.

What is also true on pack day:

- **Live www** still markets **"2026 Season Now Open"**, **18 Stops / 18 Courses / 1 Champion**, a fake **Desert Classic** at Pebble Beach, a fake leaderboard, and a **$3.5M+** prize-pool story aimed at a Sept 9 **2026** Augusta finale.  
- **Repo HEAD** \`page.tsx\` is the amber rewrite: **36-week** season, **May 12, 2027** inaugural, **Top 54 to iConference**, qualify-via-iLeague funnel.  
- \`layout.tsx\` SEO says **36 weeks, 36 courses**; the hero says **18 courses of their choice**. PLAN/OPPORTUNITIES still say top **18**. Brain + footer say top **54**.  
- CHANGELOG 1.0.0 still claims "golf course discovery and booking." sitrep.md still says **PROTOTYPE** with last commit stamped **2026-01-31**.  
- Mobile is an Expo stub that renders the words **Mobile App**.  

That gap is the product story.

![Live vs HEAD deploy drift mock](/blog/itour-golf-tour-lander-ahead-of-deploy/screenshots/live-vs-head.png)

## Where

It is supposed to run on Vercel against Convex with Clerk when keys exist. Providers deliberately render without Clerk if \`NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY\` is unset (May 14 fix). Convex client only instantiates when \`NEXT_PUBLIC_CONVEX_URL\` is set.

Surfaces that matter on HEAD:

- Public amber lander. hero, how-to-qualify (4 steps), championship path, 2027 coming-soon chips, host-a-stop, sponsors, ecosystem footer  
- \`robots.ts\` / \`sitemap.ts\` / JSON-LD SportsOrganization + SportsEvent (2027-05-12 to 2027-09-09)  
- Middleware protect list for dashboard/account/settings/api. public marketing routes stay public  
- Mobile folder. scaffold only  

Live HTML on 2026-09-08 did **not** show Clerk \`pk_test\` / \`pk_live\` strings. The stale marketing shell is prerendered on Vercel (\`x-nextjs-prerender: 1\`).

![Sponsors + course hosting mock](/blog/itour-golf-tour-lander-ahead-of-deploy/screenshots/sponsors-hosting.png)

Related domains in the footer/copy: **iLeague.golf** (emerald. creator platform), **iTour.golf** (amber. this pack), **iConference.golf** (purple. championship). Do not collapse this post into the iLeague creator-economy pack.

## When

**January 8, 2026.** Initial Next.js + Convex + Tailwind setup. OPPORTUNITIES and homepage docs the same day. This tree starts as a tour concept, not a WNC directory.

**January 31.** Chore sync. sitrep still thinks this is the last meaningful stamp. it is wrong.

**February 11.** GitHub \`HurleyUS/itour.golf\` exists. Homepage gets ecosystem context. iTour/iCon details corrected from the OG vision. Placeholder season data removed. **TBD until May 12, 2027**.

**February 15.** Explicit commit: **replace bestwnc.com boilerplate with iTour content**. Lineage matters so this pack does not retell BestWNC.

**February 21.** Fonts, favicon, Tailwind v4 CSS-first, React 19 types, providers/middleware/schema/layout batch, CHANGELOG labeled 1.0.0.

**Late February.** CI build gate, security headers + regression script, SEO/analytics baseline, then GitHub Actions removed because Vercel is CI.

**March 28.** Workspace scripts stop using bun filters. \`cd web && bun run …\`. A Gumroad \`/pricing\` page also appears in history (Golfer Basic/Pro pre-order links), not the live shell's center of gravity.

**May 14–15.** Blacksmith CI standardize noise, then delete it. **Skip Clerk provider when key is unavailable**. lander must not hard-crash without auth config.

**June 22.** Two \`nightly\` commits. HEAD **\`d2a49ef\`**. Last push on the repo.

**September 8, 2026 (pack day).** www returns 200. Content is still the old 18-Stops / fake-season shell. Draft pack only. no publish, no push.

![Convex tour schema mock. users courses tournaments entries standings](/blog/itour-golf-tour-lander-ahead-of-deploy/screenshots/tour-schema.png)

## Why

Because the HurleyUS golf stack needs **three honest products**, not one blog post with three domains.

iLeague is where creators publish, subscribe, and tip. iTour is where a **season** and **sponsor/host** economy are supposed to live. iConference is the September championship punchline. If you describe iTour as "another creator SaaS," you erase the only reason the domain exists.

Because **schema-before-UI** is an operator move: tournaments 1–36, entries with video URLs, season standings. committed while the live site still invents Jake Matthews and a Desert Classic.

Because **deploy drift** is a better lesson than a launch party. Rewriting \`page.tsx\` for May 2027 does nothing for golf fans if Vercel keeps serving the 2026 placeholder season. Same pattern as shipping robots \`index,follow\` while leaving test keys on a sibling domain. different failure mode, same honesty requirement.

Because the money model is different on purpose. No platform fee constant. No tip presets. Sponsor tiers and course hosting bids are the README, even if the buttons still go nowhere.

## Engagement

If you run a marketing lander in a monorepo: what do you trust on pack day: \`git show HEAD:app/page.tsx\`, or \`curl\` the production HTML, and which one did you ship last?
`;

const ASCII_COMMIT_GRAPH_COVER =
  "/blog/ascii-commit-graph-terminal-heatmap-cd-hook-fastpath/cover.png";

const ASCII_COMMIT_GRAPH_CONTENT = `![Terminal heatmap](/blog/ascii-commit-graph-terminal-heatmap-cd-hook-fastpath/screenshots/terminal-heatmap.png)

## Who

I wanted GitHub's contribution calendar without leaving the shell, and on every \`cd\` via zoxide, not only when I opened a browser tab.

For operators who hang visual git context off directory changes, and who will delete an alias the moment it gets slow.

## What

I built **ascii-commit-graph**, public \`https://github.com/michaelmonetized/ascii-commit-graph\`. README **V1.0.4**. Script \`ascii-commit-graph.sh\`, 209 lines. HEAD \`9221b76\`. 13 commits. 1 star. CLI only.

Paints a GitHub-style week grid (Nerd Font glyph, ANSI greens). \`GRID_ROWS=6\`, \`GRID_COLS=51\` sliding weeks. Buckets 0/1/2/3+.

Flags: \`--this-year\`, \`--full-width\`, \`--author\`, \`--show-issues\`, \`--show-todos\`.

![Flags](/blog/ascii-commit-graph-terminal-heatmap-cd-hook-fastpath/screenshots/flags-panel.png)

v1.0.4 local path: one \`git log\` pass, O(1) bumps, GNU+BSD dates. \`--author\`: one \`gh\` GraphQL contributionCalendar call. Extras opt-in so default/cd path stays lean.

![Fast path](/blog/ascii-commit-graph-terminal-heatmap-cd-hook-fastpath/screenshots/fastpath-rewrite.png)

README zoxide \`zcd\` runs \`--full-width --show-issues --show-todos\` on every cd. That habit forced the Jul 2026 rewrite. ROADMAP still unchecked: Create a release for 1.0.4. Install snippet still references \`michael-k/\`.

## Where

Code: [github.com/michaelmonetized/ascii-commit-graph](https://github.com/michaelmonetized/ascii-commit-graph), public. No live web app. Clone + chmod + symlink.

![zoxide hook](/blog/ascii-commit-graph-terminal-heatmap-cd-hook-fastpath/screenshots/zoxide-cd-hook.png)

## When

**2024-06-06.** rc + docs + PNGs + PR #1.

**2024-06-08.** customization; v1.0.3-rc prep.

**2026-06-03.** compatibility.

**2026-07-31.** HEAD \`9221b76\`: Speed up heatmap: single git pass and one GraphQL author fetch.

![Commit arc](/blog/ascii-commit-graph-terminal-heatmap-cd-hook-fastpath/screenshots/commit-arc.png)

## Why

Browser greens are a context switch. A cd-hook heatmap makes latency a product bug. One git pass plus one GraphQL call is the honest fix, and an unchecked release checkbox beats a fake tag.

**Engagement Q:** If your cd alias paints a heatmap, what latency makes you delete the alias?
`;

const NIRI_MACOS_COVER =
  "/blog/niri-macos-scrollable-tiling-swift-ax-port/cover.png";

const NIRI_MACOS_CONTENT = `![niri-macos scrollable column strip concept](/blog/niri-macos-scrollable-tiling-swift-ax-port/screenshots/scroll-strip-concept.png)

## Who

I wanted niri's scrollable tiling on the Mac without living inside Hammerspoon.

YaLTeR's [niri](https://github.com/YaLTeR/niri) is a Wayland compositor: windows live in columns on an **infinite horizontal strip**; you scroll the strip like a document; opening a window does not crush the ones you already have. PaperWM.spoon already brings that idea to macOS in Lua on Hammerspoon. I wanted the same paradigm as a **native Swift daemon** with Accessibility APIs, spring animations, and a yabai-shaped IPC CLI so skhd can drive it.

If you have ever rewritten a compositor concept as a weekend Accessibility prototype and then left an autopsy in the repo for future-you, this is that diary.

## What

I built **niri-macos**, SPM package \`niri-macos\`, version **0.1.0** (\`niri-macos --version\`), public under **michaelmonetized/niri-macos**. Platforms: **macOS 13+**. Zero external Swift packages. Products: library **NiriCore**, daemon **niri-macos**, CLI **niri-msg**.

Stack from the tree: AppKit + CoreGraphics + QuartzCore, \`AXObserver\` / \`AXUIElement\` for event-driven window tracking, \`CGWindowList\` enumeration, \`CVDisplayLink\` 60fps spring animation, \`CGEventTap\` gestures, Unix socket IPC at \`/tmp/niri-macos.sock\` with JSON commands. Config is JSON via \`ConfigManager\` at \`~/.config/niri-macos/config.json\` (gaps, outer gaps, preset widths, spring params, scroll thresholds, windowRules Codable). Hotkeys stay external: **skhd** bindings documented in README and \`HOTKEYS.md\`. Gestures: **Cmd+Shift+scroll** (focus window), **Cmd+scroll** (workspace), **3-finger swipe** (free scroll with momentum).

![Architecture: NiriCore, daemon, niri-msg, skhd](/blog/niri-macos-scrollable-tiling-swift-ax-port/screenshots/architecture-ipc.png)

Surfaces that exist: horizontal layout engine (\`LayoutEngine.swift\` ~44KB), consume/expel column stacking, center/maximize/preset widths (33/50/66/100%), dynamic workspaces (up/down/create above/below), split groups (horizontal/vertical/quad), multi-monitor isolation (active monitor follows mouse), menubar operations, \`niri-msg status\` / \`list-windows\` / \`quit\`. Tests: **112** \`func test*\` under \`NiriCoreTests\` (layout, types, IPC). CI: GitHub Actions on \`macos-14\` (build, test, release build). HEAD \`d21a739\`. **Four** commits. ~226KB of Swift.

README still marks Planned: focus ring overlay, window-rule **enforcement** (structs parse; sitrep says not applied), overview mode, sketchybar integration, Homebrew formula, launchd plist. PLAN.md still dreams of KDL like upstream niri; the shipped parser is JSON.

![AUTOPSY.md roast vs sitrep FUNCTIONAL](/blog/niri-macos-scrollable-tiling-swift-ax-port/screenshots/autopsy-vs-sitrep.png)

\`AUTOPSY.md\` (dated 2026-02-09) is the scar: it calls the early tree a 3,672-line prototype with **two** commits, **zero** tests, seven singletons, hardcoded gaps, and a README that was aspirational fiction. It also credits real spring physics, a thoughtful IPC command set, and clean \`ColumnWidth\` modeling. \`sitrep.md\` at the same era (updated for the refactor) says **FUNCTIONAL**: 112 passing tests, JSON config, protocol-based DI, main-thread layout serialization. The June 22 \`nightly\` commits are where that contradiction resolves in git history.

## Where

Code: [github.com/michaelmonetized/niri-macos](https://github.com/michaelmonetized/niri-macos), **public**. No hosted demo. Run locally: \`swift build -c release\`, put \`niri-macos\` on your PATH, grant **Accessibility**, start the daemon, drive it with \`niri-msg\` / skhd. Socket default \`/tmp/niri-macos.sock\`. Log default \`/tmp/niri-macos.log\`.

## When

- **2026-02-06.** \`640d314\` feat: implement niri scrolling layout paradigm for macOS (initial README/PLAN + core sources).
- **2026-02-08.** \`37f34ad\` fix that is really a sequel: multi-monitor isolation, discrete scroll, workspace creation, split groups, animation/gestures/AX observer (+2391/−132). AUTOPSY calls the message an undersell.
- **2026-02-09.** AUTOPSY.md examination date; sitrep claims FUNCTIONAL + 112 tests (landed in tree with the later nightly push).
- **2026-06-22.** GitHub repo \`created_at\`; two \`nightly\` commits (\`f3b1d77\`, HEAD \`d21a739\`) ship NiriCore extraction, ConfigManager, full test suite, workflow, AUTOPSY in-tree, hustlemc/uncap crumbs. Last push \`2026-06-22T22:20:39Z\`.

![Four-commit arc](/blog/niri-macos-scrollable-tiling-swift-ax-port/screenshots/commit-arc.png)

## Why

I use macOS and I still want niri's rule: **new windows append; existing frames stay**; scroll the strip; isolate per monitor. Hammerspoon is fine. I wanted direct APIs, spring physics I own, and \`niri-msg\` that feels like talking to yabai while the layout model is niri's.

I also wanted the honesty layer. Shipping AUTOPSY.md next to a polished README is the point: document the Jenga tower, then answer it with tests and a library boundary instead of deleting the roast.

## Engagement Q

Would you rather run scrollable tiling as **native Swift + Accessibility + skhd**, or stay on **PaperWM.spoon** and keep the Lua runtime, and what would make you trust a 0.1.0 WM with four commits and 112 tests?
`;

const CODEFOLIO_COVER =
  "/blog/codefolio-spec-first-github-portfolio-saas/cover.png";

const CODEFOLIO_CONTENT = `![Codefolio marketing hero: Public Beta + Get started free](/blog/codefolio-spec-first-github-portfolio-saas/screenshots/marketing-hero.png)

## Who

I wanted a **developer portfolio platform** (multi-tenant, GitHub sync, pin six projects on free, custom domain on Pro, analytics that tell you whether recruiters came from Twitter or a blog referral) instead of another personal homepage.

Who this is for: operators who will read \`DESIGN.md\` and \`CONTRACTS.md\` before they trust a launch tweet, and people who have watched a SaaS invent 10K+ developers before the Vercel project exists.

If you have ever claimed a \`.dev\` domain in \`openGraph.url\` and then discovered the hostname already belongs to someone else's portfolio, this brief is for you.

## What

I built **Codefolio**, package \`codefolio\` **0.1.0**, **private** under **michaelmonetized/codefolio**. Layout title: **Codefolio - Developer Portfolio Platform**. Description: Showcase your code. Build your reputation. The modern portfolio platform for developers.

Stack from package.json: **Next.js 16.2.6**, **React 19.2.6**, Tailwind **4.3**, Bun, **Clerk** (\`@clerk/nextjs\` ^7.3.3), **Convex** ^1.38.0, \`stripe\` + \`@stripe/stripe-js\`, \`resend\`, \`posthog-js\`, \`@sentry/nextjs\`, radix-ui, next-themes (dark default). Three commits. HEAD \`c499a72\`.

![Free / Pro $9 / Team $29 pricing grid](/blog/codefolio-spec-first-github-portfolio-saas/screenshots/pricing-tiers.png)

Surfaces that exist in the tree:

- Marketing: \`/\`, \`/features\`, \`/pricing\`, \`/about\`, \`/blog\`, \`/careers\`, \`/examples\`, \`/privacy\`, \`/terms\`, \`/login\`, \`/signup\`
- Public portfolio: \`/:username\`, \`/:username/:project\`, \`/:username/resume\`
- Dashboard (Clerk-protected via \`proxy.ts\`): \`/dashboard\`, \`/dashboard/projects\`, \`/dashboard/projects/[id]\`, \`/dashboard/analytics\`, \`/dashboard/settings\`

Convex schema is five tables: \`profiles\`, \`projects\`, \`analytics\`, \`subscriptions\`, \`githubSyncs\`. GitHub sync action pulls \`api.github.com/users/{username}/repos?per_page=100&sort=updated&type=owner\` and upserts. Plan limits in \`lib/types.ts\`: Free 6 pins / 7-day analytics; Pro unlimited + custom domain + 90 days + case studies + remove branding; Team 5 members + 365-day analytics.

Pricing cards match: **Free**, **Pro $9/mo**, **Team $29/mo**.

What does **not** exist: \`app/api/**\` (no Stripe webhook route handlers), a \`/demo\` page (Hero still links there), a live deploy on the probed Vercel hostnames, or ownership of **codefolio.dev**.

Docs are not an afterthought. \`DESIGN.md\` (~1083 lines), \`CONTRACTS.md\` (~466), \`COMPLIANCE.md\` (~1171 WCAG 2.1 AA), \`TECH-REQ.md\` (~429), plus Fallow \`REVIEW.md\` (~9.2k LOC, 6 unused deps including stripe/resend/posthog, dashboard pages marked critical complexity).

Hero badge: **Now in Public Beta**. Social proof strip: **10K+ Developers / 50K+ Projects Showcased / 1M+ Portfolio Views**. Those numbers are marketing copy with no telemetry backing in the private tree.

## Where

Code: [github.com/michaelmonetized/codefolio](https://github.com/michaelmonetized/codefolio), **private**. Live app URL: **none** at pack time (\`codefolio.vercel.app\` returns 404).

![Five Convex tables vs Stripe/Resend unused deps](/blog/codefolio-spec-first-github-portfolio-saas/screenshots/schema-five-tables.png)

Layout \`openGraph.url\` and feature copy talk about **codefolio.dev**. Probe on 2026-09-08: \`https://www.codefolio.dev\` returns **HTTP 200** for Abdel Ahzab, Full-Stack Engineer shipping Applied AI: unrelated personal site on Cloudflare/Vercel. That is a **name collision**, not my deploy.

![codefolio.dev claimed in OG vs live third-party portfolio](/blog/codefolio-spec-first-github-portfolio-saas/screenshots/domain-collision.png)

Audience sits next to every portfolio SaaS that ships specs + dashboard chrome before billing webhooks and a domain you actually control.

## When

**2026-02-07.** \`531f712\` Create Next App. Bootstrap wrap-up in \`.work/\` claims Convex project \`codefolio\`, schema complete (5 tables / 16 indexes), CONTRACTS.md, shadcn button/card/input, build passes.

**2026-06-22 ~5:44 PM ET.** \`01aa6cc\` **nightly**. The product and the essay-length docs land together: marketing, dashboard, public portfolio/resume, Fallow gate hooks, DESIGN/COMPLIANCE/TECH-REQ/REVIEW.

**2026-06-22 ~6:19 PM ET.** \`c499a72\` **nightly** HEAD.

GitHub \`created_at\` / \`pushed_at\` both sit on **2026-06-22** even though the first commit is February (private repo timing vs local history).

![Three-commit arc Feb to June nightlies](/blog/codefolio-spec-first-github-portfolio-saas/screenshots/commit-arc.png)

## Why

A portfolio platform is a different product from a personal site, and I wanted the contracts written before the launch thread. Clerk + Convex + a real \`/:username\` surface is useful even when Stripe checkout is still schema fiction. Claiming \`codefolio.dev\` in metadata while the hostname serves another engineer is the kind of fact you put in the brief before you buy ads. Three commits can still carry nine thousand lines, and Fallow will still tell you stripe and resend never got imported.

**Engagement Q:** When your OG URL names a \`.dev\` you do not control and your Hero invents 10K users, do you fix the domain story first, or the fake social proof?
`;

const STRIPE_CONVEX_COVER =
  "/blog/stripe-convex-email-payments-theo-unpublished/cover.png";

const STRIPE_CONVEX_CONTENT = `![stripe-convex API surface: Pay, Cart, Checkout, Has, Convex exports](/blog/stripe-convex-email-payments-theo-unpublished/screenshots/api-surface.png)

## Who

I wanted one payment module I could drop into getat.me, hustlelaunch, and every other Convex SaaS instead of rewriting Stripe checkout + webhooks per repo.

Who it is for now: operators who bill by **email** before they finish auth binding; builders who want Convex \`sc_*\` tables and idempotent webhook logs without starting from Theo KV snippets; anyone who will check the registry before they trust a README badge.

## What

I built **stripe-convex**, public under **michaelmonetized/stripe-convex**, package **0.1.0**, MIT on paper. Peer deps: Convex ≥1, Stripe ≥14, React ≥18. Built with tsup + Bun. Exports: root types/components, \`stripe-convex/convex\`, \`stripe-convex/components\`.

React surface: \`StripeConvexProvider\`, \`Pay\`, compound \`AddToCart\` (with \`CartItemPlan\`), \`Cart\`, \`Checkout\`, \`Has\`. Hooks: \`useStripeConvex\`, \`useCart\`, \`useCoupon\`, \`useCheckout\`, \`useHasAccess\`.

![sc_* Convex schema tables](/blog/stripe-convex-email-payments-theo-unpublished/screenshots/schema-sc-tables.png)

Convex schema spreads six tables: \`sc_customers\`, \`sc_payments\`, \`sc_subscriptions\`, \`sc_orders\`, \`sc_coupon_usage\`, \`sc_webhook_events\`. Customers are indexed by **email**. \`TRACKED_EVENTS\` lists **19** Stripe types, checkout.session.completed through charge.refunded.

Theo lane (t3dotgg/stripe-recommendations): \`getOrCreateStripeCustomer\`, \`syncCustomerData\`, \`createPortalSession\`, brand/last4 on subscription payment method fields. Commit \`77812a0\` on 2026-02-06 is \`feat: implement Theo's Stripe recommendations\`. The compliance report file still opens with a summary table that marks several of those items Missing: stale header, live code.

![Theo helpers vs stale report header](/blog/stripe-convex-email-payments-theo-unpublished/screenshots/theo-compliance.png)

HEAD \`22e099e\` is PR **#13**: \`AddToCart\` gains \`isSubscription\` + \`planId\`; subscriptions default to direct checkout unless \`addToCart\` forces the cart path.

![AddToCart subscription compound API](/blog/stripe-convex-email-payments-theo-unpublished/screenshots/addtocart-subscription.png)

sitrep.md says **SHIPPED**. ROADMAP still has package publication unchecked. \`.github/workflows/publish.yml\` waits for a GitHub Release. Releases: **zero**. Public registry package stripe-convex: **404**. README still shows the version badge. LICENSE and README footer: **© Michael Shilman**. package.json author: Michael Hurley.

PENDING_ISSUES.md parks twelve real notes: Pay clearCart/addToCart race, unused onSuccess, Has returns null while loading, email checks only for \`@\`, duplicated formatPrice, cart not persisted, \`as any\` in syncCustomerData, and more.

## Where

Code: [github.com/michaelmonetized/stripe-convex](https://github.com/michaelmonetized/stripe-convex), **public**. No homepage / demo URL. Intended consumers named in ROADMAP: getat.me, hustlelaunch, other SaaS products. Revenue note in ROADMAP: **INDIRECT**.

![Badge vs registry 404](/blog/stripe-convex-email-payments-theo-unpublished/screenshots/registry-gap.png)

Local clone used for the pack: \`/home/michael/Projects/_site-map/stripe-convex\` on m1pro16. GitHub API shows **11** commits; that clone git log is squash-shaped to the single HEAD commit while the tree matches the library.

## When

**2026-02-04.** \`1a3d250\` Initial commit: stripe-convex payment package. Same day \`0f5b81c\` comprehensive docs.

**2026-02-06.** \`c38c209\` full type system + Convex functions. \`f608a74\` roadmap + license year. \`77812a0\` Theo recommendations.

**2026-02-11.** \`635c61c\` repo URLs + document all 19 webhook events.

**2026-02-21.** PR **#8** \`cd172db\`: dep conflicts, processRefund index, replace \`v.any()\`.

**2026-02-28.** PR **#11** CI/CD testing + publishing. Eight minutes later \`c1e4a39\`: remove GitHub Actions workflows; Vercel is our CI. \`publish.yml\` is still in the tree at HEAD.

**2026-03-01.** PR **#12** prep for registry publish.

**2026-03-20.** PR **#13** AddToCart subscription support. HEAD \`22e099e\`.

**2026-06-22.** GitHub \`pushed_at\` 22:20:53Z with no newer main commit beyond HEAD.

![Commit arc Feb to Mar 2026](/blog/stripe-convex-email-payments-theo-unpublished/screenshots/commit-arc.png)

## Why

Every monetized Convex app was going to need the same Stripe spine, and copying webhook handlers is how you get drift. Email-first customers match the products that take payment before they finish auth. Theo recommendations are a checklist I wanted encoded as exports, not a blog tab I reopen under pressure. The honest scar is the unpublished registry: badge, workflow, prep PR, sitrep SHIPPED, and a 404.

**Engagement Q:** When sitrep says SHIPPED and the registry returns 404, which status do you put in the blog title?
`;

const BUNDX_INIT_COVER =
  "/blog/bundx-init-nextjs-unique-localhost-https-caddy/cover.png";

const BUNDX_INIT_CONTENT = `![Install flow](/blog/bundx-init-nextjs-unique-localhost-https-caddy/screenshots/install-flow.png)

## Who

I run a lot of Next.js apps side by side. Shared \`http://localhost:3000\` fights Clerk cookies, callback URLs, and \`allowedDevOrigins\` the second a second app boots.

For operators who need **stable HTTPS origins per repo** on a laptop without hand-writing a Caddyfile every time.

## What

I built **bundx-init**, public \`https://github.com/michaelmonetized/bundx-init\`. Shell CLI. HEAD \`c8b59ad\`. **3** commits. 0 stars. No tagged release.

\`bin/bundx-init\` is **379** lines. \`install.sh\` curls it into \`~/.local/bin\` (\`BUNDX_INIT_RAW_URL\` override). Target must be a Next project (\`package.json\` with \`next\`).

What it does (README + script):

- installs Caddy when possible (brew / apt Cloudsmith / dnf COPR / pacman)
- configures \`~/.local/etc/Caddyfile\` to import \`~/.local/etc/caddy/dev-sites/*.caddy\`
- writes a repo-scoped Caddy snippet
- adds \`scripts/dev-localhost.mjs\` + \`dev-localhost-info.mjs\`
- rewires \`package.json\` so \`dev\` runs the HTTPS flow (\`dev:raw\` keeps the old script; \`dev:info\` dumps JSON)
- patches \`next.config.*\` with \`allowedDevOrigins: ["<host>", "*.localhost"]\` when it can

Slug = basename lowercased. Host = \`<slug>.localhost\`. Port = \`3300 + (hash(slug) % 5000)\`. Fixture \`basic-next\` maps to port **6422**; README \`my-next-app\` maps to **6996**.

![Hostname / port map](/blog/bundx-init-nextjs-unique-localhost-https-caddy/screenshots/hostname-port-map.png)

Next still binds an internal high port. Caddy owns \`:443\` and reverse-proxies. Env: \`DEV_HOST\`, \`DEV_URL\`, \`PORT\`.

![Architecture](/blog/bundx-init-nextjs-unique-localhost-https-caddy/screenshots/architecture.png)

Fixture after init shows the patch contract: Next **16.2.1** / React **19.2.0**, \`dev\` runs the localhost script, \`allowedDevOrigins\` for \`basic-next.localhost\` + \`*.localhost\`.

![Repo patches](/blog/bundx-init-nextjs-unique-localhost-https-caddy/screenshots/repo-patches.png)

## Where

Code: [github.com/michaelmonetized/bundx-init](https://github.com/michaelmonetized/bundx-init), public. No live web app.

\`\`\`bash
curl -fsSL https://raw.githubusercontent.com/michaelmonetized/bundx-init/main/install.sh | bash
bundx-init ~/Projects/my-next-app
cd ~/Projects/my-next-app && bun install && bun run dev
# https://my-next-app.localhost
\`\`\`

## When

**2026-03-30.** \`3d4b752\` Initialize bundx-init (589 insertions: CLI, install, README, fixture).

**2026-06-22.** \`f356360\` nightly adds \`.uncap/config.json\`.

**2026-06-22.** \`c8b59ad\` nightly empty tip (HEAD).

![Commit arc](/blog/bundx-init-nextjs-unique-localhost-https-caddy/screenshots/commit-arc.png)

## Why

Parallel Next apps on one port break auth providers. Clerk and friends want real HTTPS origins in local. A hashed port, a Caddy snippet, and \`allowedDevOrigins\` is the boring fix; shipping it as a curl-install CLI beats copy-pasting the same five files forever.

**Engagement Q:** How many Next apps do you run locally before \`localhost:3000\` starts lying to your auth provider?
`;

const ORCLAWSTRATOR_COVER =
  "/blog/orclawstrator-swift-appkit-to-go-tui-openclaw-gateway/cover.png";

const ORCLAWSTRATOR_CONTENT = `![Orclawstrator TUI dashboard. projects, agents, branches, stacks](/blog/orclawstrator-swift-appkit-to-go-tui-openclaw-gateway/screenshots/tui-dashboard.png)

## Who

I wanted one keyboard surface for every AI coding agent running across \`~/Projects\`. Slack tabs and Vercel log windows were the wrong shape for sessions, tokens, and dirty git state.

Orclawstrator is for operators with an OpenClaw Gateway on localhost who need that portfolio strip in one place. It is also for anyone who opens both \`swift-appkit/\` and \`tui/\` and has to decide which runtime is the install path.

I keep three differently named mission / command center repos. This one is the OpenClaw Gateway story: \`ws://localhost:3377/ws\`. The others are separate products with separate stores.

## What

I built **Orclawstrator**. Public **michaelmonetized/orclawstrator**, bundle **0.1.0**, **8** commits, HEAD \`01d9a20\`. README one-liner: *Command center for orchestrating AI coding agents across your entire project portfolio.* Lobster branding. “Built with 🦞 by the OpenClaw ecosystem.” GitHub description field is empty.

![Dual runtime. swift-appkit archived, tui recommended, shared cache.db](/blog/orclawstrator-swift-appkit-to-go-tui-openclaw-gateway/screenshots/dual-runtime.png)

**Two UIs. One SQLite file.**

1. **Swift AppKit** (path \`swift-appkit/\`, README: archived). macOS 14+, Swift 5.9, Catppuccin chromeless window, dashboard table (agent, branches, stacks, untracked/staged, Vercel build), sidebar chat + inbox, project detail with **SwiftTerm** embedding nvim for README/PLAN/ROADMAP/CHANGELOG tabs, PR stack popover, branch checkout popup, Cmd+K quick switcher, menu-bar \`NSStatusItem\`, ErrorBanner. Services: \`ShellExecutor\`, \`GitService\`, \`GitHubService\` (\`gh … --json\`), \`GraphiteService\` (\`gt log short --stack\`), \`VercelService\` (\`vercel ls --yes\`), \`OpenClawService\` (REST + \`ws://host:port/ws\`), \`ProjectScanner\`, \`DatabaseManager\`.

2. **Go TUI** (path \`tui/\`, README: recommended). Go **1.21**, Charm **Bubble Tea** / Bubbles / Lipgloss, \`go-sqlite3\`, vim j/k/h/l, Nerd Font icons, dashboard + project detail + inbox views, \`make run\` / \`make install\` to binary \`orclawstrator\`. Module path still \`github.com/michaelcolletti/orclawstrator\`. Committed binary ~8.3MB in tree.

Shared schema at \`~/.orclawstrator/cache.db\`: \`projects\`, \`sessions\`, \`messages\`, \`settings\`, \`recent_chats\`. Gateway host/port from settings (defaults **localhost:3377**).

![OpenClaw Gateway REST + WebSocket session/token path](/blog/orclawstrator-swift-appkit-to-go-tui-openclaw-gateway/screenshots/openclaw-gateway.png)

Swift is still ~210KB of source vs ~39KB Go. Linguist reports Swift. README says use the TUI. \`sitrep.md\` last updated 2026-02-09 still calls the AppKit stack Active Development ~85%. \`AUTOPSY.md\` calls the Feb patient RESUSCITATED / ship-worthy. PLAN.md still has open Phase 4-6 checkboxes that the Feb code partially answered.

Name collision to avoid: \`michaelmonetized/mission-control\` is the p10k-style \`mc\` TUI under \`~/.hustlemc/\` with a Phase 2 Fly/Claude SaaS scaffold. \`HurleyUS/hurley-mission-control\` is the Clerk + Convex \`users.kind\` human|agent deliveries web app. Orclawstrator is the OpenClaw gateway portfolio strip only.

## Where

Code: [github.com/michaelmonetized/orclawstrator](https://github.com/michaelmonetized/orclawstrator). Public, branch **main**. No dedicated homepage / Vercel lander.

![AppKit chromeless Catppuccin dashboard (archived path)](/blog/orclawstrator-swift-appkit-to-go-tui-openclaw-gateway/screenshots/appkit-dashboard.png)

Local surfaces: \`cd tui && make run\` · \`cd swift-appkit && swift build\` · cache \`~/.orclawstrator/cache.db\` · Gateway \`http://localhost:3377\` + \`ws://…/ws\`. Optional CLIs: \`gh\`, \`gt\`, \`vercel\`, Nerd Font.

Audience sits with multi-repo agent fleets that outgrew a single IDE chat panel, and with anyone who needs the OpenClaw gateway pack named without stealing the p10k TUI or the Convex comms plane.

## When

**2026-02-06.** Initial README + PLAN mockup. Same afternoon: AppKit prototype with dashboard + git. Same evening: MVP split view sidebar + dashboard.

**2026-02-08.** Core services wired, project detail, SQLite persistence. Later: chromeless semi-transparent window, full-width status bars.

**2026-02-09.** SwiftTerm for proper nvim terminal emulation in markdown tabs. AUTOPSY / inbox / shortcuts / PR stack / menu bar wave lands in the patient chart.

**2026-06-22.** \`nightly\`: move AppKit under \`swift-appkit/\`, add complete Go TUI + committed binary, flip README to TUI-recommended. Second \`nightly\` becomes HEAD \`01d9a20\` (18:15 ET). GitHub \`pushed_at\` 2026-06-22T22:15:42Z.

![Commit arc. Feb sprint to Jun dual-runtime nightly](/blog/orclawstrator-swift-appkit-to-go-tui-openclaw-gateway/screenshots/commit-arc.png)

Eight commits. No post-June product commits in the log.

## Why

OpenClaw needed a portfolio command surface that spoke Gateway sessions and tokens, not just git dirty counts.

I proved the AppKit path in four days, SwiftTerm nvim tabs included, and still decided the install story operators would actually run was \`make install\` in a terminal.

Sharing \`~/.orclawstrator/cache.db\` across runtimes is the monorepo bet. Renaming folders under a \`nightly\` commit is how that bet got honest.

Saying “mission control” three times in the org without naming which one talks to \`ws://localhost:3377/ws\` is how readers get the wrong pack.

When README recommends the Go TUI but linguist still reports Swift, which runtime owns the product title?
`;

const HUSTLEPAY_COVER =
  "/blog/hustlepay-guest-claim-tokens-auth-agnostic-stripe/cover.png";

const HUSTLEPAY_CONTENT = `![Guest claim flow](/blog/hustlepay-guest-claim-tokens-auth-agnostic-stripe/screenshots/guest-claim-flow.png)

## Who

I needed auth-agnostic Stripe+Convex glue so a guest can buy first and claim after signup — without marrying Clerk into the schema.

## What

Private **michaelmonetized/hustlepay** · hustlepay@0.0.0 · @hustlepay/core@0.0.1 · HEAD \`d2877fb\` · 1 commit nightly (+6957). Seven hp_* tables including hp_guest_sessions (gs_ + claim_ tokens). UI in core: Pay, Cart, Checkout, Has, ClaimAccount. @hustlepay/react still exports VERSION only; other adapters are stubs. Theo stripe-recommendations cited in stripe.ts.

![Schema tables](/blog/hustlepay-guest-claim-tokens-auth-agnostic-stripe/screenshots/schema-tables.png)

![Pay + ClaimAccount in core](/blog/hustlepay-guest-claim-tokens-auth-agnostic-stripe/screenshots/pay-claim-components.png)

## Where

github.com/michaelmonetized/hustlepay (private). No demo host for this tree. hustlepay.com → /lander. hustlepay.vercel.app = unrelated Nigeria micro-pension app. Sibling stripe-convex = email-tracking lineage; publish-stack names hustlepay for guest claim / Pay(199).

![Core vs adapters](/blog/hustlepay-guest-claim-tokens-auth-agnostic-stripe/screenshots/core-vs-adapters.png)

## When

2026-06-22 repo created; sole commit d2877fb nightly same day. No follow-ups.

![Domain irony](/blog/hustlepay-guest-claim-tokens-auth-agnostic-stripe/screenshots/domain-deploy-irony.png)

## Why

Guest rows without a claim bridge orphan purchases at signup. Auth-agnostic means userId is your Convex auth string. Core shipped the spine; the adapter billboard did not.

**Engagement Q:** When @hustlepay/react only exports VERSION, do you import Pay from @core — or wait for the TODOs?
`;

const KITCHEN_COVER =
  "/blog/kitchen-cloud-native-project-store/cover.png";

const KITCHEN_CONTENT = `![Kitchen home: cloud-native project store](/blog/kitchen-cloud-native-project-store/screenshots/home.png)

## Who

I got tired of treating Editor, disk, git, and remote hosting as four different systems for the same daily loop.

Kitchen is for operators who want live sync and a real editor (nvim, VS Code, Zed) without renaming the product a cloud IDE. It is for people who will say "no git" and mean no add/commit/push/pull/rebase, while history and human merge stay.

If you have ever saved a file and still had a ceremony left before another machine could see it, this is for you.

## What

I built Kitchen (michaelmonetized/kitchen, web 0.1.0). Codename. Next 16.2.9 + Convex + Clerk + Mirror. HEAD \`97bec56\`. 34 commits.

![Pricing](/blog/kitchen-cloud-native-project-store/screenshots/pricing.png)

## Where

Live https://kitchen-gilt-nine.vercel.app. Home/pricing/docs/sign-in return 200; discover returns 404; vision/mission return 404 (untracked working tree). Web is tree/diff/blame in the browser; local editors stay native.

![Docs](/blog/kitchen-cloud-native-project-store/screenshots/docs.png)

## When

June 18 2026: public log opens at fork-merge; same day org-admin, collab-relay, landing, Vercel ship, recovery loops, then Mirror client, launch-gate, diff/blame, agent kit, offline queue. June 21 lakebed parity. June 22 nightly HEAD \`97bec56\`. Pack day 2026-09-08 draft-only; working tree dirty, not pushed.

![Sign-in](/blog/kitchen-cloud-native-project-store/screenshots/sign-in.png)

## Why

Honest codename. Launch gate blocks PH/HN until Mirror demo is true. Dual honesty: marketing routes return 200 while discover returns 404 and docs drift in the working tree. "No git" means no ceremony verbs; Versions and Pierre merge stay.

![Four layers](/blog/kitchen-cloud-native-project-store/screenshots/four-layers.png)

**Engagement Q:** If your editor already saves to disk, what would have to be true before you deleted \`git add\`: live Versions on another machine, or a merge UI you trust more than conflict markers?
`;

const HUSTLEMAIL_COVER =
  "/blog/hustlemail-com-eight-dollar-lander-missing-signup/cover.png";

const HUSTLEMAIL_CONTENT = `![Home hero](/blog/hustlemail-com-eight-dollar-lander-missing-signup/screenshots/home-hero.png)

## Who

I keep a private GitHub org full of product shells. Some are real apps. Some are landers that talk like apps.

For operators who need the honest split between a **$8/mo email-marketing marketing site** and the separate Resend mail-client monorepo that actually moves mail.

## What

I built **hustlemail-com**, private https://github.com/michaelmonetized/hustlemail-com. Next.js marketing shell. HEAD \`ab984f2\`. **3** commits. 0 stars. package name \`hustlemail.com@0.1.0\`. **No README.md**.

Stack facts from \`package.json\`: Next **^16.2.6**, React **^19.2.6**, Tailwind **^4.3.0**, Bun lockfile. Dependencies stop there: no Clerk, no Convex, no Stripe package, no Resend.

What the UI claims:

- Hero: Email marketing, **minus the bloat**. CTAs to \`/signup\` and \`/docs\`.
- Social proof strip: **10K+ Active Users** / **50M+ Emails Sent** (no backend in this tree to back that).
- Competitor cards: Mailchimp \`$20+/mo\`, ConvertKit \`$29+/mo\`, HustleMail **\`$8/mo\`**.
- Pricing: **Starter Free** (500 subs / 1,000 emails), **Pro $8/mo** (5,000 subs, unlimited emails, sequences, A/B, custom branding), **Business $24/mo** (25,000, dedicated IP, API, phone). Annual Pro copy: **$80/year**.
- FAQ text says Stripe + PayPal, 14-day trial, 30-day refund (still no Stripe in deps).
- Brand red: Tailwind \`brand.500 = #ef4444\`.

![Pricing plans](/blog/hustlemail-com-eight-dollar-lander-missing-signup/screenshots/pricing-plans.png)

![Competitor table](/blog/hustlemail-com-eight-dollar-lander-missing-signup/screenshots/competitor-table.png)

Real \`page.tsx\` routes: \`/\`, \`/features\`, \`/pricing\`, \`/docs\`.

Linked but **missing**: \`/signup\`, \`/login\`, \`/about\`, \`/blog\`, \`/contact\`, \`/privacy\`, \`/terms\`, \`/community\`, and the docs children (\`/docs/quick-start\`, \`/docs/api\`, …). \`/docs\` is an index of cards pointing at pages that do not exist.

![Docs dead links](/blog/hustlemail-com-eight-dollar-lander-missing-signup/screenshots/docs-dead-links.png)

![Missing routes](/blog/hustlemail-com-eight-dollar-lander-missing-signup/screenshots/missing-routes.png)

Sibling in the same org: \`michaelmonetized/hustlemail\` is a Resend+Convex keyboard-first mail client for \`notify@uncap.us\`. Different repo. Different job.

## Where

Code: [github.com/michaelmonetized/hustlemail-com](https://github.com/michaelmonetized/hustlemail-com), private.

Live probes at pack time:

- \`hustlemail-com.vercel.app\` / \`hustlemail.vercel.app\`: **404** \`DEPLOYMENT_NOT_FOUND\`
- \`hustlemail.com\` DNS A: **54.243.117.197** (AWS); HTTPS TLS: **UNEXPECTED_EOF** (not this Next app)

Local inspect clone: \`/tmp/cf-inspect/hustlemail-com\` @ \`ab984f2\`.

## When

**2026-02-18.** \`286bef3\` feat: initial hustlemail.com marketing site (+1469 / 15 files).

**2026-06-22 17:38 ET.** \`e96ceb6\` nightly (Fallow hooks, AGENTS.md, REVIEW.md, \`.uncap\`, dep bumps).

**2026-06-22 18:16 ET.** \`ab984f2\` nightly empty tip (HEAD).

![Commit arc](/blog/hustlemail-com-eight-dollar-lander-missing-signup/screenshots/commit-arc.png)

## Why

A lander that prices against ConvertKit still needs a \`/signup\` route before it is a product story. 10K+/50M+ on a four-page private repo is copy, not telemetry. The real mail work in this org lives in the Resend client; this pack keeps those narratives apart.

**Engagement Q:** How many of your $8/mo SaaS repos are four marketing pages with a missing \`/signup\`?
`;

const NVIBE_COVER =
  "/blog/nvibe-neovim-cursor-coderabbit-layout-until-it-works/cover.png";

const NVIBE_CONTENT = `![nvibe layout: left AI panel, editor, bottom tools](/blog/nvibe-neovim-cursor-coderabbit-layout-until-it-works/screenshots/layout-concept.png)

## Who

I wanted Cursor Agent and CodeRabbit **already open** when Neovim started: same frame as the buffer, no alt-tab to an Electron window, no extra tmux pane, no \`<leader>\` chord that makes me lose which split I was in.

If you run NvChad and keep AI CLIs on PATH, you already know the friction: leave for the agent, lose buffer context, come back, rebalance windows by hand. I wanted the layout to be the product.

## What

I built **nvibe**, a Lua Neovim plugin at [michaelmonetized/nvibe](https://github.com/michaelmonetized/nvibe). Version badge says **0.1.0**. Module lives at \`lua/nvibe/init.lua\` (~354 lines). Public. Stars: 0.

On \`VimEnter\`, if you are not already in a terminal buffer, \`setup()\` calls \`create_terminal_split()\`:

1. Hard-requires \`nvchad.term\` (ERROR notify + abort if missing).
2. Checks \`vim.fn.executable\` for \`cursor_agent_cmd\` / \`coderabbit_cmd\` (defaults \`cursor-agent\`, \`coderabbit\`).
3. Left panel width = \`width_percent\` x \`$COLS\` (or \`vim.o.columns\` fallback).
4. \`nvchad.term.new\` for Cursor Agent (top) and CodeRabbit (bottom) on that panel.
5. Bottom strip: LazyGit + two shells (\`vim.o.shell\`), with a pile of \`wincmd\` / \`close\` cleanup so empty buffers do not stick around.
6. \`stopinsert\` so the editor is not left in insert mode.

Config surface is small:

\`\`\`lua
require('nvibe').setup({
  width_percent = 30,
  cursor_agent_cmd = "cursor-agent",
  coderabbit_cmd = "coderabbit",
})
\`\`\`

Honesty check against the tree: the **code default** for \`width_percent\` is **20**, while README / \`docs/API.md\` / busted expectations still talk like **30**. LazyGit and the dual shells are **hardcoded**, not setup opts. ROADMAP still has "make bottom panel commands and sizes configurable" open.

![NvimTree #4/#5: height constrain + rebalance](/blog/nvibe-neovim-cursor-coderabbit-layout-until-it-works/screenshots/nvimtree-fix.png)

February fix (\`6a931f6\`, closes #4 and #5): opening NvimTree used to equalize windows and grow full height over the terminal panes. Plugin now caches editor-row height after layout, constrains \`FileType NvimTree\` windows to that height, and \`rebalance_panels()\` restores left-column terminal widths on open/close. README documents \`preserve_window_proportions = true\` as the paired NvimTree setting.

Tests: busted (\`tests/test_nvibe.lua\`, **18** \`it(\` cases) with mocked \`vim\` + \`nvchad.term\`. Makefile: \`make test\` / \`lint\` / \`check\` via busted + luacheck. CHANGELOG documents the early interactivity bug: raw \`vim.cmd("terminal …")\` vs NvChad's interactive \`term.new\`.

![CI added, then deleted for Vercel](/blog/nvibe-neovim-cursor-coderabbit-layout-until-it-works/screenshots/ci-vercel-irony.png)

CI subplot: \`3ee0092\` added \`.github/workflows/build.yml\` ("keep prod build green"). \`5ab79db\` corrected it for a Lua project. Next morning \`365a17e\` deleted **all** GitHub config with message **"Vercel is our only CI/CD"** on a Neovim Lua plugin with no web app in the tree. HEAD has no \`.github/\`. Local \`make test\` is the gate that remains.

Also true: MIT badge in README, **no LICENSE file**. Product Hunt badges link to producthunt.com root. PLAN.md still has Phase 3 "Product Hunt launch preparation." CHANGELOG dates 0.1.0 as 2025-01-17; git history starts **2025-10-17**.

## Where

Code: [github.com/michaelmonetized/nvibe](https://github.com/michaelmonetized/nvibe), **public**. No hosted demo.

Install path in README: Lazy.nvim or Packer snippets calling \`require('nvibe').setup()\`, after NvChad. Runtime needs Neovim 0.7+, NvChad (\`nvchad.term\`), and the CLIs you configured (plus \`lazygit\` for the bottom middle pane as written).

Checked-in \`screenshot.png\` (~948KB) from the Oct 18 roadmap commit is the visual proof the layout existed on a real session.

## When

- **2025-10-17 morning** \`a65bb50\` init, \`e0766a4\` initial plugin release, Product Hunt marketing README (\`be96f88\`), docs, tests, NvChad error handling, CodeRabbit PR cleanup, merge #2.
- **2025-10-17 evening to 2025-10-18** bottom panel / 3-column layout fight: auto-launch, separate creation paths, sizing context bugs, manual vim-cmd walking (\`i've been using 1 not l but needed h\`), then **\`903e4d6\` "it works!"**, merge #3 from \`stage\`, \`5a790f2\` roadmap + screenshot.
- **2026-02-21** \`6a931f6\` NvimTree height + panel width restore (closes #4, #5).
- **2026-02-27 to 28** Actions build gate, Lua workflow fix, delete GitHub config for Vercel; PLAN.md + \`.hustlemc\` land.
- **2026-06-22** \`e7833a1\` / HEAD \`56d0152\` nightlies. Last push \`2026-06-22T22:17:08Z\`. **35** commits total.

![35-commit arc highlights](/blog/nvibe-neovim-cursor-coderabbit-layout-until-it-works/screenshots/commit-arc.png)

## Why

"Vibe coding" for me means **terminals I already pay for**, laid out so the agent and the reviewer never leave the frame while I edit.

I also wanted the diary of actually making Neovim splits behave. The commit messages from Oct 18 are the product as much as the README ASCII: simplify, comment out close, walk the steps, use \`h\` not \`1\`, then ship **"it works!"** Same energy as deleting a brand-new Actions workflow because the org mantra said Vercel. Leave that commit in history instead of rewriting it.

## Engagement Q

Would you hard-depend on **NvChad's terminal module** to glue Cursor Agent + CodeRabbit into Neovim, or keep AI in separate panes forever? And does a commit titled **"it works!"** after a day of \`wincmd\` hell earn more trust than a polished 0.1.0 badge?
`;

const COMPARE_COVER =
  "/blog/compare-git-isolated-command-benchmarker/cover.png";

const COMPARE_CONTENT = `![Git-isolated A/B workflow](/blog/compare-git-isolated-command-benchmarker/screenshots/workflow-isolation.png)

## Who

I kept running \`time cmd-a; time cmd-b\` and then arguing with myself about whether the second one won because it was faster, or because the first one warmed the cache and the tree had drifted.

For operators comparing formatters and linters who refuse that lie. Especially anyone already typing \`vp exec biome format --write\` next to \`vp exec oxlint\` and wanting the median, not the vibes.

## What

I built **compare**, public [michaelmonetized/compare](https://github.com/michaelmonetized/compare). Bash. \`VERSION="0.1.0"\`. \`bin/compare\` is **825** lines at HEAD (468 on init). \`install.sh\` drops it in \`/usr/local/bin\` (or \`$PREFIX\`). HEAD \`c5dbcd6\`. **3** commits. 0 stars. CLI only. No LICENSE. No release tag.

![CLI help surface](/blog/compare-git-isolated-command-benchmarker/screenshots/cli-help.png)

The product is git isolation for shell A/B:

1. If the working tree is dirty, commit \`compare: snapshot before benchmark\` (with \`--no-verify\`).
2. Force-create \`compare/<slug-a>\` and \`compare/<slug-b>\` from that shared SHA.
3. Checkout A, run command A \`-n\` times with \`TIMEFORMAT\`, append to the log; blank line; same for B.
4. Restore the original branch. Leave the snapshot and \`compare/*\` branches for inspection; delete them yourself.

Log lines look like POSIX \`time\`:

\`\`\`text
vp exec biome lint --write  1.36s user 0.36s system 151% cpu 1.134 total
vp exec oxlint --write  0.21s user 0.18s system 73% cpu 0.528 total
\`\`\`

Default path: \`../tests/compare-<cwd>-<c1>-<c2>-<UTCstamp>.log\`. Flags: \`-n\`, \`-c\`, \`-o\`, \`-g/--graph\`, \`--md\`. Subcommands: \`compare graph <log>\`, \`compare report <log>\`. Graphs: user / system / CPU% / total (blue A, yellow B). \`--md\` writes tables + mermaid and opens [mdr](https://github.com/CleverCloud/mdr) (else \`open\` / \`xdg-open\`). Commands go through \`eval\` (trusted only).

![Sample log + terminal charts](/blog/compare-git-isolated-command-benchmarker/screenshots/sample-log-graph.png)

Smoke on the pack box: \`compare "sleep 0.05" "sleep 0.12" -n 3\` totals ~0.051 vs ~0.121, branches \`compare/sleep-0-05\` and \`compare/sleep-0-12\` left behind. README caveats remain honest: no CPU pinning, mutating commands can diverge branches, one intentional variable is on you.

Residue: \`plans/README.md\` still says the repo had **no commits and no source code** (docs-only improve plans). Those four plans are marked DONE. \`compare report\` is in \`--help\` and code; it is not in the README Contents. Second nightly (\`c5dbcd6\`) shares the exact tree with the first nightly (empty HEAD commit).

![plans irony](/blog/compare-git-isolated-command-benchmarker/screenshots/plans-irony.png)

## Where

Code: [github.com/michaelmonetized/compare](https://github.com/michaelmonetized/compare), public, branch \`main\`. No homepage. No live web demo. Clone + \`./install.sh\` (or \`PREFIX=$HOME/.local ./install.sh\`).

Audience sits next to biome, oxlint, Vite Plus, and anyone who already treats \`time\` output as courtroom evidence.

## When

**2026-06-17, 6:57 AM Eastern.** \`217d4ac\` init: README, 468-line CLI, install script, four docs plans.

**2026-06-22, 5:40 PM Eastern.** \`b4fea7b\` nightly: CLI grows to 825 lines; README gains \`--md\` / mdr / CPU chart.

**2026-06-22, 6:17 PM Eastern.** \`c5dbcd6\` nightly: same tree as \`b4fea7b\`. HEAD. Empty.

![Commit arc](/blog/compare-git-isolated-command-benchmarker/screenshots/commit-arc.png)

## Why

Back-to-back \`time\` is a shared-state measurement pretending to be a tool measurement. A snapshot commit plus two named branches is the smallest honest isolator I would actually run. biome-vs-oxlint needs a log file outside the working tree, not another Slack debate.

**Engagement Q:** When you A/B two CLIs, what is the one variable you pretend you controlled, and which dirty-tree / warm-cache factor actually won?
`;

const BASHFORMER_COVER =
  "/blog/bashformer-ink-flappy-after-c-sdl-cleanup/cover.png";

const BASHFORMER_CONTENT = `![Ink Flappy frame](/blog/bashformer-ink-flappy-after-c-sdl-cleanup/screenshots/ink-flappy-frame.png)

## Who

I wanted Flappy Bird that lives in the TTY, and I kept a pure-bash platformer under the same repo name because the first instinct was bash + former, then an Ink clone later.

For people who install Bun and still respect a 300-line bash game that only needs Nerd Fonts.

## What

I built **bashformer**, public https://github.com/michaelmonetized/bashformer. HEAD \`541d2bc\`. **21** commits. **0** stars. Default **master**. Version **Unreleased**. CLI/TTY only.

**Product A (README):** \`index.tsx\` (~263 LOC). Bun + React 19 + Ink 7. CONFIG: FPS 30, GRAVITY 0.32, FLAP_VY -1.7, PIPE_SPEED 3.1, PIPE_GAP 8. Space flaps/restarts; Q quits. Pipe.scored prevents double-count (\`d1fa8d0\`, #7). Terminal <40x10 exits (\`6678fda\`).

![CONFIG + scored](/blog/bashformer-ink-flappy-after-c-sdl-cleanup/screenshots/config-scored-fix.png)

**Product B (in-tree):** \`bashformer.sh\` (~314 LOC). Pure bash Nerd Font side-scroller with coins/spikes/goal and camera follow. A/D move, W/Space jump, Q quit.

![Bash platformer HUD](/blog/bashformer-ink-flappy-after-c-sdl-cleanup/screenshots/bash-platformer-hud.png)

**Feb 21 cleanup:** CONFIG extract (\`6b9eead\`), PLAN rewrite (\`e27c79b\`), bun tests (\`810e5f4\`), remove vex_sdl (#14) and C/SDL (\`5a840cf\`), CHANGELOG (#11), README match, scored flag, term size.

Residue: PLAN still lists deleted C experiments; sitrep says Unknown tool / PROTOTYPE; CHANGELOG [Unreleased]; package.json private.

![Cleanup arc](/blog/bashformer-ink-flappy-after-c-sdl-cleanup/screenshots/cleanup-arc.png)

## Where

Code: [github.com/michaelmonetized/bashformer](https://github.com/michaelmonetized/bashformer), public. No live web app.

\`\`\`bash
bun install && bun run index.tsx
# or
./bashformer.sh
\`\`\`

![Dual stack](/blog/bashformer-ink-flappy-after-c-sdl-cleanup/screenshots/dual-stack.png)

## When

**2025-12-21 to 12-27.** init, kong/baddies/tools, zoom/png, story cleanup.

**2026-01-31.** chore sync.

**2026-02-21.** CONFIG to tests to delete C/SDL to scored flag to term size.

**2026-06-22.** nightly x2 to HEAD \`541d2bc\`.

![Commit arc](/blog/bashformer-ink-flappy-after-c-sdl-cleanup/screenshots/commit-arc.png)

## Why

Deleting the C/SDL pile was a product decision. Pipe.scored is more honest than "score feels off." Unreleased with empty Phase 1 checkboxes beats inventing a 1.0 tag.

**Engagement Q:** Keep the pure-bash platformer beside Ink Flappy, or split so the README stops lying by omission?
`;

const REDACTTHING_COVER =
  "/blog/redactthing-streamer-pii-mv3-jquery-ghost-iframe-gap/cover.png";

const REDACTTHING_CONTENT = `![Five redaction modes](/blog/redactthing-streamer-pii-mv3-jquery-ghost-iframe-gap/screenshots/modes-matrix.png)

## Who

I stream. Inboxes and admin UIs leak emails and phones the second the browser is shared. I wanted one extension click that covers PII without waiting for every site to grow a privacy mode.

## What

Public **michaelmonetized/redactthing** · Chrome MV3 · extension **0.0.1** · HEAD \`5c4661c\` · **7** commits. Modes: redact / blur / mask / hide / show. Email + phone regex + custom lines. MutationObserver tree walk. Popup **Redact Now**. \`chrome.storage.sync\` settings. package.json says MIT 1.0.0; \`LICENSE.md\` is GPL-3.0. \`jquery.js\` (~84KB) still in \`content_scripts\` with zero \`$()\` usage after the Jun 22 vanilla rewrite. hustlelaunch.com/redactthing **404**. \`ROADMAP.md\` describes document/PDF SaaS; \`PLAN.md\` matches the extension.

![Settings + popup](/blog/redactthing-streamer-pii-mv3-jquery-ghost-iframe-gap/screenshots/settings-popup.png)

![jQuery ghost](/blog/redactthing-streamer-pii-mv3-jquery-ghost-iframe-gap/screenshots/jquery-ghost.png)

![Google Sites iframe gap](/blog/redactthing-streamer-pii-mv3-jquery-ghost-iframe-gap/screenshots/iframe-gap.png)

## Where

github.com/michaelmonetized/redactthing (public). Unpacked \`src/\`. No CWS. No demo host. hustlelaunch.com root is live; \`/redactthing\` is not.

![Commit arc](/blog/redactthing-streamer-pii-mv3-jquery-ghost-iframe-gap/screenshots/commit-arc.png)

## When

2024-08-21 init · 2024-08-23 Google Sites iframe commit · 2026-01-31 sync (+ STRIPE.md) · 2026-02-27 package.json · 2026-06-22 nightly rewrite \`7881d00\` · empty nightly HEAD \`5c4661c\` same day.

![ROADMAP irony](/blog/redactthing-streamer-pii-mv3-jquery-ghost-iframe-gap/screenshots/roadmap-irony.png)

## Why

Streamer PII is a content-script problem. The repo still ships the unused jQuery, the 404 lander, and a ROADMAP for a different product. The iframe limit is documented in a commit subject.

**Engagement Q:** Vanilla MutationObserver already shipped — delete the jQuery ghost tonight, or carry 84KB into the store listing?
`;

const HUSTLEDESK_COVER =
  "/blog/hustledesk-com-eight-dollar-helpdesk-lander-wordpress-domain/cover.png";

const HUSTLEDESK_CONTENT = `![Home hero](/blog/hustledesk-com-eight-dollar-helpdesk-lander-wordpress-domain/screenshots/home-hero.png)

## Who

I keep a private GitHub org full of product shells. Some are real apps. Some are landers that talk like apps. Some claim a domain that answers something else entirely.

This pack is for operators who need the honest split between a **$8/mo flat helpdesk marketing site** and the **WordPress parking page** currently living at hustledesk.com.

## What

I built **hustledesk-com**, private at [github.com/michaelmonetized/hustledesk-com](https://github.com/michaelmonetized/hustledesk-com). Next.js marketing shell. HEAD \`d446e97\`. **3** commits. 0 stars. package name \`hustledesk.com@0.1.0\`. README is **stock** create-next-app boilerplate.

Stack facts from \`package.json\`: Next **16.2.6**, React **19.2.6**, Tailwind **^4.3.0**, Bun lockfile. Dependencies stop there. no Clerk, no Convex, no Stripe package, no IMAP/email inbound library.

What the UI claims:

- Hero: "Support tickets, **nothing more**." Subhead inbox zero. Price line **$8/mo. Really.**
- CTAs: **Start Free Trial** to \`https://app.hustledesk.com/signup\`, **See Features** to \`/features\`. Header **Sign in** to \`https://app.hustledesk.com/login\`.
- Home **inbox mock**: Sarah Chen "Can't reset password" (SLA: 28m left), Mike Johnson, Emily Davis. chrome window, not a product screenshot.
- Feature grid: Email Inbound, Ticket Inbox, Canned Responses, SLA Timers, Team Assignment, **HustleChat Integration**.
- Competitor cards: Zendesk \`$55+\`, Freshdesk \`$18+\`, Help Scout \`$25+\` (per user) vs HustleDesk **\`$8\` flat · Unlimited users**.
- Pricing: **one** plan. $8/month flat; team-of-5 table ends at Zendesk **$3,300/yr** vs HustleDesk **$96/yr** ("Save $3,204/year…").
- Brand sky: Tailwind \`--color-hustle-500 = #0ea5e9\` / \`600 = #0284c7\`.

![Pricing flat $8](/blog/hustledesk-com-eight-dollar-helpdesk-lander-wordpress-domain/screenshots/pricing-flat.png)

![Competitor table](/blog/hustledesk-com-eight-dollar-helpdesk-lander-wordpress-domain/screenshots/competitor-table.png)

Real \`page.tsx\` routes: \`/\`, \`/features\`, \`/pricing\`, \`/docs\`.

Linked but **missing in-repo**: \`/privacy\`, \`/terms\`, and the docs children (\`/docs/quick-start\`, \`/docs/email-forwarding\`, \`/docs/api\`, \`/docs/hustlechat\`, …). \`/docs\` is an index of cards pointing at pages that do not exist.

![Docs dead links](/blog/hustledesk-com-eight-dollar-helpdesk-lander-wordpress-domain/screenshots/docs-dead-links.png)

![Missing routes + app 301](/blog/hustledesk-com-eight-dollar-helpdesk-lander-wordpress-domain/screenshots/missing-routes.png)

This is not \`hustlemail-com\`. that sibling is the **email-marketing** $8 lander (red \`#ef4444\`, Free/$8/$24, in-repo missing \`/signup\`). Different product claim. Different brand. Different honesty bug.

## Where

Code: [github.com/michaelmonetized/hustledesk-com](https://github.com/michaelmonetized/hustledesk-com) (private).

Live probes at pack time:

- \`hustledesk.com\` DNS A to **66.96.162.142**; HTTPS **200** WordPress PHP/7.4.33; title **Hustle Desk – Make extra income from the comfort of your home**; default "This is your front page" copy. **not** this Next helpdesk lander
- \`www\` / \`app.hustledesk.com\` to same A; \`app\` **301** \`X-Redirect-By: WordPress\` to \`https://hustledesk.com/\`
- \`hustledesk-com.vercel.app\` to **404** \`DEPLOYMENT_NOT_FOUND\`
- \`hustledesk.vercel.app\` to unrelated Vite SPA (\`<title>hustledesk</title>\`)

Local inspect clone: \`/tmp/cf-inspect/hustledesk-com\` @ \`d446e97\`.

## When

**2026-02-18 07:57 ET.** \`4439645\` feat: initial hustledesk.com marketing site (+2206 / 22 files).

**2026-06-22 17:23 ET.** \`b45b480\` nightly (Fallow hooks, AGENTS.md, REVIEW.md, \`.uncap\`, dep bumps).

**2026-06-22 18:14 ET.** \`d446e97\` nightly empty tip (HEAD).

![Commit arc](/blog/hustledesk-com-eight-dollar-helpdesk-lander-wordpress-domain/screenshots/commit-arc.png)

## Why

A Zendesk-price lander still needs an auth surface that is not a WordPress 301. "Save $3,204/year" on a four-page private repo is table copy, not a billed product. hustlemail-com already told the $8 lander story for email marketing. this pack is the **helpdesk** twin with a **domain that answers something else**.

How many of your SaaS domains currently serve a default WordPress "Make extra income" front page while the Next lander never shipped?
`;

const SHIPPREP_COVER =
  "/blog/shipprep-default-apply-biome-tsgo-blacksmith-vercel-off/cover.png";

const SHIPPREP_CONTENT = `## Who

I got tired of re-typing the same Biome/tsgo/Blacksmith/Vercel-off checklist into every Next/Bun root, so the checklist became a CLI that **applies by default**.

For operators who want Vercel Git auto-deploy **off** on main/master and Blacksmith owning \`vercel deploy --prebuilt\`.

## What

I built **shipprep**, private https://github.com/michaelmonetized/shipprep. HEAD \`c35a9d8\`. **6** commits. **0** stars. Version **0.1.0**. No README.

\`bin/shipprep.mts\` (**403** LOC). Shebang Bun. \`parseArgs\` defaults \`apply: true\`. \`--audit\` / \`--check\` flips read-only. Accepts \`--pwd\` even when chat clients paste U+2014 in place of ASCII hyphens.

![APPLY report](/blog/shipprep-default-apply-biome-tsgo-blacksmith-vercel-off/screenshots/apply-report.png)

**APPLY** writes package scripts (\`tsc\`/\`typecheck\` to \`tsgo --noEmit\`, \`lint\` to biome-lint), tsconfig bun+node + \`**/*.mts\`, \`scripts/dev-localhost*.mjs\`, \`scripts/ship.mts\`, freview \`pre-push\`, \`.github/workflows/ship.yml\` on \`blacksmith-4vcpu-ubuntu-2404\`, and \`vercel.json\` with \`git.deploymentEnabled.main/master = false\`.

![Vercel git off](/blog/shipprep-default-apply-biome-tsgo-blacksmith-vercel-off/screenshots/vercel-git-off.png)

![Blacksmith ship.yml](/blog/shipprep-default-apply-biome-tsgo-blacksmith-vercel-off/screenshots/blacksmith-ship-yml.png)

![Audit checks](/blog/shipprep-default-apply-biome-tsgo-blacksmith-vercel-off/screenshots/audit-checks.png)

Required roots for validRoot: \`package.json\`, \`bun.lock\`, \`.vercel\`, \`.next\`. Tests in \`test/shipprep.test.ts\` (**122** LOC).

Sibling tooling in the org: shipthing is a contacts CRM named for carrier rates; bundx-init is Caddy \`.localhost\` only. This CLI is the shipping-standard migrator.

## Where

Code only: [github.com/michaelmonetized/shipprep](https://github.com/michaelmonetized/shipprep), **private**. No live site.

\`\`\`bash
bun bin/shipprep.mts --pwd ~/Projects/app
bun bin/shipprep.mts --audit --json
\`\`\`

## When

**2026-05-13 14:08 ET.** \`d234692\` audit executable.

**14:17 ET.** \`811a0ac\` false positives.

**14:30 ET.** \`6cf4af4\` APPLY migrations; default flips to apply.

**14:54 ET.** \`cf6928a\` disable Vercel git deploys.

**2026-06-22.** nightly ×2, \`.uncap\`, HEAD \`c35a9d8\`.

![Commit arc](/blog/shipprep-default-apply-biome-tsgo-blacksmith-vercel-off/screenshots/commit-arc.png)

## Why

Audit-only tools leave you copy-pasting. Blacksmith prebuilt plus Vercel git disabled is a **gate**, not a README hope. Default APPLY is the point of the tool; \`--audit\` stays opt-in.

**Engagement Q:** Keep APPLY as the default, or flip to \`--audit\` default so a typo cannot rewrite twelve package scripts?
`;

const IPRO_COVER =
  "/blog/ipro-golf-agency-lander-ecosystem-hub/cover.png";

const IPRO_CONTENT = `![iPro.golf agency homepage mock: hero, ecosystem chips, services](/blog/ipro-golf-agency-lander-ecosystem-hub/screenshots/home.png)

## Who

I ship golf products that look like one brand family and are three different businesses. [iLeague.golf](https://ileague.golf) is the creator platform: scorecards, subscriptions, tips, fifteen percent fee. That pack already exists: \`ileague-golf-patreon-meets-18birdies\`. [iTour.golf](https://www.itour.golf) is the national creator-tour lander: sponsors, host bids, season schema, packed as \`itour-golf-tour-lander-ahead-of-deploy\`.

iPro.golf is the **agency**. Country clubs, courses, resorts. Retainers. Case-study theater. A brochure that also hubs the ecosystem.

If you care about multi-domain Vercel rewrites, agency landers that declare Stripe/Clerk/Convex and never wire them, or how to keep the creator-SaaS story off a URL that says "Pro": this is the field notes.

## What

I keep the live marketing site for the agency under \`HurleyUS/iPro-main-web\`.

README one-liner: connective tissue between influencers and golf courses, country clubs, resorts, and growing golf communities. Layout title that also wins on curl: **iPro.golf | Golf Course & Resort Marketing Agency**. Badge on the hero: the same phrase. H1: **iPro.golf**.

Stack on the box: **Next.js 16.2**, **React 19**, Tailwind v4, Geist, a full shadcn/Radix tree, Bun lockfile, Vercel. Package name **web**, version **0.1.0**. Repo private. Site public at [www.ipro.golf](https://www.ipro.golf) (apex 308s to www). Ten commits. HEAD \`b8dfdba\`.

![Retainer pricing mock: Starter / Growth / Premium](/blog/ipro-golf-agency-lander-ecosystem-hub/screenshots/services-pricing.png)

Agency retainers on the home page (this is the services brochure, separate from the creator billing product and the tour season product):

1. **Starter** $1,997/mo (refresh, social setup, GBP, reporting)
2. **Growth** $4,997/mo (most popular: full social, email, content, paid, strategy)
3. **Premium** $9,997+/mo (video, influencer campaigns, events, member acquisition, dedicated team)

Services grid: Brand Design, Web Development, Social Media, Local SEO, Email Marketing, Video Production. CTAs go to \`/contact\` and \`/case-studies\`.

What is also true on pack day:

- **Live www title matches HEAD**, unlike the iTour pack where production still serves a fake 2026 season shell.
- \`layout.tsx\` points Open Graph at \`/og-image.png\`. That file is missing from \`public/\`. curl returns **404**.
- Contact \`handleSubmit\` is a one-second \`setTimeout\` with a TODO for Resend. Phone is **(555) GOLF-PRO**. Email \`hello@ipro.golf\`.
- Case studies (Highland Links, Coastal Resort & Spa, Valley Municipal) are fiction. Feb 9 AUTOPSY said the quiet part out loud; home metrics later sit at 50+ / 35% / 2.5x / $1.8M instead of the autopsy's 120+ / 47% / $2.4M.
- \`package.json\` still lists Clerk, Stripe, Convex, PostHog, Resend, react-email. Fallow REVIEW: unused. No \`convex/\` tree. No \`app/api\`. Layout has no Clerk provider.
- \`/ileague\`, \`/itour\`, \`/iconf\` on this repo are **Coming Soon / waitlist shells**. The real products are separate repos and separate packs.
- Agency \`/itour\` copy still says **National Amateur Golf Tour** and a 2026 regional event grid. That fights the packed iTour creator-tour / May 2027 story. Call the conflict; do not merge the posts.
- Private vault \`michaelmonetized/iPro\` is already **SKIP**: logos, planning markdown, gitlink into this app. Do not retell it here.

![Ecosystem differentiation: agency vs creator SaaS vs tour vs summit](/blog/ipro-golf-agency-lander-ecosystem-hub/screenshots/ecosystem-diff.png)

## Where

It runs on Vercel as a prerendered marketing site (\`x-nextjs-prerender: 1\` on the 2026-09-08 probe). Dark theme, fixed header, footer with Services / Ecosystem / Company columns.

Surfaces that matter:

- Public agency pages: home, about, services, case studies, contact, blog listing, privacy, terms
- Ecosystem brochure pages: \`/ileague\` Coming Soon, \`/itour\` Coming 2026, \`/iconf\` Fall 2026
- \`proxy.ts\`: if host is \`iconference.golf\` or \`www.iconference.golf\` and path is \`/\`, rewrite to \`/iconf\`. Live iconference.golf returns **200** with \`x-matched-path: /iconf\`
- shadcn kit under \`components/ui/*\`: mostly unused; used pieces are Button, Sheet, form controls on contact

Live HTML on pack day did not need Clerk keys to render. There is no auth wall on the agency brochure.

![Honesty board: live wins vs remaining gaps](/blog/ipro-golf-agency-lander-ecosystem-hub/screenshots/honesty-board.png)

Related domains: **iPro.golf** (emerald agency, this pack), **iLeague.golf** (creator platform, packed), **iTour.golf** (tour, packed), **iConference.golf** (summit shell rewritten onto this project). Vault sibling SKIPPED.

## When

**November 24, 2025.** Create Next App. Init thrash. Empty license. Another init. The repo exists before the golf pitch is real.

**February 5, 2026.** \`chore: prod deploy\`: first push toward something live.

**February 9.** The meaningful day. \`feat: Complete site rebuild with pages, navigation, and proper structure\`: the App Router surface that still matches www. Same day: AUTOPSY updated with GoDaddy DNS instructions and a brutal inventory of placeholders. DNS later got fixed; the autopsy file did not get a matching rewrite.

**May 21.** \`Fix iConference domain deployment\`. CHANGELOG: production routing for iconference.golf onto the iPro Vercel project + UI compatibility so the Next production build passes. \`proxy.ts\` is the host rewrite.

**June 22.** Two \`nightly\` commits. HEAD \`b8dfdba\`. Package deps float forward; the brochure story does not.

## Why

The ecosystem needs a front door that sells **services to properties** without pretending it is the creator SaaS or the tour.

Operators reading three golf posts in a row deserve a clean split: agency retainers here, Patreon x 18Birdies there, sponsor/host season over there.

A domain rewrite for iconference.golf onto \`/iconf\` is a real ops story. A Coming Soon waitlist is still not shipping iConference.

The vault repo will keep tempting people to package logos as a product. Ship the app; leave the logo vault alone.

**Engagement Q:** When the agency lander links to Coming Soon ecosystem shells that already have live product domains elsewhere, do you keep the hub honest as a brochure, or do you outbound-link straight to the real products and delete the shells?
`;

const ASSESSMENT_TOOLBAR_COVER =
  "/blog/assessment-toolbar-chrome-mv3-lighthouse-missing-double-inject/cover.png";

const ASSESSMENT_TOOLBAR_CONTENT = `![Pink marketing assessments bar](/blog/assessment-toolbar-chrome-mv3-lighthouse-missing-double-inject/screenshots/bar-mock.png)

## Who

I run marketing assessments. Every client tab needs the same SEO stack against the live URL, without hunting bookmarklets.

## What

Public **michaelmonetized/Assessment-Toolbar**. Chrome MV3. Name **Marketing Assessments**. v**1.0**. HEAD \`9652620\`. **6** commits. Pink #ffc9dd top strip: SpyFu, SiteLiner, Rich Results, Schema, Mobile-Friendly, WAVE, Wayback, Whois, plus FB/NAP prompts, missing-alt highlighter, title clipboard, and Ctrl+Alt+M. GPL-3.0. No package.json.

Manifest + README promise **google lighthouse**. \`content.js\` has **zero** Lighthouse/PageSpeed link. \`background.js\` admits it never knew what the file is for and re-runs \`content.js\` while declarative content scripts already load it. Perms: activeTab + scripting only. Rich Results / Mobile-Friendly get \`location.hostname\`. Five tools are static. hustlelaunch.com/assessment-toolbar returns **404**.

![Lighthouse gap](/blog/assessment-toolbar-chrome-mv3-lighthouse-missing-double-inject/screenshots/lighthouse-gap.png)

![Dual load](/blog/assessment-toolbar-chrome-mv3-lighthouse-missing-double-inject/screenshots/double-inject.png)

![URL bugs](/blog/assessment-toolbar-chrome-mv3-lighthouse-missing-double-inject/screenshots/url-bugs.png)

## Where

github.com/michaelmonetized/Assessment-Toolbar (public). Unpacked root. No CWS. No demo host. hustlelaunch.com root is live; product paths are not.

![Commit arc](/blog/assessment-toolbar-chrome-mv3-lighthouse-missing-double-inject/screenshots/commit-arc.png)

## When

**2024-08-16.** init + pre-flight.

**2024-08-22.** ready.

**2026-01-31.** STRIPE.md sync.

**2026-06-22.** nightly metadata; empty nightly HEAD \`9652620\` same day.

## Why

Assessment strip that advertises Lighthouse without shipping it, and a service worker that dual-loads while admitting it does not know its job.

**Engagement Q:** Add PageSpeed/Lighthouse and drop the dual-load SW tonight, or leave v1.0 lying in its own description?
`;

const FREVIEW_COVER =
  "/blog/freview-five-reviews-six-sections-observability-gate/cover.png";

const FREVIEW_CONTENT = `![Five marketed reviews vs six REVIEW.md sections](/blog/freview-five-reviews-six-sections-observability-gate/screenshots/six-sections.png)

## Who

I got tired of "we'll catch it in CI" turning into a Slack autopsy after \`main\` already moved. Pre-push should hurt a little when the tree is sketchy and stay quiet when it is clean.

For JS/TS teams (and anyone whose public symbols need docstrings across TS/Swift/Rust/Python/shell) who want one command, one durable \`REVIEW.md\`, and the same gate locally and on Blacksmith.

## What

I built **freview**, public [\`HurleyUS/freview\`](https://github.com/HurleyUS/freview). Package \`@hurleyus/freview\` **0.1.0**. MIT. zsh. \`bin/freview\` is **404** lines; bundled \`bin/scribe\` is **555**. HEAD \`23237d9\`. **22** commits. 0 stars. CLI / package only.

![CLI / section pipeline](/blog/freview-five-reviews-six-sections-observability-gate/screenshots/six-sections.png)

The README and \`TWITTER-RELEASE-THREAD.md\` still sell **"One command. Five reviews."** The orchestrator always appends **six** sections into root \`REVIEW.md\`:

1. **OBSERVABILITY**: embedded Python detects Next / React Native-Expo / Electron / Swift; requires Sentry + PostHog deps, init, and env-signal strings; if \`.vercel/project.json\` exists, \`vercel env ls production\` must show the DSN/key/host set. Library/tooling repos with no platform pass.
2. **HEALTH**: \`bunx --bun fallow … health --complexity\` (soft-pass when exit≠0 but no fail glyphs)
3. **AUDIT**: \`fallow audit\`
4. **DEAD**: \`fallow dead-code\`
5. **DUPLICATION**: \`fallow dupes\`
6. **DOCSTRINGS**: bundled \`scribe\` (not Michael's old \`~/bin/scribe\`)

Before any of that: \`fallow init\` + \`fallow setup-hooks\`, then freview rewrites the Claude \`fallow-gate.sh\` matcher from \`git commit|push\` to **\`git push\` only** so local commits stay unblocked.

Flags you actually use: \`--root\`, \`--format\`, \`--quiet\`, \`--explain\`, \`--summary\`, \`--ci\` (SARIF + quiet + fail-on-issues), \`--fail-on-issues\`. Clean runs write the file and shut up. Dirty runs print the report and exit 1. Empty SARIF result sets do not fail CI mode.

![Observability platforms](/blog/freview-five-reviews-six-sections-observability-gate/screenshots/observability-platforms.png)

Install paths: curl both bins into \`~/bin\`, clone + symlink, or \`bunx github:HurleyUS/freview\` / \`bun link\`. Pre-push snippet in the README only fires on protected \`main\`/\`master\` refs.

Residue / irony: shell-only package (\`scripts.lint\` and \`scripts.check\` are literally \`true\`), yet \`.github/workflows/ci.yml\` still installs zsh and runs \`bunx --bun github:HurleyUS/freview --ci\` on \`blacksmith-4vcpu-ubuntu-2404\`. May 14 is seven commits all titled **"Standardize Blacksmith CI gates."** May 14 also briefly committed generated Claude hooks, deleted them seventeen minutes later, then re-tracked them a week later. Second June 22 nightly (\`23237d9\`) shares the exact tree with the \`.uncap\` nightly: empty HEAD.

![Blacksmith CI self-review](/blog/freview-five-reviews-six-sections-observability-gate/screenshots/ci-blacksmith.png)

## Where

Code: [github.com/HurleyUS/freview](https://github.com/HurleyUS/freview), public, branch \`main\`. No homepage. No live web demo. Sibling tooling surface: Fallow + Claude Code hooks + Blacksmith runners.

## When

**2026-05-13, 1:41–1:51 PM Eastern.** Init (150-line freview), Twitter thread, bundle scribe + package.json.

**2026-05-13, 7:23–8:06 PM Eastern.** Observability gate, then platform-aware rewrite (Next/RN/Electron/Swift + Vercel env).

**2026-05-14 afternoon Eastern.** Blacksmith CI standardization spam, empty SARIF handling, avoid oxlint on shell-only, hook churn, prettier CI commit.

**2026-05-21 morning Eastern.** Empty health soft-pass (PR #1), track fallow Claude hook, push-only gate + freview rewriter.

**2026-06-22, 5:20 PM Eastern.** \`8fd392a\` nightly: \`.uncap/config.json\`.

**2026-06-22, 6:12 PM Eastern.** \`23237d9\` nightly: empty tree. HEAD.

![Commit arc](/blog/freview-five-reviews-six-sections-observability-gate/screenshots/commit-arc.png)

## Why

Terminal scrollback is a graveyard. \`REVIEW.md\` survives. "Five reviews" was the pitch; observability became the sixth section the docs never renumbered. A pre-push hook that also rewrites your Claude gate to push-only is the boring guardrail I actually leave installed.

**Engagement Q:** If your pre-push suite marketed five checks, which sixth gate would you sneak in first: observability, license, or "did CI prettier already fight you"?
`;

const HUSTLECONVERT_COVER =
  "/blog/hustleconvert-com-eight-dollar-popup-lander-nxdomain/cover.png";

const HUSTLECONVERT_CONTENT = `![Home hero](/blog/hustleconvert-com-eight-dollar-popup-lander-nxdomain/screenshots/home-hero.png)

## Who

I keep a private GitHub org full of product shells. Some are real apps. Some are landers that talk like apps.

For operators who need the honest split between an **$8/mo popup marketing site** and a claimed \`app.\` / CDN product that is not in this repo. Same org also holds email and helpdesk \`$8\` landers; this one is the popup lane.

## What

I built **hustleconvert-com**, private https://github.com/michaelmonetized/hustleconvert-com. Next.js marketing shell. HEAD \`a5d3f13\`. **3** commits. 0 stars. package name \`hustleconvert.com@0.1.0\`. README is stock create-next-app.

Stack facts from \`package.json\`: Next **16.2.6**, React **19.2.6**, Tailwind **^4.3.0**, Bun lockfile. Dependencies stop there: no Clerk, no Convex, no Stripe package, no popup runtime SDK.

What the UI claims:

- Hero: Popups that **don't annoy**. Badge: **Now with A/B testing.** CTAs to \`https://app.hustleconvert.com/signup\` and \`/templates\`.
- Trial strip: **14-day free trial · No credit card required**.
- Features: visual builder, smart triggers (exit-intent / scroll / time / click), display rules, A/B, analytics, **50+** templates.
- Competitor table: OptinMonster \`$20+/mo\`, Sumo \`$49+/mo\`, HustleConvert **\`$8/mo\`** with Unlimited Popups + No Branding checked.
- Pricing: **Free** (1 campaign / 1,000 impressions), **Pro $8/mo**, **Team $24/mo**. Annual Pro copy: **$80/year**.
- FAQ text says Stripe (+ Team invoicing); still no Stripe in deps.
- Brand: Tailwind \`brand.500 = #0ea5e9\`, \`accent.500 = #8b5cf6\`.
- Docs Quick Install snippet points at \`https://cdn.hustleconvert.com/v1/hc.min.js\`.

![Pricing plans](/blog/hustleconvert-com-eight-dollar-popup-lander-nxdomain/screenshots/pricing-plans.png)

![Competitor table](/blog/hustleconvert-com-eight-dollar-popup-lander-nxdomain/screenshots/competitor-table.png)

Real \`page.tsx\` routes: \`/\`, \`/pricing\`, \`/templates\`, \`/docs\`.

Linked but **missing**: footer \`/blog\`, \`/help\`, \`/about\`, \`/contact\`, \`/privacy\`, \`/terms\`, \`/docs/changelog\`, \`/docs/api\`, and the docs children (\`/docs/quickstart\`, \`/docs/exit-intent\`, \`/docs/api/campaigns\`, …). \`/docs\` is an index of cards pointing at pages that do not exist. Auth is externalized to **\`app.hustleconvert.com\`** (not a local \`/signup\` route).

![Docs dead links](/blog/hustleconvert-com-eight-dollar-popup-lander-nxdomain/screenshots/docs-dead-links.png)

![Missing routes](/blog/hustleconvert-com-eight-dollar-popup-lander-nxdomain/screenshots/missing-routes.png)

Sibling \`$8\` landers in the same org: hustlemail-com (email), hustledesk-com (helpdesk), hustleforms-com (forms).

## Where

Code: [github.com/michaelmonetized/hustleconvert-com](https://github.com/michaelmonetized/hustleconvert-com), private.

Live probes at pack time:

- \`hustleconvert-com.vercel.app\` / \`hustleconvert.vercel.app\`: **404** \`DEPLOYMENT_NOT_FOUND\`
- \`hustleconvert.com\`: **NXDOMAIN** (no A/AAAA)
- \`app.hustleconvert.com\`: **NXDOMAIN**

Local inspect clone: \`/tmp/cf-inspect/hustleconvert-com\` @ \`a5d3f13\`.

## When

**2026-02-18 07:57 ET.** \`691b4b4\` feat: initial hustleconvert.com marketing site (+2526 / 24 files).

**2026-06-22 17:13 ET.** \`e97591f\` nightly (Fallow hooks, AGENTS.md, REVIEW.md, \`.uncap\`, dep bumps).

**2026-06-22 18:11 ET.** \`a5d3f13\` nightly empty tip (HEAD).

![Commit arc](/blog/hustleconvert-com-eight-dollar-popup-lander-nxdomain/screenshots/commit-arc.png)

## Why

A lander that prices against OptinMonster still needs a resolvable product surface before it is a product story. \`app.\` and \`cdn.\` strings in JSX are marketing copy, not a shipped runtime. NXDOMAIN is a cleaner failure mode than a parked WordPress front page; it is still not a launch.

**Engagement Q:** How many of your $8/mo SaaS repos are four marketing pages pointing at an NXDOMAIN \`app.\` subdomain?
`;

const HUSTLECRM_COVER =
  "/blog/hustlecrm-com-eight-per-user-crm-lander-legacy-php-domain/cover.png";

const HUSTLECRM_CONTENT = `![Home hero](/blog/hustlecrm-com-eight-per-user-crm-lander-legacy-php-domain/screenshots/home-hero.png)

## Who

I keep a private GitHub org full of product shells. Some are real apps. Some are landers that talk like apps. Some claim a domain that answers something else entirely.

For operators who need the honest split between a **$8/user CRM marketing site** and the **legacy PHP Bootstrap login** currently living at hustlecrm.com.

## What

I built **hustlecrm-com**, private \`https://github.com/michaelmonetized/hustlecrm-com\`. Next.js marketing shell. HEAD \`2c50bbb\`. **3** commits. 0 stars. package name \`hustlecrm.com@0.1.0\`. README is **stock** create-next-app boilerplate.

Stack facts from \`package.json\`: Next **16.2.6**, React **19.2.6**, Tailwind **^4.3.0**, Bun lockfile. Dependencies stop there: no Clerk, no Convex, no Stripe package, no CRM/database library.

What the UI claims:

- Hero: "CRM for People Who **Hate CRMs**." Subhead close deals. Price line **Simple. Fast. $8/mo.**
- CTAs: **Start Free Trial** \`href="#"\`, **See Features** \`/features\`. Header **Sign in** \`href="#"\`.
- Home **KanbanDemo**: Lead, Contacted, Proposal, Negotiation, Won. Sarah Chen / Emma Wilson / David Kim deal cards with drag-drop. Chrome UI, not a product screenshot.
- Feature grid: Contact & Company Management, Deal Pipeline (Kanban), Activity Timeline, Custom Fields, Import & Export, Integrations (HustleChat / HustleForms).
- Competitor cards: HubSpot \`$45+/mo\`, Pipedrive \`$14+/mo\` vs HustleCRM **\`$8/mo\`**, **per user**, cancel anytime.
- Pricing: **Free Trial** $0 / 14 days + **Pro** **$8 /user/month**; table adds Salesforce \`$25+/mo\`.
- Brand blue: CSS \`--primary = #2563eb\` / \`--primary-dark = #1d4ed8\`.

![Kanban demo](/blog/hustlecrm-com-eight-per-user-crm-lander-legacy-php-domain/screenshots/kanban-demo.png)

![Pricing Pro $8/user](/blog/hustlecrm-com-eight-per-user-crm-lander-legacy-php-domain/screenshots/pricing-pro.png)

![Competitor table](/blog/hustlecrm-com-eight-per-user-crm-lander-legacy-php-domain/screenshots/competitor-table.png)

Real \`page.tsx\` routes: \`/\`, \`/features\`, \`/pricing\`, \`/docs\`.

Linked but **dead in-repo**: **25** \`href="#"\` hits across header, footer, home, pricing, features, docs (Sign in, trial, Changelog, Privacy, Terms, every docs child, API docs, support). No \`/privacy\` or \`/terms\` pages. Docs shows REST endpoint cards (\`/api/v1/contacts\`, \`/api/v1/deals\`, …) with no backend.

![Docs dead hash links](/blog/hustlecrm-com-eight-per-user-crm-lander-legacy-php-domain/screenshots/docs-dead-links.png)

![Missing routes + PHP domain](/blog/hustlecrm-com-eight-per-user-crm-lander-legacy-php-domain/screenshots/missing-routes.png)

Sibling landers stay separate stories: \`hustledesk-com\` is the **helpdesk** $8 **flat** lander (sky \`#0ea5e9\`, Zendesk comparison, auth to \`app.*\` to WordPress parking). \`hustlemail-com\` is the **email-marketing** $8 lander (red \`#ef4444\`, Free/$8/$24). Different product claim. Different brand. Different domain failure mode.

## Where

Code: [github.com/michaelmonetized/hustlecrm-com](https://github.com/michaelmonetized/hustlecrm-com), private.

Live probes at pack time:

- \`hustlecrm.com\` DNS A **162.144.3.43**; HTTPS **200** Apache + \`PHPSESSID\`; title **Hustle CRM!**; Bootstrap **5.3** form \`POST scripts/login.php\` returns **302** \`index.php?error=no\`; \`assets/cover.jpg\` Last-Modified **2023-04-17**. That host serves the legacy PHP login, while this Next CRM lander never shipped there.
- \`www.hustlecrm.com\` same A / same PHP login
- \`app.hustlecrm.com\` **NXDOMAIN**
- \`hustlecrm-com.vercel.app\` / \`hustlecrm.vercel.app\` **404** \`DEPLOYMENT_NOT_FOUND\`

Local inspect clone: \`/tmp/cf-inspect/hustlecrm-com\` @ \`2c50bbb\`.

## When

**2026-02-18 07:53 ET** \`f4494f2\` feat: initial hustlecrm.com marketing site (+2566 / 23 files).

**2026-06-22 17:12 ET** \`208c547\` nightly (Fallow hooks, AGENTS.md, REVIEW.md, \`.uncap\`, dep bumps).

**2026-06-22 18:11 ET** \`2c50bbb\` nightly empty tip (HEAD).

![Commit arc](/blog/hustlecrm-com-eight-per-user-crm-lander-legacy-php-domain/screenshots/commit-arc.png)

## Why

A HubSpot-price lander still needs an auth surface that is more than \`href="#"\` while the public domain serves a 2023 PHP login. "$8 per user, all features included" on a four-page private repo is table copy, not a billed product. hustledesk-com already told the $8 lander story for **helpdesk + WordPress parking**. This pack is the **CRM** twin with **per-user** pricing and a **legacy PHP** domain.

**Engagement Q:** How many of your SaaS domains currently serve a Bootstrap PHP login from 2023 while the Next marketing shell never shipped and every "Start Free Trial" button is a hash?
`;

const HUSTLEFORMS_COVER =
  "/blog/hustleforms-com-eight-dollar-crm-form-lander-nxdomain/cover.png";

const HUSTLEFORMS_CONTENT = `![Home hero](/blog/hustleforms-com-eight-dollar-crm-form-lander-nxdomain/screenshots/home-hero.png)

## Who

I keep a private GitHub org full of product shells. Some are real apps. Some are landers that talk like apps.

For operators who need the honest split between an **$8/mo form-builder marketing site** and a claimed CRM/embed product that is not in this repo. Same org also holds popup, email, and helpdesk \`$8\` landers; this one is the forms lane.

## What

I built **hustleforms-com**, private https://github.com/michaelmonetized/hustleforms-com. Next.js marketing shell. HEAD \`80c54f4\`. **3** commits. 0 stars. package name \`hustleforms.com@0.1.0\`. README is stock create-next-app.

Stack facts from \`package.json\`: Next **16.2.6**, React **19.2.6**, Tailwind **^4.3.0**, Bun lockfile. Dependencies stop there: no Clerk, no Convex, no Stripe package, no form runtime SDK, no HubSpot/Salesforce client.

What the UI claims:

- Hero: Forms that feed **your CRM**. Badge: **Now with AI-powered form suggestions.** CTAs to \`/signup\` and \`/templates\`.
- Strip: **No credit card required · Free plan available**.
- Features: drag-and-drop builder, conditional logic, file uploads, embed anywhere, webhooks, **Direct CRM Sync** (HubSpot / Salesforce / Pipedrive).
- Home competitor cards: Typeform \`$29+\`, Jotform \`$34+\`, Wufoo \`$19+\`, HustleForms **\`$8\`** BEST VALUE.
- Pricing table: Unlimited forms / 10,000 submissions / CRM / remove branding at **$8/mo** vs Typeform \`$29\` / Jotform \`$34\`.
- Pricing plans: **Free** (3 forms / 100 submissions), **Pro $8/mo**, **Business $24/mo** (SSO/SAML, API, custom domains). Annual FAQ: **20% off** = \`$6.40\` / \`$19.20\`.
- FAQ text claims HubSpot/Salesforce/Pipedrive/Zoho + webhooks + 14-day trial; still no CRM or Stripe packages.
- Brand: Tailwind \`brand.500 = #0ea5e9\`, \`accent.500 = #8b5cf6\` (same sky+violet tokens as hustleconvert-com).
- Docs embed snippet: \`<script src="https://hustleforms.com/embed/YOUR_FORM_ID.js"></script>\`.

![Pricing plans](/blog/hustleforms-com-eight-dollar-crm-form-lander-nxdomain/screenshots/pricing-plans.png)

![Competitor table](/blog/hustleforms-com-eight-dollar-crm-form-lander-nxdomain/screenshots/competitor-table.png)

Real \`page.tsx\` routes: \`/\`, \`/pricing\`, \`/templates\`, \`/docs\`.

Linked but **missing**: \`/signup\`, \`/login\`, \`/contact\`, and footer \`#\` stubs (Integrations, Blog, Changelog, About, Privacy, Terms, API Reference). \`/docs\` is a single page of **hash-anchor** cards (not separate child routes) plus resource links that are literally \`href="#"\`. Auth is a local route that was never added; \`app.hustleforms.com\` is also NXDOMAIN.

![Docs hash anchors](/blog/hustleforms-com-eight-dollar-crm-form-lander-nxdomain/screenshots/docs-hash-anchors.png)

![Missing routes](/blog/hustleforms-com-eight-dollar-crm-form-lander-nxdomain/screenshots/missing-routes.png)

Sibling \`$8\` landers in the same org: hustleconvert-com (popups), hustlemail-com (email), hustledesk-com (helpdesk).

## Where

Code: [github.com/michaelmonetized/hustleforms-com](https://github.com/michaelmonetized/hustleforms-com), private.

Live probes at pack time:

- \`hustleforms-com.vercel.app\` / \`hustleforms.vercel.app\`: **404** \`DEPLOYMENT_NOT_FOUND\`
- \`hustleforms.com\`: **NXDOMAIN** (no A/AAAA)
- \`www.hustleforms.com\` / \`app.hustleforms.com\` / \`cdn.hustleforms.com\`: **NXDOMAIN**

Local inspect clone: \`/tmp/cf-inspect/hustleforms-com\` @ \`80c54f4\`.

## When

**2026-02-18 07:53 ET.** \`a516ca1\` feat: initial hustleforms.com marketing site (+2486 / 24 files).

**2026-06-22 17:11 ET.** \`7b5aeb9\` nightly (Fallow hooks, AGENTS.md, REVIEW.md, \`.uncap\`, dep bumps).

**2026-06-22 18:10 ET.** \`80c54f4\` nightly empty tip (HEAD).

![Commit arc](/blog/hustleforms-com-eight-dollar-crm-form-lander-nxdomain/screenshots/commit-arc.png)

## Why

A lander that prices against Typeform still needs a resolvable product surface before it is a product story. HubSpot/Salesforce strings in JSX and an embed script on an NXDOMAIN apex are marketing copy, not a shipped runtime. Relative \`/signup\` with no \`page.tsx\` is a quieter failure mode than an \`app.\` subdomain; it is still not a launch.

**Engagement Q:** How many of your forms-that-feed-your-CRM repos are four marketing pages where Start Free points at a route that does not exist?
`;

const NEOVIM_IDE_COVER =
  "/blog/neovim-ide-tmux-gigachad-layout-cursor-agent/cover.png";

const NEOVIM_IDE_CONTENT = `![tmux IDE grid: Agent | Neovim | Tasks/Git + Console/Terminal](/blog/neovim-ide-tmux-gigachad-layout-cursor-agent/screenshots/layout-ascii.png)

## Who

I wanted a **project IDE** without buying another Electron shell: open a folder, get Neovim in the middle, and already have an agent, Taskwarrior, LazyGit, and spare shells in panes around it.

If you live in tmux + NvChad, you already know the ritual: split, title, send-keys, forget which pane had lazygit. I wanted that ritual to be one command.

This is the **outer** layout story. The sibling **nvibe** pack is the **inner** Neovim one (Lua + \`nvchad.term\`). Different repos. Different layers. Same operator itch.

## What

I keep [michaelmonetized/neovim-ide](https://github.com/michaelmonetized/neovim-ide) public. GitHub linguist says JavaScript. The product that actually lays out panes is **~7.5 KB of zsh** under \`src/\`.

\`src/neovim-ide.sh\` is the entry: sanitize a session name from argv, basename, or \`.neovim\` JSON \`.name\` via \`jq\`; offer attach/rename if the session exists; \`tmux new -s\` detached; \`cd\` into the project; then fire \`~/.local/bin/nvide-layout\` and \`~/.local/bin/nvide-init\`.

The banner at the top of that file still draws the intended grid:

\`\`\`
- ollama -|- nvim ---------------------|- Tasks -
- ChtSh - |                            |- Git ---
          |- Console ----|- Terminal - |
\`\`\`

\`src/neovim-ide-layout.sh\` splits and titles panes: Agent, Cheatsheet, Neovim, Tasks, Git, Console, Terminal. It aliases \`tmux\` to **\`/opt/homebrew/bin/tmux\`** (Homebrew-shaped, not portable).

\`src/neovim-ide-init.sh\` is where the honesty check bites: it \`send-keys\` **\`cursor-agent\`** into the Agent pane (banner still says ollama), starts \`nvim\` on pane 2, \`task list && tasksh\` on Tasks, \`lazygit\` on Git when \`.git\` exists, then sleeps and punches \`:Minimap\` + \`C-n\` for nvim-tree.

![MIT vs GPL-3.0 vs ISC](/blog/neovim-ide-tmux-gigachad-layout-cursor-agent/screenshots/license-gap.png)

License stack at HEAD \`38ed773\`:

- README footer + script header: **MIT**
- \`LICENSE.md\`: full **GNU GPL v3** text (GitHub \`licenseInfo\` agrees)
- \`ts/package.json\`: **\`"license": "ISC"\`**, version **1.0.0**

\`install.sh\` is **0 bytes**. README still says it moves \`src/\` to \`~/bin/\`, config to \`~/.config/neovim-ide/\`, and links \`nvide-*\` into \`~/.local/bin\`. Without that, the entry script's \`nvide-layout\` / \`nvide-init\` calls are wishful.

TypeScript side: \`ts/cli.tsx\` is an Ink path wizard (123 lines). It can \`mkdir\` or \`execa('mkproject', …)\`. It never calls \`tmux\`. On success it prints Project path ready and exits. \`ts/neovim-ide.mjs\` is a **1.7MB** React/Ink-style bundle. \`ts/REVIEW.md\` is a FALLOW dump over that bundle (Total LOC 39772, Dead Files 100%, CRAP scores in the tens of thousands on React internals). About **4095** tracked paths live under \`ts/node_modules/\`; only **29** tracked files sit outside it.

\`PLAN.md\` (Jan 2026) lists Critical Core IDE Features (LSP, nvim-cmp, Treesitter, neo-tree, Telescope) as if this repo were a Neovim config. It is not. \`sitrep.md\` says Status **SHIPPED**, stack Shell, Lua, last commit **2026-01-31**, Fully functional. HEAD is a June 22 nightly.

![docs vs shipped: PLAN / install / CLI](/blog/neovim-ide-tmux-gigachad-layout-cursor-agent/screenshots/docs-vs-shipped.png)

\`src/neovim-ide-tmux.sh\` is the fzf project picker over \`$HOME/Projects/\` with a shebang typo: \`#1/usr/bin/env zsh\`. Config default: \`ide_project_path="$HOME/Projects/"\`.

## Where

Code: [github.com/michaelmonetized/neovim-ide](https://github.com/michaelmonetized/neovim-ide), **public**. Stars: 0. No homepage URL. No hosted demo.

Runtime expectations from the tree/header: tmux, jq, mkproject, lazygit, ollama (still listed), tasksh, Neovim 0.9+ / NvChad, optional minimap + nvim-tree. Bun only if you insist on the Ink CLI.

Screenshots section in README is still a TODO stub.

## When

- **2024-08-25–28.** \`2b79f59\` mkproject scaffold, then \`57e0164\` initial commit, then \`.neovim\` session-name support (\`f159d67\`, retrievin), then \`5290d69\` tmux support. Four commits; the shell layout product lands.
- **2026-01-08.** \`d81f21b\` PLAN.md improvement opportunities (LSP wishlist).
- **2026-01-31.** \`52f0e4a\` chore sync (sitrep still points here).
- **2026-02-27.** \`915f5d6\` README install instructions + structure (still describing empty \`install.sh\`).
- **2026-06-22.** \`2976b7e\` / HEAD \`38ed773\` nightlies. Last push \`2026-06-22T21:56:52Z\`. **9** commits total.

![9-commit arc](/blog/neovim-ide-tmux-gigachad-layout-cursor-agent/screenshots/commit-arc.png)

## Why

My IDE was already panes I pay for: tmux, nvim, lazygit, an agent CLI. I wanted one command that refuses to start a project session half-empty. Keep the diary honest: the ASCII still says ollama while init starts cursor-agent; the license badges disagree; the installer file is empty; the Ink CLI is a path form, not a launcher; PLAN.md dreams of an LSP IDE this repo is not. Leave those in the draft next to the GIGACHAD one-liner.

**Engagement Q:** Would you trust a GIGACHAD of NvChad launcher whose banner still says **ollama**, whose init starts **cursor-agent**, whose README says **MIT** while \`LICENSE.md\` is **GPL-3.0**, and do you want that layout **outside** Neovim in tmux, or **inside** via something like nvibe?
`;

const NEW_DESIGN_GALLERY_COVER =
  "/blog/new-design-gallery-embla-catalog-not-landers/cover.png";

const NEW_DESIGN_GALLERY_CONTENT = `![Design Gallery home with Embla strip and category filters](/blog/new-design-gallery-embla-catalog-not-landers/screenshots/gallery-home.png)

## Who

I needed a catalog — filter, scroll, lightbox, share a slug — not another tabbed full-lander kit.

Frontenders on Next 16 + Embla. Operators comparing this private catalog to public mockup-gallery. Not twelveux. Not the WebGL playground.

## What

Package \`new-design-gallery\` **0.1.0**. Next 16. React 19. Tailwind 4.

\`DesignGallery\`: Embla carousel + category filters + Radix lightbox + Phosphor share (\`navigator.share\` → clipboard). Eleven metadata cards in \`designs.ts\` — hospitality, contractors (incl. King's Roofing NC), professionals, SaaS. All thumbs \`placeholder.co/800x600\`. Detail routes via \`generateStaticParams\`. Golden-ratio + Catppuccin CSS. Vitest **39** cases; length assert still says **10** after the 11th card.

![Embla carousel strip](/blog/new-design-gallery-embla-catalog-not-landers/screenshots/embla-carousel.png)

## Where

Live: https://new-design-gallery.vercel.app — title Design Gallery.

Repo: https://github.com/michaelmonetized/new-design-gallery (private).

Sibling contrast: HurleyUS/mockup-gallery · mockup-gallery-nu.vercel.app (ten full landers / tabs).

![Contractors filter](/blog/new-design-gallery-embla-catalog-not-landers/screenshots/contractors-filter.png)

## When

**2026-03-28, 10:52 PM ET.** \`a968bd6\` — carousel, filters, lightbox, share, 39 tests.

**2026-06-22, 4:55 PM ET.** \`9558f07\` — AGENTS/uncap/CSS + King's Roofing NC.

**2026-06-22, 5:57 PM ET.** HEAD \`95553df\` — empty nightly. Three commits. Still 0.1.0.

## Why

Catalog UX vs lander kit. Same March 28 era, different product. Placeholder thumbs until real art. Test drift is the scar.

What belongs on card eleven — another contractor, or a real screenshot?

![Detail Mountain Lodge](/blog/new-design-gallery-embla-catalog-not-landers/screenshots/detail-mountain-lodge.png)
`;

const WHISPERCPP_COVER =
  "/blog/whispercpponeverything-ctrl-w-streaming-stt-cyan-glow/cover.png";

const WHISPERCPP_CONTENT = `![OG / menubar streaming](/blog/whispercpponeverything-ctrl-w-streaming-stt-cyan-glow/screenshots/menubar-streaming.png)

## Who

I build local tooling when cloud dictation is the wrong trust boundary.

For operators who want **Ctrl+W anywhere** to type into the focused field with **whisper.cpp on the machine**, and who need the honest split between the **streaming HEAD** and the **batch/orange README** still sitting in the same private repo.

## What

I built **WhisperCPPonEverything**, private [\`michaelmonetized/WhisperCPPonEverything\`](https://github.com/michaelmonetized/WhisperCPPonEverything). Native macOS **menubar** (\`LSUIElement\`) Swift Package executable. HEAD \`d33e5e2\`. **11** commits. 0 stars. Bundle \`com.whispercpponeverything.app\` **2.0.0**. Renamed from **VoiceType**.

Stack facts from \`Package.swift\` + sources:

- Platforms: **macOS 14+**
- Frameworks only: AppKit, CoreGraphics, ApplicationServices. **Zero SPM dependencies.**
- Hotkey: **Ctrl+W** via \`CGEvent\` tap (active session, then listenOnly, then HID listenOnly fallback)
- macOS **15+**: \`CGPreflightListenEventAccess\` / \`CGPreflightPostEventAccess\` + request APIs before tap create
- Transcription: subprocess \`/opt/homebrew/bin/whisper-stream\` with model \`/opt/homebrew/share/whisper-cpp/models/ggml-medium.bin\`, args \`-l en --step 3000 --length 5000 --keep 200\`
- Incremental inject: strip ANSI + \`[timestamp]\` prefixes, **suffix-prefix overlap dedupe**, then \`TextInjector\` Unicode \`CGEvent\` keystrokes (5ms between chars)
- Visual: fullscreen \`.screenSaver\` overlay, **cyan** 20-layer soft glow, 1.5Hz pulse, \`ignoresMouseEvents\`
- State machine: **\`idle\` / \`streaming\` only** (\`State.swift\`)
- Logging: \`~/Library/Logs/WhisperCPPonEverything.log\`
- Checked-in \`WhisperCPPonEverything.app\` with **arm64 Mach-O** binary

![Pipeline](/blog/whispercpponeverything-ctrl-w-streaming-stt-cyan-glow/screenshots/pipeline.png)

![Cyan glow](/blog/whispercpponeverything-ctrl-w-streaming-stt-cyan-glow/screenshots/cyan-glow.png)

What the README still claims (stale vs HEAD):

- Orange screen glow while listening
- **Silence detection** ends recording after 5 seconds
- Batch-style speak, stop, then transcribed text is typed

What CLAUDE.md + Swift say at HEAD: cyan soft glow, toggle stop, **streaming** text as whisper-stream prints lines. PLAN.md still names \`AudioRecorder.swift\` / \`Transcriber.swift\`. Those files are not in the tree. TODO.md phases are all unchecked. StatusItem streaming mic is still **\`.systemOrange\`** next to a cyan overlay.

![Stale docs gap](/blog/whispercpponeverything-ctrl-w-streaming-stt-cyan-glow/screenshots/stale-docs-gap.png)

![Permissions triad](/blog/whispercpponeverything-ctrl-w-streaming-stt-cyan-glow/screenshots/permissions-triad.png)

Distinct from \`niri-macos\` (Swift AX tiling) and from SaaS dictation landers. Local Homebrew whisper-stream or the app alerts that whisper-cpp is missing.

## Where

Code: [github.com/michaelmonetized/WhisperCPPonEverything](https://github.com/michaelmonetized/WhisperCPPonEverything), private.

Runtime probes at pack time: no public web product. Install path documented as \`swift build -c release\` then copy into \`/Applications/WhisperCPPonEverything.app/Contents/MacOS/\` + ad-hoc \`codesign\`. CLAUDE note: **each new binary invalidates TCC**. Remove and re-add Accessibility.

Required on disk: \`whisper-stream\` + \`ggml-medium.bin\` under Homebrew paths above.

## When

- **2026-02-15.** PLAN/README/TODO, rename, sources build, VoiceType rename, whisper-cli path fixes, app bundle, **cyan instead of orange**.
- **2026-02-16.** \`92bb411\` streaming STT + soft glow + macOS 15+ permission support.
- **2026-06-22.** Two \`nightly\` commits; HEAD \`d33e5e2\` (also last GitHub push).

![Commit arc](/blog/whispercpponeverything-ctrl-w-streaming-stt-cyan-glow/screenshots/commit-arc.png)

## Why

I wanted dictation that stays on-box and types into whatever already has focus (Slack, terminal, browser) without a cloud STT round-trip. Ctrl+W was the whole UX. Streaming beat record-a-WAV-then-wait. Cyan beat ugly orange. Sequoia event-access APIs were the tax for keeping the tap alive.

**Engagement Q:** How many private STT menubar apps still advertise orange silence-batch in README while HEAD streams cyan into the focused field?

Draft + assets only until Michael publishes.
`;

const BUFFER_CLI_COVER =
  "/blog/buffer-cli-wpzinc-parity-agent-oauth-no-scrape/cover.png";

const BUFFER_CLI_CONTENT = `## Who

I wanted Buffer scheduling without WordPress and without cookie-scraping CLIs.

For people who already know WPZinc wp-to-buffer-pro and want the same OAuth + config shape outside PHP.

## What

I built **buffer-cli**, public https://github.com/michaelmonetized/buffer-cli. HEAD \`778ecaf\`. **3** commits. **0** stars. Default **main**. Version **0.1.0** (CHANGELOG still **[Unreleased]**). CLI only.

**Shipped (~1892 LOC):** auth, profiles, post, config, tags, info. Bun + commander.

![CLI post / profiles](/blog/buffer-cli-wpzinc-parity-agent-oauth-no-scrape/screenshots/cli-post-profiles.png)

![OAuth WPZinc flow](/blog/buffer-cli-wpzinc-parity-agent-oauth-no-scrape/screenshots/oauth-wpzinc-flow.png)

**Gateway:** Buffer to wpzinc OAuth to localhost:9876 to \`~/.buffer-cli\`. X-Forwarded-Host www.hustlelaunch.com.

**Parity:** types/config match wp-to-buffer-pro; template tags \`{title}\` \`{url}\` \`{excerpt}\`.

![Docs vs shipped](/blog/buffer-cli-wpzinc-parity-agent-oauth-no-scrape/screenshots/readme-parity-gap.png)

**Gaps:** no queue.ts; no \`--from\`; token refresh TODO; PLAN mostly unchecked; FALLOW postCommand CRAP 1190.

![Architecture](/blog/buffer-cli-wpzinc-parity-agent-oauth-no-scrape/screenshots/architecture-stack.png)

## Where

Code: https://github.com/michaelmonetized/buffer-cli, public. No live web app.

\`\`\`bash
bun install && bun run src/index.ts
\`\`\`

## When

**2026-02-16.** \`9b53095\` feat: initial implementation (+3097 LOC).

**2026-06-22.** \`95fe1c3\` nightly: fallow-gate + REVIEW.md.

**2026-06-22.** \`778ecaf\` nightly to HEAD.

![Commit arc](/blog/buffer-cli-wpzinc-parity-agent-oauth-no-scrape/screenshots/commit-arc.png)

## Why

Buffer's own CLI is gone, and scraping gets you banned. This keeps the WPZinc OAuth + config shape in Bun so agents can schedule without PHP or cookie jars.

**Engagement Q:** Cut README to match HEAD, or finish queue.ts first?
`;

const HUSTLECHAT_COVER =
  "/blog/hustlechat-com-intercom-alt-convex-claims-parkweb/cover.png";

const HUSTLECHAT_CONTENT = `![Home hero](/blog/hustlechat-com-intercom-alt-convex-claims-parkweb/screenshots/home-hero.png)

## Who

I keep private product shells. Some ship. Some land. Some claim Convex without importing it.

For operators comparing a **live-chat Intercom-alternative lander** to the **GoDaddy parkweb page** answering hustlechat.com.

## What

I built **hustlechat-com** — private michaelmonetized/hustlechat-com. HEAD \`a570134\`. 3 commits. package hustlechat.com@0.1.0. Stock README.
Stack: Next 16.2.6 + React 19.2.6 + Tailwind 4. Deps: next/react only — **no convex** despite copy claiming Convex real-time.
Pricing: Free $0 / Teams $8 / Premium $18 / Enterprise $28. Competitors: Intercom $74+ / Drift $2500+ / Crisp $25+.
Fake SDKs \`@hustlechat/*\` + cdn widget; Sign In buttons have no href; docs → app.hustlechat.com NXDOMAIN.
Brand \`#6366f1\`/\`#f472b6\`/\`#22d3ee\`. Routes: \`/\` \`/pricing\` \`/docs\`.

![Pricing](/blog/hustlechat-com-intercom-alt-convex-claims-parkweb/screenshots/pricing-flat.png)

![Competitors](/blog/hustlechat-com-intercom-alt-convex-claims-parkweb/screenshots/competitor-table.png)

![Fake SDK](/blog/hustlechat-com-intercom-alt-convex-claims-parkweb/screenshots/missing-routes.png)

Not hustlemail-com. Not hustledesk-com.

## Where

Code: github.com/michaelmonetized/hustlechat-com — private.
## When
2026-02-18 4db53a8 initial site. 2026-06-22 nightlies 9fec5f3 then HEAD a570134.
![Commit arc](/blog/hustlechat-com-intercom-alt-convex-claims-parkweb/screenshots/commit-arc.png)
## Why
Convex in the hero without convex in package.json. Fake SDKs. Parkweb domain. Not a live chat product.
**Engagement Q:** How many landers claim a backend they never added as a dependency?
- hustlechat.com JS redirect to /lander GoDaddy parkweb
- app + cdn NXDOMAIN; vercel DEPLOYMENT_NOT_FOUND
`;

const ANIMATED_GRADIENT_BORDER_COVER =
  "/blog/animated-gradient-border-transparent-mask-composite/cover.png";

const ANIMATED_GRADIENT_BORDER_CONTENT = `![Native demo frame](/blog/animated-gradient-border-transparent-mask-composite/screenshots/hero-native.png)

## Who

I wanted the usual glass card with a rotating gradient border, and I wanted to see the video plate through the middle of the ring. A filled conic disk sitting on top of the glass was the wrong shape for the lab.

For front-end operators who already know \`conic-gradient\` and still lose an afternoon when the border paints the whole card. Especially anyone comparing this lab to my Next.js glass-design-system \`AnimatedBorder\` and needing the bare CSS cut.

## What

I built **animated-gradient-border-on-transparent-background**, public [\`michaelmonetized/animated-gradient-border-on-transparent-background\`](https://github.com/michaelmonetized/animated-gradient-border-on-transparent-background). HEAD \`5e9b611\`. **5** commits. **0** stars. Language **CSS**. License **GPL-3**. README is **empty** (0 bytes). No version tag. No GitHub Pages. No homepage.

![Card anatomy](/blog/animated-gradient-border-transparent-mask-composite/screenshots/glass-card-anatomy.png)

Product is a static lab:

- \`index.html\`, 31 lines. Title: Glass Animated Gradient Border. Card classes: \`glass rounded border-gradient border-glow animate-rotate-angle\`.
- \`style.css\`, 448 lines (~8.9KB). The technique lives here.
- Plate: \`#hero\` + \`.video-bg\` pointing at a remote HustleLaunch webm (\`attraction-silent-backdrop.webm\`). Repo also carries local \`video.webm\` (~47MB) and \`bg.png\`.
- Toggle: fixed darklight checkbox flips ☀️/🌙 via \`--scheme\` and \`:has()\`.

The border trick:

1. \`::after\` paints a full-box \`conic-gradient(from var(--conic-gradient-angle), …)\`.
2. Dual masks, outer \`linear-gradient(#fff 0 0)\` plus inner \`content-box\`, with \`padding: var(--border-width)\`.
3. \`mask-composite: exclude\` / \`-webkit-mask-composite: xor\` keeps **only the ring**.

![mask-composite exclude](/blog/animated-gradient-border-transparent-mask-composite/screenshots/mask-xor-diagram.png)

Spin comes from CSS \`@property --conic-gradient-angle\` (syntax \`<angle>\`) and \`@keyframes background-spin\` 0deg to 360deg, applied to both \`::before\` (glow) and \`::after\` (ring) at 3s linear infinite. Glow uses a larger inset, \`filter: blur\`, and \`--intensity-glow\` (0.4 light / 0.2 dark).

Same file also ships experimental CSS \`@function --transparency\` / \`--light-dark\` wrapping \`color-mix\` and scheme branching.

![ @property spin + layers ](/blog/animated-gradient-border-transparent-mask-composite/screenshots/css-property-spin.png)

**Sibling fence:** [glass-design-system](https://github.com/michaelmonetized/glass-design-system) reuses the \`@property\` + mask border idea as \`AnimatedBorder\` inside a Next.js 16 Apple-SVG glass showcase. This repo is the bare static HTML/CSS lab. Separate from that product spine and from twelveux WebGL glass.

![Sibling vs glass-design-system](/blog/animated-gradient-border-transparent-mask-composite/screenshots/sibling-vs-glass-design.png)

Residue I am not papering over:

- Empty README.
- Native screenshot from 2026-01-29 still shows "Fork on GitHub" / "Download" and a "How it works?" skip link that current \`index.html\` no longer has.
- Two empty commits: second \`simplified\` shares tree with first; second \`nightly\` shares tree with first.
- \`video.webm\` in-tree while the page loads the remote URL.

## Where

Code: [github.com/michaelmonetized/animated-gradient-border-on-transparent-background](https://github.com/michaelmonetized/animated-gradient-border-on-transparent-background), public. Open \`index.html\` locally (needs network for the remote webm plate).

\`\`\`bash
git clone git@github.com:michaelmonetized/animated-gradient-border-on-transparent-background.git
open index.html   # or any static server
\`\`\`

## When

**2024-08-24.** \`8eeb210\` mkproject scaffold (editorconfig, prettier, GPL-3 LICENSE, empty README).

**2026-01-30.** \`95a48ad\` / \`de23de9\` "simplified": demo HTML/CSS + screenshot + bg + video; second commit empty.

**2026-06-22.** \`d087699\` / \`5e9b611\` nightly: \`.hustlemc\` + \`.uncap\`; second nightly empty. HEAD.

Repo GitHub \`created_at\` is 2026-01-30; the mkproject commit timestamp is 2024-08-24 (history carried in).

![Commit arc](/blog/animated-gradient-border-transparent-mask-composite/screenshots/commit-arc.png)

## Why

A gradient border that fills the card is a different product than a ring you can see through. \`mask-composite: exclude\` is the sentence that makes the middle transparent. The static lab should stay distinct from the Next.js glass design system that absorbed the same border pattern.

**Engagement Q:** Fill the empty README with the mask-xor recipe and retire the stale Fork/Download screenshot, or leave the repo as a raw lab and point operators at glass-design-system for the polished story?
`;

const SHAGENT_COVER =
  "/blog/shagent-bun-mcp-openrouter-after-zsh-harness-delete/cover.png";

const SHAGENT_CONTENT = `![OG / zsh to bun](/blog/shagent-bun-mcp-openrouter-after-zsh-harness-delete/screenshots/zsh-to-bun.png)

## Who

I wanted a shell-native agent that already knew my Zsh profile. Then I tore that harness out and put a Bun MCP controller in its place.

For operators who care about the honest split between a **deleted Zsh THOUGHT/COMMAND loop** and the **HEAD Bun + OpenRouter + filesystem MCP** stack under the same public repo name.

## What

I built **shagent**, public https://github.com/michaelmonetized/shagent. HEAD \`61ecd7d\`. **3** commits. **0** stars. Default **main**. \`package.json\` **1.0.0**. README is **0 bytes**.

**At HEAD (Bun / TypeScript):**

- Entry \`./shagent\` (\`#!/usr/bin/env bun\`): requires \`OPENROUTER_API_KEY\`; model \`SHAGENT_MODEL\` or **\`openrouter/free\`**
- \`Shagent\` in \`src/controller/shagent.ts\` (~79 LOC): MCP \`Client\` + \`StdioClientTransport\` running \`npx -y @modelcontextprotocol/server-filesystem\` on \`process.cwd()\`
- OpenRouter \`https://openrouter.ai/api/v1/chat/completions\` loop, **max 15** turns
- System prompt forces JSON: \`{"action":"tool_name","args":{...}}\` or \`{"message":"..."}\`; regex scrape \`/\{.*?\}/gs\`; \`client.callTool\`
- Sibling probe \`src/controller/index.ts\` lists tools from \`npx -y chrome-devtools-mcp\`; that probe is **not** what the CLI entry wires

![Agent loop](/blog/shagent-bun-mcp-openrouter-after-zsh-harness-delete/screenshots/agent-loop.png)

**Deleted on the Jun 22 rewrite (\`2ecb32f\`):** \`src/shagent.sh\`, **258** lines of Zsh.

What that harness did (still recoverable from \`0729083\`):

- Source \`~/.zshenv\` / \`.zprofile\` / \`.zshrc\` + optional \`.env\`
- Session \`-s/--session\` (default \`default\`)
- Deps: \`rg fd eza bat git jq curl … qmd mcp-cli\`
- Response contract: \`THOUGHT:\` / \`COMMAND:\` then \`eval\`
- Optional async \`qmd update\` / \`qmd embed\`
- Same OpenRouter free default

![Deleted Zsh harness](/blog/shagent-bun-mcp-openrouter-after-zsh-harness-delete/screenshots/zsh-harness.png)

**Fiction still in-tree:** \`index.html\` sells Launch, scale, and monitor autonomous AI agents with CTA to \`github.com/shagent/getting-started\` and footer **Rusty P. Shackelford**. Fiction only; no deploy; unwired to \`./shagent\`.

![Fiction lander](/blog/shagent-bun-mcp-openrouter-after-zsh-harness-delete/screenshots/fiction-lander.png)

**Residue:** \`stdout-test.txt\` (~116KB) is a shell-era OpenRouter request dump that still narrates Zsh + mcp-cli + qmd. Second nightly \`61ecd7d\` is an **empty** commit (message only).

Sibling surfaces to keep straight: \`orclawstrator\` (OpenClaw Swift/Go command center), \`mission-control\` / \`hurley-mission-control\`. This public repo is local Bun + npx MCP or it does not run.

## Where

Code: [github.com/michaelmonetized/shagent](https://github.com/michaelmonetized/shagent), public.

Run (facts from entry): set \`OPENROUTER_API_KEY\`, optional \`SHAGENT_MODEL\`, then \`./shagent 'task description'\` with Bun available. \`bun.lock\` present; no scripts block in \`package.json\`.

No live product URL. No claimed domain.

## When

- **2026-05-26.** \`0729083\` init: empty README + Zsh harness
- **2026-06-22 16:50 ET.** \`2ecb32f\` nightly: delete \`src/shagent.sh\`; add Bun controller, fiction HTML, stdout dump, uncap
- **2026-06-22 17:56 ET.** \`61ecd7d\` nightly: empty tree diff; HEAD
- Pack prepared **2026-09-08 ~4:55 PM ET** (draft + assets only)

## Why

I needed a minimal OpenRouter agent that could call tools. The Zsh version lived inside my shell profile. The Bun version talks MCP over stdio to a filesystem server and keeps the model choice on OpenRouter free by default. The marketing HTML and the empty README are the honesty tax sitting next to that loop.

**Engagement:** how many public agent repos still ship a fiction lander and a 0-byte README after deleting the shell harness that \`stdout-test.txt\` still describes?
`;

const MKPROJECT_COVER =
  "/blog/mkproject-bash-scaffold-template-git-init-runafter/cover.png";

const MKPROJECT_CONTENT = `![Scaffold flow](/blog/mkproject-bash-scaffold-template-git-init-runafter/screenshots/scaffold-flow.png)

## Who

I kept hand-rolling new folders and occasionally pushing a dotenv. The fix is a small bash scaffolder with .env in the template ignore list.

## What

**mkproject** — public michaelmonetized/mkproject. HEAD \`321012c\`. 9 commits. 76-line \`mkproject.sh\`. User template under ~/.config/mkproject. Dotenv knobs: PROJECT_DIR, BRANCH, COMMIT_MESSAGE, RUNAFTER, DISABLE_GIT. Default RUNAFTER is \`code .\`.

![Config env](/blog/mkproject-bash-scaffold-template-git-init-runafter/screenshots/config-env.png)

![Template tree](/blog/mkproject-bash-scaffold-template-git-init-runafter/screenshots/template-tree.png)

Template now ships package.json + index.js; README file list still says six hygiene files. Root MIT vs template GPL-3. No releases despite README v0.1.0 zip.

![License mismatch](/blog/mkproject-bash-scaffold-template-git-init-runafter/screenshots/license-mismatch.png)

Empty scaffolds mkproject-1 / 49 are SKIP — outputs of this tool, not products.

## Where

https://github.com/michaelmonetized/mkproject — public CLI. No site.

## When

Aug 2024 birth. Jan 2026 sync. Mar 2026 Node stub in template. Jun 2026 PLAN/uncap + empty HEAD tip.

![Commit arc](/blog/mkproject-bash-scaffold-template-git-init-runafter/screenshots/commit-arc.png)

## Why

The factory story belongs on the scaffolder, not the empty children. Dotenv-safe init is the boring win.

**Engagement Q:** Align template LICENSE with MIT, or document the GPL default as intentional?
`;

const NFGLYPH_COVER =
  "/blog/nfglyph-bun-ansi-nerd-font-picker-linux-quit/cover.png";

const NFGLYPH_CONTENT = `## Who

I wanted a glyph picker that stays in the TTY — vim motions, alt-buffer, Enter copies the character — without dragging in Ink, Blessed, or Bubble Tea.

For people who already installed a Nerd Font and are tired of opening a browser just to steal a powerline arrow.


## What

I built **nfglyph** — public https://github.com/michaelmonetized/nfglyph. HEAD \`1dfdc82\`. **4** commits. **0** stars. Default **main**. Version **Unreleased** (sitrep still says **SHIPPED**). CLI/TTY only. Single file \`nfglyph\` (~431 LOC) on Bun. **No** package.json.

**v1 (\`0c91b0d\`, Jan 30):** walk hard-coded Unicode ranges (emojis + Nerd PUA), filter by **hex** only, copy via **pbcopy**, shebang pinned to \`/Users/michael/.bun/bin/bun\`, cleanup called \`process.exit(0)\`.

![Repo screenshot](/blog/nfglyph-bun-ansi-nerd-font-picker-linux-quit/screenshots/repo-screenshot.png)

**Upgrade (\`047b54c\`, Jun 1):** commit \`.nfglyph-data/glyphs.json\` from ryanoasis **glyphnames** — METADATA **3.4.0** / **50,174** named glyphs. \`loadGlyphs()\` + \`fuzzyMatch\` on \`g.name\` (hex path still works). Footer shows \`name\` + \`U+XXXX\`. \`y\` yanks the hex code. Shebang -> \`#!/usr/bin/env bun\`.

![glyphs.json pipeline](/blog/nfglyph-bun-ansi-nerd-font-picker-linux-quit/screenshots/glyphs-json-pipeline.png)


**Linux quit (\`1dfdc82\`, Jun 3):** cleanup resolves a \`keepAlive\` promise instead of \`process.exit\`; detaches stdin listeners and \`pause()\`s; quit matches \`input.includes("q")\`; \`write\` uses \`process.stdout.write\`; clipboard tries \`pbcopy\` -> \`wl-copy\` -> \`xclip\` -> \`xsel\`.

![Linux quit fix](/blog/nfglyph-bun-ansi-nerd-font-picker-linux-quit/screenshots/linux-quit-fix.png)

Residue: README still markets **15k+** and **hex** search; PLAN Phase 1 still has **Fuzzy name search** unchecked; error string still curls into \`~/.nfglyph-data\` while code loads next to \`argv[1]\`; \`.uncap\` \`headSha\` empty; sitrep last-commit date stuck on Jan 30.

![README / PLAN gap](/blog/nfglyph-bun-ansi-nerd-font-picker-linux-quit/screenshots/readme-plan-gap.png)

## Where

Code: [github.com/michaelmonetized/nfglyph](https://github.com/michaelmonetized/nfglyph) — public. No live web app.

\`\`\`bash
git clone https://github.com/michaelmonetized/nfglyph.git
cd nfglyph
chmod +x nfglyph
ln -s "$(pwd)/nfglyph" ~/.local/bin/nfglyph
nfglyph
\`\`\`

tmux popup from README: \`bind-key g display-popup -E -w 80% -h 80% -T "Glyph Picker" "nfglyph"\`.


## When

**2026-01-30** — Initial release (\`0c91b0d\`) — range-scan TUI + screenshot + MIT.
**2026-06-01** — init docs/tooling (\`1d15ef5\`); **upgraded** named JSON + fuzzy (\`047b54c\`).
**2026-06-03** — fixed quit on linux (\`1dfdc82\`) -> HEAD. Queue \`pushed_at\` 2026-06-03T13:54:06Z.

![Commit arc](/blog/nfglyph-bun-ansi-nerd-font-picker-linux-quit/screenshots/commit-arc.png)

## Why

Because a picker that only filters hex forces me to already know the codepoint. Because \`process.exit\` from an alt-buffer raw-mode loop is how Linux sessions feel stuck. Because shipping glyphs.json next to the binary beats pretending 15k range-scan glyphs are named.

**Engagement Q:** Update README/PLAN to match the fuzzy+50k HEAD, or leave the stale 15k/hex story as a museum label next to the working binary?
`;

const MILKUP_COVER =
  "/blog/milkup-tiptap-convex-wysiwyg-stale-milkdown-readme/cover.png";

const MILKUP_CONTENT = `## Who

I needed a drop-in editor for HustleLaunch client blogs — toolbar clicks instead of markdown homework, paste from Google Docs, and a media picker that doesn't dump files into \`/public\` forever.

For operators who already run Convex and Next and want the HTML model to keep emitting clean markdown behind the scenes.

## What

I built **milkup** — public https://github.com/michaelmonetized/milkup. HEAD \`45fb587\`. **9** commits. **0** stars / **1** fork. Default **master**. Version **0.1.0**. Local Next app only.

**Hour zero (\`fea1956\`, 06:03 ET):** Milkdown + Convex media picker + \`lib/milkdown-video-plugin.ts\` custom \`!video[alt](url)\` path.

**Two minutes later (\`d73d1f9\`):** strip Convex, ship \`MOCK_MEDIA\`, keep the textarea POC honest.

**README (\`91fa36f\`):** locks the public story on Next.js **15** / React **18** / Milkdown / mock library / \`!video[]()\` — and that file never got another commit.

![README vs HEAD](/blog/milkup-tiptap-convex-wysiwyg-stale-milkdown-readme/screenshots/readme-head-gap.png)

**Pivot (\`35c109f\`, 06:32):** TipTap \`RichEditor\` + \`Toolbar\` + \`html-to-markdown\` / \`markdown-it\` converters + Convex \`Providers\` back in. \`EditorPage\` subtitle says "WYSIWYG editor with TipTap + Convex media storage."

**CVE pin (\`e11562e\`):** React **19** + Next **14.2** because BUILDPLAN bans Next 15.x / React 18.x.

**Next 16 (\`9b7b0e6\`, 06:48):** jump to \`next\` ^16 "Vercel-ready" — BUILDPLAN stack blurb still says Next 15 + React 18 in places.

**Opus QA (\`45fb587\`, 06:59) → HEAD:** delete leftover \`milkdown-video-plugin.ts\`, ESLint config, MediaPicker tidy.

![Stack @ HEAD](/blog/milkup-tiptap-convex-wysiwyg-stale-milkdown-readme/screenshots/stack-head.png)

Residue that matters:

- \`handleMediaSelect\` inserts \`![Video](url)\` for videos — custom \`!video[]()\` is documentation only.
- \`convex/media.ts\` is **queries only** (\`listMedia\`, \`listMediaByType\`). ARCHITECTURE still diagrams \`uploadFile\` / \`registerMedia\`.
- \`MediaPicker\` empty state: "No media found. Upload some first!" with nowhere to upload.
- \`providers.tsx\` falls back to \`https://your-deployment.convex.cloud\`.

![Media picker empty](/blog/milkup-tiptap-convex-wysiwyg-stale-milkdown-readme/screenshots/media-picker-empty-convex.png)

![Video syntax lost](/blog/milkup-tiptap-convex-wysiwyg-stale-milkdown-readme/screenshots/video-syntax-lost.png)

## Where

Code: [github.com/michaelmonetized/milkup](https://github.com/michaelmonetized/milkup) — public. No live product URL.

\`\`\`bash
git clone https://github.com/michaelmonetized/milkup.git
cd milkup
bun install
# set NEXT_PUBLIC_CONVEX_URL in .env.local
bunx next dev
\`\`\`

Open http://localhost:3000 — TipTap left, raw markdown right, Insert Media opens the Convex modal.

## When

**2026-03-25 06:03–06:59 ET** — entire arc on one afternoon.

| SHA | Clock | Beat |
|---|---|---|
| \`fea1956\` | 06:03 | Milkdown + Convex + video plugin |
| \`d73d1f9\` | 06:05 | Mock strip |
| \`91fa36f\` | 06:06 | README (frozen face) |
| \`30ff01a\` | 06:25 | BUILDPLAN + ARCHITECTURE |
| \`35c109f\` | 06:32 | TipTap + Convex return |
| \`e11562e\` | 06:33 | React19 + Next14.2 |
| \`c28d8d5\` | 06:35 | CONVEX_SETUP |
| \`9b7b0e6\` | 06:48 | Next.js 16 |
| \`45fb587\` | 06:59 | Opus QA → HEAD |

Queue \`pushed_at\` 2026-03-25T10:59:17Z.

![Commit arc](/blog/milkup-tiptap-convex-wysiwyg-stale-milkdown-readme/screenshots/commit-arc.png)

## Why

Because client editors fail when the truth lives in TipTap and the README still teaches Milkdown. Because a media picker that can only \`listMedia\` is a museum of intent. Because CVE notes and a Next 16 bump in the same hour are how a POC ages in public.

**Engagement Q:** Rewrite README to TipTap+Next16+queries-only truth, or keep the Milkdown museum label and finish the upload mutations ARCHITECTURE already drew?
`;

const NOTION_CLI_COVER =
  "/blog/notion-cli-openclaw-skill-crud-markdown-property-filter/cover.png";

const NOTION_CLI_CONTENT = `## Who

I wanted agents to talk to Notion without a scrape wrapper and without pasting JSON into the wrong curl.

For OpenClaw / Claude Code workflows that need db/page/block CRUD, property-filtered page lists, and Markdown out of page content.

## What

I built **notion-cli** — public https://github.com/michaelmonetized/notion-cli. HEAD \`5309974\`. **1** commit. **0** stars. Default **main**. Version **1.0.0** (CLI banner still says **v2.0.0**). CLI / agent skill only.

**Shipped (~1145 LOC src):** \`notion db|page|pages|block|search|spaces\` via Bun + @notionhq/client v3. Vitest + Biome. \`bun build --compile\` → \`dist/notion\`.

![CLI subcommands](/blog/notion-cli-openclaw-skill-crud-markdown-property-filter/screenshots/cli-subcommands.png)

![Agent skill install](/blog/notion-cli-openclaw-skill-crud-markdown-property-filter/screenshots/agent-skill-install.png)

**Agent path:** \`./setup\` → OpenClaw \`~/.openclaw/workspace/bin/notion\` or \`./setup --host codex\` → \`~/.claude/skills/notion\`. Full command reference in **SKILL.md**.

**Filters + Markdown:** \`pages list <db> -p "Name,Tags"\` / \`-n "Status"\`; \`page content <id>\` → block-to-Markdown.

![Docs vs HEAD](/blog/notion-cli-openclaw-skill-crud-markdown-property-filter/screenshots/docs-vs-head-gap.png)

**Gaps:** package 1.0.0 vs banner v2.0.0; DELIVERY/FINAL-DELIVERY still flat \`list-databases\`; unused \`spaces.ts\`/\`page.ts\`/\`search.ts\` modules; \`spaces list\` aliases db list; orphan empty postcss.config.js.

![Architecture](/blog/notion-cli-openclaw-skill-crud-markdown-property-filter/screenshots/architecture-stack.png)

## Where

Code: https://github.com/michaelmonetized/notion-cli — public. No live web app.

Run: \`export NOTION_API_KEY=…\` && \`bun install\` && \`bun build src/cli.ts --compile --outfile dist/notion\` (or \`./setup\`).

## When

**2026-03-28** — 5309974 Initial commit: production-ready Notion CLI (+29 files) → HEAD.

## Why

![Commit arc](/blog/notion-cli-openclaw-skill-crud-markdown-property-filter/screenshots/commit-arc.png)

Because agents need a typed Notion subcommand surface with Markdown out — not another unofficial scrape.
**Engagement Q:** Align package + banner to 1.0.0 and delete flat-command DELIVERY docs, or finish a real spaces API first?
`;

const CANAVERAL_COVER =
  "/blog/canaveral-bun-tanstack-start-web-desktop-mobile-caddy/cover.png";

const CANAVERAL_CONTENT = `## Who

I keep starting the same product spine: TanStack Start web, Electron shell, Expo screen, shared Zod/forms/state, Clerk–Convex–Stripe–Resend–Sentry–PostHog wiring, then re-deriving Caddy HTTPS and the lint gate.

For operators who want that monorepo launch pad as one private repo. An empty hustlestack husk is the wrong clone.

## What

I built **Canaveral**, private https://github.com/HurleyUS/canaveral. HEAD \`df2c041\`. **11** commits. Version **0.1.0**. Bun **1.3.1** workspaces: web (TanStack Start), desktop (Electron), mobile (Expo), pub, shared/*.

![Workspace map](/blog/canaveral-bun-tanstack-start-web-desktop-mobile-caddy/screenshots/workspace-map.png)

Starter home: waitlist (RHF+Zod client parse), launch checklist (Zustand), Test Resend/Stripe via createServerFn. Lazy Clerk when key present. Caddy in-repo: \`https://canaveral.localhost\` port **5337**.

![Caddy localhost](/blog/canaveral-bun-tanstack-start-web-desktop-mobile-caddy/screenshots/caddy-localhost.png)

house-checks ban any/unknown and useEffect/useState. gate.mts runs ten checks including ~/bin/freview. Blacksmith CI ends with freview --ci. REVIEW.md 1003 lines / six sections.

![Gate + freview](/blog/canaveral-bun-tanstack-start-web-desktop-mobile-caddy/screenshots/gate-freview.png)

Gaps: package.json lint is oxlint-only while AGENTS.md sells Biome to house to freview; five OPEN manifesto issues still want loaders/useActionState/hydration fixes.

## Where

Code: [github.com/HurleyUS/canaveral](https://github.com/HurleyUS/canaveral), private. No public deploy.

\`\`\`bash
bun install && cp .env.example .env && bun run env:check && bun run dev
# https://canaveral.localhost (Vite :5337 behind Caddy)
\`\`\`

## When

**2026-05-04.** init (+6074).

**2026-05-14.** Blacksmith×7 + FReview RN observability + formatter. HEAD df2c041.

**2026-06-09.** five manifesto issues (still OPEN).

**2026-06-18.** queue pushed_at.

![Commit arc](/blog/canaveral-bun-tanstack-start-web-desktop-mobile-caddy/screenshots/commit-arc.png)

## Why

A launch pad should know its localhost slug, env contract, and which gates fail before the first feature branch.

**Engagement Q:** Web + desktop + mobile on day one. Wire Caddy HTTPS, freview, or Convex SSR loaders first?
`;

const CONNECTEDIN_COVER =
  "/blog/connectedin-mv3-linkedin-auto-connect-chrome-extension/cover.png";

const CONNECTEDIN_CONTENT = `## Who

I still hit LinkedIn people-search pages where the work is repetitive Connect clicks, and I still want the delay, the stop button, and the weekly ceiling visible before the loop runs away.

For operators who load-unpacked a tiny MV3 tool on their own account, not a SaaS growth bot.

## What

I shipped **ConnectedIn**, public https://github.com/michaelmonetized/ConnectedIn. HEAD \`a6236fa\`. **2** commits. Version **1.0.0**. Manifest V3 popup + \`content.js\` clicker.

![Content loop](/blog/connectedin-mv3-linkedin-auto-connect-chrome-extension/screenshots/content-loop.png)

Popup: delay input (100–5000ms, default 500), Start/Stop, clicked/remaining stats, yellow ~1,100 connects/week warning. \`chrome.storage.sync\` keeps delay + stats. Content script filters \`button[type="button"]\` whose trimmed text is exactly \`connect\`, clicks with \`setTimeout\` spacing, posts \`updateStats\` / \`finished\` messages.

![Manifest gaps](/blog/connectedin-mv3-linkedin-auto-connect-chrome-extension/screenshots/manifest-gaps.png)

Honest gaps on day one: manifest declares icons under \`images/\` but **no images directory**; **no \`content_scripts\` entry** so \`content.js\` is not auto-injected; popup \`sendMessage\` has nothing to talk to unless something else injects the file. \`scripting\` permission is unused.

![Rate limit](/blog/connectedin-mv3-linkedin-auto-connect-chrome-extension/screenshots/rate-limit.png)

README + INSTALL.md document LinkedIn’s weekly ceiling, delay bands, and that automation sits awkwardly against LinkedIn ToS (personal-use framing only).

## Where

Code: [github.com/michaelmonetized/ConnectedIn](https://github.com/michaelmonetized/ConnectedIn), public MIT.

\`\`\`bash
git clone https://github.com/michaelmonetized/ConnectedIn.git
# chrome://extensions: Developer mode, Load unpacked, select folder
# open linkedin.com people search, click extension, Start Clicking
\`\`\`

## When

**2026-03-21 15:30 ET.** init (+548, 7 files).

**15:31 ET.** INSTALL.md (+147). HEAD \`a6236fa\`.

Queue \`pushed_at\` **2026-03-21T19:31:06Z**.

![Commit arc](/blog/connectedin-mv3-linkedin-auto-connect-chrome-extension/screenshots/commit-arc.png)

## Why

A Connect clicker is only useful if the delay and the weekly ceiling are first-class, and if the manifest actually wires the content script.

**Engagement Q:** Fix \`content_scripts\` + icons first, or rewrite the selector against today’s LinkedIn DOM?
`;

const HURLEYUS_SOP_COVER =
  "/blog/hurleyus-sop-ship-or-shut-up-openclaw-dhh-gstack/cover.png";

const HURLEYUS_SOP_CONTENT = `![OG / Ship or shut up](/blog/hurleyus-sop-ship-or-shut-up-openclaw-dhh-gstack/screenshots/toc-map.png)

## Who

I write operating doctrine when agents keep rediscovering their own commits as found treasure.

For operators running **multi-agent HurleyUS sessions** who need a **single public SOP file**: philosophy, OpenClaw memory layers, hard rules earned from incidents, Graphite/\`send-agent\` team ops, and the **DHH** research-first / **gstack** mandate. This is doctrine on disk, separate from the Convex mission-control app and from empty scaffold SKIP class.

## What

I published **hurleyus-sop** at [\`HurleyUS/hurleyus-sop\`](https://github.com/HurleyUS/hurleyus-sop). One tracked file: **\`AGENT_SOP.md\`**. HEAD \`c418e5e\`. **2** commits. 0 stars. GitHub Linguist **language: null**. Version **1.0**. Header maintainers: Rusty P. Shackelford, Theo Browne, DHH. **548** lines of intentional doctrine. No README, no CI, no package.json. The product is the SOP.

Facts from the file at HEAD:

- Lead philosophy: **"Ship or shut up."** Revenue over polish cycles.
- Role: partner with equity stake, senior engineer, Michael's right hand
- Stack named: TypeScript, **Next.js 16+**, Convex, React, RN/Expo/NativeWind, Swift supporting, \`sr-*\` skills
- Workspace root documented: **\`~/.openclaw/workspace/\`** with \`SOUL.md\`, \`AGENTS.md\`, \`MEMORY.md\`, \`USER.md\`, \`TEAM.md\`, \`TOOLS.md\`, \`HEARTBEAT.md\`, \`TODO.md\`, daily \`memory/YYYY-MM-DD.md\`, \`current-workload.md\` compaction dump
- Memory model: long-term MEMORY.md, daily raw logs, compaction checkpoint at ~**80%** context ("goldfish brain")
- Hard rules: **no CSS filter hacks**, **Next.js 16+ only**, **never type Clerk keys by eye**, **no GitHub paid services** (Vercel is CI; strip \`.github/workflows/\`), **do the hard work** (all 25 files)
- Git: Conventional Commits + **Graphite** stacked PRs (\`gt submit -p --ai\`, \`~/bin/stack\`)
- Comms: \`send-agent rusty|theo|dhh\`, standups **4×/day** EST, ~30 min heartbeat (cron, Telegram, email/bird/moltbook, SITREP)
- Lessons: removed Actions from **12** repos; 29 parallel agents produced 50K non-compiling lines, then a single agent Convex rewrite in **11 minutes**; AVPlayerLooper leak (RustyP); reaferral invite persistence
- Anti-pattern table + Closing partner mandate

![OpenClaw memory layers](/blog/hurleyus-sop-ship-or-shut-up-openclaw-dhh-gstack/screenshots/memory-layers.png)

![Hard rules](/blog/hurleyus-sop-ship-or-shut-up-openclaw-dhh-gstack/screenshots/hard-rules.png)

**PR #2** (merged 2026-03-31, closes #1) appends **DHH Learnings & Operating Principles** (+46 lines):

- Research-first: questions are failures; delivered solutions are wins
- **gstack is default** for major workflows
- Deployment discipline: local \`bun run build\`, lint, preview, env synced, PR reviewed, then merge. **No blind deployments.**
- No \`any\` / \`@ts-ignore\`. Document self-review. Spawn via gstack/\`sessions_spawn\` with explicit scope.

![DHH gstack mandate](/blog/hurleyus-sop-ship-or-shut-up-openclaw-dhh-gstack/screenshots/dhh-mandate.png)

![Commit arc](/blog/hurleyus-sop-ship-or-shut-up-openclaw-dhh-gstack/screenshots/commit-arc.png)

Sibling distinction: [\`HurleyUS/hurley-mission-control\`](https://github.com/HurleyUS/hurley-mission-control) is the Next/Clerk/Convex **comms app**. This repo is the public SOP only.

## Where

Code/docs: [github.com/HurleyUS/hurleyus-sop](https://github.com/HurleyUS/hurleyus-sop), public.

No product domain. No Vercel app for this repo. OpenClaw paths are local (\`~/.openclaw/workspace/…\`). Clone used for pack: m1Pro13 \`~/Projects/HurleyUS/hurleyus-sop\` @ \`c418e5e\`.

## When

- **2026-03-25**: repo created; \`f5fdc4a\` adds \`AGENT_SOP.md\` (+502), v1.0 body through Closing
- **2026-03-31**: PR #2 merge \`c418e5e\`, DHH section (+46); \`pushed_at\` 2026-03-31T23:28:55Z
- Pack prepared **2026-09-08 ~5:15 PM ET**: draft + assets only

## Why

Agents without a written operating contract repeat the same expensive mistakes: filter-hack dark mode, Actions that bill, parallel agent thrash, typed Clerk secrets, goldfish-brain after compaction. This file is the HurleyUS answer in one Markdown path: philosophy, workspace layout, hard rules, lessons, then DHH's research-first / gstack / deploy checklist so contrib is doctrine, not vibes.

**Engagement Q:** What would you put in your agents' single public SOP that you refuse to negotiate, and which incident finally forced it onto disk?
`;

const CODEMAIL_COVER =
  "/blog/codemail-mail-config-as-code-founder-email-infra/cover.png";

const CODEMAIL_CONTENT = `![Config as code](/blog/codemail-mail-config-as-code-founder-email-infra/screenshots/config-as-code.png)

## Who

I wanted company email on day 1 of an idea without paying Google or Microsoft per seat while the product was still a maybe.

For founders who think \`mail.config.ts\` in git should be law, ahead of another admin dashboard.

## What

I built **codemail**, private https://github.com/michaelmonetized/codemail (selection label HurleyUS/codemail; origin is michaelmonetized). HEAD \`e9fece4\`. **27** commits. Default **main**. Version **0.1.0**.

**Thesis:** email infrastructure for founders: config as code, per-domain pricing, unlimited mailboxes. Adjacent to Gmail, not a seat-for-seat swap.

![Day-1 workflow](/blog/codemail-mail-config-as-code-founder-email-infra/screenshots/day1-workflow.png)

**Shipped (weekend MVP arc):** Turborepo monorepo; \`@codemail/config\` (Zod + \`defineMailConfig\`); \`@codemail/cli\` (setup/deploy/status/dns/logs/users); \`@codemail/smtp\` on Fly; Convex backend; Next 15 web mail + dashboard; Clerk; Resend outbound; marketing Free Forever / Simple $8 / Managed $80 / Self-Hosted.

![Architecture](/blog/codemail-mail-config-as-code-founder-email-infra/screenshots/architecture-stack.png)

**Gaps:** PLAN still marks IMAP out while README + Simple tier market IMAP; GitHub public probe 404 (private) despite OSS CTA; \`codemail.vercel.app\` MIDDLEWARE 500 vs \`codemail-web.vercel.app\` 200; root \`mail.config.ts\` is informal t3.chat demo shape; \`codemail.dev\` unchecked.

![Docs vs shipped](/blog/codemail-mail-config-as-code-founder-email-infra/screenshots/docs-vs-shipped-gap.png)

## Where

Code: https://github.com/michaelmonetized/codemail (private).

Live marketing/app: https://codemail-web.vercel.app

SMTP: codemail-smtp.fly.dev (per TODO)

## When

**2026-02-12.** SMTP, then web mail, then dashboard, then Convex, then API, then auth/SEO, then Fly SMTP fixes, then marketing rewrite to business-plan thesis (same-day blast).

**2026-02-13.** public marketing routes + \`(private)\` auth route group.

**2026-02-15.** \`62fcaed\` better sales positioning (#1).

**2026-02-18.** \`e9fece4\` design updates. HEAD.

![Commit arc](/blog/codemail-mail-config-as-code-founder-email-infra/screenshots/commit-arc.png)

## Why

Day-1 company email should be a \`git push\`, not a $600/year seat tax. Config in the repo beats another dashboard click-path when the product is still a maybe.

**Engagement Q:** Ship IMAP before opening the repo public, or cut IMAP from the landing first?
`;

const SVGANIMATOR_COVER =
  "/blog/svganimator-electron-to-canaveral-keyframe-export-studio/cover.png";

const SVGANIMATOR_CONTENT = `![Migrate arc](/blog/svganimator-electron-to-canaveral-keyframe-export-studio/screenshots/migrate-arc.png)

## Who

I wanted an SVG keyframe studio under my own roof: first as an Electron app with Svgator inspiration docs, then as a product surface inside the Canaveral Bun monorepo.

For operators who care about the honest rename tax: GitHub says **svganimator**, \`package.json\` says **canaveral**, \`appConfig\` and the UI eyebrow say **SVG Animator**.

## What

I built **svganimator**, public https://github.com/HurleyUS/svganimator. HEAD \`86bb4a2\`. **13** commits. **0** stars. Default **main**. Root package name **\`canaveral\`** **0.1.0**.

**At HEAD (Bun / TanStack / workspaces):**

- \`@canaveral/svg\`: **963** LOC Zod schemas for elements, keyframes, collaborators, projects; export formats **\`svg\` | \`lottie\` | \`gif\` | \`mkv\`**; \`serializeStandaloneSvg\`, \`serializeLottie\`, \`applySvgAnimations\`, \`createStarterSvgProject\`
- \`web/src/routes/index.tsx\` (~378): SVG Animator studio with projects sidebar, canvas scrubber, invite form, export grid
- \`web/src/lib/export-renderer.ts\` (~160): GIF/MKV via Resvg frame raster (\`fps 30\`, \`880×720\`)
- Zustand \`useSvgWorkspaceStore\` in \`shared/state\`
- Electron \`desktop/\` loads \`appConfig.url\` with title **SVG Animator**
- Expo \`mobile/app/index.tsx\` shows starter project element/keyframe counts
- \`shared/config\` sets \`name: "SVG Animator"\`, \`support@svganimator.localhost\`

![Studio layout](/blog/svganimator-electron-to-canaveral-keyframe-export-studio/screenshots/studio-layout.png)

**Deleted on migrate (\`f2f6023\`):** Electron \`src/renderer/**\` editor, \`electron.vite.config.ts\`, and the Svgator \`inspiration-docs/\` scrape from the May 3 init.

![Export formats](/blog/svganimator-electron-to-canaveral-keyframe-export-studio/screenshots/export-formats.png)

**Honesty gaps:** README + \`pub/\` + \`.env.example\` still market **Canaveral**. Seven same-afternoon commits titled Standardize Blacksmith CI gates. \`REVIEW.md\` is a large fallow dump. No public demo URL.

Sibling surfaces to keep straight: private \`HurleyUS/canaveral\` (generic launch pad, already packed); local no-git \`~/Projects/svganimator\` Bun path draw-on app; \`tsxsvg\` (SKIP / plan-only). This public repo is the SVG Animator product identity on a canaveral-named scaffold.

## Where

Code: [github.com/HurleyUS/svganimator](https://github.com/HurleyUS/svganimator), public.

Run (facts from README/scripts): \`bun install\`, \`cp .env.example .env\`, \`bun run env:check\`, \`bun run dev\` (Caddy) or \`bun run dev:raw\` (Vite).

No live product URL. No claimed domain.

## When

- **2026-05-03.** \`0965ad7\` needs work: Electron + Svgator inspiration-docs (~94 files)
- **2026-05-04.** \`3e38809\` exports: timeline/properties/exporter panels + tests
- **2026-05-04.** \`f2f6023\` migrate svganimator to canaveral monorepo
- **2026-05-14 afternoon ET.** Blacksmith CI ×7 + FReview observability + formatter; HEAD \`86bb4a2\`
- Pack prepared **2026-09-08 ~5:06 PM ET** (draft + assets only)

## Why

I needed the SVG animator product on the same Bun/TanStack/Caddy rails as the rest of the launch pad: shared Zod contracts, web studio, Electron shell, Expo card. The GitHub repo name and the root package name still disagree; the UI sells SVG Animator anyway.

**Engagement:** how many public product repos keep README saying the scaffold name while \`appConfig\` and the UI sell a different product?
`;

const DEVHOST_COVER =
  "/blog/devhost-ink-tui-caddy-port80-multihost/cover.png";

const DEVHOST_CONTENT = `![DevHost Manager TUI](/blog/devhost-ink-tui-caddy-port80-multihost/screenshots/tui-manager.png)

## Who

I run a pile of Next/Bun apps on one Mac and got tired of remembering which project owns which port — and of typing \`localhost:3xxx\` when the hostname should just be the project name.

## What

Private **michaelmonetized/devhost** · v1.0.0 · HEAD \`db69995\` · **1** commit (+1426 / 14 files). Bun CLI + Ink/React TUI that:

1. \`devhost add\` — reads \`package.json\` name, requires \`scripts.dev\`, assigns next port from **3001**, registers \`<name>.localhost\`
2. Writes \`~/.config/devhost/config.json\` + auto Caddyfile + marker-bounded \`/etc/hosts\` block
3. \`devhost start\` — ensures Caddy, spawns \`bun run dev --port N\` (env \`PORT\`/\`HOSTNAME\`), tracks PID, opens \`http://<name>.localhost\`
4. Bare \`devhost\` — Ink manager: start/stop/open + Caddy toggle

![Architecture](/blog/devhost-ink-tui-caddy-port80-multihost/screenshots/architecture.png)

![Hosts + Caddyfile](/blog/devhost-ink-tui-caddy-port80-multihost/screenshots/hosts-caddyfile.png)

## Where

github.com/michaelmonetized/devhost (**private**). No product domain. Config lives at \`~/.config/devhost/\`. On pack machine m1Pro13 the live config still has **bestwnc-com.localhost → :3001**. Sibling story: **bundx-init** patches Next repos for **HTTPS** \`.localhost\` on **:443**; devhost is the **HTTP :80 multi-host lifecycle TUI**.

![Sibling vs bundx-init](/blog/devhost-ink-tui-caddy-port80-multihost/screenshots/sibling-vs-bundx-init.png)

## When

**2026-02-15** — sole commit \`db69995\` Initial commit (Caddy + Ink TUI + CLI + hosts + ports). Queue \`pushed_at\` 2026-06-22 (nightly/metadata push; tree still one commit). No follow-up features in git.

![Commit arc](/blog/devhost-ink-tui-caddy-port80-multihost/screenshots/commit-arc.png)

## Why

Port roulette does not scale past three apps. A marker-bounded hosts block + one Caddyfile + a TUI that knows PIDs is the boring operator loop I actually run. HTTP on :80 is intentional — this is not the Clerk-friendly HTTPS path (that's bundx-init).

**Engagement Q:** Do you want a TUI that owns \`/etc/hosts\` + Caddy :80 — or a one-shot installer that patches each Next repo for HTTPS \`.localhost\`?
`;

const RESEND_LISTENING_DAEMON_COVER =
  "/blog/resend-listening-daemon-openclaw-poll-hooks-agent-caddy/cover.png";

const RESEND_LISTENING_DAEMON_CONTENT = `## Who

I needed inbound Resend mail to wake an OpenClaw agent on my machines. Local gateway path, readable UI, no SaaS inbox product.

For operators wiring Resend receiving boxes into a local agent gateway with a readable UI.

## What

I built **resendld**, public [\`michaelmonetized/resend-listening-daemon\`](https://github.com/michaelmonetized/resend-listening-daemon). HEAD \`4fbec17\`. **46** commits. Version **0.0.0-rc.0**.

![Architecture](/blog/resend-listening-daemon-openclaw-poll-hooks-agent-caddy/screenshots/architecture-stack.png)

\`src/daemon/listen.ts\` polls \`https://api.resend.com/emails/receiving\` every **5 seconds** with pure \`fetch()\` (no Resend CLI). List has no body. Each new id hits \`/emails/receiving/{id}\`, strips HTML if text empty, writes markdown under \`~/.openclaw/workspace/mail/\`, mirrors to Convex, then \`POST\`s OpenClaw \`https://localhost:18789/hooks/agent\` (TLS self-signed allowed). 404/401 falls back to \`openclaw cron add --system-event\`.

![Hooks dispatch](/blog/resend-listening-daemon-openclaw-poll-hooks-agent-caddy/screenshots/hooks-dispatch.png)

Web: TanStack Start **1.82.1** + Convex inbox/detail/boxes/reply at **https://resendld.localhost** behind Caddy. \`install.sh\` (640 LOC) targets macOS launchd + Arch systemd.

Afternoon of Mar 23 is mostly PATH hell against \`resend-cli\` across machines: try API, revert to CLI, then land pure fetch at \`28041eac\`. Tip #9 resolves \`openclaw\` cross-platform; ack path in \`gateway.ts\` still hardcodes \`/Users/michael/.bun/bin/openclaw\`.

![Web inbox](/blog/resend-listening-daemon-openclaw-poll-hooks-agent-caddy/screenshots/web-inbox.png)

## Where

Code: [github.com/michaelmonetized/resend-listening-daemon](https://github.com/michaelmonetized/resend-listening-daemon), public. No public deploy.

\`\`\`bash
cd ~/Projects/resend-listening-daemon
bash install.sh          # or --dry-run / --force / --uninstall
# edit ~/.config/resendld/boxes.json
resendld start           # daemon + Convex + web :3000 + Caddy
# opens https://resendld.localhost
\`\`\`

## When

**2026-03-23.** Phase 0, Telegram/Convex, ~20 PATH/CLI commits, \`/hooks/agent\`, pure fetch \`28041eac\`.

**2026-03-24.** Install/docs macOS+Arch (#3).

**2026-03-25.** HTML body fallback + web startup.

**2026-03-26.** TanStack Start pin to 1.82.1 (#8).

**2026-03-27.** Openclaw path (#9), HEAD \`4fbec17\`. Queue pushed_at 2026-03-27T23:11:34Z.

![Commit arc](/blog/resend-listening-daemon-openclaw-poll-hooks-agent-caddy/screenshots/commit-arc.png)

## Why

An agent that cannot receive email instructions is half-deaf. Poll Resend yourself, store locally, wake the gateway. Skip waiting on a webhook you do not control.

**Engagement Q:** Keep the 5s poll + seen-ids file, or move the tip to Resend webhooks into the same \`/hooks/agent\` path?
`;

const FAB_ANALYTICS_COVER =
  "/blog/fab-analytics-same-day-php-js-ga-drop-in-json-disk/cover.png";

const FAB_ANALYTICS_CONTENT = `## Who

I still get Elementor client sites where the ask is a drop-in that records who called, who emailed, and whether the form died halfway, without paying Google for a dashboard I will not open.

For operators who will accept JSON files on a PHP host as the source of truth.

## What

I shipped **fab-analytics**, public https://github.com/michaelmonetized/fab-analytics. HEAD \`8218088\`. **31** commits. Version **0.1.3-rc**.

![Client pipeline](/blog/fab-analytics-same-day-php-js-ga-drop-in-json-disk/client-pipeline.png)

\`fab-analytics.js\` (273 LOC) builds a visit object (domain, session token, viewport, UA, referrer, language, timezone, screen), hits ipify for IP, POSTs to a hardcoded \`hustlelaunch.com/.../api/post/visit/\` endpoint. Tracks pageview start/exit, \`mailto:\` / \`tel:\` clicks as conversions, form submit as conversion, and a noisy set of abandonment and presave events. Session lives in localStorage (+20 minutes) plus a cookie.

![PHP JSON ingest](/blog/fab-analytics-same-day-php-js-ga-drop-in-json-disk/php-json-ingest.png)

PHP \`api/post/visit/index.php\` validates \`domain\` + \`session_token\`, writes \`logs/{domain}/{token}-{microtime}.json\`, and if the domain contains \`oxstu\` and the category is form, includes a \`mail()\` lead path to sales@hustlelaunch.com.

![Test harness](/blog/fab-analytics-same-day-php-js-ga-drop-in-json-disk/test-harness.png)

\`test.html\` is a Tailwind CDN harness with tel, mailto, and a required name/phone/email form. Script tag still points at \`/fab.js?v=0.1.3-b-36\` while the tracked file is \`fab-analytics.js\`.

![Gaps honesty](/blog/fab-analytics-same-day-php-js-ga-drop-in-json-disk/gaps-honesty.png)

Honest gaps: README/CHANGELOG/LICENCE.md are empty (GPL only in headers). Header @todo claims restore form fields from localStorage on return; **no restore loop in the JS**. \`JSON.stringify(new FormData(form))\` is not a revive path. Abandonment listeners include blur/focus/mouseleave/touchmove. Endpoint echoes file path + payload (debug leftovers). CORS \`*\`.

Sibling surface to keep straight: BestWNC's 2026 null-honesty directory analytics is a different product. This repo is the PHP+JS GA drop-in that writes JSON under hustlelaunch.com.

## Where

Code: [github.com/michaelmonetized/fab-analytics](https://github.com/michaelmonetized/fab-analytics), public.

\`\`\`bash
git clone https://github.com/michaelmonetized/fab-analytics.git
# drop fab-analytics.js on the page; PHP tree expects logs/ writable beside api/
# client endpoint constant points at hustlelaunch.com; change before self-host
\`\`\`

## When

**2024-07-09 07:14 ET.** Empty init. Midday: base JS + endpoints + test. Evening: Tailwind thrash, trailing-slash facepalm, cache-busting, PHP error handling. **22:30 ET:** \`tests passed - first production run\`. **2024-07-10 09:07 ET:** cleanup, HEAD \`8218088\`. Queue \`pushed_at\` **2026-01-31T10:35:32Z** (no newer commits).

![Commit arc](/blog/fab-analytics-same-day-php-js-ga-drop-in-json-disk/commit-arc.png)

## Why

A first-party GA drop-in only earns its keep if conversions and abandonments land somewhere you own, even when that somewhere is a folder of JSON files.

**Engagement Q:** Fix the empty docs, fab.js rename, and FormData revive path first, or rip the abandonment spam down to submit plus intentional blur only?
`;

const BOILERPLATE_COVER =
  "/blog/boilerplate-clerk-drizzle-stripe-next16-cve/cover.png";

const BOILERPLATE_CONTENT = `## Who

I needed a reusable Next shell that already had Clerk protect, a subscriptions table, and a Stripe webhook. Empty create-next-app was the wrong starting line, and a Convex payment library was the wrong spine for this clone path.

For operators cloning a private Hustle Launch starter onto Vercel. Buyers of a polished marketing site can keep walking.

## What

I shipped **boilerplate**, private https://github.com/michaelmonetized/boilerplate. HEAD \`6f2dd2f\`. **63** commits. package **0.1.0**.

![Auth + billing](/blog/boilerplate-clerk-drizzle-stripe-next16-cve/screenshots/auth-billing.png)

Stack that actually exists in tree: Next App Router, Clerk (SignIn/SignUp/UserProfile hash routing + clerkMiddleware public-route matcher), Drizzle on @vercel/postgres (subscriptions + error tables), createStripeUrl server action (Checkout or Billing Portal), Stripe webhook writing userId / customer / price / period end, Resend + react-email deps, Catppuccin latte/mocha CSS vars, custom max webfonts, filled privacy/terms/refunds.

![Stub pages](/blog/boilerplate-clerk-drizzle-stripe-next16-cve/screenshots/stub-pages.png)

Honest day-one residue that is still at HEAD: about / blog / contact / docs / faq / features / pricing and protected billing / settings / support are each a ten-line <h1>Page</h1> stub. /pricing does not call createStripeUrl. No tracked .env.example despite README. PLAN.md (Jan 2026) still lists Convex, PostHog, CLI scaffolding. .cursor/rules/STRIPE.md is Theo KV-sync essay pasted beside a Postgres webhook implementation.

![CVE bump](/blog/boilerplate-clerk-drizzle-stripe-next16-cve/screenshots/cve-bump.png)

Feb 22 2026: fix(security) upgrade Next.js 14.2.8 to 16.1.6 for CVE-2025-55184. package.json + bun.lockb only. Live: https://boilerplate-fawn-gamma.vercel.app and https://boilerplate.hustlelaunch.com both 200 with <title>Boilerplate</title>.

## Where

Code: [github.com/michaelmonetized/boilerplate](https://github.com/michaelmonetized/boilerplate), private MIT.

Clone requires michaelmonetized auth. README still expects mv .env.example .env (file not tracked). Edit data/app.ts, install deps, deploy Vercel.

Live shells: [boilerplate-fawn-gamma.vercel.app](https://boilerplate-fawn-gamma.vercel.app) · [boilerplate.hustlelaunch.com](https://boilerplate.hustlelaunch.com)

## When

**2024-09-07 to 09-11 ET.** Create Next App, then Clerk middleware/redirect/color fights, then Stripe ready (~50 commits in four days).

**2024-09-17.** shrug.

**2026-01-08.** PLAN.md.

**2026-01-31.** STRIPE.md sync.

**2026-02-22 07:42 ET.** Next 16 CVE bump to HEAD \`6f2dd2f\`. Queue push **2026-02-22T12:42:54Z**.

![Commit arc](/blog/boilerplate-clerk-drizzle-stripe-next16-cve/screenshots/commit-arc.png)

## Why

A SaaS starter is only honest if the auth boundary, the subscriptions row, and the webhook exist, and if you admit the marketing routes are still stubs when you CVE-bump sixteen months later.

**Engagement Q:** Wire /pricing + /billing to createStripeUrl next, or replace the Postgres webhook with Theo single KV sync before cloning this into the next hustle?
`;

const ILEAGUE_APP_COVER =
  "/blog/ileague-app-influencer-monorepo-before-golf-rebrand/cover.png";

const ILEAGUE_APP_CONTENT = `![Landing hero, violet influencer/fan unite](/blog/ileague-app-influencer-monorepo-before-golf-rebrand/screenshots/landing-hero.png)

## Who

I needed a creator/fan product that was still honest about being a scaffold: leagues, posts, Stripe Connect, before I verticalized it into golf.

For operators comparing the public influencer monorepo to the later emerald golf stack. Skip if you only want scorecards or Top-54 iTour lore.

## What

I shipped **iLeague-app**, public [\`HurleyUS/ileague-app\`](https://github.com/HurleyUS/ileague-app). HEAD \`7af9d80\`. **7** commits. Package **1.0.0**. Bun workspaces: \`@ileague/web\` (Next 15), \`@ileague/mobile\` (Expo 52), \`@ileague/convex\`.

![Schema map](/blog/ileague-app-influencer-monorepo-before-golf-rebrand/screenshots/schema-map.png)

The schema still says **influencer**: \`users.isInfluencer\`, \`influencerProfiles\`, posts (text/image/video/poll/announcement), leagues with score+rank, follows, monthly/yearly \`subscriptions\`, Stripe Connect fields, tips in \`transactions\`. Twelve categories from gaming to lifestyle. Primary brand is violet (\`#7c3aed\` splash). The golf lander is emerald elsewhere.

![Mobile leagues](/blog/ileague-app-influencer-monorepo-before-golf-rebrand/screenshots/mobile-leagues.png)

Web: lander (Where Influencers and Fans Unite), Clerk auth, onboarding, dashboard, explore, leagues, notifications. Mobile tabs match. HEAD (Feb 4) wires mobile leagues to \`getFeaturedLeagues\` / \`getUserLeagues\` / paginated \`getLeagues\` + \`joinLeague\`, and adds \`eas.json\`.

![Gaps](/blog/ileague-app-influencer-monorepo-before-golf-rebrand/screenshots/honest-gaps.png)

Honest gaps: create-league button pushes \`/create-league\` with **no screen**; EAS submit + Apple IDs + Sentry org are placeholders; mobile icon/splash paths declared with **empty assets**; README claims MIT with **no LICENSE file**; lander vanity stats (50K+/2M+) are placeholders; commit message says Add mobile .env but the diff does not. \`www.ileague.app\` is a **Coming Soon** static page. The Jan Vercel preview URL now 308s there. The live golf product is a **different** repo and pack.

## Where

Code: [github.com/HurleyUS/ileague-app](https://github.com/HurleyUS/ileague-app), public.

\`\`\`bash
git clone https://github.com/HurleyUS/ileague-app.git
cd ileague-app
bun install
# cp .env.example .env.local  # fill Clerk/Convex/Stripe/Resend/PostHog/Sentry
cd packages/convex && bunx convex dev
bun run dev:web    # or bun run dev:mobile
\`\`\`

Domain: [www.ileague.app](https://www.ileague.app), Coming Soon (this Next app is not what serves that hostname). Golf sibling: [ileague.golf](https://ileague.golf). Keep the two repos separate in your head.

## When

**2026-01-09.** Five commits: init monorepo, Convex stubs/Sentry, CHANGELOG (notes \`kindred-gnu-699\` + early Vercel URL), React 18 for Clerk/Convex, root \`vercel.json\` monorepo build.

**2026-01-31.** \`7b889f4\` adds \`.cursor/rules/STRIPE.md\` only.

**2026-02-04 12:04 ET.** HEAD \`7af9d80\` mobile leagues + \`eas.json\` + ROADMAP/PLAN. Queue push **2026-02-05T18:08:47Z**.

![Commit arc](/blog/ileague-app-influencer-monorepo-before-golf-rebrand/screenshots/commit-arc.png)

## Why

If you only read the golf pack, you miss the **pre-rebrand** vocabulary: the same Bun/Next/Expo/Convex bones still wearing \`isInfluencer\` and vanity lander stats.

**Engagement Q:** Keep shipping the generic influencer scaffold, or treat this repo as archive and push all energy into ileague.golf?
`;

const AGENT_OS_COVER =
  "/blog/agent-os-bun-ink-websocket-zsh-orchestrator/cover.png";

const AGENT_OS_CONTENT = `## Who

I still run multi-agent days where the bottleneck is the shell context, the task queue, and whether each agent can see my real \`~/.zshrc\` aliases instead of a sandboxed stub.

For operators wiring local agent pools against a Mission Control ship list on their own machine.

## What

I shipped **HurleyUS Agent OS**, public https://github.com/michaelmonetized/agent-os. HEAD \`f66fffa\`. **2** commits. package **hurleyus-agent-os@1.0.0**.

![Ink UI](/blog/agent-os-bun-ink-websocket-zsh-orchestrator/screenshots/ink-ui.png)

\`orchestrator.ts\` is an Ink React terminal UI plus a \`WebSocketServer\` on **ws://localhost:9999**. Agents connect with \`?agent=<name>\`, pull \`task_dispatch\`, and stream \`task_output\` / complete / fail. State lives in \`~/.hurleyus/agent-os/state.json\`; every session transcript lands in \`~/.hurleyus/agent-os/sessions/<sessionId>.log\`.

![Zsh agent](/blog/agent-os-bun-ink-websocket-zsh-orchestrator/screenshots/zsh-agent.png)

\`agent-client.ts\` spawns **interactive zsh** (\`zsh -i -c …\`), sources \`~/.zshrc\`, optionally loads \`~/.hurleyus/GOALS\` and \`~/.hurleyus/TASKS\`, then evals the task description. If the cwd is a git repo it auto-commits \`[agent-name] <taskId>\` and pushes \`origin HEAD\`.

![Mission Control seed](/blog/agent-os-bun-ink-websocket-zsh-orchestrator/screenshots/mc-seed.png)

\`mission-control-tasks.ts\` seeds **seven Phase 1 tasks** aimed at \`hurley-mission-control\`: Convex backend, web layout, architecture review, message wiring, polling, Vercel deploy, QA smoke. \`cli.ts load-mission-control\` / \`start.sh\` load that list.

![Dual path gaps](/blog/agent-os-bun-ink-websocket-zsh-orchestrator/screenshots/dual-path-gaps.png)

Same tree also has \`core.ts\`: four personas (Codex Dev, SR Designer, SR Architect, QA Auditor) on \`claude-opus-4-6\` via Anthropic Messages API, with a dependency-aware priority queue. Honest gaps: \`@anthropic-ai/sdk\` is imported but **missing** from \`package.json\`; \`.env\` with \`ANTHROPIC_API_KEY\` is **still tracked** after the \`.gitignore\` commit (gitignore only covers \`node_modules/\`, \`*.log\`, \`.DS_Store\`). OpenClaw relay to \`ws://192.168.1.134:18789\` is stubbed. \`agent-runner.sh\` is a file inbox/outbox fallback, not live WS.

Sibling tools in the same shop: orclawstrator's OpenClaw \`:3377\` gateway, the Go p10k \`mission-control\` portfolio TUI, the Convex human|agent \`hurley-mission-control\` web plane, and \`shagent\`'s MCP/OpenRouter loop. Agent OS is the Ink/WS/zsh control plane with a Mission Control Phase 1 seed.

## Where

Code: [github.com/michaelmonetized/agent-os](https://github.com/michaelmonetized/agent-os), public, no LICENSE file (README: internal HurleyUS).

\`\`\`bash
git clone https://github.com/michaelmonetized/agent-os.git
cd agent-os
bun install
# Terminal 1
bun cli.ts run-orchestrator
# Terminal 2+
bun cli.ts spawn-agent codex-dev
bun cli.ts spawn-agent sr-designer
# Load Phase 1
bun cli.ts load-mission-control
bun cli.ts status
\`\`\`

Local only: orchestrator \`ws://localhost:9999\`. Optional env \`OPENCLAW_GATEWAY\`. Runtime state under \`~/.hurleyus/agent-os/\`.

## When

Created on GitHub **2026-03-20**. First commit **11:13 AM ET** same day: full v2 surface (Ink + WS + zsh + CLI + Mission Control seed). Second commit **10:25 PM ET**: \`.gitignore\` only. GitHub \`pushed_at\` **2026-03-21T02:25:13Z**. Pack prepared **2026-09-08 ~5:17 PM ET**. Draft + assets only.

## Why

I needed a shell-native control plane that treats agents like terminals with jobs. Ink for the operator view, WebSocket for fan-out, real zsh so aliases and git muscle memory stay intact, and a Mission Control Phase 1 seed so the queue is not empty on day one. The Anthropic \`core.ts\` path is the API-side twin when you want model output without a shell; the gaps (missing SDK dep, tracked \`.env\`) are the honest day-one scars.

**Engagement Q:** How would you unify the Ink/WS/zsh path and the Anthropic \`core.ts\` path: one CLI surface, or keep them as two intentional modes?
`;

const LAUNCHPAD_COVER =
  "/blog/launchpad-nye2024-boilerplate-providers-unwired/cover.png";

const LAUNCHPAD_CONTENT = `![README vs tree](/blog/launchpad-nye2024-boilerplate-providers-unwired/screenshots/readme-vs-tree.png)

## Who

I wanted one Next repo I could clone for every Hustle Launch lander (auth, leads DB, email, payments, analytics) instead of re-wiring Clerk and Resend on each client site.

## What

Public **michaelmonetized/launchpad**. v0.1.0. HEAD \`5447591\`. **8** commits. README sells LaunchPad by Hustle Launch as the premier boilerplate for websites / apps / sales landers. Tree at HEAD actually has:

1. Stock **Create Next App** \`app/page.tsx\` + layout metadata still titled Create Next App
2. shadcn new-york kit: **16** UI primitives (~1487 LOC) with **no** lead form page
3. \`providers/{clerk,convex,posthog}.tsx\` written, **never imported** into \`layout.tsx\`
4. \`middleware.ts\` = bare \`clerkMiddleware()\` (edge without mounted provider tree)
5. \`app/api/send\` Resend route to \`delivered@resend.dev\`, \`from\` = env or **notify@uncap.us**
6. \`stripe\` + \`@sentry/nextjs\` in package.json: **zero** app imports; Stripe implementation is a dumped Theo \`STRIPE.md\` cursor rule
7. **No** \`convex/\` schema folder. ConvexReactClient wrapper only.

![Stack deps vs usage](/blog/launchpad-nye2024-boilerplate-providers-unwired/screenshots/stack-deps.png)

![Providers unwired](/blog/launchpad-nye2024-boilerplate-providers-unwired/screenshots/providers-unwired.png)

## Where

[github.com/michaelmonetized/launchpad](https://github.com/michaelmonetized/launchpad) (public, MIT (c) 2024 Hustle Launch). README points at launchpad.hustlelaunch.com and \`/pro\`. Pack-time DNS: **NXDOMAIN** for \`launchpad.hustlelaunch.com\`. Sibling contrast: **hustlestack-starter/template** are empty mkproject husks (SKIPPED); **convex-nextfaster** actually ships Convex ecommerce schema; **uncap.us** is the live product. LaunchPad is the unfinished public starter claim.

![Domain NXDOMAIN](/blog/launchpad-nye2024-boilerplate-providers-unwired/screenshots/domain-nxdomain.png)

## When

**2024-12-31** (~03:15–04:13 ET). Create Next App, empty \`init\`, shadcn+README, providers+Resend+LICENSE.

**2026-01-08.** \`PLAN.md\` pivots identity to a **client portal** checklist (none of it built).

**2026-01-31.** Sync Theo Stripe cursor rule.

**2026-02-06.** HEAD Resend \`from\` env fallback to notify@uncap.us. No further commits.

![Commit arc](/blog/launchpad-nye2024-boilerplate-providers-unwired/screenshots/commit-arc.png)

![PLAN drift](/blog/launchpad-nye2024-boilerplate-providers-unwired/screenshots/plan-drift.png)

## Why

A README that lists the whole MarTech stack is not a framework. Mounting providers, owning a Convex schema, and resolving the product domain are what separate a clone-ready LaunchPad from a New Year's Eve aspiration with a nice UI kit. The Resend notify@uncap.us fallback is the only line that still points at how I actually ship mail.

**Engagement Q:** Would you publish a starter whose README lists Stripe/Sentry/Convex before the providers are mounted, or keep it private until \`layout.tsx\` and DNS match the marketing?
`;

const SIMPLE_COVER =
  "/blog/simple-nextjs-firebase-auth-social-keep-decision/cover.png";

const SIMPLE_CONTENT = `
## Who

I wanted a thin auth starter that did email + social without dragging Clerk or a Convex migration into launch week.

For anyone spinning a Next App Router app that needs Firebase Auth + a users doc and can live with honest leftovers.

## What

I built **simple** - public https://github.com/michaelmonetized/simple. HEAD da7e0b0. 10 commits. 0 stars. Default main. Version 0.1.0 (private: true). Claimed live URL https://simple-ivory.vercel.app is DEPLOYMENT_NOT_FOUND.

**Shipped (~1k LOC app/firebase/components):** Next 16 + React 19 + Firebase 12 Auth/Firestore. /, /login, /register. Email/password SignUpForm + LoginForm. Google / Facebook / Twitter Connect buttons (signInWithPopup / linkWithPopup). AuthProvider -> Firestore users. Generic CRUD in firebase/crud.js. Clamp spacing + Catppuccin color tokens. Security headers in next.config.mjs. Documented keep-Firebase decision.

![Auth surface](/blog/simple-nextjs-firebase-auth-social-keep-decision/screenshots/auth-surface.png)

![Keep Firebase decision](/blog/simple-nextjs-firebase-auth-social-keep-decision/screenshots/keep-firebase-decision.png)

**Launch arc:** four Sept 2024 init commits -> Dec 2025 / Feb 2026 CVE bumps -> console strip + HSTS/X-Frame headers -> architecture doc -> final console cleanup (#5).

![Security headers](/blog/simple-nextjs-firebase-auth-social-keep-decision/screenshots/security-headers.png)

**Gaps:** create-next-app README still; login/page.tsx exports RegisterPage; coerceeUserCredntial typo; console.warn left; hardcoded firebaseConfig; Hustle Launch branding; Tailwind pkg vs classic config; kitchen-sink env example; no middleware; Vercel deploy gone.

![Residue gaps](/blog/simple-nextjs-firebase-auth-social-keep-decision/screenshots/residue-gaps.png)

## Where

Code: https://github.com/michaelmonetized/simple - public.

Run: install deps then next dev.

Live: simple-ivory host is down (404).

## When

**2024-09-05** - fec428f to 1c2d5f5 four init commits.

**2025-12-29** - 7c5e849 cve vulnerabilities.

**2026-02-21 to 2026-03-23** - 03addd3 CVE; e0b5dee+407450f headers; 9b33e46 keep-Firebase; da7e0b0 HEAD.

## Why

![Commit arc](/blog/simple-nextjs-firebase-auth-social-keep-decision/screenshots/commit-arc.png)

Because launch week needed auth that already worked, with a written keep-Firebase decision.

**Engagement Q:** Redeploy simple-ivory and finish middleware, or keep as Firebase keep-decision reference until Convex revisit?

`;

const SALESPROMIS_COVER =
  "/blog/salespromis-wp-elementor-dump-vs-lovable-live/cover.png";

const SALESPROMIS_CONTENT = `![WP Engine Elementor dump vs Lovable live domain](/blog/salespromis-wp-elementor-dump-vs-lovable-live/screenshots/wp-vs-lovable.png)

## Who

I needed a place to version the **SalesPromis production site** — the WordPress tree that actually ran the SSDI qualify funnels on WP Engine.

Who this write-up is for: operators who still have a private “production site” repo months after the public domain moved stack; builders who want to see how thin the custom layer is under an Elementor + Salert + HurryTimer kit; anyone who has ever opened GitHub expecting the live frontend and found a wp-content dump instead.

## What

I keep **HurleyUS/SalesPromis** private. README line one: **SalesPromis! Production Site.** Line three: “This is the production site for SalesPromis!”

What the tree actually is: a **WordPress wp-content-only** dump. Core, \`wp-admin\`, uploads, and \`wp-config.php\` are gitignored. Tracked: **7,723** files. GitHub disk ~36 MB. Linguist calls primary language **JavaScript** because Elementor’s JS weight wins — PHP is still ~16 MB of bytes.

Builder stack from the plugins directory: **Elementor 3.21.8**, Elementor Pro, Dynamic Content for Elementor (~45M on disk alone), Hello Elementor **3.0.2**, child theme **hello-theme-child-master 2.0.0**. Host signals: WP Engine \`object-cache.php\` (Memcached Redux) + \`wpe-cache-plugin\` mu-plugin + force-strong-passwords. Also in the kit: Really Simple SSL, Redirection, MonsterInsights, SVG Support, Admin Site Enhancements, **HurryTimer**, **Salert 1.2.5**.

![Custom ssdi-qualify.js enqueue + countdown/testimonial behavior](/blog/salespromis-wp-elementor-dump-vs-lovable-live/screenshots/ssdi-qualify-custom.png)

Custom operator code is small. \`functions.php\` enqueues \`ssdi-qualify.js\` only when the request is an Elementor \`e-landing-page\` whose permalink contains \`ssdi-qualify\`. The script (~294 lines) floors \`.elementor-countdown-minutes\` so the timer does not fall below **05**, prepends random faces from \`100k-faces.glitch.me\` into Salert wrappers, and renders two randomized “Qualify SSDI” testimonial cards (hardcoded first-name quotes + five-star glyphs) into Elementor widget \`data-id="8c4d0c4"\`. Salert’s own plugin header says it generates **fake sales notifications**.

There is **no** \`package.json\`. There is a **303-line** \`.cursor/rules/STRIPE.md\` (“How I Stay Sane Implementing Stripe”) with **zero** Stripe usage in the PHP/JS app tree.

![Plugin weight vs child-theme custom surface](/blog/salespromis-wp-elementor-dump-vs-lovable-live/screenshots/plugin-stack.png)

## Where

Code: [github.com/HurleyUS/SalesPromis](https://github.com/HurleyUS/SalesPromis) — **private**, org **HurleyUS**, default branch \`main\`, empty GitHub description and homepage fields. Local Projects checkout on m1Pro13 still lists origin \`michaelmonetized/SalesPromis\`; Brain \`_src\` tracks \`HurleyUS/SalesPromis\`. Same HEAD.

Live domain: [www.salespromis.com](https://www.salespromis.com/) — **HTTP 200**, Cloudflare, title **SalesPromis | AI-Powered Lead Generation - Pay Per Result**. HTML at pack time loads Vite-hashed \`/assets/index-*.js|css\` and \`/lovable-uploads/…\`. That is a **Lovable SPA**, not this WordPress tree. Canonical points at \`https://www.salespromis.com/\`. Portal copy elsewhere references a Tronador login — outside this repo.

Audience sits next to every client lead-gen site that got rebuilt on a new host while the old wp-content dump stayed the Git source of truth.

## When

**2024-08-15 15:48 ET** — \`init\` by Michael Monetized. Full dump: plugins, themes, mu-plugins, icons, GPL-3 \`LICENSE.md\`, three-line README.

**2026-01-31 05:37 ET** — \`chore: sync all changes\`. Diff is **one file**: \`.cursor/rules/STRIPE.md\` (+303). That is HEAD \`c543864\`. GitHub \`pushed_at\` 2026-01-31T10:39:16Z.

Two commits. Seventeen months between them. No Elementor upgrade commit in git history after init — whatever changed on the server between those dates did not land as a second content sync.

![Two-commit arc Aug 2024 → Jan 2026](/blog/salespromis-wp-elementor-dump-vs-lovable-live/screenshots/commit-arc.png)

## Why

Because a private wp-content dump is still useful as an **artifact** of the Elementor funnel even after the marketing domain moves — as long as you do not pretend the dump is still the live renderer.

Because the custom surface that mattered for the SSDI qualify landing page was one child-theme script and an enqueue gate, not the 45 MB Dynamic Content plugin folder.

Because the HEAD commit is a perfect operator scar: I synced a Stripe sanity rule into a WordPress lead-gen dump that never charged a card in-tree.

**Engagement Q:** When the README still says “production site” and the live HTML loads Lovable assets — which one should the content factory treat as the product under review?
`;

const MYBATHROOMCONVERSION_COVER =
  "/blog/mybathroomconversion-elementor-salespromis-xdebug-purge/cover.png";

const MYBATHROOMCONVERSION_CONTENT = `![Illustrative home composite from indexed marketing copy](/blog/mybathroomconversion-elementor-salespromis-xdebug-purge/screenshots/home-composite.png)

## Who

I keep meeting bathroom remodel landers that look expensive and behave like a mailto form.

Homeowners need a one-day tub-to-shower path, a phone that answers, and financing language that does not invent a bank. Operators need the Opt In record to leave WordPress and hit an intake API. Agencies that inherit WP Engine content+plugins repos need to find the money path in the child theme, not in another aspirational PLAN checkbox.

If you have ever found \`xdebug_info()\` at the webroot of a client site, this is the audit trail.

## What

I maintain **www.mybathroomconversion.com**. Private **HurleyUS/www.mybathroomconversion.com**, GPL-3.0, five commits, HEAD \`dc5a091\`.

README fact: commissioned by **SalesPromis** through **Hustle Launch** for **RemodelingLoans.com**. Marketing surface (search index; live TLS failed here): dream bath/shower in as little as one day; phone **888-859-8916**; free in-home design consultation.

Stack: Hello Elementor **3.1.1** + child **2.0.0**, Elementor **3.23.4**, Elementor Pro **3.23.3**, Dynamic.ooo **3.0.11**, Rank Math **1.0.225**, MonsterInsights **9.0.0**, Meta pixel **3.0.16**. WP Engine ignore strips core/uploads/config.

Operator spine: \`elementor_pro/forms/new_record\` to \`my_bathroom_conversion_lead\` to Opt In to POST \`https://api.salespromis.com/endpoint/intake/\` with \`API-KEY\` header; success writes \`ABSPATH/.log/salespromis-$now-$id.log\`. Hardcoded SalesPromis API key still in child theme. Value redacted here; rotate it.

![Lead pipe composite](/blog/mybathroomconversion-elementor-salespromis-xdebug-purge/screenshots/lead-pipe-composite.png)

## Where

Code private on HurleyUS (local remote still michaelmonetized; same HEAD). Product: **https://www.mybathroomconversion.com**.

Pack-day: DNS **141.193.213.10 / .11**; HTTPS TLS handshake alert; HTTP Cloudflare **409**. Composites labeled. WP File Manager **7.2.9** still vendored (906 files).

![Stack composite](/blog/mybathroomconversion-elementor-salespromis-xdebug-purge/screenshots/stack-composite.png)

## When

**August 15, 2024, 4:03 PM ET:** \`8324926\` init. Plugins, themes, SalesPromis logs, \`.htaccess\`, \`local-xdebuginfo.php\`.

**4:06 PM ET:** \`17627c2\` README commission chain.

**4:19 PM ET:** \`ad06651\` untrack \`.htaccess\` + \`.log/salespromis-*.log\`.

**January 8, 2026, 12:21 PM ET:** \`eb7581e\` PLAN.md claims lead capture Not Started while the hook already posts.

**February 27, 2026, 5:18 AM ET:** \`dc5a091\` PR #2. Delete \`<?php xdebug_info();\`, add SECURITY-VERIFICATION.md, closes Issue #1 \`[Launch Week][P0]\`. Checklist boxes remain open on purpose.

**September 8, 2026:** pack day. Draft and assets only. Do not publish.

![Security composite](/blog/mybathroomconversion-elementor-salespromis-xdebug-purge/screenshots/security-composite.png)

![PLAN drift composite](/blog/mybathroomconversion-elementor-salespromis-xdebug-purge/screenshots/plan-drift-composite.png)

## Why

A bathroom lead lander that cannot POST an Opt In into intake is a brochure with nicer tile photography.

\`xdebug_info()\` at the webroot was a labeled P0 with a one-line PHP file and a merged PR.

PLAN.md denying lead capture while \`my_bathroom_conversion_lead\` posts to SalesPromis is document drift. Believe the hook, not the checkbox.

Deleting the probe while leaving WP File Manager and a hardcoded API key means the security story is a chapter, not a finale.

Would you rotate the hardcoded SalesPromis API key first, or uninstall WP File Manager before the next launch-week checklist?
`;

const MYBATHROOM_SECURITY_FOLLOWUP_COVER =
  "/blog/mybathroomconversion-wp-file-manager-gone-key-to-env/cover.png";

const MYBATHROOM_SECURITY_FOLLOWUP_CONTENT = `![Security residue removed from WordPress tree](/blog/mybathroomconversion-elementor-salespromis-xdebug-purge/screenshots/security-composite.png)

## Who

Operators who inherit WP Engine content+plugins dumps. SalesPromis / Hustle Launch folks who still run Opt In into api.salespromis.com. Anyone who left Issue #4 and #5 open after the February xdebug delete.

If the February post left you staring at WP File Manager 7.2.9 and a hardcoded intake key, this is the close of that chapter.

## What

On **HurleyUS/www.mybathroomconversion.com**, PR **#7** merged as \`928819d\` and closed Issues **#4** and **#5**.

Removed the vendored **WP File Manager 7.2.9** tree under \`wp-content/plugins/wp-file-manager\` (pack had flagged ~906 files). That plugin is gone from main.

Moved the Salespromis Opt In intake off a hardcoded API key. Child theme now reads \`SALESPROMIS_API_KEY\` from the environment (or a \`SALESPROMIS_API_KEY\` constant in untracked \`wp-config.php\`). If unset, intake skips and logs instead of posting with a secret baked into git.

Also added \`.env.example\` (empty placeholder) and extended \`.gitignore\` for \`.env.*\` and \`.log/\`.

## Where

Repo: **https://github.com/HurleyUS/www.mybathroomconversion.com**  
PR: **https://github.com/HurleyUS/www.mybathroomconversion.com/pull/7**  
Live product still **https://www.mybathroomconversion.com**. Prior field notes: [/blog/mybathroomconversion-elementor-salespromis-xdebug-purge](/blog/mybathroomconversion-elementor-salespromis-xdebug-purge).

## When

**February 27, 2026:** PR #2 deleted webroot \`xdebug_info()\` and left File Manager + the key on the open checklist.

**September 8, 2026:** pack day still listed both as remaining residue.

**September 8, 2026 evening ET (merge \`2026-09-09T01:41:28Z\` UTC):** PR #7 lands. Issues #4 and #5 CLOSED.

## Why

Deleting a one-line xdebug probe is a chapter. Shipping a bathroom Opt In lander with a file-manager plugin and a key in the child theme is still an open security story.

The key that was in git history is not magically clean. Rotate it at Salespromis if it is still active. Set \`SALESPROMIS_API_KEY\` on the host before Opt In leads will post again.

Would you rotate the old Salespromis key first, or confirm File Manager is gone from the production host copy before the next lead form test?
`;

const SIMPLE_FIREBASE_FOLLOWUP_COVER =
  "/blog/simple-firebase-env-only-sa-wiped/cover.png";

const SIMPLE_FIREBASE_FOLLOWUP_CONTENT = `![Firebase residue cleared from simple starter](/blog/simple-nextjs-firebase-auth-social-keep-decision/screenshots/residue-gaps.png)

## Who

Operators who cloned **michaelmonetized/simple** after the keep-Firebase decision and still had a hardcoded client config or a local service-account file sitting next to the tree.

If the prior post left Issue #7 open on firebase leftovers, this is the close.

## What

On **michaelmonetized/simple**, PR **#12** closed Issue **#7**.

Client Firebase is env-only now and fails closed when the env is missing. It does not log config values. serviceAccount / admin credential patterns are gitignored. A leftover local SA file was wiped from the working tree (it was never committed).

Pack had flagged hardcoded firebase leftovers. Those are gone from the tree.

## Where

Repo: **https://github.com/michaelmonetized/simple**  
PR: **https://github.com/michaelmonetized/simple/pull/12**  
Prior field notes: [/blog/simple-nextjs-firebase-auth-social-keep-decision](/blog/simple-nextjs-firebase-auth-social-keep-decision).

## When

**March 23, 2026:** keep-Firebase decision landed; residue (hardcoded config) still on the checklist.

**September 8, 2026 evening ET:** PR #12 merges. Issue #7 CLOSED.

## Why

A written keep-Firebase decision is not the same as a clean tree. Env-only client config and ignoring admin credential patterns close the security chapter the pack still listed.

Would you rotate any Firebase web keys that ever lived in git history, or redeploy simple-ivory next now that the residue is gone?`;

const LAUNCHPAD_PROVIDERS_FOLLOWUP_COVER =
  "/blog/launchpad-clerk-convex-posthog-wired/cover.png";

const LAUNCHPAD_PROVIDERS_FOLLOWUP_CONTENT = `![Providers now mounted in launchpad layout](/blog/launchpad-nye2024-boilerplate-providers-unwired/screenshots/providers-unwired.png)

## Who

Anyone who cloned **michaelmonetized/launchpad** after the NYE 2024 boilerplate claim and found \`providers/{clerk,convex,posthog}.tsx\` written but never imported.

If the prior post was about unwired providers, this is the wire-up close.

## What

On **michaelmonetized/launchpad**, PR **#7** closed Issue **#3**.

Root layout mounts **Clerk, then Convex, then PostHog**. Convex uses \`@clerk/nextjs\` \`useAuth\` so it matches \`clerkMiddleware\`. Soft-guards keep the app from exploding when env vars are unset.

Deps were advertised for months. They finally mount.

## Where

Repo: **https://github.com/michaelmonetized/launchpad**  
PR: **https://github.com/michaelmonetized/launchpad/pull/7**  
Prior field notes: [/blog/launchpad-nye2024-boilerplate-providers-unwired](/blog/launchpad-nye2024-boilerplate-providers-unwired).

## When

**December 31, 2024:** providers written, never imported.

**September 8, 2026 evening ET:** PR #7 merges. Issue #3 CLOSED.

## Why

A README that lists Clerk, Convex, and PostHog is marketing until \`layout.tsx\` mounts them. Soft-guards mean local clones without secrets still boot.

Would you point launchpad.hustlelaunch.com at this tree next, or keep the starter private until DNS matches the stack?`;

const MISSION_CONTROL_OS_AUTH_FOLLOWUP_COVER =
  "/blog/mission-control-os-pending-auth-agency-timeout/cover.png";

const MISSION_CONTROL_OS_AUTH_FOLLOWUP_CONTENT = `![mission-control-os auth gates after pending-session fix](/blog/hurley-mission-control-human-agent-comms/screenshots/dashboard-threads.png)

## Who

Operators hitting **Hustle-Launch/mission-control-os** after Google OAuth who saw AgencyGate / PortalGate / cockpit flash signed-out while Clerk was still pending, or sat on infinite Working during agency create/select.

This is the mission-control-os web product, not the Go p10k TUI and not hurley-mission-control.

## What

On **Hustle-Launch/mission-control-os**, PR **#64** merged as \`d09322c\` and closed Issues **#50** and **#51**.

Shared auth hooks keep pending sessions from looking signed-out on AgencyGate, PortalGate, and cockpit. Agency org create/select now has a hard timeout and surfaces an error instead of infinite Working. PortalGate pending shows a setup CTA.

PR CI was green. **Prod redeploy is still blocked on an invalid VERCEL_TOKEN secret** (infra, separate from this code fix).

## Where

Repo: **https://github.com/Hustle-Launch/mission-control-os**  
PR: **https://github.com/Hustle-Launch/mission-control-os/pull/64**  
Sibling names to keep straight: [/blog/mission-control-go-tui-p10k-portfolio-ops](/blog/mission-control-go-tui-p10k-portfolio-ops) (Go TUI) and [/blog/hurley-mission-control-human-agent-comms](/blog/hurley-mission-control-human-agent-comms) (Convex comms plane).

## When

**September 8, 2026 evening ET:** PR #64 lands (\`d09322c\`). Issues #50 and #51 CLOSED. Prod token rotation still open.

## Why

Pending Clerk sessions that render as signed-out train operators to re-auth loops. Infinite Working on agency create hides real failures. The code path is fixed; the Vercel token is the remaining ship gate.

Would you rotate VERCEL_TOKEN first, or smoke AgencyGate against a preview deploy before touching prod?`;

const HUSTLE_SUITE_VERCEL_FOLLOWUP_COVER =
  "/blog/hustle-suite-vercel-app-restores/cover.png";

const HUSTLE_SUITE_VERCEL_FOLLOWUP_CONTENT = `![hustle suite vercel.app landers restored](/blog/hustledesk-com-eight-dollar-helpdesk-lander-wordpress-domain/cover.png)

## Who

Operators who opened Hustle Launch product landers after packs flagged DEPLOYMENT_NOT_FOUND and found no live Vercel host.

## What

Closed the restore batch across the hustle* suite and put *.vercel.app hosts back online:

- hustledesk-com#1 - https://hustledesk-com.vercel.app
- hustlecrm-com#1 - https://hustlecrm-com.vercel.app
- hustleconvert-com#1 - https://hustleconvert-com.vercel.app
- hustlechat-com#1 - https://hustlechat-com.vercel.app
- hustleforms-com#1 - https://hustleforms-com.vercel.app
- hustlemail-com#2 - PostCSS @tailwindcss/postcss fix plus https://hustlemail-com.vercel.app

Git-linked Vercel prod and Ship wiring where needed. Custom DNS stays a separate overnight park.

## Where

Repos under the hustle* product set. Live review surfaces are the vercel.app hosts above.

## When

September 8, 2026 evening ET: restore issues closed; packs that read DEPLOYMENT_NOT_FOUND now resolve.

## Why

A lander with no deploy is a dead demo. vercel.app hosts unblock review while custom DNS waits.

Would you point custom DNS next, or smoke each vercel.app host against the pack checklist first?
`;

const HMS_VERCEL_FOLLOWUP_COVER =
  "/blog/hms-cyan-six-vercel-live/cover.png";

const HMS_VERCEL_FOLLOWUP_CONTENT = `![hms live on hms-cyan-six.vercel.app](/blog/hms-hustle-management-system-live-editor/cover.png)

## Who

Operators who opened the Hustle Management System after packs flagged a missing Vercel deploy and found no live host to review.

## What

Closed hms#1. The public review host https://hms-cyan-six.vercel.app is up again after the pack read DEPLOYMENT_NOT_FOUND. Git-linked Vercel prod and Ship wiring restored the cyan-six preview.

## Where

Repo under the hms / Hustle Management System product set. Live review surface: https://hms-cyan-six.vercel.app. Prior field notes: [/blog/hms-hustle-management-system-live-editor](/blog/hms-hustle-management-system-live-editor).

## When

September 8, 2026 evening ET: hms#1 closed; cyan-six vercel.app host resolves.

## Why

A management system with no deploy is a dead demo. The cyan-six host unblocks review while custom DNS stays a separate park.

Would you smoke the live editor against the pack checklist next, or point custom DNS once cyan-six looks clean?
`;

const CODEFOLIO_DEPLOY_MD_FOLLOWUP_COVER =
  "/blog/codefolio-deploy-md-no-live-url/cover.png";

const CODEFOLIO_DEPLOY_MD_FOLLOWUP_CONTENT = `![codefolio DEPLOY.md landed, no live URL yet](/blog/codefolio-spec-first-github-portfolio-saas/cover.png)

## Who

Operators who expected a live codefolio host after packs flagged a missing deploy, and anyone tracking codefolio#1 as the ship gate for a public URL.

## What

Closed codefolio#1 with docs only. DEPLOY.md landed so the restore path is written down. There is still no vercel.app URL and no production host. Convex env vars and codefolio.dev stay parked until those secrets exist.

This is an honest docs-only close, not a live restore.

## Where

Repo under the codefolio product set. Docs: DEPLOY.md in-tree. Prior field notes: [/blog/codefolio-spec-first-github-portfolio-saas](/blog/codefolio-spec-first-github-portfolio-saas). No live review URL yet.

## When

September 8, 2026 evening ET: codefolio#1 closed on DEPLOY.md alone; Convex env and custom DNS still open.

## Why

Shipping a deploy guide without Convex env still leaves a dead demo. Documenting the path closes the pack item without pretending a host exists.

Would you fill Convex env and cut a vercel.app preview next, or keep codefolio.dev parked until the full auth stack is ready?
`;


const LICENSE_COPYRIGHT_FLEET_FOLLOWUP_COVER =
  "/blog/license-copyright-alignment-fleet/cover.png";

const LICENSE_COPYRIGHT_FLEET_FOLLOWUP_CONTENT = `![LICENSE copyright alignment across the portfolio](/blog/license-copyright-alignment-fleet/cover.png)

## Who

Operators and forks reading LICENSE files across the Michael Hurley / HurleyUS / michaelmonetized portfolio who still saw mismatched copyright lines or missing MIT text.

## What

Closed a 20-issue LICENSE copyright mismatch fleet across **10 repos**. Copyright lines now name Michael Hurley / the owning org. MIT was added where a license file was missing.

Repos:

- stripe-convex
- slopops
- orclawstrator
- nvibe
- compare
- agent-os
- agent-computer-use
- WhisperCPPonEverything
- s12.in
- ileague-app

Sample merges: https://github.com/michaelmonetized/stripe-convex/pull/18 and https://github.com/HurleyUS/s12.in/pull/35. All squash-merged.

## Where

Across michaelmonetized and HurleyUS public repos listed above. This is paperwork truth in git, not a product deploy story.

## When

September 8, 2026 evening ET: the fleet closed in one pass after packs flagged copyright drift.

## Why

Mismatched LICENSE copyright is a trust and compliance scar. One narrative covers the batch so the catalog does not grow ten near-duplicate posts.

Would you audit remaining private repos next, or leave LICENSE sweeps for the next pack day?
`;

const EMPTY_README_FILLS_FLEET_FOLLOWUP_COVER =
  "/blog/empty-readme-fills-fleet/cover.png";

const EMPTY_README_FILLS_FLEET_FOLLOWUP_CONTENT = `![Empty READMEs filled with real usage](/blog/fab-analytics-same-day-php-js-ga-drop-in-json-disk/cover.png)

## Who

Operators who cloned michaelmonetized demos and found empty README stubs after packs flagged content-factory gaps.

## What

Closed six empty-README issues across three repos with real usage docs (no fake stars or metrics):

- animated-gradient-border-on-transparent-background #1+#2 via PR #3 - CSS mask border demo; install/run from package.json
- fab-analytics #1+#2 via PR #3 - PHP/JS disk analytics; honest usage
- shagent #3+#6 via PR #7 - Bun + OpenRouter + MCP CLI docs

## Where

Public michaelmonetized repos above. Paperwork in git README files, not deploys.

## When

September 8, 2026 evening ET: the three PRs merged and closed the six issues.

## Why

An empty README is a dead handoff. Real install/run copy is the minimum bar for a public demo repo.

Would you keep README fills in the next pack day sweep, or require a usage section before a repo goes public?
`;

const VANITY_PHONE_METRICS_FLEET_FOLLOWUP_COVER =
  "/blog/vanity-phone-metrics-honesty-fleet/cover.png";

const VANITY_PHONE_METRICS_FLEET_FOLLOWUP_CONTENT = `![Vanity phones and fake metrics scrubbed across five repos](/blog/vanity-phone-metrics-honesty-fleet/cover.png)

## Who

Operators and visitors hitting HurleyUS public sites who still saw 555 vanity phone numbers or inflated hero metrics that did not match reality.

## What

Closed ten vanity-phone and fake-metrics issues across five repos:

- HurleyUS/www.yourzaxbys.com #24+#23 via PR #25 - (555) ZAXBYS to mailto:support@yourzaxbys.com; fake team phones dropped
- HurleyUS/iPro-main-web #10+#8 via PR #12 - (555) GOLF-PRO removed; kept hello@ipro.golf
- HurleyUS/freview #3+#2 - false positive (no phone in repo); STATUS close
- HurleyUS/s12.in #33+#30 via PR #36 - hero 10M+/50K+/99.9% to honest capability copy
- HurleyUS/ileague-app #7+#4 - already fixed on main via prior PR #10; closed; DNS/Coming Soon still parked

## Where

Public HurleyUS repos above. Copy and contact truth in git, not a new product launch.

## When

September 8, 2026 evening ET: the fleet closed after packs flagged vanity phones and fake hero stats.

## Why

Vanity 555 numbers and inflated metrics are trust scars. Honest mailto and capability copy is the minimum bar for public portfolio sites.

Would you keep vanity-phone and fake-metrics sweeps in the next pack day, or require contact/metrics review before a site goes live?
`;

const COMING_SOON_HONESTY_FLEET_FOLLOWUP_COVER =
  "/blog/coming-soon-waitlist-honesty-fleet/cover.png";

const COMING_SOON_HONESTY_FLEET_FOLLOWUP_CONTENT = `![Coming Soon shells replaced with honest status landers](/blog/coming-soon-waitlist-honesty-fleet/cover.png)

## Who

Visitors and operators who hit waitlist Coming Soon shells, Notify me forms, or Planned SSO stubs that still read as live product instead of honest status.

## What

Closed the Coming Soon honesty fleet across six shipped surfaces and logged one parked gap.

Shipped:

- michaelmonetized/hustledesk-com issues #6 and #4 via PR #7: SSO labeled Planned/not shipped
- michaelmonetized/kitchen issues #4 and #2 via PR #5: Team Coming soon / Notify replaced with Not available yet / Use beta
- HurleyUS/merchwinner.com issues #65 and #64 via PR #66: settings stub swapped for honest status
- HurleyUS/coordinatorapp.com issues #37 and #36 via PR #38: real /docs status, example-only metrics, waitlist form removed
- HurleyUS/iPro-main-web issues #9 and #7 via PR #11: /ileague /itour /iconf waitlist shells became honest status landers
- michaelmonetized/omnux issues #12 and #10: STATUS close only (research/docs; lander stays on asahi Pages)

Parked gap:

- HurleyUS/ileague-app issues #8 and #5: lander PR #10 merged, but www.ileague.app still shows Coming Soon until Vercel/DNS points at apps/web

## Where

Across hustledesk, kitchen, merchwinner, coordinatorapp, iPro-main-web, omnux, and the ileague.app park. Truth lives in the merged PRs and the live landers those PRs ship.

## When

September 8, 2026 evening ET: the honesty fleet closed in one pass after packs flagged waitlist shells that still overclaimed readiness.

## Why

Coming Soon and Notify forms that cannot fulfill a waitlist are product lies. Honest Planned/not shipped and Not available yet copy protects trust until the real surface ships. ileague.app stays open until DNS and Vercel catch the lander.

Would you wire www.ileague.app to apps/web next, or leave the park until the next DNS window?`;

const MONARCHMOUNTAINFOUNDATIONS_COVER =
  "/blog/monarch-mountain-foundations-wordpress-to-next-dns-still-php/cover.png";

const MONARCHMOUNTAINFOUNDATIONS_CONTENT = `![Monarch Mountain Foundations Next rebuild hero. Structural Concrete](/blog/monarch-mountain-foundations-wordpress-to-next-dns-still-php/screenshots/home.png)

## Who

I build for operators in the mountains. Monarch Mountain Foundations pours structural concrete in Highlands, Cashiers, and the surrounding Western North Carolina ridge lines: footings, foundation walls, slabs, driveways, sidewalks, surveying and job-site prep.

The contractor needed a lead surface that matched the job sites: Angi / Chamber / BBB trust, a phone that actually rings, a quote form that lands in email. Homeowners and builders needed to see real pours, not a stock theme.

I am the builder under Hustle-Launch. The concrete is theirs. The stack is mine to keep honest, including when DNS and git disagree.

If you ship local-business sites, MarTech lead paths, or WordPress exits: this is the field notes on a migration that finished in the repo and not at the nameserver.

## What

I rebuilt monarchmountainfoundations.com as a private Next.js App Router site.

Stack on the box: **Next.js ^16.1.6**, React 19, Tailwind v4, Bun, Resend, Sentry, PostHog provider, Radix, Zod/RHF on forms. README still says Next 15.5.6. Package **0.1.0**. Repo: \`Hustle-Launch/monarchmountainfoundations.com\`.

![WordPress www vs Next Vercel. Dual hosts](/blog/monarch-mountain-foundations-wordpress-to-next-dns-still-php/screenshots/dual-hosts.png)

What exists in code:

- Full page set: home, about, foundations, driveways + sidewalks, surveying + job site prep, gallery, contact
- Resend contact API (\`notify@uncap.us\` to \`monarchmountainfoundationsinc@gmail.com\` + customer thank-you)
- Schema.org LocalBusiness JSON-LD (phone 828-508-3602, Highlands geo, service offers)
- SEO files (\`sitemap.ts\`, \`robots.ts\`, \`manifest.ts\`), CSP / HSTS / Permissions-Policy, Sentry configs
- Job-site gallery categories with real \`public/images\` pours and slabs
- Gold/navy contractor chrome, fixed bottom bar, Angi 2025 / Chamber / BBB trust row

What is declared but empty or unused:

- **Convex** in package.json. \`convex/\` is a \`.gitkeep\`
- **Clerk** in package.json. No Clerk routes or wrappers in \`app/\` / \`components/\`
- Gallery page exists; **not listed in \`sitemap.ts\`**
- Google Search Console verification string is still the placeholder

Homepage video still points at live WordPress uploads:

\`https://www.monarchmountainfoundations.com/wp-content/uploads/Monarch-Post-FX.m4v\`

Same for the rock-drilling GIF. The rebuild depends on the old host for motion assets.

## Where

Customer DNS today: [www.monarchmountainfoundations.com](https://www.monarchmountainfoundations.com). Pack-day headers: **X-Powered-By: PHP/8.3.33**, LiteSpeed, \`x-redirect-by: WordPress\`.

Next rebuild: [monarchmountainfoundations-com.vercel.app](https://monarchmountainfoundations-com.vercel.app). Headers: Vercel, CSP, HSTS preload, **X-Robots-Tag: index, follow**. \`vercel.json\` has \`deploymentEnabled\` for \`main\`/\`master\` set to **false**.

Canonical metadata, sitemap, and LocalBusiness \`@id\` all name \`https://monarchmountainfoundations.com\`, the host that still serves PHP.

Audience sits with Highlands–Cashiers construction buyers and with builders watching WNC client cutovers next to Mack's / Barbque-style apex-live sites.

![Foundations service page on the Next rebuild](/blog/monarch-mountain-foundations-wordpress-to-next-dns-still-php/screenshots/foundations.png)

## When

**2026-01-08.** Init. Next.js, Convex slot, Tailwind. OPPORTUNITIES.md and PLAN.md the same day. Four January commits. Scaffolding, not the migration.

**2026-01-31.** Chore sync.

**2026-02-06.** Upgrade to Next 16 / React 19. Tailwind v4 \`@import\` fix. Then the load-bearing commit: \`ba2a761\`, full WordPress to Next.js migration, all pages, images, content.

**2026-02-09–11.** Resend contact form. Compressed video backgrounds. Foundations page 1:1 polish, white navbar, fixed bottom bar. SEO and production polish. TypeScript \`manifest\` / \`sitemap\` / \`robots\`.

**2026-02-21–28.** LocalBusiness structured data. Tailwind-first CSS. Sentry. Gallery with categorized photos. Kebab-case components. \`lib/constants.ts\`. Hero email fix. Strict tsconfig / next.config / Sentry PR. Build gate. Launch-week TypeScript fixes. Remove GitHub Actions. Vercel called out as CI. Security headers PR (HSTS, CSP, Permissions-Policy). Densest month: **24 commits**.

**2026-05.** shipprep install, revert, ignore local M4V drops, then shipprep observability + Blacksmith deploys. Main Git auto-deploy stays off.

**2026-08-08 6:55 AM ET.** \`c7e4e30\`, set \`X-Robots-Tag\` to \`index, follow\` on Vercel. HEAD. Thirty-three commits on \`main\`.

That is the clock from empty client repo to a hardened Next rebuild that is not what www serves.

![Commit journey Jan through Aug](/blog/monarch-mountain-foundations-wordpress-to-next-dns-still-php/screenshots/journey.png)

## Why

WordPress exits fail two ways: a pretty Vercel URL nobody's DNS points at, or a DNS flip with a half-ported theme. I did the hard content port (page parity, Resend leads, Schema, gallery, security headers), then left the apex on LiteSpeed PHP while the rebuild sat on a project alias with main auto-deploy disabled.

sitrep.md still says PROTOTYPE and "last commit January 31." ROADMAP says Production. PLAN still has homepage unchecked. The tree and the Aug HEAD are the tie-breaker: the product pages exist; the cutover does not.

Sibling context: Mack's Shack and Barbque Wagon are WNC food clients whose apex already speaks Next. This one is the concrete contractor where git moved and DNS did not.

If you run a WordPress local-business site in the mountains, would you flip DNS the week the Next rebuild matches content 1:1, or keep WordPress live until every \`wp-content\` hotlink is gone?
`;

const KINGSROOFINGNC_COVER =
  "/blog/kingsroofingnc-pixel-perfect-wp-to-next-lift/cover.png";

const KINGSROOFINGNC_CONTENT = `![Kings Roofing homepage hero. Green metal roof, Free Quote CTA](/blog/kingsroofingnc-pixel-perfect-wp-to-next-lift/screenshots/home.png)

## Who

I get hired when a contractor's site still works for referrals and dies for everyone else: plugins rotting, forms flaky, hosting bill arguing with the phone.

Kings Roofing already had a personality: orange \`#FF7620\`, leaping lion, metal-roof hero, color pickers, carport kits, Waynesville-to-Highlands location pages. Redesigning that into a generic "modern roofing" template would have trained half of Haywood County that the company changed crews.

This write-up is for operators who will keep the weird brand orange on purpose, and for WNC folks who just need the site to load when they search the truck wrap.

## What

Public repo [Hustle-Launch/kingsroofingnc.com](https://github.com/Hustle-Launch/kingsroofingnc.com). Package **0.1.0**, Bun, Next.js **16.1.6**, React 19, Tailwind 4.

Stack on HEAD: Resend for quote mail, PostHog, Sentry (\`withSentryConfig\` + CSP/HSTS/frame DENY), Phosphor via react-icons, Biome/Oxlint/tsgo local gates. No Stripe on \`main\`. A local branch has quote-fee experiments that never reached HEAD, so I am not narrating them as shipped.

![Residential services page](/blog/kingsroofingnc-pixel-perfect-wp-to-next-lift/screenshots/residential.png)

What actually shipped:

- Pixel-faithful homepage: Residential & Commercial hero, Free Quote / Call box, New Roof Installation with YouTube embed, Re-Roofing orange band, Roof Repair checklist, four location photo cards, "Roofers in Asheville NC" closer.
- App Router pages matching the old WordPress menu: About, Residential, Commercial, Contact, Roofing Color Pickers (metal + shingles), Metal Structures (carport kits + pole truss kits + style detail pages).
- Location SEO under \`/residential/[location]\` for Asheville, Cashiers, Highlands, Waynesville. Constants consolidated so phone numbers do not drift.
- Contact + feedback flows: Resend from \`notify@uncap.us\` to \`kingshaywood@gmail.com\`, HTML escaped in templates, interactive star rating + loading skeleton from launch week.
- Ops: Vercel prebuilt / Blacksmith path, git auto-deploy off on main, Aug 8 \`X-Robots-Tag: index, follow\`.

Honesty: sitemap still lists legacy \`/waynesville\` style URLs while the app moved under \`/residential/...\`. Custom domain \`kingsroofingnc.com\` returns Cloudflare **526** from pack hosts. The working surface is the Vercel alias.

![Roofing color pickers](/blog/kingsroofingnc-pixel-perfect-wp-to-next-lift/screenshots/color-pickers.png)

## Where

Working product: [kingsroofingnccom.vercel.app](https://kingsroofingnccom.vercel.app). Intended apex \`kingsroofingnc.com\` is DNS/SSL-incomplete at draft time.

Code: Hustle-Launch (public; michaelmonetized mirror shares HEAD \`984746b\`). Host Vercel. Business phones in constants: **828-246-2193** / **828-279-6896**. Service area string spans Asheville through Weaverville.

![Metal structures hub](/blog/kingsroofingnc-pixel-perfect-wp-to-next-lift/screenshots/metal-structures.png)

## When

**2026-02-12.** One long day. Create Next App to WP migration scaffold to Layout/Providers to exact copy to full sitemap pages to move locations under \`/residential/[location]\` to dropdowns for locations / metal structures / color pickers to white/orange restyle to lion + dark footer to lock Roboto/Poppins/#FF7620 to YouTube to "match WordPress exactly" commits. That afternoon is the product.

**2026-02-15.** Escape user input in Resend HTML so quote mail is not an XSS souvenir.

**2026-02-21.** Launch-week hygiene: README that is not boilerplate, LOCATIONS single source, star rating + skeleton, Phosphor icons, ContactCTA extract, carport/pole-truss content fleshed out, phone consolidation + \`rel=noopener\`.

**2026-02-27–28.** Build gate, drop GitHub Actions (Vercel is CI), P1 fixes, security headers folded into \`next.config.ts\`.

**2026-05.** shipprep / Blacksmith observability dance: install, revert, re-apply.

**2026-08-08.** HEAD \`984746b\`. Robots index/follow on Vercel. Thirty-two commits on the clock.

## Why

Referral businesses do not buy your taste. They buy continuity.

I kept the orange, the lion, the color pickers, and the metal-structure tree because those were already the marketing system. Next.js, Resend, Sentry, and CSP are the parts that were rotting under WordPress, not the brand.

When you migrate a referral-driven local business off WordPress, do you keep the weird brand orange, or do you "modernize" it until nobody recognizes the truck wrap?
`;

const APPESTATESALES_COVER =
  "/blog/appestatesales-elementor-to-next-wnc-liquidation/cover.png";

const APPESTATESALES_CONTENT = `![Appalachian Estate Sales homepage, live capture](/blog/appestatesales-elementor-to-next-wnc-liquidation/screenshots/home.png)

## Who

I build local sites for operators who already have customers and an Elementor habit. Appalachian Estate Sales is Rene' Rickman Ballard's liquidation and downsizing practice in Waynesville: Haywood through Henderson Counties, phone on the header, Facebook already running the sale calendar.

The audience for the business is families mid-transition: bereavement, assisted living moves, divorce. The audience for this write-up is anyone shipping an Elementor-to-App-Router rebuild who still needs lead capture to work on day two.

## What

I rebuilt the marketing site as **Next.js 16.1.7** (App Router), React 19, Tailwind v4, Bun, shadcn/ui, under private \`Hustle-Launch/appestatesales-com\`. Package.json still names the app \`web\` at **0.1.0**.

![Convex schema: leads and subscribers](/blog/appestatesales-elementor-to-next-wnc-liquidation/screenshots/schema.png)

What exists in code and on the live host:

- Seven routes: home, about-rene, estate-sale-services, estate-sales-process, previous-estate-sales, upcoming-estate-sales, contact-us
- Layout stack: Header (logo + porch swing + phone), cyan Sidebar nav, Footer contact form, floating mobile bar
- Design tokens pulled from the Elementor screenshots: cream ground, cyan nav, coral subscribe/CTA
- Markdown under \`content/\` as the copy source of truth
- Schema.org LocalBusiness + FAQ JSON-LD (\`app/schema.ts\`) pointing at \`https://appestatesales.com\`
- Convex tables \`leads\` and \`subscribers\` with email indexes
- \`/api/contact\` and \`/api/subscribe\` writing Convex + Resend (notify@uncap.us to AES Gmail + a michaelmonetized lead alias)
- Sentry project \`appestatesales\`, PostHog provider slot, Blacksmith \`ship.yml\` prebuilt deploy
- Estate Sale Liquidator Pros badge on the home article

What is still a stand-in: Previous and Upcoming pages embed the Facebook Page plugin for \`estate.tag.sales.wnc\`. There is no Convex-backed sales gallery yet. README migration checklist still marks Convex and Resend as "coming soon" even though both paths are in the tree.

![Shipped pages vs Facebook-embed gap](/blog/appestatesales-elementor-to-next-wnc-liquidation/screenshots/stack-gap.png)

## Where

Live: [www.appestatesales.com](https://www.appestatesales.com/). HTTP 200 on pack day, \`X-Robots-Tag: index, follow\`. Apex redirects 307 to www. Vercel alias \`appestatesalescom.vercel.app\` serves the same prerender.

\`vercel.json\` turns **off** git auto-deploy for \`main\`/\`master\`; production moves through Blacksmith + \`vercel deploy --prebuilt\`.

Geography in schema and copy: Waynesville NC 28786, serving Haywood, Buncombe, Jackson, Macon, Swain, Henderson. Social sameAs: Facebook + Instagram.

One liquidator's marketing site for Appalachian Estate Sales.

## When

**2026-03-17.** Init (\`916df66\`). Same afternoon: images + Resend contact wiring, Convex and Vercel link, test deploy, styling/logo pass, standards.css + shadcn forms, Schema.org LocalBusiness + FAQ. Densest product day.

**2026-03-18.** viewTransition typing fix, sidebar styles, styling cleanup, Convex wiring cleanup, mobile bar "needs work", polish, Resend audience-id fix, build optimizations.

**2026-03-19 10:08 AM ET.** \`669a106\`: Facebook embed done. Upcoming/previous now lean on the social feed.

**May 13–15.** shipprep standards install (twice) then revert (twice). Churn, not product.

**2026-05-21.** Apply shipprep observability and Blacksmith deploys; harden Sentry runtime (env-driven DSN, no default PII).

**2026-08-08 6:54 AM ET.** \`7a87d72\`: set \`X-Robots-Tag\` to \`index, follow\` on Vercel. HEAD. Twenty-four commits on \`main\`.

![Commit journey March through August](/blog/appestatesales-elementor-to-next-wnc-liquidation/screenshots/journey.png)

## Why

Elementor migrations fail two ways: pixel-perfect CSS with a dead contact form, or a modern stack with a blank homepage. I aimed at the honest middle: familiar cream/cyan layout clients recognize, seven pages of real copy, and lead capture that actually posts to Convex and Resend.

The sales calendar still lives on Facebook. The robots header asks Google to index a site whose previous-sales gallery is an iframe. That gap is the field note.

**Engagement Q:** If you run estate sales in Western North Carolina, would you trust a Next rebuild that still embeds your Facebook page for the calendar, or do you refuse to ship until Convex owns upcoming and previous sales?
`;

const JENNINGSCUSTOMHOMES_COVER =
  "/blog/jenningscustomhomes-post-malware-checklist-still-on-bluehost/cover.png";

const JENNINGSCUSTOMHOMES_CONTENT = `![Live home](/blog/jenningscustomhomes-post-malware-checklist-still-on-bluehost/screenshots/home-live.png)

## Who

I still get the call after Bluehost malware: rebuild the marketing site, keep the builder’s phone ringing, and put the work in git without committing \`wp-content\`.

Highlands / Cashiers luxury custom-home buyers need a gallery and a form. Operators need a checklist that survives a \`.gitignore\` that deletes the entire WordPress tree from the repo.

## What

I keep **jenningscustomhomes**. Public [Hustle-Launch/jenningscustomhomes](https://github.com/Hustle-Launch/jenningscustomhomes). HEAD \`ad1f91f\`. **5** commits. GitHub linguist empty. Tracked surface: **4** files.

![Repo surface](/blog/jenningscustomhomes-post-malware-checklist-still-on-bluehost/screenshots/repo-surface-composite.png)

README truth: *Design a new website following a malware infection due to a lack of security on Bluehost.* Next steps cover CSS cleanup, WP settings, CNAME, Analytics, Rank Math, socials, TrustIndex, form actions, SPF, login details.

![Checklist](/blog/jenningscustomhomes-post-malware-checklist-still-on-bluehost/screenshots/checklist-composite.png)

HEAD “Launched” flips nine boxes to \`[x]\`. Two stay honest: TrustIndex \`[-] // client does not have any reviews\`, and Send login details \`[-]\`.

Live product **https://www.jenningscustomhomes.com**. WordPress **7.1**, Hello Elementor **3.5.1**, child theme **\`jch\` 2.0.0**, Elementor **4.2.4**, Elementor Pro **3.24.4**, Elementor Contact form (name / email / message). Contact block: 83 Village Walk Wy, Cashiers, NC 28717 · **828-743-2307** · sam@jenningscustomhomes.com.

![Still Bluehost](/blog/jenningscustomhomes-post-malware-checklist-still-on-bluehost/screenshots/still-bluehost-composite.png)

Pack-day DNS: **75.98.174.238**, NS **ns1/ns2.bluehost.com**, LiteSpeed, PHP **8.3.33**, Let’s Encrypt, HTTP/2 **200**. SPF still includes \`websitewelcome.com\` plus \`jch.hustlelaunch.com\` and an A2 host. Malware story. Host unchanged.

![Gaps](/blog/jenningscustomhomes-post-malware-checklist-still-on-bluehost/screenshots/gaps-composite.png)

Honest gaps: \`G-85CPJ4D64C\` fires on about/contact/404, and does not fire on homepage HTML. Checklist claims Rank Math; home surface shows core \`wp-sitemap.xml\` only (no rank-math assets observed). About **Partners** block is still lorem ipsum. Repo gitignore means the live stack is HTTP-observable only.

## Where

Code: [github.com/Hustle-Launch/jenningscustomhomes](https://github.com/Hustle-Launch/jenningscustomhomes). Public, no license declared.

Product: [www.jenningscustomhomes.com](https://www.jenningscustomhomes.com). Cashiers / Highlands / Western NC custom luxury builder (marketing copy: in business since 2001).

\`\`\`bash
git clone https://github.com/Hustle-Launch/jenningscustomhomes.git
# you get the checklist + gitignore, not wp-admin
\`\`\`

## When

**2024-06-04 22:43 ET.** \`833a3eb\` init (.gitignore, empty README, workspace, SuperMaven recommend).

**22:47 ET.** \`323c90a\` empty “ready to launch” (same tree).

**2024-06-05 05:53 ET.** \`7f7964d\` checklist all open.

**06:30 ET.** \`e36678b\` preflight newline.

**2024-06-06 14:33 ET.** \`ad1f91f\` Launched to HEAD. Push \`2024-06-06T18:34:29Z\`.

**2026-09-08.** Pack day. Site live. Still Bluehost. Draft and assets only. Do not publish.

![Commit arc](/blog/jenningscustomhomes-post-malware-checklist-still-on-bluehost/screenshots/commit-arc-composite.png)

## Why

A malware rebuild that never leaves the host that got infected is a different story than a platform migration, and the README still tells it.

A public repo that gitignores WordPress is an ops checklist. Treat it like one, not like a content dump.

Checkboxes that leave TrustIndex and login handoff open are more honest than a fake green board.

Would you move NS off Bluehost next, or fix homepage GA injection and kill the About Partners lorem first?
`;

export const staticPosts: StaticPost[] = [
  {
    _id: "static:monarch-mountain-foundations-wordpress-to-next-dns-still-php",
    title: "Monarch Mountain Foundations: I migrated WordPress to Next — DNS still serves PHP",
    slug: "monarch-mountain-foundations-wordpress-to-next-dns-still-php",
    excerpt:
      "Monarch Mountain Foundations is a full Next rebuild (Resend, Schema, gallery, CSP) whose www still serves PHP/8.3.33 on LiteSpeed while the Vercel alias sits with main auto-deploy off. HEAD c7e4e30; homepage motion still hotlinks wp-content.",
    content: MONARCHMOUNTAINFOUNDATIONS_CONTENT,
    coverImage: MONARCHMOUNTAINFOUNDATIONS_COVER,
    tags: [
      "monarch-mountain-foundations",
      "highlands-nc",
      "cashiers-nc",
      "western-north-carolina",
      "concrete-foundations",
      "wordpress-migration",
      "nextjs",
      "vercel",
      "resend",
      "localbusiness-schema",
      "martech",
      "hustle-launch",
      "client-site",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-08-08T10:55:18Z"),
    readingTime: 4,
  },
  {
    _id: "static:kingsroofingnc-pixel-perfect-wp-to-next-lift",
    title: "Kings Roofing NC: I didn't redesign the WordPress site — I lifted it to Next.js",
    slug: "kingsroofingnc-pixel-perfect-wp-to-next-lift",
    excerpt:
      "Kings Roofing NC is a pixel-faithful WordPress-to-Next lift that kept #FF7620, the lion, color pickers, and metal-structure tree under Hustle-Launch/kingsroofingnc.com. Working surface is kingsroofingnccom.vercel.app (apex Cloudflare 526); HEAD 984746b.",
    content: KINGSROOFINGNC_CONTENT,
    coverImage: KINGSROOFINGNC_COVER,
    tags: [
      "kingsroofingnc",
      "wordpress-migration",
      "nextjs",
      "western-north-carolina",
      "roofing",
      "local-business",
      "resend",
      "vercel",
      "martech",
      "pixel-perfect",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-08-08T10:55:06Z"),
    readingTime: 3,
  },
  {
    _id: "static:appestatesales-elementor-to-next-wnc-liquidation",
    title: "Appalachian Estate Sales: I rebuilt the Elementor site in Next before the gallery existed",
    slug: "appestatesales-elementor-to-next-wnc-liquidation",
    excerpt:
      "Appalachian Estate Sales is a private Next.js 16.1.7 + Convex + Resend rebuild (HEAD 7a87d72, 24 commits) with seven routes and live lead capture on www.appestatesales.com. Previous/Upcoming still embed Facebook; README still says Convex/Resend are coming soon.",
    content: APPESTATESALES_CONTENT,
    coverImage: APPESTATESALES_COVER,
    tags: [
      "appalachian-estate-sales",
      "appestatesales",
      "elementor",
      "nextjs",
      "western-north-carolina",
      "waynesville",
      "estate-sales",
      "local-business",
      "convex",
      "resend",
      "martech",
      "hustle-launch",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-08-08T10:54:25Z"),
    readingTime: 3,
  },
  {
    _id: "static:jenningscustomhomes-post-malware-checklist-still-on-bluehost",
    title: "Jennings Custom Homes: post-malware WP rebuild checklist — still on Bluehost",
    slug: "jenningscustomhomes-post-malware-checklist-still-on-bluehost",
    excerpt:
      "Public Hustle-Launch/jenningscustomhomes is a 4-file WordPress ops checklist for a Highlands/Cashiers NC luxury builder rebuild after Bluehost malware. Five commits Jun 4-6 2024; HEAD ad1f91f flips nine boxes to [x] and leaves TrustIndex plus login details open. Live www.jenningscustomhomes.com still resolves to Bluehost LiteSpeed at 75.98.174.238.",
    content: JENNINGSCUSTOMHOMES_CONTENT,
    coverImage: JENNINGSCUSTOMHOMES_COVER,
    tags: [
      "jenningscustomhomes",
      "wordpress",
      "elementor",
      "bluehost",
      "malware-recovery",
      "checklist",
      "highlands-nc",
      "cashiers-nc",
      "custom-homes",
      "hustle-launch",
      "spf",
      "martech",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2024-06-06T18:33:52Z"),
    readingTime: 2,
  },

  {
    _id: "static:salespromis-wp-elementor-dump-vs-lovable-live",
    title: "SalesPromis: GitHub still versions a WP Engine Elementor funnel \u2014 live left for Lovable",
    slug: "salespromis-wp-elementor-dump-vs-lovable-live",
    excerpt:
      "HurleyUS/SalesPromis is a private WordPress wp-content dump of an Elementor SSDI qualify funnel (Salert + HurryTimer + custom ssdi-qualify.js). Live salespromis.com is already a Lovable/Vite SPA. Two commits. HEAD only added a Stripe cursor rule.",
    content: SALESPROMIS_CONTENT,
    coverImage: SALESPROMIS_COVER,
    tags: [
      "salespromis",
      "wordpress",
      "elementor",
      "wp-engine",
      "ssdi",
      "lead-gen",
      "lovable",
      "hurleyus",
      "salert",
      "hurrytimer",
      "martech",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-01-31T10:37:36Z"),
    readingTime: 3,
  },

  {
    _id: "static:mybathroomconversion-elementor-salespromis-xdebug-purge",
    title: "MyBathroomConversion.com: Elementor Opt-In \u2192 SalesPromis, then I deleted the xdebug_info() probe",
    slug: "mybathroomconversion-elementor-salespromis-xdebug-purge",
    excerpt:
      "www.mybathroomconversion.com is a SalesPromis/Hustle Launch Elementor lander whose child theme already POSTs Opt In leads to api.salespromis.com while PLAN.md once claimed lead capture Not Started. Feb 27 HEAD dc5a091 deleted webroot xdebug_info(); WP File Manager 7.2.9 and a hardcoded API key remain.",
    content: MYBATHROOMCONVERSION_CONTENT,
    coverImage: MYBATHROOMCONVERSION_COVER,
    tags: [
      "mybathroomconversion",
      "wordpress",
      "elementor",
      "wp-engine",
      "salespromis",
      "remodelingloans",
      "leadgen",
      "bathroom-remodel",
      "security",
      "xdebug",
      "hustle-launch",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-02-27T10:18:18Z"),
    readingTime: 2,
  },

  {
    _id: "static:mybathroomconversion-wp-file-manager-gone-key-to-env",
    title: "MyBathroomConversion: WP File Manager gone, Salespromis key moved to env",
    slug: "mybathroomconversion-wp-file-manager-gone-key-to-env",
    excerpt:
      "Follow-up: HurleyUS/www.mybathroomconversion.com PR #7 (928819d) closed Issues #4 and #5. Removed vendored WP File Manager 7.2.9 (~906 files) and moved Salespromis Opt In onto SALESPROMIS_API_KEY env/constant. Rotate the old key; set env before leads post again.",
    content: MYBATHROOM_SECURITY_FOLLOWUP_CONTENT,
    coverImage: MYBATHROOM_SECURITY_FOLLOWUP_COVER,
    tags: [
      "mybathroomconversion",
      "wordpress",
      "security",
      "wp-file-manager",
      "salespromis",
      "secrets",
      "follow-up",
      "hustle-launch",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-09-09T01:41:28Z"),
    readingTime: 2,
  },

  {
    _id: "static:simple-firebase-env-only-sa-wiped",
    title: "simple: Firebase config env-only, service account wiped",
    slug: "simple-firebase-env-only-sa-wiped",
    excerpt:
      "Follow-up: michaelmonetized/simple PR #12 closed Issue #7. Client Firebase is env-only and fails closed without logging values; serviceAccount/admin credential patterns gitignored; leftover local SA file wiped. Prior keep-Firebase notes still stand.",
    content: SIMPLE_FIREBASE_FOLLOWUP_CONTENT,
    coverImage: SIMPLE_FIREBASE_FOLLOWUP_COVER,
    tags: [
      "simple",
      "firebase",
      "secrets",
      "security",
      "follow-up",
      "michaelmonetized",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-09-09T02:05:00Z"),
    readingTime: 2,
  },

  {
    _id: "static:launchpad-clerk-convex-posthog-wired",
    title: "launchpad: Clerk, Convex, and PostHog finally mount in layout",
    slug: "launchpad-clerk-convex-posthog-wired",
    excerpt:
      "Follow-up: michaelmonetized/launchpad PR #7 closed Issue #3. Root layout mounts Clerk then Convex then PostHog; Convex uses @clerk/nextjs useAuth matching clerkMiddleware. Soft-guards when env is unset. Providers are no longer orphan files.",
    content: LAUNCHPAD_PROVIDERS_FOLLOWUP_CONTENT,
    coverImage: LAUNCHPAD_PROVIDERS_FOLLOWUP_COVER,
    tags: [
      "launchpad",
      "clerk",
      "convex",
      "posthog",
      "nextjs",
      "follow-up",
      "michaelmonetized",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-09-09T02:05:00Z"),
    readingTime: 2,
  },

  {
    _id: "static:mission-control-os-pending-auth-agency-timeout",
    title: "mission-control-os: pending Clerk auth and agency create timeout",
    slug: "mission-control-os-pending-auth-agency-timeout",
    excerpt:
      "Follow-up: Hustle-Launch/mission-control-os PR #64 (d09322c) closed Issues #50 and #51. Shared auth hooks keep pending sessions from looking signed-out on AgencyGate/PortalGate/cockpit; agency org create/select gets a hard timeout plus error instead of infinite Working. Prod redeploy still blocked on bad VERCEL_TOKEN (infra).",
    content: MISSION_CONTROL_OS_AUTH_FOLLOWUP_CONTENT,
    coverImage: MISSION_CONTROL_OS_AUTH_FOLLOWUP_COVER,
    tags: [
      "mission-control-os",
      "clerk",
      "auth",
      "agency",
      "hustle-launch",
      "follow-up",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-09-09T02:05:00Z"),
    readingTime: 2,
  },

  {
    _id: "static:hustle-suite-vercel-app-restores",
    title: "hustle* suite: DEPLOYMENT_NOT_FOUND cleared on *.vercel.app landers",
    slug: "hustle-suite-vercel-app-restores",
    excerpt:
      "Follow-up: hustledesk/crm/convert/chat/forms #1 and hustlemail #2 closed. Packs that showed DEPLOYMENT_NOT_FOUND now resolve on *.vercel.app hosts for desk, crm, convert, chat, forms, and mail. hustlemail also needed a PostCSS @tailwindcss/postcss fix. Custom DNS still parked overnight.",
    content: HUSTLE_SUITE_VERCEL_FOLLOWUP_CONTENT,
    coverImage: HUSTLE_SUITE_VERCEL_FOLLOWUP_COVER,
    tags: [
      "hustle",
      "vercel",
      "deployment",
      "landers",
      "follow-up",
      "hustlemail",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-09-09T02:15:00Z"),
    readingTime: 2,
  },

  {
    _id: "static:hms-cyan-six-vercel-live",
    title: "hms: live again on hms-cyan-six.vercel.app",
    slug: "hms-cyan-six-vercel-live",
    excerpt:
      "Follow-up: hms#1 closed. Live host https://hms-cyan-six.vercel.app is up after packs flagged a missing deploy.",
    content: HMS_VERCEL_FOLLOWUP_CONTENT,
    coverImage: HMS_VERCEL_FOLLOWUP_COVER,
    tags: [
      "hms",
      "vercel",
      "deployment",
      "follow-up",
      "hustle-management-system",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-09-09T02:15:00Z"),
    readingTime: 2,
  },

  {
    _id: "static:codefolio-deploy-md-no-live-url",
    title: "codefolio: DEPLOY.md landed, live URL still needs Convex env",
    slug: "codefolio-deploy-md-no-live-url",
    excerpt:
      "Follow-up: codefolio#1 closed with DEPLOY.md only. No live URL yet; Convex env and codefolio.dev remain parked.",
    content: CODEFOLIO_DEPLOY_MD_FOLLOWUP_CONTENT,
    coverImage: CODEFOLIO_DEPLOY_MD_FOLLOWUP_COVER,
    tags: [
      "codefolio",
      "deploy",
      "convex",
      "docs",
      "follow-up",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-09-09T02:15:00Z"),
    readingTime: 2,
  },

  {
    _id: "static:license-copyright-alignment-fleet",
    title: "LICENSE copyright aligned across ten repos",
    slug: "license-copyright-alignment-fleet",
    excerpt:
      "Follow-up: 20 issues across 10 repos closed. LICENSE copyright aligned to Michael Hurley / owning org on stripe-convex, slopops, orclawstrator, nvibe, compare, agent-os, agent-computer-use, WhisperCPPonEverything, s12.in, and ileague-app; MIT added where missing. Sample PRs stripe-convex#18 and s12.in#35.",
    content: LICENSE_COPYRIGHT_FLEET_FOLLOWUP_CONTENT,
    coverImage: LICENSE_COPYRIGHT_FLEET_FOLLOWUP_COVER,
    tags: [
      "license",
      "copyright",
      "mit",
      "follow-up",
      "portfolio",
      "HurleyUS",
      "michaelmonetized",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-09-09T02:20:00Z"),
    readingTime: 2,
  },

  {
    _id: "static:coming-soon-waitlist-honesty-fleet",
    title: "Coming Soon shells replaced with honest status landers",
    slug: "coming-soon-waitlist-honesty-fleet",
    excerpt:
      "Follow-up: waitlist Coming Soon shells closed across hustledesk, kitchen, merchwinner, coordinatorapp, iPro-main-web, and omnux. Planned SSO and Notify forms now say Planned/not shipped or Not available yet. ileague.app still Coming Soon after lander PR (Vercel/DNS park).",
    content: COMING_SOON_HONESTY_FLEET_FOLLOWUP_CONTENT,
    coverImage: COMING_SOON_HONESTY_FLEET_FOLLOWUP_COVER,
    tags: [
      "follow-up",
      "coming-soon",
      "waitlist",
      "honesty",
      "landers",
      "HurleyUS",
      "michaelmonetized",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-09-09T02:25:00Z"),
    readingTime: 2,
  },

  {
    _id: "static:empty-readme-fills-fleet",
    title: "Empty READMEs filled with real usage across three repos",
    slug: "empty-readme-fills-fleet",
    excerpt:
      "Follow-up: six content-factory-gap empty README issues closed via three PRs. animated-gradient-border, fab-analytics, and shagent now document real install/run usage. No fake stars or metrics.",
    content: EMPTY_README_FILLS_FLEET_FOLLOWUP_CONTENT,
    coverImage: EMPTY_README_FILLS_FLEET_FOLLOWUP_COVER,
    tags: [
      "follow-up",
      "readme",
      "content-factory",
      "michaelmonetized",
      "portfolio",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-09-09T02:30:00Z"),
    readingTime: 2,
  },

  {
    _id: "static:vanity-phone-metrics-honesty-fleet",
    title: "Vanity phones and fake metrics scrubbed across five repos",
    slug: "vanity-phone-metrics-honesty-fleet",
    excerpt:
      "Follow-up: ten vanity-phone and fake-metrics issues closed. yourzaxbys and iPro dropped 555 vanity numbers; s12.in hero stats became honest capability copy; freview was a false positive; ileague metrics already fixed on main.",
    content: VANITY_PHONE_METRICS_FLEET_FOLLOWUP_CONTENT,
    coverImage: VANITY_PHONE_METRICS_FLEET_FOLLOWUP_COVER,
    tags: [
      "follow-up",
      "vanity-phone",
      "fake-metrics",
      "honesty",
      "HurleyUS",
      "portfolio",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-09-09T02:45:00Z"),
    readingTime: 2,
  },

  {
    _id: "static:fab-analytics-same-day-php-js-ga-drop-in-json-disk",
    title: "fab-analytics: same-day PHP+JS GA drop-in that writes JSON to disk",
    slug: "fab-analytics-same-day-php-js-ga-drop-in-json-disk",
    excerpt:
      "Public michaelmonetized/fab-analytics is a 0.1.3-rc first-party Google Analytics drop-in: fab-analytics.js posts pageviews, mailto/tel clicks, and form submit/abandonment to a PHP endpoint that writes logs/{domain}/*.json under hustlelaunch.com. 31 commits in one July 2024 day to first production run; HEAD 8218088 cleanup. Empty README/LICENCE. Sibling BestWNC 2026 directory analytics is a different product.",
    content: FAB_ANALYTICS_CONTENT,
    coverImage: FAB_ANALYTICS_COVER,
    tags: [
      "fab-analytics",
      "first-party-analytics",
      "google-analytics-drop-in",
      "php",
      "javascript",
      "json-logs",
      "elementor",
      "hustlelaunch",
      "form-abandonment",
      "martech",
      "michaelmonetized",
      "hurleyus",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2024-07-10T13:07:11Z"),
    readingTime: 2,
  },

  {
    _id: "static:boilerplate-clerk-drizzle-stripe-next16-cve",
    title: "Boilerplate: Clerk + Drizzle + Stripe Next shell, CVE-bumped to 16",
    slug: "boilerplate-clerk-drizzle-stripe-next16-cve",
    excerpt:
      "boilerplate is a private michaelmonetized Next shell with Clerk, Drizzle/@vercel/postgres subscriptions, and a Stripe webhook, CVE-bumped to Next 16.1.6 at HEAD 6f2dd2f. Live on boilerplate-fawn-gamma.vercel.app and boilerplate.hustlelaunch.com; marketing routes are still ten-line stubs.",
    content: BOILERPLATE_CONTENT,
    coverImage: BOILERPLATE_COVER,
    tags: [
      "boilerplate",
      "nextjs",
      "clerk",
      "drizzle",
      "vercel-postgres",
      "stripe",
      "catppuccin",
      "hustlelaunch",
      "saas-starter",
      "cve",
      "resend",
      "michaelmonetized",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-02-22T12:42:53Z"),
    readingTime: 2,
  },

  {
    _id: "static:ileague-app-influencer-monorepo-before-golf-rebrand",
    title: "iLeague-app: the generic influencer monorepo before the golf rebrand",
    slug: "ileague-app-influencer-monorepo-before-golf-rebrand",
    excerpt:
      "Public HurleyUS/ileague-app is the Jan 9 2026 Bun monorepo (Next.js 15 + Expo 52 + Convex + Clerk + Stripe Connect) for a generic influencer/fan league platform (violet #7c3aed, isInfluencer schema, gaming-to-lifestyle categories). HEAD 7af9d80 (Feb 4) wires mobile leagues to Convex and adds eas.json; www.ileague.app is Coming Soon static, distinct from ileague.golf.",
    content: ILEAGUE_APP_CONTENT,
    coverImage: ILEAGUE_APP_COVER,
    tags: [
      "ileague-app",
      "ileague",
      "influencer",
      "creator-economy",
      "monorepo",
      "bun",
      "nextjs",
      "expo",
      "convex",
      "clerk",
      "stripe-connect",
      "scaffold",
      "before-golf",
      "hurleyus",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-02-04T17:04:34Z"),
    readingTime: 2,
  },

  {
    _id: "static:agent-os-bun-ink-websocket-zsh-orchestrator",
    title: "Agent OS: Bun + Ink + WebSocket shell-native orchestrator",
    slug: "agent-os-bun-ink-websocket-zsh-orchestrator",
    excerpt:
      "HurleyUS Agent OS is a public Ink + WebSocket + interactive-zsh orchestrator (HEAD f66fffa, 2 commits) with a Mission Control Phase 1 seed and a separate Anthropic core.ts persona queue. Local only on ws://localhost:9999; SDK dep missing and .env still tracked.",
    content: AGENT_OS_CONTENT,
    coverImage: AGENT_OS_COVER,
    tags: [
      "agent-os",
      "hurleyus",
      "bun",
      "ink",
      "websocket",
      "zsh",
      "orchestrator",
      "mission-control",
      "openclaw",
      "anthropic",
      "terminal-ui",
      "michaelmonetized",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-03-21T02:25:12Z"),
    readingTime: 2,
  },

  {
    _id: "static:launchpad-nye2024-boilerplate-providers-unwired",
    title: "launchpad: NYE 2024 Hustle Launch boilerplate \u2014 README stack, unwired providers",
    slug: "launchpad-nye2024-boilerplate-providers-unwired",
    excerpt:
      "Public michaelmonetized/launchpad is the NYE 2024 Hustle Launch premier-framework claim (Next 15 + shadcn + Clerk/Convex/PostHog providers + Resend /api/send) while app/page.tsx is still Create Next App, providers never mount in layout, no convex/ folder, Stripe unused except Theo STRIPE.md, and launchpad.hustlelaunch.com is NXDOMAIN. 8 commits. HEAD 5447591.",
    content: LAUNCHPAD_CONTENT,
    coverImage: LAUNCHPAD_COVER,
    tags: [
      "launchpad",
      "hustlelaunch",
      "nextjs",
      "boilerplate",
      "clerk",
      "convex",
      "resend",
      "posthog",
      "stripe",
      "shadcn",
      "starter",
      "michaelmonetized",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-02-06T16:07:56Z"),
    readingTime: 2,
  },

  {
    _id: "static:simple-nextjs-firebase-auth-social-keep-decision",
    title: "simple: Next.js 16 Firebase auth starter \u2014 social login, keep-Firebase decision",
    slug: "simple-nextjs-firebase-auth-social-keep-decision",
    excerpt:
      "Public michaelmonetized/simple: Next 16 + React 19 Firebase Auth/Firestore starter \u2014 email+password, Twitter/Facebook/Google connect, AuthProvider, CRUD helpers, clamp spacing + Catppuccin tokens. Launch-week: CVE bumps, security headers, console strip, docs keep-Firebase vs Convex. HEAD da7e0b0 \u00b7 10 commits. Vercel homepage DEPLOYMENT_NOT_FOUND; create-next-app README; login page still named RegisterPage.",
    content: SIMPLE_CONTENT,
    coverImage: SIMPLE_COVER,
    tags: [
      "simple",
      "nextjs",
      "react",
      "firebase",
      "firestore",
      "auth",
      "social-login",
      "typescript",
      "tailwind",
      "vercel",
      "security-headers",
      "convex",
      "starter",
      "boilerplate",
      "michaelmonetized",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-03-23T19:53:43Z"),
    readingTime: 1,
  },

  {
    _id: "static:resend-listening-daemon-openclaw-poll-hooks-agent-caddy",
    title: "resendld: OpenClaw Resend inbound daemon \u2014 poll, hooks/agent, Caddy UI",
    slug: "resend-listening-daemon-openclaw-poll-hooks-agent-caddy",
    excerpt:
      "Public michaelmonetized/resend-listening-daemon (resendld 0.0.0-rc.0, HEAD 4fbec17, 46 commits): Bun daemon polls Resend /emails/receiving every 5s via pure fetch, stores markdown under ~/.openclaw/workspace/mail/, dispatches to OpenClaw /hooks/agent (cron fallback), with Convex + TanStack Start web at https://resendld.localhost via Caddy. install.sh covers macOS+Arch; afternoon of resend-cli PATH hell before zero-CLI.",
    content: RESEND_LISTENING_DAEMON_CONTENT,
    coverImage: RESEND_LISTENING_DAEMON_COVER,
    tags: [
      "resend-listening-daemon",
      "resendld",
      "resend",
      "openclaw",
      "daemon",
      "email",
      "bun",
      "typescript",
      "convex",
      "tanstack-start",
      "caddy",
      "hooks",
      "telegram",
      "macos",
      "arch-linux",
      "michaelmonetized",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-03-27T23:11:34Z"),
    readingTime: 2,
  },

  {
    _id: "static:connectedin-mv3-linkedin-auto-connect-chrome-extension",
    title: "ConnectedIn: MV3 LinkedIn auto-connect Chrome extension",
    slug: "connectedin-mv3-linkedin-auto-connect-chrome-extension",
    excerpt:
      "Public michaelmonetized/ConnectedIn is a Manifest V3 Chrome extension that auto-clicks LinkedIn Connect buttons with configurable 100-5000ms delays, popup stats, chrome.storage.sync persistence, and a ~1,100 connects/week rate-limit warning. Same-afternoon 2-commit ship (init + INSTALL.md). HEAD a6236fa. Gaps: no content_scripts registration, missing images/icons.",
    content: CONNECTEDIN_CONTENT,
    coverImage: CONNECTEDIN_COVER,
    tags: [
      "connectedin",
      "linkedin",
      "chrome-extension",
      "manifest-v3",
      "auto-connect",
      "content-script",
      "popup",
      "rate-limit",
      "martech",
      "michaelmonetized",
      "hurleyus",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-03-21T19:31:03Z"),
    readingTime: 1,
  },

  {
    _id: "static:hurleyus-sop-ship-or-shut-up-openclaw-dhh-gstack",
    title: "HurleyUS Agent SOP: Ship or shut up, OpenClaw memory layers, DHH gstack mandate",
    slug: "hurleyus-sop-ship-or-shut-up-openclaw-dhh-gstack",
    excerpt:
      "Public single-file AGENT_SOP.md (548 lines, v1.0, HEAD c418e5e, 2 commits) for HurleyUS agents: Ship or shut up, ~/.openclaw/workspace memory layers, hard rules, Graphite/send-agent, plus PR #2 DHH research-first + gstack + deploy discipline. Docs-only; distinct from hurley-mission-control.",
    content: HURLEYUS_SOP_CONTENT,
    coverImage: HURLEYUS_SOP_COVER,
    tags: [
      "hurleyus-sop",
      "agent-sop",
      "openclaw",
      "gstack",
      "dhh",
      "graphite",
      "nextjs-16",
      "convex",
      "operations",
      "hurleyus",
      "agent-ops",
      "standard-operating-procedure",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-03-31T23:28:55Z"),
    readingTime: 3,
  },

  {
    _id: "static:codemail-mail-config-as-code-founder-email-infra",
    title: "codemail: mail.config.ts founder email \u2014 per-domain, not per-seat",
    slug: "codemail-mail-config-as-code-founder-email-infra",
    excerpt:
      "Private michaelmonetized/codemail: Turborepo mail stack where mail.config.ts is law (Convex + Clerk + Resend + Fly SMTP + Next web mail/dashboard). Pricing Free Forever BYO keys / $8 Simple / $80 Managed. README still lists IMAP; PLAN marks IMAP out of MVP. Live codemail-web.vercel.app 200; codemail.vercel.app 500. 27 commits. HEAD e9fece4.",
    content: CODEMAIL_CONTENT,
    coverImage: CODEMAIL_COVER,
    tags: [
      "codemail",
      "email",
      "mail-config",
      "infrastructure",
      "convex",
      "clerk",
      "resend",
      "smtp",
      "nextjs",
      "turborepo",
      "founder",
      "michaelmonetized",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-03-26T07:09:00Z"),
    readingTime: 1,
  },

  {
    _id: "static:svganimator-electron-to-canaveral-keyframe-export-studio",
    title: "svganimator: Electron Svgator clone \u2192 Canaveral monorepo SVG keyframe studio",
    slug: "svganimator-electron-to-canaveral-keyframe-export-studio",
    excerpt:
      "Public HurleyUS/svganimator: May 3 Electron Svgator-inspired animator + inspiration scrape; May 4 exports + migrate to Bun Canaveral monorepo. HEAD keeps package name canaveral but product identity SVG Animator; @canaveral/svg (963 LOC Zod schemas, svg/lottie/gif/mkv), TanStack web studio, Electron shell, Expo card. 13 commits. HEAD 86bb4a2. Sibling surfaces: private HurleyUS/canaveral launch pad; local draw-on Bun SVGanimator; tsxsvg plan-only.",
    content: SVGANIMATOR_CONTENT,
    coverImage: SVGANIMATOR_COVER,
    tags: [
      "svganimator",
      "svg",
      "animation",
      "keyframes",
      "lottie",
      "export",
      "canaveral",
      "bun",
      "tanstack-start",
      "tanstack-router",
      "zustand",
      "zod",
      "electron",
      "expo",
      "resvg",
      "blacksmith",
      "freview",
      "fallow",
      "hurleyus",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-05-14T21:05:24Z"),
    readingTime: 2,
  },

  {
    _id: "static:devhost-ink-tui-caddy-port80-multihost",
    title: "devhost: Ink TUI + Caddy :80 multi-project .localhost manager",
    slug: "devhost-ink-tui-caddy-port80-multihost",
    excerpt:
      "Private michaelmonetized/devhost is a Bun+Ink host manager: sequential ports from 3001, /etc/hosts DEVHOST markers, Caddy :80 reverse_proxy to each project, start/stop/open lifecycle + TUI. 1 commit (+1426). HEAD db69995. Live config still lists bestwnc-com.localhost. Distinct from bundx-init HTTPS Next patcher.",
    content: DEVHOST_CONTENT,
    coverImage: DEVHOST_COVER,
    tags: [
      "devhost",
      "caddy",
      "ink",
      "tui",
      "bun",
      "localhost",
      "local-dev",
      "reverse-proxy",
      "hosts-file",
      "cli",
      "react",
      "michaelmonetized",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-06-22T21:56:41Z"),
    readingTime: 1,
  },

  {
    _id: "static:milkup-tiptap-convex-wysiwyg-stale-milkdown-readme",
    title: "milkup: TipTap+Convex WYSIWYG that still ships a Milkdown README",
    slug: "milkup-tiptap-convex-wysiwyg-stale-milkdown-readme",
    excerpt:
      "Public michaelmonetized/milkup: same-day 9-commit arc (2026-03-25). Milkdown+Convex POC \u2192 mock strip \u2192 TipTap WYSIWYG + Convex listMedia \u2192 React19/Next14.2 CVE pin \u2192 Next16 \u2192 Opus QA deletes milkdown-video-plugin. README still markets Next15/Milkdown/MOCK_MEDIA/!video[](). HEAD 45fb587. Video insert is ![Video](url). No upload mutations.",
    content: MILKUP_CONTENT,
    coverImage: MILKUP_COVER,
    tags: [
      "milkup",
      "tiptap",
      "wysiwyg",
      "convex",
      "nextjs",
      "react",
      "markdown",
      "html-to-markdown",
      "media-picker",
      "milkdown",
      "typescript",
      "michaelmonetized",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-03-25T10:59:16Z"),
    readingTime: 2,
  },

  {
    _id: "static:notion-cli-openclaw-skill-crud-markdown-property-filter",
    title: "notion-cli: OpenClaw/Claude Code Notion API skill \u2014 CRUD, filters, Markdown",
    slug: "notion-cli-openclaw-skill-crud-markdown-property-filter",
    excerpt:
      "Public michaelmonetized/notion-cli: Bun/TS Notion API CLI for agents \u2014 db/page/pages/block/search subcommands, -p/-n property filters, page\u2192Markdown, SKILL.md + setup for OpenClaw/Codex. package 1.0.0 vs banner v2.0.0; DELIVERY still flat list-databases; spaces/page/search modules unused by cli. 1 commit. HEAD 5309974.",
    content: NOTION_CLI_CONTENT,
    coverImage: NOTION_CLI_COVER,
    tags: [
      "notion-cli",
      "notion",
      "cli",
      "typescript",
      "bun",
      "openclaw",
      "claude-code",
      "agent",
      "markdown",
      "skill",
      "crud",
      "michaelmonetized",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-03-28T22:31:28Z"),
    readingTime: 1,
  },

  {
    _id: "static:canaveral-bun-tanstack-start-web-desktop-mobile-caddy",
    title: "Canaveral: Bun TanStack Start launch pad \u2014 web, Electron, Expo, Caddy",
    slug: "canaveral-bun-tanstack-start-web-desktop-mobile-caddy",
    excerpt:
      "Canaveral is a private HurleyUS Bun monorepo launch pad (TanStack Start web, Electron, Expo, shared) with in-repo Caddy at canaveral.localhost:5337 and a ten-check freview gate. HEAD df2c041; eleven commits; AGENTS.md still oversells the Biome to house to freview path while package.json lint is oxlint-only.",
    content: CANAVERAL_CONTENT,
    coverImage: CANAVERAL_COVER,
    tags: [
      "canaveral",
      "tanstack-start",
      "tanstack-router",
      "bun",
      "monorepo",
      "caddy",
      "localhost",
      "electron",
      "expo",
      "clerk",
      "convex",
      "stripe",
      "resend",
      "sentry",
      "posthog",
      "biome",
      "tsgo",
      "freview",
      "fallow",
      "blacksmith",
      "hurleyus",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-05-14T21:05:20Z"),
    readingTime: 1,
  },

  {
    _id: "static:nfglyph-bun-ansi-nerd-font-picker-linux-quit",
    title: "nfglyph: Bun raw-ANSI Nerd Font picker \u2014 fuzzy names, Linux quit fixed",
    slug: "nfglyph-bun-ansi-nerd-font-picker-linux-quit",
    excerpt:
      "Public michaelmonetized/nfglyph: zero-dep Bun TUI glyph picker with vim motions. Jan 30 shipped Unicode range-scan + hex search; Jun 1 upgraded to Nerd Fonts 3.4.0 glyphs.json (50,174 named) + fuzzyMatch; Jun 3 fixed Linux quit (keepAlive vs process.exit) and clipboard cascade pbcopy->wl-copy->xclip->xsel. README still says 15k+ / hex-only. 4 commits. HEAD 1dfdc82.",
    content: NFGLYPH_CONTENT,
    coverImage: NFGLYPH_COVER,
    tags: [
      "nfglyph",
      "nerd-fonts",
      "glyph-picker",
      "tui",
      "bun",
      "typescript",
      "ansi",
      "vim",
      "clipboard",
      "linux",
      "fuzzy-search",
      "cli",
      "michaelmonetized",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-06-03T13:50:15Z"),
    readingTime: 2,
  },

  {
    _id: "static:animated-gradient-border-transparent-mask-composite",
    title: "animated-gradient-border: transparent glass with a spinning conic ring",
    slug: "animated-gradient-border-transparent-mask-composite",
    excerpt:
      "animated-gradient-border is a public CSS lab (HEAD 5e9b611, 5 commits, empty README) that keeps a spinning conic ring via mask-composite: exclude so the video plate shows through the middle. Sibling to glass-design-system AnimatedBorder; open index.html locally.",
    content: ANIMATED_GRADIENT_BORDER_CONTENT,
    coverImage: ANIMATED_GRADIENT_BORDER_COVER,
    tags: [
      "animated-gradient-border",
      "css",
      "glassmorphism",
      "conic-gradient",
      "mask-composite",
      "css-property",
      "transparent-border",
      "hustlelaunch",
      "static-html",
      "michaelmonetized",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-06-22T22:10:44Z"),
    readingTime: 3,
  },

  {
    _id: "static:shagent-bun-mcp-openrouter-after-zsh-harness-delete",
    title: "shagent: Bun MCP + OpenRouter free loop after I deleted the Zsh shell harness",
    slug: "shagent-bun-mcp-openrouter-after-zsh-harness-delete",
    excerpt:
      "Public michaelmonetized/shagent: May init was a 258-line Zsh THOUGHT/COMMAND OpenRouter harness (rg/fd/eza/bat, mcp-cli, qmd). Jun 22 nightly deleted src/shagent.sh and shipped Bun CLI + MCP filesystem client + OpenRouter JSON tool loop (max 15 turns, default openrouter/free). Empty README. Marketing index.html is fiction (Rusty P. Shackelford). 3 commits. HEAD 61ecd7d. Sibling orclawstrator is a different repo.",
    content: SHAGENT_CONTENT,
    coverImage: SHAGENT_COVER,
    tags: [
      "shagent",
      "bun",
      "typescript",
      "mcp",
      "model-context-protocol",
      "openrouter",
      "cli",
      "agent",
      "zsh",
      "filesystem-mcp",
      "chrome-devtools-mcp",
      "michaelmonetized",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-06-22T21:56:32Z"),
    readingTime: 2,
  },

  {
    _id: "static:mkproject-bash-scaffold-template-git-init-runafter",
    title: "mkproject: bash scaffold that ships .env-safe git init + RUNAFTER",
    slug: "mkproject-bash-scaffold-template-git-init-runafter",
    excerpt:
      "Public 76-line Shell CLI that copies ~/.config/mkproject/template, git inits with branch+commit message from .env, and runs RUNAFTER (default code .). The tool that created empty-junk siblings mkproject-1 and 49. 9 commits. HEAD 321012c.",
    content: MKPROJECT_CONTENT,
    coverImage: MKPROJECT_COVER,
    tags: [
      "mkproject",
      "bash",
      "cli",
      "scaffold",
      "git-init",
      "template",
      "dotenv",
      "dev-tooling",
      "project-bootstrap",
      "michaelmonetized",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-06-22T21:57:24Z"),
    readingTime: 1,
  },

  {
    _id: "static:neovim-ide-tmux-gigachad-layout-cursor-agent",
    title: "neovim-ide: the GIGACHAD of NvChad is a tmux layout (ollama ASCII, cursor-agent reality)",
    slug: "neovim-ide-tmux-gigachad-layout-cursor-agent",
    excerpt:
      "Public michaelmonetized/neovim-ide: zsh + tmux launcher that builds an IDE-shaped pane grid (Agent | Neovim | Tasks/Git + Console/Terminal). Banner still draws ollama; init starts cursor-agent. README says MIT, LICENSE.md is GPL-3.0, package.json ISC. install.sh is 0 bytes. Ink CLI never calls tmux. 9 commits. HEAD 38ed773.",
    content: NEOVIM_IDE_CONTENT,
    coverImage: NEOVIM_IDE_COVER,
    tags: [
      "neovim-ide",
      "neovim",
      "nvim",
      "tmux",
      "nvchad",
      "zsh",
      "cursor-agent",
      "lazygit",
      "ink",
      "bun",
      "ide-layout",
      "michaelmonetized",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-06-22T21:56:51Z"),
    readingTime: 4,
  },
  {
    _id: "static:new-design-gallery-embla-catalog-not-landers",
    title: "new-design-gallery: I shipped a catalog UX, not another tabbed lander kit",
    slug: "new-design-gallery-embla-catalog-not-landers",
    excerpt:
      "I stood up new-design-gallery \u2014 Embla carousel, category filters, Radix lightbox, Web Share/clipboard, and per-slug detail routes for 11 catalog cards. Live on new-design-gallery.vercel.app. Same March 28 day as mockup-gallery; different product.",
    content: NEW_DESIGN_GALLERY_CONTENT,
    coverImage: NEW_DESIGN_GALLERY_COVER,
    tags: [
      "new-design-gallery",
      "design-gallery",
      "nextjs",
      "embla",
      "tailwind",
      "catppuccin",
      "vitest",
      "vercel",
      "portfolio",
      "martech",
      "catalog",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-06-22T21:57:12Z"),
    readingTime: 1,
  },
  {
    _id: "static:whispercpponeverything-ctrl-w-streaming-stt-cyan-glow",
    title: "WhisperCPPonEverything: Ctrl+W streaming STT menubar, cyan glow, whisper-stream",
    slug: "whispercpponeverything-ctrl-w-streaming-stt-cyan-glow",
    excerpt:
      "Private Swift Package macOS menubar dictation (WhisperCPPonEverything 2.0.0, HEAD d33e5e2, 11 commits): Ctrl+W toggles idle/streaming, spawns Homebrew whisper-stream + ggml-medium, injects via CGEvent with suffix-prefix dedupe and a soft cyan 20-layer glow, plus macOS 15+ listen/post event access. README still describes the batch orange/silence path; renamed from VoiceType.",
    content: WHISPERCPP_CONTENT,
    coverImage: WHISPERCPP_COVER,
    tags: [
      "whispercpponeverything",
      "whisper.cpp",
      "whisper-stream",
      "speech-to-text",
      "stt",
      "dictation",
      "menubar",
      "macos",
      "swift",
      "swift-package",
      "cgevent",
      "accessibility",
      "local-ai",
      "michaelmonetized",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-06-22T21:57:01Z"),
    readingTime: 2,
  },
  {
    _id: "static:buffer-cli-wpzinc-parity-agent-oauth-no-scrape",
    title: "buffer-cli: wp-to-buffer-pro parity in the terminal \u2014 OAuth, no scrape",
    slug: "buffer-cli-wpzinc-parity-agent-oauth-no-scrape",
    excerpt:
      "buffer-cli is a public Bun + commander CLI (HEAD 778ecaf, 3 commits, ~1892 LOC) with WPZinc-shaped OAuth via localhost:9876 into ~/.buffer-cli. Gaps: no queue.ts, no --from, token refresh TODO, CHANGELOG still Unreleased.",
    content: BUFFER_CLI_CONTENT,
    coverImage: BUFFER_CLI_COVER,
    tags: [
      "buffer-cli",
      "buffer",
      "cli",
      "typescript",
      "bun",
      "oauth",
      "wpzinc",
      "wp-to-buffer-pro",
      "social-media",
      "scheduler",
      "agent",
      "michaelmonetized",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-06-22T22:11:24Z"),
    readingTime: 1,
  },
  {
    _id: "static:hustlechat-com-intercom-alt-convex-claims-parkweb",
    title: "hustlechat.com: Intercom-alt lander that claims Convex with no Convex dep",
    slug: "hustlechat-com-intercom-alt-convex-claims-parkweb",
    excerpt:
      "Private Next 16 live-chat marketing shell \u2014 Free/$0 \u00b7 Teams $8 \u00b7 Premium $18 \u00b7 Enterprise $28 vs Intercom $74+/Drift $2,500+/Crisp $25+. Copy says powered by Convex; package.json has next/react only. Fake @hustlechat/* SDKs, github.com/hustlechat 404, app/cdn NXDOMAIN. Live hustlechat.com is GoDaddy parkweb (/lander). Demo ChatWidget is setState. 3 commits. HEAD a570134.",
    content: HUSTLECHAT_CONTENT,
    coverImage: HUSTLECHAT_COVER,
    tags: [
      "hustlechat-com",
      "hustlechat",
      "live-chat",
      "intercom-alternative",
      "convex",
      "marketing-site",
      "nextjs",
      "tailwind",
      "pricing",
      "parkweb",
      "godaddy",
      "lander",
      "michaelmonetized",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-06-22T22:11:37Z"),
    readingTime: 1,
  },
  {
    _id: "static:hustlecrm-com-eight-per-user-crm-lander-legacy-php-domain",
    title: "hustlecrm.com: $8/user CRM lander vs legacy PHP login domain",
    slug: "hustlecrm-com-eight-per-user-crm-lander-legacy-php-domain",
    excerpt:
      "Private Next 16 marketing shell for HustleCRM (HEAD 2c50bbb, 3 commits): HubSpot/Pipedrive/Salesforce comparison, $8/user/mo Pro + 14-day free trial, Kanban demo chrome, docs/API cards with hash hrefs. Live hustlecrm.com still serves a 2023 Bootstrap PHP login; Vercel aliases 404.",
    content: HUSTLECRM_CONTENT,
    coverImage: HUSTLECRM_COVER,
    tags: [
      "hustlecrm-com",
      "hustlecrm",
      "crm",
      "pipeline",
      "kanban",
      "hubspot-alternative",
      "salesforce-alternative",
      "marketing-site",
      "nextjs",
      "tailwind",
      "pricing",
      "php",
      "lander",
      "michaelmonetized",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-06-22T22:11:02Z"),
    readingTime: 3,
  },

  {
    _id: "static:hustleforms-com-eight-dollar-crm-form-lander-nxdomain",
    title: "hustleforms.com: $8/mo CRM form lander, Typeform table, NXDOMAIN",
    slug: "hustleforms-com-eight-dollar-crm-form-lander-nxdomain",
    excerpt:
      "Private michaelmonetized/hustleforms-com is a Next 16 marketing shell (Free / $8 Pro / $24 Business, Typeform/Jotform/Wufoo table, docs hash-anchor index). CTAs hit local /signup|/login|/contact with no pages; hustleforms.com NXDOMAIN; vercel.app DEPLOYMENT_NOT_FOUND. Stock create-next-app README. 3 commits. HEAD 80c54f4.",
    content: HUSTLEFORMS_CONTENT,
    coverImage: HUSTLEFORMS_COVER,
    tags: [
      "hustleforms-com",
      "hustleforms",
      "forms",
      "form-builder",
      "crm",
      "typeform",
      "jotform",
      "wufoo",
      "marketing-site",
      "nextjs",
      "tailwind",
      "pricing",
      "lander",
      "michaelmonetized",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-06-22T22:10:34Z"),
    readingTime: 3,
  },

  {
    _id: "static:ipro-golf-agency-lander-ecosystem-hub",
    title: "iPro.golf: the golf course & resort marketing agency lander \u2014 not iLeague, not iTour",
    slug: "ipro-golf-agency-lander-ecosystem-hub",
    excerpt:
      "HurleyUS/iPro-main-web is the live agency site for courses and resorts (ipro.golf): Next 16 pages, retainers $1,997 to $9,997+, ecosystem Coming Soon shells, iconference.golf rewritten to /iconf. Sibling vault michaelmonetized/iPro was SKIP. Distinct from ileague creator SaaS and itour season lander. 10 commits, HEAD b8dfdba.",
    content: IPRO_CONTENT,
    coverImage: IPRO_COVER,
    tags: [
      "ipro",
      "ipro-golf",
      "golf-marketing",
      "agency",
      "golf-course",
      "resort",
      "country-club",
      "ecosystem-hub",
      "ileague",
      "itour",
      "iconference",
      "nextjs",
      "vercel",
      "shadcn",
      "hurleyus",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-06-22T22:15:19Z"),
    readingTime: 5,
  },

  {
    _id: "static:assessment-toolbar-chrome-mv3-lighthouse-missing-double-inject",
    title: "Assessment-Toolbar: pink SEO chrome bar that promises Lighthouse and double-injects itself",
    slug: "assessment-toolbar-chrome-mv3-lighthouse-missing-double-inject",
    excerpt:
      "Assessment-Toolbar is a public Chrome MV3 pink SEO strip (HEAD 9652620, 6 commits, GPL-3.0) that ships SpyFu through Whois helpers but zero Lighthouse links despite Manifest/README claims. background.js dual-loads content.js; hustlelaunch.com/assessment-toolbar is 404.",
    content: ASSESSMENT_TOOLBAR_CONTENT,
    coverImage: ASSESSMENT_TOOLBAR_COVER,
    tags: [
      "assessment-toolbar",
      "marketing-assessments",
      "chrome-extension",
      "manifest-v3",
      "seo",
      "spyfu",
      "wave",
      "lighthouse",
      "content-scripts",
      "hustlelaunch",
      "michaelmonetized",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-06-22T22:12:56Z"),
    readingTime: 1,
  },

  {
    _id: "static:freview-five-reviews-six-sections-observability-gate",
    title: "freview: README says five reviews \u2014 REVIEW.md actually stitches six",
    slug: "freview-five-reviews-six-sections-observability-gate",
    excerpt:
      "freview (@hurleyus/freview 0.1.0, HEAD 23237d9, 22 commits) is a public zsh pre-push gate that always writes six REVIEW.md sections even though README still sells Five reviews, with observability as the undocumented sixth plus a Claude fallow-gate rewrite to push-only.",
    content: FREVIEW_CONTENT,
    coverImage: FREVIEW_COVER,
    tags: [
      "freview",
      "fallow",
      "scribe",
      "pre-push",
      "review",
      "observability",
      "sentry",
      "posthog",
      "blacksmith",
      "zsh",
      "bun",
      "hurleyus",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-06-22T22:12:46Z"),
    readingTime: 3,
  },

  {
    _id: "static:hustleconvert-com-eight-dollar-popup-lander-nxdomain",
    title: "hustleconvert.com: $8/mo popup lander, OptinMonster table, NXDOMAIN",
    slug: "hustleconvert-com-eight-dollar-popup-lander-nxdomain",
    excerpt:
      "Private michaelmonetized/hustleconvert-com is a Next 16 popup marketing shell (Free / $8 Pro / $24 Team, OptinMonster vs Sumo table, docs index of dead child links). Auth CTAs point at app.hustleconvert.com; claimed domain NXDOMAIN; vercel.app DEPLOYMENT_NOT_FOUND. Stock create-next-app README. 3 commits. HEAD a5d3f13.",
    content: HUSTLECONVERT_CONTENT,
    coverImage: HUSTLECONVERT_COVER,
    tags: [
      "hustleconvert-com",
      "hustleconvert",
      "popups",
      "exit-intent",
      "conversion",
      "optinmonster",
      "sumo",
      "marketing-site",
      "nextjs",
      "tailwind",
      "pricing",
      "lander",
      "michaelmonetized",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-06-22T22:11:58Z"),
    readingTime: 2,
  },

  {
    _id: "static:shipprep-default-apply-biome-tsgo-blacksmith-vercel-off",
    title: "shipprep: default APPLY for the HurleyUS JS shipping standard",
    slug: "shipprep-default-apply-biome-tsgo-blacksmith-vercel-off",
    excerpt:
      "Private Bun CLI (403-line bin/shipprep.mts) that migrates a Next/Bun project root onto Biome+tsgo scripts, Caddy localhost helpers, freview pre-push, Blacksmith ship.yml, and vercel.json with Git auto-deploys disabled on main/master. --audit is opt-in. 6 commits. HEAD c35a9d8.",
    content: SHIPPREP_CONTENT,
    coverImage: SHIPPREP_COVER,
    tags: [
      "shipprep",
      "bun",
      "cli",
      "biome",
      "tsgo",
      "blacksmith",
      "vercel",
      "freview",
      "shipping-standard",
      "dev-tooling",
      "caddy",
      "michaelmonetized",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-06-22T22:13:25Z"),
    readingTime: 1,
  },

  {
    _id: "static:redactthing-streamer-pii-mv3-jquery-ghost-iframe-gap",
    title: "redactthing: streamer PII Chrome extension that still ships unused jQuery and a 404 lander",
    slug: "redactthing-streamer-pii-mv3-jquery-ghost-iframe-gap",
    excerpt:
      "Public michaelmonetized/redactthing is a Manifest V3 Chrome extension for streamers: one-click redact/blur/mask/hide of emails, phones, and custom PII via MutationObserver. HEAD 5c4661c. 7 commits. June 22 nightly rewrote foreground.js to vanilla JS \u2014 jquery.js stays in the manifest unused. Google Sites fails on iframe piles. hustlelaunch.com/redactthing 404s. ROADMAP describes a different product.",
    content: REDACTTHING_CONTENT,
    coverImage: REDACTTHING_COVER,
    tags: [
      "redactthing",
      "chrome-extension",
      "manifest-v3",
      "privacy",
      "pii",
      "streaming",
      "mutation-observer",
      "jquery",
      "google-sites",
      "hustlelaunch",
      "michaelmonetized"
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-06-22T22:13:40Z"),
    readingTime: 1,
  },

  {
    _id: "static:hustledesk-com-eight-dollar-helpdesk-lander-wordpress-domain",
    title: "hustledesk.com: $8 flat helpdesk lander vs WordPress domain",
    slug: "hustledesk-com-eight-dollar-helpdesk-lander-wordpress-domain",
    excerpt:
      "hustledesk-com is a three-commit Next 16 lander selling $8 flat helpdesk tickets while hustledesk.com still serves a WordPress Make extra income parking page. The app subdomain 301s to that WordPress home; the Vercel project alias is DEPLOYMENT_NOT_FOUND.",
    content: HUSTLEDESK_CONTENT,
    coverImage: HUSTLEDESK_COVER,
    tags: [
      "hustledesk-com",
      "hustledesk",
      "helpdesk",
      "zendesk-alternative",
      "support-tickets",
      "marketing-site",
      "nextjs",
      "tailwind",
      "pricing",
      "wordpress",
      "lander",
      "michaelmonetized"
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-06-22T22:14:36Z"),
    readingTime: 3,
  },

  {
    _id: "static:kitchen-cloud-native-project-store",
    title: "Kitchen: I built a cloud project store where files are rows and disk is a Mirror \u2014 no git",
    slug: "kitchen-cloud-native-project-store",
    excerpt:
      "Kitchen is a public Next 16.2.9 + Convex + Clerk + Mirror project store (HEAD 97bec56, 34 commits, web 0.1.0) aimed at live sync without git ceremony verbs. Marketing routes return 200; discover/vision/mission still 404 and the working tree is dirty.",
    content: KITCHEN_CONTENT,
    coverImage: KITCHEN_COVER,
    tags: [
      "kitchen",
      "cloud-native",
      "sync",
      "convex",
      "clerk",
      "nextjs",
      "mirror",
      "versioning",
      "no-git",
      "developer-tools",
      "pierre",
      "vercel",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-06-22T22:19:46Z"),
    readingTime: 1,
  },

  {
    _id: "static:hustlemail-com-eight-dollar-lander-missing-signup",
    title: "hustlemail.com: $8/mo email-marketing lander with missing /signup",
    slug: "hustlemail-com-eight-dollar-lander-missing-signup",
    excerpt:
      "Private Next 16 marketing shell for HustleMail (Free / $8 Pro / $24 Business, Mailchimp vs ConvertKit comparison table, docs index full of dead child links, CTAs to /signup and /login that do not exist). No README. 3 commits. HEAD ab984f2. Sibling Resend+Convex hustlemail mail client is a different repo.",
    content: HUSTLEMAIL_CONTENT,
    coverImage: HUSTLEMAIL_COVER,
    tags: [
      "hustlemail-com",
      "hustlemail",
      "email-marketing",
      "marketing-site",
      "nextjs",
      "tailwind",
      "pricing",
      "convertkit",
      "mailchimp",
      "lander",
      "michaelmonetized",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-06-22T22:16:19Z"),
    readingTime: 2,
  },

  {
    _id: "static:nvibe-neovim-cursor-coderabbit-layout-until-it-works",
    title: "nvibe: I wired Cursor Agent + CodeRabbit into Neovim, then fought the window manager until \"it works!\"",
    slug: "nvibe-neovim-cursor-coderabbit-layout-until-it-works",
    excerpt:
      "nvibe is a public Lua Neovim plugin (HEAD 56d0152, 35 commits) that auto-lays out Cursor Agent + CodeRabbit on the left and LazyGit/shells on the bottom with a hard NvChad dependency. Arc runs from Product Hunt README through \"it works!\" window-management hell, NvimTree #4/#5 fixes, a GitHub Actions gate that got deleted for \"Vercel is our only CI/CD,\" and June 22 nightlies. HEAD 56d0152.",
    content: NVIBE_CONTENT,
    coverImage: NVIBE_COVER,
    tags: [
      "nvibe",
      "neovim",
      "nvim",
      "lua",
      "nvchad",
      "cursor-agent",
      "coderabbit",
      "lazygit",
      "vibe-coding",
      "nvim-tree",
      "terminal",
      "ai-coding",
      "michaelmonetized",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-06-22T22:17:07Z"),
    readingTime: 4,
  },

  {
    _id: "static:compare-git-isolated-command-benchmarker",
    title: "compare: back-to-back time lies \u2014 so I git-isolated the benchmark",
    slug: "compare-git-isolated-command-benchmarker",
    excerpt:
      "Public michaelmonetized/compare is an 825-line bash CLI that snapshots a dirty tree, runs each command on its own compare/<slug> branch from a shared baseline, and logs POSIX time. Motivating examples: biome vs oxlint. VERSION 0.1.0. 3 commits. HEAD c5dbcd6. Second nightly is an empty tree.",
    content: COMPARE_CONTENT,
    coverImage: COMPARE_COVER,
    tags: [
      "compare",
      "bash",
      "cli",
      "benchmark",
      "posix-time",
      "git-isolation",
      "biome",
      "oxlint",
      "mdr",
      "mermaid",
      "devtools",
      "michaelmonetized",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-06-22T22:17:17Z"),
    readingTime: 3,
  },

  {
    _id: "static:bashformer-ink-flappy-after-c-sdl-cleanup",
    title: "bashformer: terminal Flappy Bird in Ink \u2014 after I deleted the C/SDL pile",
    slug: "bashformer-ink-flappy-after-c-sdl-cleanup",
    excerpt:
      "bashformer is a public dual-stack TTY game: Ink Flappy in index.tsx (~263 LOC) and a pure-bash Nerd Font platformer in bashformer.sh (~314 LOC). HEAD 541d2bc, 21 commits, Unreleased; Feb 21 deleted the C/SDL pile and fixed Pipe.scored.",
    content: BASHFORMER_CONTENT,
    coverImage: BASHFORMER_COVER,
    tags: [
      "bashformer",
      "flappy-bird",
      "ink",
      "react",
      "bun",
      "typescript",
      "terminal-game",
      "bash",
      "platformer",
      "nerd-font",
      "cli",
      "michaelmonetized",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-06-22T22:17:28Z"),
    readingTime: 1,
  },

  {
    _id: "static:orclawstrator-swift-appkit-to-go-tui-openclaw-gateway",
    title: "orclawstrator: I built the OpenClaw command center in Swift, then archived it for a Go TUI",
    slug: "orclawstrator-swift-appkit-to-go-tui-openclaw-gateway",
    excerpt:
      "Orclawstrator is the dual-runtime OpenClaw agent command center: Feb 2026 Swift AppKit plus SQLite and Gateway WS on :3377, then a Jun nightly that archived AppKit under swift-appkit/ and made the Bubble Tea TUI the recommended surface on the same ~/.orclawstrator/cache.db. Eight commits. HEAD 01d9a20. Separate from mission-control and hurley-mission-control.",
    content: ORCLAWSTRATOR_CONTENT,
    coverImage: ORCLAWSTRATOR_COVER,
    tags: [
      "orclawstrator",
      "openclaw",
      "swift",
      "appkit",
      "go",
      "bubbletea",
      "tui",
      "sqlite",
      "graphite",
      "vercel",
      "github-cli",
      "macos",
      "agent-orchestration",
      "michaelmonetized",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-06-22T22:15:41Z"),
    readingTime: 4,
  },

  {
    _id: "static:hustlepay-guest-claim-tokens-auth-agnostic-stripe",
    title: "HustlePay: guest claim tokens before the framework adapters stopped being TODOs",
    slug: "hustlepay-guest-claim-tokens-auth-agnostic-stripe",
    excerpt:
      "Private michaelmonetized/hustlepay is auth-agnostic Stripe + Convex payments glue. One nightly commit shipped hp_guest_sessions claim tokens, Pay/ClaimAccount in @core, and seven hp_* tables \u2014 while @hustlepay/react still exports VERSION only.",
    content: HUSTLEPAY_CONTENT,
    coverImage: HUSTLEPAY_COVER,
    tags: [
      "hustlepay",
      "stripe",
      "convex",
      "guest-checkout",
      "claim-tokens",
      "auth-agnostic",
      "payments",
      "turbo",
      "bun",
      "michaelmonetized",
      "theo-stripe-recommendations",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-06-22T22:18:51Z"),
    readingTime: 1,
  },

  {
    _id: "static:codefolio-spec-first-github-portfolio-saas",
    title: "Codefolio: I shipped a GitHub-sync portfolio SaaS with 4k lines of specs \u2014 and claimed a domain that isn't mine",
    slug: "codefolio-spec-first-github-portfolio-saas",
    excerpt:
      "Private michaelmonetized/codefolio is a Next.js 16 + Clerk + Convex developer portfolio platform: /:username public pages, resume, dashboard analytics, Free/$9 Pro/$29 Team. Three commits. Marketing OG points at codefolio.dev, which currently serves someone else's portfolio. HEAD c499a72.",
    content: CODEFOLIO_CONTENT,
    coverImage: CODEFOLIO_COVER,
    tags: [
      "codefolio",
      "developer-portfolio",
      "github-sync",
      "nextjs",
      "convex",
      "clerk",
      "stripe",
      "saas",
      "proxy-ts",
      "resume",
      "analytics",
      "michaelmonetized",
      "spec-first",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-06-22T22:19:28Z"),
    readingTime: 3,
  },

  {
    _id: "static:stripe-convex-email-payments-theo-unpublished",
    title: "stripe-convex: I shipped a Theo-compliant Stripe+Convex library \u2014 and never published the package",
    slug: "stripe-convex-email-payments-theo-unpublished",
    excerpt:
      "Public michaelmonetized/stripe-convex is a TypeScript Stripe + Convex payment library (email-indexed sc_* tables, cart/coupons, Pay/AddToCart/Checkout/Has, 19 webhook events, Theo sync/portal helpers). package.json 0.1.0 with a release workflow and README version badge, yet zero GitHub Releases and registry 404; LICENSE still says Michael Shilman. HEAD 22e099e (PR #13). 11 commits.",
    content: STRIPE_CONVEX_CONTENT,
    coverImage: STRIPE_CONVEX_COVER,
    tags: [
      "stripe-convex",
      "stripe",
      "convex",
      "payments",
      "subscriptions",
      "cart",
      "coupons",
      "typescript",
      "webhooks",
      "theo",
      "t3",
      "saas",
      "billing",
      "michaelmonetized",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-03-20T23:54:13Z"),
    readingTime: 3,
  },

  {
    _id: "static:bundx-init-nextjs-unique-localhost-https-caddy",
    title: "bundx-init: every Next.js repo gets https://<repo>.localhost via Caddy",
    slug: "bundx-init-nextjs-unique-localhost-https-caddy",
    excerpt:
      "bundx-init is a public curl-install shell CLI (HEAD c8b59ad, 3 commits) that gives each Next repo a hashed *.localhost HTTPS origin via Caddy and allowedDevOrigins. Fixture basic-next lands on port 6422; no live web app.",
    content: BUNDX_INIT_CONTENT,
    coverImage: BUNDX_INIT_COVER,
    tags: [
      "bundx-init",
      "nextjs",
      "caddy",
      "localhost",
      "https",
      "clerk",
      "allowedDevOrigins",
      "bash",
      "cli",
      "dev-tooling",
      "local-dev",
      "michaelmonetized",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-06-22T22:18:02Z"),
    readingTime: 2,
  },

  {
    _id: "static:itour-golf-tour-lander-ahead-of-deploy",
    title: "iTour.golf: I rewrote the national creator-tour lander for May 2027 \u2014 production still serves the 2026 fake season",
    slug: "itour-golf-tour-lander-ahead-of-deploy",
    excerpt:
      "iTour.golf is the HurleyUS national golf creator tour, separate from the iLeague creator platform. Repo HEAD markets a 36-week 2027 season; live www still shows a 2026 story. No Stripe in the web package.",
    content: ITOUR_GOLF_CONTENT,
    coverImage: ITOUR_GOLF_COVER,
    tags: [
      "itour",
      "itour-golf",
      "golf",
      "golf-tour",
      "creator-tour",
      "sponsors",
      "ileague",
      "iconference",
      "convex",
      "nextjs",
      "clerk",
      "vercel",
      "deploy-drift",
      "hurleyus",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-06-22T22:20:27Z"),
    readingTime: 5,
  },

  {
    _id: "static:ascii-commit-graph-terminal-heatmap-cd-hook-fastpath",
    title: "ascii-commit-graph: GitHub's heatmap in my terminal \u2014 then I made the cd hook fast",
    slug: "ascii-commit-graph-terminal-heatmap-cd-hook-fastpath",
    excerpt:
      "ascii-commit-graph is a public 209-line shell heatmap (README V1.0.4, HEAD 9221b76) with a zoxide cd hook and a Jul 2026 single-git log / one-GraphQL fast path. ROADMAP release checkbox still open; install snippet still mentions michael-k/.",
    content: ASCII_COMMIT_GRAPH_CONTENT,
    coverImage: ASCII_COMMIT_GRAPH_COVER,
    tags: [
      "ascii-commit-graph",
      "bash",
      "cli",
      "git",
      "github",
      "heatmap",
      "contribution-graph",
      "zoxide",
      "terminal",
      "gh",
      "ripgrep",
      "michaelmonetized",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-07-31T13:41:43Z"),
    readingTime: 1,
  },

  {
    _id: "static:niri-macos-scrollable-tiling-swift-ax-port",
    title: "niri-macos: I ported niri's scrollable tiling to macOS, then wrote an autopsy on my own Swift",
    slug: "niri-macos-scrollable-tiling-swift-ax-port",
    excerpt:
      "Native Swift 0.1.0 port of YaLTeR/niri's infinite horizontal strip to macOS via Accessibility APIs: four commits, ~226KB Swift, AUTOPSY.md roasting the early prototype, then nightly commits that answered it with 112 tests, ConfigManager, and a NiriCore library split. HEAD d21a739.",
    content: NIRI_MACOS_CONTENT,
    coverImage: NIRI_MACOS_COVER,
    tags: [
      "niri-macos",
      "niri",
      "swift",
      "macos",
      "tiling",
      "window-manager",
      "accessibility",
      "scrollable-tiling",
      "paperwm",
      "yabai",
      "skhd",
      "spm",
      "ipc",
      "michaelmonetized",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-06-22T22:20:38Z"),
    readingTime: 3,
  },

  {
    _id: "static:breazyapp-pocket-peo-aes-before-stripe",
    title: "BreazyApp pocket PEO draft pack",
    slug: "breazyapp-pocket-peo-aes-before-stripe",
    excerpt:
      "Next.js 16 + Convex + Clerk pocket PEO for chain restaurants. Four portals, live waitlist, field protection, billing UI without stripe package. HEAD 2402b35.",
    content: BREAZYAPP_CONTENT,
    coverImage: BREAZYAPP_COVER,
    tags: [
      "breazyapp",
      "peo",
      "hr",
      "payroll",
      "restaurants",
      "nextjs",
      "convex",
      "clerk",
      "hurleyus",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-08-08T10:54:33Z"),
    readingTime: 1,
  },

  {
    _id: "static:mission-control-go-tui-p10k-portfolio-ops",
    title: "mission-control: I built a p10k Go TUI for the whole portfolio \u2014 not the agent thread plane",
    slug: "mission-control-go-tui-p10k-portfolio-ops",
    excerpt:
      "Mission Control is the public Go Bubble Tea mc TUI for Vercel, git, Swift, and GitHub across a local portfolio, separate from Hurley Mission Control's Convex human|agent plane. Phase 1 is the local strip; Phase 2 scaffolds metered Fly VMs and BYO Claude without claiming the other product's name.",
    content: MISSION_CONTROL_TUI_CONTENT,
    coverImage: MISSION_CONTROL_TUI_COVER,
    tags: [
      "mission-control",
      "go",
      "bubbletea",
      "tui",
      "p10k",
      "vercel",
      "openclaw",
      "convex",
      "flyio",
      "portfolio-ops",
      "michaelmonetized",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-08-08T10:49:27Z"),
    readingTime: 2,
  },

  {
    _id: "static:glass-design-system-apple-svg-refraction-showcase",
    title: "glass-design-system: I shipped Apple SVG refraction, not the WebGL registry",
    slug: "glass-design-system-apple-svg-refraction-showcase",
    excerpt:
      "March 2026 I built a Next.js 16 glass design system with SVG feDisplacementMap Apple Liquid Glass, animated conic borders, jelly nav, and an 80+ Catppuccin showcase, live on Vercel. Distinct from twelveux WebGL Glass.",
    content: GLASS_DESIGN_SYSTEM_CONTENT,
    coverImage: GLASS_DESIGN_SYSTEM_COVER,
    tags: [
      "glass-design-system",
      "apple-glass",
      "svg",
      "displacement",
      "catppuccin",
      "nextjs",
      "tailwind",
      "shadcn",
      "martech",
      "design-system",
      "twelveux-sibling",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-08-08T10:49:14Z"),
    readingTime: 4,
  },

  {
    _id: "static:santabox-charity-lootbox-rebuild",
    title: "SantaBox.org: I rebuilt a BestWNC copy-paste into a Christmas charity lootbox platform",
    slug: "santabox-charity-lootbox-rebuild",
    excerpt:
      "SantaBox.org is a Next.js 16 + Convex + Clerk + Stripe Christmas gift-box charity rebuilt from a BestWNC directory copy-paste into a donate/wishlist/partner stack. Feb 13 deleted fabricated nonprofit logos before they became a liability. HEAD 67712cb.",
    content: SANTABOX_CONTENT,
    coverImage: SANTABOX_COVER,
    tags: [
      "santabox",
      "charity",
      "christmas",
      "nonprofit",
      "lootbox",
      "donations",
      "nextjs",
      "convex",
      "clerk",
      "stripe",
      "resend",
      "vercel",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-08-08T10:50:14Z"),
    readingTime: 3,
  },

  {
    _id: "static:shipthing-contacts-spine-not-carrier-rates",
    title: "shipthing: I named it for shipping rates and shipped a contacts spine instead",
    slug: "shipthing-contacts-spine-not-carrier-rates",
    excerpt:
      "ShipThing is the public michaelmonetized/shipthing spine: Next 16.1.1, Clerk, Convex contacts, Resend lead mail, Sentry, PostHog, and proxy.ts. Thirty-nine commits; HEAD 9f91d97. PLAN.md still lists unchecked USPS/UPS/FedEx boxes.",
    content: SHIPTHING_CONTENT,
    coverImage: SHIPTHING_COVER,
    tags: [
      "shipthing",
      "nextjs",
      "convex",
      "clerk",
      "resend",
      "sentry",
      "posthog",
      "proxy-ts",
      "contacts",
      "shipping",
      "vercel",
      "michaelmonetized",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-08-08T10:49:39Z"),
    readingTime: 3,
  },

  {
    _id: "static:convex-nextfaster-perf-meets-convex-ecommerce-scaffold",
    title: "Convex NextFaster: I swapped Neon for a Convex e-commerce template before the demo store existed",
    slug: "convex-nextfaster-perf-meets-convex-ecommerce-scaffold",
    excerpt:
      "I took NextFaster PPR/prefetch DNA, ripped out Neon/Drizzle storefront pages, and shipped a public Convex + Clerk + Stripe + Sentry + PostHog + Resend e-commerce template with ~1.1k lines of Convex schema/mutations and a marketing homepage that still links to a /products route that does not exist yet.",
    content: CONVEX_NEXTFASTER_CONTENT,
    coverImage: CONVEX_NEXTFASTER_COVER,
    tags: [
      "convex-nextfaster",
      "nextfaster",
      "nextjs",
      "convex",
      "clerk",
      "stripe",
      "sentry",
      "posthog",
      "resend",
      "ecommerce",
      "template",
      "ppr",
      "performance",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-08-08T10:54:37Z"),
    readingTime: 1,
  },

  {
    _id: "static:citation-manager-uberall-competitor-958-directories",
    title: "Citation Manager: I built an Uberall competitor with 958 directories — and left auth on three stacks",
    slug: "citation-manager-uberall-competitor-958-directories",
    excerpt:
      "HurleyUS/citation-manager is an Uberall-framed local listings SaaS with a real 958-row directories.json registry, Convex schema, and 83 commits to HEAD 78e9fb1. Pack-day probe: citation-manager-pi.vercel.app returns 500 MIDDLEWARE_INVOCATION_FAILED.",
    content: CITATION_MANAGER_CONTENT,
    coverImage: CITATION_MANAGER_COVER,
    tags: [
      "citation-manager",
      "citations",
      "local-seo",
      "nap",
      "uberall",
      "brightlocal",
      "yext",
      "directories",
      "convex",
      "nextjs",
      "clerk",
      "hurleyus",
      "saas",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-08-08T10:54:35Z"),
    readingTime: 4,
  },

  {
    _id: "static:barbquewagon-bryson-city-hickory-smokehouse-site",
    title: "Bar-B-Que Wagon: I built a Bryson City Main Street smokehouse site",
    slug: "barbquewagon-bryson-city-hickory-smokehouse-site",
    excerpt:
      "Bar-B-Que Wagon is a Next 16 / Bun / Convex / Resend smokehouse site for 610 Main St, Bryson City, with Zod catering leads and Yelp plates in the repo. Live on barbquewagoncom.vercel.app; apex DNS still dark; thirty-eight commits through the Aug 8 robots header.",
    content: BARBQUEWAGON_CONTENT,
    coverImage: BARBQUEWAGON_COVER,
    tags: [
      "barbquewagon",
      "bar-b-que-wagon",
      "nextjs",
      "convex",
      "resend",
      "catering",
      "local-business",
      "bryson-city-nc",
      "martech",
      "json-ld",
      "smokehouse",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-08-08T10:54:27Z"),
    readingTime: 4,
  },

  {
    _id: "static:hurley-mission-control-human-agent-comms",
    title: "hurley-mission-control: I put humans and agents in the same thread model",
    slug: "hurley-mission-control-human-agent-comms",
    excerpt:
      "Hurley Mission Control is the Convex + Clerk + Next plane where users.kind is human|agent. Deliveries, idempotent sends, 2s poll. Not the Go TUI. Not mission-control-os. Daemon still stubs.",
    content: HURLEYMC_CONTENT,
    coverImage: HURLEYMC_COVER,
    tags: [
      "hurley-mission-control",
      "mission-control",
      "convex",
      "clerk",
      "nextjs",
      "agents",
      "openclaw",
      "hurleyus",
      "realtime",
      "deliveries",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-03-22T02:52:05Z"),
    readingTime: 3,
  },

  {
    _id: "static:djsidethree-wnc-wedding-dj-funnel-after-clerk-cut",
    title: "DJ Side Three: WNC wedding DJ funnel after cutting Clerk",
    slug: "djsidethree-wnc-wedding-dj-funnel-after-clerk-cut",
    excerpt:
      "djsidethree.com is a purple Next.js wedding-DJ landing with $500 / $1,200 / $1,500 packages, Convex inquiry, and an admin board. Feb 27 ripped Clerk, Turnstile, and Sentry to kill a production 500. Zod, rate limits, and Phosphor stayed.",
    content: DJSIDETHREE_CONTENT,
    coverImage: DJSIDETHREE_COVER,
    tags: [
      "djsidethree",
      "wedding-dj",
      "western-north-carolina",
      "asheville",
      "local-service",
      "nextjs",
      "convex",
      "inquiry-form",
      "phosphor",
      "vercel",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-08-08T10:54:45Z"),
    readingTime: 3,
  },
  {
    _id: "static:everythingmonetized-parody-lms-course-bros",
    title: "EverythingMonetized: I built a parody LMS where course bros sell courses about selling courses",
    slug: "everythingmonetized-parody-lms-course-bros",
    excerpt:
      "I shipped EverythingMonetized.com, a Next.js 16 + Convex parody LMS with 5 AI course-bro personas, 10 absurd courses, admin CRUD, and a purchase flow that admits nothing ships, then left the live catalog at Showing 0 of 0 because Convex never got seeded on Vercel.",
    content: EVERYTHINGMONETIZED_CONTENT,
    coverImage: EVERYTHINGMONETIZED_COVER,
    tags: [
      "everythingmonetized",
      "parody",
      "satire",
      "course-bro",
      "lms",
      "nextjs",
      "convex",
      "tailwind",
      "martech",
      "creator-economy",
      "hurleyus",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-08-08T10:54:47Z"),
    readingTime: 4,
  },
  {
    _id: "static:cravees-catering-martech-agency-site",
    title: "Cravees: I built a catering martech agency site with dual pricing honesty",
    slug: "cravees-catering-martech-agency-site",
    excerpt:
      "I built Cravees, a Next.js 16 + Convex + Clerk catering marketing agency site, with $299-$999 packages on the page and a different Stripe bronze/silver/gold ladder in code. Lead enums, ROI calculator, newsletter double opt-in. Live on www.cravees.com.",
    content: CRAVEES_CONTENT,
    coverImage: CRAVEES_COVER,
    tags: [
      "cravees",
      "catering",
      "martech",
      "marketing-agency",
      "nextjs",
      "convex",
      "clerk",
      "stripe",
      "roi-calculator",
      "hospitality",
      "local-seo",
      "catppuccin",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-08-08T10:54:41Z"),
    readingTime: 4,
  },
  {
    _id: "static:coordinatorapp-api-queue-control-plane",
    title: "Coordinator: I shipped an API queue control plane before the queue worker existed",
    slug: "coordinatorapp-api-queue-control-plane",
    excerpt:
      "CoordinatorApp is an API queue control plane on Next.js + Convex: jobs, workers, and status you can operate, not a package demo.",
    content: COORDINATORAPP_CONTENT,
    coverImage: COORDINATORAPP_COVER,
    tags: [
      "coordinator",
      "coordinatorapp",
      "api-queue",
      "rate-limiting",
      "nextjs",
      "convex",
      "clerk",
      "stripe",
      "zapier",
      "backpressure",
      "hurleyus",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-08-08T10:54:39Z"),
    readingTime: 4,
  },

  {
    _id: "static:hurleyus-com-membership-growth-parent-site",
    title: "hurleyus.com: I shipped the parent site as a performance-pay membership lander",
    slug: "hurleyus-com-membership-growth-parent-site",
    excerpt:
      "HurleyUS.com is live as a membership-growth revenue partner lander for private and resort golf clubs \u2014 Next.js 16, Resend, Sentry, optional Convex \u2014 after an A/B flip that kept HomeA.",
    content: HURLEYUS_COM_CONTENT,
    coverImage: HURLEYUS_COM_COVER,
    tags: [
      "hurleyus",
      "golf",
      "membership",
      "nextjs",
      "convex",
      "resend",
      "sentry",
      "martech",
      "vercel",
      "parent-company",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-08-08T10:54:58Z"),
    readingTime: 2,
  },
  {
    _id: "static:waynesville-zaxbys-single-store-ops-portal",
    title: "modern-design-playground: I left agents running for ten hours and they rebuilt nine worlds",
    slug: "waynesville-zaxbys-single-store-ops-portal",
    excerpt:
      "I shipped waynesville.yourzaxbys.com as a Next.js 16 + Convex + Clerk single-store portal for 424 Russ Ave: public events/careers/community out front, live shift metrics, Steritech CAPs, hiring, training, and attendance behind the door. Package 0.1.0, 235 commits, HEAD c9f97b7. Not the franchise SaaS sibling.",
    content: WAYNESVILLE_ZAXBYS_CONTENT,
    coverImage: WAYNESVILLE_ZAXBYS_COVER,
    tags: [
      "waynesville",
      "yourzaxbys",
      "zaxbys",
      "single-store",
      "nextjs",
      "convex",
      "clerk",
      "steritech",
      "ops",
      "martech",
      "wnc",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-08-08T10:55:40Z"),
    readingTime: 5,
  },
  {
    _id: "static:modern-design-playground-afk-webgl-nine-worlds",
    title: "modern-design-playground: I left agents running for ten hours and they rebuilt nine worlds",
    slug: "modern-design-playground-afk-webgl-nine-worlds",
    excerpt:
      "I shipped a WebGL instrument homepage and nine landing worlds, then left a marathon agent loop overnight after WebGL went blank. Live on mdp-seven.vercel.app.",
    content: MODERN_DESIGN_PLAYGROUND_CONTENT,
    coverImage: MODERN_DESIGN_PLAYGROUND_COVER,
    tags: [
      "modern-design-playground",
      "webgl",
      "threejs",
      "tanstack",
      "vite",
      "shadcn",
      "max",
      "martech",
      "vercel",
      "afk",
      "agents",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-08-08T10:55:09Z"),
    readingTime: 3,
  },
  {
    _id: "static:yourzaxbys-franchise-management-platform",
    title: "Your ZAXBYS: I built a franchise ops platform so the store and the above-store stop living in different spreadsheets",
    slug: "yourzaxbys-franchise-management-platform",
    excerpt:
      "I shipped Your ZAXBYS as a Next.js 16 + Convex + Clerk franchise management platform (employees, stores, schedules, CAPs, audits) with a public marketing lander and a private dashboard, package 1.0.0, 46 commits, HEAD 705473f.",
    content: YOURZAXBYS_CONTENT,
    coverImage: YOURZAXBYS_COVER,
    tags: [
      "yourzaxbys",
      "zaxbys",
      "franchise",
      "nextjs",
      "convex",
      "clerk",
      "resend",
      "sentry",
      "martech",
      "ops",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-08-08T10:55:46Z"),
    readingTime: 5,
  },
  {
    _id: "static:mockup-gallery-ten-industry-cold-outreach",
    title: "mockup-gallery: I shipped 10 industry mockups as a cold-outreach portfolio",
    slug: "mockup-gallery-ten-industry-cold-outreach",
    excerpt:
      "I stood up mockup-gallery — ten conversion-focused industry landers in one tabbed Next.js 16 gallery for HurleyUS cold outreach. Live on Vercel. Tailwind v4 fight, then Blacksmith/Fallow/Sentry/PostHog, then index,follow.",
    content: MOCKUP_GALLERY_CONTENT,
    coverImage: MOCKUP_GALLERY_COVER,
    tags: [
      "mockup-gallery",
      "hurleyus",
      "cold-outreach",
      "web-design",
      "nextjs",
      "tailwind",
      "vercel",
      "portfolio",
      "martech",
      "conversion",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-08-08T10:55:16Z"),
    readingTime: 2,
  },
  {
    _id: "static:s12-in-url-shortener-file-hosting",
    title: "s12.in: I shipped a short domain that tracks clicks and hosts files",
    slug: "s12-in-url-shortener-file-hosting",
    excerpt:
      "s12.in is a private HurleyUS shortener + file host on Next 16.1.6, Convex, and Clerk with geo/device click recording and a 302 redirect spine. HEAD d6c074f; hero stats are still static JSX; Clerk on the observed deploy is pk_test.",
    content: S12IN_CONTENT,
    coverImage: S12IN_COVER,
    tags: [
      "s12.in",
      "url-shortener",
      "file-hosting",
      "convex",
      "clerk",
      "nextjs",
      "analytics",
      "vercel",
      "chrome-extension",
      "martech",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-08-08T10:55:28Z"),
    readingTime: 4,
  },
  {
    _id: "static:thenationalnc-live-rss-before-bias-ai",
    title: "The National NC: live NC news feeds before the bias AI ships",
    slug: "thenationalnc-live-rss-before-bias-ai",
    excerpt:
      "TheNationalNC ships live RSS before the bias-AI story: real feeds on the page, model claims parked until the pipes work.",
    content: THENATIONALNC_CONTENT,
    coverImage: THENATIONALNC_COVER,
    tags: [
      "thenationalnc",
      "north-carolina",
      "news-aggregator",
      "media-bias",
      "rss",
      "nextjs",
      "convex",
      "clerk",
      "catppuccin",
      "martech",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-08-08T10:55:35Z"),
    readingTime: 3,
  },
  {
    _id: "static:ileague-golf-patreon-meets-18birdies",
    title: "iLeague.golf: I built Patreon meets 18Birdies for golf creators — and left Clerk on pk_test",
    slug: "ileague-golf-patreon-meets-18birdies",
    excerpt:
      "iLeague.golf is the HurleyUS golf creator platform: Patreon-meets-18Birdies with Stripe tiers and a fifteen percent fee. Distinct from the iTour national tour lander.",
    content: ILEAGUE_CONTENT,
    coverImage: ILEAGUE_COVER,
    tags: [
      "ileague",
      "ileague-golf",
      "golf",
      "creator-economy",
      "patreon",
      "18birdies",
      "stripe",
      "convex",
      "clerk",
      "nextjs",
      "expo",
      "itour",
      "hurleyus",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-08-08T10:55:02Z"),
    readingTime: 4,
  },

  {
    _id: "static:getfarmin-farm-equipment-marketplace-scaffold",
    title: "GetFarmin: I scaffolded a farm equipment marketplace with escrow math first",
    slug: "getfarmin-farm-equipment-marketplace-scaffold",
    excerpt:
      "I scaffolded GetFarmin as a Next.js farm-equipment marketplace with Convex listings and Clerk: tractor/implement catalog path, not a $49 SaaS seat. Honest about Connect onboarding still unfinished.",
    content: GETFARMIN_CONTENT,
    coverImage: GETFARMIN_COVER,
    tags: [
      "getfarmin",
      "farm-equipment",
      "marketplace",
      "nextjs",
      "convex",
      "clerk",
      "stripe-connect",
      "escrow",
      "agriculture",
      "martech",
      "catppuccin",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-08-08T10:54:53Z"),
    readingTime: 4,
  },
  {
    _id: "static:merchwinner-pod-course-marketplace",
    title: "MerchWinner: I shipped a POD course marketplace before the catalog had courses",
    slug: "merchwinner-pod-course-marketplace",
    excerpt:
      "I shipped MerchWinner as a POD course marketplace on Next.js + Convex + Clerk + Stripe: catalog, checkout, and course rails in one stack, not a Google Sheet.",
    content: MERCHWINNER_CONTENT,
    coverImage: MERCHWINNER_COVER,
    tags: [
      "merchwinner",
      "print-on-demand",
      "course-marketplace",
      "nextjs",
      "convex",
      "clerk",
      "stripe",
      "resend",
      "catppuccin",
      "martech",
      "pod",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-08-08T10:55:11Z"),
    readingTime: 3,
  },
  {
    _id: "static:omnux-report-one-command-diagnostics-redaction",
    title: "WNC History Tours: I shipped the booking shell before the tour pages existed",
    slug: "omnux-report-one-command-diagnostics-redaction",
    excerpt:
      "omnux-report is an offline MIT Shell diagnostics tool (HEAD f9729a6) that ships a consenting redacted .tar.zst + SHA256 for Omnux on Apple Silicon, with SEP structure only. Validated on a real M1 Pro Omarchy box plus a ten-check fixture harness; mx-mac packaging and owner release still open.",
    content: OMNUX_REPORT_CONTENT,
    coverImage: OMNUX_REPORT_COVER,
    tags: [
      "omnux-report",
      "omnux",
      "asahi",
      "apple-silicon",
      "diagnostics",
      "redaction",
      "telemetry",
      "sep",
      "touchid",
      "linux",
      "omarchy",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-08-27T18:34:42Z"),
    readingTime: 6,
  },
  {
    _id: "static:wnc-history-tours-booking-shell-before-detail-pages",
    title: "WNC History Tours: I shipped the booking shell before the tour pages existed",
    slug: "wnc-history-tours-booking-shell-before-detail-pages",
    excerpt:
      "WNC History Tours is my Western North Carolina history-tour directory (Next.js 16, Convex, Clerk, Stripe deps). Homepage + schema + Blacksmith CI shipped; tour detail and checkout still missing. Domain answers Cloudflare 526.",
    content: WNC_TOURS_CONTENT,
    coverImage: WNC_TOURS_COVER,
    tags: [
      "wnc-history-tours",
      "western-north-carolina",
      "asheville",
      "tour-booking",
      "local-directory",
      "nextjs",
      "convex",
      "clerk",
      "stripe",
      "martech",
      "heritage-tourism",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-08-08T10:55:42Z"),
    readingTime: 4,
  },

  {
    _id: "static:hms-hustle-management-system-live-editor",
    title: "HMS: I replaced WordPress + Elementor with a live site that is the editor",
    slug: "hms-hustle-management-system-live-editor",
    excerpt:
      "I built HMS (Hustle Management System) so pages, blog, shop, and blueprints are block trees on Vite+ / React 19 / Convex / Clerk. Same URL for visitors and ?edit=1 for operators. Six commits. Version 0.0.0.",
    content: HMS_CONTENT,
    coverImage: HMS_COVER,
    tags: [
      "hms",
      "hustle-management-system",
      "page-builder",
      "convex",
      "clerk",
      "vite-plus",
      "wordpress-alternative",
      "elementor",
      "woocommerce",
      "martech",
      "blocks",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-08-14T14:38:37Z"),
    readingTime: 4,
  },
  {
    _id: "static:twelveux-hosted-shadcn-registry-glass",
    title: "twelveux: I hosted a shadcn registry and shipped Glass in one afternoon",
    slug: "twelveux-hosted-shadcn-registry-glass",
    excerpt:
      "I stood up twelveux: a hosted shadcn registry with Max, a phi Catppuccin theme, and pen.dev Glass. Playground on Vercel. Five commits. Same day.",
    content: TWELVEUX_CONTENT,
    coverImage: TWELVEUX_COVER,
    tags: [
      "twelveux",
      "shadcn",
      "glass",
      "webgl",
      "nextjs",
      "catppuccin",
      "max",
      "martech",
      "registry",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-08-15T21:15:00Z"),
    readingTime: 3,
  },

  {
    _id: "static:best-jeep-decals-convex-stripe-storefront",
    title: "Best Jeep Decals: I shipped a dark-first vinyl storefront for Jeep identity",
    slug: "best-jeep-decals-convex-stripe-storefront",
    excerpt:
      "Private Next.js 16 Jeep vinyl e-commerce: Convex catalog, Clerk auth, Stripe checkout, wishlist, reviews. 30 seeded SKUs at $29.99. Live at bestjeepdecals.com.",
    content: BESTJEEP_CONTENT,
    coverImage: BESTJEEP_COVER,
    tags: [
      "best-jeep-decals",
      "nextjs",
      "convex",
      "clerk",
      "stripe",
      "ecommerce",
      "jeep",
      "vinyl-decals",
      "martech",
      "hustle-launch",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-08-08T12:24:45Z"),
    readingTime: 6,
  },
  {
    _id: "static:sonnys-shining-rubber-hose-beat-em-up",
    title: "Sonny's Shining: I wrote a rubber-hose beat-em-up tragedy before I picked an engine",
    slug: "sonnys-shining-rubber-hose-beat-em-up",
    excerpt:
      "I shipped Sonny's Shining as a Fleischer-noir beat-em-up bible (GDD, novel, screenplay) plus a Next.js 16 newspaper site with an $8 Stripe preorder aimed at Christmas 2026.",
    content: SONNY_CONTENT,
    coverImage: SONNY_COVER,
    tags: [
      "sonnys-shining",
      "indie-game",
      "beat-em-up",
      "rubber-hose",
      "noir",
      "nextjs",
      "stripe",
      "gdd",
      "fleischer",
      "martech",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-06-22T22:16:09Z"),
    readingTime: 5,
  },
  {
    _id: "static:reaferral-agent-referral-platform",
    title: "reaferral: I built a free referral tracker so agents stop bleeding commissions into spreadsheets",
    slug: "reaferral-agent-referral-platform",
    excerpt:
      "Reaferral is an agent referral platform: who sent it, what fee attaches, where it sits in the pipeline. Accountability, not a CRM dump.",
    content: REAFERAL_CONTENT,
    coverImage: REAFERAL_COVER,
    tags: [
      "reaferral",
      "real-estate",
      "referrals",
      "convex",
      "clerk",
      "nextjs",
      "martech",
      "vercel",
      "mdx",
      "saas",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-08-08T12:18:47Z"),
    readingTime: 5,
  },
{
    _id: "static:uncap-us-repo-native-social-layer",
    title: "uncap.us: I rebuilt the social layer around the repo",
    slug: "uncap-us-repo-native-social-layer",
    excerpt:
      "I spent eight months turning a file-cabinet Git host into a repo-native work hub \u2014 Lens, origin sync, CLI/UnGit, TanStack Start. Live at uncap.us.",
    content: UNCAP_CONTENT,
    coverImage: UNCAP_COVER,
    tags: [
      "uncap",
      "devtools",
      "tanstack",
      "convex",
      "clerk",
      "git",
      "cli",
      "martech",
      "opensource",
      "vercel",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-08-31T12:16:22Z"),
    readingTime: 5,
  },
  {
    _id: "static:omarchy-site-tanstack-start-rebuild",
    title: "I rebuilt the Omarchy site in TanStack Start in three days",
    slug: "omarchy-site-tanstack-start-rebuild",
    excerpt:
      "I ported the Omarchy marketing site and full manual into TanStack Start \u2014 52 chapters, 16 news posts, Quattro hero etch, Vercel URL. Not the OS. The site.",
    content: OMARCHYSITE_CONTENT,
    coverImage: OMARCHYSITE_COVER,
    tags: [
      "omarchy",
      "tanstack-start",
      "tanstack-router",
      "typescript",
      "vercel",
      "hyprland",
      "quickshell",
      "dhh",
      "linux",
      "martech",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-09-03T04:02:00Z"),
    readingTime: 3,
  },
  {
    _id: "static:omnux-gpu-mit-clean-room-m3-siege",
    title: "omnux-gpu: I opened an MIT siege for M3 pixels and refused to call it a driver",
    slug: "omnux-gpu-mit-clean-room-m3-siege",
    excerpt:
      "omnux-gpu is the clean-room MIT attempt at Apple M3 AGX: scaffold, fifteen public issues, capture-first method. No working driver. Hardware is the bottleneck.",
    content: OMNUXGPU_CONTENT,
    coverImage: OMNUXGPU_COVER,
    tags: [
      "omnux-gpu",
      "omnux",
      "asahi",
      "apple-silicon",
      "m3",
      "gpu",
      "agx",
      "clean-room",
      "mit",
      "linux",
      "reverse-engineering",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-08-24T09:56:30Z"),
    readingTime: 6,
  },
  {
    _id: "static:hurleyus-omarchy-catppuccin-rally-theme",
    title: "Hurleyus: I put Catppuccin Mocha in Hurley rally livery on Omarchy",
    slug: "hurleyus-omarchy-catppuccin-rally-theme",
    excerpt:
      "Hurleyus is the Omarchy Catppuccin Mocha theme pack with rally walls, Plymouth unlock, and an Asahi U-Boot 160x160 splash patch. Four commits; last push 65f4da3. Omarchy 4.0.2+ drops hyprland.lua unless you clone + symlink.",
    content: HURLEYUS_CONTENT,
    coverImage: HURLEYUS_COVER,
    tags: [
      "hurleyus",
      "omarchy",
      "catppuccin",
      "mocha",
      "theme",
      "hyprland",
      "asahi",
      "u-boot",
      "plymouth",
      "linux",
      "quattro",
      "wallpaper",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-08-26T09:58:14Z"),
    readingTime: 5,
  },
  {
    _id: "static:getat-me-relationship-first-link-in-bio",
    title: "GetAt.Me: I replaced the link list with a relationship console",
    slug: "getat-me-relationship-first-link-in-bio",
    excerpt:
      "getat.me is a relationship-first link-in-bio: Next.js + Convex contacts and booking rails, not just clicks. Honest about what is live vs scaffold.",
    content: GETAT_CONTENT,
    coverImage: GETAT_COVER,
    tags: [
      "getat.me",
      "link-in-bio",
      "convex",
      "clerk",
      "nextjs",
      "martech",
      "creators",
      "consultants",
      "saas",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-09-08T02:45:21Z"),
    readingTime: 4,
  },
  {
    _id: "static:omnux-linux-apple-silicon-truth-table",
    title: "Omnux: I wired Linux for Apple silicon without lying about the GPU",
    slug: "omnux-linux-apple-silicon-truth-table",
    excerpt:
      "Omnux is the HurleyUS Linux-on-Apple-Silicon umbrella: truth table for what installs today, software-render honesty on M3, and the monorepo that coordinates docs, GPU, and report siblings.",
    content: OMNUX_CONTENT,
    coverImage: OMNUX_COVER,
    tags: [
      "omnux",
      "asahi",
      "omarchy",
      "apple-silicon",
      "linux",
      "m3",
      "gpu",
      "hyprland",
      "martech",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-08-27T18:40:41Z"),
    readingTime: 5,
  },
  {
    _id: "static:slopops-omarchy-ops-bar-panel",
    title: "slopops: I put my whole ops stack in one Omarchy bar popup",
    slug: "slopops-omarchy-ops-bar-panel",
    excerpt:
      "slopops is a public Omarchy Quickshell bar widget (0.1.0, HEAD after two 2026-08-26 commits) with one icon and five tabs (Fleet / Deploys / Sentry / Traffic / Issues), bash JSON fetchers, optional secrets.env, and a badge that goes red/yellow/green without opening another Electron tray.",
    content: SLOPOPS_CONTENT,
    coverImage: SLOPOPS_COVER,
    tags: [
      "slopops",
      "omarchy",
      "qml",
      "ops",
      "tailscale",
      "vercel",
      "sentry",
      "posthog",
      "github",
      "linux",
      "martech",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-08-26T13:55:42Z"),
    readingTime: 4,
  },
  {
    _id: "static:bestwnc-honest-analytics-local-directory",
    title: "BestWNC: I built a WNC directory that returns null instead of fake analytics",
    slug: "bestwnc-honest-analytics-local-directory",
    excerpt:
      "BestWNC is the WNC directory where listings start free and owner analytics return null when the measurement layer cannot defend a chart. September 8 shipped honest null availability, claim/billing hardening, and honeypots after spam flooded the inbox.",
    content: BESTWNC_CONTENT,
    coverImage: BESTWNC_COVER,
    tags: [
      "bestwnc",
      "local-directory",
      "western-north-carolina",
      "asheville",
      "nextjs",
      "convex",
      "stripe",
      "clerk",
      "martech",
      "analytics",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-09-08T18:36:27Z"),
    readingTime: 4,
  },
  {
    _id: "static:macks-bbq-shack-canton-condensation-site",
    title: "Mack's BBQ Shack: I built a Main Street site that still feels like the pit",
    slug: "macks-bbq-shack-canton-condensation-site",
    excerpt:
      "Mack's Shack BBQ is a private Next 16 / Bun / Convex / Resend Canton pit site with a condensation-glass hero, skeuomorphic chalkboard menu, and catering leads from notify@uncap.us. Live on www.macksbbqshack.com; sixty-seven commits through the Aug 30 Resend fix.",
    content: MACKS_CONTENT,
    coverImage: MACKS_COVER,
    tags: [
      "macks-bbq-shack",
      "nextjs",
      "convex",
      "resend",
      "catering",
      "local-business",
      "canton-nc",
      "martech",
      "hustle-launch",
      "framer-motion",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-08-30T11:13:25Z"),
    readingTime: 4,
  },

  {
    _id: "static:naarchy-0-4-preferences-privacy",
    title: "Naarchy 0.4.0: Preferences, doctor, and the privacy pass",
    slug: "naarchy-0-4-preferences-privacy",
    excerpt:
      "Update 2026-09-09: Naarchy 0.4.0 is tagged on GitHub (v0.4.0 / f95ce49). Preferences, naarchy doctor, atomic stores, travel opt-in, IPC cleanup, 86 tests. EXTEND after the Sep 3 island post.",
    content: NAARCHY_04_CONTENT,
    coverImage: NAARCHY_04_COVER,
    tags: [
      "naarchy",
      "linux",
      "hyprland",
      "omarchy",
      "gtk4",
      "rust",
      "privacy",
      "preferences",
      "clipboard",
      "open-source",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-09-03T12:52:14Z"),
    readingTime: 5,
  },
  {
    _id: "static:omadesign-native-linux-studio-13-days",
    title: "omadesign: I shipped a native Linux design suite in 13 days",
    slug: "omadesign-native-linux-studio-13-days",
    excerpt:
      "omadesign is a native Rust + egui studio with Design, Pixel, Photo, and Motion personas on one document and layer stack. Four alphas in thirteen days, glibc 2.35 tarballs for aarch64 and x86_64, still alpha and shipping without Electron.",
    content: OMADESIGN_CONTENT,
    coverImage: OMADESIGN_COVER,
    tags: [
      "omadesign",
      "rust",
      "linux",
      "egui",
      "asahi",
      "omarchy",
      "design",
      "photography",
      "motion",
      "martech",
    ],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-09-08T08:13:01Z"),
    readingTime: 4,
  },
  {
    _id: "static:naarchy-linux-dynamic-island",
    title: "Naarchy: a Dynamic Island for Linux that owns the notch",
    slug: "naarchy-linux-dynamic-island",
    excerpt:
      "I built a native GTK4 Dynamic Island for Omarchy and Hyprland. It fills the 16\" M1 Pro camera hole, grows ears for a live timer, and takes over the screen when the countdown hits zero.",
    content: NAARCHY_CONTENT,
    coverImage: NAARCHY_COVER,
    tags: ["naarchy", "linux", "omarchy", "hyprland", "open-source"],
    featured: true,
    published: true,
    publishedAt: Date.parse("2026-09-03T00:00:00Z"),
    readingTime: 3,
  },
];

function publishedStaticPosts() {
  const seen = new Set(staticPosts.map((post) => post.slug));
  const series = getOmaFeaturePosts().filter((post) => !seen.has(post.slug));
  return [...staticPosts, ...series].filter((post) => post.published);
}

export function getStaticPosts(tag?: string) {
  const posts = publishedStaticPosts();
  if (!tag) return posts;
  return posts.filter((post) => post.tags.includes(tag));
}

export function getStaticPostBySlug(slug: string) {
  return publishedStaticPosts().find((post) => post.slug === slug) ?? null;
}

export function getStaticTags() {
  return Array.from(new Set(publishedStaticPosts().flatMap((post) => post.tags))).sort();
}
