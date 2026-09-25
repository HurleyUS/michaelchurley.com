---
id: T052
title: Snapping system
slug: omadesign-0-5-8-snapping-system
excerpt: Snap to edges, centers, guides, the grid, and equal gaps. Ctrl+Shift+; toggles. Hold Ctrl during a drag to reverse that choice, then let go.
publishedAt: 2026-09-06T10:39:01Z
tags: [omadesign, 0.5.8, snapping, modifiers]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-snapping-system/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-snapping-system/og.png
---

## The habit

You drag a box in Illustrator and the pink lines appear. Edge to edge. Center to center. A gap number when three cards are about to be the same distance apart. You trust the line, you let go, and the box is where the line said. When the snap is wrong, you do not open Preferences. You hold Ctrl, or Cmd on the other platform, and the drag ignores the magnet for as long as the key is down. You release the key and the magnet returns. The preference never changed.

Photoshop's extra-shift and Affinity's snapping candidates are the same idea. The candidates are the things you can see: object edges, artboard edges, centers, guides, the grid, and the gap that would make a row even. The feedback is drawn on the canvas, not described in a panel you have to glance at. If the feedback is late or greedy, you fight the tool. If the thing you are dragging can snap to itself, the box vibrates on its own shadow and you never get a clean release.

The habit is a toggle you can hit without looking, and a hold that reverses that toggle for one gesture.

## The constraint

One canvas has to serve Design, Layout, and Motion. The same artboard, the same guides, the same objects. A snap system that only understood rectangles would miss a curve you had converted into a guide, and a snap system that rebuilt the world on every mouse sample would hitch. So the candidates are collected and held for the gesture. Point targets are cached. The objects you are moving are left out of that frozen set. They cannot snap to their own shadow. When you release, the cache can rebuild.

The toggle has to be a key, because a checkbox mid-drag is a trip to the menu. `Ctrl+Shift+;` flips snapping on or off and leaves it there. The status line says "Snapping on · hold Ctrl while dragging to invert" or the off version of that sentence. Holding Ctrl during the drag reverses whatever the current choice is. Release Ctrl and the choice you had saved comes back. The hold does not write the preference. That is the whole design. A permanent toggle for the session, and a momentary opposite for the gesture you are in.

View still has the individual switches, because "snapping" is five decisions wearing one master key. You may want guides and not the grid. You may want equal gaps and not artboard centers. Those checkboxes are the saved set. The master key and the Ctrl hold operate on top of them.

There is no dialog, and no account. The settings are in the session with the document. Alignment lines and gap measurements are drawn while you move, then they go away. They are not objects in the `.oma`.

## What landed

Snapping looks at object edges and centers, artboard edges and centers, guides, the grid, and equal spacing between nearby objects. As you drag, alignment lines show the edge or the center you are about to hit. Gap measurements show up when the space you are about to leave matches a neighbor. Objects and guides win a tie against the grid, so a guide you placed on purpose beats a grid intersection that happens to sit nearby.

Guides include the straight rails from the rulers and the contours you converted from artwork. Snapping follows the actual curve of an object guide, and a Shift-constrained drag keeps that constraint while it takes the snap. Hidden guides stay out of snapping. That is `Ctrl+;`. Lock is separate: a locked guide stays out of the pointer so you do not nudge it, and Snap to guides remains its own checkbox.

Motion uses the visible animated geometry. At a given playhead, the snap targets are where the artwork is on screen, not only where it sits in the rest pose. You can land a key against the position you see.

`Ctrl+Shift+;` toggles the master. The colon key with Shift and Ctrl does the same chord, so the keyboard's shifted semicolon still hits it. View mirrors the master as Disable snapping or Enable snapping, with the same shortcut written on the item. Under that item the menu says to hold Ctrl during a drag to invert snapping. Then the checkboxes: Snap to grid, Snap to guides, Snap to objects, Snap to artboards, Equal spacing. Turn one off and that candidate family drops out. The master still wraps the rest. Equal spacing also reaches tool points, not only moving objects and artboards. A pen click can find a repeated gap, and it still respects edge, center, and guide priority, and it still respects Shift.

The moving selection is excluded from the target set for that drag. An artboard move excludes that artboard. You snap to the other things. You do not snap to the box in your hand.

## In the hand

Draw three cards. Turn snapping on.

```
Ctrl+Shift+;
```

Read the status line. Drag the third card toward the gap that matches the first two. A measurement appears between them. Let go when the number matches. Drag the same card by its center toward the artboard center. The center line appears. Let go.

Hold Ctrl and drag that card a few pixels off the line, to a place with no candidate you want. The magnet reverses while Ctrl is down. Release Ctrl. The next drag snaps again. The master never flipped.

Open View and clear Snap to grid if the grid is shouting over the guides. Leave Snap to guides and Equal spacing on. Drag again. The grid stops competing. Guides and gaps remain. Put the grid back when you are blocking in a new board.

Hide the guides with `Ctrl+;` and drag across where a rail was. Nothing pulls you onto it. Show the guides. The pull returns. If the rails are locked, you still see them, and Snap to guides can still use them, and you still cannot drag the rail itself. That split is what lets you snap type to a margin without moving the margin.

In Motion, park the playhead where the shape has already moved. Drag another shape toward it. The candidate is the shape where it is now. The rest pose is not secretly winning.

