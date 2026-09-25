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

Loading a thousand RAWs into a filmstrip so you can sync a grade is a tax. Lightroom will do it, and the catalog will own the folder afterward. Bridge plus Camera Raw will do it, one progress bar at a time, writing XMP beside the files if that preference is on. Affinity Photo would rather you open the images. None of those are wrong for a catalog person. They are the wrong shape when the folder is already the catalog.

You shot a job into one directory. The files are named. The light is shared. You developed one representative frame, or you already have a preset called the name of that light. The hand wants: point at the folder, write the settings, go do something else. The hand does not want every subframe, every reject folder, and every export folder from last week pulled into the same operation because they live underneath.

## The constraint

The camera files stay byte-for-byte. A folder apply that "develops" by rewriting RAW, or by exporting a JPEG on top of the original name, is a destructive pass with a friendly label. The only honest write is a `.omaphoto` beside each original. The sidecar is small. The pixels are not in it. Undo has to be possible after the fact, which means the job has to know the previous settings before it overwrites them. That bookkeeping has to fit in memory. The pictures themselves must not.

One binary, one process, a UI that still has to track. The decode of a full shoot cannot be a prerequisite for writing sidecars. Filename recognition can find the photo files in the directory you named. It cannot promise that every camera file will decode. So the job asks you to open a representative RAW first, on purpose, before it writes the rest. You see the look on a real file from that folder. Then the folder gets settings.

Subfolders stay out. A recursive walk feels thorough and ruins jobs. `2026-04-client/raw` and `2026-04-client/exports` and `2026-04-client/selects` are different decisions. The folder you browsed is the folder you meant.

## What landed

The path is short, and every step is a choice.

**Library → … → Browse folder…** points at one directory. Open a representative photo from that folder. Copy its adjustments, or choose **Presets… → Use preset…** if the look already has a name and a `.omapreset` behind it. In **Apply adjustments**, choose **Whole folder**, then **Write settings for N photos**.

N is the count of supported photo filenames sitting directly in that folder. The job writes each original's `.omaphoto` in the background. Image pixels stay untouched. The app does not load the whole shoot into memory to do it. You can watch progress. File-specific errors stay visible. Cancel stops the work that has not started. What already finished remains, and Undo can restore those completed changes.

Existing adjustments in categories you excluded are retained. Whole folder uses the same category boxes as a paste. Light / tone can land while Effects stays as it was on each file. Effects is the detail group. Tone curve, color mixer, and color grading travel only if you sent them. Crop and rotation stay off unless you included them. A photo that already had a careful crop keeps that crop when the look you are sending is only the grade.

The representative open matters. Recognizing a filename is not the same as decoding a camera. Open one RAW from the folder, confirm the look on real pixels, then write the N sidecars. Invalid or mismatched settings that already exist are reported. They are not quietly replaced with a shrug.

These folder writes are already saved when they land. That is different from a paste onto a loaded Library selection, which still needs **Ctrl+S**. Export is still the active photo only. Writing settings for N photos does not export N JPEGs.

The job also refuses to scan subfolders. Files in child directories stay out of N. If those directories need the look, browse them on purpose and run them as their own jobs.

## In the hand

Put the shoot in one folder. Leave the rejects in a different folder if they are a different decision. In Photo, open the Library menu and browse.

```
Library → … → Browse folder…
```

Open one RAW you trust from that directory. Develop it, then **Copy adjustments** with **Ctrl+Shift+C**. Or skip the hero and choose **Presets… → Use preset…** for a look you already named. Open **Apply adjustments**. Choose **Whole folder**. Read N. If N is the folder you think you are in, confirm **Write settings for N photos**.

The writes run behind the viewer. Progress stays on screen. A file that fails names itself. The originals do not change. Beside `frame_0042.RAF` you get `frame_0042.RAF.omaphoto`, same pairing rule as a single save: the settings file matches the original's name, and it does not contain the picture.

Cancel if the look is wrong. Remaining files stay as they were. Undo restores the sidecars the job already wrote, rolling the batch back as a batch. Redo can put that completed work back, and it will not stomp a sidecar that changed outside the job. That protection is the folder job's own rule.

When you want a nested folder, stop and browse that folder itself. It gets its own N, its own progress, its own undo.

## The edge

Whole folder refuses to recurse. Subfolders are not an accident of a deep walk. They are other folders, and they stay other folders until you browse them.

It also refuses to load the shoot in order to describe it. Supported names directly in the chosen directory are enough to write sidecars. Decode is what you did on the representative frame before you confirmed the write. Pixels on disk are never the thing the job edits.

