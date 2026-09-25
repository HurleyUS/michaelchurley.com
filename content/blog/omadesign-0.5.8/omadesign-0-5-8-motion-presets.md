---
id: T080
title: Motion presets
slug: omadesign-0-5-8-motion-presets
excerpt: Select vectors and apply Draw stroke, Pop in, Slam, Shake, Fill up, the four Slides, Fly, Zoom, Buzz, or Fade in. Locked, hidden, and guide objects are skipped.
publishedAt: 2026-09-06T10:43:01Z
tags: [omadesign, 0.0.1-alpha, motion]
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

## Timing and energy

### The habit

A preset with one duration is a coin flip. After Effects makes you set the work area, then the key times, then the easy ease, and a stagger is an expression or a script you paste in. The result is right, and the setup is a seminar. Illustrator-to-AE workflows push the same work into the comp after the art is "done," which is how timing becomes somebody else's job. Affinity's timeline will let you drag keys once they exist. Getting five objects to enter 80 milliseconds apart is still five manual drags, and you will miss.

The hand wants the length first, then a small set of timing choices, then the named move. How long. How late. How far apart across the selection. How strong. Whether this entrance starts at the playhead you already parked, because the clip already has a first act. After that, the keys should be normal keys. If the stagger is a little wrong you drag diamonds. You do not reopen a wizard.

You also want a second preset to leave the first move alone. Fade the opacity. Keep the position keys you already liked. A timing pass that wipes the whole row is how people stop using presets.

### The constraint

The clip lives in the `.oma`. The rest pose stays the drawing. Timing controls cannot bake a new outline or a new object to "hold" the delay. They have to move keys on the tracks that already exist: X, Y, rotation, scale, opacity, stroke reveal, fill reveal.

Undo is one step per application. Changing duration, applying, hating it, and undoing has to restore the channels that application wrote, and only those. If Slam and Fade in fuse into one history entry, you cannot try a timing without betting the move you already accepted.

A preset that always starts at zero cannot coexist with a clip you have already built. Start-at-playhead is the control that respects the playhead as the start of this gesture. Extend-the-clip is the other half. If the move runs past the current duration, the clip grows. You should not have to open a document setting, lengthen the comp, then come back and apply. The apply sees the need and lengthens the clip.

Replacing "everything on the object" would make stagger dangerous. The rule is narrower. Replace the affected channels, inside the interval this preset occupies. Keys outside that interval stay. Channels this preset does not use stay. Unrelated animation stays. That is how a wordmark can slide and then, later, fade, without the fade eating the slide.

### What landed

**Duration** sits above the presets. Set it there. The presets underneath use that length. You see the number before you see Draw stroke, Pop in, Slam, and the rest, because a three-second fade and a third-of-a-second fade are different decisions and the decision comes first.

**Timing & energy** opens four options: **delay**, **stagger**, **intensity**, and **start-at-playhead**.

Delay holds the move off the start. The keys land later than they would have. Stagger spreads a multi-selection so the objects do not share one instant. The first object leads. The next follows. Intensity sets how strong the move is. A slam can be a small slam. A slide can be a short slide. You are scaling the energy of that preset, not adding a new track.

Start-at-playhead uses the playhead as the beginning of this application. Park at one second, turn the option on, apply Fade in, and the fade belongs to that moment. Leave it off when you want the preset's own start. Combined with delay and stagger, you can put a group entrance where the clip already is, then fan the members.

The preset still becomes ordinary keys. Timing does not leave a live "stagger object" on the row. You get diamonds. Drag them if the fan needs a correction. Delete one if one object should stay still. Cycle ease on a selected key if the curve is the remaining problem. Each application has its own Undo, so the timing you just tried is one Ctrl+Z.

The write is local. Affected channels inside the interval are replaced. Other channels on those objects stay. Keys outside the interval stay. If the new keys need a longer clip than you had, the clip extends. You do not lose the earlier act to make room. You gain time at the end.

Space previews the result in the persona. You hear the timing by watching it. Then you either undo or you keep the keys and keep drawing.

### In the hand

Open Motion. Select the three lines of a headline, or the four shapes in a mark. Look at the duration above the preset list. Change it if this entrance is short.

Open **Timing & energy**. Set a delay if the whole group should wait. Set a stagger if they should arrive as a sequence. Set intensity if the default energy is too much or too little for this artboard. Turn on start-at-playhead if the playhead is already where this move should begin. Move the playhead first if it is not.

```
Timing & energy
delay · stagger · intensity · start-at-playhead
```

Apply one preset. **Slide up**, or **Fade in**, or **Pop in**. Look at the rows. The diamonds sit on the channels that preset uses, shifted by the delay, fanned by the stagger, sized by the intensity, and anchored at the playhead if you asked for that.

Press Space. Watch one cycle. If the fan is right and the channel was wrong, undo and apply a different name with the same timing still set. That second apply is its own undo. The first is gone.

If a position move was already on the object and you only faded, scrub the old position keys. They are still there. The fade occupied opacity inside its interval. It did not clear X and Y.

If the clip was shorter than the move, scrub to the end. The duration grew to hold the keys. The rest pose at the start of the document is still the drawing. The extra time is extra clip, not a rewritten artboard.

Drag a diamond when the stagger is one step off. You are editing keys now. The timing panel does not own them anymore.

### The edge

An apply refuses to clear animation it does not own. Channels outside the preset stay. Keys outside the interval stay. A fade does not eat a slide. A second preset does not weld itself to the first undo.

The apply also refuses to leave the clip too short for the keys it just wrote. The clip extends when the move needs the room. It does not clip the keys off the end and call that a duration.

Set the duration, open Timing & energy, apply the preset, and press Space. One Ctrl+Z takes that timing back.
