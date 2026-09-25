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

If you have used Adobe or Affinity tools, you already know the letters. `V` selects. `A` is direct selection or the node tool, depending on which app taught you. `P` is the pen, `T` is type, `B` is the brush, `I` is the eyedropper, `Z` is zoom, and `H` is the hand. Illustrator, Photoshop, and Affinity don't agree on every letter, but they agree on enough that a new tool with an unusual letter costs people time. `R` for rectangle and `O` for ellipse come from Illustrator. `J` for clone and `Shift+J` for the healing brush come from Photoshop. You want those letters on day one, plus a strip on screen that shows the rest without opening a PDF.

You also know the letters change meaning between contexts. Photoshop's `J` does nothing useful in Illustrator. The letter can stay the same, but the tool it calls has to fit the persona you are in.

Zoom has its own habits. `Z` is zoom. You drag a box around the detail you need to see and the view becomes that box. You click to step in and Alt-click to step out. Illustrator, Affinity, and Photoshop all do this, and have since the tool had a magnifying glass icon. Fit is the other half. When you get lost at 1600% and need the page back, Ctrl-click with the zoom tool fits the artboard. A modified click fits the selection when you are working on one mark on a huge artboard. With nothing selected, that same modified click fits every object, so a stray path out on the pasteboard is included and you can see why the fit looked wrong. `Ctrl+0` fits, `Ctrl+1` is actual pixels, and plus and minus zoom in and out.

The scroll wheel is where apps get it wrong. You scroll to move down the page and the whole window, panels included, changes size. Or you pinch the trackpad and the sidebars grow until the canvas is a stamp in the middle. Zoom belongs to the canvas. The panels, tool strip, and inspector are the desk, the canvas is the paper, and only the paper should zoom. Scroll-wheel zoom has never been consistent between apps either. Some want Ctrl and the wheel, some want Alt, and a trackpad wants a pinch. You may use all three in the same week, moving between a mouse at the desk and a laptop on the couch. Middle-drag is another habit, from apps that treat the wheel button as the hand. Two-finger scroll pans in some tools and zooms in others, and you find out which by losing your place in the picture.

Panning is Space, held, in every drawing app you already use, and `H` is the hand you can leave selected. You hold Space while a shape tool is active, drag the paper, release Space, and you are back on the rectangle. If Space stayed stuck as the hand, the next drag would pan by accident. After Effects and Photoshop both use Space for the hand while you are looking, and for play once a timeline has focus. You already live with that double meaning, so the rule has to be obvious: it depends on which persona has the playhead.

Photo work adds a few more habits. A grade can't be trusted until you have seen the eyelashes at full size. Photoshop taught this long ago: hold Space, the cursor becomes the hand, drag, let go, and you are back on your tool. `Ctrl+1` is actual pixels and `Ctrl+0` fits the window. Affinity Photo uses the same pair, and the Hand tool is still `H` when you want it to stay selected. Lightroom's develop view is the same idea with different controls: click the loupe, drag, fit, 1:1. In Omadesign, Photo has another reason to keep navigation cheap. The first thing you see is a preview, and full resolution appears when you zoom in. You have to be able to pan and zoom while that loads, or a big RAW becomes a frozen window with a spinner.

The file and edit chords are just as ingrained. `Ctrl+Z` undoes and `Ctrl+Shift+Z` redoes. `Ctrl+S` saves. `Ctrl+C`, `Ctrl+V`, and `Ctrl+X` move objects through the clipboard. `Ctrl+A` selects everything, `Ctrl+N` makes a new document, and `Ctrl+O` opens one. `Ctrl+D` duplicates, except in Photoshop, where `Ctrl+D` drops a selection and duplicating uses a different chord. Many people have both habits. A Linux app that picks one and says nothing about the other will either drop a marquee the first time you try to duplicate a layer, or duplicate an object the first time you try to drop the marching ants. Save As is `Ctrl+Shift+S` in most people's heads, even when a cheat sheet writes it as Shift+S next to a Ctrl that already means Save. Place and Export need chords too, because you use them with the picture still open.

