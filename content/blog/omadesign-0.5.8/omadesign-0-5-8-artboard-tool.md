---
id: T028
title: Artboard tool
slug: omadesign-0-5-8-artboard-tool
excerpt: Artboard is Shift+O. Draw a board, drag to move it, scale from the handles, rotate from the top handle. Alt-drag clones. Rename it in Transform.
tags: [omadesign, 0.5.8, artboards]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-artboard-tool/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-artboard-tool/og.png
---

## The habit

The artboard is the page. In Illustrator you press Shift+O, you draw a board, you drag it, you pull a handle, and you rename it in the panel when "Artboard 3" stops meaning anything. Affinity uses a similar board for each exportable page. Photoshop's artboards showed up later and never quite felt like pages, but the move-and-rename habit is the same. You keep a poster, a story crop, and a square crop side by side, and you copy art from one to another.

You also keep a second kind of box in your head. Figma and Affinity's layout tools, and Illustrator's artboards, get blurred together until a frame that stacks buttons is treated like a page, or a page starts growing padding and auto-layout by accident. The hand wants one key for "this is the sheet of paper" and a different key for "this is a UI frame."

Cloning a board is Alt-drag in the apps you already know. You duplicate the page, slide it to the right, and start the next size. If that gesture moved the original instead of copying it, you would stop using it.

Rotation of the board itself is rarer, and when you need it you need the same top handle you use on a shape. A separate rotate dialog for pages is how boards end up almost-aligned.

## The constraint

Design and Layout share one `.oma`. The artboard is the Design page. The Layout frame is a different object, made with F, for screens that nest, stack, and export as a frame. If the artboard tool also became a stack container, every poster would grow UI structure it did not ask for, and every screen mock would be one accidental Shift+O away from turning into a bare page. One document can hold both. The tools stay distinct so the file stays readable.

Undo is one step. Moving a board that has artwork on it has to bring the artwork back with the board. An undo that restored the page and left the logo where the page used to be would split one gesture into two repairs. You would not trust the next drag.

The key cannot be O. O is the ellipse. The artboard is Shift+O, the same chord Illustrator trained into your left hand. A new chord would be a tax on the first hour. Shift is already the constraint key while you drag a board: horizontal, vertical, or 45 degrees. The clone chord is Alt-drag, the same chord that clones a path. Add Shift and a constrained copy is the same idea you use on objects.

Motion can animate what you drew on that board. It does not rewrite the board. The artboard is the rest pose. Tracks for position, rotation, scale, opacity, and reveals hang off the artwork. The page you drew stays the page you export as a still PNG, JPEG, or SVG.

## What landed

Press Shift+O. Drag on the canvas to draw a new artboard. Drag the board to move it. The handles scale it. The handle above the board rotates it, the same top handle Move uses on a shape. Alt-drag clones the board. Hold Shift while you move a board and the move stays on horizontal, vertical, or 45 degrees.

Object → Wrap selection in artboard builds a board around the artwork you already selected. You use this when the drawing came first and the page should fit it. Click the name in Transform to rename the board. The name is there, in the inspector you already have open, so you are not hunting a separate artboard panel for a label.

A move of a selection, or of an artboard with its contents, comes back together on undo. Duplicate work follows the same single-step rule when you are copying several objects. The board and the things on it are one gesture.

Paste knows about more than one board. Objects copied inside Omadesign paste at their original positions, including when you paste onto another artboard. The status bar says so. You line up a poster and a crop by pasting, then you move the copy. You do not get a mystery offset because the destination board sits further right on the canvas.

The artboard is also a snap target. Snapping uses object edges and centers, artboard edges and centers, guides, the grid, and equal spacing. Alignment lines and gap labels appear while you drag. Ctrl+Shift+; toggles snapping. Hold Ctrl during the drag to reverse that choice for the length of the drag.

Shift+O is easy to miss if your finger is already on O for an ellipse. Watch the first drag. A filled oval means the Shift did not register. Undo and press the chord again.

## In the hand

Start a poster. Press Shift+O and drag the board at the size you are actually printing. Click the name in Transform and type the name you will still understand in a month. "Poster" is enough. "Artboard 1" will not be.

Draw the mark inside it with the usual tools. When you need a second size, press Shift+O, hold Alt, and drag the board. You get a clone. Hold Shift as well if the clone should stay on the same horizontal line. Move artwork onto the new board, or copy it and paste. The paste lands at the original position, so if the boards share a coordinate idea, the art lands in the matching spot. The status bar confirms the paste.

If the drawing already exists and the board should wrap it, select the artwork with V and choose Object → Wrap selection in artboard. Rename in Transform.

Rotate a board only when the sheet itself is the rotated thing. Grab the top handle. The artwork rotation you do with V on a single path is a different handle on a different object. Do not rotate the page to tilt a headline.

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

Open Motion later if the poster needs a move. The board you drew is the rest pose. Space plays the clip in that persona. The page underneath the keys is still the page.

Fit the view to the board when you are lost: with the Zoom tool, Z, Ctrl-click fits the artboard. Ctrl+0 is Fit from anywhere the shortcut is live. That is the camera. The board tool is the page.

## The edge

The artboard tool refuses to become a Layout frame. Wrap selection in artboard makes a page. Frames, stacking children, constraints, and File → Export frame PNG, SVG, or HTML belong to the Frame tool, F. You can keep a screen and a poster in one `.oma`. You pick which box you are drawing by the key you hold.

Motion refuses to rewrite the board. Animation is tracks on the art. The artboard stays the rest pose you drew with Shift+O.

Press Shift+O, drag the page, and click its name in Transform to call it something you will remember.
