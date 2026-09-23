---
id: T049
title: Guides survive save
slug: omadesign-0-5-8-guides-survive-save
excerpt: Guides stay in the .oma when you save, and they stay out of PNG, JPEG, SVG, and Lottie. A placed photo keeps its pixels.
tags: [omadesign, 0.5.8, guides]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-guides-survive-save/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-guides-survive-save/og.png
---

## The habit

You drag a guide down from the top ruler because the headline has to sit on a line you can trust tomorrow. In Illustrator that line is part of the file. You save. You quit. You open the same file after lunch and the guide is still at the measure you set. You export a PNG for the deck, or an SVG for the site, and the guide is gone. It was never ink. It was a rail.

Affinity works the same way in the hand. Guides live with the document. They do not print. Hide them when a client is looking over your shoulder, and they stop grabbing the cursor. Show them again and the rails are where you left them. The photograph you dropped on the board stays a photograph. You do not trade the pixels away to get a box around them.

That is the job. The rail has to survive the file you keep. The rail has to disappear from the file you send. Hiding it has to be a real off switch, not a dimmer that still catches clicks and still tugs the next drag onto the line.

## The constraint

Omadesign is one binary and one document. The project is a `.oma`. Vectors, pixel layers, frames, and the motion clip live in that file. There is no second "guides" file to lose in a folder, and there is no cloud round trip that has to remember your margins for you. Idle for a second writes a recovery snapshot beside the app data. Save deletes that swap and the `.oma` is the record.

Undo is one step. Turning artwork into guides, releasing those guides, and clearing them each have to come back as a single undo, with style and geometry intact. A dialog that asks you to "include guides in the export" would put the decision in the wrong place. The export writers already know what a delivery file is. PNG, JPEG, SVG, and Lottie are the picture. The `.oma` is the studio.

A placed image makes the constraint sharper. The camera file, or the PNG you placed, is pixels. A guide is a contour. If "make a guide from this photo" replaced the photo, you would have a rectangle and a hole in the layout. The document has to keep both.

## What landed

Ruler guides and object guides both survive a project save. Drag from the top ruler for a horizontal guide. Drag from the left ruler for a vertical one. Drag an existing guide to move it. Select one and press Delete, drag it off the canvas, or use its context menu to remove it. View offers Clear ruler guides. Those ruler guides are stored with the document. Reopen the `.oma` and they are on the same positions.

Object guides are the other kind. Object → Guides → Convert selection to guides turns vector artwork into editable, non-printing contours. Curves stay curves. Compound paths keep their holes. Shapes keep their parameters until you edit them into a path. Live text keeps its text and its style. Move, Node, and Reshape still edit the guide. Snapping follows the actual curve, including a Shift-constrained drag. Release guides restores that artwork, including geometry edits you made while it was a guide. Both actions undo in the normal way.

The status line tells you which kind of conversion you just did. Artwork becomes "editable guides · original artwork preserved." A placed image becomes a count of guides with "image artwork kept." The image does not turn into the guide. The guide is a separate contour around the image bounds. The pixels stay on the layer.

`Ctrl+;` shows or hides ruler guides and object guides. The status line says "Guides shown" or "Guides hidden." Hidden guides do not capture the pointer, and they do not participate in snapping. Hide is off. Show brings the same rails back, because they were never deleted. If you convert a selection while guides are hidden, the conversion shows them again so you can see the thing you just made. If guides are locked, the new object guides are created and then dropped from the selection, so a locked board does not hand you a guide you are about to nudge. Lock itself is the next control. This one is about persistence.

Combining and releasing compound paths keeps guide state, rotation, stacking, and gradient endpoints in one undo step. The operation wants either artwork or guides. A mix of the two is refused, with a clear status, so a compound does not silently swallow a rail into a filled shape or the other way around.

## In the hand

Open the poster. Turn rulers on from View if the top and left edges are bare. Drag down from the top ruler and park a horizontal guide on the cap height. Drag right from the left ruler and park a vertical guide on the left margin. Right-click a ruler if you need the unit readout to match the job. The guides are already in the document.

Select the logo lockup, the hairline rules, whatever vectors you trust as structure. Object → Guides → Convert selection to guides. The fills stop printing as art. The contours stay. Press `A` and drag a node if a curve guide needs to sit on the real edge of a letter. Press `V` and move one if the whole rail should shift. `Ctrl+Z` returns the conversion, or the node edit, in one step.

Place a photograph with File → Place, or drop it. Select it and convert again. You get a guide around the bounds. The picture is still the picture. Zoom the face. The pixels did not become a hollow rectangle.

Save with `Ctrl+S`. Quit. Open the same `.oma`. The ruler guides, the converted contours, and the bounds guide around the photo are there. The text you released back to artwork with Release guides is text again, style included, including any node edits you made before the release. The menu item reads "Release guides to artwork."

Hide the rails before you look at color.

```
Ctrl+;
```

The guides leave the screen. Click where a guide was. You select the artwork underneath. Drag a shape across that line. It does not snap to a hidden rail. `Ctrl+;` again and the rails return, unmoved.

Export PNG, JPEG, SVG, or Lottie. Open the export. The guides are not in it. Open the `.oma` again. The guides are still in it.

## The edge

The delivery writers refuse to draw guides. PNG, JPEG, SVG, and Lottie are the picture you send. Saving the project does not bake those rails into pixels inside the `.oma` either. They stay guides: editable, non-printing, present on the next open.

If a line has to appear in the PNG, release that guide back to artwork first, then export. Clear is the other refusal. Clear all guides, from Object → Guides or the ruler menu, removes ruler guides and converted object guides in one step, and Undo restores them. Hide does not. Hide only keeps them out of the pointer and out of the snap until you press `Ctrl+;` again.
