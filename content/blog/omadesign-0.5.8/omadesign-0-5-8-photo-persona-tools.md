---
id: T015
title: Photo persona tools
slug: omadesign-0-5-8-photo-persona-tools
excerpt: "Photo grades the capture with Crop C and the develop sliders, then Place in Design. Settings sit in a .omaphoto file. The camera original is never rewritten."
tags: [omadesign, 0.5.8, photo]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-photo-persona-tools/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-photo-persona-tools/og.png
---

## The habit

Lightroom and Capture One taught you a browser, a develop module, and a catalog. Photoshop taught you Camera Raw as a dialog on the way into a pixel document. Affinity Photo develops a RAW into the document you then retouch. The muscle memory inside the dialog is the same. Crop. Exposure. White balance. A tone curve. Color. Detail. Then the picture lands on a layout.

The part you watch like a hawk is the original. A develop pass that writes into the camera file is a bad surprise. Sidecars exist so the NEF, CR3, or DNG you copied off the card stays the file you copied off the card. You can delete the sidecar and be back to the camera's file. You cannot undo a rewritten RAW with `Ctrl+Z` if the app already closed.

## The constraint

One binary, so Photo is a persona, not a second install. One `.oma` for the design you are building. The camera file is not that document. A design save that embedded every RAW you ever placed would turn a poster into a disk. A design save that rewrote the RAW to "remember the grade" would destroy the capture. The constraint forces a split you can explain in one sentence. Development settings live in a small `.omaphoto` beside the original. The original bytes stay. **Place in Design** copies an 8-bit developed image into a pixel layer in the `.oma`, with undo. You keep the RAW and the sidecar if you want to grade again.

Undo inside Photo is Photo's own history. It is not the poster's undo, and it is not a license to touch the camera file. Quitting asks Save all, Discard, or Cancel for unsaved photo settings before palette and artwork saves, and it waits for the writes to finish.

The decoder is in the binary. You do not install a converter and you do not wait on a download to open a file. glibc 2.35 builds already bundle it. Recognized families include DNG, CR2, CR3, NEF, NRW, ARW, RAF, ORF, RW2, PEF, and the longer extension list in the format notes. An extension names a family. It does not promise every camera and every compression mode. There is no RAW writer. Export is JPEG, PNG, or TIFF, as a new file.

Crop has to be `C`, because that is the key the rest of the studio already published for this job. The develop controls have to be sliders in named groups, not a wall of every vendor's label. Light, Color, Detail. Curve, mixer, and grading open when you need them.

## What landed

Photo is the persona for grading a photograph. First tools: Crop `C`, the develop sliders, then **Place in Design**. This is the standing behavior in 0.5.8, including the RAW rules the format notes spell out. The 0.5.8 packages bundle the RAW decoder. They do not add a writer.

Open a photo, browse a folder, drop files, or load samples. **+ Photo** on the welcome screen opens the workspace. The folder icon chooses a folder. The image icon chooses a file. Imports and folder scans run in the background. The library shows camera metadata when it has it. The first display preview's long edge is at most 1600 pixels. Zoom in and the full-resolution tiles arrive in the background while the current preview stays up. Results from an older photo or an older adjustment are discarded.

The Develop panel groups **Light**, **Color**, and **Detail**. Tone curve, color mixer, and color grading expand when you need them. **Before** compares the default development. For a RAW, Before is the default camera-balanced development, the embedded JPEG left out of that comparison. **Auto light** balances exposure and contrast. RAW exposure and white balance use the 16-bit linear source.

**Save settings** writes the adjustments beside the original. `photo.png` pairs with `photo.png.omaphoto`. A RAW looks like `DSC_0001.NEF.omaphoto`. The settings file does not contain the image. Keep the names matched and keep the pair together. Resume with **File → Open**, a drop, or **Photo → Library → ··· → Open photo or settings…**. Either file restores the original pixels and the saved adjustments.

**Place in Design** adds an 8-bit developed pixel layer. Undo removes that placement as a step on the design. Retain the RAW and the `.omaphoto` for later. Export JPEG, PNG, or TIFF in the background at full developed resolution, including crop and rotation. RAW PNG and TIFF keep 16-bit channels. JPEG is 8-bit delivery. Exported files do not keep the sensor mosaic or the camera's edit history.

Crop commits with Enter and cancels with Esc during the drag. A held mouse button cannot silently restart the crop after you cancel. Space or Hand pans. `Ctrl+0` fits. `Ctrl+1` is 100%. Pinch, Ctrl-scroll, and Alt-scroll zoom.

## In the hand

```sh
omadesign
```

Open Photo and point it at a folder, or drop one RAW on the window.

```text
C
```

Drag the crop. Enter applies. Esc cancels the drag in progress. Rotate if the camera orientation needs a human decision on top of the orientation the decoder already honored.

Move **Light** until exposure and contrast sit. Open the tone curve if the slider is not the shape you want. Switch to **Color** for white balance and the mixer. **Detail** for sharpening and noise. **Before** shows the default development. **Auto light** is there when you want a starting balance and then your own numbers.

```text
Ctrl+S
```

In Photo, save writes the `.omaphoto` next to the original. It does not write the camera file. Look at the directory. Two files, matched names. The RAW's modification time stays the camera's, aside from whatever the filesystem does when you only read it. The settings file is the new one.

**Place in Design.** The poster, or a new design document, gains an 8-bit pixel layer of the developed image. `Ctrl+Z` on that document removes the placement. The `.omaphoto` is still beside the RAW. Grade again later and place again if the layout needs a new development.

Export PNG or TIFF when a printer or a website needs pixels and you are not placing into this `.oma`. The export is a new file. The original path is untouched.

Copy a look only when you mean to. **Copy adjustments** is `Ctrl+Shift+C`. Select other photos. **Paste adjustments** is `Ctrl+Shift+V`. Crop and rotation stay off unless you turn those categories on. That batch is its own topic. The tool in the hand for one picture is still `C` and the sliders.

## The edge

The original photograph is never rewritten. There is no RAW writer. JPEG XL-compressed DNG, GPR, EIP packages, and R3D video are outside this build. Only the first image of a multi-image RAW is developed, with a conversion note. Images over 64 megapixels are rejected, and inputs over 512 MiB are rejected. Lens corrections, proprietary camera looks, and unsupported DNG opcodes are not recreated. The render is not trying to match Lightroom, Capture One, or the in-camera JPEG.

Opening settings reports a missing original, a changed original, or invalid settings, and does not replace the photo you currently have open. Opening the original with unusable settings shows default development and a note. A failed save keeps your edits so you can retry. Edits you make while a save is finishing stay marked unsaved.

A Design `.oma` save does not store the RAW source or its settings. If the sidecar and the camera file part ways, the grade does not hide inside the poster. Place in Design already baked an 8-bit layer for the layout. That layer is not the negative.

Press `C`, grade, then **Save settings**. The `.omaphoto` is the grade. The camera file stays the camera file.
