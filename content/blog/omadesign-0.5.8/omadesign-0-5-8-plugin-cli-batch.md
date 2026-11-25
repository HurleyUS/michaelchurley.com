---
id: T127
title: Plugin CLI batch
slug: omadesign-0-5-8-plugin-cli-batch
excerpt: omadesign --plugin and --batch walk every immediate .oma in filename order, write new files, keep the inputs, and refuse a path that already exists.
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
