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

You have run a script that died on the third object. In Illustrator the first two objects are already different, the action panel says it failed, and Undo walks backward one object at a time if you are lucky. In Photoshop a filter that you cancel after it has started sometimes puts a half-rendered layer in the history and sometimes does not, and you learn which one by looking. In Affinity a macro that errors mid-way leaves you hunting the history panel for the step that still matches the file you meant to keep.

The other failure is quieter. You start a long action, click another document because you thought it had finished, and the result lands in the wrong tab. Or you nudge a selection while the script is still reading the old one, and the write comes back against a picture that has already moved. You wanted one step on the document you aimed at, or no step at all.

## The constraint

Omadesign keeps one `.oma` open in a tab, and Undo is one command. A plugin that pushed twenty separate history entries would make `Ctrl+Z` mean the plugin's third ellipse. You want `Ctrl+Z` to mean the plugin. A plugin that wrote those ellipses as it went would have nothing honest to do when Lua raised an error on ellipse twelve. The canvas also cannot freeze for the whole run, because a 15 second pixel pass on a large layer is a long time to lock a window, and you need a Cancel that means something.

So the plugin runs on a background worker. It receives a snapshot of the document, the selection, and the active layer. It builds a list of edits. The studio applies that list only after the run finishes, only if you did not cancel, and only if the document and the selection are still the ones it started from. The apply is a single batch. One Undo. One Redo. If any of the guards fail, the batch is thrown away and the picture stays where your hand left it.

## What landed

In 0.5.8 the manager shows **Running plugin…** with a spinner and a **Cancel run** button while the worker is busy. A second Run during that time reports **A plugin is already running**. The worker gets a fresh Lua VM for that invocation. Globals from the previous run are gone. The host API is present for the action, not while the manifest is being read.

When the worker returns, the studio checks four things before it touches the document. The run was not cancelled. The result still belongs to this tab. You are not in the middle of a drag or another operation. The selection and a fingerprint of the document still match the snapshot the plugin started with. Pass all four and the edits commit as one `Cmd` batch. The status line says **Plugin completed · Undo restores document edits**, or it says the text the plugin passed to `oma.message`.

Fail any of the four and the status becomes an error: **Plugin result discarded because the document or selection changed, or the run was cancelled**. The document is the document you were looking at. Partial ellipses do not appear. A pixel filter does not leave a stripe of new pixels over old ones.

`Ctrl+Z` after a successful document action reverses the whole batch. `Ctrl+Shift+Z` puts it back. Redo is also `Ctrl+Y`. That is the same undo machinery as a Pathfinder operation or a placed image. The plugin does not get a private history.

Two results are settings, and the manual is explicit that they sit outside document Undo. `oma.brush` switches you to Pixel, loads the preset, and selects the Brush tool. `oma.palette` merges colors into the personal library and saves that library. Undoing the document does not unload the brush and does not remove the palette. Those are the same kind of change as picking a brush size with `[` and `]` or saving swatches from the Palettes tab.

Errors inside Lua abort the run. `assert` and `error` are how a plugin refuses to continue. There is no `pcall` to swallow that and keep writing. Cancellation is the **Cancel run** button, which sets a flag the worker watches. A plugin that hits the 15 second limit, the 64 MiB Lua heap, or the 20,000 edit cap fails the same way: no batch applied.

Hidden objects, locked objects, and guides are not editable from the host API. A plugin that tries to rewrite them does not get a quiet partial success.

## In the hand

Open a poster. Select three rectangles. **Plugins → Manage plugins**, **Effects · Soft offset shadow**, **Run**. Wait for the status line. The three shadows appear together. Press `Ctrl+Z`. All three shadows leave together. Press `Ctrl+Shift+Z`. They return together.

Run it again. While the spinner is up, click another document tab or move the selection. When the worker returns, the error line tells you the result was discarded. Look at the rectangles. No shadow.

Run **Patterns · Dot field**. While it runs, press **Cancel run**. The grid does not appear. The history does not grow.

Run **Filters · Midnight duotone** on a raster layer. When it completes, `Ctrl+Z` restores every pixel of that pass, alpha included, because the mapping was one edit. If the filter errors, the layer is the layer from before Run.

Run **Swatches · Night studio swatches**. The palette shows up under Personal. Press `Ctrl+Z` on the artboard. The artwork steps backward. The palette stays, because it was saved to the personal library, not appended to the document history. Remove it from the Palettes tab if you do not want it.

Switch documents in the middle of **Batch · Translate selection**. The nudge does not land on the tab you switched to, and it does not land on the tab you left if that tab's fingerprint moved. You get the discard message.

## The edge

The plugin does not apply a prefix of its edits. Success writes the whole batch or the worker's failure writes nothing to the `.oma`. Editing the document, changing the selection, switching tabs, or cancelling throws the result away even if Lua already finished the math. A brush preset and a palette save are the exception the manual names: they change studio settings, and document Undo does not pretend to own them.

The next time a plugin finishes, press `Ctrl+Z` once. The whole action leaves.
