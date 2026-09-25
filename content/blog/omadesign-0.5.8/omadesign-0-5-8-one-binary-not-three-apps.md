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

In the Adobe set, a poster that needs type, a photograph and a three-second animation takes three sittings: Illustrator for the mark, Photoshop for the picture, After Effects for the move, and a round of exports between them so each app can see what the last one decided. Affinity's answer is StudioLink, and it's clever. Designer, Photo and Publisher can pass work across without the export routine, inside the suite you installed. You still learn where one app ends and the next begins. The file you double-click has a type, and the tool letters change at the boundary often enough that you hesitate.

That back-and-forth is really a file format problem. Illustrator saves AI, Photoshop saves PSD, and After Effects saves a project that references footage. You keep all three in a folder and hope the versions match. A type change means re-export, relink and a guess about whether an effect that looked right in one app survived the trip. Affinity narrows the gap with documents that hold vectors and pixels, plus StudioLink for the other toolset, but you still feel the seam when the timeline is a different surface from the page.

What you want is simpler. `V` still selects, `P` is still the pen, `T` is still type and `B` is still the brush. You keep the window you already have, and changing the job changes the tools, not the process. You want one layer stack with vectors and pixel layers in the same list, a frame around them when the job is a UI, a timeline under the same canvas when something moves, and a photograph graded without a one-way bake, then placed once the grade is right.

The rest of the suite has habits too. Creative Cloud Libraries are where a lot of brand kits ended up: swatches, logos and character styles synced through an account, available on signed-in machines and missing everywhere else. The backup plan was emailing an `.ase` and a zip of fonts. Affinity's assets and palettes export to files you can pass around, but you still end up writing the README that says which file is the logo and which is the type. On a Linux box with no login, the kit you can trust is a folder with stable names that another machine opens and sees the same colors, roles and files. Copies that skip dotfiles are the usual failure. The kit doesn't arrive and nobody notices until the swatches are empty.

Lightroom taught the sidecar habit even when the catalog was what you actually opened. Develop settings live next to the camera file, or in a catalog that points at it, and the RAW stays the RAW, so you can throw the develop away and start over. Photoshop's Camera Raw works the same way until you open the file as pixels and save a PSD, and then you have a baked copy plus the original you hope you kept. Affinity Photo develops and saves its own document. The fear is always a button that says Save and means "rewrite the camera file." You also want to look over a whole shoot without loading every frame into RAM or walking into yesterday's selects folder, and then send the one frame that belongs on the poster there as pixels, on purpose.

ExtendScript is a real language with a real object model, and the cost is everything around the script. You install a matching application year, put the file in a Presets path that keeps moving, and grant it the filesystem because the sample used `File`. A panel that worked in 2019 has you debugging a missing runtime in 2024. Photoshop's scripting and UXP split that world again. Affinity macros replay a recorded gesture, which is right for a repetitive click and wrong for a folder of documents or a pixel kernel you want to read. The jobs themselves are ordinary: a filter, a live shadow, an SVG icon, two brushes, a tool you drag, a pattern, a gradient, a swatch book, a nudge across a folder. You want them in the app you're drawing in, with Undo reversing the whole action and the script unable to wander around your home directory.

Imports have their own risks. Open a PSD and the live text may arrive as pixels. Open an AI file and the private Illustrator data may not be in the PDF-compatible stream. Open an Affinity document and the adjustments and history aren't guaranteed. Good apps tell you what changed. Others import silently, and you find the missing effect at the client review. On export, you want PNG at 1×, 2× and 3×, SVG, Lottie, layered PSD, PDF and OpenRaster, and to pick the one the next person can open. You don't want a button that claims to write native `.ai` or `.af` when no such writer exists. You keep the `.oma` as the editable file, and you keep the imported source when the notes say something was lost.

Creative Cloud wants the document in the service, with Libraries, sync folders and "saved to cloud" as the default. You can work offline, and you can also discover that what you thought was a file is a stub. Affinity has stayed closer to documents on disk, with its own account system for the suite. When the machine is yours, you want the folder. Sign in when a client needs to see a snapshot, not to open yesterday's poster. Publishing is also a different decision from sharing with a reviewer. Tools that treat "anyone with the link" as the same setting as "on the homepage" mix up a client link and a public gallery. You want invites for people with a role, and a separate action by the owner before a flat image goes public. Taking it down should remove it from the gallery, though it can't reach into someone else's downloads folder.

On Linux, the creative suite most people know has usually meant a VM, a second machine or a web app in a browser tab. Illustrator, Photoshop and InDesign hold the muscle memory for pen, brush, frames, type and export. Affinity is the suite people install to do those jobs without a subscription, but its desktop builds aren't something you apt-get on your work machine. You want the letters, the layer stack, the RAW develop and the timeline in a binary that installs into your home directory and runs on the glibc you already have, with an interface that matches the rest of the desktop instead of a second set of preferences you'll never maintain.

## The constraint

Omadesign is one native binary on Linux: one launch, one dock icon, one `~/.local/bin/omadesign`. Design, Layout, Pixel, Photo and Motion are personas, meaning modes of that one process. They share the key table, with gates where a tool doesn't exist, and they share the Shortcut HUD and `F1`. A second process would mean a second undo stack and a file to hand across every time the brief changed from vectors to pixels.

