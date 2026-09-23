---
id: T124
title: Canvas tool plugins
slug: omadesign-0-5-8-canvas-tool-plugins
excerpt: A tool plugin arms with Activate tool. The drag previews as a line. Editable artwork appears on release. Escape exits. Pixel filters and brush presets still need a raster layer.
tags: [omadesign, 0.5.8, tools]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-canvas-tool-plugins/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-canvas-tool-plugins/og.png
---

## The habit

The Pencil tool in Illustrator, the brush in Photoshop, and the vector brush in Affinity all share one contract. You choose the tool. You drag. You see the mark while your hand is still down. You let go and the mark belongs to the document. Escape, or another tool letter, puts the pencil down. You do not want a plugin "tool" that is secretly a dialog: click five points, press OK, and hope the path lands where the dialog guessed.

You also know the other contract, the one for pixels. A brush preset does nothing useful until a raster layer is the thing under the cursor. A filter that runs on the vector layer you forgot to leave will either error or bake the wrong target. The tool and the filter are neighbors in the plugin list. They are not the same gesture.

## The constraint

A plugin cannot draw into the canvas on its own schedule. The studio owns the pointer, the preview, and the undo step. If the plugin received every mouse move inside Lua, a slow script would lag the stroke and a crashed script would leave a private preview on screen with no object behind it. The gesture has to be recorded by the host as document points, shown as a line the host paints, and handed over once, on release, as `ctx.gesture`.

The plugin then builds native geometry and returns. That result goes through the same commit rules as any other document action: one batch, or nothing. Escape has to drop the armed tool before a release can fire. Switching to a drawing tool with a letter key has to drop it too, or you would drag a rectangle and also commit a plugin path. Pixel work stays on a raster layer because the brush and the filter write pixels, and a vector-only document has nowhere legal to put them until you add that layer.

## What landed

An action with `tool = true` is a canvas tool. In the manager its button reads **Activate tool** rather than **Run**. Studio starter's tool is **Ribbon path**, command id `ribbon`, category Tools. Stroke width defaults to 14, range 1 to 100. Color defaults to `#A6E3A1`.

Press **Activate tool**. The Plugins menu grows **Exit plugin tool  Esc** while it is armed. The cursor on the canvas is a crosshair. Press the pointer and drag. The host records points in document coordinates, including whether Alt, Shift, or Ctrl were held. It will keep up to 8192 points. While the button is down it paints a 1.5 pixel line in the accent color. That line is a preview. It is not a shape, it has no layer row, and it is not in the `.oma`.

Release the button. The host starts the plugin with `ctx.gesture.points`. Ribbon path requires at least two points. It calls `oma.add_shape` with `kind = "path"`, those points, fill `none`, the stroke color and width you set, and the name Ribbon. The commit is one Undo step. The path is editable with the Node tool, `A`, like any pencil stroke.

Escape does two pieces of work. It clears the armed plugin tool and sets the status to **Plugin tool stopped**. It also follows the studio's normal Escape rules if a different operation was in progress. Choosing another studio tool, anything other than the Move tool, also clears the plugin tool so the letter keys keep their meaning. Space-pan is left to the hand tool path. The plugin does not receive the gesture while you are panning.

A click or a drag that never builds two points fails the plugin's assert. You get the error. You do not get a stray one-point object.

Pixel filters and brush presets are the other half of the tweet, and they are not this gesture. **Midnight duotone** needs `ctx.active_layer` on a raster layer. The starter asserts **Select a raster layer first**. **Soft ink brush** and **Dry marker brush** call `oma.brush` and the studio moves you to the Pixel persona with the Brush tool selected. Painting still happens on a raster layer. If the document is vectors only, add a pixel layer from the Layers studio before you expect ink to stick. The manual's line is the short version: choose a Raster document and a raster layer before pixel filters or brush presets.

## In the hand

Open a vector document. **Plugins → Manage plugins**. Select **Tools · Ribbon path**. Set Stroke width if 14 is wrong. Press **Activate tool**. The manager can stay open or you can go back to the canvas. The status line already told you to choose parameters, then Run or Activate tool, when you opened the action.

Drag a curve. Watch the line. It tracks the pointer and it does not create a layer. Release. A path named Ribbon is selected in the stack, stroked, no fill. Press `Ctrl+Z`. The path goes away in one step. Press `A` and the nodes are there if you redo.

Arm the tool again. Drag a stroke you do not like and press Escape before you release. Status says **Plugin tool stopped**. Release does nothing useful because the tool is gone. Arm it again and press `P` for the Pen. The plugin tool drops because you left the Move tool. The Pen works as the Pen.

For pixels, make or open a Raster document. Select the raster layer in the layer list. Run **Filters · Midnight duotone**. The active layer's pixels change. Alpha stays. Then run **Brushes · Dry marker brush**. The persona switches to Pixel. Paint. `[` and `]` still change brush size after the preset loads. The preset did not lock the tool.

If you run the duotone with no raster layer active, the plugin stops on **Select a raster layer first** and the document does not change.

## The edge

The preview line is not artwork. Until release, the `.oma` is unchanged, and Escape throws the gesture away. A finished stroke is one Undo, and a failed assert or a cancel applies nothing. The tool also refuses to stay armed once you pick a different studio tool, so a plugin cannot hijack `R` or `P` or `B`.

Filters and brushes refuse the vector-only case. They need a raster layer. The ribbon does not write pixels, and the duotone does not read your drag.

Press **Activate tool**, drag the stroke, and release. Escape if the line is wrong.
