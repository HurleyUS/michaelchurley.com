---
id: T121
title: Studio starter twelve
slug: omadesign-0-5-8-studio-starter-twelve
excerpt: Studio starter ships twelve Lua actions on first install. A duotone, a shadow, an SVG icon, two brushes, a canvas tool, a pattern, a gradient, a palette, a batch nudge, and two behaviors that stay off until you opt in.
publishedAt: 2026-09-22T11:33:56Z
tags: [omadesign, 0.5.8, plugins]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-studio-starter-twelve/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-studio-starter-twelve/og.png
---

## The habit

You already keep a starter kit. In Illustrator it is an Actions set, a swatch library and a folder of SVG icons you have to find again on each new machine. In Photoshop it is a recorded filter and a brush you exported so you could load it at the other desk. In Affinity it is a macro plus a brush pack. The first hour on a new setup goes to putting it back together. You want one shadow, one pixel treatment, one icon, two brushes, a way to draw a path from a drag, a pattern, a gradient, a named palette, a nudge you can run over a folder of files, and two quiet reports that tell you what you selected and how big the document is. You want to see that kit run before you write your own.

You also learn a plugin API by opening someone else's working plugin. Reading a table and imagining the calls doesn't work as well. In the Adobe world that example is often an SDK zip on a developer site, versioned against a specific application year, with a README that points at a forum thread. Affinity's examples, when you can find them, sit next to the macro panel rather than in a git tree you can branch. You want the example on disk after a normal install, in a path you can `cd` to, with a license that lets you copy it.

When your plugin is good enough to ship, you want a place to send it: a pull request with a folder, a README, a license, a sample document and a note saying you tried the failure cases. You don't want your plugin to depend on a private function you spotted in the binary.

## The constraint

Omadesign 0.5.8 is one native Linux binary. The picture is one `.oma`, and a finished document edit is one Undo step. Lua 5.4.9 and plugin API 1 are built into that binary. There is no second installer for a scripting runtime and no panel that downloads a starter pack before you can press Run.

That decides how the starter ships. The twelve actions come inside the Linux package, and the first installation copies them into the live plugin folder, `~/.local/share/omadesign/plugins`. That folder is where installed bundles run and where `disabled.json` and `behaviors.json` live. Later app updates leave `org.omadesign.studio-starter` alone if you already have it, including a copy you edited.

If that live folder were the only copy of the source, your edits and the example would be the same files, and preserving your edits would also freeze the example you wanted to read fresh. So the package writes a second, clean tree of Studio starter under `plugin-examples`. App updates can refresh that tree while your installed copy stays as it is.

Behaviors stay out of the event stream until you turn on a visible checkbox. A brush preset and a palette write settings, and those settings aren't treated as document undo steps. The document actions are.

Contributions go upstream, into the `plugins/` directory of the repo, as a uniquely named folder. You may only call the host API described in the plugin guide. Internals that aren't exposed are off limits, because they change and because the sandbox can't see them anyway.

## What landed

### The twelve actions

**Plugins > Manage plugins** lists **Studio starter**, id `org.omadesign.studio-starter`, version 1.0.0. After the first install, the live copy is at `~/.local/share/omadesign/plugins/org.omadesign.studio-starter`. The package keeps the clean source at `~/.local/share/omadesign/plugin-examples/studio-starter`. The same tree is available as `studio-starter-1.0.0.omaplug` if you want to install it by hand.

The window is titled **Lua plugins**. Each plugin has an enable checkbox, and actions appear as `Category · Name`. The categories are Filters, Effects, Icons, Brushes, Tools, Behaviors, Batch, Patterns, Gradients and Swatches. The twelve actions cover one job in each category, with two brushes and two behaviors making up the count.

**Midnight duotone** is the pixel filter. It reads the active raster layer, mixes each pixel toward a dark navy or a pale ink based on luminance, and keeps the original alpha. Strength runs from 0 to 1 and starts at 1.

