---
id: T040
title: Combine and release
slug: omadesign-0-5-8-combine-and-release
excerpt: Group is Ctrl+G. Ungroup is Ctrl+Shift+G, and it does not fuse paths. Combine into a compound is Ctrl+8. Release compound is Ctrl+Shift+8. Artwork and guides do not mix in one combine.
publishedAt: 2026-09-20T17:52:29Z
tags: [omadesign, 0.5.4, compounds]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-combine-and-release/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-combine-and-release/og.png
---

## The habit

Ctrl+G has meant group in Illustrator for decades. You select the icon and the type, group them, move them as one, double-click to edit inside, and ungroup when you no longer need them tied together. Affinity uses the same chord. The paths inside a group stay separate paths, and Ungroup gives them back. Nobody expects Ctrl+G to weld letterforms into a single outline.

Combine is a different habit, and it gets confused with the group key far too often. A compound path, the kind with a hole, is how a donut stays one fill. Illustrator makes one with Object > Compound Path > Make, and the shortcut many people remember for it is a different one from group. Release compound turns the contours back into separate objects when the hole was a mistake. A group moves its children together. A compound builds a single path with contours and counters. They are different objects.

The careless version uses the group key for compounds. You press Ctrl+G expecting a hole, get a group, see the overlap paint twice, and think the boolean failed. Or a cheat sheet tells you Ctrl+G combines and Ctrl+Shift+G releases, so you ungroup a logo while trying to release a compound. The children scatter, and the compound you wanted was never made.

Guides get caught in the same gesture. You meant to combine two construction lines, but a piece of the logo was still selected. Welding printed artwork to a non-printing guide produces garbage, so the command has to refuse.

## The constraint

Omadesign keeps both objects and gives them different keys, because one key can't mean both. Group is Ctrl+G and creates an editable layer group. Ungroup is Ctrl+Shift+G, which releases the group without combining paths. The paths come out as paths, because nothing was fused in the first place.

Combine, which makes a compound, is Ctrl+8, and Release compound is Ctrl+Shift+8. Putting compounds on 8 lets G stay the group key people already rely on. Pathfinder Union and the other booleans remain separate commands under Object > Pathfinder. That gives three possible results: a group, a compound from Ctrl+8, or a boolean from the menu, and you pick the one you meant.

Combine and Release preserve guide state, rotation, stacking, and gradient endpoints, each in one undo step. A compound that forgot its rotation would jump on release, and a linear gradient that forgot its endpoints would have to be redrawn. Radial fills stay radial and follow each resulting object's bounds. The file can't keep one shared radial center stretched across contours you just separated, so each piece visibly takes its own bounds. If you edit an older two-color radial in Appearance, it upgrades to multi-stop.

Ctrl+Z after Ctrl+8 is one step and puts the separate objects back with their guide state, rotation, stacking, and gradient endpoints. You never rebuild the stack by hand.

Artwork and guides don't mix. Combine and Pathfinder require a selection of either artwork or guides, and a mixture is rejected. Guides are for construction and artwork is the poster, so one command can't merge the two.

## What landed

Select the objects that should move together while staying individually editable, and press Ctrl+G. You get a layer group that expands in the layer tree. You can rename, hide, lock, and reorder it as a unit, and its children move with it. Double-click an item to edit it until you select something else or clear the selection. Groups select, move, duplicate, and align as units.

Press Ctrl+Shift+G to ungroup. The group is gone and the paths are still separate, since grouping never combined them. Ungroup doesn't run a boolean or release a compound. If you wanted the contours fused, you still need to do that.

Select the vectors that should become one compound and press Ctrl+8 to Combine. The compound holds all the contours. Press Ctrl+Shift+8 to Release it. Guide state, rotation, stacking, and gradient endpoints survive the round trip, with one undo per command.

Linear gradients keep their endpoints through combine and release, and radial fills stay radial. When a release produces separate objects, each one follows its own bounds, so plan to reset a radial if you expected one center shared by every released piece. Shape gradients follow the resulting silhouette, holes included, which is how shape gradients work everywhere else too.

Stacking stays, so release gives you back the order you had. Rotation stays too, so a compound built from rotated art doesn't snap back to axis-aligned on release.

Pathfinder is still the boolean menu: Union, Subtract, Intersect, XOR, and Divide. As of 0.5.8, repeated unions and subtractions produce editable compounds with holes intact, so you can double-click into a boolean result. Ctrl+8 is the combine key alongside that workflow, and Ctrl+G keeps its meaning.

Drag objects onto the center of a group or a Layout frame to nest them. Shift-click rows to select several. Reorder with insertion lines, or with Ctrl+[ and Ctrl+] on a layer row. None of those chords combine paths. They only arrange the group you already made.

## In the hand

Build a small mark from two strokes and a filled shape. Select all three and press Ctrl+G. Drag the group and all three move together. Double-click one stroke, nudge it, and click away. Press Ctrl+Shift+G and you have three objects again, the same three paths, with nothing welded.

Select two overlapping filled shapes that should share a compound and press Ctrl+8 to get one compound. If you need a hole from a boolean, use Object > Pathfinder > Subtract first and keep the result. Ctrl+8 combines and the menu runs booleans, so use whichever the drawing needs.

Press Ctrl+Shift+8 when the compound should become separate contours again. Check that the rotation and the linear gradient are the ones you had. Press Ctrl+Z and the compound returns in one step, endpoints included.

Trigger the refusal once on purpose so you recognize it. Convert a rectangle to a guide with Object > Guides > Convert selection to guides. Select that guide and a real shape, and press Ctrl+8. Nothing happens, because the selection is mixed. Select two guides and combine those, or two shapes and combine those.

```
Ctrl+G          Group. Paths stay paths.
Ctrl+Shift+G    Ungroup. Does not combine paths.
Ctrl+8          Combine into a compound.
Ctrl+Shift+8    Release compound.
Ctrl+Z          One step, endpoints and rotation included.
```

Save the `.oma`. Groups and compounds reopen exactly as you saved them. G groups and 8 combines.

If you learned that Ctrl+G makes a compound, drop that habit here. In Omadesign Ctrl+G groups, and compounds use the 8 key, with Shift to release.

## The edge

Combine and Pathfinder both reject a mixed selection of artwork and guides. The selection has to be all artwork or all guides. The command signals the problem by not welding, so fix the selection and press Ctrl+8 again.

Ungroup never fuses anything. Ctrl+Shift+G releases a group and leaves paths as paths. Ctrl+Shift+8 releases a compound, and it is the key that separates contours that were actually combined.
