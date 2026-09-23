---
id: T031
title: Corner radius multi-edit 0.5.8
slug: omadesign-0-5-8-corner-radius-multi-edit-0-5-8
excerpt: In 0.5.8, Alt-drag a corner-radius handle with the Node tool and every corner on the path changes. Shift-select a set of corners, then drag one selected handle, and that set moves together.
tags: [omadesign, 0.5.8, corners]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-corner-radius-multi-edit-0-5-8/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-corner-radius-multi-edit-0-5-8/og.png
---

## The habit

A rounded rectangle is easy. One radius, four corners, a number in Transform. The trouble starts when the corners are points on a path. You outlined a ticket shape. You broke a rectangle so two corners could differ. You traced a badge and now eight corners need the same bite taken out of them. In Illustrator you select the anchors with the Direct Selection tool and drag one Live Corner widget, and if you selected the right anchors they share the radius. If you selected one, you get one. Affinity Designer has corner tools too, and the slow version of the job is the one everyone remembers: click a corner, drag, click the next corner, drag, click the next. A symmetric mark takes a minute of repeated gestures and still comes out a pixel off.

You also do this after rotation. The ticket is tilted. The corner widget has to sit on the corner you see, or you drag a handle that belongs to a corner on the other side of the shape. Undo becomes the real tool. You drag, you hate it, you undo, you try the next corner.

The job is two gestures, used on purpose. All of the corners. Or this set of corners. Anything that makes you visit them one by one is the habit this release is finished with.

## The constraint

Corner radius on a live rectangle already lives in Transform. That number changes every corner because the object only has one radius. The moment the artwork is a path, each corner can differ, and a single Transform field would lie. Omadesign keeps the path's corners as corners you can see with the Node tool. The handles are on the path, including a path that is already rotated, because a rotated path keeps its visible points on the artwork.

Undo is one step. A drag that changes four radii has to come back as one drag. Four separate history entries would mean four undos to get the ticket back, and you would stop using the gesture. Alt-drag is that one step for every corner. A selected set is that one step for the corners you named.

0.5.8 is where this landed. The release checks rotated paths, a selected set of radii, a change to all of the radii, and undo and redo. The file is still one `.oma`. The handles are still the Node tool. Nothing about the corner edit leaves the document or asks another machine to round the path for you.

A rectangle you have not converted still uses its parameter. Corner dots with Move round a rectangle. Transform still holds the radius. The multi-edit is for the Node handles on a path, which is where "these three, not the fourth" becomes a real sentence.

## What landed

Press A. Node corner-radius handles appear with the Node tool, including on paths. You are looking at the corners of the geometry in front of you.

Alt-drag a corner-radius handle. Every corner on that path takes the radius you are dragging. One handle is the input. The whole path is the result. You use this when a badge, a ticket, or a broken rectangle should share one radius again after the corners drifted.

Shift-select several corners. Then drag one selected corner's radius handle. The selected set changes together. Corners you left unselected keep the radius they had. That is how one poster gets two sharp corners and two round ones without a second trip around the path.

Both gestures are in 0.5.8. They sit on top of the Node tool you already use to move points, pull handles, insert, and delete. Shift-click in the node tool also adds a node when you are editing points. When you are on corner-radius handles, Shift-select builds the set of corners the next radius drag will share. Watch which handle you grabbed. A point move and a radius drag are different handles on the same tool.

The edit follows a rotated path. The handle you pull is the handle on the corner you see. Undo and redo put the radii back with Ctrl+Z and Ctrl+Shift+Z or Ctrl+Y. You do not reconstruct the previous radii from memory.

A path that came from a rectangle, an ellipse's four smooth anchors, or a run of Boolean contours can carry these handles once you are in Node. Compound contours keep their radii editable after repeated Boolean work. If you can see the corner handle, the radius drag applies to the rule above: Alt for every corner on the path, or the selected set if you built one.

## In the hand

Draw a rectangle with R. Set a small radius in Transform so you can see the corners. Press A, or choose Object → Break path if you want the path before you touch a handle. Press A either way. The radius handles show up on the corners.

Hold Alt and drag one corner's radius handle. All four corners move together. Release. Press Ctrl+Z. You are back to the radii from before the Alt-drag.

Shift-select the two corners that should match, the top-left and the bottom-right if that is the ticket. Drag the radius handle on one of those selected corners. Those two update. The other two stay. If a third corner jumped, it was in the selection. Undo, Shift-click it off the set, and drag again.

Rotate the path with V and the top handle. Press A again. The handles sit on the rotated corners. Alt-drag one of them. The radii change on the artwork you see, and Ctrl+Z restores them.

```
A            Node, radius handles visible
Alt-drag     Every corner on the path
Shift-select The corners that share the next drag
Drag         One selected corner's radius handle moves that set
Ctrl+Z       Put the radii back
```

Save the `.oma` when the ticket is right. The radii are on the path. Open the file later and the corners are still the corners you dragged, on a rotated path if that is how you left it.

If the object is still a parameter rectangle and every corner should match, stay in Transform and type the number. Alt-drag is the path version of that same idea, for artwork that has already become points.

## The edge

Alt-drag refuses to leave a corner behind. Every corner on the path takes the drag. If one corner has to stay sharp, leave Alt up.

A selected set refuses to recruit the corners you did not Shift-select. Drag one selected corner's radius handle and the unselected corners keep their radius. The set is the selection you built before the drag.

Press A, hold Alt, and drag one corner-radius handle when the whole path should match.
