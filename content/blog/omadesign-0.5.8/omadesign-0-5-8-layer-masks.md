---
id: T064
title: Layer masks
slug: omadesign-0-5-8-layer-masks
excerpt: Add a layer mask from the layer menu or the Pixel inspector. Reveal all, hide all, or start from the selection. Black hides. White reveals. The pixels stay put.
tags: [omadesign, 0.5.8, masks]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-layer-masks/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-layer-masks/og.png
---

## The habit

A layer mask is how you hide pixels without deleting them. In Photoshop you click the mask thumbnail, you paint black, the picture disappears in that stroke, you paint white, it comes back. The layer thumbnail is untouched. You can throw the mask away and the photograph is the photograph you started with. Affinity's mask slot works the same. Illustrator uses opacity masks more often, and the mental model is still coverage. Black conceals. White shows. Gray is partial.

You start from three places. A full white mask, everything visible, and you paint away what you do not want. A full black mask, everything hidden, and you paint in what you do. Or a mask built from the marching ants, the selection becoming the coverage you can soften with a brush.

The inspector has to tell you whether the brush is aimed at the picture or at the mask. One brush, two targets. If you forget which thumbnail is active, you paint a black smear across someone's face and call it a bug. The switch should be a word: Pixels, or Mask.

## The constraint

The mask is a second buffer on the layer, stored in the `.oma`, not a deleted region of the color. Remove has to put you back to the untouched layer. That requirement decides the data. Paint on the mask changes coverage. Paint on the pixels changes color. Apply, later, is the command that finally bakes coverage into alpha. Until then the original samples stay.

Masks work on pixel layers and on vector layers. A vector mask is still editable coverage in the project. The brush, when the target is Mask, paints that coverage. The vector geometry stays the geometry. You do not convert the logo to pixels just because you wanted a soft edge on it. Apply to pixels is a separate, explicit bake, and it is offered for pixel layers. The status line if you ask a vector layer to bake says the mask should stay editable. That boundary belongs to the next note. This one is the mask you can still paint.

Documents that use object masks save as `.oma` format 6, so an older build cannot open the file and silently drop the mask. Format 6 refuses that quiet load.

Undo is one step for adding the mask, painting a stroke, and removing it. There is no sidecar mask file to lose. The layer row holds both buffers. Eye and lock apply to the layer. A locked or hidden layer does not take mask paint. The inspector says "Unlock this layer to paint" or "Show this layer to paint."

SVG export keeps mask luminance, alpha, placement, and order in agreement with the canvas, masks before effects. The editable mask remains in the `.oma`. The SVG is the delivery.

## What landed

Two places add the mask. The layer's context menu has a Mask submenu. In Pixel, the inspector has Add layer mask, and a ··· menu labeled as layer mask actions. The choices:

Reveal all. A white mask. The layer looks unchanged. You paint black to hide.

Hide all. A black mask. The layer disappears. You paint white to bring back the part you want.

From selection. The current pixel selection becomes the mask. This item enables when ants exist. The status line if you fire it with no selection says "Make a pixel selection first." With a mask already present, the words change to Replace from selection, Reset to reveal all, and Reset to hide all. Same actions, honest labels, so you know you are replacing coverage and not adding a second mask.

The inspector line reads Paint on, then Pixels or Artwork, then Mask. Pixels is the label on a raster layer. Artwork is the label on a vector layer. Mask enables once a mask exists. Click Mask and the brush targets coverage. The inspector then offers Hide and Reveal, which set the brush color to black or white and select the brush. The hint under them: paint black to hide, paint white to reveal. A line of small type says "Original pixels stay untouched."

The eraser hides when the target is the mask. Fill, `K`, fills the current paint target. If Mask is selected, the bucket fills coverage. If Pixels is selected, the bucket fills color. Switch first. Then press the key.

Add layer mask, the big button, creates a reveal-all mask and sends you into mask painting. The brush color goes black so the next stroke hides, and the status line says "Painting mask · black hides · white reveals." You can flip to Reveal before you drag if you wanted white.

Grays work. A 50% dab is partial coverage. Hardness and size are the usual bracket keys. A selection still clips the stroke. You can ants-select a region and paint the mask only inside it.

Ctrl-click a rendered outline in Pixel if you want the selection to come from an existing shape, then From selection. Or use Mask from item… on the layer or object menu: choose it on the source, then click the target in the layer list. The selection stays in document coordinates when you switch targets. That is the path from a vector silhouette to a pixel mask without a manual trace.

Masks survive the project save. Reopen the `.oma`. Paint on still offers Mask. The coverage is the coverage you left.

## In the hand

Select the pixel layer. Make the selection you trust, wand or marquee or lasso. Open the layer menu, Mask, From selection. Or use the inspector ··· and the same words. The layer's visibility now follows that shape. Click Mask if you are not already painting it. Press `B`. Tap Reveal or Hide so the color matches the edit. Soften an edge with a low hardness. `Ctrl+Z` undoes the stroke. The color pixels do not change. Only coverage does.

No selection yet, and you want to paint the hide by hand:

```
Add layer mask
```

That is reveal all, and you are painting black. Drag across the background. The background drops out. Press Reveal, paint back the bit you clipped. Switch the Paint on control to Pixels. Press `B`. Paint color. The mask holds. Switch to Mask again when you need the edge.

For a vector logo that needs a fade, select the logo's layer. Add layer mask. Paint the fade. The paths are still paths. Node tool, `A`, still edits them. The mask rides along. SVG export draws the coverage. The `.oma` still has the editable mask.

Lock the layer when the cutout is approved. The mask paint stops, same as color paint. Unlock from the layer row when you mean to edit again. The word in the inspector is the gate, not a metaphor.

Save. The mask is in the file. It is not a hidden delete. Remove mask, when you want the full layer back, is the next decision. It reveals the untouched layer. Apply to pixels is the decision that finally bakes. Leave both alone while you are still painting.

## The edge

A mask refuses to delete the layer's pixels. Black hides, white reveals, the color buffer stays. The inspector says so while you paint the mask. Remove, later, shows the original layer. You are not digging samples out of an undo stack from last week.

From selection refuses to invent ants. "Make a pixel selection first." Reveal all and Hide all do not need a selection. They are the full-white and full-black starts. Pick the one that matches the paint you are about to do, and keep Paint on set to Mask until you mean to change color.
