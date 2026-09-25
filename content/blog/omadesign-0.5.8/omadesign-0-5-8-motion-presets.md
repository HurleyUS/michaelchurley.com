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

After Effects gives you a dozen ways to fade a logo and a project panel full of presets you don't remember installing. The good ones turn into ordinary keyframes after you apply them, and that's the part worth keeping. The bad ones stay a black box with a hidden slider, and you can't ease the second key because the effect never became keys. Illustrator's limited animation, and the "smart animate" buttons in other apps, often leave you with a transition object you can't edit on a timeline. Affinity's timeline is closer to keys, but you still start most moves by keying opacity and position yourself.

What you want is a named starting point: draw the stroke on, pop the mark in, slam it, shake it, fill it from empty, slide it in from an edge, fly, zoom, buzz or fade. Thirteen starts, not a marketplace. Then you want those starts to become keys you can drag, delete and ease like any others. A preset that stays a preset is a second editing mode, and you already have a timeline.

A preset with one fixed duration is a coin flip, though. After Effects makes you set the work area, then the key times, then Easy Ease, and a stagger is an expression or script you paste in. The result is right, but the setup takes a class. Illustrator-to-After Effects workflows push that work into the comp after the art is "done," which is how timing becomes somebody else's job. Affinity lets you drag keys once they exist, but getting five objects to enter 80 milliseconds apart is still five manual drags, and you'll miss.

So the order should be the length first, then a few timing choices, then the named move. How long, how late, how far apart across the selection, how strong, and whether the entrance starts at the playhead you already parked because the clip has a first act. After that the keys should be normal keys. If the stagger is slightly off, you drag diamonds instead of reopening a wizard.

A mixed selection has to behave too. It might include the logo, the guide you used to place it, a locked caption and a hidden construction line. A sloppy preset will fade the guide, or fail on the whole selection because one object has no stroke. And a second preset should leave the first move alone. Fade the opacity and keep the position keys you already liked. A timing pass that wipes the whole row is how people stop using presets.

## The constraint

The rest pose stays the artboard you drew. A preset can't flatten the path into a baked outline or turn the object into a movie clip that Design can't edit anymore. The tracks available are X, Y, rotation, scale, opacity, stroke reveal and fill reveal, and every preset has to be built from them. If a move needs a track the clip doesn't have, it can't invent one and then fail on export. Timing controls can't bake a new outline or object to hold a delay either. They move keys on those same tracks.

Each application gets its own Undo. You can try Slam, undo, and try Pop in, and the second apply doesn't fuse to the first. Changing duration, applying, disliking it and undoing restores only the channels that application wrote. If Slam and Fade in merged into one history entry, you couldn't try a timing without risking a move you'd already accepted.

The `.oma` holds the clip. Presets don't need a network, a library login or a pack downloaded next to the binary. They're built into the Motion inspector, which opens on them, with appearance and manual key controls folded away until you need them. Duration sits above the list, so you decide the length before the name.

A preset that always starts at zero can't coexist with a clip you've already built. Start-at-playhead treats the playhead as the start of this move. Extending the clip is the other half. If the move runs past the current duration, the clip grows, so you don't have to lengthen the comp in a document setting and come back.

Replacing everything on the object would make stagger dangerous, so the rule is narrower. A preset replaces the channels it affects, inside the interval it occupies. Keys outside that interval, channels it doesn't use, and unrelated animation all stay. That's how a wordmark can slide and later fade without the fade erasing the slide.

Objects that can't take the preset are skipped, not damaged. A guide isn't artwork. A locked object is locked and a hidden object is hidden. Draw stroke on a shape with no visible stroke is the wrong object, and so is Fill up on an open path with no fill. The rest of the selection still gets the move.

## What landed

### The presets

Select vector artwork and choose one of these in the inspector:

**Draw stroke. Pop in. Slam. Shake. Fill up. Slide up, Slide down, Slide left, Slide right. Fly. Zoom. Buzz. Fade in.**

That's thirteen starts. Draw stroke traces the path instead of fading the object in and calling it drawing, and it needs a visible stroke. Fill up reveals the interior from the bottom and needs a closed shape with a fill. Those two use the reveal tracks, stroke reveal and fill reveal, which the native canvas, animated SVG and Lottie already know how to play.

