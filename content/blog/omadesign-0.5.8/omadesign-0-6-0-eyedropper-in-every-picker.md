---
id: R060-06
title: An eyedropper in every color picker
slug: omadesign-0-6-0-eyedropper-in-every-picker
excerpt: "0.6.0 puts an eyedropper in every color picker. The sampled pixel goes back to the picker that asked for it, whether that is a gradient stop, an effect color or a fill. The hex field copies and pastes."
publishedAt: 2026-09-25T09:20:25Z
tags: [omadesign, 0.6.0, color, eyedropper]
coverImage: /blog/omadesign-0-6-0/omadesign-0-6-0-eyedropper-in-every-picker/og.png
---

## The habit

You are editing the third stop of a gradient and want it to match a color in a reference image. The eyedropper tool samples into the fill. So you sample into the fill, copy the hex, open the gradient stop, paste it, and put the fill back.

Or you have a hex code in a brand doc and want it in a shadow color. You click into the hex field, and Ctrl+V does not do what you expect.

## The constraint

Since 0.5.4, one shared picker handles artwork, paint, gradient stops and effect colors, with alpha in all of them. That meant I could fix this in one place. The picker gets its own eyedropper, and the sample goes back to whichever picker asked for it instead of to the fill.

0.5.9 already let the eyedropper tool grab any pixel on the screen, including other windows. The picker's eyedropper uses the same screen sampling.

## What landed

Every color picker has an eyedropper next to the hex field. Click it and the next pixel you pick on the screen comes back to that picker. The sampled color also lands in your recent colors.

The hex field copies and pastes. Copy hex and Paste hex buttons sit beside it, and Ctrl+C and paste work while the field has focus. The picker parses pasted text as hex, so `#RRGGBB` and the eight-digit `#RRGGBBAA` from 0.5.4 both work.

This is the commit "Sample from any color picker, paste hex, and key a stroke dash" in the [0.6.0 release](https://github.com/michaelmonetized/omadesign/releases/tag/v0.6.0).

## In the hand

Select a shape with a gradient fill and open the color for one stop. Click the eyedropper in the picker and click a color in a reference photo, in Omadesign or in your browser. The stop changes. The fill's other stops stay put.

Open a drop-shadow color in the FX studio. Copy a hex from a brand doc, click the picker's Paste hex button, and the shadow takes the color.

## The edge

Picker sampling is screen sampling. It reads what is displayed, so a color under a semi-transparent layer comes back as the mixed color you see. You do not get the value underneath.

Paste only accepts text that parses as hex. Anything else is ignored and the color stays as it was.
