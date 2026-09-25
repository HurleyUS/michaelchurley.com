---
id: T131
title: Adobe familiar tool keys
slug: omadesign-0-5-8-adobe-familiar-tool-keys
excerpt: The tool letters are V A P N R O Y S L T G I U B E K J, Shift+J, M C W H Z. F1 opens the full list. The HUD at the bottom follows the tool you are holding.
publishedAt: 2026-09-22T11:40:56Z
tags: [omadesign, 0.5.8, shortcuts, canvas, photo]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-adobe-familiar-tool-keys/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-adobe-familiar-tool-keys/og.png
---

## The habit

Your left hand already knows the letters. `V` selects. `A` is the direct selection or node tool, depending on which app taught you. `P` is the pen. `T` is type. `B` is the brush. `I` is the eyedropper. `Z` is zoom. `H` is the hand. Illustrator, Photoshop, and Affinity do not agree on every letter. They agree on enough of them that a new tool with a cute letter is a tax. `R` for rectangle and `O` for ellipse are in your hand from Illustrator. `J` for clone and `Shift+J` for the healing brush are in your hand from Photoshop. You want those letters on day one, and you want a strip on screen that tells you the rest without a trip to a PDF.

You also know the letters lie when the persona changes. Photoshop's `J` does nothing useful in Illustrator. The letter can stay. The tool it calls has to match the room you are in.

## The constraint

One binary, five personas, one key table. Design, Layout, Pixel, Photo, and Motion share the process and the `.oma`, except Photo's develop session which keeps its own history beside the camera file. If each persona shipped a private keymap, muscle memory would reset every time you pressed the persona you needed for the next ten minutes. The letters stay. The table refuses a letter that has no tool in that persona, so `S` does not invent a star in a room that has no star, and Photo does not turn `P` into a pen over a RAW file.

The teacher has to stay out of the way. A shortcut overlay that takes keyboard focus steals the next letter from the tool you just asked about. The HUD is a strip. Hints are informational. Text editing and menus get their own context. `F1` opens the full list when the strip is not enough.

## What landed

These are the tool letters, with no modifier, from the manual and the key table:

`V` Move. Click selects, drag moves, eight handles scale, the handle above the box rotates. Shift-click adds or removes. Alt-drag clones.

`A` Node. Points and Bézier handles. Shift-click adds a node to the selection. Alt-click toggles corner and smooth. Alt-drag breaks a handle. Delete removes selected points.

`P` Pen. Click a corner, click-drag a smooth point. Shift constrains to 45 degrees. Enter or double-click finishes an open path. Escape drops the last point, then cancels. Click the first point to close.

`N` Pencil. `R` Rectangle. `O` Ellipse. `Y` Polygon. `S` Star, in Design and Layout. `L` Line. Shift constrains. Corner radius, sides, and inner radius sit in Transform.

`T` Type. Click, type, Enter for a new line, Escape or a click away to finish. Double-click existing type to edit it.

`G` Gradient, dragged across a selected shape. The active Fill or Stroke row in Appearance chooses which paint you are editing. Stops you already made stay.

`I` Eyedropper. `U` Trace, raster to vector on the active pixel layer. `B` Brush. `E` Eraser. `K` Fill. `J` Clone, Alt-click to set the source. `Shift+J` Healing brush in Pixel, Alt-click clean texture, then paint. `M` Smudge in Pixel. `C` Crop. `W` Wand. `H` Hand. `Z` Zoom.

A few letters sit next to that set because the same table owns them. `F` is Frame in Layout. `Q` is the lasso. `Shift+O` is the Artboard tool in Design, and the elliptical marquee in Pixel. `Shift+M` is the rectangular marquee in Pixel. `Shift+A` toggles auto-layout on a Layout selection. Photo's letter tools are Hand, Zoom, Crop, and Eyedropper. The other letters do nothing there.

`[` and `]` change brush size. `Shift+[` and `Shift+]` change hardness. Those are plain keys. With Ctrl they belong to stacking, which is a different chord.

The Shortcut HUD sits on the bottom of the window. The upper row follows the current tool. The lower row shows letter keys. Hold Ctrl, Shift, Alt, or a combination and the strip shows the matching commands. It keeps its height so a drag does not jump. Hover **+ more** when the window is too narrow for every hint. `Ctrl+/` or **View → Shortcut HUD** shows or hides it. `F1` opens the full shortcut list, and the same key closes it.

While you are editing text, letters go into the text. A field in the inspector swallows non-global shortcuts. Save, open, and the HUD toggle still work. The tool letter does not.