**Soft offset shadow** adds a native drop shadow to the selected vector objects. Blur starts at 12 and offset at 8, and the shadow color is `#11182780`. The effect stays in the native effect stack, so the FX controls can still edit it.

**Orbit icon** reads `orbit.svg` from the plugin folder and places it centered, at a size that starts at 160. The paths come in as editable vectors.

**Soft ink brush** and **Dry marker brush** call the native Raster brush. Soft ink starts at size 36, hardness 0.25, flow 0.28, opacity 0.85, spacing 0.08 and color `#BAC2DE`. Dry marker is fixed at size 18, hardness 0.95, flow 0.55, opacity 0.9, spacing 0.32 and color `#A6E3A1`. Running either one switches the studio to Pixel and selects the Brush tool. That change is a preset, so it doesn't count as a document edit.

**Ribbon path** is the canvas tool. Stroke width starts at 14 and color at `#A6E3A1`. You activate it and drag, and the gesture draws a preview line. On release it adds an open path named Ribbon with no fill and that stroke.

**Dot field** builds a grid of 10 pixel ellipses centered on the canvas. Columns start at 8, rows at 6, spacing at 32 and fill at `#A6E3A1`. Rows and columns are capped at 40, and every circle is a normal shape.

**Aurora gradient** paints the selection with a three-stop linear gradient of `#89B4FA`, `#CBA6F7` and `#A6E3A1`. The native gradient editor controls the stops afterward.

**Night studio swatches** adds a personal palette named Night studio with `#11111B`, `#1E1E2E`, `#BAC2DE`, `#89B4FA`, `#A6E3A1` and `#F38BA8`. It saves into the personal color library, separately from the document's Undo stack.

**Translate selection** moves the selected vectors, with Horizontal starting at 16 and vertical at 0. Its command id is `nudge`, which is the name the batch command line uses.

**Selection count** listens for `selection_changed` and shows a count in the status bar. **Document dimensions** listens for `document_opened` and reports the document name and pixel size. Both are in Behaviors, and both stay quiet until you opt in.

### The source tree

After install, the fresh source is here:

```text
~/.local/share/omadesign/plugin-examples/studio-starter
```

`XDG_DATA_HOME` replaces `~/.local/share` when it is set. The folder contains `main.lua`, the Orbit SVG, a README and the MIT license the starter carries. The README tells you to install the folder from **Plugins > Manage plugins > Install folder**, or:

```sh
omadesign --install-plugin /path/to/studio-starter
```

That copies it into the live root under the manifest id `org.omadesign.studio-starter`. Editing the examples tree doesn't change the running plugin. Editing the live `main.lua` does, after you press **Reload** in the manager or start a new shell process.

The starter's README also lists the preconditions. Select objects before running Effects, Gradients and Batch. Choose a pixel layer before Filters and Brushes. Activate Ribbon, then drag. Patterns and Icons create native objects. Swatches persist in the personal palette library. Behaviors run only when their checkbox is enabled.

### Contributing upstream

