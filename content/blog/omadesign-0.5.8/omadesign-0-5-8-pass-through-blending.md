---
id: T046
title: Pass through blending
slug: omadesign-0-5-8-pass-through-blending
excerpt: Pass through lets child blend modes reach the backdrop outside an explicit group. Turn it off and the group isolates. Regular layers and Layout frames isolate on their own.
publishedAt: 2026-09-07T01:32:01Z
tags: [omadesign, 0.5.8, blending]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-pass-through-blending/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-pass-through-blending/og.png
---

## The habit

Blend modes are how a logo darkens a photograph without you rasterizing the logo. Multiply, Screen, Overlay, Darken, Lighten, Color Dodge, Color Burn, Hard Light, Soft Light, Difference, Exclusion, Hue, Saturation, Color, Luminosity. Illustrator, Photoshop, and Affinity share that list closely enough that your hand knows Multiply means "burn the ink into what is underneath."

The group question is the one that bites. In Photoshop a group defaults to Pass Through. Child layers inside the group blend with the world outside the group. Set the group to Normal, and the children blend with each other first, then the group blends as one result with the backdrop. That is group isolation. You use it when three Multiply shapes should darken each other and then sit on a photo as a single Normal object, instead of each one multiplying the photo. You use Pass Through when each child should reach the photo directly.

Illustrator and Affinity expose the same idea under knockout, isolate, and blend-inside controls, and the names wander. The behavior you need is stable. Either the children see the backdrop, or they see their siblings and the container talks to the backdrop.

You also know opacity lies in some tools. At 100% the isolation holds. At 40% the children leak. Or the object's fill, stroke, and a placed image each get the opacity applied, so a 50% object looks like 25% where they overlap. Opacity should hit the combined result once. The blend mode should be stable at every opacity, including 100%.

## The constraint

Regular layers isolate. Layout frames isolate. Children inside them blend with their siblings. The layer's own blend mode, or the frame's, is what talks to artwork below. That stays true at every opacity. A frame at 100% and a frame at 40% use the same isolation rule. You do not get a surprise leak because you faded the screen mock.

An explicit layer group is the object that can enable Pass through. Ctrl+G makes that group. Pass through controls whether child blend modes interact with the backdrop outside the group. Enable it and a Multiply child reaches art behind the group. Disable it and the group isolates: children blend inside, and the group's own blend mode meets the backdrop. That is the Photoshop isolation move, done on a group, in Design, in the same `.oma` as the poster. You do not leave for a raster app to get the group to behave.

Pass through is not offered as the way out of a regular layer or a Layout frame. Those containers isolate. If you need children to punch through to the page, you want an explicit group and Pass through enabled. If you need a UI frame to composite as one picture, the frame already isolates, and its opacity and blend apply to the whole subtree.

Object opacity applies once to the combined fill, image, and stroke. Layer opacity applies once to the complete contents. Placed images use the layer controls above the Layers tree. These settings survive the project save and SVG export.

## What landed

Every vector object and every Layout frame has Opacity and Blend in its transform inspector. The blend list is Normal, Multiply, Screen, Overlay, Darken, Lighten, Color Dodge, Color Burn, Hard Light, Soft Light, Difference, Exclusion, Hue, Saturation, Color, and Luminosity. Placed images take opacity and blend from the layer controls above the Layers tree.

A frame's opacity and blend apply to its complete subtree. An object's opacity applies once to its combined fill, image, and stroke. A layer's opacity applies once to everything in the layer. Set 40% and you get 40% of the combined result, not 40% of each piece stacked again.

Regular layers and Layout frames isolate their contents. Child blend modes interact with siblings in the same container. The container's blend mode interacts with artwork below. This holds at every opacity, including fully opaque.

Explicit layer groups can enable Pass through. With Pass through on, child blend modes interact with the backdrop outside the group. Disable Pass through for isolated group blending. The children resolve against each other. The group then uses its own blend mode on the way out. Photoshop users will recognize the isolated group. The control here is Pass through, and disabling it is the isolation.

The group is still a group. It expands, renames, hides, locks, and reorders as a unit. Pass through does not combine paths and does not release the group. Ctrl+Shift+G ungroups. The blend switch is about compositing, not about geometry.

A drop shadow in FX and a Multiply blend can both sit on the logo. The filter is the filter. The blend is the blend. One object gets one blend and one opacity.

## In the hand

Place a photograph. Draw three overlapping shapes above it, on their own layer or in a group you are about to make. Set each shape to Multiply. If they live on a regular layer, they multiply against their siblings, and the layer's blend mode is what the photograph sees. Set the layer to Normal and the photo sees the already-composited layer. That is isolation, and you did not have to hunt for it. Regular layers isolate.

Select the three shapes and press Ctrl+G if you want the explicit group. Enable Pass through. Each Multiply shape now reaches the photograph. The overlaps on the photo look like three separate multiplies. Disable Pass through. The three shapes multiply against each other inside the group, and the group meets the photo with the group's blend mode. Set the group to Normal. The photo is no longer multiplied by each child. It sees the group.

Change the group's opacity to 50%. The isolation stays. You do not get the children leaking onto the photo because the group faded. Put the opacity back to 100% when you have seen it.

On a single shape, set opacity to 50% with both a fill and a stroke. The fade hits the combined paint once. The overlap between fill and stroke does not go twice as thin.

```
Blend                 Multiply, Screen, Overlay, and the rest
Regular layer, frame  Children blend inside; the container meets the backdrop
Ctrl+G                Explicit group
Pass through on       Child blends reach outside the group
Pass through off      Isolated group blending
Opacity               Once, on the combined result
```

SVG export keeps the blend and the opacity. Save the `.oma` first. The export is a copy of the compositing you set, not a second place to author it. If a screen mock should isolate, leave it as a Layout frame. If a cluster of inks should each reach the photo, group them and enable Pass through.

Undo is one step if the last change was the blend or the opacity. Ctrl+Z returns the previous mode. The geometry stays.

## The edge

Pass through belongs to explicit layer groups. A regular layer will not pass child blends through to the backdrop. A Layout frame will not either. Both isolate. Children meet siblings. The container meets what is below, at every opacity.

Disable Pass through when the group should isolate. Enable it when each child should blend with the backdrop. The switch does not weld paths, and it does not change the layer order. It changes who the blend modes can see.

Press Ctrl+G on the inks that should reach the photograph, and set Pass through to the compositing you actually want.