## In the hand

Open a blank vector document. The default persona is Design. Press `R` and drag a rectangle. Press `P` and draw a short path. Press `T`, click, and type. Press `V` and move the rectangle. Press `A` and drag a point. That is the first minute the manual describes.

Press `B`. If you are still on vectors only, add a pixel layer before you expect paint. Press `[` twice and watch the brush shrink. Press `E` and erase. Press `I` and sample. Press `Z` and click to zoom in, Alt-click to zoom out, or drag a box. Press `H` and pan. Space does the same pan while you hold it, as long as you are not in Motion.

Switch to Layout. Press `F` and drag a frame. `R` and `T` still work. Press `S`. The star is legal here. Switch to Pixel. Press `J`, Alt-click a source, and clone. Press `Shift+J` and heal. Press `M` and smudge. Press `W` and drag the wand. Press `Q` and draw a lasso.

Switch to Photo and open a picture. Press `C` and crop. Press `I`. Press `Z`. Press `H`. Press `P`. Nothing arms a pen. The letter is reserved, and this persona does not have that tool.

Press `F1` whenever a letter fails you. The list is the same table. Press `Ctrl+/` if the strip is in the way, and press it again when you want it back. Hold Shift while the strip is visible and read the constrained gestures before you drag.

## The edge

A letter that the persona does not implement does not fall through to a different tool. Photo keeps four tool letters. Star stays in Design and Layout. Smudge and the healing brush stay in Pixel. Text editing eats the letter until you leave the text. The HUD never takes focus, so reading a hint does not steal the next key.

Press `V`, then `F1` if you want the rest of the table in front of you.

## Zoom and hand

### The habit

Z is zoom. You drag a box around the knot you need to see, and the view becomes that box. You click to step in. You Alt-click to step out. Illustrator does this. Affinity does this. Photoshop does this. The hand has done it since the tool had a magnifying glass icon. You do not want a tour of the zoom menu. You want the knot.

Fit is the other half. You get lost at 1600% and you need the page back. Ctrl-click with the zoom tool fits the artboard. A modified click fits the selection when you are working on one mark and the artboard is huge. If nothing is selected, that same modified click fits every object, so a stray path off in the pasteboard still gets included and you can see why the fit felt wrong.

The wheel is where apps embarrass themselves. You scroll to move down the page and the entire window, panels included, changes size. Or you pinch the trackpad and the sidebars grow until the canvas is a stamp in the middle. Zoom belongs to the canvas. The chrome stays put. Panels, tool strip, inspector: they are the desk. The canvas is the paper. Only the paper zooms.

Pan is Space, held, in every drawing app you already use. H is the hand you can leave selected. You hold Space while a shape tool is active, you drag the paper, you release Space, and you are back on the rectangle. If Space stuck as the hand, you would draw a pan by accident on the next drag.

### The constraint

The studio is one window. Document tabs, the tool strip, the layers, the inspector, and the canvas share it. A zoom that scaled egui's chrome would resize the controls you need in order to zoom back, which is a trap. Ctrl and the scroll wheel, Alt and the scroll wheel, Ctrl++, Ctrl+-, and a trackpad pinch all zoom the canvas. The keys say so because the mistake is so common.

Fit has two jobs and they cannot share one click. The artboard is the page. The selection is the work. Ctrl-click on Z fits the artboard. Ctrl+Shift-click fits the selection, or every object when the selection is empty. Ctrl+0 is Fit from the shortcut list. Ctrl+1 is 100%, actual size, which is the only honest answer when you are judging type. Those chords stay available while you are on other tools, because making someone switch to Z to hit 100% is how people ship the wrong size.

Space pans in Design. H pans. In Motion, Space plays the timeline. The hand key has to remain a pan, because Space's meaning follows the persona. You learn H once and it still moves the paper when you are animating. Photo uses Space or Hand to drag the view, middle-drag and two-finger scroll to pan, and pinch, Ctrl+scroll, and Alt+scroll to zoom. Ctrl+0 fits the photo there. Ctrl+1 is 100%. The Design page uses the artboard as its fit target. The photograph uses the photograph. Same fingers, the object in front of you.

With Z selected, two-finger scroll zooms. That is the trackpad version of "I am in the zoom tool, so the gesture zooms." Pinch zooms the canvas even when you are not on Z.

One `.oma`, one view of it. Fit and 100% are how you get back to a known magnification. History on the artwork stays the place you undo edits.

### What landed

