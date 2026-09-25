---
id: T119
title: Lua 5.4 embedded
slug: omadesign-0-5-8-lua-5-4-embedded
excerpt: Omadesign 0.5.8 embeds Lua 5.4.9 and plugin API 1 inside the Linux packages. There is no separate runtime to install. An update leaves the plugins you already installed in place.
publishedAt: 2026-09-22T11:31:56Z
tags: [omadesign, 0.5.8, plugins, docs]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-lua-5-4-embedded/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-lua-5-4-embedded/og.png
---

## The habit

Scripts in Illustrator are ExtendScript, and the ones that still run are often older than the people running them. Photoshop has its own scripting dictionary and a plugin folder Adobe can move out from under you. Affinity's story has been panels and personas more than a language you ship inside the binary. On Linux the usual answer is worse. You install Lua from the distro, or Python, or a flatpak that cannot see the app, and then you write glue. The script works on your machine. It fails on a teammate's machine because their Lua is 5.3, or because `lua` is not on `PATH`, or because the package manager upgraded the interpreter and a C module stopped loading.

You want the language in the same binary as the studio. You want an update of the studio to leave the scripts you already trusted where they are.

## The constraint

0.5.8 is one binary on Linux, ARM64 and x86_64, with a glibc ceiling of 2.35. Lua has to be inside that package. A second install step for a runtime would mean the plugin menu depends on a distro package the installer promised not to require. The release notes are plain. Lua 5.4.9 is embedded. Plugin API 1 is the host API. Lua and the examples ship inside the Linux packages. The packages bundle Lua the way they bundle the RAW decoder. You do not apt-get an interpreter before Plugins means something.

The API is version 1 so a plugin can say what it was written for. `ctx.api` reports that version when an action runs. The plugin's own `version` field is the plugin's version, not the app's. Those two numbers are allowed to move on different days. API 1 is the contract. 0.5.8 is the app that ships that contract.

An update that replaces `~/.local/share/omadesign/plugins` with the stock examples would wipe the edit you made to a starter, or a plugin you installed from a folder. The release check is explicit. Reinstallation preserves a deliberately customized installed plugin. Existing installed plugin modifications survive updates. Fresh source for the starter is available beside that, at `~/.local/share/omadesign/plugin-examples/studio-starter`, and as a downloadable `.omaplug`. The installed copy is yours. The example tree is the reference.

The sandbox is part of embedding the language. A Lua that can `os.execute`, open the network, or read `~/.ssh` is not a plugin system you can leave enabled. The embedded Lua has table, string, math, utf8, and the basic functions. `io`, `os`, `package`, `debug`, `require`, file loaders, binary chunks, `pcall`, `xpcall`, and coroutines are unavailable. Plugins cannot execute programs, touch the network, or read arbitrary files. `oma.read_asset` reads a UTF-8 file inside the plugin's own folder. That is the disk they get.

Each run gets a fresh Lua VM. Globals do not survive until the next click. Persistent artwork belongs in the document. Persistent presets belong in the plugin. `oma` exists when an action runs. It does not exist during manifest discovery, so a plugin cannot do work while the manager is only listing names.

## What landed

Open the app from the 0.5.8 package. Plugins is there. You did not install Lua. The About version is 0.5.8. The same packages that report 0.5.8 on ARM64 and on x86_64 include the interpreter. Validation ran the x86_64 build under QEMU against Ubuntu 22.04's glibc 2.35, and ran ARM64 on the machine. Both packages inspect and render native documents, run a live-text transform, run a custom pixel filter that preserves alpha, and run a two-file batch. Those runs are the embedded host, not a system `lua` binary found on `PATH`.

API 1 is what a manifest declares:

```lua
return {
  api = 1,
  id = "org.example.color-dots",
  name = "Color dots",
  version = "1.0.0",
  description = "A small editable pattern generator.",
  actions = { -- ...
  },
}
```

The id is stable: letters, digits, dots, hyphens, underscores, no leading dot. Action ids are unique inside the plugin. The host checks parameters for desktop runs and for CLI runs. Unknown parameters are rejected. A plugin written to API 1 is the kind this build loads. You do not point the app at `/usr/bin/lua`.

