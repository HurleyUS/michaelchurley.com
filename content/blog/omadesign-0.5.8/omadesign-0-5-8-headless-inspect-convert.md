---
id: T111
title: Headless inspect convert
slug: omadesign-0-5-8-headless-inspect-convert
excerpt: omadesign --inspect reports a PSD, Affinity file, XCF, NEF, or .omaphoto as JSON. --convert writes .oma, SVG, PNG, JPEG, PSD, PSB, PDF, or OpenRaster. The CLI uses the desktop readers. Converting a file onto itself is refused.
tags: [omadesign, 0.5.8, cli]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-headless-inspect-convert/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-headless-inspect-convert/og.png
---

## The habit

You already batch this work. ImageMagick for rasters. A Photoshop droplet when you still had a Mac in the corner. `magick` or `convert` in a shell loop, with a careful output name so you never clobber the source. Affinity and Illustrator are worse in a terminal. They want a GUI, or a script host that is really the GUI with the screen off. You want one binary you already installed, the same one that opens the file in the window, callable from a script.

Inspect is the dry run. You want canvas size, page count, layer names, and the import notes before you spend the convert. Convert is the write. A different path. Notes on the error stream so a log can keep them. A hard stop if the output path is the input path.

## The constraint

The command line uses the same readers and writers as the desktop. A PSD that opens in the window has to inspect as that PSD. A second headless codec that "mostly" matches will drift, and the drift will show up at two in the morning in a batch. One binary means the `omadesign` on your `PATH` is the studio. `~/.local` is where the installer puts it. You do not install a server edition.

Conversion prints notes to stderr and writes a separate destination file. Same-file conversion is refused. The original is protected by that refusal, not by a hope that you typed a different name. General source size stops at 512 MiB. Individual readers add their own limits: object counts, pixel budgets, decompression, process time. A file the window would reject, the terminal rejects.

Inspect writes JSON. Dimensions, pages, layer metadata, import notes. You can read it with the tools you already use on JSON. You do not get a pretty brochure on stdout and the real answer hidden in a GUI toast.

The desktop still owns the brush. Headless is open, inspect, convert, and the plugin batch commands. It is not a second studio with its own file format. Output formats are the ones the writers already know.

## What landed

`--inspect` reads the file and writes JSON. The useful set in the short claim is a PSD, an Affinity file, an XCF, a NEF, and a `.omaphoto`. The same flag works on the other files the desktop opens, because the readers are shared. Affinity inspect needs the optional bridge installed, the same as File → Open. A NEF inspect includes camera metadata, source dimensions, precision, and saved development settings when a sidecar applies. A `.omaphoto` inspect is the settings file talking about its original.

```sh
omadesign --inspect artwork.afdesign
omadesign --inspect artwork.psd
omadesign --inspect artwork.xcf
omadesign --inspect photograph.NEF
omadesign --inspect photograph.NEF.omaphoto
```

`--convert` takes an input and `--output`. Headless document outputs are `.oma`, `.svg`, `.png`, `.jpg` or `.jpeg`, `.psd`, `.psb`, `.pdf`, and `.ora`. Notes go to stderr. The destination is a new file.

```sh
omadesign --convert artwork.afphoto --output artwork.oma
omadesign --convert artwork.oma --output artwork.psd
omadesign --convert artwork.oma --output artwork.pdf
omadesign --convert artwork.oma --output artwork.ora
omadesign --convert photograph.NEF.omaphoto --output developed.tif
omadesign --convert photograph.dng --output photograph.tif
```

RAW conversion is the photo pipeline, covered on its own. The command is the same `--convert`. TIFF and PNG from a raw file are 16-bit. JPEG is 8-bit. A raw file converted to a document format becomes an 8-bit pixel layer. Saved `.omaphoto` settings apply automatically when the sidecar matches. The camera file is not overwritten.

A convert onto the same path is refused. `omadesign --convert artwork.psd --output artwork.psd` does not run. Pick `artwork.oma` or `artwork.pdf`. The refusal is the guardrail. A script bug should fail the file, not replace a client’s PSD with a partial write.

Import notes in the JSON are the same notes as View → Document conversion notes. Stderr on convert is the same list. A batch can grep stderr, and a person can open the `.oma` and use the menu. If the note says Photoshop text came in as pixels, the `.oma` has pixels. The terminal did not get a secret better reader.

Source files stay put. Open in the GUI does not write back, and convert does not write back to the input. The 512 MiB general cap sits in front of the per-reader caps. A PSD also stops at 64 megapixels, 512 MiB of decoded working set, 8,192 layers, and 64 group levels. OpenRaster stops at its archive and canvas budgets. RAW stops at 64 megapixels, 512 MiB input, and a 120 second cooperative cancel inside the decoder. The terminal reports the failure. It does not hang the session the way a stuck dialog would.

Plugin runs are a different flag, `--plugin`, with `--command`, `--input`, and `--output`. They use the same "do not overwrite an existing output" rule. Inspect and convert are the codec tools. The plugin runner is for actions you installed. You do not need a plugin to turn a PSD into an `.oma`.

## In the hand

Confirm the binary. `omadesign --inspect` on a small PSD should print JSON and exit. Look for the canvas size and the layer names you remember. Open the same PSD with Ctrl+O. The layer list should match the JSON. If Affinity inspect fails immediately, run `./scripts/setup-affinity-import.sh` and try again. The CLI does not download the bridge either.

Convert one file to a new name:

```sh
omadesign --convert artwork.psd --output artwork.oma
```

Read stderr. Then open `artwork.oma` and check View → Document conversion notes. Save nothing if you are only looking. The source `artwork.psd` is still the source.

Loop a folder by giving each file its own output path. Keep the extension you actually want. `.oma` for a master you will edit. `.png` or `.jpg` for a flat. `.pdf` for pages. `.psd` for a layered handoff. `.ora` for GIMP. Do not build the output path by replacing nothing. If input and output resolve to the same file, the command refuses it. That includes a relative path and an absolute path that are the same inode. Point `--output` somewhere else.

For a photograph, inspect the NEF first. Then convert to TIFF if you want the 16-bit develop. The camera file’s checksum should match before and after. The command never writes the NEF.

## The edge

Same-file conversion is refused. `--convert` will not write the destination on top of the source. The original stays the original. Notes go to stderr and into the document. They are not a reason to overwrite the file they describe.

The CLI will not grow a codec the window does not have. No `.ai` writer, no `.af` writer, no `.xcf` writer. The outputs are `.oma`, `.svg`, `.png`, `.jpg`, `.psd`, `.psb`, `.pdf`, and `.ora`, plus the RAW TIFF, PNG, and JPEG path.

Run `omadesign --inspect` on the file, read the JSON, then `--convert` to a different path.
