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

You may have installed a Photoshop panel that phoned home, or an Illustrator script a coworker dropped in a folder that used `File.execute` because it was the easy way to resize a batch. ExtendScript gives a script a real filesystem and, historically, a way to run shell commands. That is convenient the day you write the script and expensive the day someone else's plugin comes along with it. Affinity macros are more tightly contained in the app, but in exchange they can't be a small program you diff in git.

You want a plugin to edit the document you pointed it at. You don't want it to read `~/.ssh`, open a socket, or run a binary because a pixel loop was easier in Python. You want a hard limit on time and memory, so a bug becomes an error line instead of a hung studio. And you want to hand someone a single file.

## The constraint

Lua runs inside the one binary. The worker shares the machine with the `.oma` you have open and with the rest of your home directory. If the script had `io`, `os`, `package` or `require`, the sandbox would mean nothing, so those libraries aren't there. Neither is `debug`, and binary chunks and the file loaders are gone too. `pcall`, `xpcall` and coroutines are also missing, so a plugin can't catch an abort and keep writing, and it can't park a thread beside the UI. `assert` and `error` stop the run.

Missing libraries aren't the only guard. The host also puts numeric limits on each run, so a plugin that allocates forever, or emits a million shape commands, stops within a bound. The document commit stays atomic, so a run that hits a limit applies nothing. Plugins are distributed as a ZIP you can inspect, with a size cap, and the installer rejects symlinks and path traversal. There is no store in this release that would fetch that ZIP for you.

## What landed

0.5.8 embeds Lua 5.4. Plugins get the table, string, math and utf8 libraries plus the basic functions. They can't run programs, reach the network or read an arbitrary path. The only file API is `oma.read_asset`, which reads UTF-8 files inside the installed plugin folder.

Each run is limited to 15 seconds, 64 MiB of Lua heap and 20,000 document edits. Queued edit data is capped at 256 MiB, raster input at 128 MiB and source at 2 MiB. Each asset or geometry blob is capped at 4 MiB. An action list can hold up to 128 actions, with up to 24 parameters each. An installed bundle can have up to 512 entries and 64 MiB in total.

Archives with path traversal or symlinks are rejected. A ZIP that tries to write outside the staging area fails before it replaces the installed folder. If a folder for that plugin id already exists, the installer first renames it to a hidden `.backup-…` and restores that backup if the new tree fails to install. A bad bundle never leaves you with half the old plugin and half the new one.

Plugins can't modify hidden shapes, locked shapes or guides. The command line uses the same rule when it builds a selection, so it only picks shapes that are visible, unlocked and not guides.

To ship a plugin, zip the contents of the folder, including `main.lua`, assets, a README and a license, and name the archive `your-plugin.omaplug`. `main.lua` goes at the root of the ZIP, so the installer doesn't have to look inside an extra directory. People install that file from **Plugins > Manage plugins** or with `omadesign --install-plugin`. There is no remote plugin marketplace in 0.5.8. Nothing in the app browses a catalog, downloads a bundle or updates a plugin from a URL.

Effect stacks have their own caps, because a plugin can ask for native effects. The limits are 32 effects, blur at 512, morphology radius at 64, offsets and displacement at 4096, and turbulence at 8 octaves with a base frequency of at most 1. Pixel maps that are too expensive hit the time limit. The manual suggests shrinking the input, or running the work per document in a batch, where one file's failure doesn't roll back the files that already wrote.

## In the hand

Write `main.lua`. Keep it under the 2 MiB source cap, which is plenty for a script and too small for a pasted binary. If you need artwork, put `orbit.svg` next to it and read it with `oma.read_asset("orbit.svg")`. A path with `..` can't escape the folder.

Try calling `io.open`, `os.execute` or `require`. The run fails and the document doesn't change. Delete the call and press **Run** again. The fresh VM doesn't remember the failed attempt.

Write a filter that loops forever or allocates without limit. At 15 seconds or 64 MiB the worker stops and the status shows an error. `Ctrl+Z` has nothing new to undo, because the batch was never committed.

Zip the folder's contents:

```sh
cd my-plugin && zip -r ../my-plugin.omaplug main.lua README.md LICENSE orbit.svg
omadesign --install-plugin ../my-plugin.omaplug
omadesign --list-plugins
```

To see the restore, install the same id again from a broken archive. The previous folder comes back, and `--list-plugins` still shows the old version. The hidden backup is what keeps a replace to a single step.

In the manager, **Install plugin…** filters to `lua`, `omaplug` and `zip` files, and **Install folder…** takes a directory. Both install into the same root.

## The edge

This release won't fetch a plugin for you. You install a file you already have. That file can't see the rest of the disk, open a socket or start a process. When it hits a limit, the `.oma` stays as it was. Distribution is the folder you zipped and the person you sent it to.
