---
id: T043
title: SVG FX stack
slug: omadesign-0-5-8-svg-fx-stack
excerpt: The FX studio stacks SVG filters on the selection, then on the layer underneath. Blur, shadow, offset, color, turbulence, displacement. The parameters are the SVG parameters.
publishedAt: 2026-09-06T10:36:01Z
tags: [omadesign, 0.0.1-alpha, effects, svg]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-svg-fx-stack/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-svg-fx-stack/og.png
---

## The habit

You select the mark and add a drop shadow, then a blur, or you blur what sits under it. Illustrator's Appearance panel stacks fills, strokes and effects, and the order determines the look. Photoshop stacks layer styles, so a drop shadow plus a color overlay is a list you can reorder and toggle. Affinity's Layer Effects are the same kind of list. You expect the effect to stay live, so changing the blur radius next week updates the shadow. You don't expect the shadow to be painted into the pixels on the first try.

You also expect a small, named set: a Gaussian-style blur, drop shadow and inner shadow, an offset, and thicken and thin, which SVG calls dilate and erode. Then saturation, hue rotation, brightness, contrast and invert, a color matrix when the simple sliders aren't enough, and turbulence and displacement when you want a texture that is still a filter instead of a pasted scan.

The stack has a target: the selection first, and then the layer underneath, when the effect is meant to land on what sits below. A shadow that only exists inside the object's own alpha looks different from a shadow that darkens the photograph under the logo. "Selection, then the layer beneath" is the rule you want the studio to follow.

Pixel filters are a related habit with a different commitment. With chroma key, a destructive blur or a sharpen, you preview, click Apply, and the pixels change as one undo step. Those live in Pixel. The Design FX stack is the live list.

Then you export. You build a shadow in the design tool, export an SVG for the web, and find the shadow is a baked image, missing, or a different blur from the one you approved. Illustrator has a long history of "Photoshop effects" that behave one way inside an Illustrator file and differently, or not at all, in the SVG. Affinity's export dialog asks you directly whether effects should stay live or become raster. I wanted a rule you can remember without a dialog: the numbers you set are the SVG numbers. The canvas shows a rasterization, because the window has to show pixels. The SVG gets a `<filter>` and the `fe*` elements that implement it. Blur goes out as a blur and a drop shadow goes out as the shadow filter you stacked. No effect exists only inside the authoring file.

Motion makes that promise harder. Animated SVG can carry transforms, stroke and fill reveals, masks and effects. Lottie, the Bodymovin 5.x shape export, can't keep pixel layers, layer masks or effects, and that failure has to be a clear error. A Lottie that silently drops the shadow is how a loading animation ships without its shadow and nobody knows which export lost it.

In Motion, PNG and JPEG export the rest pose. Outside Motion they are just a picture. Either way they carry no filter graph. You choose them when a picture is the deliverable, and SVG when the filter has to stay a filter.

## The constraint

The parameters are the SVG parameters, with no private format that approximates SVG on export. If the blur is an SVG blur, the number you set is the number SVG sees. If Omadesign stored its own "shadow distance" and tried to build an `feDropShadow` or an `feGaussianBlur` at export time, the canvas and the file could drift apart. The canvas rasterizes so you can judge the picture at your working zoom, and the export writes `<filter>` and the `fe*` primitives. There is one definition with two views: pixels on screen while you design, and the filter graph when you share an SVG.

That keeps the `.oma` and the SVG from diverging. A client who opens the SVG in a tool that understands SVG filters gets the filter. A client who needs a PNG gets the rasterized look, because PNG has no filter graph. You pick the export for whoever receives it, and you never maintain a second effect stack per file format. The `.oma` is the project and SVG is an export. Native save keeps the document you were editing.

The stack sits on the selected object and then the layer underneath. It isn't a document-wide grade or a pixel-layer filter dialog. Design stays vectors plus this filter list. Pixel keeps Raster studio > Filters and Effects, with Apply, Cancel and a full-resolution commit. Putting both in one menu would make every blur ambiguous, live or baked, so the studios stay separate.

Select > Same Effects compares the complete effect stack, and two objects match when their stacks match. That only works because the stack is a real property on the object, saved with the project. It isn't a preview overlay. You can gather every logo with the same shadow and edit the stack once.

Effect parameter colors use the same picker as the rest of the paint, with alpha and the Current and Previous chips. Effects don't get a second, weaker color system.

Lottie is a narrower format. The exporter writes Bodymovin 5.x shape animation with trim paths and fill masks. It can't preserve pixel layers, layer masks or effects, so it produces a clear error, and you switch to animated SVG for those compositions. Animated SVG keeps masks and effects, and it outlines text in the exported file so glyph geometry and reveals match the canvas, while the source text in the `.oma` stays editable. Each export has its own stated limits.

Static SVG follows the same FX rule. The filter graph is written, masks survive SVG export, and the mask is applied before the effects. File > Export writes that file from this binary.

## What landed

### The FX stack

Open the FX studio on the right, select an object and add SVG filter effects. They apply to the selection and then to the layer underneath.

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

These are the SVG names. Dilate and erode grow and shrink the graphic the way the morphology filter does. Offset moves the result. Turbulence makes a noise field, and displacement uses that field to push the pixels of the filtered graphic. Hue rotate, saturate, brightness, contrast, invert and the color matrix are the color primitives. Blur and the two shadows do what their names say.

