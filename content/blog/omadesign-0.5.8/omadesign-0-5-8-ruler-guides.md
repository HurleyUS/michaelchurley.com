---
id: T047
title: Ruler guides
slug: omadesign-0-5-8-ruler-guides
excerpt: Drag a horizontal guide from the top ruler and a vertical guide from the left. Delete, drag off the canvas, or use the context menu to remove one. Ctrl+; shows or hides ruler and object guides.
publishedAt: 2026-09-06T10:37:01Z
tags: [omadesign, 0.5.8, guides, rulers]
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

## Guides survive save

### The habit

You drag a guide down from the top ruler because the headline has to sit on a line you can trust tomorrow. In Illustrator that line is part of the file. You save. You quit. You open the same file after lunch and the guide is still at the measure you set. You export a PNG for the deck, or an SVG for the site, and the guide is gone. It was never ink. It was a rail.

Affinity works the same way in the hand. Guides live with the document. They do not print. Hide them when a client is looking over your shoulder, and they stop grabbing the cursor. Show them again and the rails are where you left them. The photograph you dropped on the board stays a photograph. You do not trade the pixels away to get a box around them.

That is the job. The rail has to survive the file you keep. The rail has to disappear from the file you send. Hiding it has to be a real off switch, not a dimmer that still catches clicks and still tugs the next drag onto the line.

### The constraint

Omadesign is one binary and one document. The project is a `.oma`. Vectors, pixel layers, frames, and the motion clip live in that file. There is no second "guides" file to lose in a folder, and there is no cloud round trip that has to remember your margins for you. Idle for a second writes a recovery snapshot beside the app data. Save deletes that swap and the `.oma` is the record.

Undo is one step. Turning artwork into guides, releasing those guides, and clearing them each have to come back as a single undo, with style and geometry intact. A dialog that asks you to "include guides in the export" would put the decision in the wrong place. The export writers already know what a delivery file is. PNG, JPEG, SVG, and Lottie are the picture. The `.oma` is the studio.

A placed image makes the constraint sharper. The camera file, or the PNG you placed, is pixels. A guide is a contour. If "make a guide from this photo" replaced the photo, you would have a rectangle and a hole in the layout. The document has to keep both.

### What landed

Ruler guides and object guides both survive a project save. Drag from the top ruler for a horizontal guide. Drag from the left ruler for a vertical one. Drag an existing guide to move it. Select one and press Delete, drag it off the canvas, or use its context menu to remove it. View offers Clear ruler guides. Those ruler guides are stored with the document. Reopen the `.oma` and they are on the same positions.

Object guides are the other kind. Object → Guides → Convert selection to guides turns vector artwork into editable, non-printing contours. Curves stay curves. Compound paths keep their holes. Shapes keep their parameters until you edit them into a path. Live text keeps its text and its style. Move, Node, and Reshape still edit the guide. Snapping follows the actual curve, including a Shift-constrained drag. Release guides restores that artwork, including geometry edits you made while it was a guide. Both actions undo in the normal way.

The status line tells you which kind of conversion you just did. Artwork becomes "editable guides · original artwork preserved." A placed image becomes a count of guides with "image artwork kept." The image does not turn into the guide. The guide is a separate contour around the image bounds. The pixels stay on the layer.

`Ctrl+;` shows or hides ruler guides and object guides. The status line says "Guides shown" or "Guides hidden." Hidden guides do not capture the pointer, and they do not participate in snapping. Hide is off. Show brings the same rails back, because they were never deleted. If you convert a selection while guides are hidden, the conversion shows them again so you can see the thing you just made. If guides are locked, the new object guides are created and then dropped from the selection, so a locked board does not hand you a guide you are about to nudge. Lock itself is the next control. This one is about persistence.

Combining and releasing compound paths keeps guide state, rotation, stacking, and gradient endpoints in one undo step. The operation wants either artwork or guides. A mix of the two is refused, with a clear status, so a compound does not silently swallow a rail into a filled shape or the other way around.

### In the hand

Open the poster. Turn rulers on from View if the top and left edges are bare. Drag down from the top ruler and park a horizontal guide on the cap height. Drag right from the left ruler and park a vertical guide on the left margin. Right-click a ruler if you need the unit readout to match the job. The guides are already in the document.

