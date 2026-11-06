---
id: R060-05
title: Simplify after a boolean subtract
slug: omadesign-0-6-0-simplify
excerpt: "0.6.0 adds Simplify next to Pathfinder. It drops the extra nodes a boolean subtract leaves on a straight edge, keeps nodes that bend a curve, and leaves corner handles alone."
publishedAt: 2026-09-25T09:19:25Z
tags: [omadesign, 0.6.0, paths, pathfinder]
coverImage: /blog/omadesign-0-6-0/omadesign-0-6-0-simplify/og.png
---

## The habit

Subtract a circle from a rectangle and look at the result with the Node tool. Along the straight top edge, where nothing changed, there are extra nodes. They do nothing visually. They get in the way when you try to drag that edge, and they pile up with every boolean after that.

The usual fix is to delete them one by one, which is tedious and easy to get wrong on a curve.

## The constraint

Simplify should only remove nodes that do nothing. A node that already bends a curve has to stay, or the shape changes. Corner handles have to stay too, because they are how the rounded corners from the Node tool work.

It also had to live where the booleans are, since that is when you need it.

## What landed

Simplify sits next to Pathfinder. It drops the extra nodes a boolean subtract leaves on a straight edge. Straight runs collapse. A node that already bends the curve stays. Corner handles stay. It runs on every selected shape.

The commit is "Simplify the extra nodes a boolean subtract leaves on a path" in the [0.6.0 release](https://github.com/michaelmonetized/omadesign/releases/tag/v0.6.0).

## In the hand

Draw a rectangle and a circle overlapping one edge. Select both and run Object > Pathfinder > Subtract. Press A and look at the straight edges, which now carry extra nodes. Click Simplify next to the Pathfinder buttons. The straight edges drop to the nodes they need, and the curve where the circle bit in keeps its shape.

This pairs with the editable compound paths from 0.5.8. Repeated unions and subtracts keep their holes, and Simplify keeps the node count down along the way.

## The edge

Simplify has no tolerance control in the UI. It uses a fixed 1.5 px threshold. If a nearly straight run has a node you meant to keep, check it after Simplify and undo if needed.

Simplify cleans up nodes on shapes you already have. Combining or cutting shapes is still Pathfinder's job.
