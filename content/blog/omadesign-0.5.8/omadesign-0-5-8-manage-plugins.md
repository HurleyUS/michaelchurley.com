---
id: T120
title: Manage plugins
slug: omadesign-0-5-8-manage-plugins
excerpt: Plugins → Manage plugins installs a .lua file, a folder with main.lua, or an .omaplug bundle. Each plugin has an Enable checkbox. An update keeps a hidden backup of the previous folder. Reload after you edit.
publishedAt: 2026-09-22T11:32:56Z
tags: [omadesign, 0.5.8, plugins]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-manage-plugins/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-manage-plugins/og.png
---

## The habit

You install a Photoshop panel by dropping a folder into a Plug-ins directory, restarting and hunting for the menu. Illustrator scripts go in Presets/Scripts and show up after a restart. Affinity, when it takes an add-on, has had its own install routine. The failure people remember is an update that replaced a folder they had edited, with no copy of yesterday's version, and a manager that keeps running the code it loaded at launch while you look at a file you just saved.

You want one window where you install, enable, run and reload after an edit. You want a backup of the previous folder when an update lands. And you don't want a store you have to sign into before a local `.lua` file is allowed to exist.

## The constraint

0.5.8 embeds Lua 5.4.9 and plugin API 1 in the binary, and the manager is how plugins get in. There's no remote marketplace in this release, so the manager isn't a storefront. It installs files you already have, in three shapes: a single `.lua` file, a folder whose entry point is `main.lua`, or an `.omaplug` ZIP with `main.lua` at the root of the archive. A ZIP of the parent directory, with `main.lua` nested one level down, is the wrong shape. The archive root is the plugin root.

Enable is per plugin. It's a checkbox, so you don't restart the whole app to unload one script. Behaviors, which listen for document and selection events, only see enabled plugins, and they stay off until their own checkbox opts in. The enable switch is the first gate.

Editing a file on disk must not silently swap the VM under a running canvas. Reload is the signal. You edit, you click Reload, and the next run reads the installed copy you changed. Until then, the manager keeps the copy it loaded.

Updating an installed plugin keeps a hidden backup of the previous folder. The new folder becomes the one that runs, and the old one stays on disk, so an update never deletes anything. App updates follow a separate rule: reinstalling Omadesign keeps the installed plugins you customized. The hidden backup covers plugin updates inside the manager. Both exist so there's always something to go back to.

Archives have to be predictable. Path traversal and symlinks are rejected, and plugin file access stays inside the installed bundle. A ZIP that tries to write `../../.ssh` doesn't get a partial install outside the plugin directory. Bundles allow 512 entries and 64 MiB total. The manager enforces those limits before any plugin action runs.

## What landed

Open Plugins > Manage plugins. You can install from a `.lua` file, from a folder containing `main.lua`, or from an `.omaplug` with `main.lua` at its root. Each installed plugin has an Enable checkbox. Turn it on to use the plugin's actions, or off to keep it installed and out of the way.

You run actions from the same window. Select an action, enter its parameters and choose Run. The categories the manager knows are Filters, Effects, Icons, Brushes, Tools, Behaviors, Batch, Patterns, Gradients and Swatches. Other category names are allowed and show up under All categories. Studio starter, installed on first launch, has twelve actions across those categories, and you manage it here like any other plugin.

After you edit an installed plugin, click Reload and the manager reads the folder again. Saving in your editor isn't the same as Reload. The next Run uses the reloaded manifest. Top-level Lua should return the manifest and define functions. `oma` is available when an action runs, not while the manager discovers manifests, so Reload can list a plugin without executing its `run`.

The manager builds parameter forms. `number` is the default kind, and `text`, `color` and `boolean` are the others. Each needs an `id`, a `label` and a `default` of the right type. Numbers can set `min` and `max`, and colors are `#RRGGBB` or `#RRGGBBAA`. The host validates values and rejects unknown parameters before the action proceeds. The fields appear in the manager, so there's no side config file to edit by hand.

Headless install uses the same installer without the window:

```sh
omadesign --install-plugin ./my-plugin
omadesign --list-plugins
```

`--list-plugins` confirms the id from a script. The installed starter is at `~/.local/share/omadesign/plugins/org.omadesign.studio-starter`. Fresh example source, which an app update never forces over your edits, is at `~/.local/share/omadesign/plugin-examples/studio-starter`.

To give someone a plugin, ZIP the contents of the folder with `main.lua` at the root and the assets, README and license inside. Name it `your-plugin.omaplug`, and they install that file in the manager. The downloadable starter bundle ships the same way, as `studio-starter-1.0.0.omaplug`.

Ids have to be stable and unique, using letters, digits, dots, hyphens and underscores, with no leading dot. Action ids have to be unique within the plugin. The version field is yours and doesn't need to match 0.5.8. The API version, 1, does need to match the host.

The hidden backup is made whenever the installed folder is updated, and it stays on this machine. Together with Reload, the loop is install, enable, run, edit, reload and run again, with an update whenever you have a new bundle.

## In the hand

Write a `main.lua` that returns a manifest with `api = 1` and one action, and put it in a folder.

1. Open Plugins > Manage plugins.
2. Install the folder. The plugin appears in the list.
3. Turn on its Enable checkbox.
4. Select the action, fill in the parameters the manifest declared, and click Run.
5. Edit `main.lua` in the installed folder, come back to the manager and click Reload.
6. Run again. The new code is what runs.

When someone else needs it, package it:

```sh
# from inside the plugin folder, so main.lua is at the archive root
zip -r ../your-plugin.omaplug main.lua
```

Install `your-plugin.omaplug` on the other machine through Manage plugins and enable it there. If they're on 0.5.8, they already have the API 1 host and don't need to install Lua.

To update the plugin, install the newer bundle over it. The manager keeps a hidden backup of the previous folder. Reload if you were mid-edit, then run the action. If the new version is wrong, the previous folder is still on disk.

From a script, use `omadesign --install-plugin ./my-plugin` and `omadesign --list-plugins`. The window and the terminal install the same way. Enable the plugin in the manager when you want its actions in the UI.

If a ZIP is rejected, open it and check the root. `main.lua` has to be there, not inside an extra directory. Symlinks and `..` paths are rejected on purpose, so rebuild the archive from the files without links that point outside the folder.

## The edge

You have to Reload after editing an installed plugin. Saving the file doesn't swap the running copy, and the manager keeps the loaded plugin until you Reload.

An update keeps a hidden backup of the previous installed folder, so it never destroys your only copy. Archives with path traversal or symlinks are rejected, the install never writes a partial plugin outside the bundle, and the plugin's file access stays inside that bundle.

There's no marketplace tab waiting on a network. Plugins > Manage plugins installs the `.lua` file, folder or `.omaplug` you already have.