Arranging has habits as well. In Illustrator, `Ctrl+G` groups and `Ctrl+Shift+G` ungroups. Pathfinder and the compound path command use different keys, because a group is a container you can still open and a compound is one path with holes. Photoshop's `Ctrl+G` groups layers too. Affinity keeps the same split between container and boolean. You reach for `Ctrl+]` and `Ctrl+Shift+]` to move through the stack, for `Ctrl+T` when you want the box with rotate and scale, and for a guides toggle you can press mid-drag. A cheat sheet that says "Ctrl+G combine" merges the container and the boolean into one chord. You then group when you meant to punch a hole, or look for Ungroup when releasing the hole uses a different key. The labels have to say which job each chord does.

On a timeline, `K` or a diamond plants a key, and Home and End jump to the ends of the clip. Delete on a selected key removes the key. Delete on a layer removes the animation and leaves the drawing, and a second Delete removes the object. You never want the first Delete to throw away the poster.

## The constraint

Omadesign is one binary with five personas and one key table. Design, Layout, Pixel, Photo, and Motion share the process and the `.oma`, except that Photo's develop session keeps its own history beside the camera file. If each persona had a private keymap, your habits would reset every time you switched personas for the next ten minutes of work. So the letters stay the same, and the table ignores a letter that has no tool in the current persona. `S` doesn't create a star in a persona without one, and Photo doesn't turn `P` into a pen over a RAW file.

The shortcut reminder has to stay out of the way. An overlay that takes keyboard focus would steal the next letter from the tool you just asked about. The HUD is a strip, its hints are informational only, and text editing and menus get their own context. `F1` opens the full list when the strip isn't enough.

The studio is one window, shared by document tabs, the tool strip, the layers, the inspector, and the canvas. A zoom that scaled egui's interface would resize the very controls you need to zoom back out. So Ctrl with the scroll wheel, Alt with the scroll wheel, `Ctrl++`, `Ctrl+-`, and a trackpad pinch all zoom the canvas and never the panels. A `Ctrl++` that scaled the panels would wreck the HUD and the inspectors every time you framed a logo. The keys list states this explicitly because the mistake is so common. The Zoom tool can be more specific, because you chose it by pressing `Z`.

Fit has two jobs, and they can't share one click. The artboard is the page and the selection is the work. Ctrl-click with `Z` fits the artboard. Ctrl+Shift-click fits the selection, or every object when nothing is selected. `Ctrl+0` is Fit in the shortcut list, and `Ctrl+1` is 100%, actual size, which is the only reliable view for judging type. Those chords work while you are on other tools, because making someone switch to `Z` just to reach 100% is how the wrong size ships.

Space can't mean both pan and play in the same persona. Motion uses Space as a play toggle, and every other persona, including Photo, uses it as a held pan. The key table stays one table, and the persona decides which meaning applies. The hand key has to stay a pan everywhere, because Space changes meaning by persona, so you learn `H` once and it still moves the paper while you animate. In Photo there is no clip to play, so Space belongs to the hand, as it does in Photoshop when you retouch. You never hold a modifier to tell the app which Space you meant.

Photo doesn't get its own zoom language either. `Ctrl+0` fits a Design artboard and fits a photo, and `Ctrl+1` is 100% in both. The keys list is one list, `F1` shows it, and the Shortcut HUD shows the tool you are holding. If Photo used some other chord for Fit, you would have to relearn the studio every time you switched tabs. Photo pans with Space or Hand, middle-drag, and two-finger scroll, and zooms with pinch, Ctrl+scroll, and Alt+scroll. The Design page uses the artboard as its fit target, and Photo uses the photograph. The fingers are the same, and the target is whatever is in front of you.

