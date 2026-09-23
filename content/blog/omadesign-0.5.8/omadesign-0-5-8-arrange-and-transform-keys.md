---
id: T133
title: Arrange and transform keys
slug: omadesign-0-5-8-arrange-and-transform-keys
excerpt: Ctrl+G groups and Ctrl+Shift+G ungroups. Compound is Ctrl+8 and release is Ctrl+Shift+8. Front and back, free transform, guides, snapping, the HUD, and F1 sit on the chords beside them.
tags: [omadesign, 0.5.8, shortcuts]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-arrange-and-transform-keys/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-arrange-and-transform-keys/og.png
---

## The habit

In Illustrator, `Ctrl+G` groups and `Ctrl+Shift+G` ungroups. The Pathfinder and the compound-path command are different keys, because a group is a container you can still open and a compound is one path with holes. Photoshop's `Ctrl+G` is a group too, once you are in layers. Affinity keeps the same split between the container and the boolean. Your hand already reaches for `Ctrl+]` and `Ctrl+Shift+]` to walk the stack, for `Ctrl+T` when you want the box with rotate and scale, and for a guides toggle you can hit without leaving the drag.

A cheat sheet that writes "Ctrl+G combine" collapses the container and the boolean into one chord. You will group when you meant to punch a hole, or you will look for Ungroup when the command that releases the hole is a different key. The labels have to say which job the chord does.

## The constraint

One key table, shared by the personas that edit objects. Photo does not group vectors, so those chords stay dark there. Everywhere else the table has to keep four operations on four chords. Group creates an editable layer group. Ungroup releases that group and does not run a boolean. Compound builds one compound shape. Release compound takes it apart. Each of those is one undo step, same as a nudge.

Guides and snapping are view state. They need chords you can hit during a drag without opening View. Snapping in particular has to invert for one gesture, because the classic move is: snapping is on, this one drop has to ignore it, then snapping returns when you let go. That temporary invert is hold Ctrl during the drag, and it has to be the same Ctrl you already trust from other apps, without sticking after the mouse comes up.

Free transform has to land you in the move tool with the handles live, and it has to leave text and shape parameters editable. A transform that outlines type on the way in is a different command, and that command already exists as Convert to path.

## What landed

The key table and the manual agree, and the canvas menu prints the same chords.

`Ctrl+G` groups. The menu says **Group**. The selection becomes an editable layer group. You can still double-click in to edit a child. `Ctrl+Shift+G` ungroups. The menu says **Ungroup**. Children come out. Paths are not combined.

`Ctrl+8` is compound. The menu says **Compound shape** and the item stays disabled until at least two objects are selected. `Ctrl+Shift+8` releases the compound. Shift on the number row can look like a punctuation key to the window system. The handler treats that physical 8 as 8, so the chord still resolves.

Combine and Release keep guide state, rotation, stacking, and gradient endpoints, in one undo step. They want either artwork or guides, with no mixture. Shape gradients follow the silhouette that results. Pathfinder, under **Object → Pathfinder**, is the other boolean set: Union, Subtract, Intersect, XOR, and Divide. Those are menu operations on two or more vectors on the same layer. Divide makes separate pieces and keeps holes. Each one is one undo. They are not the G chord.

Stacking: select a layer row and `Ctrl+]` moves it forward, `Ctrl+[` moves it backward, `Ctrl+Shift+]` sends it to the front of its group, `Ctrl+Shift+[` sends it to the back. The menu items **Bring to front** and **Send to back** call the Shift chords. Click an object on the canvas and the same shortcuts apply to object stacking. Each reorder undoes in one step. With no Ctrl, `[` and `]` belong to brush size. The modifier is the whole difference.

`Ctrl+T` is free transform. The selection goes to the Move tool with scale and rotate handles ready. It is also under Object. Live text stays live text. Shape parameters stay parameters. Flip is the right-click or Object menu, horizontal or vertical, and it follows the canvas axes after rotation. Live text has to be converted to a path before a flip will outline it. Undo restores the text.

`Ctrl+;` shows or hides ruler guides and object guides. `Ctrl+Shift+;` toggles snapping. Hold Ctrl during a drag to reverse snapping for that drag only. Release Ctrl and the toggle you saved comes back. View still has the individual snapping switches. Guides start locked. **View → Guides** has Lock all guides and a separate command that clears every lock. The ruler menu and **Object → Guides** offer lock, clear-all, and that same release.

`Ctrl+/` toggles the Shortcut HUD. `F1` opens the full list and closes it again.

## In the hand

Draw three rectangles. Press `Ctrl+G`. They move as a group. Double-click one and nudge it. Press `Ctrl+Shift+G`. Three objects again. Press `Ctrl+Z` and the group returns, because ungroup was one step.

Select two of them. Press `Ctrl+8`. One compound. Look at the holes if they overlap. Press `A` and the contours are still editable. Press `Ctrl+Shift+8`. Two shapes. Press `Ctrl+Z`. The compound returns in one step, gradient endpoints included if you had painted one.

Select a layer row. Press `Ctrl+Shift+]`. It sits at the front of its group. Press `Ctrl+[` and it steps back one. Press `Ctrl+Z` twice. You are where you started.

Press `Ctrl+T` on live text. Scale the box. The characters are still characters. Press Escape or click away, then `T` and double-click to keep typing. Press `Ctrl+T` on a rectangle and drag a corner. The rectangle's parameters survive.

Drag a guide out of the top ruler. Press `Ctrl+;`. It hides. Press the chord again. It shows. Press `Ctrl+Shift+;` and drag an object toward the guide. The snap line appears, or it does not, depending on the toggle. Hold Ctrl mid-drag. The snap decision flips for that gesture. Let go of Ctrl before you let go of the mouse if you want the saved mode back for the drop.

Press `Ctrl+/` if you want the HUD gone while you judge spacing. Press `F1` when you need the whole table, including the chords this page is about.

Right-click the canvas on a multi-selection if you would rather see the labels. Group, Ungroup, and Compound shape are printed there with the keys. Compound shape is grey until two objects are selected.

## The edge

`Ctrl+G` groups. It does not build a compound, and `Ctrl+Shift+G` does not release one. The boolean pair is `Ctrl+8` and `Ctrl+Shift+8`. Combine refuses a mixture of artwork and guides. Holding Ctrl reverses snapping for the drag under your hand and then gives the toggle back. Photo does not take the group chords. Brush size keeps the bare bracket keys.

Select two shapes and press `Ctrl+8` when you want one compound. Press `Ctrl+G` when you want a group.
