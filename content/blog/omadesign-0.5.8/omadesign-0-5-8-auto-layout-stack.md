---
id: T055
title: Auto-layout stack
slug: omadesign-0-5-8-auto-layout-stack
excerpt: Select a frame and turn on Stack children. The inspector checkbox reads Arrange children automatically. Direction, gap, padding, and layer order do the packing.
publishedAt: 2026-09-15T23:35:15Z
tags: [omadesign, 0.5.0, layout]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-auto-layout-stack/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-auto-layout-stack/og.png
---

## The habit

You have a column of cards. In Figma you turn on auto layout, pick a vertical stack, set the gap and the padding, and the cards pack in the order they already have in the layer list. Drag one card above another in the list and the column reflows. You don't reposition the third card by hand after you change the gap, because the frame controls the layout and the children just fill it.

Illustrator never built that habit into the drawing tools. You align once, distribute once, and the next time the headline wraps you nudge again. Affinity keeps its constraints and stacks closer to its layout tools. The habit I designed for here is the Figma one: select the parent, turn stacking on, set gap and padding, and let layer order be the reading order.

Stretch is part of that habit. A button in a row should grow with the row. A sidebar should stay a fixed width while the content pane takes the rest. You say which axis packs and which children fill.

## The constraint

The stack has to be a property of the frame inside the `.oma`. With a separate design-system file, the illustration, the screen, and the spacing rules would drift apart the first afternoon someone edits type in one of them. Omadesign already has one layer tree, and layer order already decides how you send an object backward and forward: select the row and press `Ctrl+[` or `Ctrl+]`, and add Shift to send it to the back or front of its group. Each reorder is one undo. The stack reads that same order. A second order stored only in a panel would guarantee that the panel and the Layers studio disagree.

So Stack children means this frame arranges its in-flow children in layer order, vertically or horizontally, with a gap and padding. The manual calls it Stack children, and the checkbox reads "Arrange children automatically." They are the same switch.

The packing runs in the document, on resize and on edit, and you see the gap on the canvas. Undo reverts one change to the layout property. A plain number is enough for any value. Layout color variables can feed a value later, but a column doesn't need them.

The key is Shift+A, and it only works in the Layout persona. If a frame is selected, Shift+A turns the stack on. If you have objects selected and no frame, Shift+A wraps them in a frame and turns the stack on in the same action. The status line says "Auto layout · resize the frame to see it respond." The inspector button labeled Auto layout runs the same command, and its tooltip reads "Shift+A · wrap and arrange selected objects."

## What landed

Select a frame. In the inspector, under Layout, turn on Arrange children automatically, and the stack controls open.

The flow setting is Stack, Wrap, or Grid. Stack is the single line or column the manual describes. Wrap continues onto another line. Grid uses a column count from 1 to 24. For Stack you pick Horizontal or Vertical. Grid hides that pair and shows Columns instead. Wrap and Grid add a second gap, labeled Rows, for the space between lines. The main Gap control runs from 0 to 1000. Padding is four numbers (top, right, bottom, left), each from 0 to 1000.

Align is Start, Center, End, or Stretch. Setting Align to Stretch, or setting a child's sizing to Fill, makes that child take the full cross size of the line. Distribute is Start, Center, End, Space between, Space around, or Space evenly. The stack packs in-flow children from those values in layer order, regardless of the order you clicked them in.

On a child, Earlier and Later move it within that order, and Detach from frame pulls it out of the parent. Absolute position, a checkbox on the child under Position in frame, takes that one child out of the flow. The stack skips it and places the others. When the parent is resized, the absolute child follows its pin rules (Min, Max, Stretch, Center, and Scale). Leave Absolute position off when the child should sit in the gap with its siblings.

Clip content is a separate setting. A stack does not clip unless you turn the checkbox on to hide overflow. Lock aspect ratio is also separate and freezes the frame's proportions when you resize.

The empty Layout inspector still lists Shift+A in the hint line, next to F and T. You can draw frames with `F`, nest them, and then stack the parent. Or you can select loose objects and let Shift+A make the frame and the stack together.

Once the stack is on, resize the frame as the status line suggests. The children repack inside the padding. Change the gap and they repack again. Reorder a layer and they repack in the new order. `Ctrl+Z` reverts the last of those edits.

The stack leaves hidden and absolute children out of its flow measurement. A hidden child does not leave an empty gap, and when you show it again it returns to its place in the order.

## In the hand

Draw a frame with `F`, large enough for a column. Draw three smaller frames or three text objects inside it, or use Wrap if they already exist outside. Select the outer frame and press Shift+A.

```
Shift+A
```

The inspector shows Arrange children automatically checked. Set Vertical, set Gap to 16, and set padding to 24 on all four sides, or set each side separately if the top needs more room. Drag the outer frame's bottom handle. The column stays packed, the gap stays 16, and the padding holds.

In the Layers studio, drag the middle child above the first and the column updates. You can also select the child's row and press `Ctrl+]` or `Ctrl+[`, adding Shift to move it to the front or back of the group. Each reorder is one undo. After you click artwork on the canvas, those shortcuts go back to object stacking, which is the same order the stack reads.

Select a child that should ignore the column, such as a close mark in the corner, and turn on Absolute position. The other children close up. Set that child's Horizontal pin to Max and its Vertical pin to Min to keep it in the top-right with a fixed inset. Those pins are the constraint controls, and the stack no longer positions that child.

Switch the flow to Wrap if the children should break onto a second line when the frame gets narrow, and set Rows to the gap between lines. Switch it to Grid and set Columns if you are laying out a tile of cards. Gap stays the column gap.

Save the `.oma` and reopen it. The checkbox is still on, the gap is still 16, and the order is still the layer order. None of the stack's settings live in a second tool.

The Auto layout button at the top of the inspector runs the command without the key when you are already in Layout. It wraps the selection if no frame is selected, and it enables the stack if one is.

## The edge

The stack always packs children in layer order. If the reading order is wrong, change the layer order and the stack will follow.

It also skips any child marked Absolute position. That child is out of the flow, the gap math ignores it, and its pin under Position in frame decides where it goes when the parent resizes. Turn Absolute position off and the next reflow puts it back in the column in its layer-order slot.
