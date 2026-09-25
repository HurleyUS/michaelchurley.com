---
id: T010
title: Document tabs
slug: omadesign-0-5-8-document-tabs
excerpt: "Document tabs sit above the canvas. Ctrl+N starts a tab, Ctrl+O opens another, and a close on unsaved work asks Save, Discard, or Cancel."
publishedAt: 2026-09-06T10:28:01Z
tags: [omadesign, 0.0.1-alpha, tabs]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-document-tabs/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-document-tabs/og.png
---

## The habit

You keep more than one file open. Illustrator shows documents as tabs across the top of the window, and closing a file with unsaved changes stops to ask. Photoshop does the same with images, and the tab tells you which histogram you are looking at. The close dialog here follows Affinity's tabs: Save, Discard, and Cancel, in words a person would use. You expect Cancel to mean the tab is still there and nothing was thrown away.

You also expect `Ctrl+N` and `Ctrl+O` to mean new and open, even if you spend the day in a browser. New should add a tab, instead of starting a second process that splits your work into two windows with separate undo stacks. Open should put the file beside the work you already have, and so should a template. The job you were working on stays where it is.

Badly built tabs copy the whole document, pixels and undo, on every frame so the tab strip can draw a thumbnail. The window gets slow, and closing an inactive tab marks the one you can see as changed. You learn not to open reference files. I didn't want Omadesign to work that way.

## The constraint

One binary, one window, and one `.oma` per tab. Each tab owns its document and its undo, so undoing a step in the poster never undoes a step in the reference. Close is the dangerous action, so unsaved work has to ask first. The answers are Save, Discard, and Cancel. Cancel leaves the tab open. Discard is the only answer that throws away unsaved changes. Save writes `.oma` and, if the document had an idle swap, deletes `~/.local/share/omadesign/<id>.oma.swp`.

The tabs sit above the canvas, as the manual describes. The title bar stays visible so open-document thumbnails don't jump when you leave the welcome screen and start working. The tab strip and the title bar have to stay still. A chooser that reflows, or a welcome screen that hides the bar, would defeat the purpose of tabs, which is to show which document your keystrokes will go to.

`Ctrl+N` and `Ctrl+O` are global document commands, with the same chords as the shortcut table. They have to work when the canvas has focus and stay out of the way when you are typing in a text object. A new tab is either empty and ready to draw in, or it holds the file you picked at that file's size. Imported PSD, PSB, XCF, PDF, SVG, OpenRaster, and supported Affinity documents each open in their own tab at their original dimensions. Save still writes `.oma` and leaves the source file on disk unchanged.

Templates follow the same rule. **Use this template** starts a fresh unsaved document, and the tab you already had keeps its work.

## What landed

Document tabs sit above the canvas. This post describes the tabs as they work in 0.5.8, whose release notes don't claim the tabs are new. Those notes do say the title bar stays up so the thumbnails of open documents stay put, and that bar is part of the chrome around the tab strip.

`Ctrl+N` creates a new tab, and `Ctrl+O` opens another file in another tab. Close a tab with its close button or its right-click menu. If the document has unsaved work, the dialog offers Save, Discard, or Cancel, the same prompt Affinity users know, in a native Linux window, for one `.oma`.

A tab carries:

- The document, including vector layers, pixel layers, layout frames, and the motion clip if there is one.
- That document's undo. One step undoes one change in that tab.
- The dirty flag that makes close ask the question.
- The idle swap, written after a second at `~/.local/share/omadesign/<id>.oma.swp`, until Save deletes it.

Opening a file never converts the tab into the foreign format. **File > Open** can read those formats, while **Save** and **Save as** (`Ctrl+Shift+S`) write `.oma`. **View > Document conversion notes** lists anything that couldn't come across intact, and the notes stay in the project.

Drop a layered document on the canvas or the welcome screen and it opens in a tab. An ordinary image gets placed, an `.oma` opens, and a Lottie gets imported. Opening goes through tabs. Placing is a separate path, `Ctrl+Shift+P` or dropping a plain image, and it lands inside the current document.

Earlier work on the tab system stopped the frame loop from copying documents, undo history, and raster buffers just to draw the strip. Stale recovery results are rejected. Closing an inactive tab used to trigger one of the dirty-state bugs, and I fixed it so a tab you aren't looking at keeps an accurate state. In practice, things just stay stable: open a second file and the first file's undo still belongs to the first file.

Switching persona doesn't open a tab. Design, Layout, Pixel, Photo, and Motion are sets of tools on the same document. A new tab comes from `Ctrl+N`, `Ctrl+O`, or a template.

## In the hand

Launch the app, open or make something, then add a second document.

```sh
omadesign
```

```text
Ctrl+N
```

A new tab appears above the canvas. Press `R` and draw, and that rectangle belongs to the new tab.

```text
Ctrl+O
```

Pick another `.oma`, a PSD, or an SVG. It opens beside the first at its own size. Click the first tab and the rectangle is still there. `Ctrl+Z` undoes the last change in whichever tab you are looking at.

Right-click the tab you want to close, or use its close button. On a tab with unsaved changes the dialog is:

```text
Save    Discard    Cancel
```

Choose Cancel and the tab stays. Draw one more shape to confirm the document is intact. Close again and choose Save. You get a native save dialog, the file on disk is `.oma`, and the swap for that document id is deleted on save.

Open **+ Vector**, pick one of the 52 templates, and choose **Use this template**. The template arrives as its own unsaved tab, and the file you just saved is still in the other tab. Close the template with Discard if you were only looking, or with Save if it became the job.

The manual doesn't assign `Ctrl+W` to closing a tab, so use the close button or the right-click menu. The chords to remember are `Ctrl+N`, `Ctrl+O`, `Ctrl+S`, and `Ctrl+Shift+S`.

Switch persona in the same tab and draw or paint. No new tab appears. Switch back and the layer stack is the one you just edited.

## The edge

Cancel neither saves nor discards, and the tab stays open. Discard is the only way through the dialog that destroys unsaved changes. Save writes `.oma`.

Closing a tab doesn't close the studio. The window stays, and closing the last tab only asks about that document. It never quits the app. Quitting with unsaved photo settings is a separate prompt: Save all, Discard, or Cancel for those settings, shown before palette and artwork saves, and the app waits for the writes. Don't confuse that Photo quit prompt with a document tab. A tab is one `.oma`, and Photo settings are `.omaphoto` files beside the originals.

A tab never rewrites a RAW file because you had Photo open earlier. A Design save stores the design, and the camera file stays on disk as the camera wrote it.

Imported files stay as they were. The tab never saves back over the PSD unless you deliberately export. The default save is `.oma`, and the source is preserved.
