---
id: T026
title: Flip horizontal vertical
slug: omadesign-0-5-8-flip-horizontal-vertical
excerpt: Flip horizontal and Flip vertical mirror across the canvas axes you can see, rotation included. Undo restores the art. Live text needs Convert to path first.
publishedAt: 2026-09-07T19:11:26Z
tags: [omadesign, 0.0.4-alpha, vectors]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-flip-horizontal-vertical/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-flip-horizontal-vertical/og.png
---

## The habit

Flip is one of the oldest commands in vector apps. Illustrator puts Flip Horizontal and Flip Vertical on the Transform panel and the right-click menu. Affinity has them on the menu you reach for when a logo faces the wrong way. Photoshop flips a layer or a selection from Image or from Free Transform. The job is always the same. The mark points left, the layout needs it pointing right, and you don't want to redraw it.

What usually goes wrong is the axis. Say you rotated a wordmark twelve degrees to sit on a diagonal rule, then flipped it. A lot of software mirrors the object in its own local box, or mirrors the unrotated geometry, and the angle comes out inverted in a way you didn't ask for. Gradients slide off the stroke. A dashed border mirrors inside its bounding box and the dashes land on the wrong side of the corner. Uneven corner radii swap in local space, so the heavy corner ends up on the wrong visual edge.

Type is the other problem. Flip a live text frame and the letters either refuse or turn into something you can't retype. Maybe you wanted a mirrored outline for a foil stamp and an editable headline on the unstamped version. Those are two different objects, and the usual workaround is to duplicate first and hope you remember which copy is still text.

## The constraint

One `.oma` holds the poster, and one undo step has to put the whole flip back: the geometry, the angle you already applied, a linear gradient, a dashed stroke, and the individual corner radii on a rectangle. If the flip rewrote a hidden unrotated copy and left the on-screen angle alone, undo would restore the wrong picture.

The axes are the canvas axes you can see. Horizontal means left and right on the page, and vertical means top and bottom on the page. A rotated path doesn't get its own private horizon. The same rule keeps node handles on the visible artwork and keeps the mirror there too. Otherwise the file would hold two orientations and the screen would have to pick one.

Live text stays text until you say otherwise. If a flip silently turned every headline into outlines, it would break what the Type tool is for, and undo would be the only way back to the words. So conversion is a separate command with its own undo, and mirroring letterforms is a choice you make on purpose.

Locked and hidden objects are out of reach. You took them off the table, so the flip leaves them alone.

## What landed

Right-click the artwork or its object row and choose Flip horizontal or Flip vertical. Flip horizontal mirrors left and right. Flip vertical mirrors top and bottom. The same two commands are under Object. As of 0.5.5, they're also in the right-hand inspector, next to Arrange and Align, so you can flip without changing your selection.

The flip follows the visible canvas axes after rotation. A card at fifteen degrees mirrors across the page, and the fifteen degrees stay part of what you see. Linear gradients, dashed strokes and individual rectangle corners mirror with the art, so the heavy corner stays on the visual corner you meant.

Dashed rectangles and dashed ellipses become paths when you flip them. A dash pattern is a placement along the outline, and a parameter shape can't always mirror that placement and stay the same parameter shape. Converting to a path puts the dashes on the mirrored outline. Undo restores the original shape in one step, dash and all.

Right-click follows the selection you have. Right-click an object outside the selection and that object is the target. Right-click a member of the current selection and the whole selection flips, so aiming at one piece doesn't drop the rest.

Locked and hidden objects are left alone.

Live text doesn't flip in place. Choose Object > Convert to path first. The conversion keeps the letter outlines and the holes inside letters such as a, e, o and 8, and it replaces the editable text. Undo brings the text back. Once the outlines exist, Flip horizontal or Flip vertical mirrors them like any other path, and the holes stay holes.

Undoing the flip restores the artwork, gradient included. You don't rebuild anything by hand.

## In the hand

Select the wordmark with V. If it's still live text and you need a mirrored outline, choose Object > Convert to path first. Check a counter, like the inside of an o, to confirm the hole is still open. If you converted too early, press Ctrl+Z and the words come back.

With the path selected, right-click it on the canvas and choose Flip horizontal. The mark now faces the other way across the page. If the path was rotated, the tilt you see is mirrored on the canvas axis. For top to bottom, use Flip V in the inspector (0.5.5 and later) or the Object menu. All three run the same flip.

Next, try a dashed rounded rectangle. Rotate it, then right-click its row in the layer list instead of the canvas, and choose Flip horizontal. The dashes move to the mirrored side and the corner weights follow. Press Ctrl+Z and the rectangle's parameters come back, dash included.

To test the selection rule, Shift-click two icons and right-click one of them. Both flip. Click empty canvas, select a third icon alone and right-click it. The pair you flipped stays as it was.

```
V                              Select
Object → Convert to path       Live text, before a flip
Right-click → Flip horizontal  Left / right on the canvas
Right-click → Flip vertical    Top / bottom on the canvas
Ctrl+Z                         Restore
```

A linear gradient on a rotated card flips with the card. The light and dark ends trade places across the page axis and stay on the object. If that's wrong for the poster, one Ctrl+Z restores the gradient and the geometry together.

## The edge

Flip refuses live text. It won't turn letters into outlines as a side effect. Object > Convert to path is the way through. It keeps the counters, removes editing, and undo gives the text back. After that, flip works on the outlines.

Locked and hidden objects stay out, even when the flip is aimed near them.
