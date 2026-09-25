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

You install a Photoshop panel by dropping a folder in a Plug-ins directory, then you restart, then you hunt a menu. Illustrator scripts go in Presets/Scripts and show up after a restart. Affinity, when it takes an add-on, has had its own install dance. The failure you remember is an update that replaces the folder you had edited, with no copy of yesterday's version, and a manager that keeps running the code it loaded at launch while you stare at a file you just saved.

You want one window. Install. Enable. Run. Reload after an edit. A backup of the previous folder when an update lands. No store you have to be signed into before a local `.lua` file is allowed to exist.

## The constraint

0.5.8 embeds Lua 5.4.9 and plugin API 1 in the binary. The manager is the door. There is no remote marketplace in this release, so the manager cannot be a storefront. It installs files you already have. Three shapes cover what people actually ship: one `.lua` file, a folder whose entry is `main.lua`, or an `.omaplug` ZIP with `main.lua` at the root of the archive. A ZIP of the parent directory, with `main.lua` nested one level down, is the wrong shape. The root of the archive is the plugin root.

Enable is per plugin. A checkbox, not a restart of the whole app to unload one script. Behaviors, which listen for document and selection events, only see enabled plugins, and they stay off until their own checkbox opts in. The enable switch is the first gate.

Editing a file on disk must not hot-swap the VM underneath a running canvas with no signal. Reload is the signal. You edit. You Reload. The next run reads the installed copy you just changed. Until Reload, the manager is still on the copy it loaded.

Updates of an installed plugin keep a hidden backup of the previous folder. The new folder becomes the one that runs. The previous folder remains on disk, hidden, so an update is not a delete. App updates are a different preservation rule: reinstalling Omadesign keeps the installed plugins you already customized. The hidden backup is the plugin-folder update inside the manager. Both exist so an update has somewhere to go back to.

Archives have to be boring. Path traversal and symlinks are rejected. Plugin file access stays inside the installed bundle. A ZIP that tries to write `../../.ssh` does not get a partial install outside the plugin directory. Bundles allow 512 entries and 64 MiB total. Those limits are the manager's refusal, enforced before a plugin action ever runs.

## What landed

Open Plugins → Manage plugins. Install from a `.lua` file, from a folder that contains `main.lua`, or from an `.omaplug` with `main.lua` at its root. Each installed plugin has an Enable checkbox. Turn it on to use its actions. Turn it off to keep it installed and out of the way.

The same window is where you run. Select an action, enter its parameters, choose Run. Categories the manager already knows are Filters, Effects, Icons, Brushes, Tools, Behaviors, Batch, Patterns, Gradients, and Swatches. Another category name is allowed. It shows up under All categories. Studio starter, installed on first launch, has twelve actions across those categories. You manage it here like any other plugin.

After you edit an installed plugin, use Reload. The manager reads the folder again. A save in your editor is not Reload. The next Run uses the reloaded manifest. Top-level Lua should return the manifest and define functions. `oma` is available when the action runs, not while the manager is discovering manifests, so Reload can list a plugin without executing its `run`.

Parameter forms are part of the manager. `number` is the default kind. `text`, `color`, and `boolean` are the others. Each needs an `id`, a `label`, and a `default` of the right type. Numbers may set `min` and `max`. Colors are `#RRGGBB` or `#RRGGBBAA`. The host validates values. Unknown parameters are rejected before the action proceeds. You see the fields in the manager. You do not hand-edit a side config the manager will ignore.

Headless install uses the same installer without the window:

```sh
omadesign --install-plugin ./my-plugin
omadesign --list-plugins
```

`--list-plugins` confirms the id from a script. Installing and listing are the manager's job in a terminal. The installed starter lives at `~/.local/share/omadesign/plugins/org.omadesign.studio-starter`. Fresh example source, the kind an app update does not force over your edits, is at `~/.local/share/omadesign/plugin-examples/studio-starter`.

To hand someone a plugin, ZIP the contents of the folder. `main.lua` at the root of the ZIP. Assets, README, and license inside. Name it `your-plugin.omaplug`. They install that file in the manager. A downloadable starter bundle is shipped the same way, `studio-starter-1.0.0.omaplug`.

Ids have to be stable and unique. Letters, digits, dots, hyphens, underscores. No leading dot. Action ids are unique inside the plugin. The version field is yours. It is not required to match 0.5.8. API 1 is required to match the host.

The hidden backup happens when the installed folder is updated. The previous folder is kept, hidden, on this machine. Combined with Reload, the loop is install, enable, run, edit, reload, run. Update when you have a new bundle.

## In the hand

Write `main.lua` that returns a manifest with `api = 1` and one action. Put it in a folder.

1. Open Plugins → Manage plugins.
2. Install that folder. The plugin appears in the list.
3. Turn on its Enable checkbox.
4. Select the action. Fill the parameters the manifest declared. Run.
5. Edit `main.lua` in the installed folder. Come back to the manager. Click Reload.
6. Run again. The new code is the code that runs.

Package it when someone else needs it:

```sh
# from inside the plugin folder, so main.lua is at the archive root
zip -r ../your-plugin.omaplug main.lua
```

Install `your-plugin.omaplug` on the other machine through Manage plugins. Enable it there. If their app is 0.5.8, API 1 is the host they have. They do not install Lua.

Update that plugin by installing the newer bundle over it. Then look for the hidden backup of the previous folder. The manager kept it. Reload if you were mid-edit. Run the action. If the new one is wrong, the previous folder is still on disk because the update kept the backup.

Check a script install with `omadesign --install-plugin ./my-plugin` and `omadesign --list-plugins`. The window and the terminal install the same way. Enable in the manager when you want the actions in the UI.

If the ZIP is rejected, open it and look at the root. `main.lua` has to be there, not inside an extra directory. Symlinks and `..` paths are rejected on purpose. Rebuild the archive from the files, without links that point outside the folder.

## The edge

Reload is required after you edit an installed plugin. Saving the file does not swap the running copy. The manager keeps the loaded plugin until you Reload.

An update keeps a hidden backup of the previous installed folder. The update does not destroy the only copy of the plugin you had. Path traversal and symlinks in an archive are rejected. The install does not write a partial plugin outside the bundle. File access for the plugin stays inside that bundle.

There is no marketplace tab waiting on a network. Plugins → Manage plugins installs the `.lua`, the folder, or the `.omaplug` you already have.

Open Plugins → Manage plugins, install the bundle, enable it, and Reload after every edit.
