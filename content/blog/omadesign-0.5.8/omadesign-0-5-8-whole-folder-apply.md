---
id: T076
title: Whole folder apply
slug: omadesign-0-5-8-whole-folder-apply
excerpt: Browse a folder, apply a copied look or a preset to the whole folder, and write one .omaphoto per photo in the background. Pixels stay untouched. Subfolders stay out.
tags: [omadesign, 0.5.8, photo]
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
