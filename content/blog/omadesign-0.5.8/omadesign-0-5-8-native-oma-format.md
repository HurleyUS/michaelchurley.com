---
id: T101
title: Native oma format
slug: omadesign-0-5-8-native-oma-format
excerpt: A .oma is JSON, PNG-packed rasters, and a motion clip in one file. Version 5 carries frames, auto-layout, constraints, and opt-in cloud metadata. Save imports as .oma to keep the editable document and the conversion notes.
publishedAt: 2026-09-15T23:39:15Z
tags: [omadesign, 0.5.0, oma]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-native-oma-format/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-native-oma-format/og.png
---

## The habit

In Illustrator, the file you trust is an `.ai`. In Photoshop it's a `.psd` or `.psb`, and in Affinity it's `.afdesign`, `.afphoto` or `.afpub`. Each is a package its own application understands fully and every other application understands halfway. You save because the saved file is the document, and you export to hand something to someone else. When a feature is new, an older build of the same app sometimes opens the file and quietly drops what it doesn't recognize.

You also end up with sidecars you didn't ask for: a thumbnail cache, a lock file, a recovered swap. The real document is the one the app opens the next day with type still live, layers still named and pixels still pixels. If you move files around with `cp` and `git`, that document has to be a single file you can name.

## The constraint

Omadesign is one binary, and the working document is one `.oma`. Undo works in single steps on the artwork, and the file has to round-trip all of it: groups, vectors, text, pixels, masks, effects, pages, layout frames, comments and import notes. No service has to answer before the file opens. Cloud metadata can live in the file, but cloud stays opt-in, and the document on disk is still the document.

Rasters are packed as PNG inside the `.oma`, so a pixel layer survives a save without a sibling `.png` you have to remember. Motion lives in the same file as a clip, so a poster and its animation can't be lost separately. The structure around them is JSON, which you can inspect. Headless `--inspect` writes JSON with the canvas size, pages, layer metadata and import notes. I wanted the file to be readable by design.

Older builds have to refuse a file that uses a structure they would damage. Opening it silently and throwing away frames or an object mask is worse than refusing. The version field is how the file refuses.

## What landed

A `.oma` is JSON, plus rasters packed as PNG, plus a motion clip. That's the whole working document. Version 5 adds frames, auto-layout, constraints and opt-in cloud metadata, and older apps can't open version 5 files. This build reads formats 1 through 6. A 0.5.0 file already wrote version 5, and the project wrapper stayed at version 5 as later canvas features arrived. Documents saved with the gradient data from 0.5.4 need 0.5.4 or later, and a 0.5.3 build can't read those gradients. Otherwise the open path still accepts every older format this build supports, 1 through 6.

Format 6 is a narrower bump, and the manual spells it out. Documents that use object masks, or inside and outside strokes, save as `.oma` format 6, so an older version can't open the file and silently remove those features. Documents that don't use them keep format 5 compatibility. The version only goes up when a quiet strip would destroy work.

Save imported work as `.oma` when you want Omadesign's editable document and the conversion notes in one place. File > Open reads the foreign file into a tab and leaves the source where it was. Save, or Save As with Ctrl+Shift+S, writes the `.oma`, and the notes come with it. View > Document conversion notes shows them later, and they're still in the file after you quit. The PSD, PDF, `.xcf` or Affinity file stays the original, and the `.oma` becomes the master you edit from then on.

The native file holds the layer tree you were already editing: groups, vectors, layout frames, comments, text, pixels, masks, effects, pages and conversion notes. Layout frames are the version 5 addition, along with auto-layout, constraints and the cloud link if you've opted in and saved after a push. A `.oma` isn't a camera raw or a photo development. Photo settings live in a `.omaphoto` next to the original, and a Design document doesn't contain the raw sensor data or those settings. Place in Design creates an 8-bit pixel layer, and the `.oma` stores that placed result, not the sensor mosaic.

Brand libraries sit next to the `.oma` instead of inside it. `.omacolors`, `.omatype` and `.omabrand/` live beside the file. Saving artwork into another folder copies the project fonts its text uses into that folder's `.omabrand/fonts/`. The document stays one file, and the kit stays a folder you can share on purpose. Recovery snapshots follow the same split and carry the fonts their text uses, so a recovered `.oma` can still lay out its text.

Headless conversion can write `.oma` like any other supported output. `omadesign --convert artwork.afphoto --output artwork.oma` uses the same reader as the desktop. Same-file conversion is refused, so a convert never overwrites its own source path.

## In the hand

Open a PSD, PDF or SVG with Ctrl+O. It opens in its own tab at its original dimensions, as unsaved work. Read the conversion notes if the import quality matters. Press Ctrl+Shift+S and name a `.oma`. The foreign file stays untouched in its original folder, and the new file is what Omadesign reopens with the layer tree and notes.

Reopen that `.oma` the next day with Ctrl+O, or, as of 0.5.6, click it in Your Work on the welcome screen. The welcome screen finds `.oma` files under your home directory, skips hidden directories, Trash and symlinks, and sorts by modification time. The document opens locally with no account.

If the piece uses frames, turn on Stack children for auto-layout or pin a child with constraints, then save. That file is version 5, and an older app that only reads formats 1 through 4 won't open it. If the piece uses an object mask or an inside or outside stroke, the save is format 6. Keep this build, or any build that reads format 6, for that file. A build that stops at format 5 will refuse it, which is the point. The mask stays in a file you can still open here.

Ctrl+S writes the same `.oma` again, still one file, with rasters packed and the motion clip inside. Export is a separate command. Ctrl+E is the PNG path, and other writers handle PDF, SVG, PSD and OpenRaster when you need them. The export is for delivery, and the `.oma` is what you edit.

## The edge

Older applications can't open a version 5 `.oma`. Format 6 goes further for object masks and inside or outside strokes, so an older reader can't pretend to keep those features by dropping them. This build reads 1 through 6, and a build that doesn't recognize the version should stop.

Saving the `.oma` doesn't rewrite the file you imported. The source stays the source, and the notes stay in the `.oma` so the losses remain visible. Use Ctrl+Shift+S to write the `.oma` next to the original, not on top of it.
