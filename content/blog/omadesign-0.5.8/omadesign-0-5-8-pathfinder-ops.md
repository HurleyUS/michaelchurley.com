---
id: T039
title: Pathfinder ops
slug: omadesign-0-5-8-pathfinder-ops
excerpt: Object → Pathfinder runs Union, Subtract, Intersect, XOR, and Divide on two or more vectors on the same layer. Stacking order matters. Each operation is one undo. Holes survive Divide.
publishedAt: 2026-08-29T16:34:47Z
tags: [omadesign, 0.0.0.0alpha-rc, pathfinder]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-pathfinder-ops/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-pathfinder-ops/og.png
---

## The habit

Pathfinder comes down to five operations you already know. Union welds shapes into one. Subtract knocks the front pieces out of the back, or the other way around, depending on which app and which year taught you. You learned to watch the stacking order because the order decides the result. Intersect keeps the overlap. XOR, or exclude, keeps the parts that don't overlap. Divide cuts everything into the pieces the overlaps imply, and then you ungroup or direct-select the piece you want to delete.

Illustrator puts these on a panel. Affinity puts them on a toolbar and a menu. Both fail the same way when the selection is sloppy: two shapes on different layers, a guide selected along with the artwork, or a locked object you thought was selected. The operation either grabs the wrong thing or shows an error you have to read twice. Empty intersections should stay empty. A hole should subtract as a hole, and it shouldn't turn into a filled disk that paints the counter back in.

Rotated art is the bug people miss. The shapes are rotated, but the boolean runs on the axis-aligned bounds or on the unrotated geometry, so the overlap you see isn't the overlap that gets cut. You undo, expand and try again. The operation has to run where the ink actually is.

## The constraint

Each operation is one undo step. Union is one step and Subtract is one step. You don't get a history entry per fragment, and one entry never covers several booleans. Ctrl+Z returns the objects you had before that one command. That is what keeps a destructive weld safe in a file with no version server behind it.

The objects have to be vectors, two or more, on the same layer. A boolean across layers would also be a reorder, a reparent and a weld, and one undo step would have to cover all of that while the layer list showed the objects in the wrong places. So the objects go on one layer first. If the stacking is wrong, drag rows before you run the boolean. Each reorder is its own undo step, and the pathfinder operation is another one, so the history stays easy to follow.

Stacking order is the order of the operation, and the manual doesn't add a second rule on top of that. Stack the objects the way the cut should read, then run the command. Divide produces separate pieces and preserves holes, so a window you divide through still has its hole.

Combine and Pathfinder take either artwork or guides, and they refuse a mix of the two. A guide is a non-printing contour. Welding it into a logo, or cutting a logo with a guide as if it were ink, would bake a construction line into the mark. To run a boolean on guides, select only guides. To run it on the poster, select only the poster.

Shape gradients follow the resulting silhouette. The gradient follows the new outline, holes included, which is the point of a shape gradient. An older two-color radial follows the bounds of the result. If you edit it in Appearance, it upgrades to the multi-stop format. The upgrade only happens when you edit it.

## What landed

Select two or more vector objects on the same layer. Object > Pathfinder offers Union, Subtract, Intersect, XOR and Divide.

Union makes one shape from the selection. Subtract uses the stacking order. Intersect keeps what overlaps and XOR keeps what doesn't. Divide cuts the selection into separate pieces along the overlaps, and holes in the artwork stay holes in the pieces.

Each operation is one undo step. Ctrl+Z restores the objects from before that operation. Redo is Ctrl+Shift+Z or Ctrl+Y.

Omadesign processes rotated artwork where it appears on the canvas, so the overlap you see is the overlap the cut uses. You don't have to unrotate, run the boolean and rotate back to get a correct result.

An empty intersection stays empty. If the shapes don't overlap, Intersect doesn't invent a sliver. A hole subtracts area, so the counter stays open. Repeated booleans share one geometry path, so the fifth union works the same way as the first. As of 0.5.8, those repeated unions and subtractions stay editable compounds. Contours and holes stay editable, you can double-click with Move or Node, and the node gestures work across the compound. You build the compound with Pathfinder and edit it afterward.

As of 0.5.4, compound shape and release sit next to this menu as keys. Ctrl+8 combines objects into a compound and Ctrl+Shift+8 releases it. Group is Ctrl+G and doesn't combine paths. Ungroup is Ctrl+Shift+G. Use Pathfinder for a boolean, Ctrl+8 for a compound and Ctrl+G for a group. Each gives a different result.

The new outline, including holes, drives a shape gradient. Older two-color radials follow the resulting bounds until you edit them in Appearance and take the multi-stop upgrade.

## In the hand

Put the objects on one layer, dragging rows if you need to. Drop a row on an insertion line to reorder it. Ctrl+[ and Ctrl+] move a selected layer row backward and forward, and adding Shift sends it to the back or front of its group. Click the canvas when you want the bracket keys to go back to object stacking. Get the order right while the objects are still separate.

Select them with V, Shift-clicking to add. Choose Object > Pathfinder > Subtract and look at the hole. If the wrong shape was subtracted, press Ctrl+Z, reorder, and run Subtract again. Undo gives you the original objects back, the reorder is the next step, and the new subtract is the one after that.

Use Union when the pieces should become one fill. Use Intersect for the lens where two shapes cross, and XOR to knock that lens out and keep the rest. Use Divide when you want the pieces as separate objects so you can delete one and keep the others. After Divide, select the scrap and press Delete. Holes from the source are still holes in the pieces.

```
Same layer, two or more vectors
Object → Pathfinder → Union
Object → Pathfinder → Subtract
Object → Pathfinder → Intersect
Object → Pathfinder → XOR
Object → Pathfinder → Divide
Ctrl+Z                         That one operation
```

Run another union on the result and a new shape, and the hole from the earlier subtract stays. When you need a node on one contour, double-click with V or A. That puts you inside the compound, which 0.5.8 keeps editable.

If the command refuses the selection, check for a mix of guides and artwork. Release the guides back to art, or leave them out of the selection. Pathfinder accepts a selection of guides or a selection of artwork, but not both at once.

Save, and the boolean is in the `.oma`. Undo can still take back the last operation until you make another edit on top of it.

## The edge

Pathfinder refuses a mix of artwork and guides. A construction line left in the selection with a logo stops the operation. Take the guide out of the selection, or release it, and run the command on one kind of object.

The objects also have to share a layer, and you need at least two. An empty intersection stays empty, a hole stays a hole, and each result is one undo step.
