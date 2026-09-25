---
id: T034
title: Gradient eyedropper
slug: omadesign-0-5-8-gradient-eyedropper
excerpt: Gradient is G. Drag across a selected shape and the active fill or stroke keeps its stops. Eyedropper is I and samples the fill. X swaps fill and stroke. D restores defaults.
publishedAt: 2026-08-29T16:33:47Z
tags: [omadesign, 0.5.8, color]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-gradient-eyedropper/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-gradient-eyedropper/og.png
---

## The habit

You select a shape. You press G. You drag, and a gradient appears along that drag. In Illustrator the gradient tool is the same gesture, and the annotator stays up so you can pull the endpoints after. Affinity's fill tool is the same idea with a different key. The drag is the decision about where the color changes. A dialog with an angle field is the backup, not the start.

Then you sample. I, or the eyedropper, picks up a color from something already on the page so the next shape matches. You learn quickly whether the dropper grabbed the fill, the stroke, or a pixel out of a photograph. The useful version tells you which. The version that silently samples "whatever is under the cursor, blended" makes you undo.

The color panel behind both tools is muscle memory too. A square of saturation and brightness, a hue slider, a hex field, swatches, the last few colors you used. Current and previous, so you can step back to the color this edit started from without undoing the geometry. Alpha in the same picker, because a gradient stop at 40% is a normal stop, not a special object.

X swaps fill and stroke. D puts the defaults back. You hit X when you painted the stroke and meant the fill. You hit D when the object has wandered into a color you do not want to debug.

## The constraint

Fill and stroke are both paint, and both can be a gradient. If the gradient tool always wrote the fill, you would have no straight gesture for a gradient stroke, and you would rebuild it in a panel. Appearance keeps an active Fill row and an active Stroke row. G edits whichever row is active. Existing stops and the gradient type stay. A drag repositions. It does not throw away a five-stop ramp and replace it with a black-to-white default because you touched the tool.

The `.oma` keeps all four gradient types editable: linear, radial, shape, and conic. Solid sits beside them. SVG cannot carry all four the same way, and pretending it can is how files open with missing fills. Linear and radial export as real gradient stops. Shape and conic export as embedded image patterns, capped at 4096 pixels on an axis. The project file remains the editable one. Lottie says shape and conic are unsupported, out loud, which is the honest version of a format that cannot hold them.

The eyedropper samples fill. One job. Stroke stays on the stroke chip until you swap with X or paint it on purpose. A dropper that copied the entire appearance would be a style paste, and style paste is already Ctrl+Alt+C and Ctrl+Alt+V. I is the color.

Hex includes alpha. Eight digits, `#RRGGBBAA`. Every picker accepts alpha: gradient stops, paint, Layout color variables, Design effect colors. One field, one meaning.

## What landed

Press G. Drag across a selected shape. The gradient lands on that drag. Endpoints stay visible while the Gradient tool is selected, so you can adjust the run without leaving the tool. The Appearance studio's active Fill or Stroke row chooses which paint you just edited.

Appearance offers Solid, Linear, Radial, Shape, and Conic, for fills and for strokes. Click the gradient ramp to insert a stop. Drag a stop's handle to move it. Select a stop to edit its color, its alpha, and its percentage. Plus adds a stop. Minus removes one. Reverse flips the stop order. Even spaces them equally. Angle rotates linear, radial, and conic gradients.

Radial gradients spread outward from the point where the drag started. Conic gradients sweep around that point. Shape gradients follow the actual silhouette, holes included, from the interior out to the boundary. A compound with a counter gets a shape gradient that knows the hole is there.

Linear and radial SVG exports keep editable stops, including a gradient on a stroke. Shape and conic SVG exports use an embedded image pattern, up to 4096 pixels on each axis. Open the `.oma` and all four types are still editable. Lottie reports shape and conic as unsupported.

Press I. The eyedropper samples a fill. The sampled color is the fill you can use next. Color studio shows saturation times brightness, hue, alpha, hex, swatches, and recent colors. Open a color chip and Current sits next to Previous. Click Previous to restore the color from before this edit. That restore is about the color, so you can abandon a bad pick without throwing away the shape.

X swaps fill and stroke. D restores the defaults. Neither chord uses Control. Control+X is cut. The plain keys are the paint keys.

Older two-color radial fills still exist in files that had them. Editing one in Appearance upgrades it to the multi-stop format. You do that on purpose, by editing, when you want the newer stops.

## In the hand

Select a shape with V. In Appearance, click the Fill row. Press G and drag from the left edge of the shape to the right edge. A linear gradient follows the drag. The endpoints stay on screen. Drag an endpoint if the run should be shorter than the shape.

Click the ramp where a third color should sit. A stop appears. Select it. Set the hex, or sample a fill from another object with I and bring that color to the stop. Give the stop an alpha if it should fade. Hit Even if the stops drifted into a clump. Hit Reverse if the fade runs the wrong way. Set Angle if the ramp should rotate and you would rather type than drag.

Click the Stroke row. Press G and drag along the stroke. The stroke takes the gradient. The fill you already built stays, because the active row was the stroke. Press X if you need the two paints exchanged.

Press D on an object that has become a mess of leftover paint. Defaults come back. Then build the gradient you actually wanted.

For a radial, press G and drag from the center outward. The spread starts at the drag start. For a conic, choose Conic and drag. The sweep goes around that start. For a badge with a hole, choose Shape. The gradient follows the silhouette and the hole, interior to boundary.

```
G              Gradient on the selected shape
Fill or Stroke The Appearance row G edits
I              Eyedropper, samples fill
X              Swap fill and stroke
D              Restore defaults
#RRGGBBAA      Hex with alpha
```

Ctrl+S writes the `.oma`. The stops stay editable there. Export SVG when the gradient is linear or radial and the next person needs real stops. Export SVG of a shape or conic gradient when a pattern of the picture is enough, knowing the cap is 4096 pixels on an axis.

## The edge

The eyedropper samples the fill. The stroke stays on the stroke. Copy style and paste style, Ctrl+Alt+C and Ctrl+Alt+V, are how a whole appearance moves. I is the fill color.

Shape and conic gradients stay editable in the `.oma`. Their SVG export is an embedded image pattern. Lottie reports those two types unsupported. Linear and radial are the exports that keep stops.

Press G, drag across the selected shape, and press I when the next stop should match a fill already on the page.
