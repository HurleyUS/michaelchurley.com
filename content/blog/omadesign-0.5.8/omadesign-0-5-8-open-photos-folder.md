---
id: T066
title: Open photos folder
slug: omadesign-0-5-8-open-photos-folder
excerpt: Open a photo, browse a folder, drop files, or load samples. The library shows camera metadata when the file has it. Imports run in the background while you grade.
publishedAt: 2026-09-07T01:33:01Z
tags: [omadesign, 0.0.2-alpha, photo]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-open-photos-folder/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-open-photos-folder/og.png
---

## The habit

Lightroom's library is a catalog. You import, you wait, and you're told the photos now live in its version of a folder. Capture One works the same way. The habit underneath is simpler: point at a folder of pictures, see them, click one and start grading. The files stay where the camera, the card or you put them.

Photoshop's Open handles one file, and Bridge handles the folder, so you bounce between them. Affinity Photo opens a document and you develop inside it. For a whole roll, you want the roll visible, with names, thumbnails, and the camera details if the file has them: ISO, shutter and aperture, with the lens on hover. You don't want a modal blocking the develop sliders while the next twelve files decode.

Dropping files is the other habit. Drag a handful onto the window and they appear while you keep working on the one you picked. A short queue that silently drops the rest loses the third shot.

Samples are for learning the sliders before you point the app at a client's folder. They're pictures with no original path. You can grade them, but they have nowhere to put a sidecar.

## The constraint

Photo is a persona in the same binary as Design, not a second install. As of 0.5.6, the welcome screen has + Photo for the workspace, a folder icon for the folder chooser and an image icon for a single file. File > Open, a drop and the system Open With action all land here for photographs and camera RAW. The installed desktop entry is the same `omadesign.desktop` the `.oma` files use.

Imports and folder scans run on background workers, so the frame loop keeps drawing the photo you're grading and a slow RAW doesn't freeze the sliders. That's what a single UI thread requires. Decoding happens off to the side. Metadata appears when the decoder actually read it, and nothing is invented when a file has no ISO, lens or shutter.

The library isn't a catalog database you sync. The folder is the folder. Thumbnails for the open set are the ones on screen, and the folder's small previews stay available as you scroll. Full decoded sources aren't kept for every card you aren't looking at, because a roll can be large and the machine has the memory it has.

Samples and pasted images can take adjustments, but Save settings stays disabled until a photo has an original on disk. The hint says: "Open a photo from disk before saving settings. Samples and pasted images have no original file." Nothing gets written silently into a home directory you didn't pick. When you do save, the sidecar sits beside the original, and the sidecar rules have their own post. Opening has to let you grade before any save exists.

Quitting with unsaved photo edits will ask you what to do. Opening doesn't ask anything. You browse, drop and look, and camera files keep the bytes they had.

## What landed

There are four ways in: open a photo, browse a folder, drop files or load samples. The Photo library lists what you opened. When the file is a RAW and the decoder stored camera data, the develop header shows RAW with the make and model. Under that are ISO, aperture and shutter, when those values exist. Hovering shows the lens and focal length. A JPEG or TIFF with no camera data simply doesn't show that line. If the open produced photo notes, they sit in a collapsible section, so you can read why a file was only partly read without being blocked from the sliders.

With nothing selected, Develop says "A little light. A little color." and "Open a photo to make it yours." The panel stays inactive on purpose until you select a photo in the library, and then the sliders bind to it.

Because imports run in the background, you can move Exposure on the current photo while another file is still loading. The old two-file drop limit, which left later files unopened, is gone. A drop is now a queue, and every file you added opens without a dialog for each one.

Library > … > Browse folder… is the folder option inside the persona, and the welcome screen's folder icon does the same from the start screen. File > Open handles a single file, and it's also how an `.omaphoto` sidecar reopens its original. Open With on a RAW or photo in the file manager uses the installed desktop entry.

To navigate while you look, hold Space or choose Hand and drag. Middle-drag and two-finger scroll pan. Pinch, Ctrl+scroll and Alt+scroll zoom. `Ctrl+0` fits the photo and `Ctrl+1` shows it at 100%. When Photo is the active persona, those shortcuts move the photo, not the design canvas.

The first picture you see is a display preview with a maximum edge of 1600 pixels. Zoom in when you need the real detail. The point is that a spinner never takes over the sliders.

Metadata is read, never edited, and nothing on this path rewrites the camera file. You can close the app, checksum the RAW and get a match. Development lives in memory until you save settings, and in the sidecar after that. The original stays the original.

## In the hand

Launch Omadesign. On the welcome screen, press + Photo, or the folder icon, and pick the card you just copied from the camera. The library fills as the scan returns. Click the first frame you care about. If the file has camera data, the make and model appear above the sliders, and hovering the exposure line shows the lens.

Drag three more files from the file manager onto the window and keep grading the photo you're on. Move Exposure. The dropped files load behind that work. Click one of the new names when you want it in the viewer. The previous photo keeps its grade, because each photo holds its own develop settings in the session.

```
+ Photo
folder icon     browse a folder
image icon      one file
drop            queue the files
```

Press Space and drag to pan. Use `Ctrl+1` when you need actual pixels and `Ctrl+0` to see the whole frame again. Fit only changes the view. It doesn't resize anything.

Load a sample if you're teaching yourself the Tone curve and don't want a real file involved. Grade it and look at Save settings. It stays off, with the hint about samples. Open a file from disk when you want a sidecar. The sample never writes into anyone's folder.

Use File > Open on a single JPEG from a client. You get the same library and sliders, with metadata only if the JPEG had it. Only the way in changed.

If a design document is open in another tab, save it with `Ctrl+S`. That `.oma` doesn't absorb the roll, which stays as files in the folder you opened. Photo's own save is Save settings, written beside those files when you're ready. Until then you're only looking, and the imports can finish while you do.

## The edge

Opening never blocks grading on a file that's still decoding, and it never invents camera metadata a file doesn't have. You see make, model, ISO, aperture, shutter, lens and focal length when they were read, and a normal photo when they weren't.

Samples can't have a sidecar, so Save settings stays disabled until the picture has an original on disk. Browsing never rewrites a camera file you opened.
