---
id: T078
title: Photo navigation
slug: omadesign-0-5-8-photo-navigation
excerpt: In Photo, hold Space or use Hand to drag. Middle-drag and two-finger scroll pan. Pinch, Ctrl+scroll, and Alt+scroll zoom. Ctrl+0 fits. Ctrl+1 is 100%.
tags: [omadesign, 0.5.8, photo]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-photo-navigation/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-photo-navigation/og.png
---

## The habit

The grade is a lie until you have seen the eyelashes. Photoshop trained the hand a long time ago. Hold Space, the cursor becomes the hand, you drag, you let go, and you are back on the tool you were using. Ctrl+1 is actual pixels. Ctrl+0 fits the window. Affinity Photo uses the same pair, and the Hand tool is still H when you want it latched. Lightroom's develop view is the same idea with a different set of reminders: click the loupe, drag, fit, 1:1.

Scroll-wheel zoom never agreed with itself. Some apps want Ctrl and the wheel. Some want Alt. A trackpad wants a pinch. You have all three habits in the same week, because you move between a mouse at the desk and a laptop on the couch. Middle-drag is the other one, from the apps that treat the wheel button as the hand. Two-finger scroll on a trackpad is pan in some tools and zoom in others. You find out by ruining your place in the picture.

Photo in this studio has one more reason to keep the view cheap. The first thing you see is a preview. The full resolution shows up when you go looking for it. The hand has to be able to pan and zoom while that work happens, or a big RAW is a frozen window with a spinner where the eye should be.

## The constraint

One binary means Photo does not get its own zoom language. **Ctrl+0** fits a Design artboard. **Ctrl+0** fits a photo. **Ctrl+1** is 100% in both places. The keys list is one list. **F1** shows it. The Shortcut HUD shows the tool you are holding. A photo persona that invented Fit as Ctrl+9 would be a studio you have to relearn every time you switch tabs.

Space is already spoken for in Motion, where Space plays. In Photo there is no clip to play. Space belongs to the hand, the way it belongs to the hand in Photoshop when you are retouching. The persona is the switch. You do not hold a modifier to tell the app which Space you meant. You are in Photo, so Space drags.

The view is not a develop slider. Panning and zooming cannot write a sidecar, cannot crop, and cannot become an undo step you have to peel off before you can undo a real exposure change. Crop is its own tool, **C**. Enter applies a crop drag. Esc cancels it and the status says the crop was cancelled. Navigation stays off that commit.

The preview underneath is bounded so the UI can stay live. The first display preview has a maximum edge of 1600 pixels. Zoom in and the full-resolution detail is prepared in the background and shown as the tiles you can see. The pan and the zoom have to keep working while those tiles arrive. A navigation gesture that waits for the full decode has failed the reason it exists.

## What landed

Hold **Space** and drag the photo. Release Space and the previous tool is yours again. Press **H** and the Hand tool stays down until you pick something else. **Z** is Zoom. **C** is Crop. **I** is the eyedropper. Those are the Photo tool keys. Hand is the one that matches a latched pan when you are going to be in the corner of the file for a while.

Middle-drag pans. Two-finger scroll pans. You can move through a frame with the wheel button held, or with the trackpad gesture you already use to move a page. Pinch zooms. **Ctrl+scroll** zooms. **Alt+scroll** zooms. Both modifier-scroll habits do the same job here, so the week you spent in the other app still works.

```
Ctrl+0    fit the photo
Ctrl+1    100%
```

**Ctrl+0** fits the photo in the view and clears the pan, so you are looking at the whole frame and not at whatever corner you had dragged into. **Ctrl+1** shows the photo at 100% and clears the pan the same way. You land on actual pixels, centered, which is the check for sharpening, noise, and whether Detail was a good idea.

**Ctrl++** and **Ctrl+-** are the keyboard zoom steps, the same chords as the rest of the studio. They scale the Photo view while you are in the persona. Scroll and pinch are there when the hand is already on the pointing device. The keys are there when it is not.

None of this writes `.omaphoto`. None of this moves a develop slider. The grade you set is the grade you set. The view is how you inspect it. Zoom in far enough and the full-resolution tiles fill in behind the magnifying glass while the preview stays responsive. You can grade a large RAW without the window locking up to prepare a private full-size bitmap you did not need yet.

## In the hand

Open a RAW. The viewer shows the preview, max edge 1600. Fit it if the window has you cropped by accident.

```
Ctrl+0
```

Hold Space. Drag until the eye, or the label, or the edge of the product is in the middle. Let go of Space. You are back on the tool you had, sliders still the sliders. If you want the hand to stay, press **H** and drag without holding Space. Pick another Photo tool when you are done panning. **Z** zooms. **C** crops. **I** samples. Release Space and you are back on the tool you were holding.

Zoom into the detail:

```
Ctrl+1
```

That is 100%, pan cleared. Drag again with Space, or middle-drag, or a two-finger scroll, to walk the frame at actual pixels. Pinch, or hold Ctrl and roll the wheel, or hold Alt and roll the wheel, to go further. The tiles for the full image prepare in the background. The view keeps moving while they land. You can see which parts are still the preview and which parts have caught up, because the detail arrives as visible tiles.

Press **Ctrl+0** when you need the whole picture again. The pan offset goes away with the fit. Decide about the grade from the whole frame, then come back to 100% before you trust Detail.

Crop is a different gesture. Press **C**, drag, Enter to commit, Esc to cancel. Fitting the view never commits a crop. A sidecar appears when you save settings, not when you drag the picture around.

## The edge

Navigation refuses to become an edit. Fit, 100%, pan, and zoom do not write a `.omaphoto`, do not change crop or rotation, and do not take a step on the Photo undo stack. The camera file stays as it was. The sliders stay as you left them.

Space in this persona refuses to play anything. There is no timeline under a photograph. Hold Space and you drag the view. Play is what Space does after you switch to Motion, on a clip that actually exists.

Press Ctrl+1, hold Space, and drag across the real pixels before you trust the grade.
