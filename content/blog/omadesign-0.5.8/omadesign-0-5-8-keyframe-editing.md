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

In After Effects you turn on a stopwatch, move the playhead and nudge the layer, and a second key appears because the stopwatch was armed. Forget the stopwatch and you've moved the layer for the whole comp. Illustrator has nothing like this on the artboard. You drag a shape and it moves. Affinity's timeline is closer to armed properties: you enable a channel, then change it. If you draw all day, you want the drag itself to be the key. The playhead sets the time, the move sets the value, and a separate record mode is how keys get forgotten.

Delete is the next habit. On a timeline, Delete might remove the key, the layer or the animation, and apps don't agree on which. Most people learn by destroying a logo once. The safe order is specific. Delete removes the diamond you clicked. It removes the animation when you meant the motion and not the art. It removes the object only when you ask a second time, so the drawing survives the first press.

A third habit comes from anyone who has keyed a position at one second and watched the object pop there from nowhere. If the first key is after zero, the pose at zero has to be the pose you drew. Otherwise the mark jumps at frame one and the rest pose never really existed.

Playback has its own habits. After Effects taught people the number pad. 0 on the numeric keypad runs a RAM preview. Space also plays, except when a text field has focus or a different workspace took the key. Home and End move the playhead, and looping is a toggle you find in the preview panel after you've already watched the clip once and missed the end. Ease is a right-click, F9 or the graph editor, depending on when you learned.

Photoshop's timeline is a smaller version of the same hunt. Press Space and sometimes you get the Hand tool, because Space pans in the document window and only plays in the timeline. Affinity's Photo persona uses Space to pan, and its timeline wants Space to play. One key has two jobs and the app guesses from focus.

For a simple entrance you don't want a RAM preview, a disk cache or a trip to another application to see whether the stagger feels late. You want Space, the two ends of the clip, a loop while you nudge one diamond, and ease on the key you clicked, cycled in place instead of buried in a graph you won't open for a fade.

## The constraint

Motion doesn't rewrite the artboard. A drag in the Motion persona can't mean "change the rest pose and maybe also add a key," because those are different edits. In Design, a drag moves the drawing. In Motion, a drag writes keys at the playhead, and the rest pose stays where you drew the object. The clip in the `.oma` stores the change over time, and the object stores the pose.

The first key after zero has to plant the rest pose at zero automatically, in the same edit. If you had to remember a second step to add a hold at frame 0, you'd forget it and every animation would start with a pop. One undo step covers both the key you made and the rest key, because they're one decision: animate from where I drew it.

`K` has to key the transforms people block in: X, Y, rotation and scale. Opacity and the two reveals stay available to presets and to channels already on the row. `K` is the transform key, the one you can hit without looking at a channel list. It keys the current selection and nothing else, so you select first.

Delete has to check the selection before it removes anything. A selected diamond is a key. An object row, or a selection with no diamond selected, is the animation. The drawing comes after that. It's three meanings on one key, in an order you can learn in a minute. Undo still exists, but the order means you don't need undo to recover from a guess.

Motion is a persona inside the same binary, and the timeline sits under the canvas of the same `.oma`. Playback has to run there. A preview that opens a browser or needs After Effects installed would defeat the point of keeping the clip in the document. The tracks you have should play on the artboard you're editing.

Space can't mean pan and play in the same persona. In Photo, Space drags the view, because a photograph has no clip. In Motion, Space plays, because the timeline is the point of the persona. Switching personas is what switches the key. Home and End have to jump, and a jump during playback has to stop playback, or the playhead fights you. The status shows play or pause, so you don't need a tooltip to know which you're in.

Ease belongs to a selected key. Cycling it is a small edit on that diamond. It isn't a document-wide timing mode or a new track. Loop repeats the preview, and its control is the repeat icon on the transport, because a labeled dialog for a yes-or-no choice is too much interface.

Undo stays out of the transport. Playing, jumping and looping the preview aren't edits. Cycling ease is an edit, because the key changed. The history records the curve, not the fact that you watched it.

## What landed

### Keys

Select a shape in Motion and drag it. That writes keys at the playhead. The channels the drag changed, such as position, appear on the row as diamonds. There's no stopwatch to arm first. The playhead is the time and the drag is the value.

If that first key is at a time after zero, the same edit plants the rest pose at 0. The object holds where you drew it until the animation moves it. Scrub to the start and you see the artboard. Scrub forward and you see your drag. Because of that plant, the animation starts from the drawing instead of from a default origin.

