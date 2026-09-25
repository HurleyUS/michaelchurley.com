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

Pathfinder is the five words you already know. Union welds shapes into one. Subtract knocks the front pieces out of the back, or the other way around, depending on which app and which year taught you. You learned to look at stacking order because the order is the operation. Intersect keeps the overlap. XOR, or exclude, keeps the parts that do not overlap. Divide cuts everything into the pieces the overlaps imply, and you ungroup or direct-select the piece you want to delete.

Illustrator puts them on a panel. Affinity puts them on a toolbar and a menu. The failure is the same in both when the selection is sloppy. Two shapes on different layers. A guide included with the artwork. A locked object you thought was in the selection. The operation either grabs the wrong thing or errors in a sentence you have to read twice. Empty intersections should stay empty. A hole should subtract as a hole, not as a filled disk that paints the counter back in.

Rotated art is the quiet bug. The shapes are turned. The boolean runs on the axis-aligned bounds, or on the unrotated geometry, and the overlap you see is not the overlap that gets cut. You undo. You expand. You try again. The operation has to run where the ink actually is.

## The constraint

One undo step per operation. Union is one step. Subtract is one step. You do not get a history entry per fragment, and you do not get a history entry that covers three booleans you have not run yet. Ctrl+Z returns the objects you had before that one command. That is the only way a destructive weld stays safe in a file with no version server sitting behind it.

The objects have to be vectors, two or more, on the same layer. A boolean across layers would also be a reorder, a reparent, and a weld, and one undo would have to describe all of it while the layer list lied about where things lived. Same layer first. You drag rows before you boolean, if the stacking is wrong. Each reorder is its own undo. Then the pathfinder op is its own undo. The steps stay legible.

Stacking order is the order of the operation. The manual does not dress that up with a second rule. You stack the objects the way the cut has to read, then you run the command. Divide produces separate pieces and preserves holes. A window you divide through still has the hole.

Guides and artwork do not mix in one operation. Combine and Pathfinder take either artwork or guides, and they refuse the mixture. A guide is a non-printing contour. Welding it into a logo, or cutting a logo with a guide as if it were ink, would bake a construction line into the mark. If you want to boolean guides, select guides. If you want to boolean the poster, select the poster.

Shape gradients follow the silhouette that results. The gradient hugs the new outline, holes included, which is what a shape gradient is for. An older two-color radial follows the bounds of the result. Edit it in Appearance and it upgrades to the multi-stop format. You opt in by editing.

## What landed

Select two or more vector objects on the same layer. Object → Pathfinder offers Union, Subtract, Intersect, XOR, and Divide.

Union makes one shape from the pile. Subtract uses the stacking order. Intersect keeps what overlaps. XOR keeps what does not. Divide cuts the selection into separate pieces along those overlaps, and holes in the artwork stay holes in the pieces.

Each operation is one undo step. Ctrl+Z restores the objects from before that op. Redo is Ctrl+Shift+Z or Ctrl+Y.

Rotated artwork is processed where it appears on the canvas. The overlap you see is the overlap the cut uses. You do not unrotate, boolean, and rotate back to make the result honest.

An empty intersection stays empty. If the shapes do not overlap, Intersect does not invent a sliver. A hole subtracts area. The counter stays open. Repeated booleans share one geometry path, so the fifth union is the same kind of operation as the first. In 0.5.8 those repeated unions and subtractions remain editable compounds: contours and holes stay editable, double-click with Move or Node, and the node gestures work across the compound. Pathfinder is how you build that. The compound edit is what you do after.

Compound shape and release sit next to this menu as keys. Ctrl+8 combines into a compound. Ctrl+Shift+8 releases it. Group is Ctrl+G and does not combine paths. Ungroup is Ctrl+Shift+G. You use Pathfinder when you want a boolean. You use Ctrl+8 when you want the compound combine. You use Ctrl+G when you want a group. Three different results, three different commands.

Shape gradients follow the resulting silhouette. The new outline, including holes, drives a shape gradient. Older two-color radials follow the resulting bounds until you edit them in Appearance and take the multi-stop upgrade.

## In the hand

Put the objects on one layer. Drag rows if you have to. Drop a row on an insertion line to reorder. Ctrl+[ and Ctrl+] move a selected layer row backward and forward. Add Shift to send it to the back or the front of its group. Click the canvas when you want those brackets to go back to object stacking. Get the order right while they are still separate objects.

Select them with V. Shift-click to add. Choose Object → Pathfinder → Subtract. Look at the hole. If the wrong shape was subtracted, Ctrl+Z, reorder, and run Subtract again. The undo gave you the original objects. The reorder is the next step. The new subtract is the step after that.

Union when the pieces should become one fill. Intersect when you want the lens where two shapes cross. XOR when you want that lens knocked out and the rest kept. Divide when you want the pieces as separate objects so you can delete one and keep the others. After Divide, select the scrap and Delete. Holes that were in the source are still holes in the pieces.

```
Same layer, two or more vectors
Object → Pathfinder → Union
Object → Pathfinder → Subtract
Object → Pathfinder → Intersect
Object → Pathfinder → XOR
Object → Pathfinder → Divide
Ctrl+Z                         That one operation
```

Run another union on the result and a new shape. The hole from the earlier subtract stays. Double-click with V or A when you need a node on one contour. You are in the compound 0.5.8 keeps editable.

If the command refuses the selection, look for a mixture of guides and artwork. Release the guides back to art, or leave them out of the selection. Pathfinder will take a selection of guides, and it will take a selection of artwork. It will not take both at once.

Save. The boolean is in the `.oma`. One undo would still walk the last op off, until you make another edit on top of it.

## The edge

Pathfinder refuses a mixture of artwork and guides. The selection is artwork, or the selection is guides. A construction line left in the selection with a logo stops the operation. Pull the guide out of the selection, or release it, and run the command on one kind of thing.

The objects also have to share a layer, and there have to be two or more of them. An empty intersection stays empty. A hole stays a hole. Each of those results is one undo.

Stack the vectors on one layer, then choose Object → Pathfinder and the operation the stacking order is ready for.
