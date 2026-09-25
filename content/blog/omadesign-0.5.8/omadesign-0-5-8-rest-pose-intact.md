---
id: T079
title: Rest pose intact
slug: omadesign-0-5-8-rest-pose-intact
excerpt: The artboard you drew is the rest pose. Motion keeps a clip of tracks in the .oma and does not rewrite that drawing. Still PNG, JPEG, and SVG export the rest pose.
publishedAt: 2026-09-02T14:57:58Z
tags: [omadesign, 0.0.1-alpha.rc, motion]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-rest-pose-intact/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-rest-pose-intact/og.png
---

## The habit

You draw the logo where it belongs, then animate it, and the file you get back is the logo at frame 12. Illustrator lets you make the mark and After Effects lets you move it, and the two files drift apart. The AE comp holds a snapshot, or a linked AI that somebody converted to shapes, and the "clean" version is whichever file you remember to open. Photoshop's timeline has the same trap on a smaller scale. You nudge a layer at one second, and from then on the document's idea of that layer is the nudge.

Affinity Designer plus a separate motion tool splits the same way. The drawing lives in one app and the keys live in the other. Export a PNG from the wrong app and you ship an in-between frame.

I wanted one artboard that stays the artboard, with playback as a mode. The mark, the type and the poster stay where you drew them when the playhead is at the start and when you export a still. You should be able to keep designing after you add some motion, and the motion shouldn't be baked into the anchors.

## The constraint

The project is one `.oma`. The manual is direct about the file: it is JSON, with rasters packed as PNG and the motion clip inside that document. There is no sidecar timeline and no second binary for the clip. If Motion rewrote the vectors to match the playhead, the only copy of the logo would be the logo in motion, and Undo would have to rebuild the drawing from history every time you wanted the poster back. Undo can't be reliable if the rest pose gets destroyed to make playback possible.

For the same reason, still export and animated export have to produce different files. A PNG, a JPEG or a static SVG is the picture. An animated SVG or a Lottie is the clip. If those got mixed up, every quick PNG of the logo would be a random frame. The still has to be the artboard you drew, and the clip stays in the `.oma` until you deliberately export it.

On Linux, you shouldn't need an After Effects install to make a wordmark fade. Switching personas is the whole trip: Design to draw and Motion to play, in the same document with the same layer stack and the same undo model. The set of tracks has to stay small enough to explain, because a clip that could key every filter would not round-trip accurately. The tracks are the ones the exports can represent correctly.

## What landed

The artboard you drew is the rest pose, and Motion doesn't rewrite it. You can move the playhead, preview the clip and come back to the drawing, and the anchors, type and fills are still what you authored. The clip is extra data on top of that artwork.

The tracks are **X, Y, rotation, scale, opacity, stroke reveal, and fill reveal**. Position, rotation and scale are the transforms, and opacity is the fade. Stroke reveal lets a path draw on, and fill reveal lets a closed fill come up. That is the complete list of channels. A preset, a dragged key and `K` all write into those tracks. None of them add a private effect stack that the drawing can't show you.

The clip lives in the `.oma`, so saving the document saves the motion. Open it on another machine and the rest pose and the clip open together. There is no library link to repair and no hidden step in the timeline that fetches fonts from the cloud. Project fonts, if you use them, belong to the brand kit. The motion itself is in the document you already saved.

PNG, JPEG and static SVG exports use the rest pose. Export one of those and you get the artboard you designed, whatever frame the playhead is parked on. Animated motion goes out through **File > Export animated SVG…** or **Export Lottie…**, which are the files that carry transforms and reveals. The still export is supposed to be predictable. It gives you the logo where you drew it.

Design keeps working on the same objects. Change a color, edit the type or move a node, and that edit becomes the rest pose that the clip plays from. You never have to flatten, expand or hand the file to another app to keep drawing.

## In the hand

Draw the mark in Design, using the pen, type or whatever the poster needs, and save.

```
.oma
```

Switch to the **Motion** persona. The timeline sits under the canvas. The artboard doesn't jump and the objects don't pick up a surprise transform. You are looking at the rest pose with a timeline attached.

Select a vector object. Apply a preset, press `K`, or drag the object once the playhead is somewhere useful. Each of those writes tracks, and later posts cover them in detail. For now, notice that the drawing's own geometry hasn't changed. Go back to Design, move a node, and return to Motion. The node move is now part of the pose, and the keys you added are still keys.

Export a PNG when you need the still, or a static SVG when a developer needs the mark. Both give you the rest pose, even if the playhead is stopped in the middle of an animation. The clip is still in the `.oma` the next time you open the document.

When you want the motion outside the app, export animated SVG or Lottie from the File menu. The `.oma` you keep still holds the editable pose plus the clip, so shipping the animation doesn't cost you the logo.

## The edge

Motion doesn't rewrite the artboard. Tracks sit on the objects, and the objects stay as you drew them. A still export never picks up the playhead position. PNG, JPEG and static SVG always use the rest pose, even when playback is stopped on another frame.

The clip only lives in the `.oma`, so there is no second timeline file to forget in the folder. The downside is that if you lose the document, you lose the motion too. That is the cost of keeping everything in one file.
