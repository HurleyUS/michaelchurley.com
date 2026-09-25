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

Lightroom's library is a catalog. You import, you wait, you are told the photos now live in its idea of a folder. Capture One is the same shape. The habit underneath is simpler. Point at a folder of pictures. See them. Click one. Start grading. The files stay where the camera, or the card, or you, put them.

Photoshop's Open is one file. Bridge is the folder. You bounce. Affinity Photo opens a document and you develop inside it. For a roll, you want the roll visible: names, a thumbnail, the camera line if the file has one. ISO, shutter, aperture, the lens on hover. You do not want a modal that blocks the develop sliders while the next twelve files decode.

Drop is the other habit. Drag a handful of files onto the window. They appear. You keep working on the one you already picked. A short queue that drops the rest on the floor loses the third shot.

Samples exist for when you are learning the sliders and you do not want to point at a client's folder yet. They are pictures without an original path. You can grade them. You cannot pretend they have a sidecar destination.

## The constraint

Photo is a persona in the same binary as Design. It is not a second install. Welcome has + Photo for the workspace, a folder icon for the folder chooser, and an image icon for one file. File → Open, a drop, and the system Open With action all land here for photographs and for camera RAW. The desktop entry that 0.5.8 installs is the same `omadesign.desktop` the `.oma` files use.

Imports run on background workers. Folder scans do too. The frame loop keeps drawing the photo you are grading. A slow RAW does not freeze the sliders. That is the constraint the single UI thread forces. Decode off to the side. Show metadata when the decoder actually read it. Show nothing invented when the file has no ISO, no lens, no shutter.

The library is not a catalog database you sync. The folder is the folder. Thumbnails for the open set are the ones on screen. The folder's small previews stay available as you scroll. Full decoded sources are not retained for every card you are not looking at. A roll can be large. The machine is the machine you have.

Samples and pasted images can take adjustments. Save settings stays disabled until the photo has an original on disk. The disabled hint says: "Open a photo from disk before saving settings. Samples and pasted images have no original file." There is no silent write into a home directory you did not pick. The sidecar, when you do save, sits beside the original. This post is about opening. The sidecar rules are the next constraint over. Opening has to leave you able to grade before that save exists.

Quitting with unsaved photo edits will ask later. Opening itself does not. Browse, drop, and look. Camera files stay the bytes they were.

## What landed

Open a photo. Browse a folder. Drop files. Load samples. Those four are the doors. The Photo library lists what you opened. When the file is a RAW and the decoder stored camera data, the develop header shows RAW, the make, and the model. Under that, ISO, aperture, and shutter, when the values are actually present. Hover shows the lens and the focal length. A JPEG or TIFF with no camera block simply does not grow that line. Photo notes, if the open produced any, sit in a collapsing section. You can read why a file was partial. You are not blocked from the sliders.

Empty develop says "A little light. A little color." and "Open a photo to make it yours." The panel is useless until a photo is selected, on purpose. Select one in the library and the sliders bind to it.

Background import means you can move Exposure on the current photo while another file is still landing. The old two-file drop limit, the one that left later files unopened, is gone. A drop is a queue. The files you added open. You do not babysit them one dialog at a time.

Library → … → Browse folder… is the folder door from inside the persona. Welcome's folder icon is the same idea from the start screen. File → Open is the single file, and it is also how an `.omaphoto` sidecar reopens its original. A file-manager Open With on a RAW or a photo uses the installed desktop entry.

Navigation while you look: hold Space, or choose Hand, and drag. Middle-drag and two-finger scroll pan. Pinch, Ctrl+scroll, and Alt+scroll zoom. `Ctrl+0` fits the photo. `Ctrl+1` shows it at 100%. Those chords are the photo, when Photo is the active persona. The design canvas is not what they move.

The first picture is a display preview, max edge 1600 pixels. Zoom in when you need the real detail. Opening's promise is that a spinner does not own the sliders.

Metadata is read, not edited. Nothing on this path rewrites the camera file. You can close the app and checksum the RAW. It matches. Development lives in memory until you save settings, and in the sidecar after you do. The original stays the original.

## In the hand

Launch Omadesign. On the welcome screen press + Photo, or the folder icon and pick the card you just copied off the camera. The library fills as the scan returns. Click the first frame you care about. If the file has a camera block, read make and model above the sliders. Hover the exposure line if you want the lens.

Drag three more files from the file manager onto the window. Stay on the photo you were grading. Move Exposure. The drops land behind that work. Click one of the new names when you want it in the viewer. The previous grade is still on the previous photo. Each photo holds its own develop settings in the session.

```
+ Photo
folder icon     browse a folder
image icon      one file
drop            queue the files
```

Press Space and drag to pan. `Ctrl+1` when you need actual pixels. `Ctrl+0` when you need the whole frame again. Fit is not a destructive resize. It is the view.

Load a sample if you are teaching yourself the Tone curve and you do not want a real file in play. Grade it. Look at Save settings. It stays off, with the hint about samples. Open a file from disk when you want a sidecar. The sample did its job. It did not write a stranger's folder.

File → Open on a single JPEG from a client. Same library, same sliders, metadata only if the JPEG had it. You already know this panel. The door changed. The develop surface did not.

Save the design document, if one is open in another tab, with `Ctrl+S`. That `.oma` does not absorb the roll. The roll is files in the folder you opened. Photo's own save is Save settings, beside those files, when you are ready. Until then you are looking, and the imports can finish while you look.

## The edge

Opening refuses to block the grade on a file that is still decoding, and it refuses to invent camera metadata the file does not carry. You get make, model, ISO, aperture, shutter, lens, and focal length when they were read. You get a normal photo when they were not.

Samples refuse a sidecar. Save settings stays disabled until the picture has an original on disk. The camera file you did open is never rewritten by the act of browsing it. Drop the roll, grade the frame in front of you, and let the rest land.
