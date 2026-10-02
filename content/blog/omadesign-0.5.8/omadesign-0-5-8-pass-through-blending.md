---
id: T046
title: Pass through blending
slug: omadesign-0-5-8-pass-through-blending
excerpt: Pass through lets child blend modes reach the backdrop outside an explicit group. Turn it off and the group isolates. Regular layers and Layout frames isolate on their own.
publishedAt: 2026-09-07T01:32:01Z
tags: [omadesign, 0.0.2-alpha, blending]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-pass-through-blending/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-pass-through-blending/og.png
---

## The habit

Blend modes let a logo darken a photograph without rasterizing the logo. The usual list is Multiply, Screen, Overlay, Darken, Lighten, Color Dodge, Color Burn, Hard Light, Soft Light, Difference, Exclusion, Hue, Saturation, Color and Luminosity. Illustrator, Photoshop and Affinity share that list closely enough that your hand already knows Multiply means "burn the ink into what is underneath."

Groups are where it gets confusing. In Photoshop a group defaults to Pass Through, so the child layers inside it blend with everything outside the group. Set the group to Normal and the children blend with each other first, and then the group blends with the backdrop as one result. That is group isolation. You use it when three Multiply shapes should darken each other and then sit on a photo as a single Normal object, instead of each one multiplying the photo. You use Pass Through when each child should reach the photo directly.

Illustrator and Affinity expose the same idea under knockout, isolate and blend-inside controls, and the names vary. The behavior you need is the same in all of them. Either the children see the backdrop, or they see their siblings and the container blends with the backdrop.

Opacity is unreliable in some tools. The isolation holds at 100% and the children leak at 40%. Or the fill, the stroke and a placed image each get the opacity applied separately, so a 50% object looks like 25% where they overlap. Opacity should apply once to the combined result, and the blend mode should behave the same at every opacity, including 100%.

## The constraint

Regular layers and Layout frames isolate. Children inside them blend with their siblings, and the layer's or frame's own blend mode is what meets the artwork below. That rule is the same at every opacity. A frame at 100% and a frame at 40% isolate the same way, so fading a screen mock doesn't cause a leak.

An explicit layer group is the object that can enable Pass through, and Ctrl+G makes one. Pass through controls whether child blend modes reach the backdrop outside the group. With it on, a Multiply child reaches the art behind the group. With it off, the group isolates. The children blend inside, and the group's own blend mode meets the backdrop. That is the Photoshop isolation move, done on a group in Design, in the same `.oma` as the poster. You don't need to switch to a raster app to get the group to behave.

Regular layers and Layout frames don't offer Pass through. If you need children to reach the page, use an explicit group with Pass through on. If you need a UI frame to composite as one picture, the frame already isolates, and its opacity and blend apply to the whole subtree.

Object opacity applies once to the combined fill, image and stroke. Layer opacity applies once to the whole contents of the layer. Placed images use the layer controls above the Layers tree. These settings survive the project save and SVG export.

## What landed

Every vector object and every Layout frame has Opacity and Blend in its transform inspector. The blend list is Normal, Multiply, Screen, Overlay, Darken, Lighten, Color Dodge, Color Burn, Hard Light, Soft Light, Difference, Exclusion, Hue, Saturation, Color and Luminosity. Placed images take opacity and blend from the layer controls above the Layers tree.

A frame's opacity and blend apply to its whole subtree. An object's opacity applies once to its combined fill, image and stroke. A layer's opacity applies once to everything in the layer. If you set 40%, you get 40% of the combined result. Each piece doesn't get faded again on top of the others.

Regular layers and Layout frames isolate their contents. Child blend modes interact with siblings in the same container, and the container's blend mode interacts with the artwork below. This holds at every opacity, including fully opaque.

Explicit layer groups can enable Pass through. With it on, child blend modes interact with the backdrop outside the group. Turn it off for isolated group blending. The children resolve against each other, and then the group applies its own blend mode to the result. Photoshop users will recognize the isolated group. In Omadesign the control is called Pass through, and turning it off gives you isolation.

The group still behaves as a group. It expands, renames, hides, locks and reorders as a unit. Pass through doesn't combine paths or release the group, and Ctrl+Shift+G still ungroups. The switch only affects compositing. Geometry stays as it is.

A logo can carry a drop shadow in FX and a Multiply blend at the same time. They are separate settings. Each object gets one blend mode and one opacity.

## In the hand

Place a photograph. Draw three overlapping shapes above it, either on their own layer or ready to group. Set each shape to Multiply. On a regular layer they multiply against their siblings, and the photograph sees the layer's blend mode. Set the layer to Normal and the photo sees the already-composited layer. That is isolation, and you didn't have to go looking for it, because regular layers isolate.

If you want the explicit group, select the three shapes and press Ctrl+G. Enable Pass through, and each Multiply shape now reaches the photograph, so the overlaps look like three separate multiplies. Disable Pass through, and the three shapes multiply against each other inside the group while the group meets the photo with its own blend mode. Set the group to Normal and the photo sees the group instead of being multiplied by each child.

Change the group's opacity to 50%. The isolation stays, and the children don't leak onto the photo because the group faded. Set the opacity back to 100% when you're done.

On a single shape with both a fill and a stroke, set opacity to 50%. The fade applies once to the combined paint, so the overlap between fill and stroke doesn't get twice as thin.

```
Blend                 Multiply, Screen, Overlay, and the rest
Regular layer, frame  Children blend inside; the container meets the backdrop
Ctrl+G                Explicit group
Pass through on       Child blends reach outside the group
Pass through off      Isolated group blending
Opacity               Once, on the combined result
```

SVG export keeps the blend and the opacity. Save the `.oma` first. The export copies the compositing you set, and you author it in the document. If a screen mock should isolate, leave it as a Layout frame. If a cluster of inks should each reach the photo, group them and enable Pass through.

If the last change was the blend or the opacity, Undo reverts it in one step. Ctrl+Z returns the previous mode and the geometry stays.

## The edge

Pass through belongs to explicit layer groups. Regular layers and Layout frames won't pass child blends through to the backdrop. Both isolate at every opacity. Children meet their siblings, and the container meets what is below.

Turn Pass through off when the group should isolate, and on when each child should blend with the backdrop. The switch doesn't weld paths or change the layer order. It only changes which layers the blend modes can see.