The Photo view is not a develop control. Panning and zooming can't write a sidecar, crop, or add an undo step you would have to undo before reaching a real exposure change. Crop is its own tool, `C`. Enter applies a crop drag, and Esc cancels it with a status message saying the crop was cancelled. Navigation never commits anything. The preview is also size-limited so the interface stays responsive. The first display preview has a maximum edge of 1600 pixels. When you zoom in, full-resolution detail is prepared in the background and shown as tiles for the area you can see, and panning and zooming keep working while those tiles arrive. A navigation gesture that waited for the full decode would defeat its own purpose.

One `.oma` has one view. Fit and 100% get you back to a known magnification, and the artwork's history is still where you undo edits.

The key table is one function. Ctrl, or the command modifier, is the prefix, and Shift picks the alternate on the same letter. The table can't treat duplicate differently in every persona without breaking the single keymap, and it can't ignore the Photoshop habit on a pixel selection without training you to undo duplicates you didn't want. So duplicate is the D chord, and Pixel adds one condition. If a pixel selection is active and the chord is Ctrl without Super, `Ctrl+D` clears the marching ants and doesn't duplicate. `Super+D` always duplicates in place, including in Pixel while ants are active. The canvas menu labels **Duplicate** as Super+D so the label matches the chord that always duplicates. The manual states both: Duplicate is Super+D, and a pixel selection clears on Ctrl+D.

Redo has two chords because people already use both: `Ctrl+Shift+Z` and `Ctrl+Y`. The manual lists the Shift chord, and the key table accepts both.

File chords are global, so they still work when an inspector field has focus. Edit chords aren't global. A text box keeps its letters, and pasting while editing text inserts into the text.

The object-editing personas share one key table, and Photo doesn't group vectors, so those chords do nothing there. Everywhere else, the table keeps four operations on four chords. Group creates an editable layer group. Ungroup releases that group and never runs a boolean. Compound builds one compound shape, and Release compound takes it apart. Each is one undo step, like a nudge.

Guides and snapping are view settings, so they need chords you can press during a drag without opening the View menu. Snapping in particular has to invert for a single gesture. The common case is that snapping is on, one drop needs to ignore it, and snapping should come back when you let go. That temporary invert is holding Ctrl during the drag. It uses the same Ctrl people know from other apps, and it doesn't stick after you release the mouse.

Free transform has to put you in the Move tool with live handles while keeping text and shape parameters editable. A transform that outlined type would be a different command, and that command already exists as Convert to path.

Delete on the timeline follows an order, because one key does three jobs. A selected diamond comes first. If no diamond is selected and the object has animation, the animation goes and the drawing stays. If the object has no animation, Delete removes the object, the same Delete the rest of the studio uses. Motion doesn't get a private Delete that skips that order.

## What landed

### Tool letters

These are the tool letters, with no modifier, from the manual and the key table:

`V` Move. Click selects, drag moves, eight handles scale, and the handle above the box rotates. Shift-click adds or removes. Alt-drag clones.

`A` Node. Points and Bézier handles. Shift-click adds a node to the selection. Alt-click toggles corner and smooth. Alt-drag breaks a handle. Delete removes selected points.

`P` Pen. Click for a corner, click-drag for a smooth point. Shift constrains to 45 degrees. Enter or double-click finishes an open path. Escape drops the last point, then cancels. Click the first point to close.

`N` Pencil. `R` Rectangle. `O` Ellipse. `Y` Polygon. `S` Star, in Design and Layout. `L` Line. Shift constrains. Corner radius, sides, and inner radius are in Transform.

`T` Type. Click, type, press Enter for a new line, and press Escape or click away to finish. Double-click existing type to edit it.

`G` Gradient, dragged across a selected shape. The active Fill or Stroke row in Appearance decides which paint you are editing, and stops you already made stay.

`I` Eyedropper. `U` Trace, raster to vector on the active pixel layer. `B` Brush. `E` Eraser. `K` Fill. `J` Clone, with Alt-click to set the source. `Shift+J` Healing brush in Pixel: Alt-click clean texture, then paint. `M` Smudge in Pixel. `C` Crop. `W` Wand. `H` Hand. `Z` Zoom.

