---
id: T045
title: Layers eye lock
slug: omadesign-0-5-8-layers-eye-lock
excerpt: Layers expand to the objects on them. The eye and the lock work per object. Click a name to select it on the canvas. A group expands, renames, hides, locks, and reorders as one unit.
publishedAt: 2026-09-20T17:51:29Z
tags: [omadesign, 0.5.4, layers]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-layers-eye-lock/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-layers-eye-lock/og.png
---

## The habit

The layer list is how you pick up things you can't click. In Illustrator the Layers panel twirls open to show objects, and you click a target circle when the thing you want is behind something else on the canvas. Photoshop's eye and lock are older than that. You close the eye to hide a scrap, and you lock the row so a drag on the canvas can't nudge it. Affinity does the same job with the same two icons. When the canvas is crowded, you go to the list.

You also click names. Clicking a name should select the object on the canvas. You don't want a second selection model where the list highlights one row and the canvas highlights something else. One click should give one selection in both places.

Groups are the unit of work. In Illustrator you expand a group, rename it, hide it, lock it or drag it up the stack, and its children come along. Ungroup is a separate command. Reordering inside a group is how you fix a shadow that ended up above the mark it should sit under. That reorder has to be one undo. A drag that silently reparents three objects and can't be undone as a drag is how files get "organized" into a structure nobody remembers.

Locked and hidden also have to mean something to other commands. If Same Fill selects a locked logo, or a flip mirrors a hidden scrap, the lock and the eye are decoration, as they are in too many apps. They should be enforced.

## The constraint

One `.oma` has one layer list. It isn't a sidecar or a Creative Cloud library view. Objects you draw appear in it, and eyes and locks are properties of those objects. Clicking a name selects that object on the canvas, because if the list and the page disagreed, every later command would be ambiguous. Pathfinder should use the selection you can see.

Groups let paths move, duplicate and align as a unit. Ctrl+G makes a group, and the list has to let you expand, rename, hide, lock and reorder that row, with the children moving along. Double-click edits one item until the next selection.

A reorder is one undo step. Drag a name onto an insertion line, or select a layer row and use Ctrl+[ and Ctrl+] to move it backward and forward, and Ctrl+Shift+[ and Ctrl+Shift+] to send it to the back or front of its group. If the brackets kept acting as object stacking while a row was selected, you'd reorder the wrong thing. Clicking an object on the canvas switches the brackets back to object stacking. The list and the canvas share the shortcuts, and what you clicked last decides which one they mean.

Hidden and locked objects stay out of Select. All, None, Invert, Same Fill, Same Stroke, Same Effects and the With and Without variants skip them, and so does Flip. You hid the scrap so it wouldn't join the recolor, and you locked the grid so flipping the logo wouldn't mirror it. The commands respect the icons.

## What landed

Layers expand to show the objects on them, using the familiar disclosure arrow. Each object gets its own row with its own eye and lock. Close the eye and the object hides. Lock the row and the object is locked. Click the name and the object is selected on the canvas, ready for Move, a fill change or FX.

Groups expand too. You can rename, hide, lock and reorder a group as a unit, and the children stay children. Ctrl+Shift+G ungroups when it should stop being a unit. Ungroup doesn't combine paths. A compound path is Ctrl+8, and the list shows a compound as the single object it is.

Drag a layer name onto an insertion line to reorder it. Drag a row onto the center of a group or Layout frame to nest it. Shift-click rows to select several, and a multi-object move keeps the hierarchy you built. Lock and cycle checks stop a drop that wouldn't be a legal parent. Undoing a drag is one step, so Ctrl+Z pulls a bad nest back out.

Select a layer row and press Ctrl+[ or Ctrl+] to step it backward or forward. Add Shift to send it to the back or front of its group. Each is one undo. Click any object on the canvas and the same shortcuts go back to object stacking. The shortcut is shared on purpose, and the target follows your last click.

Opacity fades an object. The eye hides it, and a hidden object stays out of Select. Locking happens on the row. Guide locking is a separate switch under View > Guides. Locking a logo doesn't lock the ruler guides, and locking the guides doesn't lock the logo.

## In the hand

Draw three shapes, open Layers and expand the layer until you see the three names. Click the middle name and the shape is selected on the canvas. Close its eye and it disappears from view. Choose Select > All and it stays out. Open the eye and it's back, and it was never part of that selection.

Lock the bottom shape. Select the top two on the canvas and right-click > Flip horizontal. The locked shape doesn't move. Unlock it when you want to edit it. The lock lives on the row, so there's no mode to remember.

Select all three and press Ctrl+G. The group appears as a row. Rename it to something you'll recognize. Drag the group by its name onto an insertion line above another layer, and the whole group moves in the stack. Expand the group and drag one child onto an insertion line inside it if the internal order is wrong. Ctrl+Z undoes that one reorder.

Double-click a child on the canvas and nudge it. Click empty canvas or select another object to leave the isolated edit, and the group is a unit again.

```
Click the name              Select it on the canvas
Eye                         Hide or show that object
Lock                        Locked objects stay put
Ctrl+G                      Group, as a row you can expand
Ctrl+[   Ctrl+]             Backward / forward on a layer row
Ctrl+Shift+[  Ctrl+Shift+]  Back / front of the group
Click the canvas            Brackets return to object stacking
Ctrl+Z                      One reorder
```

Save. Eyes, locks, names and order are stored in the `.oma`. Open it the next day and the hidden scrap is still hidden, and Select > Same Fill still won't find it until you open the eye.

## The edge

The eye and the lock are enforced. Hidden and locked objects stay out of Select, including Same Fill, Same Stroke, Same Effects, All, None and Invert. Flip leaves them alone. A closed eye doesn't leave a dimmed object you can recolor by accident, and Flip doesn't ignore a lock.

The row is still there. Open the eye or unlock it when the edit is meant for that object. Until then, commands that gather or mirror objects leave it where you put it.
