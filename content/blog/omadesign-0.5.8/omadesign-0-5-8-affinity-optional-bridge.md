---
id: T108
title: Affinity optional bridge
slug: omadesign-0-5-8-affinity-optional-bridge
excerpt: Affinity files open through the optional converter from setup-affinity-import.sh. Vectors, text, pixels, groups, masks, and artboards can come across. Adjustments and history often do not. The app does not download the converter.
publishedAt: 2026-09-07T01:43:01Z
tags: [omadesign, 0.5.8, affinity]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-affinity-optional-bridge/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-affinity-optional-bridge/og.png
---

## The habit

Affinity Designer, Photo, and Publisher are the files people actually have: `.afdesign`, `.afphoto`, `.afpub`, plus templates and packages. You open them in Affinity and the layers are live. Vectors are vectors. Type is type. Adjustments sit in the stack and can be toggled. History is a private list of edits. When you have to leave Affinity, the usual advice is to export PDF or SVG first, because almost nothing else reads the native file well.

You would rather use File → Open on the Affinity file and get a layer tree. You also know that "open an Affinity file" in another app has meant a flat PDF preview, or a converter that half-works and then fails on the one Photo document that matters. The honest version is optional, partial, and loud about what it dropped.

## The constraint

The Omadesign binary is MIT. The Affinity converter is not part of that license story. Inkscape’s converter and the files under `scripts/affinity-bridge/` are GPL programs. Setup has to preserve their source and their license. A distribution that bundles them has to meet those obligations. The native application does not swallow the converter into the MIT binary and hope nobody notices.

Import does not download software. You run `./scripts/setup-affinity-import.sh` once. The script installs a pinned external converter. Inkscape’s Python modules are required, plus Python zstandard, Pillow, and NumPy. If those are missing, the bridge is missing. Open will not fetch them in the background the first time you click an `.afdesign`. That is the same rule as the rest of the app. The binary you installed is the binary. Extra readers that carry another license are a step you take on purpose.

There is no native writer for `.af`, `.afdesign`, `.afphoto`, `.afpub`, or the other Affinity suffixes. The way back is PDF, SVG, or PSD. The bridge is an importer. Partial means partial. Adjustments, live effects, publishing structures, custom profiles, and edit history are the things that usually do not survive. The conversion notes have to say so for the file in front of you. Multi-spread documents can fail. You keep the Affinity original.

## What landed

After setup, File → Open reads `.afdesign`, `.afphoto`, `.afpub`, `.aftemplate`, and `.afpackage` through the converter. Supported vectors, text, pixel layers, groups, visibility, opacity, masks, and artboards come across via SVG, into a tab at the file’s own dimensions. The source file is preserved. Save writes a `.oma`, and the notes stay in it.

The converter also knows the newer `.af` container through upstream Affinity V3 work. No real unified `.af` fixture has been verified in this change. Legacy Designer fixtures have been converted. Real `.afdesign` and `.afphoto` files have been exercised. That does not establish general fidelity for `.afpub`, `.aftemplate`, `.afpackage`, or a unified `.af`. Open will try the supported path. The notes and the layer list are the evidence for your file. A template or a package that misses is a miss, not a quiet flatten you should ship.

A real Photo document hit a missing format-9 raster decoder. The separate GPL compatibility module now reads its floating-point channel tiles, including constant-one alpha tiles. That file produces seven image objects, with no conversion exceptions, where it used to produce four. Channels become 8-bit RGBA. Values outside 0–1 are clipped. Custom profile transforms are not applied. The import report says so. This is not an HDR-preserving conversion. If the Photo file’s point was the high range, the Affinity original is still the file that has it.

Affinity resource files are not layered documents. `.afassets`, `.afbrushes`, `.afstyles`, `.afpalette`, and `.afmacro` will not open as a poster. `.afbook` references chapter documents. An `.afpackage` is a document plus resource folders, not necessarily a ZIP you can rename. Linked resources still have to be available on the conversion path. A package whose links point at a missing disk will convert the part it can see.

Headless uses the same bridge. `omadesign --inspect artwork.afdesign` writes JSON with the canvas, the pages, the layer metadata, and the import notes. `omadesign --convert artwork.afphoto --output artwork.oma` writes the `.oma` and prints notes to stderr. Same-file conversion is refused.

Place, Ctrl+Shift+P, can load an Affinity file into the current document once the bridge is installed. Nested layers and masks travel together, same as any other place. Dropping an Affinity document on the canvas or the welcome screen opens it, because a layered document takes the open path.

The file manager can offer Open With for Affinity documents without changing the default application you already set. Affinity can remain the double-click app. Omadesign is there when you send the file to it.

## In the hand

From the Omadesign source tree, run the setup once:

```sh
./scripts/setup-affinity-import.sh
```

You need Inkscape’s Python modules, plus zstandard, Pillow, and NumPy. The script pins the converter. It does not phone out for a newer one on the next open. Read the license files it preserves if you are bundling the result. The application you draw in stays MIT. The bridge stays GPL.

Press Ctrl+O. Choose the `.afdesign` or `.afphoto`. The tab opens at the original size. Check groups, names, visibility, opacity, and masks. Artboards should be artboards when the converter returned them. Press T on a text object only after you confirm the text came across as text. Some complex text on other formats becomes outlines. Believe the layer, then believe the notes.

Open View → Document conversion notes. Adjustments and history will often be on that list as dropped. A live filter you used every day in Affinity Photo is probably not a live filter here. The pixels or the SVG the converter produced are what you have. Save a `.oma` with Ctrl+Shift+S beside the Affinity file. Do not overwrite the `.afphoto`.

If the document is Publisher, a template, or a package, open it knowing the verification bar is lower. Look at the notes. If the result is wrong, export PDF or SVG from Affinity and open that. PDF import is native. It does not need this script. Multi-spread files that fail should fail in the notes, not as a cropped first page you mistake for the whole job.

To leave again, export PDF, SVG, or PSD from the `.oma`. There is no Save As `.afdesign`.

## The edge

The bridge is optional, and Open will not download it. Without `setup-affinity-import.sh`, an Affinity file does not grow a hidden fallback reader inside the MIT binary. With the bridge, the import is still partial. Adjustments, live effects, publishing structures, custom profiles, and edit history are commonly dropped. There is no native Affinity writer on the way out.

Keep the `.afdesign` or `.afphoto`. Run `./scripts/setup-affinity-import.sh` once, then press Ctrl+O on the Affinity file and read the conversion notes.