A few more letters live in the same table. `F` is Frame in Layout. `Q` is the lasso. `Shift+O` is the Artboard tool in Design and the elliptical marquee in Pixel. `Shift+M` is the rectangular marquee in Pixel. `Shift+A` toggles auto layout on a Layout selection. Photo's letter tools are Hand, Zoom, Crop, and Eyedropper, and the other letters do nothing there.

`[` and `]` change brush size, and `Shift+[` and `Shift+]` change hardness. Those are plain keys. With Ctrl, the brackets control stacking instead.

The Shortcut HUD sits at the bottom of the window. The upper row follows the current tool and the lower row shows letter keys. Hold Ctrl, Shift, Alt, or a combination, and the strip shows the matching commands. It keeps a fixed height so the canvas doesn't jump during a drag. Hover **+ more** when the window is too narrow for every hint. `Ctrl+/` or **View > Shortcut HUD** shows or hides it. `F1` opens the full shortcut list, and the same key closes it.

While you are editing text, letters go into the text. A focused inspector field takes all shortcuts except the global ones. Save, open, and the HUD toggle still work there, and tool letters don't.

### Zoom, fit, and pan

Press `Z` and drag a box, and the view becomes that area. Click to zoom in one step and Alt-click to zoom out one step. Ctrl-click fits the artboard. Ctrl+Shift-click fits the selection, or every object if nothing is selected.

Pinch the trackpad to zoom the canvas. `Ctrl++` zooms in and `Ctrl+-` zooms out. The key table treats `=` as plus, so the chord works without Shift on a US layout and with Shift where plus is the shifted key. Ctrl+scroll and Alt+scroll zoom the canvas, and with the Zoom tool selected, two-finger scroll zooms too. That is the trackpad version of "I am on the zoom tool, so the gesture zooms." Pinch zooms the canvas even when you aren't on `Z`. None of these resize the interface.

Press `H`, or hold Space, and drag to pan. This works in Design, Layout, Pixel, and Photo, as long as you aren't editing text. When you release Space, you are back on the previous tool. Leave `H` selected when you are only navigating.

`Ctrl+0` fits and `Ctrl+1` is 100%. You can use them, along with the zoom chords, while a shape tool is active, so you never have to put the rectangle down to see it larger. The stacking chords and the rest of the Ctrl chords keep their own meanings.

In Motion, Space plays, and Home and End jump. The hand tool is still how you pan when play has the spacebar. If you try to pan and a clip starts instead, you are in Motion, so press `H` and drag.

Zooming doesn't change snapping or guides. You see more or less of the same canvas, and `Ctrl+;` still shows or hides guides. A zoomed-in node edit uses the same Node tool with the points on the artwork. You are closer, in the same document.

In Photo, hold **Space** and drag the photo, then release Space to get your previous tool back. Press **H** and the Hand tool stays selected until you pick something else, which suits spending a while in one corner of the file. The Photo tool keys are **H**, **Z** (Zoom), **C** (Crop), and **I** (the eyedropper). Middle-drag pans, and so does two-finger scroll, so you can move through a frame with the wheel button held or with the trackpad gesture you use to scroll a page. Pinch, **Ctrl+scroll**, and **Alt+scroll** all zoom. Both modifier-scroll habits work here, so habits from other apps carry over.

```
Ctrl+0    fit the photo
Ctrl+1    100%
```

In Photo, **Ctrl+0** fits the photo in the view and clears the pan, so you see the whole frame instead of whatever corner you had dragged to. **Ctrl+1** shows the photo at 100% and clears the pan the same way, so you land on actual pixels, centered. That is the view for checking sharpening, noise, and whether Detail was a good idea. **Ctrl++** and **Ctrl+-** are the keyboard zoom steps, the same chords as the rest of the studio, and they scale the Photo view while you are in the persona. Scroll and pinch are for when your hand is on the pointing device, and the keys are for when it isn't.

