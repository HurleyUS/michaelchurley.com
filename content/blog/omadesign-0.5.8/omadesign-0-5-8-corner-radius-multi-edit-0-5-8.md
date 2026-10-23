---
id: T031
title: Corner radius multi-edit 0.5.8
slug: omadesign-0-5-8-corner-radius-multi-edit-0-5-8
excerpt: In 0.5.8, Alt-drag a corner-radius handle with the Node tool and every corner on the path changes. Shift-select a set of corners, then drag one selected handle, and that set moves together.
publishedAt: 2026-09-22T11:29:56Z
tags: [omadesign, 0.5.8, corners]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-corner-radius-multi-edit-0-5-8/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-corner-radius-multi-edit-0-5-8/og.png
---

## The habit

A rounded rectangle is easy: one radius, four corners, one number in Transform. The trouble starts when the corners are points on a path. You outlined a ticket shape, or broke a rectangle apart so two corners could differ, or traced a badge where eight corners now need the same rounding. In Illustrator you select the anchors with the Direct Selection tool and drag one Live Corner widget, and if you selected the right anchors, they share the radius. If you selected only one, only one changes. Affinity Designer has corner tools too, and the slow version of the job is the one everyone remembers: click a corner and drag, click the next corner and drag, and so on. A symmetric mark takes a minute of repeated gestures and still comes out a pixel off.

You also do this after rotating. The ticket is tilted, and the corner widget has to sit on the corner you see, or you end up dragging a handle that belongs to a corner on the other side of the shape. Undo becomes the main tool: drag, dislike it, undo, try the next corner.

The job really needs two deliberate gestures: change all of the corners, or change a chosen set. This release removes the need to visit corners one at a time.

## The constraint

Corner radius on a live rectangle already lives in Transform, and that number changes every corner because the object has only one radius. Once the artwork becomes a path, each corner can differ, and a single Transform field would be misleading. Omadesign keeps a path's corners visible as corners in the Node tool. The handles sit on the path, including a path that is already rotated, because a rotated path keeps its visible points on the artwork.

Undo is one step. A drag that changes four radii has to undo as one drag. Four separate history entries would mean four undos to get the ticket back, and you would stop using the gesture. Alt-drag is one step for every corner, and dragging a selected set is one step for the corners you picked.

This landed in 0.5.8. The release tests rotated paths, a selected set of radii, a change to all radii, and undo and redo. The file is still one `.oma`, the handles still belong to the Node tool, and the corner edit never leaves the document or depends on another machine.

A rectangle you haven't converted still uses its parameter. Corner dots in Move round a rectangle, and Transform still holds the radius. Multi-edit is for Node handles on a path, where changing three corners and leaving the fourth becomes a real need.

## What landed

Press A and corner-radius handles appear with the Node tool, including on paths. They sit on the corners of the geometry in front of you.

Alt-drag a corner-radius handle and every corner on that path takes the radius you are dragging. You drag one handle and the whole path changes. Use this when a badge, a ticket, or a broken rectangle should share one radius again after the corners drifted apart.

Shift-select several corners, then drag the radius handle of one selected corner. The selected set changes together, and unselected corners keep their radius. That is how one poster gets two sharp corners and two round ones without a second trip around the path.

Both gestures arrived in 0.5.8, on top of the Node tool you already use to move points, pull handles, insert, and delete. When you are editing points, Shift-click in the Node tool adds a node. When you are working with corner-radius handles, Shift-select builds the set of corners the next radius drag will change. Watch which handle you grab, because moving a point and dragging a radius use different handles on the same tool.

The edit follows a rotated path, so the handle you pull is on the corner you see. Undo and redo restore the radii with Ctrl+Z and Ctrl+Shift+Z or Ctrl+Y, so you never have to remember the previous values.

A path made from a rectangle, from an ellipse's four smooth anchors, or from a run of Boolean contours gets these handles once you are in Node. Compound contours keep their radii editable after repeated Boolean work. Wherever you can see a corner handle, the same rule applies: Alt changes every corner on the path, and otherwise the drag changes the selected set, if you built one.

## In the hand

Draw a rectangle with R and set a small radius in Transform so you can see the corners. Press A, or choose Object > Break path first if you want a path before you touch a handle, and then press A. The radius handles appear on the corners.

Hold Alt and drag one corner's radius handle. All four corners change together. Release, then press Ctrl+Z, and you are back to the radii from before the Alt-drag.

Shift-select the two corners that should match, such as the top-left and bottom-right on a ticket. Drag the radius handle on one of those selected corners. Those two update and the other two stay. If a third corner jumped, it was in the selection. Undo, Shift-click it out of the set, and drag again.

Rotate the path with V and the top handle, then press A again. The handles sit on the rotated corners. Alt-drag one of them, and the radii change on the artwork you see. Ctrl+Z restores them.

```
A            Node, radius handles visible
Alt-drag     Every corner on the path
Shift-select The corners that share the next drag
Drag         One selected corner's radius handle moves that set
Ctrl+Z       Put the radii back
```

Save the `.oma` when the ticket is right. The radii are stored on the path, so when you open the file later the corners are the ones you dragged, on a rotated path if that is how you left it.

If the object is still a parameter rectangle and every corner should match, stay in Transform and type the number. Alt-drag does the same thing for artwork that has already become points.

## The edge

Alt-drag always changes every corner on the path. If one corner has to stay sharp, don't hold Alt.

A selected set only includes the corners you Shift-selected. Drag one selected corner's radius handle and the unselected corners keep their radius. The set is whatever you selected before the drag.
