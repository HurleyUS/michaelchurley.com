---
id: T083
title: Playback controls
slug: omadesign-0-5-8-playback-controls
excerpt: Space plays and pauses in Motion. Home and End jump the playhead. Loop is the repeat icon. Cycle ease on the key you selected. The preview stays in the persona.
tags: [omadesign, 0.5.8, motion]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-playback-controls/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-playback-controls/og.png
---

## The habit

After Effects taught the hand a number pad. 0 on the numeric keypad RAMs a preview. Space also plays, except when a text field is focused, except when a different workspace stole it. Home and End move the playhead, and looping is a toggle you find in the preview panel after you have already watched the clip once and missed the end. Ease is a right-click, F9, or the graph editor, depending on which decade you learned.

Photoshop's timeline is the smaller version of the same hunt. You press Space and sometimes you get the hand tool, because Space is pan in the document window and play only in the timeline. Affinity's photo persona uses Space to pan. Its timeline, when you are in it, wants play. The collision is the whole problem. One key, two jobs, and the app guesses from focus.

For a simple entrance you do not want a RAM preview, a disk cache, or a round trip into another application to see whether the stagger feels late. You want Space. You want the ends of the clip. You want a loop while you nudge one diamond. You want the ease on the key you clicked, cycled, not buried in a graph you will not open for a fade.

## The constraint

Motion is a persona, not a second binary. The timeline sits under the canvas of the same `.oma`. Playback has to run there. A preview that shells out to a browser, or that requires an After Effects install, breaks the reason the clip lives in the document. Simple motion, the tracks you actually have, should play on the artboard you are editing.

Space cannot mean pan and play in the same persona. In Photo, Space drags the view, because a photograph has no clip. In Motion, Space plays, because the timeline is the point of the persona. The switch is the persona switch you already made. Home and End have to jump, and a jump during playback has to stop the play, or the playhead fights your jump and you chase it. The status can say play or pause. You should not need a hovering tooltip to know which one you are in.

Ease belongs to a selected key. Cycling it is a small edit on that diamond. It is not a document-wide timing mode, and it is not a new track. Loop is a preview repeat. The control is an icon on the transport, the repeat icon, because a labeled modal for "loop yes or no" is too much chrome for a yes.

Undo stays out of the transport. Playing is not an edit. Jumping is not an edit. Looping the preview is not an edit. Cycling ease is an edit, because the key changed. The history should record the curve, not the fact that you watched it.

## What landed

**Space** plays. Press it again and playback pauses. The status follows: play, then pause. You are in the Motion persona, on the canvas, and the timeline under it is what Space drives. This is the preview. It is in the persona. For a fade, a slide, a stroke reveal, a fill coming up from the bottom, you do not leave for After Effects to find out if the move works.

**Home** jumps to the start of the clip. **End** jumps to the end, the clip's duration. Both stop playback. You land, and the playhead stays where you sent it. You can inspect the rest pose at Home. You can inspect the settled frame at End. Then Space plays from where you are.

**Loop** is the repeat icon. Turn it on when you are tuning a short entrance and you need to see it again without walking the playhead back yourself. Turn it off when you want a single pass so you can catch the end and leave it there. The icon is the control. The clip in the `.oma` is still the clip you saved.

**Cycle ease** on a selected key walks the ease of that diamond. Click the key first. Cycle. Play. If the curve is worse, cycle again, or undo the cycle. The other keys keep the ease they had. You did not restyle the row by accident.

The transport sits with the timeline you are already using. Presets, drags, and `K` write keys. Space shows you those keys. You can apply a preset, press Space, undo, apply another, press Space. The preview is the judge. Export is a different menu, later, when the preview is right.

## In the hand

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

## The edge

Playback refuses to be an export, and it refuses to be a trip into another application. Space plays the tracks on the artboard in front of you. Home and End only move the playhead, and they stop play while they do it. They do not delete keys and they do not change the rest pose.

The repeat icon repeats the preview. Cycle ease changes the key you selected. The other keys keep the ease they had.

Press Space. The clip plays where you drew it.
