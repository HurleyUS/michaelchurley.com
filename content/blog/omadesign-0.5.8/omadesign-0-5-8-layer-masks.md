---
id: T064
title: Layer masks
slug: omadesign-0-5-8-layer-masks
excerpt: Add a layer mask from the layer menu or the Pixel inspector. Reveal all, hide all, or start from the selection. Black hides. White reveals. The pixels stay put.
publishedAt: 2026-09-06T10:41:01Z
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

## Mask invert apply

### The habit

You build the mask the long way, then you need the opposite. Photoshop's Invert on a mask thumbnail flips black and white in place. The hide becomes the show. You use it constantly on a selection you made of the background when you meant the subject. Remove Layer Mask, the one that says "without applying," throws the mask away and leaves the picture whole. Apply Layer Mask commits the coverage into the pixels and deletes the mask thumbnail. You do that when the cutout is done and you want a single buffer.

The habit you want from Apply is one undo that restores both the baked pixels and the mask. The bake and the removal of the mask are one edit.

Placed art makes the other demand. You mask a photograph, then you scale it, rotate it, move it. The mask has to stick to the picture. A mask that stays in document space while the photo moves is a hole in the wrong place. The coverage follows position, scale, and rotation.

### The constraint

Until Apply, the color stays intact. That is the whole reason the mask is a second buffer in the `.oma`. Invert flips values in that buffer. It does not touch the picture. Remove drops the buffer. The status line says "Mask removed · pixels preserved." The layer looks fully revealed because nothing is hiding it anymore, and the samples were never deleted.

Apply is the bake. It multiplies the pixel alpha by the mask's coverage, then removes the mask, as one batched edit. `Ctrl+Z` restores both the previous pixels and the previous mask. You can bake, hate it, and be back in the paintable mask in one step. You do not reconstruct the mask from memory.

Apply is for pixel layers. A vector layer's mask stays editable. Ask Apply there and the status line says "Apply is available for pixel layers; vector masks stay editable." The paths remain paths. The mask remains a mask. Format 6 still protects that file from older builds that would drop object masks on load. You do not bake a logo to pixels as the price of saving.

A mask that does not match the pixel layer's width, height, or buffer length is refused. "Mask size does not match its pixel layer." No partial bake. A locked layer is refused. You unlock the row, then you bake, if baking is actually what you want.

Placed image masks follow the image's position, scale, and rotation. Move the photo, the coverage moves. Scale it, the coverage scales. Rotate it, the coverage rotates. The original pixels remain intact until Apply, and Apply itself is undoable. SVG export agrees with the canvas on mask luminance, alpha, placement, mirroring, and the order that puts the mask before effects. What you see is what the SVG carries. The `.oma` still has the live mask if you have not applied it.

Healing and clone do not run while Paint on is Mask. Choose Pixels first. Invert and Apply are mask commands. They are not brushes. Invert, switch to Pixels, then heal the revealed image. The tools will not blend color into the mask buffer.

### What landed

The mask menu, once a mask exists, lists Paint mask, Invert mask, Apply to pixels, and Remove mask. Apply to pixels enables for a layer that has pixel data. On a vector layer the item does not run the bake.

Invert mask flips coverage. The amount at each pixel becomes 255 minus that amount, including pixels whose alpha had been erased, so a transparent mask sample inverts to white. The status line says "Mask inverted." The picture's color samples are the same samples. Only the hide flipped. Undo returns the previous coverage.

Remove mask deletes the mask buffer and leaves the layer revealed. "Mask removed · pixels preserved." Undo puts the mask back. Use this when the experiment failed and you want the original layer, not a baked compromise.

Apply to pixels writes the coverage into the pixel alpha and clears the mask in the same history step. The visual result matches what you saw. The difference is structural. There is no mask left to paint. `Ctrl+Z` restores the pre-bake pixels and the mask together. Redo bakes again. One step each way.

Placed images keep that mask glued to the transform. Drag the image with `V`. Rotate the top handle. Scale a corner. The hole stays on the eye, or the product, or whatever you masked. It does not stay behind on the artboard. A frame that then swallows the placed image as an image fill bakes an existing layer mask into the fill's alpha. That is a different command, the drop onto a frame. Undo of that drop restores the image layer and the editable mask. Apply, by contrast, is the explicit menu item. Know which one you fired.

Trace on the pixel layer is how a cutout becomes vectors. Apply first if Trace should see the baked alpha. Leave the mask editable if you still want the coverage as its own buffer. The bake's undo is the way back while that step is the last one.

SVG and the canvas stay in agreement after invert, after remove, and after apply. Save the project after any of them. The `.oma` has the post-edit truth. Format 6 remains the guard when object masks are still in the file. A baked pixel layer with no remaining object mask is ordinary pixels in the project. You can still save, and you can still undo back to the mask while that step is in the session history.

### In the hand

You selected the background by accident and turned it into a mask. The subject is hidden. The room is visible. Open the mask menu.

```
Invert mask
```

The subject returns. The room drops out. Paint a repair if the edge is messy. You are still on an editable mask. The pixels underneath are still the full photograph.

Wrong cutout entirely. Remove mask. The status line confirms the pixels were preserved. The whole frame of the photo is back. Make a better selection. From selection. Continue.

The cutout is approved and you want one buffer. Paint on: you are looking at the mask, the edge is right. Apply to pixels. The mask item leaves the inspector. The alpha of the layer holds the hole. `Ctrl+Z`. The mask is back, and the pixels are back to the pre-bake buffer. You are certain. Apply to pixels again. Save.

A placed product shot, masked, needs to sit at 30 degrees. Select it. Rotate the handle. The mask rotates with it. Scale it down. The mask scales with it. You do not re-brush the silhouette after the transform. Nudge it into the layout. The hole stays on the product.

If Apply is disabled or the status line mentions vector masks, you are on artwork, not on a pixel layer. Leave it editable, or rasterize by a path you intend, on a pixel layer, and mask that. Do not expect Apply to flatten the logo as a favor.

Choose Pixels before Shift+J or `J`. Invert does not change that rule. A mask you inverted is still a mask. Healing still wants the color buffer.

### The edge

Apply to pixels refuses to be a one-way door inside the session. One undo restores the pixels and the mask together. It also refuses vector layers. Those masks stay editable. "Apply is available for pixel layers; vector masks stay editable."

Remove refuses to damage samples. The mask goes away. The layer you had before any hiding is the layer you see. Invert refuses to touch color. It flips coverage only. Placed-image coverage refuses to stay behind when you move, scale, or rotate. It follows the picture.
