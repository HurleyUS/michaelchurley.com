---
id: T025
title: Break path
slug: omadesign-0-5-8-break-path
excerpt: Object → Break path turns a live shape into points that sit on the rotated artwork. The first node edit converts the same way. Selecting the path writes no undo.
publishedAt: 2026-09-06T10:31:01Z
tags: [omadesign, 0.0.1-alpha, paths]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-break-path/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-break-path/og.png
---

## The habit

You draw a rectangle. It has a width, a height, and a corner radius, and you expect those three numbers to stay numbers until you decide otherwise. In Illustrator the rectangle stays a rectangle until you Expand it, or until the Direct Selection tool grabs one anchor and the object silently becomes a path. Affinity Designer makes the same trade the moment the Node tool pulls a point. The corner radius you meant to nudge in the Transform panel is gone, and the only record of it is the curve on the artboard.

The second habit shows up after you rotate. The poster needs the card at fifteen degrees. You rotate it with the top handle, you like it, and you go back in to adjust one corner. In a lot of files the anchors still live in the box from before the rotation, or in a bounds rectangle that no longer matches the stroke. You drag, and the curve moves away from the line you were looking at. You undo, zoom in, and drag a shorter distance. After a few rounds you stop trusting the screen, which is a bad place to be ten minutes before a client looks at the file.

The workaround most of us learned is to expand early, rotate the anchors, and stop promising anyone a live corner radius. That makes the file less editable on purpose. Break path lets you stop converting shapes before you mean to.

## The constraint

Omadesign is one binary and one `.oma`, and undo is one step. A rotated path can't store a flat outline in one place and an angle in another and rely on the editor to combine them on the way to the screen. If those two disagree, the drag lands off the visible line, and the single undo step has to guess which value you meant to change.

No second process rebuilds the outline afterward, and no account service rewrites the document along the way. The points you see are the points the file saves. Open that `.oma` tomorrow and you edit the same rotation you left.

A rectangle still has to be a rectangle for as long as you are setting corner radius, width, and height. Converting every shape to anchors at creation would throw away Transform just to make the node tool simpler. So the conversion waits until you ask for points. When you do, the points have to match the visible artwork, rotation included, because that is the only geometry one undo step can restore reliably.

## What landed

Object > Break path converts the selection to a path at the moment you choose. The command sits with the Node tool, because Node is the tool that needs anchors.

Shapes also convert the first time you edit their nodes. Until then, a rectangle keeps its corner radius, a polygon keeps its side count, and a star keeps its inner radius, and those fields stay in Transform. Ellipses convert to four smooth anchors. Free transform (Ctrl+T) keeps live text and shape parameters editable, because scale and rotation leave the parameters in place. Only a node edit converts.

Once the shape is a path, its rotation is baked into the geometry you see. Visible points and Bézier handles sit on the artwork, and point drags, handle drags, and segment drags all happen at those displayed locations. A file that was saved already rotated opens the same way, with its saved rotation intact.

Selecting a path does not create an undo step. You can click a rotated mark, look at it, and leave, and History stays on the last edit that actually changed something.

Undo and redo restore the geometry and the rotation together. Moving one point leaves the other points where they are, even when the path's bounds change. The bounding box can grow, but the anchors you didn't touch stay put.

Node is A. Drag points and handles. Shift-click adds a node, and a box drag selects nodes. Drag a segment to move that line. Click a curve to insert a point. Alt-click switches a point between corner and smooth, and Alt-drag on a handle breaks its symmetry. Delete removes the selected points. Hold Shift on a handle to lock it to 45 degrees. Break path is how you move a shape onto this tool on purpose.

Flip follows the same visible-axis rule, and the two meet in one place. A dashed rectangle or ellipse becomes a path when flipped so the dash can mirror, and undo restores the shape's parameters. Live text uses a separate, explicit Object > Convert to path. Break path is the command for shapes, and it puts the points on the artwork where the stroke already is.

## In the hand

Press R and drag a rectangle. Set a corner radius in Transform if the card needs one. Press V, grab the handle above the box, and rotate until the rectangle sits right in the poster. The artwork is rotated, and Transform still shows a rectangle.

Press A and look before you drag. The points sit on the corners you can see. Choose Object > Break path if you want the conversion as its own step, then drag a corner. If you drag a point first, that drag does the conversion. Either way you end up with a path.

The corner you pull moves and the other corners stay. Pull a handle and the curve follows the handle under the cursor. Click a segment and the line moves as one piece. Alt-click a point when a smooth join needs to become a corner. Press Ctrl+Z and the geometry and rotation return together. Ctrl+Shift+Z or Ctrl+Y redoes the edit.

Save and open the `.oma` again. The points are still on the artwork, and clicking the path adds nothing to the undo stack.

```
R                         Rectangle
V                         Move, then the rotate handle
A                         Node
Object → Break path
Ctrl+Z                    Undo the edit
Ctrl+Shift+Z  or  Ctrl+Y Redo
```

Try inserting points after the break. Click the curve between two points and a new point appears where you clicked. The insert uses the same displayed path, so on a rotated card the point lands on the rotated segment. Delete removes selected points. None of this keeps a hidden unrotated copy next to the one you are editing.

If the shape was a star, check Transform before the break and note the inner radius, because after the break that number becomes part of the curve. If you want to keep the star as a star, leave Node alone and keep editing the parameter. Use Break path when the poster needs a point the star parameters can't express.

## The edge

Break path gives up the shape's parameters. Afterward you edit points, and corner radius, sides, and inner radius only exist on shapes you haven't converted. The command keeps it as one object, and one undo takes you back past the conversion.

Selecting the path writes no history, so you can inspect a rotated logo as often as you like without touching the undo stack.
