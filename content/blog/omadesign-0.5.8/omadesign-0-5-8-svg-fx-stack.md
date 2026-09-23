---
id: T043
title: SVG FX stack
slug: omadesign-0-5-8-svg-fx-stack
excerpt: The FX studio stacks SVG filters on the selection, then on the layer underneath. Blur, shadow, offset, color, turbulence, displacement. The parameters are the SVG parameters.
tags: [omadesign, 0.5.8, effects]
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
