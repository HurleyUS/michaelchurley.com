---
id: T110
title: OpenRaster GIMP
slug: omadesign-0-5-8-openraster-gimp
excerpt: OpenRaster imports and exports layers, stack.xml, a merged preview, and a thumbnail. GIMP .xcf opens in a native reader and does not write back. Text and effects arrive as pixels. Keep the .oma. Send ORA or PSD back.
publishedAt: 2026-09-09T10:55:53Z
tags: [omadesign, 0.0.5-alpha, openraster]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-openraster-gimp/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-openraster-gimp/og.png
---

## The habit

GIMP's file format is `.xcf`. In it you keep type as text, layer effects as effects and paths in the paths list. When you have to leave GIMP, OpenRaster is the layered format built for the job. An `.ora` is a zip, with `stack.xml` describing the stack and PNG layers inside. A merged preview and a thumbnail come along so a file manager can show something. Krita, GIMP and a handful of other editors read it. PSD is the other way out, because Photoshop is still where a lot of layered files end up.

You want Open to read an `.xcf` without launching GIMP, and you want a way back that GIMP can open. You don't want a writer that produces a half-valid `.xcf` and damages a file you still need.

## The constraint

The `.xcf` reader follows GIMP's XCF specification. It doesn't start GIMP and it doesn't write `.xcf`. Writing XCF properly would mean implementing GIMP's current tile format, text engine, effect stacks and paths, which is to say GIMP itself. This binary reads the pixel stack it can handle reliably, and stops there. The way back is OpenRaster or PSD, and GIMP opens both. The `.oma` stays the master, because GIMP text and effects arrive here as pixels and won't turn back into live GIMP objects on the return trip either.

OpenRaster follows the public 0.0.6 ZIP and XML specification. The writer has to produce a valid archive: the first entry is an uncompressed `mimetype`, followed by `stack.xml`, `mergedimage.png` and a thumbnail no larger than 256×256. The importer reads ZIP entries directly instead of extracting the archive to disk, where a malicious path could land outside the file you thought you opened. The budgets are 512 MiB each for the archive, the expanded data and the total pixels. The canvas stops at 32,768 pixels on a side and 64 megapixels.

Unsupported compositing is rejected. An OpenRaster blend mode this app can't map doesn't get silently rewritten to Normal, and extended layer sources that aren't PNG are rejected too. A file that's quietly "fixed" is worse than a refusal.

## What landed

OpenRaster import reads pixel layers and groups, offsets (including negative ones), names, visibility, opacity, isolation and supported blend modes. Hidden layers stay hidden, PNG layers stay separate and groups keep their hierarchy. Imported pass-through group opacity is applied to the group's children, with a note, so OpenRaster's compositing rules still hold. Layer locks can be stored in an Omadesign XML extension, which other applications may ignore. Sixteen-bit PNG channels become 8-bit RGBA, with a note.

Vectors and text in an OpenRaster file that aren't already PNG layers become pixels per layer on the way in, though most `.ora` files are PNG layers already. On export, vector artwork is rendered separately for each layer. A masked or effected group becomes one pixel layer, and rendered layers are clipped to the document canvas. When you export a translucent native pass-through group, a note warns that overlapping children may composite differently. Isolated groups are the reliable choice for interchange, so use isolation when the OpenRaster file has to match.

The archive you write has the required `mimetype` entry first and uncompressed, then `stack.xml`, `mergedimage.png` and the thumbnail. That output was checked with Python's `zipfile`, XML tools and Pillow for entry order, nested groups, hidden layers, exact pixel channels, negative offsets and the required previews. In the other direction, a fixture built independently with Python's ZIP and PNG primitives was imported. So the reader and writer weren't only tested against each other.

GIMP `.xcf` uses the native reader. Pixel layers, groups, names, visibility, opacity, offsets, supported blend modes and applied layer masks become native layers. Pointers can be 32-bit or 64-bit, and tiles can be RLE, uncompressed or zlib. 8-bit RGB, grayscale and indexed documents are the preferred inputs, and higher precision is reduced to 8-bit RGBA with a note. Live text, layer effects, paths and floating selections aren't reconstructed. An unmapped blend mode displays as Normal, and the note tells you the blend didn't survive. Verification used independently encoded fixtures for grouped RLE layers, 64-bit pointers and zlib tiles, plus a bounded rejection of oversized input.

There's no `.xcf` writer. Export OpenRaster or PSD and open that in GIMP. Save the `.oma` if you still need editable vectors, live text you set here, or the imported stack in Omadesign's own format. The `.xcf` you opened is unchanged, because Open never writes it.

Headless commands match the desktop: `omadesign --inspect artwork.xcf` and `omadesign --convert artwork.oma --output artwork.ora`. Same-file conversion is refused. Notes print to stderr, and when the destination is a `.oma`, they're saved in it.

## In the hand

Press Ctrl+O and choose the `.xcf`. The tab opens at the file's dimensions and the groups expand. Names, visibility, opacity and offsets should match the pixel stack, and applied masks come in as masks. Open View > Document conversion notes before you reach for the Type tool. GIMP text and layer effects are pixels here. Paths and floating selections aren't in the layer tree as live objects. An unmapped blend looks Normal, and the note names it.

Press Ctrl+Shift+S and save a `.oma` next to the `.xcf`, then edit in the `.oma`. New type you add with T is real type, but it doesn't bring the GIMP text layer back to life.

To send the stack back, export OpenRaster, which GIMP opens. You get PNG layers, the stack, the merged preview and the thumbnail. Or export PSD if the other end is Photoshop or a GIMP workflow that prefers PSD. There's no Save As XCF.

If you're starting from Omadesign art and it's going to GIMP, export `.ora` while the groups are still simple. A group with a mask and an effect lands as one pixel layer, so either split that work or accept the bake and read the note. Isolated groups travel more predictably than translucent pass-through groups. Read the pass-through note about overlapping children before deciding the `.ora` is wrong.

Dropping an `.xcf` or `.ora` on the canvas or welcome screen opens it, the same as Ctrl+O. Place, Ctrl+Shift+P, loads one into the current document when you want to composite it instead of opening a new file.

## The edge

There's no `.xcf` writer, so a GIMP file can't round-trip back onto itself. Live GIMP text, layer effects, paths and floating selections aren't reconstructed on the way in. Export OpenRaster or PSD for the trip back. Keep the `.oma` as the master, and keep the original `.xcf` if GIMP still needs to edit the live text.

OpenRaster rejects blend modes and layer payloads it can't represent, instead of rewriting them to Normal and saving.