Studio starter installs on first installation. Its twelve actions cover the categories the API allows: filters, effects, icons, brushes, tools, behaviors, batch, patterns, gradients, swatches. Later updates do not replace your installed starter with a fresh one and throw away your edits. If you want the pristine source, it is in `~/.local/share/omadesign/plugin-examples/studio-starter`. The installed starter the batch examples call is `~/.local/share/omadesign/plugins/org.omadesign.studio-starter`. Those are two directories on purpose.

There is no remote marketplace in 0.5.8. A plugin arrives as a file you already have, or as the starter the package installed. The manager installs it. The embed is what runs it. Limits sit on the host, not in a cloud policy: 15 seconds per run, 64 MiB of Lua heap, 20,000 document edits, 256 MiB of queued edit data, 128 MiB of raster input, 2 MiB of source, 4 MiB per asset or geometry, 128 actions, 24 parameters per action. Installed bundles allow 512 entries and 64 MiB total. You feel those limits locally, in one process, with one undo if the action was a document edit that finished.

Plugins run on a background worker. The UI thread keeps the canvas. Cancellation, errors, and a stale result after you edit or switch documents do not apply a partial change. That safety is the host around the embedded VM. The VM being inside the process is why the host can throw the result away before it touches the `.oma`. An external interpreter with its own file access could not make the same promise.

Offline plugin docs ship in the package, with the Lua and Phosphor licenses. The public guide is the same API. You can read it on the site or from the installed docs. The behavior does not depend on the site being up. The interpreter is already on disk.

## In the hand

Install 0.5.8 the way you already install Omadesign, from the public installer, into the home directory. Do not look for a Lua package. Open the app. Open Plugins → Manage plugins. Studio starter is there if this is the first install. Enable it if you want its actions. Run one. A finished document action is one Ctrl+Z.

Update the app later. Open Manage plugins again. The starter you customized is still the installed copy. Open `~/.local/share/omadesign/plugin-examples/studio-starter` if you need to compare with the copy the package considers fresh. Your edits are not in that examples folder unless you put them there.

Drop a new plugin in only through the manager, as a `.lua`, a folder with `main.lua`, or an `.omaplug`. The embed runs it under API 1. It does not shell out. If a plugin tries to reach the network or read a path outside its folder, it cannot. The run ends in an error, and the document stays as it was.

For a headless check of the same host:

```sh
omadesign --list-plugins
```

You are talking to the embedded runtime. There is no `lua` version to mismatch.

## The edge

0.5.8 does not ask you to install a Lua runtime beside the app. Lua 5.4.9 and API 1 are in the Linux packages. A plugin cannot execute a program, open the network, or read an arbitrary file. The language is inside the sandbox, in-process, on a background worker.

An update does not wipe installed plugins. The modifications you already have survive. Fresh starter source stays in the examples directory for you to read. The installed folder stays the one the app runs.

Open Plugins → Manage plugins on the 0.5.8 build. The interpreter is already there.

## Plugins offline docs

### The habit

You sit down to write a script and the first tab is a documentation site. Illustrator's scripting guide, Photoshop's reference, a forum post that matches the version you are not running. If the network is down, or the page moved, you are reading a cache you hope is current. Affinity's help is the same shape: a site, or a manual that is not the build you installed. For a plugin API that changed in this release, the page and the binary have to be the same API. API 1 is small enough to ship beside the app. You should be able to read it on a train.

You also want the license files in the package. Lua is MIT. Phosphor, the icon set in the chrome, is MIT. LibRaw is in there because Photo decodes RAW. "Included" means the text is on disk, not a URL in a README.

### The constraint

0.5.8 embeds Lua 5.4.9 in the binary. There is no separate runtime to download and no CDN that has to answer before a plugin runs. The documentation has to travel the same way, or the "no runtime" claim is only half true and you are back to a browser for the other half.

The installer writes under your home directory, or under `$XDG_DATA_HOME`. It does not write `/usr`. The docs, the skill, the examples, and the licenses land in that share tree. The binary also has the docs compiled in, so `omadesign --agent-docs` prints the manual that matches the executable even if someone later edits the copy in the share folder. Those are two artifacts on purpose. The share folder is what you open in an editor. The flag is what the running build claims.

