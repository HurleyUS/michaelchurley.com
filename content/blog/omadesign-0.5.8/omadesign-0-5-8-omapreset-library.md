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

A look that works deserves a name. In Lightroom you make a preset, and it remembers which boxes were checked when you created it. Crop slips in, or a local mask slips in, and next month you apply "Kitchen warm" to a portrait and get the kitchen's crop. Camera Raw presets live in a folder Adobe chose, and moving them to another machine means digging through a settings directory. Affinity Photo stores develop presets with the app. They're yours until you change machines, and then they're a support article.

You want three things. Name the look while you can still see it. Find it later by that name instead of scrolling through every experiment. Carry the file to another computer without signing into anything. And the look has to work on photos it has never seen. A wedding preset that only works on the RAW it was made from is just a sidecar with a nickname.

## The constraint

Settings for a single original already have a home. The `.omaphoto` beside `photo.RAF` is that photo's grade. It isn't a style you can apply to a different camera from a different year. If the reusable look were tied to one original, you'd have copied a sidecar instead of saving a preset.

So a preset stores development values plus the categories you chose to include. Light / tone can travel while Effects, the detail group, stays behind. The tone curve can travel while crop stays off. A file that stored every slider every time would repeat the checkbox mistake, so the categories are part of the preset because they're part of the decision.

The library has to persist between sessions inside the single binary. There's no cloud preset sync, and I don't think there should be. A `.omapreset` is a small file you can put on a disk, email to yourself or keep with a job. Import has to handle a name collision. Two looks named "Warm" are two looks, and replacing one with the other because the names match is how a careful grade disappears.

The library reads and writes in the background, so naming a look doesn't freeze the viewer on a large RAW.

## What landed

The Photo preset library saves named looks, and you can filter the list by name. You can import and export `.omapreset` files. The file is how a look leaves the machine, and the library is where it stays on this one.

A preset holds development values and the chosen categories, which is why it works across unrelated originals. It doesn't need the original photo's pixels, crop or filename. You can build it on a Fujifilm RAF and apply it to a Canon CR3, a DNG, a PNG scan or a phone JPEG. Only the categories you stored move. Crop and rotation stay out unless you saved them in. The preset uses the same boxes as paste: Light / tone, Tone curve, Color, Effects, Color mixer, Color grading, Crop and Rotation. Effects is the detail group.

The library persists between sessions. Quit and come back and the names are still there, so you don't rebuild "North window" every morning.

When an imported name conflicts, both looks are kept under distinct names. Import a `.omapreset` called "North window" when you already have one, and both stay in the library. The names are forced apart so you can tell which is which, and you can filter down to either one. Nothing gets overwritten because two names matched.

Apply a preset through **Presets… > Use preset…**, including when the target is a whole folder. The preset is the source of the values. The photo you happen to be viewing is only what's in the viewer. Later edits to that photo don't change the named preset. A preset changes when you save a preset, and a sidecar changes when you save settings.

## In the hand

Develop the frame that deserves a name. Choose the categories the way you would for a paste. If the look is tone and color, leave Effects off. Leave crop and rotation out unless you really want every future photo to inherit that framing. Then save the named look to the preset library.

When the list gets long, filter it by name. Typing "Warm" should narrow it to the warm looks.

Export the one you want to keep:

```
.omapreset
```

That file is the portable look. Copy it to another machine, another user or an archive disk, and import the `.omapreset` there. If the name is already taken, the library keeps both under distinct names. Filter, pick the one you meant and use it.

On a photo unrelated to the original, choose **Presets… > Use preset…**. The categories stored in the preset are the ones applied, and the photo keeps whatever you excluded. When the result belongs to that file, save its own `.omaphoto` with **Ctrl+S**. The preset stays the preset, and the sidecar belongs to that photograph.

The next day, build a second look on a different camera and name it. The first one is still in the library when you reopen the app, and neither look references the other's original.

## The edge

A preset isn't a hidden link to one RAW. It has no original to rewrite, and it doesn't pick up later slider moves on the photo you were viewing when you saved it. Change that photo and the named look keeps the values and categories you stored.

A name clash never deletes either look. Import keeps both under distinct names. There's no silent replace and no merge that averages two grades into a third one nobody made.
