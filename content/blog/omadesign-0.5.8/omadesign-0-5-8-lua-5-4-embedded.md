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

Illustrator scripts are ExtendScript, and the ones that still run are often older than the people running them. Photoshop has its own scripting dictionary and a plugin folder Adobe can move out from under you. Affinity has focused on panels and personas more than on a language shipped inside the binary. On Linux the usual answer is worse. You install Lua or Python from the distro, or a Flatpak that can't see the app, and then you write glue. The script works on your machine and fails on a teammate's, because their Lua is 5.3, or `lua` isn't on `PATH`, or the package manager upgraded the interpreter and a C module stopped loading.

What you want is the language in the same binary as the studio, and an update of the studio that leaves the scripts you already trust where they are.

The documentation has the same problem. You sit down to write a script and the first tab is a documentation site: Illustrator's scripting guide, Photoshop's reference, or a forum post for a version you aren't running. If the network is down or the page moved, you're reading a cache and hoping it's current. Affinity's help is the same, a site or a manual that doesn't match the build you installed. For a plugin API that changed in this release, the page and the binary have to describe the same API. API 1 is small enough to ship with the app, so you can read it on a train.

The license files belong in the package too. Lua is MIT. Phosphor, the icon set in the interface, is MIT. LibRaw is in there because Photo decodes RAW. Included should mean the text is on disk, not a URL in a README.

## The constraint

0.5.8 is one binary on Linux, ARM64 and x86_64, with a glibc ceiling of 2.35. Lua has to be inside that package. A second install step for a runtime would make the Plugins menu depend on a distro package the installer promised not to require. The release notes state it directly: Lua 5.4.9 is embedded, Plugin API 1 is the host API, and Lua and the examples ship inside the Linux packages. The packages bundle Lua the way they bundle the RAW decoder, so you never apt-get an interpreter before Plugins works.

The API is versioned so a plugin can say what it was written for, and `ctx.api` reports that version when an action runs. A plugin's own `version` field is the plugin's version, separate from the app's, and the two can change on different days. API 1 is the contract, and 0.5.8 is the app that ships it.

An update that replaced `~/.local/share/omadesign/plugins` with the stock examples would wipe your edits to a starter, or a plugin you installed from a folder. The release check covers this explicitly: reinstalling preserves a deliberately customized installed plugin, and existing plugin modifications survive updates. Fresh starter source is available separately at `~/.local/share/omadesign/plugin-examples/studio-starter` and as a downloadable `.omaplug`. The installed copy is yours, and the example tree is the reference.

The sandbox is part of embedding the language. A Lua that can `os.execute`, open the network or read `~/.ssh` isn't a plugin system you can leave enabled. The embedded Lua has table, string, math, utf8 and the basic functions. `io`, `os`, `package`, `debug`, `require`, file loaders, binary chunks, `pcall`, `xpcall` and coroutines aren't available. Plugins can't execute programs, touch the network or read arbitrary files. `oma.read_asset` reads a UTF-8 file inside the plugin's own folder, and that's the only disk access they get.

Each run gets a fresh Lua VM, so globals don't survive to the next click. Persistent artwork belongs in the document and persistent presets in the plugin. `oma` exists while an action runs but not during manifest discovery, so a plugin can't do work while the manager is only listing names.

With no separate runtime to download and no CDN that has to answer before a plugin runs, the documentation has to travel the same way. Otherwise "no runtime" is only half true and you're back in a browser for the other half.

The installer writes under your home directory, or under `$XDG_DATA_HOME`, and never to `/usr`. The docs, the skill, the examples and the licenses go into that share tree. The binary also has the docs compiled in, so `omadesign --agent-docs` prints the manual that matches the executable even if someone edits the copy in the share folder later. I kept those as two separate artifacts on purpose. The share folder is what you open in an editor, and the flag is what the running build says about itself.

The **Docs** item in the title bar is different. The manual says it opens `https://omadesign.app/docs/`, the website, so offline work doesn't go through that click.

## What landed

### The embedded runtime

Open the app from the 0.5.8 package and Plugins is there, without installing Lua. The About version is 0.5.8. The packages that report 0.5.8 on ARM64 and x86_64 both include the interpreter. Validation ran the x86_64 build under QEMU against Ubuntu 22.04's glibc 2.35, and ran ARM64 on the machine itself. Both packages inspected and rendered native documents, ran a live-text transform, ran a custom pixel filter that preserves alpha, and ran a two-file batch. Those runs used the embedded host, not a system `lua` binary on `PATH`.

A manifest declares API 1:

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

The id is stable and uses letters, digits, dots, hyphens and underscores, with no leading dot. Action ids are unique within the plugin. The host checks parameters for desktop runs and CLI runs and rejects unknown ones. This build loads plugins written to API 1, and you never point it at `/usr/bin/lua`.

Studio starter installs on first installation. Its twelve actions cover the categories the API allows: filters, effects, icons, brushes, tools, behaviors, batch, patterns, gradients and swatches. Later updates don't replace your installed starter and throw away your edits. The untouched source is in `~/.local/share/omadesign/plugin-examples/studio-starter`. The installed starter that the batch examples call is `~/.local/share/omadesign/plugins/org.omadesign.studio-starter`. They're two directories on purpose.

There's no remote marketplace in 0.5.8. A plugin arrives as a file you already have, or as the starter the package installed. The manager installs it and the embedded runtime runs it. Limits are enforced by the host, not by a cloud policy: 15 seconds per run, 64 MiB of Lua heap, 20,000 document edits, 256 MiB of queued edit data, 128 MiB of raster input, 2 MiB of source, 4 MiB per asset or geometry, 128 actions and 24 parameters per action. Installed bundles allow 512 entries and 64 MiB total. All of it runs locally in one process, with one undo if the action was a document edit that finished.

