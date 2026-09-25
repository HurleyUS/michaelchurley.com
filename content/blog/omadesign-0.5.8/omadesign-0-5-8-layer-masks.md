---
id: T064
title: Layer masks
slug: omadesign-0-5-8-layer-masks
excerpt: Add a layer mask from the layer menu or the Pixel inspector. Reveal all, hide all, or start from the selection. Black hides. White reveals. The pixels stay put.
publishedAt: 2026-09-06T10:41:01Z
tags: [omadesign, 0.0.1-alpha, masks]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-layer-masks/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-layer-masks/og.png
---

## The habit

A layer mask hides pixels without deleting them. In Photoshop you click the mask thumbnail and paint black, and the picture disappears under the stroke. Paint white and it comes back. The layer thumbnail doesn't change, and if you throw the mask away the photograph is exactly what you started with. Affinity's mask slot works the same way. Illustrator leans on opacity masks, but the idea is still coverage. Black conceals, white shows and gray is partial.

You start from one of three places. A full white mask shows everything, and you paint away what you don't want. A full black mask hides everything, and you paint in what you do want. Or the marching ants become the mask, and you soften that coverage with a brush.

Later you often need the opposite of the mask you built. Photoshop's Invert on a mask thumbnail flips black and white in place, so the hidden part shows and the shown part hides. You use it all the time when you selected the background and meant the subject. Remove Layer Mask, the "without applying" version, throws the mask away and leaves the picture whole. Apply Layer Mask commits the coverage into the pixels and deletes the mask thumbnail, which is what you do when the cutout is finished and you want a single buffer. What you want from Apply is one undo that restores both the baked pixels and the mask.

The inspector has to tell you whether the brush is aimed at the picture or the mask. There's one brush with two targets, and if you forget which one is active, you paint a black smear across someone's face and call it a bug. The switch should be a plain word, Pixels or Mask.

Placed art adds one more requirement. You mask a photograph, then scale, rotate and move it. The mask has to stay with the picture. A mask that stays in document space while the photo moves leaves a hole in the wrong place.

## The constraint

The mask is a second buffer on the layer, stored in the `.oma`. The color isn't deleted. Remove has to take you back to the untouched layer, and that requirement decides the data model. Painting on the mask changes coverage. Painting on the pixels changes color. Apply is the command that finally bakes coverage into alpha. Until then the original samples stay intact.

Masks work on pixel layers and on vector layers. A vector mask is still editable coverage in the project. When the target is Mask, the brush paints that coverage and the vector geometry stays geometry. You don't have to convert a logo to pixels to give it a soft edge. Apply is a separate, explicit bake, and only pixel layers get it. Ask for it on a vector layer and the status line says "Apply is available for pixel layers; vector masks stay editable."

Documents with object masks save as `.oma` format 6, so an older build can't open the file and quietly drop the mask.

Adding a mask, painting a stroke and removing the mask are each one undo step. There's no sidecar mask file to lose, because the layer row holds both buffers. Eye and lock apply to the whole layer. A locked or hidden layer doesn't take mask paint, and the inspector says "Unlock this layer to paint" or "Show this layer to paint."

Invert flips values in the mask buffer and leaves the picture alone. Remove drops the buffer, and the status line says "Mask removed · pixels preserved." The layer looks fully revealed because nothing hides it anymore, and no samples were deleted.

Apply multiplies the pixel alpha by the mask's coverage and then removes the mask, as one batched edit. `Ctrl+Z` restores both the previous pixels and the previous mask. You can bake, dislike the result, and be back in the paintable mask in one step instead of rebuilding it from memory.

A mask that doesn't match its pixel layer's width, height or buffer length is refused with "Mask size does not match its pixel layer." There's no partial bake. A locked layer is refused too. Unlock the row first if baking is really what you want.

Placed image masks follow the image's position, scale and rotation. Move, scale or rotate the photo and the coverage does the same. The original pixels stay intact until Apply, and Apply itself can be undone.

SVG export matches the canvas on mask luminance, alpha, placement, mirroring and order, with masks drawn before effects. What you see is what the SVG carries. The editable mask stays in the `.oma` unless you applied it, and the SVG is the delivery file.

Healing and Clone don't run while Paint on is set to Mask. Choose Pixels first. Invert and Apply are mask commands, not brushes, and the brushes won't blend color into the mask buffer.

## What landed

### Adding a mask

There are two places to add one. The layer's context menu has a Mask submenu. In Pixel, the inspector has Add layer mask and a ··· menu for layer mask actions. The choices are:

- **Reveal all.** A white mask. The layer looks unchanged, and you paint black to hide.
- **Hide all.** A black mask. The layer disappears, and you paint white to bring back the part you want.
- **From selection.** The current pixel selection becomes the mask. This item is enabled when there are marching ants. With no selection, the status line says "Make a pixel selection first."

When a mask already exists, the labels change to Replace from selection, Reset to reveal all and Reset to hide all. They're the same actions, labeled so you know you're replacing coverage and not adding a second mask.

The big Add layer mask button creates a reveal-all mask and puts you in mask painting. The brush color switches to black so the next stroke hides, and the status line says "Painting mask · black hides · white reveals." Switch to Reveal before you drag if you wanted white.

### Painting the mask

The inspector line reads Paint on, followed by Pixels or Artwork, then Mask. Pixels is the label on a raster layer and Artwork on a vector layer. Mask is enabled once a mask exists. Click Mask and the brush targets coverage. The inspector then shows Hide and Reveal, which set the brush color to black or white and select the brush. The hint underneath says paint black to hide, paint white to reveal, and a line of small type says "Original pixels stay untouched."

