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

You have a column of cards. In Figma you turn on auto-layout, set a vertical stack, set the gap, set the padding, and the cards pack in the order they already had in the layer list. You drag one card above another in the list and the column reflows. You do not position the third card by hand after you change the gap. The frame is the layout. The children are contents.

Illustrator never grew that habit in the same place as the drawing. You align once, you distribute once, and the next time the headline wraps you nudge again. Affinity's constraints and stacks live nearer the layout tools. The hand you bring here is the Figma hand: select the parent, turn stacking on, set gap and padding, let layer order be the reading order.

Stretch is part of that habit. A button in a row should grow with the row. A sidebar should stay a fixed width while the content pane takes the rest. You say which axis packs, and which children fill.

## The constraint

The stack has to be a property of the frame inside the `.oma`. A separate design-system file would mean the illustration, the screen, and the spacing rules diverge the first afternoon someone edits type in one of them. Omadesign already has one layer tree. Layer order is already how you send an object backward and forward: select the row and press `Ctrl+[` or `Ctrl+]`, add Shift to send it to the back or front of its group. Each reorder is one undo. The stack should read that same order. Inventing a second order, stored only in a panel, would guarantee the panel and the Layers studio disagree.

So Stack children means: this frame arranges the children that are in the flow, in layer order, vertical or horizontal, with a gap and padding. The manual uses the name Stack children. The checkbox reads "Arrange children automatically." Same switch.

The pack runs in the document, on resize and on edit. You see the gap on the canvas. Undo returns one change to that layout property. A plain number is enough. Layout color variables can feed a value later. They are not required for a column.

Shift+A is the key, and only in the Layout persona. If a frame is selected, Shift+A turns the stack on. If you have objects selected and no frame, Shift+A wraps them in a frame and turns the stack on in the same action. The status line says "Auto layout · resize the frame to see it respond." The inspector button labeled Auto layout does that same command. The hover on the button reads "Shift+A · wrap and arrange selected objects."

## What landed

Select a frame. In the inspector, under Layout, turn on Arrange children automatically. The stack controls open.

The flow row is Stack, Wrap, or Grid. Stack is the single line or column the manual describes. Wrap continues onto another line. Grid uses a column count from 1 to 24. For Stack, you pick Horizontal or Vertical. Grid hides that pair and shows Columns. Wrap and Grid also grow a second gap, labeled Rows, for the cross gap. The main Gap control runs from 0 to 1000. Padding is four numbers: top, right, bottom, left, each from 0 to 1000.

Align is Start, Center, End, or Stretch. Stretch on that control, or a child set to Fill on its sizing, is how a child takes the cross size of the line. Distribute is Start, Center, End, Space between, Space around, or Space evenly. Children in the flow are packed from those values, in layer order. They are not packed in the order you happened to click them.

Earlier and Later, on a child, move it in that order. Detach from frame pulls it out of the parent. Absolute position, a checkbox on the child under Position in frame, takes that one child out of the flow. The stack skips it and places the others. The absolute child then follows the pin rules, Min, Max, Stretch, Center, and Scale, when the parent is resized. Leave Absolute position off when the child should sit in the gap with its siblings.

Clip content is independent. A stack does not imply clipping. Turn the checkbox on when overflow should hide. Lock aspect ratio is also independent. It freezes the frame's proportion when you resize.

The empty Layout inspector still offers Shift+A in the hint line, next to F and T. You can draw the frames with `F`, nest them, then stack the parent. Or select the loose objects and let Shift+A make the frame and the stack together.

Resize the frame after the stack is on. The status line told you to. The children repack inside the padding. Change the gap and they repack again. Reorder a layer and they repack in the new order. `Ctrl+Z` returns the last of those edits.

Hidden children and absolute children stay out of the measurement the stack uses for the flow. A child you hid does not leave a ghost gap. Show it again and it returns to its place in the order.

## In the hand

Draw a frame with `F`, large enough for a column. Draw three smaller frames inside it, or three text objects, or use Wrap if they already exist outside. Select the outer frame. Press Shift+A.

```
Shift+A
```

The inspector shows Arrange children automatically checked. Set Vertical. Set Gap to 16. Set padding to 24 on all four sides, or set them independently if the top needs more air than the sides. Drag the outer frame's bottom handle. The column stays packed. The gap stays 16. The padding stays.

In the Layers studio, drag the middle child above the first. The column updates. Or select the child's row and press `Ctrl+]` or `Ctrl+[`. Add Shift for front or back of the group. One undo per reorder. Clicking artwork on the canvas returns those shortcuts to object stacking, which is the same order the stack is reading.

Select one child that should ignore the column, a close mark in the corner, and turn on Absolute position. The others close up. Set that child's Horizontal pin to Max and its Vertical pin to Min if it should sit in the top-right with a fixed inset. Those pin names are the constraint control. The stack no longer owns that child.

Turn the flow to Wrap if the children should break onto a second line when the frame gets narrow. Set Rows to the gap between lines. Turn it to Grid and set Columns if the job is a tile of cards. Gap remains the column gap.

Save the `.oma`. Reopen it. The checkbox is still on. The gap is still 16. The order is still the layer order. Nothing about the stack lived in a second tool.

The Auto layout button at the top of the inspector is there when you are already in Layout and you want the command without the key. It wraps if you have no frame selected. It enables the stack if you do.

## The edge

The stack refuses to invent an order. Children pack in layer order. If the reading order is wrong, change the layer order. The stack will follow.

It also refuses to pack a child you marked Absolute position. That child is out of the flow. The gap math skips it. The pin on Position in frame is what moves it when the parent resizes. Turn Absolute position off to put it back in the column with its siblings, in its layer-order slot, on the next reflow.
