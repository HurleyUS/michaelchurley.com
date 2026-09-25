---
id: T108
title: Affinity optional bridge
slug: omadesign-0-5-8-affinity-optional-bridge
excerpt: Affinity files open through the optional converter from setup-affinity-import.sh. Vectors, text, pixels, groups, masks, and artboards can come across. Adjustments and history often do not. The app does not download the converter.
publishedAt: 2026-09-07T01:43:01Z
tags: [omadesign, 0.0.2-alpha, affinity]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-affinity-optional-bridge/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-affinity-optional-bridge/og.png
---

## The habit

Affinity Designer, Photo, and Publisher files are the ones people actually have: `.afdesign`, `.afphoto`, `.afpub`, plus templates and packages. In Affinity the layers are live. Vectors stay vectors, type stays type, adjustments sit in the stack where you can toggle them, and history is a private list of edits. When you have to leave Affinity, the usual advice is to export PDF or SVG first, because almost nothing else reads the native file well.

You would rather use File > Open on the Affinity file and get a layer tree. You also know that "open an Affinity file" in other apps has usually meant a flat PDF preview, or a converter that half works and then fails on the one Photo document that matters. A useful importer is optional and partial, and it tells you what it dropped.

## The constraint

The Omadesign binary is MIT licensed. The Affinity converter sits outside that license. Inkscape's converter and the files under `scripts/affinity-bridge/` are GPL programs. Setup has to preserve their source and their license, and a distribution that bundles them has to meet those obligations. The native application does not fold the converter into the MIT binary.

Import does not download software. You run `./scripts/setup-affinity-import.sh` once, and the script installs a pinned external converter. It needs Inkscape's Python modules plus Python zstandard, Pillow, and NumPy. If those are missing, the bridge is missing. Open will not fetch them in the background the first time you click an `.afdesign`. That is the same rule as the rest of the app: the binary you installed is the binary, and extra readers under another license are a step you take on purpose.

There is no native writer for `.af`, `.afdesign`, `.afphoto`, `.afpub`, or the other Affinity suffixes. The way back is PDF, SVG, or PSD. The bridge only imports, and the import is partial. Adjustments, live effects, publishing structures, custom profiles, and edit history usually do not survive, and the conversion notes have to say so for the file in front of you. Multi-spread documents can fail. Keep the Affinity original.

## What landed

After setup, File > Open reads `.afdesign`, `.afphoto`, `.afpub`, `.aftemplate`, and `.afpackage` through the converter. Supported vectors, text, pixel layers, groups, visibility, opacity, masks, and artboards come across via SVG into a tab at the file's own dimensions. The source file is left alone. Save writes a `.oma`, and the notes stay in it.

The converter also knows the newer `.af` container through upstream Affinity V3 work, but I have not verified a real unified `.af` file in this change. Legacy Designer test files have been converted, and real `.afdesign` and `.afphoto` files have been exercised. That does not establish general fidelity for `.afpub`, `.aftemplate`, `.afpackage`, or a unified `.af`. Open will try the supported path, and the notes and the layer list tell you how it went for your file. If a template or package comes in wrong, treat it as a failed import. Do not ship a quietly flattened result.

A real Photo document hit a missing format-9 raster decoder. The separate GPL compatibility module now reads its floating-point channel tiles, including constant-one alpha tiles. That file now produces seven image objects with no conversion exceptions, where it used to produce four. Channels become 8-bit RGBA, values outside the 0 to 1 range are clipped, and custom profile transforms are not applied. The import report says all of this. The conversion does not preserve HDR, so if the point of the Photo file was its high range, keep using the Affinity original for that.

Affinity resource files are not layered documents. `.afassets`, `.afbrushes`, `.afstyles`, `.afpalette`, and `.afmacro` will not open as a poster. An `.afbook` references chapter documents. An `.afpackage` is a document plus resource folders, and you can't assume it is a ZIP you can rename. Linked resources still have to be reachable during conversion. If a package links to a missing disk, the converter converts only the part it can see.

Headless mode uses the same bridge. `omadesign --inspect artwork.afdesign` writes JSON with the canvas, the pages, the layer metadata, and the import notes. `omadesign --convert artwork.afphoto --output artwork.oma` writes the `.oma` and prints notes to stderr. It refuses to convert a file onto itself.

Place (Ctrl+Shift+P) can load an Affinity file into the current document once the bridge is installed. Nested layers and masks travel together, the same as any other place. Dropping an Affinity document on the canvas or the welcome screen opens it, because layered documents take the open path.

The file manager can offer Open With for Affinity documents without changing the default application you already set. Affinity can stay the double-click app, and Omadesign handles the file when you send it there.

## In the hand

From the Omadesign source tree, run the setup once:

```sh
./scripts/setup-affinity-import.sh
```

You need Inkscape's Python modules, plus zstandard, Pillow, and NumPy. The script pins the converter and does not check for a newer one on the next open. If you are bundling the result, read the license files it preserves. The application you draw in stays MIT, and the bridge stays GPL.

Press Ctrl+O and choose the `.afdesign` or `.afphoto`. The tab opens at the original size. Check groups, names, visibility, opacity, and masks. Artboards should come in as artboards when the converter returned them. Press T on a text object only after you confirm the text came across as text, because some complex text in other formats becomes outlines. Check the layer first, then the notes.

Open View > Document conversion notes. Adjustments and history will often be listed as dropped. A live filter you used every day in Affinity Photo is probably not live here. What you have is the pixels or the SVG the converter produced. Save a `.oma` beside the Affinity file with Ctrl+Shift+S, and do not overwrite the `.afphoto`.

If the document is from Publisher, or is a template or a package, open it knowing it has been tested less. Read the notes. If the result is wrong, export PDF or SVG from Affinity and open that instead. PDF import is native and does not need this script. When a multi-spread file fails, the failure should show up in the notes, so you don't mistake a cropped first page for the whole job.

To leave again, export PDF, SVG, or PSD from the `.oma`. There is no Save As `.afdesign`.

## The edge

The bridge is optional, and Open will not download it. Without `setup-affinity-import.sh`, the MIT binary has no hidden fallback reader for Affinity files. With the bridge, the import is still partial, and there is no native Affinity writer on the way out.
