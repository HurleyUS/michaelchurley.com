---
id: T084
title: Export animated SVG
slug: omadesign-0-5-8-export-animated-svg
excerpt: File → Export animated SVG… writes animated transforms and stroke and fill reveals, and it keeps masks and effects. Text is outlined in that file. The .oma text stays editable.
publishedAt: 2026-09-02T14:59:58Z
tags: [omadesign, 0.5.8, motion]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-export-animated-svg/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-export-animated-svg/og.png
---

## The habit

You need the animation on a page. After Effects will give you a render, a Lottie from a plugin, or an SVG if you have done the extra dance with an extension. The SVG you get from a static Illustrator export is the art, dead. A developer who asks for "the SVG, but moving" usually receives a video, or a Lottie JSON, or a static file plus an apology. Photoshop's timeline export is a movie. It is the wrong file for a mark that was vectors this morning.

The hand wants one menu item. The file should carry the transforms you keyed, the stroke that draws on, the fill that rises. If the artboard uses a mask, the mask should still be a mask in the SVG. If an effect is on the object, the effect should survive that export. Text is the sharp edge. A live font in an SVG depends on the font being installed on the visitor's machine. A reveal that follows glyph shapes depends on those shapes being in the file. You have been burned by a headline that falls back to a default face and a reveal that no longer matches the letters.

You also want the source. Outlining type in the working document is a door you cannot open again. The export can outline. The `.oma` must not.

## The constraint

The clip and the drawing live in one `.oma`. The rest pose stays the rest pose. A still PNG, JPEG, or static SVG is that pose, on purpose, so a casual export cannot become a random frame. The animated file has to be its own command. **File → Export animated SVG…** is that command. It has to write the channels the timeline actually has: animated transforms, stroke reveal, fill reveal. Inventing a second animation model at export time is how the preview and the file diverge.

Masks and effects are part of the composition you can already see. Dropping them silently would ship a cleaner file than the one you approved. This export keeps them. Lottie, beside it in the File menu, cannot keep pixel layers, layer masks, and effects, and it says so with an error. The SVG path is the one that holds those compositions. The split is the constraint of the two formats, made visible as two commands.

Text has to match the canvas in the exported file. Glyph geometry and reveals have to agree. The way to guarantee that, without a network and without embedding a font you may not have the right to embed, is to outline the text in the export. The source text in the `.oma` stays editable. Project fonts, when you use them, already outline on SVG export for the same reason: the shared file keeps its appearance, the document keeps its carets.

Native file dialogs are the save UI everywhere else. This export asks for a path the same way. It does not upload the SVG anywhere.

## What landed

**File → Export animated SVG…** writes an SVG with the animated transforms and the stroke and fill reveals. X, Y, rotation, scale, and opacity travel as the transforms you keyed. Stroke reveal travels as the draw-on. Fill reveal travels as the fill coming up. The native canvas, this SVG, and Lottie share those reveal channels, so a Draw stroke you previewed with Space is the Draw stroke in the file. A Fill up from the bottom is the Fill up in the file.

Masks stay. Effects stay. A composition that depends on them does not get simplified into naked shapes. You approved the masked mark. The SVG is the masked mark, moving.

Text is outlined in the exported file. The glyphs become geometry, and the reveals follow that geometry, so the letters on the page match the letters on your artboard. The font does not have to be installed on the machine that displays the SVG. The source text in the `.oma` is untouched. Open the document, double-click the type, and you are editing text. The outline existed in the export, for the export.

The `.oma` remains the complete editable animation. Tracks, rest pose, live type, the layer stack. The SVG is a delivery file. Edit in the document. Export again when the edit is real. You do not round-trip the SVG back into the source to keep working. Import paths exist for Lottie and for static SVG as artwork. The working clip is the document you saved.

A static SVG export is still the rest pose. If the menu you hit does not say animated, you asked for the still. Use the animated command when the page needs the clip.

## In the hand

Finish the move in Motion. Space to preview. Home to see the rest pose. The keys you mean are on the timeline. Save the `.oma` first, the way you save before any export that leaves the machine.

```
File → Export animated SVG…
```

The native file dialog asks where the SVG goes. Name it for the page, not for the working file. Write it.

Open that SVG where you will use it. The transforms play. A stroked path draws on if you used stroke reveal. A closed fill rises if you used fill reveal. Masks you set are still masking. Effects you set are still in the file. Headlines are outlines. They match the glyph shapes you saw on the canvas, including the way a reveal crosses those shapes.

Go back to the `.oma`. Click the type with the Type tool. The caret is there. Change a word. The change is in the document. The SVG you already wrote still has the old word, outlined, which is what an export is. Export animated SVG again when the new word should ship. The new file outlines the new glyphs. The document still has text.

If the composition has pixel layers, layer masks, or effects and someone asks for Lottie, this SVG is the file that can hold them. Lottie will stop on those and tell you. You already have the command that does not have to stop.

## The edge

The export refuses to outline the source. Text becomes geometry in the SVG so the glyphs and the reveals match a machine that does not have your fonts. The `.oma` keeps the text editable. You can export ten times and the type tool still edits type.

It also refuses to drop masks and effects on the way out. Those stay in the animated SVG. A still export remains a different file: PNG, JPEG, and static SVG stay the rest pose, playhead or not.

Choose File → Export animated SVG… when the page needs the clip and the `.oma` needs to keep the words.