The title-bar **Docs** item is a different door. The manual says it opens `https://omadesign.app/docs/`. That is the website. Offline authoring does not go through that click.

### What landed

The 0.5.8 packages, ARM64 and x86_64, contain the binary, the desktop entry, the icon, the MIME XML, the README, the app license, the creation skill, and a `docs/` directory: `MANUAL.md`, `layout.md`, `format-support.md`, `cloud.md`, `plugins.md`, `CONTRIBUTING.md`, and `llms.txt`. They contain `LICENSE-Phosphor`, LibRaw's license and pinned source notice, the native toolchain notices, Lua's notices, and `plugins/studio-starter`. `install.sh` is in the archive.

A normal install copies them to:

```text
~/.local/share/omadesign/docs/
~/.local/share/omadesign/skills/omadesign-create/SKILL.md
~/.local/share/omadesign/plugin-examples/studio-starter/
~/.local/share/omadesign/licenses/lua/
~/.local/share/omadesign/licenses/libraw/
~/.local/share/omadesign/licenses/native-notices/
```

Lua's notices say 5.4.9, built from lua-src through mlua, MIT. Phosphor's MIT license ships as `LICENSE-Phosphor` in the archive. The installed plugin source for the live starter is a separate folder, `plugins/org.omadesign.studio-starter`, and an update leaves it alone if it is already there.

From the binary, without opening those files:

```sh
omadesign --agent-docs plugins
omadesign --agent-docs manual
omadesign --agent-docs layout
omadesign --agent-docs formats
omadesign --agent-docs index
omadesign --agent-skill
```

`plugins` prints the plugin guide. `manual` prints the user manual. `layout` and `formats` print those guides. `index` prints the Markdown index. `--agent-skill` prints the creation skill. An unknown topic errors with the list: index, manual, layout, formats, or plugins. These strings are the ones compiled into that executable. They track the version you launched.

**Learn with AI** on the welcome screen can fetch `https://omadesign.app/llms.txt` when you are online, and the prompt tells the agent to use `--agent-docs` for the offline, version-matched copy. **Create with agent** points at the skill file on disk and falls back to `--agent-skill`. The app does not pick an agent for you. Omarchy's default agent is the one that runs, if you have chosen one.

The manager's **Authoring guide** link goes to `https://omadesign.app/docs/plugins`. Use it when you want the public page. Use the file and the flag when you want the pages that shipped with 0.5.8.

Templates are local too. The 52 vector templates open with no network. That is a neighboring fact, not the plugin guide, and it is why a cold install can still produce a document before any host answers.

### In the hand

Install 0.5.8. Then:

```sh
ls ~/.local/share/omadesign/docs
sed -n '1,40p' ~/.local/share/omadesign/docs/plugins.md
omadesign --agent-docs plugins | head
```

The file and the flag should describe the same API: `api = 1`, the `oma` calls, the 15 second cap, the `.omaplug` ZIP, the batch command. If you edit the Markdown in `docs/` to scribble a note, `--agent-docs plugins` still prints the original, because it does not read that file. Your note stays in the file you edited. The binary stays the release.

Open `licenses/lua` and read the MIT notices. Open the archive's `LICENSE-Phosphor` if you are checking the icon set. The chrome uses Phosphor Light. The license is the one in the package.

```sh
ls ~/.local/share/omadesign/plugin-examples/studio-starter
```

That is the starter you read while you write. The guide next to it is `docs/plugins.md`. `CONTRIBUTING.md` in the same docs folder is the pull-request list: `main.lua`, README, license, sample `.oma`, undo and cancel verification.

Click **omadesign** in the title bar and choose **Docs** when you want the site. It opens the website. It does not open the share folder. For the folder, use the path above.

### The edge

The title-bar Docs command opens `omadesign.app`. Offline is the share tree plus `--agent-docs` and `--agent-skill`. Editing the installed Markdown does not change what the binary prints. The package you installed is the API you write against. Lua does not come from a package you install later. It is in the executable. There is still no plugin marketplace fetching docs or bundles from a host.

The licenses sit beside those pages so you can read the MIT terms for Lua without opening a browser. Run `omadesign --agent-docs plugins` and write against that page.
