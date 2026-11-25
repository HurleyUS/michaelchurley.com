---
id: T085
title: Export Lottie
slug: omadesign-0-5-8-export-lottie
excerpt: Export Lottie… writes a Bodymovin 5.x shape animation with trim paths and fill masks. Pixel layers, layer masks, and effects stop the export with a clear error. Use animated SVG for those.
tags: [omadesign, 0.5.8, motion]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-export-lottie/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-export-lottie/og.png
---

## The habit

A developer asks for Lottie. In After Effects that means Bodymovin, a plugin, a composition that has already been beaten into shape layers, and a JSON file the player on the site can read. You learn the unsupported list by shipping a JSON that plays nothing like the comp. Expressions dropped. Effects dropped. A mask that was a layer mask becomes a blank. Sometimes the plugin warns. Sometimes the player warns. Sometimes the homepage is simply wrong until somebody notices.

Illustrator does not export that JSON. Photoshop does not. The habit those apps trained is: go to AE, convert, pray, export. Affinity does not sit in that pipeline either. So the hand that lives in a design tool still ends the week in a different tool, rechecking trim paths, because trim paths are how a stroke "draws on" in the Lottie world, and fill masks are how a fill reveals.

You want the menu here, and you want it to fail in words when the file cannot tell the truth. A quiet drop of the pixel layer is worse than a hard stop. You can choose another export. You cannot guess which half of the comp survived.

## The constraint

The clip in the `.oma` can hold tracks on vector artwork: X, Y, rotation, scale, opacity, stroke reveal, fill reveal. It can also sit in a document that has pixel layers, layer masks, and effects, because the studio is one document. Design, Pixel, and Motion share the file. A Lottie exporter that pretends to carry all of that will lie. Bodymovin shape animation has a shape it can carry. Pixels and layer masks and effects are outside that shape for this exporter.

The honest constraint is a clear error. The export does not half-apply. It does not write a JSON that plays the vectors and omits the pixels without telling you. It stops, and it says why. The other command, **File → Export animated SVG…**, retains masks and effects. That is the door for the compositions this exporter cannot preserve. Two commands, two ceilings, both visible.

What Lottie can take should match the preview. Stroke reveal becomes trim paths. Fill reveal becomes fill masks. The same Draw stroke and Fill up you played with Space are the channels in the JSON. The version target is Bodymovin 5.x shape animation, the dialect players already speak. You do not get a private JSON that only this app can read.

The rest pose stays in the document. Exporting Lottie does not bake the playhead into the artboard, and it does not outline the working text inside the `.oma`. The JSON is a delivery file. The `.oma` is the editable animation, and for anything beyond the basic shape subset you keep the `.oma` anyway.

## What landed

**Export Lottie…** writes Bodymovin 5.x shape animation. Trim paths carry the stroke reveals. Fill masks carry the fill reveals. Transforms on the vector shapes travel with them. A mark built from shapes, with a draw-on stroke and a fill that rises, is the file this command is for. Preview it in Motion. Export it. The player that speaks Bodymovin 5.x is the audience.

Pixel layers cannot be preserved by this exporter. Layer masks cannot. Effects cannot. The export produces a clear error. You are told. You do not receive a partial JSON that looks successful and plays incomplete. Take that composition to animated SVG, which keeps masks and effects and writes the animated transforms and reveals there.

The error is the feature. A batch of homepage icons that are pure shapes should export. A poster that is a photograph with a vector headline animated on top should not sneak out as a Lottie of the headline alone. The photograph is part of what you approved. The exporter refuses to ship the headline as if it were the whole composition. You pick SVG, or you rebuild the motion from shapes if Lottie is a hard requirement from the developer.

Still exports stay on their own road. PNG, JPEG, and static SVG remain the rest pose. Lottie is the clip. You do not use it as a still, and you do not use a still as a stand-in for the JSON.

Import is the return path for a shape-layer Lottie, and it is a basic subset. The complete editable animation is still the `.oma` you saved before you exported. Treat the JSON as something you hand over. Treat the document as the place you keep working.

## In the hand

Build the motion from vector shapes. Draw stroke on a path that has a visible stroke. Fill up on a closed shape that has a fill. Transforms on the same objects if they need to move. Space to preview. Save the `.oma`.

```
Export Lottie…
```

If the document is shapes and the tracks are the tracks this exporter knows, you get a JSON in the Bodymovin 5.x shape form. Trim paths are the stroke reveals. Fill masks are the fill reveals. Hand that file to the page.

If the document contains a pixel layer, a layer mask, or an effect, the export stops with a clear error. Read it. The `.oma` is unchanged. The rest pose is unchanged. Nothing was half-written into a JSON you might accidentally commit.

```
File → Export animated SVG…
```

Use that command for the composition the error named. Masks and effects stay. Text in that SVG is outlined so the glyphs match, and the source text in the document stays editable. The developer gets an animated SVG. You keep the file you can still edit.

When the developer insists on Lottie and the error was a pixel layer you do not need in the motion file, duplicate the idea into a shape-only document, or remove the offending layer from a copy, and export Lottie from the composition that qualifies. Do not argue the original poster into a silent strip. The error was the correct result on the file that had the pixels.

## The edge

This exporter refuses to preserve pixel layers, layer masks, and effects. It does not drop them and continue. It stops with a clear error, and the document stays as it was. Animated SVG is the export that can carry those compositions.

It also refuses to be the home of the editable animation. The JSON is Bodymovin 5.x for delivery. The full clip, including anything outside the shape subset, stays in the `.oma`.

Export Lottie… when the art is shapes. Read the error when it is not, and export animated SVG for that file.
