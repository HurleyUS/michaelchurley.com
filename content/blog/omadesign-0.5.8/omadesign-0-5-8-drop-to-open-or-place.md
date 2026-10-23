---
id: T104
title: Drop to open or place
slug: omadesign-0-5-8-drop-to-open-or-place
excerpt: Drop a layered document on the canvas or the welcome screen to open it. Ordinary images place. A .oma opens. Lottie imports. The status bar confirms copy, cut, and paste. Copy style is Ctrl+Alt+C. Paste style is Ctrl+Alt+V.
publishedAt: 2026-09-07T01:39:01Z
tags: [omadesign, 0.0.2-alpha, place]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-drop-to-open-or-place/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-drop-to-open-or-place/og.png
---

## The habit

The file manager is already open. You drag a PSD onto Photoshop and it opens. You drag a PNG onto an open Illustrator document and it gets placed. You drag an `.ai` onto the start screen and you get a document, instead of a picture frame inside yesterday's poster. The gesture is always the same, and the file type decides what happens. You learn the rule once and never again answer a dialog asking "open or place?"

The clipboard is the matching habit: Ctrl+C, Ctrl+X, Ctrl+V. Inside one application, pasted objects should land where they were, including on another artboard, so a logo you copied from the master still sits on the grid. Pasting a style should change fills and strokes without moving the path, which is what Illustrator's eyedropper and Affinity's paste style do. And you want a status line confirming the copy happened, because a silent clipboard is how you end up pasting last week's selection and wrecking the frame.

## The constraint

Omadesign has two valid destinations for a file, and each already has a command. Open starts a tab at the file's original dimensions and leaves the source untouched. Place loads artwork into the open document, and one undo removes it. A drop can't invent a third mode. It has to choose open or place based on the kind of file, and it has to work on two surfaces, the canvas and the welcome screen. The welcome screen is a local file browser, so dropping work there has to do the same thing as dropping it on the canvas. Otherwise the welcome screen would look like part of the app while refusing work.

`.oma` is the native document, so dropping one opens it instead of embedding a document inside another document. Ordinary images are pixels, so they get placed. Layered documents are documents, so they open. Lottie has its own import. The Motion side of the app already has File > Lottie, so a dropped Lottie should import, instead of being treated as a still PNG.

Copy and paste have to be visible, and the status bar provides the confirmation. Objects copied inside Omadesign paste at their original positions, including onto another artboard, and the status bar says so. External clipboard data is a different kind of paste that also uses Ctrl+V: screenshots, browser images, copied image files, plain text, and SVG source or SVG files. That content lands in the center of the visible canvas, because it has no original position in this document. The status bar tells you which kind of paste just happened.

Style and geometry are separate things. Copy style and paste style need their own chords so Ctrl+C keeps meaning "copy the objects."

## What landed

Drop a layered document on the canvas or the welcome screen and it opens. PSD, PSB, PDF, PDF-compatible AI, OpenRaster, SVG, GIMP `.xcf`, and supported Affinity files take the open path: their own tab, original dimensions, source preserved, and a save to `.oma` when you want a master copy. Ordinary images, meaning PNG, JPEG, and other single images, follow the place rules. Once a placement lands, one Ctrl+Z removes it.

A dropped `.oma` opens. Your own document is never nested as a placed group inside the current tab.

A dropped Lottie file imports. It isn't treated as a flat image or as a PSD. File > Lottie is still there when you would rather pick the file than drag it.

The status bar confirms copy, cut, and paste. Ctrl+C copies, Ctrl+X cuts, and Ctrl+V pastes. Objects copied in Omadesign paste at their original positions, and they keep those positions when you paste onto another artboard. The status bar tells you so, and you don't have to check the gap with the rulers.

Copy style is Ctrl+Alt+C and paste style is Ctrl+Alt+V. Those chords only carry style, and Ctrl+C and Ctrl+V still carry objects. In Photo, Ctrl+Shift+C and Ctrl+Shift+V copy and paste adjustments, which is a different pair. On the canvas, Alt in the chord means style. In Photo, Shift in the chord means development settings. Don't swap them.

External paste also uses Ctrl+V. A screenshot or browser image becomes a pixel layer. Plain text becomes an editable text layer. SVG source or an SVG file becomes vector artwork. All of it appears at the center of the visible canvas, accounting for pan and zoom, so "center" means the center of what you are looking at. Command+V works through Omarchy's universal paste binding, and Shift+Insert from the Alt+V clipboard history picker uses the same paste path. If you are editing text, the paste goes into that text instead of creating a new layer in the middle of a word.

Alt-drag clones a selection you already have. The status bar and the clipboard handle content that leaves the document, and Alt-drag never leaves it.

## In the hand

Open the file manager beside the window.

Drag a PSD onto the canvas. A new tab opens at the PSD's size, the previous document is still a tab, and the PSD on disk is unchanged. Drag the same kind of file onto the welcome screen and it opens the same way.

Drag a PNG onto the open poster and it gets placed. Move it with V, or press Ctrl+Z to remove the placement in one step if the drop was an accident.

Drag a `.oma` onto the welcome screen and it opens, with the same result as clicking it in Your Work.

Drag a Lottie file and it imports. Once the clip is in the document, play it from the Motion side with Space.

Select a rectangle with a fill you want to reuse and press Ctrl+Alt+C. Select another shape and press Ctrl+Alt+V. The fill and the rest of the style land on the second shape, the path stays where it was, and the status bar confirms it. Then select both shapes, press Ctrl+C, switch artboards, and press Ctrl+V. They paste at their original positions, the status bar says so, and Ctrl+Z undoes the paste in one step.

Copy a screenshot and press Ctrl+V on the canvas. A pixel layer appears at the center of the view. Copy a sentence from the browser and press Ctrl+V, and an editable text layer appears at the same center. If you meant to insert the words into an existing text object, click into it first and the paste goes into the text.

## The edge

A drop never asks you to choose between open and place. A layered document opens, an ordinary image is placed, a `.oma` opens, and a Lottie imports. If you drag a PSD onto a poster wanting it inside the poster, you get a new tab instead. When a layered file belongs inside the current document, use Ctrl+Shift+P (File > Place…).

Paste style never moves geometry. Ctrl+Alt+V applies the style to your current selection, and moving objects stays on Ctrl+C and Ctrl+V.
