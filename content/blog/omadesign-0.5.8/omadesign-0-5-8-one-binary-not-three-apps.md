---
id: T137
title: One binary not three apps
slug: omadesign-0-5-8-one-binary-not-three-apps
excerpt: Design, Layout, Pixel, Photo, and Motion are personas in one Linux binary. The letters V, P, T, and B stay put. F1 lists the rest while the same .oma stays open.
publishedAt: 2026-09-22T11:41:56Z
tags: [omadesign, 0.5.8, personas, documents, brand, photo, plugins, files, cloud, linux]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-one-binary-not-three-apps/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-one-binary-not-three-apps/og.png
---

## The habit

A poster that needs type, a photograph, and a three-second move is three sittings in the Adobe set. Illustrator for the mark, Photoshop for the picture, After Effects for the move, and a round of exports between them so each app can see what the last one decided. Affinity's answer is StudioLink, and it is clever: Designer, Photo, and Publisher can hand work across without the export ritual, inside the suite you installed. You still learn where one app ends and the next begins. The file you double-click has a type. The tool letters reset at the boundary often enough that you hesitate.

What the hand wants is duller. `V` still selects. `P` is still the pen. `T` is still type. `B` is still the brush. The window you already have is the window you keep. Switching the job switches the tools, not the process.

## The constraint

Omadesign is one native binary on Linux. One launch, one dock icon, one `~/.local/bin/omadesign`. Personas are modes of that process: Design, Layout, Pixel, Photo, Motion. They share the key table, with gates where a tool does not exist. They share the Shortcut HUD and `F1`. A second process would mean a second undo stack and a file to throw over the wall every time the brief changed from vectors to pixels.

The document that holds the poster is one `.oma`. Tabs are documents, not apps. `Ctrl+N` and `Ctrl+O` open tabs in the same window. Persona changes do not write a sibling file and do not ask you to export a PDF just to keep going. Photo is the exception you have to keep straight: development settings live in a `.omaphoto` beside the camera file, and they enter the `.oma` when you Place in Design, as pixels. The persona is still the same binary.

## What landed

The manual's table is the map.

Design is a mark, a poster, a layout. First tools: Move `V`, Pen `P`, Rectangle `R`, Type `T`. It is the default persona.

Layout is a screen, a landing, a dashboard. Frame `F`, Rectangle `R`, Type `T`. Frames nest. Stack children, constraints, and frame export live here, in the same document as the drawing.

Pixel is painting or retouching. Brush `B`, Eraser `E`, Clone `J`, Wand `W`. Paint sits on a pixel layer. You add one from the Layers studio if the document started as vectors.

Photo is grading a photograph. Crop `C`, the develop sliders, Place in Design. The library browses a folder. Adjustments are Light, Color, and Detail. The original file stays the original file.

Motion is animating the artboard. Space plays, `K` sets keys, **File → Lottie** exports. The artboard you drew is the rest pose. Motion does not rewrite it. The clip is stored in the `.oma`.

Welcome sends you to the right room without a second install. **+ Vector** and the vector templates open into Design. **+ Raster** opens a blank pixel document. **+ Layout** opens frame starters. **+ Photo** opens the photo workspace. Motion has no empty-workspace button, because it starts from artwork that already exists. The funnel on the welcome browser filters by Vector, Raster, Layout, Photo, or Motion. One recent list. Files are `.oma`.

The HUD sits at the bottom in every persona that shows the canvas. Upper row follows the tool. Lower row is the letters. `Ctrl+/` hides it. `F1` opens the full shortcut list. Hold a modifier and the strip shows that modifier's chords. Tool letters that do not exist in the persona do nothing. Photo keeps Hand, Zoom, Crop, and Eyedropper. `V`, `P`, `T`, and `B` are the four the day-one hand asks for, and they are legal in Design and Pixel as the table defines them. `B` in a vector document still means Brush. You need a raster layer under it before paint sticks.

Chrome follows the desktop. Omarchy theme colors, the font from `omarchy font current` or fontconfig sans-serif, Phosphor Light icons. There is no separate light and dark switch inside the app. You are in one window the whole time.

## In the hand

Launch `omadesign`. Stay on the welcome screen long enough to see one browser. Click **+ Vector** or a blank size. You are in Design. Press `R`, then `T`, then `P`. Press `V` and move what you made.

Add a pixel layer. Switch to Pixel. Press `B` and paint. Press `E`. The layer stack is the same stack. The rectangle is still there. Press `Ctrl+Z` and you undo the stroke, in the same history as the rectangle, because it is one document.

Switch to Layout if the brief grew a screen. Press `F` and drag a frame over the artwork, or wrap a selection. The poster and the frame share the file. Export a frame from the File menu when you need a PNG of that screen. The `.oma` remains the master.

Open Motion when something should move. Select the type. Press `K`. Press Space. The playhead runs. Press Space again. Switch back to Design. The rest pose is the artboard. The keys are still in the file. `Ctrl+S` writes one `.oma`.

For a photograph, switch to Photo, open the camera file, grade it, **Save settings**, then **Place in Design**. You are back in the poster. The placed layer is an 8-bit develop. The RAW and the `.omaphoto` stay beside each other on disk for the next grade. Same binary. You did not export a TIFF from another application to get there.

Press `F1` in whichever persona you are in. The list is one list. The chords that persona cannot run are the ones its gate turns off. You do not load a second keymap.

