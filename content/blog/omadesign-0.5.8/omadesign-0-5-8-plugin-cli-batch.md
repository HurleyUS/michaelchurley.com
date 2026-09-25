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

You have a folder of fifty posters and one change: nudge the lockup, recolor a shape, run the same pattern. In Illustrator that is a batch action or a Bridge script, and the action wants the files open in a GUI. In Photoshop it is Image Processor, which is happy to overwrite if you point it at the same folder. In Affinity it is a macro you fire by hand because the batch story is a person at the keyboard. You want a shell command. You want the inputs left untouched. You want an existing output to stop that one file, not to get clobbered. You want file seven's error written down while file eight still runs.

The order matters when the folder is a sequence. Filename order is the order you can predict. Recursive walks are how a script picks up last year's `_export` directory and treats it as source.

## The constraint

The desktop app is a window. A folder job should not need that window, and it should not need a display. The same plugin, the same command id, and the same parameter check have to run headless, because a behavior that only exists in the GUI will drift from the behavior you test in the shell.

The `.oma` you pass in is the source. Writing back onto that path would make a failed run unrecoverable. The output is a new file. If that path exists, the run refuses it. The batch is one directory, the files sitting in it, not a tree. A crash on one document cannot abort the loop, or a single bad file stops a night job. The process exit still has to be nonzero when anything failed, or a Makefile will believe the folder is done.

Brush presets and palettes have no document to write. A canvas tool has no pointer. Those actions stay in the desktop manager. The shell runs document commands.

## What landed

One document:

```sh
omadesign --plugin ./my-plugin --command dots \
  --input input.oma --output output.oma \
  --params '{"count":12,"color":"#A6E3A1"}'
```

A folder, using Studio starter's nudge:

```sh
omadesign --plugin ~/.local/share/omadesign/plugins/org.omadesign.studio-starter \
  --command nudge --batch ./input --output-dir ./output \
  --params '{"dx":20,"dy":0}'
```

`--plugin` is a `main.lua` or a folder that contains one. `--command` is the action id, not the display name. For the starter, the ids you will actually type include `duotone`, `soft-shadow`, `icon-orbit`, `dot-field`, `aurora`, and `nudge`. `--params` is JSON. Missing params mean an empty object, and the action's defaults apply. The host validates types, min, and max the same way the manager does. Unknown keys are rejected.

`--batch` reads the directory you name. It keeps entries that are files and end in `.oma`. It does not walk subfolders. The paths are sorted, which for a flat folder is filename order. An empty folder errors with **Batch folder has no .oma documents**. `--batch` requires `--output-dir`. The directory is created if it is missing. Each output file uses the input's filename inside that directory.

The input file is only read. The writer opens a new path. If the output already exists, that file fails with **Output exists; choose a new path:** and the source stays as it was. The loop continues. At the end, any failures are reported and the process exits nonzero. A clean run prints `input → output` for each file and exits zero.

Headless selection is not your last mouse selection. The command line selects every visible vector shape that is not locked and not a guide, on an editable layer, and it uses the first editable layer as the active layer. Translate selection, which asserts that the selection is non-empty, therefore moves those shapes. A document with nothing editable fails that action and the batch moves on.

PNG and SVG exports work as output suffixes too. The headless writers also know `.jpg`, `.jpeg`, `.psd`, `.psb`, `.pdf`, and `.ora`. Same-file conversion is refused. A brush or palette result from a command you aimed at the shell returns **Brush and palette actions run in the desktop Plugins menu; batch commands must edit documents**. Tools need a gesture. The shell passes none.

There is no window. Undo does not apply, because you are not in a session. The output file is the result. Open it and the edits are ordinary document commands, so `Ctrl+Z` works once, in the studio, on that new file.

## In the hand

Make `./input` with three posters, `a.oma`, `b.oma`, `c.oma`. Make sure `./output` does not already contain those names.

```sh
omadesign --plugin ~/.local/share/omadesign/plugins/org.omadesign.studio-starter \
  --command nudge --batch ./input --output-dir ./output \
  --params '{"dx":20,"dy":0}'
```

