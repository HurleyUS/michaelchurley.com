---
id: T016
title: Motion persona tools
slug: omadesign-0-5-8-motion-persona-tools
excerpt: "Motion animates the artboard you already drew. Space plays, K sets transform keys, and File exports Lottie or animated SVG. The rest pose stays the drawing."
tags: [omadesign, 0.5.8, motion]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-motion-persona-tools/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-motion-persona-tools/og.png
---

## The habit

After Effects is a timeline that imports what you drew somewhere else. You precompose. You convert text to shapes because the font did not travel. You discover the Illustrator file you linked was updated, or was not. Photoshop's timeline is a different habit: frames on a pixel document. Affinity's motion tools, where you have used them, still feel like a visit to another room. The file you export is an MP4 or a GIF. The file you can still edit is the one that stayed behind, if you were careful.

Lottie changed the delivery habit for interface work. A JSON file, Bodymovin, plays in a product. Designers learned to keep a "simple shapes only" version of the mark because the exporter drops what it cannot say. The honest tools tell you about the drop. The quiet ones write a file that is missing the shadow and hope you do not notice.

The hand, once you are in a timeline, is play and keyframes. Space plays. You set a key, move the clock, set another key. The artwork at time zero should be the artwork you drew, not a pose the timeline invented and then baked.

## The constraint

The artboard you drew is the rest pose. Motion does not rewrite it. That single rule decides the persona. There is no empty Motion document on the welcome screen, because there is nothing to animate until Design or Layout has made objects. The clip lives in the `.oma` with the drawing. Static PNG, JPEG, and SVG export the rest pose. The animation is not a second source file you have to keep in sync by hand.

Tracks are the properties the drawing already has, plus reveal: X, Y, rotation, scale, opacity, stroke reveal, and fill reveal. A preset has to become ordinary keys, with its own undo, or you would own a magic object the rest of the timeline cannot edit. Presets replace only the channels they affect, inside their time range, and they extend the clip if they need to. Unrelated animation stays.

`K` keys transforms for the selection. In Pixel that letter is Fill. The persona is the constraint that makes the letter safe. You are in Motion, so `K` writes X, Y, rotation, and scale. It does not fill a pixel layer.

Delete has three meanings and they have to stay in order. A selected diamond deletes that key. Delete with the object name selected, or with no key selected, removes the animation and leaves the drawing. Delete again removes the object. If the first Delete destroyed the artwork, nobody would key anything.

Lottie is Bodymovin 5.x for shape animation, trim paths, and fill masks. It cannot carry pixel layers, layer masks, and effects. The export has to fail with a clear error. Animated SVG keeps those. The constraint is one document, two exports, no silent data loss.

## What landed

Open the Motion persona. The timeline sits under the canvas. This is the behavior in 0.5.8. The thirteen presets and the Lottie path landed with the motion work and are what this release runs. Welcome still has no **+ Motion** button.

Select vector artwork. The inspector offers **Draw stroke, Pop in, Slam, Shake, Fill up, Slide up, Slide down, Slide left, Slide right, Fly, Zoom, Buzz, and Fade in**. Draw stroke needs a visible stroke. Fill up needs a closed shape with a fill. Incompatible objects, locked objects, hidden objects, and guides are skipped.

Duration sits above the presets. **Timing & energy** opens delay, stagger, intensity, and start-at-playhead. Each application is one undo. The preset becomes keys. Drag a diamond to retime one.

Select a shape and drag it. That writes keys at the playhead. The first key at a time greater than zero also plants the rest pose at zero, so the object animates from where you drew it.

`K` keys X, Y, rotation, and scale for the selection. Diamonds on the row are keys. Drag a diamond to retime. Click a diamond and Delete removes that key. Cycle ease on a selected key.

Space plays. Home jumps to the start. End jumps to the end. The repeat icon is loop.

**File → Export animated SVG…** writes animated transforms plus stroke and fill reveals, and it keeps masks and effects. Text is outlined in that exported file so the glyph geometry matches the canvas. The source text in the `.oma` stays editable.

**File → Export Lottie…** writes Bodymovin 5.x. Pixel layers, layer masks, and effects produce a clear error. Use animated SVG for those compositions. **File → Import Lottie…** brings a shape-layer Lottie onto the timeline. Import is a basic shape subset. The `.oma` is what keeps the full editable animation.

## In the hand

Draw the piece in Design or Layout. A logo, a button, a title. Leave the type as type. Save if you want a checkpoint, then switch persona.

```text
Motion
```

The timeline is under the canvas. Select the mark. Pick **Fade in** or **Slide up**. Set duration. Open **Timing & energy** if you need stagger across several objects. Apply. Press Space. The preview plays. Press Space again to stop. Home returns to the start. The canvas at time zero shows the drawing you made.

Select one shape. Move the playhead. Drag the shape. A key lands at the playhead. If that time is past zero, the rest pose is planted at zero too. Press `K` to key X, Y, rotation, and scale without dragging. Drag the diamond if the beat is late. Click it and press Delete to remove only that key.

```text
K
```

```text
Space
```

Want the motion gone and the art kept? Click the object's name on the timeline, or make sure no diamond is selected. Press Delete. The animation leaves. The vectors remain. Press Delete again only if you mean to delete the object itself.

Export when the preview is the one you want.

```text
File → Export animated SVG…
```

or, for shape animation without pixels, masks, or effects:

```text
File → Export Lottie…
```

If Lottie errors, it is telling you the composition has something that exporter does not keep. Export animated SVG for that file, or remove the pixel layer from the export plan. The `.oma` still has everything. Static SVG export, `Ctrl+E` and the SVG choice, remains the rest pose. The clip does not bake into that still.

Reopen the `.oma` tomorrow. The keys are in the document. The type is still editable. The animated SVG you exported yesterday is a delivery file, outlines and all. Edit in the `.oma`, then export again.

## The edge

Motion will not rewrite the rest pose to store the clip. The drawing at rest stays the drawing. Keys are data on top. Delete the animation before you delete the object, and the object is still there to prove it.

Lottie will not quietly drop pixel layers, layer masks, or effects. The export errors. Animated SVG is the path that keeps masks and effects. Import will not turn an arbitrary Lottie into the full Omadesign document model. It brings in a basic shape-layer subset. Keep the `.oma` if you need the editable clip.

Presets skip locked, hidden, and guide objects, and they skip artwork that does not match the preset. Draw stroke does nothing useful on an object with no visible stroke. Fill up does nothing useful on an open path with no fill. You get keys on the objects that qualify. You do not get a surprise conversion of guides into animated artwork.

There is no welcome button that creates an empty Motion document. Make the artboard first. Then press Space.

Press `K` to key the selection. Press Space to play it. The rest pose is still the thing you drew.
