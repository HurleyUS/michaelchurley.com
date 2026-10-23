---
id: T073
title: Copy paste adjustments
slug: omadesign-0-5-8-copy-paste-adjustments
excerpt: Copy a developed look with Ctrl+Shift+C and paste it onto a Library selection with Ctrl+Shift+V. Crop and rotation stay off unless you turn them on.
publishedAt: 2026-09-07T18:35:51Z
tags: [omadesign, 0.0.3-alpha, photo]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-copy-paste-adjustments/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-copy-paste-adjustments/og.png
---

## The habit

You finish one frame. Exposure is set on the linear file. White balance comes from the card, or from a wall you trust. The tone curve puts the shoulder where the print needs it, and color grading pushes the shadows one way and the highlights another. Then you look at the rest of the table, the rest of the room, or the rest of the hour, and you reach for Sync.

In Lightroom, sync is a stack of checkboxes, and crop is one of them. Leave that box checked and every vertical inherits the hero's horizontal crop. In Photoshop you open the next RAW in Camera Raw and paste the recipe, and the paste includes everything, framing included, unless you cleared the crop before copying. Affinity Photo's develop persona builds the same habit: one good grade, then make the rest of the roll match.

The job is the whole roll: a product set under one sweep of light, the same room from three heights, or a contact sheet you will still crop one frame at a time because the subject moved. You want one copy and one paste, and you want the crop you already set on each photo to stay.

Then comes saving. In Lightroom the sync is already a catalog write, and saving brings its own worries: the catalog, the XMP, and the "write settings to files" command you sometimes remember. In Photoshop, Camera Raw's Done writes a sidecar or the file header depending on a preference you set in 2014 and forgot. Affinity Photo saves develop settings inside its own document. Either way, you press Ctrl+S and expect the work you just did to survive a quit.

On a roll, that expectation gets expensive. If each photo saves separately, you will save the hero and assume the selection came along. If each photo has its own undo, you will undo the last frame and think the batch is gone, or undo twelve times and lose a slider move you made on the hero an hour ago. Saving and history have to cover the whole batch you selected, whichever photo the viewer happens to be showing.

## The constraint

Omadesign is one binary, and Photo is a persona in it alongside Design, Layout, Pixel, and Motion. There is no second app to launch for grading and no Creative Cloud step between the slider and the file.

The camera file stays untouched. Development is stored in a small `.omaphoto` sidecar beside the original, so `table.RAF` stays `table.RAF`. The sidecar holds adjustments and never the image. The pair shares a name, such as `photo.png` and `photo.png.omaphoto`. A paste that applied the look by rewriting the RAW would be wrong. The paste moves development values onto other photos, and the pixels on disk stay the pixels the camera wrote. To reopen, use **File > Open**, a drop, or **Photo > Library > ··· > Open photo or settings…**, and pick either the original or the sidecar. Both restore the original pixels and the saved adjustments, as long as the pair stays together.

Saving a Design `.oma` is a separate action from saving photo settings. A Design `.oma` doesn't store the RAW source or its settings. One document in one `.oma` is the rule for artwork, and the grade lives next to the camera file because the camera file isn't artwork you made in the document. If you put the grade inside the poster, you get a baked 8-bit placement. The RAW and its sidecar are what let you come back tomorrow and push the exposure again on the 16-bit linear source.

Undo is one step. Pasting a look onto a selection can't leave one history entry per frame, or you would spend the afternoon stepping backwards through a wedding. A batch of selected photos is one entry in Photo's own Undo and Redo, and ordinary slider edits use the same Photo history. Design has a separate history stack.

Photo's keys stay in Photo. Copying a grade must not reach into a Design tab and restyle artwork you can't see. The system clipboard has to survive too: a logo you copied an hour ago is still on the clipboard, and an empty clipboard can't block a grade copy. The adjustment snapshot belongs to Photo, and the chord has to act on the key press you actually made.

Quitting follows an order. Unsaved photo settings get a **Save all**, **Discard**, or **Cancel** prompt before palette saves and artwork saves. The app waits for the writes to finish, so you never quit halfway through writing a sidecar.

## What landed

### Copy and paste

Develop the source photo. **Copy adjustments** (**Ctrl+Shift+C**) takes the settings as they are at that moment. If you edit the hero afterward, the snapshot doesn't change. The copy is a frozen look from the moment you pressed the chord, with no live link back to the sliders.

In the Library, choose the photos that receive it. **Ctrl-click** toggles one photo, **Shift-click** selects a range, and **Ctrl+A** selects every photo loaded in the library. The active photo stays in the viewer, and the selection count tells you how many photos will receive the look. These are deliberately separate, because grading the frame in front of you and choosing the batch are different jobs. You can keep the hero on screen while the selection runs down the filmstrip.

**Ctrl+Shift+V** opens **Paste…**, with boxes for **Light / tone**, **Tone curve**, **Color**, **Effects**, **Color mixer**, **Color grading**, **Crop**, and **Rotation**. Effects is the Detail group from the Develop panel. Each box travels independently. You can send Light / tone and leave the mixer, or send the grade and leave Effects, because the clarity, grain, or vignette that suited the hero is wrong on the wide frame. Light, Color, and Detail are the groups you use most while grading. Tone curve, color mixer, and color grading are the sections you expand when the group sliders aren't enough. The paste list uses those names, with Detail labeled Effects.

