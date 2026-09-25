---
id: T073
title: Copy paste adjustments
slug: omadesign-0-5-8-copy-paste-adjustments
excerpt: Copy a developed look with Ctrl+Shift+C and paste it onto a Library selection with Ctrl+Shift+V. Crop and rotation stay off unless you turn them on.
publishedAt: 2026-09-07T18:35:51Z
tags: [omadesign, 0.5.8, photo]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-copy-paste-adjustments/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-copy-paste-adjustments/og.png
---

## The habit

You finish one frame. Exposure sits on the linear file. White balance comes off the card, or off a wall you trust. The tone curve puts the shoulder where the print needs it. Color grading takes the shadow one way and the highlight another. Then you look at the rest of the table, the rest of the room, the rest of the hour, and your hand goes looking for Sync.

In Lightroom that sync is a stack of checkboxes. Crop lives in the stack. Leave the box warm and every vertical inherits the horizontal crop from the hero. In Photoshop you open the next RAW through Camera Raw and paste the recipe. The paste is the whole recipe. Framing comes with it unless you cleared the crop before you copied. Affinity Photo's develop persona trains the same reach: one good grade, then the roll should match the frame you already decided.

The job is the roll. A product set on one sweep of light. Three heights of the same room. A contact sheet you will still crop one frame at a time because the subject moved. The hand wants one copy and one paste. The hand also wants the frame you already drew on each photo to stay there.

## The constraint

Omadesign is one binary. Photo is a persona in that binary, beside Design, Layout, Pixel, and Motion. There is no second app to launch for the grade, and no Creative Cloud hop between the slider and the file.

The camera file stays the camera file. Development is a small `.omaphoto` sidecar beside the original. `table.RAF` stays `table.RAF`. The sidecar holds adjustments. It does not hold the image. A paste that "applies the look" by rewriting the RAW is the wrong shape. The paste has to move development values onto other photos, and the pixels on disk have to stay the pixels the camera wrote.

Undo is one step. Pasting a look onto a selection cannot leave one history entry per frame, or you will spend the afternoon walking backwards through a wedding. Photo's keys stay in Photo. Copying a grade must not reach into a Design tab and restyle artwork you cannot see. The system clipboard has to survive as well. A logo you copied an hour ago is still a logo. An empty system clipboard must not block the grade copy. The adjustment snapshot is Photo's, and the chord has to fire on the key press you actually made.

## What landed

Develop the source photo. **Copy adjustments**, or **Ctrl+Shift+C**, takes the settings as they stand at that moment. Edit the hero afterward and the snapshot stays where you left it. The copy is a frozen look, taken when you pressed the chord. It is not a live link back to the sliders.

In the Library, choose who receives it. **Ctrl-click** toggles one photo. **Shift-click** selects a range. **Ctrl+A** selects every photo loaded in the library. The active photo remains the one in the viewer. The selection count tells you how many photos will receive the look. Those are different marks on purpose. Grading the frame in front of you and choosing the batch are different jobs. You can keep the hero on screen while the selection runs down the filmstrip.

**Ctrl+Shift+V** opens **Paste…**. The boxes are **Light / tone**, **Tone curve**, **Color**, **Effects**, **Color mixer**, **Color grading**, **Crop**, and **Rotation**. Effects is the detail group from the Develop panel. Those boxes can travel on their own. Send Light / tone and leave the mixer. Send the grade and leave Effects, because the clarity, grain, or vignette that flattered the hero is wrong on the wide frame. Light, Color, and Detail are the groups you live in while grading. Tone curve, color mixer, and color grading are the sections you expand when the group sliders are not enough. The paste list uses those names, with Detail labeled Effects.

**Crop and Rotation start off.** The status after the copy says so: crop and rotation are excluded. Each photo keeps its framing until you tick those two boxes. A look is tone and color. A frame is the picture. They stay apart until you say they travel together.

