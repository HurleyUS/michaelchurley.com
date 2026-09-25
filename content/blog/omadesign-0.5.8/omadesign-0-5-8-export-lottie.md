---
id: T085
title: Export Lottie
slug: omadesign-0-5-8-export-lottie
excerpt: Export Lottie… writes a Bodymovin 5.x shape animation with trim paths and fill masks. Pixel layers, layer masks, and effects stop the export with a clear error. Use animated SVG for those.
publishedAt: 2026-09-02T15:00:58Z
tags: [omadesign, 0.0.1-alpha.rc, motion]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-export-lottie/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-export-lottie/og.png
---

## The habit

A developer asks for Lottie. In After Effects that means Bodymovin, a plugin, a composition already forced into shape layers, and a JSON file the site's player can read. You learn what isn't supported by shipping a JSON that plays nothing like the comp: expressions dropped, effects dropped, a layer mask turned into a blank. Sometimes the plugin warns, sometimes the player warns, and sometimes the homepage is just wrong until somebody notices.

Illustrator doesn't export that JSON, and neither does Photoshop. The workflow those apps taught is to go to After Effects, convert, hope, and export. Affinity isn't part of that pipeline either. So even if you design in another tool, you still end the week in After Effects checking trim paths, because in Lottie a stroke draws on through trim paths and a fill reveals through fill masks.

I wanted the export in Omadesign's menu, and I wanted it to fail with a clear message when the file can't represent the composition accurately. Silently dropping a pixel layer is worse than stopping. After a stop you can choose another export. After a silent drop you can't tell which half of the comp survived.

## The constraint

The clip in the `.oma` can hold tracks on vector artwork: X, Y, rotation, scale, opacity, stroke reveal, and fill reveal. Because the studio is one document shared by Design, Pixel, and Motion, that clip can also sit alongside pixel layers, layer masks, and effects. A Lottie exporter that claimed to carry all of that would be lying. Bodymovin shape animation can represent a certain set of things, and for this exporter, pixels, layer masks, and effects fall outside it.

So the export stops with a clear error. It doesn't partly apply, and it doesn't write a JSON that plays the vectors and omits the pixels without telling you. It stops and says why. The other command, **File > Export animated SVG…**, keeps masks and effects, and it is the route for compositions this exporter can't preserve. Each command has its own visible limits.

What Lottie can carry should match the preview. Stroke reveal becomes trim paths, and fill reveal becomes fill masks, so the same Draw stroke and Fill up you played with Space end up as the channels in the JSON. The target is Bodymovin 5.x shape animation, the format players already support, so you never get a private JSON that only this app can read.

The rest pose stays in the document. Exporting Lottie doesn't bake the playhead into the artboard or outline the working text inside the `.oma`. The JSON is a delivery file. The `.oma` is the editable animation, and you keep it for anything beyond the basic shape subset anyway.

## What landed

**Export Lottie…** writes Bodymovin 5.x shape animation. Trim paths carry the stroke reveals, fill masks carry the fill reveals, and transforms on the vector shapes travel with them. The command is meant for a mark built from shapes, with a draw-on stroke and a rising fill. Preview it in Motion, export it, and hand it to a player that supports Bodymovin 5.x.

This exporter can't preserve pixel layers, layer masks, or effects. When it meets one, it produces a clear error, so you never receive a partial JSON that looks successful and plays incomplete. Take that composition to animated SVG, which keeps masks and effects and writes the animated transforms and reveals.

The error is deliberate. A batch of homepage icons made purely of shapes should export. A poster that is a photograph with an animated vector headline on top should not slip out as a Lottie of the headline alone, because the photograph is part of what you approved. You either choose SVG, or rebuild the motion from shapes if the developer strictly needs Lottie.

Still exports are separate. PNG, JPEG, and static SVG always show the rest pose, and Lottie is always the clip. Neither is a substitute for the other.

Import brings back a shape-layer Lottie, but only a basic subset. The complete editable animation is still the `.oma` you saved before exporting. Treat the JSON as a handoff file and the document as the place you keep working.

## In the hand

Build the motion from vector shapes. Put Draw stroke on a path with a visible stroke, Fill up on a closed shape with a fill, and transforms on the same objects if they need to move. Press Space to preview, then save the `.oma`.

```
Export Lottie…
```

If the document contains only shapes and the tracks are ones this exporter supports, you get a JSON in Bodymovin 5.x shape format, with trim paths for the stroke reveals and fill masks for the fill reveals. Hand that file to the page.

If the document contains a pixel layer, a layer mask, or an effect, the export stops with a clear error. Read it. The `.oma` and the rest pose are unchanged, and nothing was half-written into a JSON you might commit by accident.

```
File → Export animated SVG…
```

Use that command for the composition the error named. Masks and effects stay. Text in the SVG is outlined so the glyphs match, and the source text in the document stays editable. The developer gets an animated SVG, and you keep a file you can still edit.

If the developer insists on Lottie and the error was about a pixel layer the motion file doesn't need, rebuild the idea in a shape-only document, or remove the offending layer from a copy, and export Lottie from a composition that qualifies. Don't strip the original poster to force it through. The error was the correct result for a file with pixels in it.

## The edge

This exporter can't preserve pixel layers, layer masks, or effects. It never drops them and continues. It stops with a clear error and leaves the document as it was. Animated SVG is the export that can carry those compositions.

The JSON is also never the home of the editable animation. It is Bodymovin 5.x for delivery, and the full clip, including anything outside the shape subset, stays in the `.oma`.
