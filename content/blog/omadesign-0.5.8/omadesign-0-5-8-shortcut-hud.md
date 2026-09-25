---
id: T017
title: Shortcut HUD
slug: omadesign-0-5-8-shortcut-hud
excerpt: "The Shortcut HUD sits on the bottom edge. The upper row follows the tool. The lower row lists letter keys. Hold Ctrl, Shift, or Alt to see those commands. Ctrl+/ toggles it."
publishedAt: 2026-09-06T10:29:01Z
tags: [omadesign, 0.0.1-alpha, shortcuts]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-shortcut-hud/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-shortcut-hud/og.png
---

## The habit

You learned Illustrator from a cheat sheet taped to the monitor, then from muscle memory, which the sheet got wrong after a version change. Photoshop's tool hints live in the options bar as one easy-to-miss sentence. Affinity shows a hint line you stop reading once the keys are familiar. Web apps put a question mark in the corner that opens a modal and captures the keystrokes you were about to use.

Cheat sheets usually get modifiers wrong. Ctrl+S is save only while Ctrl is down, and S on its own is a tool. The moment you hold Ctrl, Shift or Alt, the useful commands change. A strip that keeps showing "P pen" while Ctrl is held shows keys you aren't about to press. The strip has to change with your hand and change back when you let go.

Holding a modifier often happens in the middle of a stroke. In Illustrator, Shift constrains a line, a scale or a brush. In Photoshop it constrains a marquee or paints a straight segment, and Affinity uses it for the same kinds of jobs. The options bar above the canvas often grows or swaps a control when the modifier goes down. If that bar changes height, the canvas moves, and the point under your pen is no longer the point you aimed at. You finish the stroke, zoom in and see the kink.

Small laptop windows make this worse. The hint line wraps onto a second row only while Alt is held, then unwraps when you let go, so every toggle is a vertical jump. People stop using modifiers, or undock every panel until nothing can reflow, and then they have no hints at all.

Tooltips that are really buttons cause the same kind of problem. The hint under the cursor is a focusable control, so a key you tap to confirm the stroke goes to the tooltip instead. Or a screen reader, or just Tab, lands in the hint strip and the next letter changes a setting you couldn't see.

I wanted the hint area to be a fixed slot. Modifiers change the words inside it, and the slot keeps its size. Extra words wait behind a hover, and nothing in the slot is a text field.

## The constraint

There is one window and one canvas, and the keys differ by persona. The hint can't be a floating palette you dock, because a docked palette becomes one more layout to save and lose. It sits along the bottom and stays out of the document. Reading it must not take keyboard focus, fire a command or type into the text object you are editing.

Two rows fit the model the app already has. The upper row follows the current tool or edit. The lower row shows letter keys. Letter keys pick tools (`V`, `P`, `R`, `T`, `B`), and modified keys run commands like save, undo, group and free transform. Holding Ctrl, Shift, Alt or a combination replaces the view with the commands that match that modifier. Release it and the tool hints return. If the strip showed both sets at once, it would be a cheat sheet again, too small to read.

Text fields, menus and drawing gestures need their own context. A HUD that shows `Ctrl+S` while you are naming a layer is fine as information, but a HUD that captured the S and saved would be a bug. The strip uses the app's own shortcut routing, and focus decides which part of the app gets the key. The HUD never becomes a second listener competing with the canvas.

`Ctrl+/` toggles the strip because slash isn't a tool key. **View > Shortcut HUD** is the same toggle for the mouse. `F1` opens the complete list. The strip gives local hints and F1 is the full reference. Config can control shortcut hints along with the other UI preferences, stored under `~/.config/omadesign`.

Personas change the upper row because they change the tool. Design's pen hints differ from Pixel's brush hints, and Photo and Motion have their own context. The document doesn't change when the hint changes.

The modifier swap happens exactly when a drag is in progress. Shift constrains pen points, handles, pencil and brush strokes, and object or artboard moves. Alt-drag clones. Ctrl during a drag reverses snapping, whichever way the toggle is set, and releasing Ctrl returns you to the mode you had. Those holds are the gestures that must not move the canvas.

So the strip keeps one height through every modifier combination, and the canvas stays anchored. A pen point you are placing doesn't slide because the hint row grew a second line of keycaps. Layout checks at 960 by 640 and at 1600 by 1000, with hints on and off, confirm the canvas stays put as modifiers change. The same holds at any size you actually use, because the height is reserved up front.

A short window can't show every hint at that fixed height, and growing the strip would break the rule. **+ more** is a hover on the overflow. It doesn't reflow the canvas or take keyboard focus. You point at it when you want the rest and go back to the stroke when you are done.

Hints stay informational. Text edits, focused fields, menus and drawing gestures own the keyboard, and the HUD isn't part of that chain. `F1` opens the complete list so the strip never has to grow into one. Pen and brush keep their own hints inside the same fixed rectangle.

## What landed

The Shortcut HUD sits along the bottom of the window. It came in with the "little keys" pass and has been part of the studio since, described in the manual's first pages and in the shortcut table. It is still there in 0.5.8, and it hasn't been replaced with a modal.

The upper row follows the current tool or edit. Pick the pen and it shows the path controls: angle constraints, handle controls and finishing the path. Pick Move and it shows the select, scale, rotate and clone hints. The lower row shows letter keys, the plain presses that choose tools.