## The edge

One binary does not mean every tool letter works in every persona, and it does not mean the RAW file is embedded in the poster. Photo keeps its settings in the sidecar until you place pixels. Motion will not start from an empty welcome button. There is no second process to alt-tab into for the pen, the brush, or the timeline. StudioLink's idea, suite tools in reach of each other, is the habit this window is built to satisfy with personas and one file.

Press `V`, then `P`, then `B`, in the same window. Press `F1` when a letter needs a name.

## Vectors pixels photo motion

### The habit

The Adobe bounce is a file format bounce. Illustrator saves AI. Photoshop saves PSD. After Effects saves a project that references footage. You keep the three in a folder and you pray the versions match. A change to the type means re-export, relink, and a guess about whether the effect that looked right in one app survived. Affinity narrows that with documents that can carry vectors and pixels, and with StudioLink when you need the other toolset. You still feel the seam when the timeline is a different surface from the page.

You want one layer stack. Vectors and pixel layers in the same list. A frame around them when the job is a UI. A timeline under the same canvas when something moves. A photograph graded without a one-way bake, then placed when the grade is the one you mean.

### The constraint

The native file is `.oma`. JSON, rasters packed as PNG, motion clip included. One undo history for that document. Personas switch tools. They do not switch files. If Photo wrote the RAW into the `.oma`, every save of a poster would duplicate a sensor file, and a grade would be stuck inside one document. The constraint goes the other way. The camera file stays the camera file. `.omaphoto` stores the develop settings beside it. **Place in Design** copies an 8-bit developed image into the layer stack, with one Undo, and you keep the RAW and the sidecar for the next pass.

Motion stores keys in the same `.oma` and treats the artboard as the rest pose. It does not bake the animation into the vectors. Static export stays the rest pose. The clip remains available the next time you open the file. Layout frames, auto-layout, and constraints are objects in that same tree, format 6 when the document uses the features that need it. Older builds cannot silently strip those features. Other documents stay on format 5. This build reads formats 1 through 6.

### What landed

Design draws the vectors. Move, pen, type, shapes, gradients, effects, pathfinder, groups, compounds. Pixel paints on a pixel layer in that document: brush, eraser, clone, heal, smudge, masks, and the raster filters that apply pixels with their own one-step undo. A marquee limits a filter. Cancel in the filter dialog leaves the layer alone. Applied pixels save in the `.oma`.

The layer list shows both. Eye and lock work per object. Groups expand. Pass through on a group decides whether child blend modes see the backdrop. Opacity and blend live on the object and on the layer. Placed images use the layer's opacity and blend. You reorder with `Ctrl+[`, `Ctrl+]`, and the Shift variants for front and back. One stack. One tab.

Layout adds frames to that stack. `F` drags a frame. A frame drawn inside a frame nests. **Object → Wrap selection in frame**. Stack children, gap, padding, constraints. **File → Export frame** writes PNG, SVG, or HTML for the selected frame. Comments pin to the canvas. The poster and the screen mock live together. You do not maintain a second file for the UI unless you want one.

Photo opens DNG, CR2, CR3, NEF, ARW, RAF, ORF, RW2, and the rest of the recognized extensions, through the decoder built into the binary. **Save settings** writes `name.NEF.omaphoto` next to the original. The original bytes stay. **Place in Design** adds the developed 8-bit layer to the document you are building. Export JPEG, PNG, or TIFF from Photo when you need a delivery file. RAW PNG and TIFF keep 16-bit channels. The `.oma` you save from Design does not contain the RAW or the sidecar. Keep the pair on disk with matching names.

Motion opens on that same artboard. Tracks are X, Y, rotation, scale, opacity, stroke reveal, and fill reveal. Presets become keys. `K` keys the selection. Space plays. Delete peels a key, then the animation, then the object, in that order. The drawing survives the animation's removal. Lottie export wants vectors. Pixel layers, masks, and effects produce an error from that exporter. Animated SVG keeps them. Import Lottie brings a basic shape subset back onto the timeline. The editable master is the `.oma`.

Document tabs sit above the canvas. Several `.oma` files can be open. Persona is per session of work on the document in front of you. `Ctrl+S` writes the tab you are in.

### In the hand

Start in Design. `R` a board, `T` a headline, `P` a rule. Add a pixel layer. Switch to Pixel. Paint a shadow by hand, or run a raster filter on that layer. Look at the Layers studio. The type, the rule, and the pixels are rows in one list.

Switch to Layout. Press `F` and draw a phone frame. Drag the headline's layer onto the frame if you want it nested. Turn on **Stack children** if the frame should pack. The vectors did not leave the file.

Switch to Photo from **+ Photo** or the persona. Open a CR3 or a DNG. Move exposure. **Save settings**. You now have the camera file and a small `.omaphoto`. **Place in Design**. Choose the poster tab's world. The developed image is a pixel layer. `Ctrl+Z` removes the placement. The sidecar is still next to the RAW.

Switch to Motion on the poster. Select the headline. Choose **Fade in** or press `K` and drag. Space plays. `Ctrl+S`. Quit. Open the `.oma` again. The type is editable. The pixels are there. The keys are there. Open the RAW again by opening the camera file or the sidecar. The grade is there, because it never lived only inside the poster.

