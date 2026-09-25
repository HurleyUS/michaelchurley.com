---
id: T082
title: Keyframe editing
slug: omadesign-0-5-8-keyframe-editing
excerpt: Drag a shape to write keys at the playhead. The first key after zero also plants the rest pose at zero. K keys X, Y, rotation, and scale. Delete peels a key, then the animation, then the object.
publishedAt: 2026-09-02T14:58:58Z
tags: [omadesign, 0.0.1-alpha.rc, motion]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-keyframe-editing/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-keyframe-editing/og.png
---

## The habit

In After Effects you turn a stopwatch on, move the playhead, and nudge the layer. The second key appears because the stopwatch was armed. Forget the stopwatch and you just moved the layer for the whole comp. Illustrator has no such habit on the artboard. You drag a shape and it moves. Affinity's timeline is closer to armed properties: you enable a channel, then you change it. The hand that draws all day wants the drag itself to be the key. You are a designer. The playhead is the time. The move is the key. A separate "record" mode is how keys get forgotten.

The other habit is Delete. On a timeline, Delete might mean the key, the layer, or the animation, and the apps do not agree. You learn by destroying a logo once. The safe ladder is specific. Delete the diamond you clicked. Delete the animation when you meant the motion and not the art. Delete the object only when you ask a second time. The drawing survives the first swing.

There is a third habit, from anyone who has ever keyed a position at one second and watched the object pop there from nowhere. If your first key is after zero, the pose at zero has to be the pose you drew. Otherwise the mark jumps at frame one and the rest pose was a fiction.

## The constraint

Motion does not rewrite the artboard. A drag in the Motion persona cannot mean "change the rest pose and also, maybe, add a key." Those are different edits. In Design, a drag moves the drawing. In Motion, a drag writes keys at the playhead, and the rest pose stays the place you drew the object. The clip in the `.oma` stores the difference over time. The object stores the pose.

The first key after zero has to plant the rest at zero, automatically, in the same edit. If you had to remember a second gesture, "add a hold at frame 0," you would forget it, and every animation would start with a pop. One undo step has to cover both the key you made and the rest key that makes it honest. They are one decision: animate from where I drew it.

`K` has to key the transforms people actually block in: X, Y, rotation, scale. Opacity and the two reveals stay available to the presets and to the channels already on the row. `K` is the transform key, the one your finger can hit without looking at a channel list. It keys the selection. It does not key the guides you did not mean, beyond whatever the selection already is. You select first.

Delete has to read the selection before it destroys anything. A selected diamond is a key. An object row, or a selection with no diamond selected, is the animation. The drawing is the thing after that. Three meanings, one key, in an order you can learn in a minute. Undo still exists. The ladder exists so you do not need undo to recover from a guess.

## What landed

Select a shape in Motion. Drag it. That writes keys at the playhead. The channels that drag owns, the position you just changed, land on the row as diamonds. You did not arm a stopwatch first. The playhead was the time, the drag was the value.

If that first key sits at a time greater than zero, the same edit plants the rest pose at 0. The object holds where you drew it until the animation leaves. Scrub to the start and you are looking at the artboard. Scrub forward and you see the drag you made. The plant is why it animates from the drawing and not from a default origin.

`K` keys **X, Y, rotation, and scale** for the selection, at the playhead. Use it when the pose is already where you want this frame, and you need the transforms recorded without a drag. Press it on the selection. The diamonds appear on those channels. Combined with the plant rule, a first `K` after zero still gives you a rest key at the start, so the hold exists.

Diamonds on the row are the keys. Drag a diamond to retime it. You are not opening a time field unless you want to. The diamond is the handle. Slide it later, slide it earlier. The value stays. The time changes. That is the whole retime.

Click a diamond. **Delete** removes that key. The other keys on the row stay. The drawing stays.

Click the object name on the timeline, or leave the keys unselected, and **Delete** removes the animation from the selected artwork. Every track on that object goes. The drawing stays on the artboard, at the rest pose, as artwork you can still edit in Design. This is the "remove the motion, keep the mark" step.

**Delete** again, with the object still selected and the animation already gone, removes the object itself. That second press is the destructive one. You asked twice. The first ask was the clip. The second ask is the shape.

Cycle ease lives on a selected key when you want the curve changed. Playback is Space, Home, and End. Those are the transport. The editing gestures are the drag, `K`, the diamond, and the Delete ladder.

## In the hand

Put the playhead where the move should be felt. Select the shape. Drag it to the place it should occupy at that time.

```
drag at the playhead
```

Scrub to zero. The shape is back on the rest pose, because the first key after zero planted that pose at 0. Scrub to your key. The shape is where you dragged it. Press Ctrl+Z if the drag was wrong. The key and the planted rest go together. They were one edit.

Move the playhead again. Press `K` if you want X, Y, rotation, and scale recorded here without another drag.

```
K
```

Retiming is the diamond. Grab it on the row. Drag it along the time. Play with Space to hear whether the move now lands on the beat you meant. You did not change the rest pose by dragging the diamond. You changed when the keyed value arrives.

Remove one key: click the diamond, Delete. Remove the whole animation: click the object's name on the timeline so the diamonds are not the selection, Delete. The shape is still on the board. Select it and Delete again only when you mean to throw the shape away.

