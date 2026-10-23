---
id: T030
title: Shape tools
slug: omadesign-0-5-8-shape-tools
excerpt: Rectangle R, ellipse O, polygon Y, star S, and line L drag on like any shape tool you already know. Shift constrains. Radius, sides, and inner radius stay in Transform until you edit nodes.
publishedAt: 2026-08-29T16:30:47Z
tags: [omadesign, 0.0.0.0alpha-rc, shapes]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-shape-tools/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-shape-tools/og.png
---

## The habit

Most of a poster is a rectangle behind the type, an ellipse behind a portrait crop, a polygon used as a badge, a star used once and a line used as a rule. In Illustrator and Affinity you press a shape key, drag, hold Shift for a square or a circle, and set the corner radius afterward as a number, because dragging a tiny corner widget is a bad way to hit a spec.

You also know the moment the shape stops being a shape. You needed one corner different from the other three, or you needed to pull a single point on a polygon, so the object became anchors. That is fine when you meant it. It is a mess when the tool converted on creation and the side count is now a pile of points you have to count by hand.

Lines are easy to overlook. A line is one drag, with Shift when it has to be straight.

Drawing from the center is the other half. In Illustrator and Affinity, holding Alt while you drag grows the shape around the point where you started. You use it when the shape has to sit on a guide intersection or on the middle of a photo. Shift and Alt together mean equal proportions, drawn from the center.

## The constraint

These five tools write parameter shapes into the `.oma`, and the parameters are what you edit. A rectangle remembers its corner radius, a polygon remembers its number of sides, and a star remembers its inner radius. Those numbers live in Transform, so you can change them after the drag, with the keyboard, at the size the poster needs. If the drag expanded them into anchors right away, Transform would only show a path you could no longer control with a number, and every "make it 12 sides" would mean redrawing.

Conversion to points waits. A shape becomes a path the first time you edit it with the node tool, or when you choose Object > Break path. Until then, scaling and rotating with Move, including Free transform (Ctrl+T), keep the parameters. You can rotate a live rounded rectangle and still edit the radius, because rotation and shape parameters can coexist in one object.

Shift is the same constraint you use everywhere else, limiting movement to horizontal, vertical or 45 degrees, and for these tools it also holds equal proportions. Alt draws from the center. The manual describes both in one place, alongside the other modifiers, so shape tools don't add a third way to say "regular" or "from the middle."

Creating a shape is one undo step. If an ellipse comes out wrong, Ctrl+Z takes you back to the empty canvas where the drag started.

## What landed

Press R for a rectangle, O for an ellipse, Y for a polygon, S for a star and L for a line, then drag to create. Shift constrains the drag. Once the shape exists, its corner radius, sides and inner radius are in Transform. Change the number there and the shape updates.

Hold Alt to draw from the center and Shift for equal proportions, or both together. A circle centered on a selection is Alt+Shift with the ellipse tool, and a square from the center is the same combination with the rectangle tool.

With Move, you can drag the corner dots on a rectangle to round it by eye, and the result is still a corner radius number you can read. Use the dots when your eye is ahead of your keyboard, and Transform when the radius has to match a spec.

When an ellipse becomes a path, it converts to four smooth anchors. Until you need those anchors, it stays an ellipse. Once you are working with points, the Node tool shows corner-radius handles, including on paths. While the object is still a parameter shape, you use Transform.

Polygons and stars keep their counts and radii as parameters. Changing a badge from six sides to eight is a single edit in Transform, with no redrawing. A star that is too sharp gets a larger inner radius the same way.

Press L and drag for a line. Shift keeps it on the allowed angles. A line takes a stroke, and since it is an open path, the stroke is centered. The stroke field accepts widths above 64 pixels. Inside, center and outside placement apply to closed paths. A heavy rule is a line with a wide stroke.

S is the star and also the letter in the save shortcut. S alone is Star and Ctrl+S is Save, so if a save dialog appears, you were holding Ctrl.

O is the ellipse and Shift+O is the artboard. If you get an artboard when you wanted a circle, Shift was down.

Move is V. Click a shape and drag it, scale from the eight handles, or rotate from the handle above the box. Shift constrains the move, Alt-drag clones, and Shift-click adds or removes objects from the selection. The shape tools create and Move arranges, and the parameters survive the arranging.

## In the hand

Press R, hold Shift and drag a square behind the headline. Release, click the corner radius field in Transform and type the radius the grid calls for. Press V and move the square into place, holding Shift if the move has to stay horizontal.

Press O, hold Alt and Shift together, and drag from the center of a portrait until the circle crops it the way you want. It stays an ellipse, and you can still change it because you haven't touched Node.

Press Y and drag a polygon, then set its side count in Transform. If the badge should be a star, press S, drag, and set the inner radius in Transform. Keep both while you compare, then delete the one you don't want. Each creation was one undo step, so you can also press Ctrl+Z to remove the star and go back to the polygon.

Press L, hold Shift and drag a horizontal rule under the deck. Set the stroke width, and leave the fill alone or clear it. X swaps fill and stroke if the color landed on the wrong chip, and D restores the defaults.

When one corner of the rectangle has to be different, press A or choose Object > Break path, knowing that the shape stops being a parameter shape. Do that last, after the shared radius is right.

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

When the shapes are right, Ctrl+S saves the `.oma`, and the parameters save with the objects. Open the file next week and the corner radius is still a number.

## The edge

The shape tools don't expand shapes on creation. You get a parameter shape, with corner radius, sides and inner radius in Transform. Nodes only appear when you edit with A or choose Object > Break path. Free transform scales and rotates without converting.

Alt draws from the center and Shift keeps equal proportions. Without either, the drag makes a free rectangle, ellipse, polygon, star or line from the corner where you started.
