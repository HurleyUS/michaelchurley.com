---
id: T047
title: Ruler guides
slug: omadesign-0-5-8-ruler-guides
excerpt: Drag a horizontal guide from the top ruler and a vertical guide from the left. Delete, drag off the canvas, or use the context menu to remove one. Ctrl+; shows or hides ruler and object guides.
publishedAt: 2026-09-06T10:37:01Z
tags: [omadesign, 0.0.1-alpha, guides, rulers]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-ruler-guides/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-ruler-guides/og.png
---

## The habit

You pull a guide out of the ruler: a horizontal line from the top ruler, a vertical one from the left. Illustrator, Affinity and Photoshop have all worked this way for as long as anyone remembers. You drag the guide to the margin, the column or the cap height, and drag it again when the grid changes. You only open a dialog to type an x coordinate when the coordinate is the spec and the drag was the sketch.

There are three ways to remove one, and you use all of them. Select it and press Delete. Drag it back onto the ruler, or off the canvas, when your hand is already dragging. Right-click and remove it when the guide sits over something and Delete would hit the artwork. Clear All is a fourth, for the end of a layout when the construction lines should go and the art should stay.

Show and hide is Ctrl+; in Illustrator. You learn it because clients see guides and think they are printed rules. Hiding has to be complete. A hidden guide that still snaps or still catches the pointer will pull a logo onto a margin you can't see, and you will blame the mouse when the guide was the problem.

Guides also have to last. In Illustrator the guide is part of the file. You save, quit, open the file after lunch, and the guide is still at the measure you set. Export a PNG for the deck or an SVG for the site and the guide is gone, because it was never ink. Affinity works the same way: guides live with the document and don't print. A photograph you dropped on the board stays a photograph, and you don't lose the pixels to get a guide around them.

Lock goes with all of this. You finish the grid and then set the type. The guides stay visible because you still need to see the measure, and you lock them so a stray drag on a hairline doesn't shove the margin three pixels left. Photoshop's Lock Guides and Affinity's lock work the same way. The guides stay on screen and stop behaving like objects. The failure is a toggle you can't read: one menu item that says Lock when guides are free and Unlock when they are frozen. You click it from memory, the label flips, and you only find out which way you went when the next drag grabs a guide and the headline jumps. Then you undo the type, undo the nudge, and try to remember what the lock state was. I wanted two commands, one that locks and one that unlocks, with the one that doesn't apply sitting there disabled, so you can read the menu and know the state.

Then there is ruler zero. The zero on an Illustrator ruler doesn't have to stay at the artboard corner. You drag the crosshair where the two rulers meet and drop it on the trim, the spine, or the top-left of a phone screen you are drawing at two times scale. Every tick after that measures from the place you care about. Double-click the corner and zero goes back home. You do this ten times a day without a dialog.

Units are the other ruler habit. A poster wants millimeters, a type spec wants points, and a screen wants pixels. In Photoshop, changing the ruler unit leaves the photograph's pixels alone, because the ruler is only a display. Affinity is the same: right-click the ruler, pick mm or inches, and the file doesn't resample. If a unit change resized the artwork, every placed logo would jump and every guide would mean something else. You grab the intersection, drag, let go, and double-click when you want the origin back. You right-click when the ticks should read in another unit. The numbers change and the drawing doesn't.

## The constraint

The rulers sit on the canvas in the same window as the art. A guide is a document object in the `.oma`, so it doesn't vanish on save. You hide guides for a screenshot of the canvas and clear ruler guides when that phase of the work is over. There is no separate guide layer file.

Omadesign is one binary with one document per project. Vectors, pixel layers, frames and the motion clip all live in the `.oma`, so there is no separate guides file to lose in a folder and no cloud round trip that has to remember your margins. After a second of idle time, the app writes a recovery snapshot beside its app data. Save deletes that swap file, and the `.oma` is the record.

