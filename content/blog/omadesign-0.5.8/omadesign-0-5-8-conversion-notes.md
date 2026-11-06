---
id: T105
title: Conversion notes
slug: omadesign-0-5-8-conversion-notes
excerpt: View → Document conversion notes lists what an import dropped or converted. The notes stay in the .oma. Affinity-only features, live Photoshop type, smart objects, effects, and private Illustrator data stay unrebuilt.
publishedAt: 2026-09-07T01:40:01Z
tags: [omadesign, 0.0.2-alpha, import]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-conversion-notes/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-conversion-notes/og.png
---

## The habit

Every serious importer has a screen where it admits what it couldn't handle, and most of them do it badly. Photoshop has its compatibility dialog, Illustrator has missing-font and unknown-effect warnings, and Affinity has its "this feature isn't supported" line. You click through because the artboard looks close enough. A week later the shadow is gone, the smart object is a bitmap, and nobody can say whether the loss happened at open or during an edit. Good tools write that list down. Bad ones flatten the file and say nothing.

You already know which features travel badly: live type in a PSD, a smart object that is really another PSD, a layer style with bevel and satin, Illustrator's private data that never made it into the PDF-compatible part of the `.ai`, and Affinity adjustments, live filters, and history. You want those named, stored with the document, and still there after you save.

## The constraint

The working file is one `.oma`. A warning that only appears in a modal, or only in a log you will never reopen, is gone at the end of the session. So the note has to live in the document. Save the `.oma` and the note saves with it. Open it on another machine and the note still records what the reader did.

The reader won't fake a feature it doesn't have. Rebuilding Photoshop's live text engine, Illustrator's appearance stack, or Affinity's history inside this binary would mean writing a different application. The goal is one studio with one layer tree. Where a feature can become something native and editable, it does. For example, a Normal color overlay that maps to a native color effect becomes one. Where a feature can't, the pixels that were already saved come across, and the note says the live object didn't. This list exists to stop silent substitution, such as a gradient replaced by one flat color or a blend mode switched to Normal with no mention anywhere.

Headless conversion prints the same notes to stderr. The desktop app and the command line share readers, so a note you see in the terminal is the same note View shows after you open the `.oma`.

## What landed

View > Document conversion notes lists unsupported or converted features for each document. The notes are stored in the `.oma`, so they outlast the session. Save, quit, and reopen, and they are still in the file. Keep the source file when a note reports a loss. The `.oma` holds the editable Omadesign document plus the notes. The PSD, `.ai`, Affinity file, or `.xcf` stays the original, because Open never rewrites it.

A format that appears in File > Open does not promise complete compatibility with the application that made it. The notes show you the gap for this particular file, which is more useful than a general manual chapter you might remember to read.

Affinity's native features are only partly supported. The optional bridge can bring vectors, text, pixels, groups, visibility, opacity, masks, and artboards across via SVG. Most adjustments, live effects, publishing structures, custom profiles, and edit history are not retained, and multi-spread documents can fail. The note lists what this file lost. The general caveat is the reason to look, and the note is the useful part.

Photoshop live text, smart objects, and effects are only partly supported. Text and smart objects import as the pixel layers already saved in the PSD or PSB. A supported Normal color overlay can become an editable native color effect. Other adjustments, fills, and effects are not recreated, and their notes explain the limit. Mask feathering is not supported. Clipping is baked into an editable pixel mask, so later edits to the base layer no longer flow through a live clip, and the note tells you not to expect that live relationship.

Illustrator's private editing data is not reconstructed. `.ai` support covers the PDF-compatible artwork, or older PostScript artwork converted through Ghostscript. Live effects, symbols, and appearance stacks that exist only in the private data don't come back. A real Illustrator file with blank PDF-compatible pages stays blank here, and an independent PDF renderer showed those pages blank too. The note tells you the artwork was never in the PDF part. Export a PDF or SVG from Illustrator that actually contains the art, then open that.

Other readers write notes for their own reductions. High bit depth becomes 8-bit RGBA and the note says so. Unmapped blend modes display as Normal, and the note keeps you from thinking the blend survived. PDF export fallbacks write a note for every loss of editability, and effects are never silently dropped or replaced with a single gradient color. GIMP live text and layer effects import as pixels. OpenRaster vectors and text become pixels per layer. Each of those produces a note you can open from the same menu.

`--inspect` includes the import notes in its JSON. `--convert` prints notes to stderr and writes to a separate destination file. The notes are part of the result, both in the file and on the stream.

## In the hand

Press Ctrl+O and open the foreign file. Before you edit, open View > Document conversion notes and read the lines. If a line says text arrived as pixels, the type tool won't find a caret in that layer. If the words have to change, retype them with T on a new text object, in a project font if you have a kit. If a line says an effect was not recreated, what you see is whatever pixels or approximation the reader kept, so don't stack a second effect assuming the first one is still live.

Press Ctrl+S or Ctrl+Shift+S to write a `.oma`, quit, and open the `.oma` again. View > Document conversion notes shows the same list, because the notes are stored in the file.

If you are converting a folder from a script, run `omadesign --convert artwork.psd --output artwork.oma` and read stderr. Then open the `.oma` and use the View menu. Both reports describe the same conversion. Keep `artwork.psd` whenever stderr is not empty.

When you export later, fallbacks write notes too. A PDF that had to rasterize a group will say so. The `.oma` still has the live objects, and the PDF is only the delivery file. Check the notes before you send that PDF to a press as the master.

## The edge

The notes record a missing feature without repairing it. Affinity history, Photoshop live type and smart objects, and private Illustrator data are not rebuilt, and opening the menu won't turn a pixel layer back into a text object.

The notes also survive saving, because they are stored in the `.oma`. If a note reports a loss, keep the source file. The `.oma` accurately describes what it holds, but it is not a full copy of the other application's private data.
