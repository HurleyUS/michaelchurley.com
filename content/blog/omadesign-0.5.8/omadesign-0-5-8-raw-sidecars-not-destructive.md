---
id: T140
title: RAW sidecars not destructive
slug: omadesign-0-5-8-raw-sidecars-not-destructive
excerpt: Save settings writes .omaphoto beside the camera file and leaves the pixels alone. Whole-folder apply writes sidecars only. Place in Design when the grade should enter the poster.
tags: [omadesign, 0.5.8, photo]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-raw-sidecars-not-destructive/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-raw-sidecars-not-destructive/og.png
---

## The habit

Lightroom taught the sidecar habit even when the catalog was the thing you actually opened. Develop settings live next to the camera file, or in a catalog that points at it. The RAW stays the RAW. You can throw the develop away and start again. Photoshop's Camera Raw is the same contract until you open the file as pixels and save a PSD, and then you have a baked copy plus the original you hope you kept. Affinity Photo develops and can save its own document. The fear is the same either way: a button that says Save and means "rewrite the camera file."

You also want a folder of a shoot to take one look without loading every frame into RAM, and without a recursive walk into the selects folder you made yesterday. Then you want the one frame that belongs on the poster to land there as pixels, on purpose.

## The constraint

Photo is inside the same binary as Design. That makes a destructive save easy to get wrong, because `Ctrl+S` already means "write the document" in every other persona. In Photo, save has to mean "write the settings beside the original." The original's bytes, size, and modification time are the identity the sidecar trusts. Rewriting the camera file would change that identity and would destroy the only full-precision source.

The sidecar is small and contains no pixels. Resume by opening either file. A missing or changed original has to fail the explicit settings open without replacing the picture you are already looking at. A whole-folder job writes sidecars in the background, one directory, no recursion, and it has to be cancellable. Undo has to restore the settings it wrote. The pixels stay pixels.

Place in Design is the bake, and it is a separate command. It produces an 8-bit layer. You keep the RAW and the `.omaphoto` if you intend to grade again.

## What landed

Open a photo from **File → Open**, the Photo library, a drop, or a folder. RAW extensions the decoder recognizes include DNG, CR2, CR3, NEF, NRW, ARW, RAF, ORF, RW2, PEF, and the longer list in the format guide. An extension names a family. It does not promise every camera or every compression. JPEG XL DNG, GPR, EIP, and R3D are not in this build. Only the first image of a multi-image RAW is developed, with a note.

The decoder is LibRaw 0.22.2, built in. No external converter, no download on open. You get 16-bit linear sRGB, camera white balance and color matrix, orientation honored, automatic brightness off. The display preview's long edge caps at 1600 pixels until you zoom. Full resolution arrives as tiles. **Before** is the default development, not the embedded JPEG. Rendering is not trying to match Lightroom, Capture One, or the camera JPEG. Lens corrections and proprietary camera looks are not recreated.

**Save settings** writes a sibling such as `DSC_0001.NEF.omaphoto`. The pair must keep matching names. Settings record the source size and modification time. They do not contain the image. **File → Open**, a drop, or **Photo → Library → ··· → Open photo or settings…** resumes from either file. Opening the sidecar restores the original precision and the saved crop and rotation. If the original is missing, changed, or the settings are invalid, that explicit open fails and leaves the current photo in place. Opening the original with unusable settings shows default development and a note. A failed save keeps your edits so you can retry. `Ctrl+S` in Photo saves the selected photos' settings. Quitting asks Save all, Discard, or Cancel for unsaved photo settings before palettes and artwork.

**Copy adjustments** is `Ctrl+Shift+C`. **Paste adjustments** is `Ctrl+Shift+V`. Light, color, detail, tone curve, color mixer, and color grading can travel separately. Crop and rotation are off by default. The batch paste is one Undo. Later edits to the source do not change a look you already copied.

Whole folder: **Library → … → Browse folder…**, open one representative frame, copy its adjustments or choose **Presets… → Use preset…**. In **Apply adjustments**, choose **Whole folder**, then **Write settings for N photos**. The job writes each `.omaphoto` in that directory only. It does not recurse. It does not load the shoot into memory. It does not touch image pixels. Excluded categories keep their existing adjustments. Cancel stops the rest. Undo restores completed changes. A file that changed outside the batch is preserved and reported. The caps are 10,000 photos and 32 MiB of settings history. Larger shoots want smaller folders. Open a representative RAW first. A recognized filename can still fail to decode.

Export JPEG, PNG, or TIFF at full developed resolution, including crop and rotation. RAW PNG and TIFF keep 16-bit. JPEG is 8-bit. **Place in Design** is the 8-bit layer in the poster, one Undo. The initial limits on a decode are 64 megapixels and 512 MiB input, with a 120 second cooperative cancel.

Presets are `.omapreset` files in the preset library. They hold adjustment values, not pixels, and not a source identity.

## In the hand

Drop a CR3 on the Photo workspace. Wait for the preview. Move exposure and white balance. You are on the 16-bit linear data. Press `Ctrl+S` or **Save settings**. In the file manager, the CR3's size and date are unchanged. Next to it is `something.CR3.omaphoto`.

Quit. Launch. Open the `.omaphoto`. The grade is back. Open the CR3 on a day when you renamed it and left the sidecar behind. You get a note, default development, and the current photo is not replaced by a surprise if you opened settings that cannot find their original.

Copy adjustments. Select a range in the library with Shift-click. Paste. Leave crop off. `Ctrl+Z` restores the whole paste. `Ctrl+S` writes sidecars for the selection.

For a folder, browse it, open one frame that actually decodes, copy the look, **Whole folder**, write settings. Watch the progress. Cancel if a filename looks wrong. The JPEGs and RAWs in that folder are the same bytes. The new files are `.omaphoto`.

When one frame belongs on the poster, **Place in Design**. It shows up as a pixel layer. Grade again later from the sidecar, place again, delete the old layer. The camera file was never the document you edited.

`Ctrl+0` fits the photo. `Ctrl+1` is 100 percent, where the tiles fill in. Hold Space to pan.

## The edge

Save settings never rewrites the camera file. Whole-folder apply never rewrites pixels, never walks subfolders, and never treats a recognized name as proof the file will decode. Place in Design is the moment pixels enter the `.oma`, at 8-bit. The sidecar is settings bound to size and modification time, not a hash of the sensor data. A `.oma` save does not store the RAW.

Press `Ctrl+S` in Photo. Then look at the camera file. It is the same file. The `.omaphoto` beside it is the grade.
