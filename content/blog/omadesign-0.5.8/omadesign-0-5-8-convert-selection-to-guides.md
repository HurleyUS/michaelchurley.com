---
id: T048
title: Convert selection to guides
slug: omadesign-0-5-8-convert-selection-to-guides
excerpt: Object → Guides → Convert selection to guides turns vectors into non-printing contours you can still edit. Curves, compounds, shapes, and live text keep their data. Release guides restores the artwork.
publishedAt: 2026-09-06T10:38:01Z
tags: [omadesign, 0.0.1-alpha, guides]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-convert-selection-to-guides/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-convert-selection-to-guides/og.png
---

## The habit

Sometimes the guide you need isn't a straight line from the ruler. It is the curve of a logotype, the bowl of a letter, the edge of a compound path, or the bounding box of a photograph. In Illustrator you select the path and choose View > Guides > Make Guides. The path stops printing and starts acting as a snap target. Release Guides turns it back into artwork, and if you are lucky the style comes back with it. A Bézier should stay a Bézier, text should stay text, and a compound should keep its holes.

You also edit guides. You move one, or pull a node on a curved guide so the snap follows the new curve. When a construction line turns out to be the final mark, you release it, and the edits you made while it was a guide should still be in the artwork.

A placed photo is the one case that should be handled literally. The pixels stay, and a guide appears around the bounds so you can snap to the frame of the picture. Asking for a guide should never trace the photograph into vectors.

Exports leave guides out (PNG, JPEG, SVG, Lottie), and the `.oma` keeps them. That split is why guides exist: construction lines in the working file, and a clean picture on the way out.

## The constraint

Convert selection to guides has to be reversible within the normal undo model, and the reverse has to keep your edits. Object > Guides > Convert selection to guides turns vector artwork into editable, non-printing contours. Release guides turns them back into artwork, including geometry edits you made while they were guides. Both actions undo normally. Ctrl+Z after a convert gives you the artwork back as it was, and Ctrl+Z after a release gives you the guides back. You don't need to keep a hidden duplicate in case the release loses something, because the command keeps all the data it says it keeps.

Curves, compound paths, shapes, and live text keep their original data and style. Béziers stay Béziers, text stays text, and compounds keep their holes. A convert that secretly ran Convert to path would destroy the headline just to make a snap target. Flip asks you to convert text to paths first. This command doesn't. You can turn a live headline into a guide, snap other type to its cap line or its curve, and release it later as type you can still edit.

Move, Node, and Reshape still edit a guide. Snapping follows the actual curve, including during a Shift-constrained drag. A curved guide that snapped to its bounding box would be no better than a ruler guide, and the reason to convert a path is to snap to the path.

A placed image doesn't become a vector trace. It gets a separate guide around its bounds, and the pixels stay, so you still have the photograph plus a rectangular construction line on its frame.

PNG, JPEG, SVG, and Lottie leave guides out, and the project save keeps them. Hidden guides (Ctrl+;) don't take the pointer and don't snap. Guides start locked, so node edits wait until you choose View > Guides > Unlock all guides.

## What landed

Select vector artwork and choose Object > Guides > Convert selection to guides. The vectors become non-printing contours that stay editable. A curve is still a curve, a compound path still has its holes, a parameter shape still has its data, and live text still has its characters and style. The guide keeps the look you had, and it doesn't print.

Move (V) still moves a guide when guides are unlocked, and Node (A) still edits points and handles. Reshape still works on vector artwork, and the first handle you move still converts live text and parameter shapes to paths, with Undo restoring the original form. If you only need to move a guide or edit nodes, stay on V and A.

Snapping follows the real curve, including during a Shift-constrained drag, and alignment lines and gap measurements still appear. Hidden guides are left out of snapping.

Release guides restores the artwork. Geometry you edited while it was a guide is in the restored art, and the style is intact. A headline you didn't warp is still a headline, and a compound still has its counters. The convert and the release are each a normal undo step.

A placed image works differently. The command creates a separate guide around the image bounds and keeps the pixels. The photograph stays a photograph, and the guide marks its frame. You can snap to the frame and move the guide, and the pixels are never outlined.

Project saves keep the arrangement, so when you reopen the `.oma` the guides are still guides, edits included. Exports omit them: PNG, JPEG, SVG, animated SVG, and Lottie. Ctrl+; hides them along with the ruler guides. View > Clear ruler guides clears only the ruler set, so a converted logo stays until you release it or remove it yourself.

Combine and Pathfinder reject a mix of guides and artwork. A converted guide selected together with a live shape won't boolean or combine. Select only guides, or release the guide back to artwork and then run the boolean. That rule keeps construction lines and printed artwork apart.

## In the hand

Select the logotype paths and choose Object > Guides > Convert selection to guides. The contours stop printing. Create a headline with T and drag it until it snaps to the curve. Hold Shift if the headline should move only horizontally while it catches the curve.

Press A if a node on the guide needs to move. If the drag doesn't take, unlock guides first with View > Guides > Unlock all guides. Move the node, and the snap target becomes the new curve. Lock all guides when the curve is right.

Choose Release guides when the logotype should print again. The node you moved stays moved, and your fills and strokes are back on a printing object. Press Ctrl+Z if you released too early, and you are back on guides with the edit included.

Select a placed photograph and choose Convert selection to guides. You get a guide on the bounds, and the photo is still visible as pixels. Snap a caption to the frame. The pixels did not become paths.

```
Object → Guides → Convert selection to guides
V / A / Reshape                         Still edit, guides unlocked
Release guides                          Artwork again, edits kept
Ctrl+Z                                  Convert or release, one step
Ctrl+;                                  Hide, including these guides
PNG JPEG SVG Lottie                     Guides left out
```

Save, and reopen once if you want to confirm the guides are still there. Export a PNG and look at it. The construction curve isn't in the picture, and the `.oma` still has it the next time you need to align a new line of type.

If the selection won't combine with a shape, it is still a guide. When you want to weld artwork to artwork, choose Release guides first, then Ctrl+8 or Pathfinder.

## The edge

Exports always leave guides out (PNG, JPEG, SVG, and Lottie). The `.oma` keeps them, including curves, compounds, shape data, live text, and any geometry edits you made before release, so you never have to strip guides by hand to get a clean file.

This command never traces a placed image. The pixels stay and a separate guide appears around the bounds. Convert to path is still the explicit way to outline live text when a flip or a committed warp needs outlines. Convert to guides leaves text as text.