Plugins run on a background worker while the UI thread keeps the canvas responsive. If a run is cancelled, hits an error, or produces a stale result because you edited or switched documents, no partial change gets applied. The host around the embedded VM provides that safety. Because the VM runs inside the process, the host can discard a result before it touches the `.oma`. An external interpreter with its own file access couldn't promise that.

### Offline docs and licenses

The 0.5.8 packages for ARM64 and x86_64 contain the binary, the desktop entry, the icon, the MIME XML, the README, the app license, the creation skill and a `docs/` directory with `MANUAL.md`, `layout.md`, `format-support.md`, `cloud.md`, `plugins.md`, `CONTRIBUTING.md` and `llms.txt`. They also contain `LICENSE-Phosphor`, LibRaw's license and pinned source notice, the native toolchain notices, Lua's notices and `plugins/studio-starter`. `install.sh` is in the archive.

A normal install copies them to:

```text
~/.local/share/omadesign/docs/
~/.local/share/omadesign/skills/omadesign-create/SKILL.md
~/.local/share/omadesign/plugin-examples/studio-starter/
~/.local/share/omadesign/licenses/lua/
~/.local/share/omadesign/licenses/libraw/
~/.local/share/omadesign/licenses/native-notices/
```

Lua's notices say 5.4.9, built from lua-src through mlua, MIT. Phosphor's MIT license ships as `LICENSE-Phosphor` in the archive. The installed source for the live starter is a separate folder, `plugins/org.omadesign.studio-starter`, and an update leaves it alone if it already exists.

You can also print the docs from the binary without opening those files:

```sh
omadesign --agent-docs plugins
omadesign --agent-docs manual
omadesign --agent-docs layout
omadesign --agent-docs formats
omadesign --agent-docs index
omadesign --agent-skill
```

`plugins` prints the plugin guide and `manual` prints the user manual. `layout` and `formats` print those guides, and `index` prints the Markdown index. `--agent-skill` prints the creation skill. An unknown topic errors and lists the valid ones: index, manual, layout, formats or plugins. The text is compiled into the executable, so it matches the version you launched. The public guide on the site describes the same API, but nothing here depends on the site being up.

**Learn with AI** on the welcome screen can fetch `https://omadesign.app/llms.txt` when you're online, and its prompt tells the agent to use `--agent-docs` for the offline, version-matched copy. **Create with agent** points at the skill file on disk and falls back to `--agent-skill`. The app doesn't pick an agent for you. If you've chosen an Omarchy default agent, that's the one that runs.

The manager's **Authoring guide** link goes to `https://omadesign.app/docs/plugins`. Use it for the public page, and use the file or the flag for the pages that shipped with 0.5.8.

Templates are local too. The 52 vector templates open without a network connection, so a fresh install can produce a document before any server answers.

## In the hand

Install 0.5.8 the usual way, from the public installer into your home directory. Don't look for a Lua package. Open the app and go to Plugins > Manage plugins. On a first install, Studio starter is there. Enable it if you want its actions and run one. A finished document action is one Ctrl+Z.

When you update the app later, open Manage plugins again. The starter you customized is still the installed copy. Open `~/.local/share/omadesign/plugin-examples/studio-starter` if you want to compare against the fresh copy from the package. Your edits aren't in the examples folder unless you put them there.

Add new plugins through the manager, as a `.lua` file, a folder with `main.lua` or an `.omaplug`. The embedded runtime runs them under API 1 without shelling out. If a plugin tries to reach the network or read a path outside its folder, it can't. The run ends in an error and the document stays as it was.

To check the same host headless:

```sh
omadesign --list-plugins
```

That talks to the embedded runtime, so there's no `lua` version to mismatch.

For the docs, check the share folder and the binary:

```sh
ls ~/.local/share/omadesign/docs
sed -n '1,40p' ~/.local/share/omadesign/docs/plugins.md
omadesign --agent-docs plugins | head
```

The file and the flag should describe the same API: `api = 1`, the `oma` calls, the 15 second cap, the `.omaplug` ZIP and the batch command. If you edit the Markdown in `docs/` to add a note, `--agent-docs plugins` still prints the original, because it doesn't read that file. Your note stays in the file, and the binary keeps printing the release text.

Open `licenses/lua` to read the MIT notices, or the archive's `LICENSE-Phosphor` if you're checking the icon set. The interface uses Phosphor Light, under the license in the package.

```sh
ls ~/.local/share/omadesign/plugin-examples/studio-starter
```

That's the starter to read while you write, with `docs/plugins.md` as the guide. `CONTRIBUTING.md` in the same docs folder is the pull-request checklist: `main.lua`, README, license, sample `.oma`, and undo and cancel verification.

When you want the website, click **omadesign** in the title bar and choose **Docs**. It opens the site, not the share folder. For the folder, use the path above.

## The edge

0.5.8 doesn't ask you to install a Lua runtime next to the app. Lua 5.4.9 and API 1 are in the Linux packages. A plugin can't execute a program, open the network or read an arbitrary file. The language runs in the sandbox, in-process, on a background worker.

An update doesn't wipe installed plugins, and your modifications survive. Fresh starter source stays in the examples directory for reference, and the installed folder is the one the app runs.

The title-bar Docs command opens `omadesign.app`. Offline docs are the share tree plus `--agent-docs` and `--agent-skill`. Editing the installed Markdown doesn't change what the binary prints, so the package you installed is the API you write against. There's still no plugin marketplace fetching docs or bundles from a server. The licenses sit next to the docs, so you can read Lua's MIT terms without a browser.
