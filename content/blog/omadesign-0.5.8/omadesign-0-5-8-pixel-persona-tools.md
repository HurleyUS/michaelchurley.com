---
id: T014
title: Pixel persona tools
slug: omadesign-0-5-8-pixel-persona-tools
excerpt: "Pixel is for painting and retouching. Brush B, Eraser E, Clone J, and Wand W work on a pixel layer inside the same .oma as the vectors."
tags: [omadesign, 0.5.8, pixel]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-pixel-persona-tools/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-pixel-persona-tools/og.png
---

## The habit

Photoshop is a pixel document that learned vectors. You open it to paint, clone, and select. `B` is the brush. `E` is the eraser. `J` cycles the healing and clone family, and you Alt-click or Option-click to set a source. `W` is the quick selection or magic wand, depending on the year and the tool preset you last left behind. Affinity Photo matches that hand closely enough that you can sit down and retouch without reading. The file you get is a pixel file. Vectors in that world are guests, or they live in Designer and come across a link.

The failure you know is the flatten. Someone paints a shadow on the poster and saves a TIFF. The headline is no longer type. The logo is no longer a compound path. Next week's copy change starts with a reconstruct.

The other failure is the selection that paints the whole layer. You meant to drop a blemish. The brush ignored the marching ants. You undo, if undo is one step and not "the whole session since Tuesday."

Pixel in this studio has to feel like that Photoshop hand, on a layer, in the vector document you already have open.

## The constraint

One `.oma`. Vectors stay objects. Paint needs a place to live that is not "the whole file, now a bitmap." That place is a pixel layer. If the document is vector-only, the Layers studio is where you add one. The brush does not create that layer by converting the poster. You add it, then you paint.

The persona owns the keys. `B`, `E`, `J`, and `W` are the first Pixel tools. In Design those letters are not a silent flatten. A tool key only changes tools when the tool exists in the current persona. Fill is `K` here. In Motion, `K` keys transforms. The letter follows the room you are in. That is the constraint that keeps one keyboard from meaning five destructive things at once.

Undo is one step. A stroke you hate comes back with `Ctrl+Z`. Selections limit paint, fill, clone, heal, and smudge. Delete clears selected pixels. The ants stay until Esc. Shift adds to the selection. The brush does not get to wander outside the ants because a pixel tool "felt free."

Filters and effects exist in the Raster studio, and they are a separate commit: Apply runs on the full image in the background and makes one undo step. Cancel leaves the document untouched. This post is the tools in the hand, not that dialog. The constraint they share is the same layer. You do not export a PNG to blur it and import it back.

Masks stay editable in the project. Black hides, white reveals. The eraser hides on a mask. Apply to Pixels bakes, and one undo restores both the pixels and the mask. You can retouch without baking on the first stroke.

## What landed

Pixel is the painting and retouching persona. First tools, from the manual: Brush `B`, Eraser `E`, Clone `J`, Wand `W`. Raster lives on a pixel layer in the same `.oma` as your vectors. Welcome's **+ Raster** opens a blank raster size chooser and leads here. A vector document can grow a pixel layer later without becoming a different file.

**Brush** `B`. Size is `[` and `]`. Hardness is `Shift+[` and `Shift+]`. The brush paints on the active pixel target.

**Eraser** `E`. On a mask, the eraser hides.

**Clone** `J`. Alt-click sets the source. Then paint the destination.

**Wand** `W`. Tolerance lives in Brush. The marching ants stay until you press Esc. Shift adds.

Next to those, still in this persona:

- **Fill** `K`.
- **Smudge** `M`.
- **Healing brush** `Shift+J`. Alt-click clean texture on the active image, then paint over the blemish. The stroke blends sampled texture with the destination's local color and keeps transparency. The source stays fixed for that stroke. Undo restores the whole stroke.
- **Marquee** `Shift+M`, **elliptical marquee** `Shift+O`, **lasso** `Q`. Drag to select. Delete clears the selected pixels. Paint, fill, clone, heal, and smudge stay inside the selection.
- **Eyedropper** `I`. The sampled color shows in the sidebar.

`Ctrl+D` in Pixel clears an existing pixel selection. `Super+D` duplicates. Those two chords share a letter and do not share a job. Deselect is the pixel selection. Duplicate is the object.

Add a layer mask from the layer context menu's **Mask** submenu, or **Add layer mask** in Pixel: reveal all, hide all, or start from the current pixel selection. Switch between Pixels and Mask in the inspector. Invert flips the mask. Remove reveals the untouched layer. Choose Pixels before the healing brush or the clone brush when you want those tools on the image.

Raster studio filters and effects are the committed cousins of these tools. Apply is one undo. Duplicate the layer first if you still want the unfiltered pixels as their own layer. The tools above are the direct paint. The dialog is the bake.

## In the hand

Open the poster `.oma`, or start from **+ Raster** with a size.

```sh
omadesign
```

Switch to Pixel. If Layers has no pixel layer, add one. Select it.

```text
B
```

Paint. Tap `[` a few times if the mark is too big. `]` goes the other way. Hold Shift and tap `[` to soften. The vectors underneath are still objects. Toggle the pixel layer's eye if you need to see them alone.

```text
W
```

Click a region. Ants appear. Press `B` again and paint. The stroke stays inside the selection. Esc clears the ants. `Ctrl+D` clears them too, in this persona.

```text
J
```

Alt-click a clean area to set the clone source. Paint over the spot you are covering. `Ctrl+Z` removes that stroke.

```text
Shift+J
```

Alt-click clean texture. Paint the blemish. One undo restores the whole heal stroke, not a dab at a time.

Need a hard-edged hole? `Shift+M`, drag a rectangle, press Delete. The pixels inside the marquee clear. The rest of the layer stays.

Switch to Design and press `T`. Edit the headline. Switch back to Pixel. The pixel layer is still in the stack, still pixels. `Ctrl+S` writes one `.oma` containing both.

On a mask: add one that hides all, press `B`, paint with white to reveal. Or press `E` and hide. Remove the mask if you want the layer untouched again. Apply to Pixels only when you mean to bake, and remember that one undo brings the mask and the pixels back.

## The edge

The brush will not invent a pixel layer by flattening the document. Vector-only files stay vector-only until you add a pixel layer from Layers. Paint lives on that layer. The pen path you drew in Design is still a path.

`B` does not fire in Design as a flatten shortcut. Change persona, then paint. `K` in this room is Fill. It is not the Motion key command. If you wanted animation keys, you are in the wrong persona, and the drawing has not been turned into a clip by accident.

Selections hold the paint. Wand, marquee, ellipse, and lasso limit brush, fill, clone, heal, and smudge. They do not limit them "except for the healing brush." Heal stays inside the ants too. Esc or `Ctrl+D` is how you let go. Delete removes pixels inside the selection. It does not delete the layer. **Delete layer/object** in the layer menu is the command that removes the item.

Filters do not half-apply. Cancel leaves the document alone. Apply is one undo step on the full-resolution image or mask. That dialog is not a second file.

Press `B` on a pixel layer in the `.oma` you already use for the vectors. `[` and `]` set the size while you paint.
