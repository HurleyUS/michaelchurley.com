---
id: T054
title: Frames nest
slug: omadesign-0-5-8-frames-nest
excerpt: Press F and drag a frame. Draw another inside it and it nests. Wrap a selection, or drop an image fill, in the same .oma as the drawing.
publishedAt: 2026-09-15T23:34:15Z
tags: [omadesign, 0.5.0, layout]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-frames-nest/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-frames-nest/og.png
---

## The habit

A screen is a box that holds boxes. In Figma you press F, you drag a frame, you drag another frame inside it, and the inner one is a child. The header, the list, the card: each is a frame, and the file knows the parent. Illustrator's artboard is the cousin for print. It bounds a page. It does not parent the logo to the sidebar. Affinity's artboard is the same kind of bound. When the job is a phone screen sitting next to the icon you already drew, you want the parenting, and you want it in the file that already holds the icon.

The other habit is the placeholder. A gray dashed rectangle with a name, waiting for a photograph. You drop the picture into that rectangle. The frame clips or fits the picture. The picture is in the document, not linked out to a folder the developer will not have. Undo puts the empty placeholder back if the drop was the wrong file.

You also grab a bunch of existing shapes and say "make this a frame." The selection gets a parent. The shapes do not move to a new file. The poster and the mockup share a tab.

## The constraint

Layout is a persona in the same binary, on the same `.oma`. Design draws the mark. Layout draws the screen. Pixel can sit on a layer in that stack. There is no export step whose job is to "send the illustration to the mockup tool," and there is no second document format for frames. Frames, their children, and the drawing are one layer tree.

That forces nesting to be geometry. A frame drawn inside a frame becomes a child. Object → Wrap selection in frame parents what you already selected. Drag a layer row onto the center of a frame in the Layers studio and it nests there too. The parent is an id in the file, saved with the project. Undo removes the wrap in one step, the same way undo removes any other structure change.

A placed image dropped on a frame becomes an image fill. Position, rotation, opacity, blend mode, and effects come along. An existing layer mask is baked into the image alpha, because the fill stores pixels and the mask was a separate buffer. Undo restores the original image layer and the editable mask together.

Image fills are embedded. The status line says "Image placed · embedded in this document." The inspector accepts PNG, JPEG, WebP, GIF, and TIFF. The `.oma` carries the bytes.

A frame's opacity and blend apply to everything inside it. An object's own opacity applies once to its combined fill, image, and stroke. Those values survive the save.

The file that stores this is `.oma` format 5 or newer. Format 5 is what added frames, auto-layout, constraints, and the optional cloud metadata. An older build of the app cannot open that file. You keep the `.oma`. You do not keep a parallel "layout package."

## What landed

Switch to the Layout persona. The first tools are Frame `F`, Rectangle `R`, and Type `T`. Press `F` and drag. You have a frame. Press `F` again and drag inside the first rectangle. The new frame nests. The parent clips only if you turn Clip content on. Nesting itself is the parent link. Clip is a checkbox on the frame, off until you want the children masked to the bounds.

With nothing selected, the inspector says "Start with a frame" and reminds you: F to draw, T for text, Shift+A to arrange. Phone at 390 × 844, Tablet at 768 × 1024, and Desktop at 1440 × 900 insert a named blank frame. Open Fieldwork starter builds the responsive prototype at 1280 × 900, 96 DPI, as its own unsaved document. Those size buttons are blank frames. Fieldwork is a template.

Object → Wrap selection in frame puts a frame around the current selection. The menu item is enabled when the selection can be wrapped. The children keep their layer order. You can drag objects between sidebar rows, and onto the center of a group or a Layout frame, to reparent them. Hold Shift while you click object rows to select several before the wrap.

Image placeholders live in the inspector, under Image fill. Choose image… opens the file dialog. Replace image… is the same control once a fill exists. The fit row reads Fill, Fit, and Stretch. Fill covers the frame. Fit keeps the whole picture inside it. Stretch maps the picture to the bounds. Focus lets you slide the crop. A dashed placeholder is the stand-in until that fill arrives. When the image lands, the placeholder flag clears. If the document changed while the file was decoding, the load cancels and the status line says so. The decode runs in the background. The frame you had stays a frame.

Dragging a placed image layer onto a Layout frame converts it to an image fill and keeps position, rotation, opacity, blend, and effects. The mask bake described above is part of that drop. `Ctrl+Z` restores the image layer and the editable mask together.

A frame's name, size, and children save in the `.oma`. `Ctrl+N` opens another tab. The mockup and the illustration can share a tab, or live in two `.oma` files. The frame tool does not force the split.

## In the hand

Open the icon file, or start from the welcome screen. + Layout opens starters. The Layout file icon opens a blank size. Either way the document can hold frames.

Press `F`. Drag the phone bounds. Press `F` again and drag a header inside it. Press `T` and click in the header. Type the title. Esc or a click away finishes the text. Press `R` if you need a plain rectangle that is not a frame. Frames parent. Rectangles are shapes. Use the frame when the thing has to hold children.

Select the logo on the design layer. Drag its layer row onto the center of the screen frame, or select it and choose Object → Wrap selection in frame if the logo itself should become the contents of a new frame. Save with `Ctrl+S`.

For a photograph, select the frame that should show it. In the inspector, Image fill, Choose image…. Pick the file. The spinner reads "Loading image…" while it decodes. Then the fit row is live. Pick Fit if the whole photo has to be visible. Pick Fill if the frame should crop it. `Ctrl+Z` removes that fill edit.

```
F          drag a frame
F again    drag inside to nest
Object → Wrap selection in frame
```

Resize the outer frame by its handles when the screen size changes. Children with pins follow that resize. That pin behavior is the constraint system. Nesting is what gives them a parent to pin to. Clip content, if you turn it on, hides anything that draws outside the frame. Leave it off while you are still sliding children into place, so you can see what missed the box.

## The edge

A frame refuses to become its own file. The nest is a parent link in this `.oma`. Export of one frame, later, writes a separate PNG, SVG, or HTML snapshot of that frame and its descendants. The project you keep editing still has the whole tree.

The image drop has its own refusal. A layer mask on a placed image does not stay an editable mask after that layer becomes an image fill. The alpha is baked. Undo is the restore, one step, original layer and original mask together. If you still need to paint the mask, undo the drop, paint, and choose the fill when the mask is done.