**View → Document conversion notes** is for files you imported from somewhere else. A native document you built this way does not need a conversion story. The notes matter when the layer arrived as PSD or PDF. The `.oma` is the file you keep either way.

### The edge

The `.oma` holds the layer stack, the frames, the placed pixels, and the motion clip. It does not hold the RAW source or the Photo settings. Place is the door from a grade into the poster, and it is 8-bit. Lottie will not carry pixel layers. Static PNG and SVG export the rest pose, not the timeline. One stack does not mean one undo across Photo and Design. Photo has its own history until the pixels are placed.

Save the `.oma`. Leave the `.omaphoto` next to the camera file. Press Space in Motion when you want the same artboard to move.

## Brand kit on disk

### The habit

Creative Cloud Libraries are where a lot of kits went to live. Swatches, logos, character styles, synced through an account, available on the machines that are signed in, missing on the machines that are not. You have emailed a `.ase` and a zip of fonts as the backup plan. Affinity's assets and palettes export to files you can pass around, and you still end up writing the README that says which file is the logo and which file is the type. The kit you can trust on a Linux box with no login is a folder. The names are stable. Another machine opens the folder and sees the same colors, the same roles, the same files.

You also know the failure mode of hidden files. A copy that skips dotfiles arrives without the kit and nobody notices until the swatches are empty.

### The constraint

A project in Omadesign needs no account. Welcome finds project folders by the `.omabrand` directory anywhere under your home folder. Cloud sign-in is optional and separate. The kit cannot live in a library service if yesterday's job has to open on another machine that has never signed in.

So the kit is three names beside the work. `.omacolors` is the palettes. `.omatype` names the font roles. `.omabrand/` holds the assets and the font files. A saved document uses the nearest enclosing folder that contains any of them. If none exists, the kit starts beside the document. An unsaved document asks you to **Choose a project**. The folder button can point at a different library on purpose. These names start with a dot. A file manager that hides dotfiles will hide the kit. Turn hidden files on when you copy by hand.

Palette saves and artwork saves are different. Quitting asks about unsaved palettes first, then unsaved artwork. A kit that auto-wrote into the `.oma` would vanish the moment you sent someone the pictures without the folder, and a kit stored only in the document would not be shared by the next file in the same project.

### What landed

The right sidebar has Inspect, Palettes, and Brand.

Palettes are Personal or Project. Personal colors are available across your work and live in the personal library, which is also where a plugin's `oma.palette` writes. Project colors go in the current project folder. **+ Palette**, name it, **Rename**. Add the current color, pull fill and stroke **From selection**, or type a hex and press **+**. `#RRGGBBAA` carries alpha. Choose Fill or Stroke, then click a swatch. The swatch menu replaces, copies the hex, or removes. **Save** on the palette writes the collection. That save state is separate from `Ctrl+S` on the artwork.

`.omacolors` is JSON. Several named palettes can sit in one file, or a single palette object, or a bare array of hex strings. Older RGBA objects still load and become the portable form on the next save. **Load palettes…** merges and suffixes conflicting names. **Export selected palette…** and **Export collection…** write files you can hand over. If the file changes on disk while you have unsaved palette edits, Save is blocked. Export a copy or **Reload saved colors**.

Brand → **Load bank…** or **Create bank**. Assets copy into `.omabrand/`. Originals stay where they were. PNG, JPEG, WebP, TIFF, BMP, GIF, SVG, and `.oma` are accepted. Drag a tile onto the canvas, or double-click to place at the selected artboard's center. Placement undoes with `Ctrl+Z`. In Photo, double-click places the asset into Design. Optional `brand.json` sets the display name. Without it, the folder name is the name. **Save bank copy…** copies the bank, the typography kit, and the fonts into another project folder.

Typography → **Add fonts…** copies TTF or OTF into the project. Fonts are usable inside the app without installing them on the computer. Name a role Heading, Body, Caption, and **Save role**. **Apply** uses that face on the selection or on the next text you create. The Character panel lists **Project fonts**. Applying a face to artwork supports Undo. The kit's names and files have their own save. `.omatype` stores roles with paths relative to `.omabrand/`, under `fonts/`. **Load kit…** merges another kit and copies its font files. **Save copy…** writes the kit into another folder. Removing a role keeps the font file for text that already uses it.

SVG export draws project-font text as outlines so the picture survives. The `.oma` keeps the text editable, including after you move the project, including new characters. Saving artwork into another folder copies the faces that artwork uses into that folder's `.omabrand/fonts/`.

Welcome's **Projects → recent** is this folder, found by `.omabrand`, with subprojects and descendant `.oma` files. **Edit brand…** opens the editor. **+ Project** starts one. **Team** shows up only while you are signed into cloud and a shared project exists. Local browsing does not wait on that.

### In the hand

Make a folder for the job. In the app, **Choose a project** and point at it, or save the `.oma` inside it and let the nearest kit win. Open Palettes, choose Project, add the colors you are actually using, and press **Save**. You should see `.omacolors` in the folder once hidden files are visible.

Open Brand, **Create bank**, add the logo SVG and a wordmark PNG. Drag the logo onto the artboard. `Ctrl+Z` if it landed wrong. Open Typography, add the two font files, name the roles, **Save role**, select the headline, **Apply**.

