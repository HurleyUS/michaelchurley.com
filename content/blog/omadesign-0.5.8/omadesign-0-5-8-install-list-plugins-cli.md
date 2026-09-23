---
id: T128
title: Install list plugins CLI
slug: omadesign-0-5-8-install-list-plugins-cli
excerpt: omadesign --install-plugin and --list-plugins run without a window. Brush, palette, and canvas tools still belong to the desktop. Document commands batch from the shell.
tags: [omadesign, 0.5.8, plugins]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-install-list-plugins-cli/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-install-list-plugins-cli/og.png
---

## The habit

You install a Photoshop panel by dropping a folder into a path Adobe documents once per major version, then you restart and hunt the Window menu. Illustrator scripts land in a Presets folder that moves. Affinity assets get imported through a panel. On a headless box, or over SSH to the machine that actually holds the files, none of those gestures exist. You want to copy a plugin into place from a shell, see that it registered, and run the document command. You still want the brush and the drawing tool in the GUI, because a preset you cannot paint with is a JSON file.

Listing matters as much as installing. You want the command id, the category, and the display name in a terminal, so the `--command` you type later matches an id and not a label you misremembered.

## The constraint

The binary is the same binary that opens the window. A second "plugin admin" tool would drift. Headless install and headless list are flags on `omadesign`. They have to work with no display, because the batch machine may not have one, and because an install step in a script cannot click **Install plugin…**.

The plugin root is still `~/.local/share/omadesign/plugins`, or `$XDG_DATA_HOME/omadesign/plugins` when that variable is set. The manager and the shell read the same folders. A hidden backup on replace is the same backup. Enable state lives in `disabled.json` in that root. There is one catalog.

What the shell cannot do is pretend a brush stroke happened. `oma.brush` and `oma.palette` need the desktop session that owns the Brush tool and the personal library. A canvas tool needs a pointer gesture. Those stay in **Plugins → Manage plugins**. Document actions are the ones `--command` can apply to files.

## What landed

Install a file or a folder:

```sh
omadesign --install-plugin ./my-plugin
```

The argument is a `.lua` file, a folder containing `main.lua`, or an `.omaplug` ZIP with `main.lua` at the root of the archive. The same three shapes the manager accepts from **Install plugin…** and **Install folder…**. On success the process prints `Installed NAME VERSION at PATH`. The path is the installed `main.lua` under the plugin id, not the source you pointed at.

List:

```sh
omadesign --list-plugins
```

Each plugin prints `id version enabled` or `id version disabled`. Each action prints an indented `id · category · name`. Discovery errors go to stderr. No window opens. The catalog is the same one the manager builds: directories in the plugin root, skipping names that start with a dot, reading `main.lua`, skipping duplicate ids with an error.

Studio starter, after a normal install, shows up as `org.omadesign.studio-starter` `1.0.0` `enabled`, with rows for `duotone`, `soft-shadow`, `icon-orbit`, `soft-ink`, `dry-marker`, `ribbon`, `dot-field`, `aurora`, `night-palette`, `nudge`, `selection-info`, and `welcome-document`. The names after the category are what the manager buttons show. The ids are what `--command` wants. `ribbon` is the tool. `soft-ink`, `dry-marker`, and `night-palette` are the preset and swatch actions. `nudge` is the document command the batch example uses.

Replace an existing id and the installer renames the old folder to `.backup-<id>-<n>` before moving the new tree into place. If that move fails, it renames the backup back. The manager's **Reload** is the desktop way to pick up an edit you made in the installed folder. The shell picks up a new process immediately, because each invocation reads the disk.

Enable state is the checkbox. The shell list reports it. It does not toggle it. You still flip the checkbox in the manager, which writes `disabled.json`. A disabled plugin remains listed.

Document commands from here are the batch and single-file forms. `--plugin` can point at the installed folder:

```sh
omadesign --plugin ~/.local/share/omadesign/plugins/org.omadesign.studio-starter \
  --command nudge --input poster.oma --output poster-nudged.oma \
  --params '{"dx":16,"dy":0}'
```

Point `--command` at `soft-ink` or `night-palette` and the run refuses: **Brush and palette actions run in the desktop Plugins menu; batch commands must edit documents**. Point it at `ribbon` and there is no gesture to supply. Activate that one from the manager with **Activate tool**.

`--install-plugin` with no path prints **Use --install-plugin FILE_OR_FOLDER** and fails. The flag does not open a picker. The desktop buttons open the native file dialog. The shell takes a path you already have.

## In the hand

Write a plugin folder. From a terminal with no studio open:

```sh
omadesign --install-plugin ./my-plugin
omadesign --list-plugins
```

Read the id line. Read the indented action ids. Copy the id you mean into `--command`. Run it against one `.oma` and a new output path. Open the output in the studio. The edit is native. `Ctrl+Z` drops it.

Then launch the app. **Plugins → Manage plugins**. The same plugin is in the list, same version, enable box matching the word `enabled` or `disabled` you saw in the terminal. **Reload** if you edited `main.lua` in the installed folder while the window was open. The manager does not watch the file for you.

For a brush, ignore the shell. Select **Brushes · Soft ink brush** and press **Run**. Paint with `B`. For Ribbon path, press **Activate tool** and drag. The shell already told you those rows exist. It will not perform them.

If you reinstall the same id from the shell, list again. The version string is the new manifest. The previous tree is the hidden backup in the plugin root, which `--list-plugins` skips because the name starts with a dot.

## The edge

Install and list do not open a window, and they do not run the plugin. They register a bundle and print the catalog. The shell will not paint, will not save a personal palette, and will not invent a canvas gesture. Those three stay in the desktop manager. Document commands are the ones you batch.

Run `omadesign --list-plugins` and use the action id it prints.