Pop in, Slam, Shake, the four slides, Fly, Zoom, Buzz and Fade in each become keys on the tracks the clip already has, and the name describes what you get. Once a preset has run, you're looking at ordinary keys, diamonds on the timeline. You can retime them, delete them and cycle ease on a selected key, the same as keys you set yourself.

Incompatible, locked, hidden and guide objects are skipped. A selection that mixes a logo and a guide fades the logo and leaves the guide alone. Draw stroke skips a shape with no visible stroke, and Fill up skips an open path with no closed fill. Qualifying objects get the preset and the others stay as they were.

The preset replaces only the channels it affects, inside its time interval, and extends the clip if the move needs more time. Animation on other channels stays, so you can Fade in a mark that already has a position move and keep the position move.

### Timing and energy

**Duration** sits above the presets, and the presets use that length. You see it before you see Draw stroke, Pop in or Slam, because a three-second fade and a third-of-a-second fade are different decisions and the length comes first.

**Timing & energy** opens four options: **delay**, **stagger**, **intensity** and **start-at-playhead**.

Delay holds the move off the start, so the keys land later. Stagger spreads a multi-selection so the objects don't all move at the same instant. The first object leads and the next follows. Intensity sets how strong the move is, so a slam can be a small slam and a slide can be a short slide. It scales the preset's energy without adding a track.

Start-at-playhead uses the playhead as the start of this application. Park at one second, turn it on, apply Fade in, and the fade starts at that moment. Leave it off to use the preset's own start. With delay and stagger, you can place a group entrance where the clip already is and fan out the members.

Timing doesn't leave a live stagger object on the row. You get diamonds. Drag them if the fan needs correcting, delete one if an object should stay still, or cycle ease on a selected key if the curve is the remaining problem. Each application is one Ctrl+Z.

If the new keys need a longer clip, the clip extends at the end, and nothing earlier is lost to make room.

Space previews the result in the persona. Watch it, then undo or keep the keys and keep working.

## In the hand

Switch to Motion and select the wordmark, the rule and the dot, or the three lines of a headline. If guides are still selected from the layout, you can leave them in the selection.

Check the duration above the preset list and change it if this entrance should be shorter or longer. Then open **Timing & energy**. Set a delay if the whole group should wait, a stagger if they should arrive in sequence, and an intensity if the default energy is too much or too little. Turn on start-at-playhead if the playhead is already where the move should begin, and move the playhead first if it isn't.

```
Timing & energy
delay · stagger · intensity · start-at-playhead
```

Choose a preset.

```
Fade in
```

Or choose Draw stroke for a path with a stroke you want traced, Fill up for a closed shape whose interior should rise from the bottom, or **Slide up** or **Pop in**. The diamonds appear on the channels the preset uses, shifted by the delay, fanned by the stagger, sized by the intensity, and anchored at the playhead if you asked for that. Press Space to preview.

Press Ctrl+Z and that application is gone, with the drawing unchanged. Apply a different name with the same timing still set. That's a new undo step, and since you undid the first one, nothing stacks into a mystery effect.

Add a locked caption to the selection and apply again. The caption stays put. Add a guide and it stays a guide. Check the rows. The objects that could take the preset have new keys, and the skipped ones have no new diamonds.

If the object already had a position move and you only applied a fade, scrub the old position keys. They're still there. The fade used opacity inside its interval and left X and Y alone.

If the clip was shorter than the move, scrub to the end. The duration grew to fit the keys. The rest pose at the start of the document is still the drawing, and the added time is extra clip.

If the stagger is one step off, drag a diamond. At this point you're editing ordinary keys, and the timing panel doesn't control them anymore.

## The edge

A preset won't touch what it can't animate properly. No visible stroke means no Draw stroke, and no closed fill means no Fill up. Locked, hidden and guide objects are skipped quietly, and the eligible objects still get keys. Nothing in the skipped set is rewritten, unlocked or shown.

A preset doesn't stay a preset. The result is ordinary keys on real tracks, with no hidden effect left behind.

An apply won't clear animation it doesn't own. Channels outside the preset and keys outside its interval stay, so a fade doesn't erase a slide, and a second preset doesn't merge into the first undo. The apply also won't leave the clip too short for the keys it wrote. The clip extends instead of cutting the keys off.
