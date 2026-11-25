---
id: T112
title: RAW headless develop
slug: omadesign-0-5-8-raw-headless-develop
excerpt: omadesign --convert photograph.dng --output photograph.tif develops a full-resolution 16-bit file through the Photo pipeline. JPEG is 8-bit. A matching .omaphoto is applied on its own. The camera file is never overwritten.
tags: [omadesign, 0.5.8, raw]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-raw-headless-develop/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-raw-headless-develop/og.png
---

## The habit

You develop a raw file in Lightroom, Capture One, or Affinity Photo, and the original stays a raw file. The adjustments live in a catalog or a sidecar. Export writes a TIFF or a JPEG somewhere else. The cardinal sin is a dialog that saves "the photo" and replaces the camera file. A DNG that got overwritten with an 8-bit render is gone. You do not get the mosaic back.

On a Linux box the batch version is usually `dcraw`, `darktable-cli`, or RawTherapee’s command line. You point them at a NEF and a destination. You check the source checksum afterwards because you have been burned. Omadesign’s Photo studio already does this in the window: open the raw, save settings beside it as `.omaphoto`, export a separate JPEG, PNG, or TIFF. The headless command has to be that same pipeline, with the same refusal.

## The constraint

The decoder is in the binary. LibRaw 0.22.2 is bundled. Opening a raw file does not download a converter and does not require one installed on the system. The source and the license ship with the packages. Sensor data is read at full resolution. Black levels come off. Supported Bayer and X-Trans sensors are demosaiced. The camera white balance and color matrix are applied. Orientation is honored. The decode is 16-bit linear sRGB with automatic brightness disabled. DNG baseline exposure, and the Photo exposure and white-balance adjustments, happen before the display transfer.

The camera file is never the output. Same-file conversion is refused for every convert, and raw has the stronger rule on top: there is no raw writer at all. A command cannot "save the DNG." Export is a new file. `.omaphoto` is settings, not pixels. It sits beside the original, name-matched. The source size and modification time have to still match or the settings are not applied as a silent guess. This check is not a cryptographic identity. It is enough to stop a sidecar from developing the wrong frame after the camera file was replaced.

JPEG from this path is 8-bit, a delivery image. PNG and TIFF keep 16-bit developed channels. A batch that wants the bits asks for TIFF. A batch that wants a small proof asks for JPEG. Both leave the raw file’s bytes alone.

## What landed

```sh
omadesign --convert photograph.dng --output photograph.tif
```

That develops the DNG through the Photo pipeline at full resolution and writes a 16-bit TIFF. PNG is the other 16-bit container. JPEG is 8-bit.

```sh
omadesign --convert photograph.NEF --output photograph.jpg
omadesign --convert photograph.NEF.omaphoto --output developed.tif
```

A matching `.omaphoto` is applied automatically. Save settings in Photo writes that sidecar. The name looks like `DSC_0001.NEF.omaphoto` next to `DSC_0001.NEF`. Headless convert of the raw file, or of the sidecar, uses those settings: exposure, crop, rotation, the development you saved. The original image data is not rewritten. Inspect shows the camera metadata, the source dimensions, the precision, and the saved development:

```sh
omadesign --inspect photograph.NEF
omadesign --inspect photograph.NEF.omaphoto
```

Recognized extensions include DNG, CR2, CR3, NEF, NRW, ARW, RAF, ORF, RW2, PEF, and the longer family list in the format guide, from `.3fr` through `.x3f`. An extension names a family. It does not mean every camera and every compression mode in that family works. JPEG XL compressed DNG, GPR, EIP packages, and R3D video are not supported. Only the first image of a multi-image raw is developed, with a conversion note.

Exported files are display sRGB. They do not keep the sensor mosaic, the camera’s edit history, or every source metadata tag. Lens corrections, proprietary camera looks, full Adobe camera profiles, some DNG opcodes, and multi-frame computational rendering are not recreated. Rendering is not trying to match Lightroom, Capture One, or the in-camera JPEG. Clipping in the sensor or the channel is not recovered by a later exposure move.

The decoder rejects images over 64 megapixels and inputs over 512 MiB. It limits LibRaw’s unpacking buffers. It asks LibRaw to cancel through the progress callback after 120 seconds. That callback is a cooperative limit, not a hard process kill you should bet a deadline on. Working memory still includes the decoded pixels and the development buffers.

Design placement and a convert to a document format are 8-bit. `--convert photograph.dng --output photograph.oma` gives you an 8-bit pixel layer in a document, not a 16-bit Photo master. Keep the raw and the `.omaphoto` if you still need to develop. Place in Design from the Photo studio follows that same 8-bit rule.

Checked files included an iPhone 16 Pro Max ProRAW DNG, a compressed Canon EOS R6 CR3, and a compressed Fujifilm X-T30 II X-Trans RAF. On the validated native build, the decoded 16-bit RGB and the full-resolution PNG exports matched independent LibRaw and sRGB references pixel for pixel. Sizes were 3024×4032, 3407×2271, and 6246×4170. A sidecar round trip restored exposure, rotation, and crop. Its 3024×1512 TIFF stayed 16-bit and matched an independent develop-and-crop reference. The JPEG kept the same dimensions. Source SHA-256 values did not change. Those three cameras are not a promise for every body on the extension list.

In the window, the same rules hold. File → Open, the Photo library, a folder, Open With, or a drop. Save settings writes the sidecar. Export writes a different file. Before shows the default camera-balanced develop, not the embedded JPEG. Ctrl+E in Photo exports the developed PNG.

## In the hand

Put `photograph.dng` in a folder. If you already developed it, `photograph.dng.omaphoto` sits beside it with the same stem.

```sh
omadesign --inspect photograph.dng
omadesign --convert photograph.dng --output photograph.tif
```

Open the TIFF in anything that shows bit depth. You want 16-bit channels, full resolution, crop and rotation included when the sidecar said so. Checksum the DNG before and after. It matches. The command has no raw output it could have written.

For a contact sheet, write JPEG:

```sh
omadesign --convert photograph.dng --output photograph.jpg
```

8-bit, same dimensions as the develop, smaller file, still not the camera file. For a script over a directory, write outputs to a different directory. If `--output` resolves to the DNG, the CR3, or the NEF, the convert is refused. If it resolves to the same path as the input for any other reason, it is refused too.

When the sidecar and the raw disagree, because the raw was replaced or resized, an explicit open of the settings fails without replacing the current photo. Opening the raw itself shows the default develop and a note when its settings cannot be used. Headless follows that binding. A stale `.omaphoto` is not a free pass to invent a crop.

Failed saves in the studio keep the unsaved edits so you can retry. Unsaved slider moves exist in the Photo session only. A `.oma` does not store them. Save settings if the batch has to see the develop.

## The edge

The camera file is never overwritten. There is no raw writer. `--convert` refuses a destination that is the source file. `.omaphoto` stores settings beside the original. It does not store a flattened copy inside the DNG.

JPEG is 8-bit. TIFF and PNG are the 16-bit develop. A document conversion is 8-bit pixels. The raw file and its sidecar remain the master for another pass.

Run `omadesign --convert photograph.dng --output photograph.tif` and leave the DNG where the camera wrote it.