Browse the folder, write settings for N photos, and leave every camera file exactly as the camera wrote it.

## Folder job limits

### The habit

You have pointed a batch at a folder before and learned what "the whole disk" feels like. Lightroom will queue a giant import and then spend the afternoon building previews you did not ask to watch. A script that walks every RAW and writes XMP will run until the laptop fans sing, and if you Ctrl+C it you get a folder that is half the new look and half the old one, with no honest way back. Bridge's batch is a progress bar that hates being closed. Affinity's export persona will tell you it failed on file 400 after it has already written file 399.

The hand wants a number it can see, a cancel that means cancel, and an undo that knows which files the job actually touched. The hand also wants a ceiling. A folder of ten thousand frames is a job. A folder of a hundred thousand, with a settings history that will not fit, is how you lose the afternoon and the undo stack together.

### The constraint

Whole-folder apply writes `.omaphoto` sidecars. It does not rewrite camera files, and it does not load the shoot into memory. Undo still has to restore the settings that were on disk before the job. That means the previous settings have to be held before the first write. If that bookkeeping cannot fit, the honest answer is to refuse the job, not to start writing and hope.

One undo step is the rule everywhere else in the studio. A folder job that finishes two thousand files cannot ask you to undo two thousand times. The completed work is one batch. Cancel has to leave that completed slice undoable, and it has to leave the untouched files untouched. There is no Creative Cloud queue to resume this for you. The progress and the errors have to be on the screen you are already looking at.

A sidecar is an ordinary file. Something else can write it while the job is in flight, or between the write and the undo. A sync tool, a backup restore, your own hand in another window. Undo that blindly puts the old bytes back will destroy that outside edit. The job has to notice, keep the outside file, and say so.

### What landed

Folder jobs check that the undo data fits before they write. The ceilings are **10,000 photos** and **32 MiB of settings history** per job. A larger folder needs to be split into smaller folders. The check happens first. You do not discover the limit as a crash in the middle of the roll.

Under the ceiling, **Write settings for N photos** runs in the background. Progress stays visible. Errors name the file. Invalid or mismatched settings that were already beside an original are reported. They are not smoothed over. Filename recognition still does not promise that every camera file will decode. Open a representative RAW from the folder before you commit the job, so the look is a look you have seen.

Cancel stops the remaining work. Files the job has not reached stay as they were. Files the job has already written stay written, and Undo restores those completed changes as a batch. Redo can put that completed slice back. You cancelled a mistake. You did not lose the ability to reverse the part that landed.

A file changed outside the batch is preserved and reported on Undo and on Redo. The job will not overwrite that sidecar with the copy it remembered. Your outside edit wins, and you are told. The camera original is never the file being restored. The argument is always the `.omaphoto`.

These folder writes are already on disk when they succeed. That is a different state from a paste onto a loaded Library selection, which still needs **Ctrl+S** before the sidecars exist. Export remains the active photo. The limit, the progress, and the undo apply to settings files, not to a hidden JPEG pass.

N itself is only the supported photo names directly in the folder you browsed. Subfolders are not part of the count and not part of the 10,000. If you need them, they are their own jobs, each with its own ceiling and its own history budget.

### In the hand

Browse the folder. Open one real RAW. Copy the adjustments or use a preset. Choose **Whole folder** and read N before you write.

If N is over 10,000, stop. Split the directory into smaller ones and run each. If the settings history for that N would pass 32 MiB, the job tells you before it writes. Smaller folders are the fix. There is no switch that raises the ceiling for one heroic run.

```
Write settings for N photos
```

Watch the progress. When a file fails, the line names it. Fix that file later, or leave it. The rest of the job is allowed to continue, and the error stays visible so you are not guessing which frame was skipped.

Hit cancel when the grade is wrong. The bar stops. The files not yet reached keep their old sidecars, or keep having none. Press Undo. The files the job did finish return to the settings they had before the write. Press Redo only if you want that slice back, and read the report if a sidecar changed outside the app. That file stays as the outside edit left it.

When the job is one you meant, leave it. The `.omaphoto` files are saved. Quit does not need a second save for those folder writes. Tomorrow, open any original or its sidecar and the pair comes back, pixels untouched.

### The edge

The job refuses to start when undo data will not fit. Ten thousand photos is the count. 32 MiB of settings history is the other wall. Both are per job. Cross either one and the job does not start. Split the folder.

Undo refuses the other wall. A sidecar that changed outside the batch is preserved and reported. The remembered bytes do not get to clobber it.

Split the folder until N fits, write the settings, and Undo if the finished slice was the wrong grade.