Upstream, the same tree lives at `plugins/studio-starter` in the Omadesign repo, and host test coverage lives in `src/plugins/tests.rs`. To contribute, fork [https://github.com/michaelmonetized/omadesign](https://github.com/michaelmonetized/omadesign), add a uniquely named folder under `plugins/`, and open a pull request.

The pull request has to include `main.lua`, a README stating the inputs, the output and the app and API versions you support, and a license. Assets must be original or licensed, with attribution. Include a small `.oma` example or steps someone else can follow, plus a screenshot of the output. Verify three behaviors: an error or a cancel leaves the input alone, the output saves and reopens, and document edits undo in one step. Test a batch into a new output folder, never onto the inputs. Manifest discovery has to stay fast and free of side effects, because `oma` isn't available yet when the host loads the file to list actions.

If you need a host call that doesn't exist, open an issue or put the proposal in the pull request. Don't call into app internals the guide doesn't list. The guide's table is the contract: add, translate, geometry, remove, fill, gradient, effects, color, brush, palette, asset, svg, pixel, map and message.

Offline copies of the guide are on disk at `~/.local/share/omadesign/docs/plugins.md`, and `omadesign --agent-docs plugins` prints the copy built into the binary you are running. `CONTRIBUTING.md` sits next to the other offline docs.

## In the hand

### Running the actions

Install the app, open a document and choose **Plugins > Manage plugins**. If this was a first install and the enable box is on, Studio starter is already in the list.

For the duotone, switch to a Raster document, select the raster layer, choose **Filters · Midnight duotone**, leave Strength at 1 and press **Run**. The status line shows the plugin's message or **Plugin completed · Undo restores document edits**, and alpha is preserved.

For the shadow, select the vector shapes, choose **Effects · Soft offset shadow** and press **Run**. `Ctrl+Z` removes the whole effect in one step.

For the icon, choose **Icons · Orbit icon** and press **Run**. The SVG lands centered at 160 pixels unless you typed another size.

For a brush, choose **Brushes · Soft ink brush** or **Dry marker brush** and press **Run**. The persona switches to Pixel with the Brush tool selected, ready to paint on a raster layer.

For the ribbon, choose **Tools · Ribbon path** and press **Activate tool**. Drag, and a line follows the pointer. Release, and a stroked path named Ribbon appears in the layer. If you activated the tool and don't want a stroke, press Escape or choose **Plugins > Exit plugin tool**. Fewer than two points won't create a path.

For the pattern, choose **Patterns · Dot field** and press **Run**. The circles are ordinary ellipses you can select and move.

For the gradient, select a shape, choose **Gradients · Aurora gradient** and press **Run**. Press `G` afterward if you want the Gradient tool on those stops.

For the palette, choose **Swatches · Night studio swatches** and press **Run**. Open the Palettes tab and Night studio is under Personal. Saving the `.oma` and saving that library are separate buttons.

For the nudge, select vectors, choose **Batch · Translate selection** and press **Run**. They move 16 pixels on x unless you changed Horizontal. The command id is `nudge`.

Leave the behavior checkbox off until you want the status line reporting. Its label is **Run enabled plugins' document and selection behaviors**. The setting is written to `behaviors.json` in the plugin folder and read back on the next launch.

### Making your own copy

```sh
ls ~/.local/share/omadesign/plugin-examples/studio-starter
```

Open `main.lua`. All twelve actions are in that one file. Copy the folder somewhere you can edit it, change the manifest `id` so it doesn't collide with `org.omadesign.studio-starter`, and install your copy:

```sh
omadesign --install-plugin ~/src/my-starter
omadesign --list-plugins
```

You now have two plugins. The original id runs the package copy and yours runs your edit. Break `run` on purpose, press **Run**, and confirm the document is unchanged. Fix it, press **Reload**, run it again, and press `Ctrl+Z` once.

When the plugin is worth sending upstream, put it in a fork at `plugins/your-name/` with the README, the license and a small `.oma`. Run the batch into an empty output directory and keep the log, then take a screenshot of the result. Open the pull request and list those pieces.

If you just want the clean starter back after editing the live copy, install from the examples path again. The manager keeps a hidden backup of the previously installed folder before the new one replaces it, and the examples path stays the readable source either way.

## The edge

The folder under `plugin-examples` is the clean source, and the manager doesn't run it. Editing that tree does nothing to the live plugin until you install the folder or the `.omaplug`. An app update doesn't replace `plugins/org.omadesign.studio-starter` when that folder already exists, so your local edits survive. Reinstalling through the manager renames the previous folder to a hidden `.backup-…` name and restores it if the new copy fails to install.

Enabling the plugin doesn't turn on its behaviors. The manager's behavior checkbox is a second switch, and it stays off until you turn it on.

The live plugin isn't the pull request either. Getting a change into Omadesign means a folder under `plugins/` with the README, the license, the sample, and the undo and cancel checks. A plugin that depends on an unexposed function isn't using the API. Propose the call, and until it is in the guide, don't require it.
