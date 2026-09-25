---
id: T024
title: Node tool
slug: omadesign-0-5-8-node-tool
excerpt: "Node is A. Drag points and Bézier handles, Shift-click to add, Alt-click to convert corner and smooth, Alt-drag to break symmetry, Delete to remove points."
publishedAt: 2026-08-29T16:27:47Z
tags: [omadesign, 0.5.8, vectors]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-node-tool/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-node-tool/og.png
---

## The habit

`A` is direct selection. In Illustrator you press `A` and the bounding box steps aside for anchors and handles. You drag a point. You drag a handle. Alt pulls one handle without the other. You click a segment to bend it, or you use the anchor-point tool when the version you learned put convert on a different key. Delete removes the selected points. Shift-click adds points to the selection. A marquee selects the points inside it, not the whole object, which is the entire point of leaving `V`.

Affinity's Node tool is the same grip: convert on a click, symmetry broken with a modifier. `P` creates the path. `A` edits it after it exists.

You also expect a rectangle to stay a rectangle until you ask for nodes. The first node edit is the ask. After that you want anchors on the thing you see, including when the shape is rotated. A handle that floats in the unrotated box while the artwork sits at 30 degrees is a tool that lies. Edits have to land where your eye is.

## The constraint

One `.oma`. A path is path data in that file. A rectangle is parameters until a node edit needs path data. The first time you edit a shape with this tool, it converts to a path. That conversion is the price of dragging a real anchor. Free transform and Move refuse to charge it, so `Ctrl+T` and `V` stay safe. Node charges it, once, and then you are in anchors. Undo has to restore the parameterized shape if you undo that first edit. One step. No "expanded, plus moved, plus you cannot get the radius field back."

Rotated paths keep the visible points and Bézier handles aligned with the artwork. You edit at the displayed location. Saved rotations stay intact. Selecting the path does not create an undo step. A click is not an edit. A drag is an edit. That split keeps `Ctrl+Z` for the change you made, not for the moment you looked at the object.

Esc does not cancel Node. In the pen, Esc drops the last point and then cancels a path still in progress. Node is editing a path that already exists. Delete removes selected points. It does not remove the whole object while those points are selected.

0.5.8 adds radius handles for corners that still have a radius. Alt-drag a corner-radius handle to change every corner. Shift-select corners, then drag one selected corner's radius handle to change that set. Compound paths from repeated booleans keep their contours and holes, and those nodes stay editable.

**Object → Break path** converts without a drag. It sits next to the first node edit.

## What landed

**Node** is `A`. The manual's Design chapter is the behavior 0.5.8 runs. The pen's table sits beside it so the two tools stay distinct:

| Gesture | Pen `P` | Node `A` |
| --- | --- | --- |
| Click | Corner | Select, Shift adds |
| Click-drag | Smooth point | Move selected points |
| Alt-drag | Break handle | Break handle |
| Shift | 45° on placement | 45° on handles |
| Esc | Drop last point, then cancel | — |
| Enter or double-click | Finish open path | — |
| Box drag | — | Select those nodes |
| Drag a segment | — | Move the line |
| Click a curve | — | Insert |
| Alt-click a point | — | Corner or smooth |
| Delete | — | Remove selected points |

Shapes convert to a path the first time you edit them. After that, the anchors you see are the anchors that save. Rotated artwork shows those anchors on the rotated geometry. Point, handle, and segment edits hit the displayed locations. The file keeps the rotation it already had. You are not required to unrotate, edit, and rotate back.

0.5.8 path editing on this tool: Alt-drag a corner-radius handle to set every corner. Shift-select a subset of corners, then drag a selected corner's radius handle to update that subset. Repeated unions and subtractions keep independent contours and holes. Nodes, handles, insertion, deletion, and a broken contour survive save, reopen, undo, redo, and SVG export. Double-click with Select or Node to edit inside the compound.

## In the hand

Draw a rectangle and a pen path.

```text
R
```

```text
P
```

Click three corners and close on the first point, or leave it open with Enter. Press `A`.

```text
A
```

Click one anchor on the pen path. It selects. Shift-click a second anchor. Both are selected. Drag. Those points move. Anchors you did not select stay. Drag a box around a cluster to select them the same way.

Drag a handle. The curve follows. Hold Shift while you drag the handle if you want 45 degrees. Hold Alt and drag the handle to break symmetry. The other side of the point stays where it was.

Alt-click a smooth point. It becomes a corner. Alt-click again. It becomes smooth. Click the middle of a segment. A new point is inserted. Drag that segment's body and the line between its endpoints moves.

Select a point you do not want. Press Delete. The point goes away. The object stays on the layer. While points are selected, Delete removes points.

Click the rectangle with `A` and drag an anchor. That first edit converts it to a path. The corner-radius field is no longer the live rectangle parameter. `Ctrl+Z` if you wanted the rectangle back. On a shape you mean to keep parametric, use Move's corner dots or, in 0.5.8, the radius handles: Alt-drag one corner-radius handle to round every corner together, or Shift-select corners and drag one selected radius handle to round only that set.

Rotate the path with `V` and the top handle, then press `A` again. The anchors sit on the rotated artwork. Drag the one you see. The edit lands there. Save with `Ctrl+S`, reopen, and the rotation and the anchors still agree.

## The edge

Esc will not cancel Node, and it will not peel the last edit. That key belongs to the pen, where a path is still in progress. In Node, Delete removes selected points. It does not remove the whole object while those points are the selection. Convert with Alt-click is not a delete. Break with Alt-drag is not a delete.

The first node edit on a rectangle, ellipse, polygon, or star converts it to a path. Node will not keep the side-count parameter live once you have dragged an anchor. Undo restores the original form. If you need the parameters tomorrow, do not make that edit. Use `V` and Transform. Free transform, `Ctrl+T`, also leaves the parameters in place.

Selecting the path does not push an undo step. The entry appears when you change geometry.

Alt-drag on a corner-radius handle changes every corner. It does not break only the handle you touched. Use the Shift-selected set when only some corners should move. That pair is the 0.5.8 radius behavior. The Alt-drag that breaks Bézier symmetry is the gesture on a Bézier handle, which is a different handle.

Press `A`. Drag the point you see. Alt-drag a handle to break it. Delete removes the selected points and leaves the path on the layer.
