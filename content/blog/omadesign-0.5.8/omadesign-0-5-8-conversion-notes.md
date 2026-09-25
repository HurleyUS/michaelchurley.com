---
id: T105
title: Conversion notes
slug: omadesign-0-5-8-conversion-notes
excerpt: View → Document conversion notes lists what an import dropped or converted. The notes stay in the .oma. Affinity-only features, live Photoshop type, smart objects, effects, and private Illustrator data stay unrebuilt.
publishedAt: 2026-09-07T01:40:01Z
tags: [omadesign, 0.5.8, import]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-conversion-notes/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-conversion-notes/og.png
---

## The habit

Every serious import has a confession screen, and most of them are bad at it. Photoshop’s compatibility dialog, Illustrator’s missing-font and unknown-effect warnings, Affinity’s "this feature isn’t supported" line. You click through because the artboard looks close enough. A week later the shadow is gone, the smart object is a bitmap, and nobody can say whether the loss happened at open or during an edit. The honest tools write the confession down. The dishonest ones flatten and smile.

You already know which features travel badly. Live type in a PSD. A smart object that is really another PSD. A layer style with bevel and satin. Illustrator’s private data that never made it into the PDF-compatible part of the `.ai`. Affinity adjustments, live filters, and history. You want those named, next to the document, still there after you save.

## The constraint

The working file is one `.oma`. A warning that exists only in a modal, or only in a log you will not reopen, dies at the end of the session. The note has to live in the document. Save the `.oma` and the note saves. Open it on another machine and the note is still the account of what the reader did.

The reader will not invent a feature it does not have. Rebuilding Photoshop’s live text engine, Illustrator’s appearance stack, or Affinity’s history inside this binary is a different application. The constraint is one studio with one layer tree. Where a feature can become something native and editable, it should. A Normal color overlay that can become a native color effect should become one. Where it cannot, the pixels that were already saved can come across, and the note has to say the live object did not. Silent substitution, a gradient replaced by one flat color, a blend mode flipped to Normal with no sentence anywhere, is the failure this list exists to stop.

Headless conversion prints the same notes to stderr. The desktop and the command line share readers. A note you can see in the terminal is the same note View will show after you open the `.oma`.

## What landed

View → Document conversion notes lists unsupported or converted features. The list is per document. Notes stay in the `.oma`. They are not a session toast. Save, quit, reopen. The notes are still in the file. Keep the source file when a note reports a loss. The `.oma` is the editable Omadesign document plus the confession. The PSD, the `.ai`, the Affinity file, the `.xcf` are still the originals, because Open does not rewrite them.

A format that appears in File → Open is not a promise of complete compatibility with that application. The notes are how you see the gap for this file, not as a generic manual chapter you might remember to read.

Affinity native features are not universally supported. The optional bridge can bring vectors, text, pixels, groups, visibility, opacity, masks, and artboards across via SVG. Most adjustments, live effects, publishing structures, custom profiles, and edit history are not retained. Multi-spread documents can fail. The note is the list of what this file lost, which is more useful than the general sentence, and the general sentence is why you look.

Photoshop live text, smart objects, and effects are not universally supported. Text and smart objects import as the pixel layers already saved in the PSD or PSB. A supported Normal color overlay can become an editable native color effect. Other adjustments, fills, and effects are not recreated. Their notes explain the limit. Feathering on a mask is not supported. Clipping is baked into an editable pixel mask, so later edits to the base do not keep flowing through a live clip. The note stops you from expecting that live relationship.

Illustrator private editing data is not reconstructed. `.ai` support means the PDF-compatible artwork, or older PostScript artwork converted through Ghostscript. Live effects, symbols, and appearance stacks that exist only in the private data do not come back. A real Illustrator file with blank PDF-compatible pages stays blank here, and an independent PDF renderer showed those pages blank too. The note tells you the artwork was never in the PDF part. Export from Illustrator to a PDF or SVG that actually contains the art, then open that.

Other readers write notes for their own reductions. High bit depth becomes 8-bit RGBA and says so. Unmapped blend modes display as Normal and the note exists so you do not think the blend survived. PDF export fallbacks write a note for every reduction in editability. Effects are not silently dropped or replaced with a single gradient color. GIMP live text and layer effects import as pixels. OpenRaster vectors and text become pixels per layer. Each of those is a note you can open from the same menu.

`--inspect` includes the import notes in its JSON. `--convert` prints notes to stderr and writes a separate destination. The note is part of the result, in the file and on the stream.

## In the hand

Press Ctrl+O and open the foreign file. Before you edit, open View → Document conversion notes. Read the lines. A line that says text arrived as pixels means the type tool will not find a caret in that layer. Retype with T if the words have to change, on a new text object, in a project font if you have a kit. A line that says an effect was not recreated means the look you see is whatever pixels or approximation the reader kept. Do not stack a second effect on the assumption that the first one is still live.

Press Ctrl+S or Ctrl+Shift+S and write a `.oma`. Quit. Open the `.oma` again. View → Document conversion notes shows the same list. The notes survived because they are in the file.

If you are converting a folder from a script, run `omadesign --convert artwork.psd --output artwork.oma` and read stderr. Then open the `.oma` and use the View menu. The two reports are the same conversion. Keep `artwork.psd` when stderr is not empty.

When you export later, fallbacks write notes too. A PDF that had to rasterize a group will say so. The `.oma` still has the live objects. The PDF is the delivery. Check the notes before you send the delivery to a press and call it the master.

## The edge

The notes do not repair the missing feature. They record it. Affinity history, Photoshop live type and smart objects, and private Illustrator data stay unrebuilt. The list will not quietly turn a pixel layer back into a text object because you opened the menu.

The notes also do not vanish when you save. They stay in the `.oma`. If a note reports a loss, keep the source file. The `.oma` is honest about what it holds. It is not a full copy of the other application’s private model.

Open View → Document conversion notes before you trust the import.
