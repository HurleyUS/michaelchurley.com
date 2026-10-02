---
id: T024
title: Node tool
slug: omadesign-0-5-8-node-tool
excerpt: "Node is A. Drag points and Bézier handles, Shift-click to add, Alt-click to convert corner and smooth, Alt-drag to break symmetry, Delete to remove points."
publishedAt: 2026-08-29T16:27:47Z
tags: [omadesign, 0.0.0.0alpha-rc, vectors]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-node-tool/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-node-tool/og.png
---

## The habit

`A` is direct selection. In Illustrator you press `A` and the bounding box gives way to anchors and handles. You drag a point or a handle, and Alt pulls one handle without the other. You click a segment to bend it, or use the Anchor Point tool if the version you learned put convert on a different key. Delete removes the selected points. Shift-click adds points to the selection. A marquee selects the points inside it instead of the whole object, which is the reason to leave `V` in the first place.

Affinity's Node tool works the same way, with convert on a click and a modifier to break symmetry. `P` creates the path, and `A` edits it afterward.

You also expect a rectangle to stay a rectangle until you ask for nodes, and the first node edit is that request. After that you want anchors on the shape you see, including when it's rotated. If a handle floats in the unrotated box while the artwork sits at 30 degrees, the tool is showing you the wrong thing. Edits have to land where you're looking.

## The constraint

In one `.oma`, a path is path data, and a rectangle is parameters until a node edit needs path data. The first time you edit a shape with this tool, it converts to a path. That's the cost of dragging a real anchor. Free transform and Move never impose that cost, so `Ctrl+T` and `V` stay safe. Node converts once, and from then on you're working with anchors. If you undo that first edit, undo restores the parameter shape in one step, radius field and all.

On rotated paths, the visible points and Bézier handles stay aligned with the artwork. You edit at the displayed location, and saved rotations stay intact. Selecting a path doesn't create an undo step, because a click isn't an edit and a drag is. That way `Ctrl+Z` undoes the change you made, not the moment you looked at the object.

Esc doesn't cancel Node. In the Pen, Esc drops the last point and then cancels a path still in progress, but Node edits a path that already exists. Delete removes selected points and leaves the object while those points are selected.

0.5.8 added radius handles for corners that still have a radius. Alt-drag a corner-radius handle to change every corner, or Shift-select corners and drag one selected corner's radius handle to change that set. Compound paths from repeated booleans keep their contours and holes, and their nodes stay editable.

**Object > Break path** converts a shape without dragging. It sits next to the first node edit.

## What landed

**Node** is `A`, as described in the manual's Design chapter. The manual puts the Pen's table next to it so the two tools stay distinct:

| Gesture | Pen `P` | Node `A` |
| --- | --- | --- |
| Click | Corner | Select, Shift adds |
| Click-drag | Smooth point | Move selected points |
| Alt-drag | Break handle | Break handle |
| Shift | 45° on placement | 45° on handles |
| Esc | Drop last point, then cancel | Not used |
| Enter or double-click | Finish open path | Not used |
| Box drag | Not used | Select those nodes |
| Drag a segment | Not used | Move the line |
| Click a curve | Not used | Insert |
| Alt-click a point | Not used | Corner or smooth |
| Delete | Not used | Remove selected points |

Shapes convert to a path the first time you edit them, and from then on the anchors you see are the anchors that get saved. Rotated artwork shows those anchors on the rotated geometry, and point, handle and segment edits hit the displayed locations. The file keeps its existing rotation, so you don't have to unrotate, edit and rotate back.

The radius and compound path work in 0.5.8 applies to this tool. Alt-drag a corner-radius handle to set every corner. Shift-select some of the corners, then drag a selected corner's radius handle to update only those. Repeated unions and subtractions keep independent contours and holes. Nodes, handles, insertions, deletions and a broken contour survive save, reopen, undo, redo and SVG export. Double-click with Select or Node to edit inside the compound.

## In the hand

Draw a rectangle and a pen path.

```text
R
```

```text
P
```

Click three corners and close on the first point, or press Enter to leave it open. Press `A`.

```text
A
```

Click one anchor on the pen path to select it, and Shift-click a second one. Drag, and those two points move while the others stay put. You can also drag a box around a cluster to select it.

Drag a handle and the curve follows. Hold Shift while dragging a handle to snap to 45 degrees. Hold Alt and drag a handle to break symmetry, and the other side of the point stays where it was.

Alt-click a smooth point to make it a corner, and Alt-click again to make it smooth. Click the middle of a segment to insert a new point. Drag the body of a segment to move the line between its endpoints.

Select a point you don't want and press Delete. The point goes away and the object stays on the layer.

Click the rectangle with `A` and drag an anchor. That first edit converts it to a path, and the corner-radius field is no longer a live rectangle parameter. Press `Ctrl+Z` if you want the rectangle back. For a shape you want to keep parametric, use Move's corner dots, or the radius handles added in 0.5.8. Alt-drag one corner-radius handle to round every corner together, or Shift-select corners and drag one selected radius handle to round only that set.

Rotate the path with `V` and the top handle, then press `A` again. The anchors sit on the rotated artwork, and dragging the one you see puts the edit there. Save with `Ctrl+S` and reopen, and the rotation and anchors still line up.

## The edge

Esc doesn't cancel Node or undo the last edit. That key belongs to the Pen, where a path is still in progress. In Node, Delete removes the selected points and leaves the object. Alt-click to convert and Alt-drag to break a handle never delete anything.

The first node edit on a rectangle, ellipse, polygon or star converts it to a path, so the side count and other parameters stop being live once you drag an anchor. Undo restores the original shape. If you'll need the parameters later, don't make that edit. Use `V` and Transform, or Free transform, `Ctrl+T`, which also leaves the parameters alone.

Selecting the path doesn't add an undo step. The entry appears when you change geometry.

Alt-drag on a corner-radius handle changes every corner, not just the one you touched. Use a Shift-selected set when only some corners should change. Alt-dragging a Bézier handle to break symmetry is a different gesture on a different handle.
