---
id: R060-07
title: Thumbnails in the shape, icon and photo libraries
slug: omadesign-0-6-0-library-thumbnails
excerpt: "0.6.0 shows a preview in the shape and icon library rows, with Phosphor drawing the real glyph, and loads free-photo thumbnails while the browser is open. Both libraries now sit at the bottom of the tool stack."
publishedAt: 2026-09-25T09:21:25Z
tags: [omadesign, 0.6.0, libraries, icons]
coverImage: /blog/omadesign-0-6-0/omadesign-0-6-0-library-thumbnails/og.png
---

## The habit

You search an icon library for "star" and get forty rows of names: star, star-four, star-half, star-and-crescent. You pick one, it downloads, it is the wrong one, and you undo and try the next.

The free-photo browser had the same issue with higher stakes. Nobody picks a photo from a list of tags and dimensions.

## The constraint

Previews have to be cheap. Some icon libraries need a download before there is anything to draw, and the browser should not fetch every icon in a search result just to show a row.

Photo thumbnails come from the provider over the network, so they arrive on their own schedule. The list has to stay usable while they load.

## What landed

Shape and icon rows show a thumbnail. Phosphor draws the actual glyph, since those icons already ship with the app. The other libraries draw a stand-in until you pick the name.

Free photos load their thumbnail while the photo browser is open, using the provider's preview image. Each result shows an empty placeholder until its preview arrives.

In Vector, Pixel, Layout and Motion, the shape library and the photo picker now sit at the bottom of the tool stack, with shapes above photos. Photo keeps those two buttons in the top bar.

These are the commits "Show thumbnail previews in the shape and photo libraries" and "Put the shape and photo pickers at the bottom of the tool stack" in the [0.6.0 release](https://github.com/michaelmonetized/omadesign/releases/tag/v0.6.0).

## In the hand

Open the shape library from the bottom of the tool stack and search "arrow" in Phosphor. You see the arrows themselves as well as their names. Click the one you want.

Open the photo picker, search "mountain", and watch the previews fill in over the result list.

## The edge

Only Phosphor gets a real preview before you pick. For the other icon libraries, the row is still a name with a stand-in box, and you find out what it looks like when you place it.

Photo previews need the network and the photo provider. From the source, Pixabay and Pexels search only works with your own API key for that provider (an environment variable or `~/.config/omadesign/assets.toml`), and Picsum serves sample photos. If a preview does not load, the result is still listed with its tags and size.
