---
id: T061
title: Brush eraser fill
slug: omadesign-0-5-8-brush-eraser-fill
excerpt: Brush is B. Size is the bracket keys. Hardness is Shift plus the brackets. Eraser E, Fill K, Clone J, Smudge M. Alt-click sets the clone source.
tags: [omadesign, 0.5.8, pixel]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-brush-eraser-fill/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-brush-eraser-fill/og.png
---

## The habit

The left hand already knows Photoshop's paint keys. `B` for brush. `[` and `]` for size. Shift with those brackets for hardness. `E` erases. `J` clones, and Alt-click, or Option-click, sets the source. Fill is the bucket. Smudge is the finger. You do not look down. You tap the key, you drag, you tap the bracket twice because the dab was too big, you keep going.

Affinity Photo mapped a lot of this the same way, because the hand is older than the app. The failure is a brush that lives in a floating panel you have to click before the size changes, or a clone source that resets every stroke, or an eraser that appears to paint and writes nothing. You have used that eraser. The cursor moves. The pixels stay. You waste ten minutes deciding the layer is wrong, and you are right, but the tool should have said so.

On Linux the keys have to be these keys. Ctrl is Ctrl. The bracket keys are the bracket keys. A studio that renamed them for taste would make every retoucher relearn a hand they have had since the late nineties.

## The constraint

Pixel tools share the document with vectors, so the keys have to be persona-aware where a letter is already taken. `M` in Pixel is Smudge. Shift+M in Pixel is the marquee. Shift+J is the healing brush, which is the next tool over from Clone. `J` alone is Clone. The chord is the disambiguation. You do not get a second brush panel to resolve the collision.

The stroke has to hit a real pixel buffer. The eraser used to draw into an empty preview and look busy. It now erases image pixels. That is the kind of fix you only notice because the hole is actually in the layer. Undo, Esc, a tool change, and a tab change all have to finish or cancel an in-flight stroke so you do not leave unrecorded dabs. One undo restores the stroke you committed. A half-applied scribble is not a state the file can save.

Size and hardness are tool state, changed from the keyboard, bounded so a runaway key-repeat cannot make a 10,000 pixel brush. The bracket keys step size by 2 pixels, from 1 to 256. Shift plus the brackets steps hardness by 0.08, from 0 to 1. Curly braces hit the same shortcuts, because that is how the key event arrives with Shift on many layouts. The numbers live in the Brush studio too, if you want to drag them. The keys are for when you are looking at the canvas.

Clone's source is an Alt-click on the active image. The source stays where you put it until you Alt-click again. Fill uses the current paint target: the pixel layer, or the mask if you have switched the inspector to Mask. There is no cloud brush library required to make a dab. Brushes you add later through plugins are extra. These five tools are in the binary.

## What landed

Brush `B`. Eraser `E`. Fill `K`. Clone `J`, Alt-click to set the source. Smudge `M`. Those are the manual's keys, and they match the shortcut table. Healing is Shift+J, separate, because it blends. This set is the direct tools: paint, remove, flood, copy samples, push color.

`[` and `]` change brush size. Shift+`[` and Shift+`]` change hardness. The HUD at the bottom of the window shows the active tool's gestures, and holding Shift swaps that row so you can see the hardness chord while your finger is on it. The strip does not take keyboard focus. `Ctrl+/` hides it. `F1` opens the full list.

Color is the Color studio: saturation and brightness, hue, alpha, hex, swatches, recent colors. `X` swaps fill and stroke. `D` restores default fill and stroke. Open a chip and you get Current and Previous. Click Previous to return to the color from before this edit. Eight-digit hex is `#RRGGBBAA`. The brush uses that color. On a mask, the inspector offers Hide and Reveal, which set the brush to black or white, because black hides and white reveals. That is mask painting. On pixels, the chip is the paint.

A marching-ant selection limits brush, fill, clone, heal, and smudge to the inside of the selection. Delete clears the selected pixels. Esc drops the ants. If you wanted to paint the whole layer, drop the selection first. `Ctrl+D` in Pixel clears a pixel selection. `Super+D` duplicates. Those two chords are easy to mix. In Pixel, Ctrl+D is deselect, not duplicate.

The eraser hides on a mask. On pixels it removes pixels. Fill floods the current paint target. If the target is wrong, switch Pixels or Artwork versus Mask in the inspector before you hit `K`. Eyedropper `I` samples a color and shows it in the sidebar.

If the layer is locked, hidden, or not a pixel layer, the tool tells you. "Choose an unlocked pixel layer to paint." "Choose an unlocked pixel layer to smudge." "Choose an unlocked pixel layer to clone." Add the layer, or select the one you meant. The tool will not write the paper.

## In the hand

Switch to Pixel. Select the pixel layer. Press `B`. Tap `]` until the dab matches the pore or the shadow. Hold Shift and tap `[` if the edge is too hard. Paint. Release. `Ctrl+Z` if the stroke is wrong. The whole stroke comes back.

```
B          brush
[  ]       size, 2 px steps, 1–256
Shift+[ ]  hardness, 0.08 steps, 0–1
E          eraser
K          fill
J          clone
Alt-click  clone source
M          smudge
```

Press `J`. Alt-click a clean patch of the wall. Paint over the socket you need gone. The samples come from that click. Alt-click again if the texture should change. Press `E` and remove a stray dab. Press `K` to fill a selection you made with the marquee or the wand. Press `M` and push a highlight along a curve. Each tool is a key. The layer stays the layer you selected.

Swap color with the chip, or press `I` and click the canvas. Press `X` if you had filled the stroke chip and you meant the fill. Press `D` when you want the defaults back and you do not remember what they were.

Watch the status line the first time on a new document. If it asks for a pixel layer, Layers → ··· → New pixel layer, then paint. Lock the layer when you return to type. A later `B` complains, and the finished paint stays finished.

The Shortcut HUD is the reminder while you learn the chords you already knew in Photoshop. After a day you will not read it. The keys will be the keys.

## The edge

These tools refuse to paint a missing, hidden, or locked pixel layer, and the eraser refuses to spend the stroke on an empty preview. You get a status line, or you get a real change in the buffer. Undo returns the stroke you committed.

Clone refuses to guess a source. Alt-click sets it. Until that click, you do not have a source. Fill and brush follow the inspector's paint target. If Mask is selected, you are painting the mask. Switch back to Pixels before you expect color on the image.