If a drag created keys and you wanted a rest-pose edit, undo, switch to Design, and drag there. Design moves the drawing. Motion writes the clip. The persona is the choice.

## The edge

Delete refuses to eat the drawing on the first press. A selected key loses that key. No key selected, the animation leaves and the artwork stays. Only the next Delete removes the object.

A first key after zero refuses to leave the start of the clip empty. The rest pose is planted at 0 in the same edit, so the object departs from the artboard you drew. You do not get a pop from nowhere, and you do not get a second command to remember.

Drag the shape at the playhead. The diamond is the move, and time zero is still the drawing.

## Playback controls

### The habit

After Effects taught the hand a number pad. 0 on the numeric keypad RAMs a preview. Space also plays, except when a text field is focused, except when a different workspace stole it. Home and End move the playhead, and looping is a toggle you find in the preview panel after you have already watched the clip once and missed the end. Ease is a right-click, F9, or the graph editor, depending on which decade you learned.

Photoshop's timeline is the smaller version of the same hunt. You press Space and sometimes you get the hand tool, because Space is pan in the document window and play only in the timeline. Affinity's photo persona uses Space to pan. Its timeline, when you are in it, wants play. The collision is the whole problem. One key, two jobs, and the app guesses from focus.

For a simple entrance you do not want a RAM preview, a disk cache, or a round trip into another application to see whether the stagger feels late. You want Space. You want the ends of the clip. You want a loop while you nudge one diamond. You want the ease on the key you clicked, cycled, not buried in a graph you will not open for a fade.

### The constraint

Motion is a persona, not a second binary. The timeline sits under the canvas of the same `.oma`. Playback has to run there. A preview that shells out to a browser, or that requires an After Effects install, breaks the reason the clip lives in the document. Simple motion, the tracks you actually have, should play on the artboard you are editing.

Space cannot mean pan and play in the same persona. In Photo, Space drags the view, because a photograph has no clip. In Motion, Space plays, because the timeline is the point of the persona. The switch is the persona switch you already made. Home and End have to jump, and a jump during playback has to stop the play, or the playhead fights your jump and you chase it. The status can say play or pause. You should not need a hovering tooltip to know which one you are in.

Ease belongs to a selected key. Cycling it is a small edit on that diamond. It is not a document-wide timing mode, and it is not a new track. Loop is a preview repeat. The control is an icon on the transport, the repeat icon, because a labeled modal for "loop yes or no" is too much chrome for a yes.

Undo stays out of the transport. Playing is not an edit. Jumping is not an edit. Looping the preview is not an edit. Cycling ease is an edit, because the key changed. The history should record the curve, not the fact that you watched it.

### What landed

**Space** plays. Press it again and playback pauses. The status follows: play, then pause. You are in the Motion persona, on the canvas, and the timeline under it is what Space drives. This is the preview. It is in the persona. For a fade, a slide, a stroke reveal, a fill coming up from the bottom, you do not leave for After Effects to find out if the move works.

**Home** jumps to the start of the clip. **End** jumps to the end, the clip's duration. Both stop playback. You land, and the playhead stays where you sent it. You can inspect the rest pose at Home. You can inspect the settled frame at End. Then Space plays from where you are.

**Loop** is the repeat icon. Turn it on when you are tuning a short entrance and you need to see it again without walking the playhead back yourself. Turn it off when you want a single pass so you can catch the end and leave it there. The icon is the control. The clip in the `.oma` is still the clip you saved.

**Cycle ease** on a selected key walks the ease of that diamond. Click the key first. Cycle. Play. If the curve is worse, cycle again, or undo the cycle. The other keys keep the ease they had. You did not restyle the row by accident.

The transport sits with the timeline you are already using. Presets, drags, and `K` write keys. Space shows you those keys. You can apply a preset, press Space, undo, apply another, press Space. The preview is the judge. Export is a different menu, later, when the preview is right.

### In the hand

Switch to Motion. You already have keys, from a preset or from a drag. Press Space.

```
Space
```

The artboard plays the clip. Press Space again. It pauses on the frame you were seeing. Press Home.

```
Home
```

The playhead is at 0 and playback is stopped. That frame is the rest pose, the artboard you drew, plus any hold the first keys planted there. Press End.

```
End
```

The playhead is at the clip duration, playback stopped. Press Space to play from the end's neighbor, or press Home and Space to run it from the start.

Click the repeat icon when you want the pass to continue. Nudge a diamond while it loops. Press Space to pause when you need the playhead to sit still for a drag that writes new keys. A drag during a serious edit wants a parked playhead. You know where the key will land.

Click one diamond. Cycle its ease. Press Space and watch that key. If you cycled the wrong diamond, undo. Select the right one and cycle that. The command is per selected key.

When the preview is the move you want, leave the persona or stay and keep editing. The `.oma` already holds the clip. A PNG export will still be the rest pose. Animated SVG and Lottie are how the motion leaves, and only when you ask.

### The edge

Playback refuses to be an export, and it refuses to be a trip into another application. Space plays the tracks on the artboard in front of you. Home and End only move the playhead, and they stop play while they do it. They do not delete keys and they do not change the rest pose.

The repeat icon repeats the preview. Cycle ease changes the key you selected. The other keys keep the ease they had.

Press Space. The clip plays where you drew it.
