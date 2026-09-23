---
id: T013
title: Layout persona tools
slug: omadesign-0-5-8-layout-persona-tools
excerpt: "Layout builds screens in the same .oma as the drawing. Frame is F, rectangle is R, type is T. Export the selected frame as PNG, SVG, or HTML."
tags: [omadesign, 0.5.8, layout]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-layout-persona-tools/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-layout-persona-tools/og.png
---

## The habit

A UI mockup usually means a second app. Sketch, Figma, Adobe XD, or a page in Illustrator that you promised would stay "the source" and then redrew in the screen tool. Affinity's answer is Publisher or Designer with artboards, plus StudioLink when Photo has to retouch a picture on the same spread. The hand knows the drill. Draw a frame. Put a rectangle in it. Put type in it. Pin the children so a resize of the frame does not leave the button behind. Export a PNG for a deck, or SVG for a developer who asked nicely.

The keys are simple when the file is the same file. Frame. Rectangle. Type. Everything else is a property of the frame you just drew.

## The constraint

One `.oma`, one layer stack, one binary. A screen, a landing page, and a dashboard have to be frames in the document that already holds the mark. Otherwise Layout is a second product with a handoff, and the persona model is a label. There is no XD file to round-trip. There is no Figma URL required to see the button.

The first tools stay few. Frame `F`, Rectangle `R`, Type `T`. Move, pen, and the rest of Design are still in the studio, on the Design persona, over the same objects. Layout's keyboard leads with the frame so a mockup starts as structure. `R` and `T` match Design on purpose. You should not learn a new rectangle key because you are drawing a screen.

Frames have to nest, stack, and pin, or they are only rectangles with a different name. A child frame drawn inside a parent nests. **Stack children** packs the children in layer order, vertical or horizontal, with gap, padding, and stretch. Constraints pin a child to min, max, both edges, center, or scale when the parent resizes. Those are inspector states on the frame, not a plugin and not a second document.

Export of a frame is PNG, SVG, or HTML for the frame you selected. It is an export. It does not replace the `.oma`. Cloud review is opt-in and separate: File → Sign in, then a push if you want a versioned design and a flat snapshot. You can comment on the canvas without that account. Write a note, pin it, resolve it. The inspector shows open counts on the frame.

Undo stays one step. Nesting a frame, toggling stack, and moving a child are ordinary edits. Templates open unsaved, beside any tab you already had.

## What landed

Layout is the persona for a screen, a landing, or a dashboard. First tools: Frame `F`, Rectangle `R`, Type `T`. This is the manual's table, as it stands in 0.5.8. The release did not invent Layout, and it did not move these keys.

**Frame** `F`. Drag a frame. Draw another frame inside it and it nests. **Object → Wrap selection in frame** puts the current selection in a frame when you drew the contents first. Image placeholders live in the inspector.

**Rectangle** `R` and **Type** `T` behave as they do in Design. Drag a rectangle. Shift constrains. Click for type, replace the "Type" placeholder on the first keystroke, Enter for a new line, Esc or click away to finish. Double-click to edit again. Character studio is the same studio: font, size, tracking, leading, OpenType.

**Auto-layout.** Select a frame and turn on **Stack children**. Choose vertical or horizontal. Set gap, padding, and stretch. Children pack in layer order. Reorder a layer and the stack follows. `Ctrl+[` and `Ctrl+]` are the reorder chords when a layer row is selected. Shift with those chords sends the row to the back or front of its group.

**Constraints.** A child of a frame can pin to min, max, both edges, center, or scale. Resize the parent and the pin is the behavior you set, not a fresh manual layout.

**Export.** **File → Export frame PNG / SVG / HTML** writes the selected frame. The `.oma` remains the editable file.

**Templates.** **+ Layout** on the welcome screen opens Fieldwork (a responsive prototype), a mobile screen, a landing hero, a dashboard, and a card stack. The same starters live under **File → Template library → Layout starters**. The Layout file icon on welcome is the blank size chooser.

**Comments.** Write a note, pin it on the canvas, resolve it. Open counts show on the frame in the inspector.

Photo and Layout can open from the start screen without creating an artboard. A saved artboard-less Layout document keeps that state when you reopen it.

## In the hand

```sh
omadesign
```

Click **+ Layout**. The sheet stays at the width it opened. Choose a mobile screen, a landing hero, a dashboard, a card stack, or Fieldwork. **Use this template**, or double-click. The document is unsaved. Layout is the persona.

```text
F
```

Drag a frame inside the screen. Drag a second frame inside the first. It nests. In the inspector, turn on **Stack children**. Set a gap and padding. Drag the parent's edge. The children follow the stack.

```text
R
```

Drag a rectangle inside the frame for a button shape. Shift if it should be square.

```text
T
```

Click and type the button label. Click away. Select the type object and pin it with constraints if it should stay centered when the button frame changes width. The pin options are min, max, both edges, center, or scale.

Select the screen frame. **File → Export frame PNG**, or SVG, or HTML, for a snapshot someone can open without the studio. The `.oma` tab is still open. `Ctrl+S` writes the real file.

Drop a comment on the frame if a note belongs on the canvas. Resolve it when the note is done. The inspector's count is the list you did not keep in a chat window.

Need the mark from the poster in this same file? It is already on the layer stack if you drew it here. If it lives in another `.oma`, open that file in a tab with `Ctrl+O` and copy across. Paste lands objects at their original positions. You are not exporting a PDF to move a logo between two tabs of the same app.

Switch to Design, press `P`, and draw a mark beside the frames. Switch back to Layout. The mark is in the document. `F` still makes frames. The persona changed the first keys, not the file.

## The edge

Layout does not require a cloud account to draw, stack, constrain, comment, or export a frame. **File → Sign in** opens a browser approval when you want it. Push project and review export upload a versioned design and a flat snapshot. Cloud projects pull a shared design into a new document. Review annotations load cloud feedback. Publishing and competition entry are separate owner actions. None of those run because you pressed `F`.

Frame export does not convert the `.oma` into HTML as the source of truth. PNG, SVG, and HTML are outputs of the selected frame. Reopen the work from the `.oma`.

**Stack children** packs in layer order. It does not invent a new order behind your back. If the visual order is wrong, reorder the layers, including with `Ctrl+[` and `Ctrl+]`, and the stack follows. Groups move with their children.

Motion is still not an empty welcome action. A Layout frame can be artwork you animate later, in the Motion persona, on this document. The rest pose stays the layout you built. Space plays the clip. The frame tool does not key a timeline by itself.

Press `F`, then `R`, then `T`, in the Layout persona, in the same `.oma` as the drawing.