Converting artwork into guides, releasing those guides and clearing them each have to undo in a single step, with style and geometry intact. A dialog asking whether to "include guides in the export" would put the decision in the wrong place. The export writers already know what a delivery file is. PNG, JPEG, SVG and Lottie are the picture, and the `.oma` is the working file.

A placed image makes this stricter. The camera file, or the PNG you placed, is pixels, and a guide is a contour. If making a guide from a photo replaced the photo, you would be left with a rectangle and a hole in the layout. The document has to keep both.

Ctrl+; shows or hides ruler guides and object guides together. Object guides are the ones you make with Convert selection to guides, and one shortcut hides both kinds. Snapping uses Ctrl+Shift+;, the same key with Shift, so the two switches stay separate.

Hidden guides don't capture the pointer and don't take part in snapping, so you can drag a shape across a hidden margin without it sticking. Show them again and snapping can see them. Snapping has its own toggle, Ctrl+Shift+;, and holding Ctrl during a drag reverses snapping without hiding the guides. So there are two separate mechanisms. Hide the guides when you don't want to see them. Reverse snapping when you want to see them but ignore them for one drag.

Clear ruler guides removes the guides you pulled from the rulers. It is on the View menu, and show, hide and clear are also on the ruler context menus. Dragging a guide outside the canvas removes it, because the pasteboard isn't meant for storing guides you might want later. If you want one back, undo or pull a new one.

Delete on a selected guide removes that guide. Artwork selection is separate, so select the guide first and then press Delete, and you won't delete a path that happened to be under the cursor.

Guides start locked. A new document, or a document opened into a tab, takes the startup preference, which defaults to locked. That preference lives with the rest of Config, under `~/.config/omadesign` or `$XDG_CONFIG_HOME/omadesign`. Config is the omadesign menu in the title bar, which covers font, startup mode, rulers, shortcut hints and guide locking. You don't need an account to keep the preference, and no dialog asks on every new file whether guides should be movable. Locked is the safe default for setting type, and you unlock when you mean to move a guide.

Lock is document state. It is stored with the ruler settings in the `.oma`, and changing it is one undo step. Locking is separate from hiding. `Ctrl+;` still shows and hides guides, and a locked guide you can see is a line you can rely on and can't drag.

Before 0.5.8, the studio had a single lock item whose label flipped. The ruler context menu and Object > Guides provide lock, unlock and clear-all that way. Omadesign 0.5.8 is the release that split the commands: View > Guides now lists Lock all guides and Unlock all guides as separate items. Object > Guides still shows one button, "Lock all guides" or "Unlock all guides," depending on the current state, and the ruler's right-click menu does the same. Those older entries still work. The 0.5.8 change is the View submenu, where both names appear at once and the one that doesn't match the document is disabled. That way nobody thinks they unlocked the guides when they didn't.

Omadesign stores artwork in document pixels. Width, height, paths, type size and guide positions are pixel values in the `.oma`. DPI is a document property, set when you pick a size or a template, and it is used to compute physical units for display. It doesn't create a second geometry.

That makes the ruler a view. Switching from millimeters to inches changes the labels using the document DPI, and it doesn't rewrite path points or scale the artboard. A 300 DPI board and a 72 DPI board show different inch marks for the same pixel distance, because an inch is `DPI` pixels, a point is `DPI / 72` pixels, a millimeter is `DPI / 25.4` pixels and a centimeter is `DPI / 2.54` pixels. If the document DPI is missing or isn't a positive number, the ruler uses 72 for that conversion, and the pixels still stay as they are.

There is no Creative Cloud document setting to sync and no dialog offering to "convert the file to inches." It is one binary, one file and one coordinate space. The ruler corner writes an origin into the ruler settings, and those settings save with the project. Undo restores the previous origin or unit in one step, because the change is a single ruler update, the same kind of command that locks guides or toggles their visibility.

## What landed

### Ruler guides

Drag from the top ruler for a horizontal guide and from the left ruler for a vertical one. Once guides are unlocked, drag an existing guide to move it. To remove a guide, select it and press Delete, drag it outside the canvas, or use its context menu. View > Clear ruler guides clears all the ruler guides. Ruler guides are stored with the document, so when you reopen the `.oma` they are in the same positions.

