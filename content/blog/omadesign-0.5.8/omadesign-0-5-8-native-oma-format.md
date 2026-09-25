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

The file you trust in Illustrator is an `.ai`. In Photoshop it is a `.psd` or a `.psb`. In Affinity it is `.afdesign`, `.afphoto`, or `.afpub`. Each one is a package that application understands completely and every other application understands halfway. You save because the save is the document. You export because the export is what you hand to someone else. When a feature is new, an older build of the same app sometimes opens the file and quietly drops the thing it does not know.

You also keep sidecars without meaning to. A thumbnail cache. A lock file. A recovered swap. The real document is the one the app will open tomorrow with the type still live, the layers still named, and the pixels still pixels. On a desk that moves files with `cp` and `git`, that document has to be one file you can name.

## The constraint

Omadesign is one binary. The working document is one `.oma`. Undo is one step on the artwork, and the file has to round-trip that artwork: groups, vectors, text, pixels, masks, effects, pages, layout frames, comments, and the notes from an import. There is no service you have to reach before the file opens. Cloud metadata can live in the file. Cloud itself stays opt-in, and the document on disk is still the document.

Rasters are packed as PNG inside the `.oma`. A pixel layer should survive a save without a sibling `.png` you have to remember. Motion lives in the same file as a clip, so a poster and the move you put on it do not become two formats you can lose separately. The structure around them is JSON. You can inspect it. Headless `--inspect` writes JSON for canvas size, pages, layer metadata, and import notes. The file is allowed to be readable. It is not a favor the app does when it feels like it.

Older builds have to fail closed when the file uses a structure they would damage. A silent open that throws away frames, or throws away an object mask, is worse than a refusal. The version field is that refusal.

## What landed

A `.oma` is JSON, plus rasters packed as PNG, plus a motion clip. That is the whole working document. Version 5 adds frames, auto-layout, constraints, and opt-in cloud metadata. Older apps cannot open version 5 files. This build reads formats 1 through 6. A 0.5.0 file already wrote version 5. The project wrapper stayed version 5 when later canvas features arrived. Documents saved with the gradient data from 0.5.4 need 0.5.4 or later. An older 0.5.3 build cannot read those gradients. The rest of the open path still accepts the older files this build claims, which is 1 through 6.

Format 6 is the narrower bump, and the manual is the place it is spelled out. Documents that use object masks, or inside and outside strokes, save as `.oma` format 6. That bump exists so an older version cannot open the file and silently remove those features. Documents that do not use them keep format 5 compatibility. You do not get a version bump for sport. You get one when a quiet strip would destroy work.

Save imported work as `.oma` when you want Omadesign's editable document and the conversion notes in one place. File → Open reads the foreign file into a tab. The source file stays where it was. Save, or Save As with Ctrl+Shift+S, writes the `.oma`. The notes come along. View → Document conversion notes shows them later, and they are still in the file after you quit. The PSD, the PDF, the `.xcf`, the Affinity file: those remain the originals. The `.oma` is the master you edit from here.

What the native file can hold is the layer tree you were already editing. Groups, vectors, layout frames, comments, text, pixels, masks, effects, pages, and the conversion notes. Layout frames are the version 5 addition the short claim names: auto-layout, constraints, and the cloud link when you have opted in and saved after a push. A `.oma` is not a camera raw, and it is not a photo development. Photo settings live in `.omaphoto` beside the original. A Design document does not contain the raw sensor data or those development settings. Place in Design is an 8-bit pixel layer. The `.oma` stores that placed result, not the mosaic.

Brand libraries are neighbors, not members of the `.oma`. `.omacolors`, `.omatype`, and `.omabrand/` sit beside the file. Saving artwork into another folder copies the project fonts that the text uses into that folder's `.omabrand/fonts/`. The document stays one file. The kit stays a folder you can share on purpose. Recovery snapshots follow the same split. They carry the faces their text uses so a recovered `.oma` can still shape the line.

Headless conversion writes `.oma` as a destination like any other supported output. `omadesign --convert artwork.afphoto --output artwork.oma` uses the same reader the desktop uses. Same-file conversion is refused, so a convert does not overwrite the path you handed it as the source.

## In the hand

Open a PSD, a PDF, or an SVG with Ctrl+O. It comes up in its own tab at the original dimensions, as unsaved work. Read the conversion notes if the status of the import matters. Press Ctrl+Shift+S. Name a `.oma`. The foreign file is still in its original folder, untouched. The new file is the one Omadesign will reopen with the layer tree and the notes.

Reopen that `.oma` tomorrow. Ctrl+O, or click it in Your Work on the welcome screen. Welcome discovers `.oma` files under your home directory, skips hidden directories, Trash, and symlinks, and sorts by modification time. The document opens local. No account.

If the piece uses frames, turn on Stack children for auto-layout, or pin a child with constraints, and save. That file is version 5 territory. An older app that only understands formats 1 through 4 will not open it. If the piece uses an object mask or an inside or outside stroke, the save is format 6. Keep this build, or any build that reads format 6, for that file. Handing it to a build that stops at format 5 is a refusal, and the refusal is the point. The mask stays in the file you can still open here.

Ctrl+S writes the same `.oma` again. One file. The rasters stay packed. The motion clip stays in the document. Export is a separate command, Ctrl+E for the PNG path, and the other writers when you need a PDF, an SVG, a PSD, or an OpenRaster archive. The export is delivery. The `.oma` is the edit.

## The edge

Older applications cannot open a version 5 `.oma`. Format 6 goes further for object masks and inside or outside strokes: the file will not pretend an older reader can keep those features by dropping them on the floor. This build reads 1 through 6. A build that does not know the version should stop.

Saving the `.oma` does not rewrite the file you imported. The source stays the source. The notes stay in the `.oma` so the losses stay visible. Press Ctrl+Shift+S and write the `.oma` next to the original, not on top of it.
