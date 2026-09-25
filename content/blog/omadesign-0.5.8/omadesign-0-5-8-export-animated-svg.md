---
id: T084
title: Export animated SVG
slug: omadesign-0-5-8-export-animated-svg
excerpt: File → Export animated SVG… writes animated transforms and stroke and fill reveals, and it keeps masks and effects. Text is outlined in that file. The .oma text stays editable.
publishedAt: 2026-09-02T14:59:58Z
tags: [omadesign, 0.0.1-alpha.rc, motion]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-export-animated-svg/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-export-animated-svg/og.png
---

## The habit

You need the animation on a web page. After Effects gives you a render, a Lottie from a plugin, or an SVG if you go through the extra steps with an extension. A static Illustrator export gives you the art with no motion. A developer who asks for "the SVG, but moving" usually gets a video, a Lottie JSON, or a static file with an apology. Photoshop's timeline exports a movie, which is the wrong file for a mark that was vectors this morning.

I wanted one menu item that produces a file carrying the transforms you keyed, the stroke that draws on, and the fill that rises. If the artboard uses a mask, the mask should still be a mask in the SVG, and an effect on an object should survive the export. Text is the tricky part. A live font in an SVG depends on the font being installed on the visitor's machine, and a reveal that follows glyph shapes depends on those shapes being in the file. You have probably seen a headline fall back to a default face with a reveal that no longer matches the letters.

You also want to keep the source editable. Outlining type in the working document can't be undone later. The export can outline, and the `.oma` must not.

## The constraint

The clip and the drawing live in one `.oma`, and the rest pose stays the rest pose. A still PNG, JPEG, or static SVG exports that pose on purpose, so a casual export never captures a random frame. The animated file therefore needs its own command, **File > Export animated SVG…**. It has to write the channels the timeline actually has: animated transforms, stroke reveal, and fill reveal. Inventing a second animation model at export time is how the preview and the file drift apart.

Masks and effects are part of the composition you can already see. Dropping them silently would ship a simpler file than the one you approved, so this export keeps them. Lottie, next to it in the File menu, can't hold pixel layers, layer masks, or effects, and it reports an error when it meets them. The SVG export is the one that holds those compositions. Having two commands makes the difference between the two formats visible.

Text in the exported file has to match the canvas, with glyph geometry and reveals in agreement. The way to guarantee that, without a network and without embedding a font you may not have the right to embed, is to outline the text in the export. The source text in the `.oma` stays editable. Project fonts already outline on SVG export for the same reason: the shared file keeps its appearance, and the document keeps editable text.

This export uses the native file dialog to ask for a path, like every other save, and never uploads the SVG anywhere.

## What landed

**File > Export animated SVG…** writes an SVG with the animated transforms and the stroke and fill reveals. X, Y, rotation, scale, and opacity carry over as the transforms you keyed. Stroke reveal becomes the draw-on, and fill reveal becomes the fill rising. The native canvas, this SVG, and Lottie share the same reveal channels, so a Draw stroke you previewed with Space is the same Draw stroke in the file, and a Fill up from the bottom behaves the same way.

Masks and effects stay. A composition that depends on them isn't reduced to bare shapes, so the SVG shows the same masked mark you approved, now moving.

Text is outlined in the exported file. The glyphs become geometry and the reveals follow that geometry, so the letters on the page match the letters on your artboard, and the font doesn't need to be installed on the machine that displays the SVG. The source text in the `.oma` is untouched. Open the document, double-click the type, and you are editing text. The outlines exist only in the export.

The `.oma` stays the complete editable animation, with tracks, rest pose, live type, and the layer stack. The SVG is a delivery file. Edit in the document and export again when the edit is final. You never import the SVG back into the source to keep working. Import exists for Lottie and for static SVG as artwork, but the working clip is the document you saved.

A static SVG export still gives you the rest pose. If the menu item you chose doesn't say animated, you get the still. Use the animated command when the page needs the clip.

## In the hand

Finish the motion in the Motion persona. Press Space to preview and Home to see the rest pose, and check that the keys you want are on the timeline. Save the `.oma` first, as you would before any export that leaves the machine.

```
File → Export animated SVG…
```

The native file dialog asks where the SVG should go. Name it for the page it will live on instead of after the working file, and write it.

Open the SVG where you plan to use it. The transforms play. A stroked path draws on if you used stroke reveal, and a closed fill rises if you used fill reveal. Your masks still mask, and your effects are still in the file. Headlines are outlines that match the glyph shapes you saw on the canvas, including where a reveal crosses them.

Go back to the `.oma` and click the type with the Type tool. The caret is there. Change a word, and the change is in the document. The SVG you already wrote still has the old word, outlined, as any export would. Export animated SVG again when the new word should ship. The new file outlines the new glyphs, and the document still has live text.

If the composition has pixel layers, layer masks, or effects and someone asks for Lottie, this SVG can hold them. Lottie will stop and tell you it can't.

## The edge

The export never outlines the source. Text becomes geometry in the SVG so the glyphs and reveals match on a machine without your fonts, and the `.oma` keeps the text editable. You can export ten times and the type tool still edits type.

The export also keeps masks and effects in the animated SVG. Still exports are separate files: PNG, JPEG, and static SVG always show the rest pose, wherever the playhead is.
