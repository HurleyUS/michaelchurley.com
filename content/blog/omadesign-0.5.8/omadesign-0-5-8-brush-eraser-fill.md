---
id: T061
title: Brush eraser fill
slug: omadesign-0-5-8-brush-eraser-fill
excerpt: Brush is B. Size is the bracket keys. Hardness is Shift plus the brackets. Eraser E, Fill K, Clone J, Smudge M. Alt-click sets the clone source.
publishedAt: 2026-08-29T16:36:47Z
tags: [omadesign, 0.0.0.0alpha-rc, pixel]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-brush-eraser-fill/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-brush-eraser-fill/og.png
---

## The habit

Most retouchers already know Photoshop's paint keys without looking. `B` for brush. `[` and `]` for size, and Shift with the brackets for hardness. `E` erases. `J` clones, and Alt-click (or Option-click) sets the source. Fill is the bucket and Smudge is the finger. You tap the key, drag, tap the bracket twice because the dab was too big, and keep going.

Affinity Photo mapped much of this the same way, because the habit predates the app. Where tools fail is a brush that lives in a floating panel you have to click before the size changes, a clone source that resets every stroke, or an eraser that looks like it is working and changes nothing. You have probably used that eraser. The cursor moves and the pixels stay. You spend ten minutes working out that you are on the wrong layer, and you are right, but the tool should have told you.

On Linux the keys have to be these keys. Ctrl is Ctrl and the bracket keys are the bracket keys. Renaming them for taste would make every retoucher relearn habits they have had since the late nineties.

The other habit is keeping vectors and pixels together. You have a logo made of paths and a photograph that needs cleanup. In Photoshop you open the photo, retouch, and place the logo, and the logo ends up either as a fragile smart object or as outlines. In Illustrator you place the photo and can't heal a blemish without going to another app. I wanted one stack: vectors on their layers, pixels on theirs, an eye and a lock on every row, and reordering with the same gestures you use for groups.

Affinity Designer and Affinity Photo split this by persona and by file more often than you want. You can move between them, but you still notice the switch, and the job is usually smaller than the switch. Paint the shadow under the wordmark, trace the painted edge back to vectors if the mark should be paths again, and keep the wordmark editable the whole time.

A vector-only document has nowhere to put a dab, so the first step is to add a pixel layer and then pick the brush. Adding the layer does not convert the paths. They sit under it or over it, in whatever order you set.

## The constraint

Pixel tools share the document with vectors, so where a letter is already taken, the keys depend on the persona. In Pixel, `M` is Smudge and Shift+M is the marquee. `J` alone is Clone, and Shift+J is the healing brush, the next tool over. The Shift chord tells the two apart, so there is no second brush panel to sort out the collision.

One `.oma` holds both kinds of content. Rasters are stored in the project as PNG data, and vectors stay geometry. A paint stroke has to land on a pixel layer, because a path has no grid of samples for a brush to write into. If the open document has only vectors, the studio won't silently create a canvas-sized bitmap and hide it. You add the layer from Layers, you see the row, and you know where the paint went.

The stroke also has to hit a real pixel buffer. The eraser used to draw into an empty preview and look busy. It now erases image pixels, a fix you only notice because the hole really is in the layer. Undo, Esc, a tool change, and a tab change all finish or cancel a stroke in progress, so no unrecorded dabs are left behind. One undo restores the stroke you committed, and the file can never save a half-applied scribble.

That makes the paint target explicit. Brush, eraser, fill, clone, smudge, and heal look for an unlocked, visible pixel layer. If they can't find one, the status line says so, with "add a pixel layer to paint" or "Choose an unlocked pixel layer to paint" depending on the tool. The stroke does not fall through onto the paper and pretend it worked. The paper is the document background and is never used as a hidden layer.

Size and hardness are tool settings you change from the keyboard, with limits so a runaway key repeat can't produce a 10,000 pixel brush. The bracket keys step size by 2 pixels, from 1 to 256. Shift plus the brackets steps hardness by 0.08, from 0 to 1. Curly braces trigger the same shortcuts, because that is how the key event arrives with Shift on many keyboard layouts. The same numbers are in the Brush studio if you want to drag them. The keys are for when your eyes are on the canvas.

