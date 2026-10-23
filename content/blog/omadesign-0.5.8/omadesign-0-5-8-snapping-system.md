---
id: T052
title: Snapping system
slug: omadesign-0-5-8-snapping-system
excerpt: Snap to edges, centers, guides, the grid, and equal gaps. Ctrl+Shift+; toggles. Hold Ctrl during a drag to reverse that choice, then let go.
publishedAt: 2026-09-06T10:39:01Z
tags: [omadesign, 0.0.1-alpha, snapping, modifiers]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-snapping-system/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-snapping-system/og.png
---

## The habit

You drag a box in Illustrator and the pink lines appear: edge to edge, center to center, and a gap number when three cards are about to sit the same distance apart. You trust the line, let go, and the box lands where the line said. When the snap is wrong, you don't open Preferences. You hold Ctrl (Cmd on a Mac), and the drag ignores snapping for as long as the key is down. Release the key and snapping returns, without the preference ever changing.

Photoshop's extra-shift and Affinity's snapping candidates work the same way. The candidates are things you can see: object edges, artboard edges, centers, guides, the grid, and the gap that would make a row even. The feedback is drawn on the canvas, so you don't have to glance at a panel. If the feedback is late or too eager, you end up fighting the tool. If the thing you are dragging can snap to itself, the box jitters against its own outline and you never get a clean release.

What you want is a toggle you can hit without looking, and a hold that reverses that toggle for one gesture.

Shift and Alt are the other modifiers you already know. Shift draws the straight line. In Illustrator you hold it while dragging a point, a handle, a rectangle or a selection, and the move is limited to horizontal, vertical or 45 degrees. In Photoshop you hold it while painting and the stroke stops wandering. You never pick a "constrain mode" from a menu. The key goes down and the angle locks, the key comes up and the angle is free. Designers have used that same finger for thirty years.

Alt makes a copy. Alt-drag in Illustrator duplicates the selection and leaves the original in place, and adding Shift keeps the copy on a straight axis. You use it for a second card, a second icon or a repeated rule. The duplicate is a real object, and one undo removes the copy, or the whole set of copies if you dragged several objects together. No dialog asks how many copies unless you deliberately asked for step-and-repeat.

Brushes are where some tools get Shift wrong, by resetting the constraint to the start of the stroke. You draw a loose mark and then want the tail to go straight. Shift should lock from the point where you pressed it, and it shouldn't swing the whole stroke back to the first sample. The last free point is the hinge, and everything after it is horizontal, vertical or 45 degrees. Release Shift and the hinge is forgotten. Press Shift again later in the same stroke and a new hinge is taken at the new last point.

## The constraint

One canvas serves Design, Layout and Motion, with the same artboard, guides and objects. A snap system that only understood rectangles would miss a curve you converted into a guide, and one that rebuilt everything on every mouse sample would stutter. So the candidates are collected once and held for the whole gesture, with point targets cached. The objects you are moving are left out of that frozen set, so they can't snap to their own outline. When you release, the cache can rebuild.

The toggle has to be a key, because reaching for a checkbox mid-drag means a trip to the menu. `Ctrl+Shift+;` turns snapping on or off and leaves it that way. The status line says "Snapping on · hold Ctrl while dragging to invert," or the off version of that sentence. Holding Ctrl during a drag reverses whatever the current setting is, and releasing Ctrl brings back the setting you had. The hold never writes the preference. So there is a lasting toggle for the session and a momentary opposite for the gesture you are in.

View still has the individual switches, because snapping is really five separate decisions under one master key. You might want guides but not the grid, or equal gaps but not artboard centers. Those checkboxes are the saved set, and the master key and the Ctrl hold work on top of them.

There is no dialog and no account. The settings live in the session with the document. Alignment lines and gap measurements are drawn while you move and then disappear. They aren't objects in the `.oma`.

Omadesign has one pointer and one history. A separate constrain tool would conflict with Pen, Pencil, Brush, Move and the artboard tool, which each already have a key. Shift is already the modifier the Shortcut HUD is built to show. Hold Shift and the bottom strip switches to the matching commands and gestures, and the strip keeps its height so the canvas doesn't jump mid-drag. That only works if Shift means the same thing in every one of those tools: a 45-degree lock, taken from the gesture you are in.

