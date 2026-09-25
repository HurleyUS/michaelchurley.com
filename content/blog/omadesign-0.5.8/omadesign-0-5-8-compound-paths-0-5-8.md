---
id: T038
title: Compound paths 0.5.8
slug: omadesign-0-5-8-compound-paths-0-5-8
excerpt: In 0.5.8, repeated unions and subtractions stay editable compound paths. Holes stay holes. Double-click with Move or Node and you can move points, pull handles, insert, delete, and break a contour.
publishedAt: 2026-09-22T11:30:56Z
tags: [omadesign, 0.5.8, paths]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-compound-paths-0-5-8/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-compound-paths-0-5-8/og.png
---

## The habit

A letterform, a donut, a window in a building, a logo with the counter knocked out of the bowl of the mark: you build all of these with Union and Subtract. In Illustrator the result is a compound path, and sometimes you can still direct-select the hole. After enough booleans, though, the compound can collapse into a single outline that fills the counter back in, or into a group of scraps you have to reassemble. Affinity's geometry operations hit the same wall. The first subtract looks right, and the twentieth union, added because a client wanted another circle, welds the hole shut or won't let you grab the inner contour.

So you learn to expand, ungroup, and rebuild. You also learn to keep a hidden copy of the circles off to the side of the artboard, because the boolean result can't be edited further. That hidden copy is a workaround. The live object should have kept the counters.

The other habit is double-clicking to go inside. Illustrator does this on groups and clipping sets, and you want it on compounds too: select with Move or Node, double-click, edit the hole, click out. You shouldn't have to release the compound into twenty pieces, edit one, and combine them again hoping the hole survives.

## The constraint

Repeated booleans have to stay one object with several contours, and the hole has to be stored as data. If each union flattened the silhouette into a single filled outline, the counter would be gone, and only an immediate undo could bring it back. 0.5.8 keeps the contours, so a subtraction followed by a long run of unions still has its hole. The release tests that case: one subtraction, then twenty-four unions, with the picture identical after conversion, the hole still present, and the nodes editable with the pointer.

Undo works normally. A point move, an inserted point, a deleted point, and a broken contour each come back with Ctrl+Z, the same as edits on a simple path. There is no separate compound history to learn.

Save and reopen have to keep the contours. An `.oma` that wrote a baked fill and dropped the hole on the way to disk would look fine until the next day. SVG export has to keep the hole too, because the file you hand someone is part of the test. The release covers native save and reopen, undo and redo, and SVG export, along with moving nodes, pulling handles, inserting, deleting, and breaking a contour.

Double-click is how you get inside. Move is the selection tool (V) and Node is A, and you already know both. There is no third tool for editing compounds. You double-click with the tool you select with or the tool you edit points with.

This applies to boolean results. A group is a different object, made with Ctrl+G, and it doesn't fuse contours. Repeated unions and subtractions produce a compound, and you edit its contours in place.

## What landed

Run unions and subtractions more than once and the result is an editable compound path. The holes stay intact and each contour stays independently editable, so the counters survive a whole stack of operations.

Double-click with Select or Node to edit. Select here means Move (V), the tool you already click with, and Node is A. Inside the compound, the usual node edits apply across all contours. You can move points, pull Bézier handles, insert a point on a curve, delete points, and break a contour, on a compound as well as on a single-outline path.

Corner radii stay editable after repeated operations. Node shows corner-radius handles on paths. Alt-drag changes every corner on the path, and a Shift-selected set changes together. A compound built from many booleans keeps that ability.

After Convert to paths, or after double-clicking with Select or Node, the contours and holes are still there. Leaving the boolean result and working with points costs you nothing. You edit exactly the geometry you see.

The release test is worth remembering when a file gets large. Subtract, then union two dozen more shapes, and the render still matches after conversion, the hole remains, and you can grab a node with the pointer and move it. That is the minimum guarantee: a logo with a counter and a pile of extra parts stays a logo with a counter.

Undo and redo use the normal chords: Ctrl+Z, Ctrl+Shift+Z, and Ctrl+Y. Save the `.oma` and open it again, and the compound is still a compound. Export SVG and the hole is part of the exported picture.

Groups still exist for art that should move together as separate objects, and for that you use Ctrl+G. If the counters have to be holes in one fill, you want the boolean, and 0.5.8 gives you a compound you can keep editing.

## In the hand

Draw a filled circle with O, draw a smaller circle on top of it, and select both. They have to be vector objects on the same layer for a Pathfinder operation. Choose Object > Pathfinder > Subtract. You get a ring, and the hole is the smaller circle.

Draw more shapes that should join the outer contour, select the ring and the new shapes, and Union. Do it again when the next piece arrives. The hole stays, and you can keep going. The tested case is a hole that survives a subtraction followed by a couple of dozen unions and still accepts a pointer edit.

Press V and double-click the compound to go inside. Switch to A if you came in with Move and need points, or double-click with A to begin with. Drag a node on the outer contour and the hole stays put. Drag a node on the hole and the outer contour stays put. Click a curve to insert a point, or select a point and press Delete. If a contour needs to open, break it. Ctrl+Z reverts that one edit and leaves the rest of the compound alone.

Alt-drag a corner-radius handle if the outer shape has corners that should match. The radius edit belongs to the Node tool, and it still works once these contours are paths.

```
Object → Pathfinder → Subtract   Knock the hole
Object → Pathfinder → Union      Add, and keep the hole
V or A, double-click             Edit the compound
Drag a node                      That contour moves
Ctrl+Z                           One step back
```

Click out, or select something else, when you are done inside. The compound is one object again in the layer list, and moving it with V moves it as one piece, hole included. Save, and reopen if you want to check. The counter is still open.

SVG export writes the artwork with the hole. If you are also sending a Lottie later, remember that effects and pixel layers have their own limits there. The compound's geometry is the Design object you just edited.

## The edge

Further unions won't fill the hole. The contour you subtracted stays a hole through every boolean that follows, and its nodes still move.

Release is a separate command, Ctrl+Shift+8, for when you want the contours as separate artwork again. Until then, you can double-click and edit, and you never have to flatten the compound to change one point.
