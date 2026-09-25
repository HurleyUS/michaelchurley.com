---
id: T017
title: Shortcut HUD
slug: omadesign-0-5-8-shortcut-hud
excerpt: "The Shortcut HUD sits on the bottom edge. The upper row follows the tool. The lower row lists letter keys. Hold Ctrl, Shift, or Alt to see those commands. Ctrl+/ toggles it."
publishedAt: 2026-09-06T10:29:01Z
tags: [omadesign, 0.5.8, shortcuts]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-shortcut-hud/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-shortcut-hud/og.png
---

## The habit

You learned Illustrator from a cheat sheet taped to the monitor, then from muscle memory that the sheet got wrong after a version change. Photoshop's tool hints live in the options bar, one sentence, easy to miss. Affinity shows a hint line that you stop reading once the keys are in your hand. The web apps put a question mark in the corner that opens a modal and steals the keystrokes you were about to use.

Modifiers are the part cheat sheets botch. Ctrl-S is save when Ctrl is down. It is not a tool. The moment you hold Ctrl, Shift, or Alt, the interesting commands change. A strip that keeps showing "P pen" while Ctrl is held is showing you the keys you are not about to press. The strip has to change with the hand, then change back when you let go.

## The constraint

One window, one canvas, keys that differ by persona. The hint cannot be a floating palette you dock, because a docked palette becomes one more layout to save and lose. It sits along the bottom. It has to stay out of the document. Reading it must not take keyboard focus, must not fire a command, and must not type into the text object you are editing.

Two rows fit the model the app already has. The upper row follows the current tool or the current edit. The lower row shows letter keys. Letter keys are how you pick tools: `V`, `P`, `R`, `T`, `B`. Modified keys are how you run commands: save, undo, group, free transform. Holding Ctrl, Shift, Alt, or a combination replaces the view with the commands that match that hold. Release, and the tool hints return. If the strip showed both worlds at once it would be the cheat sheet again, too small to read.

Text fields, menus, and drawing gestures need their own context. A HUD that advertises `Ctrl+S` while you are naming a layer is fine as information. A HUD that swallows the S and saves is a bug. The strip uses the same shortcut routing as the app. Focus decides who owns the key. The HUD does not become a second listener that races the canvas.

`Ctrl+/` toggles it because slash is not a tool key. **View → Shortcut HUD** is the same toggle for the mouse. `F1` stays the complete list. The strip is the local hint. F1 is the book. Config can control shortcut hints with the rest of the UI preferences, stored under `~/.config/omadesign`.

Personas change the upper row because they change the tool. Design's pen hints are not Pixel's brush hints. Photo and Motion get their own context. The document does not change when the hint changes.

## What landed

The Shortcut HUD sits along the bottom of the window. This is the behavior in 0.5.8, written up in the manual's first pages and in the shortcut table. It came in with the "little keys" pass and has been part of the studio since. 0.5.8 did not remove it and did not replace it with a modal.

The upper row follows the current tool or edit. Pick the pen and the path controls follow: angle constraints, handle controls, finishing the path. Pick Move and the select, scale, rotate, and clone hints follow. The lower row shows letter keys, the plain presses that choose tools.

Hold Ctrl, Shift, Alt, or a combination. The strip shows the matching commands, and the gestures you are holding light up. Command keycaps stay compact. With Ctrl held, **S · Save** appears under the Ctrl heading. Let go. The normal tool hints return. The routing is the app's routing. What you see is what that modifier will do in this focus, not a generic poster of every chord in the binary.

Text editing and menus get their own context. A focused field does not treat the strip as a place to type. Drawing gestures keep their hints. Reading the strip does not steal focus and does not trigger a command.

