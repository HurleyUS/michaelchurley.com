---
id: T070
title: Photo undo history
slug: omadesign-0-5-8-photo-undo-history
excerpt: Photo has its own Undo and Redo, on the selected photo. Quit asks Save all, Discard, or Cancel for unsaved photo settings before palettes and artwork, and it waits for the writes.
tags: [omadesign, 0.5.8, photo]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-photo-undo-history/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-photo-undo-history/og.png
---

## The habit

You grade a photograph and you hit Ctrl+Z. You expect the last slider to return. Photoshop keeps history per document. One undo stack makes the text box jump when you undid Exposure. The photo's history stays the photo's.

Lightroom's history belongs to the photo you are standing on. Switch photos, the history you see is that photo's history. The other frame keeps its own. Quit is the other habit you care about. If grades are unsaved, the app asks. It does not quit through the dialog and drop the writes on the floor. It does not ask you about the poster first and then fail the photo save after the window is gone.

Discard has to mean discard. Save all has to mean the sidecars hit disk before the next question. Cancel has to mean you are still in the app, grade intact, nothing thrown away.

## The constraint

Design's undo is the `.oma` stack. One step, `Ctrl+Z`, redo `Ctrl+Shift+Z`. It records geometry, type, pixels you painted in a pixel layer, frames. Photo edits have their own Undo and Redo. The manual separates them on purpose. Slider moves, crop, rotation, reset, and the batch paste of a look all go to the Photo history. The selected photo is whose history you are walking. Undo and Redo belong to that photo. The poster in the other tab does not move.

Saving the Design `.oma` does not store the RAW and does not store the develop settings. Those live in the session until Save settings writes an `.omaphoto` beside the original. A shared undo stack would imply a shared file. The files are different, so the histories are different. You can paint a pixel layer in Design, undo it, and the RAW grade stays. You can undo the grade, and the pixel layer stays.

Quit order is the safety. Unsaved photo settings are asked first: Save all, Discard, or Cancel. The app waits for those writes to finish. Then palettes, if they are dirty. Then artwork. Palette save has the same three answers, and a failed or conflicting library save keeps you in the app. Photo's wait is the same idea. A quit that closes the window while a sidecar is half-written is how you corrupt the one file that is allowed to change. The original photograph is still never that file. The write being waited on is the settings file.

Cancel leaves you inside, with the grades still dirty, the poster still unsaved if it was unsaved, nothing discarded. Discard drops the unsaved photo settings and continues the quit path. The last sidecar already on disk stays. The session's newer tweaks go away. That is what discard means. It does not delete the RAW. It does not delete a sidecar that already succeeded.

Unsaved photo changes exist only in the current Photo session. There is no `.oma.swp` for them. Idle recovery is for the design document. If the machine dies before Save settings, the grade since the last sidecar write is gone. The history is real while the process is real. The sidecar is real after the write finishes. Quit's job is to force that choice while the process can still wait.

## What landed

`Ctrl+Z` in Photo steps the selected photo's develop history. `Ctrl+Shift+Z` redoes. Switch the library selection and you are on that photo's history. The active photo is the one in the viewer. A multi-select used for paste is a different set. Ordinary slider edits use the Photo history. Applying the same pasted values again adds no extra undo entry, because nothing changed. A real change, including a batch apply, is one undo for that operation. The batch's single step is the paste feature's rule. The history it lands in is this one.

Reset in the Develop header sets the selected photo back to default parameters and marks it dirty. That is a history step. Undo returns the grade you had. Auto light's write to Exposure, Blacks, and Whites is a history step. Before is not. Before only shows the default development. It does not edit, so it does not push history.

Design shortcuts that would reorder layers, delete objects, or paste shapes stay out of a hidden Design document while you are in Photo. Photo commands stay in Photo. You can copy and paste adjustments with `Ctrl+Shift+C` and `Ctrl+Shift+V` without the design clipboard eating a frame. Typing in a field keeps the field's own clipboard and undo. A numeric slider's text edit does not leak into the canvas history.

Quit with dirty photos. The dialog offers Save all, Discard, and Cancel for the photo settings, and it happens before the palette question and before the artwork question. Save all writes the sidecars and the quit path waits. If a write fails, the edits remain available to retry, the same rule as a failed Save settings from the button. You are not shown a green quit over a failed disk. Discard proceeds without those writes. Cancel aborts the quit.

The `.oma` you save from Design, in the same session, still does not pick up the RAW. You can save the poster, keep grading, and quit later into the photo dialog. Two saves, two files, two histories. The status of one does not clear the other.

Palette files, `.omacolors` and the rest, have their own save state too. They are third. The order is photo settings, then palettes, then artwork. You always get the chance to keep the grade before someone asks you about a swatch.

## In the hand

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

## The edge

Photo undo refuses to step the Design document, and a Design save refuses to store the RAW or the `.omaphoto` settings. The grade's history lives with the selected photo. The grade's durability lives in the sidecar you save, or in the Save all you accept on quit.

Quit refuses to close through an unfinished settings write. Save all waits. Discard drops only the unsaved session settings. Cancel stays in the app. The camera file is not on that dialog's list of things to rewrite, because nothing in this history rewrites it.
