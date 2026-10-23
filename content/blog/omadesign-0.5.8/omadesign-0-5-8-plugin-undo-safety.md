---
id: T122
title: Plugin undo safety
slug: omadesign-0-5-8-plugin-undo-safety
excerpt: A plugin runs off the UI thread. A finished document action is one Undo step. Errors, Cancel, and a document you edited mid-run leave the artwork untouched.
publishedAt: 2026-09-22T11:34:56Z
tags: [omadesign, 0.5.8, undo]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-plugin-undo-safety/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-plugin-undo-safety/og.png
---

## The habit

You have probably run a script that died on the third object. In Illustrator the first two objects are already changed, the action panel says it failed, and Undo walks back one object at a time if you are lucky. In Photoshop, a filter you cancel after it starts sometimes leaves a half-rendered layer in the history and sometimes doesn't, and you find out by looking. In Affinity, a macro that errors halfway leaves you searching the history panel for the step that still matches the file you meant to keep.

The other failure is quieter. You start a long action, click another document because you thought it had finished, and the result lands in the wrong tab. Or you nudge a selection while the script is still reading the old one, and the write comes back against a picture that has already moved. You wanted one step on the document you aimed at, or no step at all.

## The constraint

Omadesign keeps one `.oma` open per tab, and Undo is one command. If a plugin pushed twenty separate history entries, `Ctrl+Z` would undo the plugin's third ellipse when you wanted it to undo the plugin. If a plugin wrote its ellipses as it went, there would be no clean way to recover when Lua raised an error on ellipse twelve. The canvas also can't freeze for the whole run. A 15 second pixel pass on a large layer is a long time to lock a window, and you need a Cancel button that works.

So the plugin runs on a background worker. It receives a snapshot of the document, the selection and the active layer, and builds a list of edits. The studio applies that list only after the run finishes, only if you didn't cancel, and only if the document and selection are still the ones it started from. The list applies as a single batch, so it is one Undo and one Redo. If any check fails, the batch is thrown away and the picture stays as you left it.

## What landed

In 0.5.8 the manager shows **Running plugin…** with a spinner and a **Cancel run** button while the worker is busy. Pressing Run again during that time reports **A plugin is already running**. Each invocation gets a fresh Lua VM, so globals from the previous run are gone. The host API is available while the action runs, but not while the manifest is being read.

When the worker returns, the studio checks four things before it touches the document:

- The run wasn't cancelled.
- The result still belongs to this tab.
- You aren't in the middle of a drag or another operation.
- The selection and a fingerprint of the document still match the snapshot the plugin started with.

If all four pass, the edits commit as one `Cmd` batch. The status line says **Plugin completed · Undo restores document edits**, or shows the text the plugin passed to `oma.message`.

If any check fails, the status shows an error: **Plugin result discarded because the document or selection changed, or the run was cancelled**. The document stays as you were looking at it. No partial ellipses appear, and a pixel filter doesn't leave a stripe of new pixels over old ones.

After a successful document action, `Ctrl+Z` reverses the whole batch and `Ctrl+Shift+Z` (or `Ctrl+Y`) puts it back. This is the same undo system used for a Pathfinder operation or a placed image. The plugin doesn't get a private history.

Two kinds of result change settings, and the manual says clearly that they sit outside document Undo. `oma.brush` switches you to Pixel, loads the preset and selects the Brush tool. `oma.palette` merges colors into the personal library and saves it. Undoing the document doesn't unload the brush or remove the palette. They are the same kind of change as picking a brush size with `[` and `]` or saving swatches from the Palettes tab.

An error inside Lua aborts the run. `assert` and `error` are how a plugin stops itself, and there is no `pcall` to catch the error and keep writing. **Cancel run** sets a flag the worker watches. A plugin that hits the 15 second limit, the 64 MiB Lua heap or the 20,000 edit cap fails the same way, and no batch is applied.

The host API can't edit hidden objects, locked objects or guides. A plugin that tries to rewrite them fails outright rather than partly succeeding.

## In the hand

Open a poster and select three rectangles. Go to **Plugins > Manage plugins**, choose **Effects · Soft offset shadow** and press **Run**. When the status line updates, all three shadows appear together. Press `Ctrl+Z` and all three disappear together. Press `Ctrl+Shift+Z` and they come back together.

Run it again, and while the spinner is up, click another document tab or move the selection. When the worker returns, the error line tells you the result was discarded, and the rectangles have no shadow.

Run **Patterns · Dot field** and press **Cancel run** while it works. The grid doesn't appear and the history doesn't grow.

Run **Filters · Midnight duotone** on a raster layer. When it completes, `Ctrl+Z` restores every pixel of that pass, alpha included, because the whole mapping was one edit. If the filter errors, the layer stays as it was before Run.

Run **Swatches · Night studio swatches**. The palette appears under Personal. Press `Ctrl+Z` on the artboard and the artwork steps back, but the palette stays, because it was saved to the personal library instead of the document history. Remove it from the Palettes tab if you don't want it.

Switch documents in the middle of **Batch · Translate selection**. The nudge doesn't land on the tab you switched to, or on the tab you left if that tab's fingerprint changed. You get the discard message.

## The edge

A plugin never applies only part of its edits. A successful run writes the whole batch, and a failed run writes nothing to the `.oma`. Editing the document, changing the selection, switching tabs or cancelling throws the result away even if Lua already finished its work. The exception, as the manual says, is a brush preset or a palette save. Those change studio settings, and document Undo doesn't cover them.
