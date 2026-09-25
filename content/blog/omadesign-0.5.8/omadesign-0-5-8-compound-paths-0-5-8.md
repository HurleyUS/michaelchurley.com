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

A letterform, a donut, a window in a building, a logo with the counter knocked out of the bowl of the mark. You build it with Union and Subtract. In Illustrator the result is a compound path, and you can still direct-select the hole. Sometimes. After enough booleans the compound collapses into a single outline that filled the counter back in, or into a group of scraps you have to reassemble. Affinity's geometry operations have the same cliff. The first subtract looks right. The twentieth union, done because a client added another circle, welds the hole shut or refuses to let you grab the inner contour.

You learn to expand, ungroup, and rebuild. You also learn to keep a hidden copy of the circles off to the side of the artboard, because the boolean result is a dead end. That hidden copy is an apology. The live object should have been the counters.

Double-click to dive inside is the other habit. Illustrator uses it on groups and on clipping sets. You want it on the compound. Select or the node tool, double-click, edit the hole, click out. You should not have to release the compound into twenty pieces, edit one, and combine them again hoping the hole remembers its job.

## The constraint

Repeated booleans have to stay one object with several contours. The hole is data. If each union flattened the silhouette into a single filled outline, the counter would be gone and no undo except the immediate one could bring it back. 0.5.8 keeps the contours. A subtraction followed by a long run of unions still has the hole. The release checks that case: one subtraction, then twenty-four unions, the picture identical after conversion, the hole still there, and the nodes editable with the pointer.

Undo is normal. A point move, an inserted point, a deleted point, a broken contour: each one comes back with Ctrl+Z the way a simple path's edit comes back. A special compound history would mean you learn two undos. You learn one.

Save and reopen have to keep the contours. An `.oma` that wrote a baked fill and dropped the hole on the way to disk would look right until tomorrow. SVG export has to keep the hole too, because the picture you hand someone is part of the test. The release covers native save and reopen, undo and redo, and SVG export, along with node movement, handles, insertion, deletion, and breaking a contour.

Double-click is the door in. Move is the selection tool, V. Node is A. You already know both. The compound does not demand a third tool called Compound Editor. You double-click with the tool you use to select or the tool you use to edit points.

This is the boolean result. A group is a different object, made with Ctrl+G, and it does not fuse contours. The compound is what repeated unions and subtractions produce. You edit the contours in place.

## What landed

Run unions and subtractions more than once and the result is an editable compound path. The holes stay intact. The contours stay independently editable. You can do this across a stack of operations and the counters remain counters.

Double-click with Select or with Node to edit. Select here is Move, V, the tool you already click with. Node is A. Inside the compound, the node edits you know still apply across it. Move points. Pull Bézier handles. Insert a point on a curve. Delete points. Break a contour. Those gestures work on the compound, not only on a path that has a single outline.

Corner radii stay editable after the repeated operations. Node shows corner-radius handles on paths. Alt-drag changes every corner on the path. A Shift-selected set changes together. A compound you have been booleaning does not lose that.

Convert to paths, or double-click with Select or Node, and the contours and holes are still there. You are not punished for leaving the boolean result and going to points. The geometry you see is the geometry you edit.

The release exercise is the one to remember when a file gets large. Subtract, then union two dozen more shapes. The render matches after conversion. The hole remains. You can grab a node with the pointer and move it. That is the floor. A logo with a counter and a pile of extra parts stays a logo with a counter.

Undo and redo are the normal chords. Ctrl+Z, Ctrl+Shift+Z, Ctrl+Y. Save the `.oma`. Open it. The compound is still a compound. Export SVG and the hole is part of the picture you exported.

Groups still exist for art that should move together and stay separate objects. If you wanted a group, you wanted Ctrl+G. If the counters have to be holes in one fill, you wanted the boolean, and 0.5.8 leaves you a compound you can keep editing.

## In the hand

Draw a filled circle with O. Draw a smaller circle on top of it. Select both. They have to be vector objects on the same layer for a Pathfinder op. Choose Object → Pathfinder → Subtract. You get a ring. The hole is the smaller circle.

Draw more shapes that should join the outer contour. Select the ring and the new shapes. Union. Do it again when the next piece arrives. The hole stays. You can keep going. The case worth trusting is a hole that survives a subtraction and then many unions, on the order of a couple of dozen, and still takes a pointer edit.

Press V. Double-click the compound. You are in it. Switch to A if you came in with Move and you need points. Or double-click with A in the first place. Drag a node on the outer contour. The hole stays put. Drag a node on the hole. The outer contour stays put. Click a curve to insert. Select a point and Delete. If a contour needs to open, break it. Ctrl+Z returns that edit. The rest of the compound stays.

Alt-drag a corner-radius handle if the outer shape has corners that should match. The radius edit is the Node tool's, and it still applies once these contours are paths.

```
Object → Pathfinder → Subtract   Knock the hole
Object → Pathfinder → Union      Add, and keep the hole
V or A, double-click             Edit the compound
Drag a node                      That contour moves
Ctrl+Z                           One step back
```

Click out, or select something else, when you are done inside. The compound is one object again in the layer list. Move it with V. It moves as one piece, hole included. Save. Reopen when you want the proof. The counter is still open.

SVG export writes the artwork with that hole. If you are also sending a Lottie later, remember effects and pixel layers have their own limits. The compound's geometry is the Design object you just edited.

## The edge

Further unions refuse to paint the hole shut. The contour you subtracted stays a hole through the repeated booleans that follow. A subtraction plus a long run of unions is still a compound with that hole, and the nodes on it still move.

Release is a different command, Ctrl+Shift+8, for the day you want the contours as separate artwork again. Until you release, double-click and edit. The compound does not make you flatten it to change one point.

Double-click the compound with V or with A, and drag the node on the contour you mean to change.
