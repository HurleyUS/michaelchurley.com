---
id: T056
title: Frame constraints
slug: omadesign-0-5-8-frame-constraints
excerpt: A child of a frame pins with Min, Max, Stretch, Center, or Scale. The pins are stored on the object in the .oma and run when you resize the parent.
tags: [omadesign, 0.5.8, layout]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-frame-constraints/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-frame-constraints/og.png
---

## The habit

You resize a phone frame from 390 wide to 430 wide. The close button stays 16 pixels off the right edge. The header title stays 16 pixels off the left. The hero image, the one that was inset 16 from both sides, grows by the same 40 pixels the frame grew. The wordmark in the middle stays in the middle. You set those rules once, on the child, and the parent resize does the rest.

In Figma that panel is constraints: left, right, left and right, center, scale. Illustrator has a quieter version on symbols and on some layout features, and you mostly do the math yourself. Affinity's constraint panel is closer to the Figma hand. The rule you remember is the inset. Distance to an edge is sacred, or both distances are sacred and the object stretches, or the center stays put, or the object is a percentage of the parent and scales.

Those rules have to live on the object you will still have tomorrow. A prototype player that forgets them when you return to the file is a demo. The file is the product.

## The constraint

Omadesign stores the pin on the child, in the `.oma`, next to the parent link. Format 5 is the document version that added frames, auto-layout, and constraints. The pin is not a mode you toggle before presenting. Present is a separate button. It opens an interactive responsive preview. The pins already work on the canvas when you drag the parent's handles.

Horizontal and Vertical are independent. A button can pin to the right and to the top. The inspector shows the choices under Position in frame, and only when the object has a parent frame. The menu names are Min, Max, Stretch, Center, and Scale. The manual's words are min, max, both edges, center, or scale. Stretch is the both-edges pin. The menu is what you click. The insets are what you meant.

The solver is simple on purpose. It looks at the child's box before the resize and the parent's box before and after.

Min keeps the child's size and the gap between the child and the parent's minimum edge. On X, that is the left inset. On Y, that is the top inset.

Max keeps the child's size and the gap to the parent's maximum edge. Right, or bottom.

Stretch keeps both insets. The child grows and shrinks with the parent. The size will not collapse below one pixel.

Center keeps the child's size and keeps the child's center at the same offset from the parent's center.

Scale keeps the child as fractions of the parent. Both the position and the size are ratios of the old span, applied to the new span. A child that started halfway across, at a quarter of the width, still starts halfway across, at a quarter of the new width.

There is no dialog and no second file. One undo returns the resize, parent and affected children together. Older builds that only read formats 1 through 4 cannot open a file that has these pins. The pin is in the document, so it is still there after you save.

## What landed

Select a child of a frame. The inspector section Position in frame shows Absolute position, then Horizontal, then Vertical. Each axis is a menu: Min, Max, Stretch, Center, Scale. Set them. Resize the parent frame. The child moves or scales by the rule above.

If the parent is stacking its children, the stack places everyone who is still in the flow. Gap, padding, direction, and layer order own those children. The pin math runs for children the stack is not placing. Absolute position is the checkbox that takes one child out of the flow so the pin can own it. A frame with Arrange children automatically turned off uses the pins for its children directly. You do not need Absolute position in that case. You need it when a stack and a pinned corner object share a parent.

Sizing sits beside this. Fixed, Hug, and Fill describe how a stacked child wants to be measured. Fill, or Align set to Stretch on the stack, makes an in-flow child take the cross size of the line. That is the stack's stretch. The Position in frame Stretch is the pin for a child outside that flow, or for a child of a frame that is not stacking. They share a word and they are different controls. Use the stack's Stretch when the object should pack with its siblings and grow across the line. Use the pin's Stretch when the object should keep both insets as the parent frame itself is resized.

Min and max sizes on the child still clamp the result. A Stretch pin will not produce a zero-sized box. Hug measures the child from its contents, and it ignores absolute and hidden children when it measures, so a corner badge does not inflate the hug of a card.

Responsive frame offers Phone, Tablet, and Desktop width jumps: 390, 768, and 1440, keeping the current height. + Phone and + Tablet add breakpoints at 600 and 1024. The pins are what the children do when that width changes. Dragging a handle runs the same pins.

The pins save with the shape. Reopen the `.oma`. Select the child. The menus still read what you set. Drag the parent. The insets hold.

## In the hand

Build a screen frame. Put a title text at the top left, 24 pixels in from the left and 16 from the top. Put a close mark at the top right, 16 from the right and 16 from the top. Put a full-bleed image under them, 16 from the left and 16 from the right, a fixed distance from the bottom.

If the screen frame is stacking, select the close mark and turn on Absolute position. Do the same for any child that must use a pin while siblings pack. Then set the menus.

Title: Horizontal Min, Vertical Min. Close mark: Horizontal Max, Vertical Min. Image: Horizontal Stretch, Vertical Min if it should keep its height and its side insets, or Horizontal Stretch and Vertical Stretch if it should keep every inset and grow in both axes. A logo that must stay visually centered: Horizontal Center, Vertical Center. A bar that should remain the middle third of the width: Horizontal Scale, with Vertical Min so the thickness stays put.

Drag the frame's right handle outward. The title stays 24 from the left. The close mark stays 16 from the right. The stretched image's side gaps stay 16 and its width changes. The centered logo stays centered, same size. The scaled bar stays the same fraction of the width.

```
Position in frame
Horizontal   Min · Max · Stretch · Center · Scale
Vertical     Min · Max · Stretch · Center · Scale
```

`Ctrl+Z` returns the resize. The pins are still set. The undo removed the size change, not the rules. Change a pin and undo if the rule itself was wrong. Each of those is one step.

Save. Reopen the `.oma` tomorrow. The menus match. The insets are still the ones you set.

## The edge

The pin refuses to run on an object that has no frame parent. Position in frame appears once the object is inside a frame. Wrap it, or draw it inside, first.

The pin also refuses to fight the stack for a child that is still in the flow. While Arrange children automatically is on, in-flow children are packed by gap, padding, and layer order. Turn on Absolute position for the child that must keep a Min, Max, Stretch, Center, or Scale inset when that parent resizes. The stack keeps the others. The corner object keeps its inset.
