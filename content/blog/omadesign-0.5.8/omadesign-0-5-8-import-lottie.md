---
id: T086
title: Import Lottie
slug: omadesign-0-5-8-import-lottie
excerpt: Import Lottie… places a shape-layer Lottie on the timeline. The importer covers a basic shape subset. Keep the .oma for the full editable animation. Still exports remain the rest pose.
publishedAt: 2026-09-02T15:01:58Z
tags: [omadesign, 0.0.1-alpha.rc, motion]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-import-lottie/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-import-lottie/og.png
---

## The habit

Somebody sends you a Lottie. It's a Bodymovin JSON from After Effects, or a file you exported last week and now need back on a timeline. In After Effects you'd open the comp, if you still have it. The JSON is a delivery format, and turning it back into editable shapes works partially at best. You get shapes, some transforms, some trim paths, and a list of features that were baked into a single group or dropped. Illustrator won't open the JSON as a timeline. So you drop it into a preview site, look at it, and ask for the AEP.

When the AEP is gone, you still want the JSON on the canvas. A logo animation arrives as a file, and you need it in the same document as the poster, on a timeline you can scrub and play with Space. You also need to know the limit before you tell a client you can "just tweak the Lottie." Basic shape layers can come in. The full editable animation is the `.oma`, if you made it here. It was never inside a JSON that only held a subset.

Dropping a file on the canvas is the other habit. Images place, an `.oma` opens, and a Lottie should import. A file the app already writes shouldn't need a separate way in.

## The constraint

One `.oma` holds the clip. An import has to become objects and tracks in that document, on the timeline under the canvas. Otherwise it's a preview window. The rest pose rule still applies after import. The artwork that lands is the artwork, and the keys are the clip. A still PNG, JPEG or static SVG export of the document is still the rest pose. Importing a Lottie doesn't switch the still exporters to "current frame," so the rule for stills is the same whether the clip was made here or imported.

The importer is limited to a basic shape subset. Bodymovin files can carry much more than I promise to rebuild as editable objects. Promising the whole format would mean silent substitutions, an import that looks complete but isn't the animation. So the subset is the promise: shape layers and the tracks this timeline knows. Anything that doesn't fit isn't faked.

Because the subset is basic, the `.oma` is the file to keep when you want the complete editable animation. Use Export Lottie for delivery, Import Lottie to bring a shape-layer file onto the timeline, and save the `.oma` if this document is now the working copy. The JSON you imported can stay in the folder as the delivery original. It isn't linked to a cloud library, and the import has no Creative Cloud dependency. You bring the file in through the native dialog or a drop.

If the file was wrong and you don't want the result, the document you saved before importing is your way back. Save the poster first and import second, so a bad JSON never becomes the only copy of the job.

## What landed

**Import Lottie…** brings a shape-layer Lottie onto the timeline. The shapes become artwork in the document, and their animation becomes the clip you scrub in Motion. Space plays it, Home and End jump, and the repeat icon loops the preview. It's the same persona you use for a preset you made yourself.

The subset is basic shapes. **Export Lottie…** writes Bodymovin 5.x shape animation with trim paths and fill masks. **Import Lottie…** brings a shape-layer file back onto the timeline, and the manual states plainly that the import covers a basic subset. Keep the `.oma` when you need the complete editable animation. A JSON full of effects, images and layer types outside the subset won't rebuild the comp you remember. Plan around the shapes that arrive, and either build the rest here or get the original document.

Dropping a Lottie on the canvas imports it, following the usual drop rules: layered documents open, ordinary images place, `.oma` files open and Lottie files import. Use **Import Lottie…** when you want the dialog, and drop the file when it's already in front of you.

PNG, JPEG and static SVG exports stay at the rest pose after an import, as they do for any clip. The playhead can sit mid-animation, but a still export is the document's rest pose. Animated SVG and Lottie are the exports that carry motion. If you imported a JSON, edited what the subset gave you and need to deliver, export again from the File menu. The `.oma` holds the editable result.

If the animation was made in Omadesign, use the `.oma` instead of a round trip through JSON. Exporting and importing again won't add fidelity, because the document already has the complete clip. The import is for a Lottie that came from outside, or a shape JSON you want to place into a document and keep.

## In the hand

Save the poster you're adding the mark to. Then:

```
Import Lottie…
```

Pick the JSON in the native file dialog, and a shape-layer file lands on the timeline. Switch to Motion if you aren't already there, press Space and scrub. The keys you can see on the rows are the keys you can edit. Drag a diamond to retime it, click a diamond and press Delete to remove that key, or press `K` to key transforms on a selection.

If it was the wrong file, remove it from the document before you save, or go back to the `.oma` you saved before importing, and choose the other JSON.

If you don't want the menu, drop a `.json` Lottie on the canvas and it imports. A dropped PNG places an image, and a dropped `.oma` opens that document. The file extension decides.

Edit what came in and save the `.oma`, which is now the working animation. The original JSON on disk doesn't change, because you edited the document. Export Lottie again if someone needs a new delivery file. Export a PNG if they need a still, knowing it will be the rest pose.

If the imported file is only half the motion you remember from After Effects, the rest was outside the subset. Ask for the source comp, or rebuild the missing moves here with presets and keys. The timeline won't invent tracks the JSON didn't provide as shapes.

## The edge

Import only promises a basic shape subset. A shape-layer Lottie can land on the timeline and be edited as objects and keys, but the rest of the Bodymovin format isn't rebuilt into a complete comp. The `.oma` you save afterward is as complete as the subset that arrived, plus whatever you add.

Still exports don't follow the playhead. PNG, JPEG and static SVG stay at the rest pose, and the imported clip only leaves again as animated SVG or Lottie.