Select the logo lockup, the hairline rules, whatever vectors you trust as structure. Object → Guides → Convert selection to guides. The fills stop printing as art. The contours stay. Press `A` and drag a node if a curve guide needs to sit on the real edge of a letter. Press `V` and move one if the whole rail should shift. `Ctrl+Z` returns the conversion, or the node edit, in one step.

Place a photograph with File → Place, or drop it. Select it and convert again. You get a guide around the bounds. The picture is still the picture. Zoom the face. The pixels did not become a hollow rectangle.

Save with `Ctrl+S`. Quit. Open the same `.oma`. The ruler guides, the converted contours, and the bounds guide around the photo are there. The text you released back to artwork with Release guides is text again, style included, including any node edits you made before the release. The menu item reads "Release guides to artwork."

Hide the rails before you look at color.

```
Ctrl+;
```

The guides leave the screen. Click where a guide was. You select the artwork underneath. Drag a shape across that line. It does not snap to a hidden rail. `Ctrl+;` again and the rails return, unmoved.

Export PNG, JPEG, SVG, or Lottie. Open the export. The guides are not in it. Open the `.oma` again. The guides are still in it.

### The edge

The delivery writers refuse to draw guides. PNG, JPEG, SVG, and Lottie are the picture you send. Saving the project does not bake those rails into pixels inside the `.oma` either. They stay guides: editable, non-printing, present on the next open.

If a line has to appear in the PNG, release that guide back to artwork first, then export. Clear is the other refusal. Clear all guides, from Object → Guides or the ruler menu, removes ruler guides and converted object guides in one step, and Undo restores them. Hide does not. Hide only keeps them out of the pointer and out of the snap until you press `Ctrl+;` again.

## Lock unlock guides 0.5.8

### The habit

You finish the grid, then you set the type. In Illustrator the guides stay visible because you still need to see the measure, and you lock them so a stray drag on a hairline does not shove the margin three pixels left. Photoshop's Lock Guides is the same muscle. Affinity's lock is the same muscle. The rails stay on screen. They stop being objects.

The failure mode is a toggle you cannot see. One menu item that says Lock when they are free and Unlock when they are frozen. You click it from memory, the label flips, and you only learn which way you went when the next drag grabs a guide and the headline jumps. Then you undo the type, undo the nudge, and try to remember the lock state you had before the click.

You want two commands. One locks. One unlocks. The one that does not apply sits there and does nothing. You can read the menu and know the board.

### The constraint

Omadesign 0.5.8 is the release that split those commands. View → Guides now lists Lock all guides and Unlock all guides as separate items. The rest of the studio already had a single flipping label. Object → Guides still shows one button, "Lock all guides" or "Unlock all guides," depending on the current state. The ruler's right-click menu does the same. Those older entries still work. They are one control that changes its name. The 0.5.8 change is the View submenu, where both names are present at once and the one that does not match the document is disabled.

Guides start locked. A new document, and a document opened into a tab, takes the startup preference, and that preference defaults to locked. The preference lives with the rest of Config, under `~/.config/omadesign` or `$XDG_CONFIG_HOME/omadesign`. Config is the omadesign menu in the title bar: font, startup mode, rulers, shortcut hints, guide locking. There is no account required to keep that preference, and there is no dialog on every new file asking whether rails should be grabbable. The default is the safe one for type. You unlock when you mean to move a rail.

Lock is document state, stored with the ruler settings in the `.oma`, and it is one undo. It is not Hide. `Ctrl+;` still shows and hides. A locked guide you can see is a rail you can trust and cannot drag.

### What landed

View → Guides → Lock all guides sets the document locked. View → Guides → Unlock all guides clears that. The status line says "All guides locked" or "All guides unlocked." When you lock, any guide currently in the selection is dropped, and node selection on those contours is cleared. You do not keep a live selection on something the pointer is no longer allowed to move.

Hit testing skips guides while they are locked, the same way it skips them while they are hidden. A click on the rail falls through to the artwork. A marquee does not collect the guide. Object guides made with Convert selection to guides obey the same lock as the ruler guides you dragged out of the ruler. One switch covers both kinds. That is the point of "all."

Lock does not delete. The positions stay. Save the `.oma` and the lock state is part of the ruler settings you reopen. Clear is the delete. Object → Guides → Clear all guides, and the same words on the ruler menu, remove ruler guides and converted object guides in one step. The status line says "All guides cleared · Undo restores them." View → Clear ruler guides is the view menu's clear. Use lock when the rails must stay. Use clear when the rails are finished.

