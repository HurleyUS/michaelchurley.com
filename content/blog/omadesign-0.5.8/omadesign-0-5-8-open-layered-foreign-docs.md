---
id: T102
title: Open layered foreign docs
slug: omadesign-0-5-8-open-layered-foreign-docs
excerpt: File → Open reads layered PSD, PSB, XCF, every PDF page, PDF-compatible AI, OpenRaster, SVG, and Affinity via the optional bridge. Each file opens in its own tab at its size. Save writes a .oma and leaves the source.
publishedAt: 2026-09-07T01:38:01Z
tags: [omadesign, 0.0.2-alpha, import]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-open-layered-foreign-docs/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-open-layered-foreign-docs/og.png
---

## The habit

You double-click a PSD and Photoshop opens it at the pixel size it was saved, with the layer names you wrote. You open an `.ai` and Illustrator builds the artboards from the file. You open an `.afdesign` and Affinity shows the spreads. GIMP opens `.xcf` the same way. The expectation is old and fair. Open means a document, at the size the file already has, in a window of its own. The original on disk stays the original until you Save or Save As on purpose.

The other expectation is the one that hurts. Open in a different application often means a flat preview, a single page, or a dialog that wants to convert in place and write back. You wanted to look at the layers. You got a new file you did not name, or you got the same file with a different application’s fingerprints on it.

## The constraint

Omadesign opens into its own layer tree. One binary, no helper app you have to keep running, except the optional Affinity converter you install yourself and Ghostscript if you are coming from old PostScript. The import has to land at the file’s own dimensions. A poster that is 3300 by 5100 should not arrive scaled to a default artboard because the new document dialog won.

The source file stays put. Imported work opens unsaved, so the first Save asks for a `.oma`. That is the master from here. The PSD, the PDF, the `.xcf` remain where you opened them. Large imports run off the frame loop so the window does not freeze while channels decode. A format listed in Open is not a promise that every feature of that application survived. The notes carry the losses. The open itself is still one gesture: File → Open, or Ctrl+O.

Affinity is behind an optional bridge because the converter is a separate, GPL-licensed tool. The Rust application stays MIT. Open can offer the Affinity suffixes. It cannot download the converter for you. GIMP text and effects come across as pixels, and there is no `.xcf` writer. You export OpenRaster or PSD when the way back is GIMP. That boundary belongs to the open, so you hear it on the day you use the command.

## What landed

File → Open reads layered PSD and PSB, GIMP `.xcf`, every page of a PDF, PDF-compatible Illustrator, OpenRaster, SVG and SVGZ, and supported Affinity documents through the optional bridge. Each import opens in its own tab at the original dimensions. You get the pages, the artboards, or the canvas the file already had. You do not get a fit-to-screen rewrite of the coordinate system.

Save uses `.oma` and preserves the source file. Ctrl+S on an unsaved import asks for a destination. Ctrl+Shift+S is Save As when you want a name. The foreign file is not the thing that gets overwritten. Conversion notes travel with the working document. View → Document conversion notes lists what was unsupported or converted. Save the `.oma` and the notes stay in it.

What comes across depends on the type, and the open is still the same command.

A PSD or PSB comes through the native layered reader. Groups, names, placement, visibility, opacity, blends, pixel masks, and supported Normal color overlays can survive. Text and smart objects arrive as the pixel layers Photoshop already saved. The type tool will not reconstruct a live text layer from those pixels.

A PDF brings every page in as artboards, with paths, supported text, images, and optional-content layers. A PDF-compatible `.ai` is that PDF artwork. Private Illustrator data is not reconstructed. If the PDF-compatible pages are blank, the tab is blank, and the note says why. Older PostScript `.ai`, plus EPS and PS, go through Ghostscript to PDF and then through the PDF importer. Ghostscript has to be installed. The process uses a private temporary directory. A missing Ghostscript produces setup guidance. It does not invent a reader.

OpenRaster opens as pixel layers and groups from `stack.xml`. SVG and SVGZ open with objects, names, transforms, text, images, and the supported masks. Scripts, animation, and foreign content in an SVG stay out.

GIMP `.xcf` opens through a native reader. Pixel layers, groups, names, visibility, opacity, offsets, supported blends, and applied layer masks become native layers. Live text, layer effects, paths, and floating selections are not reconstructed. High bit depth becomes 8-bit RGBA. There is no `.xcf` writer. Export OpenRaster or PSD for the trip back, and keep the `.oma` as the master.

Affinity `.afdesign`, `.afphoto`, `.afpub`, `.aftemplate`, and `.afpackage` need the optional converter from `setup-affinity-import.sh`. Vectors, text, pixels, groups, visibility, opacity, masks, and artboards can come across via SVG. Adjustments and history often do not. The file manager can offer Open With for native and Affinity documents without changing the default apps you already set.

Camera RAW is a different open. Those files go to Photo. They are not a layered document tab. Mentioned here so you do not wait for a PSD-style layer stack from a NEF.

## In the hand

Press Ctrl+O. Choose the PSD, the PDF, the `.ai`, the `.ora`, the `.svg`, the `.xcf`, or the Affinity file. The tab opens at that file’s size. Look at the layer list. Groups expand. Names are the names from the file when the reader had them. Hidden layers stay hidden. A multi-page PDF shows an artboard per page, not page one alone.

Open View → Document conversion notes before you trust a text layer or an effect. If the note says the text came in as pixels, it came in as pixels. Edit the pixels, or retype with T on a new text object. Do not hunt for a hidden live-type switch.

Press Ctrl+Shift+S. Write a `.oma` beside the source, with a different name. The source file’s timestamp stays. Reopen the `.oma` later. The notes are still there. The source is still the file you can hand back to Photoshop, Illustrator, GIMP, or Affinity.

If an Affinity file does nothing useful, run `./scripts/setup-affinity-import.sh` once, then Open again. The script installs the pinned converter. Import does not download software on its own. If an old `.ai` or an EPS fails, install Ghostscript and Open again. Encrypted PDFs have to be saved again with the password protection removed. The importer will not ask you for a password and then write a decrypted twin over the original.

Drop does the same open when you drop a layered document on the canvas or the welcome screen. Ctrl+O is the command when you want the file dialog and a specific path.

## The edge

Open does not write back to the source. The PSD, PSB, PDF, `.ai`, `.xcf`, OpenRaster, SVG, and Affinity file stay as they were. The tab is unsaved work until you save a `.oma`. A format in the Open list is not full application compatibility. Notes record the gap. The source is what you keep when a note says something was lost.

Press Ctrl+O, open the foreign file, then Ctrl+Shift+S to a new `.oma`.
