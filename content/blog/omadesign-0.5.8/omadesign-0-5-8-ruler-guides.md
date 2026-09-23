---
id: T047
title: Ruler guides
slug: omadesign-0-5-8-ruler-guides
excerpt: Drag a horizontal guide from the top ruler and a vertical guide from the left. Delete, drag off the canvas, or use the context menu to remove one. Ctrl+; shows or hides ruler and object guides.
tags: [omadesign, 0.5.8, guides]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-ruler-guides/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-ruler-guides/og.png
---

## The habit

You pull a guide out of the ruler. Top ruler, horizontal line. Left ruler, vertical line. Illustrator has done this forever. Affinity has done this forever. Photoshop has done this forever. You drag the guide to the margin, the column, the cap height. You drag it again when the grid changes. You do not open a dialog to type an x coordinate unless the coordinate is the spec and the drag was the sketch.

Removing one is three gestures, and you use all of them. Select it and press Delete. Drag it back onto the ruler, or off the canvas, when your hand is already dragging. Right-click and remove it when the guide is under something and Delete would hit the artwork. Clear All is the fourth, for the end of a layout when the construction lines should go and the art should stay.

Show and hide is Ctrl+; in Illustrator. You learn it because clients look at guides and think they are rules. The hide has to be real. A hidden guide that still snaps, or still catches the pointer, will yank a logo onto a margin you cannot see. You will blame the mouse. The guide was the problem.

Lock is the partner habit. You lock guides so a drag meant for the headline does not grab the margin. In this studio guides start locked. View → Guides → Unlock all guides is the door when a rail has to move. Lock all guides when the type is what you are finishing. That default is the point. Layout rails stay put while you set the letters.

## The constraint

The rulers are on the canvas, in the same window as the art. A guide is a document object in the `.oma`, not a decoration of the view that vanishes on save. You hide it for a screenshot of the canvas. You clear ruler guides when the phase is over. You do not get a second "guide layer" file.

Ctrl+; shows or hides ruler guides and object guides together. Object guides are the ones you made with Convert selection to guides. One chord hides both. Snapping's chord is Ctrl+Shift+;, the same key with Shift, so the two switches stay different.

Hidden guides do not capture the pointer and do not participate in snapping. The hide is a real hide. You can drag a shape across a hidden margin and it will not stick. Show them again and snapping can see them. Snapping's own toggle remains Ctrl+Shift+;. Hold Ctrl during a drag to reverse snapping without hiding the guides. Two mechanisms. Hide when you do not want to see them. Reverse snapping when you want to see them and ignore them for one drag.

Guides start locked. The ruler context menu and Object → Guides provide lock, unlock, and clear-all. 0.5.8 puts Lock all guides and Unlock all guides on View → Guides as separate commands, so you are not toggling blind. You unlock, you nudge a rail, you lock again, you set type. A single vague lock item is how people think they unlocked and did not.

Clear ruler guides clears the guides you pulled from the rulers. It lives on View, and show, hide, and clear also live on the ruler context menus. Dragging a guide outside the canvas removes it. The pasteboard is not a storage shelf for guides you might want later. If you want it later, undo, or pull a new one.

Delete on a selected guide removes that guide. The artwork selection is a different target. Select the guide, then Delete, so you do not delete a path that happened to be under the cursor.

## What landed

Drag from the top ruler. You get a horizontal guide. Drag from the left ruler. You get a vertical guide. Drag an existing guide to move it, once guides are unlocked. Select a guide and press Delete to remove it. Drag it outside the canvas to remove it. Use its context menu to remove it. View → Clear ruler guides clears the ruler guides.

Ctrl+; shows or hides ruler guides and object guides. The keys list it as Guides. Press it again to bring them back. While they are hidden they do not take clicks and they do not snap.

View → Guides → Lock all guides and Unlock all guides are the 0.5.8 commands. The ruler context menu and Object → Guides still lock, unlock, and clear. Guides start locked, so a fresh document will not let a stray drag slide the rails. Unlock all when you are placing them. Lock all when you are setting type on top of them.

Snapping uses guides, along with object and artboard edges and centers, the grid, and equal spacing. Alignment lines and gap measurements appear as you move. A visible, unlocked guide is a target you can feel. A hidden guide is not a target. Ctrl+Shift+; turns snapping off entirely when the session should be freehand. Hold Ctrl during the drag when only this drag should ignore the snap, or honor it if snapping was off. Release Ctrl and the toggle's choice returns.

Shift still constrains the artwork you drag against the guides: horizontal, vertical, or 45 degrees. The guide holds the position. Shift holds the angle of the move.

## In the hand

Open a poster. Guides start locked. Choose View → Guides → Unlock all guides before you place the rails. Drag from the top ruler and put a horizontal guide on the cap line. Pull a vertical guide from the left ruler for the left margin. Drag either guide again until it sits. Place the headline with T. When the type is what matters, View → Guides → Lock all guides. A drag on the canvas is for the letters. The rails stay.

Press Ctrl+; before you show someone the canvas. The guides leave. Drag the headline a little. It should not snap to the hidden margin. Press Ctrl+; again. The guides return. If you want them visible and still want one free drag, hold Ctrl while you drag.

Select one guide. Press Delete. It is gone. Ctrl+Z brings it back if you still needed the margin. Drag another guide off the canvas and release. That one is gone without Delete. Right-click a guide and use the context menu when Delete feels risky.

When the construction phase is over, View → Clear ruler guides. The ruler guides leave. Object guides you made from artwork are the other family. Clear ruler guides is aimed at the ones from the rulers. Converted contours stay until you release them or remove them on their own terms.

```
Drag from the top ruler     Horizontal guide
Drag from the left ruler    Vertical guide
View → Guides → Unlock all  Move them
View → Guides → Lock all    Leave them while you set type
Delete                      Remove the selected guide
Drag off the canvas         Remove it
Ctrl+;                      Show or hide ruler and object guides
View → Clear ruler guides   Clear the ones from the rulers
```

Ctrl+S. The guides stay in the `.oma`. PNG, JPEG, SVG, and Lottie leave them out.

## The edge

A hidden guide refuses the pointer and refuses snapping. Ctrl+; is a real hide, for ruler guides and for object guides together. You do not discover an invisible snap in front of a client.

A guide dragged outside the canvas is removed. The area past the page is not a drawer. Delete and the context menu remove a guide too. View → Clear ruler guides clears the ruler set. Undo if the clear was early.

Drag the next guide out of the ruler, then View → Guides → Lock all guides before you go back to the type.
