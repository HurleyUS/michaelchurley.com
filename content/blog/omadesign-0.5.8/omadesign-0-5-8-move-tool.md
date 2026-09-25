---
id: T021
title: Move tool
slug: omadesign-0-5-8-move-tool
excerpt: "Move is V. Click selects, drag moves, eight handles scale, the top handle rotates. Shift adds or constrains. Alt-drag clones. Corner dots round a rectangle."
publishedAt: 2026-08-29T16:26:47Z
tags: [omadesign, 0.0.0.0alpha-rc, vectors]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-move-tool/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-move-tool/og.png
---

## The habit

`V` is the key you go back to when you want a steady hand. In Illustrator, Selection is `V` and Direct Selection is `A`, and you stay on `V` until a point is wrong. Drag moves, Shift constrains, and Alt-drag or Option-drag clones. The bounding box has eight handles. The rotate cursor appears just outside a handle, or on it, depending on how close you are and which version you learned on. Corner widgets round a rectangle without converting it to a path, until you expand it on purpose.

Affinity Designer's Move tool works the same way. You scale from the handles, hold Shift for aspect ratio or a constrained move, and use a modifier to clone because it's faster than a Duplicate menu. Photoshop's Move tool is the pixel version: drag the layer, nudge with arrows, Alt to duplicate. When you bring those habits to a vector app, you want the object to move, not a layer thumbnail.

Multi-select is part of the habit. Shift-click adds, and Shift-click again removes. A marquee adds when Shift is down and replaces the selection when it isn't. Groups move together until you double-click to go inside. If any of that is hidden behind a preferences checkbox, the tool isn't finished.

## The constraint

One `.oma`, one undo step per edit, and objects that stay live. Move has to respect all three. Scaling type with the bounding box can't outline the glyphs. Rounding a corner can't run **Object > Break path** behind your back. A clone is a new object in the same layer stack, one undo away from the single original, with no "duplicate file" dialog.

In the Design persona, `V` is the primary selection tool, and the shortcut table maps it before the persona check. If a tool isn't in the persona you're in, its key doesn't switch to it. In Design, `V` is home base. As of 0.5.0, Layout also has frames you move. The manual puts the full Move description in the Design chapter: click, drag, eight handles, the handle above the box, Shift-click, Shift-drag, Alt-drag and corner dots.

Snapping and Shift have to work the same way here as in the rest of the app. Snapping catches object and artboard edges and centers, guides, the grid and equal spacing. `Ctrl+Shift+;` toggles it. Hold Ctrl during a drag to flip that setting for the length of the drag, and release to go back. Shift constrains the move to horizontal, vertical or 45 degrees, and constrains the pen and brush the same way. Alt-drag clones, and Alt with Shift makes a constrained copy. If Move had its own private constraint rules, the HUD would be wrong when it shows those gestures.

Selection and layer reordering share shortcuts on purpose, with a clear boundary. `Ctrl+[` and `Ctrl+]` reorder when a layer row is selected. Click an object on the canvas and those shortcuts go back to object stacking. Move's click is what switches them back. A reorder is one undo and a move is one undo, as separate steps.

Free transform, `Ctrl+T`, switches the current selection into Move with the scale and rotation handles ready. Move does the work and Free transform is a shortcut into it. Parameters stay editable either way.

## What landed

**Move** is `V`. This is how the manual describes it.

Click an object to select it and drag to move it. The bounding box has eight handles that scale, and the handle above the box rotates, so there's no separate rotate mode to find in a menu.

Shift-click adds an object to the selection, or removes it if it was already selected. Shift-drag draws a selection box that adds objects. Dragging an object that's already selected moves the whole selection, and holding Shift during that move constrains it.

Alt-drag clones. The clone is a real object, and `Ctrl+Z` removes it and leaves the original where it was. `Super+D` duplicates in place when you want a copy with no offset. Alt-drag gives you a copy that follows the mouse.

Corner dots round a rectangle, and the radius stays a parameter. Transform also holds the corner radius, plus polygon sides and star inner radius when those are the shapes you selected. Ellipse is `O`, polygon `Y`, star `S` and line `L`. You draw each with its own key and adjust it with Move and the inspector.

Groups select, move, duplicate and align as units. Double-click an item to edit it alone until you select something else or deselect. When the group moves, its children move with it, which matches the layer rule.

`Ctrl+T` brings up the same handles from the keyboard or the Object menu. If you pressed `V` and selected the object, you're already there, with the same handles, the same live text and the same rectangle parameters.

## In the hand

Open a Design document.

```text
R
```

Drag a rectangle. Press `V` if drawing didn't leave you in Move, and click the rectangle. Eight handles appear. Drag a corner handle and the shape scales. Drag the handle above the box and it rotates. `Ctrl+Z` undoes one of those edits.

Drag a corner dot toward the inside of the rectangle and the corners round. The object is still a rectangle, not a path. Check Transform if you want the radius as a number.

Hold Shift and drag the object sideways. It moves horizontally, vertically or at 45 degrees, whichever is closest to your drag. Release, then hold Alt and drag, and a second rectangle appears. Click the original and Shift-click the clone so both are selected, then drag, and both move. Shift-click the clone again to take it out of the selection.

Hold Shift and drag a box around several objects to add them. Release, then drag one of the selected objects, and the whole set moves.

```text
Ctrl+T
```

You're in Move with the handles ready, which is where `V` had already put you. Scale some type you placed with `T`, then double-click it. The characters are still characters, because scaling didn't run **Convert to path**.

If the equal-spacing lines get in your way, press `Ctrl+Shift+;` to toggle snapping, or hold Ctrl for one drag. The HUD shows the modifier while it's held.

Double-click into a group when one child has to move on its own. Click outside or select another object to make the group act as a unit again. `Ctrl+G` groups the selection and `Ctrl+Shift+G` ungroups. You don't need either to use Move, but they change what counts as "the object."

Save with `Ctrl+S` and reopen. The radius, the rotation and the clone are all still in the `.oma`.

## The edge

Corner dots round a rectangle without converting it to a path. The Node tool converts it the first time you edit the shape as points, and **Object > Break path** is the explicit command. Move doesn't convert, so the radius stays a value you can change later.

Move doesn't outline live text. Scaling and rotating leave the text editable. **Object > Convert to path** is how you ask for outlines, and undo restores the text. Free transform follows the same rule. Reshape, under **Object > Reshape**, is the separate tool that converts a live shape or live text when you move the first cage handle.

A click on the canvas switches `Ctrl+[` and `Ctrl+]` back to object stacking. Those shortcuts reorder layers while a layer row is the target, so click the row when you want to reorder.

Selecting a path doesn't create an undo step. Moving, scaling, rotating, cloning and rounding do, one step each.