Hold Ctrl, Shift, Alt or a combination, and the strip shows the matching commands, with the gestures you are holding lit up. Command keycaps stay compact. With Ctrl held, **S · Save** appears under the Ctrl heading. Let go and the normal tool hints return. Because the strip uses the app's routing, it shows what that modifier will do with the current focus. It never shows a generic list of every combination in the binary.

Text editing and menus have their own context. A focused field doesn't treat the strip as a place to type, and drawing gestures keep their hints. Reading the strip never steals focus or triggers a command.

**Ctrl+/** or **View > Shortcut HUD** shows or hides the strip, and **F1** opens the complete shortcut list. The keys block in the manual is that list in short form: tools, undo, group, compound, free transform, guides, snapping, zoom, and the Motion pair Space and `K`.

As of 0.5.8, the HUD keeps the same height while modifiers change, so a drag stays anchored to the same canvas. The manual says so next to the description of the two rows. A drag in progress doesn't jump because you held Shift to constrain it. Hiding the strip is another way to get the pixels back, but the height rule doesn't depend on it. It holds while the strip is visible.

At smaller window sizes, hover **+ more** to see the overflow hints. Leave the hover and you are back to the fixed row. There is nothing to click in **+ more**, because there is nothing to apply.

F1 is a separate panel, and it can take the focus a list needs. When you close it, the drawing has the keyboard again and the HUD is back to the short strip. Config's shortcut-hint preference lives under `~/.config/omadesign`, and the in-session toggle is `Ctrl+/`.

Changing the words in the strip never moves the art under your hand, and reading a command never runs it.

## In the hand

Open any document in Design.

```sh
omadesign
```

Press `P` and look at the bottom edge. The upper row shows the pen, and the lower row still shows the letter keys, so `V` and `T` are visible as ways out.

```text
P
```

Start a path and don't finish it. Hold Shift halfway to the next point. The upper row replaces the idle pen hints with the Shift gestures, including the 45-degree constraint. Watch the point you already placed and the edge of the canvas. They stay where they are, because the strip doesn't grow taller to fit the Shift keycaps. Click the point and release Shift. The words change back, and the path has no kink because nothing shifted. The path also doesn't end just because the HUD updated.

Hold Ctrl and read **S · Save** under the Ctrl heading. Release Ctrl without pressing S. The document doesn't save because you looked. Press `Ctrl+S` when you actually want to save.

Hold Ctrl during a drag to reverse snapping for that drag. `Ctrl+Shift+;` is the toggle, and holding Ctrl during the drag flips it temporarily. Release Ctrl and the snap mode returns. While you hold it, the HUD shows the Ctrl commands at the same height, and the artboard doesn't move.

Now Alt-drag a copy with Move.

```text
V
```

Select the object, hold Alt and drag. The HUD lights up the clone gesture while you hold Alt, and the strip stays the same height. When you release, you get a duplicate. The Move tool made it, and the HUD only described it. The hint then returns to the tool row.

Shrink the window until the bottom row can't fit every letter, and **+ more** appears. Hover it and read the overflow. Move the pointer back to the canvas and continue the path. Don't try to press a key "into" the overflow, because it doesn't accept keys. If the hint you need isn't in the overflow either, press `F1`.

```text
F1
```

The full list opens. Find Group (`Ctrl+G`), free transform (`Ctrl+T`), the photo adjustment copy, or whatever the strip rightly left out. Close the list, and focus goes back to your work. Press the shortcut yourself. The command runs because you pressed it. Neither the list nor the strip captured the key.

```text
Ctrl+/
```

That hides the strip, even in the middle of a pen path. Keep drawing. The keys still work, `P` is still the pen, and modifiers still constrain, because the HUD only tells you the constraint exists. Finish the path with Enter or by clicking the first point. Press `Ctrl+/` again, or use **View > Shortcut HUD**, and the strip comes back on the bottom edge with the same two rows.

Click into a text object with `T` and type. The HUD switches to the text-edit context, and the characters go into the text without triggering the letter-key tools. Switch to Pixel, press `B` and paint. The upper row follows the brush. Hold Shift to constrain the stroke, and the same height rule applies, so the brush stays where your hand put it. The `.oma` is unchanged by any of this.

## The edge

The HUD never takes keyboard focus. It won't run a shortcut because you hovered a hint or because the row redrew. The canvas, the text object, the menu or the field keeps the keys. Focus loss and modal ownership were handled in the same work. While a dialog is up, it has the keys, and the hint row can't accept them in the background and fire Save.

The bottom strip doesn't list the entire shortcut table. **+ more** is only the overflow for a short window, and it won't grow the strip or reflow the canvas. For every export shortcut and every Photo batch shortcut, open `F1`.

Hiding the strip doesn't disable shortcuts or modifiers. `Ctrl+/` is only a view toggle. `Ctrl+Z` still undoes and `Ctrl+G` still groups. Shift still constrains, Alt still clones, and Ctrl still flips snapping for the length of the drag. People who know the keys can put the strip away, and people who don't can bring it back without opening a browser. This feature is about stable chrome and focus. It isn't a second shortcut engine.

The row you see while holding Ctrl is the Ctrl command set for the current focus. It won't show another app's shortcuts. Illustrator's `M` for rectangle won't appear there. Rectangle in this studio is `R`, and that letter lives in the lower row when no modifier is held.

A drag already on the canvas stays anchored when the modifier row changes. If the page moves, it is because you panned, zoomed or scrolled. Holding Shift never moves it.
