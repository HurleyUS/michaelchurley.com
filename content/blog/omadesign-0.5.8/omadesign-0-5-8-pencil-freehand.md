---
id: T029
title: Pencil freehand
slug: omadesign-0-5-8-pencil-freehand
excerpt: Pencil is N. Drag a freehand curve on the same canvas as the pen. Hold Shift and the stroke locks to horizontal, vertical, or 45 degrees.
tags: [omadesign, 0.5.8, drawing]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-pencil-freehand/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-pencil-freehand/og.png
---

## The habit

Sometimes the pen is the wrong kind of careful. You know the silhouette. A quick leaf, a hand-drawn underline, a wiggly rule under a headline, the gesture of a signature that has to sit in the poster as vectors. In Illustrator that is the Pencil, and the key is N. In Affinity Designer it is the Pencil tool, same job, a freehand stroke that becomes a curve. You draw it the way you would draw it on paper, and then you edit the points if a bump is wrong.

Photoshop's brush is a different habit wearing a similar icon. The brush lays down pixels. You smudge them, you erase them, you live with resolution. The vector pencil has to end as a path, because the thing you are making is a mark that still has a stroke width, a fill, and anchors.

The other habit is the constraint. Halfway through a loose stroke you need one segment to be actually horizontal. In the apps you trust, Shift does that. It is the same Shift you hold to drag a shape in a straight line, and the same Shift you hold so a pen point sits on a diagonal. If the pencil invented its own "straighten" modifier, you would forget it, and the stroke would wander on the one part that had to be strict.

A separate sketching app is how these strokes usually get orphaned. You draw them somewhere else, you export an SVG, you place the SVG, and the anchors come in dumb. The pencil in the studio you are already using keeps the stroke in the poster.

## The constraint

Omadesign has one canvas for the drawing. Pencil is a Design tool, key N, next to Pen P in the same strip. The curve it writes is a path in the `.oma`. Node can take it. The stroke inspector can take it. Expand stroke can turn it into fills later if a vendor needs outlines. None of that requires a second file or a second program.

Undo is one step, so a stroke you hate is Ctrl+Z, not a trip into a history panel with a pencil session collapsed into one opaque blob you cannot partially keep. You draw, you look, you undo, you draw again.

Shift has one meaning across the drawing tools. The manual states it in a single sentence: hold Shift to constrain pen points and handles, pencil and brush strokes, and object or artboard movement to horizontal, vertical, or 45 degrees. The pencil does not get a private dialect. Your left hand stays on Shift whether the tool is N, P, or V.

That constraint is the whole precision model. There is no smoothing dialog documented on the pencil, and there is no second "sketch persona" with a looser grid. The stroke is as exact as the Shift key you did or did not hold. People who want the pencil to guess a cleaner curve are asking for a second document living inside the stroke. This studio keeps the curve you dragged.

Brush strokes have an extra rule the pencil does not borrow. During a brush stroke, pressing Shift anchors the constraint at the last free point. That sentence is about the brush. The pencil's documented deal is the shared one: horizontal, vertical, or 45 degrees.

## What landed

Press N. Drag. You get a freehand curve. It lives on the canvas with everything else you drew. Hold Shift while you drag and the stroke constrains to horizontal, vertical, or 45 degrees, the same three directions Pen and Move already use.

The curve is path data. Switch to Node, A, and the points and handles are there to drag, insert, delete, and convert between corner and smooth. Switch to Move, V, and the curve scales and rotates as an object, with the top handle for rotation and the eight handles for scale. Alt-drag clones it, and Shift with that Alt-drag keeps the copy on a constrained line. Those are the object gestures, and the pencil's output is an object.

Stroke settings apply. Open paths use a centered stroke. You can set a width, including a width above 64 pixels. A freehand curve is usually open. If you need it closed, the pen can continue an open end: press P and click the endpoint. That join is a pen feature, and it works because the pencil left a real path with real ends.

Snapping still applies while you work. Object and artboard edges and centers, guides, the grid, and equal spacing are the targets. Alignment lines and gap measurements appear as you move. Ctrl+Shift+; toggles snapping. Hold Ctrl during a drag to reverse snapping until you release it. A loose pencil line can still land on a guide when you want it to, and it can ignore the guide when Ctrl says so.

Brush is a different tool. B paints pixels on a pixel layer, with size on `[` and `]`. Pencil draws a curve. A vector-only document still takes N.

## In the hand

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

## The edge

Shift refuses a free angle. While it is held, the pencil stroke is horizontal, vertical, or 45 degrees. That is the same rule as the pen and the move tool. The pencil will not keep a gentle diagonal and also call it constrained.

The stroke is the curve you dragged. You edit it with A. Nothing beside it gets generated and silently substituted.

Press N, drag the mark, and hold Shift on the part that has to be straight.