`K` keys **X, Y, rotation and scale** for the selection at the playhead. Use it when the pose is already where you want it for this frame and you want the transforms recorded without dragging. Diamonds appear on those channels. With the plant rule, a first `K` after zero still gives you a rest key at the start.

The diamonds on the row are the keys. Drag a diamond to retime it, earlier or later, without opening a time field. The value stays the same and only the time changes.

Click a diamond and press **Delete** to remove that key. The other keys on the row and the drawing stay.

Click the object's name on the timeline, or leave the keys unselected, and **Delete** removes the animation from the selected artwork. Every track on that object goes. The drawing stays on the artboard at its rest pose, and you can still edit it in Design. This removes the motion and keeps the mark.

Press **Delete** again, with the object still selected and the animation already gone, and it removes the object. That second press is the destructive one, and you had to ask twice.

### Playback and ease

**Space** plays, and pressing it again pauses. The status shows play, then pause. In the Motion persona, Space drives the timeline under the canvas. For a fade, a slide, a stroke reveal or a fill rising from the bottom, you don't have to leave for After Effects to find out whether the move works.

**Home** jumps to the start of the clip and **End** jumps to the end, the clip's duration. Both stop playback, and the playhead stays where you sent it. You can check the rest pose at Home and the settled frame at End, then press Space to play from there.

**Loop** is the repeat icon. Turn it on while tuning a short entrance so it replays without you moving the playhead back. Turn it off when you want a single pass that stops at the end. The clip saved in the `.oma` doesn't change either way.

**Cycle ease** on a selected key steps through that diamond's ease options. Click the key, cycle, and play. If the curve got worse, cycle again or undo. The other keys keep their ease, so you don't restyle the row by accident.

The transport sits with the timeline. Presets, drags and `K` write keys, and Space shows them. You can apply a preset, press Space, undo, apply another and press Space again. The preview is where you judge. Export is a separate menu for when the preview is right.

## In the hand

Put the playhead where the move should be felt, select the shape, and drag it to where it should be at that time.

```
drag at the playhead
```

Scrub to zero. The shape is back at its rest pose, because the first key after zero planted that pose at 0. Scrub to your key and the shape is where you dragged it. If the drag was wrong, press Ctrl+Z. The key and the planted rest are undone together because they were one edit.

Move the playhead again. Press `K` to record X, Y, rotation and scale here without another drag.

```
K
```

To retime, grab a diamond on the row and drag it along the time. Play with Space to check whether the move now lands on the beat you meant. Dragging the diamond changes when the keyed value arrives and leaves the rest pose alone.

To remove one key, click the diamond and press Delete. To remove the whole animation, click the object's name on the timeline so no diamond is selected, and press Delete. The shape is still on the board. Select it and press Delete again only when you want to throw the shape away.

If a drag created keys and you meant to edit the rest pose, undo, switch to Design and drag there. Design moves the drawing and Motion writes the clip, so the persona is the choice.

Now play it back. Press Space.

```
Space
```

The artboard plays the clip. Press Space again and it pauses on the current frame. Press Home.

```
Home
```

The playhead is at 0 and playback is stopped. That frame is the rest pose, the artboard you drew, plus any hold the first keys planted there. Press End.

```
End
```

The playhead is at the clip duration and playback is stopped. Press Space to play from near the end, or press Home and then Space to run from the start.

Click the repeat icon to keep the pass looping, and nudge a diamond while it loops. Press Space to pause before a drag that writes new keys, so you know exactly where the key will land.

Click one diamond, cycle its ease, press Space and watch that key. If you cycled the wrong diamond, undo, select the right one and cycle that. The command only affects the selected key.

When the preview looks right, leave the persona or keep editing. The `.oma` already holds the clip. A PNG export will still show the rest pose. Animated SVG and Lottie are how motion leaves the app, and only when you ask.

## The edge

Delete never removes the drawing on the first press. With a key selected, it removes that key. With no key selected, it removes the animation and keeps the artwork. Only the next Delete removes the object.

A first key after zero never leaves the start of the clip empty. The rest pose is planted at 0 in the same edit, so the object starts from the artboard you drew. There's no pop from nowhere and no second command to remember.

Playback isn't an export and doesn't open another application. Space plays the tracks on the artboard in front of you. Home and End only move the playhead and stop playback while they do. They don't delete keys or change the rest pose.

The repeat icon repeats the preview. Cycle ease changes only the key you selected.
