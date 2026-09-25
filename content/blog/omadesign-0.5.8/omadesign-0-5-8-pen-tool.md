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

People judge a drawing program by its pen. Illustrator's Pen is P, and so is Affinity's. You click to place a corner. You click and drag to place a smooth point, and two handles come out. You hold Shift when the next segment has to sit on a horizontal, a vertical or a diagonal. You hold Alt when one handle has to break away from its twin, so the curve can change direction with or without a cusp, whichever you intended.

You also know the small annoyances. A nervous click moves two pixels, and the tool lays down a smooth point with tiny handles that you then spend a minute deleting. Esc deletes the entire path when you only wanted the last point back. Closing the path takes a careful hover over the first point, and continuing an open path means finding a command called Join after you have already left the tool.

The cubic curve has to appear while you draw. If it only shows up after you release the path, you are drawing blind and correcting from memory. Anyone who has cut a logotype out of a scan knows that delay.

Sometimes the pen is too careful for the job. You know the silhouette: a quick leaf, a hand-drawn underline, a wiggly rule under a headline, or a signature that has to sit in the poster as vectors. In Illustrator that is the Pencil, on N. Affinity Designer's Pencil tool does the same job, a freehand stroke that becomes a curve. You draw it the way you would on paper, then edit the points if a bump is wrong.

Photoshop's brush looks similar but works differently. It lays down pixels that you smudge, erase and live with at a fixed resolution. A vector pencil has to end as a path, because the mark still needs a stroke width, a fill and anchors.

Halfway through a loose stroke, you may need one segment to be exactly horizontal. In the apps you trust, Shift does that. It is the same Shift you hold to drag a shape in a straight line or to put a pen point on a diagonal. If the pencil had its own "straighten" modifier, you would forget it, and the stroke would wander on the one part that had to be exact.

Freehand strokes often get lost in a separate sketching app. You draw them there, export an SVG, place the SVG, and the anchors come in as plain geometry. A pencil in the studio you already use keeps the stroke in the poster.

## The constraint

The pen and the pencil write paths into the same `.oma` as the rectangles, the type and the artboard. There is no separate sketch file and no ink layer that another persona has to trace later. Pencil is a Design tool on N, next to Pen on P in the same strip. Node can edit any point you place, the stroke inspector can style the curve, and Expand stroke can turn it into fills later if a vendor needs outlines. Undo is one step, so a point or a stroke you don't like is one Ctrl+Z. There is no history panel with a whole drawing session collapsed into one entry you can't partly keep.

The pen's gestures have to match Node, because you switch between them every few seconds. Click, click-drag, Alt-drag and Shift have to mean the same thing while the pen is down and after the path exists. A designer who has to learn two sets of gestures for the same handles will use the wrong one under a deadline. The manual lists them in one table so there is only one set to memorize.

Shift has one meaning across the drawing tools. The manual says it in one sentence: hold Shift to constrain pen points and handles, pencil and brush strokes, and object or artboard movement to horizontal, vertical or 45 degrees. Neither the pen nor the pencil gets its own modifier, so your left hand stays on Shift whether the tool is N, P or V.

For the pencil, that constraint is the whole precision model. The pencil has no documented smoothing dialog and no separate sketch persona with a looser grid. The stroke is as exact as your use of Shift. Having the pencil guess a cleaner curve would mean storing a second version inside the stroke, so the studio keeps the curve you dragged.

Brush strokes have an extra rule the pencil doesn't share. During a brush stroke, pressing Shift anchors the constraint at the last free point. The pencil follows the shared rule: horizontal, vertical or 45 degrees.

A twitch has to stay a corner. The threshold is a distance of 3 pixels, because a click is never perfectly still on a real mouse or trackpad. If every tremble became a curve, you could never place a clean corner.

## What landed

### Pen

Press P. Click to place a corner, or click and drag to place a smooth point. If the drag moves less than 3 pixels, the point stays a corner. That rule is the difference between a clean polygon and a path covered in accidental handles.

Shift constrains the pen to 45 degrees, both for the segment you are placing and for the handles you are dragging. Alt-drag breaks handle symmetry, on the pen and later on the node. The cubic draws as you go, so the curve on screen is the curve in the path.

Enter or a double-click finishes an open path. Use this when the stroke should stay open, like a tick, a divider or an arrow shaft. Esc removes the last point, and a second Esc cancels the path. The first press only undoes the point, so the rest of the path stays on the canvas.

Click the first point to close the path into a shape you can fill.

Click an open endpoint to continue that path, or to join it to the path you are drawing. You don't have to leave the tool, copy both paths and run a separate join command.