The poster lives in one `.oma`, a JSON file with rasters packed as PNG and the motion clip included, with one undo history. Tabs are documents, not apps, and `Ctrl+N` and `Ctrl+O` open tabs in the same window. Switching personas switches tools, not files. It doesn't write a sibling file or ask you to export a PDF to keep going.

Photo is the exception to keep straight. If Photo wrote the RAW into the `.oma`, every poster save would duplicate a sensor file, and a grade would be stuck inside one document. So it works the other way. The camera file stays the camera file, and `.omaphoto` stores the develop settings next to it. **Place in Design** copies an 8-bit developed image into the layer stack with one Undo, and you keep the RAW and the sidecar for the next pass. Photo is inside the same binary as Design, which makes a destructive save easy to get wrong, because `Ctrl+S` means "write the document" in every other persona. In Photo it has to mean "write the settings next to the original." The original's bytes, size and modification time are the identity the sidecar trusts, and rewriting the camera file would change that identity and destroy the only full-precision source. The sidecar is small and has no pixels, and you can resume from either file. A missing or changed original has to fail an explicit settings open without replacing the picture you're looking at. A whole-folder job writes sidecars in the background, in one directory with no recursion, and it has to be cancellable. Undo has to restore the settings it wrote, and pixels stay pixels. Place in Design is the bake, as a separate command that produces an 8-bit layer.

Motion stores keys in the same `.oma` and treats the artboard as the rest pose. It doesn't bake the animation into the vectors. Static exports show the rest pose, and the clip is there the next time you open the file. Layout frames, auto-layout and constraints are objects in the same tree. Documents that use features needing format 6 save as format 6 so older builds can't silently strip them, and other documents stay on format 5. This build reads formats 1 through 6.

A project needs no account. The welcome screen finds project folders by the `.omabrand` directory anywhere under your home folder, and cloud sign-in is optional and separate. The kit can't live in a library service if yesterday's job has to open on a machine that has never signed in. So the kit is three names next to the work. `.omacolors` holds the palettes, `.omatype` names the font roles, and `.omabrand/` holds the assets and font files. A saved document uses the nearest enclosing folder that contains any of them, and if none exists, the kit starts next to the document. An unsaved document asks you to **Choose a project**, and the folder button can point at a different library on purpose. These names start with a dot, so a file manager that hides dotfiles hides the kit. Turn on hidden files when you copy by hand. Palette saves and artwork saves are separate, and quitting asks about unsaved palettes first, then artwork. A kit that auto-wrote into the `.oma` would vanish as soon as you sent someone the pictures without the folder, and a kit stored only in one document wouldn't be shared by the next file in the project.

0.5.8 embeds Lua 5.4.9 and plugin API 1. A second runtime would bring back the old costs: another install, another version pin and another place for the starter kit to drift from the binary. A plugin runs on a background worker inside this process against a snapshot, and it returns native edits or nothing. The app commits one batch or discards the run. The API is a list you can memorize, because an API the size of the whole application is how scripts end up tied to panels that got renamed. It covers shapes, geometry, fills, gradients, effects, brushes, palettes, SVG, pixels and a status message. Each run gets a fresh VM, with no `io`, `os` or `require`, no network and no exec. Limits are fifteen seconds, 64 MiB of Lua heap and 20,000 edits. There's no marketplace in this release fetching plugins you didn't ask for.

For imports, one document format is the master. Importers have to land in the native layer tree, record what they couldn't carry and leave the source file untouched, and **Save** writes `.oma`. If an importer rewrote the PSD or the RAW in place, the round trip would be a destructive save under a friendly name. Notes have to live in the `.oma`, not only in a dialog you dismiss, and **View > Document conversion notes** shows them again later. A format in the Open dialog isn't a promise of complete compatibility. The format guide says so in its first paragraph, and the exporters follow that rule. Where a feature can't travel, a note says so. PDF export never silently drops effects or replaces them with a single gradient color, and fallback images are capped. Same-file conversion is refused, so a headless `--convert` can't overwrite the path you gave as input. There's no native `.ai` or `.af` writer. Interchange for those sources is PDF, SVG, PSD or ORA, plus the `.oma` you continue in.

The editable file is the local `.oma`, brand kits are dotfiles in the project folder, and the welcome screen browses your home folder without an account. **Sign up for cloud** on the welcome screen opens registration without gating recent files, and **Team** only appears while you're signed in and a shared project exists. Cloud collaboration, in the product since 0.5.4, shares project files, assets and immutable flat exports. The browser is for reviewing snapshots, and you keep authoring in the native app. Live multi-user canvas editing, presence and browser authoring are out of scope. If saving in the app silently uploaded, the local file would stop being the file, so transfers are explicit. A push adds files and never quietly overwrites someone else's version, and comments stick to the snapshot they were written on. Showcase publication is an owner action on a chosen flat export. Source files, assets and private review threads stay out of that public object. Unpublishing removes it from the gallery, the competition displays and the image endpoint, though copies a viewer already saved are theirs.

