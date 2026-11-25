---
id: T144
title: Linux first creative suite
slug: omadesign-0-5-8-linux-first-creative-suite
excerpt: curl installs omadesign into ~/.local/bin and writes nothing to /usr. Omarchy colors, Phosphor icons, ARM64 and x86_64, offline templates, and Lua inside the 0.5.8 package.
tags: [omadesign, 0.5.8, linux]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-linux-first-creative-suite/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-linux-first-creative-suite/og.png
---

## The habit

The creative suite you already know how to use is a set of applications that, on Linux, has usually meant a VM, a second machine, or a web app in a browser tab. Illustrator, Photoshop, and InDesign are the muscle memory: pen, brush, frames, type, export. Affinity is the other suite people install when they want those jobs without that subscription, and its desktop builds have not been the thing you apt-get on the machine you actually work on. You want the letters, the layer stack, the RAW develop, and the timeline in a binary that installs into your home directory and runs on the glibc you already have.

You also want the chrome to look like the rest of the desktop. A creative tool with its own theme, fighting the colors you set this morning, is a second set of preferences you will never maintain.

## The constraint

The install target is `~/.local`. The public installer and `scripts/install.sh` put the binary in `~/.local/bin`, the desktop entry and MIME XML under `~/.local/share`, and the docs, skill, licenses, and plugin examples under `~/.local/share/omadesign`. Nothing is written to `/usr`. That is what makes the same line usable on Silverblue, Bazzite, NixOS, and SteamOS desktop, and on Omarchy, where `/usr` is not the place you drop a vendor tree. `$XDG_DATA_HOME` replaces `~/.local/share` when it is set. An isolated prefix exists for people packaging a copy. The default is home.

The binary has to run on glibc 2.35, which covers Ubuntu 22.04, current Arch, and Asahi Omarchy. ARM64 and x86_64 are both release archives. Lua, RAW, JPEG, and the C++ runtime pieces ship inside the package so Photo and plugins do not wait on a distro package name. Templates and the plugin guide have to work with the network cable unplugged, because a first launch that needs a CDN is not an install. It is a download with extra steps.

## What landed

```sh
curl -fsSL https://omadesign.app/install | sh
```

That resolves the current release, checks the archive, and installs. If `omadesign` is not on `PATH`, run `~/.local/bin/omadesign` or add `~/.local/bin` to `PATH`. One `omadesign.desktop` launcher remains. `.oma` and `.omaphoto` can point at it. Preferences live in `~/.config/omadesign`, or `$XDG_CONFIG_HOME`. Recovery swaps live in `~/.local/share/omadesign`.

0.5.8 is the release this package line installs as current. The archives are ARM64 and x86_64. Both report 0.5.8 and need no glibc newer than 2.35. The x86_64 executable was tested through QEMU against Ubuntu 22.04's glibc, not on a physical x86_64 GPU. Lua 5.4.9 is in the binary. Studio starter, the offline docs, the creation skill, and the Lua and Phosphor licenses are in the archive. Reinstalling preserves a plugin you already edited under `plugins/org.omadesign.studio-starter`.

On launch the chrome reads, in order, `~/.local/state/omarchy/current/theme/colors.toml`, then `~/.config/omarchy/themes/<current>/colors.toml`, then the stock Omarchy palette if neither is there. UI type is `omarchy font current`, then fontconfig `sans-serif`. Override with `OMADESIGN_FONT=/path/to/font.ttf`. Icons are Phosphor Light. The welcome screen uses that palette. There is no in-app light/dark switch. The title bar stays visible. **omadesign** in that bar opens Config, Update, About, and Docs. About shows the version. Update checks the channel and, when you confirm, runs the official installer, waits for work in progress, writes a local recovery snapshot, and restarts with the same documents and photo adjustments.

The five personas are the suite. Design, Layout, Pixel, Photo, Motion. `V`, `P`, `T`, and `B` are the letters. `F1` is the rest. Fifty-two vector templates and the Layout starters ship with the app and open offline. Photo decodes RAW without an external converter. Plugins run without a second runtime. The brand kit is `.omacolors`, `.omatype`, and `.omabrand/` in the project folder. Cloud sign-in is there when you push a snapshot, and the file opens without it.

`omadesign --version` prints the build. `omadesign --agent-docs manual` prints the manual baked into it. `omadesign --list-plugins` works with no window.

## In the hand

On a machine that does not have the app:

```sh
curl -fsSL https://omadesign.app/install | sh
~/.local/bin/omadesign
```

The welcome screen is the file browser plus the creation buttons. Click **+ Vector**. Press `R`, `P`, `T`. The colors on the chrome match the Omarchy theme you are already using. The icons are the Phosphor set, not a private metaphor you have to learn.

Open **+ Photo** and a RAW file if you have one. Grade it. `Ctrl+S` writes a `.omaphoto` beside it and leaves the camera file alone. Place into the poster when you want pixels in the `.oma`.

Open **Plugins → Manage plugins**. Studio starter is there on a first install. Run one action. `Ctrl+Z`. If you are on a train, read the API with:

```sh
omadesign --agent-docs plugins
```

The title-bar Docs item opens the website when you have a network and you want it. The share folder is the copy that installed with you.

Click **omadesign → Update** when a newer package exists and you want it. Confirm. The installer runs. Your open documents come back. The plugin folder you edited is still the plugin folder.

If you are checking a box without installing over your live copy, the archives and checksums are on the release. Both architectures. The installer is the path that puts them in `~/.local` and stops there.

## The edge

The installer writes nothing to `/usr`. A machine that cannot run glibc 2.35 cannot run this binary. The x86_64 build's published check is QEMU against glibc 2.35, not a claim about every GPU. Templates do not fetch themselves. Lua does not come from the distro. Docs in the title bar open the site. The offline pages are `--agent-docs` and `~/.local/share/omadesign/docs`. Sign-in is not required to draw, grade, or animate.

Run `curl -fsSL https://omadesign.app/install | sh`, then `~/.local/bin/omadesign`.
