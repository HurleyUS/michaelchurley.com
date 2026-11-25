---
id: T030
title: Shape tools
slug: omadesign-0-5-8-shape-tools
excerpt: Rectangle R, ellipse O, polygon Y, star S, and line L drag on like any shape tool you already know. Shift constrains. Radius, sides, and inner radius stay in Transform until you edit nodes.
tags: [omadesign, 0.5.8, shapes]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-shape-tools/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-shape-tools/og.png
---

## The habit

Most of a poster is a rectangle behind the type, an ellipse behind a portrait crop, a polygon used as a badge, a star used once, and a line used as a rule. In Illustrator and Affinity you hit a shape key, you drag, you hold Shift for a square or a circle, and you set the corner radius after, as a number, because dragging a tiny corner widget is a bad way to hit a spec.

You also know the moment the shape dies. You needed one corner different from the other three, or you needed to pull a single point on a polygon, and the object became anchors. That is fine when you meant it. It is a mess when the tool converted on the way in and the side count is now a pile of points you have to count by hand.

Lines are the sleeper. A line is one drag, with Shift when it has to be straight.

Drawing from the center is the other hand. Alt while you drag, in Illustrator and in Affinity, grows the shape around the point you started. You use it when the shape has to sit on a guide intersection or on the middle of a photo. Shift and Alt together are the whole sentence: from the center, equal proportions.

## The constraint

These five tools write parameter shapes into the `.oma`. The parameters are the editable fact. A rectangle remembers its corner radius. A polygon remembers how many sides it has. A star remembers its inner radius. Those numbers live in Transform so you can change them after the drag, with the keyboard, at the size the poster actually needs. If the drag expanded them into anchors immediately, Transform would be a readout of a path you can no longer drive with a number, and every "make it 12 sides" would be a redraw.

The conversion to points waits. Shapes become a path the first time you edit them with the node tool, or when you choose Object → Break path. Until then, scale and rotation through Move, including Free transform with Ctrl+T, keep the parameters. You can rotate a live rounded rectangle and still edit the radius. That only works if rotation and the shape parameters are allowed to coexist in one object. They are.

Shift is the same constraint you use everywhere else: horizontal, vertical, or 45 degrees, and for these tools it is also the equal-proportion hold. Alt draws from the center. The manual states both in one place, next to the rest of the modifier language, so a shape drag does not invent a third way to say "regular" or "from the middle."

One undo step covers the creation. A bad ellipse is Ctrl+Z. You are back to the empty canvas where that drag started.

## What landed

Press R for a rectangle, O for an ellipse, Y for a polygon, S for a star, L for a line. Drag to create. Shift constrains the drag. Corner radius, sides, and inner radius live in Transform after the shape exists. You change the number there. The shape updates.

Hold Alt to draw from the center. Hold Shift for equal proportions. The two combine. A circle built on the middle of a selection is Alt+Shift and the ellipse tool. A square from the center is the same chord on the rectangle.

Corner dots on a rectangle, with Move, round the rectangle as a gesture. The number still ends up as the corner radius you can read. You use the dots when your eye is ahead of your keyboard, and Transform when the radius has to match a spec.

Ellipses convert to four smooth anchors when they become paths. Until you need those anchors, an ellipse is an ellipse. Node corner-radius handles show up with the Node tool, including on paths, once you are in points. While the object is still a parameter shape, you stay in Transform.

Polygons and stars keep their counts and radii as parameters. A badge that has to go from six sides to eight is a change in Transform, not a reconstruction. A star that is too sharp gets a larger inner radius the same way.

Lines are L. Drag. Shift keeps the line on the allowed angles. A line takes a stroke. Open paths use a centered stroke, and a line is open. Widths above 64 pixels are legal in the stroke field. Inside, center, and outside placement apply to closed paths. A heavy rule is a wide stroke on that line.

S is the star, and also the last letter of the save chord. Star is S alone. Save is Ctrl+S. If a save dialog appears, you were holding Ctrl.

O is the ellipse. The artboard is Shift+O. If you get a board when you wanted a circle, the Shift was down.

Move is V. Click the shape, drag it, scale from the eight handles, rotate from the handle above the box. Shift constrains the move. Alt-drag clones. Shift-click adds or removes an object from the selection. The shape tools create. Move arranges. The parameters survive that arrangement.

## In the hand

Press R. Hold Shift. Drag a square behind the headline. Release. Click the corner radius in Transform and type the radius the grid wants. Press V and move the square into place. Hold Shift if the move has to stay horizontal.

Press O. Hold Alt and Shift together. Drag from the center of a portrait until the circle crops the way you want. The ellipse stays an ellipse. You can still change it after the drag because you have not touched Node.

Press Y. Drag a polygon. Set the side count in Transform. Press S if the badge should be a star instead, drag, and set the inner radius in Transform. Keep both if you are comparing. Delete the one you do not want. Each create was one undo, so you can also Ctrl+Z the star away and be back on the polygon.

Press L. Hold Shift. Drag a horizontal rule under the deck. Set the stroke width. Leave the fill alone or clear it. X swaps fill and stroke if the color landed on the wrong chip. D restores defaults.

When one corner of the rectangle has to differ, press A, or choose Object → Break path, and accept that you are leaving the parameter. Do that last, after the shared radius is right.

```
R          Rectangle
O          Ellipse
Y          Polygon
S          Star
L          Line
Shift      Constrain, equal proportions
Alt        Draw from the center
Transform  Corner radius, sides, inner radius
Ctrl+T     Free transform, parameters stay
A          Nodes, and the shape converts on the edit
```

Ctrl+S saves the `.oma` when the shapes are right. The parameters save with the objects. Open the file next week and the corner radius is still a number.

## The edge

The shape tools refuse to expand on the way in. You get a parameter shape. Corner radius, sides, and inner radius stay in Transform. Nodes arrive when you edit with A, or when you choose Object → Break path. Free transform will scale and rotate without taking that choice away.

Alt draws from the center. Shift keeps equal proportions. A drag with neither is a free rectangle, ellipse, polygon, star, or line from the corner you started.

Press R, hold Shift, and set the corner radius in Transform while it is still a number.
