---
id: T076
title: Whole folder apply
slug: omadesign-0-5-8-whole-folder-apply
excerpt: Browse a folder, apply a copied look or a preset to the whole folder, and write one .omaphoto per photo in the background. Pixels stay untouched. Subfolders stay out.
publishedAt: 2026-09-07T18:37:51Z
tags: [omadesign, 0.0.3-alpha, photo]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-whole-folder-apply/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-whole-folder-apply/og.png
---

## The habit

Loading a thousand RAWs into a filmstrip just to sync a grade is a chore. Lightroom will do it, and afterward the catalog owns the folder. Bridge plus Camera Raw will do it one progress bar at a time, writing XMP beside the files if that preference is on. Affinity Photo would rather you open the images. None of that is wrong for someone who works from a catalog. It is the wrong approach when the folder already is the catalog.

Say you shot a job into one directory. The files are named and the light is consistent. You developed one representative frame, or you already have a preset named after that light. You want to point at the folder, write the settings and go do something else. You don't want every subfolder, reject folder and last week's export folder pulled into the same operation just because they live underneath.

You have probably also pointed a batch at a folder and learned what "the whole disk" feels like. Lightroom queues a giant import and spends the afternoon building previews you didn't ask to watch. A script that walks every RAW and writes XMP runs until the laptop fans roar, and if you Ctrl+C it you get a folder that is half the new look and half the old one, with no clean way back. Bridge's batch is a progress bar that doesn't like being closed. Affinity's export persona tells you it failed on file 400 after it has already written file 399.

You want a number you can see, a cancel that actually cancels, and an undo that knows which files the job touched. You also want a ceiling. A folder of ten thousand frames is a job. A folder of a hundred thousand, with a settings history too big to hold, is how you lose the afternoon and the undo stack together.

## The constraint

The camera files stay byte-for-byte identical. A folder apply that "develops" by rewriting RAW files, or by exporting a JPEG over the original name, is a destructive pass with a friendly label. The only safe write is a `.omaphoto` beside each original. The sidecar is small and contains no pixels.

Undo has to work afterward, so the job has to record the previous settings before it overwrites them. That bookkeeping has to fit in memory, and the pictures themselves must not be loaded. If the bookkeeping can't fit, the right answer is to refuse the job up front instead of starting to write and hoping.

It is one binary and one process, and the UI still has to respond. Decoding a full shoot can't be a prerequisite for writing sidecars. Filename recognition can find the photo files in the directory you named, but it can't promise every camera file will decode. So the job asks you to open a representative RAW first, before it writes the rest. You see the look on a real file from that folder, and then the folder gets its settings.

Subfolders stay out. A recursive walk feels thorough and ruins jobs. `2026-04-client/raw`, `2026-04-client/exports` and `2026-04-client/selects` are different decisions, so the folder you browsed is the only folder the job touches.

Undo is one step everywhere else in the studio. A folder job that finishes two thousand files can't ask you to undo two thousand times, so the completed work is one batch. Cancel has to leave that completed part undoable and leave the untouched files untouched. There is no Creative Cloud queue to resume the job, so the progress and errors have to be on the screen you are already looking at.

A sidecar is an ordinary file, and something else can write it while the job is running, or between the write and the undo: a sync tool, a backup restore, or you in another window. An undo that blindly put the old bytes back would destroy that outside edit. The job has to notice, keep the outside file, and tell you.

## What landed

### Writing a folder

Every step is a choice you make.

**Library > … > Browse folder…** points at one directory. Open a representative photo from that folder. Copy its adjustments, or choose **Presets… > Use preset…** if the look already has a name and a `.omapreset` behind it. In **Apply adjustments**, choose **Whole folder**, then **Write settings for N photos**.

N is the number of supported photo filenames directly in that folder. Subfolders aren't part of the count. The job writes each original's `.omaphoto` in the background and leaves the image pixels untouched. The app doesn't load the whole shoot into memory to do it. Progress stays on screen, errors name the file, and the rest of the job continues past a failure. Invalid or mismatched settings already beside an original are reported instead of quietly replaced.