None of this writes `.omaphoto` or moves a develop slider. The view only lets you inspect the grade you set. Zoom in far enough and the full-resolution tiles fill in behind the magnifier while the preview stays responsive, so you can grade a large RAW without the window locking up to build a full-size bitmap you didn't need yet.

### File and edit chords

`Ctrl+Z` undoes. `Ctrl+Shift+Z` redoes, and so does `Ctrl+Y`.

`Ctrl+S` saves, and `Ctrl+Shift+S` is Save As. The save dialog is the native file dialog, filtered to `.oma`, with the document name filled in.

`Ctrl+O` opens. The dialog's filters are All supported, omadesign, Photo settings, Camera RAW, Layered documents, Images, and Vector. `Ctrl+N` opens a new tab. `Ctrl+Shift+P` places: the file loads in the background, then you click or drag to set it down. Enter places at the center and Escape cancels. Nested layers and masks travel together, and Undo removes the placement in one step.

`Ctrl+E` exports. The export dialog suggests a filename of `export` plus the suffix of the format you are writing.

`Ctrl+A` selects all. In Photo, `Ctrl+A` selects all loaded photos in the library, which is the selection paste adjustments uses. It doesn't select vector objects there, because Photo doesn't have those tools.

`Ctrl+C` copies, and the status bar says `copied N object` or `copied N objects`. Objects copied inside Omadesign paste at their original positions, including onto another artboard. `Ctrl+X` copies and then deletes, and the status bar says `cut` when the copy succeeded. `Ctrl+V` pastes, and the status bar says `pasted` plus the count. Alt-drag clones under the pointer. The menu's Duplicate and `Super+D` clone in place.

`Ctrl+V` also accepts a screenshot, an image copied from a browser, a copied image file, plain text, and SVG source or an SVG file. External content lands in the center of the visible canvas. Images become pixel layers, text becomes an editable text layer, and SVG becomes vectors. Command+V works through Omarchy's universal paste, and Shift+Insert from the Alt+V clipboard history picker pastes too. Pasting during a text edit inserts into that text.

`Ctrl+Alt+C` copies style and `Ctrl+Alt+V` pastes style. The status line says `style copied` when the copy works.

In Pixel, with a marquee, lasso, or wand selection active, `Ctrl+D` clears it and `Super+D` duplicates the object in place. With no pixel selection, `Ctrl+D` duplicates, as in the other personas. In Design, Layout, and Motion, `Ctrl+D` duplicates.

Photo doesn't use the object copy, cut, paste, or duplicate chords. Copy adjustments is `Ctrl+Shift+C` and Paste adjustments is `Ctrl+Shift+V`. After a copy, the status line says the adjustments were copied and that crop and rotation are excluded. Those two chords move a look between pictures. They are documented with the Photo tools, and the key table only enables them in that persona.

### Arrange, transform, and guides

The key table and the manual agree, and the canvas menu shows the same chords.

`Ctrl+G` groups, and the menu says **Group**. The selection becomes an editable layer group, and you can still double-click in to edit a child. `Ctrl+Shift+G` ungroups, and the menu says **Ungroup**. The children come out, and their paths aren't combined.

`Ctrl+8` makes a compound. The menu says **Compound shape**, and the item stays disabled until at least two objects are selected. `Ctrl+Shift+8` releases the compound. With Shift held, the window system can report the number-row 8 as a punctuation key, so the handler treats that physical key as 8 and the chord still works.

Combine and Release keep guide state, rotation, stacking, and gradient endpoints, in one undo step. They require either all artwork or all guides, never a mix. Shape gradients follow the resulting silhouette. Pathfinder, under **Object > Pathfinder**, is the separate boolean set: Union, Subtract, Intersect, XOR, and Divide. Those are menu operations on two or more vectors on the same layer. Divide makes separate pieces and keeps holes. Each is one undo, and none of them use the G chord.

