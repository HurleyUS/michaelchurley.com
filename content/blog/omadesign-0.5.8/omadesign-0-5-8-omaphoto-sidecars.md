---
id: T069
title: omaphoto sidecars
slug: omadesign-0-5-8-omaphoto-sidecars
excerpt: Save settings writes photo.png.omaphoto beside the original. Open either file to resume. The pair is name, size, and modification time. The camera file is never rewritten.
tags: [omadesign, 0.5.8, photo]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-omaphoto-sidecars/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-omaphoto-sidecars/og.png
---

## The habit

XMP sidecars are the Lightroom habit that survived contact with a camera original. The RAW stays the RAW. The edits live next to it, small, text, disposable, copyable with the file if you remember to copy both. You learned to hate the catalog the day the catalog and the folder disagreed. The sidecar is dumber and therefore harder to strand. The name is the link. `DSC_0001.NEF` and `DSC_0001.NEF.xmp`. Lose the xmp and you still have the photograph. Lose the photograph and the xmp is notes about nothing.

You also learned that a sidecar which secretly contains pixels is just a second TIFF with a cute extension. It stops being safe to email, and it stops being obvious that the camera file is the master. Settings only. No image inside.

Reopen has to accept either name. You double-click the RAW on Monday and the sidecar on Tuesday. Both should show the same grade, the same crop, the same rotation, and the same original pixels, including RAW precision. If the original moved or changed, the reopen should say so and should not smash the photo you already have on screen.

## The constraint

Omadesign's sidecar is `.omaphoto`. Save settings writes it beside the original. The manual's pair is `photo.png` and `photo.png.omaphoto`. A RAW looks like `DSC_0001.NEF.omaphoto`. The settings file does not contain the image. Keep the two names together. The link is the name, plus the source size, plus the source modification time. That check is a metadata match. It is not a cryptographic content identity. A file that was rewritten with the same size and the same timestamp can still fool it. Do not use the sidecar as a seal. Use it as develop memory. Checksum the RAW yourself when the bytes matter. The app's promise is narrower and strict: it does not write those bytes.

Opening the `.omaphoto` explicitly, through File → Open, a drop, or Photo → Library → ··· → Open photo or settings…, restores the original pixels and the saved adjustments when the pair is intact. If the original is missing, changed, or the settings are invalid, that open fails and does not replace the photo you currently have. Opening the original instead, when its sidecar is unusable, shows the default development and a note. You see the picture. You are told the grade did not load. The current work is not swapped out from under you by a bad file.

Failed saves keep the edits in the session so you can retry. Edits you make while a save is still finishing stay marked unsaved. The button shows "Saving…" while the write runs, and it disables. A dot on Save settings means the selected photo is dirty. Samples and pasted images have no original, so the button stays off. The hint tells you to open a photo from disk.

The 0.5.8 desktop entry is the handler for both `.oma` and `.omaphoto`. Open With on a sidecar launches the same studio as Open With on a design file. You do not install a second app to resume a grade.

A Design `.oma` does not store the RAW or these settings. The sidecar is the photo's memory. The project file is the layout's memory. They can sit in the same folder. They do not swallow each other.

## What landed

Save settings writes the small file next to the original. The hover says you can resume by opening the photo or the `.omaphoto`. Ctrl+S does that save for the selected photos. One selected photo with a dirty grade shows "Save settings •". Several selected photos that all have originals show "Save N selected settings". The write is the selected set, each beside its own original.

Reopen any of these ways:

```
File → Open
drop the photo or the .omaphoto
Library → ··· → Open photo or settings…
```

Pick either half of the pair. You get the original pixels, RAW precision included when the original is RAW, and the crop, rotation, and develop values that were saved. Saving again updates the settings file you opened, including when the extension's case is uppercase. The name match is the pair, not a new randomly named blob.

Headless uses the same pairing. Inspect prints metadata, dimensions, precision, and the saved development. Convert applies the sidecar automatically and writes a different file.

```
omadesign --inspect photograph.NEF.omaphoto
omadesign --convert photograph.NEF.omaphoto --output developed.tif
```

Same-file conversion is refused. The output cannot be the RAW, and it cannot be a trick that replaces the source. The TIFF is new. The `.omaphoto` is still settings. The RAW is still the RAW.

If you change the original in another program, size or modification time moves, and an explicit open of the sidecar fails without replacing whatever photo is already up. Fix the pair, or accept default development by opening the original and reading the note. Copying the photo to a new name without copying the sidecar, or without renaming the sidecar to match, is a broken pair. `photo-edit.png` does not read `photo.png.omaphoto`. The names have to match.

Unsaved grades exist only in the Photo session. Crash the machine before Save settings and the sidecar on disk is the last successful write. The recovery story for design documents is the `.oma.swp` swap. Photo settings do not hide inside that swap. Save the sidecar when the grade matters. The button is at the bottom of Develop.

Folder jobs and pasted looks can write many sidecars later. The single-photo contract is the same file: settings, beside the original, original untouched, retry if the write fails.

## In the hand

Grade the NEF. Crop. Rotate 90. Move Exposure. Look at the button. It reads "Save settings •" because the photo is dirty and it has a path. Click it. Next to `DSC_0001.NEF` you now have `DSC_0001.NEF.omaphoto`. The NEF's checksum has not changed. Quit.

Tuesday, File → Open, pick the `.omaphoto`. The NEF's pixels come back at full RAW precision. The exposure, the crop, and the rotation come back with them. Open the NEF instead, from the file manager, with the sidecar still beside it. Same picture, same grade.

Move the NEF to another folder and forget the sidecar. Open the sidecar from the old folder. The open fails. The photo you already had on screen stays. Go get the NEF, put it back beside the sidecar, open again. Or open the NEF alone, live with the default development and the note, and rebuild the grade.

```
photo.png
photo.png.omaphoto
```

That is the whole naming rule. The suffix is `.omaphoto` stuck on the original filename, extension included. Do not strip `.png` off and hope. Do not rename one of them.

While "Saving…" is up, move a slider. The new edit stays dirty after the in-flight save completes. Click Save settings again. You did not lose the tweak, and you did not get a false clean state.

A sample image never enables the button. Open a real file. Then the sidecar has somewhere legal to sit.

## The edge

The sidecar refuses to contain pixels, and the save refuses to rewrite the original. Settings only, beside the file, under the paired name. A missing, changed, or invalid original on an explicit settings open refuses to replace the current photo. A bad sidecar beside an original you opened directly falls back to default development and a note.

The match is name, size, and modification time. It is not a hash of the contents. Treat the camera file as the master you can checksum. Treat `.omaphoto` as the grade you can delete and regret, without ever having touched the master.