The install target is `~/.local`. The public installer and `scripts/install.sh` put the binary in `~/.local/bin`, the desktop entry and MIME XML under `~/.local/share`, and the docs, skill, licenses and plugin examples under `~/.local/share/omadesign`. Nothing is written to `/usr`, which is what makes the same line work on Silverblue, Bazzite, NixOS, SteamOS desktop mode and Omarchy, where `/usr` isn't the place for a vendor's files. `$XDG_DATA_HOME` replaces `~/.local/share` when set. There's an isolated prefix for people packaging a copy, but the default is your home directory. The binary has to run on glibc 2.35, which covers Ubuntu 22.04, current Arch and Asahi Omarchy, and ARM64 and x86_64 are both release archives. Lua, RAW, JPEG and the C++ runtime pieces ship inside the package so Photo and plugins don't depend on a distro package name. Templates and the plugin guide have to work with the network unplugged, because a first launch that needs a CDN isn't really an install.

## What landed

### Five personas in one window

The manual's table is the map.

- **Design** is for a mark, a poster or a layout. Its first tools are Move `V`, Pen `P`, Rectangle `R` and Type `T`, and it's the default persona.
- **Layout** is for a screen, a landing page or a dashboard, with Frame `F`, Rectangle `R` and Type `T`. Frames nest, and stack children, constraints and frame export all live here in the same document as the drawing.
- **Pixel** is for painting or retouching, with Brush `B`, Eraser `E`, Clone `J` and Wand `W`. Paint goes on a pixel layer, which you add from the Layers studio if the document started as vectors.
- **Photo** is for grading a photograph, with Crop `C`, the develop sliders and Place in Design. The library browses a folder, adjustments are grouped as Light, Color and Detail, and the original file stays the original.
- **Motion** is for animating the artboard. Space plays, `K` sets keys and **File > Lottie** exports. The artboard you drew is the rest pose, Motion doesn't rewrite it, and the clip is stored in the `.oma`.

The welcome screen sends you to the right persona without a second install. **+ Vector** and the vector templates open in Design, **+ Raster** opens a blank pixel document, **+ Layout** opens frame starters and **+ Photo** opens the photo workspace. Motion has no empty-workspace button, because it starts from artwork that already exists. The funnel on the welcome browser filters by Vector, Raster, Layout, Photo or Motion. There's one recent list, and the files are `.oma`.

The HUD sits at the bottom of every persona that shows the canvas. Its upper row follows the tool and the lower row shows the letters. `Ctrl+/` hides it and `F1` opens the full shortcut list. Hold a modifier and the strip shows that modifier's shortcuts. Tool letters that don't exist in the current persona do nothing, and Photo keeps Hand, Zoom, Crop and Eyedropper. `V`, `P`, `T` and `B` are the four you reach for on day one, and they work in Design and Pixel as the table defines them. `B` in a vector document still means Brush, but you need a raster layer under it before paint sticks.

The interface follows the desktop, with Omarchy theme colors, the font from `omarchy font current` or fontconfig sans-serif, and Phosphor Light icons. There's no separate light and dark switch inside the app, and you stay in one window the whole time.

### One layer stack

Design draws the vectors, with move, pen, type, shapes, gradients, effects, pathfinder, groups and compounds. Pixel paints on a pixel layer in the same document with brush, eraser, clone, heal, smudge, masks and the raster filters, which apply pixels with their own one-step undo. A marquee limits a filter, Cancel in the filter dialog leaves the layer alone, and applied pixels save in the `.oma`.

The layer list shows both. Eye and lock work per object, and groups expand. Pass through on a group decides whether child blend modes see the backdrop. Opacity and blend live on the object and on the layer, and placed images use the layer's opacity and blend. You reorder with `Ctrl+[` and `Ctrl+]`, plus the Shift variants for front and back. It's one stack in one tab.

Layout adds frames to that stack. `F` drags a frame, and a frame drawn inside another nests. **Object > Wrap selection in frame** wraps what's selected. You get stack children, gap, padding and constraints. **File > Export frame** writes PNG, SVG or HTML for the selected frame, and comments pin to the canvas. The poster and the screen mockup live together, so you only keep a second file for the UI if you want one.

Photo opens DNG, CR2, CR3, NEF, ARW, RAF, ORF, RW2 and the rest of the recognized extensions through the decoder built into the binary. **Save settings** writes `name.NEF.omaphoto` next to the original, and the original bytes stay. **Place in Design** adds the developed 8-bit layer to the document you're building. Export JPEG, PNG or TIFF from Photo when you need a delivery file, and PNG and TIFF from a RAW keep 16-bit channels. The `.oma` you save from Design doesn't contain the RAW or the sidecar, so keep the pair on disk with matching names.

Motion opens on the same artboard. Tracks are X, Y, rotation, scale, opacity, stroke reveal and fill reveal. Presets become keys, `K` keys the selection and Space plays. Delete removes a key, then the animation, then the object, in that order, so the drawing survives removing the animation. Lottie export needs vectors, and pixel layers, masks and effects produce an error from that exporter, while animated SVG keeps them. Import Lottie brings a basic shape subset back onto the timeline, and the editable master is the `.oma`.

