---
id: T041
title: Expand stroke
slug: omadesign-0-5-8-expand-stroke
excerpt: Object → Expand stroke to outline turns the visible stroke into filled geometry, including caps, joins, and dashes. The fill you already had stays beneath. Compound outlines keep their holes.
tags: [omadesign, 0.5.8, strokes]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-expand-stroke/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-expand-stroke/og.png
---

## The habit

Expand Stroke is the command you run at the end, when a vendor, a cutter, or a decade-old RIP needs fills and will not stroke a path. In Illustrator it is Object → Path → Outline Stroke. Affinity has an equivalent expand. The stroke width, the cap, the join, and the dash pattern become shapes. A round cap becomes a round end. A miter becomes a point. A dashed line becomes a row of filled marks. You do this once, late, because after it the width is no longer a number you can type.

The bug you remember is the fill. Outline Stroke in a hurry replaces the object with the outline and the fill you wanted is gone, or the outline arrives and the fill is a separate object you did not ask to manage. The correct result keeps the fill where it was and puts the new outline geometry with it. The stroke you saw is the geometry you get. A heavier stroke becomes a heavier shape. An inside stroke on a closed path becomes the band inside the path. An outside stroke becomes the band outside it.

Dashes are the test. A dashed rounded rectangle, rotated, should outline into pieces that sit where the dashes sat, not into a solid band with the dash painted on as a lie. Rotation has to be respected. The pieces land on the ink.

Compound strokes are the other test. A ring with a hole, stroked, outlines into a compound. The hole stays. If you need to nudge the inner and outer contours together, you want a reshape that moves them as a set, not a node drag that tears one side of the ring.

## The constraint

The visible stroke is the only honest source. Omadesign already stores width, and on a closed path it stores inside, center, or outside placement. Open paths use a centered stroke. Widths above 64 pixels are allowed. Expand reads that visible result, including caps, joins, and dashes, and writes filled geometry. A second approximation, "width times two, rectangle along the path," would miss miters and dashes and would disagree with the canvas you approved.

The existing fill stays beneath the new outline. One object relationship, one command. You do not lose the fill and then paste it back from a hidden copy. The outline is the stroke, promoted. The fill is the fill, left in place under it. Undo of the command returns the stroke, which is why you can expand late and still walk back if the vendor's requirement was a rumor.

Layer order is respected. The new geometry does not leap to the top of the document or sink under an unrelated layer. It stays where that object's stroke was, in the stack you were looking at.

Compound outlines keep their holes. A stroked counter that became a filled disk would be a different logo. Reshape is how those contours move together after the expand. The expand itself does not invent a live stroke on top of the outlines. The stroke is the geometry now.

One `.oma`. The outlined result saves in the project. You are not required to outline a copy in Illustrator and place the SVG back. If you still want the live stroke, you undo, or you duplicate before you expand and keep the duplicate with its stroke.

## What landed

Select the stroked artwork. Choose Object → Expand stroke to outline.

The visible stroke becomes filled geometry. Caps are in that geometry. Joins are in it. Dashes are in it. A dashed stroke becomes the dash shapes you were looking at, not a continuous ribbon. Rotation is respected, so a turned path outlines where it appears. The layer order you had is the layer order of the result.

The fill that was already on the object stays in place, beneath the new outline. A filled circle with a heavy stroke becomes the fill you had, with the stroke's band as filled geometry along it. You can still select and recolor those pieces after the command. What you cannot do is type a new stroke width and expect the band to grow. The width was consumed into the shape of the fill.

Compound outlines retain their holes. A compound path with a stroke keeps the counters in the outlined result. To move those contours together, use Object → Reshape. Distort, skew, perspective, and the warp mesh operate on the vector artwork, and a reshape moves the outlined contours as a set instead of leaving you to drag one side of a ring and hope the other side follows. The first reshape handle you move will convert remaining parameter shapes and live text, which is a different decision. On an outline you just made, you are already in geometry.

Closed paths remember inside, center, and outside in the stroke you see, so the outline matches that placement. Open paths were centered, so their outline is the centered band. A line you drew with L, given a 40 pixel stroke, outlines as a 40 pixel band along that line, caps included.

Pathfinder welds areas. Expand stroke promotes the stroke. Run the outline when the silhouette is final and the file has to be fills.

## In the hand

Draw a rounded rectangle. Give it a fill and a dashed stroke. Rotate it with the top handle so you can see that placement matters. Choose Object → Expand stroke to outline.

Look at the dashes. They should sit on the rotated corners where the dashes were. Look under them. The fill is still there, beneath the new outline. The stroke you saw is filled geometry now. The interior you had was not discarded to make room for it.

Press Ctrl+Z. The stroke is a stroke again. The dash field is back. Change the width. Expand again if the new width is the one you want committed.

Try a compound. Subtract a hole from a shape, give the result a stroke, and expand. The hole remains. If the inner and outer bands need to shift together, choose Object → Reshape → Distort, or whichever mode matches the shift, and move the cage. Esc cancels a bad drag. Enter finishes. Each completed drag is one undo.

```
Object → Expand stroke to outline
Fill                         Stays beneath the new geometry
Caps, joins, dashes          Become the filled shapes you saw
Compound holes               Stay open
Object → Reshape             Move outlined contours together
Ctrl+Z                       The stroke returns
```

Duplicate first, Super+D, when you need both a live stroke and an outline in the same file. Expand the copy. The original keeps its width field. Duplication stays in place, so the copy sits on the original until you move it.

Save. The outlined geometry is ordinary vector in the `.oma`. SVG export will see fills. A shop that rejects strokes can take the export. You still have the project if the live stroke has to come back from an undo you have not overwritten, or from the duplicate you kept.

## The edge

Expand refuses to throw away the fill. Existing fills stay beneath the new outline. The stroke becomes filled geometry on top of that relationship. You do not rebuild the interior from memory after the command.

Compound outlines refuse to fill their holes. The counters stay. Reshape is how you move those contours together. A single-node nudge is the wrong tool when the ring has to stay a ring.

Choose Object → Expand stroke to outline when the stroke you can see is the shape you need to keep.
