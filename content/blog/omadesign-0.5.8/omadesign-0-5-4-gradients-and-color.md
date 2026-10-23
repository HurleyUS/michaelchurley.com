---
id: R054-02
title: Gradients for fills and strokes, and a color picker that remembers
slug: omadesign-0-5-4-gradients-and-color
excerpt: "0.5.4 added linear, radial, shape and conic gradients to both fill and stroke, a color picker with Current and Previous chips and alpha everywhere, and per-object opacity and blend."
publishedAt: 2026-09-20T17:46:29Z
tags: [omadesign, 0.5.4, gradients, color]
coverImage: /blog/omadesign-0-5-4/omadesign-0-5-4-gradients-and-color/og.png
---

## The habit

People ask for a gradient stroke on a logo ring, a shape-following glow inside a badge, or a conic sweep for a progress dial. When a tool only offers gradient fills, you end up expanding the stroke to an outline so you can fill it.

The picker habit is smaller and more frequent. You nudge a color, decide you liked it better before, and have no way back except Undo, which also undoes whatever else you did.

## The constraint

Gradients had to stay editable. That means stops you can drag, add, remove and set by exact percentage, with color and alpha per stop. They save in the `.oma` and do not get baked on the way out.

They also had to export accurately. SVG can describe linear and radial gradients natively. It has no native shape or conic gradient, so those two need a different export path, and I wanted to say so openly.

Opacity had one rule I cared about. It applies once to the combined object. A 50% object with a fill and a stroke should not look like 25% where the two overlap.

## What landed

**Four gradient types, on fill or stroke.** Select an object, open Appearance, and choose a gradient for the fill or the stroke. The Gradient tool edits whichever target you chose, on the canvas.

- **Linear** follows the gradient direction.
- **Radial** spreads outward from its starting point.
- **Shape** follows the object's silhouette, including holes.
- **Conic** sweeps around its center.

Add or remove stops, drag them, set an exact percentage, and edit each stop's color and alpha. Reverse the order or space them evenly. Angle controls rotate linear, radial and conic gradients, and canvas handles adjust their placement. Stroke gradients work with the existing width, cap, join and dash controls. Edits undo normally.

**Color picker.** The saturation × brightness box now has Current and Previous chips beside it. Click Previous to restore the color from before that edit. Alpha is available in every picker, including gradient stops, Design effect colors, paint, and Layout color variables. Eight-digit hex uses `#RRGGBBAA`.

**Opacity and blend per object.** Vector objects and Layout frames get their own Opacity and Blend controls. Placed raster layers keep their layer controls. Object opacity applies once to the combined fill, image and stroke. A frame's opacity applies once to its whole subtree, including at 100%. The 16 existing blend modes are available. Regular layers and frames isolate child blending, and explicit layer groups keep Pass through.

## In the hand

Draw a circle, give it a thick stroke, and set the stroke to Conic. Drag a stop around the ramp, add a second one, then click Reverse. Switch the fill of a star to Shape and the gradient follows the points.

Open any color, change it, and click Previous to get the old one back. Type an eight-digit hex to set alpha directly.

## The edge

The limits are in export:

- Linear and radial SVG output keeps editable stops, including on strokes.
- Shape and conic SVG output embeds image patterns, capped at 4096 pixels per axis.
- Lottie reports shape and conic gradients as unsupported instead of silently dropping them. Animated SVG keeps their rendered look.

On file compatibility, 0.5.4 opens older `.oma` files, but documents saved with the new gradient data need 0.5.4 or later. 0.5.3 cannot read those gradients. Keep a separate original if you have to go back.

Notes are on the [0.5.4 release](https://github.com/michaelmonetized/omadesign/releases/tag/v0.5.4).