Press Z. Drag a box. The view becomes that area. Click to zoom in one step. Alt-click to zoom out one step. Ctrl-click fits the artboard. Ctrl+Shift-click fits the selection. If nothing is selected, Ctrl+Shift-click fits every object.

Pinch the trackpad to zoom the canvas. Ctrl++ zooms in. Ctrl+- zooms out. The plus key on the chord also accepts the equals key, the one you actually hit without hunting for plus. Ctrl+scroll zooms the canvas. Alt+scroll zooms the canvas. With Z selected, two-finger scroll zooms. None of these resize the chrome.

Press H, or hold Space, and drag to pan. Release Space and the previous tool is what you are holding. Leave H selected when you are only navigating.

Ctrl+0 fits. Ctrl+1 is 100%. Front and back and the rest of the Ctrl chords stay themselves. Zoom in and out are the plus and minus chords above. You can run them while a shape tool is active. You do not park the rectangle to see it larger.

In Motion, Space plays. Home and End jump. The hand tool is still how you pan when play owns the spacebar. In Photo, Space pans, because there is no timeline play on that spacebar. If a pan does nothing useful and a clip starts, you are in Motion. Press H and drag.

Snapping and guides are unchanged by zoom. You see more or less of the same canvas. Ctrl+; still shows or hides guides. A zoomed-in node edit is the same Node tool. The points stay on the artwork. You got closer. You did not switch documents.

### In the hand

Press Z. Drag a box around a wordmark. The view fills with it. Click once if you need one more step. Alt-click until the poster is back to a size you can judge. Or Ctrl-click to fit the artboard in one move.

Select one icon. Press Z and Ctrl+Shift-click. The view fits that icon. Deselect, Ctrl+Shift-click again, and the view fits every object, including the one you left off the board. That is how you find it.

Press Ctrl+1 before you call a body size done. 100% is the shortcut. Press Ctrl+0 when you want Fit and your hand is not on Z.

Hold Space while you are on the pen. Drag the canvas until the next point is in view. Release Space. Click the point. The pen was the tool the whole time. The spacebar borrowed the hand.

On a trackpad, pinch. The canvas zooms. The layers stay the width they were. If you are on Z, a two-finger scroll zooms as well.

```
Z                  Zoom
Drag a box         Zoom to that area
Click              Zoom in one step
Alt-click          Zoom out one step
Ctrl-click         Fit the artboard
Ctrl+Shift-click   Fit the selection, or every object
Ctrl++  Ctrl+-     Zoom the canvas
Ctrl+0             Fit
Ctrl+1             100%
H  or  Space       Pan
```

The scroll chords are Ctrl+scroll and Alt+scroll. They zoom the canvas. Pinch does the same. The panels stay put, which is the entire point of aiming the gesture at the paper.

### The edge

Zoom refuses the chrome. Panels, the tool strip, and the inspector keep their size. The canvas takes Ctrl++, Ctrl+-, Ctrl+scroll, Alt+scroll, pinch, and the Z tool. A wheel gesture that resized the whole window is the bug this binding is there to prevent.

Space pans the Design canvas. In Motion, Space plays the clip. H is the pan that stays a pan.

Press Z, drag a box around the knot, and hold Space when you need to slide the paper without leaving the tool in your other hand.

## Photo navigation

### The habit

The grade is a lie until you have seen the eyelashes. Photoshop trained the hand a long time ago. Hold Space, the cursor becomes the hand, you drag, you let go, and you are back on the tool you were using. Ctrl+1 is actual pixels. Ctrl+0 fits the window. Affinity Photo uses the same pair, and the Hand tool is still H when you want it latched. Lightroom's develop view is the same idea with a different set of reminders: click the loupe, drag, fit, 1:1.

Scroll-wheel zoom never agreed with itself. Some apps want Ctrl and the wheel. Some want Alt. A trackpad wants a pinch. You have all three habits in the same week, because you move between a mouse at the desk and a laptop on the couch. Middle-drag is the other one, from the apps that treat the wheel button as the hand. Two-finger scroll on a trackpad is pan in some tools and zoom in others. You find out by ruining your place in the picture.

Photo in this studio has one more reason to keep the view cheap. The first thing you see is a preview. The full resolution shows up when you go looking for it. The hand has to be able to pan and zoom while that work happens, or a big RAW is a frozen window with a spinner where the eye should be.

### The constraint