Document tabs sit above the canvas, and several `.oma` files can be open. The persona applies to your current work on the document in front of you, and `Ctrl+S` saves the tab you're in.

### Brand kit on disk

The right sidebar has Inspect, Palettes and Brand.

Palettes are Personal or Project. Personal colors are available across all your work and live in the personal library, which is also where a plugin's `oma.palette` writes. Project colors go in the current project folder. Click **+ Palette**, name it, and use **Rename** to change it. Add the current color, pull fill and stroke with **From selection**, or type a hex and press **+**. `#RRGGBBAA` carries alpha. Choose Fill or Stroke, then click a swatch. The swatch menu replaces, copies the hex or removes. **Save** on the palette writes the collection, and that save state is separate from `Ctrl+S` on the artwork.

`.omacolors` is JSON. One file can hold several named palettes, a single palette object or a plain array of hex strings. Older RGBA objects still load and are converted to the portable form on the next save. **Load palettes…** merges and adds suffixes to conflicting names. **Export selected palette…** and **Export collection…** write files you can hand over. If the file changes on disk while you have unsaved palette edits, Save is blocked, so export a copy or choose **Reload saved colors**.

In Brand, choose **Load bank…** or **Create bank**. Assets are copied into `.omabrand/`, and the originals stay where they were. PNG, JPEG, WebP, TIFF, BMP, GIF, SVG and `.oma` are accepted. Drag a tile onto the canvas, or double-click to place it at the selected artboard's center, and `Ctrl+Z` undoes the placement. In Photo, double-clicking places the asset into Design. An optional `brand.json` sets the display name, and without it the folder name is used. **Save bank copy…** copies the bank, the typography kit and the fonts into another project folder.

In Typography, **Add fonts…** copies TTF or OTF files into the project. The fonts work inside the app without being installed on the computer. Name a role such as Heading, Body or Caption and click **Save role**. **Apply** uses that face on the selection or on the next text you create, and the Character panel lists **Project fonts**. Applying a face to artwork can be undone, and the kit's names and files have their own save. `.omatype` stores roles with paths relative to `.omabrand/`, under `fonts/`. **Load kit…** merges another kit and copies its font files, and **Save copy…** writes the kit into another folder. Removing a role keeps the font file for text that already uses it.

SVG export draws project-font text as outlines so the picture holds up. The `.oma` keeps the text editable, including after you move the project and for new characters. Saving artwork into another folder copies the faces it uses into that folder's `.omabrand/fonts/`.

On the welcome screen, **Projects > recent** shows these folders, found by `.omabrand`, with subprojects and the `.oma` files inside them. **Edit brand…** opens the editor and **+ Project** starts a new one. **Team** only appears while you're signed into cloud and a shared project exists, and local browsing doesn't wait for it.

### RAW sidecars

Open a photo from **File > Open**, the Photo library, a drop or a folder. RAW extensions the decoder recognizes include DNG, CR2, CR3, NEF, NRW, ARW, RAF, ORF, RW2, PEF and the longer list in the format guide. An extension names a family and doesn't promise every camera or compression. JPEG XL DNG, GPR, EIP and R3D aren't supported in this build. Only the first image of a multi-image RAW is developed, with a note.

The decoder is LibRaw 0.22.2, built in, so there's no external converter and no download when you open a file. You get 16-bit linear sRGB, camera white balance and color matrix, orientation applied and automatic brightness off. The display preview's long edge is capped at 1600 pixels until you zoom, and full resolution arrives as tiles. **Before** shows the default development, not the embedded JPEG. The render isn't trying to match Lightroom, Capture One or the camera JPEG, and lens corrections and proprietary camera looks aren't recreated.

**Save settings** writes a sibling file such as `DSC_0001.NEF.omaphoto`, and the pair has to keep matching names. The settings record the source's size and modification time and don't contain the image. **File > Open**, a drop or **Photo > Library > ··· > Open photo or settings…** resumes from either file. Opening the sidecar restores the original precision and the saved crop and rotation. If the original is missing or changed, or the settings are invalid, that explicit open fails and leaves the current photo in place. Opening the original with unusable settings shows the default development and a note. A failed save keeps your edits so you can retry. In Photo, `Ctrl+S` saves the selected photos' settings. Quitting asks Save all, Discard or Cancel for unsaved photo settings before palettes and artwork.

**Copy adjustments** is `Ctrl+Shift+C` and **Paste adjustments** is `Ctrl+Shift+V`. Light, color, detail, tone curve, color mixer and color grading can be copied separately, and crop and rotation are off by default. A batch paste is one Undo, and later edits to the source don't change a look you already copied.

For a whole folder, use **Library > … > Browse folder…**, open one representative frame, and copy its adjustments or choose **Presets… > Use preset…**. In **Apply adjustments**, choose **Whole folder**, then **Write settings for N photos**. The job writes each `.omaphoto` in that directory only. It doesn't recurse, doesn't load the shoot into memory and doesn't touch image pixels. Excluded categories keep their existing adjustments. Cancel stops the rest, and Undo restores completed changes. A file that changed outside the batch is preserved and reported. The caps are 10,000 photos and 32 MiB of settings history, so split larger shoots into smaller folders. Open a representative RAW first, because a recognized filename can still fail to decode.

