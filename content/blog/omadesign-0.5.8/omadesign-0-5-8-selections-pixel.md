---
id: T063
title: Selections pixel
slug: omadesign-0-5-8-selections-pixel
excerpt: Marquee is Shift+M, elliptical marquee is Shift+O, lasso is Q, wand is W. Tolerance sits in Brush. Ants stay until Esc. Paint stays inside the selection.
tags: [omadesign, 0.5.8, pixel]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-selections-pixel/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-selections-pixel/og.png
---

## The habit

Photoshop selections are a dialect. You drag a marquee, the ants march, Shift adds, Delete clears the pixels inside, and Esc or Ctrl+D drops the ants and leaves the picture. The selection is a fence for the next brush, the next fill, the next heal. It is a pixel fence. A path is a different command.

Affinity's marching ants are the same fence. Illustrator's selection is a different animal. You click objects. You do not drag a dotted rectangle across a photograph and expect the pixels inside to become the only paintable region. When both kinds of work live in one file, the hand has to know which selection it is holding. Object selection moves shapes. Pixel selection fences samples.

The wand's tolerance is the argument you always have. Too low and you click forty times. Too high and the background eats the hair. The number has to sit somewhere you can change without a modal. Next to the brush, because the wand is a pixel tool and the brush studio is already open in that persona.

## The constraint

Pixel selection lives beside vector tools in one `.oma`. The same keyboard has to serve both. In Design, Shift+O is the artboard tool. In Pixel, Shift+O is the elliptical marquee. Shift+M in Pixel is the rectangular marquee. `Q` is the lasso. `W` is the wand. `M` without Shift, in Pixel, is Smudge. The persona is what makes the letter safe. You switch to Pixel before those chords mean selections. You switch to Design and Shift+O draws a board again.

The ants are document state for the pixel edit, stored with the session. They are not a path in the layer tree. Save keeps the pixels you changed. The fence is how you limit the edit. Drag to select. The ants stay until Esc. Shift adds to the selection. Delete clears the selected pixels on the target layer. Brush, fill, clone, heal, and smudge stay inside the fence. A filter or effect from Raster studio also limits itself to a marquee, lasso, or wand selection, and the Strength slider blends that result back toward the source where the selection only partly covers a pixel.

`Ctrl+D` in Pixel clears the pixel selection. The manual is blunt about this because `Ctrl+D` is duplicate in a lot of other software, and in this studio duplicate is `Super+D`. Press the wrong one and you will think the selection "did nothing" when it actually dropped the ants. Read the status of the canvas. Ants gone means Ctrl+D worked.

The wand reads tolerance from the Brush studio. One place for the number. You do not hunt a hidden options bar. Eyedropper `I` still samples color to the sidebar, which is how you check what the wand is about to consider.

There is no dialog that converts the selection into a vector as a side effect. If you wanted paths, Trace is the path tool. The selection stays a pixel fence. Object selection, Move `V`, still selects shapes when you are on vectors. The two selections are neighbors. They are not the same click.

## What landed

Four tools. Marquee, Shift+M. Elliptical marquee, Shift+O. Lasso, `Q`. Wand, `W`. All in Pixel, all aimed at an unlocked visible pixel layer. If the layer is wrong, the status line says "Choose an unlocked pixel layer to select." Fix the row, then drag.

Drag the marquee or the ellipse. Draw the lasso. Click the wand. Ants march around the result. Shift and drag or Shift and click adds. Esc removes the ants and leaves the pixels. Delete removes the pixels inside the ants. `Ctrl+Z` can bring those pixels back, because the clear is an edit. Esc is not an edit. Esc only drops the fence.

Paint with `B` and the dab clips to the ants. Fill with `K` and the bucket stays inside. Clone and heal stay inside. Smudge stays inside. This is how you recolor a shirt without painting the wall, and how you heal a face without smearing the background. Drop the ants with Esc when the next stroke should be free.

Wand tolerance is in Brush. Raise it when the click only caught a speck. Lower it when the click leaped a boundary. Click again. The previous ants are replaced or added depending on Shift. The number is the same brush panel you use for size and hardness, so it stays on screen while you work. You do not close a tool options popover to paint, then reopen it to change tolerance.

Raster studio → Filters or Effects honor the same fence. Choose Mask first when the filter should hit the mask. Leave it on the image when the filter should hit the picture. Partial coverage plus Strength blends. Cancel leaves the document untouched. Apply runs at full resolution in the background and creates one undo step. The selection is the limit. The filter dialog is not a second document.

In the layer list, Ctrl-click an item in Pixel to select its rendered outline. That selection stays in document coordinates when you switch targets. It is another way to fence pixels using something you already drew. Mask from item… on the layer menu can turn a chosen outline into a mask on a target. That is the mask feature. The ants themselves remain the pixel selection until you dismiss them.

Vector tools do not consume this fence as a path. Move `V` still selects shapes. The pixels you already edited stay on the pixel layer either way. Drag a new fence when the next edit needs one.

## In the hand

Pixel persona. Pixel layer selected. A product shot, white background, object in the middle.

Press `W`. Set tolerance in Brush until a click on the white selects the white and stops at the product. Shift-click the remaining white bays. Press Delete. The white is gone. The product remains. Esc. The ants are gone. The transparency stays.

```
Shift+M   marquee          (Pixel)
Shift+O   elliptical marquee (Pixel)
Q         lasso
W         wand
Esc       drop the ants
Ctrl+D    drop the ants in Pixel
Delete    clear selected pixels
```

Press Shift+M. Drag a rectangle around a label you want to recolor. Press `B`. Paint. The paint stops at the rectangle. Press `E` if you overshot inside the fence. You cannot overshoot outside it. Esc. Paint a shadow that should extend past the label. It can, because the fence is gone.

Press `Q`. Draw a loose loop around a strand of hair the wand ate. Shift was up, so this is the selection now. Or hold Shift as you draw if you meant to add. Heal inside that loop with Shift+J. The repair does not spill.

Press `I` and click a color you might fill. Press `K`. The fill uses the current color, inside the ants.

Remember Design. Shift+O over there is an artboard. If a board appeared, you were not in Pixel. Switch persona. Shift+O again. You get the ellipse.

`Super+D` if you meant to duplicate a layer object. `Ctrl+D` if you meant to deselect. Say them apart once and the rest of the day is quiet.

## The edge

A pixel selection refuses to be a path. It fences brush, fill, clone, heal, smudge, and the raster filters. It does not convert the logo to outlines, and it does not move vector objects. Esc and `Ctrl+D` drop the fence without requiring you to paint.

The tools also refuse a layer that is not an unlocked visible pixel layer. "Choose an unlocked pixel layer to select." Point them at the row that holds the samples. The ants belong on those samples, in the same document as the paths, which keep their own selection, the object one, on `V`.