One binary means Photo does not get its own zoom language. **Ctrl+0** fits a Design artboard. **Ctrl+0** fits a photo. **Ctrl+1** is 100% in both places. The keys list is one list. **F1** shows it. The Shortcut HUD shows the tool you are holding. A photo persona that invented Fit as Ctrl+9 would be a studio you have to relearn every time you switch tabs.

Space is already spoken for in Motion, where Space plays. In Photo there is no clip to play. Space belongs to the hand, the way it belongs to the hand in Photoshop when you are retouching. The persona is the switch. You do not hold a modifier to tell the app which Space you meant. You are in Photo, so Space drags.

The view is not a develop slider. Panning and zooming cannot write a sidecar, cannot crop, and cannot become an undo step you have to peel off before you can undo a real exposure change. Crop is its own tool, **C**. Enter applies a crop drag. Esc cancels it and the status says the crop was cancelled. Navigation stays off that commit.

The preview underneath is bounded so the UI can stay live. The first display preview has a maximum edge of 1600 pixels. Zoom in and the full-resolution detail is prepared in the background and shown as the tiles you can see. The pan and the zoom have to keep working while those tiles arrive. A navigation gesture that waits for the full decode has failed the reason it exists.

### What landed

Hold **Space** and drag the photo. Release Space and the previous tool is yours again. Press **H** and the Hand tool stays down until you pick something else. **Z** is Zoom. **C** is Crop. **I** is the eyedropper. Those are the Photo tool keys. Hand is the one that matches a latched pan when you are going to be in the corner of the file for a while.

Middle-drag pans. Two-finger scroll pans. You can move through a frame with the wheel button held, or with the trackpad gesture you already use to move a page. Pinch zooms. **Ctrl+scroll** zooms. **Alt+scroll** zooms. Both modifier-scroll habits do the same job here, so the week you spent in the other app still works.

```
Ctrl+0    fit the photo
Ctrl+1    100%
```

**Ctrl+0** fits the photo in the view and clears the pan, so you are looking at the whole frame and not at whatever corner you had dragged into. **Ctrl+1** shows the photo at 100% and clears the pan the same way. You land on actual pixels, centered, which is the check for sharpening, noise, and whether Detail was a good idea.

**Ctrl++** and **Ctrl+-** are the keyboard zoom steps, the same chords as the rest of the studio. They scale the Photo view while you are in the persona. Scroll and pinch are there when the hand is already on the pointing device. The keys are there when it is not.

None of this writes `.omaphoto`. None of this moves a develop slider. The grade you set is the grade you set. The view is how you inspect it. Zoom in far enough and the full-resolution tiles fill in behind the magnifying glass while the preview stays responsive. You can grade a large RAW without the window locking up to prepare a private full-size bitmap you did not need yet.

### In the hand

Open a RAW. The viewer shows the preview, max edge 1600. Fit it if the window has you cropped by accident.

```
Ctrl+0
```

Hold Space. Drag until the eye, or the label, or the edge of the product is in the middle. Let go of Space. You are back on the tool you had, sliders still the sliders. If you want the hand to stay, press **H** and drag without holding Space. Pick another Photo tool when you are done panning. **Z** zooms. **C** crops. **I** samples. Release Space and you are back on the tool you were holding.

Zoom into the detail:

```
Ctrl+1
```

That is 100%, pan cleared. Drag again with Space, or middle-drag, or a two-finger scroll, to walk the frame at actual pixels. Pinch, or hold Ctrl and roll the wheel, or hold Alt and roll the wheel, to go further. The tiles for the full image prepare in the background. The view keeps moving while they land. You can see which parts are still the preview and which parts have caught up, because the detail arrives as visible tiles.

Press **Ctrl+0** when you need the whole picture again. The pan offset goes away with the fit. Decide about the grade from the whole frame, then come back to 100% before you trust Detail.

Crop is a different gesture. Press **C**, drag, Enter to commit, Esc to cancel. Fitting the view never commits a crop. A sidecar appears when you save settings, not when you drag the picture around.

### The edge

Navigation refuses to become an edit. Fit, 100%, pan, and zoom do not write a `.omaphoto`, do not change crop or rotation, and do not take a step on the Photo undo stack. The camera file stays as it was. The sliders stay as you left them.

Space in this persona refuses to play anything. There is no timeline under a photograph. Hold Space and you drag the view. Play is what Space does after you switch to Motion, on a clip that actually exists.

Press Ctrl+1, hold Space, and drag across the real pixels before you trust the grade.

## File and edit keys

### The habit