For stacking, select a layer row. `Ctrl+]` moves it forward, `Ctrl+[` moves it backward, `Ctrl+Shift+]` sends it to the front of its group, and `Ctrl+Shift+[` sends it to the back. The menu items **Bring to front** and **Send to back** run the Shift chords. Click an object on the canvas and the same shortcuts apply to object stacking. Each reorder undoes in one step. Without Ctrl, `[` and `]` control brush size, so the modifier is the only difference.

`Ctrl+T` is free transform, also under Object. The selection goes to the Move tool with scale and rotate handles ready. Live text stays live text and shape parameters stay parameters. Flip is in the right-click and Object menus, horizontal or vertical, and it follows the canvas axes after rotation. Live text has to be converted to a path before a flip will outline it, and Undo restores the text.

`Ctrl+;` shows or hides ruler guides and object guides. `Ctrl+Shift+;` toggles snapping. Hold Ctrl during a drag to reverse snapping for that drag only, and release Ctrl to get your saved setting back. The View menu still has the individual snapping switches. Guides start locked. **View > Guides** has Lock all guides and a separate command that clears every lock. The ruler menu and **Object > Guides** offer lock, clear all, and the same unlock command.

`Ctrl+/` toggles the Shortcut HUD. `F1` opens the full list and closes it again.

### Motion keys

In Motion, Space doesn't pan. It toggles playback, and the status line says `play` or `pause`. `K` writes keys for X, Y, rotation, and scale on the selection, with ease-in-out. Diamonds appear on the row, and you drag a diamond to retime it. Home sets the playhead to 0 and stops. End sets the playhead to the clip duration and stops. Looping uses the repeat icon and has no key.

Delete in Motion: click a diamond and press Delete, and that key goes. The status says `key removed`, and the object and its other keys stay. Click the object name on the timeline, or leave the diamonds unselected, and Delete removes the animation from the selected artwork. The status says `animation removed`, and the drawing stays. Press Delete again and the object itself goes, because with the animation gone, Delete falls through to the normal object delete.

Dragging a shape in Motion writes keys at the playhead. The first key at a time past zero also plants the rest pose at 0, so the motion starts from where you drew the shape. Presets in the inspector (Draw stroke, Pop in, Slam, Shake, Fill up, the slides, Fly, Zoom, Buzz, Fade in) become ordinary keys, and each application has its own Undo. Space previews. Incompatible, locked, hidden, and guide objects are skipped. Draw stroke needs a visible stroke, and Fill up needs a closed shape with a fill.

The drawing is the rest pose, and Motion never changes it. PNG, JPEG, and static SVG export the rest pose, and the clip lives in the `.oma`. **File > Export animated SVG…** writes transforms plus stroke and fill reveals. **File > Export Lottie…** writes Bodymovin 5 shape animation. Pixel layers, layer masks, and effects make the Lottie export fail with a clear error, so use animated SVG for those. **Import Lottie…** brings a shape-layer Lottie onto the timeline, as a basic subset. The `.oma` keeps the full edit.

## In the hand

Open a blank vector document, which starts in the Design persona. Press `R` and drag a rectangle. Press `P` and draw a short path. Press `T`, click, and type. Press `V` and move the rectangle. Press `A` and drag a point. That is the first minute the manual describes.

Press `B`. If the document only has vectors, add a pixel layer before you expect paint. Press `[` twice and watch the brush shrink. Press `E` and erase, then `I` and sample.

Switch to Layout and press `F` to drag a frame. `R` and `T` still work, and `S` draws a star here. Switch to Pixel. Press `J`, Alt-click a source, and clone. Press `Shift+J` and heal, `M` and smudge, `W` and drag the wand, and `Q` to draw a lasso.

Switch to Photo and open a picture. Press `C` and crop, then try `I`, `Z`, and `H`. Press `P` and nothing happens. The letter is reserved, and this persona has no pen.

Press `F1` whenever a letter doesn't do what you expect, because the list is the same table. Press `Ctrl+/` if the strip is in the way, and again to bring it back. Hold Shift while the strip is visible to read the constrained gestures before you drag.