Export JPEG, PNG or TIFF at full developed resolution, including crop and rotation. PNG and TIFF from a RAW keep 16-bit, and JPEG is 8-bit. **Place in Design** puts an 8-bit layer in the poster with one Undo. A decode starts with limits of 64 megapixels and 512 MiB of input, with a 120 second cooperative cancel.

Presets are `.omapreset` files in the preset library. They hold adjustment values, with no pixels and no link to a source.

### Plugins

**Plugins > Manage plugins** installs a `.lua` file, a folder with `main.lua` or an `.omaplug` ZIP. Each plugin has an enable checkbox, and **Reload** picks up an edit. Replacing a plugin keeps a hidden backup of the previous folder and restores it if the new copy fails.

Studio starter is installed on first launch, with twelve actions under the id `org.omadesign.studio-starter`:

- Midnight duotone maps pixels and keeps alpha.
- Soft offset shadow writes a native, editable shadow.
- Orbit icon places SVG paths.
- Soft ink and Dry marker load Raster brush presets and switch you to Pixel.
- Ribbon path uses **Activate tool**, shows a preview line and leaves an editable path on release.
- Dot field adds ellipses.
- Aurora gradient sets a native three-stop fill.
- Night studio swatches saves a personal palette, outside document Undo, like a brush preset.
- Translate selection moves vectors. Its command id is `nudge`.
- Selection count and Document dimensions are behaviors. They stay off until you enable **Run enabled plugins’ document and selection behaviors**, which is remembered in `behaviors.json`. A behavior doesn't re-fire on its own output.

A finished document action is one `Ctrl+Z`. Errors, **Cancel run**, and a document or selection that changed mid-run leave the `.oma` alone. The status line either says the result was discarded or shows **Plugin completed · Undo restores document edits**.

The shell uses the same binary:

```sh
omadesign --install-plugin ./my-plugin
omadesign --list-plugins
omadesign --plugin ~/.local/share/omadesign/plugins/org.omadesign.studio-starter \
  --command nudge --batch ./input --output-dir ./output \
  --params '{"dx":20,"dy":0}'
```

Batch reads the `.oma` files directly in the input folder in filename order and writes new files. It refuses existing outputs, keeps going after a bad file and exits nonzero if anything failed. Brush, palette and canvas-tool actions are refused on the command line because they need the desktop session.

To distribute a plugin, ZIP the folder's contents and name it `something.omaplug`. Read the API in `~/.local/share/omadesign/docs/plugins.md` or with `omadesign --agent-docs plugins`. The clean starter source is in `~/.local/share/omadesign/plugin-examples/studio-starter`. Upstream contributions are a folder under `plugins/` in a fork, with a README, a license, a sample `.oma`, and a check that cancel and undo behave.

The manager's categories are Filters, Effects, Icons, Brushes, Tools, Behaviors, Batch, Patterns, Gradients and Swatches, and other names show under All categories. The host calls are the ones in the guide. Hidden, locked and guide objects aren't targets.

### Import and export

**File > Open** reads layered PSD and PSB, GIMP `.xcf`, every page of a PDF and PDF-compatible AI, OpenRaster, SVG and SVGZ, and supported Affinity documents through the optional bridge. EPS and PostScript go through Ghostscript, if it's installed, and then the PDF importer. Each import opens in its own tab at the original dimensions, and the source file stays where it was.

PSD and PSB keep groups, names, placement, visibility, opacity, blend modes, pixel masks and supported Normal color overlays. Text and smart objects arrive as their saved pixels, and other effects, fills and adjustments produce notes. Export writes RGB 8-bit layered PSD or PSB, with vectors and live text rendered into pixel layers.

PDF import builds an artboard per page, with paths, supported text, images and optional-content groups. Complex text can become editable outlines. Illustrator's private data, symbols and live effects aren't reconstructed, and `.ai` means the PDF-compatible part, or older PostScript via Ghostscript. PDF export writes pages, paths, images, opacity and optional-content layers. Text becomes outlines in the PDF while the `.oma` keeps the live text. Backdrop-dependent blending can rasterize a page, with a note.

SVG import keeps objects, hierarchy, names, transforms, text, images and supported masks, and leaves out scripts, animation and foreign content. SVG export keeps vectors. Shape and conic gradients become image patterns capped at 4096 pixels on a side, and linear and radial gradients keep their stops. Project fonts export as outlines, and the source text stays editable in the `.oma`.

OpenRaster round-trips pixel layers and groups. Vectors and text become pixels per layer on export. Unsupported Porter-Duff modes are rejected instead of quietly mapped to Normal. GIMP `.xcf` imports pixels, groups, masks and supported blend modes, but live text, effects and paths aren't reconstructed. There's no XCF writer, so send GIMP an ORA or a PSD. High bit depth becomes 8-bit RGBA, with a note.

Affinity import uses the optional bridge, installed by running `./scripts/setup-affinity-import.sh` once, and nothing is downloaded during import. Legacy and newer containers are only partly supported. Adjustments, live effects, publishing structure and history don't come across as native edits, and there's no `.afdesign` or `.afphoto` writer.