The chord is a Photo command. It fires when you press it. It does not need the system clipboard to be holding anything, and it leaves that clipboard alone. Design artwork on another tab stays out of the operation. Photo selection, Delete, ordinary copy and paste, and stacking shortcuts stay inside Photo while you are grading. Typing into a field still uses the normal clipboard. The grade chords are for the pictures.

Samples and images you pasted into the persona can wear the adjustments. They need an original on disk before a settings file can be saved. The paste puts the values on the loaded photos. It does not write the sidecars. That write is **Ctrl+S**, and it belongs to the save that follows.

Apply the same values again and Photo adds no extra undo entry. History records a change. A second paste of an identical snapshot is the same grade sitting where it already sat.

## In the hand

Open the folder, or drop the files. Imports run in the background, so you can start on the frame you trust while the rest land. Grade it. Press **Before** if you need the default development in front of you, then come back to the sliders. **Auto light** is there when exposure and contrast only need a first balance. RAW exposure and white balance are working on the 16-bit linear source. When the frame sits, copy it.

```
Ctrl+Shift+C
```

The copied look is the settings at that press. Nudge the hero again if you want a different direction for yourself. The frames you are about to choose will get the copy, not the nudge, until you copy again.

Click the first target in the Library. Shift-click the last photo in the run, or Ctrl-click the frames that share the light and skip the one you already finished by hand. Read the selection count before you paste. Leave the viewer on the hero if that is the reference you still want to see.

```
Ctrl+Shift+V
```

The category list is the decision. Leave Crop and Rotation off. Leave Effects off when the noise floors do not match. Leave Color mixer off when only one frame needed a pulled green. Light / tone, Color, Tone curve, and Color grading can stay on. Apply.

The selected photos take those categories. Their crops stay. Their rotations stay. One undo puts the whole paste back. You do not reverse the roll one frame at a time.

When the photos already have originals on disk, **Ctrl+S** writes each selected `.omaphoto` beside its file. The pair is named together: `photo.png` and `photo.png.omaphoto`. The camera file's bytes do not move.

## The edge

The paste refuses to treat framing as part of the look. Crop and rotation stay off until you turn them on in the category list. It also refuses to write the camera file, and it refuses to save itself. A loaded selection holds the new values in Photo's own history until you save settings. A sample with no original on disk can wear the look for the session and still cannot grow a sidecar. There is no file to stand beside.

The snapshot stays frozen at the moment of **Ctrl+Shift+C**. Later moves on the hero do not push themselves onto the frames you already chose.

Select the roll, press Ctrl+Shift+V, and leave crop off so each photo keeps the frame you gave it.

## Batch save settings

### The habit

You pasted the grade. In Lightroom the sync is already a catalog write, and Save is a different anxiety: the catalog, the XMP, the "write settings to files" command you sometimes remember and sometimes do not. In Photoshop, Camera Raw's Done writes the sidecar or the file header depending on the preference you set in 2014 and forgot. Affinity Photo saves the develop settings with its own document. The hand then does the thing it always does. Ctrl+S. You expect the work you just did to survive a quit.

On a roll, that expectation gets expensive. If each photo is its own save, you will save the hero and assume the selection came along. If each photo is its own undo, you will undo the last frame and think the batch is gone, or you will undo twelve times and lose a slider move you made on the hero an hour ago. The save and the history have to describe the batch you selected, not the single photo the viewer happens to be showing.

### The constraint

The original stays untouched. **Save settings** writes a small `.omaphoto` beside it. The pair shares a name: `photo.png` and `photo.png.omaphoto`. Settings do not contain the image. Reopen through **File → Open**, a drop, or **Photo → Library → ··· → Open photo or settings…**. Pick the original or the sidecar. Both restore the original pixels and the saved adjustments, as long as the pair stays together.

A Design save cannot be the photo save. Saving a Design `.oma` does not store the RAW source or its settings. One document, one `.oma`, is the rule for artwork. The grade lives next to the camera file, because the camera file is not artwork you authored inside the document. Put the grade inside the poster and you have baked an 8-bit placement. The RAW and the sidecar are how you come back tomorrow and push the exposure again on the 16-bit linear source.

