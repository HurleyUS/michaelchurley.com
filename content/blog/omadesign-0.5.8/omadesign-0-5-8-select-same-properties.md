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

You have forty icons, and six of them are the wrong green. In Illustrator you choose Select > Same > Fill Color, and if you are lucky the selection is those six. If you are unlucky it is every object with that green anywhere in a gradient, plus a stroke you forgot about, plus a locked layer from the template. Affinity's Select Same is the same gamble. Photoshop's Select > Color Range is the pixel version, and it also tends to grab more than you meant.

A useful version compares exactly what you think it compares. Same fill should mean the whole fill. A linear gradient with stops at 0, 40 and 100 isn't the same fill as one that merely starts and ends on the same two hex values. Same stroke should mean all the stroke settings, and it shouldn't catch every object with a red hairline. Same effects should mean the whole effect stack, and matching the first blur in a list of six isn't enough.

You also want the opposite: everything with no fill, no stroke or no effects. That is how you find shapes that are invisible for a silly reason, and shapes still carrying a drop shadow from a template. All, None and Invert are the commands you use around those, when the selection you built is almost right and needs to be flipped or cleared.

Locked and hidden art has to stay out. You locked it so a stray select wouldn't grab it, and a Same Fill that ignores locks is why people stop using locks.

## The constraint

The document is one `.oma` full of vectors, type and placed images, sometimes across several artboards. A select-same that only understood flat hex colors would miss most of the paint this studio stores. Fills and strokes can be solid, linear, radial, shape or conic, with stops, alpha and positions. Effects are an SVG filter stack on the object. Matching has to compare the complete property, including gradient positions, stroke settings and the effect stack. A looser match would select half the poster every time you used a brand green.

Hidden objects, locked objects and canvas paper stay out of the selection. The page background shouldn't get recolored by accident because it happens to be white like your icons. The command works on artwork you can edit, and paper, locks and hidden objects are outside that.

Selecting isn't a paint change, so it doesn't add an undo step of its own. You select, then recolor, and Ctrl+Z reverts the color. The select command is how you aim that one step at the right set. If the set is wrong, using None and then a more careful Same is cheaper than undoing a recolor that hit thirty extra objects.

It is all in one binary, with no round trip to a separate "select similar" extension. The commands are in the Select menu, and the comparison runs on the properties already in the file.

## What landed

Select offers All, None and Invert. All takes all the artwork the command is allowed to take, None clears the selection, and Invert flips it within the same rules. Locked and hidden objects stay out of all three, so you can't invert your way into a locked logo.

Select also offers Same Fill, Same Stroke and Same Effects, and each compares the complete property. Same Fill looks at the whole fill, including gradient positions, so two gradients with the same end colors but different stop placement don't match. Same Stroke looks at all the stroke settings together, so a stroke that only shares a color stays unselected when the other settings differ. Same Effects looks at the effect stack. An object with a blur and a drop shadow doesn't match one with only the blur, and it doesn't match one whose stack is ordered differently if the stack itself differs.

Then there are the presence tests: With Fill, Without Fill, With Stroke, Without Stroke, With Effects and Without Effects. Without Fill finds the shapes in a layout that have no paint. With Effects finds everything still carrying an effect stack, which is what you want before flattening a poster for a vendor who asked for simple vectors. The menu lays them out as a grid of With and Without for Fill, Stroke and Effects.

The comparison only covers the property on the object: fill, stroke or effect stack. Blend mode and opacity are separate, and you change them afterward in the transform inspector on the selection you already made.

Canvas paper stays out, so a white artboard never joins a selection of white fills.

The result is an ordinary selection. Move it with V, or change the fill in Color studio or Appearance. X still swaps fill and stroke on the objects you are painting, and the Eyedropper (I) still samples a fill. Select is only for aiming, and you edit with the same tools you'd use after a click.

## In the hand

Click one of the correct icons and choose Select > Same Fill. The icons with that exact fill join the selection. Check the layer list. A locked duplicate at the bottom stays unselected, and so does a hidden version in a scrap group. If a gradient icon stayed out, its stops don't match, even if the end colors look close. Open Appearance on both and compare the positions before you call it a bug.

Choose Select > Same Stroke on a rule with the weight and dash you want repeated. The matches share those stroke settings. Change the stroke once. If the set was wider than you thought, press Ctrl+Z, and the stroke change reverts in one step.

Choose Select > Same Effects on an object with the shadow stack you are about to edit. The objects with that stack are selected. Change the blur in FX and they all update together because you selected them first.

Choose Select > Without Fill when a poster has invisible hit areas you need to find. Choose Without Stroke when shapes should be fill-only and some still have a hairline. Choose Without Effects to find the clean objects after a shadow pass. With Fill, With Stroke and With Effects do the opposite.

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

Ctrl+A is the keyboard shortcut for Select all. Invert after Same Fill flips the editable set, and locked and hidden pieces still stay out.

## The edge

Hidden objects, locked objects and canvas paper stay out. Same Fill won't pull a locked template object into a recolor, and it won't select the page.

A match requires the complete property. Sharing a hex value at one gradient stop isn't a match. Stroke settings are compared as a unit, and so is the effect stack. This menu doesn't do a looser "contains this color" search.
