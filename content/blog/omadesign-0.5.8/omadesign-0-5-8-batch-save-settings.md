---
id: T074
title: Batch save settings
slug: omadesign-0-5-8-batch-save-settings
excerpt: After a paste, Ctrl+S writes a .omaphoto sidecar for every selected photo. The batch is one Undo and one Redo. Categories travel on their own.
tags: [omadesign, 0.5.8, photo]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-batch-save-settings/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-batch-save-settings/og.png
---

## The habit

You pasted the grade. In Lightroom the sync is already a catalog write, and Save is a different anxiety: the catalog, the XMP, the "write settings to files" command you sometimes remember and sometimes do not. In Photoshop, Camera Raw's Done writes the sidecar or the file header depending on the preference you set in 2014 and forgot. Affinity Photo saves the develop settings with its own document. The hand then does the thing it always does. Ctrl+S. You expect the work you just did to survive a quit.

On a roll, that expectation gets expensive. If each photo is its own save, you will save the hero and assume the selection came along. If each photo is its own undo, you will undo the last frame and think the batch is gone, or you will undo twelve times and lose a slider move you made on the hero an hour ago. The save and the history have to describe the batch you selected, not the single photo the viewer happens to be showing.

## The constraint

The original stays untouched. **Save settings** writes a small `.omaphoto` beside it. The pair shares a name: `photo.png` and `photo.png.omaphoto`. Settings do not contain the image. Reopen through **File → Open**, a drop, or **Photo → Library → ··· → Open photo or settings…**. Pick the original or the sidecar. Both restore the original pixels and the saved adjustments, as long as the pair stays together.

A Design save cannot be the photo save. Saving a Design `.oma` does not store the RAW source or its settings. One document, one `.oma`, is the rule for artwork. The grade lives next to the camera file, because the camera file is not artwork you authored inside the document. Put the grade inside the poster and you have baked an 8-bit placement. The RAW and the sidecar are how you come back tomorrow and push the exposure again on the 16-bit linear source.

Undo stays one step. A batch of selected photos is one history entry in Photo's own Undo and Redo. Ordinary slider edits use that same Photo history. Design's history is a different stack. Quitting has an order. Unsaved photo settings are offered **Save all**, **Discard**, or **Cancel** before palette saves and before artwork saves. The app waits for the writes to finish. You do not quit through a half-written sidecar.

## What landed

After the paste, **Ctrl+S** saves the selected photos' settings beside their originals. The selection is the batch. The viewer can still be showing the hero. The files that receive a sidecar are the ones you selected, and the selection count is the count that matters.

The batch is one Undo and one Redo. You pasted Light, Color, and the tone curve onto thirty frames. One Ctrl+Z restores that application. One redo puts it back. You are not scrubbing a per-file history that nobody can remember. Slider moves you make on a single photo still land in that Photo history, one change at a time, the way a develop slider should.

Light / tone, Color, Effects, tone curve, color mixer, and color grading travel independently. Effects is the detail group. The save writes the categories you already chose to send. It does not smear every control onto every file because you hit save. A photo that kept its own mixer keeps that mixer. A photo that received only Light still has its own color. Crop and rotation stay where the paste left them, off unless you turned them on.

Applying the same values again adds no extra undo entry. History is for changes. A repeated paste of an identical snapshot does not stack identical steps for you to peel off later.

Folder jobs are a different write. A whole-folder apply puts `.omaphoto` files on disk in the background, and those files are already saved when the job finishes. A paste onto photos loaded in the Library is not that job. The loaded selection needs **Save settings**. Until Ctrl+S, the new values live in the session.

Export still processes the active photo. Saving the batch does not export the batch. JPEG, PNG, and TIFF remain a decision about the frame in the viewer, at full developed resolution, crop and rotation included, written in the background. RAW PNG and TIFF keep 16-bit channels. The sidecar save is the grade. The export is a picture.

Failed saves keep your edits available to retry. Edits you make while a save is still finishing stay marked unsaved. A write that fails does not get to pretend it landed. Opening a settings file reports a missing original, a changed original, or invalid settings, and it does not replace the photo you already have open. Opening an original whose settings are unusable shows default development and a note.

## In the hand

Grade one frame. Copy it with **Ctrl+Shift+C**. Select the targets with Ctrl-click, a Shift-click range, or **Ctrl+A**. Paste with **Ctrl+Shift+V** and choose the categories. Leave crop and rotation off unless the framing is shared on purpose.

Look at the selection count. Then save that selection.

```
Ctrl+S
```

Each selected photo grows or updates its `.omaphoto` beside the original. `chair.NEF` stays `chair.NEF`. `chair.NEF.omaphoto` holds the grade. The name match is the whole address. Move one without the other and the resume has nothing honest to pair.

Press Ctrl+Z. The batch application comes back off the selected photos in one step. Press Ctrl+Shift+Z and the batch returns. Move one slider on the hero after that. That slider is its own history step. It does not reopen the batch.

Quit with unsaved grades still dirty and the first prompt is the photo prompt: **Save all**, **Discard**, or **Cancel**. Palette prompts and the artwork prompt come after, and only if the photo writes are allowed to finish. Cancel keeps you in the chair.

Reopen tomorrow from the Library menu, **··· → Open photo or settings…**, or by dropping either file. The pixels are the camera's. The sliders are the sidecar's.

## The edge

Ctrl+S in Photo refuses to treat a Design save as a grade save. The `.oma` you write for the poster does not contain the RAW and does not contain the `.omaphoto`. Place in Design if you need an 8-bit developed pixel layer on the artboard, with its own Undo. Keep the RAW and the sidecar when you still mean to develop.

A failed sidecar write refuses to throw the edit away. The values stay, marked so you can retry. A save that is still in flight refuses to call newer slider moves "saved."

Select the photos, press Ctrl+S, and the batch of `.omaphoto` files is the grade you can reopen.
