---
id: T069
title: omaphoto sidecars
slug: omadesign-0-5-8-omaphoto-sidecars
excerpt: Save settings writes photo.png.omaphoto beside the original. Open either file to resume. The pair is name, size, and modification time. The camera file is never rewritten.
publishedAt: 2026-09-07T01:35:01Z
tags: [omadesign, 0.0.2-alpha, photo]
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

## Photo undo history

### The habit

You grade a photograph and you hit Ctrl+Z. You expect the last slider to return. Photoshop keeps history per document. One undo stack makes the text box jump when you undid Exposure. The photo's history stays the photo's.

Lightroom's history belongs to the photo you are standing on. Switch photos, the history you see is that photo's history. The other frame keeps its own. Quit is the other habit you care about. If grades are unsaved, the app asks. It does not quit through the dialog and drop the writes on the floor. It does not ask you about the poster first and then fail the photo save after the window is gone.

Discard has to mean discard. Save all has to mean the sidecars hit disk before the next question. Cancel has to mean you are still in the app, grade intact, nothing thrown away.

### The constraint

Design's undo is the `.oma` stack. One step, `Ctrl+Z`, redo `Ctrl+Shift+Z`. It records geometry, type, pixels you painted in a pixel layer, frames. Photo edits have their own Undo and Redo. The manual separates them on purpose. Slider moves, crop, rotation, reset, and the batch paste of a look all go to the Photo history. The selected photo is whose history you are walking. Undo and Redo belong to that photo. The poster in the other tab does not move.

Saving the Design `.oma` does not store the RAW and does not store the develop settings. Those live in the session until Save settings writes an `.omaphoto` beside the original. A shared undo stack would imply a shared file. The files are different, so the histories are different. You can paint a pixel layer in Design, undo it, and the RAW grade stays. You can undo the grade, and the pixel layer stays.

Quit order is the safety. Unsaved photo settings are asked first: Save all, Discard, or Cancel. The app waits for those writes to finish. Then palettes, if they are dirty. Then artwork. Palette save has the same three answers, and a failed or conflicting library save keeps you in the app. Photo's wait is the same idea. A quit that closes the window while a sidecar is half-written is how you corrupt the one file that is allowed to change. The original photograph is still never that file. The write being waited on is the settings file.

Cancel leaves you inside, with the grades still dirty, the poster still unsaved if it was unsaved, nothing discarded. Discard drops the unsaved photo settings and continues the quit path. The last sidecar already on disk stays. The session's newer tweaks go away. That is what discard means. It does not delete the RAW. It does not delete a sidecar that already succeeded.

Unsaved photo changes exist only in the current Photo session. There is no `.oma.swp` for them. Idle recovery is for the design document. If the machine dies before Save settings, the grade since the last sidecar write is gone. The history is real while the process is real. The sidecar is real after the write finishes. Quit's job is to force that choice while the process can still wait.

### What landed

`Ctrl+Z` in Photo steps the selected photo's develop history. `Ctrl+Shift+Z` redoes. Switch the library selection and you are on that photo's history. The active photo is the one in the viewer. A multi-select used for paste is a different set. Ordinary slider edits use the Photo history. Applying the same pasted values again adds no extra undo entry, because nothing changed. A real change, including a batch apply, is one undo for that operation. The batch's single step is the paste feature's rule. The history it lands in is this one.

Reset in the Develop header sets the selected photo back to default parameters and marks it dirty. That is a history step. Undo returns the grade you had. Auto light's write to Exposure, Blacks, and Whites is a history step. Before is not. Before only shows the default development. It does not edit, so it does not push history.

Design shortcuts that would reorder layers, delete objects, or paste shapes stay out of a hidden Design document while you are in Photo. Photo commands stay in Photo. You can copy and paste adjustments with `Ctrl+Shift+C` and `Ctrl+Shift+V` without the design clipboard eating a frame. Typing in a field keeps the field's own clipboard and undo. A numeric slider's text edit does not leak into the canvas history.

Quit with dirty photos. The dialog offers Save all, Discard, and Cancel for the photo settings, and it happens before the palette question and before the artwork question. Save all writes the sidecars and the quit path waits. If a write fails, the edits remain available to retry, the same rule as a failed Save settings from the button. You are not shown a green quit over a failed disk. Discard proceeds without those writes. Cancel aborts the quit.

The `.oma` you save from Design, in the same session, still does not pick up the RAW. You can save the poster, keep grading, and quit later into the photo dialog. Two saves, two files, two histories. The status of one does not clear the other.

Palette files, `.omacolors` and the rest, have their own save state too. They are third. The order is photo settings, then palettes, then artwork. You always get the chance to keep the grade before someone asks you about a swatch.

### In the hand

Open a RAW. Move Exposure. Move Temperature. Press `Ctrl+Z`. Temperature returns. Press `Ctrl+Z` again. Exposure returns. Press `Ctrl+Shift+Z`. Exposure is back. The Design tab, if a poster is open, has not undone a single path.

Click another photo in the library. `Ctrl+Z`. You are undoing that photo, or you are at the bottom of its history if you have not graded it. Click back. Your first photo's history is still its history.

```
Ctrl+Z         undo the selected photo
Ctrl+Shift+Z   redo the selected photo
```

Hit Reset. The sliders go to default. `Ctrl+Z` brings your grade back. Press Before. The picture shows the default development and the sliders stay. `Ctrl+Z` does nothing new, because Before took no step. Press Before again to see the grade.

Save the poster with `Ctrl+S` if you are on its tab. Return to Photo. The dirty dot on Save settings is still there, if you have not saved the sidecar. The `.oma` write did not clear it and did not embed the RAW.

Quit. Read the dialog. Save all writes every dirty photo's `.omaphoto` and waits. Discard leaves the last on-disk sidecars as they were and drops the session tweaks. Cancel returns you to the sliders, nothing lost. If a palette is also dirty, that question comes after the photo writes succeed. If the poster is dirty, that question comes after the palettes. You deal with them in that order, one dialog at a time, still inside the app until you have answered.

If Save all hits a disk error, you stay able to retry. The original camera file was not the file being written. Fix the folder permissions, Save settings, quit again.

### The edge

Photo undo refuses to step the Design document, and a Design save refuses to store the RAW or the `.omaphoto` settings. The grade's history lives with the selected photo. The grade's durability lives in the sidecar you save, or in the Save all you accept on quit.

Quit refuses to close through an unfinished settings write. Save all waits. Discard drops only the unsaved session settings. Cancel stays in the app. The camera file is not on that dialog's list of things to rewrite, because nothing in this history rewrites it.