Copy the folder to another machine, dotfiles included. Install Omadesign there if it is not already in `~/.local/bin`. Open the `.oma`. The type is still editable. The swatches are in Project. The bank tiles are the same files. No sign-in dialog stands in front of the folder.

On the machine you started from, export the palette collection as well if you want `.omacolors` spelled out in the destination. **Save bank copy…** carries assets, the type kit, and the fonts. The manual's Fieldwork example in the repo is a portable sample of the same layout.

If a plugin installed Night studio into Personal, that palette is yours across projects. Copy `.omacolors` when the colors belong to this job and should travel with it.

### The edge

Skip the dotfiles and the kit does not arrive. `.omacolors`, `.omatype`, and `.omabrand/` are the kit. Palette save and font-kit save are not `Ctrl+S`. A conflict on disk blocks the palette save until you reload or export. SVG outlines the project fonts in the export. The `.oma` keeps them editable. Share the fonts under their licenses. An account is not required to open any of this. Cloud is a separate, optional share of a project you already have on disk.

Copy the project folder with hidden files on. Open the `.oma` on the other machine.

## RAW sidecars not destructive

### The habit

Lightroom taught the sidecar habit even when the catalog was the thing you actually opened. Develop settings live next to the camera file, or in a catalog that points at it. The RAW stays the RAW. You can throw the develop away and start again. Photoshop's Camera Raw is the same contract until you open the file as pixels and save a PSD, and then you have a baked copy plus the original you hope you kept. Affinity Photo develops and can save its own document. The fear is the same either way: a button that says Save and means "rewrite the camera file."

You also want a folder of a shoot to take one look without loading every frame into RAM, and without a recursive walk into the selects folder you made yesterday. Then you want the one frame that belongs on the poster to land there as pixels, on purpose.

### The constraint

Photo is inside the same binary as Design. That makes a destructive save easy to get wrong, because `Ctrl+S` already means "write the document" in every other persona. In Photo, save has to mean "write the settings beside the original." The original's bytes, size, and modification time are the identity the sidecar trusts. Rewriting the camera file would change that identity and would destroy the only full-precision source.

The sidecar is small and contains no pixels. Resume by opening either file. A missing or changed original has to fail the explicit settings open without replacing the picture you are already looking at. A whole-folder job writes sidecars in the background, one directory, no recursion, and it has to be cancellable. Undo has to restore the settings it wrote. The pixels stay pixels.

Place in Design is the bake, and it is a separate command. It produces an 8-bit layer. You keep the RAW and the `.omaphoto` if you intend to grade again.

### What landed

Open a photo from **File → Open**, the Photo library, a drop, or a folder. RAW extensions the decoder recognizes include DNG, CR2, CR3, NEF, NRW, ARW, RAF, ORF, RW2, PEF, and the longer list in the format guide. An extension names a family. It does not promise every camera or every compression. JPEG XL DNG, GPR, EIP, and R3D are not in this build. Only the first image of a multi-image RAW is developed, with a note.

The decoder is LibRaw 0.22.2, built in. No external converter, no download on open. You get 16-bit linear sRGB, camera white balance and color matrix, orientation honored, automatic brightness off. The display preview's long edge caps at 1600 pixels until you zoom. Full resolution arrives as tiles. **Before** is the default development, not the embedded JPEG. Rendering is not trying to match Lightroom, Capture One, or the camera JPEG. Lens corrections and proprietary camera looks are not recreated.

**Save settings** writes a sibling such as `DSC_0001.NEF.omaphoto`. The pair must keep matching names. Settings record the source size and modification time. They do not contain the image. **File → Open**, a drop, or **Photo → Library → ··· → Open photo or settings…** resumes from either file. Opening the sidecar restores the original precision and the saved crop and rotation. If the original is missing, changed, or the settings are invalid, that explicit open fails and leaves the current photo in place. Opening the original with unusable settings shows default development and a note. A failed save keeps your edits so you can retry. `Ctrl+S` in Photo saves the selected photos' settings. Quitting asks Save all, Discard, or Cancel for unsaved photo settings before palettes and artwork.

**Copy adjustments** is `Ctrl+Shift+C`. **Paste adjustments** is `Ctrl+Shift+V`. Light, color, detail, tone curve, color mixer, and color grading can travel separately. Crop and rotation are off by default. The batch paste is one Undo. Later edits to the source do not change a look you already copied.

Whole folder: **Library → … → Browse folder…**, open one representative frame, copy its adjustments or choose **Presets… → Use preset…**. In **Apply adjustments**, choose **Whole folder**, then **Write settings for N photos**. The job writes each `.omaphoto` in that directory only. It does not recurse. It does not load the shoot into memory. It does not touch image pixels. Excluded categories keep their existing adjustments. Cancel stops the rest. Undo restores completed changes. A file that changed outside the batch is preserved and reported. The caps are 10,000 photos and 32 MiB of settings history. Larger shoots want smaller folders. Open a representative RAW first. A recognized filename can still fail to decode.

Export JPEG, PNG, or TIFF at full developed resolution, including crop and rotation. RAW PNG and TIFF keep 16-bit. JPEG is 8-bit. **Place in Design** is the 8-bit layer in the poster, one Undo. The initial limits on a decode are 64 megapixels and 512 MiB input, with a 120 second cooperative cancel.

Presets are `.omapreset` files in the preset library. They hold adjustment values, not pixels, and not a source identity.

### In the hand

