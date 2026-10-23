---
id: R060-01
title: Motion keys the design you already made
slug: omadesign-0-6-0-motion-keys
excerpt: "0.6.0 widens what Motion can key. Width and height key separately, and fill color, stroke width, gradient angle, dash, gap and dash length key too. Blend mode stays a design edit."
publishedAt: 2026-09-25T09:15:25Z
tags: [omadesign, 0.6.0, motion, keyframes]
coverImage: /blog/omadesign-0-6-0/omadesign-0-6-0-motion-keys/og.png
---

## The habit

You drew the logo. Now it needs to move: stretch a little wider, fade in, shift from blue to teal, and have its outline draw on with a moving dash. In a lot of pipelines that means rebuilding the mark in a separate animation tool, where it stops being the file you designed.

Omadesign's Motion mode has always animated the artboard you drew. The drawing is the rest pose, and the clip lives in the same `.oma`. Before 0.6.0, K and the keyframe panel already keyed X, Y, rotation, uniform scale and opacity, plus the Draw stroke and Fill up reveals. You could not key width and height separately, or key a gradient angle, a fill color, a stroke width or a dash.

## The constraint

The rest pose stays put. Keys are offsets, multipliers and color moves measured from the design. They never create a second copy of the design. If you change the drawing later, the animation should still apply to that drawing.

That rule decides how each new channel works. Width and height are multipliers on the designed size. Stroke width is a pixel offset from the designed stroke. Fill color moves away from the color you designed.

Some properties should not animate at all. Blend mode is a compositing decision, so I left it as a design edit.

## What landed

**Already keyable, unchanged.** Position (X and Y), rotation, uniform scale and opacity keyed before 0.6.0, and so did the Draw stroke and Fill up reveals. They work as before.

**New: width and height.** Width and height key on their own, as multipliers on the designed size, beside uniform scale. Scale stays the uniform one. K now writes width and height keys along with position, rotation and scale.

**New: gradient angle.** A gradient's angle keys.

**New: fill color and stroke width.** Fill color keys and moves from the color you designed. Stroke width keys as a pixel offset from the designed stroke.

**New: dash.** Dash, gap and dash length key on their own. Length slides the pattern along the stroke, which is how you get a line that crawls or draws on.

**New: side panel to timeline.** In Motion, move the playhead, then edit position, size, rotation, opacity or the gradient in the regular side panel. Those edits land on the timeline as keys. Before, only the keyframe panel and K wrote keys. The timeline now scrolls when the tracks run past the bottom.

**Blend stays unkeyed.** Blend mode stays a design edit. Change it and it applies to the whole clip.

The commits are on the [v0.6.0 compare](https://github.com/michaelmonetized/omadesign/compare/v0.5.9...v0.6.0). The two that carry most of this are "Key width, height, fill color, and stroke width on their own" and "Keyframe side-panel changes, including a gradient angle."

## In the hand

Open a document with a simple mark, switch to Motion, and put the playhead at one second. In the side panel, widen the width and lower the opacity. Both land as keys. Scrub back to zero and the mark returns to the rest pose.

Give the outline a dashed stroke. At zero, key the dash length. At two seconds, key it again with a different value. Press Space to play. The dash pattern slides along the stroke.

Select a gradient fill and key its angle at two points. The gradient turns between them.

Change the blend mode at any playhead position. It changes for the whole animation, because blend is not a keyed channel.

## The edge

The exporters do not carry every new channel. In 0.6.0, animated SVG and Lottie both export position, rotation, scale (including separate width and height) and opacity, along with the Draw stroke and Fill up reveals. Neither one writes fill color, stroke width, dash, gap, dash length or gradient angle keys. Those play in the app but do not reach an exported file yet.

Blend mode does not animate in 0.6.0, so Motion cannot change blend mid-clip.

The rest pose rule holds for still exports. PNG, JPEG and SVG export the drawing you designed. They do not capture a frame of the animation.

The release is [v0.6.0](https://github.com/michaelmonetized/omadesign/releases/tag/v0.6.0).