**Ctrl+/** or **View → Shortcut HUD** shows or hides the strip. **F1** opens the complete shortcut list. The keys block in the manual is that list in short form: tools, undo, group, compound, free transform, guides, snapping, zoom, and the Motion pair Space and `K`.

The strip stays a constant height while those modifier views swap. A drag in progress does not jump because you held Shift to constrain it. Overflow at small window sizes is the **+ more** hover, which is the next decision over. Here the decision is the two rows and the modifier swap. Hold a modifier. Read the row. Release. Draw. The command you read is the command the key runs. The act of reading did not run it.

## In the hand

Open any document in Design.

```sh
omadesign
```

Press `P`. Look at the bottom edge. The upper row is the pen. The lower row still offers the letter keys, so `V` and `T` are visible as ways out. Draw a point. Hold Shift. The row switches to the 45-degree constraint and the other Shift commands that apply. Place the point. Release Shift. The pen's normal hints are back. The path did not end because the HUD updated.

Hold Ctrl. Read **S · Save** under the Ctrl heading. Release Ctrl without pressing S. The document does not save from the act of looking. Press `Ctrl+S` when you actually want the write.

Hold Alt and drag a selected object with `V` if you want the clone the hint describes. The HUD lights the Alt gesture while you hold it. Release. The hint returns to the tool row.

```text
Ctrl+/
```

The strip hides. Draw again. The keys still work. `P` is still the pen. Toggle once more with `Ctrl+/`, or with **View → Shortcut HUD**. The strip returns on the bottom edge, same two-row layout.

Press `F1` when you need the chord that the strip is not showing, group or compound or the photo adjustment copy. Close that list. Focus is back on the work. The HUD did not keep the key.

Click into a text object with `T` and type. The HUD's context becomes the text edit. Characters you type go into the text. They do not activate the letter-key tool row underneath the caret. Switch to Pixel and press `B`. The upper row follows the brush. The `.oma` stays the `.oma`.

## The edge

The HUD will not take keyboard focus. It will not run a shortcut because you hovered a hint or because the row redrew. Hints are information. The canvas, the text object, the menu, or the field keeps the keys.

It will not list the entire shortcut table in the bottom strip. `F1` is the complete list. **+ more** is the overflow for a short window, not a second manual. If you need every export chord and every Photo batch chord, open F1.

Hiding the strip does not disable the shortcuts. `Ctrl+/` is a view toggle. `Ctrl+Z` still undoes. `Ctrl+G` still groups. People who already know the keys can put the strip away. People who do not can bring it back without opening a browser.

The row you see while Ctrl is held is the Ctrl command set for this focus. It is not a preview of a different app's cheat sheet. Illustrator's `M` for rectangle is not going to appear there. Rectangle in this studio is `R`, and the lower row is where that letter lives when no modifier is held.

Press `P`, then hold Shift, and read the upper row before you place the point. Release. `Ctrl+/` puts the strip away when you want the bottom edge back.

## HUD modifiers while drawing

### The habit

You hold Shift in the middle of a stroke. In Illustrator that constrains a line, a scale, or a brush. In Photoshop it constrains a marquee or paints a straight segment. In Affinity it does the same family of jobs. The options bar above the canvas often grows or swaps a control when the modifier goes down. If that bar changes height, the canvas moves. The point under your pen is no longer the point you aimed at. You finish the stroke, zoom in, and see the kink.

Small laptop windows make it worse. The hint line wraps onto a second row only while Alt is held, then unwraps when you let go. Every toggle is a vertical jump. People stop using modifiers, or they undock every panel until nothing can reflow, and then they have no hints at all.

Tooltips that are really buttons make the same class of mistake. The hint under the cursor is a focusable control. You tap a key to confirm the stroke and the tooltip eats it. Or a screen reader, or just Tab, lands in the hint strip and the next letter changes a setting you could not see.

The behavior you want is dull. The hint area is a fixed slot. Modifiers change the words inside the slot. The slot does not change size. Extra words wait under a hover. Nothing in the slot is a text field.

### The constraint

The Shortcut HUD is already the bottom strip: upper row for the tool, lower row for letter keys, modifier holds swap in the matching commands. That swap is exactly when a drag is in progress. Shift constrains pen points, handles, pencil and brush strokes, and object or artboard moves. Alt-drag clones. Ctrl during a drag reverses snapping if snapping is on, or the reverse of that toggle, then release returns you to the mode you had. Those holds are the gestures that must not move the canvas.

So the strip keeps one height through every modifier combination. The canvas stays anchored. A pen point you are placing does not slide because the hint row grew a second line of keycaps. Layout checks at 960 by 640 and at 1600 by 1000, hints on and off, exist to prove the canvas stays put as modifiers change. The design consequence is the same at any size you actually use: height is reserved up front.

A short window cannot show every hint at that fixed height. Growing the strip would break the rule you just paid for. **+ more** is a hover on the overflow. It does not reflow the canvas. It does not take keyboard focus. You point at it when you want the rest. You go back to the stroke when you are done.

Hints stay informational. Text edits, focused fields, menus, and drawing gestures own the keyboard. The HUD is not a widget in that chain. `F1` opens the complete list because the strip must not grow into one. Pen and brush keep their own hints inside that same fixed rectangle.

### What landed

As it stands in 0.5.8, the HUD keeps the same height while modifiers change, so a drag stays anchored to the same canvas. The manual states that next to the description of the two rows. Hover **+ more** to inspect overflow hints at smaller window sizes. Hints do not take keyboard focus. **F1** opens the complete shortcut list. **Ctrl+/** and **View → Shortcut HUD** still show or hide the whole strip. Hiding it is the other way to get the pixels back. It is not required for the height rule. The height rule holds while the strip is visible.

Overflow is a hover. **+ more** shows the hints that did not fit. Leave the hover and you are back to the fixed row. You do not click **+ more** to apply anything. There is nothing to apply.

F1 is a separate surface. It can take the focus a list needs. When you dismiss it, the drawing still has the keyboard, and the HUD is the short strip again. Config's shortcut-hint preference lives under `~/.config/omadesign`. The in-session toggle remains `Ctrl+/`.

Changing the words in the strip is not allowed to move the art under your hand.

### In the hand

Open a document, press `P`, and start a path. Do not finish it.

```text
P
```

Hold Shift halfway to the next point. The upper row replaces the idle pen hints with the Shift gestures, including the 45-degree constraint. Watch the point you already placed and the canvas edge. They stay. The strip does not grow taller to make room for the Shift keycaps. Click the point. Release Shift. The words change back. The path does not kink from a layout shift, because there was no layout shift.

Hold Ctrl during a drag that should ignore snapping, or restore it, depending on whether snapping is currently on. `Ctrl+Shift+;` is the toggle. A hold of Ctrl during the drag flips that choice temporarily. Release Ctrl and the snap mode returns. While you hold it, the HUD shows the Ctrl commands at the same height. The artboard does not bump.

Alt-drag a copy with Move.

```text
V
```

Select the object. Hold Alt and drag. The hint lights the clone gesture. The strip stays one height. You get a duplicate when you release the drag, which is the tool's behavior, not the HUD applying a click.

Shrink the window until the bottom row cannot fit every letter. **+ more** appears. Hover it. Read the overflow. Move the pointer back to the canvas and continue the path. Do not press a key "into" the overflow. The overflow does not want the key. Press `F1` if the hint you needed is not in the overflow either.

```text
F1
```

The full list opens. Find Group, `Ctrl+G`, or free transform, `Ctrl+T`, or whatever the strip was right to omit. Close the list. Press the chord yourself. The command runs because you pressed it, not because the list or the strip captured it.

Toggle the strip off in the middle of a pen path with `Ctrl+/`. Finish the path with Enter or by clicking the first point. The modifiers still constrain. The HUD was never the thing applying the constraint. It was the thing telling you the constraint exists, without moving the page.

Switch to Pixel, press `B`, paint, and hold Shift to constrain the stroke. Same height rule. The brush anchor stays where your hand put it.

### The edge

**+ more** will not grow the strip, and it will not reflow the canvas to show every hint. A small window keeps the reserved height. The rest is a hover. If the hover is not enough, `F1` is the list. The strip refuses to become the list.

The HUD will not take a keypress away from a text edit, a field, a menu, or the drawing. Focus loss and modal ownership were part of the same work. A dialog has the keys while it is up. The hint row does not accept them in the background and fire Save.

Hiding hints does not turn modifiers off. Shift still constrains. Alt still clones. Ctrl still flips snapping for the length of the drag. The edge of this feature is chrome stability and focus. It is not a second shortcut engine.

A drag that is already on the canvas stays anchored when the modifier row changes. If the page moves, it is because you panned, zoomed, or scrolled. It is not because you held Shift.

Hold Shift in the middle of a pen stroke and watch the canvas stay still. Press `F1` when the fixed row is not the whole story.
