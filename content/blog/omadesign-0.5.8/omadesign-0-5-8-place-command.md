---
id: T103
title: Place command
slug: omadesign-0-5-8-place-command
excerpt: File → Place… is Ctrl+Shift+P. The artwork loads in the background, then you click or drag to place it. Nested layers and masks come along. Undo removes the placement in one step. Enter places at center. Esc cancels.
publishedAt: 2026-09-06T10:50:01Z
tags: [omadesign, 0.0.1-alpha, place]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-place-command/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-place-command/og.png
---

## The habit

You use Place when the document is already open. In Illustrator, File > Place gives you a loaded cursor over the artboard. You click to place the file at its own size, or drag a box and the artwork scales into it. Photoshop's Place Embedded does the same thing with a transform you commit. Affinity's Place asks you to draw the box. The file might be a logo, a photo, or a whole other layout with groups and masks. You want those pieces to arrive together, and you want a single undo if the placement was wrong.

A bad Place blocks the window while a large PSD decodes, drops a flat image where you clicked, and then makes you delete twelve layers by hand if you meant to cancel. Linked placing, which watches a network path and updates when the other file changes, is a different feature. It needs a link manager and a plan for missing files. This command puts artwork into the document you already have.

## The constraint

The document you have open receives the art. Open is a different command. It starts a new tab at the file's original dimensions and leaves it unsaved until you write a `.oma`. Place has to keep you in the current tab, and the load has to happen off the frame loop, so a 37 MB PSD doesn't freeze the canvas while you wait to click. Until you click, drag or press Enter, the document stays unchanged. Pressing Esc throws the load away.

What lands has to be the layer tree the file actually contains. Nested layers and masks arrive together. A Place that flattened a grouped logo into one bitmap, and only gave you the groups on a second try, would really be two commands. Dragging scales that hierarchy into the rectangle you draw. One undo removes the placement, so you never have to pull child layers apart to get your artboard back. Place uses the same readers as Open, so it imports just as well.

Rasters in a `.oma` are stored as PNG. Once you save, the placed pixels are inside that file, and there is no linked file you have to keep around for the document to open tomorrow. Brand tiles have their own drag-from-the-panel path. File > Place is for a file you pick in the dialog.

## What landed

File > Place… is Ctrl+Shift+P. The artwork loads in the background, and then you click or drag to place it. A click drops it in. A drag draws a rectangle, and the imported hierarchy scales into it. Nested layers and masks come together, groups stay groups, and a mask keeps its position relative to its art. Once the layers are in the tree, pass-through and isolated group blending work the same as on any other group.

Ctrl+Z removes the placement in one step, nested layers included, and you are back to the document you had before. If the placement was right and you pressed Undo out of habit, Redo is Ctrl+Shift+Z.

Enter places the artwork at the center of the document, for when you don't want to aim. Esc cancels. The load is discarded and no layer is left behind, because you never committed.

Place loads the same files Open can read: layered PSD and PSB, PDF pages, PDF-compatible AI, OpenRaster, SVG and SVGZ, GIMP `.xcf`, images, and Affinity documents when the optional bridge is installed. If a reader only partly understands a format, it places what it understood and the conversion notes describe the rest. Placing still writes the notes. It never writes back to the file you picked. Only the current `.oma` gains layers, and only after you commit.

You can also right-click the canvas and choose Place. The canvas menu and the File menu start the same load. The native file dialog is the chooser, so you aren't sent into a custom browser.

Large files load in the background, and you can keep looking at the artboard while the reader works. When the load is ready, you click or drag. On the keyboard, Enter commits at the center and Esc cancels.

Photo has a related command, Place in Design, which develops a full-resolution pixel layer into a Design document. That belongs to the photo pipeline. File > Place (Ctrl+Shift+P) is the document command for artwork you choose from disk. Use whichever matches the file you have.

## In the hand

Open the poster. The tab is already the right size, and you need a diagram saved as its own SVG, or a layered PSD of a product shot.

1. Press Ctrl+Shift+P and choose the file. The file reads in the background and the canvas stays usable.
2. Move over the artboard and drag a rectangle where the artwork should sit, at the size it should be. The hierarchy scales into that box, with masks and nested layers.
3. Or press Enter if the center is fine and you will move it afterward with V.
4. Check the layer list. The group, the names and the masks are now in this document.
5. If the box was wrong, press Ctrl+Z. The whole placement goes away in one step. Press Ctrl+Shift+P and draw the rectangle again.

If you press Esc after the load and before the click, the placement is cancelled. Use it when you picked the wrong file, then press Ctrl+Shift+P and pick the right one. Nothing from the cancelled load appears in the layer list.

Save with Ctrl+S. The `.oma` now contains the placed tree, and the source file on disk is unchanged. If you placed a PSD, a PDF or an Affinity document and need to know what became pixels, open View > Document conversion notes.

Alt-drag with the Move tool clones whatever is already selected. That duplicates something inside the document. Place is how an outside file becomes layers in one undoable step.

## The edge

Esc cancels the placement, and the document keeps no partial layer from it. Enter, a click or a drag commits. Until you do one of those, the artboard stays as it was.

Ctrl+Z removes a committed placement in one step, nested layers and masks included, so you never delete child objects one by one to undo it.
