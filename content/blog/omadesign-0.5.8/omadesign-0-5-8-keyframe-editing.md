---
id: T082
title: Keyframe editing
slug: omadesign-0-5-8-keyframe-editing
excerpt: Drag a shape to write keys at the playhead. The first key after zero also plants the rest pose at zero. K keys X, Y, rotation, and scale. Delete peels a key, then the animation, then the object.
tags: [omadesign, 0.5.8, motion]
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
