---
id: T050
title: Lock unlock guides 0.5.8
slug: omadesign-0-5-8-lock-unlock-guides-0-5-8
excerpt: 0.5.8 puts Lock all guides and Unlock all guides on View → Guides as two commands. Guides start locked so type work does not nudge a rail.
tags: [omadesign, 0.5.8, guides]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-lock-unlock-guides-0-5-8/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-lock-unlock-guides-0-5-8/og.png
---

## The habit

You finish the grid, then you set the type. In Illustrator the guides stay visible because you still need to see the measure, and you lock them so a stray drag on a hairline does not shove the margin three pixels left. Photoshop's Lock Guides is the same muscle. Affinity's lock is the same muscle. The rails stay on screen. They stop being objects.

The failure mode is a toggle you cannot see. One menu item that says Lock when they are free and Unlock when they are frozen. You click it from memory, the label flips, and you only learn which way you went when the next drag grabs a guide and the headline jumps. Then you undo the type, undo the nudge, and try to remember the lock state you had before the click.

You want two commands. One locks. One unlocks. The one that does not apply sits there and does nothing. You can read the menu and know the board.

## The constraint

Omadesign 0.5.8 is the release that split those commands. View → Guides now lists Lock all guides and Unlock all guides as separate items. The rest of the studio already had a single flipping label. Object → Guides still shows one button, "Lock all guides" or "Unlock all guides," depending on the current state. The ruler's right-click menu does the same. Those older entries still work. They are one control that changes its name. The 0.5.8 change is the View submenu, where both names are present at once and the one that does not match the document is disabled.

Guides start locked. A new document, and a document opened into a tab, takes the startup preference, and that preference defaults to locked. The preference lives with the rest of Config, under `~/.config/omadesign` or `$XDG_CONFIG_HOME/omadesign`. Config is the omadesign menu in the title bar: font, startup mode, rulers, shortcut hints, guide locking. There is no account required to keep that preference, and there is no dialog on every new file asking whether rails should be grabbable. The default is the safe one for type. You unlock when you mean to move a rail.

Lock is document state, stored with the ruler settings in the `.oma`, and it is one undo. It is not Hide. `Ctrl+;` still shows and hides. A locked guide you can see is a rail you can trust and cannot drag.

## What landed

View → Guides → Lock all guides sets the document locked. View → Guides → Unlock all guides clears that. The status line says "All guides locked" or "All guides unlocked." When you lock, any guide currently in the selection is dropped, and node selection on those contours is cleared. You do not keep a live selection on something the pointer is no longer allowed to move.

Hit testing skips guides while they are locked, the same way it skips them while they are hidden. A click on the rail falls through to the artwork. A marquee does not collect the guide. Object guides made with Convert selection to guides obey the same lock as the ruler guides you dragged out of the ruler. One switch covers both kinds. That is the point of "all."

Lock does not delete. The positions stay. Save the `.oma` and the lock state is part of the ruler settings you reopen. Clear is the delete. Object → Guides → Clear all guides, and the same words on the ruler menu, remove ruler guides and converted object guides in one step. The status line says "All guides cleared · Undo restores them." View → Clear ruler guides is the view menu's clear. Use lock when the rails must stay. Use clear when the rails are finished.

Hide remains `Ctrl+;`. Hidden guides drop out of the pointer and out of snapping. Locked guides drop out of the pointer so you cannot nudge them. Snapping to guides is its own checkbox under View: Snap to guides. If you still want objects to land on a locked rail, leave that checkbox on and leave the guides visible. You can see the line, snap to the line, and fail to drag the line. That is the type-setting posture.

The Shortcut HUD along the bottom of the window keeps showing tool hints while you do this. Lock is a menu command, not a key you have to chord in the middle of a word. `F1` lists the keys. `Ctrl+/` shows or hides the HUD. Neither of those touches the lock.

## In the hand

Draw the rails first, while you are still willing to move them. View → Guides → Unlock all guides. The status line confirms it. Drag a horizontal guide down from the top ruler. Drag a vertical guide out of the left ruler. Convert a logo contour if you want a curve to act as a rail: Object → Guides → Convert selection to guides. Nudge until the measure is right. `Ctrl+Z` undoes a bad nudge, one step.

Then set the type. Before the first click in a text box, View → Guides → Lock all guides. Look at the menu. Lock all guides is disabled. Unlock all guides is the live command. The rails are still on screen. Click a guide. You get the object underneath, or nothing, not the guide. Drag a text frame across a margin. The guide stays. If Snap to guides is on, the text frame can still land on that margin. The margin does not come with it.

```
View → Guides → Lock all guides
View → Guides → Unlock all guides
```

Need the rail to move again? Unlock all guides. Drag. Lock all guides before you go back to tracking and leading. The two commands are the whole cycle. You do not flip a single item and guess.

If you prefer the ruler, right-click the top or left ruler. The menu shows one lock line, named for the action available right now, plus the unit list and Reset ruler zero. Object → Guides has the same single line, next to Clear all guides, Convert selection to guides, and Release guides to artwork. Those paths still lock and unlock. The 0.5.8 path is the one that shows both names.

The startup default is locked. Open a fresh document, try to drag a guide, and the drag does not take. Unlock all guides, place the rails, lock them again. If you want new documents to start unlocked, that switch is guide locking in Config, saved under `~/.config/omadesign`. It does not rewrite guides already stored in an open `.oma`. It sets the lock those documents start with.

## The edge

Lock all guides refuses to hide the rails, and it refuses to delete them. The lines stay in the file, stay on screen when guides are visible, and stop accepting the pointer. Unlock all guides is a different command. In the View submenu the command that does not match the document is present and does not run. You can read the pair and know the state.

Clear is not a kind of lock. Clear removes the guides. Undo brings them back. Hide is not a kind of lock either. `Ctrl+;` takes them off the screen and out of snapping. When you are in the type, you want them visible, snapped to, and impossible to nudge. That is Lock all guides. Press it before the headline, and leave Unlock all guides for the moment you mean to move a rail.
