---
id: T071
title: Photo export bit depth
slug: omadesign-0-5-8-photo-export-bit-depth
excerpt: Export JPEG, PNG, or TIFF in the background at full developed size, crop and rotation included. RAW PNG and TIFF keep 16-bit channels. Place in Design adds an 8-bit pixel layer and one undo.
publishedAt: 2026-09-07T01:36:01Z
tags: [omadesign, 0.0.2-alpha, photo]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-photo-export-bit-depth/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-photo-export-bit-depth/og.png
---

## The habit

You export when the grade is done. You pick a 16-bit TIFF when the file will be edited further, and a JPEG when it is going onto a page. Export writes a new file and leaves the camera file alone.

The other destination is the layout. The graded picture lands on the artboard as pixels you can mask, and you can undo the placement. The master grade stays in the RAW plus the sidecar, so next week you can change Exposure and place it again.

Crop and rotation have to be part of the export. A TIFF that still includes the pixels you cropped out, with a note saying "crop later," will get misprinted. The developed size is the cropped, rotated size. Full resolution means the sensor's resolution after that crop. It doesn't mean the 1600 pixel preview you have been looking at.

## The constraint

Export runs in the background, because a full RAW develop is too much work for the frame that also has to track the mouse. The button reads "Exporting…" while the job runs, and you can't start a second export on top of it. The preview and the sliders stay available, and the file writes when the develop finishes.

The destination is either a new file you pick in the native dialog or a pixel layer in a Design document you already have. The command line refuses to convert a file onto itself, for the same reason the desktop won't offer the RAW as the output: the original is protected. The three writers are JPEG, PNG and TIFF.

Bit depth follows the source and the container. A RAW exported to PNG or TIFF keeps 16-bit channels. JPEG is an 8-bit delivery image. In all three, the pixels are display sRGB values. They don't contain the sensor mosaic, the camera's edit history, or every metadata tag from the source. You are exporting a developed picture, and the RAW itself stays where it is.

Place in Design develops the picture and adds an 8-bit pixel layer, which you can undo. A new document takes the photo's actual size. The RAW and the `.omaphoto` stay where they were, and they remain the files you reopen to keep grading. The layer in the `.oma` is a rendering. If you change the grade later and place again, you get another 8-bit layer. The first one doesn't track the sidecar.

Headless convert uses the same pipeline. `--convert` on a RAW or on its sidecar writes 16-bit PNG or TIFF, or 8-bit JPEG, and applies the saved settings automatically. Converting to a document format, `.oma` included, renders an 8-bit pixel layer, the same as Place in Design. The depth is chosen on purpose for each destination.

Crop and rotation are included, and the export doesn't add a transparent fringe where a crop could confuse the bounds. You get the developed rectangle.

## What landed

In the Photo persona, the File menu's export block has Export PNG… (`Ctrl+E`), Export TIFF… and Export JPEG…. The document exporters for SVG and PSD are hidden while Photo is active. The develop panel offers the same choice, with a menu of JPEG, PNG and TIFF and an Export… button. Its tooltip reads "Full resolution. RAW PNG and TIFF retain 16-bit precision."

Pick PNG or TIFF for a RAW when the next step needs the full channels. Pick JPEG when the next step is a page, a slide, or a preview nobody will grade again. The develop runs at the source's full resolution, then applies crop and rotation, then writes the file. A JPEG from a RAW is 8-bit sRGB, and a PNG or TIFF from a RAW is 16-bit. A PNG from a file that was already 8-bit doesn't get promoted. The 16-bit rule only applies to RAW files.

Place in Design is the button under Export. It builds the 8-bit developed layer in the background and adds it to the design document without disturbing the artwork already there. Undo removes the placement. The RAW isn't embedded in the poster. If you need the grade again, it is in the sidecar beside the original.

On the command line, for a file you already saved settings on:

```
omadesign --convert photograph.NEF.omaphoto --output developed.tif
omadesign --convert photograph.dng --output photograph.jpg
```

The TIFF is a 16-bit develop with crop and rotation included. The JPEG is 8-bit. Neither command can use the source path as the output. Run inspect first if you want the metadata without writing anything.

While "Exporting…" is showing, the export controls are disabled, so let the worker finish. A failure shows on the status line. The original is untouched, because it was never opened for writing. Retry once you have disk space, or after you pick a directory you can write to.

Design's own File > Export PNG at 1×, 2× or 3× is a different command. It rasterizes the `.oma`, so use it for the poster. Use Photo's export for the photograph at its developed resolution. Use Place in Design when the photograph should become an 8-bit, undoable layer of the poster.

Testing on a real sidecar produced a cropped 16-bit TIFF that matched an independent develop, and a JPEG at the same dimensions. Whether your file opens still depends on the decoder, but the depth rule doesn't. If the RAW opened, PNG and TIFF export keep 16-bit channels and JPEG doesn't.

## In the hand

Finish the grade. Crop with `C` and press Enter to apply it. If the camera orientation was wrong and the decoder's handling of the tag wasn't what you wanted, rotate to 90 in Detail. Otherwise leave rotation alone. The export includes whatever crop and rotation are set.

Open the format menu, choose TIFF and click Export…. Pick a new name and wait for "Exporting…" to finish. Open the TIFF in a tool that shows bit depth, and you'll see 16-bit channels. The dimensions match the crop. They are smaller than the uncropped sensor and larger than the 1600 preview.

```
PNG or TIFF   16-bit on a RAW
JPEG          8-bit delivery
Place in Design   8-bit pixel layer, one undo
```

When you need a small file, choose JPEG and export again under a new name. It is the same grade in 8-bit sRGB, without the mosaic. Send that. Keep the TIFF in case a printer asks for it, and keep the RAW and the `.omaphoto` if you are doing the printing yourself.

Click Place in Design and switch to the Design tab. The developed 8-bit layer is there. `Ctrl+Z` removes it, and you can place again if the position was wrong. Mask it, set type over it and save the `.oma`. Tomorrow, change Exposure on the RAW, save the sidecar and click Place in Design again. You now have a new 8-bit layer, and the old one doesn't update by itself, so delete it if it is out of date. The master grade was never inside it.

`Ctrl+E` in Photo starts the PNG export, using the same full-resolution path as the button. `Ctrl+E` in Design does something else. It exports the document PNG at the Scale you set, 1×, 2× or 3×. The active persona decides which export runs.

## The edge

Photo export won't write over the camera file, and it won't hand Design a 16-bit RAW as a layer. PNG and TIFF from a RAW keep 16-bit developed channels, with crop and rotation, in a new file. JPEG is 8-bit. Place in Design gives you an 8-bit layer and one undo step, and the RAW plus `.omaphoto` remain the files you grade next week.

The preview's 1600 pixel edge isn't the export size. Export develops at full resolution, so if you only judged sharpness on the preview, zoom into the tiles before exporting. The exported file is the developed picture in display sRGB. The mosaic and camera history stay in the original.
