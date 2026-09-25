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

You export when the grade is done. 16-bit TIFF when the file is still going to move. JPEG when it is going to a page. Export writes a new file. The camera file stays.

The other destination is the layout. The graded picture lands on the artboard as pixels you can mask, with the placement undoable. The master grade remains the RAW plus the sidecar, so next week you can change Exposure and place again.

Crop and rotation have to be in the export. A TIFF that includes the pixels you cropped out, with a note that says "crop later," is a file you will misprint. The developed size is the cropped, rotated size. Full resolution means the sensor's resolution after that crop, not the 1600 pixel preview you have been staring at.

## The constraint

Export runs in the background. A full RAW develop is too much work for the frame that also has to track the mouse. The button reads "Exporting…" while that job runs, and you do not start a second one on top of it. The preview stays up. The sliders stay up. The file writes when the develop finishes.

The destination is a new file you pick in the native dialog, or a pixel layer in a Design document you already have. Same-file conversion is refused on the command line for the same reason the desktop will not offer the RAW as the output. The original is protected. JPEG, PNG, and TIFF are the three writers.

Bit depth follows the source and the container. A RAW exported to PNG or TIFF keeps 16-bit channels. JPEG is an 8-bit delivery image. The pixels in all three are display sRGB values. They do not contain the sensor mosaic, the camera's edit history, or every metadata tag from the source. You are exporting a developed picture. You are not cloning the RAW into a friendlier extension.

Place in Design develops the picture and adds an 8-bit pixel layer, with Undo. A new document takes the photo's actual size. The RAW and the `.omaphoto` stay where they were, and they remain the files you reopen to keep grading. The layer in the `.oma` is a rendering. Change the grade later, place again, and you get another 8-bit layer. The first one does not secretly track the sidecar.

Headless convert uses the same pipeline. `--convert` on a RAW or on a RAW's sidecar writes 16-bit PNG or TIFF, or 8-bit JPEG, and applies saved settings automatically. Converting to a document format, `.oma` included, renders an 8-bit pixel layer. That matches Place in Design. The depth is a property of the destination, chosen on purpose, not an accident of whichever buffer was handy.

Crop and rotation are included. The export does not add a transparent fringe where a crop used to confuse the bounds. You get the developed rectangle.

## What landed

In the Photo persona the File menu's export block is Export PNG… with `Ctrl+E`, Export TIFF…, and Export JPEG…. The document exporters for SVG and PSD are out of the way while Photo is active. The develop panel repeats the choice: a menu of JPEG, PNG, TIFF, and an Export… button. The hover says "Full resolution. RAW PNG and TIFF retain 16-bit precision."

Pick PNG or TIFF for a RAW when the next stop needs the channels. Pick JPEG when the next stop is a page, a slide, or a preview someone will not grade again. The develop runs at the full resolution of the source, then crop and rotation, then the writer. A JPEG from a RAW is 8-bit sRGB. A PNG or TIFF from a RAW is 16-bit. A PNG from a file that was already 8-bit is not a magic promotion. The 16-bit promise is the RAW path.

Place in Design is the button under Export. It builds the 8-bit developed layer in the background and puts it in the design document, preserving the artwork already there. Undo removes that placement. The photo's RAW is not embedded as RAW. If you need the grade again, it is the sidecar beside the original, not a buried copy inside the poster.

The command line, for a file you already saved settings on:

```
omadesign --convert photograph.NEF.omaphoto --output developed.tif
omadesign --convert photograph.dng --output photograph.jpg
```

The TIFF is 16-bit developed, crop and rotation included. The JPEG is 8-bit. Neither path is allowed to use the source path as the output. Inspect first if you want the metadata without writing.

While Exporting… is showing, the export controls disable. Let the worker finish. A failure reports on the status line. The original is still untouched, because it was never opened for write. Retry after you have disk space, or after you pick a directory you can write.

Design's own File → Export PNG at 1×, 2×, or 3× is a different command. It rasterizes the `.oma`. Use it for the poster. Use Photo's export for the photograph at its developed resolution. Place in Design when the photograph should become a layer of the poster, 8-bit, undoable, and done.

Verified behavior on a real sidecar included a cropped TIFF at 16-bit that matched an independent develop, and a JPEG at the same dimensions. Your file's support still depends on the decoder. The depth rule does not. If the RAW opened, PNG and TIFF export keep 16-bit channels, JPEG does not.

## In the hand

Finish the grade. Crop with `C`. Enter applies the crop. Rotate to 90 in Detail if the camera orientation was wrong and the decoder's honor of the tag was not what you wanted, or leave rotation alone if it was. The export will include whichever crop and rotation are set.

Open the format menu. Choose TIFF. Export…. Pick a new name. Wait out "Exporting…". Open the TIFF in a tool that shows bit depth. 16-bit channels. The dimensions match the crop, not the uncropped sensor, and not the 1600 preview.

```
PNG or TIFF   16-bit on a RAW
JPEG          8-bit delivery
Place in Design   8-bit pixel layer, one undo
```

Choose JPEG and export again, new name, when you need the small file. It is the same grade, 8-bit, sRGB, no mosaic. Send that. Keep the TIFF if a printer asks. Keep the RAW and the `.omaphoto` if you are the printer.

Click Place in Design. Switch to the Design tab. The layer is there, developed, 8-bit. `Ctrl+Z` removes it. Place again if the position was wrong. Mask it, set type over it, save the `.oma`. Tomorrow, change Exposure on the RAW, save the sidecar, Place in Design again. You now have a new 8-bit layer. The old one does not update by itself. Delete it if it is stale. The master grade never lived inside it.

`Ctrl+E` in Photo starts the PNG export. Same full-resolution path as the button. Do not confuse it with `Ctrl+E` in Design, which exports the document PNG at the Scale you set, 1×, 2×, or 3×. Persona decides which export you invoked.

## The edge

Photo export refuses to write the camera file, and it refuses to hand Design a 16-bit RAW pretending to be a layer. PNG and TIFF from a RAW keep 16-bit developed channels, crop and rotation included, in a new file. JPEG is 8-bit. Place in Design is 8-bit, one undo, and the RAW plus `.omaphoto` remain the files you grade next week.

The preview's 1600 pixel edge is not the export size. Export develops the full resolution. If you judged sharpness only on the preview, zoom the tiles first, then export. The file you write is the developed picture, display sRGB, mosaic and camera history left in the original where they belong.
