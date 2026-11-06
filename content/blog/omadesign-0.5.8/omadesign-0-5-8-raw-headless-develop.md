---
id: T112
title: RAW headless develop
slug: omadesign-0-5-8-raw-headless-develop
excerpt: omadesign --convert photograph.dng --output photograph.tif develops a full-resolution 16-bit file through the Photo pipeline. JPEG is 8-bit. A matching .omaphoto is applied on its own. The camera file is never overwritten.
publishedAt: 2026-09-07T01:46:01Z
tags: [omadesign, 0.0.2-alpha, raw]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-raw-headless-develop/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-raw-headless-develop/og.png
---

## The habit

You develop a raw file in Lightroom, Capture One or Affinity Photo, and the original stays a raw file. The adjustments live in a catalog or a sidecar, and export writes a TIFF or JPEG somewhere else. The worst thing a tool can do is offer a dialog that saves "the photo" over the camera file. Once a DNG has been overwritten with an 8-bit render, the mosaic is gone for good.

On Linux, batch developing usually means `dcraw`, `darktable-cli` or RawTherapee's command line. You point them at a NEF and a destination, then check the source checksum afterward because you have been burned before. Omadesign's Photo studio already works this way in the window. You open the raw, save settings beside it as `.omaphoto`, and export a separate JPEG, PNG or TIFF. The headless command had to use that same pipeline and refuse the same things.

## The constraint

The decoder is in the binary. LibRaw 0.22.2 is bundled, so opening a raw file doesn't download a converter or need one installed on the system. The source and the license ship with the packages. The decoder reads sensor data at full resolution, subtracts black levels, demosaics supported Bayer and X-Trans sensors, applies the camera white balance and color matrix, and honors orientation. The decode is 16-bit linear sRGB with automatic brightness turned off. DNG baseline exposure, and the Photo exposure and white-balance adjustments, are applied before the display transfer.

The camera file is never the output. Every convert refuses to write onto its own input, and raw files get a stronger rule on top of that: there is no raw writer at all, so no command can "save the DNG." Export always writes a new file. `.omaphoto` holds only settings, with no pixels, and sits beside the original with a matching name. The source file's size and modification time have to match what the sidecar recorded, or the settings aren't applied. The app won't guess. This check isn't a cryptographic identity, but it is enough to stop a sidecar from developing the wrong frame after the camera file was replaced.

JPEG from this path is an 8-bit delivery image. PNG and TIFF keep 16-bit developed channels. A batch that needs the full bit depth asks for TIFF, and a batch that wants a small proof asks for JPEG. Both leave the raw file's bytes alone.

## What landed

```sh
omadesign --convert photograph.dng --output photograph.tif
```

That develops the DNG through the Photo pipeline at full resolution and writes a 16-bit TIFF. PNG is the other 16-bit container, and JPEG is 8-bit.

```sh
omadesign --convert photograph.NEF --output photograph.jpg
omadesign --convert photograph.NEF.omaphoto --output developed.tif
```

A matching `.omaphoto` is applied automatically. Save settings in Photo writes that sidecar, named like `DSC_0001.NEF.omaphoto` next to `DSC_0001.NEF`. Converting either the raw file or the sidecar headlessly uses those saved settings, including exposure, crop and rotation. The original image data isn't rewritten. Inspect shows the camera metadata, the source dimensions, the precision and the saved development:

```sh
omadesign --inspect photograph.NEF
omadesign --inspect photograph.NEF.omaphoto
```

Recognized extensions include DNG, CR2, CR3, NEF, NRW, ARW, RAF, ORF, RW2, PEF, and the longer list of families in the format guide, from `.3fr` through `.x3f`. An extension names a family, which doesn't mean every camera and compression mode in that family works. JPEG XL compressed DNG, GPR, EIP packages and R3D video aren't supported. For a multi-image raw, only the first image is developed, with a conversion note.

Exported files are display sRGB. They don't keep the sensor mosaic, the camera's edit history, or every source metadata tag. Lens corrections, proprietary camera looks, full Adobe camera profiles, some DNG opcodes and multi-frame computational rendering aren't recreated. The rendering doesn't try to match Lightroom, Capture One or the in-camera JPEG. Clipping in the sensor or in a channel can't be recovered by a later exposure change.

The decoder rejects images over 64 megapixels and inputs over 512 MiB, and it limits LibRaw's unpacking buffers. After 120 seconds it asks LibRaw to cancel through the progress callback. That is a cooperative limit, and you shouldn't count on it like a hard process kill. Working memory still includes the decoded pixels and the development buffers.

Design placement and conversion to a document format are 8-bit. `--convert photograph.dng --output photograph.oma` gives you an 8-bit pixel layer in a document, and it isn't a 16-bit Photo master. Keep the raw and the `.omaphoto` if you still need to develop. Place in Design from the Photo studio follows the same 8-bit rule.

I tested an iPhone 16 Pro Max ProRAW DNG, a compressed Canon EOS R6 CR3 and a compressed Fujifilm X-T30 II X-Trans RAF. On the validated native build, the decoded 16-bit RGB and the full-resolution PNG exports matched independent LibRaw and sRGB references pixel for pixel, at 3024×4032, 3407×2271 and 6246×4170. A sidecar round trip restored exposure, rotation and crop. Its 3024×1512 TIFF stayed 16-bit and matched an independent develop-and-crop reference, and the JPEG kept the same dimensions. Source SHA-256 values didn't change. Those three cameras don't guarantee every body on the extension list.

The same rules hold in the window. You can open a raw through File > Open, the Photo library, a folder, Open With or a drop. Save settings writes the sidecar, and Export writes a different file. Before shows the default camera-balanced develop. It doesn't use the embedded JPEG. Ctrl+E in Photo exports the developed PNG.

## In the hand

Put `photograph.dng` in a folder. If you already developed it, `photograph.dng.omaphoto` sits beside it with the same stem.

```sh
omadesign --inspect photograph.dng
omadesign --convert photograph.dng --output photograph.tif
```

Open the TIFF in anything that shows bit depth. You should see 16-bit channels at full resolution, with crop and rotation applied if the sidecar had them. Checksum the DNG before and after and the values match, because the command has no raw output it could have written.

For a contact sheet, write JPEG:

```sh
omadesign --convert photograph.dng --output photograph.jpg
```

That gives you an 8-bit file at the same dimensions as the develop, smaller, and still separate from the camera file. For a script over a directory, write outputs to a different directory. If `--output` resolves to the DNG, CR3 or NEF, the convert is refused, and the same happens if it resolves to the input path for any other reason.

If the sidecar and the raw disagree because the raw was replaced or resized, explicitly opening the settings fails without replacing the current photo. Opening the raw itself shows the default develop, with a note that its settings can't be used. Headless follows the same rule, so a stale `.omaphoto` never produces an invented crop.

If a save fails in the studio, your unsaved edits stay so you can retry. Unsaved slider moves only exist in the Photo session, and a `.oma` doesn't store them. Use Save settings if the batch needs to see the develop.

## The edge

The camera file is never overwritten, because there is no raw writer. `--convert` refuses a destination that is the source file. `.omaphoto` stores settings beside the original and never puts a flattened copy inside the DNG.

JPEG is 8-bit, TIFF and PNG are the 16-bit develop, and a document conversion is 8-bit pixels. The raw file and its sidecar remain the master for the next pass.
