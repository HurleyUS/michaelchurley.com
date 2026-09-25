---
id: T103
title: Place command
slug: omadesign-0-5-8-place-command
excerpt: File → Place… is Ctrl+Shift+P. The artwork loads in the background, then you click or drag to place it. Nested layers and masks come along. Undo removes the placement in one step. Enter places at center. Esc cancels.
publishedAt: 2026-09-06T10:50:01Z
tags: [omadesign, 0.5.8, place]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-place-command/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-place-command/og.png
---

## The habit

Place is the command you reach for when the document is already open. In Illustrator, File → Place drops a loaded cursor on the artboard. You click for the file’s own size, or you drag a box and the artwork scales into it. Photoshop’s Place Embedded does the same with a transform you commit. Affinity’s Place asks you to draw the box. The file you are placing might be a logo, a photo, or a whole other layout with groups and masks. You want those pieces to arrive together. You want one undo if the landing spot was wrong.

The bad version of Place blocks the window while a large PSD decodes, then dumps a flat image where you clicked, and then makes you delete twelve layers by hand if you meant to cancel. Linked place, the kind that watches a network path and updates when the other file changes, is a different product. It needs a link manager and a story about missing files. This command is the landing, into the document you already have.

## The constraint

The document you have open is the document that receives the art. Open is the other command. Open starts a tab at the file’s original dimensions and leaves you unsaved until you write a `.oma`. Place has to keep you in the current tab. The load has to happen off the frame loop. A 37 MB PSD should not freeze the canvas while you wait to click. Until you click, drag, or press Enter, the document should be unchanged. Esc has to mean the load was a preview you refused.

What lands has to be the layer tree the reader actually built. Nested layers and masks travel together. A place that flattens a grouped logo into one bitmap, then offers you the groups on a second try, is two commands wearing one name. The drag scales that hierarchy into the rectangle you draw. One undo removes the placement. You should not peel child layers apart to get back to the artboard you had. The readers are the same readers Open uses. Place is a destination, not a second, weaker importer.

Rasters in a `.oma` are PNG-packed. After you save, the placed pixels are in that file. There is no sidecar link you have to keep alive for the place to open tomorrow. Brand tiles have their own drag-from-the-panel path. File → Place is the path for a file you pick in the dialog.

## What landed

File → Place… is Ctrl+Shift+P. The artwork loads in the background. Then you click or drag to place it. A click lands it. A drag draws the rectangle, and the imported hierarchy scales into that rectangle. Nested layers and masks travel together. Groups stay groups. A mask keeps its placement relative to the art that came with it. Pass-through and isolated group blending still mean what they mean on any other group once the layers are in the tree.

Undo removes the placement in one step. Ctrl+Z is that step. The nested layers go with it. You are back to the document you had before the place. Redo is Ctrl+Shift+Z if the place was right and the undo was habit.

Enter places at the center. That is the click you do not want to aim. The loaded artwork goes to the center of the document. Esc cancels. The load is discarded. No layer is left behind, because you never committed the place.

The same files Open can read are the files Place can load. Layered PSD and PSB, PDF pages, PDF-compatible AI, OpenRaster, SVG and SVGZ, GIMP `.xcf`, images, and Affinity documents when the optional bridge is installed. A format the reader only partly understands still places what it understood, and the conversion notes describe the rest. Placing does not skip the notes. It also does not write back to the file you picked. The source stays the source. The current `.oma` is what gains layers, and only after you commit.

Right-click the canvas for Place. The canvas menu and the File menu start the same load. Native file dialogs are the chooser. You are not dropped into a custom browser that rewrites the directory.

Large files stay on the background path. You can still look at the artboard while the reader works. When the load is ready, the click and the drag are yours. Enter and Esc are the keyboard pair: commit at center, or refuse.

Photo has a related landing, Place in Design, which develops a full-resolution pixel layer into a Design document. That path is the photo pipeline. File → Place is the document command, with Ctrl+Shift+P, for artwork you choose from disk. Use the one that matches the file in your hand.

## In the hand

Open the poster. The tab is already the right size. You need a diagram that exists as its own SVG, or a layered PSD of a product shot.

1. Press Ctrl+Shift+P. Choose the file. The read runs in the background. The canvas stays up.
2. Move over the artboard. Drag the rectangle where the artwork should sit, and how big it should be. The hierarchy scales into that box. Masks and nested layers come with it.
3. Or press Enter if center is the right spot and you will move it after, with V.
4. Look at the layer list. The group, the names, and the masks are in this document.
5. Press Ctrl+Z if the box was wrong. The whole place leaves in one step. Press Ctrl+Shift+P and try the rectangle again.

Esc, pressed after the load and before the click, cancels. Use it when you picked the wrong file. Then Ctrl+Shift+P and pick the right one. Nothing from the cancelled load is in the layer list.

Save with Ctrl+S. The `.oma` now contains the placed tree. The file you placed from is unchanged on disk. Open View → Document conversion notes if the placed file was a PSD, a PDF, or an Affinity document and you need to know what became pixels.

Alt-drag with the Move tool clones whatever is already selected. That is a duplicate inside the document. It is not Place. Place is how a file from outside becomes layers in one undoable step.

## The edge

Esc cancels the place. The document does not keep a partial layer from a load you refused. Enter, a click, or a drag is the commit. Until one of those happens, the artboard is the artboard you had.

Ctrl+Z removes the committed placement in one step, nested layers and masks included. You do not delete child objects one by one to undo a place.

Press Ctrl+Shift+P, wait for the load, then drag the rectangle or press Enter. Esc if it is the wrong file.
