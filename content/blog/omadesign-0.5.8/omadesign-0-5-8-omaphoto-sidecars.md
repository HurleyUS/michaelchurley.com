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

XMP sidecars are the Lightroom habit that held up next to camera originals. The RAW stays the RAW, and the edits live next to it in a small text file you can copy along with it, if you remember to copy both. Anyone who has watched a catalog and a folder disagree learns to distrust the catalog. A sidecar is simpler and harder to lose track of, because the name is the link: `DSC_0001.NEF` and `DSC_0001.NEF.xmp`. Lose the XMP and you still have the photograph. Lose the photograph and the XMP describes nothing.

A sidecar that secretly contains pixels is just a second TIFF with a different extension. It's no longer safe to email, and it's no longer obvious that the camera file is the master. So the sidecar holds settings only, with no image inside.

Reopening has to work from either file. You might double-click the RAW on Monday and the sidecar on Tuesday, and both should show the same grade, crop, rotation and original pixels, including RAW precision. If the original moved or changed, the app should say so without replacing the photo already on screen.

History matters too. You grade a photograph, press Ctrl+Z, and expect the last slider to go back. Photoshop keeps history per document. A single shared undo stack is the kind that makes a text box jump when you meant to undo Exposure. The photo's history should belong to the photo.

In Lightroom, history belongs to the photo you're on. Switch photos and you see that photo's history, while the other one keeps its own. Quitting is the other thing to get right. With unsaved grades, the app should ask, instead of quitting through the dialog and losing the writes, or asking about the poster first and then failing the photo save after the window is gone. Discard has to mean discard. Save all has to mean the sidecars are on disk before the next question. Cancel has to mean you're still in the app with the grade intact.

## The constraint

Omadesign's sidecar is `.omaphoto`, and Save settings writes it beside the original. The manual's example pair is `photo.png` and `photo.png.omaphoto`, and a RAW looks like `DSC_0001.NEF.omaphoto`. The settings file doesn't contain the image, so keep the two names together. The link is the name plus the source size plus the source modification time. That's a metadata match, not a cryptographic content check. A file rewritten with the same size and timestamp can still fool it. Treat the sidecar as develop memory, not as a seal, and checksum the RAW yourself when the exact bytes matter. The app's promise is narrower and strict: it never writes those bytes.

Opening the `.omaphoto` directly, through File > Open, a drop, or Photo > Library > ··· > Open photo or settings…, restores the original pixels and saved adjustments when the pair is intact. If the original is missing or changed, or the settings are invalid, that open fails and leaves the current photo alone. If you open the original and its sidecar is unusable, you get the default development and a note telling you the grade didn't load. A bad file never swaps out the work you have open.

A failed save keeps your edits in the session so you can retry. Edits you make while a save is still finishing stay marked unsaved. The button shows "Saving…" and is disabled while the write runs. A dot on Save settings means the selected photo has unsaved changes. Samples and pasted images have no original, so the button stays off, and the hint tells you to open a photo from disk.

The desktop entry handles both `.oma` and `.omaphoto`. Open With on a sidecar launches the same studio as Open With on a design file, so there's no second app to install to resume a grade.

A Design `.oma` doesn't store the RAW or these settings. The sidecar holds the photo's settings and the project file holds the layout. They can share a folder without either one absorbing the other.

That's also why the histories are separate. Design's undo is the `.oma` stack: `Ctrl+Z` to undo and `Ctrl+Shift+Z` to redo, recording geometry, type, pixels painted on a pixel layer and frames. Photo edits have their own Undo and Redo, and the manual separates them on purpose. Slider moves, crop, rotation, reset and a batch paste of a look all go into the Photo history of the selected photo. The poster in the other tab doesn't move. A shared undo stack would imply a shared file, and these are different files. You can paint a pixel layer in Design and undo it without touching the RAW grade, or undo the grade without touching the pixel layer.

