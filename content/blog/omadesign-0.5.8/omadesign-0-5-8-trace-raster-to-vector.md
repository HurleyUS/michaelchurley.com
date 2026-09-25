---
id: T035
title: Trace raster to vector
slug: omadesign-0-5-8-trace-raster-to-vector
excerpt: Trace is U. It turns the active pixel layer into vectors, with threshold, color count, and smoothness in the Trace studio. Object → Trace to vector runs the same command without switching tools.
publishedAt: 2026-09-06T10:32:01Z
tags: [omadesign, 0.5.8, trace]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-trace-raster-to-vector/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-trace-raster-to-vector/og.png
---

## The habit

You have pixels and you need paths. A logo from a decade-old PDF that rasterized on the way out. A stamp scanned on a flatbed. A signature on a white JPEG. An icon someone exported as PNG because that was the only download button. In Illustrator you place the image and run Image Trace, then Expand, and you fiddle a threshold and a color count until the paths match the picture well enough to edit. Affinity has a trace, same idea, often under a different name. The hand knows the knobs even when the menu moves. How much is "ink"? How many colors survive? How smooth are the curves allowed to get before they stop being the drawing?

You also know the failure mode. Trace runs on the wrong layer. It traces a screenshot of the whole artboard, including the UI you accidentally captured, or it traces a placed photo when you meant the logo next to it. The command has to name its source. "The active pixel layer" is a sentence you can check in the Layers studio before you commit.

The other habit is the tool switch. Sometimes you want the trace tool in your hand, U, because you are going to do several. Sometimes you are on the Move tool, the layer is already selected, and you want Object → Trace to vector without the tool change. Both entrances have to be the same operation. Two traces that disagree would be a bug you would hit on the first logo.

Photoshop is where the pixels usually start. You clean them there, or you clean them here in Pixel, and then you trace. The trace result has to be vectors in the same document, because a trip out to Illustrator and back is the handoff this studio is built to skip.

## The constraint

Paint lives on a pixel layer. A document that is only vectors has no pixels to trace. You add a pixel layer from the Layers studio, or you place an image, or you paste one. Trace reads the active pixel layer. It does not invent a raster from the paths already on the canvas, and it does not hunt through hidden layers for something that looks like a logo. The active layer is the contract. You select it. You see it. You trace it.

The knobs stay in one studio, Trace: threshold, color count, smoothness. Threshold is the cut between ink and paper for a mark that is basically one color. Color count is how many paints a badge is allowed to keep. Smoothness is how hard the curves try to simplify. They live next to the command so you can change them and run again. They are not buried in a modal you cannot find after the paths exist.

One `.oma` holds the pixels and the vectors. Undo is Ctrl+Z, one step, the same history as the rest of the document. A bad trace comes off the way a bad rectangle comes off. You are not managing a linked AI file beside a PSD.

Object → Trace to vector and the U tool share the work. The menu is there so a selected pixel layer can be traced while your left hand stays on V. The tool is there so the key is memorable. Right-click the canvas and Trace is on that menu too, with Place and the other edits. Three doors, one operation.

## What landed

Press U. Trace converts raster to vector on the active pixel layer. Threshold, color count, and smoothness are in the Trace studio. You set them there. You run the trace. The vectors land in the document, where Node, pen edits, fills, and strokes can take them.

Object → Trace to vector does the same thing without switching tools. If U is not selected, the menu still traces the active pixel layer with the Trace settings. Right-click the canvas and choose Trace when your hand is already on the mouse. Same source, same knobs, same result.

The source has to be a pixel layer, and it has to be the active one. Click the layer in the Layers studio before you trace. An image you placed, a paste that became a pixel layer, a brush stroke on a pixel layer you added yourself: those are sources. A rectangle, a type object, and a pen path are not the input. If the document is vector-only, add a pixel layer first, or place the raster with File → Place… or Ctrl+Shift+P, then make that layer the active one.

The result is vector artwork in the same document. A traced mark comes back as paths. Node, A, is how you clean a lump. Pen, P, can continue an open end. Trace's job is the conversion off the active pixel layer.

## In the hand

Place the logo. Ctrl+Shift+P, or File → Place…, or drop the PNG on the canvas. Click the pixel layer so it is the active one. Look at the Layers studio and confirm the eye is open and you are on that row.

Open Trace. For a black mark on white, start with threshold. Run the trace with U, or with Object → Trace to vector. Look at the paths at the zoom you will actually use. If the counters filled in, ease the threshold and run again. If a three-color badge collapsed to one paint, raise the color count. If the curves are noisy, raise smoothness. If the curves have lost the notch that makes the mark recognizable, lower smoothness. Each run is something you can Ctrl+Z.

Press A and delete a speck path. Drag a point that missed the corner. The trace got you onto anchors. You finish by hand, the way you always have.

```
Ctrl+Shift+P                 Place the raster
Layers                       Make the pixel layer active
Trace                        Threshold, color count, smoothness
U                            Trace tool
Object → Trace to vector     Same trace, current tool stays
Ctrl+Z                       Walk a bad result off
A                            Clean the points
```

Save the `.oma`. The vectors are in the project with the rest of the poster. Make the next pixel layer active and trace again when the next logo shows up. The knobs stay in Trace.

## The edge

Trace refuses every source except the active pixel layer. A selected rectangle is not the input. A hidden logo under a visible photograph is not the input, unless that logo's layer is the one you made active. Object → Trace to vector uses the same rule. The menu is not a wider net.

The command does not rewrite a camera RAW. Photo development and Place in Design are how those pixels enter the document. Trace runs on the pixel layer inside the `.oma`.

Press U with the right pixel layer active, or choose Object → Trace to vector and keep the tool you already had.