Clone's source is an Alt-click on the active image, and it stays where you put it until you Alt-click again. Fill uses the current paint target, which is the pixel layer, or the mask if you switched the inspector to Mask. You don't need a cloud brush library to make a dab. Brushes added later through plugins are extras, and these tools are built into the binary.

Undo is one step for a stroke once you release it, and one step for adding a layer. You can delete the pixel layer later without deleting the vectors. You can trace the pixel layer back to paths with Trace (`U`) or with Object > Trace to vector, which runs the same trace without switching tools. Threshold, color count, and smoothness live in the Trace studio. Your existing vectors are on a different layer, and Trace only replaces them if you put the result there yourself.

A persona changes the tools you see and leaves the file alone. Pixel is the persona for painting and retouching, and Design is one click away in the same tab on the same `.oma`. You don't save a PSD to retouch and a separate SVG to keep the mark. You save once and both are in the project.

## What landed

### The pixel layer

Paint lives on a pixel layer. In the Layers studio, the ··· menu has New vector layer, New pixel layer, and New group. New pixel layer adds a raster layer to the stack, ready to select. Like every other layer, the row has an eye and a lock, and clicking the name targets it. Hidden and locked layers are excluded from painting. The mask inspector says "Unlock this layer to paint" when the row is locked and "Show this layer to paint" when it is hidden.

Reordering works the same as everywhere else in the studio. Select a layer row and use `Ctrl+[` or `Ctrl+]`, adding Shift to send it to the back or front of its group, or drag a name onto an insertion line. Groups move with their children, and a pixel layer can sit inside a group with vectors. Pass through on an explicit group controls whether child blend modes see the backdrop outside the group. Layer opacity applies once to the layer's contents. A placed image uses the layer opacity and blend controls above the Layers tree, and a painted pixel layer uses its own pixels plus that opacity.

Object masks and inside or outside strokes raise the file to `.oma` format 6, so an older build can't quietly drop them. A document that doesn't use those features can stay compatible with format 5. Either way, Save writes `.oma` and the pixel layer is in that file. Exporting to PNG or JPEG bakes a flat picture. Exporting to SVG keeps vectors as vectors where the exporter can, and the manual says so when a format has to turn something into pixels. The working file stays the `.oma`.

Trace, on the active pixel layer, is the way back from paint to paths. It doesn't delete the pixel layer when it makes vectors, so you can keep both and hide the paint when the paths are the deliverable.

### The paint tools and their keys

Brush is `B`, Eraser `E`, Fill `K`, Clone `J` (Alt-click to set the source), and Smudge `M`. Those are the manual's keys, and they match the shortcut table. Healing is a separate tool on Shift+J because it blends. The others are the direct tools: paint, remove, flood fill, copy samples, and push color. The Pixel persona's toolbar leads with Brush `B`, Eraser `E`, Clone `J`, and Wand `W`, and they all work on the active pixel layer. Design tools such as Pen `P`, Type `T`, and Rectangle `R` keep working on vector layers in the same document. Switch persona when you want the paint tools and switch back when you want the node tool. The stack doesn't rearrange itself when you switch.

`[` and `]` change brush size, and Shift+`[` and Shift+`]` change hardness. The HUD at the bottom of the window shows the active tool's gestures, and holding Shift swaps that row so you can see the hardness chord while your finger is on it. The strip doesn't take keyboard focus. `Ctrl+/` hides it, and `F1` opens the full list.

### Color, selections, and targets

Color comes from the Color studio: saturation and brightness, hue, alpha, hex, swatches, and recent colors. `X` swaps fill and stroke, and `D` restores the default fill and stroke. Open a chip and you get Current and Previous, and clicking Previous returns the color from before this edit. Eight-digit hex is `#RRGGBBAA`. The brush paints with that color. On a mask, the inspector offers Hide and Reveal, which set the brush to black or white, because black hides and white reveals. On pixels, the chip color is the paint color.

