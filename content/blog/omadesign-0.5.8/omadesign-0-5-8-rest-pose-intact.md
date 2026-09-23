---
id: T079
title: Rest pose intact
slug: omadesign-0-5-8-rest-pose-intact
excerpt: The artboard you drew is the rest pose. Motion keeps a clip of tracks in the .oma and does not rewrite that drawing. Still PNG, JPEG, and SVG export the rest pose.
tags: [omadesign, 0.5.8, motion]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-rest-pose-intact/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-rest-pose-intact/og.png
---

## The habit

You draw the logo where it belongs. Then you animate it, and the file you get back is the logo at frame 12. Illustrator will let you make the mark, and After Effects will let you move it, and the two files drift. The AE comp holds a snapshot, or a linked AI that somebody converted to shapes, and the "clean" version is whichever file you remember to open. Photoshop's timeline has the same trap on a smaller scale. You nudge a layer at one second, and the document's idea of that layer is now the nudge.

Affinity Designer plus a separate motion tool splits the same way. The drawing lives here. The keys live there. Export a PNG from the wrong app and you ship the in-between.

The hand wants one artboard that stays the artboard. Play is a mode. The mark, the type, the poster, those stay where you drew them when the playhead is home and when you export a still. You should be able to keep designing the thing after you have given it a little motion, and the motion should not be baked into the anchors.

## The constraint

The project is one `.oma`. The manual's file line is blunt about it: JSON, rasters packed as PNG, and the motion clip, in that document. There is no sidecar timeline and no second binary for the clip. If Motion rewrote the vectors to match the playhead, the only copy of the logo would be the logo in motion. Undo would have to reconstruct the drawing from history every time you wanted the poster back. One undo step cannot be a promise if the rest pose was destroyed to make the play possible.

Still export and animated export have to be different files for that reason. A PNG, a JPEG, or a static SVG is the picture. An animated SVG or a Lottie is the clip. Mix those up and every "quick PNG of the logo" becomes a random frame. The still has to be the artboard you drew. The clip has to live in the `.oma` until you export it on purpose.

Linux does not owe you an After Effects install before a wordmark can fade. The persona switch is the whole trip: Design to draw, Motion to play. Same document, same layer stack, same undo model. The tracks have to be a small set you can explain, because a clip that can key every filter in the building will not round-trip honestly. The tracks are the ones the exports can tell the truth about.

## What landed

The artboard you drew is the rest pose. Motion does not rewrite it. You can move the playhead, preview the clip, and come back to the drawing. The anchors, the type, the fills you authored stay the authored thing. The clip is additional data on that artwork.

The tracks are **X, Y, rotation, scale, opacity, stroke reveal, and fill reveal**. Position and rotation and scale are the transforms. Opacity is the fade. Stroke reveal and fill reveal are how a path can draw on and how a closed fill can come up. That is the whole channel list. A preset, a dragged key, and `K` all write into those tracks. They do not invent a private effect stack that the drawing cannot show you.

The clip lives in the `.oma`. Save the document and the motion saves with it. Open it on another machine and the rest pose and the clip open together. There is no library link to repair and no fonts-from-the-cloud step hidden inside the timeline. Project fonts, if you are using them, are a brand-kit question. The motion itself is in the document you already saved.

PNG, JPEG, and static SVG stay the rest pose. Export one of those and you get the artboard you designed, not whatever frame the playhead was parked on. Animated motion leaves through **File → Export animated SVG…** or **Export Lottie…**. Those are the files that carry transforms and reveals. The still path is allowed to be boring. Boring is the logo, sitting where you drew it.

Design keeps working on the same objects. Change a color, edit the type, move a node. The rest pose is that edit. The clip plays from that pose. You did not have to flatten, expand, or hand the file to another app to keep the right to keep drawing.

## In the hand

Draw the mark in Design. Pen, type, whatever the poster needs. Save.

```
.oma
```

Switch to the **Motion** persona. The timeline sits under the canvas. The artboard does not jump, and the objects do not pick up a surprise transform. You are looking at the rest pose with a timeline attached.

Select a vector object. Give it a preset, or press `K`, or drag it once the playhead is somewhere useful. Those gestures write tracks. They are the next essays. What you should see right now is that the drawing's own geometry is still the drawing. Go back to Design, move a node, come back to Motion. The node move is the pose. The keys you added are still keys.

Export a PNG when you need the still. You get the rest pose. Export a static SVG when a developer needs the mark. You get the rest pose. The playhead can be sitting in the middle of a slam. The PNG does not care. The clip is still in the `.oma` the next time you open the document.

When you want the motion outside the app, export animated SVG or Lottie from the File menu. The `.oma` you keep is still the editable pose plus the clip. You did not burn the logo to ship the animation.

## The edge

Motion refuses to rewrite the artboard. Tracks sit on the objects. The objects stay the objects you drew. A still export refuses to sneak the playhead into the file. PNG, JPEG, and static SVG are the rest pose, even when playback is stopped on another frame.

The clip refuses to live anywhere but the `.oma`. There is no second timeline file to forget in the folder. Lose the document and you have lost the motion, because the motion was the document. That is the trade for having one file that tells the truth.

Save the `.oma`. The drawing you see at rest is the drawing you designed.