When the target is the mask, the eraser hides. Fill, `K`, fills the current paint target, so with Mask selected the bucket fills coverage and with Pixels selected it fills color. Switch the target first, then press the key.

Grays work, so a 50% dab gives partial coverage. Size and hardness are on the usual bracket keys. A selection still clips the stroke, so you can select a region and paint the mask only inside it.

To build a mask from an existing shape, Ctrl-click a rendered outline in Pixel to select it, then choose From selection. Or choose Mask from item… on the layer or object menu of the source, then click the target in the layer list. The selection stays in document coordinates when you switch targets. That gets you from a vector silhouette to a pixel mask without tracing by hand.

Masks are saved with the project. Reopen the `.oma` and Paint on still offers Mask, with the coverage you left.

### Invert, remove and apply

Once a mask exists, the mask menu lists Paint mask, Invert mask, Apply to pixels and Remove mask. Apply to pixels is enabled for a layer with pixel data. On a vector layer it doesn't run the bake.

**Invert mask** flips coverage. Each pixel's amount becomes 255 minus that amount, including pixels whose alpha was erased, so a transparent mask sample inverts to white. The status line says "Mask inverted." The picture's color samples don't change, only what's hidden. Undo restores the previous coverage.

**Remove mask** deletes the mask buffer and leaves the layer revealed, with the status "Mask removed · pixels preserved." Undo puts the mask back. Use it when the experiment failed and you want the original layer instead of a baked compromise.

**Apply to pixels** writes the coverage into the pixel alpha and clears the mask in the same history step. It looks the same as before. The difference is that there's no mask left to paint. `Ctrl+Z` restores the pre-bake pixels and the mask together, and Redo bakes again. One step each way.

### Masks on placed images

A placed image keeps its mask attached to its transform. Drag the image with `V`, rotate with the top handle or scale from a corner, and the hole stays on the eye or the product or whatever you masked. It doesn't get left behind on the artboard.

Dropping a placed image onto a frame, so it becomes an image fill, is a different command. That drop bakes an existing layer mask into the fill's alpha, and undoing the drop restores the image layer and the editable mask. Apply is the explicit menu item. Know which one you used.

Trace on a pixel layer is how a cutout becomes vectors. Apply first if Trace should see the baked alpha, or leave the mask editable if you still want the coverage as its own buffer. While the bake is the last step, its undo is the way back.

SVG and the canvas still match after invert, remove and apply. Save the project after any of them and the `.oma` has the result. Format 6 stays in effect while object masks remain in the file. A baked pixel layer with no object mask left is ordinary pixels in the project. You can still save, and you can still undo back to the mask while that step is in the session history.

## In the hand

Select the pixel layer and make a selection you trust with the wand, marquee or lasso. Open the layer menu and choose Mask > From selection, or use the same item in the inspector's ··· menu. The layer's visibility now follows that shape. Click Mask if you aren't already painting it, and press `B`. Tap Reveal or Hide so the color matches the edit, and use a low hardness to soften an edge. `Ctrl+Z` undoes a stroke. The color pixels never change, only coverage.

With no selection, to paint the hide by hand:

```
Add layer mask
```

That gives you reveal all with black loaded. Drag across the background and it drops out. Press Reveal and paint back anything you clipped. Switch Paint on to Pixels, press `B` and paint color, and the mask holds. Switch back to Mask when you need to fix the edge.

For a vector logo that needs a fade, select the logo's layer, add a layer mask and paint the fade. The paths are still paths, and the Node tool, `A`, still edits them while the mask stays attached. SVG export draws the coverage, and the `.oma` keeps the editable mask.

Lock the layer when the cutout is approved. Mask paint stops, the same as color paint. Unlock it from the layer row when you want to edit again. The word in the inspector tells you which state you're in.

If you selected the background by accident and turned it into a mask, the subject is hidden and the room is visible. Open the mask menu:

```
Invert mask
```

The subject returns and the room drops out. Paint a repair if the edge is messy. You're still on an editable mask, and the full photograph is still underneath.

If the cutout is wrong entirely, choose Remove mask. The status line confirms the pixels were preserved, and the whole photo is back. Make a better selection and choose From selection again.

When the cutout is approved and you want one buffer, check the edge while looking at the mask, then choose Apply to pixels. The mask disappears from the inspector and the layer's alpha holds the hole. Press `Ctrl+Z` and both the mask and the pre-bake pixels come back. When you're sure, apply again and save.

Say a masked product shot has to sit at 30 degrees. Select it and rotate with the handle, and the mask rotates too. Scale it down and the mask scales with it. You don't re-brush the silhouette after the transform. Nudge it into the layout and the hole stays on the product.

If Apply is disabled, or the status line mentions vector masks, you're on artwork instead of a pixel layer. Leave the mask editable, or rasterize on purpose onto a pixel layer and mask that. Apply won't flatten a logo for you.

Choose Pixels before Shift+J or `J`. Inverting doesn't change that. An inverted mask is still a mask, and healing needs the color buffer.

## The edge

A mask never deletes the layer's pixels. Black hides, white reveals and the color buffer stays, and the inspector reminds you while you paint. Remove shows the original layer, so you're never digging samples out of an old undo stack.

From selection won't invent a selection. It says "Make a pixel selection first." Reveal all and Hide all don't need one. They're the full-white and full-black starting points. Pick the one that matches the paint you're about to do, and keep Paint on set to Mask until you mean to change color.

Apply to pixels can be undone within the session, and one undo restores the pixels and the mask together. It doesn't run on vector layers, whose masks stay editable. Remove never damages samples, Invert never touches color, and a placed image's mask follows it when you move, scale or rotate.
