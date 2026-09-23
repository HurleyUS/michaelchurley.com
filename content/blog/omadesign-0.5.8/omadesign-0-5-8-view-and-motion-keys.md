---
id: T134
title: View and motion keys
slug: omadesign-0-5-8-view-and-motion-keys
excerpt: Ctrl+0 fits, Ctrl+1 is 100%, and Ctrl plus or minus zooms. Hold Space to pan. In Motion, Space plays, K sets keys, and Delete removes a key or the animation.
tags: [omadesign, 0.5.8, shortcuts]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-view-and-motion-keys/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-view-and-motion-keys/og.png
---

## The habit

`Ctrl+0` fits the artboard. `Ctrl+1` is actual pixels. Plus zooms in, minus zooms out. Space grabs the canvas and pans, and you expect to keep holding it while the other hand clicks. A trackpad pinch does the same zoom. After Effects and Photoshop both use Space for the hand while you are looking, and both use Space again for play once a timeline has focus. You already live with that overload. The rule has to be obvious: which room has the playhead.

On a timeline, `K` or a diamond is how you plant a key. Home and End jump the clip. Delete on a selected key removes the key. Delete on the layer removes the animation and leaves the drawing, and a second Delete removes the object. You do not want the first Delete to throw away the poster.

## The constraint

The view chords are global enough to share, and they have to zoom the canvas, not the widget chrome. A Ctrl+plus that scaled the panels would wreck the HUD and the inspectors every time you framed a logo. Pinch, Ctrl-scroll, and Alt-scroll follow the same rule. The Zoom tool is allowed to be more specific, because you opted into it with `Z`.

Space cannot mean pan and play in the same persona at the same moment. Motion owns Space as a toggle. Every other persona owns Space as a held pan, including Photo. The key table stays one table. The persona decides which interpretation runs. That is the "one keymap" in practice: the same letters, gated by where you are, not a second scheme you memorize for the timeline.

Delete on the timeline has an order, because one key is doing three jobs. A selected diamond wins. If no diamond is selected and the object has animation, the animation goes and the drawing stays. If the object has no animation, Delete removes the object, which is the same Delete the rest of the studio uses. Motion does not get a private Delete that skips that order.

## What landed

`Ctrl+0` fits. `Ctrl+1` is 100 percent. `Ctrl++` zooms in. The key table treats `=` as plus, so the chord works without Shift on a US layout and with Shift where plus is the shifted key. `Ctrl+-` zooms out. Pinch the trackpad. Ctrl-scroll and Alt-scroll zoom the canvas. With the Zoom tool selected, two-finger scroll zooms too.

`Z` is the tool. Drag a box to fill the view with that box. Click zooms in one step. Alt-click zooms out one step. Ctrl-click fits the artboard. Ctrl+Shift-click fits the selection, or every object if nothing is selected.

`H` is the hand. Hold Space and the canvas pans, in Design, Layout, Pixel, and Photo, as long as you are not editing text. Photo also pans on middle-drag and two-finger scroll. `Ctrl+0` fits the photo. `Ctrl+1` shows it at 100 percent. The same zoom chords apply.

In Motion, Space does not pan. Space toggles playback. The status line says `play` or `pause`. `K` writes keys for X, Y, rotation, and scale on the selection, with ease-in-out on that command. Diamonds appear on the row. Drag a diamond to retime. Home sets the playhead to 0 and stops. End sets the playhead to the clip duration and stops. The loop control is the repeat icon, not a key.

Delete in Motion: click a diamond, press Delete, and that key goes. The status says `key removed`. The object stays, and any other keys stay. Click the object name on the timeline, or leave the diamonds unselected, and Delete removes the animation from the selected artwork. The status says `animation removed`. The drawing stays. Delete again and the object itself goes, because the animation is already gone and Delete falls through to the normal object delete.

Dragging a shape in Motion writes keys at the playhead. The first key at a time past zero also plants the rest pose at 0, so the motion starts from where you drew it. Presets in the inspector, Draw stroke, Pop in, Slam, Shake, Fill up, the slides, Fly, Zoom, Buzz, Fade in, become ordinary keys. Each application has its own Undo. Space previews. Incompatible, locked, hidden, and guide objects are skipped. Draw stroke wants a visible stroke. Fill up wants a closed shape with a fill.

The drawing is the rest pose. Motion does not rewrite it. PNG, JPEG, and static SVG export the rest pose. The clip lives in the `.oma`. **File → Export animated SVG…** writes transforms plus stroke and fill reveals. **File → Export Lottie…** writes Bodymovin 5 shape animation. Pixel layers, layer masks, and effects make the Lottie export fail with a clear error. Use animated SVG for those. **Import Lottie…** brings a shape-layer Lottie onto the timeline. It is a basic subset. The `.oma` keeps the full edit.

## In the hand

Open a poster in Design. Press `Ctrl+0`. The artboard fits. Press `Ctrl+1`. You are at 100 percent. Press `Ctrl++` twice and `Ctrl+-` once. Hold Space and drag. Let go. The tool you had, `V` or `P` or `T`, is still the tool. Space did not switch tools. It panned while it was down.

Press `Z`. Drag a box around the wordmark. Alt-click once to step out. Ctrl-click to fit the board again.

Switch to Motion. Select a rectangle. Press `K`. Diamonds show for position, rotation, and scale. Move the playhead and drag the rectangle. More keys. Press Space. The status says `play`. Press Space again. `pause`. Press Home. You are at the start and playback is stopped. Press End. You are at the end, stopped.

Click one diamond. Press Delete. That key is gone. The shape is still on the canvas. Press Delete with no diamond selected. The animation leaves. The shape remains at the rest pose. Press Delete once more if you meant to remove the shape too. Press `Ctrl+Z` to walk that backward one decision at a time.

Apply **Fade in** from the inspector. Press Space. The preset became keys. `Ctrl+Z` removes that application. Export Lottie from the File menu if the frame is vectors. If a pixel layer is in the way, the exporter tells you, and animated SVG is the path that keeps masks and effects.

## The edge

Space pans everywhere except Motion. In Motion it plays and pauses, and it will not drag the canvas. Delete removes the selected key first, the animation second, the object third. It does not skip to deleting the drawing while keys or an animation are still selected. Lottie export refuses pixel layers, masks, and effects. The view chords zoom the canvas. They leave the panels at the UI scale you set.

Switch to Motion and press Space. The playhead moves. Press `K` on the selection when you want keys at this frame.