RAW opens in Photo, `.omaphoto` is settings next to the camera file, and export from Photo is JPEG, PNG or TIFF. Placement into Design is 8-bit.

**View > Document conversion notes** lists the unsupported and converted features, and the same notes stay in the `.oma`.

Exports are in the File menu and on `Ctrl+E`: PNG at 1×, 2× and 3×, JPEG, SVG, animated SVG, Lottie JSON, layered PSD and PSB, PDF and OpenRaster. Layers a format can't carry may become individual pixel layers, and the notes describe that. Lottie needs shape animation, so pixel layers, masks and effects cause a Lottie error. Use animated SVG when you need them. Static PNG, JPEG and SVG show the rest pose, and the clip stays in the `.oma`.

Headless commands use the same readers:

```sh
omadesign --inspect artwork.psd
omadesign --convert artwork.oma --output artwork.pdf
omadesign --convert artwork.oma --output artwork.ora
```

Output extensions include `.oma`, `.svg`, `.png`, `.jpg`, `.psd`, `.psb`, `.pdf` and `.ora`. Notes go to stderr, and the destination has to be a different path.

### Cloud, when you want it

The workspace is `https://omadesign.app/cloud`. **File > Sign in…** opens the browser with a device code, and you approve the code the desktop is showing. A name or email alone doesn't grant access. Desktop credentials expire after 30 days, and you can revoke them from `/account` or disconnect in the app. The local identity file is readable only by its owner.

**File > Push project + review export** uploads a versioned `.oma` and a PNG of the current document. Project fonts go with it, and raster pixels stay embedded in the design file. **Upload project asset…** adds another file. **Cloud projects… > Pull & open** opens the latest source as a separate document and downloads shared assets into a new folder in the app's cloud-downloads directory. Save the local `.oma` after the first push so the cloud link stays with the document.

Owners invite a verified email as an editor or a reviewer. Invitations go out through the mail sender and expire after seven days. The invited person signs in with that email and accepts in the workspace. Owners can change roles, remove access or cancel an invite.

An owner can manage files, uploads, review, the team, archiving and publishing. An editor can download source and assets, upload, comment, reply and resolve threads. A reviewer sees flat exports, pins, rectangular annotations, comments and replies, and can resolve their own threads. Pins scale with the image, including on a phone. The desktop **Review annotations…** window loads the same versioned exports and threads.

Service limits are 100 MB per source or asset file, 20 MB per flat PNG, JPEG or WebP export, 200 files per project, 100 projects per account and 100 members per project. Archiving hides a project from collaborators and unpublishes its public work, and the owner can restore it.

**Publish selected export** is the showcase step, in the desktop app or the web workspace. You pick a finished flat export and give it a title and description. `/showcase` lists public work and `/showcase/:id` shows the flat image. Unpublish removes it from both. Entering a competition uses a public showcase work you own, submitted to an open brief. Duplicate entries are rejected and closing dates are enforced. `/compete` lists competitions, which stay unpublished until a real brief and dates exist.

Local edits never upload themselves. Anonymous usage statistics are a separate toggle that starts off, and neither is the document store.

### Linux first

```sh
curl -fsSL https://omadesign.app/install | sh
```

That finds the current release, checks the archive and installs it. If `omadesign` isn't on `PATH`, run `~/.local/bin/omadesign` or add `~/.local/bin` to `PATH`. One `omadesign.desktop` launcher remains, and `.oma` and `.omaphoto` can point at it. Preferences live in `~/.config/omadesign`, or `$XDG_CONFIG_HOME`, and recovery swaps live in `~/.local/share/omadesign`.

0.5.8 is the release this package line installs as current. The archives are ARM64 and x86_64, both report 0.5.8, and neither needs a glibc newer than 2.35. The x86_64 executable was tested through QEMU against Ubuntu 22.04's glibc, not on a physical x86_64 machine with a GPU. Lua 5.4.9 is in the binary. Studio starter, the offline docs, the creation skill, and the Lua and Phosphor licenses are in the archive. Reinstalling preserves a plugin you already edited under `plugins/org.omadesign.studio-starter`.

At launch the interface reads `~/.local/state/omarchy/current/theme/colors.toml`, then `~/.config/omarchy/themes/<current>/colors.toml`, then the stock Omarchy palette if neither exists. UI type comes from `omarchy font current`, then fontconfig `sans-serif`, and `OMADESIGN_FONT=/path/to/font.ttf` overrides it. Icons are Phosphor Light, the welcome screen uses the same palette, and there's no in-app light/dark switch. The title bar stays visible, and **omadesign** in that bar opens Config, Update, About and Docs. About shows the version. Update checks the channel and, when you confirm, runs the official installer, waits for work in progress, writes a local recovery snapshot and restarts with the same documents and photo adjustments.

The five personas are the suite. `V`, `P`, `T` and `B` are the letters to know, and `F1` shows the rest. Fifty-two vector templates and the Layout starters ship with the app and open offline. Photo decodes RAW without an external converter, and plugins run without a second runtime. The brand kit is `.omacolors`, `.omatype` and `.omabrand/` in the project folder. Cloud sign-in is there when you push a snapshot, and files open without it.

