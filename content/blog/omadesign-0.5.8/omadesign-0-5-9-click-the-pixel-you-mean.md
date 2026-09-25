---
id: R059-01
title: Click the pixel you mean: a screen-wide eyedropper and six fixes in 0.5.9
slug: omadesign-0-5-9-click-the-pixel-you-mean
excerpt: "0.5.9 passed QA on 24 September. The eyedropper now reaches any pixel on screen, and six fixes land with it, from Alt-subtract on pixel selections and dilate/erode to the pen's open end."
publishedAt: 2026-09-24T23:59:01Z
tags: [omadesign, 0.5.9, fixes, eyedropper]
coverImage: /blog/omadesign-0-5-9/omadesign-0-5-9-click-the-pixel-you-mean/og.png
---

## The habit

Fix releases show me which of my assumptions were wrong. This one had a color I could see and could not pick, a selection I could not trim, and a filter that died on a normal document. Most items trace back to a GitHub issue that says exactly what broke.

## The constraint

0.5.9 was the bugfix stack on current master plus the version, changelog and studio note. It contains no 0.6.0 features. I passed QA on this build the same day it shipped, 24 September 2026.

## What landed

The changelog lists seven items. One is closer to a feature (the screen-wide eyedropper), and the other six are fixes.

**1. The eyedropper leaves the window.** Choose the eyedropper and it grabs the next pixel anywhere on screen, including other windows. Escape returns to canvas sampling. Press I to grab the screen again. Before this, it read only the active raster or the active object's fill. ([#93](https://github.com/michaelmonetized/omadesign/issues/93))

**2. Alt subtracts from a pixel selection.** Shift still adds. Alt now subtracts from marquee, ellipse, lasso, wand, and a Ctrl-click outline. ([#96](https://github.com/michaelmonetized/omadesign/issues/96))

**3. Dilate and erode hold a hard cutout.** The old morphology zeroed opaque pixels and walked every neighbor in the window, so on a placed photo it pegged the CPU and then wiped the object. Dilate now grows the silhouette from the nearest opaque pixel. Erode shrinks the edge and leaves the middle alone. ([PR #107](https://github.com/michaelmonetized/omadesign/pull/107), fixes [#106](https://github.com/michaelmonetized/omadesign/issues/106))

**4. Welcome links bring the browser forward.** What's new and the other welcome links already opened a tab, but on Wayland the browser stayed behind the Omadesign window. The opener now carries an activation token, and on Hyprland it focuses the browser. ([#104](https://github.com/michaelmonetized/omadesign/issues/104))

**5. Cloud sign-in confirms who you are.** The sign-in dialog stays open, says you're in, and names the account. The welcome row and the File menu keep showing that line.

**6. Midnight Duotone runs on a vector page.** The Studio starter's duotone asked the active layer for pixels. On a normal document that is the vector layer, so Run failed immediately. Pixel filters now use the visible raster, including a photo under a vector layer. With no raster at all, the filter bakes what you see into a layer named Filtered image and filters that. Alpha stays. Undo removes the layer. ([#105](https://github.com/michaelmonetized/omadesign/issues/105))

**7. The pen's open end.** Clicking the open end of a live pen path drops the forward handle and keeps the incoming one, so the next segment can leave from a sharp corner.

## In the hand

Press I and click a color in your browser window. It lands in the fill. Press Escape to return to the canvas.

Make a marquee selection, then hold Alt and draw a lasso through it to cut a piece out.

On a vector-only page, run Midnight Duotone from Plugins. A Filtered image layer appears with the result. Ctrl+Z removes it.

## The edge

The release is [v0.5.9](https://github.com/michaelmonetized/omadesign/releases/tag/v0.5.9), merged as [PR #114](https://github.com/michaelmonetized/omadesign/pull/114). Packages are linked with Zig against glibc 2.35 and need only libm and libc. An update leaves plugins you already installed in place.

Some of these fixes are narrow. The browser-focus fix is specific to Wayland activation and Hyprland. The duotone fix changes what pixel filters read when the active layer is not a raster. They read the visible raster if there is one, and otherwise a baked Filtered image layer. That adds a new layer to your stack and leaves your vectors unedited.

```sh
curl -fsSL https://omadesign.app/install | sh
```
