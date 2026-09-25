---
id: T107
title: PSD PSB bridge
slug: omadesign-0-5-8-psd-psb-bridge
excerpt: PSD and PSB open through a native layered reader and export as RGB 8-bit layers. Groups, names, masks, blends, and supported Normal color overlays can survive. Text and smart objects arrive as saved pixels.
publishedAt: 2026-09-07T01:42:01Z
tags: [omadesign, 0.0.2-alpha, psd]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-psd-psb-bridge/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-psd-psb-bridge/og.png
---

## The habit

In Photoshop, the file is the layer stack. You name layers, group them, and hide the ones that are options. You set opacity and a blend mode, paint a pixel mask, set type, and nest a smart object when the logo is really another file. You use Save a Copy or Export As when you need a PNG, and the PSD is what you reopen.

When another application opens that PSD, you have learned to watch for three failures. The text becomes a picture, the smart object becomes a picture, and the layer style either vanishes or gets baked in. A good bridge tells you which of those happened and still gives you the groups, the names and the masks. A bad bridge gives you a flat composite and calls it a layered open. PSB is the same format past the old size limit, so the files are bigger and the expectations are the same.

## The constraint

The reader and the writer are built into the one Omadesign binary. There is no Photoshop on the Linux machine, and the bridge doesn't call one. Channels decode locally, whether they are raw, RLE, ZIP, or ZIP with prediction. Grayscale, RGB and CMYK documents are supported, and source channels can be 8, 16 or 32 bit. The document you edit here is 8-bit RGBA, so higher bit depths get reduced and a note says so. CMYK conversion is approximate, and embedded ICC profiles aren't applied. I'd rather show that limit than hand you a quiet color shift you might trust for a press proof.

Once you save, the `.oma` is the master. Export back to PSD is layered 8-bit RGB, because that is what the writer produces. It won't write a 16-bit PSD, and it won't rebuild live type. Text you set in Omadesign is rendered into its own pixel layer in the exported PSD, while the `.oma` keeps the live text. Undo history in the studio doesn't become Photoshop history states. History doesn't travel.

The limits keep a hostile or enormous file from taking the process down: 64 megapixels, a 512 MiB decoded working budget, 8,192 layers and 64 group levels. Testing included a real 37 MB PSD and independent Photoshop samples. The bridge is for production files within those limits.

## What landed

File > Open on a `.psd` or `.psb` uses the native layered reader. You get groups, Unicode names, placement (including negative offsets), visibility, opacity and the supported blend modes. Hidden layers stay hidden. Pixel masks keep their placement, default fill and density. Feathering isn't supported. Clipping relationships are baked into editable pixel masks. After import, editing the base layer doesn't automatically update the clip the way a live clipping mask does in Photoshop. The mask is real, but the live link is gone.

A supported Normal color overlay becomes an editable native color effect. Other adjustments, fills and effects aren't recreated, and the conversion notes explain that for the file you opened. Vector masks use the cached pixel mask when the file stores one. If the PSD only has the vector mask and no cached pixels, you get what the reader can keep, plus a note.

Text and smart objects import as their saved layer pixels. Photoshop stores a rendered raster for those layers alongside the live data, and the bridge keeps that raster as its own layer. It doesn't rebuild the type object, the font, the paragraph, or the document embedded in the smart object. You can move the layer, mask it further and paint on it, but you can't click it with T and edit the original string. If the words have to change, retype them in a new text object, and project fonts apply to it. The imported pixels remain a picture of the old words.

Export writes 8-bit RGB PSD or PSB, with separate layers, groups, pixel masks, offsets and supported color overlays. Vectors, native text, transformations and other effects are rendered into their own pixel layers. Opaque canvas paper exports as a background layer. Independent checks with `psd-tools` confirmed that the supported color overlay stayed editable after export, the original layer pixels were unchanged, and the saved composite matched pixel for pixel. Nine focused codec tests cover PSD and PSB fixtures, including masks and groups.

Open the result in Photoshop and you have a layered 8-bit RGB file. Open the `.oma` when you need the vectors and live type again. View > Document conversion notes lists what the round trip reduced. Headless mode uses the same codecs: `omadesign --inspect artwork.psd` and `omadesign --convert artwork.oma --output artwork.psd`. Converting a file onto itself is refused, so the command never overwrites the PSD you passed as input.

Place (Ctrl+Shift+P) uses the same reader when the file you place is a PSD or PSB, and nested layers and masks come into the current document together. Open starts a new tab at the file's own dimensions. Neither changes the source PSD.

## In the hand

Press Ctrl+O and choose the `.psd` or `.psb`. The tab opens at the original pixel size. Go through the layer list from the top. Groups expand, names match, hidden layers are still hidden, and opacity and blend are on each layer. Click a mask and confirm it lines up with the art, including a mask that sat at a negative offset.

Open View > Document conversion notes and find the lines about type, smart objects and effects. If type came in as pixels, that layer is now just the picture of the old headline. Keep it when you need that picture. When the words are allowed to change, press T and set a new line in a project font. If the note says a Normal color overlay came across as editable, you can adjust that native effect. The other effects weren't imported, so there is nothing hidden in a collapsed panel.

Press Ctrl+Shift+S and save a `.oma` next to the PSD. Avoid reusing the PSD's filename with a different suffix in a way your next script might confuse, and don't point a convert at the same path. The PSD's modification time doesn't change, and the `.oma` is the file you edit.

To hand a layered file back, export PSD or PSB. You get 8-bit RGB. Text and vectors from the `.oma` become pixel layers in the export, each on its own layer, with a note wherever editability was reduced. A color overlay that qualified is still an editable effect. Send the PSD to Photoshop and keep the `.oma`.

If the file is over 64 megapixels, over the 512 MiB working budget, over 8,192 layers, or nested deeper than 64 groups, the reader stops. Split the file in Photoshop, or open a flattened delivery if you only needed the composite.

## The edge

Text and smart objects come in as the pixel layers saved inside the PSD. The bridge doesn't reconstruct live type or the embedded smart-object document. The only editable type is type you set in the `.oma`, and what you see of the old type is the raster Photoshop stored.

Export doesn't write a 16-bit or CMYK PSD. The export is layered 8-bit RGB. Higher bit depths on import are reduced to 8-bit RGBA with a note, so keep the original PSD if the extra bits still matter.
