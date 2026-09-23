---
id: T026
title: Flip horizontal vertical
slug: omadesign-0-5-8-flip-horizontal-vertical
excerpt: Flip horizontal and Flip vertical mirror across the canvas axes you can see, rotation included. Undo restores the art. Live text needs Convert to path first.
tags: [omadesign, 0.5.8, vectors]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-flip-horizontal-vertical/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-flip-horizontal-vertical/og.png
---

## The habit

Flip is one of the oldest gestures in the vector apps. Illustrator puts Flip Horizontal and Flip Vertical on the Transform panel and on the right-click menu. Affinity puts them on the same menu you use when a logo faces the wrong way. Photoshop flips a layer or a selection from Image or from Free Transform. The hand already knows the job. The mark points left. The layout needs it pointing right. You do not redraw it.

The part that goes wrong is the axis. You rotated the wordmark twelve degrees so it would sit on a diagonal rule. Then you flip it. A lot of software mirrors the object in its own local box, or mirrors the unrotated geometry and leaves the angle looking inverted in a way you did not order. Gradients slide off the stroke. A dashed border mirrors in the bounding box and the dashes land on the wrong side of the corner. Uneven corner radii swap in local space and the heavy corner is suddenly on the wrong visual edge.

The other failure is type. You flip a live text frame and the letters either refuse, or they turn into something you can no longer retype. You wanted a mirrored outline for a foil stamp. You still wanted the headline editable on the version that is not stamped. Those are two different objects, and the habit has been to duplicate first and hope you remember which copy is still text.

## The constraint

One `.oma` holds the poster. One undo step has to put the whole flip back: geometry, the angle you already applied, a linear gradient, a dashed stroke, the individual corner radii on a rectangle. If the flip rewrote a hidden unrotated copy and left the on-screen angle alone, undo would restore the wrong picture.

The axes are the canvas axes you can see. Horizontal means left and right on the page. Vertical means top and bottom on the page. A rotated path does not get a private horizon. The same rule that keeps node handles on the visible artwork keeps the mirror on the visible artwork. Otherwise the file contains two orientations and the screen has to pick one.

Live text stays text until you say otherwise. A flip that silently converted every headline into outlines would destroy the thing the Type tool is for, and the single undo step would be the only way back to the words. The conversion is a separate command, with its own undo, so a mirror of letterforms is a decision you can see yourself make.

Locked objects and hidden objects are out of reach. A flip that grabbed them anyway would change art you had already taken off the table. The command has to leave them alone.

## What landed

Right-click the artwork, or right-click its object row, and choose Flip horizontal or Flip vertical. Flip horizontal is left and right. Flip vertical is top and bottom. The same two commands live under Object and in the inspector. Arrange, Align, Flip H, and Flip V sit in that right-hand inspector, so you can run the mirror without leaving the selection you already have.

The flip follows the visible canvas axes after rotation. A card at fifteen degrees mirrors across the page, and the fifteen degrees stay part of the result you see. Linear gradients mirror with the art. Dashed strokes mirror. Individual rectangle corners mirror, so the heavy corner stays on the visual corner you intended after the flip.

Dashed rectangles and dashed ellipses become paths. A dash pattern is a placement along the outline, and a parameter shape cannot always mirror that placement and still be the same parameter shape. The conversion is there so the dashes land on the mirrored outline. Undo restores the original shape parameters. You get the rectangle back, dash and all, in one step.

Right-click behavior follows the selection you actually have. Right-click another object and that object is the target. Right-click a member that is already inside the selection and the whole selection flips. You do not lose a multi-selection because you aimed at one of its pieces.

Locked and hidden objects are left alone.

Live text does not flip in place. Choose Object → Convert to path first. That conversion keeps the letter outlines and the holes inside letters such as a, e, o, and 8. It replaces editable text. Undo restores the text. After the outlines exist, Flip horizontal or Flip vertical mirrors them like any other path. The holes stay holes.

Undo of the flip itself restores the artwork. You do not rebuild the gradient by hand.

## In the hand

Select the wordmark with V. If it is still live text and you need a mirrored outline, choose Object → Convert to path before anything else. Look at a counter, the inside of an o, and confirm the hole is still open. Press Ctrl+Z if you converted too early. The words come back.

With the path selected, right-click it on the canvas. Choose Flip horizontal. The mark faces the other way across the page. If the path was rotated, the tilt is still the tilt you see, mirrored on the canvas axis. Open the inspector and hit Flip V if the job was top to bottom. Or use the Object menu. The three entrances run the same flip.

Now a dashed rounded rectangle. Rotate it first. Right-click the object row in the layer list, not the canvas, and choose Flip horizontal. The dashes move to the mirrored side. The corner weights follow. Press Ctrl+Z. The rectangle's parameters come back, including the dash, because undo restores that shape.

Try the selection rule. Shift-click two icons so both are selected. Right-click one of them. Both flip. Click empty canvas, select a third icon alone, right-click that one. The pair you flipped stays where you left it.

```
V                              Select
Object → Convert to path       Live text, before a flip
Right-click → Flip horizontal  Left / right on the canvas
Right-click → Flip vertical    Top / bottom on the canvas
Ctrl+Z                         Restore
```

A linear gradient on the rotated card flips with the card. You should see the light end and the dark end trade places across the page axis, staying on the object. If that is wrong for the poster, Ctrl+Z is the whole gradient as well as the geometry.

## The edge

Flip refuses live text. The letters stay editable, and the command will not turn them into outlines as a side effect of a mirror. Object → Convert to path is the door. It keeps counters, it removes editing, and undo gives the text back. After that, flip works on the outlines.

Locked and hidden objects stay out. A flip aimed near them does not drag them into the mirror.

Right-click the artwork or the object row, choose Flip horizontal or Flip vertical, and press Ctrl+Z if the axis was the wrong one.
