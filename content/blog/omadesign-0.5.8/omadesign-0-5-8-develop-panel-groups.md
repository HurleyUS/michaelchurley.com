---
id: T068
title: Develop panel groups
slug: omadesign-0-5-8-develop-panel-groups
excerpt: Develop is three groups: Light, Color, and Detail. Tone curve, color mixer, and color grading stay collapsed until you open them. Before is the default development. Auto light sets exposure from the preview.
publishedAt: 2026-09-06T10:42:01Z
tags: [omadesign, 0.0.1-alpha, photo]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-develop-panel-groups/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-develop-panel-groups/og.png
---

## The habit

The right rail in a develop app is usually a long scroll: basic tone, a curve, HSL, grading, and detail. On a short screen, a rail with everything open pushes the photo aside. Most of the time you use three groups, Light, Color, and Detail. The curve, the mixer, and the grading can stay closed until the basic sliders aren't enough.

Before is the habit of holding a key or button to see the file without your grade. In this studio, Before means the default development. On a RAW, that default is the camera-balanced decode, and never the JPEG the camera embedded for its screen. If you want that JPEG, it is a different file. Auto is the other habit: one click that sets exposure and the ends of the histogram so the picture fits the window, and then you take over. Auto gives you a better starting point than a black frame, and the finished print is still up to you.

Reset sits at the top for when you want every slider back to default on this photo only. The rest of the roll stays where you left it.

## The constraint

The develop controls have to fit beside the photograph in one window, on Linux, in the same binary that also draws vectors. A rail that never collapses would shrink the picture to a stamp. So the panel has three selectable groups, Light, Color, and Detail, and the heavier editors (Tone curve, Color mixer, and Color grading) start closed. You open the one you need, and the others stay a single row.

The sliders write develop settings for the selected photo and never touch the camera file. On a RAW, Exposure and white balance run on the 16-bit linear source, before the display transfer. The other corrections are stored as settings in the develop stack. Undo for these edits uses Photo's own history, per selected photo, separate from the Design document's undo. Saving a `.oma` in another tab doesn't store this grade. Save settings does, writing an `.omaphoto` beside the original when you ask.

Auto light has to be predictable and local. It reads the preview image for this photo, samples luma, and sets Exposure, Blacks, and Whites. The low end is the 1st percentile and the high end is the 99th. Exposure recenters the midpoint between the two, and Blacks and Whites pull in the ends. The tooltip says it balances exposure and contrast. That contrast comes from the end sliders, and the Contrast slider itself is left untouched. An empty preview does nothing and leaves the defaults. You can move every slider afterward, because Auto doesn't lock anything.

Before toggles `show original`. You see the default development while your settings stay in the panel, and toggling again brings your grade back. Looking copies, saves, and discards nothing.

Reset replaces the selected photo's develop parameters with the defaults and marks the photo as unsaved. It affects one photo only. Changing several photos at once is a different command, pasting a look, which you run on purpose.

## What landed

The panel is titled Develop. Reset is on the right, with the tooltip "Reset all adjustments for this photo." Under the file name, RAW files show make, model, and the exposure line, followed by the histogram, then Auto light and Before.

Light holds Exposure from −4 to 4, Contrast from 0.2 to 2.4, and Highlights, Shadows, Whites, and Blacks, each from −1 to 1. Tone curve opens onto five points (Blacks, Shadows, Midtones, Highlights, Whites), each from 0 to 1.

Color holds Temperature and Tint from −100 to 100, Vibrance and Saturation from 0 to 2, and Hue from −180 to 180. Color mixer opens onto one channel at a time: Red, Orange, Yellow, Green, Aqua, Blue, Purple, or Magenta. Each channel has Hue from −40 to 40, Saturation from −1 to 1, and Luminance from −1 to 1. Color grading opens onto Shadows and Highlights, each with Red, Green, and Blue from −0.4 to 0.4, plus Balance from −1 to 1.

Detail holds Clarity, Dehaze, and Vignette from −1 to 1, and Grain from 0 to 1. Below those, Orientation is 0, 90, 180, or 270 degrees. Clear crop is enabled when a crop exists and resets the crop to none. Cropping itself uses the Crop tool (`C`), with Enter to apply and Esc to cancel during the drag. Once a crop exists, the panel holds the rotation and the clear button.

Every slider has a label, a number, and a bar, and Photo history records each edit. Applying the same values again doesn't add another entry. The panel always shows the current settings, and Before shows the defaults underneath them without clearing the panel.

The panel remembers which group you clicked for the session. You land on Light first, and Color and Detail are one click away. You never scroll past a fully expanded curve to reach Grain. You open the curve when you need the five-point editor, close it, and move on.

Auto light measures the display-sized preview you are looking at, so there is no separate analysis pass to wait for. On a RAW, the preview is the 1600-pixel stand-in until full-resolution tiles arrive, which makes Auto a preview measurement. If you need the ends judged on the full sensor data, look at the full-resolution tiles and set Exposure, Blacks, and Whites yourself. The button gives you a starting point, and the sliders make the grade.

## In the hand

Open a RAW and the picture appears. Click Auto light if the frame looks muddy, and look again. If the midtones are right and the sky clipped, pull Highlights down yourself. Auto only set Exposure, Blacks, and Whites, and the rest of Light is still yours.

Open Tone curve only if the basic sliders can't make the shape you want. Pull Midtones and close the curve. The points stay, because they are stored settings and the panel doesn't need to stay open.

```
Light     Exposure Contrast Highlights Shadows Whites Blacks
          Tone curve
Color     Temperature Tint Vibrance Saturation Hue
          Color mixer · Color grading
Detail    Clarity Dehaze Grain Vignette
          0° 90° 180° 270° · Clear crop
```

Press Before and you see the default camera-balanced develop, while the sliders still show your numbers. Press Before again and your grade returns. It is a quick way to answer a client who asks "what did you do?" by showing a comparison.

Click Color and set Temperature until the gray looks gray. Open Color mixer, pick Blue, and pull Luminance down if the sky is too loud, then close it. Click Detail and add a little Clarity. Set Grain back to 0 if you touched it by accident. If the photo should go back to default entirely, use Reset at the top. The other photos in the library don't change.

`Ctrl+Z` steps back through Photo's history for this photo. The Design tab has a separate history stack, so you can grade, undo the grade, and find the poster in the other tab exactly where you left it.

Click Save settings when the grade should survive the session. Until then, the slider values exist only in memory. The camera file stays unchanged, and Before and Auto light don't write to it either.

## The edge

Before never shows the embedded JPEG. It shows the default development, which on a RAW is the camera-balanced linear decode after the display transform, produced by the decoder with automatic brightness off. Your slider values stay loaded while you look.

Auto light only measures the preview. It sets Exposure, Blacks, and Whites from the 1% and 99% ends and stops there. "Contrast" in the tooltip refers to those ends, and the Contrast slider is still yours. Reset never touches the rest of the roll. It returns one photo to defaults and marks it unsaved, ready for a cleaner grade.