`Ctrl+Z` undoes. `Ctrl+Shift+Z` redos. `Ctrl+S` saves. `Ctrl+C`, `Ctrl+V`, `Ctrl+X` move objects through the clipboard. `Ctrl+A` selects everything you meant. `Ctrl+N` is a new document. `Ctrl+O` opens one. `Ctrl+D` duplicates, except in Photoshop, where `Ctrl+D` drops a selection and you duplicate with a different chord. You have both habits in the same hand. A Linux app that picks one and stays silent about the other will eat a marquee the first time you try to copy a layer, or it will clone an object the first time you try to drop ants.

Save As is `Ctrl+Shift+S` in your head even when a cheat sheet writes it as Shift+S next to a Ctrl that already covers Save. Place and Export need chords too, because those are file operations you do with the picture still open.

### The constraint

The key table is one function. Ctrl or the command modifier is the prefix. Shift picks the alternate on the same letter. The table cannot special-case "duplicate" differently in every persona without breaking the one keymap, and it cannot ignore the Photoshop habit on a pixel selection without training you to undo a clone you did not want.

So duplicate is the D chord, and Pixel adds one gate. If a pixel selection is up and the chord is Ctrl without Super, `Ctrl+D` clears the marching ants and does not clone. `Super+D` duplicates in place, including in Pixel, including while ants are up. The canvas menu prints **Duplicate** as Super+D so the label matches the chord that always means duplicate. The manual states both: Duplicate is Super+D, and a pixel selection clears on Ctrl+D.

Redo has two chords because both are already in people's hands: `Ctrl+Shift+Z` and `Ctrl+Y`. The manual lists the Shift chord. The key table accepts both.

File chords stay global. They still fire when an inspector field is focused. Edit chords do not. A text box keeps its letters. Paste while you are editing text inserts into the text.

### What landed

`Ctrl+Z` undoes. `Ctrl+Shift+Z` redos. `Ctrl+Y` redos as well.

`Ctrl+S` saves. `Ctrl+Shift+S` is Save As. The save dialog is the native file dialog, filtered to `.oma`, with the document name filled in.

`Ctrl+O` opens. The dialog's filters are All supported, omadesign, Photo settings, Camera RAW, Layered documents, Images, and Vector. `Ctrl+N` is a new tab. `Ctrl+Shift+P` places. The file loads in the background, then you click or drag to set it down. Enter places at the center. Escape cancels. Nested layers and masks travel together, and Undo removes the placement in one step.

`Ctrl+E` exports. The export dialog asks for a filename of the form `export` plus the suffix you are writing.

`Ctrl+A` selects all. In Photo, `Ctrl+A` selects all loaded photos in the library, which is the selection paste-adjustments uses. It does not select vector objects, because you are not in that tool set.

`Ctrl+C` copies. The status bar says `copied N object` or `copied N objects`. Objects copied inside Omadesign paste at their original positions, including onto another artboard. `Ctrl+X` copies and then deletes. The status bar says `cut` when the copy succeeded. `Ctrl+V` pastes. The status bar says `pasted` plus the count. Alt-drag clones under the pointer. The menu's duplicate and `Super+D` clone in place.

`Ctrl+V` also accepts a screenshot, an image copied from a browser, a copied image file, plain text, and SVG source or an SVG file. External content lands in the center of the visible canvas. Images become pixel layers. Text becomes an editable text layer. SVG becomes vectors. Command+V works through Omarchy's universal paste. Shift+Insert from the Alt+V clipboard-history picker pastes too. Paste during text edit inserts into that text.

`Ctrl+Alt+C` copies style. `Ctrl+Alt+V` pastes style. The status line says `style copied` when the copy lands.

In Pixel, with a marquee, lasso, or wand selection active, `Ctrl+D` clears it. `Super+D` duplicates the object in place. With no pixel selection, `Ctrl+D` duplicates, same as the other personas. In Design, Layout, and Motion, `Ctrl+D` duplicates.

Photo does not use the object copy, cut, paste, or duplicate chords. Copy adjustments is `Ctrl+Shift+C`. Paste adjustments is `Ctrl+Shift+V`. The status line on a copy says the adjustments were copied and that crop and rotation are excluded. Those two chords are how a look moves between pictures. They are documented with the Photo tools, and the key table only enables them in that persona.

### In the hand

Draw two rectangles. Press `Ctrl+A`. Press `Ctrl+C`. Read the status bar. Press `Ctrl+N`, then `Ctrl+V` in the new tab. The rectangles land at the same positions. Press `Ctrl+Z` if you want them gone in one step.

