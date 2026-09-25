---
id: T061
title: Brush eraser fill
slug: omadesign-0-5-8-brush-eraser-fill
excerpt: Brush is B. Size is the bracket keys. Hardness is Shift plus the brackets. Eraser E, Fill K, Clone J, Smudge M. Alt-click sets the clone source.
publishedAt: 2026-08-29T16:36:47Z
tags: [omadesign, 0.5.8, pixel]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-brush-eraser-fill/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-brush-eraser-fill/og.png
---

## The habit

The left hand already knows Photoshop's paint keys. `B` for brush. `[` and `]` for size. Shift with those brackets for hardness. `E` erases. `J` clones, and Alt-click, or Option-click, sets the source. Fill is the bucket. Smudge is the finger. You do not look down. You tap the key, you drag, you tap the bracket twice because the dab was too big, you keep going.

Affinity Photo mapped a lot of this the same way, because the hand is older than the app. The failure is a brush that lives in a floating panel you have to click before the size changes, or a clone source that resets every stroke, or an eraser that appears to paint and writes nothing. You have used that eraser. The cursor moves. The pixels stay. You waste ten minutes deciding the layer is wrong, and you are right, but the tool should have said so.

On Linux the keys have to be these keys. Ctrl is Ctrl. The bracket keys are the bracket keys. A studio that renamed them for taste would make every retoucher relearn a hand they have had since the late nineties.

## The constraint

Pixel tools share the document with vectors, so the keys have to be persona-aware where a letter is already taken. `M` in Pixel is Smudge. Shift+M in Pixel is the marquee. Shift+J is the healing brush, which is the next tool over from Clone. `J` alone is Clone. The chord is the disambiguation. You do not get a second brush panel to resolve the collision.

The stroke has to hit a real pixel buffer. The eraser used to draw into an empty preview and look busy. It now erases image pixels. That is the kind of fix you only notice because the hole is actually in the layer. Undo, Esc, a tool change, and a tab change all have to finish or cancel an in-flight stroke so you do not leave unrecorded dabs. One undo restores the stroke you committed. A half-applied scribble is not a state the file can save.

Size and hardness are tool state, changed from the keyboard, bounded so a runaway key-repeat cannot make a 10,000 pixel brush. The bracket keys step size by 2 pixels, from 1 to 256. Shift plus the brackets steps hardness by 0.08, from 0 to 1. Curly braces hit the same shortcuts, because that is how the key event arrives with Shift on many layouts. The numbers live in the Brush studio too, if you want to drag them. The keys are for when you are looking at the canvas.

Clone's source is an Alt-click on the active image. The source stays where you put it until you Alt-click again. Fill uses the current paint target: the pixel layer, or the mask if you have switched the inspector to Mask. There is no cloud brush library required to make a dab. Brushes you add later through plugins are extra. These five tools are in the binary.

## What landed

Brush `B`. Eraser `E`. Fill `K`. Clone `J`, Alt-click to set the source. Smudge `M`. Those are the manual's keys, and they match the shortcut table. Healing is Shift+J, separate, because it blends. This set is the direct tools: paint, remove, flood, copy samples, push color.

`[` and `]` change brush size. Shift+`[` and Shift+`]` change hardness. The HUD at the bottom of the window shows the active tool's gestures, and holding Shift swaps that row so you can see the hardness chord while your finger is on it. The strip does not take keyboard focus. `Ctrl+/` hides it. `F1` opens the full list.

Color is the Color studio: saturation and brightness, hue, alpha, hex, swatches, recent colors. `X` swaps fill and stroke. `D` restores default fill and stroke. Open a chip and you get Current and Previous. Click Previous to return to the color from before this edit. Eight-digit hex is `#RRGGBBAA`. The brush uses that color. On a mask, the inspector offers Hide and Reveal, which set the brush to black or white, because black hides and white reveals. That is mask painting. On pixels, the chip is the paint.

