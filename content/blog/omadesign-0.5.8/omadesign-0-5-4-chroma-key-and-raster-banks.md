---
id: R054-01
title: Chroma key and 30 raster treatments in Pixel
slug: omadesign-0-5-4-chroma-key-and-raster-banks
excerpt: "0.5.4 put chroma key in Pixel mode, inside a bank of 17 raster filters and 13 raster effects. Each one previews on a checkerboard, applies at full resolution in the background, and undoes in one step."
publishedAt: 2026-09-20T17:45:29Z
tags: [omadesign, 0.5.4, pixel, filters]
coverImage: /blog/omadesign-0-5-4/omadesign-0-5-4-chroma-key-and-raster-banks/og.png
---

## The habit

Someone sends you a product shot on a green sheet, or a talking-head frame on blue, and you need the subject on a transparent background. The usual move is to open a second app, key it there, export a PNG with alpha, and bring it back.

The everyday raster fixes go the same way: levels, a bit of vibrance, a blur, film grain on a poster. Before 0.5.4, Omadesign had the SVG FX stack for vectors but no bank of pixel treatments in Pixel mode.

## The constraint

These are pixel operations, so they had to run on full-resolution pixels without freezing the window. They also had to respect the rest of Pixel mode. An active selection should limit the edit, and you should be able to process a layer mask too.

I also wanted the preview to show transparency clearly. If you cannot see the key against a checkerboard, you will find its problems after export.

## What landed

**Chroma key.** Select a pixel layer and open Raster studio > Filters > Key & transparency > Chroma key. Pick Green, Blue, or Sample image. Sampling reads the original photo, so you can change the key without chasing colors the preview has already altered.

- **Similarity** sets how close a color has to be to the key.
- **Falloff** softens the transition into transparency.
- **Hardness** tightens that transition.
- **Spill cleanup** reduces leftover key color around edges.
- **Flow** controls how much of the keyed result applies in this pass.

Chroma key preserves existing transparency.

**The banks.** Chroma key is one of 17 filters, and there are 13 effects next to them. All 30 treatments share one flow for preview, compare, strength, Apply and Undo.

| Bank | Treatments |
| --- | --- |
| Filters · key and transparency | Chroma key, Alpha threshold, Feather alpha, Grow alpha, Shrink alpha |
| Filters · color and tone | Brightness / contrast, Exposure / gamma, Levels, Hue / saturation, Vibrance, Color balance, Temperature / tint, Grayscale, Sepia, Invert, Threshold, Posterize |
| Effects · blur and detail | Gaussian blur, Motion blur, Sharpen, Unsharp mask, Find edges, Emboss |
| Effects · stylize and distort | Pixelate, Film grain, Vignette, Halftone, Solarize, Swirl, Ripple |

The preview shows a checkerboard, and you can switch between Original and Preview while adjusting. Apply processes the full-resolution pixels in the background as one undoable edit. Cancel leaves the source alone. An active pixel selection limits where the edit lands, and the banks can process the active layer mask.

## In the hand

Place the green-screen photo. Open Chroma key and choose Green, or Sample image if the sheet is an off shade. Raise Similarity until the sheet drops out, add a little Falloff for the hair, and raise Spill cleanup until the green fringe fades. Flip to Original to check that the subject is intact. Apply. Press Ctrl+Z if you want another pass.

Then run Levels or Vibrance on the keyed subject from the same Filters bank, or add Film grain from Effects.

## The edge

These are applied pixel edits. There is no live, adjustable raster effect stack, so once you Apply, the pixels change. Duplicate the layer first if you want an untouched original next to it.

Chroma key removes a color. Objects and studio gear that do not match the key color stay. It does not select the subject automatically. Layer masks are still there for local cleanup.

The dialog uses a smaller preview to stay responsive, so fine detail can differ slightly from the full-resolution result.

The full 0.5.4 notes are in the [release](https://github.com/michaelmonetized/omadesign/releases/tag/v0.5.4) and [PR #80](https://github.com/michaelmonetized/omadesign/pull/80).