Whole folder uses the same category checkboxes as a paste, and existing adjustments in categories you excluded are kept. Light / tone can land while Effects stays as it was on each file. Effects is the detail group. Tone curve, color mixer and color grading are only sent if you include them. Crop and rotation stay off unless you include them, so a photo with a careful crop keeps it when you are only sending a grade.

The representative open matters, because recognizing a filename isn't the same as decoding a camera file. Open one RAW from the folder, confirm the look on real pixels, then write the N sidecars.

These folder writes are saved as soon as they succeed. That is different from pasting onto a loaded Library selection, which still needs **Ctrl+S** before the sidecars exist, so quitting doesn't need a second save for a folder job. Export still only applies to the active photo. Writing settings for N photos never exports N JPEGs.

### Limits, cancel and undo

Before writing, a folder job checks that its undo data will fit. The limits are **10,000 photos** and **32 MiB of settings history** per job. The check happens first, so you never find the limit as a crash in the middle of the roll. A larger folder has to be split into smaller folders. Subfolders don't count toward the 10,000. If they need the look, browse each one and run it as its own job, with its own limit and history budget.

Cancel stops the remaining work. Files the job hasn't reached stay as they were. Files it already wrote stay written, and Undo restores those completed changes as one batch. Redo can put that completed part back. Cancelling a mistake doesn't cost you the ability to reverse the part that already landed.

If a sidecar was changed outside the batch, Undo and Redo keep that file and report it. The job never overwrites it with the copy it remembered, so your outside edit wins and you are told. The camera original is never what gets restored. Only the `.omaphoto` is.

The limits, the progress and the undo all apply to settings files. There is no hidden JPEG pass.

## In the hand

Put the shoot in one folder, and keep the rejects in a different folder if they are a different decision. In Photo, open the Library menu and browse.

```
Library → … → Browse folder…
```

Open one RAW you trust from that directory. Develop it, then **Copy adjustments** with **Ctrl+Shift+C**. Or skip the hero frame and choose **Presets… > Use preset…** for a look you already named. Open **Apply adjustments**, choose **Whole folder** and read N. If N is over 10,000, stop, split the directory into smaller ones and run each. If the settings history for that N would pass 32 MiB, the job tells you before it writes, and smaller folders are the fix. There is no switch that raises the ceiling for one big run.

If N matches the folder you think you are in, confirm:

```
Write settings for N photos
```

The writes run behind the viewer with progress on screen. If a file fails, the line names it, and you can fix it later or leave it. The rest of the job continues, and the error stays visible so you know which frame was skipped. The originals don't change. Beside `frame_0042.RAF` you get `frame_0042.RAF.omaphoto`, following the same pairing rule as a single save: the settings file matches the original's name and doesn't contain the picture.

If the look is wrong, press Cancel and the bar stops. Files not yet reached keep their old sidecars, or still have none. Press Undo, and the files the job finished go back to the settings they had before. Press Redo only if you want that part back, and read the report if a sidecar changed outside the app. That file stays as the outside edit left it.

When the job is the one you meant, leave it. The `.omaphoto` files are saved. Tomorrow, open any original or its sidecar and the pair comes back, with the pixels untouched.

For a nested folder, stop and browse that folder itself. It gets its own N, its own progress and its own undo.

## The edge

Whole folder never recurses. Subfolders are separate folders and stay out until you browse them.

It never loads the shoot to describe it. Supported names directly in the chosen directory are enough to write sidecars. You decoded the representative frame before confirming, and the job never edits pixels on disk.

The job won't start when its undo data won't fit. The limits are ten thousand photos and 32 MiB of settings history per job. Cross either one and the job doesn't start, so split the folder.

Undo won't overwrite a sidecar that changed outside the batch. It keeps that file and reports it.
