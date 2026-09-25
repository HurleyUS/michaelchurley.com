---
id: R060-03
title: Move, resize, feather and distort a pixel selection
slug: omadesign-0-6-0-transform-a-selection
excerpt: "In 0.6.0 a pixel selection is no longer fixed once drawn. Move it, resize it, feather it or distort it from the paint inspector, and nudge it with the arrow keys while a selection tool is active."
publishedAt: 2026-09-25T09:17:25Z
tags: [omadesign, 0.6.0, pixel, selections]
coverImage: /blog/omadesign-0-6-0/omadesign-0-6-0-transform-a-selection/og.png
---

## The habit

You draw an elliptical marquee around a face and it lands two pixels too far left. Or the wand grabbed the sky and the edge is too hard for the paint you are about to lay down. You want to adjust the selection instead of redrawing it.

Pixel selections became real in 0.5.1, with a tinted mask, marching ants and paint that stays inside. 0.5.9 added Alt to subtract. Until 0.6.0, though, the only way to change a selection's position or edge was to draw it again.

## The constraint

These controls edit the selection mask and leave the pixels alone. Moving the selection should not move the paint under it. Feathering the selection should soften what the next brush stroke or filter does, without blurring the layer.

Arrow keys already nudge objects in Omadesign. They should only move the selection when you are clearly working on it, which means while a selection tool is the active tool.

## What landed

A pixel selection can move, resize, feather and distort. The controls sit in the paint inspector, in a Selection section that appears while a selection exists:

- **Arrow buttons** move the selection one pixel at a time.
- **Smaller** and **Larger** resize it.
- **Feather** softens the edge.
- **Distort** skews it.

Arrow keys nudge the selection while a selection tool is active: marquee, elliptical marquee, lasso or wand. Hold Shift for a bigger step. With any other tool, the arrow keys keep nudging objects the way they did before.

The commit is "Move, resize, feather, and distort a pixel selection" in the [0.6.0 release](https://github.com/michaelmonetized/omadesign/releases/tag/v0.6.0).

## In the hand

Draw an elliptical marquee around the subject. Keep the marquee tool active and tap the arrow keys until it sits right. Hold Shift for the larger jumps. Click Feather in the Selection section once or twice, then paint with the brush across the edge. The paint falls off softly at the border instead of stopping hard.

## The edge

These are step controls, and there is no free-transform box. Each Smaller or Larger click scales by 10%, Feather adds a 2 px feather per click, Distort applies a fixed horizontal skew, and Shift+Arrow moves 10 px instead of 1. There are no drag handles on the selection in this release.

Selections still live in the session, as they have since 0.5.1. The saved `.oma` does not keep them.