Now zoom. Open a poster in Design. Press `Ctrl+0` and the artboard fits. Press `Ctrl+1` and you are at 100%, which is the view to use before you call a body size done. Press `Ctrl++` twice and `Ctrl+-` once. Press `Z` and drag a box around a wordmark, and the view fills with it. Click once for one more step. Alt-click until the poster is back to a size you can judge, or Ctrl-click to fit the artboard in one move.

Select one icon, press `Z`, and Ctrl+Shift-click. The view fits that icon. Deselect and Ctrl+Shift-click again, and the view fits every object, including the one you left off the board. That is how you find it.

Hold Space while you are on the pen and drag the canvas until the next point is in view. Release Space and click the point. The pen was the tool the whole time, and the spacebar only borrowed the hand. Try it with `V`, `P`, or `T` selected. Space never switches tools. It only pans while held.

On a trackpad, pinch, and the canvas zooms while the layers panel stays the same width. If you are on `Z`, a two-finger scroll zooms as well.

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

The scroll chords are Ctrl+scroll and Alt+scroll. They zoom the canvas, and so does pinch. The panels stay put, which is the point of aiming the gesture at the paper.

In Photo, open a RAW. The viewer shows the preview, with a maximum edge of 1600 pixels. If the window has you cropped by accident, fit it.

```
Ctrl+0
```

Hold Space and drag until the eye, the label, or the edge of the product is in the middle. Let go of Space, and you are back on your previous tool with the sliders unchanged. If you want the hand to stay, press **H** and drag without holding Space, then pick another Photo tool when you are done: **Z** zooms, **C** crops, and **I** samples.

Zoom into the detail:

```
Ctrl+1
```

That is 100% with the pan cleared. Drag with Space, middle-drag, or two-finger scroll to move around the frame at actual pixels. Pinch, or hold Ctrl or Alt and roll the wheel, to go further. The full-image tiles prepare in the background and the view keeps moving while they arrive. You can see which parts are still the preview and which have caught up, because the detail arrives as visible tiles.

Press **Ctrl+0** when you need the whole picture again, and the pan offset resets with the fit. Judge the grade from the whole frame, then come back to 100% before you trust Detail.

Crop is a separate gesture. Press **C**, drag, press Enter to commit, or Esc to cancel. Fitting the view never commits a crop, and a sidecar only appears when you save settings.

For the file and edit chords, draw two rectangles, press `Ctrl+A`, then `Ctrl+C`, and read the status bar. Press `Ctrl+N`, then `Ctrl+V` in the new tab, and the rectangles land at the same positions. Press `Ctrl+Z` to remove them in one step.

Press `Ctrl+Alt+C` on a styled shape, select another, and press `Ctrl+Alt+V`. The fill, stroke, and effects that style copy carries move across, and the geometry stays.

Press `Ctrl+S` and pick a folder in the native dialog, and the file is a `.oma`. Press `Ctrl+Shift+S` when you want a second file. The first file keeps its path.

Press `Ctrl+Shift+P`, choose a PNG or an SVG, and click the canvas. Press Escape if the preview is wrong, or Enter to place at the center. `Ctrl+Z` removes the placement.

Switch to Pixel and drag a marquee. Press `Ctrl+D` and the ants clear, with no new layer. Press `Super+D` and a duplicate appears in place. Press `Ctrl+D` again with the ants already gone, and that one duplicates.

Open Photo and develop a frame. Press `Ctrl+Shift+C`, select other thumbnails, and press `Ctrl+Shift+V`. Crop stays put unless you turn that category on. Pressing `Ctrl+S` there writes `.omaphoto` sidecars, which is the photo save, separate from the poster save.

While a text layer is in edit mode, `Ctrl+V` types the clipboard into the paragraph. Press Escape to finish the edit, and `Ctrl+V` pastes objects again.

To try arranging, draw three rectangles and press `Ctrl+G`. They move as a group. Double-click one and nudge it. Press `Ctrl+Shift+G` and you have three objects again. Press `Ctrl+Z` and the group returns, because ungrouping was one step.

