---
id: T021
title: Move tool
slug: omadesign-0-5-8-move-tool
excerpt: "Move is V. Click selects, drag moves, eight handles scale, the top handle rotates. Shift adds or constrains. Alt-drag clones. Corner dots round a rectangle."
publishedAt: 2026-08-29T16:26:47Z
tags: [omadesign, 0.5.8, vectors]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-move-tool/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-move-tool/og.png
---

## The habit

`V` is the way back to a calm hand. In Illustrator, Selection is `V`, Direct Selection is `A`, and you live on `V` until a point is wrong. Drag moves. Shift constrains. Alt-drag or Option-drag clones. The bounding box has eight handles. The rotate cursor lives just outside, or on a handle, depending on how close you are and which version trained you. Corner widgets round a rectangle without converting it to a path, until you expand it on purpose.

Affinity Designer's Move tool is the same grip. Scale from the handles. Hold Shift for aspect or for a constrained move. The clone is a modifier you trust more than a menu called Duplicate. Photoshop's Move tool is the cousin on pixels: drag the layer, arrows nudge, Alt duplicates. You bring that hand to a vector app and you want the object, not the layer thumbnail, to be what moves.

The habit includes multi-select. Shift-click adds. Shift-click again removes. A marquee adds when Shift is down and replaces when it is not. Groups move together until you double-click to go inside. If any of those are "somewhere in a preferences checkbox," the tool is not finished.

## The constraint

One `.oma`, one undo step per edit, objects that stay live. Move is the tool that has to honor that. Scaling type with the bounding box cannot outline the glyphs. Rounding a corner cannot run **Object → Break path** under you. A clone is a new object in the same layer stack, one undo back to the single original, not a "duplicate file" dialog.

The persona is Design for this key as the primary select tool, and `V` is also the select key the shortcut table maps before the persona check. If the tool is not in the persona you are in, the key does not switch. In Design, `V` is home. Layout still has frames you move. The manual hangs the full Move paragraph on the Design chapter: click, drag, eight handles, the handle above the box, Shift-click, Shift-drag, Alt-drag, corner dots.

Snapping and Shift have to cooperate with the rest of the studio. Snapping catches object and artboard edges and centers, guides, the grid, and equal spacing. `Ctrl+Shift+;` toggles it. Hold Ctrl during the drag to flip that choice for the length of the drag, then release to return. Shift constrains the move to horizontal, vertical, or 45 degrees, and it constrains pen and brush the same way. Alt-drag clones. Alt with Shift is a constrained copy. Move cannot invent a private constraint system or the HUD would be lying when it shows those gestures.

Selection and layer reorder share chords on purpose, with a boundary. `Ctrl+[` and `Ctrl+]` reorder when a layer row is selected. Click an object on the canvas and those chords return to object stacking. Move's click is that return. The tool that selects on the canvas is the tool that hands the bracket keys back to stacking. One undo per reorder stays true. One undo per move stays true. They are different steps.

Free transform, `Ctrl+T`, puts the current selection into Move with the scale and rotation handles ready. Move is the body. Free transform is the door. Parameters stay editable either way.

## What landed

**Move** is `V`. This is the manual's behavior in 0.5.8.

Click an object to select it. Drag to move it. The bounding box has eight handles and they scale. The handle above the box rotates. You do not hunt a rotate mode in a menu.

Shift-click adds an object to the selection or removes it if it was already in. Shift-drag draws a selection box that adds objects. Dragging an already selected object moves the whole selection. Shift during that move constrains it.

Alt-drag clones. The clone is a real object. `Ctrl+Z` removes the clone and leaves the original where it was. `Super+D` duplicates in place when you want a copy and no offset. Alt-drag is the copy that follows the mouse.

Corner dots round a rectangle. The radius is a parameter. Transform also holds corner radius, along with polygon sides and star inner radius when those shapes are what you selected. Ellipse is `O`, polygon `Y`, star `S`, line `L`. You draw them with their own keys. You adjust them with Move and the inspector.

Groups select, move, duplicate, and align as units. Double-click an item to edit it alone until you select something else or deselect. The group's children come along when the group moves. That matches the layer rule: groups move with their children.

`Ctrl+T` lands in this same handle set from the keyboard or from the Object menu. Press `V` and select the object and you are already there. Same handles. Same live text. Same rectangle parameters.

## In the hand

Open a Design document.

```text
R
```

Drag a rectangle. Press `V` if the rectangle key did not leave you in Move. Click the rectangle. Eight handles appear. Drag a corner handle. The shape scales. Drag the handle above the box. It rotates. `Ctrl+Z` steps back one of those edits.

Drag a corner dot toward the inside of the rectangle. The corners round. The object is still a rectangle. Look at Transform if you want the radius as a number. You have not created a path.

Hold Shift and drag the object sideways. The motion stays horizontal, vertical, or at 45 degrees, whichever your drag is closest to. Release. Hold Alt and drag. A second rectangle appears. Release Alt and the drag. Click the original, then Shift-click the clone, so both are selected. Drag. Both move. Shift-click the clone again. It leaves the selection.

Hold Shift and drag a box around several objects to add them. Release. Drag one selected object. The set moves.

```text
Ctrl+T
```

You are in Move with the handles ready, which is where `V` already put you. Scale the type you placed with `T`. Double-click it and the characters are still characters. The scale did not run **Convert to path**.

`Ctrl+Shift+;` toggles snapping if the equal-spacing lines are in your way. Or hold Ctrl for one drag and let go. The HUD will show that modifier while it is down, at the same strip height.

Double-click into a group when one child has to move alone. Click outside, or select another object, when you want the group to behave as a unit again. `Ctrl+G` groups the current selection. `Ctrl+Shift+G` ungroups. Neither chord is required to use Move. They change what "the object" is.

Save with `Ctrl+S`. Reopen. The radius, the rotation, and the clone are still in the `.oma`.

## The edge

Corner dots round a rectangle. They do not convert it to a path. Node tool edits do that conversion the first time you edit the shape as points. **Object → Break path** is the explicit command. Move refuses that conversion so a radius stays a radius you can change again tomorrow.

Move does not outline live text. Scale and rotate leave the text object editable. **Object → Convert to path** is how you ask for outlines, and undo restores the text. Free transform shares this refusal. Reshape is the mode that converts a live shape or live text when you move the first cage handle. That is a different tool, under **Object → Reshape**.

A click on the canvas returns `Ctrl+[` and `Ctrl+]` to object stacking. Those chords reorder layers while a layer row is the selection target. Click the layer row when you want reorder.

Selecting a path does not by itself create an undo step. Moving, scaling, rotating, cloning, and rounding do. Undo matches those edits, one step each.

Press `V`. Drag. Hold Shift to constrain. Hold Alt and drag when you want the clone.