Press `Ctrl+Alt+C` on a styled shape. Select another. Press `Ctrl+Alt+V`. Fill, stroke, and effects that style copy carries move across. The geometry stays.

Press `Ctrl+S`. Pick a folder in the native dialog. The file is a `.oma`. Press `Ctrl+Shift+S` when you want a second file. The first path stays the first path.

Press `Ctrl+Shift+P`, choose a PNG or an SVG, and click the canvas. Escape if the ghost is wrong. Enter if you want the center. `Ctrl+Z` lifts the placement.

Switch to Pixel. Drag a marquee. Press `Ctrl+D`. The ants clear. The layer count does not change. Press `Super+D`. A duplicate appears in place. Press `Ctrl+D` with the ants already gone. That one duplicates.

Open Photo. Develop a frame. Press `Ctrl+Shift+C`. Select other thumbnails. Press `Ctrl+Shift+V`. Crop stays put unless you turn that category on. Press `Ctrl+S` there to write `.omaphoto` sidecars. That save is the photo save, not the poster save.

While a text layer is in edit mode, `Ctrl+V` types the clipboard into the paragraph. Escape finishes the edit. Then `Ctrl+V` pastes objects again.

### The edge

Once a pixel selection exists, `Ctrl+D` clears it and `Super+D` duplicates. Photo's clipboard chords are the adjustment pair, `Ctrl+Shift+C` and `Ctrl+Shift+V`. Paste into live text stays in the text. The file dialog is the desktop's dialog, and the chords above are what open it.

Press `Ctrl+S` when the picture is the one you mean to keep.

## Arrange and transform keys

### The habit

In Illustrator, `Ctrl+G` groups and `Ctrl+Shift+G` ungroups. The Pathfinder and the compound-path command are different keys, because a group is a container you can still open and a compound is one path with holes. Photoshop's `Ctrl+G` is a group too, once you are in layers. Affinity keeps the same split between the container and the boolean. Your hand already reaches for `Ctrl+]` and `Ctrl+Shift+]` to walk the stack, for `Ctrl+T` when you want the box with rotate and scale, and for a guides toggle you can hit without leaving the drag.

A cheat sheet that writes "Ctrl+G combine" collapses the container and the boolean into one chord. You will group when you meant to punch a hole, or you will look for Ungroup when the command that releases the hole is a different key. The labels have to say which job the chord does.

### The constraint

One key table, shared by the personas that edit objects. Photo does not group vectors, so those chords stay dark there. Everywhere else the table has to keep four operations on four chords. Group creates an editable layer group. Ungroup releases that group and does not run a boolean. Compound builds one compound shape. Release compound takes it apart. Each of those is one undo step, same as a nudge.

Guides and snapping are view state. They need chords you can hit during a drag without opening View. Snapping in particular has to invert for one gesture, because the classic move is: snapping is on, this one drop has to ignore it, then snapping returns when you let go. That temporary invert is hold Ctrl during the drag, and it has to be the same Ctrl you already trust from other apps, without sticking after the mouse comes up.

Free transform has to land you in the move tool with the handles live, and it has to leave text and shape parameters editable. A transform that outlines type on the way in is a different command, and that command already exists as Convert to path.

### What landed

The key table and the manual agree, and the canvas menu prints the same chords.

`Ctrl+G` groups. The menu says **Group**. The selection becomes an editable layer group. You can still double-click in to edit a child. `Ctrl+Shift+G` ungroups. The menu says **Ungroup**. Children come out. Paths are not combined.

`Ctrl+8` is compound. The menu says **Compound shape** and the item stays disabled until at least two objects are selected. `Ctrl+Shift+8` releases the compound. Shift on the number row can look like a punctuation key to the window system. The handler treats that physical 8 as 8, so the chord still resolves.

Combine and Release keep guide state, rotation, stacking, and gradient endpoints, in one undo step. They want either artwork or guides, with no mixture. Shape gradients follow the silhouette that results. Pathfinder, under **Object → Pathfinder**, is the other boolean set: Union, Subtract, Intersect, XOR, and Divide. Those are menu operations on two or more vectors on the same layer. Divide makes separate pieces and keeps holes. Each one is one undo. They are not the G chord.

Stacking: select a layer row and `Ctrl+]` moves it forward, `Ctrl+[` moves it backward, `Ctrl+Shift+]` sends it to the front of its group, `Ctrl+Shift+[` sends it to the back. The menu items **Bring to front** and **Send to back** call the Shift chords. Click an object on the canvas and the same shortcuts apply to object stacking. Each reorder undoes in one step. With no Ctrl, `[` and `]` belong to brush size. The modifier is the whole difference.