Select two of them and press `Ctrl+8` to make one compound, and look at the holes if they overlap. Press `A` and the contours are still editable. Press `Ctrl+Shift+8` to get two shapes back, then `Ctrl+Z`, and the compound returns in one step, with gradient endpoints included if you had painted a gradient.

Select a layer row and press `Ctrl+Shift+]`, and it moves to the front of its group. Press `Ctrl+[` and it steps back one. Press `Ctrl+Z` twice and you are back where you started.

Press `Ctrl+T` on live text and scale the box. The characters are still characters. Press Escape or click away, then press `T` and double-click to keep typing. Press `Ctrl+T` on a rectangle and drag a corner, and the rectangle's parameters survive.

Drag a guide out of the top ruler. Press `Ctrl+;` and it hides, and press it again to show it. Press `Ctrl+Shift+;` and drag an object toward the guide, and the snap line appears or not depending on the toggle. Hold Ctrl mid-drag and the snap setting flips for that gesture. Let go of Ctrl before you release the mouse if you want the saved setting back for the drop.

Press `Ctrl+/` to hide the HUD while you judge spacing, and `F1` when you need the whole table. If you prefer to see labels, right-click the canvas with several objects selected. Group, Ungroup, and Compound shape are listed there with their keys, and Compound shape is grayed out until two objects are selected.

For Motion, switch personas and select a rectangle. Press `K`, and diamonds appear for position, rotation, and scale. Move the playhead and drag the rectangle to add more keys. Press Space and the status says `play`, and press it again for `pause`. Press Home to go to the start with playback stopped, and End to go to the end, stopped.

Click one diamond and press Delete. That key is gone and the shape is still on the canvas. Press Delete with no diamond selected, and the animation goes while the shape stays at the rest pose. Press Delete once more if you meant to remove the shape too. `Ctrl+Z` steps back through those deletes one at a time.

Apply **Fade in** from the inspector and press Space. The preset became keys, and `Ctrl+Z` removes that application. If the frame is all vectors, export Lottie from the File menu. If a pixel layer is in the way, the exporter tells you, and animated SVG is the export that keeps masks and effects.

## The edge

A letter the current persona doesn't implement never falls through to a different tool. Photo keeps four tool letters. Star stays in Design and Layout. Smudge and the healing brush stay in Pixel. Text editing takes the letter until you leave the text. The HUD never takes focus, so reading a hint never steals the next key.

Zoom never touches the interface. Panels, the tool strip, and the inspector keep the UI scale you set, while the canvas responds to `Ctrl++`, `Ctrl+-`, Ctrl+scroll, Alt+scroll, pinch, and the `Z` tool. This binding exists to prevent the bug where a wheel gesture resizes the whole window.

Space pans everywhere except Motion. In Motion it plays and pauses the clip and never drags the canvas, and `H` is the pan that always stays a pan. In Photo, Space never plays anything, because there is no timeline under a photograph.

Navigation is never an edit. Fit, 100%, pan, and zoom don't write a `.omaphoto`, change crop or rotation, or add a step to the Photo undo stack. The camera file stays as it was and the sliders stay where you left them.

Once a pixel selection exists, `Ctrl+D` clears it and `Super+D` duplicates. Photo's clipboard chords are the adjustment pair, `Ctrl+Shift+C` and `Ctrl+Shift+V`. A paste into live text stays in the text. The file dialog is the desktop's own dialog, and the chords above open it.

`Ctrl+G` groups. It never builds a compound, and `Ctrl+Shift+G` never releases one. The boolean pair is `Ctrl+8` and `Ctrl+Shift+8`, and Combine rejects a mix of artwork and guides. Holding Ctrl reverses snapping only for the drag in progress. Photo ignores the group chords, and brush size keeps the bare bracket keys.

In Motion, Delete removes the selected key first, then the animation, then the object. It never skips ahead to deleting the drawing while a key or an animation is still there. Lottie export rejects pixel layers, masks, and effects.