### Object guides

Object > Guides > Convert selection to guides turns vector artwork into editable, non-printing contours. Curves stay curves and compound paths keep their holes. Shapes keep their parameters until you edit them into a path, and live text keeps its text and style. Move, Node and Reshape still edit the guide, and snapping follows the actual curve, including during a Shift-constrained drag. Release guides restores the artwork, including any geometry edits you made while it was a guide. Both actions undo normally.

The status line tells you which kind of conversion you just did. For artwork it reads "editable guides · original artwork preserved." For a placed image it shows a count of guides with "image artwork kept." The image doesn't turn into the guide. The guide is a separate contour around the image bounds, and the pixels stay on the layer.

Combining and releasing compound paths keeps guide state, rotation, stacking and gradient endpoints in one undo step. The operation takes either artwork or guides. A mix of the two is refused with a clear status message, so a compound never silently absorbs a guide into a filled shape, or the other way around.

### Showing, hiding and snapping

Ctrl+; shows or hides ruler guides and object guides, and the keys list calls it Guides. The status line says "Guides shown" or "Guides hidden." Hidden guides don't take clicks and don't snap. Showing them brings back the same guides, because hiding never deleted them. If you convert a selection while guides are hidden, the conversion shows them again so you can see what you just made.

Snapping uses guides along with object and artboard edges and centers, the grid, and equal spacing. Alignment lines and gap measurements appear as you move. A visible guide is a snap target and a hidden one isn't. Snapping to guides also has its own checkbox under View, Snap to guides. Ctrl+Shift+; turns snapping off entirely when the session should be freehand. Holding Ctrl during a drag makes only that drag ignore snapping, or use it if snapping was off. Release Ctrl and the toggle's setting returns.

Shift still constrains artwork you drag against the guides to horizontal, vertical or 45 degrees. The guide sets the position and Shift sets the angle of the move.

### Locking

View > Guides > Lock all guides locks the document's guides and View > Guides > Unlock all guides unlocks them. The status line says "All guides locked" or "All guides unlocked." When you lock, any guide in the current selection is dropped from it, and node selection on those contours is cleared, so you never keep a live selection on something the pointer can no longer move. If guides are locked when you convert a selection, the new object guides are created and then dropped from the selection, so a locked board doesn't hand you a guide you are about to nudge.

Hit testing skips locked guides the same way it skips hidden ones. A click on the guide falls through to the artwork, and a marquee doesn't collect it. Object guides made with Convert selection to guides follow the same lock as ruler guides. One switch covers both kinds, which is why the command says "all."

Locking doesn't delete anything. The positions stay, and when you save the `.oma` the lock state is part of the ruler settings you reopen. Hidden guides drop out of the pointer and out of snapping. Locked guides only drop out of the pointer, so you can't nudge them. If you still want objects to land on a locked guide, leave Snap to guides on and keep the guides visible. You can see the line and snap to it, but you can't drag it. That is the setup for setting type.

The Shortcut HUD along the bottom of the window keeps showing tool hints while you work. Lock is a menu command, so you never have to press a key combination in the middle of typing a word. `F1` lists the keys and `Ctrl+/` shows or hides the HUD. Neither affects the lock.

### Clearing, saving and export

Clear is the delete. Object > Guides > Clear all guides, and the same command on the ruler menu, remove ruler guides and converted object guides in one step. The status line says "All guides cleared · Undo restores them." View > Clear ruler guides is the View menu's version for ruler guides. Use lock when the guides must stay and clear when you are finished with them.

Ruler guides and object guides both survive a project save. PNG, JPEG, SVG and Lottie exports leave them out.

### Ruler zero and units

If the canvas edges are bare, turn rulers on from View > Rulers. The tooltip on that checkbox explains the corner: drag it to set zero, double-click it to reset. The corner shows the same hint: "Drag to set ruler zero · double-click to reset."