`Ctrl+T` is free transform. The selection goes to the Move tool with scale and rotate handles ready. It is also under Object. Live text stays live text. Shape parameters stay parameters. Flip is the right-click or Object menu, horizontal or vertical, and it follows the canvas axes after rotation. Live text has to be converted to a path before a flip will outline it. Undo restores the text.

`Ctrl+;` shows or hides ruler guides and object guides. `Ctrl+Shift+;` toggles snapping. Hold Ctrl during a drag to reverse snapping for that drag only. Release Ctrl and the toggle you saved comes back. View still has the individual snapping switches. Guides start locked. **View → Guides** has Lock all guides and a separate command that clears every lock. The ruler menu and **Object → Guides** offer lock, clear-all, and that same release.

`Ctrl+/` toggles the Shortcut HUD. `F1` opens the full list and closes it again.

### In the hand

Draw three rectangles. Press `Ctrl+G`. They move as a group. Double-click one and nudge it. Press `Ctrl+Shift+G`. Three objects again. Press `Ctrl+Z` and the group returns, because ungroup was one step.

Select two of them. Press `Ctrl+8`. One compound. Look at the holes if they overlap. Press `A` and the contours are still editable. Press `Ctrl+Shift+8`. Two shapes. Press `Ctrl+Z`. The compound returns in one step, gradient endpoints included if you had painted one.

Select a layer row. Press `Ctrl+Shift+]`. It sits at the front of its group. Press `Ctrl+[` and it steps back one. Press `Ctrl+Z` twice. You are where you started.

Press `Ctrl+T` on live text. Scale the box. The characters are still characters. Press Escape or click away, then `T` and double-click to keep typing. Press `Ctrl+T` on a rectangle and drag a corner. The rectangle's parameters survive.

Drag a guide out of the top ruler. Press `Ctrl+;`. It hides. Press the chord again. It shows. Press `Ctrl+Shift+;` and drag an object toward the guide. The snap line appears, or it does not, depending on the toggle. Hold Ctrl mid-drag. The snap decision flips for that gesture. Let go of Ctrl before you let go of the mouse if you want the saved mode back for the drop.

Press `Ctrl+/` if you want the HUD gone while you judge spacing. Press `F1` when you need the whole table, including the chords this page is about.

Right-click the canvas on a multi-selection if you would rather see the labels. Group, Ungroup, and Compound shape are printed there with the keys. Compound shape is grey until two objects are selected.

### The edge

`Ctrl+G` groups. It does not build a compound, and `Ctrl+Shift+G` does not release one. The boolean pair is `Ctrl+8` and `Ctrl+Shift+8`. Combine refuses a mixture of artwork and guides. Holding Ctrl reverses snapping for the drag under your hand and then gives the toggle back. Photo does not take the group chords. Brush size keeps the bare bracket keys.

Select two shapes and press `Ctrl+8` when you want one compound. Press `Ctrl+G` when you want a group.

## View and motion keys

### The habit

`Ctrl+0` fits the artboard. `Ctrl+1` is actual pixels. Plus zooms in, minus zooms out. Space grabs the canvas and pans, and you expect to keep holding it while the other hand clicks. A trackpad pinch does the same zoom. After Effects and Photoshop both use Space for the hand while you are looking, and both use Space again for play once a timeline has focus. You already live with that overload. The rule has to be obvious: which room has the playhead.

On a timeline, `K` or a diamond is how you plant a key. Home and End jump the clip. Delete on a selected key removes the key. Delete on the layer removes the animation and leaves the drawing, and a second Delete removes the object. You do not want the first Delete to throw away the poster.

### The constraint

The view chords are global enough to share, and they have to zoom the canvas, not the widget chrome. A Ctrl+plus that scaled the panels would wreck the HUD and the inspectors every time you framed a logo. Pinch, Ctrl-scroll, and Alt-scroll follow the same rule. The Zoom tool is allowed to be more specific, because you opted into it with `Z`.

Space cannot mean pan and play in the same persona at the same moment. Motion owns Space as a toggle. Every other persona owns Space as a held pan, including Photo. The key table stays one table. The persona decides which interpretation runs. That is the "one keymap" in practice: the same letters, gated by where you are, not a second scheme you memorize for the timeline.

