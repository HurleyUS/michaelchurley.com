---
id: T035
title: Trace raster to vector
slug: omadesign-0-5-8-trace-raster-to-vector
excerpt: Trace is U. It turns the active pixel layer into vectors, with threshold, color count, and smoothness in the Trace studio. Object → Trace to vector runs the same command without switching tools.
publishedAt: 2026-09-06T10:32:01Z
tags: [omadesign, 0.0.1-alpha, trace]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-trace-raster-to-vector/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-trace-raster-to-vector/og.png
---

## The habit

You have pixels and you need paths. It might be a logo from a decade-old PDF that got rasterized on export, a stamp scanned on a flatbed, a signature on a white JPEG, or an icon someone exported as PNG because that was the only download button. In Illustrator you place the image, run Image Trace and then Expand, and adjust a threshold and a color count until the paths match the picture well enough to edit. Affinity has a trace that does the same job, often under a different name. The settings are familiar even when the menu moves: how much counts as ink, how many colors survive, and how smooth the curves can get before they stop matching the drawing.

You also know how it fails. Trace runs on the wrong layer. It traces a screenshot of the whole artboard, including the UI you accidentally captured, or it traces a placed photo when you meant the logo next to it. The command has to name its source, and "the active pixel layer" is something you can check in the Layers studio before you commit.

The other habit is switching tools. Sometimes you want the trace tool (U) in hand because you are going to do several. Sometimes you are on the Move tool with the layer already selected, and you want Object > Trace to vector without changing tools. Both routes have to run the same operation. If two traces disagreed, you would hit the bug on the first logo.

The pixels usually start in Photoshop. You clean them there, or here in Pixel, and then trace. The result has to be vectors in the same document, because a trip out to Illustrator and back is exactly the handoff this studio is built to avoid.

## The constraint

Paint lives on a pixel layer, so a vector-only document has nothing to trace. You add a pixel layer from the Layers studio, or place or paste an image. Trace reads the active pixel layer. It doesn't build a raster from the paths already on the canvas, and it doesn't search hidden layers for something that looks like a logo. You select the active layer, you can see it, and that is what gets traced.

The settings stay in one studio, Trace: threshold, color count and smoothness. Threshold is the cutoff between ink and paper for a mark that is basically one color. Color count is how many paints a badge can keep. Smoothness controls how hard the curves try to simplify. They sit next to the command so you can change them and run again, instead of being buried in a modal you can't find once the paths exist.

One `.oma` holds both the pixels and the vectors. Undo is Ctrl+Z, one step, in the same history as the rest of the document, so a bad trace comes off the same way a bad rectangle does. There is no linked AI file to manage beside a PSD.

Object > Trace to vector and the U tool run the same operation. The menu lets you trace a selected pixel layer while your left hand stays on V, and the tool gives you a key that is easy to remember. Trace is also on the canvas right-click menu, next to Place and the other edits. That is three ways in, all doing the same thing.

## What landed

Press U, and Trace converts the active pixel layer from raster to vector. Threshold, color count and smoothness are in the Trace studio. Set them there and run the trace. The vectors land in the document, where Node, pen edits, fills and strokes can work on them.

Object > Trace to vector does the same thing without switching tools. Even if U isn't selected, the menu traces the active pixel layer with the Trace settings. When your hand is already on the mouse, right-click the canvas and choose Trace. All three use the same source, settings and result.

The source has to be the active pixel layer, so click that layer in the Layers studio before you trace. An image you placed, a paste that became a pixel layer, or a brush stroke on a pixel layer you added yourself can all be traced. A rectangle, a type object or a pen path can't be the input. If the document is vector-only, add a pixel layer first, or place the raster with File > Place… or Ctrl+Shift+P, and make that layer active.

The result is vector artwork in the same document, and a traced mark comes back as paths. Use Node (A) to clean up a lump, and Pen (P) to continue an open end. Trace only handles the conversion from the active pixel layer.

## In the hand

Place the logo with Ctrl+Shift+P or File > Place…, or drop the PNG on the canvas. Click the pixel layer to make it active, and check in the Layers studio that its eye is open and you are on that row.

Open Trace. For a black mark on white, start with threshold. Run the trace with U or with Object > Trace to vector, and look at the paths at the zoom you will actually use. If the counters filled in, ease off the threshold and run again. If a three-color badge collapsed to one paint, raise the color count. If the curves are noisy, raise smoothness, and if they lost the notch that makes the mark recognizable, lower it. You can undo each run with Ctrl+Z.

Press A, delete a stray speck path, and drag a point that missed its corner. The trace gets you to anchors, and you finish by hand, the way you always have.

```
Ctrl+Shift+P                 Place the raster
Layers                       Make the pixel layer active
Trace                        Threshold, color count, smoothness
U                            Trace tool
Object → Trace to vector     Same trace, current tool stays
Ctrl+Z                       Walk a bad result off
A                            Clean the points
```

Save the `.oma`, and the vectors are in the project with the rest of the poster. When the next logo shows up, make its pixel layer active and trace again. The settings stay in Trace.

## The edge

Trace only accepts the active pixel layer. A selected rectangle isn't an input, and neither is a hidden logo under a visible photograph unless you made that logo's layer active. Object > Trace to vector follows the same rule.

The command doesn't touch a camera RAW. Photo development and Place in Design bring those pixels into the document, and Trace runs on the pixel layer inside the `.oma`.
