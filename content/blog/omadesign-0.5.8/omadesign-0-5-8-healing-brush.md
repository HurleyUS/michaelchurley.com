---
id: T062
title: Healing brush
slug: omadesign-0-5-8-healing-brush
excerpt: Shift+J. Alt-click clean texture, then paint the blemish. The dab blends that texture into the local color. The source stays fixed for the stroke. Undo restores the whole stroke.
publishedAt: 2026-09-06T10:40:01Z
tags: [omadesign, 0.0.1-alpha, pixel]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-healing-brush/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-healing-brush/og.png
---

## The habit

Clone copies pixels. Healing copies texture and lets the destination keep its color. Most people learn the difference the first time a clone from a cheek lands as a gray stamp on a forehead. In a lot of Photoshop muscle memory the healing brush is Shift+J, next to J for Clone. You Alt-click clean skin (Option-click on a Mac), paint the spot, and the spot disappears while the lighting stays. Here it's Alt-click.

The source has to stay put for the whole stroke. If it moved with the brush, you'd smear the blemish into the sample and paint that smear back down. The rule is a fixed offset from the Alt-click, so the sampled area doesn't chase the cursor. When you release, one undo restores the whole stroke instead of the last dab. A healing stroke is one decision, and you judge it as a whole.

Transparency stays transparent. Healing a layer that already has a soft edge shouldn't fill the empty pixels with skin. You're repairing the picture that's there, not painting an opaque rectangle.

## The constraint

Healing reads and writes the active pixel layer inside the `.oma`. It doesn't open a camera raw or round-trip through an external retouching app. The photograph is a placed image, a pixel layer you painted, or pixels you brought in from PSD, OpenRaster or a flat file, and the heal works on the samples in that buffer.

The tool is Shift+J, and it only applies in Pixel. `J` without Shift is Clone. The two share the Alt-click habit but do different math, so the shortcut has to be reliable, and shortcut handling keeps Shift variants separate. A shortcut that sometimes healed and sometimes cloned would be worse than no heal at all.

The source is fixed when the stroke starts. The brush copies texture from that frozen source at the offset you set with Alt-click and blends it with the destination's local color. The manual puts it as sampled texture, destination local color, transparency preserved. Undo restores the whole stroke, so you don't step back through history dab by dab.

If you're painting the mask, healing stops and the status line says "Choose Pixels to use the healing brush." A mask is black and white coverage, and healing is a color blend. The Pixels / Artwork versus Mask switch in the inspector lets you choose, and heal won't guess. Clone has the same requirement, and the manual says to choose Pixels before using either brush.

If there's no source yet, the status line says "Alt-click clean texture to set the healing source." and the stroke doesn't start. An empty source would stamp nothing and look like a bug, so the tool tells you instead.

A selection still clips the heal, the same way it clips brush, fill, clone and smudge. With marching ants showing, the heal stays inside them. Press Esc to clear the ants if the repair should go anywhere.

## What landed

Press Shift+J on a pixel layer to pick Heal. Alt-click a clean patch on the active image to set the source, then paint over the blemish. Each dab takes texture from the fixed source and fits it to the color under the brush. Transparent pixels around a cutout stay transparent. When you release the mouse, the stroke becomes one history entry. `Ctrl+Z` brings the blemish back, the whole stroke at once. If the texture was wrong, Alt-click a better patch and paint again.

The source buffer is captured at the start of the stroke. Paint you lay down during the stroke doesn't feed the next dab, so you can't heal from your own wet paint in the same gesture. That's what a fixed source means in practice. For the next stroke you can Alt-click again, even on an area you just healed, because the previous stroke has already been committed.

Size and hardness are on the brush keys. `[` and `]` change size in steps of 2 pixels between 1 and 256. Shift plus the brackets changes hardness in steps of 0.08 between 0 and 1. Use a soft heal for skin and a harder one for a straight edge you're rebuilding. The Brush studio shows the same numbers.

Holding Shift during a stroke constrains it, hinged at the last free point, the same rule as brush, smudge and clone. That lets you pull a heal along a horizontal crease without wandering. Release Shift and the hinge drops. Shift+J changes the tool before a stroke. Once you're in Heal, Shift pressed mid-drag only constrains the angle and doesn't switch you back to Clone.

The layer has to be a visible, unlocked pixel layer. Otherwise you get "Choose an unlocked pixel layer to paint," or the more specific message for this tool. If the document is still all vectors, add a layer from Layers > ··· > New pixel layer. Placed images that are pixel layers can be healed, and vector shapes can't. A photo used as an image fill inside a frame is stored as a different kind of embedded pixels, and Heal only targets the pixel layer you selected. Heal the placed image before you turn it into a frame fill.

Raster filters are the other retouching path. Blur, sharpen, chroma key and the rest are in the Raster studio and apply in the background as one undo. Use the healing brush when the repair is local, and a filter when the repair covers the whole selection.

## In the hand

Open the portrait on a pixel layer and zoom with `Z` or Ctrl+scroll. Press Shift+J. Alt-click a clean patch of cheek close to the spot, so the texture scale matches, and paint the spot in short strokes. Check the edge. If a halo appears, undo the stroke, soften the brush with Shift+`[`, Alt-click again and repaint.

```
Shift+J
Alt-click   clean texture
paint       the blemish
Ctrl+Z      restores the whole stroke
```

For a dust spot on a sky, Alt-click nearby sky instead of a cloud edge, then paint the spot. The blue stays the destination's blue and the grain comes from the sample. Clone, `J`, would stamp the sample's exact color. Use Clone when you want a literal copy, and Heal when lighting changes across the surface and only the texture should carry over.

If the status line asks you to choose Pixels, the inspector is set to Mask. Click Pixels, or Artwork on a vector layer whose mask you were editing, then press Shift+J again. Heal never writes to the mask.

If a selection is clipping the heal and you didn't want it, press Esc. Keep the selection when the repair mustn't spill past a product edge. Delete is a different operation. It clears the selected pixels, while Heal replaces them with blended texture.

Save the `.oma`, and the healed pixels are stored in the pixel layer. If this portrait also exists as a RAW in Photo, that's a separate session. Healing here rewrites the pixel layer in the design document and never touches the RAW.

## The edge

The healing source doesn't move. For the length of one stroke, the sample stays where you Alt-clicked, frozen when the stroke began. Undo doesn't go dab by dab either. `Ctrl+Z` restores the whole stroke.

Heal also won't work on a mask. The status line says "Choose Pixels to use the healing brush." Switch the inspector to Pixels, Alt-click clean texture and paint the blemish there.