Delete on the timeline has an order, because one key is doing three jobs. A selected diamond wins. If no diamond is selected and the object has animation, the animation goes and the drawing stays. If the object has no animation, Delete removes the object, which is the same Delete the rest of the studio uses. Motion does not get a private Delete that skips that order.

### What landed

`Ctrl+0` fits. `Ctrl+1` is 100 percent. `Ctrl++` zooms in. The key table treats `=` as plus, so the chord works without Shift on a US layout and with Shift where plus is the shifted key. `Ctrl+-` zooms out. Pinch the trackpad. Ctrl-scroll and Alt-scroll zoom the canvas. With the Zoom tool selected, two-finger scroll zooms too.

`Z` is the tool. Drag a box to fill the view with that box. Click zooms in one step. Alt-click zooms out one step. Ctrl-click fits the artboard. Ctrl+Shift-click fits the selection, or every object if nothing is selected.

`H` is the hand. Hold Space and the canvas pans, in Design, Layout, Pixel, and Photo, as long as you are not editing text. Photo also pans on middle-drag and two-finger scroll. `Ctrl+0` fits the photo. `Ctrl+1` shows it at 100 percent. The same zoom chords apply.

In Motion, Space does not pan. Space toggles playback. The status line says `play` or `pause`. `K` writes keys for X, Y, rotation, and scale on the selection, with ease-in-out on that command. Diamonds appear on the row. Drag a diamond to retime. Home sets the playhead to 0 and stops. End sets the playhead to the clip duration and stops. The loop control is the repeat icon, not a key.

Delete in Motion: click a diamond, press Delete, and that key goes. The status says `key removed`. The object stays, and any other keys stay. Click the object name on the timeline, or leave the diamonds unselected, and Delete removes the animation from the selected artwork. The status says `animation removed`. The drawing stays. Delete again and the object itself goes, because the animation is already gone and Delete falls through to the normal object delete.

Dragging a shape in Motion writes keys at the playhead. The first key at a time past zero also plants the rest pose at 0, so the motion starts from where you drew it. Presets in the inspector, Draw stroke, Pop in, Slam, Shake, Fill up, the slides, Fly, Zoom, Buzz, Fade in, become ordinary keys. Each application has its own Undo. Space previews. Incompatible, locked, hidden, and guide objects are skipped. Draw stroke wants a visible stroke. Fill up wants a closed shape with a fill.

The drawing is the rest pose. Motion does not rewrite it. PNG, JPEG, and static SVG export the rest pose. The clip lives in the `.oma`. **File → Export animated SVG…** writes transforms plus stroke and fill reveals. **File → Export Lottie…** writes Bodymovin 5 shape animation. Pixel layers, layer masks, and effects make the Lottie export fail with a clear error. Use animated SVG for those. **Import Lottie…** brings a shape-layer Lottie onto the timeline. It is a basic subset. The `.oma` keeps the full edit.

### In the hand

Open a poster in Design. Press `Ctrl+0`. The artboard fits. Press `Ctrl+1`. You are at 100 percent. Press `Ctrl++` twice and `Ctrl+-` once. Hold Space and drag. Let go. The tool you had, `V` or `P` or `T`, is still the tool. Space did not switch tools. It panned while it was down.

Press `Z`. Drag a box around the wordmark. Alt-click once to step out. Ctrl-click to fit the board again.

Switch to Motion. Select a rectangle. Press `K`. Diamonds show for position, rotation, and scale. Move the playhead and drag the rectangle. More keys. Press Space. The status says `play`. Press Space again. `pause`. Press Home. You are at the start and playback is stopped. Press End. You are at the end, stopped.

Click one diamond. Press Delete. That key is gone. The shape is still on the canvas. Press Delete with no diamond selected. The animation leaves. The shape remains at the rest pose. Press Delete once more if you meant to remove the shape too. Press `Ctrl+Z` to walk that backward one decision at a time.

Apply **Fade in** from the inspector. Press Space. The preset became keys. `Ctrl+Z` removes that application. Export Lottie from the File menu if the frame is vectors. If a pixel layer is in the way, the exporter tells you, and animated SVG is the path that keeps masks and effects.

### The edge

Space pans everywhere except Motion. In Motion it plays and pauses, and it will not drag the canvas. Delete removes the selected key first, the animation second, the object third. It does not skip to deleting the drawing while keys or an animation are still selected. Lottie export refuses pixel layers, masks, and effects. The view chords zoom the canvas. They leave the panels at the UI scale you set.

Switch to Motion and press Space. The playhead moves. Press `K` on the selection when you want keys at this frame.