Drop a CR3 on the Photo workspace. Wait for the preview. Move exposure and white balance. You are on the 16-bit linear data. Press `Ctrl+S` or **Save settings**. In the file manager, the CR3's size and date are unchanged. Next to it is `something.CR3.omaphoto`.

Quit. Launch. Open the `.omaphoto`. The grade is back. Open the CR3 on a day when you renamed it and left the sidecar behind. You get a note, default development, and the current photo is not replaced by a surprise if you opened settings that cannot find their original.

Copy adjustments. Select a range in the library with Shift-click. Paste. Leave crop off. `Ctrl+Z` restores the whole paste. `Ctrl+S` writes sidecars for the selection.

For a folder, browse it, open one frame that actually decodes, copy the look, **Whole folder**, write settings. Watch the progress. Cancel if a filename looks wrong. The JPEGs and RAWs in that folder are the same bytes. The new files are `.omaphoto`.

When one frame belongs on the poster, **Place in Design**. It shows up as a pixel layer. Grade again later from the sidecar, place again, delete the old layer. The camera file was never the document you edited.

`Ctrl+0` fits the photo. `Ctrl+1` is 100 percent, where the tiles fill in. Hold Space to pan.

### The edge

Save settings never rewrites the camera file. Whole-folder apply never rewrites pixels, never walks subfolders, and never treats a recognized name as proof the file will decode. Place in Design is the moment pixels enter the `.oma`, at 8-bit. The sidecar is settings bound to size and modification time, not a hash of the sensor data. A `.oma` save does not store the RAW.

Press `Ctrl+S` in Photo. Then look at the camera file. It is the same file. The `.omaphoto` beside it is the grade.

## Plugins without ExtendScript tax

### The habit

ExtendScript is a real language with a real object model, and the tax is everything around the script. You install a matching application year. You put the file in a Presets path that moves. You grant it the filesystem because the sample used `File`. A panel that worked in 2019 asks you to debug a missing runtime in 2024. Photoshop's scripting and UXPs split that world again. Affinity macros record a gesture you can replay, which is the right tool for a repetitive click and a poor tool for a folder of documents or a pixel kernel you want to read.

The jobs are ordinary. A filter. A live shadow. An SVG icon. Two brushes. A tool you drag. A pattern. A gradient. A swatch book. A nudge across a folder. You want those in the app you are already drawing in, with Undo meaning the whole action, and with the script unable to wander off into the home directory.

### The constraint

0.5.8 already embeds Lua 5.4.9 and plugin API 1. Adding a second runtime would be the tax again: another install, another version pin, another place for the starter kit to drift from the binary. The plugin runs on a background worker inside this process. It sees a snapshot. It returns native edits or it returns nothing. The studio commits one batch or discards the run.

The API stays on a list you can memorize, because an API the size of the application is how scripts bind to panels that got renamed. Shapes, geometry, fills, gradients, effects, brushes, palettes, SVG, pixels, a status message. Fresh VM every run. No `io`, no `os`, no `require`, no network, no exec. Fifteen seconds, 64 MiB of Lua heap, 20,000 edits. There is no marketplace in this release fetching plugins you did not ask for.

### What landed

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

### In the hand

Open a poster. **Plugins → Manage plugins**. Run **Effects · Soft offset shadow** on a selection. One shadow stack appears. `Ctrl+Z` removes it. Run **Patterns · Dot field**. `Ctrl+Z` removes the grid, not one circle at a time.

Arm **Tools · Ribbon path**. Drag. Release. A path named Ribbon is editable with `A`. Escape before release and the document is untouched.

Switch to a raster layer. Run **Filters · Midnight duotone**. Alpha is the alpha you had. Run **Brushes · Soft ink brush** and paint with `B`. The preset is not an entry on the document history.

Turn on the behavior checkbox. Select an object. The status line reports the count once. Turn it off if you want silence. The choice is still off tomorrow.

From a terminal, list plugins and copy the action id. Batch `nudge` into an empty output directory. Open one result. The move is a normal document edit. The inputs in the source folder have not moved.

When you write your own, start from the examples path, change the id, install the folder, and break `run` once to see the document stay put.

### The edge

A plugin does not get ExtendScript's filesystem, and it does not get a private history with one step per object. Failure and cancel apply nothing. There is no remote catalog in 0.5.8. Brush and palette results are settings. Document Undo does not rewind them. Behaviors do nothing until the second checkbox is on. The shell will not invent a brush stroke.

Open **Plugins → Manage plugins** and press **Run** on one document action. Then press `Ctrl+Z`.

## Import honesty export choice

### The habit

You open a PSD and you know the live text may arrive as pixels. You open an AI file and you know the private Illustrator data may not be in the PDF-compatible stream. You open an Affinity document and you know the adjustments and the history are not a promise. The honest apps tell you what changed. The other kind of import succeeds silently and you discover the missing effect at the client review.

Export is the other half. You want PNG at 1×, 2×, and 3×, an SVG, a Lottie, a layered PSD, a PDF, an OpenRaster. You want to pick the one the next person can open. You do not want a button that claims to write a native `.ai` or `.af` when the writer does not exist. You keep the `.oma` as the editable file and you keep the source you imported when the notes say something was lost.

### The constraint

