---
id: T027
title: Pen tool
slug: omadesign-0-5-8-pen-tool
excerpt: Pen is P. Click for a corner, click-drag for a smooth point, and a twitch under 3px stays a corner. Shift holds 45°. Esc drops the last point, then cancels.
publishedAt: 2026-08-29T16:28:47Z
tags: [omadesign, 0.0.0.0alpha-rc, pen, drawing]
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

## Pencil freehand

### The habit

Sometimes the pen is the wrong kind of careful. You know the silhouette. A quick leaf, a hand-drawn underline, a wiggly rule under a headline, the gesture of a signature that has to sit in the poster as vectors. In Illustrator that is the Pencil, and the key is N. In Affinity Designer it is the Pencil tool, same job, a freehand stroke that becomes a curve. You draw it the way you would draw it on paper, and then you edit the points if a bump is wrong.

Photoshop's brush is a different habit wearing a similar icon. The brush lays down pixels. You smudge them, you erase them, you live with resolution. The vector pencil has to end as a path, because the thing you are making is a mark that still has a stroke width, a fill, and anchors.

The other habit is the constraint. Halfway through a loose stroke you need one segment to be actually horizontal. In the apps you trust, Shift does that. It is the same Shift you hold to drag a shape in a straight line, and the same Shift you hold so a pen point sits on a diagonal. If the pencil invented its own "straighten" modifier, you would forget it, and the stroke would wander on the one part that had to be strict.

A separate sketching app is how these strokes usually get orphaned. You draw them somewhere else, you export an SVG, you place the SVG, and the anchors come in dumb. The pencil in the studio you are already using keeps the stroke in the poster.

### The constraint

Omadesign has one canvas for the drawing. Pencil is a Design tool, key N, next to Pen P in the same strip. The curve it writes is a path in the `.oma`. Node can take it. The stroke inspector can take it. Expand stroke can turn it into fills later if a vendor needs outlines. None of that requires a second file or a second program.

Undo is one step, so a stroke you hate is Ctrl+Z, not a trip into a history panel with a pencil session collapsed into one opaque blob you cannot partially keep. You draw, you look, you undo, you draw again.

Shift has one meaning across the drawing tools. The manual states it in a single sentence: hold Shift to constrain pen points and handles, pencil and brush strokes, and object or artboard movement to horizontal, vertical, or 45 degrees. The pencil does not get a private dialect. Your left hand stays on Shift whether the tool is N, P, or V.

That constraint is the whole precision model. There is no smoothing dialog documented on the pencil, and there is no second "sketch persona" with a looser grid. The stroke is as exact as the Shift key you did or did not hold. People who want the pencil to guess a cleaner curve are asking for a second document living inside the stroke. This studio keeps the curve you dragged.

Brush strokes have an extra rule the pencil does not borrow. During a brush stroke, pressing Shift anchors the constraint at the last free point. That sentence is about the brush. The pencil's documented deal is the shared one: horizontal, vertical, or 45 degrees.

### What landed

Press N. Drag. You get a freehand curve. It lives on the canvas with everything else you drew. Hold Shift while you drag and the stroke constrains to horizontal, vertical, or 45 degrees, the same three directions Pen and Move already use.

The curve is path data. Switch to Node, A, and the points and handles are there to drag, insert, delete, and convert between corner and smooth. Switch to Move, V, and the curve scales and rotates as an object, with the top handle for rotation and the eight handles for scale. Alt-drag clones it, and Shift with that Alt-drag keeps the copy on a constrained line. Those are the object gestures, and the pencil's output is an object.

Stroke settings apply. Open paths use a centered stroke. You can set a width, including a width above 64 pixels. A freehand curve is usually open. If you need it closed, the pen can continue an open end: press P and click the endpoint. That join is a pen feature, and it works because the pencil left a real path with real ends.

Snapping still applies while you work. Object and artboard edges and centers, guides, the grid, and equal spacing are the targets. Alignment lines and gap measurements appear as you move. Ctrl+Shift+; toggles snapping. Hold Ctrl during a drag to reverse snapping until you release it. A loose pencil line can still land on a guide when you want it to, and it can ignore the guide when Ctrl says so.

Brush is a different tool. B paints pixels on a pixel layer, with size on `[` and `]`. Pencil draws a curve. A vector-only document still takes N.

### In the hand

Press N. Put the cursor where the underline should start. Drag the shape of the stroke in one motion. Let go. Look at it at the zoom you will actually present. If it is wrong, Ctrl+Z and drag again. The undo is the stroke.

When the last third of the gesture has to be flat, hold Shift for that part of the drag. The stroke locks to horizontal, vertical, or 45 degrees under the constraint. Release Shift when you want the line to wander again, and keep drawing if you are still holding the button. The directions available under Shift are only those three. A 10 degree rise is a stroke you draw without Shift.

Press A. Clean up one bump. Drag the point. If a handle is fighting you, Alt-drag to break symmetry, or Alt-click the point to switch corner and smooth. Delete a point that the freehand gesture doubled up. You are in the node tool now. The pencil's job ended when you released the mouse.

Give it a stroke color. X swaps fill and stroke if you are painting the wrong one. D restores the default fill and stroke. Those keys are the color studio's, and they apply to this curve because the curve is ordinary artwork.

Duplicate a stroke you like with the duplicate shortcut, Super+D. Nudge the copy. A family of hand-drawn rules should be copies of a good one, edited, not six unrelated drags you then try to match by eye.

```
N            Pencil
Drag         Freehand curve
Shift        Horizontal, vertical, or 45°
Ctrl+Z       Remove the stroke
A            Edit the points
P            Continue an open end if you need to
```

Save the `.oma`. The curve is in the project with the type and the rectangles. You do not export a sketch and place it back into the poster to keep it.

### The edge

Shift refuses a free angle. While it is held, the pencil stroke is horizontal, vertical, or 45 degrees. That is the same rule as the pen and the move tool. The pencil will not keep a gentle diagonal and also call it constrained.

The stroke is the curve you dragged. You edit it with A. Nothing beside it gets generated and silently substituted.

Press N, drag the mark, and hold Shift on the part that has to be straight.
