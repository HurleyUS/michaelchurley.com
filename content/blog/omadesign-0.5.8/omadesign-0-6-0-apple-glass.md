---
id: R060-04
title: Apple glass: displacement through a turbulence map
slug: omadesign-0-6-0-apple-glass
excerpt: "0.6.0 adds Apple glass to the FX stack. It displaces the picture through a turbulence map, on the canvas and in exported SVG as feTurbulence plus feDisplacementMap. The existing Displacement effect is unchanged."
publishedAt: 2026-09-25T09:18:25Z
tags: [omadesign, 0.6.0, effects, svg]
coverImage: /blog/omadesign-0-6-0/omadesign-0-6-0-apple-glass/og.png
---

## The habit

Refracted glass is a common interface look: a panel that bends what is behind it, or a logo that looks like it sits under a pane of rippled glass.

In SVG, the standard way to fake refraction is a displacement map fed by noise, with `feTurbulence` feeding `feDisplacementMap`. Omadesign's FX stack already had both pieces, Turbulence and Displacement, as separate entries. You could wire them together by hand, but it was fiddly, and you had to know which channels to route.

## The constraint

The FX parameters are SVG parameters. The rule for the FX stack is that the graph you build is the graph you export. A glass effect had to follow that rule and write real SVG filter primitives instead of baking a raster.

The existing Displacement effect also had to stay exactly as it was, because people may already have documents using it.

## What landed

Apple glass is a new entry in the FX stack. It builds a turbulence map and displaces the picture through it, both in the app and in the SVG filter. It has two controls, Scale and Frequency.

On export, the SVG filter writes a fractal-noise `feTurbulence` and an `feDisplacementMap` that reads the red and green channels of that noise. The existing Displacement effect is unchanged.

The commit is "Add Apple glass as a displacement of turbulence" in the [0.6.0 release](https://github.com/michaelmonetized/omadesign/releases/tag/v0.6.0).

## In the hand

Select a shape or a placed image, open the FX studio, and add Apple glass. Raise Scale for a stronger bend. Lower Frequency for bigger, slower ripples, or raise it for finer grain. Export SVG and open the file in a browser. The filter is there as two primitives you can read and edit.

## The edge

The canvas and the SVG use different noise. The in-app render offsets pixels by a blocky, cell-based hash noise. The export uses the browser's `feTurbulence` (fractal noise, two octaves), which is smoother. Scale and Frequency mean the same thing in both, but the texture will not match pixel for pixel. Check the exported SVG in the browser you are targeting.

Apple glass displaces the picture. It has no built-in frosting or backdrop blur, so stack a blur in the FX studio if you want one.
