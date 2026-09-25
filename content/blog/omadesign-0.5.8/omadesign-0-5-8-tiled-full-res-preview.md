---
id: T072
title: Tiled full-res preview
slug: omadesign-0-5-8-tiled-full-res-preview
excerpt: The first view is a preview whose long edge is at most 1600 pixels. Zoom in and full-resolution tiles fill in from a background develop. The preview stays up until those tiles exist.
publishedAt: 2026-09-07T01:37:01Z
tags: [omadesign, 0.0.2-alpha, photo]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-tiled-full-res-preview/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-tiled-full-res-preview/og.png
---

## The habit

When you open a large RAW, you want the sliders right away. A smart preview is enough for setting exposure, and fine detail can come later. The failure is a window that draws nothing until the full sensor has been demosaiced, graded and uploaded. On a laptop that window is frozen, and on a big RAF it stays frozen longer.

The other failure is a late tile from the previous photo, or from the previous Exposure setting. You moved on and the worker didn't. That tile has to be thrown away, so the face on screen stays the grade you are actually judging.

Fit, 100%, pinch and scroll have to keep working while the sharp tiles are being prepared. A progress bar that blocks the pointer is the frozen window all over again.

## The constraint

Within the session, the linear decode is the master. Develop settings are a separate object. The on-screen preview is a third thing, capped at a 1600 pixel long edge, so the first draw has a fixed cost. A 6246 × 4170 RAF doesn't have to become a 6246-wide texture before you can move Temperature. The 1600 edge applies to that first picture. It keeps the aspect ratio and shows the whole frame as a stand-in.

Zooming in asks a background worker for full-resolution detail. The worker develops the full image, and the viewer uploads only the tiles you can see. The previous preview stays on screen while those tiles are prepared, so the photo doesn't flash empty. When the tiles are ready, they replace the preview in the region you are looking at. Pan, and the newly visible region requests its own tiles. You never upload the entire sensor to the GPU to inspect one eye.

Results for an older photo or an older adjustment are discarded. The worker may finish late, so the viewer checks. If you have switched photos or moved a slider, that result doesn't paint, and the current preview stays until a matching full-resolution result arrives. That way the display stays accurate without making you wait.

The UI thread keeps the pointer. Space, Hand, middle-drag and two-finger scroll pan. Pinch, Ctrl+scroll and Alt+scroll zoom. `Ctrl+0` fits and `Ctrl+1` goes to 100%, which is the zoom where the full-resolution request matters. At Fit, the 1600 preview is enough. At one hundred percent, you are asking to see sensor detail.

Export doesn't use this preview as its pixel source. It develops the full resolution in the background, crop and rotation included. The tiles are only for viewing, and the file is the full develop. Auto light, on the other hand, measures the preview, because it is a quick starting point from the image already loaded. If you set Exposure with Auto and then zoom, you are looking at full-resolution tiles of a grade measured on the small picture. If the full detail disagrees, nudge the slider. New tiles will catch up and the old ones will be dropped.

Decoder limits still apply. A file over 64 megapixels or 512 MiB doesn't get a preview at all. The 1600 cap isn't a way around that rejection. It keeps a file within the limits responsive.

## What landed

Open a RAW, and the first picture's long edge is at most 1600 pixels. A small JPEG may already be under that cap, and it won't be enlarged. A large RAW is scaled down to the cap for the first draw, with its aspect ratio preserved. The develop header, the histogram and the sliders all work on that picture, so you can start grading.

Zoom with `Ctrl+1` or a pinch. A background worker prepares full-resolution detail for the current photo and the current settings. Until it returns, you still see the scaled preview, and then the visible tiles replace it. The rest of the sensor doesn't have to be resident as a screen texture. Pan to a corner and that corner loads the same way, with the preview staying on screen until its tiles arrive.

Change Exposure while a tile job is running, and the late result from the old Exposure is discarded. You won't see the previous grade flash on top of the new one. Switch photos in the library while a job is running, and the late tiles from the photo you left are discarded too. The photo you selected shows its own preview and then its own tiles.

The linear pixels from the decode stay in the session, separate from the 1600 preview and from the settings. Reset and undo change settings. They don't throw away the decode and restart LibRaw unless you reopen the file. That is why undoing a slider change feels instant, and why a tile refresh can run from data that was already decoded.

Before shows the default development through the same display path, so you compare grades at the same detail level, and you can zoom either one. Zoom while holding Before if you need to see the default at full detail. The rule about stale results still applies when you release Before and your grade returns.

The Shortcut HUD and the develop panel don't wait for tiles. Hardness keys belong to Pixel. Here the keys are the view keys, and the panel stays clickable. Auto light can run on the preview you have. Save settings writes only numbers, so the sidecar is tiny, because the preview was never part of the file.

## In the hand

Drop a large RAF or DNG. Don't wait for a sharp full-window image before touching Exposure, because the 1600 preview is the picture you grade on. Move Exposure and Temperature until the grade is roughly right. If you lose the fit, press `Ctrl+0`. The whole frame is the preview, so it is cheap to redraw.

```
Ctrl+0   fit
Ctrl+1   100%, ask for full-resolution tiles
pinch, Ctrl+scroll, Alt+scroll   zoom
Space, Hand, middle-drag, two-finger scroll   pan
```

Press `Ctrl+1` on an eye, a fabric weave or a distant sign. The preview holds while tiles arrive for the region in view. If they are slow, you can still pan, because the worker doesn't hold the pointer.

Move Highlights while you are at 100%. The old tiles become invalid and disappear. You see the preview of the new grade first, then the new tiles. With a frozen UI, you wouldn't have seen the Highlights change until the full sensor finished. Here you see the direction immediately and the detail follows.

Switch to the next photo and its preview appears. Tiles still computing for the previous photo can't paint over this one. Grade the new frame, zoom when you care about detail, and export when you need a file. Export uses the full developed size, well beyond the 1600 preview. If a sign looked illegible only because you were on the fit view, zoom in before you decide the grade failed.

Use Place in Design when the layout needs an 8-bit layer. That path also develops at full resolution in the background, so it isn't a screenshot of the 1600 preview. The tiles and the placement both use the same full-resolution work, and neither one stops you from moving the view.

## The edge

The first view never loads the full sensor. Its long edge is capped at 1600 pixels so the sliders and the pointer stay responsive. Full detail comes as visible tiles, prepared off the UI thread and uploaded only for the region you can see, and the previous picture stays up until the new tiles exist.

A finished worker result that belongs to an older photo, or to settings you already changed, is discarded without painting. Export and Place in Design don't use the cap. They develop at full resolution. The 1600 edge only applies to the screen, and only until you zoom.