You should see three lines, filename order, each input pointing at a new file under `./output`. Open `a.oma` from the input folder. It has not moved. Open `output/a.oma`. The visible vectors that were free to move are 20 pixels to the right. Press `Ctrl+Z` in that tab. They step back. The source file is still the source file.

Run the command again without deleting `./output`. Each file reports that the output exists. The inputs are still untouched. The exit status is nonzero. Point `--output-dir` at a new folder, or remove the outputs, and run again.

Break one file on purpose. Leave a document in the folder that has no editable vectors, so `nudge` hits **Select one or more vector objects first**. The other files still write. The broken name is listed. The exit status is nonzero.

For a single file, drop `--batch` and `--output-dir` and pass `--input` and `--output`. The same existence check applies to that one output path.

Parameters that fail validation fail the run before a write. `{"dx":"nope"}` does not produce a half-moved `.oma`.

## The edge

The batch will not overwrite an output, will not modify the input, and will not recurse into subfolders. One bad document does not stop the rest, and it does not let the process exit as if the folder succeeded. Brush, palette, and canvas-tool actions are refused here. They belong to the desktop, where a preset and a gesture mean something.

Run the `nudge` command against a fresh `--output-dir`. The sources stay put.

## Install list plugins CLI

### The habit

You install a Photoshop panel by dropping a folder into a path Adobe documents once per major version, then you restart and hunt the Window menu. Illustrator scripts land in a Presets folder that moves. Affinity assets get imported through a panel. On a headless box, or over SSH to the machine that actually holds the files, none of those gestures exist. You want to copy a plugin into place from a shell, see that it registered, and run the document command. You still want the brush and the drawing tool in the GUI, because a preset you cannot paint with is a JSON file.

Listing matters as much as installing. You want the command id, the category, and the display name in a terminal, so the `--command` you type later matches an id and not a label you misremembered.

### The constraint

The binary is the same binary that opens the window. A second "plugin admin" tool would drift. Headless install and headless list are flags on `omadesign`. They have to work with no display, because the batch machine may not have one, and because an install step in a script cannot click **Install plugin…**.

The plugin root is still `~/.local/share/omadesign/plugins`, or `$XDG_DATA_HOME/omadesign/plugins` when that variable is set. The manager and the shell read the same folders. A hidden backup on replace is the same backup. Enable state lives in `disabled.json` in that root. There is one catalog.

What the shell cannot do is pretend a brush stroke happened. `oma.brush` and `oma.palette` need the desktop session that owns the Brush tool and the personal library. A canvas tool needs a pointer gesture. Those stay in **Plugins → Manage plugins**. Document actions are the ones `--command` can apply to files.

### What landed

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

### In the hand

Write a plugin folder. From a terminal with no studio open:

```sh
omadesign --install-plugin ./my-plugin
omadesign --list-plugins
```

Read the id line. Read the indented action ids. Copy the id you mean into `--command`. Run it against one `.oma` and a new output path. Open the output in the studio. The edit is native. `Ctrl+Z` drops it.

Then launch the app. **Plugins → Manage plugins**. The same plugin is in the list, same version, enable box matching the word `enabled` or `disabled` you saw in the terminal. **Reload** if you edited `main.lua` in the installed folder while the window was open. The manager does not watch the file for you.

For a brush, ignore the shell. Select **Brushes · Soft ink brush** and press **Run**. Paint with `B`. For Ribbon path, press **Activate tool** and drag. The shell already told you those rows exist. It will not perform them.

If you reinstall the same id from the shell, list again. The version string is the new manifest. The previous tree is the hidden backup in the plugin root, which `--list-plugins` skips because the name starts with a dot.

### The edge

Install and list do not open a window, and they do not run the plugin. They register a bundle and print the catalog. The shell will not paint, will not save a personal palette, and will not invent a canvas gesture. Those three stay in the desktop manager. Document commands are the ones you batch.

Run `omadesign --list-plugins` and use the action id it prints.