`omadesign --version` prints the build, `omadesign --agent-docs manual` prints the manual built into it, and `omadesign --list-plugins` works with no window.

## In the hand

On a machine that doesn't have the app yet:

```sh
curl -fsSL https://omadesign.app/install | sh
~/.local/bin/omadesign
```

The welcome screen is a file browser with the creation buttons. The interface colors match your Omarchy theme, and the icons are the Phosphor set. Click **+ Vector** or a blank size and you're in Design. Press `R`, then `T`, then `P`, and use `V` to move what you made.

Add a pixel layer and switch to Pixel. Press `B` and paint, maybe a shadow by hand, or run a raster filter on that layer. Press `E`. The rectangle is still there in the same stack, and in the Layers studio the type, the rule and the pixels are rows in one list. `Ctrl+Z` undoes the stroke in the same history as the rectangle, because it's one document.

If the brief grows a screen, switch to Layout. Press `F` and draw a phone frame over the artwork, or wrap a selection. Drag the headline's layer onto the frame to nest it, and turn on **Stack children** if the frame should pack. The poster and the frame share the file. When you need a PNG of that screen, export the frame from the File menu. The `.oma` stays the master.

Open Motion when something should move. Select the headline, choose **Fade in**, or press `K` and drag. Press Space to play and again to stop. Switch back to Design, and the rest pose is the artboard while the keys stay in the file.

For a photograph, switch to Photo from **+ Photo** or the persona and open a CR3 or DNG. Move exposure and white balance, working on the 16-bit linear data. Press `Ctrl+S` or **Save settings**. In the file manager, the CR3's size and date are unchanged, and next to it is `something.CR3.omaphoto`. Click **Place in Design** and pick the poster tab. The developed image is an 8-bit pixel layer, and `Ctrl+Z` removes the placement. The sidecar stays next to the RAW for the next grade, and you never exported a TIFF from another application.

`Ctrl+S` writes one `.oma`. Quit and reopen it. The type is editable, the pixels are there and the keys are there. Open the RAW again from the camera file or the sidecar and the grade is back, because it never lived only inside the poster. If you renamed the CR3 and left the sidecar behind, you get a note and the default development. If you opened settings that can't find their original, the current photo isn't replaced.

To copy a look, use Copy adjustments, Shift-click a range in the library and paste. Leave crop off. `Ctrl+Z` undoes the whole paste, and `Ctrl+S` writes sidecars for the selection. For a folder, browse to it, open one frame that actually decodes, copy the look, choose **Whole folder** and write settings. Watch the progress, and cancel if a filename looks wrong. The JPEGs and RAWs in that folder keep the same bytes, and the new files are `.omaphoto`. `Ctrl+0` fits a photo, `Ctrl+1` shows 100 percent where the tiles fill in, and holding Space pans. When a frame belongs on the poster, place it. You can grade again later from the sidecar, place again and delete the old layer.

**View > Document conversion notes** is for files you imported. A native document built this way doesn't need one. To see how imports work, press `Ctrl+O` and choose a PSD you know has live type. It opens at its pixel size, and the notes name the type layers that arrived as pixels. Save a `.oma` and the PSD on disk is unchanged. Edit what you can, then press `Ctrl+E` and write a PDF or ORA for the next tool. Reopen the `.oma` the next day and the notes are still in the file.

Open a multi-page PDF and you get an artboard per page. Editable text is text, and text that had to be outlined is paths, with a note saying so. Export SVG for the logo page and PNG at 2× for a preview. Open an SVG, drag a node with `A` and export SVG again to compare. If a mask became pixels, the note told you before the client did. For Affinity, run the setup script once on a machine with the pinned converter's dependencies, open the `.afdesign`, read the notes, save a `.oma` and export PDF or SVG. The Affinity file stays as it was. For a camera file, stay in Photo, and don't expect **Save** to produce a layered document. Place or export when you need pixels. `--inspect photograph.NEF` prints metadata without writing anything unless you convert on purpose. If you don't want the dialog, drop a file on the welcome screen. Layered documents open, ordinary images place and `.oma` files open.

For the brand kit, make a folder for the job. Use **Choose a project** to point at it, or save the `.oma` inside it and let the nearest kit apply. Open Palettes, choose Project, add the colors you're actually using and press **Save**. With hidden files visible, you'll see `.omacolors` in the folder. Open Brand, click **Create bank** and add the logo SVG and a wordmark PNG. Drag the logo onto the artboard, and `Ctrl+Z` if it lands wrong. Open Typography, add the two font files, name the roles, click **Save role**, select the headline and click **Apply**.

Copy the folder to another machine, dotfiles included, and install Omadesign there if it isn't already in `~/.local/bin`. Open the `.oma`. The type is still editable, the swatches are in Project and the bank tiles are the same files, with no sign-in dialog in the way. If you want `.omacolors` spelled out at the destination, export the palette collection from the original machine too. **Save bank copy…** carries the assets, type kit and fonts. The manual's Fieldwork example in the repo is a portable sample with the same layout. If a plugin installed Night studio into Personal, that palette is yours across projects. Copy `.omacolors` when the colors belong to this job and should travel with it.

