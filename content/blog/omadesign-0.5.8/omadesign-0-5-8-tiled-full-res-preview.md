---
id: T072
title: Tiled full-res preview
slug: omadesign-0-5-8-tiled-full-res-preview
excerpt: The first view is a preview whose long edge is at most 1600 pixels. Zoom in and full-resolution tiles fill in from a background develop. The preview stays up until those tiles exist.
publishedAt: 2026-09-07T01:37:01Z
tags: [omadesign, 0.5.8, photo]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-tiled-full-res-preview/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-tiled-full-res-preview/og.png
---

## The habit

You open a large RAW and you want the sliders now. A smart preview is enough for exposure. Fine detail can arrive after. The failure is a window that draws nothing until the full sensor has been demosaiced, graded, and uploaded. On a laptop that window is frozen. On a big RAF it is frozen for longer.

The other failure is a late tile from the previous photo, or from the previous Exposure. You moved on. The worker did not. That tile has to be thrown away. The face on screen stays the grade you are actually judging.

Fit, 100%, pinch, and scroll have to keep working while the sharp tiles cook. A progress bar that eats the pointer is the frozen window again.

## The constraint

The linear decode is the master inside the session. Develop settings are a separate object. The on-screen preview is a third thing, capped at a 1600 pixel long edge, so the first draw is bounded. A 6246 × 4170 RAF does not have to become a 6246-wide texture before you can move Temperature. The 1600 edge is the contract for that first picture. It keeps aspect. It is not a crop. It is a stand-in.

Zooming in asks a background worker for full-resolution detail. The worker develops the full image. The viewer uploads only the tiles you can see. The previous preview stays on screen while those tiles are prepared, so the photo does not flash empty. When the tiles are ready, they replace the preview in the region you are looking at. Pan, and the next visible region can request its own. You do not upload the entire sensor to the GPU to inspect one eye.

Results from an older photo, or from an older adjustment, are discarded. The worker may finish late. The viewer checks. If you have switched photos, or moved a slider, that finish does not paint. The current preview remains the current preview until a matching full-resolution result arrives. That is how the UI stays honest without waiting.

The UI thread keeps the pointer. Space, Hand, middle-drag, and two-finger scroll pan. Pinch, Ctrl+scroll, and Alt+scroll zoom. `Ctrl+0` fits. `Ctrl+1` is 100%, which is the zoom that makes the full-resolution request matter. Fit is where the 1600 preview is enough. One hundred percent is where you are asking to see sensor detail.

Export does not use this preview as its pixel source. Export develops the full resolution in the background, crop and rotation included. The tiles are for your eyes. The file is the full develop. Auto light, by contrast, measures the preview, because it is a quick start from the image already in hand. If you set Exposure from Auto and then zoom, you are looking at full-resolution tiles of a grade that was measured on the small picture. Nudge the slider if the full detail disagrees. The tiles will catch up, and the old tiles will be dropped.

Decoder limits still apply. Over 64 megapixels, or over 512 MiB, the file does not become a preview. The 1600 cap is not a way around the reject. It is how a legal file stays responsive.

## What landed

Open a RAW. The first picture's long edge is at most 1600 pixels. A small JPEG may already be under that cap, so it will not grow. A large RAW will shrink to the cap for the first draw, aspect preserved. The develop header, the histogram, and the sliders are live on that picture. You can grade.

Zoom. `Ctrl+1` or a pinch inward. A background worker prepares full-resolution detail for the current photo and the current settings. Until it returns, you still see the preview, scaled. Then visible tiles replace it. The rest of the sensor is not required to be resident as a screen texture. Pan to a corner. That corner can come in the same way. The preview policy is the same: something stays on screen.

Change Exposure while a tile job is running. The late result from the old Exposure is discarded. You do not see a flash of the previous grade snapped on top of the new one. Switch photos in the library while a job runs. The late tiles from the photo you left are discarded. The photo you selected keeps its own preview, then its own tiles.

The linear pixels from the decode stay in the session, separate from the 1600 preview and separate from the settings. Reset and undo change settings. They do not throw away the decode and start LibRaw over unless the file itself is reopened. That is why undo of a slider feels like a slider, and why a tile refresh can run from data you already paid to decode.

Before shows the default development. That view follows the same display path. You are comparing grades, not comparing a full-resolution default against a preview-sized edit without being able to zoom either one. Zoom while Before is held if you need the default at real detail. The worker's stale-result rule still applies when you release Before and your grade returns.

The Shortcut HUD and the develop panel do not wait on tiles. Hardness keys are a Pixel concern. Here the keys are the view keys. The panel stays clickable. Auto light can run on the preview you have. Save settings writes numbers, not tiles. The sidecar is tiny because the preview was never the file.

## In the hand

Drop a large RAF or DNG. Do not wait for a full-window sharp image before you touch Exposure. The 1600 preview is the picture. Move Exposure and Temperature until the grade is in the right place. Press `Ctrl+0` if you lost the fit. The whole frame is the preview, cheap to redraw.

```
Ctrl+0   fit
Ctrl+1   100%, ask for full-resolution tiles
pinch, Ctrl+scroll, Alt+scroll   zoom
Space, Hand, middle-drag, two-finger scroll   pan
```

Press `Ctrl+1` on an eye, a fabric weave, a distant sign. The preview holds. Tiles arrive for the region in view. If they are slow, you can still pan. The worker is not the pointer.

Move Highlights while you are at 100%. The old tiles are invalid. They do not stick. The preview of the new grade shows, then new tiles. That gap is the point. A frozen UI would have hidden the Highlights change until the full sensor finished. Here you see the direction immediately, and the detail catches up.

Switch to the next photo. Its preview appears. Any tiles still computing for the previous photo are not allowed to paint this one. Grade the new frame. Zoom when you care about detail. Export when you care about a file. The export's resolution is the developed full size, not 1600. If the sign was illegible only because you were on the fit view, zoom before you decide the grade failed.

Place in Design when the layout needs an 8-bit layer. That path also develops at full resolution in the background. It is not a screenshot of the 1600 preview. The tiles and the placement are two consumers of the same full-resolution work. Neither one blocks the other from letting you move the view.

## The edge

The first view refuses to be the full sensor. The long edge caps at 1600 pixels so the sliders and the pointer stay alive. Full detail is visible tiles, prepared off the UI thread, uploaded for the region you can see. The previous picture stays up until the new tiles exist.

A finished worker that belongs to an older photo, or to settings you already changed, is discarded. It does not paint. Export and Place in Design do not inherit the cap. They develop the full resolution. The 1600 edge is only the screen, and only until you zoom.