**Crop and Rotation start off.** The status after the copy says so: crop and rotation are excluded. Each photo keeps its own framing until you tick those two boxes. Tone and color make up the look, while crop and rotation make up the framing, and the two only travel together when you choose.

The chord is a Photo command and fires when you press it. It doesn't need anything on the system clipboard, and it leaves the clipboard alone. Design artwork on another tab is never involved. While you are grading, Photo selection, Delete, ordinary copy and paste, and stacking shortcuts stay inside Photo. Typing into a field still uses the normal clipboard, and the grade chords only apply to pictures.

Samples and images you pasted into the persona can take the adjustments, but they need an original on disk before a settings file can be saved. The paste only puts the values on the loaded photos. Writing the sidecars is the job of the next **Ctrl+S**.

Applying the same values again adds no extra undo entry. History records changes, and a second paste of an identical snapshot changes nothing.

### Saving the batch

After the paste, **Ctrl+S** saves the selected photos' settings beside their originals. The selection is the batch. The viewer can still show the hero, but the photos that get a sidecar are the ones you selected, and the selection count is the number that matters.

The batch is one Undo and one Redo. If you pasted Light, Color, and the tone curve onto thirty frames, one Ctrl+Z removes that application and one redo puts it back. There is no per-file history to scrub through. Slider moves on a single photo still go into Photo's history one change at a time, as a develop slider should.

The save writes only the categories you chose to send: Light / tone, Color, Effects (the Detail group), tone curve, color mixer, and color grading each travel independently. Pressing save doesn't spread every control onto every file. A photo that kept its own mixer keeps it, and a photo that received only Light still has its own color. Crop and rotation stay as the paste left them, off unless you turned them on.

Folder jobs write differently. A whole-folder apply writes `.omaphoto` files to disk in the background, and those files are already saved when the job finishes. A paste onto photos loaded in the Library is a different operation, and the loaded selection needs **Save settings**. Until you press Ctrl+S, the new values exist only in the session.

Export still processes only the active photo, so saving the batch doesn't export the batch. JPEG, PNG, and TIFF export works on the frame in the viewer at full developed resolution, crop and rotation included, written in the background. RAW exports to PNG and TIFF keep 16-bit channels. The sidecar save stores the grade, and the export produces a picture.

If a save fails, your edits stay available so you can retry. Edits you make while a save is still finishing stay marked unsaved, and a failed write never reports success. Opening a settings file reports a missing original, a changed original, or invalid settings, and it doesn't replace the photo you already have open. Opening an original whose settings are unusable shows the default development and a note.

## In the hand

Open the folder, or drop the files. Imports run in the background, so you can start on the frame you trust while the rest arrive. Grade it. Press **Before** if you need to see the default development, then go back to the sliders. **Auto light** is there when exposure and contrast only need a first pass. RAW exposure and white balance work on the 16-bit linear source. When the frame looks right, copy it.

```
Ctrl+Shift+C
```

The copied look is the settings at the moment you pressed the chord. If you nudge the hero again, the frames you are about to select still get the copy without the nudge, until you copy again.

Click the first target in the Library. Shift-click the last photo in the run, or Ctrl-click the frames that share the light and skip the one you already finished by hand. Check the selection count before you paste, and leave the hero in the viewer if you still want it as a reference.

```
Ctrl+Shift+V
```

The category list is where you decide. Leave Crop and Rotation off. Leave Effects off when the noise levels don't match, and leave Color mixer off when only one frame needed a green pulled back. Light / tone, Color, Tone curve, and Color grading can stay on. Click Apply.

The selected photos take those categories, and their crops and rotations stay as they were. One undo reverses the whole paste, so you never have to undo the roll one frame at a time.

Check the selection count again, then save that selection.

```
Ctrl+S
```

Each selected photo that has an original on disk gets a new or updated `.omaphoto` beside the original. `chair.NEF` stays `chair.NEF`, and `chair.NEF.omaphoto` holds the grade. The matching name is the only link between them, so if you move one without the other, the app has nothing to pair when you reopen. The camera file's bytes never change.

Press Ctrl+Z and the batch comes off the selected photos in one step. Press Ctrl+Shift+Z and it returns. If you then move one slider on the hero, that slider is its own history step and doesn't reopen the batch.

If you quit with unsaved grades, the first prompt is the photo prompt: **Save all**, **Discard**, or **Cancel**. Palette prompts and the artwork prompt come after, and only once the photo writes have finished. Cancel keeps you in the app.

Tomorrow, reopen from the Library menu with **··· > Open photo or settings…**, or by dropping either file. The pixels come from the camera file and the slider values come from the sidecar.

## The edge

The paste never treats framing as part of the look. Crop and rotation stay off until you turn them on in the category list. The paste also never writes to the camera file and never saves on its own. A loaded selection keeps the new values in Photo's history until you save settings. A sample with no original on disk can use the look for the session, but it can't get a sidecar, because there is no file to put it beside.

The snapshot stays frozen at the moment of **Ctrl+Shift+C**. Later changes on the hero don't spread to the frames you already selected.

Ctrl+S in Photo saves the grade, and a Design save never does. The `.oma` you write for the poster contains neither the RAW nor the `.omaphoto`. Place the photo in Design if you need an 8-bit developed pixel layer on the artboard, with its own Undo. Keep the RAW and the sidecar if you still plan to develop.

A failed sidecar write never throws the edit away. The values stay, marked so you can retry. A save still in progress never marks newer slider moves as saved.