For plugins, open a poster and go to **Plugins > Manage plugins**. Studio starter is there on a first install. Run **Effects · Soft offset shadow** on a selection and one shadow stack appears, and `Ctrl+Z` removes it. Run **Patterns · Dot field**, and `Ctrl+Z` removes the whole grid, not one circle at a time. Activate **Tools · Ribbon path**, drag and release, and you get a path named Ribbon that's editable with `A`. Press Escape before releasing and the document is untouched. On a raster layer, run **Filters · Midnight duotone** and the alpha stays as it was. Run **Brushes · Soft ink brush** and paint with `B`. The preset isn't an entry in the document history. Turn on the behavior checkbox and select an object, and the status line reports the count once. Turn it off for silence, and it stays off the next day.

From a terminal, list plugins, copy the action id and batch `nudge` into an empty output directory. Open one result and the move is a normal document edit, while the inputs in the source folder haven't moved. When you write your own, start from the examples path, change the id, install the folder, and break `run` once to see the document stay put. If you're on a train, read the API with:

```sh
omadesign --agent-docs plugins
```

The title-bar Docs item opens the website when you're online. The share folder has the copy that was installed with the app.

For cloud, draw the poster and save it to a folder with `Ctrl+S` without signing in. Quit and reopen, and the welcome list finds the `.oma` under your home directory without a session. When a reviewer needs a snapshot, choose **File > Sign in…**, approve the device code and click **Push project + review export**. Send the invite to their email. They comment on the flat PNG in the browser, and you open **Review annotations…** in the app, reply and keep drawing in the `.oma`. Push again for a new snapshot, and the old comments stay on the old one.

When the piece should be public, select the export, give it a title and click **Publish selected export**, then check `/showcase`. Unpublish when it should come down. The `.oma` on disk stays private, and the review threads don't become the gallery page. On a second machine, **Cloud projects… > Pull & open** gives you a document and a folder of assets, with no live cursor from the other machine. Edit, save locally, and push if you're an editor and want to add a version. Disconnect in the app when the laptop should stop holding a credential. The local files remain.

When a newer package exists, click **omadesign > Update** and confirm. The installer runs, your open documents come back and the plugin folder you edited is unchanged. If you want to check the archives without installing over your live copy, the archives and checksums for both architectures are on the release. The installer is what puts them in `~/.local`, and it goes no further.

Press `F1` in any persona. It's one list, and the persona's gate turns off the shortcuts it can't run, so there's no second keymap to load.

## The edge

One binary doesn't mean every tool letter works in every persona, and it doesn't mean the RAW is embedded in the poster. There's no second process to alt-tab into for the pen, the brush or the timeline. StudioLink's idea of keeping suite tools within reach of each other is the habit this window is built to meet, with personas and one file.

The `.oma` holds the layer stack, the frames, the placed pixels and the motion clip. It doesn't hold the RAW source or the Photo settings, which stay in the sidecar until you place pixels, and placing produces an 8-bit layer. One stack doesn't mean one undo across Photo and Design, because Photo has its own history until the pixels are placed. Lottie won't carry pixel layers. Static PNG and SVG export the rest pose, not the timeline. Motion can't start from an empty welcome button.

Save settings never rewrites the camera file. Whole-folder apply never rewrites pixels, never walks subfolders and never treats a recognized name as proof a file will decode. The sidecar is settings tied to size and modification time, not a hash of the sensor data.

If you skip the dotfiles, the kit doesn't arrive, because `.omacolors`, `.omatype` and `.omabrand/` are the kit. Palette and font-kit saves aren't `Ctrl+S`, and a conflict on disk blocks the palette save until you reload or export. SVG export outlines project fonts while the `.oma` keeps them editable. Share fonts under their licenses. None of this requires an account, and cloud is a separate, optional way to share a project you already have on disk.

A plugin doesn't get ExtendScript's filesystem access or a private history with one step per object. Failure and cancel apply nothing. There's no remote catalog in 0.5.8. Brush and palette results are settings that document Undo doesn't rewind. Behaviors do nothing until the second checkbox is on, and the shell won't invent a brush stroke.

Opening a file doesn't mean a proprietary effect survived. There's no writer for native Illustrator or Affinity files, and GIMP doesn't get an XCF back. Conversion notes stay in the `.oma` because a dialog is easy to close. Same-file conversion is refused. The source you opened stays the source, and you continue in the `.oma`.

The cloud service isn't where documents live by default. Sign-in, push, invite and publish are separate actions. Publishing belongs to the owner, works on a flat export and leaves source and review threads behind. Unpublishing can't recall a copy someone already saved. The browser doesn't edit the canvas, and there's no presence layer or simultaneous editing inside the `.oma`.

The installer writes nothing to `/usr`, and a machine that can't run glibc 2.35 can't run this binary. The x86_64 build's published check is QEMU against glibc 2.35, not a claim about every GPU. Templates don't fetch themselves and Lua doesn't come from the distro. Docs in the title bar open the website, while the offline pages are `--agent-docs` and `~/.local/share/omadesign/docs`. You don't need to sign in to draw, grade or animate.