One document format is the master. Importers have to land in the native layer tree, record what they could not carry, and leave the source file untouched. **Save** writes `.oma`. If an importer rewrote the PSD or the RAW in place, the round trip would be a destructive save with a friendly name.

Notes have to live in the `.oma`, not only in a dialog you dismiss. **View → Document conversion notes** shows them again later. A format that appears in the Open dialog is not a promise of complete compatibility. The format guide says that in the first paragraph, and the exporters have to obey it. Where a feature cannot travel, the note says so. PDF export's rule is that effects are not silently dropped or replaced with a single gradient color. Fallback images are capped. Same-file conversion is refused so a headless `--convert` cannot clobber the path you passed as input.

There is no native `.ai` writer and no native `.af` writer. Interchange for those sources is PDF, SVG, PSD, or ORA, plus the `.oma` you actually continue in.

### What landed

**File → Open** reads layered PSD and PSB, GIMP `.xcf`, every page of PDF and PDF-compatible AI, OpenRaster, SVG and SVGZ, and supported Affinity documents through the optional bridge. EPS and PostScript go through Ghostscript if it is installed, then through the PDF importer. Each import opens in its own tab at the original dimensions. The source file stays where it was.

PSD and PSB keep groups, names, placement, visibility, opacity, blends, pixel masks, and supported Normal color overlays. Text and smart objects arrive as their saved pixels. Other effects, fills, and adjustments produce notes. Export writes RGB 8-bit layered PSD or PSB. Vectors and live text render into pixel layers on the way out.

PDF import builds artboards per page, paths, supported text, images, and optional-content groups. Complex text can become editable outlines. Illustrator's private data, symbols, and live effects are not reconstructed. `.ai` means the PDF-compatible part, or older PostScript via Ghostscript. PDF export writes pages, paths, images, opacity, and optional-content layers. Text becomes outlines in the PDF. The `.oma` still has the live text. Backdrop-dependent blending can rasterize a page, with a note.

SVG import keeps objects, hierarchy, names, transforms, text, images, and supported masks. Scripts, animation, and foreign content do not come in. SVG export keeps vectors. Shape and conic gradients become image patterns, capped at 4096 pixels on a side. Linear and radial gradients keep stops. Project fonts export as outlines. The source text stays editable in the `.oma`.

OpenRaster round-trips pixel layers and groups. Vectors and text become pixels per layer on export. Unsupported Porter-Duff modes are rejected rather than quietly mapped to Normal. GIMP `.xcf` imports pixels, groups, masks, and supported blends. Live text, effects, and paths are not reconstructed. There is no XCF writer. Send GIMP an ORA or a PSD. High bit depth becomes 8-bit RGBA, with a note.

Affinity import is the optional bridge, `./scripts/setup-affinity-import.sh`, run once. It does not download during import. Legacy and newer containers are partial. Adjustments, live effects, publishing structure, and history do not come across as native edits. There is no `.afdesign` or `.afphoto` writer.

RAW opens in Photo. `.omaphoto` is settings beside the camera file. Export from Photo is JPEG, PNG, or TIFF. Placement into Design is 8-bit.

**View → Document conversion notes** lists the unsupported and converted features. The same notes stay in the `.oma`.

Export from the File menu and from `Ctrl+E`: PNG at 1×, 2×, and 3×, JPEG, SVG, animated SVG, Lottie JSON, layered PSD and PSB, PDF, and OpenRaster. Layers a format cannot carry may become individual pixel layers. The notes describe that. Lottie wants shape animation. Pixel layers, masks, and effects error out of Lottie. Use animated SVG when you need them. Static PNG, JPEG, and SVG are the rest pose. The clip stays in the `.oma`.

Headless, the same readers:

```sh
omadesign --inspect artwork.psd
omadesign --convert artwork.oma --output artwork.pdf
omadesign --convert artwork.oma --output artwork.ora
```

Output suffixes include `.oma`, `.svg`, `.png`, `.jpg`, `.psd`, `.psb`, `.pdf`, and `.ora`. Notes go to stderr. The destination is a different path.

### In the hand

Press `Ctrl+O`. Choose a PSD you know has live type. It opens at its pixel size. Read **View → Document conversion notes**. The type layers that arrived as pixels are named there. Save a `.oma`. The PSD on disk is unchanged. Edit what you can edit. `Ctrl+E` and write a PDF or an ORA for the next tool. Open the `.oma` tomorrow. The notes are still in the file.

Open a PDF with several pages. You get an artboard per page. Text you can edit is text. Text that had to be outlined is paths, and the note says so. Export SVG for the logo page. Export PNG at 2× for a preview.

Open an SVG. Drag a node with `A`. Export SVG again. Compare. If a mask became pixels, the note told you before the client did.

For Affinity, run the setup script once on a machine that has the pinned converter's dependencies. Open the `.afdesign`. Read the notes. Save `.oma`. Export PDF or SVG. Leave the Affinity file as the Affinity file.

For a camera file, stay in Photo. Do not expect **Save** to produce a layered document. Place or export when you need pixels. `--inspect photograph.NEF` prints metadata without writing a sibling unless you convert on purpose.

Drop a file on the welcome screen if you do not want the dialog. Layered documents open. Ordinary images place. `.oma` opens.

### The edge

Open does not mean the proprietary effect survived. There is no writer for native Illustrator or native Affinity. GIMP does not get an XCF back. Conversion notes stay in the `.oma` because the dialog is easy to close. Same-file conversion is refused. The source you opened is still the source. The file you continue in is the `.oma`.