Pen work can use the same gap logic. Click a point, hold Shift if you want 45 degrees, and watch for the equal-spacing candidate. The HUD at the bottom of the window shows the modifier row while Ctrl or Shift is held, and it stays the same height so the canvas does not jump under the drag. `Ctrl+/` hides that strip if you want the room. It does not change snapping.

`Ctrl+Z` undoes the move you committed. The snap lines are not a step in the history. They were feedback.

## The edge

The Ctrl hold refuses to change the saved snapping choice. It reverses the master for the length of the drag. Release, and the master is what `Ctrl+Shift+;` last set, with the View checkboxes underneath it.

The drag also refuses to snap a thing to itself. The objects in your hand, and the artboard in your hand, are left out of the frozen targets for that gesture. If a candidate is wrong, hold Ctrl and finish the drag. If a whole family is wrong, clear that one checkbox. If everything is wrong for the next hour, hit `Ctrl+Shift+;` and leave it off until you want the lines back.

## Shift constrain Alt clone

### The habit

Shift is the straight line. In Illustrator you hold it while you drag a point, a handle, a rectangle, or a selection, and the move collapses to horizontal, vertical, or 45 degrees. You hold it while you drag a brush in Photoshop and the stroke stops wandering. You do not pick a "constrain mode" from a menu. The key is down, the angle is locked, the key comes up, the angle is free. That is thirty years of the same finger.

Alt is the copy. Alt-drag in Illustrator duplicates the selection and leaves the original where it was. Add Shift and the copy travels on a straight axis. You use it for a second card, a second icon, a repeated rule. The duplicate lands as a real object. One undo removes the copy, or the whole set of copies if you dragged several objects together. You do not get a dialog that asks how many copies, unless you asked for a step-and-repeat on purpose. The ordinary copy is the drag.

The brush case is the one people get wrong in tools that reset the constraint to the start of the stroke. You draw a loose mark, then you want the tail of it to go straight. Shift should lock from the point where you pressed Shift, not swing the whole stroke back to the first sample. The last free point is the hinge. Everything after that hinge is horizontal, vertical, or 45 degrees. Let go of Shift and the hinge is forgotten. Press Shift again later in the same stroke and a new hinge is taken at the new last point.

### The constraint

Omadesign has one pointer and one history. A constrain tool that was its own mode would fight Pen, Pencil, Brush, Move, and the artboard tool, each of which already has a key. Shift is already the modifier the Shortcut HUD is built to show. Hold Shift and the bottom strip swaps to the commands and gestures that match. The strip keeps its height, so the canvas does not jump while you are mid-drag. That only works if Shift means the same thing in each of those tools: 45-degree lock, taken from the gesture you are in.

Alt-drag has to be a clone in the document. The copy is new geometry, and it does not stay linked to the original. `Ctrl+C` / `Ctrl+V` still paste from the clipboard, and objects copied inside Omadesign paste at their original positions. Alt-drag follows the pointer. Several objects in the selection duplicate together, and that duplication is one undo step. Moving a selection, or moving an artboard with its contents, also returns together on undo. The board and the things on it come back as one step.

There is no dialog. The modifiers are the interface. Linux sends those keys as real events, including a release that arrives before the next frame. The gesture keeps the chord until you let go.

### What landed

Hold Shift to constrain pen points and handles, pencil and brush strokes, and object or artboard movement to horizontal, vertical, or 45 degrees. Rectangle, ellipse, polygon, star, and line honor the same Shift while you drag them out. Corner radius, sides, and inner radius stay in Transform after the shape exists. Shift on the way out of the tool is the proportion or the angle. The parameters after that are numbers.

Alt-drag clones the object under the drag. Add Shift and the copy is constrained. Artboards do this too: `Shift+O` is the artboard tool in Design, Alt-drag clones a board, handles scale it, the top handle rotates it. Object → Wrap selection in artboard is the other way to get a board around existing art. The clone path is the drag.

During a brush stroke, a pencil stroke, a smudge, or a clone stamp, pressing Shift anchors the constraint at the last free point. The stroke does not re-aim at the first dab. The anchor is the last sample before Shift took over. From there, the pointer is pulled onto the 45-degree fan. Release Shift and that anchor is cleared. The rest of the stroke is free again. Press Shift later and a new anchor is taken. The HUD shows Shift while this is happening. It does not take the key away from the stroke.

Pen uses the same angle on a click. Shift constrains the next point or the handle to 45 degrees. A twitch under 3 pixels stays a corner. Alt-drag on a handle breaks symmetry. Node uses Shift on a handle drag for that same fan. Shift-click on a point adds it to the node selection. Delete removes selected points. The angle lock does not convert the path.

Ctrl during the drag still reverses snapping. Shift and Ctrl compose. Constrain the angle and, with Ctrl held, skip the magnet. Release Ctrl and snapping returns to whatever `Ctrl+Shift+;` last set. Release Shift and the angle is free. The two holds do not reset each other.

### In the hand

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

### The edge

Shift on a brush, pencil, smudge, or clone refuses to hinge at the start of the stroke. The anchor is the last free point at the moment Shift goes down. Release Shift and that anchor is dropped. The tool will not keep a stale hinge for the next wiggle.

Alt-drag refuses to link the copy to the original. You get new objects, stacked with the selection you dragged, one undo for the set. It also refuses to open a count dialog. If you wanted one copy on a straight line, the keys are Alt and Shift, in the hand, for the length of the drag.