Undo stays one step. A batch of selected photos is one history entry in Photo's own Undo and Redo. Ordinary slider edits use that same Photo history. Design's history is a different stack. Quitting has an order. Unsaved photo settings are offered **Save all**, **Discard**, or **Cancel** before palette saves and before artwork saves. The app waits for the writes to finish. You do not quit through a half-written sidecar.

### What landed

After the paste, **Ctrl+S** saves the selected photos' settings beside their originals. The selection is the batch. The viewer can still be showing the hero. The files that receive a sidecar are the ones you selected, and the selection count is the count that matters.

The batch is one Undo and one Redo. You pasted Light, Color, and the tone curve onto thirty frames. One Ctrl+Z restores that application. One redo puts it back. You are not scrubbing a per-file history that nobody can remember. Slider moves you make on a single photo still land in that Photo history, one change at a time, the way a develop slider should.

Light / tone, Color, Effects, tone curve, color mixer, and color grading travel independently. Effects is the detail group. The save writes the categories you already chose to send. It does not smear every control onto every file because you hit save. A photo that kept its own mixer keeps that mixer. A photo that received only Light still has its own color. Crop and rotation stay where the paste left them, off unless you turned them on.

Applying the same values again adds no extra undo entry. History is for changes. A repeated paste of an identical snapshot does not stack identical steps for you to peel off later.

Folder jobs are a different write. A whole-folder apply puts `.omaphoto` files on disk in the background, and those files are already saved when the job finishes. A paste onto photos loaded in the Library is not that job. The loaded selection needs **Save settings**. Until Ctrl+S, the new values live in the session.

Export still processes the active photo. Saving the batch does not export the batch. JPEG, PNG, and TIFF remain a decision about the frame in the viewer, at full developed resolution, crop and rotation included, written in the background. RAW PNG and TIFF keep 16-bit channels. The sidecar save is the grade. The export is a picture.

Failed saves keep your edits available to retry. Edits you make while a save is still finishing stay marked unsaved. A write that fails does not get to pretend it landed. Opening a settings file reports a missing original, a changed original, or invalid settings, and it does not replace the photo you already have open. Opening an original whose settings are unusable shows default development and a note.

### In the hand

Grade one frame. Copy it with **Ctrl+Shift+C**. Select the targets with Ctrl-click, a Shift-click range, or **Ctrl+A**. Paste with **Ctrl+Shift+V** and choose the categories. Leave crop and rotation off unless the framing is shared on purpose.

Look at the selection count. Then save that selection.

```
Ctrl+S
```

Each selected photo grows or updates its `.omaphoto` beside the original. `chair.NEF` stays `chair.NEF`. `chair.NEF.omaphoto` holds the grade. The name match is the whole address. Move one without the other and the resume has nothing honest to pair.

Press Ctrl+Z. The batch application comes back off the selected photos in one step. Press Ctrl+Shift+Z and the batch returns. Move one slider on the hero after that. That slider is its own history step. It does not reopen the batch.

Quit with unsaved grades still dirty and the first prompt is the photo prompt: **Save all**, **Discard**, or **Cancel**. Palette prompts and the artwork prompt come after, and only if the photo writes are allowed to finish. Cancel keeps you in the chair.

Reopen tomorrow from the Library menu, **··· → Open photo or settings…**, or by dropping either file. The pixels are the camera's. The sliders are the sidecar's.

### The edge

Ctrl+S in Photo refuses to treat a Design save as a grade save. The `.oma` you write for the poster does not contain the RAW and does not contain the `.omaphoto`. Place in Design if you need an 8-bit developed pixel layer on the artboard, with its own Undo. Keep the RAW and the sidecar when you still mean to develop.

A failed sidecar write refuses to throw the edit away. The values stay, marked so you can retry. A save that is still in flight refuses to call newer slider moves "saved."

Select the photos, press Ctrl+S, and the batch of `.omaphoto` files is the grade you can reopen.
