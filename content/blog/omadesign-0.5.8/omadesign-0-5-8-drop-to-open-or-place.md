---
id: T104
title: Drop to open or place
slug: omadesign-0-5-8-drop-to-open-or-place
excerpt: Drop a layered document on the canvas or the welcome screen to open it. Ordinary images place. A .oma opens. Lottie imports. The status bar confirms copy, cut, and paste. Copy style is Ctrl+Alt+C. Paste style is Ctrl+Alt+V.
tags: [omadesign, 0.5.8, place]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-drop-to-open-or-place/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-drop-to-open-or-place/og.png
---

## The habit

The file manager is already open. You drag a PSD onto Photoshop and it opens. You drag a PNG onto an open Illustrator document and it places. You drag an `.ai` onto the start screen and you get a document, not a picture frame inside yesterday’s poster. The gesture is the same. The file type decides the verb. You learn the rule once, and then you stop answering a dialog that asks "open or place?" every time.

Clipboard is the twin habit. Ctrl+C, Ctrl+X, Ctrl+V. Inside one application, a paste of objects should land where those objects were, including on another artboard, so a logo you copied from the master still sits on the grid. A paste of a style should change fills and strokes, not move the path. Illustrator’s eyedropper and Affinity’s paste-style do that job. You want a status line that says the copy happened, because a silent clipboard is how you paste last week’s selection and wreck the frame.

## The constraint

Omadesign has two legal landings for a file, and they already have commands. Open starts a tab at the file’s original dimensions and leaves the source untouched. Place loads artwork into the document you have open, and one undo removes it. A drop cannot invent a third mode. It has to pick open or place from the kind of file, on two surfaces: the canvas, and the welcome screen. Welcome is a local file browser. Dropping work there has to do the same thing a drop on the canvas does, or the welcome screen is a picture of the app that does not accept work.

`.oma` is the native document. Dropping one opens it. It does not place a document inside a document as a mystery embed. Ordinary images are pixels. They place. Layered documents are documents. They open. Lottie is its own import. The Motion side of the app already has File → Lottie. A drop should import, not pretend a Lottie JSON is a still PNG.

Copy and paste have to be visible. The status bar is the confirmation. Objects copied inside Omadesign paste at their original positions, including onto another artboard. The status bar says so. External clipboard data is a different paste, Ctrl+V as well: screenshots, browser images, copied image files, plain text, SVG source or SVG files. That content lands in the center of the visible canvas, because it has no original position in this document. The status bar is how you tell the two pastes apart without guessing.

Style is not geometry. Copy style and paste style need their own chords so Ctrl+C keeps meaning "the objects."

## What landed

Drop a layered document on the canvas or the welcome screen and it opens. PSD, PSB, PDF, PDF-compatible AI, OpenRaster, SVG, GIMP `.xcf`, and a supported Affinity file take the open path: own tab, original dimensions, source preserved, save as `.oma` when you want the master. Ordinary images place. PNG, JPEG, and the other single images follow the place rules. You still get one undo for that placement, Ctrl+Z, once it has landed.

A `.oma` opens. Dropping your own document does not nest it as a placed group inside the current tab. You get the document.

Lottie imports. The drop does not treat a Lottie file as a flat image and it does not pretend it is a PSD. It imports. File → Lottie remains the menu path when you would rather pick the file than drag it.

The status bar confirms copy, cut, and paste. Ctrl+C copies. Ctrl+X cuts. Ctrl+V pastes. Objects that were copied in Omadesign paste at their original positions. Paste onto another artboard and they keep those positions. The status bar tells you that happened. You are not left to measure the gap with the rulers.

Copy style is Ctrl+Alt+C. Paste style is Ctrl+Alt+V. Those chords are style only. Ctrl+C and Ctrl+V remain the objects. In Photo, Ctrl+Shift+C and Ctrl+Shift+V are copy adjustments and paste adjustments, which is a different pair. On the canvas, Alt in the chord is the style. Shift in the chord, in Photo, is the development. Do not swap them.

External paste uses Ctrl+V as well. A screenshot or a browser image becomes a pixel layer. Plain text becomes an editable text layer. SVG source or an SVG file becomes vector artwork. All of that appears at the center of the visible canvas, pan and zoom included, so "center" means the center of what you are looking at. Command+V works through Omarchy’s universal paste binding. Shift+Insert from the Alt+V clipboard-history picker uses the same paste path. If you are editing text, paste inserts into that text. It does not spawn a new layer in the middle of a word.

Alt-drag clones a selection you already have. The status bar and the clipboard are for the things that left the document. Alt-drag never left.

## In the hand

Open the file manager beside the window.

Drag a PSD onto the canvas. A new tab opens at that PSD’s size. The previous document is still a tab. The PSD on disk is unchanged. Drag the same kind of file onto the welcome screen and it opens the same way.

Drag a PNG onto the open poster. It places. Move it with V. Ctrl+Z removes the placement in one step if the drop was an accident.

Drag a `.oma` onto the welcome screen. It opens. Your Work would have opened it on click. The drop is the same result.

Drag a Lottie file. It imports. Play from the Motion side with Space once the clip is in the document and you have something to run.

Select a rectangle with a fill you want to reuse. Press Ctrl+Alt+C. Select another shape. Press Ctrl+Alt+V. The fill and the rest of the style land on the second shape. The path stays where it was. Watch the status bar. Then select both shapes, Ctrl+C, switch artboards, Ctrl+V. They paste at their original positions. The status bar says so. Ctrl+Z undoes that paste in one step.

Copy a screenshot. Ctrl+V on the canvas. A pixel layer appears at the center of the view. Copy a sentence from the browser. Ctrl+V. An editable text layer appears at that same center. Click into an existing text object first if you meant to insert the words there. The paste goes into the text.

## The edge

The drop does not ask you to pick open or place. A layered document opens. An ordinary image places. A `.oma` opens. Lottie imports. Drag a PSD onto a poster when you wanted it inside the poster, and you will get a new tab. That is the rule. Use Ctrl+Shift+P, File → Place…, when the layered file belongs inside the document you already have.

Copy style will not move geometry. Ctrl+Alt+V paints the style onto the selection you already have. The objects stay on Ctrl+C and Ctrl+V.

Drop the layered file to open it. Drop the PNG to place it. Press Ctrl+Alt+C, then Ctrl+Alt+V, when the only thing you meant to carry was the style.
