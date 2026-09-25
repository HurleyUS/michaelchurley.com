---
id: T043
title: SVG FX stack
slug: omadesign-0-5-8-svg-fx-stack
excerpt: The FX studio stacks SVG filters on the selection, then on the layer underneath. Blur, shadow, offset, color, turbulence, displacement. The parameters are the SVG parameters.
publishedAt: 2026-09-06T10:36:01Z
tags: [omadesign, 0.5.8, effects, svg]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-svg-fx-stack/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-svg-fx-stack/og.png
---

## The habit

You select the mark. You add a drop shadow. Then a blur, or you blur the thing under it. Illustrator's Appearance panel stacks fills, strokes, and effects, and the order is the look. Photoshop stacks layer styles, and a drop shadow plus a color overlay is a list you can reorder and toggle. Affinity's Layer Effects are the same list with the same job. You expect the effect to stay live. Change the blur radius next week and the shadow updates. You do not expect to have painted the shadow into the pixels on the first try.

You also expect a small, named set. Gaussian-style blur. Drop shadow and inner shadow. An offset. A thicken and a thin, which SVG calls dilate and erode. Saturation, hue rotation, brightness, contrast, invert. A color matrix when the simple sliders are not the grade. Turbulence and displacement when you want a texture that is still a filter and not a pasted scan.

The stack has a target. The selection, first. Then the layer underneath, when the effect is supposed to land on what sits below. A shadow that only exists inside the object's own alpha is a different picture from a shadow that darkens the photograph under the logo. The order "selection, then the layer beneath" is the sentence you want the studio to keep.

Pixel filters are a neighboring habit and a different commitment. Chroma key, a destructive blur, a sharpen: you preview, you Apply, the pixels change, one undo. That bank lives in Pixel. The Design FX stack is the live list.

## The constraint

The parameters are the SVG parameters. Not a private dialect that approximates SVG on the way out. If the blur is an SVG blur, the number you set is the number SVG will see. The canvas rasterizes so you can judge the picture at the zoom you are working. The export writes `<filter>` and the `fe*` primitives. One definition, two views: pixels on screen while you design, the filter graph when you share an SVG.

That choice keeps the `.oma` and the SVG from diverging into "the effect that dies on share." The graph travels. A client who opens the SVG in a tool that understands SVG filters gets the filter. A client who needs a PNG gets the rasterized look, because PNG has no filter graph. You pick the export for the consumer. You do not maintain a second effect stack for the file format.

The stack is on the selected object, then the layer underneath. It is not a document-wide grade and it is not a pixel-layer filter dialog. Design stays vectors plus this filter list. Pixel keeps Raster studio → Filters and Effects, with Apply, Cancel, and a full-resolution commit. Mixing those into one menu would make every blur ambiguous. Is it live, or did it bake? The studios answer that by staying apart.

Select → Same Effects compares the complete effect stack. Two objects match when the stack matches. That only works if the stack is a real property on the object, saved with the project, not a preview overlay. You can gather every logo that carries the same shadow and edit the stack once.

Color for effect parameters uses the same picker as the rest of the paint. Alpha included. Current and Previous on the chip. An effect color is not a second, poorer color system.

## What landed

Open the FX studio on the right. Select an object. Add SVG filter effects. They apply to the selection, then to the layer underneath.

The list is:

- blur
- drop shadow and inner shadow
- offset
- dilate and erode
- saturate
- hue rotate
- brightness
- contrast
- invert
- color matrix
- turbulence
- displacement

Those names are the SVG set. Dilate and erode grow and shrink the graphic the way the morphology filter does. Offset moves the result. Turbulence makes the noise field. Displacement pushes pixels of the filtered graphic with that field. Hue rotate, saturate, brightness, contrast, invert, and the color matrix are the color primitives. Blur is blur. The two shadows are the two shadows.

You stack them. Same Effects treats that stack as the property. The canvas shows the filters rasterized, and the parameters stay the SVG ones you set.

Underneath matters. Put the logo on the layer above the photograph. Select the logo. The FX stack hits the logo and then the layer under it, which is the photograph's layer when that is the layer underneath. A shadow can read on the photo because the target includes that layer. An object on some other layer, off to the side of the stack, is not the underneath layer.

Pixel's filter list is the other door. Chroma key, levels, a gaussian blur you Apply, film grain, a swirl. Those commit pixels on the pixel layer, in the background, as one undo, and Cancel leaves the source untouched. Use them when the photograph itself has to change. Use FX when the vector artwork should keep a live filter graph.

Opacity and blend mode are not this stack. They live on the object and on the layer: Normal, Multiply, Screen, and the rest. A Multiply logo with a drop shadow uses both. The blend is the blend. The shadow is an FX entry. Pass through, on an explicit group, decides whether child blends reach the backdrop. It does not replace the filter list.

## In the hand

Select the wordmark. Open FX. Add a drop shadow. Set the parameters the SVG filter exposes. Look at the canvas. The shadow is rasterized there so you can see it. Add a blur if the edge should soften. Reorder your attention to the stack: selection first, the layer beneath included in the way the studio applies the list.

Put a photograph on the layer under the wordmark if the shadow should fall on the photo. Confirm the layer order in the Layers studio. Eye and lock are per object. The photo has to be visible. Select the wordmark again and read the shadow on the photo.

Select → Same Effects if several marks share the stack and should take the next edit together. Change the shadow once.

Press Ctrl+1 and look at the edge at actual size. Press Z and Alt-click to step back out. The chrome does not zoom. The shadow does, because it is on the canvas.

