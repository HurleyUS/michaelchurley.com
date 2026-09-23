---
id: T027
title: Pen tool
slug: omadesign-0-5-8-pen-tool
excerpt: Pen is P. Click for a corner, click-drag for a smooth point, and a twitch under 3px stays a corner. Shift holds 45°. Esc drops the last point, then cancels.
tags: [omadesign, 0.5.8, pen]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-pen-tool/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-pen-tool/og.png
---

## The habit

The pen is the tool you judge a drawing program by. Illustrator's Pen is P. Affinity's is P. You click a corner. You click and drag a smooth point, and two handles come out. You hold Shift when the next segment has to sit on a horizontal, a vertical, or a diagonal. You hold Alt when one handle has to break away from its twin so the curve can change direction without a cusp you did not want, or with a cusp you did.

You also know the small humiliations. A nervous click, two pixels of movement, and the tool lays down a smooth point with tiny handles. You spend the next minute deleting them. Esc nukes the entire path when you only wanted the last point back. Closing the path requires a ritual hover over the first point, and continuing an open path means hunting a command named Join after you have already left the tool.

The cubic has to appear while you draw. If the curve shows up only after you release the path, you are drawing blind and correcting from memory. Anyone who has cut a logotype out of a scan knows that delay in their wrist.

## The constraint

The pen writes a path into the same `.oma` as the rectangles, the type, and the artboard. There is no sketch file beside the poster and no ink layer that has to be traced later by a different persona. A point you place is a point Node can edit, and a point you undo is one step.

The gesture language has to match Node, because you switch between them every few seconds. Click, click-drag, Alt-drag, and Shift cannot mean one thing while the pen is down and another thing once the path exists. A designer who learns two dialects for the same handles will hit the wrong one under a deadline. The manual lists them in one table so the hand can memorize a single row.

Shift is already the constraint key for moves, for pencil strokes, and for artboard drags: horizontal, vertical, or 45 degrees. The pen uses that same key for points and handles. A special pen-only modifier would mean the left hand changes jobs every time the tool changes. One binary, one document, one modifier for "make this straight."

A twitch has to stay a corner. The threshold is a distance, 3 pixels, because a click is never perfectly still on a real mouse or a real trackpad. If every tremble became a curve, the corner tool would be a rumor.

## What landed

Press P. Click to place a corner. Click and drag to place a smooth point. If the drag moves less than 3 pixels, the point stays a corner. That twitch rule is the whole difference between a clean polygon and a path covered in accidental handles.

Shift constrains the pen to 45 degrees. That covers the segment you are placing and the handles you are dragging. Alt-drag breaks handle symmetry, on the pen and later on the node. The cubic is drawn as you go, so the curve on screen is the curve in the path.

Enter finishes an open path. Double-click finishes an open path. You use this when the stroke is a line that should not close: a tick, a divider, an arrow shaft. Esc removes the last point. Esc again cancels. The first press is an undo of the point. The path you still want stays on the canvas.

Click the first point to close. The path becomes a closed shape you can fill.

Click an open endpoint to continue that path, or to join it to the path you are drawing. You do not leave the tool, copy both paths, and run a separate join command. The open end is a target.

While you place points, snapping can see object edges, artboard edges, centers, guides, the grid, and equal spacing between nearby objects. Alignment lines and gap measurements show up as you move. Pen placement can use those repeated and balanced gaps, and Shift still constrains while it does. Ctrl+Shift+; toggles snapping. Hold Ctrl during the drag to reverse snapping for that drag, then release Ctrl and the previous choice returns.

Open paths take a centered stroke. Closed paths can use inside, center, or outside placement, and the stroke width field accepts values above 64 pixels. Those stroke decisions stay in the inspector. The pen does not bake them into anchors.

## In the hand

Press P. Click once where the mark should start. That is a corner. Move to the right, hold Shift, and click again. The segment locks to the horizontal. Release Shift. Click and drag at the shoulder of the curve. Handles appear, and the cubic bends while the mouse button is down. If the drag was a shiver and the point came out as a corner, that is the 3 pixel rule working. Click-drag again with a real pull.

At the next change of direction, place the point, then Alt-drag one handle away from the other. The twin stays. The curve can come into the point from one angle and leave on another.

Wrong point? Press Esc once. That point is gone. The earlier points remain. Press Esc again only when you mean to drop the in-progress path.

To leave the path open, press Enter, or double-click. To close it, bring the pen back to the first point and click it. To extend a path you finished earlier, press P and click the open end, then keep drawing. Click the open end of a second path if the job is to join them.

```
P                 Pen
Click             Corner
Click-drag        Smooth point
Drag under 3px    Stays a corner
Shift             45°
Alt-drag          Break the handles
Enter             Finish open
Esc               Drop the last point, then cancel
Click first point Close
```

Switch to A when the path is done and you need to move a point you already placed. The same Alt-drag breaks a handle. The same Shift holds a handle at 45 degrees. You are editing the path the pen just wrote.

Ctrl+Z takes the last pen step back. Because undo is one step, you can walk a bad curve off the page point by point without a history branch named "pen session."

## The edge

A drag under 3 pixels refuses to become a curve. The point stays a corner. If you wanted handles, you drag them on purpose, far enough that the tool can tell.

Esc refuses to throw away the whole path on the first press. It removes the last point. The next Esc cancels. You always get one chance to keep the work that was already good.

Press P, click the corner, and drag the smooth point far enough that the handles are the ones you meant.