Drag the top-left intersection onto the canvas, and the point where you release becomes zero. Ticks to the right and down count up from there, and ticks on the other side count the other way. Guides you drag out of the rulers still land in document pixels. The origin only changes how the ruler numbers them and how you read a position against the job. Double-click the corner and the origin returns to `0, 0`. The ruler menu has the same command as Reset ruler zero.

Units are on the ruler menu and on View > Ruler units: Pixels (px), Millimeters (mm), Centimeters (cm), Inches (in) and Points (pt). Pick one and the ticks redraw. A guide 72 pixels from the old zero is still 72 pixels from that point in the file. At 72 DPI that distance reads as 1 inch and as 72 points. At 300 DPI it reads as 0.24 inch. The path doesn't move, and when you switch back to pixels the tick reads 72 again.

Right-click the top or left ruler to open that menu without leaving the edge. The same menu has show and hide for guides (`Ctrl+;`), the lock command and clear. Unit, origin and guide visibility sit together because they are all ruler settings, and they travel with the `.oma`. Reopen the file and you get the zero you set and the unit you picked.

View > Rulers can hide the rulers entirely when you want a clean canvas. Hiding them doesn't reset the origin or change the unit. Show them again and the same corner, ticks and guides come back. A locked guide still reads against the current unit. You just can't drag it.

The Shortcut HUD doesn't interfere with the corner. It is a pointer target, double-click resets it, and no key is required. `F1` shows the rest of the keys if you want them.

## In the hand

### Placing and removing guides

Open a poster. Guides start locked, so choose View > Guides > Unlock all guides before you place them. The status line confirms it. If the top and left edges are bare, turn rulers on from View first. Drag down from the top ruler and put a horizontal guide on the cap line. Pull a vertical guide from the left ruler for the left margin. Drag either one again until it sits right. If you need the readout to match the job, right-click a ruler and change the unit. The guides are already part of the document.

Select one guide and press Delete, and it is gone. Ctrl+Z brings it back if you still needed that margin. Drag another guide off the canvas and release, and that one is gone without Delete. When Delete feels risky, right-click a guide and use the context menu.

### Converting artwork and photos

Select the logo lockup, the hairline rules, or whatever vectors you trust as structure, and choose Object > Guides > Convert selection to guides. The fills stop printing as art and the contours stay. Press `A` and drag a node if a curved guide needs to sit on the real edge of a letter, or press `V` and move it if the whole guide should shift. `Ctrl+Z` undoes the conversion or the node edit in one step.

Place a photograph with File > Place, or drop it in. Select it and convert again, and you get a guide around its bounds. The picture is still the picture. Zoom into the face and you'll see the pixels didn't become a hollow rectangle.

### Locking while you set type

Place the headline with T. Before the first click in a text box, choose View > Guides > Lock all guides. Look at the menu: Lock all guides is now disabled and Unlock all guides is the active command. The guides are still on screen. Click a guide and you get the object underneath, or nothing. Drag a text frame across a margin and the guide stays put. If Snap to guides is on, the text frame can still land on that margin without dragging the margin along.

```
View → Guides → Lock all guides
View → Guides → Unlock all guides
```

If a guide needs to move again, choose Unlock all guides, drag it, and choose Lock all guides before you go back to tracking and leading. Those two commands are the whole cycle, so there is no single item to flip and guess about.

If you prefer the ruler, right-click the top or left ruler. The menu shows one lock line, named for the action available right now, plus the unit list and Reset ruler zero. Object > Guides has the same single line, next to Clear all guides, Convert selection to guides and Release guides to artwork. Those paths still lock and unlock. The View path added in 0.5.8 is the one that shows both names.

The startup default is locked. Open a fresh document and try to drag a guide, and the drag doesn't take. Unlock all guides, place them, and lock them again. If you want new documents to start unlocked, change guide locking in Config, which is saved under `~/.config/omadesign`. That setting only decides the lock state new documents start with. It doesn't rewrite guides already stored in an open `.oma`.

