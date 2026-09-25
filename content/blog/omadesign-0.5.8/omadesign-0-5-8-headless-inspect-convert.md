---
id: T111
title: Headless inspect convert
slug: omadesign-0-5-8-headless-inspect-convert
excerpt: omadesign --inspect reports a PSD, Affinity file, XCF, NEF, or .omaphoto as JSON. --convert writes .oma, SVG, PNG, JPEG, PSD, PSB, PDF, or OpenRaster. The CLI uses the desktop readers. Converting a file onto itself is refused.
publishedAt: 2026-09-07T01:45:01Z
tags: [omadesign, 0.0.2-alpha, cli]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-headless-inspect-convert/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-headless-inspect-convert/og.png
---

## The habit

You probably batch this kind of work already. ImageMagick for rasters. A Photoshop droplet back when there was still a Mac in the corner. `magick` or `convert` in a shell loop, with careful output names so you never overwrite the source. Affinity and Illustrator are worse in a terminal. They want a GUI, or a script host that is the GUI with the screen off. What you want is the binary you already installed, the one that opens the file in the window, callable from a script.

Inspect is the dry run. Before you convert, you want the canvas size, page count, layer names and import notes. Convert does the write, to a different path, with notes on the error stream so a log can keep them, and a hard stop if the output path is the input path.

## The constraint

The command line uses the same readers and writers as the desktop app. A PSD that opens in the window has to inspect as the same PSD. A second headless codec that mostly matches will drift, and the drift will show up at two in the morning in the middle of a batch. With one binary, the `omadesign` on your `PATH` is the studio. The installer puts it in `~/.local`, and there's no separate server edition.

Conversion prints notes to stderr and writes a separate destination file. Same-file conversion is refused, and that refusal is what protects the original, instead of relying on you typing a different name. The general source size limit is 512 MiB, and each reader adds its own limits on object counts, pixel budgets, decompression and process time. A file the window would reject, the terminal rejects too.

Inspect writes JSON with dimensions, pages, layer metadata and import notes, so you can read it with whatever tools you already use for JSON. The full answer is on stdout, not in a GUI toast.

The desktop still owns the brushes. Headless covers open, inspect, convert and the plugin batch commands. It isn't a second studio with its own file format, and its output formats are the ones the existing writers know.

## What landed

`--inspect` reads a file and writes JSON. The short list of useful inputs is a PSD, an Affinity file, an XCF, a NEF and a `.omaphoto`, and the flag works on anything else the desktop opens because the readers are shared. Affinity inspect needs the optional bridge installed, the same as File > Open. A NEF inspect includes camera metadata, source dimensions, precision and saved development settings when a sidecar applies. A `.omaphoto` inspect describes the settings file and its original.

```sh
omadesign --inspect artwork.afdesign
omadesign --inspect artwork.psd
omadesign --inspect artwork.xcf
omadesign --inspect photograph.NEF
omadesign --inspect photograph.NEF.omaphoto
```

`--convert` takes an input and an `--output`. Headless document outputs are `.oma`, `.svg`, `.png`, `.jpg` or `.jpeg`, `.psd`, `.psb`, `.pdf` and `.ora`. Notes go to stderr, and the destination is always a new file.

```sh
omadesign --convert artwork.afphoto --output artwork.oma
omadesign --convert artwork.oma --output artwork.psd
omadesign --convert artwork.oma --output artwork.pdf
omadesign --convert artwork.oma --output artwork.ora
omadesign --convert photograph.NEF.omaphoto --output developed.tif
omadesign --convert photograph.dng --output photograph.tif
```

RAW conversion uses the photo pipeline, which has its own post, through the same `--convert` command. TIFF and PNG from a raw file are 16-bit, and JPEG is 8-bit. A raw file converted to a document format becomes an 8-bit pixel layer. Saved `.omaphoto` settings apply automatically when the sidecar matches, and the camera file isn't overwritten.

Converting onto the same path is refused, so `omadesign --convert artwork.psd --output artwork.psd` won't run. Pick `artwork.oma` or `artwork.pdf` instead. If a script has a bug, the file should fail. It shouldn't replace a client's PSD with a partial write.

The import notes in the JSON are the same notes shown in View > Document conversion notes, and stderr on convert prints the same list. A batch can grep stderr, and a person can open the `.oma` and use the menu. If a note says Photoshop text came in as pixels, the `.oma` has pixels. The terminal doesn't have a better reader than the window.

Source files are never modified. Opening in the GUI doesn't write back, and neither does convert. The 512 MiB general cap applies before the per-reader caps. A PSD also stops at 64 megapixels, 512 MiB of decoded working set, 8,192 layers and 64 group levels. OpenRaster stops at its archive and canvas budgets. RAW stops at 64 megapixels, 512 MiB of input and a 120 second cooperative cancel inside the decoder. The terminal reports the failure instead of hanging the session the way a stuck dialog would.

Plugin runs use a different flag, `--plugin`, with `--command`, `--input` and `--output`, and follow the same rule of never overwriting an existing output. Inspect and convert are the codec tools, and the plugin runner is for actions you installed. You don't need a plugin to turn a PSD into an `.oma`.

## In the hand

First confirm the binary works. `omadesign --inspect` on a small PSD should print JSON and exit. Check for the canvas size and the layer names you expect. Open the same PSD with Ctrl+O, and the layer list should match the JSON. If Affinity inspect fails right away, run `./scripts/setup-affinity-import.sh` and try again. The CLI doesn't download the bridge either.

Convert one file to a new name:

```sh
omadesign --convert artwork.psd --output artwork.oma
```

Read stderr, then open `artwork.oma` and check View > Document conversion notes. If you're only looking, don't save anything. `artwork.psd` is still the source.

To loop over a folder, give each file its own output path with the extension you want: `.oma` for a master you'll edit, `.png` or `.jpg` for a flat image, `.pdf` for pages, `.psd` for a layered handoff and `.ora` for GIMP. Make sure the output name is actually different. If input and output resolve to the same file, the command refuses, including when a relative path and an absolute path point to the same inode. Point `--output` somewhere else.

For a photograph, inspect the NEF first, then convert to TIFF if you want the 16-bit develop. The camera file's checksum should be the same before and after, because the command never writes the NEF.

## The edge

`--convert` won't write the destination on top of the source, so the original stays the original. Notes go to stderr and into the document. They never justify overwriting the file they describe.

The CLI won't add a codec the window doesn't have. There's no `.ai`, `.af` or `.xcf` writer. The outputs are `.oma`, `.svg`, `.png`, `.jpg`, `.psd`, `.psb`, `.pdf` and `.ora`, plus TIFF, PNG and JPEG from RAW.
