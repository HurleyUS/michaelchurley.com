---
id: T141
title: Plugins without ExtendScript tax
slug: omadesign-0-5-8-plugins-without-extendscript-tax
excerpt: 0.5.8 runs Lua plugins inside the binary. Filters, effects, icons, brushes, tools, patterns, gradients, swatches, and a batch command. One undo. No separate runtime.
tags: [omadesign, 0.5.8, plugins]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-plugins-without-extendscript-tax/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-plugins-without-extendscript-tax/og.png
---

## The habit

ExtendScript is a real language with a real object model, and the tax is everything around the script. You install a matching application year. You put the file in a Presets path that moves. You grant it the filesystem because the sample used `File`. A panel that worked in 2019 asks you to debug a missing runtime in 2024. Photoshop's scripting and UXPs split that world again. Affinity macros record a gesture you can replay, which is the right tool for a repetitive click and a poor tool for a folder of documents or a pixel kernel you want to read.

The jobs are ordinary. A filter. A live shadow. An SVG icon. Two brushes. A tool you drag. A pattern. A gradient. A swatch book. A nudge across a folder. You want those in the app you are already drawing in, with Undo meaning the whole action, and with the script unable to wander off into the home directory.

## The constraint

0.5.8 already embeds Lua 5.4.9 and plugin API 1. Adding a second runtime would be the tax again: another install, another version pin, another place for the starter kit to drift from the binary. The plugin runs on a background worker inside this process. It sees a snapshot. It returns native edits or it returns nothing. The studio commits one batch or discards the run.

The API stays on a list you can memorize, because an API the size of the application is how scripts bind to panels that got renamed. Shapes, geometry, fills, gradients, effects, brushes, palettes, SVG, pixels, a status message. Fresh VM every run. No `io`, no `os`, no `require`, no network, no exec. Fifteen seconds, 64 MiB of Lua heap, 20,000 edits. There is no marketplace in this release fetching plugins you did not ask for.

## What landed

**Plugins → Manage plugins** installs a `.lua` file, a folder with `main.lua`, or an `.omaplug` ZIP. Each plugin has an enable checkbox. **Reload** picks up an edit. A replace keeps a hidden backup of the previous folder and restores it if the new copy fails.

Studio starter is installed on first launch. Twelve actions, id `org.omadesign.studio-starter`. Midnight duotone maps pixels and keeps alpha. Soft offset shadow writes a native, editable shadow. Orbit icon places SVG paths. Soft ink and Dry marker load Raster brush presets and switch you to Pixel. Ribbon path is **Activate tool**, a preview line, then an editable path on release. Dot field adds ellipses. Aurora gradient sets a native three-stop fill. Night studio swatches saves a personal palette, outside document Undo, same as a brush preset. Translate selection moves vectors. Its command id is `nudge`. Selection count and Document dimensions are behaviors. They stay off until you enable **Run enabled plugins’ document and selection behaviors**. That checkbox is remembered in `behaviors.json`. A behavior does not re-fire on its own output.

A finished document action is one `Ctrl+Z`. Errors, **Cancel run**, and a document or selection that changed mid-run leave the `.oma` alone. The status line says the result was discarded, or it says **Plugin completed · Undo restores document edits**.

The shell is the same binary:

```sh
omadesign --install-plugin ./my-plugin
omadesign --list-plugins
omadesign --plugin ~/.local/share/omadesign/plugins/org.omadesign.studio-starter \
  --command nudge --batch ./input --output-dir ./output \
  --params '{"dx":20,"dy":0}'
```

Batch reads the immediate `.oma` files, filename order, writes new files, refuses existing outputs, keeps going after a bad file, and exits nonzero if anything failed. Brush, palette, and canvas-tool actions are refused on the command line. They need the desktop session.

You distribute a ZIP of the folder contents named `something.omaplug`. You read the API from `~/.local/share/omadesign/docs/plugins.md` or from `omadesign --agent-docs plugins`. The clean starter source is `~/.local/share/omadesign/plugin-examples/studio-starter`. Upstream contributions are a folder under `plugins/` in a fork, with a README, a license, a sample `.oma`, and a check that cancel and undo behave.

Categories in the manager are Filters, Effects, Icons, Brushes, Tools, Behaviors, Batch, Patterns, Gradients, Swatches. Other names show under All categories. The host calls are the ones in the guide. Hidden, locked, and guide objects are not targets.

## In the hand

Open a poster. **Plugins → Manage plugins**. Run **Effects · Soft offset shadow** on a selection. One shadow stack appears. `Ctrl+Z` removes it. Run **Patterns · Dot field**. `Ctrl+Z` removes the grid, not one circle at a time.

Arm **Tools · Ribbon path**. Drag. Release. A path named Ribbon is editable with `A`. Escape before release and the document is untouched.

Switch to a raster layer. Run **Filters · Midnight duotone**. Alpha is the alpha you had. Run **Brushes · Soft ink brush** and paint with `B`. The preset is not an entry on the document history.

Turn on the behavior checkbox. Select an object. The status line reports the count once. Turn it off if you want silence. The choice is still off tomorrow.

From a terminal, list plugins and copy the action id. Batch `nudge` into an empty output directory. Open one result. The move is a normal document edit. The inputs in the source folder have not moved.

When you write your own, start from the examples path, change the id, install the folder, and break `run` once to see the document stay put.

## The edge

A plugin does not get ExtendScript's filesystem, and it does not get a private history with one step per object. Failure and cancel apply nothing. There is no remote catalog in 0.5.8. Brush and palette results are settings. Document Undo does not rewind them. Behaviors do nothing until the second checkbox is on. The shell will not invent a brush stroke.

Open **Plugins → Manage plugins** and press **Run** on one document action. Then press `Ctrl+Z`.
