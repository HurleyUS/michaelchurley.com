---
id: T041
title: Expand stroke
slug: omadesign-0-5-8-expand-stroke
excerpt: Object → Expand stroke to outline turns the visible stroke into filled geometry, including caps, joins, and dashes. The fill you already had stays beneath. Compound outlines keep their holes.
publishedAt: 2026-09-06T10:34:01Z
tags: [omadesign, 0.0.1-alpha, strokes]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-expand-stroke/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-expand-stroke/og.png
---

## The habit

Expand Stroke is the command you run at the end, when a vendor, a cutter, or a decade-old RIP needs fills and won't stroke a path. In Illustrator it is Object > Path > Outline Stroke, and Affinity has an equivalent expand. The stroke width, cap, join, and dash pattern become shapes. A round cap becomes a round end, a miter becomes a point, and a dashed line becomes a row of filled marks. You do this once, late, because afterward the width is no longer a number you can type.

The bug people remember involves the fill. A rushed Outline Stroke replaces the object with the outline and the fill you wanted is gone, or the outline arrives and the fill becomes a separate object you never asked to manage. The correct result keeps the fill where it was and adds the new outline geometry with it, matching the stroke you saw. A heavier stroke becomes a heavier shape. An inside stroke on a closed path becomes the band inside the path, and an outside stroke becomes the band outside it.

Dashes are the first test. A dashed, rotated rounded rectangle should outline into pieces that sit exactly where the dashes were, instead of a solid band with the dashes faked on top. Rotation has to be respected so the pieces land on the visible stroke.

Compound strokes are the second test. A stroked ring with a hole should outline into a compound, and the hole should stay. If you then need to nudge the inner and outer contours together, you want a reshape that moves them as a set, because a node drag would tear one side of the ring.

## The constraint

The visible stroke is the only reliable source. Omadesign already stores the width, and on a closed path it also stores inside, center, or outside placement. Open paths use a centered stroke. Widths above 64 pixels are allowed. Expand reads that visible result, including caps, joins, and dashes, and writes filled geometry. A cruder approximation, such as twice the width as a rectangle along the path, would miss miters and dashes and wouldn't match the canvas you approved.

The existing fill stays beneath the new outline, all in one command. You never lose the fill and have to paste it back from a hidden copy. The stroke becomes an outline and the fill stays in place under it. Undoing the command brings the stroke back, so you can expand late and still reverse it if the vendor's requirement turns out to be wrong.

Layer order is respected. The new geometry doesn't jump to the top of the document or sink under an unrelated layer. It stays where the object's stroke was in the stack.

Compound outlines keep their holes, because a stroked counter that turned into a filled disk would be a different logo. Reshape moves those contours together after the expand. The expand doesn't add a live stroke on top of the outlines, because the stroke is now geometry.

It all happens in one `.oma`, and the outlined result saves in the project. You don't need to outline a copy in Illustrator and place the SVG back. If you still want the live stroke, undo, or duplicate before expanding and keep the duplicate with its stroke.

## What landed

Select the stroked artwork and choose Object > Expand stroke to outline.

The visible stroke becomes filled geometry, including caps, joins, and dashes. A dashed stroke becomes the dash shapes you were looking at, with no continuous ribbon underneath. Rotation is respected, so a rotated path outlines where it appears, and the result keeps the layer order you had.

The fill already on the object stays in place beneath the new outline. A filled circle with a heavy stroke becomes the same fill with the stroke's band as filled geometry around it. You can still select and recolor those pieces after the command. You can't type a new stroke width and expect the band to grow, because the width has become part of the shape.

Compound outlines keep their holes, so a stroked compound path keeps its counters in the outlined result. To move those contours together, use Object > Reshape. Distort, skew, perspective, and the warp mesh all operate on vector artwork, and a reshape moves the outlined contours as a set, so you never have to drag one side of a ring and hope the other follows. The first reshape handle you move converts any remaining parameter shapes and live text, which is a separate decision. An outline you just made is already plain geometry.

Closed paths store inside, center, or outside placement in the stroke you see, and the outline matches that placement. Open paths use a centered stroke, so their outline is a centered band. A line drawn with L and given a 40 pixel stroke outlines as a 40 pixel band along that line, caps included.

Pathfinder welds areas together, while Expand stroke turns the stroke into a shape. Run the outline when the silhouette is final and the file has to be all fills.

## In the hand

Draw a rounded rectangle, give it a fill and a dashed stroke, and rotate it with the top handle so you can see that placement matters. Choose Object > Expand stroke to outline.

Look at the dashes. They should sit on the rotated corners where the dashes were. Look underneath and the fill is still there, beneath the new outline. The stroke is now filled geometry, and the interior wasn't discarded to make room for it.

Press Ctrl+Z. The stroke is a stroke again and the dash field is back. Change the width, and expand again if you want to commit the new width.

Now try a compound. Subtract a hole from a shape, give the result a stroke, and expand. The hole remains. If the inner and outer bands need to shift together, choose Object > Reshape > Distort, or whichever mode fits the change, and move the cage. Esc cancels a bad drag and Enter finishes. Each completed drag is one undo.

```
Object → Expand stroke to outline
Fill                         Stays beneath the new geometry
Caps, joins, dashes          Become the filled shapes you saw
Compound holes               Stay open
Object → Reshape             Move outlined contours together
Ctrl+Z                       The stroke returns
```

When you need both a live stroke and an outline in the same file, duplicate first with Super+D and expand the copy. The original keeps its width field. The duplicate lands in place on top of the original until you move it.

Save. The outlined geometry is ordinary vector data in the `.oma`, and SVG export sees fills, so a shop that rejects strokes can take the export. You can still get the live stroke back from an undo you haven't overwritten, or from the duplicate you kept.

## The edge

Expand never throws away the fill. Existing fills stay beneath the new outline, and the stroke becomes filled geometry on top, so you never rebuild the interior from memory.

Compound outlines never fill their holes. The counters stay, and Reshape is the way to move those contours together. A single-node nudge is the wrong tool when the ring has to stay a ring.
