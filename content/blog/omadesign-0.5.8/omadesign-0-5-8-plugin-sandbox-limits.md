---
id: T129
title: Plugin sandbox limits
slug: omadesign-0-5-8-plugin-sandbox-limits
excerpt: A plugin cannot run programs, open the network, or read arbitrary files. The caps are 15 seconds, 64 MiB of Lua heap, and 20,000 edits. This release has no plugin marketplace.
publishedAt: 2026-09-22T11:39:56Z
tags: [omadesign, 0.5.8, plugins]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-plugin-sandbox-limits/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-plugin-sandbox-limits/og.png
---

## The habit

You have installed a Photoshop panel that phoned home, and an Illustrator script a coworker dropped in a folder that used `File.execute` because that was the easy way to resize a batch. ExtendScript gives the script a real filesystem and, historically, a way to shell out. That is convenient the day you write it and expensive the day someone else's plugin rides along. Affinity macros stay inside the app more tightly, and the trade is that they cannot be a small program you diff in git.

You want the plugin to edit the document you pointed at. You do not want it to read `~/.ssh`, to open a socket, or to exec a binary because a pixel loop was easier in Python. You want a hard stop on time and memory so a bug becomes an error line and not a hung studio. You want to hand someone a single file.

## The constraint

Lua lives inside the one binary. The worker shares the machine with the `.oma` you have open and with the rest of your home directory. If the script gets `io`, `os`, `package`, or `require`, the sandbox is a comment. Those libraries are absent. `debug` is absent. Binary chunks and the file loaders are absent. `pcall`, `xpcall`, and coroutines are absent, so a plugin cannot catch the abort and keep writing, and it cannot park a thread beside the UI. `assert` and `error` stop the run.

The host then puts numbers on the run so "absent" is not the only guard. A plugin that allocates forever, or that emits a million shape commands, has to die inside a bound. The document commit stays atomic: a run that trips a limit applies nothing. Distribution is a ZIP you can inspect, with a size cap, with symlinks and path traversal rejected. There is no store in this release that would fetch that ZIP for you.

## What landed

0.5.8 embeds Lua 5.4. Plugins get table, string, math, utf8, and the basic functions. They cannot execute programs, reach the network, or read an arbitrary path. `oma.read_asset` reads UTF-8 inside the installed plugin folder. That is the file API.

The run limits are 15 seconds, 64 MiB of Lua heap, and 20,000 document edits. Queued edit data stops at 256 MiB. Raster input stops at 128 MiB. Source stops at 2 MiB. Each asset or geometry blob stops at 4 MiB. An action list stops at 128 actions, with 24 parameters on an action. An installed bundle stops at 512 entries and 64 MiB total.

Archives reject path traversal and symlinks. A ZIP that tries to write outside the stage fails before it replaces the installed folder. If a folder for that plugin id already exists, the installer renames it to a hidden `.backup-…` first and restores that backup when the new tree fails to land. A bad bundle does not leave you with half the old plugin and half the new one.

Hidden shapes, locked shapes, and guides cannot be modified. The command line uses the same rule when it builds a selection: visible, not locked, and not a guide.

You ship a plugin by zipping the contents of the folder, including `main.lua`, assets, a README, and a license, and naming the archive `your-plugin.omaplug`. `main.lua` sits at the root of the ZIP, not inside an extra directory that the installer has to guess. People install that file from **Plugins → Manage plugins** or with `omadesign --install-plugin`. There is no remote plugin marketplace in 0.5.8. Nothing in the app browses a catalog, downloads a bundle, or updates a plugin from a URL.

Effect stacks have their own caps, because a plugin can ask for native effects: 32 effects, blur at 512, morphology radius at 64, offsets and displacement at 4096, turbulence at 8 octaves and base frequency at most 1. Pixel maps that are too expensive hit the time limit. The manual's advice is to shrink the input or to run the work per document in a batch, where one file's failure does not roll back the files that already wrote.

## In the hand

Write `main.lua`. Keep it small enough to sit under the 2 MiB source cap, which is a wide ceiling for a script and a hard ceiling for a pasted binary. Put `orbit.svg` next to it if you need artwork. Read it with `oma.read_asset("orbit.svg")`. A path with `..` does not escape the folder.

Try to call `io.open` or `os.execute` or `require`. The run fails. The document does not change. Press **Run** again after you delete the call. The fresh VM does not remember the failed attempt.

Build a filter that loops forever or allocates without bound. At 15 seconds or 64 MiB the worker stops. The status is an error. `Ctrl+Z` has nothing new to undo, because the batch was never committed.

Zip the folder's contents:

```sh
cd my-plugin && zip -r ../my-plugin.omaplug main.lua README.md LICENSE orbit.svg
omadesign --install-plugin ../my-plugin.omaplug
omadesign --list-plugins
```

Install the same id again with a broken archive if you want to see the restore. The previous folder comes back. `--list-plugins` still shows the old version. The hidden backup is how the replace stays one step.

In the manager, **Install plugin…** filters to `lua`, `omaplug`, and `zip`. **Install folder…** takes the directory. Both end at the same root.

## The edge

This release will not fetch a plugin for you. You install a file you already have. That file cannot see the rest of the disk, cannot open a socket, and cannot start a process. When it blows a limit, the `.oma` stays as it was. The marketplace is the folder you zipped and the person you sent it to.

Zip the folder as `your-plugin.omaplug` and install that file.
