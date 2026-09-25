---
id: T068
title: Develop panel groups
slug: omadesign-0-5-8-develop-panel-groups
excerpt: Develop is three groups: Light, Color, and Detail. Tone curve, color mixer, and color grading stay collapsed until you open them. Before is the default development. Auto light sets exposure from the preview.
publishedAt: 2026-09-06T10:42:01Z
tags: [omadesign, 0.5.8, photo]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-develop-panel-groups/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-develop-panel-groups/og.png
---

## The habit

The right rail in a develop app is a long scroll: basic tone, a curve, HSL, grading, detail. On a short screen an open-everything rail shoves the photo aside. The groups you use are three. Light. Color. Detail. The curve, the mixer, and the grading stay closed until the basic sliders run out of room.

Before is the habit of holding a key or a button to see the file without your grade. In this studio, Before means the default development. On a RAW that default is the camera-balanced decode, not the JPEG the camera embedded for its screen. If you wanted that JPEG, it is a different file. Auto is the other habit. One click that sets exposure and the ends of the histogram so the picture is in the window, and then you take over. You do not accept Auto as the finished print. You accept it as a start that is better than a black frame.

Reset sits at the top for the day you want every slider back to default on this photo only. The rest of the roll stays where you left it.

## The constraint

The develop controls have to fit beside the photograph in one window, on Linux, with the same binary that also draws vectors. A rail that never collapses will shove the picture to a stamp. So the panel is three selectable groups, Light, Color, and Detail, and the heavier editors start closed: Tone curve, Color mixer, Color grading. You open the one you need. The others stay a single row.

The sliders write develop settings for the selected photo. They do not write the camera file. On a RAW, Exposure and white balance run against the 16-bit linear source, before the display transfer. The other corrections ride the develop stack as stored settings. Undo for these edits is Photo's own history, per selected photo, not the Design document's undo. A `.oma` save in another tab does not store this grade. Save settings does, into an `.omaphoto` beside the original, when you ask.

Auto light has to be deterministic and local. It reads the preview image for this photo, samples luma, and sets Exposure, Blacks, and Whites. The low end is the 1st percentile. The high end is the 99th. Exposure recenters the middle of those two. Blacks and Whites pull the ends. The hover text says it balances exposure and contrast. The contrast comes from those end sliders, not from a hidden rewrite of the Contrast slider. An empty preview does nothing and leaves the defaults. You can move every slider after that. Auto is not a lock.

Before toggles `show original`. You see the default development. Your settings stay in the panel. Toggle again and your grade is back. Nothing is copied, nothing is saved, nothing is discarded by looking.

Reset replaces the selected photo's develop parameters with the defaults and marks the photo dirty. One photo. The library selection is not a gang reset unless you pasted a look on purpose, which is a different command.

## What landed

The panel is titled Develop. Reset is at the right, hover "Reset all adjustments for this photo." Under the file name, RAW files show make and model and the exposure line. Then the histogram. Then Auto light and Before.

Light holds Exposure from −4 to 4, Contrast from 0.2 to 2.4, Highlights, Shadows, Whites, and Blacks, each from −1 to 1. Tone curve opens onto five points: Blacks, Shadows, Midtones, Highlights, Whites, each from 0 to 1.

Color holds Temperature and Tint from −100 to 100, Vibrance and Saturation from 0 to 2, and Hue from −180 to 180. Color mixer opens onto a channel: Red, Orange, Yellow, Green, Aqua, Blue, Purple, Magenta. Each channel has Hue from −40 to 40, Saturation from −1 to 1, and Luminance from −1 to 1. Color grading opens onto Shadows and Highlights, each with Red, Green, and Blue from −0.4 to 0.4, plus Balance from −1 to 1.

Detail holds Clarity, Dehaze, and Vignette from −1 to 1, and Grain from 0 to 1. Under those, Orientation is 0, 90, 180, or 270 degrees. Clear crop enables when a crop exists and sets the crop back to none. Crop itself is the Crop tool, `C`, with Enter to apply and Esc to cancel during the drag. The panel is where the rotation and the clear live once the crop exists.

Every slider is a label, a number, and a bar. Photo history records the edit. The same values applied again do not need a second story. The panel is the current settings. Before shows the defaults underneath them without clearing the panel.

The groups remember which one you clicked for the session's UI state. Light is where you land first. Color and Detail are one click. You do not scroll past a fully expanded curve to reach Grain. You open the curve when the five-point editor is the job, you close it, you move on.

Auto light uses the preview you are looking at, the display-sized image, not a second secret analysis pass you have to wait on. On a RAW the preview is the 1600-edge stand-in until tiles arrive. Auto is therefore a preview measurement. If you need the ends judged on the full sensor, look at the full-resolution tiles, then set Exposure, Blacks, and Whites yourself. The button is a start. The sliders are the grade.

## In the hand

Open a RAW. The picture appears. Click Auto light if the frame is muddy. Look. If the midtone is right and the sky clipped, pull Highlights down yourself. Auto did not freeze Highlights. It set Exposure, Blacks, and Whites. The rest of Light is yours.

Open Tone curve only if the five basic sliders cannot make the shape. Pull Midtones. Close the curve. The points stay. They are settings, not a panel you must leave open to keep.

```
Light     Exposure Contrast Highlights Shadows Whites Blacks
          Tone curve
Color     Temperature Tint Vibrance Saturation Hue
          Color mixer · Color grading
Detail    Clarity Dehaze Grain Vignette
          0° 90° 180° 270° · Clear crop
```

Press Before. You are looking at the default camera-balanced develop. The sliders still show your numbers. Press Before again. Your grade returns. Use that when a client asks "what did you do?" and the true answer is a comparison, not a speech.

Click Color. Set Temperature until the gray is gray. Open Color mixer, pick Blue, pull Luminance down if the sky is shouting. Close it. Click Detail. Add a little Clarity. Set Grain to 0 if you touched it by accident. Reset, at the top, if the photo should go back to default entirely. The other photos in the library do not move.

`Ctrl+Z` walks Photo's history for this photo. The Design tab's history is a different stack. You can grade, undo the grade, and the poster in the other tab is where you left it.

Save settings when the grade should survive the session. Until that click, the sliders are memory. The camera file is still the camera file. Before and Auto light do not write it either.

## The edge

Before refuses to show the embedded JPEG. It shows the default development. On a RAW that is the camera-balanced linear decode after the display transform, the one the decoder produced with automatic brightness left off. Your sliders stay loaded while you look.

Auto light refuses to be a full-sensor mystery pass. It measures the preview, sets Exposure, Blacks, and Whites from the 1% and 99% ends, and stops. Contrast in the hover means those ends. The Contrast slider is still yours. Reset refuses to touch the rest of the roll. One photo, back to defaults, marked unsaved, ready for a cleaner grade.
