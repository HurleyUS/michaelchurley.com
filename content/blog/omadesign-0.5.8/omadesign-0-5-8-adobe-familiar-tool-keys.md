---
id: T131
title: Adobe familiar tool keys
slug: omadesign-0-5-8-adobe-familiar-tool-keys
excerpt: The tool letters are V A P N R O Y S L T G I U B E K J, Shift+J, M C W H Z. F1 opens the full list. The HUD at the bottom follows the tool you are holding.
tags: [omadesign, 0.5.8, shortcuts]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-adobe-familiar-tool-keys/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-adobe-familiar-tool-keys/og.png
---

## The habit

Your left hand already knows the letters. `V` selects. `A` is the direct selection or node tool, depending on which app taught you. `P` is the pen. `T` is type. `B` is the brush. `I` is the eyedropper. `Z` is zoom. `H` is the hand. Illustrator, Photoshop, and Affinity do not agree on every letter. They agree on enough of them that a new tool with a cute letter is a tax. `R` for rectangle and `O` for ellipse are in your hand from Illustrator. `J` for clone and `Shift+J` for the healing brush are in your hand from Photoshop. You want those letters on day one, and you want a strip on screen that tells you the rest without a trip to a PDF.

You also know the letters lie when the persona changes. Photoshop's `J` does nothing useful in Illustrator. The letter can stay. The tool it calls has to match the room you are in.

## The constraint

One binary, five personas, one key table. Design, Layout, Pixel, Photo, and Motion share the process and the `.oma`, except Photo's develop session which keeps its own history beside the camera file. If each persona shipped a private keymap, muscle memory would reset every time you pressed the persona you needed for the next ten minutes. The letters stay. The table refuses a letter that has no tool in that persona, so `S` does not invent a star in a room that has no star, and Photo does not turn `P` into a pen over a RAW file.

The teacher has to stay out of the way. A shortcut overlay that takes keyboard focus steals the next letter from the tool you just asked about. The HUD is a strip. Hints are informational. Text editing and menus get their own context. `F1` opens the full list when the strip is not enough.

## What landed

These are the tool letters, with no modifier, from the manual and the key table:

`V` Move. Click selects, drag moves, eight handles scale, the handle above the box rotates. Shift-click adds or removes. Alt-drag clones.

`A` Node. Points and Bézier handles. Shift-click adds a node to the selection. Alt-click toggles corner and smooth. Alt-drag breaks a handle. Delete removes selected points.

`P` Pen. Click a corner, click-drag a smooth point. Shift constrains to 45 degrees. Enter or double-click finishes an open path. Escape drops the last point, then cancels. Click the first point to close.

`N` Pencil. `R` Rectangle. `O` Ellipse. `Y` Polygon. `S` Star, in Design and Layout. `L` Line. Shift constrains. Corner radius, sides, and inner radius sit in Transform.

`T` Type. Click, type, Enter for a new line, Escape or a click away to finish. Double-click existing type to edit it.

`G` Gradient, dragged across a selected shape. The active Fill or Stroke row in Appearance chooses which paint you are editing. Stops you already made stay.

`I` Eyedropper. `U` Trace, raster to vector on the active pixel layer. `B` Brush. `E` Eraser. `K` Fill. `J` Clone, Alt-click to set the source. `Shift+J` Healing brush in Pixel, Alt-click clean texture, then paint. `M` Smudge in Pixel. `C` Crop. `W` Wand. `H` Hand. `Z` Zoom.

A few letters sit next to that set because the same table owns them. `F` is Frame in Layout. `Q` is the lasso. `Shift+O` is the Artboard tool in Design, and the elliptical marquee in Pixel. `Shift+M` is the rectangular marquee in Pixel. `Shift+A` toggles auto-layout on a Layout selection. Photo's letter tools are Hand, Zoom, Crop, and Eyedropper. The other letters do nothing there.

`[` and `]` change brush size. `Shift+[` and `Shift+]` change hardness. Those are plain keys. With Ctrl they belong to stacking, which is a different chord.

The Shortcut HUD sits on the bottom of the window. The upper row follows the current tool. The lower row shows letter keys. Hold Ctrl, Shift, Alt, or a combination and the strip shows the matching commands. It keeps its height so a drag does not jump. Hover **+ more** when the window is too narrow for every hint. `Ctrl+/` or **View → Shortcut HUD** shows or hides it. `F1` opens the full shortcut list, and the same key closes it.

While you are editing text, letters go into the text. A field in the inspector swallows non-global shortcuts. Save, open, and the HUD toggle still work. The tool letter does not.

## In the hand

Open a blank vector document. The default persona is Design. Press `R` and drag a rectangle. Press `P` and draw a short path. Press `T`, click, and type. Press `V` and move the rectangle. Press `A` and drag a point. That is the first minute the manual describes.

Press `B`. If you are still on vectors only, add a pixel layer before you expect paint. Press `[` twice and watch the brush shrink. Press `E` and erase. Press `I` and sample. Press `Z` and click to zoom in, Alt-click to zoom out, or drag a box. Press `H` and pan. Space does the same pan while you hold it, as long as you are not in Motion.

Switch to Layout. Press `F` and drag a frame. `R` and `T` still work. Press `S`. The star is legal here. Switch to Pixel. Press `J`, Alt-click a source, and clone. Press `Shift+J` and heal. Press `M` and smudge. Press `W` and drag the wand. Press `Q` and draw a lasso.

Switch to Photo and open a picture. Press `C` and crop. Press `I`. Press `Z`. Press `H`. Press `P`. Nothing arms a pen. The letter is reserved, and this persona does not have that tool.

Press `F1` whenever a letter fails you. The list is the same table. Press `Ctrl+/` if the strip is in the way, and press it again when you want it back. Hold Shift while the strip is visible and read the constrained gestures before you drag.

## The edge

A letter that the persona does not implement does not fall through to a different tool. Photo keeps four tool letters. Star stays in Design and Layout. Smudge and the healing brush stay in Pixel. Text editing eats the letter until you leave the text. The HUD never takes focus, so reading a hint does not steal the next key.

Press `V`, then `F1` if you want the rest of the table in front of you.