Alt-drag has to create a clone in the document. The copy is new geometry and doesn't stay linked to the original. `Ctrl+C` / `Ctrl+V` still paste from the clipboard, and objects copied inside Omadesign paste at their original positions, while Alt-drag follows the pointer. Several selected objects duplicate together as one undo step. Moving a selection, or moving an artboard with its contents, also undoes as one step, so the board and everything on it come back together.

There is no dialog for any of this, because the modifiers are the interface. Linux sends those keys as real events, including a release that arrives before the next frame, and the gesture holds the key combination until you let go.

## What landed

### Snapping

Snapping looks at object edges and centers, artboard edges and centers, guides, the grid, and equal spacing between nearby objects. As you drag, alignment lines show the edge or center you are about to hit, and gap measurements appear when the space you are about to leave matches a neighbor's. Objects and guides win ties against the grid, so a guide you placed on purpose beats a grid intersection that happens to be nearby.

Guides include the straight ones from the rulers and the contours you converted from artwork. Snapping follows the actual curve of an object guide, and a Shift-constrained drag keeps its constraint while it snaps. Hidden guides (`Ctrl+;`) stay out of snapping. Locking is separate: a locked guide ignores the pointer so you don't nudge it, and Snap to guides remains its own checkbox.

Motion uses the visible animated geometry. At a given playhead position, the snap targets are where the artwork appears on screen at that moment, which may differ from the rest pose, so you can land a key against the position you see.

`Ctrl+Shift+;` toggles snapping as a whole. Ctrl+Shift with the colon key does the same thing, so the shifted semicolon still works. View shows the same master switch as Disable snapping or Enable snapping, with the shortcut on the item, and below it the menu reminds you to hold Ctrl during a drag to invert snapping. Then come the checkboxes: Snap to grid, Snap to guides, Snap to objects, Snap to artboards and Equal spacing. Turn one off and that family of candidates drops out, while the master switch still controls the rest. Equal spacing also applies to tool points, in addition to moving objects and artboards. A pen click can find a repeated gap, while still respecting edge, center and guide priority, and Shift.

The moving selection is excluded from the targets for that drag, and an artboard move excludes that artboard. You snap to other things, never to the object you are holding.

### Shift and Alt

Hold Shift to constrain pen points and handles, pencil and brush strokes, and object or artboard movement to horizontal, vertical or 45 degrees. Rectangle, ellipse, polygon, star and line respect the same Shift while you drag them out. Corner radius, sides and inner radius stay in Transform after the shape exists. Shift sets the proportion or the angle during creation, and after that the parameters are numbers.

Alt-drag clones the object under the drag, and adding Shift constrains the copy. Artboards work the same way. In Design, `Shift+O` is the artboard tool. Alt-drag clones a board, the handles scale it and the top handle rotates it. Object > Wrap selection in artboard is the other way to put a board around existing art. The drag is how you clone.

During a brush stroke, pencil stroke, smudge or clone stamp, pressing Shift anchors the constraint at the last free point. The stroke doesn't re-aim at the first dab. From that anchor, the pointer is pulled onto the 45-degree fan. Release Shift and the anchor is cleared, so the rest of the stroke is free again. Press Shift later and a new anchor is taken. The HUD shows Shift while this happens, without taking the key away from the stroke.

Pen uses the same angle on a click. Shift constrains the next point or the handle to 45 degrees, and a twitch under 3 pixels stays a corner. Alt-drag on a handle breaks symmetry. Node uses Shift on a handle drag for the same fan. Shift-click on a point adds it to the node selection, and Delete removes selected points. The angle lock doesn't convert the path.

Ctrl during a drag still reverses snapping, and it combines with Shift. You can constrain the angle and, with Ctrl held, skip snapping. Release Ctrl and snapping returns to whatever `Ctrl+Shift+;` last set. Release Shift and the angle is free. The two holds don't reset each other.

