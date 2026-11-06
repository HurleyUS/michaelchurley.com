---
id: T028
title: Artboard tool
slug: omadesign-0-5-8-artboard-tool
excerpt: Artboard is Shift+O. Draw a board, drag to move it, scale from the handles, rotate from the top handle. Alt-drag clones. Rename it in Transform.
publishedAt: 2026-08-29T16:29:47Z
tags: [omadesign, 0.0.0.0alpha-rc, artboards]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-artboard-tool/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-artboard-tool/og.png
---

## The habit

The artboard is the page. In Illustrator you press Shift+O, draw a board, drag it, pull a handle, and rename it in the panel once "Artboard 3" stops meaning anything. Affinity uses a similar board for each exportable page. Photoshop added artboards later and they never quite felt like pages, but the move-and-rename habit is the same. You keep a poster, a story crop, and a square crop side by side, and you copy art from one to another.

You also keep a second kind of box in your head. Figma, Affinity's layout tools, and Illustrator's artboards get blurred together until a frame that stacks buttons is treated like a page, or a page picks up padding and auto layout by accident. I want one key for the sheet of paper and a different key for a UI frame.

In the apps you already know, cloning a board is Alt-drag. You duplicate the page, slide it to the right, and start the next size. If that gesture moved the original instead of copying it, you would stop using it.

Rotating the board itself is rarer, and when you need it you want the same top handle you use on a shape. A separate rotate dialog for pages is how boards end up almost aligned.

## The constraint

Design and Layout share one `.oma`. The artboard is the Design page. The Layout frame is a different object, made with F, for screens that nest, stack, and export as a frame. If the artboard tool also became a stack container, every poster would pick up UI structure it did not ask for, and every screen mock would be one accidental Shift+O away from turning into a bare page. One document can hold both kinds of box. I kept the tools separate so the file stays readable.

Undo is one step. Moving a board that has artwork on it has to bring the artwork back with the board on undo. If undo restored the page and left the logo where the page used to be, one gesture would need two repairs, and you would stop trusting the next drag.

The key can't be O, because O is the ellipse. The artboard is Shift+O, the same chord Illustrator users already know, so nobody has to learn a new one in the first hour. While you drag a board, Shift is the constraint key and holds the move to horizontal, vertical, or 45 degrees. Clone is Alt-drag, the same chord that clones a path, and adding Shift gives a constrained copy, the same as on objects.

Motion can animate what you drew on the board, but it does not change the board. The artboard is the rest pose. Tracks for position, rotation, scale, opacity, and reveals attach to the artwork. The page you drew stays the page you export as a still PNG, JPEG, or SVG.

## What landed

Press Shift+O and drag on the canvas to draw a new artboard. Drag the board to move it, and use the handles to scale it. The handle above the board rotates it, the same top handle Move uses on a shape. Alt-drag clones the board. Hold Shift while you move a board to keep the move horizontal, vertical, or at 45 degrees.

Object > Wrap selection in artboard builds a board around the artwork you already selected. Use it when the drawing came first and the page should fit it. To rename the board, click its name in Transform. The name lives in the inspector you already have open, so you don't need a separate artboard panel just for a label.

When you move a selection, or an artboard with its contents, one undo brings it all back together. Duplicating several objects follows the same single-step rule. The board and the things on it move as one gesture.

Paste works across boards. Objects copied inside Omadesign paste at their original positions, including when you paste onto another artboard, and the status bar says so. You can line up a poster and a crop by pasting and then moving the copy. The copy does not pick up an offset just because the destination board sits further right on the canvas.

The artboard is also a snap target. Snapping uses object edges and centers, artboard edges and centers, guides, the grid, and equal spacing. Alignment lines and gap labels appear while you drag. Ctrl+Shift+; toggles snapping, and holding Ctrl during a drag reverses that setting for the length of the drag.

Shift+O is easy to miss if your finger is already on O for an ellipse. Watch the first drag. If you get a filled oval, the Shift did not register. Undo and press the chord again.

## In the hand

Start a poster. Press Shift+O and drag the board at the size you are actually printing. Click the name in Transform and type something you will still understand in a month. "Poster" is enough. "Artboard 1" is not.

Draw the mark inside it with the usual tools. When you need a second size, press Shift+O, hold Alt, and drag the board to get a clone. Hold Shift as well if the clone should stay on the same horizontal line. Move artwork onto the new board, or copy and paste it. The paste lands at the original position, so if the boards line up, the art lands in the matching spot. The status bar confirms the paste.

If the drawing already exists and the board should wrap it, select the artwork with V and choose Object > Wrap selection in artboard. Rename it in Transform.

Rotate a board only when the sheet itself should be rotated. Grab the top handle. Rotating a single path with V uses a different handle on a different object. If you only want to tilt a headline, rotate the headline itself.

```
Shift+O                              Artboard
Drag                                 Draw
Drag inside the board                Move
Handles                              Scale
Top handle                           Rotate
Alt-drag                             Clone
Shift                                Constrain the move to H / V / 45°
Object → Wrap selection in artboard  Board around the selection
Transform name                       Rename
Ctrl+Z                               Board and contents together
```

Open Motion later if the poster needs to move. The board you drew is the rest pose. Space plays the clip in that persona, and the page underneath the keys stays the same.

If you lose your place, fit the view to the board. With the Zoom tool (Z), Ctrl-click fits the artboard. Ctrl+0 is Fit from anywhere the shortcut is active. Those move the camera. The board tool edits the page.

## The edge

The artboard tool does not make Layout frames. Wrap selection in artboard makes a page. Frames, stacking children, constraints, and File > Export frame PNG, SVG, or HTML belong to the Frame tool (F). You can keep a screen and a poster in one `.oma`, and the key you press decides which kind of box you draw.

Motion does not change the board either. Animation lives in tracks on the art, and the artboard stays the rest pose you drew with Shift+O.
