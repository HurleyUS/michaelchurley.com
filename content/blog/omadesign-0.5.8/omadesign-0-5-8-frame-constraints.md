---
id: T056
title: Frame constraints
slug: omadesign-0-5-8-frame-constraints
excerpt: A child of a frame pins with Min, Max, Stretch, Center, or Scale. The pins are stored on the object in the .oma and run when you resize the parent.
publishedAt: 2026-09-15T23:36:15Z
tags: [omadesign, 0.5.0, layout]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-frame-constraints/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-frame-constraints/og.png
---

## The habit

Resize a phone frame from 390 wide to 430 wide. The close button stays 16 pixels off the right edge. The header title stays 16 pixels off the left. The hero image, inset 16 from both sides, grows by the same 40 pixels the frame grew. The wordmark in the middle stays in the middle. You set those rules once on each child, and resizing the parent does the rest.

In Figma that panel is called constraints: left, right, left and right, center, scale. Illustrator has a quieter version on symbols and some layout features, and you mostly do the math yourself. Affinity's constraint panel works more like Figma's. The rule people remember is the inset. Either the distance to one edge is fixed, or both distances are fixed and the object stretches, or the center stays put, or the object is a percentage of the parent and scales.

Those rules have to live on the object in the file. If a prototype player forgets them when you reopen the document, it's a demo. The file is the product.

## The constraint

Omadesign stores the pin on the child, in the `.oma`, next to the parent link. Format 5 is the document version that added frames, auto-layout and constraints. The pin isn't a mode you switch on before presenting. As of 0.5.4, Present is a separate button that opens an interactive responsive preview. The pins already work on the canvas when you drag the parent's handles.

Horizontal and Vertical are independent, so a button can pin to the right and to the top. The inspector shows the choices under Position in frame, and only when the object has a parent frame. The menu names are Min, Max, Stretch, Center and Scale. The manual calls them min, max, both edges, center or scale. Stretch is the both-edges pin.

I kept the solver simple. It looks at the child's box before the resize, and at the parent's box before and after.

Min keeps the child's size and the gap between the child and the parent's minimum edge. On X that's the left inset. On Y it's the top inset.

Max keeps the child's size and the gap to the parent's maximum edge, meaning right or bottom.

Stretch keeps both insets. The child grows and shrinks with the parent, and its size won't collapse below one pixel.

Center keeps the child's size and keeps its center at the same offset from the parent's center.

Scale keeps the child as fractions of the parent. Position and size are both ratios of the old span, applied to the new span. A child that started halfway across at a quarter of the width still starts halfway across at a quarter of the new width.

There's no dialog and no second file. One undo reverts the resize, parent and affected children together. Older builds that only read formats 1 through 4 can't open a file with these pins. The pin is saved in the document, so it's still there after you save.

## What landed

Select a child of a frame. The inspector section Position in frame shows Absolute position, then Horizontal, then Vertical. Each axis is a menu with Min, Max, Stretch, Center and Scale. Set them, resize the parent frame, and the child moves or scales by the rules above.

If the parent stacks its children, the stack places every child that's still in the flow. Gap, padding, direction and layer order control those children, and the pin math runs for the ones the stack isn't placing. Absolute position is the checkbox that takes one child out of the flow so its pin can control it. In a frame with Arrange children automatically turned off, the pins apply to the children directly and you don't need Absolute position. You need it when a stack and a pinned corner object share a parent.

Sizing is a separate set of controls. Fixed, Hug and Fill describe how a stacked child is measured. Fill, or Align set to Stretch on the stack, makes an in-flow child take the cross size of the line. That's the stack's stretch. The Stretch under Position in frame is the pin for a child outside that flow, or for a child of a frame that isn't stacking. They share a word but they're different controls. Use the stack's Stretch when the object should pack with its siblings and grow across the line. Use the pin's Stretch when the object should keep both insets as the parent frame is resized.

Min and max sizes on the child still clamp the result, so a Stretch pin won't produce a zero-sized box. Hug measures the child from its contents and ignores absolute and hidden children, so a corner badge doesn't inflate a card's hug size.

As of 0.5.4, Responsive frame offers Phone, Tablet and Desktop width jumps of 390, 768 and 1440, keeping the current height. + Phone and + Tablet add breakpoints at 600 and 1024. The pins decide what the children do when that width changes, and dragging a handle runs the same pins.

The pins save with the shape. Reopen the `.oma`, select the child, and the menus still show what you set. Drag the parent and the insets hold.

## In the hand

Build a screen frame. Put a title at the top left, 24 pixels in from the left and 16 from the top. Put a close mark at the top right, 16 from the right and 16 from the top. Put a full-bleed image under them, 16 from the left and 16 from the right, a fixed distance from the bottom.

If the screen frame is stacking, select the close mark and turn on Absolute position. Do the same for any child that needs a pin while its siblings pack. Then set the menus.

- Title: Horizontal Min, Vertical Min.
- Close mark: Horizontal Max, Vertical Min.
- Image: Horizontal Stretch and Vertical Min if it should keep its height and side insets. Horizontal Stretch and Vertical Stretch if it should keep every inset and grow in both directions.
- A logo that has to stay centered: Horizontal Center, Vertical Center.
- A bar that should stay the middle third of the width: Horizontal Scale, with Vertical Min so its thickness doesn't change.

Drag the frame's right handle outward. The title stays 24 from the left and the close mark stays 16 from the right. The stretched image keeps 16-pixel side gaps and its width changes. The centered logo stays centered at the same size. The scaled bar stays the same fraction of the width.

```
Position in frame
Horizontal   Min · Max · Stretch · Center · Scale
Vertical     Min · Max · Stretch · Center · Scale
```

`Ctrl+Z` reverts the resize and leaves the pins set, because undo removed the size change and kept the rules. If the rule itself was wrong, change the pin, and undo that if you need to. Each of those is one step.

Save and reopen the `.oma` the next day. The menus match and the insets are the ones you set.

## The edge

A pin won't run on an object without a parent frame. Position in frame appears once the object is inside a frame, so wrap it or draw it inside one first.

A pin also won't compete with the stack for a child that's still in the flow. While Arrange children automatically is on, gap, padding and layer order place the in-flow children. Turn on Absolute position for the child that has to keep a Min, Max, Stretch, Center or Scale inset when the parent resizes. The stack keeps placing the others, and the corner object keeps its inset.
