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

A screen is a box that holds boxes. In Figma you press F, drag a frame, drag another frame inside it, and the inner one becomes a child. The header, the list and the card are each frames, and the file knows each one's parent. Illustrator's artboard is the print equivalent. It bounds a page, but it doesn't make the logo a child of the sidebar. Affinity's artboard works the same way. When the job is a phone screen next to an icon you already drew, you want that parent link, and you want it in the file that already holds the icon.

The second habit is the placeholder: a gray dashed rectangle with a name, waiting for a photograph. You drop the picture in, and the frame clips or fits it. The picture is stored in the document instead of linked to a folder the developer won't have. If you dropped the wrong file, undo puts the empty placeholder back.

You also select a group of existing shapes and make them a frame. The selection gets a parent and the shapes stay in the same file, so the poster and the mockup share a tab.

## The constraint

Layout is a persona in the same binary, working on the same `.oma`. Design draws the mark, Layout draws the screen, and Pixel can sit on a layer in that stack. There's no export step to send the illustration to a mockup tool, and there's no second document format for frames. Frames, their children and the drawing are one layer tree.

That means nesting has to follow geometry. A frame drawn inside a frame becomes its child. Object > Wrap selection in frame gives the current selection a parent. Dragging a layer row onto the center of a frame in the Layers studio nests it there too. The parent is stored as an id in the file and saved with the project. Undo removes a wrap in one step, like any other structure change.

A placed image dropped on a frame becomes an image fill. Its position, rotation, opacity, blend mode and effects come with it. An existing layer mask gets baked into the image alpha, because the fill stores pixels and the mask was a separate buffer. Undo restores the original image layer and the editable mask together.

Image fills are embedded, and the status line says "Image placed · embedded in this document." The inspector accepts PNG, JPEG, WebP, GIF and TIFF, and the `.oma` carries the bytes.

A frame's opacity and blend apply to everything inside it. An object's own opacity applies once to its combined fill, image and stroke. Both values are saved.

The file that stores all this is `.oma` format 5 or newer. Format 5 added frames, auto-layout, constraints and the optional cloud metadata. Older builds can't open it. You keep one `.oma` and no separate layout package.

## What landed

Switch to the Layout persona. The first tools are Frame `F`, Rectangle `R` and Type `T`. Press `F` and drag to make a frame. Press `F` again and drag inside the first one, and the new frame nests. Nesting is only the parent link. The parent clips its children only if you turn on Clip content, a checkbox on the frame that stays off until you want children masked to the bounds.

As of 0.5.4, with nothing selected, the inspector says "Start with a frame" and reminds you that F draws a frame, T adds text and Shift+A arranges. Phone at 390 × 844, Tablet at 768 × 1024 and Desktop at 1440 × 900 insert a named blank frame. Open Fieldwork starter builds a responsive prototype at 1280 × 900, 96 DPI, as its own unsaved document. The size buttons give you blank frames, and Fieldwork is a template.

Object > Wrap selection in frame puts a frame around the current selection. The menu item is enabled when the selection can be wrapped, and the children keep their layer order. You can drag objects between sidebar rows, or onto the center of a group or Layout frame, to change their parent. Shift-click object rows to select several before wrapping.

Image placeholders are in the inspector under Image fill. Choose image… opens the file dialog, and the same control reads Replace image… once a fill exists. The fit row has Fill, Fit and Stretch. Fill covers the frame, Fit keeps the whole picture inside it, and Stretch maps the picture to the bounds. Focus lets you slide the crop. A dashed placeholder stands in until the fill arrives, and the placeholder flag clears when the image lands. The decode runs in the background. If the document changes while the file is decoding, the load cancels, the status line says so, and the frame stays as it was.

Dragging a placed image layer onto a Layout frame converts it to an image fill and keeps position, rotation, opacity, blend and effects, with the mask bake described above. `Ctrl+Z` restores the image layer and the editable mask together.

A frame's name, size and children save in the `.oma`. `Ctrl+N` opens another tab. The mockup and the illustration can share a tab or live in two `.oma` files. The Frame tool doesn't force either.

## In the hand

Open the icon file, or start from the welcome screen. + Layout opens starters, and the Layout file icon opens a blank size. Either way the document can hold frames.

Press `F` and drag the phone bounds. Press `F` again and drag a header inside it. Press `T`, click in the header and type the title. Press Esc or click away to finish. Press `R` if you want a plain rectangle instead of a frame. Frames can hold children and rectangles are only shapes, so use a frame when something has to contain other things.

Select the logo on the design layer. Drag its layer row onto the center of the screen frame. If the logo should become the contents of a new frame, select it and choose Object > Wrap selection in frame instead. Save with `Ctrl+S`.

For a photograph, select the frame that should show it and go to Image fill > Choose image… in the inspector. Pick the file. The spinner reads "Loading image…" while it decodes, and then the fit row becomes active. Pick Fit if the whole photo has to be visible, or Fill if the frame should crop it. `Ctrl+Z` removes the fill.

```
F          drag a frame
F again    drag inside to nest
Object → Wrap selection in frame
```

When the screen size changes, resize the outer frame by its handles. Children with pins follow the resize. The pins are the constraint system, and nesting gives them a parent to pin to. Clip content hides anything drawn outside the frame. Leave it off while you're still placing children, so you can see what's outside the box.

## The edge

A frame won't become its own file. The nest is a parent link inside this `.oma`. Exporting one frame later writes a separate PNG, SVG or HTML snapshot of that frame and its children, and the project you keep editing still has the whole tree.

The image drop has one limit. A layer mask on a placed image stops being editable once that layer becomes an image fill, because the alpha gets baked. One undo restores the original layer and mask together. If you still need to paint the mask, undo the drop, paint, and add the fill when the mask is done.
