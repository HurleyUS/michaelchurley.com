---
id: T136
title: Plugins offline docs
slug: omadesign-0-5-8-plugins-offline-docs
excerpt: The 0.5.8 package carries Lua, the manual, the plugin guide, the creation skill, Studio starter, and the licenses. Author from the files on disk. The in-app Docs item still opens the website.
tags: [omadesign, 0.5.8, docs]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-plugins-offline-docs/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-plugins-offline-docs/og.png
---

## The habit

You sit down to write a script and the first tab is a documentation site. Illustrator's scripting guide, Photoshop's reference, a forum post that matches the version you are not running. If the network is down, or the page moved, you are reading a cache you hope is current. Affinity's help is the same shape: a site, or a manual that is not the build you installed. For a plugin API that changed in this release, the page and the binary have to be the same API. API 1 is small enough to ship beside the app. You should be able to read it on a train.

You also want the license files in the package. Lua is MIT. Phosphor, the icon set in the chrome, is MIT. LibRaw is in there because Photo decodes RAW. "Included" means the text is on disk, not a URL in a README.

## The constraint

0.5.8 embeds Lua 5.4.9 in the binary. There is no separate runtime to download and no CDN that has to answer before a plugin runs. The documentation has to travel the same way, or the "no runtime" claim is only half true and you are back to a browser for the other half.

The installer writes under your home directory, or under `$XDG_DATA_HOME`. It does not write `/usr`. The docs, the skill, the examples, and the licenses land in that share tree. The binary also has the docs compiled in, so `omadesign --agent-docs` prints the manual that matches the executable even if someone later edits the copy in the share folder. Those are two artifacts on purpose. The share folder is what you open in an editor. The flag is what the running build claims.

The title-bar **Docs** item is a different door. The manual says it opens `https://omadesign.app/docs/`. That is the website. Offline authoring does not go through that click.

## What landed

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

## In the hand

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

## The edge

The title-bar Docs command opens `omadesign.app`. Offline is the share tree plus `--agent-docs` and `--agent-skill`. Editing the installed Markdown does not change what the binary prints. The package you installed is the API you write against. Lua does not come from a package you install later. It is in the executable. There is still no plugin marketplace fetching docs or bundles from a host.

The licenses sit beside those pages so you can read the MIT terms for Lua without opening a browser. Run `omadesign --agent-docs plugins` and write against that page.