Hide remains `Ctrl+;`. Hidden guides drop out of the pointer and out of snapping. Locked guides drop out of the pointer so you cannot nudge them. Snapping to guides is its own checkbox under View: Snap to guides. If you still want objects to land on a locked rail, leave that checkbox on and leave the guides visible. You can see the line, snap to the line, and fail to drag the line. That is the type-setting posture.

The Shortcut HUD along the bottom of the window keeps showing tool hints while you do this. Lock is a menu command, not a key you have to chord in the middle of a word. `F1` lists the keys. `Ctrl+/` shows or hides the HUD. Neither of those touches the lock.

### In the hand

Draw the rails first, while you are still willing to move them. View → Guides → Unlock all guides. The status line confirms it. Drag a horizontal guide down from the top ruler. Drag a vertical guide out of the left ruler. Convert a logo contour if you want a curve to act as a rail: Object → Guides → Convert selection to guides. Nudge until the measure is right. `Ctrl+Z` undoes a bad nudge, one step.

Then set the type. Before the first click in a text box, View → Guides → Lock all guides. Look at the menu. Lock all guides is disabled. Unlock all guides is the live command. The rails are still on screen. Click a guide. You get the object underneath, or nothing, not the guide. Drag a text frame across a margin. The guide stays. If Snap to guides is on, the text frame can still land on that margin. The margin does not come with it.

```
View → Guides → Lock all guides
View → Guides → Unlock all guides
```

Need the rail to move again? Unlock all guides. Drag. Lock all guides before you go back to tracking and leading. The two commands are the whole cycle. You do not flip a single item and guess.

If you prefer the ruler, right-click the top or left ruler. The menu shows one lock line, named for the action available right now, plus the unit list and Reset ruler zero. Object → Guides has the same single line, next to Clear all guides, Convert selection to guides, and Release guides to artwork. Those paths still lock and unlock. The 0.5.8 path is the one that shows both names.

The startup default is locked. Open a fresh document, try to drag a guide, and the drag does not take. Unlock all guides, place the rails, lock them again. If you want new documents to start unlocked, that switch is guide locking in Config, saved under `~/.config/omadesign`. It does not rewrite guides already stored in an open `.oma`. It sets the lock those documents start with.

### The edge

Lock all guides refuses to hide the rails, and it refuses to delete them. The lines stay in the file, stay on screen when guides are visible, and stop accepting the pointer. Unlock all guides is a different command. In the View submenu the command that does not match the document is present and does not run. You can read the pair and know the state.

Clear is not a kind of lock. Clear removes the guides. Undo brings them back. Hide is not a kind of lock either. `Ctrl+;` takes them off the screen and out of snapping. When you are in the type, you want them visible, snapped to, and impossible to nudge. That is Lock all guides. Press it before the headline, and leave Unlock all guides for the moment you mean to move a rail.

## Ruler zero and units

### The habit

The zero on an Illustrator ruler is not the artboard corner forever. You drag the crosshair where the two rulers meet, drop it on the trim, or on the spine, or on the top-left of a phone screen you are drawing at two times scale. Every tick after that is measured from the place you care about. Double-click that corner and zero snaps home. You do this ten times a day and you never open a dialog to do it.

Units are the other habit. A poster wants millimeters. A type spec wants points. A screen wants pixels. In Photoshop you change the ruler unit and the pixels of the photograph stay the pixels of the photograph. The ruler is a skin. Affinity is the same. Right-click the ruler, pick mm or inches, and the file does not resample. If the unit change resized the artwork, every logo you had placed would jump, and every guide you had dragged would mean something else.

The hand already knows the corner. Grab the intersection. Drag. Let go. Double-click when you want the origin back. Right-click when the ticks should read in another unit. The numbers change. The drawing does not.

### The constraint

Omadesign stores artwork in document pixels. Width, height, paths, type size, and guide positions are pixel values in the `.oma`. DPI is a document property, set when you pick a size or a template. It is how a physical unit is computed for display. It is not a second geometry.