### Pencil

Press N and drag to get a freehand curve on the canvas with everything else you drew. Hold Shift while you drag and the stroke constrains to horizontal, vertical or 45 degrees, the same three directions Pen and Move use.

The curve is path data. Switch to Node (A) and the points and handles are there to drag, insert, delete and convert between corner and smooth. Switch to Move (V) and the curve scales and rotates as an object, with the top handle for rotation and the eight handles for scale. Alt-drag clones it, and adding Shift to that Alt-drag keeps the copy on a constrained line.

A freehand curve is usually open. If you need to close it, press P and click the endpoint to continue it with the pen. That works because the pencil leaves a real path with real ends.

Brush is a different tool. B paints pixels on a pixel layer, with size on `[` and `]`. Pencil draws a curve, and it works in a vector-only document.

### Shared by both

While you draw, snapping can use object edges, artboard edges, centers, guides, the grid, and equal spacing between nearby objects. Alignment lines and gap measurements show up as you move. Pen placement can use repeated and balanced gaps, and Shift still constrains while it does. Ctrl+Shift+; toggles snapping. Hold Ctrl during a drag to reverse snapping for that drag, and the previous setting returns when you release Ctrl. A loose pencil line can land on a guide when you want it to, and ignore the guide when you hold Ctrl.

Open paths take a centered stroke. Closed paths can use inside, center or outside placement, and the stroke width field accepts values above 64 pixels. Stroke settings stay in the inspector. The pen doesn't bake them into anchors.

## In the hand

### Pen

Press P and click once where the mark should start. That places a corner. Move to the right, hold Shift and click again, and the segment locks to the horizontal. Release Shift. Click and drag at the shoulder of the curve. Handles appear, and the cubic bends while the mouse button is down. If your drag was a small shake and the point came out as a corner, that is the 3 pixel rule. Click and drag again with a real pull.

At the next change of direction, place the point, then Alt-drag one handle away from the other. The other handle stays where it is, so the curve can come into the point from one angle and leave at another.

If you placed a point in the wrong spot, press Esc once. That point is gone and the earlier points remain. Press Esc again only when you want to drop the path in progress.

To leave the path open, press Enter or double-click. To close it, bring the pen back to the first point and click. To extend a path you finished earlier, press P, click the open end and keep drawing. To join two paths, click the open end of the second one.

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

Switch to A when the path is done and you need to move a point. Alt-drag still breaks a handle and Shift still holds a handle at 45 degrees, because you are editing the path the pen just wrote.

Ctrl+Z takes back the last pen step. Because each step is one undo, you can remove a bad curve point by point.

### Pencil

Press N. Put the cursor where the underline should start, drag the stroke in one motion, and let go. Look at it at the zoom you will present at. If it is wrong, press Ctrl+Z and drag again. Undo removes the whole stroke.

When the last third of the gesture has to be flat, hold Shift for that part of the drag, and the stroke locks to horizontal, vertical or 45 degrees. Release Shift and keep holding the button if you want the line to wander again. Shift only offers those three directions, so a 10 degree rise is something you draw without Shift.

Press A to clean up a bump by dragging the point. If a handle is fighting you, Alt-drag to break symmetry, or Alt-click the point to switch between corner and smooth. Delete any point the freehand gesture doubled up. At this point you are using the node tool, because the pencil's job ended when you released the mouse.

Give the curve a stroke color. X swaps fill and stroke if you are painting the wrong one, and D restores the default fill and stroke. Those are color keys, and they work on this curve because it is ordinary artwork.

Duplicate a stroke you like with Super+D and nudge the copy. A set of hand-drawn rules works better as edited copies of one good stroke than as six separate drags you try to match by eye.

```
N            Pencil
Drag         Freehand curve
Shift        Horizontal, vertical, or 45°
Ctrl+Z       Remove the stroke
A            Edit the points
P            Continue an open end if you need to
```

Save the `.oma`. The curve is in the project with the type and the rectangles, so you never export a sketch and place it back into the poster.

## The edge

A drag under 3 pixels won't become a curve, so the point stays a corner. If you want handles, drag far enough that the tool can tell.

The first Esc won't throw away the whole path. It removes the last point, and only the next Esc cancels. You always get a chance to keep the part of the path that was already good.

Shift doesn't allow a free angle. While you hold it, a pencil stroke is horizontal, vertical or 45 degrees, the same rule as the pen and the move tool. The stroke is the curve you dragged, and nothing gets generated or substituted for it. You edit it with A.
