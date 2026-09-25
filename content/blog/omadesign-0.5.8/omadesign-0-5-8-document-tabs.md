---
id: T010
title: Document tabs
slug: omadesign-0-5-8-document-tabs
excerpt: "Document tabs sit above the canvas. Ctrl+N starts a tab, Ctrl+O opens another, and a close on unsaved work asks Save, Discard, or Cancel."
publishedAt: 2026-09-06T10:28:01Z
tags: [omadesign, 0.5.8, tabs]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-document-tabs/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-document-tabs/og.png
---

## The habit

You keep more than one file open. Illustrator puts documents in tabs across the top of the window, and a close on a dirty file stops you. Photoshop does the same with images, and the tab is how you know which histogram you are looking at. Affinity's tabs are the muscle memory the close dialog is aiming at: Save, Discard, Cancel, in words a person uses, not in a developer prompt. You expect Cancel to mean the tab is still there and nothing was thrown away.

You also expect `Ctrl+N` and `Ctrl+O` to mean new and open, even when you spend the day in a browser. New should be another tab, not a second process that splits the undo stacks into two windows you then alt-tab between. Open should land beside the work you already have. A template should do the same. The job you were in stays put.

The bad version of tabs copies the whole document, pixels and undo, on every frame so the tab strip can draw a thumbnail. The window gets heavy. Closing an inactive tab dirties the one you can see. You learn not to open a reference file. That is the habit this studio had to refuse.

## The constraint

One binary, one window, one `.oma` per tab. Each tab owns its document and its undo. A step in the poster does not undo a step in the reference. Close is the dangerous action, so unsaved work has to ask. The answers are Save, Discard, and Cancel. Cancel is a real answer. It leaves the tab open. Discard is the only answer that throws the unsaved changes away. Save writes `.oma` and, on a document that had an idle swap, deletes `~/.local/share/omadesign/<id>.oma.swp`.

The tabs sit above the canvas. That is the manual's placement, and it is the placement the feature follows. The title bar stays visible so open-document thumbnails do not jump when you leave welcome and start working. The tab strip and that bar are the chrome that has to hold still. A chooser that reflows, or a welcome screen that hides the bar, would break the reason the tabs are there: you can see which document your keys will hit.

`Ctrl+N` and `Ctrl+O` are global document commands, the same chords as the shortcut table. They have to work when the canvas is focused, and they have to stay out of the way when you are typing in a text object. The tab you create is empty enough to draw, or it is the file you picked, at that file's size. Imported PSD, PSB, XCF, PDF, SVG, OpenRaster, and supported Affinity documents open in their own tab at their original dimensions. Save still writes `.oma` and leaves the source file on disk as it was.

Templates follow the same rule. **Use this template** starts a fresh unsaved document. The tab you already had keeps its work.

## What landed

Document tabs sit above the canvas. This is the behavior in 0.5.8. The release notes do not claim the tabs were invented that day. They do claim the title bar stays up so the thumbnails of open documents stay put, which is the chrome around this strip.

`Ctrl+N` creates a new tab. `Ctrl+O` opens another file into another tab. Close with the tab's close button or with the tab's right-click menu. If the document has unsaved work, the dialog is Save, Discard, or Cancel. That trio is the Affinity-familiar prompt, on a Linux-native window, over one `.oma`.

What a tab carries:

- The document, including vector layers, pixel layers, layout frames, and the motion clip if there is one.
- That document's undo. One step undoes one change in that tab.
- The dirty flag that makes close ask the question.
- The idle swap, after a second, at `~/.local/share/omadesign/<id>.oma.swp`, until Save deletes it.

Opening does not convert the tab into the foreign format. **File → Open** can read those formats. **Save** and **Save as** (`Ctrl+Shift+S`) write `.oma`. **View → Document conversion notes** lists what could not come across whole. The notes stay in the project.

Drop a layered document on the canvas or on the welcome screen and it opens. An ordinary image places. An `.oma` opens. A Lottie imports. The tab is the open path. Placement is a different path, `Ctrl+Shift+P` or a drop of a plain image, and it lands inside the current document.

Earlier work on the tab system stopped the frame loop from copying documents, undo history, and raster buffers just to draw the strip. Stale recovery results get rejected. Closing an inactive tab was one of the dirty-state bugs that had to die so the tab you are not looking at stays honest. You notice it as calm. Open a second file. The first file's undo is still the first file's undo.

Persona switches do not open a tab. Design, Layout, Pixel, Photo, and Motion are tool wells on the document. A new tab is `Ctrl+N` or `Ctrl+O` or a template, not a mode click.

## In the hand

Launch, open something or make something, then add a neighbor.

```sh
omadesign
```

```text
Ctrl+N
```

A new tab appears above the canvas. Press `R` and draw. That rectangle belongs to the new tab.

```text
Ctrl+O
```

Pick another `.oma`, or a PSD, or an SVG. It opens beside the first, at its own size. Click the first tab. The rectangle is still there. `Ctrl+Z` undoes the last change in the tab you are looking at.

Right-click the tab you want to close, or use its close button. On a dirty tab the dialog is:

```text
Save    Discard    Cancel
```

Cancel. The tab remains. Draw one more shape so you know the document is intact. Close again and choose Save. You get a native save dialog. The file on disk is `.oma`. The swap for that id goes away on the save.

Open **+ Vector**, pick one of the 52, and **Use this template**. The template arrives as its own unsaved tab. The file you just saved is still the other tab. Close the template with Discard if it was only a look. Close it with Save if it became the job.

`Ctrl+W` is not the chord the manual gives you for this. Use the close button or the right-click menu. The chords to remember are `Ctrl+N`, `Ctrl+O`, `Ctrl+S`, and `Ctrl+Shift+S`.

Switch persona in the same tab and draw or paint. The tab does not multiply. Switch back. The layer stack is the one you just edited.

## The edge

Cancel does not save and it does not discard. The tab stays. The only way through the dialog to a destroyed unsaved change is Discard. Save is the way out that writes `.oma`.

Close does not close the whole studio. The window stays. The last tab is a document question, not a secret quit. Quitting with unsaved photo settings is a separate prompt: Save all, Discard, or Cancel for those settings, before palette and artwork saves, and the app waits for the writes. Do not confuse that Photo quit path with a document tab. A tab is one `.oma`. Photo settings are `.omaphoto` beside the originals.

A tab will not rewrite a RAW file because you had Photo open earlier. Design save stores the design. The camera file stays on disk as the camera wrote it.

Imported files stay imported. The tab does not save back over the PSD unless you export on purpose. Default save is `.oma`, source preserved.

Press `Ctrl+N` for a new tab above the canvas. Press `Ctrl+O` when the next file should sit beside it.
