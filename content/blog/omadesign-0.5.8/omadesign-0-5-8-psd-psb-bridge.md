---
id: T107
title: PSD PSB bridge
slug: omadesign-0-5-8-psd-psb-bridge
excerpt: PSD and PSB open through a native layered reader and export as RGB 8-bit layers. Groups, names, masks, blends, and supported Normal color overlays can survive. Text and smart objects arrive as saved pixels.
publishedAt: 2026-09-07T01:42:01Z
tags: [omadesign, 0.5.8, psd]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-psd-psb-bridge/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-psd-psb-bridge/og.png
---

## The habit

Photoshop’s file is the layer stack. You name the layers. You group them. You hide the ones that are options. You set opacity and a blend mode. You paint a pixel mask. You set type, and you nest a smart object when the logo is really another file. Save a Copy or Export As when you need a PNG. The PSD is what you reopen.

When another application opens that PSD, you have learned to look for three failures. The text becomes a picture. The smart object becomes a picture. The layer style either vanishes or gets baked. A good bridge tells you which of those happened and still gives you the groups, the names, and the masks. A bad bridge hands you a flat composite and calls it a layered open. PSB is the same file past the old size limit. Big files, same expectations.

## The constraint

The reader and the writer live in the one Omadesign binary. There is no Photoshop install on the Linux machine, and the bridge does not shell out to one. Channels have to decode locally: raw, RLE, ZIP, and ZIP with prediction. Grayscale, RGB, and CMYK documents are in scope. Source channels may be 8, 16, or 32 bit. The document you edit here is 8-bit RGBA, so higher depth is reduced and a note says so. CMYK conversion is approximate. Embedded ICC profiles are not applied. That is a visible limit, not a quiet color shift you are supposed to trust for a press proof.

The `.oma` is the master after you save. Export back to PSD has to be layered RGB, 8-bit, because that is the writer. It will not emit 16-bit PSD, and it will not rebuild live type on the way out. Text you set in Omadesign renders into its pixel layer in the exported PSD. The `.oma` still has the live text. One undo in the studio is not a Photoshop history state. History does not travel.

Bounds exist so a hostile or enormous file cannot take the process down with it. 64 megapixels. 512 MiB decoded working budget. 8,192 layers. 64 group levels. A real 37 MB PSD was part of the check. So were independent Photoshop samples. The bridge is for production files inside those bounds, not for an unbounded promise.

## What landed

File → Open on a `.psd` or `.psb` uses the native layered reader. You get groups, Unicode names, placement including negative offsets, visibility, opacity, and the supported blend modes. Hidden layers stay hidden. Pixel masks keep their placement, their default fill, and their density. Feathering is not supported. Clipping relationships are baked into editable pixel masks. After the import, editing the base layer does not automatically push through the clip the way a live clipping mask does in Photoshop. The mask is real. The live link is not.

A supported Normal color overlay becomes an editable native color effect. Other adjustments, fills, and effects are not recreated. The conversion notes explain that limit for the file you opened. Vector masks use a cached pixel mask when one is stored. If the PSD only had the vector mask and no cached pixels, you get what the reader can honestly keep, plus a note.

Text and smart objects import as their saved layer pixels. Photoshop stores a rendered raster for those layers alongside the live data. The bridge keeps that raster as its own layer. It does not rebuild the type object, the font, the paragraph, or the embedded document inside the smart object. You can move the layer, mask it further, and paint. You cannot click it with T and edit the original string. Retype on a new text object if the words have to change. Project fonts apply to that new text. The imported pixels stay the picture of the old words.

Export writes RGB 8-bit PSD or PSB. Separate layers, groups, pixel masks, offsets, and supported color overlays. Vectors, native text, transformations, and other effects render into their individual pixel layers. Opaque canvas paper exports as a background layer. Independent checks with `psd-tools` confirmed the supported color overlay stayed editable after export, the original layer pixels were unchanged, and the saved composite matched pixel for pixel. Nine focused codec tests cover PSD and PSB fixtures, including masks and groups.

Open the result in Photoshop and you have a layered 8-bit RGB file. Open the `.oma` when you need the vectors and the live type again. View → Document conversion notes is the list of what the round trip reduced. Headless uses the same codecs: `omadesign --inspect artwork.psd` and `omadesign --convert artwork.oma --output artwork.psd`. Same-file conversion is refused. The command will not overwrite the PSD you passed as the input.

Place, Ctrl+Shift+P, uses this same reader when the file you place is a PSD or PSB. Nested layers and masks travel together into the current document. Open is the path that starts a new tab at the file’s own dimensions. Both leave the source PSD untouched.

## In the hand

Press Ctrl+O. Choose the `.psd` or the `.psb`. The tab opens at the original pixel size. Walk the layer list from the top. Groups expand. Names match. A hidden layer is still hidden. Opacity and blend are on the layer. Click a mask and confirm it is aligned with the art, including a mask that sat at a negative offset.

Open View → Document conversion notes. Find the lines for type, smart objects, and effects. If type came in as pixels, believe the pixels. Select that layer when you need the picture of the old headline. Press T and set a new line in a project font when the words are allowed to change. Apply a Normal color overlay’s native effect if the note says that one came across as editable. Leave the other effects alone. They are not waiting in a collapsed panel.

Press Ctrl+Shift+S and write a `.oma` next to the PSD. Do not use the PSD’s filename with a different suffix in a way that your next script will confuse, and do not point a convert at the same path. The PSD’s modification time stays. The `.oma` is the file you edit.

To hand a layered file back, export PSD or PSB. You get 8-bit RGB. Text and vectors from the `.oma` are pixel layers in that export, each on its own layer, with a note where editability was reduced. The color overlay that qualified is still an effect you can edit. Send the PSD to Photoshop. Keep the `.oma`.

If the file is over 64 megapixels, over the 512 MiB working budget, over 8,192 layers, or nested past 64 groups, the reader stops. That refusal is the bound. Split the file in Photoshop, or open a flattened delivery if all you needed was the composite.

## The edge

Text and smart objects become the pixel layers saved inside the PSD. The bridge does not reconstruct live type or the embedded smart-object document. What you can edit as type is type you set here, in the `.oma`. What you can see of the old type is the raster Photoshop stored.

Export does not write a 16-bit or CMYK PSD. The way back is RGB, 8-bit, layered. Higher depth on the way in is reduced to 8-bit RGBA with a note. Keep the original PSD if the extra bits still matter.

Press Ctrl+O on the `.psd`, read the conversion notes, and save a `.oma` beside it.