That forces the ruler to be a view. Changing millimeters to inches multiplies the labels by the document DPI. It does not rewrite path points, and it does not scale the artboard. A 300 DPI board and a 72 DPI board show different inch marks for the same pixel distance, because an inch is `DPI` pixels, a point is `DPI / 72` pixels, a millimeter is `DPI / 25.4` pixels, and a centimeter is `DPI / 2.54` pixels. If the document DPI is missing or not a positive number, the ruler math uses 72 for that conversion and still leaves the pixels alone.

There is no Creative Cloud document setting to sync, and no modal that offers to "convert the file to inches." One binary, one file, one coordinate space. The ruler corner writes an origin into the ruler settings. Those settings save with the project. Undo restores the previous origin or the previous unit in one step, because the change is a single ruler update, the same command that locks guides or toggles their visibility.

### What landed

Turn rulers on from View → Rulers if the edges are bare. The hover on that checkbox says what the corner does: drag it to set zero, double-click it to reset. The corner itself repeats the hint: "Drag to set ruler zero · double-click to reset."

Drag the top-left intersection onto the canvas. Where you release becomes zero. Ticks to the right and down count up from there. Ticks on the other side count the other way. Guides you drag out of the rulers still land in document pixels. The origin only changes how the ruler numbers them, and how you read a position against the job. Double-click the corner and the origin returns to `0, 0`. The ruler menu has the same command in words: Reset ruler zero.

Units are on the ruler menu and on View → Ruler units. The labels are Pixels (px), Millimeters (mm), Centimeters (cm), Inches (in), and Points (pt). Pick one. The ticks redraw. A guide that was 72 pixels from the old zero is still 72 pixels from that point in the file. At 72 DPI that distance reads as 1 inch and as 72 points. At 300 DPI it reads as 0.24 inch. The path did not move. Switch back to pixels and the tick is 72 again.

Right-click the top ruler or the left ruler to open that menu without leaving the edge. The same menu holds show and hide for guides (`Ctrl+;`), the lock command, and clear. Unit, origin, and guide visibility are neighbors because they are all ruler settings. They travel with the `.oma`. Reopen the file and the zero you set is the zero you get. The unit you picked is the unit on the ticks.

View → Rulers can hide the rulers entirely when you want the canvas clean. Hiding them does not zero the origin and does not switch the unit. Show them again and the same corner, the same ticks, and the same guides are back. Guides themselves can be locked, which is a separate switch. A locked guide still reads against the current unit. You just cannot drag it.

The Shortcut HUD does not steal this gesture. The corner is a pointer target. Double-click is the reset. No key is required. `F1` is there if you want the rest of the map.

### In the hand

Make a board at the size the job actually is. A print sheet at 300 DPI. A screen at 72 or 96. The DPI you chose is the DPI the ruler will use. Check it before you trust an inch mark. The ruler will not invent a DPI for you beyond the fallback of 72 when the number is unusable, and it will not resample the board to match a unit.

```
View → Rulers
```

Drag from the corner until the zero sits on the trim, or on the left edge of the live area, or on the center of a mark you are measuring from. Watch the ticks. They count from the drop point. Drag a guide out of the left ruler. It is a vertical line in pixels. The ruler labels it in the current unit, measured from the origin you just set.

Right-click the ruler. Choose Millimeters (mm) for the print sheet, or Points (pt) for the type spec, or Pixels (px) when you are back on a screen. The artwork stays. Toggle once more if you need to read both. Each change is undoable with `Ctrl+Z`. Redo is `Ctrl+Shift+Z`.

Double-click the corner when the next object should be measured from the document origin again. Or pick Reset ruler zero on the menu. The guides do not jump. Their pixel positions are unchanged. Only the numbering origin moved home.

Save. The origin and the unit are in the project. The PNG you export later is pixels, guides omitted, unit labels omitted. The ruler was never part of the picture. It was how you read the picture while you drew.

### The edge

Changing the unit refuses to change the artwork. Paths, type, frames, placed images, and guide positions stay in document pixels. The ruler is a display. Physical units follow the document DPI so a millimeter on a 300 DPI board is a real millimeter of that board, and the same pixel distance on a 72 DPI board reads as a longer physical length. That is the ruler telling the truth about DPI. It is not a scale tool.

There is no command here that resamples, reflows, or "converts the document" into inches. If the work has to be a different pixel size, you change the artboard or the frame. If the work has to be read in points for an hour, right-click the ruler, pick Points (pt), and double-click the corner when zero needs to go home.
