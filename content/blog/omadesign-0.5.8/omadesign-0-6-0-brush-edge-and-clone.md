---
id: R060-02
title: A brush edge on the canvas, and a clone brush with real controls
slug: omadesign-0-6-0-brush-edge-and-clone
excerpt: "0.6.0 draws the brush edge on the canvas for brush, eraser, clone, heal and smudge, sized to the brush and the zoom. The clone brush gets size, edge, opacity, flow and Aligned."
publishedAt: 2026-09-25T09:16:25Z
tags: [omadesign, 0.6.0, pixel, brushes]
coverImage: /blog/omadesign-0-6-0/omadesign-0-6-0-brush-edge-and-clone/og.png
---

## The habit

Before you paint, you want to see how big the brush is: a ring at the cursor, the diameter of the brush, at the current zoom. Without it you make a test dab, undo, resize, and dab again.

Cloning has its own habit. You set a source with Alt-click and paint. Sometimes you want the source to travel with the brush. Sometimes you want every dab to come from the same spot. You also want the same size, softness and opacity controls you have on the regular brush.

## The constraint

The ring has to be accurate. If it does not follow the brush size and the canvas zoom, it is worse than no ring, because you will trust it.

Clone also needed the same standing as the other brushes. Since 0.5.1, clone tracks the Alt-click offset. It still lacked the controls a retouching brush needs.

## What landed

**Brush edge.** Brush, eraser, clone, heal and smudge draw the brush edge on the canvas while the cursor is over the picture. The ring follows the cursor at the brush diameter, and it follows the size and the zoom.

**Clone brush controls.** The clone brush has size, edge, opacity, flow and Aligned.

- **Aligned on** keeps the source offset while you paint, so the source moves with the brush.
- **Aligned off** repeats the same source point on every dab.

These are the commits "Draw the brush edge on the canvas for every paint tool" and "Give the clone brush its size, edge, opacity, flow, and aligned source" in the [0.6.0 release](https://github.com/michaelmonetized/omadesign/releases/tag/v0.6.0).

## In the hand

Pick the brush with B and move over a pixel layer. The ring is there. Zoom in and it grows with the canvas. Change the size with the bracket keys and it resizes.

Press J for clone. Alt-click a clean patch of texture. With Aligned on, paint a stroke across a blemish and the source travels with you. Turn Aligned off, set the source again, and paint several separate dabs. Each one pulls from the same point. Drop the opacity and flow for a softer blend.

## The edge

The ring only draws while the cursor is over the picture. Off the canvas, you see the plain cursor.

The new controls belong to clone. In this release, brush, eraser, heal and smudge get the ring and no new settings.

```sh
curl -fsSL https://omadesign.app/install | sh
```