## In the hand

### Snapping

Draw three cards and turn snapping on.

```
Ctrl+Shift+;
```

Read the status line. Drag the third card toward the gap that matches the first two, and a measurement appears between them. Let go when the numbers match. Drag the same card by its center toward the artboard center, and the center line appears. Let go.

Hold Ctrl and drag that card a few pixels off the line, to a spot with no candidate you want. Snapping is reversed while Ctrl is down. Release Ctrl, and the next drag snaps again, because the master setting never changed.

If the grid is overpowering the guides, open View and clear Snap to grid, leaving Snap to guides and Equal spacing on. Drag again. The grid stops competing and the guides and gaps remain. Turn the grid back on when you are blocking in a new board.

Hide the guides with `Ctrl+;` and drag across where a guide was. Nothing pulls you onto it. Show the guides and the pull returns. If the guides are locked, you still see them and Snap to guides can still use them, but you can't drag the guide itself. That combination lets you snap type to a margin without moving the margin.

In Motion, park the playhead where a shape has already moved, then drag another shape toward it. The candidate is the shape where it is now, and the rest pose doesn't quietly win.

Pen work can use the same gap logic. Click a point, hold Shift if you want 45 degrees, and watch for the equal-spacing candidate. The HUD at the bottom of the window shows the modifier row while Ctrl or Shift is held, and it keeps the same height so the canvas doesn't jump under the drag. `Ctrl+/` hides that strip if you want the room, and hiding it doesn't change snapping.

`Ctrl+Z` undoes the move you committed. The snap lines were only feedback, so they aren't a step in the history.

### Shift and Alt

Select the mark, hold Alt and drag. A copy follows the pointer and the original stays put. If the copy should sit on the same baseline or center line, add Shift before you let go. Release the mouse, then the keys. `Ctrl+Z` removes that copy, and if several objects were selected, one undo removes the whole duplicated set.

Draw a rectangle with `R`. Hold Shift while you drag if you want a square, or release it for a free frame. The shape stays editable and the corner dots still round it, because constraining didn't convert it to a path.

```
Shift     constrain to horizontal, vertical, or 45°
Alt-drag  clone
Shift+Alt constrained copy
```

In Pixel, take the brush with `B` on a pixel layer and paint a loose edge. Press Shift mid-stroke, and the line from that moment runs straight, hinged at the last free dab. Release Shift, scrub a little, and press Shift again. The new straight segment hinges at the new point, and the earlier curve stays where you drew it. The same hinge works for Pencil (`N`), Smudge (`M`) and Clone (`J`).

With the pen (`P`), hold Shift on the next click and the point lands on the 45-degree line from the previous point. Hold Shift while dragging a handle and the handle locks to the fan. Alt-drag the handle if one side should break. The cubic draws as you go.

Move an artboard with its contents, holding Shift to keep it on axis. Undo puts the board and its contents back together. If you wanted a second board instead of a move, Alt-drag it.

Watch the bottom strip. Hold Shift and the row changes, and let go and the letter keys return. The canvas doesn't resize to make room for the hint. In a small window, hover + more for the overflow. The hints never take focus from the drag.

## The edge

The Ctrl hold never changes the saved snapping setting. It reverses snapping for the length of the drag. When you release, snapping is whatever `Ctrl+Shift+;` last set, with the View checkboxes underneath.

A drag never snaps something to itself. The objects and the artboard you are holding are left out of the frozen targets for that gesture. If one candidate is wrong, hold Ctrl and finish the drag. If a whole family is wrong, clear that checkbox. If snapping is wrong for the next hour, press `Ctrl+Shift+;` and leave it off until you want the lines back.

Shift on a brush, pencil, smudge or clone never hinges at the start of the stroke. The anchor is the last free point at the moment Shift goes down, and it is dropped when you release Shift, so the tool never keeps an old hinge for the next wiggle.

Alt-drag never links the copy to the original. You get new objects, stacked with the selection you dragged, as one undo step for the set. It doesn't open a count dialog either. For one copy on a straight line, hold Alt and Shift for the length of the drag.
