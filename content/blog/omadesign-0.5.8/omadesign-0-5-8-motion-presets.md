---
id: T080
title: Motion presets
slug: omadesign-0-5-8-motion-presets
excerpt: Select vectors and apply Draw stroke, Pop in, Slam, Shake, Fill up, the four Slides, Fly, Zoom, Buzz, or Fade in. Locked, hidden, and guide objects are skipped.
tags: [omadesign, 0.5.8, motion]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-motion-presets/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-motion-presets/og.png
---

## The habit

After Effects gave you a dozen ways to fade a logo and a project panel full of presets you do not remember installing. The good ones become ordinary keyframes after you apply them, and that is the part worth keeping. The bad ones stay a black box with a hidden slider, and you cannot ease the second key because the effect never became keys. Illustrator's limited animation, and the various "smart animate" buttons in other apps, often leave you with a transition object you cannot edit as a timeline. Affinity's timeline is closer to keys, and you still start most moves by keying opacity and position yourself.

The hand wants a named start. Draw the stroke on. Pop the mark in. Slam it. Shake it. Fill it from empty. Slide it in from an edge. Fly, zoom, buzz, fade. Thirteen starts, not a marketplace. Then the hand wants those starts to become keys you can drag, delete, and ease like any other keys. A preset that remains a preset is a second editing mode. You already have a timeline.

You also want a mixed selection to behave. The logo, the guide you used to place it, the locked caption, the hidden construction line. Apply "fade" to all of that and a sloppy preset will fade the guide, or it will error the whole selection because one object has no stroke.

## The constraint

The rest pose stays the artboard you drew. A preset cannot flatten the path into a baked outline, and it cannot rewrite the object into a movie clip that Design can no longer edit. The tracks available are X, Y, rotation, scale, opacity, stroke reveal, and fill reveal. Every preset has to be made out of those tracks. If a move needs a track the clip does not have, it does not get to invent one and then fail on export.

Each application has its own Undo. You can try Slam, undo, and try Pop in. The second apply does not fuse to the first. You do not accumulate a stack of half-applied effects.

The `.oma` holds the clip. Presets do not need a network, a library login, or a pack downloaded beside the binary. They ship in the Motion inspector. The inspector opens on them, with appearance and manual key controls folded away until you need them. Duration sits above the list so the length is decided before the name.

Objects that cannot take the preset have to be skipped, not damaged. A guide is not artwork. A locked object is locked. A hidden object is hidden. Draw stroke on a fill with no visible stroke is the wrong object. Fill up on an open path with no fill is the wrong object. The rest of the selection should still get the move.

## What landed

Select vector artwork. In the inspector, choose one of:

**Draw stroke. Pop in. Slam. Shake. Fill up. Slide up, Slide down, Slide left, Slide right. Fly. Zoom. Buzz. Fade in.**

That is thirteen starts. Draw stroke traces the path. It does not fade the object in and call that a drawing. Fill up reveals the interior from the bottom. It wants a closed shape with a fill. Draw stroke wants a visible stroke. Those two are reveal tracks, stroke reveal and fill reveal, the same channels the native canvas, animated SVG, and Lottie already know how to play.

Pop in, Slam, Shake, the four slides, Fly, Zoom, Buzz, and Fade in are the other starts. Each one becomes keys on the tracks the clip already has. The name is the description you get. Once the preset has run, you are looking at ordinary keys. Diamonds on the timeline. You can retime them, delete them, and cycle ease on a selected key the same way you would if you had keyed the selection yourself.

Incompatible objects are skipped. Locked objects are skipped. Hidden objects are skipped. Guide objects are skipped. A selection that mixes a logo and a guide fades the logo and leaves the guide alone. A Draw stroke on a shape with no visible stroke skips that shape. A Fill up on an open path that has no closed fill skips that path. The objects that qualify receive the preset. The objects that do not stay as they were.

Each application has its own Undo. The preset replaces only the channels it affects, inside the time interval it occupies, and it can extend the clip if the move needs more time than the clip had. Unrelated animation on other channels stays. You can Fade in a mark that already has a position move, and the position move remains.

Duration is the control above the presets. Set it before you apply if this entrance needs to be long. Timing and energy, the delay and the stagger and the rest, are the next decision. The preset itself is the named start.

## In the hand

Switch to Motion. Select the wordmark, the rule, the dot. Leave the guides in the selection if they are still selected from the layout. You do not have to deselect them first.

Set the duration above the list. Choose the preset.

```
Fade in
```

Or Draw stroke, if the thing is a path with a stroke you want traced. Or Fill up, if it is a closed shape whose interior should rise from the bottom. Space previews. The timeline shows ordinary keys on the channels that preset owns.

Press Ctrl+Z. That application leaves. The drawing is still the drawing. Apply a different name. That is a new undo step. The first one is gone because you undid it. They did not stack into a mystery effect.

Select a locked caption along with the mark and apply again. The caption stays put. Select a guide and apply again. The guide stays a guide. Check the row. Keys appear on the objects that could take the preset. The skipped ones have no new diamonds.

If you need the keys to start later than zero, or to stagger across a selection, open **Timing & energy** before you apply. The preset will still become keys. The timing controls decide when those keys sit. After they exist, drag the diamonds if the stagger was almost right.

## The edge

A preset refuses to touch what it cannot honestly animate. No visible stroke, no Draw stroke. No closed fill, no Fill up. Locked, hidden, and guide objects are skipped. The skip is quiet and local. The eligible objects still get keys. Nothing in the skipped set is rewritten, unlocked, or shown.

A preset also refuses to stay a preset. The result is ordinary keys on the real tracks. You edit those keys from here. There is no hidden effect left behind to keep the move captive.

Select the vectors, pick the preset, and press Space. The keys on the timeline are the move.
