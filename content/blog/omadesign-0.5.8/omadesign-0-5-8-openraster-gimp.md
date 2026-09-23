---
id: T110
title: OpenRaster GIMP
slug: omadesign-0-5-8-openraster-gimp
excerpt: OpenRaster imports and exports layers, stack.xml, a merged preview, and a thumbnail. GIMP .xcf opens in a native reader and does not write back. Text and effects arrive as pixels. Keep the .oma. Send ORA or PSD back.
tags: [omadesign, 0.5.8, openraster]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-openraster-gimp/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-openraster-gimp/og.png
---

## The habit

GIMP’s file is `.xcf`. You keep the type as text, the layer effects as effects, and the paths in the paths list. When you have to leave GIMP, OpenRaster is the layered format that was built for this. `.ora` is a zip. `stack.xml` names the stack. PNG layers sit inside. A merged preview and a thumbnail ride along so a file manager can show something. Krita, GIMP, and a handful of other editors read it. PSD is the other way out, because Photoshop is still where a lot of layered files end up.

You want Open to read a `.xcf` without launching GIMP, and you want a way back that GIMP can open. You do not want a writer that emits a half-valid `.xcf` and corrupts the file you still need.

## The constraint

The `.xcf` reader follows GIMP’s XCF specification. It does not start GIMP. It does not write `.xcf`. Writing XCF well means writing GIMP’s current tile format, its text engine, its effect stacks, and its paths. That is GIMP. This binary reads the pixel stack it can defend, then stops. The way back is OpenRaster or PSD, both of which GIMP opens. The `.oma` stays the master, because GIMP text and effects arrive here as pixels and will not become live GIMP objects on the return trip either.

OpenRaster is the public 0.0.6 ZIP and XML specification. The writer has to produce a legal archive: the first entry is the uncompressed `mimetype`, then `stack.xml`, `mergedimage.png`, and a thumbnail no larger than 256×256. ZIP entries are read directly. The importer does not extract the archive onto the filesystem, where a hostile path could land outside the file you thought you opened. Budgets are 512 MiB for the archive, the expanded data, and the aggregate pixels. The canvas stops at 32,768 pixels on a side and 64 megapixels.

Unsupported compositing is rejected. An OpenRaster blend this app cannot map does not get silently rewritten to Normal. Extended layer sources that are not PNG are rejected. A quiet "fixed" file is worse than a refusal.

## What landed

OpenRaster import reads pixel layers and groups, offsets including negative offsets, names, visibility, opacity, isolation, and supported blends. Hidden layers stay hidden. PNG layers stay separate. Groups keep their hierarchy. Imported pass-through group opacity is applied to the descendants, with a note, so OpenRaster’s compositing rules still hold. Layer locks can be stored with an Omadesign XML extension. Other applications may ignore that extension. Sixteen-bit PNG channels become 8-bit RGBA, with a note.

Vectors and text in an OpenRaster file become pixels per layer on the way in, when they are not already PNG layers. The common `.ora` is already PNG layers. On the way out, export renders vector artwork separately for each layer. A masked or effected group becomes one pixel layer. Rendered layers are clipped to the document canvas. When a translucent native pass-through group is exported, a note explains that overlapping children may composite differently. Isolated groups are the consistent interchange. Use isolation when the OpenRaster file has to match.

The archive you write includes the required `mimetype` entry first and uncompressed, `stack.xml`, `mergedimage.png`, and the thumbnail. Checks against that archive used Python’s `zipfile`, XML, and Pillow: entry order, nested groups, hidden layers, exact pixel channels, negative offsets, and the required previews. A fixture built independently with Python’s ZIP and PNG primitives was imported the other direction. The reader and the writer are not grading their own homework alone.

GIMP `.xcf` uses the native reader. Pixel layers, groups, names, visibility, opacity, offsets, supported blend modes, and applied layer masks become native layers. Pointer width can be 32-bit or 64-bit. Tiles can be RLE, uncompressed, or zlib. 8-bit RGB, grayscale, and indexed documents are the preferred inputs. Higher precision is reduced to 8-bit RGBA with a note. Live text, layer effects, paths, and floating selections are not reconstructed. An unmapped blend mode displays as Normal. The note is how you know the blend did not survive. Verification used independently encoded fixtures for grouped RLE layers, 64-bit pointers, and zlib tiles, plus a bounded rejection of oversize input.

There is no `.xcf` writer. Export OpenRaster or PSD, then open that in GIMP. Save the `.oma` if you still need editable vectors, live text you set here, or the imported stack in Omadesign’s own form. The `.xcf` you opened is unchanged. Open never writes it.

Headless matches the desktop. `omadesign --inspect artwork.xcf` and `omadesign --convert artwork.oma --output artwork.ora`. Same-file conversion is refused. Notes print to stderr and stay in the `.oma` when the destination is a `.oma`.

## In the hand

Press Ctrl+O and choose the `.xcf`. The tab opens at the file’s dimensions. Groups expand. Names, visibility, opacity, and offsets should match the pixel stack. Masks that were applied come in as masks. Open View → Document conversion notes before you look for the text tool. GIMP text is pixels here. GIMP layer effects are pixels. Paths and floating selections are not in the layer tree as live objects. An unmapped blend will look Normal. The note names that.

Press Ctrl+Shift+S and write a `.oma` beside the `.xcf`. Edit in the `.oma`. New type, press T, is real type. It is not a revival of the GIMP text layer.

To send the stack back, export OpenRaster. GIMP opens `.ora`. You get PNG layers, the stack, the merged preview, and the thumbnail. Or export PSD if the other end is Photoshop or a GIMP workflow that already prefers PSD. Do not look for Save As XCF. It is not there.

If you are starting from Omadesign art and the destination is GIMP, export `.ora` while the groups are still simple. A group with a mask and an effect will land as one pixel layer. Split that work, or accept the bake, and read the note. Isolated groups travel more predictably than a translucent pass-through group. The note on pass-through tells you the overlap may composite differently. Read it before you call the `.ora` wrong.

Dropping a `.xcf` or an `.ora` on the canvas or the welcome screen opens it, the same as Ctrl+O. Place, Ctrl+Shift+P, loads one into the current document when you meant to composite, not to switch files.

## The edge

There is no `.xcf` writer. The reader will not round-trip a GIMP file back onto itself. Live GIMP text, layer effects, paths, and floating selections are not reconstructed on the way in. Export OpenRaster or PSD for the way back. Keep the `.oma` as the master, and keep the original `.xcf` if GIMP still has to edit the live text.

OpenRaster rejects blends and layer payloads it cannot represent. It will not rewrite them to Normal and save.

Press Ctrl+O on the `.xcf`, save a `.oma`, and export `.ora` when GIMP needs the stack.
