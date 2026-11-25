---
id: T052
title: Snapping system
slug: omadesign-0-5-8-snapping-system
excerpt: Snap to edges, centers, guides, the grid, and equal gaps. Ctrl+Shift+; toggles. Hold Ctrl during a drag to reverse that choice, then let go.
tags: [omadesign, 0.5.8, snapping]
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
