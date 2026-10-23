---
id: T124
title: Canvas tool plugins
slug: omadesign-0-5-8-canvas-tool-plugins
excerpt: A tool plugin arms with Activate tool. The drag previews as a line. Editable artwork appears on release. Escape exits. Pixel filters and brush presets still need a raster layer.
publishedAt: 2026-09-22T11:35:56Z
tags: [omadesign, 0.5.8, tools]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-canvas-tool-plugins/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-canvas-tool-plugins/og.png
---

## The habit

The Pencil tool in Illustrator, the brush in Photoshop, and the vector brush in Affinity all work the same way. You choose the tool and drag, you see the mark while your hand is still down, and when you let go the mark belongs to the document. Escape, or another tool letter, puts the pencil down. Nobody wants a plugin "tool" that is really a dialog, where you click five points, press OK, and hope the path lands where the dialog guessed.

Pixels have their own rule. A brush preset does nothing useful until a raster layer is under the cursor. A filter run on a vector layer you forgot to leave will either error or bake the wrong target. Tools and filters sit next to each other in the plugin list, but they are different gestures.

## The constraint

A plugin can't draw on the canvas on its own schedule. The studio owns the pointer, the preview, and the undo step. If the plugin received every mouse move inside Lua, a slow script would lag the stroke, and a crashed script would leave a private preview on screen with no object behind it. So the host records the gesture as document points, paints the preview line itself, and hands the gesture over once, on release, as `ctx.gesture`.

The plugin then builds native geometry and returns. The result goes through the same commit rules as any other document action: it applies as one batch or not at all. Escape has to disarm the tool before a release can fire. Switching to a drawing tool with a letter key has to disarm it too, or you would drag a rectangle and also commit a plugin path. Pixel work stays on a raster layer, because brushes and filters write pixels, and a vector-only document has nowhere valid to put them until you add that layer.

## What landed

An action with `tool = true` is a canvas tool, and in the manager its button reads **Activate tool** instead of **Run**. Studio starter's tool is **Ribbon path**, command id `ribbon`, category Tools. Stroke width defaults to 14, with a range of 1 to 100, and color defaults to `#A6E3A1`.

Press **Activate tool**. While the tool is armed, the Plugins menu shows **Exit plugin tool  Esc**, and the cursor on the canvas is a crosshair. Press and drag. The host records points in document coordinates, including whether Alt, Shift, or Ctrl was held, up to 8192 points. While the button is down it paints a 1.5 pixel line in the accent color. That line is only a preview. It isn't a shape, has no layer row, and isn't saved in the `.oma`.

Release the button and the host starts the plugin with `ctx.gesture.points`. Ribbon path needs at least two points. It calls `oma.add_shape` with `kind = "path"`, those points, fill `none`, the stroke color and width you set, and the name Ribbon. The commit is one Undo step, and you can edit the path with the Node tool (`A`) like any pencil stroke.

Escape does two things. It disarms the plugin tool and sets the status to **Plugin tool stopped**, and it applies the studio's normal Escape rules if another operation was in progress. Choosing any other studio tool except Move also disarms the plugin tool, so the letter keys keep their meaning. Space-pan goes to the hand tool, and the plugin doesn't receive the gesture while you pan.

A click or drag that produces fewer than two points fails the plugin's assert. You get the error and no stray one-point object.

Pixel filters and brush presets work differently from this gesture. **Midnight duotone** needs `ctx.active_layer` to be a raster layer, and the starter asserts **Select a raster layer first**. **Soft ink brush** and **Dry marker brush** call `oma.brush`, and the studio moves you to the Pixel persona with the Brush tool selected. Painting still happens on a raster layer, so if the document is vectors only, add a pixel layer from the Layers studio first. The manual puts it briefly: choose a Raster document and a raster layer before pixel filters or brush presets.

## In the hand

Open a vector document, choose **Plugins > Manage plugins**, and select **Tools · Ribbon path**. Change Stroke width if 14 is wrong, then press **Activate tool**. You can leave the manager open or go back to the canvas. When you opened the action, the status line already told you to choose parameters and then Run or Activate tool.

Drag a curve and watch the line. It follows the pointer without creating a layer. Release, and a path named Ribbon is selected in the stack, stroked, with no fill. Press `Ctrl+Z` and the path goes away in one step. Redo it and press `A`, and the nodes are there.

Arm the tool again, drag a stroke you don't like, and press Escape before you release. The status says **Plugin tool stopped**, and releasing does nothing because the tool is disarmed. Arm it again and press `P` for the Pen. The plugin tool disarms because you left the Move tool, and the Pen works normally.

For pixels, make or open a Raster document and select the raster layer in the layer list. Run **Filters · Midnight duotone**. The active layer's pixels change and alpha stays the same. Then run **Brushes · Dry marker brush**. The persona switches to Pixel and you can paint. `[` and `]` still change brush size after the preset loads, because the preset doesn't lock the tool.

If you run the duotone with no raster layer active, the plugin stops with **Select a raster layer first** and the document doesn't change.

## The edge

The preview line is not artwork. Until release, the `.oma` is unchanged, and Escape throws the gesture away. A finished stroke is one Undo, and a failed assert or a cancel applies nothing. The tool disarms as soon as you pick a different studio tool, so a plugin can't take over `R`, `P`, or `B`.

Filters and brushes won't run on a vector-only document, because they need a raster layer. The ribbon never writes pixels, and the duotone never reads your drag.
