---
id: T063
title: Selections pixel
slug: omadesign-0-5-8-selections-pixel
excerpt: Marquee is Shift+M, elliptical marquee is Shift+O, lasso is Q, wand is W. Tolerance sits in Brush. Ants stay until Esc. Paint stays inside the selection.
publishedAt: 2026-09-18T23:47:50Z
tags: [omadesign, 0.5.1, pixel]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-selections-pixel/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-selections-pixel/og.png
---

## The habit

Photoshop selections have their own conventions. You drag a marquee and the marching ants appear. Shift adds, Delete clears the pixels inside, and Esc or Ctrl+D drops the ants and leaves the picture. The selection is a fence for the next brush stroke, fill or heal. It fences pixels, and a path is a different command.

Affinity's marching ants work the same way. Illustrator's selection is different. You click objects, and you wouldn't expect dragging a dotted rectangle across a photograph to make the pixels inside the only paintable region. When both kinds of work live in one file, you have to know which selection you are holding. Object selection moves shapes, and pixel selection fences samples.

The magic wand's tolerance is a constant argument. Too low and you click forty times. Too high and the background swallows the hair. The number has to be somewhere you can change without a modal dialog, next to the brush, because the wand is a pixel tool and the brush studio is already open in that persona.

## The constraint

Pixel selection lives beside vector tools in one `.oma`, so the same keyboard has to serve both. In Design, Shift+O is the artboard tool. In Pixel, Shift+O is the elliptical marquee and Shift+M is the rectangular marquee. `Q` is the lasso and `W` is the wand. `M` without Shift, in Pixel, is Smudge. The persona decides what the letter does. Switch to Pixel and those keys mean selections. Switch to Design and Shift+O draws an artboard again.

The ants are document state for the pixel edit, stored with the session. They aren't a path in the layer tree. Save keeps the pixels you changed, and the fence limits where edits go. Drag to select, and the ants stay until Esc. Shift adds to the selection, and Delete clears the selected pixels on the target layer. Brush, fill, clone, heal and smudge stay inside the fence. Filters and effects from Raster studio also limit themselves to a marquee, lasso or wand selection, and where the selection only partly covers a pixel, the Strength slider blends the result back toward the source.

In Pixel, `Ctrl+D` clears the pixel selection. The manual stresses this because `Ctrl+D` means duplicate in a lot of other software, and in this studio duplicate is `Super+D`. If you press the wrong one, you might think the selection did nothing when it actually dropped the ants. Look at the canvas. If the ants are gone, Ctrl+D worked.

The wand reads its tolerance from the Brush studio, so the number lives in one place and you don't have to find a hidden options bar. The Eyedropper (`I`) still samples color to the sidebar, which is how you check what the wand is about to consider.

No dialog converts the selection into a vector as a side effect. If you want paths, use Trace. The selection stays a pixel fence. On vectors, Move (`V`) still selects shapes. The two kinds of selection sit side by side, and they are different clicks.

## What landed

There are four tools: Marquee (Shift+M), Elliptical marquee (Shift+O), Lasso (`Q`) and Wand (`W`). All of them work in Pixel on an unlocked, visible pixel layer. If the target layer is wrong, the status line says "Choose an unlocked pixel layer to select." Fix the layer row, then drag.

Drag the marquee or the ellipse, draw the lasso or click the wand, and ants march around the result. Shift-drag or Shift-click adds to it. Esc removes the ants and leaves the pixels. Delete removes the pixels inside the ants, and `Ctrl+Z` can bring them back because the clear is an edit. Esc isn't an edit. It only drops the fence.

Paint with `B` and the brush clips to the ants. Fill with `K` and the bucket stays inside. Clone, heal and smudge stay inside too. That is how you recolor a shirt without painting the wall, or heal a face without smearing the background. Press Esc to drop the ants when the next stroke should go anywhere.

Wand tolerance is in Brush. Raise it when a click only caught a speck, and lower it when a click jumped a boundary, then click again. Depending on Shift, the new ants replace or add to the previous ones. The tolerance sits in the same brush panel as size and hardness, so it stays on screen while you work, and you never close a tool options popover to paint and reopen it to change tolerance.

Raster studio > Filters or Effects respect the same fence. Choose Mask first when the filter should affect the mask, or leave the image targeted when it should affect the picture. Partial coverage blends with Strength. Cancel leaves the document untouched. Apply runs at full resolution in the background and creates one undo step. The selection sets the limit, and the filter dialog works on the same document.

In Pixel, Ctrl-click an item in the layer list to select its rendered outline. That selection stays in document coordinates when you switch targets, so you can fence pixels using something you already drew. Mask from item… on the layer menu turns a chosen outline into a mask on a target layer. That is the mask feature, and the ants stay the pixel selection until you dismiss them.

Vector tools don't use this fence as a path. Move (`V`) still selects shapes, and pixels you already edited stay on the pixel layer either way. Drag a new fence when the next edit needs one.

## In the hand

Switch to the Pixel persona and select a pixel layer. Say it is a product shot with a white background and the object in the middle.

Press `W`. Set tolerance in Brush until a click on the white selects the white and stops at the product. Shift-click the remaining patches of white, then press Delete. The white is gone and the product remains. Press Esc. The ants are gone and the transparency stays.

```
Shift+M   marquee          (Pixel)
Shift+O   elliptical marquee (Pixel)
Q         lasso
W         wand
Esc       drop the ants
Ctrl+D    drop the ants in Pixel
Delete    clear selected pixels
```

Press Shift+M and drag a rectangle around a label you want to recolor. Press `B` and paint, and the paint stops at the rectangle. Press `E` if you overshot inside the fence. You can't overshoot outside it. Press Esc, then paint a shadow that should extend past the label. It can, because the fence is gone.

Press `Q` and draw a loose loop around a strand of hair the wand swallowed. Without Shift, this becomes the new selection. Hold Shift while you draw if you meant to add to it. Heal inside the loop with Shift+J, and the repair stays inside it.

Press `I` and click a color you might fill with. Press `K`, and the fill uses the current color inside the ants.

Remember that in Design, Shift+O is the artboard tool. If an artboard appeared, you weren't in Pixel. Switch persona and press Shift+O again to get the ellipse.

Press `Super+D` to duplicate a layer object and `Ctrl+D` to deselect. Once you keep those two apart, the rest goes smoothly.

## The edge

A pixel selection is never a path. It fences brush, fill, clone, heal, smudge and the raster filters. It doesn't convert a logo to outlines or move vector objects. Esc and `Ctrl+D` drop the fence without you having to paint.

The tools only work on an unlocked, visible pixel layer, and otherwise they report "Choose an unlocked pixel layer to select." Point them at the layer that holds the pixels. The ants sit on those pixels, in the same document as the paths, which keep their own object selection on `V`.