Open the PSD, then open **View → Document conversion notes** before you trust the layer list.

## Cloud optional showcase explicit

### The habit

Creative Cloud wants the document in the service. Libraries, sync folders, "saved to cloud" as the default checkbox. You can work offline, and you can also discover that a file you thought was a file is a stub. Affinity's model has stayed closer to documents on disk, with its own account story for the suite. The habit you want when the machine is yours is the folder. Sign in when a client has to see a snapshot. Do not sign in to open yesterday's poster.

Publishing is a different decision from sharing with a reviewer. A client link and a public gallery get confused in tools that treat "anyone with the link" as the same knob as "on the homepage." You want an invite for the people with a role, and a separate act, by the owner, before a flat image is public. Taking it down should take it off the gallery. It will not reach into someone else's downloads folder. You already understand that part.

### The constraint

The editable file is the local `.oma`. Brand kits are dotfiles in the project folder. Welcome browses home without an account. **Sign up for cloud** on the welcome screen opens registration. It does not gate the recent files. **Team** appears only while you are signed in and a shared project exists.

Cloud collaboration, in the product since 0.5.4, shares project files, assets, and immutable flat exports. The browser reviews snapshots. You keep authoring in the native app. Live multi-user canvas editing, presence, and browser authoring are outside that scope. If a save in the studio silently uploaded, the local file would stop being the file. Transfers are explicit. A push adds files. It does not overwrite someone else's version quietly. Comments stick to the snapshot they were written on.

Showcase publication is an owner action on a chosen flat export. Source files, assets, and private review threads stay out of that public object. Unpublishing removes it from the gallery, the competition displays, and the image endpoint. Copies a viewer already saved are theirs.

### What landed

The workspace is `https://omadesign.app/cloud`. **File → Sign in…** opens the browser with a device code. You approve the code the desktop is showing. A name or an email alone does not grant access. Desktop credentials expire after 30 days. Revoke them from `/account` or disconnect in the app. The local identity file is owner-only on disk.

**File → Push project + review export** uploads a versioned `.oma` and a PNG of the current document. Project fonts go along. Raster pixels stay embedded in the design file. **Upload project asset…** adds another file. **Cloud projects… → Pull & open** opens the latest source as a separate document and downloads shared assets into a new folder under the app's cloud-downloads directory. Save the local `.oma` after the first push so the cloud link stays with the document.

Owners invite a verified email as an editor or a reviewer. Invitations go out through the mail sender, and they expire after seven days. The invited person signs in with that email and accepts in the workspace. Owners change roles, remove access, or cancel an invite.

An owner can manage files, uploads, review, the team, archive, and publishing. An editor can download source and assets, upload, comment, reply, and resolve threads. A reviewer sees flat exports, pins, rectangular annotations, comments, and replies, and can resolve their own threads. Pins scale with the image, including on a phone. The desktop **Review annotations…** window loads the same versioned exports and threads.

Limits on the service: source and asset files 100 MB each, flat PNG, JPEG, or WebP exports 20 MB, 200 files in a project, 100 projects on an account, 100 members on a project. Archive hides a project from collaborators and unpublishes its public work. The owner can restore it.

**Publish selected export** is the showcase step, in the desktop or the web workspace. You pick a finished flat export and give it a title and a description. `/showcase` lists public work. `/showcase/:id` shows the flat image. Unpublish removes it from those surfaces. Entering a competition uses an owned public showcase work, against an open brief. Duplicate entries are rejected. Closing dates are enforced. `/compete` lists them. Competitions stay unpublished until a real brief and dates exist.

Local edits do not upload themselves. Anonymous usage statistics are a separate toggle and start off. None of that is the document store.

### In the hand

Draw the poster. `Ctrl+S` to a folder on disk. Do not sign in. Quit and reopen. The file is the file. The welcome recent list finds `.oma` under your home directory without a session.

When a reviewer needs a snapshot, **File → Sign in…** and approve the device code. **Push project + review export**. Send the invite to their email. They comment on the flat PNG in the browser. You open **Review annotations…** in the app, reply, and keep drawing in the `.oma`. Push again when you want a new snapshot. The old comments stay on the old snapshot.

When the piece is public, select the export, title it, and **Publish selected export**. Look at `/showcase`. Unpublish when it should leave. The `.oma` on disk is still private. The reviewer threads did not become the gallery page.

Pull on a second machine with **Cloud projects… → Pull & open**. You get a document and a folder of assets. You do not get a live cursor from the other machine. Edit, save locally, push if you are an editor and you mean to add a version.

Disconnect in the app when the laptop should stop holding a credential. The local files remain.

### The edge

The service is not the default place a document lives. Sign-in, push, invite, and publish are separate acts. Publish is the owner's, on a flat export, and it leaves source and review threads behind. Unpublish does not recall a copy someone already saved. The browser does not author the canvas. There is no presence layer and no simultaneous editing session inside the `.oma`.

Save the file locally. Choose **File → Sign in…** only when someone else must see a snapshot.

## Linux first creative suite

### The habit

