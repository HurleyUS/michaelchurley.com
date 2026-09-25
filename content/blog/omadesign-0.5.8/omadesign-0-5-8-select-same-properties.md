---
id: T037
title: Select same properties
slug: omadesign-0-5-8-select-same-properties
excerpt: Select gathers All, None, Invert, Same Fill, Same Stroke, Same Effects, and objects with or without those properties. A match is the whole property. Hidden and locked objects stay out.
publishedAt: 2026-09-06T10:33:01Z
tags: [omadesign, 0.0.1-alpha, selection]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-select-same-properties/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-select-same-properties/og.png
---

## The habit

You have forty icons and six of them are the wrong green. In Illustrator you choose Select → Same → Fill Color, and if you are lucky the selection is the six. If you are unlucky it is every object that contains that green anywhere in a gradient, plus a stroke you forgot, plus a locked layer from the template. Affinity's Select Same is the same bet. Photoshop's Select → Color Range is the pixel version, and it has the same way of grabbing more than you meant.

The useful version compares the thing you think you compared. Same fill means the fill, the whole fill. A linear gradient with stops at 0, 40, and 100 is not the same fill as a linear gradient that merely starts and ends on the same two hex values. Same stroke means the stroke settings, not "any object with a red hairline." Same effects means the effect stack, not the first blur in a list of six.

You also want the negative. Everything with no fill. Everything with no stroke. Everything with no effects. That is how you find the shapes that are invisible for a dumb reason, and the shapes that are still carrying a drop shadow from a template. All, None, and Invert are the three you use around those, when the selection you built is almost right and needs to be flipped or cleared.

Locked and hidden art has to stay out. You locked it so a stray select would not grab it. A Same Fill that ignores the lock is why people stop using locks.

## The constraint

The document is one `.oma` full of vectors, type, and placed images, sometimes across more than one artboard. A select-same that only understood flat hex colors would miss the paint this studio actually stores. Fills and strokes can be solid, linear, radial, shape, or conic, with stops, alpha, and positions. Effects are an SVG filter stack on the object. Matching has to compare the complete property. Gradient positions count. Stroke settings count. The effect stack counts. A looser match would select half the poster every time you used a brand green.

Hidden objects and locked objects stay out of the selection. Canvas paper stays out. The page background is not an object you recolor by accident because it happened to be white and your icons are white. The command's job is artwork you can edit. Paper, locks, and closed eyes are the boundary.

Undo is one step after you change the selection, not for the selection itself as a paint change. You select, then you recolor, and Ctrl+Z returns the color. The selection command is how you aim that one step at the right set. If the set is wrong, None and a more careful Same are cheaper than an undo of a recolor that hit thirty extra objects.

One binary, no round trip to a "select similar" extension. The menu is Select. It is in the app. The comparison runs on the properties already in the file.

## What landed

Select offers All, None, and Invert. All takes the artwork the command is allowed to take. None clears the selection. Invert flips it, inside the same rules. Locked and hidden objects stay out of all three. You do not invert your way into a locked logo.

Select offers Same Fill, Same Stroke, and Same Effects. Matching compares the complete property. Same Fill looks at the fill you have, including gradient positions. Two gradients that share endpoint colors and differ in stop placement do not match. Same Stroke looks at the stroke settings as a whole. A stroke that only shares a color stays unselected when the rest of the settings differ. Same Effects looks at the effect stack. An object with a blur and a drop shadow does not match an object with only the blur, and it does not match an object whose stack is ordered differently if the stack itself differs.

Select also offers With Fill, Without Fill, With Stroke, Without Stroke, With Effects, and Without Effects. These are the presence tests. Without Fill finds the holes in a layout where a shape has no paint. With Effects finds everything still carrying a stack, which is what you want before you flatten a poster for a vendor who asked for simple vectors. The tweet writes them as With and Without Fill, Stroke, and Effects. The menu is that grid.

The comparison is the property on the object. Same Fill is the fill. Same Stroke is the stroke. Same Effects is the stack. You change blend mode and opacity after, in the transform inspector, on the selection you already aimed.

Canvas paper stays out. A white artboard does not join a selection of white fills.

The selection you get is a normal selection. Move it with V. Change the fill in Color studio or Appearance. X still swaps fill and stroke on the objects you are painting. Eyedropper I still samples a fill. You aimed with Select. You edit with the same tools as a click.

## In the hand

Click one of the good icons. Choose Select → Same Fill. The icons that carry that complete fill join the selection. Look at the layer list. A locked duplicate on the bottom stays unselected. A hidden version in a scrap group stays unselected. If a gradient icon stayed out, its stops are not the same property, even when the end colors look close. Open Appearance on both and compare positions before you call it a bug.

Choose Select → Same Stroke on a rule that has the weight and the dash you want repeated. The matches share those stroke settings. Change the stroke once. Ctrl+Z if the set was wider than you thought, and the stroke change comes back as one step.

Choose Select → Same Effects on an object with the shadow stack you are about to edit. The objects with that stack select. Change the blur in FX. The set updates together because you selected it first.

Choose Select → Without Fill when a poster has invisible hit areas you need to find. Choose Without Stroke when shapes should be filled only and some of them still have a hairline. Choose Without Effects when you want the clean objects left after a shadow pass. With Fill, With Stroke, and With Effects are the mirror images.

```
Select → All
Select → None
Select → Invert
Select → Same Fill
Select → Same Stroke
Select → Same Effects
Select → With Fill      Without Fill
Select → With Stroke    Without Stroke
Select → With Effects   Without Effects
```

Ctrl+A is Select all from the keys, the shortcut form of All. Invert after Same Fill flips the editable set. Locked and hidden pieces still stay out.

## The edge

Hidden objects stay out. Locked objects stay out. Canvas paper stays out. Same Fill will not pull a locked template object into the recolor, and it will not select the page.

The match is the complete property. A shared hex value at one gradient stop is not a match. Stroke settings travel as a unit. The effect stack travels as a unit. A looser "contains this color" is not this menu.

Click the object with the fill you mean, then choose Select → Same Fill.
