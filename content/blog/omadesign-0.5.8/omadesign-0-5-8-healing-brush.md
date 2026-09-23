---
id: T062
title: Healing brush
slug: omadesign-0-5-8-healing-brush
excerpt: Shift+J. Alt-click clean texture, then paint the blemish. The dab blends that texture into the local color. The source stays fixed for the stroke. Undo restores the whole stroke.
tags: [omadesign, 0.5.8, pixel]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-healing-brush/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-healing-brush/og.png
---

## The habit

Clone copies pixels. Healing copies texture and lets the destination keep its color. You learned the difference the first time a clone from a cheek landed as a gray stamp on a forehead. Photoshop's healing brush is Shift+J in a lot of muscle memory, next to J for clone. Alt-click the clean skin. Paint the spot. The spot disappears and the lighting stays. Option-click on a Mac. Alt-click here.

The source has to stay put for the whole stroke. If the source slid along with the brush, you would smear the blemish into the sample and then paint that smear back down. A fixed offset from the Alt-click is the contract. The place you sampled does not chase the cursor. When you release, one undo restores the entire stroke, not the last dab. A healing stroke is one decision. You judge it whole.

Transparency stays transparency. A heal on a layer that already has a soft edge should not fill the empty pixels with skin. You are repairing the picture that is there. You are not inventing a rectangle of opaque paint.

## The constraint

Healing reads and writes the active pixel layer inside the `.oma`. It does not open a camera raw, and it does not round-trip through an external retouch app. The photograph is either a placed image, a pixel layer you painted, or pixels you brought in from PSD, OpenRaster, or a flat file. The heal is samples in that buffer.

The tool is Shift+J, and only meaningful in Pixel. `J` without Shift is Clone. The two share an Alt-click habit and they do different math, so the chord has to be stable. Shortcut handling keeps Shift variants distinct. A sloppy chord that sometimes healed and sometimes cloned would be worse than no heal at all.

The source for the stroke is fixed when the stroke starts. The brush copies texture from that frozen source at the offset you set with Alt-click, and it blends that texture with the destination's local color. The manual's line is exact: sampled texture, destination local color, transparency preserved. Undo restores the whole stroke. You do not scrub history dab by dab.

If you are painting the mask, heal stops. The status line says "Choose Pixels to use the healing brush." Masks are black and white coverage. Healing is a color blend. The inspector switch Pixels / Artwork versus Mask exists so you can choose. Heal will not guess. Clone has the same requirement. The manual says to choose Pixels before either brush.

No source yet: "Alt-click clean texture to set the healing source." The stroke does not start. An empty source would stamp nothing and look like a bug. The message is the behavior.

A selection still clips the heal, the same way it clips brush, fill, clone, and smudge. Ants up, heal inside them. Esc clears the ants if the repair should run free.

## What landed

Press Shift+J on a pixel layer. The tool is Heal. Alt-click a clean patch on the active image. That click stores the source. Paint over the blemish. Each dab takes texture from the fixed source and fits it to the color under the brush. The transparent pixels around a cutout stay transparent. Release the mouse. The stroke is one history entry. `Ctrl+Z` puts the blemish back, entire stroke, source relationship and all. Paint again if the patch was the wrong texture. Alt-click a better patch first.

The source buffer for that stroke is taken at the start. Paint you lay down during the stroke does not feed the next dab. You cannot heal from your own wet paint in the same gesture. That is what "source fixed for the stroke" means in the hand. The next stroke can Alt-click again, including on an area you just healed, because that click happens after the previous stroke has committed.

Hardness and size are the brush keys. `[` and `]` step size by 2 pixels between 1 and 256. Shift plus the brackets steps hardness by 0.08 between 0 and 1. A soft heal for skin. A harder heal for a straight edge you are rebuilding. The Brush studio shows the same numbers.

Shift during the stroke, as a constrain, hinges at the last free point, the same rule as brush, smudge, and clone. You can pull a heal along a horizontal crease without the stroke wandering. Release Shift and the hinge drops. That Shift is the angle. Shift+J was the tool change, before the stroke. Once the tool is Heal, a Shift you press mid-drag constrains. It does not bounce you back to Clone.

The layer has to be a visible, unlocked pixel layer. Otherwise you get "Choose an unlocked pixel layer to paint," or the more specific line for this tool. Add the layer from Layers → ··· → New pixel layer if the document is still vectors. Placed images that are pixel layers can be healed. A vector shape cannot. If you need the repair on a photograph inside a frame as an image fill, the fill is embedded pixels of another kind. Heal targets the pixel layer you selected. Paint there, or heal before you convert a placed image into a frame fill.

Raster filters are the other retouch path: blur, sharpen, chroma key, and the rest, under Raster studio, applied in the background as one undo. Healing is the brush. Use the brush when the repair is local. Use a filter when the repair is the whole selection.

## In the hand

Open the portrait on a pixel layer. Zoom with `Z`, or Ctrl+scroll. Press Shift+J. Alt-click a clean patch of cheek, close to the spot, so the texture scale matches. Paint the spot in short strokes. Look at the edge. If a halo appeared, undo the stroke, soften the brush with Shift+`[`, Alt-click again, paint again.

```
Shift+J
Alt-click   clean texture
paint       the blemish
Ctrl+Z      restores the whole stroke
```

For a dust spot on a sky, Alt-click nearby sky, not the cloud edge. Paint the spot. The blue stays the blue of the destination. The grain comes from the sample. That is the blend. Clone, `J`, would have stamped the sample's exact color. Use Clone when you want a literal copy. Use Heal when the lighting changes across the surface and the texture should follow.

If the status line asks you to choose Pixels, the inspector is on Mask. Click Pixels, or Artwork on a vector layer that has a mask you were editing. Then Shift+J again. Heal does not write the mask.

Esc if a selection is clipping you and you did not want it. Or keep the selection when the repair must not spill past a product edge. Delete is not the heal. Delete clears selected pixels. Heal replaces them with blended texture.

Save the `.oma`. The healed pixels are in the pixel layer. The original camera file, if this portrait also lives in Photo as a RAW, is a different session. Healing here does not rewrite that RAW. It rewrites the pixel layer in the design document. If you still need the raw file untouched, it already is. This stroke never pointed at it.

## The edge

Healing refuses a moving source. For the length of one stroke the sample stays the Alt-click you set, frozen when the stroke began. Undo refuses to nibble. `Ctrl+Z` restores the whole stroke.

It also refuses the mask. "Choose Pixels to use the healing brush." Switch the inspector to Pixels, Alt-click the clean texture, and paint the blemish there.
