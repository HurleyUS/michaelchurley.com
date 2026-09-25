---
id: T023
title: Free transform
slug: omadesign-0-5-8-free-transform
excerpt: "Ctrl+T puts the selection into Move with scale and rotation handles ready. Live text stays live. Shape parameters stay editable. The command is also under Object."
publishedAt: 2026-09-06T10:30:01Z
tags: [omadesign, 0.0.1-alpha, vectors]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-free-transform/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-free-transform/og.png
---

## The habit

`Ctrl+T` is free transform in Photoshop, and your hand hits it even when you are holding a vector tool. A box appears. Corners scale. The area just outside rotates. Enter commits. Esc cancels. In Photoshop that commit is often pixels. You live with it because the layer was pixels already.

Illustrator's version is the bounding box you usually already have, plus **Free Transform** as its own tool when you want to scale, rotate, reflect, or shear without hunting handles. The dangerous command next door is Expand. Expand turns the live rectangle, the live type, the live stroke, into paths. People hit it from a default button, or from a script, and the headline is outlines forever. Undo works until the file is saved, closed, and reopened by someone else.

Affinity keeps a similar split. A transform panel and the selection handles edit the object you have. A convert-to-curves command is explicit. You can scale a text frame all day and still change the word.

The habit this studio has to meet is the chord and the handles, without the silent expand. `Ctrl+T` should mean "give me scale and rotation on what I selected." It should not mean "bake the object so those handles have something easy to chew on."

## The constraint

One `.oma`, and the objects in it stay the kind of objects you drew, for as long as you can stand it. Undo is one step. A transform that also converted to paths would be two edits wearing one chord, and `Ctrl+Z` would become a quiz. Either the chord converts, and undo must undo the convert and the transform together, or the chord does not convert. The second one is the decision. Live text stays text. A rectangle keeps its rectangle parameters, including corner radius. A polygon keeps its side count. You can still edit them in Transform after you scale.

Move already has eight scale handles and a rotation handle above the box. Free transform does not need a second geometry engine. `Ctrl+T` puts the current selection into Move with those handles ready. The Object menu has the same command, for when the hand is on the mouse and the keyboard is the thing you do not trust yet. `F1` lists it with the other chords. The HUD can show it while Ctrl is held, as a Ctrl command, without running it.

Reshape exists for the edits that are not a uniform scale or a rotation. Distort, skew, perspective, and a nine-handle warp mesh live under **Object → Reshape**. The first handle you move there converts live text and parameter shapes to paths, because a warp is not a rectangle anymore. Undo restores the original form. That conversion is allowed in Reshape because the operation needs paths. It is refused in free transform because a scale does not need paths. The constraint is "do the least destructive thing that makes the handle honest."

The chord is `Ctrl+T`. Bare `T` is the type tool. The shortcut table puts free transform on Ctrl plus T, with Shift up. Adding Shift does not call a second transform.

## What landed

**Free transform** is `Ctrl+T`. It puts the current selection into Move, scale handles and rotation handle ready. The same command is under **Object**. It keeps live text and shape parameters editable. That is the manual's sentence, and it is the behavior in 0.5.8. The clear menu entry and the F1 line landed with the transform work. This release did not replace them with an expand.

What you get when you press it:

- The tool is Move, `V`, even if you were in the pen or the type tool.
- Eight handles scale the selection.
- The handle above the box rotates it.
- Shift constrains the move if you drag the object. The HUD states the modifier while you hold it.
- Alt-drag still clones, because you are in Move and Move clones that way.
- Corner dots still round a rectangle, because those dots are Move's dots.
- Type stays type. Double-click to edit the string after you scale the frame.
- Transform still shows the parameters: position, size, rotation, corner radius, and the rest that belong to that object.

You drag the handle. The object updates. `Ctrl+Z` undoes that drag as one step. Reshape is the mode that uses Enter to finish and Esc to cancel the current drag. Free transform uses Move's undo.

Object → Reshape remains one menu away for distort, skew, perspective, and the warp mesh. The first moved handle on live text or on a parameterized shape converts to paths. That boundary is what makes `Ctrl+T` safe to hit.

## In the hand

Select a rectangle and a text object.

```text
V
```

Shift-click so both are selected, or Shift-drag the box.

```text
Ctrl+T
```

The handles are up. Drag a corner. Both scale. Drag the handle above the box. Both rotate around the selection. `Ctrl+Z` once. The rotation returns. `Ctrl+Z` again. The scale returns. Two edits, two undos.

Click only the text. `Ctrl+T`. Scale it wide. Double-click the text. The caret is in the string. Change a word. The word changes. Character studio still has the font, the size, the tracking, the leading, the OpenType features. The scale did not swap the font for outlines.

Click only the rectangle. Drag a corner dot. The radius changes. Look at Transform and edit the radius as a number. `Ctrl+T` did not remove that field. Press `A` for the node tool only when you are ready to convert. Until that edit, the rectangle is a rectangle.

Open the menu path once so you trust it.

```text
Object → Free transform
```

Same handles. Same Move tool. Press `P` when you want the pen back. The selection's geometry stays as you left it. The tool change does not revert the scale.

Try Reshape on a copy if you want to see the other door. Alt-drag a clone. **Object → Reshape → Distort**. Drag a cage handle. The clone converts. `Ctrl+Z` restores the form. That undo is why the convert is allowed there. Go back to the original and press `Ctrl+T` again. It is still a parameterized shape, because you never reshaped it.

Place a photo into the design and press `Ctrl+T`. Scale and rotate with the same handles. The RAW on disk is untouched. The layer in the `.oma` is the placed image. Reshape does not claim that photograph. Move does.

Save with `Ctrl+S`. Reopen. The text is text. The corner radius is the radius. The rotation is the rotation.

## The edge

Free transform will not expand live text, and it will not expand a parameterized shape into paths. There is no forced expand hiding in the chord. If the type is outlines, someone used **Object → Convert to path**, or the first handle of a Reshape, or a node edit that converted the shape. `Ctrl+T` is not that command. Undo on those other commands restores the live object when you undo them in the same session.

`Ctrl+T` will not start the warp mesh, the distort cage, the skew, or the perspective. Those are **Object → Reshape**. Enter and Esc in that mode finish or cancel the reshape drag. They are not required to "apply" a free-transform scale.

Bare `T` will not free-transform. It will set the type tool and, on a click, place a text object. The transform chord is Ctrl and T together.

A placed photograph does not become a vector under this chord. It scales and rotates. The camera file, if the image came from Photo, stays where Place left the relationship: 8-bit pixels in the document, RAW and `.omaphoto` outside it.

Press `Ctrl+T` on the selection. Scale it. Double-click the text and change the word.
