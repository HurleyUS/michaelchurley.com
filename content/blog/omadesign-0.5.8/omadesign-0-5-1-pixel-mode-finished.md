---
id: R051-01
title: Pixel mode, finished enough to use
slug: omadesign-0-5-1-pixel-mode-finished
excerpt: "0.5.1 made Pixel mode selections real. Marquee, ellipse, lasso and wand now leave a mask that paint respects. The eyedropper shows its color, smudge smears, and clone tracks its source."
publishedAt: 2026-09-18T23:46:50Z
tags: [omadesign, 0.5.1, pixel]
coverImage: /blog/omadesign-0-5-1/omadesign-0-5-1-pixel-mode-finished/og.png
---

## The habit

You pick the marquee, drag a box, and start painting. The paint stays in the box. That is what a selection is for, and every raster editor you have used works that way.

In 0.5.0, Omadesign's Pixel mode did not. I shipped a well of Pixel tools, and some of them only looked finished. Brush, eraser, clone and zoom worked. Marquee, elliptical marquee, lasso and wand wrote a mask and threw it away. You dragged a box, nothing stayed on the canvas, and paint ignored it. The eyedropper sampled a color and hid it. Smudge stamped a disk. Clone copied the same patch instead of tracking the source. Pointer tools waited six pixels before they responded.

0.5.1 is the release where I fixed that.

## The constraint

A selection you cannot see is worse than no selection. You cannot tell whether the tool is broken or waiting for a modifier you have not found. So the fix had two halves: draw the mask, and make every paint tool respect it.

The fixes also had to work on placed images. A photo placed at an angle and scaled down still has pixels, and a tool that maps the pointer to the wrong pixel is broken in a different way.

## What landed

**Selections.** Rectangular marquee, elliptical marquee, lasso and wand leave a tinted mask and marching ants on the active pixel layer.

- Shift adds.
- A click without a drag clears. Esc and Deselect clear.
- Delete punches the selected pixels, as one undo.
- Paint, fill, clone, heal and smudge stay inside the selection.
- Wand tolerance still lives in Brush.

**Eyedropper.** Click a pixel and see the color. The inspector chip and the Color row both show it. In Pixel mode it samples the raster first, through a placed image's position, scale and rotation.

**Smudge and clone.** Smudge pulls color along the stroke instead of stamping a disk. Clone locks an offset from the Alt-click source and tracks it as you paint. Both keep a working buffer instead of cloning the whole layer on every mouse event.

**Pointer.** Brush, clone, smudge, marquees and lasso respond from the press, with no six-pixel delay. Pixel tools no longer steal object handles. Healing already mapped through a placed image, and brush, clone, smudge, fill, wand and eyedropper now do the same.

The work is in [PR #54](https://github.com/michaelmonetized/omadesign/pull/54), and the release cut is [PR #55](https://github.com/michaelmonetized/omadesign/pull/55). 391 native library tests pass (`cargo test --lib`, 5 ignored), with new coverage for smudge tracking, clone offset, selection clip, each selection tool, selection-clipped brush, eyedropper on a placed raster, and smudge undo.

This release also started the studio log at [omadesign.app/updates](https://omadesign.app/updates).

## In the hand

Add a pixel layer, or place a photo. Pick the marquee from the Pixel tools and drag. The tint stays. Hold Shift and drag again to add to it. Press B and paint across the edge, and the brush stops at the selection. Press Delete and the selected pixels go. Ctrl+Z brings them back.

Press J for Clone, Alt-click a source, then paint somewhere else. The offset travels with the stroke.

Update with the usual line, then relaunch. A window that is already open is still running the old binary.

## The edge

Two limits shipped with 0.5.1:

- The marching-ants outline follows the selection's bounding box. The tint shows the real mask, so a wand selection still reads as its shape in the tint.
- Pixel selections live in the session. The saved `.oma` file does not keep them.

Layout still did not import Figma files, and cloud without Clerk/Convex keys was still local-plus-HTTP. Later releases kept working on Pixel selections. 0.5.9 added Alt to subtract, and 0.6.0 lets you move, resize, feather and distort a selection.

```sh
curl -fsSL https://omadesign.app/install | sh
```