Unsaved photo changes exist only in the current Photo session. There's no `.oma.swp` for them, because idle recovery covers the design document. If the machine dies before Save settings, the grade since the last sidecar write is gone. The history lasts as long as the process, and the sidecar lasts once the write finishes.

Quit order is the safety net. The app asks about unsaved photo settings first, with Save all, Discard or Cancel, and waits for those writes to finish. Then it asks about palettes, if they have changes, then artwork. The palette question has the same three answers, and a failed or conflicting library save keeps you in the app. Quitting while a sidecar is half-written is how you corrupt the one file that's allowed to change. The original photograph is never that file. The write being waited on is always the settings file.

Cancel keeps you in the app with the grades still unsaved, the poster still unsaved if it was, and nothing discarded. Discard drops the unsaved photo settings and continues quitting. The last sidecar already on disk stays, and only the session's newer tweaks go away. Discard never deletes the RAW or a sidecar that was already saved.

## What landed

### Saving and reopening

Save settings writes the small file next to the original, and its tooltip says you can resume by opening either the photo or the `.omaphoto`. Ctrl+S saves the selected photos. One selected photo with unsaved changes shows "Save settings •". Several selected photos that all have originals show "Save N selected settings", and each sidecar is written beside its own original.

You can reopen any of these ways:

```
File → Open
drop the photo or the .omaphoto
Library → ··· → Open photo or settings…
```

Pick either half of the pair and you get the original pixels, with RAW precision when the original is RAW, plus the saved crop, rotation and develop values. Saving again updates the settings file you opened, including when its extension is uppercase. The name match is what defines the pair, so no randomly named file gets created.

Headless commands use the same pairing. Inspect prints metadata, dimensions, precision and the saved development. Convert applies the sidecar automatically and writes a different file.

```
omadesign --inspect photograph.NEF.omaphoto
omadesign --convert photograph.NEF.omaphoto --output developed.tif
```

Same-file conversion is refused, so the output can never be the RAW or anything that replaces the source. The TIFF is new, the `.omaphoto` is still settings, and the RAW is still the RAW.

If you change the original in another program, its size or modification time changes, and opening the sidecar directly fails without replacing the photo already open. Either fix the pair, or open the original, read the note and accept the default development. Copying the photo to a new name without copying or renaming the sidecar breaks the pair. `photo-edit.png` doesn't read `photo.png.omaphoto`, because the names have to match.

Unsaved grades exist only in the Photo session. If the machine crashes before Save settings, the sidecar on disk is the last successful write. Design documents recover from the `.oma.swp` swap, but photo settings aren't stored in that swap. Save the sidecar when the grade matters. The button is at the bottom of Develop.

Folder jobs and pasted looks can write many sidecars later. Each one follows the same rules as a single photo: settings only, beside the original, original untouched, retry if the write fails.

### Undo in Photo

`Ctrl+Z` in Photo steps back through the selected photo's develop history, and `Ctrl+Shift+Z` redoes. Change the library selection and you're on that photo's history. The active photo is the one in the viewer, and a multi-selection used for pasting is a separate set. Ordinary slider edits go into the Photo history. Pasting the same values again adds no undo entry, because nothing changed. A real change, including a batch apply, is one undo for the whole operation.

Reset in the Develop header returns the selected photo to default parameters and marks it unsaved. That's a history step, and undo brings back your grade. Auto light's changes to Exposure, Blacks and Whites are a history step too. Before isn't. It only shows the default development without editing anything, so it doesn't add history.

Design shortcuts that would reorder layers, delete objects or paste shapes don't reach a hidden Design document while you're in Photo, and Photo commands stay in Photo. You can copy and paste adjustments with `Ctrl+Shift+C` and `Ctrl+Shift+V` without the design clipboard grabbing a frame. Typing in a field uses that field's own clipboard and undo, so editing a slider's number doesn't leak into the canvas history.

Quit with unsaved photos and the dialog offers Save all, Discard and Cancel for the photo settings, before the palette and artwork questions. Save all writes the sidecars and waits. If a write fails, the edits stay available to retry, the same as a failed Save settings from the button, so you never see a clean quit over a failed disk write. Discard continues without those writes, and Cancel stops the quit.

