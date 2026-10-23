---
id: T042
title: Reshape distort skew
slug: omadesign-0-5-8-reshape-distort-skew
excerpt: Object → Reshape opens Distort, Skew, Perspective, or a nine-handle Warp mesh. Shift constrains. Ctrl reverses snapping. Enter finishes. The first handle you move converts live text and parameter shapes to paths.
publishedAt: 2026-09-06T10:35:01Z
tags: [omadesign, 0.0.1-alpha, reshape]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-reshape-distort-skew/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-reshape-distort-skew/og.png
---

## The habit

Free transform rotates and scales. Sometimes the poster needs more: a skew, a fake perspective on a plane, a distort that pulls one corner, or a mesh warp that bends a wordmark like a flag. Illustrator splits these across Free Transform, Shear and Envelope Distort. Affinity puts them in a node mode or a warp group. Photoshop's Free Transform covers scale, rotate, skew, distort and perspective on pixels, and you learned its modifier keys there even if you don't remember their names.

What matters is the cage. Handles appear, you drag one, and the artwork follows. Shift keeps the drag straight, Enter commits, and Esc cancels the drag you are in the middle of. If Esc committed a mess, you would stop using it, and Esc is the key that has to stay safe.

The other part is conversion. A live rectangle or a live headline has no mesh, so the first real drag turns it into paths. That should happen when you move a handle. Opening the command to look shouldn't convert anything. Undo should bring the rectangle and the text back, because opening warp just to see what it looks like is normal and shouldn't be a trap.

Photoshop already taught you where photographs fit. A placed photo warps as pixels there. In a vector studio, a warp that quietly rasterized the photo would be a different command. If the tool doesn't warp photos, it should leave them with move, scale and rotate, which already work.

## The constraint

Reshape works on vector artwork in Design. The cage is a mode inside the current document. The inspector switches modes and finishes the edit, so Distort, Skew, Perspective and Warp mesh share one menu and one place to change your mind. You never export a mesh to a plugin and import a path back.

The mesh cage has nine handles.

Each completed drag is one undo step. You can pull a corner, release, pull another, and Ctrl+Z only the second pull. Esc cancels a drag in progress. If no drag is active, Esc leaves the mode without leaving a phantom edit behind. Changing tools, documents, selections or personas also leaves the cage, so clicking Layout can't strand a warp in progress.

Shift constrains the handle the same way it constrains everything else you drag. Holding Ctrl reverses snapping for that drag. Ctrl+Shift+; still toggles snapping overall. Holding Ctrl is the temporary version, and reshape uses it so a handle can ignore a guide without you turning off snapping for the whole document.

The first handle you move converts live text and parameter shapes to paths. Just looking at the cage doesn't, and Undo restores the original form. Stroke widths stay uniform. If the stroke scaled with the distortion, a 4 pixel line would turn into a wedge and the poster would look like a raster filter was applied. Radial gradients stay radial. A linear gradient on rotated artwork maps from the art's actual pose, so the fade stays on the skewed mark.

Placed photographs keep Move, scale and rotate. Reshape doesn't apply to them, so it never adds a surprise raster to the `.oma`.

## What landed

Select vector artwork in Design and choose Object > Reshape, then Distort, Skew, Perspective or Warp mesh. The cage appears, and you drag a handle. The inspector can switch modes during the edit and can finish it, so if the skew should have been a perspective, you can change without starting over.

Warp mesh has nine handles, with no denser grid hidden under them. Drag the handle on the part of the cage you want to bend.

Shift constrains the handle's movement. Holding Ctrl during the drag reverses snapping, and releasing it returns snapping to whatever Ctrl+Shift+; had set.

Enter finishes, and so does Done in the inspector. Esc cancels the current drag and puts the handle back. Esc with no drag active leaves the mode. Each completed drag is one undo step. Ctrl+Z removes that drag, and the earlier drags stay until you undo them too.

The first handle you actually move converts live text and parameter shapes to paths. A rectangle becomes a path and a headline becomes paths. Undoing that edit restores the original form, so the words and the rectangle's parameters come back. If you only opened Reshape and left with Esc, you never moved a handle, and nothing was converted.

Stroke width stays uniform across the warp, and radial gradients stay radial. On rotated artwork, a linear gradient maps from the correct pose, so its endpoints follow the art you skewed.

Placed photographs stay with move, scale and rotate. Free transform (Ctrl+T) keeps live text and shape parameters editable. Reshape converts them, but only after a handle moves. Use Ctrl+T when the text has to stay text.

## In the hand

Set a headline with T, select it with V, and choose Object > Reshape > Warp mesh. Look at the nine handles, then press Esc without dragging. You leave the mode. Double-click the headline and the caret still works, because the type is still type.

Open Warp mesh again and drag the middle handle on the top edge. That is the first moved handle, so the text converts to paths. Bend it until the flag shape looks right. Hold Shift if a handle should move in a straight line, and hold Ctrl if a guide keeps grabbing the handle. Press Enter to finish.

Press Ctrl+Z. If that drag was the one that converted the text, the headline is text again, because undo restores the original form. If the warp was right and you undid it too fast, redo with Ctrl+Shift+Z or Ctrl+Y.

Try Skew on a rectangle that is still a parameter shape. Drag, and it becomes a path. Undo if you want the corner radius back as a number. Perspective uses the same cage in perspective mode, and Distort pulls the corners freely. If you started in the wrong mode, switch in the inspector and finish from there.

```
Object → Reshape → Distort
Object → Reshape → Skew
Object → Reshape → Perspective
Object → Reshape → Warp mesh     Nine handles
Shift                            Constrain the handle
Ctrl                             Reverse snapping while held
Enter                            Finish
Esc                              Cancel the drag, or leave the mode
Ctrl+Z                           One completed drag, or the original form
```

Skew a rotated path with a linear gradient and watch the fade. It should stay aligned with the pose you see. If you warp a stroked compound outline, the hole stays and the contours move together under the cage.

Save after you press Enter, once the drag is finished. The `.oma` stores the paths you finished. A photograph stays rectangular, at whatever scale and rotation Move gave it.

## The edge

Reshape doesn't apply to placed photographs. They keep move, scale and rotate. The cage is for vector artwork in Design, so this command never turns a photo into a mesh or rasterizes it.

Esc won't commit a drag you are still holding. It undoes that drag, and a second Esc, with nothing in progress, leaves the mode. Live text and parameter shapes only convert when a handle actually moves, and Ctrl+Z gives them back.
