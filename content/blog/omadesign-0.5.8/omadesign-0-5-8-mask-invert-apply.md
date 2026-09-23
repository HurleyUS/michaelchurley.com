---
id: T065
title: Mask invert apply
slug: omadesign-0-5-8-mask-invert-apply
excerpt: Invert flips coverage. Remove puts the original layer back. Apply to pixels bakes a raster and one undo restores both the pixels and the mask. Placed-image masks follow the transform.
tags: [omadesign, 0.5.8, masks]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-mask-invert-apply/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-mask-invert-apply/og.png
---

## The habit

You build the mask the long way, then you need the opposite. Photoshop's Invert on a mask thumbnail flips black and white in place. The hide becomes the show. You use it constantly on a selection you made of the background when you meant the subject. Remove Layer Mask, the one that says "without applying," throws the mask away and leaves the picture whole. Apply Layer Mask commits the coverage into the pixels and deletes the mask thumbnail. You do that when the cutout is done and you want a single buffer.

The habit you want from Apply is one undo that restores both the baked pixels and the mask. The bake and the removal of the mask are one edit.

Placed art makes the other demand. You mask a photograph, then you scale it, rotate it, move it. The mask has to stick to the picture. A mask that stays in document space while the photo moves is a hole in the wrong place. The coverage follows position, scale, and rotation.

## The constraint

Until Apply, the color stays intact. That is the whole reason the mask is a second buffer in the `.oma`. Invert flips values in that buffer. It does not touch the picture. Remove drops the buffer. The status line says "Mask removed · pixels preserved." The layer looks fully revealed because nothing is hiding it anymore, and the samples were never deleted.

Apply is the bake. It multiplies the pixel alpha by the mask's coverage, then removes the mask, as one batched edit. `Ctrl+Z` restores both the previous pixels and the previous mask. You can bake, hate it, and be back in the paintable mask in one step. You do not reconstruct the mask from memory.

Apply is for pixel layers. A vector layer's mask stays editable. Ask Apply there and the status line says "Apply is available for pixel layers; vector masks stay editable." The paths remain paths. The mask remains a mask. Format 6 still protects that file from older builds that would drop object masks on load. You do not bake a logo to pixels as the price of saving.

A mask that does not match the pixel layer's width, height, or buffer length is refused. "Mask size does not match its pixel layer." No partial bake. A locked layer is refused. You unlock the row, then you bake, if baking is actually what you want.

Placed image masks follow the image's position, scale, and rotation. Move the photo, the coverage moves. Scale it, the coverage scales. Rotate it, the coverage rotates. The original pixels remain intact until Apply, and Apply itself is undoable. SVG export agrees with the canvas on mask luminance, alpha, placement, mirroring, and the order that puts the mask before effects. What you see is what the SVG carries. The `.oma` still has the live mask if you have not applied it.

Healing and clone do not run while Paint on is Mask. Choose Pixels first. Invert and Apply are mask commands. They are not brushes. Invert, switch to Pixels, then heal the revealed image. The tools will not blend color into the mask buffer.

## What landed

The mask menu, once a mask exists, lists Paint mask, Invert mask, Apply to pixels, and Remove mask. Apply to pixels enables for a layer that has pixel data. On a vector layer the item does not run the bake.

Invert mask flips coverage. The amount at each pixel becomes 255 minus that amount, including pixels whose alpha had been erased, so a transparent mask sample inverts to white. The status line says "Mask inverted." The picture's color samples are the same samples. Only the hide flipped. Undo returns the previous coverage.

Remove mask deletes the mask buffer and leaves the layer revealed. "Mask removed · pixels preserved." Undo puts the mask back. Use this when the experiment failed and you want the original layer, not a baked compromise.

Apply to pixels writes the coverage into the pixel alpha and clears the mask in the same history step. The visual result matches what you saw. The difference is structural. There is no mask left to paint. `Ctrl+Z` restores the pre-bake pixels and the mask together. Redo bakes again. One step each way.

Placed images keep that mask glued to the transform. Drag the image with `V`. Rotate the top handle. Scale a corner. The hole stays on the eye, or the product, or whatever you masked. It does not stay behind on the artboard. A frame that then swallows the placed image as an image fill bakes an existing layer mask into the fill's alpha. That is a different command, the drop onto a frame. Undo of that drop restores the image layer and the editable mask. Apply, by contrast, is the explicit menu item. Know which one you fired.

Trace on the pixel layer is how a cutout becomes vectors. Apply first if Trace should see the baked alpha. Leave the mask editable if you still want the coverage as its own buffer. The bake's undo is the way back while that step is the last one.

SVG and the canvas stay in agreement after invert, after remove, and after apply. Save the project after any of them. The `.oma` has the post-edit truth. Format 6 remains the guard when object masks are still in the file. A baked pixel layer with no remaining object mask is ordinary pixels in the project. You can still save, and you can still undo back to the mask while that step is in the session history.

## In the hand

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

## The edge

Apply to pixels refuses to be a one-way door inside the session. One undo restores the pixels and the mask together. It also refuses vector layers. Those masks stay editable. "Apply is available for pixel layers; vector masks stay editable."

Remove refuses to damage samples. The mask goes away. The layer you had before any hiding is the layer you see. Invert refuses to touch color. It flips coverage only. Placed-image coverage refuses to stay behind when you move, scale, or rotate. It follows the picture.