A `.oma` saved from Design in the same session still doesn't pick up the RAW. You can save the poster, keep grading and quit later into the photo dialog. That's two saves, two files and two histories, and saving one doesn't clear the other.

Palette files, `.omacolors` and the rest, have their own save state and come third. The order is photo settings, then palettes, then artwork, so you always get the chance to keep the grade before anyone asks about a swatch.

## In the hand

Grade the NEF. Crop it, rotate it 90 and move Exposure. The button reads "Save settings •" because the photo has unsaved changes and a path on disk. Click it. Next to `DSC_0001.NEF` there's now a `DSC_0001.NEF.omaphoto`, and the NEF's checksum hasn't changed. Quit.

The next day, use File > Open and pick the `.omaphoto`. The NEF's pixels come back at full RAW precision, with the exposure, crop and rotation. Open the NEF from the file manager instead, with the sidecar still beside it, and you get the same picture and grade.

Now move the NEF to another folder and leave the sidecar behind. Open the sidecar from the old folder and the open fails, while the photo already on screen stays. Put the NEF back beside the sidecar and open again. Or open the NEF on its own, accept the default development and the note, and rebuild the grade.

```
photo.png
photo.png.omaphoto
```

That's the whole naming rule. The suffix `.omaphoto` goes on the full original filename, extension included. Don't strip the `.png`, and don't rename only one of the files.

While "Saving…" is showing, move a slider. The new edit stays marked unsaved after the in-flight save completes, so click Save settings again. You didn't lose the tweak or get a false saved state.

A sample image never enables the button. Open a real file so the sidecar has somewhere valid to go.

To try undo, open a RAW, move Exposure, then move Temperature. Press `Ctrl+Z` and Temperature goes back. Press it again and Exposure goes back. Press `Ctrl+Shift+Z` and Exposure returns. If a poster is open in the Design tab, none of its paths were undone.

Click another photo in the library and press `Ctrl+Z`. That undoes that photo, or does nothing if you haven't graded it. Click back, and your first photo's history is unchanged.

```
Ctrl+Z         undo the selected photo
Ctrl+Shift+Z   redo the selected photo
```

Press Reset and the sliders go to their defaults. `Ctrl+Z` brings your grade back. Press Before and the picture shows the default development while the sliders stay. `Ctrl+Z` does nothing new here, because Before didn't add a step. Press Before again to see the grade.

If you're on the poster's tab, save it with `Ctrl+S`, then return to Photo. The dot on Save settings is still there if you haven't saved the sidecar, because the `.oma` save didn't clear it or embed the RAW.

Quit and read the dialog. Save all writes every unsaved photo's `.omaphoto` and waits. Discard leaves the last saved sidecars as they were and drops the session's tweaks. Cancel takes you back to the sliders with nothing lost. If a palette also has changes, that question comes after the photo writes succeed, and the poster question comes after the palettes. You answer them in that order, one dialog at a time, and stay in the app until you've answered.

If Save all hits a disk error, you can still retry. The camera file wasn't the file being written. Fix the folder permissions, use Save settings and quit again.

## The edge

The sidecar never contains pixels, and saving never rewrites the original. It's settings only, beside the file, under the paired name. Opening settings directly when the original is missing, changed or invalid won't replace the current photo. A bad sidecar beside an original you opened directly falls back to the default development with a note.

The match is name, size and modification time, not a hash of the contents. Treat the camera file as the master you can checksum, and treat the `.omaphoto` as a grade you can delete, and maybe regret deleting, without ever touching the master.

Photo undo never steps the Design document, and a Design save never stores the RAW or the `.omaphoto` settings. The grade's history lives with the selected photo, and it's only kept once you save the sidecar or accept Save all on quit.

Quit won't close during an unfinished settings write. Save all waits, Discard drops only the unsaved session settings and Cancel stays in the app. The camera file is never on the list of things to rewrite.