The creative suite you already know how to use is a set of applications that, on Linux, has usually meant a VM, a second machine, or a web app in a browser tab. Illustrator, Photoshop, and InDesign are the muscle memory: pen, brush, frames, type, export. Affinity is the other suite people install when they want those jobs without that subscription, and its desktop builds have not been the thing you apt-get on the machine you actually work on. You want the letters, the layer stack, the RAW develop, and the timeline in a binary that installs into your home directory and runs on the glibc you already have.

You also want the chrome to look like the rest of the desktop. A creative tool with its own theme, fighting the colors you set this morning, is a second set of preferences you will never maintain.

### The constraint

The install target is `~/.local`. The public installer and `scripts/install.sh` put the binary in `~/.local/bin`, the desktop entry and MIME XML under `~/.local/share`, and the docs, skill, licenses, and plugin examples under `~/.local/share/omadesign`. Nothing is written to `/usr`. That is what makes the same line usable on Silverblue, Bazzite, NixOS, and SteamOS desktop, and on Omarchy, where `/usr` is not the place you drop a vendor tree. `$XDG_DATA_HOME` replaces `~/.local/share` when it is set. An isolated prefix exists for people packaging a copy. The default is home.

The binary has to run on glibc 2.35, which covers Ubuntu 22.04, current Arch, and Asahi Omarchy. ARM64 and x86_64 are both release archives. Lua, RAW, JPEG, and the C++ runtime pieces ship inside the package so Photo and plugins do not wait on a distro package name. Templates and the plugin guide have to work with the network cable unplugged, because a first launch that needs a CDN is not an install. It is a download with extra steps.

### What landed

```sh
curl -fsSL https://omadesign.app/install | sh
```

That resolves the current release, checks the archive, and installs. If `omadesign` is not on `PATH`, run `~/.local/bin/omadesign` or add `~/.local/bin` to `PATH`. One `omadesign.desktop` launcher remains. `.oma` and `.omaphoto` can point at it. Preferences live in `~/.config/omadesign`, or `$XDG_CONFIG_HOME`. Recovery swaps live in `~/.local/share/omadesign`.

0.5.8 is the release this package line installs as current. The archives are ARM64 and x86_64. Both report 0.5.8 and need no glibc newer than 2.35. The x86_64 executable was tested through QEMU against Ubuntu 22.04's glibc, not on a physical x86_64 GPU. Lua 5.4.9 is in the binary. Studio starter, the offline docs, the creation skill, and the Lua and Phosphor licenses are in the archive. Reinstalling preserves a plugin you already edited under `plugins/org.omadesign.studio-starter`.

On launch the chrome reads, in order, `~/.local/state/omarchy/current/theme/colors.toml`, then `~/.config/omarchy/themes/<current>/colors.toml`, then the stock Omarchy palette if neither is there. UI type is `omarchy font current`, then fontconfig `sans-serif`. Override with `OMADESIGN_FONT=/path/to/font.ttf`. Icons are Phosphor Light. The welcome screen uses that palette. There is no in-app light/dark switch. The title bar stays visible. **omadesign** in that bar opens Config, Update, About, and Docs. About shows the version. Update checks the channel and, when you confirm, runs the official installer, waits for work in progress, writes a local recovery snapshot, and restarts with the same documents and photo adjustments.

The five personas are the suite. Design, Layout, Pixel, Photo, Motion. `V`, `P`, `T`, and `B` are the letters. `F1` is the rest. Fifty-two vector templates and the Layout starters ship with the app and open offline. Photo decodes RAW without an external converter. Plugins run without a second runtime. The brand kit is `.omacolors`, `.omatype`, and `.omabrand/` in the project folder. Cloud sign-in is there when you push a snapshot, and the file opens without it.

`omadesign --version` prints the build. `omadesign --agent-docs manual` prints the manual baked into it. `omadesign --list-plugins` works with no window.

### In the hand

On a machine that does not have the app:

```sh
curl -fsSL https://omadesign.app/install | sh
~/.local/bin/omadesign
```

The welcome screen is the file browser plus the creation buttons. Click **+ Vector**. Press `R`, `P`, `T`. The colors on the chrome match the Omarchy theme you are already using. The icons are the Phosphor set, not a private metaphor you have to learn.

Open **+ Photo** and a RAW file if you have one. Grade it. `Ctrl+S` writes a `.omaphoto` beside it and leaves the camera file alone. Place into the poster when you want pixels in the `.oma`.

Open **Plugins → Manage plugins**. Studio starter is there on a first install. Run one action. `Ctrl+Z`. If you are on a train, read the API with:

```sh
omadesign --agent-docs plugins
```

The title-bar Docs item opens the website when you have a network and you want it. The share folder is the copy that installed with you.

Click **omadesign → Update** when a newer package exists and you want it. Confirm. The installer runs. Your open documents come back. The plugin folder you edited is still the plugin folder.

If you are checking a box without installing over your live copy, the archives and checksums are on the release. Both architectures. The installer is the path that puts them in `~/.local` and stops there.

### The edge

The installer writes nothing to `/usr`. A machine that cannot run glibc 2.35 cannot run this binary. The x86_64 build's published check is QEMU against glibc 2.35, not a claim about every GPU. Templates do not fetch themselves. Lua does not come from the distro. Docs in the title bar open the site. The offline pages are `--agent-docs` and `~/.local/share/omadesign/docs`. Sign-in is not required to draw, grade, or animate.

Run `curl -fsSL https://omadesign.app/install | sh`, then `~/.local/bin/omadesign`.