You stack them, and Same Effects treats the stack as the property to compare. The canvas shows the filters rasterized, and the parameters stay the SVG values you set. Zoom doesn't change the parameters, and Ctrl+1 shows them at 100%. The rasterization is only the view and never a destructive apply.

The layer underneath matters. Put the logo on the layer above the photograph and select the logo. The FX stack applies to the logo and then to the layer under it, which is the photograph's layer when that is the layer directly underneath. A shadow can show on the photo because the target includes that layer. An object on some other layer, off to the side, isn't the layer underneath.

Pixel's filter list is the other route. Chroma key, levels, a gaussian blur you Apply, film grain and swirl all commit pixels on the pixel layer, in the background, as one undo step, and Cancel leaves the source untouched. Use them when the photograph itself has to change. Use FX when the vector artwork should keep a live filter graph.

Opacity and blend mode aren't part of this stack. They live on the object and the layer (Normal, Multiply, Screen and the rest). A Multiply logo with a drop shadow uses both: the blend mode is set on the object and the shadow is an FX entry. Pass through, on an explicit group, decides whether child blends reach the backdrop. It doesn't replace the filter list.

### Exporting

Export SVG and the file contains `<filter>` and the `fe*` primitives for the stack. A blur or a displacement you set is in the graph. The person receiving it doesn't need Omadesign to see there was a filter. They need an SVG renderer that implements the primitives you used. That is the format's limit, and it is a better limit than a private effect blob.

Export PNG or JPEG when the recipient is a slide, a social crop, or a printer who asked for a picture. Those files are the rasterized look without `<filter>`, and the `.oma` still has the live stack for the next change.

Export animated SVG when the composition moves and the effects have to move with it. Masks and effects are kept. Text is outlined in that export so the reveals match, and the text in the `.oma` stays text.

Export Lottie when the recipient asked for Bodymovin shape animation and the composition is shapes, trims and fill masks. If the file has pixel layers, layer masks or effects, the exporter errors clearly, so you never get a JSON file pretending the shadow survived. Use animated SVG for that piece, or deliberately remove the effect and export Lottie.

View > Document conversion notes lists unsupported or converted features for imports. For this export, the Lottie error is the note that matters. Read it and switch formats. The shadow is still in the project.

Same Effects is useful before you export too. Gather the objects with the stack you are about to share and confirm they match. A stray object with a different blur would export a different graph, so selecting is how you check.

## In the hand

Select the wordmark, open FX and add a drop shadow. Set the parameters the SVG filter exposes and look at the canvas, where the shadow is rasterized so you can see it. Add a blur if the edge should soften, and change it to watch the canvas update. The parameter you are changing is the SVG parameter. Keep in mind how the studio applies the list: selection first, then the layer beneath.

If the shadow should fall on a photo, put the photograph on the layer under the wordmark and confirm the order in the Layers studio. Eye and lock are per object, and the photo has to be visible. Select the wordmark again and check the shadow on the photo.

If several marks share the stack and should take the next edit together, use Select > Same Effects and change the shadow once.

Press Ctrl+1 to look at the edge at actual size, then press Z and Alt-click to step back out. The interface doesn't zoom, but the shadow does, because it is on the canvas.

```
FX studio
blur, drop shadow, inner shadow, offset
dilate / erode
saturate, hue rotate, brightness, contrast, invert, color matrix
turbulence, displacement
Selection, then the layer underneath
Select → Same Effects
```

Ctrl+Z removes the last FX change from the object, because the stack is a property. Once the stack is right, save the `.oma` with Ctrl+S, and the filters are part of the project you reopen. Exporting isn't saving. Crash recovery looks for the project, using the `.oma.swp` written at idle under `~/.local/share/omadesign/`. An SVG on the desktop is a copy of one moment, and the filter you will edit tomorrow is in the project.

Now choose the SVG export. If you want to see the graph, open the file in a browser or an editor that shows SVG source. You should find a `<filter>` and `fe*` elements where the shadow is, and the logo in the browser should show the filter.

Export a PNG of the same artboard for the deck. The PNG looks like the canvas, but it won't update if you change the blur later. The `.oma` will, so keep the project.

If the logo is on a timeline, try Export Lottie… while the effect is still on it, and you'll get the clear error. Then use File > Export animated SVG… for the motion preview. Press Space in Motion to play the clip and watch the shadow before you export. The artboard is the rest pose, and the filter goes out with the animated SVG.

```
FX                         SVG parameters, rasterized on the canvas
SVG export                 <filter> and fe*
PNG / JPEG                 The picture, no filter graph
File → Export animated SVG Masks and effects retained
File → Export Lottie       Errors on pixel layers, masks, and effects
```

## The edge

The FX stack never bakes into pixels. It stays a filter on the selection and then on the layer underneath. Raster studio filters, the ones you Apply in Pixel, are the baking option, with their own preview, Cancel and commit. A drop shadow you want to keep editable belongs in FX.

Objects that aren't the selection, and aren't on the layer underneath it, are outside this stack. Put the artwork in order before you judge the shadow.

Lottie won't export effects, pixel layers or layer masks, and it tells you with a clear error instead of producing a file with a hole where the shadow was. Animated SVG keeps effects in motion, and static SVG writes `<filter>` and `fe*` for a still.

The canvas rasterizes so you can see the result, but the window isn't the file format. The SVG carries the graph and a PNG carries the pixels, and you choose between them when you export.
