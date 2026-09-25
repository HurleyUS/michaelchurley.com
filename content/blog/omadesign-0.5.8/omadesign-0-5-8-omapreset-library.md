---
id: T075
title: omapreset library
slug: omadesign-0-5-8-omapreset-library
excerpt: Save a named Photo look, filter the library, and move it as a .omapreset file. The preset keeps development values and categories, and a name clash keeps both.
publishedAt: 2026-09-07T18:36:51Z
tags: [omadesign, 0.0.3-alpha, photo]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-omapreset-library/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-omapreset-library/og.png
---

## The habit

A look that works wants a name. In Lightroom you make a preset, and the preset remembers which boxes were checked when you created it. Crop sneaks in. A local mask sneaks in. Next month you apply "Kitchen warm" to a portrait and the crop is the kitchen's crop. In Photoshop, Camera Raw presets live in a folder Adobe chose, and moving them to another machine is a scavenger hunt through a settings directory. Affinity Photo stores develop presets with the app. They are yours until you change machines, and then they are a support article.

The hand wants three things. Name the look while you can still see it. Find it later by that name, not by scrolling a dump of every experiment. Carry the file to the other computer without signing into anything. The look has to work on a photo it has never met. A wedding preset that only functions on the RAW it was born on is a sidecar with a nickname.

## The constraint

Photo settings for a single original already have a home. The `.omaphoto` beside `photo.RAF` is that photo's grade. It is not a style you can drop on a different camera from a different year. Tie the reusable look to one original and you have copied a sidecar, not saved a preset.

The preset has to store development values and the categories you meant to send. Light / tone can travel while Effects stays home. Effects is the detail group. The tone curve can travel while crop stays off. A file that only stores "all the sliders, always" will repeat the checkbox mistake. Categories are part of the preset because categories are part of the decision.

The library has to persist between sessions inside the one binary. There is no cloud preset sync to lean on, and there should not be. A `.omapreset` is a small file you can put on a disk, mail to yourself, or keep next to a job. Import has to survive a name collision. Two looks named "Warm" are two looks. Replacing one with the other because the strings match is how a careful grade disappears.

Reads and writes of that library run in the background. Naming a look cannot freeze the viewer on a large RAW.

## What landed

The Photo preset library saves named looks. You filter that list by name. You import a `.omapreset` and you export a `.omapreset`. The file is the look leaving the machine. The library is the look staying here.

A preset holds development values and the chosen categories. That is why it works across unrelated originals. The preset does not need the hero's pixels, the hero's crop, or the hero's filename. You built it on a Fujifilm RAF and you apply it to a Canon CR3, a DNG, a PNG scan, a JPEG from the phone. The categories you stored are the categories that move. Crop and rotation stay out unless you saved them on. The preset uses the same boxes as paste: Light / tone, Tone curve, Color, Effects, Color mixer, Color grading, Crop, Rotation. Effects is the detail group.

The library persists between sessions. Quit, come back, the names are still there. You do not rebuild "North window" every morning.

Imported name conflicts keep both looks, under distinct names. Bring in a `.omapreset` that says "North window" while you already have a "North window" and both remain in the library. Yours stays. Theirs stays. You can see which is which because the names were forced apart, and you can filter until you are looking at one of them. Nothing is overwritten because a string matched.

Use a preset through **Presets… → Use preset…** when you are about to apply a look, including when the target is a whole folder. The preset is the source of the values. The original you happen to be viewing is only the photo in the viewer. Later edits to that photo do not rewrite the named preset. A preset changes when you save a preset. A sidecar changes when you save settings.

## In the hand

Develop the frame that deserves a name. Decide the categories the way you would for a paste. If this look is tone and color, leave Effects off. Leave crop and rotation out unless you truly want every future photo to inherit that frame. Then save the named look into the preset library.

Filter the library by name when the list gets long. "Warm" should narrow to the warms. You should not hunt a menu that sorts by the date you were tired.

Export the one you want to keep:

```
.omapreset
```

That file is the portable look. Copy it to the other machine, the other user, the archive disk. On the far side, import the `.omapreset`. If the name is already taken, the library keeps both and gives them distinct names. Filter, pick the one you meant, and use it.

On a photo that has nothing to do with the original hero, choose **Presets… → Use preset…**. The categories stored in the preset are the categories that land. The photo keeps whatever you excluded. Save that photo's own `.omaphoto` with **Ctrl+S** when the result belongs to that file. The preset remains the preset. The sidecar remains that photograph.

Build a second look on a different camera the next day. Name it. The first name is still in the library when you reopen the app. The two looks do not point at each other's originals.

## The edge

A preset refuses to be a hidden link to one RAW. It has no original to rewrite, and it does not follow later slider moves on the photo you were viewing when you saved it. Change the hero, and the named look stays the values and categories you stored.

A name clash refuses to delete either side. Import keeps both, with distinct names. You do not get a silent replace, and you do not get a merge that averages two grades into a third grade nobody made.

Filter to the name, use the preset, and the categories you stored are the only ones that travel.
