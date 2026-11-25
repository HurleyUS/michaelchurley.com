---
id: T053
title: Shift constrain Alt clone
slug: omadesign-0-5-8-shift-constrain-alt-clone
excerpt: Shift locks pen, brush, and moves to horizontal, vertical, or 45 degrees. Alt-drag clones. On a brush, Shift anchors at the last free point.
tags: [omadesign, 0.5.8, modifiers]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-shift-constrain-alt-clone/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-shift-constrain-alt-clone/og.png
---

## The habit

Shift is the straight line. In Illustrator you hold it while you drag a point, a handle, a rectangle, or a selection, and the move collapses to horizontal, vertical, or 45 degrees. You hold it while you drag a brush in Photoshop and the stroke stops wandering. You do not pick a "constrain mode" from a menu. The key is down, the angle is locked, the key comes up, the angle is free. That is thirty years of the same finger.

Alt is the copy. Alt-drag in Illustrator duplicates the selection and leaves the original where it was. Add Shift and the copy travels on a straight axis. You use it for a second card, a second icon, a repeated rule. The duplicate lands as a real object. One undo removes the copy, or the whole set of copies if you dragged several objects together. You do not get a dialog that asks how many copies, unless you asked for a step-and-repeat on purpose. The ordinary copy is the drag.

The brush case is the one people get wrong in tools that reset the constraint to the start of the stroke. You draw a loose mark, then you want the tail of it to go straight. Shift should lock from the point where you pressed Shift, not swing the whole stroke back to the first sample. The last free point is the hinge. Everything after that hinge is horizontal, vertical, or 45 degrees. Let go of Shift and the hinge is forgotten. Press Shift again later in the same stroke and a new hinge is taken at the new last point.

## The constraint

Omadesign has one pointer and one history. A constrain tool that was its own mode would fight Pen, Pencil, Brush, Move, and the artboard tool, each of which already has a key. Shift is already the modifier the Shortcut HUD is built to show. Hold Shift and the bottom strip swaps to the commands and gestures that match. The strip keeps its height, so the canvas does not jump while you are mid-drag. That only works if Shift means the same thing in each of those tools: 45-degree lock, taken from the gesture you are in.

Alt-drag has to be a clone in the document. The copy is new geometry, and it does not stay linked to the original. `Ctrl+C` / `Ctrl+V` still paste from the clipboard, and objects copied inside Omadesign paste at their original positions. Alt-drag follows the pointer. Several objects in the selection duplicate together, and that duplication is one undo step. Moving a selection, or moving an artboard with its contents, also returns together on undo. The board and the things on it come back as one step.

There is no dialog. The modifiers are the interface. Linux sends those keys as real events, including a release that arrives before the next frame. The gesture keeps the chord until you let go.

## What landed

Hold Shift to constrain pen points and handles, pencil and brush strokes, and object or artboard movement to horizontal, vertical, or 45 degrees. Rectangle, ellipse, polygon, star, and line honor the same Shift while you drag them out. Corner radius, sides, and inner radius stay in Transform after the shape exists. Shift on the way out of the tool is the proportion or the angle. The parameters after that are numbers.

Alt-drag clones the object under the drag. Add Shift and the copy is constrained. Artboards do this too: `Shift+O` is the artboard tool in Design, Alt-drag clones a board, handles scale it, the top handle rotates it. Object → Wrap selection in artboard is the other way to get a board around existing art. The clone path is the drag.

During a brush stroke, a pencil stroke, a smudge, or a clone stamp, pressing Shift anchors the constraint at the last free point. The stroke does not re-aim at the first dab. The anchor is the last sample before Shift took over. From there, the pointer is pulled onto the 45-degree fan. Release Shift and that anchor is cleared. The rest of the stroke is free again. Press Shift later and a new anchor is taken. The HUD shows Shift while this is happening. It does not take the key away from the stroke.

Pen uses the same angle on a click. Shift constrains the next point or the handle to 45 degrees. A twitch under 3 pixels stays a corner. Alt-drag on a handle breaks symmetry. Node uses Shift on a handle drag for that same fan. Shift-click on a point adds it to the node selection. Delete removes selected points. The angle lock does not convert the path.

Ctrl during the drag still reverses snapping. Shift and Ctrl compose. Constrain the angle and, with Ctrl held, skip the magnet. Release Ctrl and snapping returns to whatever `Ctrl+Shift+;` last set. Release Shift and the angle is free. The two holds do not reset each other.

## In the hand

Select the mark. Hold Alt and drag. A copy follows the pointer. The original stays. Add Shift before you let go if the copy should sit on the same baseline or the same center line. Release the mouse, then the keys. `Ctrl+Z` removes that copy. If several objects were selected, one undo removes the whole duplicated set.

Draw a rectangle with `R`. Hold Shift while you drag if you want the square. Release Shift if the frame should be free. The shape remains editable. Corner dots still round it. You did not convert it to a path by constraining it.

```
Shift     constrain to horizontal, vertical, or 45°
Alt-drag  clone
Shift+Alt constrained copy
```

Take the brush in Pixel with `B`, on a pixel layer. Paint a loose edge. Mid-stroke, press Shift. The line from that moment runs straight, hinged at the last free dab. Release Shift, scrub a little, press Shift again. The new straight segment hinges at the new point. The earlier curve stays where you drew it. The same hinge works for Pencil `N`, Smudge `M`, and Clone `J`.

Pen: `P`. Hold Shift on the next click. The point lands on the 45-degree line from the previous point. Hold Shift while you drag a handle. The handle locks to the fan. Alt-drag the handle if one side should break. The cubic is drawn as you go.

Move an artboard with its contents. Shift keeps the board on axis. Undo puts the board and the contents back together. Alt-drag the board if you needed a second board, not a move.

Watch the bottom strip. Hold Shift and the row changes. Let go and the letter keys return. The canvas does not resize to make room for the hint. If the window is small, hover + more for the overflow. The hints do not take focus from the drag.

## The edge

Shift on a brush, pencil, smudge, or clone refuses to hinge at the start of the stroke. The anchor is the last free point at the moment Shift goes down. Release Shift and that anchor is dropped. The tool will not keep a stale hinge for the next wiggle.

Alt-drag refuses to link the copy to the original. You get new objects, stacked with the selection you dragged, one undo for the set. It also refuses to open a count dialog. If you wanted one copy on a straight line, the keys are Alt and Shift, in the hand, for the length of the drag.
