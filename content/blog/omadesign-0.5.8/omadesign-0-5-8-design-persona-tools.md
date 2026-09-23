---
id: T012
title: Design persona tools
slug: omadesign-0-5-8-design-persona-tools
excerpt: "Design is the mark, the poster, the layout. The first keys are Move V, Pen P, Rectangle R, and Type T, in the same .oma you will paint and animate."
tags: [omadesign, 0.5.8, design]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-design-persona-tools/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-design-persona-tools/og.png
---

## The habit

Illustrator's left toolbar is a column you can hide and relearn after every reinstall. The keys underneath it are the part your hand kept. `V` selects. `P` draws a path. Illustrator's rectangle key is `M`. The manual here is explicit: Rectangle is `R`. `T` is type in all of them. Affinity Designer uses the same cluster, with the Move tool as the way back to a finished pen path.

You know the bounce those keys sit inside. Draw in Illustrator. Jump to Photoshop to try a texture. Jump back because the type was still live over there. The keys are familiar. The file boundary is not. Every trip risks an outline, a rasterized headline, a missing font dialog.

The first minute in Design should be those four keys and nothing else asking for attention. Move, pen, rectangle, type. A mark. A poster. A layout that is still vectors. The rest of the well can wait until the thing exists.

## The constraint

One binary, so Design is not an Illustrator process beside a Photoshop process. One `.oma`, so the rectangle and the paragraph are objects in the file you will still have open when you switch to Pixel or Motion. One layer stack. One undo step per change. No Creative Cloud session between `T` and the glyph.

The persona is a filter on the keyboard. A tool key switches tools only when that tool belongs to the persona you are in. Design's first row is Move, Pen, Rectangle, and Type. Brush, eraser, clone, and wand belong to Pixel. Frame's key belongs to Layout. Crop belongs to Photo. If `B` did something destructive in a vector poster "because the key is global," the persona split would be a costume. The shortcut table refuses that. The key returns without a tool change when the tool is not in this persona.

Live objects are the other half. Type stays type under Move and under free transform. A rectangle keeps its parameters, including the corner radius you set with the corner dots, until you actually edit it as a path. The first tools have to support that. A Design persona that expanded everything on first click would be a different app. Group is `Ctrl+G`. Ungroup is `Ctrl+Shift+G`. Compound is `Ctrl+8`. Those are commands, not the first tools. They stay available. They are not what `V`, `P`, `R`, and `T` mean.

Chrome follows the desktop. The tool you are in shows up in the Shortcut HUD at the bottom, upper row for the tool, lower row for letter keys. You do not have to read a manual to see that `P` is the pen once you have pressed it. `F1` is the full list when you want it.

## What landed

Design is the default persona for a vector document and for the 52 templates. The manual's line for it: you are making a mark, a poster, or a layout. The first tools are Move `V`, Pen `P`, Rectangle `R`, and Type `T`. That is the 0.5.8 behavior because that is the manual's behavior in this release. The welcome polish in 0.5.8 did not rename these keys.

**Move** `V`. Click to select. Drag to move. Eight handles scale. The handle above the box rotates. Shift-click adds or removes an object. Shift-drag a selection box to add. Dragging a selected object moves the whole selection. Shift constrains that move. Alt-drag clones. Corner dots round a rectangle.

**Pen** `P`. Click a corner. Click-drag a smooth point. A twitch under 3 pixels stays a corner. Shift constrains to 45 degrees. Alt-drag breaks handle symmetry. The cubic draws as you go. Enter or a double-click finishes an open path. Esc drops the last point, then cancels. Click the first point to close. Click an open endpoint to continue it, or to join it to the path you are drawing.

**Rectangle** `R`. Drag. Shift constrains. Corner radius lives in Transform, and on the corner dots while you are in Move. Ellipse is `O`, polygon `Y`, star `S`, line `L`, when you need them. They are the same drag-and-constrain family. They are not the first four.

**Type** `T`. Click to place. Type on the canvas. The first keystroke replaces the "Type" placeholder. Enter is a new line. Esc or a click away finishes. Double-click existing type to edit. Character studio: font, size, tracking, leading, OpenType for kerning, ligatures, tabular figures, and small caps.

Around them, still in Design: Node `A`, Pencil `N`, Gradient `G`, Eyedropper `I`, Artboard `Shift+O`, Zoom `Z`, Hand `H` or Space. Free transform is `Ctrl+T`. The first four are the priority.

## In the hand

Open a blank vector document or one of the 52. Design is already the persona.

```text
V
```

You are in Move. If something is selected, click empty canvas to let go, or press the key and then click the object you want.

```text
R
```

Drag. Hold Shift if the poster wants a square. Let go. The rectangle is a rectangle. Drag a corner dot if it needs a radius. The object stays a rectangle with a radius, not a pile of paths.

```text
P
```

Click, click, click for a polygon of corners. Click the first point to close. Or click-drag to pull handles, then Enter to leave the path open. Shift while you place a point locks 45 degrees. Esc once removes the last point. Esc again cancels the path in progress.

```text
T
```

Click the page. Type the headline. The placeholder word disappears on the first character. Enter for a second line. Click away. Double-click the text later when the wording changes. The font list includes what the machine has. Project fonts from the brand library show up in that picker when the document is attached to a project.

```text
V
```

Move the headline. Shift constrains the drag to horizontal, vertical, or 45 degrees. Alt-drag clones it. Eight handles scale the frame of the object. The handle above the box rotates it. `Ctrl+Z` undoes one of those steps. `Ctrl+Shift+Z` redoes.

Look at the bottom of the window. The Shortcut HUD's upper row follows the tool you just chose. Hold Shift and the row shows the constrained gesture. Release and the normal hints return. `Ctrl+/` hides the strip if you want the canvas edge to yourself.

Save.

```text
Ctrl+S
```

The file is an `.oma`. The type is still type inside it.

## The edge

These four keys do not open another application, and they do not export a handoff. Pixel is a persona switch away, on a pixel layer you add when the document is still vector-only. `B` does not flatten the poster from inside Design. The key does not switch to the brush while this persona is active.

Move's corner dots do not run **Object → Break path**. A rectangle with a radius stays a parameterized rectangle. The first time you edit that shape with the node tool, it converts to a path. That conversion is the node tool's boundary, not `R` and not `V`.

`T` does not outline the glyphs. Live text stays editable. **Object → Convert to path** is an explicit command, for when you want letter outlines and holes and are willing to give up the text object. Undo restores the text. Free transform, `Ctrl+T`, also keeps the text live. You do not fall into an expand by scaling with Move.

Group, ungroup, and compound are `Ctrl+G`, `Ctrl+Shift+G`, and `Ctrl+8`. They are not hidden under `V`. Use them when you mean them.

Press `V`, then `P`, then `R`, then `T`. You are in Design, in the `.oma`, with the objects still editable.