A marching-ant selection limits brush, fill, clone, heal, and smudge to the inside of the selection. Delete clears the selected pixels. Esc drops the ants. If you wanted to paint the whole layer, drop the selection first. `Ctrl+D` in Pixel clears a pixel selection. `Super+D` duplicates. Those two chords are easy to mix. In Pixel, Ctrl+D is deselect, not duplicate.

The eraser hides on a mask. On pixels it removes pixels. Fill floods the current paint target. If the target is wrong, switch Pixels or Artwork versus Mask in the inspector before you hit `K`. Eyedropper `I` samples a color and shows it in the sidebar.

If the layer is locked, hidden, or not a pixel layer, the tool tells you. "Choose an unlocked pixel layer to paint." "Choose an unlocked pixel layer to smudge." "Choose an unlocked pixel layer to clone." Add the layer, or select the one you meant. The tool will not write the paper.

## In the hand

Switch to Pixel. Select the pixel layer. Press `B`. Tap `]` until the dab matches the pore or the shadow. Hold Shift and tap `[` if the edge is too hard. Paint. Release. `Ctrl+Z` if the stroke is wrong. The whole stroke comes back.

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

Press `J`. Alt-click a clean patch of the wall. Paint over the socket you need gone. The samples come from that click. Alt-click again if the texture should change. Press `E` and remove a stray dab. Press `K` to fill a selection you made with the marquee or the wand. Press `M` and push a highlight along a curve. Each tool is a key. The layer stays the layer you selected.

Swap color with the chip, or press `I` and click the canvas. Press `X` if you had filled the stroke chip and you meant the fill. Press `D` when you want the defaults back and you do not remember what they were.

Watch the status line the first time on a new document. If it asks for a pixel layer, Layers → ··· → New pixel layer, then paint. Lock the layer when you return to type. A later `B` complains, and the finished paint stays finished.

The Shortcut HUD is the reminder while you learn the chords you already knew in Photoshop. After a day you will not read it. The keys will be the keys.

## The edge

These tools refuse to paint a missing, hidden, or locked pixel layer, and the eraser refuses to spend the stroke on an empty preview. You get a status line, or you get a real change in the buffer. Undo returns the stroke you committed.

Clone refuses to guess a source. Alt-click sets it. Until that click, you do not have a source. Fill and brush follow the inspector's paint target. If Mask is selected, you are painting the mask. Switch back to Pixels before you expect color on the image.

## Pixel layer

### The habit

You have a logo made of paths and a photograph that needs a cleanup. In Photoshop you open the photo, you retouch, you place the logo, and the logo is either smart-object fragile or already outlines. In Illustrator you place the photo and you cannot heal a blemish without a trip to another app. The hand wants one stack. Vectors on their layers. Pixels on theirs. Eye and lock per row. Reorder with the same gestures you use for groups.

Affinity Designer and Affinity Photo split this by persona and by file more often than you want on a Tuesday. You can move between them. You still feel the seam. The job is smaller than that seam. Paint on the shadow under the wordmark. Trace the painted edge back to vectors if the mark should be paths again. Leave the wordmark editable the whole time.

A vector-only document has nowhere to put a dab. The first move is to add a pixel layer, then pick the brush. The paths do not convert because you added that layer. They sit under it, or over it, in the order you set.

### The constraint

One `.oma` holds both. Rasters are packed in the project as PNG data. Vectors stay geometry. A paint stroke has to land on a pixel layer, because a path has no grid of samples to receive a brush. If the open document is nothing but vectors, the studio does not silently invent a bitmap the size of the canvas and hide it. You add the layer from Layers. You see the row. You know where the paint went.

That also means the paint target is explicit. Brush, eraser, fill, clone, smudge, and heal look for an unlocked, visible pixel layer. If they cannot find one, the status line says so: "add a pixel layer to paint," or "Choose an unlocked pixel layer to paint," depending on the tool. The stroke does not fall through onto the paper and pretend it worked. Paper is the document background. It is not a secret layer.