A marching-ants selection limits brush, fill, clone, heal, and smudge to the inside of the selection. Delete clears the selected pixels, and Esc drops the ants. If you want to paint the whole layer, drop the selection first. In Pixel, `Ctrl+D` clears a pixel selection and `Super+D` duplicates. Those two chords are easy to mix up.

On a mask, the eraser hides. On pixels, it removes pixels. Fill floods the current paint target, so if the target is wrong, switch between Pixels or Artwork and Mask in the inspector before you press `K`. The Eyedropper (`I`) samples a color and shows it in the sidebar.

If the layer is locked, hidden, or not a pixel layer, the tool says so: "Choose an unlocked pixel layer to paint," "Choose an unlocked pixel layer to smudge," or "Choose an unlocked pixel layer to clone." Add a layer or select the one you meant. The tool will not paint on the paper.

## In the hand

Open a poster made of paths and type. Press `B`. If the status line asks for a pixel layer, open Layers > ··· > New pixel layer, click that row, and press `B` again.

```
Layers → ··· → New pixel layer
B
```

Switch to Pixel with the pixel layer selected. Tap `]` until the dab matches the pore or the shadow, and hold Shift and tap `[` if the edge is too hard. Paint the shadow, the grain, or the repaired edge, then release. If the stroke is wrong, `Ctrl+Z` removes the whole stroke. The wordmark underneath is still a vector layer and did not become pixels.

```
B          brush
[  ]       size, 2 px steps, 1–256
Shift+[ ]  hardness, 0.08 steps, 0–1
E          eraser
K          fill
J          clone
Alt-click  clone source
M          smudge
```

Press `J`, Alt-click a clean patch of the wall, and paint over the socket you want gone. The samples come from the spot you clicked, and you can Alt-click again to change the texture. Press `E` to remove a stray dab. Press `K` to fill a selection you made with the marquee or the wand. Press `M` and push a highlight along a curve. Every tool is one key, and the target stays the layer you selected.

Change color with the chip, or press `I` and click the canvas. Press `X` if you set the stroke chip when you meant the fill. Press `D` to get the defaults back when you don't remember what they were.

Drag the pixel row above or below the type, or press `Ctrl+]` to move it forward. Turn its eye off to judge the vectors alone and on to judge the composite. When the paint is done and you go back to the type, lock the layer. A later `B` then shows a warning, and the finished texture stays untouched.

Switch to Design, press `P` or `T`, and draw. The pixel layer stays in the stack, untouched, until you select it again. Switch back to Pixel and press `U` if a painted shape should become vectors, then set threshold, colors, and smoothness. If you already know you want paths, Object > Trace to vector does the same job without leaving your current tool.

Save with `Ctrl+S`, quit, and open the `.oma` again. The pixel layer is still a pixel layer and the paths are still paths. Nothing was flattened.

To start the paint from a picture, place a photograph with `Ctrl+Shift+P`. Place loads in the background, then you click or drag to set it down, and one undo removes the placement. The placed image is its own layer, and a new pixel layer is the blank one you paint on. Both can exist in the same stack, so use whichever the job needs.

While you relearn the chords you already knew from Photoshop, the Shortcut HUD is there as a reminder. After a day you probably won't need it.

## The edge

These tools won't paint on a vector layer or on a missing, hidden, or locked pixel layer, and they won't create a hidden bitmap to make the stroke look like it landed. The eraser never spends a stroke on an empty preview. You either get a status line message or a real change in the buffer, and undo returns the stroke you committed. Add a New pixel layer and select it, and the dab has somewhere to go. The paths you already drew stay paths.

Clone won't guess a source. Until you Alt-click, there is none. Fill and brush follow the inspector's paint target, so if Mask is selected you are painting the mask. Switch back to Pixels before you expect color on the image.

Deleting or hiding the pixel layer doesn't convert, trace, or flatten the rest of the file. Trace is a separate command that runs on the pixel layer you point it at, and the stack keeps both kinds of layer until you decide one of them is finished.
