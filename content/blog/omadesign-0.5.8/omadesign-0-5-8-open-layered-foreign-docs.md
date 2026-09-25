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

Double-click a PSD and Photoshop opens it at its saved pixel size, with the layer names you wrote. Open an `.ai` and Illustrator builds the artboards from the file. Open an `.afdesign` and Affinity shows the spreads. GIMP opens `.xcf` the same way. The expectation is old and fair: opening gives you a document, at the size the file already has, in its own window. The original on disk stays the original until you choose Save or Save As.

The other expectation is the one that hurts. Opening a file in a different application often gives you a flat preview, a single page, or a dialog that wants to convert in place and write back. You wanted to look at the layers, and instead you got a new file you didn't name, or the same file with another application's fingerprints on it.

## The constraint

Omadesign opens files into its own layer tree. It's one binary with no helper app to keep running, apart from the optional Affinity converter you install yourself, and Ghostscript if you're coming from old PostScript. The import has to land at the file's own dimensions. A 3300 by 5100 poster shouldn't arrive scaled to a default artboard because a new-document dialog won.

The source file stays put. Imported work opens unsaved, so the first Save asks for a `.oma`, which becomes the master from then on. The PSD, PDF or `.xcf` stays where you opened it. Large imports run off the frame loop so the window doesn't freeze while channels decode. A format in the Open list isn't a promise that every feature from its home application survives. The conversion notes record the losses. Opening is still one step: File > Open, or Ctrl+O.

Affinity support sits behind an optional bridge because the converter is a separate, GPL-licensed tool, and the Rust application stays MIT. Open can offer the Affinity file types, but it can't download the converter for you. GIMP text and effects come across as pixels, and there's no `.xcf` writer, so you export OpenRaster or PSD when the file needs to go back to GIMP. I'd rather you learn those limits the first time you use the command.

## What landed

File > Open reads layered PSD and PSB, GIMP `.xcf`, every page of a PDF, PDF-compatible Illustrator files, OpenRaster, SVG and SVGZ, and supported Affinity documents through the optional bridge. Each import opens in its own tab at the original dimensions, with the pages, artboards or canvas the file already had. The coordinate system isn't rewritten to fit the screen.

Saving uses `.oma` and leaves the source file alone. Ctrl+S on an unsaved import asks for a destination, and Ctrl+Shift+S is Save As when you want to choose a name. The foreign file is never what gets overwritten. Conversion notes travel with the working document. View > Document conversion notes lists what was unsupported or converted, and the notes stay in the `.oma` when you save.

What comes across depends on the file type, though the command is always the same.

A PSD or PSB goes through the native layered reader. Groups, names, placement, visibility, opacity, blend modes, pixel masks and supported Normal color overlays can survive. Text and smart objects arrive as the pixel layers Photoshop saved, and the Type tool can't rebuild live text from those pixels.

A PDF brings in every page as an artboard, with paths, supported text, images and optional-content layers. A PDF-compatible `.ai` comes in as that PDF artwork, and private Illustrator data isn't reconstructed. If the PDF-compatible pages are blank, the tab is blank, and the note explains why. Older PostScript `.ai` files, plus EPS and PS, go through Ghostscript to PDF and then through the PDF importer. Ghostscript has to be installed, and the process uses a private temporary directory. If Ghostscript is missing, you get setup guidance instead of a made-up reader.

OpenRaster opens as pixel layers and groups from `stack.xml`. SVG and SVGZ open with objects, names, transforms, text, images and the supported masks. Scripts, animation and foreign content in an SVG are left out.

GIMP `.xcf` opens through a native reader. Pixel layers, groups, names, visibility, opacity, offsets, supported blend modes and applied layer masks become native layers. Live text, layer effects, paths and floating selections aren't reconstructed, and high bit depth becomes 8-bit RGBA. There's no `.xcf` writer, so export OpenRaster or PSD for the trip back and keep the `.oma` as the master.

Affinity `.afdesign`, `.afphoto`, `.afpub`, `.aftemplate` and `.afpackage` files need the optional converter from `setup-affinity-import.sh`. Vectors, text, pixels, groups, visibility, opacity, masks and artboards can come across via SVG. Adjustments and history often don't. The file manager can offer Open With for native and Affinity documents without changing the default apps you already set.

Camera RAW is a different kind of open. Those files go to Photo, not a layered document tab, so don't expect a PSD-style layer stack from a NEF.

## In the hand

Press Ctrl+O and choose a PSD, PDF, `.ai`, `.ora`, `.svg`, `.xcf` or Affinity file. The tab opens at that file's size. In the layer list, groups expand, names match the file where the reader had them, and hidden layers stay hidden. A multi-page PDF shows one artboard per page, not just page one.

Open View > Document conversion notes before you trust a text layer or an effect. If a note says the text came in as pixels, it's pixels. Edit the pixels, or retype it with T as a new text object. There's no hidden live-type switch.

Press Ctrl+Shift+S and save a `.oma` next to the source under a different name. The source file's timestamp doesn't change. Reopen the `.oma` later and the notes are still there, and the source is still a file you can hand back to Photoshop, Illustrator, GIMP or Affinity.

If an Affinity file doesn't open usefully, run `./scripts/setup-affinity-import.sh` once and open it again. The script installs the pinned converter, since import never downloads software on its own. If an old `.ai` or an EPS fails, install Ghostscript and try again. Encrypted PDFs have to be re-saved with password protection removed. The importer won't ask for a password and then write a decrypted copy over the original.

Dropping a layered document on the canvas or the welcome screen opens it the same way. Use Ctrl+O when you want the file dialog and a specific path.

## The edge

Open never writes back to the source. The PSD, PSB, PDF, `.ai`, `.xcf`, OpenRaster, SVG or Affinity file stays as it was, and the tab is unsaved work until you save a `.oma`. Being in the Open list doesn't mean full compatibility with the original application. The notes record the gaps, and the source is what you keep when a note says something was lost.
