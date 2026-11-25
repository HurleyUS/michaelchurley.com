---
id: T132
title: File and edit keys
slug: omadesign-0-5-8-file-and-edit-keys
excerpt: Undo is Ctrl+Z. Redo is Ctrl+Shift+Z, and Ctrl+Y also redos. Save, open, new, place, and export sit on the usual chords. Pixel Ctrl+D clears a selection. Super+D duplicates.
tags: [omadesign, 0.5.8, shortcuts]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-file-and-edit-keys/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-file-and-edit-keys/og.png
---

## The habit

`Ctrl+Z` undoes. `Ctrl+Shift+Z` redos. `Ctrl+S` saves. `Ctrl+C`, `Ctrl+V`, `Ctrl+X` move objects through the clipboard. `Ctrl+A` selects everything you meant. `Ctrl+N` is a new document. `Ctrl+O` opens one. `Ctrl+D` duplicates, except in Photoshop, where `Ctrl+D` drops a selection and you duplicate with a different chord. You have both habits in the same hand. A Linux app that picks one and stays silent about the other will eat a marquee the first time you try to copy a layer, or it will clone an object the first time you try to drop ants.

Save As is `Ctrl+Shift+S` in your head even when a cheat sheet writes it as Shift+S next to a Ctrl that already covers Save. Place and Export need chords too, because those are file operations you do with the picture still open.

## The constraint

The key table is one function. Ctrl or the command modifier is the prefix. Shift picks the alternate on the same letter. The table cannot special-case "duplicate" differently in every persona without breaking the one keymap, and it cannot ignore the Photoshop habit on a pixel selection without training you to undo a clone you did not want.

So duplicate is the D chord, and Pixel adds one gate. If a pixel selection is up and the chord is Ctrl without Super, `Ctrl+D` clears the marching ants and does not clone. `Super+D` duplicates in place, including in Pixel, including while ants are up. The canvas menu prints **Duplicate** as Super+D so the label matches the chord that always means duplicate. The manual states both: Duplicate is Super+D, and a pixel selection clears on Ctrl+D.

Redo has two chords because both are already in people's hands: `Ctrl+Shift+Z` and `Ctrl+Y`. The manual lists the Shift chord. The key table accepts both.

File chords stay global. They still fire when an inspector field is focused. Edit chords do not. A text box keeps its letters. Paste while you are editing text inserts into the text.

## What landed

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

## In the hand

Draw two rectangles. Press `Ctrl+A`. Press `Ctrl+C`. Read the status bar. Press `Ctrl+N`, then `Ctrl+V` in the new tab. The rectangles land at the same positions. Press `Ctrl+Z` if you want them gone in one step.

Press `Ctrl+Alt+C` on a styled shape. Select another. Press `Ctrl+Alt+V`. Fill, stroke, and effects that style copy carries move across. The geometry stays.

Press `Ctrl+S`. Pick a folder in the native dialog. The file is a `.oma`. Press `Ctrl+Shift+S` when you want a second file. The first path stays the first path.

Press `Ctrl+Shift+P`, choose a PNG or an SVG, and click the canvas. Escape if the ghost is wrong. Enter if you want the center. `Ctrl+Z` lifts the placement.

Switch to Pixel. Drag a marquee. Press `Ctrl+D`. The ants clear. The layer count does not change. Press `Super+D`. A duplicate appears in place. Press `Ctrl+D` with the ants already gone. That one duplicates.

Open Photo. Develop a frame. Press `Ctrl+Shift+C`. Select other thumbnails. Press `Ctrl+Shift+V`. Crop stays put unless you turn that category on. Press `Ctrl+S` there to write `.omaphoto` sidecars. That save is the photo save, not the poster save.

While a text layer is in edit mode, `Ctrl+V` types the clipboard into the paragraph. Escape finishes the edit. Then `Ctrl+V` pastes objects again.

## The edge

Once a pixel selection exists, `Ctrl+D` clears it and `Super+D` duplicates. Photo's clipboard chords are the adjustment pair, `Ctrl+Shift+C` and `Ctrl+Shift+V`. Paste into live text stays in the text. The file dialog is the desktop's dialog, and the chords above are what open it.

Press `Ctrl+S` when the picture is the one you mean to keep.
