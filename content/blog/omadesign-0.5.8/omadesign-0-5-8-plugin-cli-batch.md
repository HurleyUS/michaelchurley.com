---
id: T127
title: Plugin CLI batch
slug: omadesign-0-5-8-plugin-cli-batch
excerpt: omadesign --plugin and --batch walk every immediate .oma in filename order, write new files, keep the inputs, and refuse a path that already exists.
publishedAt: 2026-09-22T11:38:56Z
tags: [omadesign, 0.5.8, plugins]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-plugin-cli-batch/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-plugin-cli-batch/og.png
---

## The habit

You have a folder of fifty posters and one change to make: nudge the lockup, recolor a shape, or run the same pattern on each. In Illustrator that is a batch action or a Bridge script, and the action wants the files open in a GUI. In Photoshop it is Image Processor, which will overwrite files if you point it at the same folder. In Affinity it is a macro you run by hand, because batch work there means a person at the keyboard. I wanted a shell command that leaves the inputs untouched, stops on a file whose output already exists instead of overwriting it, and records file seven's error while file eight still runs.

Order matters when the folder is a sequence, and filename order is the one you can predict. Recursive walks are how a script picks up last year's `_export` directory and treats it as source.

Getting plugins in place is its own habit. You install a Photoshop panel by dropping a folder into a path Adobe documents once per major version, then restart and search the Window menu. Illustrator scripts go into a Presets folder that moves. Affinity assets get imported through a panel. On a headless box, or over SSH to the machine that holds the files, none of those gestures exist. You want to copy a plugin into place from a shell, see that it registered, and run the document command. You still want brushes and drawing tools in the GUI, because a brush preset you can't paint with is just a JSON file.

Listing matters as much as installing. You want the command id, the category and the display name in a terminal, so the `--command` you type later matches a real id and not a label you misremembered.

## The constraint

The desktop app is a window. A folder job shouldn't need that window or a display. The same plugin, command id and parameter check have to run headless, because a behavior that only exists in the GUI will drift from the one you test in the shell. For the same reason there is no separate plugin admin tool. Headless install, list and run are flags on `omadesign` itself. They have to work with no display, because the batch machine may not have one and a script can't click **Install plugin…**.

The plugin root is still `~/.local/share/omadesign/plugins`, or `$XDG_DATA_HOME/omadesign/plugins` when that variable is set. The manager and the shell read the same folders and make the same hidden backup on replace. Enable state lives in `disabled.json` in that root. There is one catalog.

The `.oma` you pass in is the source. Writing back onto that path would make a failed run unrecoverable, so the output is always a new file, and if that path exists, the run refuses it. A batch covers one directory and the files directly in it, without descending into subfolders. A crash on one document can't abort the loop, or one bad file would stop a night job. The process still has to exit nonzero when anything failed, or a Makefile will think the folder is done.

The shell can't pretend a brush stroke happened. `oma.brush` and `oma.palette` need the desktop session that owns the Brush tool and the personal library. Brush presets and palettes have no document to write, and a canvas tool needs a pointer gesture. Those actions stay in **Plugins > Manage plugins**. The shell runs document commands.

## What landed

### Install and list

Install a file or a folder:

```sh
omadesign --install-plugin ./my-plugin
```

The argument is a `.lua` file, a folder containing `main.lua`, or an `.omaplug` ZIP with `main.lua` at the root of the archive. Those are the same three shapes the manager accepts from **Install plugin…** and **Install folder…**. On success the process prints `Installed NAME VERSION at PATH`, where the path is the installed `main.lua` under the plugin id. The source you pointed at stays where it was.

`--install-plugin` with no path prints **Use --install-plugin FILE_OR_FOLDER** and fails. The flag doesn't open a picker. The desktop buttons open the native file dialog, and the shell takes a path you already have.

If you install over an existing id, the installer renames the old folder to `.backup-<id>-<n>` before moving the new tree into place. If that move fails, it renames the backup back. In the desktop app, the manager's **Reload** picks up an edit you made in the installed folder. The shell sees changes right away, because each new process reads the disk.

List:

```sh
omadesign --list-plugins
```

Each plugin prints `id version enabled` or `id version disabled`, and each action prints an indented `id · category · name` line. Discovery errors go to stderr, and no window opens. The catalog is the same one the manager builds. It reads directories in the plugin root, skips names that start with a dot, reads `main.lua`, and skips duplicate ids with an error.

After a normal install, Studio starter shows up as `org.omadesign.studio-starter` `1.0.0` `enabled`, with rows for `duotone`, `soft-shadow`, `icon-orbit`, `soft-ink`, `dry-marker`, `ribbon`, `dot-field`, `aurora`, `night-palette`, `nudge`, `selection-info` and `welcome-document`. The names after the category are what the manager buttons show, and the ids are what `--command` wants. `ribbon` is the tool. `soft-ink`, `dry-marker` and `night-palette` are the preset and swatch actions. `nudge` is the document command the batch examples use.

The list reports enable state but doesn't change it. You still toggle the checkbox in the manager, which writes `disabled.json`. A disabled plugin stays in the list.

### Run a command on one file

```sh
omadesign --plugin ./my-plugin --command dots \
  --input input.oma --output output.oma \
  --params '{"count":12,"color":"#A6E3A1"}'
```

