---
id: T130
title: Starter source path
slug: omadesign-0-5-8-starter-source-path
excerpt: After install, the clean Studio starter tree is at ~/.local/share/omadesign/plugin-examples/studio-starter. Fork the repo, add a folder under plugins/, and open a pull request with the proof.
tags: [omadesign, 0.5.8, plugins]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-starter-source-path/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-starter-source-path/og.png
---

## The habit

You learn a plugin API by opening someone else's working plugin, not by reading a table and imagining the calls. In the Adobe world that example is often a SDK zip on a developer site, versioned against a specific application year, with a README that points at a forum thread. Affinity's examples, when you can find them, sit next to the macro panel more than they sit in a git tree you can branch. You want the example on disk after a normal install, in a path you can `cd` to, with a license that lets you copy it.

When the example is good enough to ship, you want a place to put it back. A pull request with a folder, a README, a license, a sample document, and a note that says you tried the failure cases. You do not want to bind your plugin to a private function you spotted in the binary.

## The constraint

The live plugin directory is `~/.local/share/omadesign/plugins`. That is where installed bundles run, where `disabled.json` and `behaviors.json` live, and where an app update refuses to clobber `org.omadesign.studio-starter` if you already have it. If the only copy of the source were that live folder, an edit and an example would be the same files, and an update story that preserves your edits would also freeze the example you meant to read fresh.

So the package writes a second tree: the clean Studio starter, under `plugin-examples`. The app update can refresh that tree. Your installed copy stays. Contribution goes upstream, into the `plugins/` directory of the repo, as a uniquely named folder. The host API you may call is the one in the plugin guide. Unexposed internals are off limits because they move and because the sandbox will not see them anyway.

## What landed

After install, the fresh source is:

```text
~/.local/share/omadesign/plugin-examples/studio-starter
```

`XDG_DATA_HOME` replaces `~/.local/share` when it is set. The folder contains `main.lua`, the Orbit SVG, a README, and the MIT license the starter carries. The README tells you to install the folder from **Plugins → Manage plugins → Install folder**, or:

```sh
omadesign --install-plugin /path/to/studio-starter
```

That copies it into the live root under the manifest id `org.omadesign.studio-starter`. Editing the examples tree does not change the running plugin. Editing the live `main.lua` does, after **Reload** in the manager or a new process for the shell.

The starter's README is also the map of preconditions. Select objects before Effects, Gradients, and Batch. Choose a pixel layer before Filters and Brushes. Activate Ribbon, then drag. Patterns and Icons create native objects. Swatches persist in the personal palette library. Behaviors run only when their checkbox is enabled.

Upstream, the same tree lives at `plugins/studio-starter` in the Omadesign repo. Host coverage lives in `src/plugins/tests.rs`. The contribution path is a fork of [https://github.com/michaelmonetized/omadesign](https://github.com/michaelmonetized/omadesign), a new folder under `plugins/` with a unique name, and a pull request.

The pull request has to include `main.lua`, a README that states inputs, output, and the app and API versions you support, and a license. Assets are original or licensed, with attribution. Include a small `.oma` example or steps someone else can follow, plus a screenshot of the output. Verify three behaviors: an error or a cancel leaves the input alone, the output saves and reopens, and document edits undo in one step. Test a batch into a new output folder, not onto the inputs. Manifest discovery stays fast and free of side effects. `oma` is not there yet when the host loads the file to list actions.

If you need a host call that does not exist, open an issue or put the proposal in the pull request. Do not call into app internals that the guide does not list. The guide's table is the contract: add, translate, geometry, remove, fill, gradient, effects, color, brush, palette, asset, svg, pixel, map, message.

Offline copies of that guide are on disk at `~/.local/share/omadesign/docs/plugins.md`, and `omadesign --agent-docs plugins` prints the copy baked into the binary you are running. `CONTRIBUTING.md` sits next to the other offline docs.

## In the hand

```sh
ls ~/.local/share/omadesign/plugin-examples/studio-starter
```

Open `main.lua`. The twelve actions are the file. Copy the folder somewhere you can edit it, change the manifest `id` so you do not collide with `org.omadesign.studio-starter`, and install your copy:

```sh
omadesign --install-plugin ~/src/my-starter
omadesign --list-plugins
```

Two plugins. The original id still runs the package copy. Yours runs your edit. Break `run` on purpose, press **Run**, and confirm the document is unchanged. Fix it, **Reload**, run again, `Ctrl+Z` once.

When the plugin is worth sending upstream, put it in a fork at `plugins/your-name/`, with the README, the license, and a tiny `.oma`. Run the batch into an empty output directory and keep the log. Screenshot the result. Open the pull request with those pieces named.

If you only wanted the clean starter back after you edited the live copy, install from the examples path again. The manager keeps a hidden backup of the previous installed folder before the new one replaces it. The examples path remains the readable source either way.

## The edge

The examples path is not the live plugin, and the live plugin is not the pull request. Shipping a change into Omadesign means a folder under `plugins/` with the README, the license, the sample, and the undo and cancel check. A plugin that depends on an unexposed function is not on the API. Propose the call. Until it is in the guide, it is not yours to require.

Open `~/.local/share/omadesign/plugin-examples/studio-starter/main.lua` and read the action you want to copy.
