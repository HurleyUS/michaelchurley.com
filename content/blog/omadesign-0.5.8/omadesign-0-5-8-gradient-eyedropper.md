---
id: T034
title: Gradient eyedropper
slug: omadesign-0-5-8-gradient-eyedropper
excerpt: Gradient is G. Drag across a selected shape and the active fill or stroke keeps its stops. Eyedropper is I and samples the fill. X swaps fill and stroke. D restores defaults.
publishedAt: 2026-08-29T16:33:47Z
tags: [omadesign, 0.0.0.0alpha-rc, color]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-gradient-eyedropper/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-gradient-eyedropper/og.png
---

## The habit

Select a shape, press G and drag, and a gradient appears along the drag. Illustrator's Gradient tool uses the same gesture and keeps the annotator on screen so you can pull the endpoints afterward. Affinity's Fill tool is the same idea on a different key. The drag decides where the color changes. A dialog with an angle field is the backup.

Then you sample. The eyedropper, I, picks up a color from something already on the page so the next shape matches. You learn fast whether the dropper grabbed the fill, the stroke or a pixel from a photograph. A good eyedropper tells you which. One that samples a blend of whatever is under the cursor makes you undo.

The color panel behind both tools is familiar too: a saturation and brightness square, a hue slider, a hex field, swatches and your recent colors. It should show current and previous colors so you can go back to the color the edit started from without undoing geometry. Alpha belongs in the same picker, because a gradient stop at 40% is a normal stop.

X swaps fill and stroke, and D restores the defaults. You press X when you painted the stroke and meant the fill, and D when an object's colors have drifted too far to fix by hand.

## The constraint

Fill and stroke are both paint, and both can be gradients. If the Gradient tool always wrote to the fill, there'd be no direct way to make a gradient stroke, and you'd rebuild it in a panel. Appearance has an active Fill row and an active Stroke row, and G edits whichever is active. Existing stops and the gradient type stay. A drag repositions the gradient. It doesn't replace a five-stop ramp with a black-to-white default because you touched the tool.

The `.oma` keeps all four gradient types editable: linear, radial, shape and conic, plus solid. SVG can't represent all four the same way, and pretending it can is how files end up opening with missing fills. Linear and radial export as real gradient stops. Shape and conic export as embedded image patterns, capped at 4096 pixels per axis. The project file stays the editable one. Lottie reports shape and conic as unsupported instead of dropping them quietly.

The eyedropper samples the fill and nothing else. The stroke stays on the stroke chip until you swap with X or paint it on purpose. A dropper that copied the whole appearance would be a style paste, and style paste already exists as Ctrl+Alt+C and Ctrl+Alt+V. I is for color.

Hex includes alpha as eight digits, `#RRGGBBAA`. Every picker accepts alpha, including gradient stops, paint, Layout color variables and Design effect colors.

## What landed

Press G and drag across a selected shape. The gradient follows the drag. The endpoints stay visible while the Gradient tool is selected, so you can adjust the run without switching tools. The active Fill or Stroke row in the Appearance studio decides which paint you're editing.

Appearance offers Solid, Linear, Radial, Shape and Conic for fills and strokes. Click the gradient ramp to insert a stop, and drag a stop's handle to move it. Select a stop to edit its color, alpha and percentage. Plus adds a stop, Minus removes one, Reverse flips the order and Even spaces the stops equally. Angle rotates linear, radial and conic gradients.

Radial gradients spread outward from where the drag started, and conic gradients sweep around that point. Shape gradients follow the object's actual silhouette, holes included, from the interior out to the edge. A compound shape with a counter gets a shape gradient that accounts for the hole.

Linear and radial SVG exports keep editable stops, including gradients on strokes. Shape and conic SVG exports use an embedded image pattern of up to 4096 pixels on each axis. Reopen the `.oma` and all four types are still editable. Lottie reports shape and conic as unsupported.

Press I and the eyedropper samples a fill, which becomes the color you use next. Color studio shows saturation by brightness, hue, alpha, hex, swatches and recent colors. Open a color chip and Current sits next to Previous. Click Previous to restore the color from before this edit. That only affects the color, so you can drop a bad pick and keep the shape.

X swaps fill and stroke, and D restores the defaults. Neither uses Control, because Control+X is cut.

Files with older two-color radial fills still open with them. Editing one in Appearance upgrades it to the multi-stop format, so the upgrade happens only when you choose to edit it.

## In the hand

Select a shape with V and click the Fill row in Appearance. Press G and drag from the shape's left edge to its right edge. A linear gradient follows the drag and the endpoints stay on screen. Drag an endpoint if the run should be shorter than the shape.

Click the ramp where a third color should go, and a stop appears. Select it and set the hex, or press I to sample a fill from another object and bring that color to the stop. Give the stop some alpha if it should fade. Click Even if the stops have bunched up, and Reverse if the fade runs the wrong way. Set Angle if you'd rather type a rotation than drag.

Click the Stroke row, press G and drag along the stroke. The stroke takes the gradient, and the fill stays as it was because the active row was the stroke. Press X if you need to swap the two.

If an object has picked up a mess of leftover paint, press D to restore the defaults and then build the gradient you want.

For a radial, press G and drag from the center outward. For a conic, choose Conic and drag, and the sweep goes around the start point. For a badge with a hole, choose Shape, and the gradient follows the silhouette and the hole.

```
G              Gradient on the selected shape
Fill or Stroke The Appearance row G edits
I              Eyedropper, samples fill
X              Swap fill and stroke
D              Restore defaults
#RRGGBBAA      Hex with alpha
```

Ctrl+S saves the `.oma`, where the stops stay editable. Export SVG when the gradient is linear or radial and the next person needs real stops. Export SVG of a shape or conic gradient when an image pattern is good enough, keeping the 4096-pixel cap per axis in mind.

## The edge

The eyedropper samples the fill and leaves the stroke alone. To move a whole appearance, use Copy style and Paste style, Ctrl+Alt+C and Ctrl+Alt+V.

Shape and conic gradients stay editable in the `.oma`, but their SVG export is an embedded image pattern and Lottie reports them as unsupported. Linear and radial are the types that keep their stops on export.
