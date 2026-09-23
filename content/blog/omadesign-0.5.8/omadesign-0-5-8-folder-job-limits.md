---
id: T077
title: Folder job limits
slug: omadesign-0-5-8-folder-job-limits
excerpt: A folder job stops at 10,000 photos and 32 MiB of settings history. Cancel leaves finished files undoable, and a sidecar edited outside the job is kept on Undo.
tags: [omadesign, 0.5.8, photo]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-folder-job-limits/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-folder-job-limits/og.png
---

## The habit

You have pointed a batch at a folder before and learned what "the whole disk" feels like. Lightroom will queue a giant import and then spend the afternoon building previews you did not ask to watch. A script that walks every RAW and writes XMP will run until the laptop fans sing, and if you Ctrl+C it you get a folder that is half the new look and half the old one, with no honest way back. Bridge's batch is a progress bar that hates being closed. Affinity's export persona will tell you it failed on file 400 after it has already written file 399.

The hand wants a number it can see, a cancel that means cancel, and an undo that knows which files the job actually touched. The hand also wants a ceiling. A folder of ten thousand frames is a job. A folder of a hundred thousand, with a settings history that will not fit, is how you lose the afternoon and the undo stack together.

## The constraint

Whole-folder apply writes `.omaphoto` sidecars. It does not rewrite camera files, and it does not load the shoot into memory. Undo still has to restore the settings that were on disk before the job. That means the previous settings have to be held before the first write. If that bookkeeping cannot fit, the honest answer is to refuse the job, not to start writing and hope.

One undo step is the rule everywhere else in the studio. A folder job that finishes two thousand files cannot ask you to undo two thousand times. The completed work is one batch. Cancel has to leave that completed slice undoable, and it has to leave the untouched files untouched. There is no Creative Cloud queue to resume this for you. The progress and the errors have to be on the screen you are already looking at.

A sidecar is an ordinary file. Something else can write it while the job is in flight, or between the write and the undo. A sync tool, a backup restore, your own hand in another window. Undo that blindly puts the old bytes back will destroy that outside edit. The job has to notice, keep the outside file, and say so.

## What landed

Folder jobs check that the undo data fits before they write. The ceilings are **10,000 photos** and **32 MiB of settings history** per job. A larger folder needs to be split into smaller folders. The check happens first. You do not discover the limit as a crash in the middle of the roll.

Under the ceiling, **Write settings for N photos** runs in the background. Progress stays visible. Errors name the file. Invalid or mismatched settings that were already beside an original are reported. They are not smoothed over. Filename recognition still does not promise that every camera file will decode. Open a representative RAW from the folder before you commit the job, so the look is a look you have seen.

Cancel stops the remaining work. Files the job has not reached stay as they were. Files the job has already written stay written, and Undo restores those completed changes as a batch. Redo can put that completed slice back. You cancelled a mistake. You did not lose the ability to reverse the part that landed.

A file changed outside the batch is preserved and reported on Undo and on Redo. The job will not overwrite that sidecar with the copy it remembered. Your outside edit wins, and you are told. The camera original is never the file being restored. The argument is always the `.omaphoto`.

These folder writes are already on disk when they succeed. That is a different state from a paste onto a loaded Library selection, which still needs **Ctrl+S** before the sidecars exist. Export remains the active photo. The limit, the progress, and the undo apply to settings files, not to a hidden JPEG pass.

N itself is only the supported photo names directly in the folder you browsed. Subfolders are not part of the count and not part of the 10,000. If you need them, they are their own jobs, each with its own ceiling and its own history budget.

## In the hand

Browse the folder. Open one real RAW. Copy the adjustments or use a preset. Choose **Whole folder** and read N before you write.

If N is over 10,000, stop. Split the directory into smaller ones and run each. If the settings history for that N would pass 32 MiB, the job tells you before it writes. Smaller folders are the fix. There is no switch that raises the ceiling for one heroic run.

```
Write settings for N photos
```

Watch the progress. When a file fails, the line names it. Fix that file later, or leave it. The rest of the job is allowed to continue, and the error stays visible so you are not guessing which frame was skipped.

Hit cancel when the grade is wrong. The bar stops. The files not yet reached keep their old sidecars, or keep having none. Press Undo. The files the job did finish return to the settings they had before the write. Press Redo only if you want that slice back, and read the report if a sidecar changed outside the app. That file stays as the outside edit left it.

When the job is one you meant, leave it. The `.omaphoto` files are saved. Quit does not need a second save for those folder writes. Tomorrow, open any original or its sidecar and the pair comes back, pixels untouched.

## The edge

The job refuses to start when undo data will not fit. Ten thousand photos is the count. 32 MiB of settings history is the other wall. Both are per job. Cross either one and the job does not start. Split the folder.

Undo refuses the other wall. A sidecar that changed outside the batch is preserved and reported. The remembered bytes do not get to clobber it.

Split the folder until N fits, write the settings, and Undo if the finished slice was the wrong grade.
