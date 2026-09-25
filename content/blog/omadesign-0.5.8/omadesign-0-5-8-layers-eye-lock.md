---
id: T045
title: Layers eye lock
slug: omadesign-0-5-8-layers-eye-lock
excerpt: Layers expand to the objects on them. The eye and the lock work per object. Click a name to select it on the canvas. A group expands, renames, hides, locks, and reorders as one unit.
publishedAt: 2026-09-07T01:31:01Z
tags: [omadesign, 0.5.8, layers]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-layers-eye-lock/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-layers-eye-lock/og.png
---

## The habit

The layer row is how you pick up what you cannot click. In Illustrator the Layers panel twirls open to the objects, and you click a target circle when the thing on the canvas is behind something else. Photoshop's eye and lock are older than that. You close the eye to hide a scrap. You lock the row so a drag on the canvas cannot nudge it. Affinity's studio does the same job with the same two icons. The hand goes to the list when the canvas is crowded.

You also click the name. The object on the canvas selects. You do not want a second selection model where the list highlights a row and the canvas highlights something else. One click, one selection, both places.

Groups are the unit. Illustrator groups expand. You rename the group, you hide it, you lock it, you drag it up the stack, and the children come along. Ungroup is a different command. Reorder inside the group is how you fix a shadow that landed above the mark it was supposed to sit under. The reorder has to be one undo. A drag that silently reparents three objects and cannot be undone as a drag is how files get "organized" into a shape nobody can remember.

Locked and hidden have to mean something to the other commands. A Same Fill that selects a locked logo, or a flip that mirrors a hidden scrap, makes the lock and the eye decorative. They are decorative in too many apps. They should be enforced.

## The constraint

One `.oma`, one layer list. The list is not a sidecar and not a Creative Cloud library view. Objects you draw show up here. Eyes and locks are properties of those objects. Click a name and the canvas selection is that object, because a split brain between the list and the page would make every later command ambiguous. Which selection does Pathfinder use? The one you can see.

Groups exist so paths can move, duplicate, and align as a unit. Ctrl+G makes the group. The list has to expand, rename, hide, lock, and reorder that row. Children move with it. Double-click edits one item until the next selection.

Reorder is one undo step. Drag a name onto an insertion line. Or select a layer row and use Ctrl+[ and Ctrl+] to move backward and forward, and Ctrl+Shift+[ and Ctrl+Shift+] to send it to the back or the front of its group. If those brackets kept firing as object stacking while your selection was a row, you would reorder the wrong thing. Clicking an object on the canvas returns the brackets to object stacking. The list and the canvas share the chords and announce which one they mean by what you clicked last.

Hidden objects and locked objects stay out of Select. All, None, Invert, Same Fill, Same Stroke, Same Effects, and the With and Without variants leave them alone. Flip leaves them alone. You hid the scrap so it would not join the recolor. You locked the grid so a flip of the logo would not mirror the grid. The commands agree with the icons.

## What landed

Layers expand to show the objects on them. The disclosure is the twirl you already know. Open a layer and the objects are rows. Eye and lock sit on those rows, per object. Close the eye and the object hides. Lock the row and the object is locked. Click the name and that object selects on the canvas. You can run Move, change a fill, or open FX on what the list just handed you.

Groups expand. You can rename a group, hide it, lock it, and reorder it as a unit. Hiding the group hides the unit. Locking the group locks the unit. Reordering the group moves the unit in the stack. The children stay children. Ctrl+Shift+G ungroups when the unit should stop being a unit. Ungroup does not combine paths. If the paths needed to be a compound, that was Ctrl+8, and the list will show that compound as the object it is.

Drag a layer name onto an insertion line to reorder. Drag a row onto the center of a group or a Layout frame to nest it. Hold Shift and click rows to select several. A multi-object move keeps the hierarchy you built. Lock and cycle checks apply when a drop would not be a legal parent. Undo of the drag is one step, so a bad nest comes back out with Ctrl+Z.

Select a layer row and press Ctrl+[ or Ctrl+] to step it backward or forward. Add Shift and it goes to the back or the front of its group. Each of those is one undo. Click any object on the canvas and the same chords return to object stacking. Watch what you clicked last. The chord is shared on purpose. The target follows the click.

Opacity fades an object. The eye hides it, and a hidden object stays out of Select. The lock is the row. Guide locking is a separate switch under View → Guides. Locking a logo does not lock the ruler guides, and locking the guides does not lock the logo.

## In the hand

Draw three shapes. Open Layers. Expand the layer until you see the three names. Click the middle name. The shape selects on the canvas. Close its eye. It leaves the view. Choose Select → All. It stays out. Open the eye. It is back, and it was never part of that selection.

Lock the bottom shape. Select the top two on the canvas and flip them with the right-click Flip horizontal. The locked shape stays. Unlock it when you mean to edit it. The lock is the row, not a mode you have to remember later.

Select all three and press Ctrl+G. The group is a row. Rename it to something you will recognize. Drag the group above another layer by its name, onto an insertion line. The whole group moves in the stack. Expand the group. Drag one child onto an insertion line inside the group if the order inside is wrong. Ctrl+Z returns that one reorder.

Double-click a child on the canvas. Nudge it. Click empty canvas, or select another object. You are out of the isolated edit. The group is a unit again for the next move.

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

Save. Eyes, locks, names, and order are in the `.oma`. Open it tomorrow and the hidden scrap is still hidden. Select → Same Fill still will not see it until you open the eye.

## The edge

The eye and the lock are enforced. Hidden objects stay out of Select, including Same Fill, Same Stroke, Same Effects, and All, None, and Invert. Locked objects stay out of that selection. Flip leaves locked and hidden objects alone. A closed eye is not a dimmed object you can still recolor by accident. A lock is not a suggestion the flip command may ignore.

The row is still there. You can open the eye and unlock when the edit is meant for that object. Until you do, the canvas commands that gather and mirror leave it where you put it.

Click the name in the layer list when the canvas is too crowded, and trust the eye and the lock you already set.