```
FX studio
blur, drop shadow, inner shadow, offset
dilate / erode
saturate, hue rotate, brightness, contrast, invert, color matrix
turbulence, displacement
Selection, then the layer underneath
Select → Same Effects
```

Ctrl+Z walks the last FX change off the object. The stack is a property. Save the `.oma`. The filters are part of the project you reopen. Export is the next decision: SVG writes the graph, PNG and JPEG carry the rasterized look, and that split is the export's job.

## The edge

The FX stack refuses to be a pixel bake. It stays a filter on the selection and then on the layer underneath. Raster studio filters, the ones you Apply in Pixel, are the bake. They have their own preview, their own Cancel, and their own commit. A drop shadow you wanted to keep editable belongs in FX.

Objects that are not the selection, and are not the layer underneath that selection, are outside this stack. Put the artwork in order before you judge the shadow.

Open FX, add the drop shadow on the selected mark, and leave the SVG parameters as the ones you are willing to export.

## FX export to SVG

### The habit

You build a shadow in the design tool. You export an SVG for the web. You open the SVG and the shadow is a baked image, or it is gone, or it is a different blur than the one you approved. Illustrator has a long history of effects that are "Photoshop effects" inside an Illustrator file and a different thing, or nothing, in the SVG. Affinity's export dialog asks you, in so many words, whether effects should stay live or become raster. The honest version of that question is a rule you can remember without a dialog.

The rule you want: the numbers you set are the SVG numbers. On the canvas, you see a rasterization, because the window has to show pixels. In the SVG, you get a `<filter>` and the `fe*` elements that implement it. Blur goes out as a blur. A drop shadow goes out as the shadow filter you stacked. The graph travels. There is no mystery effect that only exists inside the authoring file.

Motion makes the same promise harder. Animated SVG can carry transforms, stroke and fill reveals, masks, and effects. Lottie, the Bodymovin 5.x shape export, cannot keep pixel layers, layer masks, and effects. The failure has to be a clear error. A Lottie that silently drops the shadow is how a loading animation ships without the shadow and nobody knows which export ate it.

PNG and JPEG are the rest pose when you are in Motion, and they are a picture when you are not. They do not carry a filter graph. You choose them when a picture is the deliverable. You choose SVG when the filter has to remain a filter.

### The constraint

One set of parameters. The FX studio's list is the SVG list: blur, drop and inner shadow, offset, dilate and erode, saturate, hue rotate, brightness, contrast, invert, color matrix, turbulence, displacement. If Omadesign stored a private "shadow distance" and tried to invent an `feDropShadow` or an `feGaussianBlur` at export time, the canvas and the file could drift. The parameters are the SVG ones from the start. Rasterize on the canvas so the eye can judge. Write `<filter>` and `fe*` on the way out so the file matches the judgment.

The `.oma` is the project. SVG is an export. Native save keeps the document you were editing.

Lottie is a narrower share. The exporter writes Bodymovin 5.x shape animation with trim paths and fill masks. It cannot preserve pixel layers, layer masks, and effects. It produces a clear error. You switch to animated SVG for those compositions. Animated SVG keeps masks and effects, and it outlines text in the exported file so glyph geometry and reveals match the canvas. The source text in the `.oma` stays editable. Two exports, two contracts, stated in the open.

Static SVG follows the same FX rule. The filter graph is written. Masks survive SVG export, and the mask is applied before the effects. File → Export writes that file from this binary.

### What landed

Build the stack in FX. The canvas rasterizes it. You see blur, shadow, turbulence, the color matrix, all of it, as pixels in the window. Zoom does not change the parameters. Ctrl+1 shows them at 100%. The rasterization is the view. It is not a destructive apply.

Export SVG. The file contains `<filter>` and the `fe*` primitives for that stack. A blur you set is in the graph. A displacement you set is in the graph. The person on the other side is not dependent on Omadesign to know there was a filter. They are dependent on an SVG renderer that implements the primitives you used. That is the format's limit, and it is a better limit than a private effect blob.

Export PNG or JPEG when the consumer is a slide, a social crop, or a printer who asked for a picture. Those files are the rasterized look. They do not contain `<filter>`. You knew that when you picked the format. The `.oma` still has the live stack for the next change.

Export animated SVG when the composition moves and the effects have to move with it. Masks and effects are retained. Text is outlined in that export so the reveals match. The `.oma` text stays text.

Export Lottie when the consumer asked for Bodymovin shape animation and the composition is shapes, trims, and fill masks. If the file has pixel layers, layer masks, or effects, the exporter errors clearly. You do not get a JSON file that pretends the shadow survived. Choose animated SVG for that piece, or remove the effect and export Lottie on purpose.

View → Document conversion notes is where unsupported or converted features are listed for imports. For this export, the Lottie error is the note that matters in the moment. Read it. Switch formats. The shadow is still in the project.

Same Effects still works before you export. Gather the objects with the stack you are about to share, confirm they match, then export. A stray object with a different blur would export a different graph. The select is how you audit.

### In the hand

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

### The edge

Lottie refuses effects. It also refuses pixel layers and layer masks. The refusal is a clear error, not a file with a hole where the shadow was. Animated SVG is the export that keeps the effects in motion. Static SVG is the export that writes `<filter>` and `fe*` for a still.

The canvas refuses to pretend the window is the file format. It rasterizes so you can see. The SVG carries the graph. A PNG carries the pixels. You pick one when you export.

Build the shadow in FX, export SVG, and treat the `<filter>` in that file as the effect you signed off on.
