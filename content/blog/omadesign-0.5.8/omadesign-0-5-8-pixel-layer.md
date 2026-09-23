---
id: T060
title: Pixel layer
slug: omadesign-0-5-8-pixel-layer
excerpt: Paint lives on a pixel layer in the same stack as the vectors. If the document is vector-only, add one from the Layers menu. The paths stay paths.
tags: [omadesign, 0.5.8, pixel]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-pixel-layer/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-pixel-layer/og.png
---

## The habit

You have a logo made of paths and a photograph that needs a cleanup. In Photoshop you open the photo, you retouch, you place the logo, and the logo is either smart-object fragile or already outlines. In Illustrator you place the photo and you cannot heal a blemish without a trip to another app. The hand wants one stack. Vectors on their layers. Pixels on theirs. Eye and lock per row. Reorder with the same gestures you use for groups.

Affinity Designer and Affinity Photo split this by persona and by file more often than you want on a Tuesday. You can move between them. You still feel the seam. The job is smaller than that seam. Paint on the shadow under the wordmark. Trace the painted edge back to vectors if the mark should be paths again. Leave the wordmark editable the whole time.

A vector-only document has nowhere to put a dab. The first move is to add a pixel layer, then pick the brush. The paths do not convert because you added that layer. They sit under it, or over it, in the order you set.

## The constraint

One `.oma` holds both. Rasters are packed in the project as PNG data. Vectors stay geometry. A paint stroke has to land on a pixel layer, because a path has no grid of samples to receive a brush. If the open document is nothing but vectors, the studio does not silently invent a bitmap the size of the canvas and hide it. You add the layer from Layers. You see the row. You know where the paint went.

That also means the paint target is explicit. Brush, eraser, fill, clone, smudge, and heal look for an unlocked, visible pixel layer. If they cannot find one, the status line says so: "add a pixel layer to paint," or "Choose an unlocked pixel layer to paint," depending on the tool. The stroke does not fall through onto the paper and pretend it worked. Paper is the document background. It is not a secret layer.

Undo is one step for the stroke once you release, and for adding the layer. You can delete the pixel layer later without deleting the vectors. You can trace the pixel layer back to paths with Trace `U`, or with Object → Trace to vector, which runs the same trace without switching tools. Threshold, color count, and smoothness live in the Trace studio. The vectors you already had are a different layer. Trace does not replace them unless you put the result there yourself.

Persona is a lens, not a file conversion. Pixel is the persona for painting and retouching. Design is still one click away, on the same tab, on the same `.oma`. You do not save a PSD to retouch and a separate SVG to keep the mark. Save once. Both are in the project.

## What landed

Paint lives on a pixel layer. In the Layers studio, the ··· menu has New vector layer, New pixel layer, and New group. New pixel layer adds a raster layer to the stack and you can select it. The row has an eye and a lock, like every other layer. Click the name to target it. Hidden and locked layers stay out of painting. The mask inspector says "Unlock this layer to paint" when the row is locked, and "Show this layer to paint" when it is hidden. Those are the gates.

The Pixel persona's first tools are Brush `B`, Eraser `E`, Clone `J`, and Wand `W`. They operate on the active pixel layer. Design tools, Pen `P`, Type `T`, Rectangle `R`, keep working on vector layers in the same document. Switch persona when you want the paint tools in hand. Switch back when you want the node tool. The stack does not rearrange itself because you switched.

Reorder is the same as the rest of the studio. Select a layer row and use `Ctrl+[` or `Ctrl+]`. Add Shift to send it to the back or front of its group. Drag a name onto an insertion line. Groups move with their children. A pixel layer can sit inside a group with vectors. Pass through on an explicit group controls whether child blend modes see the backdrop outside the group. Layer opacity applies once to the layer's contents. A placed image uses the layer opacity and blend above the Layers tree. A painted pixel layer uses its own pixels plus that opacity.

Object masks and inside or outside strokes bump the file to `.oma` format 6 so an older build cannot quietly drop them. A document that does not need those features can stay compatible with format 5. Either way, Save writes `.oma`. The pixel layer is in that file. Export to PNG or JPEG bakes a picture. Export to SVG keeps vectors as vectors where the exporter can, and the manual is honest when a format has to turn something into pixels. The working file remains the `.oma`.

Trace is the way back from paint to paths, on the active pixel layer. It does not delete the pixel layer as a side effect of making vectors. You can keep both. You can hide the paint when the paths are the deliverable.

## In the hand

Open the poster. It is paths and type. Press `B`. If the status line asks for a pixel layer, open Layers, ···, New pixel layer. Click that row. Press `B` again. Paint the shadow, the grain, the repaired edge. `Ctrl+Z` lifts the stroke. The wordmark, still a vector layer underneath, did not become pixels.

```
Layers → ··· → New pixel layer
B
```

Drag the pixel row above or below the type. `Ctrl+]` moves it forward. Eye it off to judge the vectors alone. Eye it on to judge the composite. Lock it when the paint is done and you are back in the type, so a later brush click does not land in the finished texture.

Switch to Design. Press `P` or `T`. Draw. The pixel layer stays in the stack, untouched, until you select it again. Switch to Pixel. Press `U` if a painted shape should become vectors. Set threshold, colors, and smoothness. Object → Trace to vector does that job without leaving the tool you had, when you already know you want paths.

Save with `Ctrl+S`. Quit. Open the `.oma`. The pixel layer is still a pixel layer. The paths are still paths. You did not flatten on the way out.

Place a photograph with `Ctrl+Shift+P` when the paint should start from a picture. A blank layer is the other choice. Place loads in the background, then you click or drag to set it down. Undo removes the placement in one step. That placed image is its own layer. A new pixel layer is the blank one you paint. Use the one the job needs. Both can exist in the same stack.

## The edge

A brush refuses to paint a vector layer, and it refuses to invent a hidden bitmap so the stroke can pretend to land. You add New pixel layer, you select it, and the dab has a home. The paths you already drew stay paths.

Deleting or hiding that pixel layer does not convert, trace, or flatten the rest of the file. Trace is a separate command, on the pixel layer you point it at. The stack holds both until you decide one of them is finished.
