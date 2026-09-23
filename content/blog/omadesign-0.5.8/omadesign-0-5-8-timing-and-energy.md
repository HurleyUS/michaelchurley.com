---
id: T081
title: Timing and energy
slug: omadesign-0-5-8-timing-and-energy
excerpt: Duration sits above the motion presets. Timing & energy sets delay, stagger, intensity, and start-at-playhead. Each apply is its own Undo and only rewrites the channels it owns.
tags: [omadesign, 0.5.8, motion]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-timing-and-energy/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-timing-and-energy/og.png
---

## The habit

A preset with one duration is a coin flip. After Effects makes you set the work area, then the key times, then the easy ease, and a stagger is an expression or a script you paste in. The result is right, and the setup is a seminar. Illustrator-to-AE workflows push the same work into the comp after the art is "done," which is how timing becomes somebody else's job. Affinity's timeline will let you drag keys once they exist. Getting five objects to enter 80 milliseconds apart is still five manual drags, and you will miss.

The hand wants the length first, then a small set of timing choices, then the named move. How long. How late. How far apart across the selection. How strong. Whether this entrance starts at the playhead you already parked, because the clip already has a first act. After that, the keys should be normal keys. If the stagger is a little wrong you drag diamonds. You do not reopen a wizard.

You also want a second preset to leave the first move alone. Fade the opacity. Keep the position keys you already liked. A timing pass that wipes the whole row is how people stop using presets.

## The constraint

The clip lives in the `.oma`. The rest pose stays the drawing. Timing controls cannot bake a new outline or a new object to "hold" the delay. They have to move keys on the tracks that already exist: X, Y, rotation, scale, opacity, stroke reveal, fill reveal.

Undo is one step per application. Changing duration, applying, hating it, and undoing has to restore the channels that application wrote, and only those. If Slam and Fade in fuse into one history entry, you cannot try a timing without betting the move you already accepted.

A preset that always starts at zero cannot coexist with a clip you have already built. Start-at-playhead is the control that respects the playhead as the start of this gesture. Extend-the-clip is the other half. If the move runs past the current duration, the clip grows. You should not have to open a document setting, lengthen the comp, then come back and apply. The apply sees the need and lengthens the clip.

Replacing "everything on the object" would make stagger dangerous. The rule is narrower. Replace the affected channels, inside the interval this preset occupies. Keys outside that interval stay. Channels this preset does not use stay. Unrelated animation stays. That is how a wordmark can slide and then, later, fade, without the fade eating the slide.

## What landed

**Duration** sits above the presets. Set it there. The presets underneath use that length. You see the number before you see Draw stroke, Pop in, Slam, and the rest, because a three-second fade and a third-of-a-second fade are different decisions and the decision comes first.

**Timing & energy** opens four options: **delay**, **stagger**, **intensity**, and **start-at-playhead**.

Delay holds the move off the start. The keys land later than they would have. Stagger spreads a multi-selection so the objects do not share one instant. The first object leads. The next follows. Intensity sets how strong the move is. A slam can be a small slam. A slide can be a short slide. You are scaling the energy of that preset, not adding a new track.

Start-at-playhead uses the playhead as the beginning of this application. Park at one second, turn the option on, apply Fade in, and the fade belongs to that moment. Leave it off when you want the preset's own start. Combined with delay and stagger, you can put a group entrance where the clip already is, then fan the members.

The preset still becomes ordinary keys. Timing does not leave a live "stagger object" on the row. You get diamonds. Drag them if the fan needs a correction. Delete one if one object should stay still. Cycle ease on a selected key if the curve is the remaining problem. Each application has its own Undo, so the timing you just tried is one Ctrl+Z.

The write is local. Affected channels inside the interval are replaced. Other channels on those objects stay. Keys outside the interval stay. If the new keys need a longer clip than you had, the clip extends. You do not lose the earlier act to make room. You gain time at the end.

Space previews the result in the persona. You hear the timing by watching it. Then you either undo or you keep the keys and keep drawing.

## In the hand

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

## The edge

An apply refuses to clear animation it does not own. Channels outside the preset stay. Keys outside the interval stay. A fade does not eat a slide. A second preset does not weld itself to the first undo.

The apply also refuses to leave the clip too short for the keys it just wrote. The clip extends when the move needs the room. It does not clip the keys off the end and call that a duration.

Set the duration, open Timing & energy, apply the preset, and press Space. One Ctrl+Z takes that timing back.