### Hiding guides

Hide the guides before you look at color, or before you show someone the canvas.

```
Ctrl+;
```

The guides leave the screen. Click where a guide was and you select the artwork underneath. Drag a shape across that line and it doesn't snap to the hidden guide. Press `Ctrl+;` again and the guides return, unmoved. If you want them visible but need one free drag, hold Ctrl while you drag.

### Ruler zero and units

Make a board at the job's real size, for example a print sheet at 300 DPI or a screen at 72 or 96. The ruler uses the DPI you chose, so check it before you trust an inch mark. The ruler won't guess a DPI, apart from the fallback of 72 when the number is unusable, and it won't resample the board to match a unit.

```
View → Rulers
```

Drag from the corner until zero sits on the trim, on the left edge of the live area, or on the center of a mark you are measuring from. The ticks count from the drop point. Drag a guide out of the left ruler. It is a vertical line in pixels, and the ruler labels it in the current unit, measured from the origin you just set.

Right-click the ruler and choose Millimeters (mm) for the print sheet, Points (pt) for the type spec, or Pixels (px) when you are back on a screen. The artwork stays where it is. Switch again if you need to read both. Each change can be undone with `Ctrl+Z` and redone with `Ctrl+Shift+Z`.

When the next object should be measured from the document origin again, double-click the corner or choose Reset ruler zero from the menu. The guides don't jump, because their pixel positions haven't changed. Only the origin of the numbering moved.

### Clearing, saving and exporting

When the construction phase is over, choose View > Clear ruler guides. The ruler guides go away. Object guides you made from artwork are a separate group. Clear ruler guides only targets guides from the rulers, and converted contours stay until you release or remove them separately.

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

Save with `Ctrl+S`, quit, and open the same `.oma`. The ruler guides, the converted contours and the bounds guide around the photo are all there, along with the origin and the unit you set. Text you released back to artwork with Release guides (the menu item reads "Release guides to artwork") is text again, with its style and any node edits you made before the release.

Export PNG, JPEG, SVG or Lottie and open the export. The guides aren't in it, and neither are the ruler labels. Open the `.oma` again and the guides are still there. The ruler was never part of the picture. It is how you read the picture while you draw.

## The edge

A hidden guide doesn't respond to the pointer or to snapping. Ctrl+; hides ruler guides and object guides together, so an invisible guide can't surprise you with a snap in front of a client.

A guide dragged outside the canvas is removed, because the area past the page isn't storage. Delete and the context menu also remove a guide, and View > Clear ruler guides clears the ruler set. Undo if you cleared too early.

The delivery writers never draw guides. PNG, JPEG, SVG and Lottie are the picture you send. Saving the project doesn't bake guides into pixels inside the `.oma` either. They stay editable, non-printing and present on the next open. If a line has to appear in the PNG, release that guide back to artwork before you export. Clear all guides, from Object > Guides or the ruler menu, removes ruler guides and converted object guides in one step, and Undo restores them.

Lock all guides doesn't hide or delete the guides. They stay in the file and on screen when guides are visible, and they stop responding to the pointer. Unlock all guides is a separate command. In the View submenu, the command that doesn't match the document's state is shown but disabled, so reading the pair tells you the state. Clearing and hiding are also separate from locking. Clear removes the guides and Undo brings them back. `Ctrl+;` takes them off the screen and out of snapping. While you set type, you want them visible, snapped to and impossible to nudge, and that is Lock all guides.

Changing the ruler unit never changes the artwork. Paths, type, frames, placed images and guide positions stay in document pixels, and the ruler only displays them. Physical units follow the document DPI, so a millimeter on a 300 DPI board is a real millimeter of that board, and the same pixel distance on a 72 DPI board reads as a longer physical length. That reflects the DPI accurately, and the ruler isn't a scale tool. No command here resamples, reflows or "converts the document" into inches. If the work needs a different pixel size, change the artboard or the frame.
