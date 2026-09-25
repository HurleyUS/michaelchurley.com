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

You draw a rectangle. It has a width, a height, and a corner radius, and you expect those three numbers to stay numbers until you decide otherwise. In Illustrator the rectangle stays a rectangle until Expand, or until the Direct Selection tool grabs one anchor and the object quietly becomes a path. Affinity Designer makes the same trade the moment the Node tool pulls a point. The corner radius you were going to nudge in the Transform panel is gone, and the only record of it is the curve now sitting on the artboard.

The second habit shows up after you rotate. The poster needs the card at fifteen degrees. You rotate with the top handle, you like it, and you go back in for one corner. In a lot of files the anchors still live in the box from before the rotation. Sometimes they live in a bounds rectangle that no longer matches the stroke. You drag. The curve leaves the ink you were looking at. You undo, you zoom, you drag a shorter distance. The hand stops trusting the screen, which is a bad place to be ten minutes before a client looks at the file.

The workaround most of us learned is to expand early, rotate the anchors, and stop promising anyone a live corner radius. The file gets dumber on purpose. Break path is the decision to stop doing that before you meant to.

## The constraint

Omadesign is one binary and one `.oma`. Undo is one step. A rotated path cannot keep a flat outline in one pocket and an angle in another, then hope the editor applies both on the way to the screen. If those two disagree, the drag lands off the ink, and the single undo step has to guess which pocket you meant to change.

There is no second process on the machine to rebuild the outline after the fact, and there is no account hop that rewrites the document on the way through. The points you see are the points the file will save. Open that `.oma` tomorrow and the rotation you left is the rotation you edit.

A rectangle still has to be a rectangle for as long as you are setting corner radius, width, and height. Forcing every shape into anchors at the moment of creation would throw Transform away to make the node tool look simple. The conversion waits until you ask for points. When you ask, the points have to be the visible artwork, rotation included, because that is the only geometry one undo step can honestly restore.

## What landed

Object → Break path converts the selection to a path. You pick the moment. The command sits with the Node tool, because Node is the tool that needs anchors.

Shapes also convert the first time you edit them. Until that edit, a rectangle keeps its corner radius, a polygon keeps its side count, and a star keeps its inner radius. Those fields stay in Transform. Ellipses convert to four smooth anchors. Free transform, Ctrl+T, keeps live text and shape parameters editable. Scale and rotation leave the parameters in place. The node edit converts.

Once the path is a path, rotation lives in the geometry you are shown. Visible points and Bézier handles sit on the artwork. A point drag, a handle drag, and a segment drag all happen at those displayed locations. A file that was saved already rotated opens the same way. The saved rotation stays intact.

Selecting a path does not create an undo step. You can click a rotated mark, read it, and leave. History stays on the last edit that changed something.

Undo and redo put the geometry and the rotation back together. Moving one point leaves the other points where they are, even when the bounds of the path change. The box around the art is allowed to grow. The anchors you did not touch do not get a new pose out of courtesy.

Node itself is A. Drag points and handles. Shift-click adds a node. A box selects nodes. Drag a segment to move the line. Click a curve to insert a point. Alt-click switches a point between corner and smooth. Alt-drag on a handle breaks symmetry. Delete removes the selected points. Shift on a handle holds it to 45 degrees. Break path is how you get a shape onto that tool on purpose.

Flip follows the same visible-axis rule, and it is worth knowing where the two meet. A dashed rectangle or ellipse becomes a path so the dash can mirror, and undo restores that shape's parameters. Live text is a separate, explicit Object → Convert to path. Break path is the path command. It is aimed at points, on the art, where the stroke already is.

## In the hand

Press R and drag a rectangle. Set a corner radius in Transform if the card needs one. Press V, grab the handle above the box, and rotate until the rectangle sits in the poster. The ink is turned. Transform still has a rectangle.

Press A and look before you drag. The points belong on the corners you can see. Choose Object → Break path if you want that conversion as its own step, then drag a corner. Drag a point first and that drag is the conversion. Either way you are on the path.

The corner you pull moves. The other corners stay. Pull a handle and the curve follows the handle under the cursor. Click a segment and the line moves as a piece. Alt-click a point when a smooth join needs to become a corner. Press Ctrl+Z. Geometry and rotation return together. Ctrl+Shift+Z or Ctrl+Y puts the edit back.

Save. Open the `.oma` again. The points are still on the ink. Clicking the path on the way in adds nothing to the undo stack. You are where you left the real work.

```
R                         Rectangle
V                         Move, then the rotate handle
A                         Node
Object → Break path
Ctrl+Z                    Undo the edit
Ctrl+Shift+Z  or  Ctrl+Y Redo
```

Walk a segment after the break. Click the curve between two points and a new point inserts where you clicked. That insert uses the same displayed path, so a rotated card gets the point on the rotated segment. Delete pulls selected points back off. None of this rebuilds a hidden unrotated copy beside the one you are editing.

If the shape was a star, check Transform before the break and remember the inner radius. After the break that number is the curve. If you still want the star as a star, leave Node alone and keep editing the parameter. Break path is the door out, and you open it when the poster needs a point the star parameter cannot express.

## The edge

Break path spends the parameter shape. After it, you edit points. Corner radius, sides, and inner radius belong to the object you have not converted. The command keeps one object. One conversion, then one undo back to the edit you just made.

Looking is free. Selecting the path writes no history, so a rotated logo can be inspected all afternoon.

Press A, choose Object → Break path, and drag the point that is already sitting on the ink.
