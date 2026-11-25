---
id: T018
title: HUD modifiers while drawing
slug: omadesign-0-5-8-hud-modifiers-while-drawing
excerpt: "The Shortcut HUD keeps a constant height when modifiers change, so a drag does not jump. Hover + more for overflow. Hints never take the keyboard. F1 is the full list."
tags: [omadesign, 0.5.8, shortcuts]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-hud-modifiers-while-drawing/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-hud-modifiers-while-drawing/og.png
---

## The habit

You hold Shift in the middle of a stroke. In Illustrator that constrains a line, a scale, or a brush. In Photoshop it constrains a marquee or paints a straight segment. In Affinity it does the same family of jobs. The options bar above the canvas often grows or swaps a control when the modifier goes down. If that bar changes height, the canvas moves. The point under your pen is no longer the point you aimed at. You finish the stroke, zoom in, and see the kink.

Small laptop windows make it worse. The hint line wraps onto a second row only while Alt is held, then unwraps when you let go. Every toggle is a vertical jump. People stop using modifiers, or they undock every panel until nothing can reflow, and then they have no hints at all.

Tooltips that are really buttons make the same class of mistake. The hint under the cursor is a focusable control. You tap a key to confirm the stroke and the tooltip eats it. Or a screen reader, or just Tab, lands in the hint strip and the next letter changes a setting you could not see.

The behavior you want is dull. The hint area is a fixed slot. Modifiers change the words inside the slot. The slot does not change size. Extra words wait under a hover. Nothing in the slot is a text field.

## The constraint

The Shortcut HUD is already the bottom strip: upper row for the tool, lower row for letter keys, modifier holds swap in the matching commands. That swap is exactly when a drag is in progress. Shift constrains pen points, handles, pencil and brush strokes, and object or artboard moves. Alt-drag clones. Ctrl during a drag reverses snapping if snapping is on, or the reverse of that toggle, then release returns you to the mode you had. Those holds are the gestures that must not move the canvas.

So the strip keeps one height through every modifier combination. The canvas stays anchored. A pen point you are placing does not slide because the hint row grew a second line of keycaps. Layout checks at 960 by 640 and at 1600 by 1000, hints on and off, exist to prove the canvas stays put as modifiers change. The design consequence is the same at any size you actually use: height is reserved up front.

A short window cannot show every hint at that fixed height. Growing the strip would break the rule you just paid for. **+ more** is a hover on the overflow. It does not reflow the canvas. It does not take keyboard focus. You point at it when you want the rest. You go back to the stroke when you are done.

Hints stay informational. Text edits, focused fields, menus, and drawing gestures own the keyboard. The HUD is not a widget in that chain. `F1` opens the complete list because the strip must not grow into one. Pen and brush keep their own hints inside that same fixed rectangle.

## What landed

As it stands in 0.5.8, the HUD keeps the same height while modifiers change, so a drag stays anchored to the same canvas. The manual states that next to the description of the two rows. Hover **+ more** to inspect overflow hints at smaller window sizes. Hints do not take keyboard focus. **F1** opens the complete shortcut list. **Ctrl+/** and **View → Shortcut HUD** still show or hide the whole strip. Hiding it is the other way to get the pixels back. It is not required for the height rule. The height rule holds while the strip is visible.

Overflow is a hover. **+ more** shows the hints that did not fit. Leave the hover and you are back to the fixed row. You do not click **+ more** to apply anything. There is nothing to apply.

F1 is a separate surface. It can take the focus a list needs. When you dismiss it, the drawing still has the keyboard, and the HUD is the short strip again. Config's shortcut-hint preference lives under `~/.config/omadesign`. The in-session toggle remains `Ctrl+/`.

Changing the words in the strip is not allowed to move the art under your hand.

## In the hand

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

## The edge

**+ more** will not grow the strip, and it will not reflow the canvas to show every hint. A small window keeps the reserved height. The rest is a hover. If the hover is not enough, `F1` is the list. The strip refuses to become the list.

The HUD will not take a keypress away from a text edit, a field, a menu, or the drawing. Focus loss and modal ownership were part of the same work. A dialog has the keys while it is up. The hint row does not accept them in the background and fire Save.

Hiding hints does not turn modifiers off. Shift still constrains. Alt still clones. Ctrl still flips snapping for the length of the drag. The edge of this feature is chrome stability and focus. It is not a second shortcut engine.

A drag that is already on the canvas stays anchored when the modifier row changes. If the page moves, it is because you panned, zoomed, or scrolled. It is not because you held Shift.

Hold Shift in the middle of a pen stroke and watch the canvas stay still. Press `F1` when the fixed row is not the whole story.