Undo is one step for the stroke once you release, and for adding the layer. You can delete the pixel layer later without deleting the vectors. You can trace the pixel layer back to paths with Trace `U`, or with Object → Trace to vector, which runs the same trace without switching tools. Threshold, color count, and smoothness live in the Trace studio. The vectors you already had are a different layer. Trace does not replace them unless you put the result there yourself.

Persona is a lens, not a file conversion. Pixel is the persona for painting and retouching. Design is still one click away, on the same tab, on the same `.oma`. You do not save a PSD to retouch and a separate SVG to keep the mark. Save once. Both are in the project.

### What landed

Paint lives on a pixel layer. In the Layers studio, the ··· menu has New vector layer, New pixel layer, and New group. New pixel layer adds a raster layer to the stack and you can select it. The row has an eye and a lock, like every other layer. Click the name to target it. Hidden and locked layers stay out of painting. The mask inspector says "Unlock this layer to paint" when the row is locked, and "Show this layer to paint" when it is hidden. Those are the gates.

The Pixel persona's first tools are Brush `B`, Eraser `E`, Clone `J`, and Wand `W`. They operate on the active pixel layer. Design tools, Pen `P`, Type `T`, Rectangle `R`, keep working on vector layers in the same document. Switch persona when you want the paint tools in hand. Switch back when you want the node tool. The stack does not rearrange itself because you switched.

Reorder is the same as the rest of the studio. Select a layer row and use `Ctrl+[` or `Ctrl+]`. Add Shift to send it to the back or front of its group. Drag a name onto an insertion line. Groups move with their children. A pixel layer can sit inside a group with vectors. Pass through on an explicit group controls whether child blend modes see the backdrop outside the group. Layer opacity applies once to the layer's contents. A placed image uses the layer opacity and blend above the Layers tree. A painted pixel layer uses its own pixels plus that opacity.

Object masks and inside or outside strokes bump the file to `.oma` format 6 so an older build cannot quietly drop them. A document that does not need those features can stay compatible with format 5. Either way, Save writes `.oma`. The pixel layer is in that file. Export to PNG or JPEG bakes a picture. Export to SVG keeps vectors as vectors where the exporter can, and the manual is honest when a format has to turn something into pixels. The working file remains the `.oma`.

Trace is the way back from paint to paths, on the active pixel layer. It does not delete the pixel layer as a side effect of making vectors. You can keep both. You can hide the paint when the paths are the deliverable.

### In the hand

Open the poster. It is paths and type. Press `B`. If the status line asks for a pixel layer, open Layers, ···, New pixel layer. Click that row. Press `B` again. Paint the shadow, the grain, the repaired edge. `Ctrl+Z` lifts the stroke. The wordmark, still a vector layer underneath, did not become pixels.

```
Layers → ··· → New pixel layer
B
```

Drag the pixel row above or below the type. `Ctrl+]` moves it forward. Eye it off to judge the vectors alone. Eye it on to judge the composite. Lock it when the paint is done and you are back in the type, so a later brush click does not land in the finished texture.

Switch to Design. Press `P` or `T`. Draw. The pixel layer stays in the stack, untouched, until you select it again. Switch to Pixel. Press `U` if a painted shape should become vectors. Set threshold, colors, and smoothness. Object → Trace to vector does that job without leaving the tool you had, when you already know you want paths.

Save with `Ctrl+S`. Quit. Open the `.oma`. The pixel layer is still a pixel layer. The paths are still paths. You did not flatten on the way out.

Place a photograph with `Ctrl+Shift+P` when the paint should start from a picture. A blank layer is the other choice. Place loads in the background, then you click or drag to set it down. Undo removes the placement in one step. That placed image is its own layer. A new pixel layer is the blank one you paint. Use the one the job needs. Both can exist in the same stack.

### The edge

A brush refuses to paint a vector layer, and it refuses to invent a hidden bitmap so the stroke can pretend to land. You add New pixel layer, you select it, and the dab has a home. The paths you already drew stay paths.

Deleting or hiding that pixel layer does not convert, trace, or flatten the rest of the file. Trace is a separate command, on the pixel layer you point it at. The stack holds both until you decide one of them is finished.
