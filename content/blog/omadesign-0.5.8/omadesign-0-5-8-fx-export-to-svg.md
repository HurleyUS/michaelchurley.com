---
id: T044
title: FX export to SVG
slug: omadesign-0-5-8-fx-export-to-svg
excerpt: FX parameters are the SVG parameters. The canvas shows them rasterized. SVG export writes a filter element and the fe primitives, so the graph you built is the graph you share.
tags: [omadesign, 0.5.8, svg]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-fx-export-to-svg/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-fx-export-to-svg/og.png
---

## The habit

You build a shadow in the design tool. You export an SVG for the web. You open the SVG and the shadow is a baked image, or it is gone, or it is a different blur than the one you approved. Illustrator has a long history of effects that are "Photoshop effects" inside an Illustrator file and a different thing, or nothing, in the SVG. Affinity's export dialog asks you, in so many words, whether effects should stay live or become raster. The honest version of that question is a rule you can remember without a dialog.

The rule you want: the numbers you set are the SVG numbers. On the canvas, you see a rasterization, because the window has to show pixels. In the SVG, you get a `<filter>` and the `fe*` elements that implement it. Blur goes out as a blur. A drop shadow goes out as the shadow filter you stacked. The graph travels. There is no mystery effect that only exists inside the authoring file.

Motion makes the same promise harder. Animated SVG can carry transforms, stroke and fill reveals, masks, and effects. Lottie, the Bodymovin 5.x shape export, cannot keep pixel layers, layer masks, and effects. The failure has to be a clear error. A Lottie that silently drops the shadow is how a loading animation ships without the shadow and nobody knows which export ate it.

PNG and JPEG are the rest pose when you are in Motion, and they are a picture when you are not. They do not carry a filter graph. You choose them when a picture is the deliverable. You choose SVG when the filter has to remain a filter.

## The constraint

One set of parameters. The FX studio's list is the SVG list: blur, drop and inner shadow, offset, dilate and erode, saturate, hue rotate, brightness, contrast, invert, color matrix, turbulence, displacement. If Omadesign stored a private "shadow distance" and tried to invent an `feDropShadow` or an `feGaussianBlur` at export time, the canvas and the file could drift. The parameters are the SVG ones from the start. Rasterize on the canvas so the eye can judge. Write `<filter>` and `fe*` on the way out so the file matches the judgment.

The `.oma` is the project. SVG is an export. Native save keeps the document you were editing.

Lottie is a narrower share. The exporter writes Bodymovin 5.x shape animation with trim paths and fill masks. It cannot preserve pixel layers, layer masks, and effects. It produces a clear error. You switch to animated SVG for those compositions. Animated SVG keeps masks and effects, and it outlines text in the exported file so glyph geometry and reveals match the canvas. The source text in the `.oma` stays editable. Two exports, two contracts, stated in the open.

Static SVG follows the same FX rule. The filter graph is written. Masks survive SVG export, and the mask is applied before the effects. File → Export writes that file from this binary.

## What landed

Build the stack in FX. The canvas rasterizes it. You see blur, shadow, turbulence, the color matrix, all of it, as pixels in the window. Zoom does not change the parameters. Ctrl+1 shows them at 100%. The rasterization is the view. It is not a destructive apply.

Export SVG. The file contains `<filter>` and the `fe*` primitives for that stack. A blur you set is in the graph. A displacement you set is in the graph. The person on the other side is not dependent on Omadesign to know there was a filter. They are dependent on an SVG renderer that implements the primitives you used. That is the format's limit, and it is a better limit than a private effect blob.

Export PNG or JPEG when the consumer is a slide, a social crop, or a printer who asked for a picture. Those files are the rasterized look. They do not contain `<filter>`. You knew that when you picked the format. The `.oma` still has the live stack for the next change.

Export animated SVG when the composition moves and the effects have to move with it. Masks and effects are retained. Text is outlined in that export so the reveals match. The `.oma` text stays text.

Export Lottie when the consumer asked for Bodymovin shape animation and the composition is shapes, trims, and fill masks. If the file has pixel layers, layer masks, or effects, the exporter errors clearly. You do not get a JSON file that pretends the shadow survived. Choose animated SVG for that piece, or remove the effect and export Lottie on purpose.

View → Document conversion notes is where unsupported or converted features are listed for imports. For this export, the Lottie error is the note that matters in the moment. Read it. Switch formats. The shadow is still in the project.

Same Effects still works before you export. Gather the objects with the stack you are about to share, confirm they match, then export. A stray object with a different blur would export a different graph. The select is how you audit.

## In the hand

Select the logo. Add a drop shadow and a blur in FX. Look at the canvas. The shadow is visible because the view rasterized the filter. Change the blur. The canvas updates. The parameter you are changing is the SVG parameter.

Choose the SVG export. Open the file in a browser or another editor that shows SVG source if you want to see the graph. You should find a `<filter>` and `fe*` elements, not an empty group where the shadow used to be. The logo in the browser should carry the filter.

Export a PNG of the same artboard for the deck. The PNG looks like the canvas. It will not update if you later change the blur. The `.oma` will. Keep the project.

If the logo is on a timeline, try Export Lottie… while the effect is still on it. Expect the clear error. Then File → Export animated SVG… and use that file for the motion preview. Space in Motion plays the clip so you can watch the shadow before you export. The artboard is the rest pose. The filter rides on the animated SVG.

```
FX                         SVG parameters, rasterized on the canvas
SVG export                 <filter> and fe*
PNG / JPEG                 The picture, no filter graph
File → Export animated SVG Masks and effects retained
File → Export Lottie       Errors on pixel layers, masks, and effects
```

Ctrl+S the `.oma` after the stack is right. Export is not the save. A crash recovery looks for the project, the `.oma.swp` idle writes under `~/.local/share/omadesign/`. The SVG on the desktop is a copy of a moment. The filter you will edit tomorrow is in the project.

## The edge

Lottie refuses effects. It also refuses pixel layers and layer masks. The refusal is a clear error, not a file with a hole where the shadow was. Animated SVG is the export that keeps the effects in motion. Static SVG is the export that writes `<filter>` and `fe*` for a still.

The canvas refuses to pretend the window is the file format. It rasterizes so you can see. The SVG carries the graph. A PNG carries the pixels. You pick one when you export.

Build the shadow in FX, export SVG, and treat the `<filter>` in that file as the effect you signed off on.