`--plugin` takes a `main.lua` or a folder that contains one, including the installed folder:

```sh
omadesign --plugin ~/.local/share/omadesign/plugins/org.omadesign.studio-starter \
  --command nudge --input poster.oma --output poster-nudged.oma \
  --params '{"dx":16,"dy":0}'
```

`--command` takes the action id. Display names don't work there. For the starter, the ids you will actually type include `duotone`, `soft-shadow`, `icon-orbit`, `dot-field`, `aurora` and `nudge`. `--params` is JSON. If you leave it out, the host passes an empty object and the action's defaults apply. The host checks types, min and max the same way the manager does, and rejects unknown keys.

### Run a command on a folder

Here is a folder run using Studio starter's nudge:

```sh
omadesign --plugin ~/.local/share/omadesign/plugins/org.omadesign.studio-starter \
  --command nudge --batch ./input --output-dir ./output \
  --params '{"dx":20,"dy":0}'
```

`--batch` reads the directory you name and keeps the entries that are files ending in `.oma`. It doesn't walk subfolders. The paths are sorted, which in a flat folder means filename order. An empty folder gives the error **Batch folder has no .oma documents**. `--batch` requires `--output-dir`, and the directory is created if it doesn't exist. Each output file uses the input's filename inside that directory.

The input file is only read, and the writer opens a new path. If an output already exists, that file fails with **Output exists; choose a new path:**, the source stays as it was, and the loop continues. At the end, any failures are reported and the process exits nonzero. A clean run prints `input → output` for each file and exits zero.

### What headless runs can and can't do

Headless selection isn't your last mouse selection. The command line selects every visible vector shape that isn't locked or a guide, on an editable layer, and uses the first editable layer as the active layer. Translate selection, which requires a non-empty selection, therefore moves those shapes. A document with nothing editable fails that action, and the batch moves on.

PNG and SVG work as output suffixes too. The headless writers also handle `.jpg`, `.jpeg`, `.psd`, `.psb`, `.pdf` and `.ora`. Converting a file onto itself is refused.

If you point `--command` at a brush or palette action such as `soft-ink` or `night-palette`, the run refuses with **Brush and palette actions run in the desktop Plugins menu; batch commands must edit documents**. If you point it at `ribbon`, there is no gesture to supply, because the shell passes none. Activate that one from the manager with **Activate tool**.

There is no window and no session, so Undo doesn't apply during the run. The output file is the result. When you open it, the edits are ordinary document commands, so `Ctrl+Z` works once, in the studio, on that new file.

## In the hand

Write a plugin folder. From a terminal with the studio closed:

```sh
omadesign --install-plugin ./my-plugin
omadesign --list-plugins
```

Read the id line and the indented action ids, and copy the one you want into `--command`. Run it against one `.oma` with a new output path, then open the output in the studio. The edit is a native one, and `Ctrl+Z` removes it.

Launch the app and open **Plugins > Manage plugins**. The same plugin is in the list with the same version, and its enable checkbox matches the `enabled` or `disabled` you saw in the terminal. If you edited `main.lua` in the installed folder while the window was open, press **Reload**. The manager doesn't watch the file for you.

For a brush, skip the shell. Select **Brushes · Soft ink brush**, press **Run** and paint with `B`. For Ribbon path, press **Activate tool** and drag. The shell told you those rows exist, but it won't run them.

If you reinstall the same id from the shell, list again. The version string comes from the new manifest. The previous tree is the hidden backup in the plugin root, which `--list-plugins` skips because its name starts with a dot.

For a batch, make `./input` with three posters, `a.oma`, `b.oma` and `c.oma`, and check that `./output` doesn't already contain those names.

```sh
omadesign --plugin ~/.local/share/omadesign/plugins/org.omadesign.studio-starter \
  --command nudge --batch ./input --output-dir ./output \
  --params '{"dx":20,"dy":0}'
```

You should see three lines in filename order, each pointing an input at a new file under `./output`. Open `a.oma` from the input folder and nothing has moved. Open `output/a.oma`, and the visible vectors that were free to move are 20 pixels to the right. Press `Ctrl+Z` in that tab and they move back. The source file is unchanged.

Run the command again without deleting `./output`. Each file reports that the output exists, the inputs are still untouched, and the exit status is nonzero. Point `--output-dir` at a new folder, or remove the outputs, and run again.

Break one file on purpose. Leave a document with no editable vectors in the folder, so `nudge` hits **Select one or more vector objects first**. The other files still write, the broken file is listed, and the exit status is nonzero.

For a single file, drop `--batch` and `--output-dir` and pass `--input` and `--output`. The same existence check applies to that output path.

Parameters that fail validation stop the run before anything is written, so `{"dx":"nope"}` never produces a half-moved `.oma`.

## The edge

Install and list don't open a window or run the plugin. They register a bundle and print the catalog.

A batch won't overwrite an output, modify an input or descend into subfolders. One bad document doesn't stop the rest, and it doesn't let the process exit as if the whole folder succeeded. The shell won't paint, save a personal palette or invent a canvas gesture. Brush, palette and canvas-tool actions stay in the desktop manager, where a preset and a gesture mean something. The shell runs document commands.
