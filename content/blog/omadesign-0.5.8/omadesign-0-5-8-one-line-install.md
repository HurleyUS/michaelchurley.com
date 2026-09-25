---
id: T001
title: One-line install
slug: omadesign-0-5-8-one-line-install
excerpt: "One command installs omadesign to ~/.local/bin and a desktop entry under your home directory. Nothing is written to /usr."
publishedAt: 2026-09-09T10:54:53Z
tags: [omadesign, 0.5.8, install, binaries, welcome]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-one-line-install/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-one-line-install/og.png
---

## The habit

You already know the install dance. On a Mac you open a disk image, drag a bundle into Applications, and eject the volume. On Windows you click through a setup wizard and hope it did not add a second updater. Illustrator and Photoshop train a third habit: a manager app fetches the studio, parks it where that manager wants it, and keeps a login between you and the icon. Affinity is closer to a normal desktop install. You still hunt a menu entry when the wizard finishes.

Linux designers collect one more habit on top of that. `sudo` into a package manager. Approve a Flatpak portal. `chmod +x` an AppImage and lose track of which folder holds it. Immutable desktops add a hard stop. The system image is not yours to edit. The hand still wants one command and a launcher the menu can find.

Omadesign meets that hand with a shell line. Paste it. The binary lands where your user can run it. The desktop entry lands beside your other home-directory launchers. You open the studio from the menu or from the path. That is the job of the install, and it is the whole job.

## The constraint

The studio is one native binary. The file you save is one `.oma`. Undo is one step on the document you have open. There is no Creative Cloud hop between the download and the first rectangle, and there is no dialog that rewrites a camera file while you are still trying to get the app onto the machine.

The machines in the room include Silverblue, Bazzite, NixOS, and SteamOS desktop. On those systems `/usr` belongs to the image. A package that needs root to copy itself into `/usr/bin` fails, or it asks you to layer the OS, or it pushes you into a container you did not ask for. Omarchy sits in the same list. A mutable Ubuntu or Arch box can write `/usr` too, and the install still refuses that path so the command means the same thing on every one of those machines.

So the shape is a script fetched over HTTPS, a binary under `~/.local/bin`, and a desktop entry under your home directory. One line. Same line on an immutable image and on a normal install. Preferences stay in `~/.config/omadesign` (or `XDG_CONFIG_HOME`). The document you will make later stays an `.oma` on disk. The installer does not need a project, an account, or a cloud session to finish.

## What landed

This is the install as it stands for 0.5.8. The command was already the front door. 0.5.8 is the build that public line put on the machine.

```sh
curl -fsSL https://omadesign.app/install | sh
```

`curl -fsSL` fails on HTTP errors, stays quiet, and follows redirects. The script at `https://omadesign.app/install` resolves the current release, downloads the archive, and checks it. The 0.5.8 validation ran that unmodified public script on a local ARM64 machine. It resolved latest, downloaded the ARM64 archive, checksummed it, and installed 0.5.8. Welcome on that install shows 0.5.8. The running binary matches the published executable hash.

What gets written:

- The executable is `~/.local/bin/omadesign`.
- A desktop entry is written under your home directory. One `omadesign.desktop` launcher remains after the 0.5.8 install.
- Both `.oma` and `.omaphoto` defaults point at that launcher.
- Preferences already on disk are left alone.
- The prior binary, icon, and launcher are backed up before replacement.

The binaries are glibc 2.35. They run on Asahi Omarchy, Ubuntu 22.04 and newer, and current Arch. They do not demand a glibc newer than 2.35. ARM64 and x86_64 are the two archives. The install picks the one that matches the machine. The deeper split between those tarballs is its own decision. Here the point is that the same shell line is how either one arrives.

If the shell cannot find `omadesign` after the script returns, the binary is still at `~/.local/bin/omadesign`. Add `~/.local/bin` to `PATH`, or call the binary by that full path. `omadesign --version` prints the installed version without opening a window. That flag came with the portable packages. You can also just launch and read the version on the welcome screen.

Installed branding, plugin source, and the offline plugin docs match the release. Lua and the RAW decoder travel inside the binary's package. You do not install a second runtime to open the studio or to develop a camera file. Reinstalling preserves a plugin you already changed in its installed copy. The update path inside the app, when you take it later from the wordmark menu, runs this same official installer, waits for work in progress, writes a recovery snapshot, and restarts with the same open documents and photo adjustments.

## In the hand

Open a terminal in your own user session. Paste the line.

```sh
curl -fsSL https://omadesign.app/install | sh
```

Wait until the shell prompt returns. Do not prefix it with `sudo`. The script is supposed to be you, writing into your home directory.

Then either:

```sh
omadesign
```

or, if the command is missing from `PATH`:

```sh
~/.local/bin/omadesign
```

The window that opens is the welcome screen. It is a local file browser with creation actions in the middle. Your Work lists `.oma` files. Projects lists folders that contain `.omabrand`. You can close it and come back from the desktop entry. The menu name is the launcher the script registered. File associations for `.oma` and `.omaphoto` point at that same launcher, so a double-click in the file manager opens the studio you just installed.

Check the version without guessing which copy launched:

```sh
~/.local/bin/omadesign --version
```

On this release the welcome screen also shows 0.5.8. If you already had a copy, the previous executable and launcher metadata were backed up. Your config directory was not wiped to make the new binary fit.

When a newer build is offered later, the in-app update uses this installer. It does not invent a second download path. You can keep using the shell line yourself. Either way the files land in the same home-directory places.

## The edge

Nothing is written to `/usr`. The desktop entry stays under your home directory. System directories are outside the job.

The checksum is a hard stop. A missing, malformed, or mismatched checksum stops installation. The failure checks on the installer confirm that an invalid download stops before extraction. You do not get a half-unpacked studio in the system tree, because the script was never going to unpack one there. A bad archive does not become the binary you launch tomorrow morning.

The line also does not set up a distro package, a Flatpak, or a root-owned service. Silverblue, Bazzite, NixOS, SteamOS desktop, and Omarchy get the same home-directory result as Ubuntu and Arch. If your policy forbids piping a script into a shell, download the ARM64 or x86_64 tarball from the release and unpack it yourself. The command above is the supported one-line path, and it is the one the 0.5.8 machine actually ran.

Paste `curl -fsSL https://omadesign.app/install | sh`, then run `~/.local/bin/omadesign`.

## Portable ARM64 and x86_64

### The habit

You are used to one download that pretends to be every computer. A Mac universal binary. A Windows installer that detects the chip at the end. An Electron app that ships a browser, a stack of shared libraries, and the actual drawing code somewhere underneath. Illustrator and Photoshop show up through a manager that hides the architecture until something fails. Affinity ships desktop builds you pick by operating system.

On Linux the honest version of that habit is two files. One for ARM64. One for x86_64. You learn to read the filename before you unpack it. Asahi on a Mac, a Framework or a ThinkPad on x86, a handheld desktop session, an immutable image, a plain Ubuntu 22.04 box. The studio has to be the same program on all of them, or you start keeping two kinds of documents and two sets of muscle memory.

The hand wants to download a tarball, see a version, and run it. The hand does not want a wrapper that boots a second browser so a designer can draw a rectangle.

### The constraint

One binary. One `.oma`. The same layer stack on every machine you sit down at. Undo stays one step on that document. There is no cloud round-trip required to open the file you saved on the other architecture. There is no dialog on install that rewrites a camera original so the two builds can "share" a photo.

The floor is glibc. If the binary demands a glibc newer than the oldest machine in the room, that machine is out. Ubuntu 22.04 is the line that still shows up on real desks. Asahi Omarchy is ARM64 and current. Arch moves fast and already has a newer glibc, which can run a binary built for an older one. The decision is a ceiling on what the binary requires: glibc 2.35, and nothing newer. Both architectures share that ceiling so "the studio" means one program with two builds, not two products.

Immutable systems still cannot take a write to `/usr`. The portable archive is what the home-directory installer unpacks. You can also take the tarball itself. The archive is the unit. The installer is only the fetch.

A native Rust binary (eframe, egui, one process) is the other half of the shape. The tarball does not carry an Electron wrapper. Lua, the RAW decoder, and the JPEG and C++ pieces the studio needs are bundled inside the package. You do not apt-install a second stack to grade a NEF or to run a plugin.

### What landed

Omadesign 0.5.8 ships portable ARM64 and x86_64 tarballs. Both archives report 0.5.8. Both require no glibc newer than 2.35. That is the build that runs on Asahi Omarchy, Ubuntu 22.04 and newer, and current Arch.

The 0.5.8 check ran both packages. They inspect and render native documents. They run live-text transforms, a custom pixel filter that preserves alpha, and a two-file batch. They refuse to clobber an output that already exists. They install the starter plugins, the docs, and the licenses. Reinstalling keeps a plugin you already edited in its installed copy. Thirty-nine packaged source files match their originals. The public downloads match the local archives and the published checksum files.

The x86_64 executable was tested through QEMU against Ubuntu 22.04 and glibc 2.35. That is a real glibc check. It is not a physical x86_64 GPU run. Say that plainly so you know what was proven. The ARM64 package was installed from the public installer on the local ARM64 machine, and the running binary matches the published hash. Welcome shows 0.5.8.

Dependencies that used to tempt a system package are inside the archive. Lua is bundled. The RAW decoder is bundled. You open a camera file with the binary you downloaded. The same `.oma` opens on either architecture. Format notes travel in the document when a feature had to be converted. The file does not grow an architecture tag you have to strip before the other machine will read it.

`omadesign --version` (or `-V`) prints the version without opening a window. Use it after you unpack if you want to see 0.5.8 before the welcome screen does.

The installer at `https://omadesign.app/install` selects the archive for the machine you are on, checksums it, and places `omadesign` at `~/.local/bin/omadesign`. Taking the tarball from the release page is the same bits without the script. Either way you get one native executable and the desktop entry story from the install, not a browser runtime sitting next to it.

### In the hand

If you want the script to choose the archive:

```sh
curl -fsSL https://omadesign.app/install | sh
~/.local/bin/omadesign --version
```

If you want to see the tarball yourself, download the ARM64 archive or the x86_64 archive from the 0.5.8 release. Check it against the published SHA-256 before you unpack it. A missing, malformed, or mismatched checksum is a stop, same rule the installer uses. Unpack it as your user. Put the executable on `PATH` or call it by path.

```sh
~/.local/bin/omadesign
```

The process that starts is the studio. Design is the default persona. The welcome screen is the local browser for your `.oma` files and your project folders. Open a document you saved on the other architecture. It opens at its own size, in its own tab. Save still writes `.oma`. Photo settings still write a `.omaphoto` beside the original. The camera file stays the camera file on both chips.

On Ubuntu 22.04 the glibc you already have is the floor these binaries were built for. On current Arch the newer glibc runs them. On Asahi Omarchy you want the ARM64 archive. On an x86_64 desktop you want the x86_64 archive. Mixing them up fails at load time, the way any ELF fails when the machine cannot execute it. The filename and the checksum are how you tell them apart before that happens.

Launch from the desktop entry if the installer wrote it. One `omadesign.desktop` is the launcher. `.oma` and `.omaphoto` open with it. You should not have two menu entries fighting over the same suffix after this install.

### The edge

The binary will not run on glibc older than 2.35. That is the boundary. Ubuntu releases before 22.04 are outside it. The build does not ship a private newer glibc to drag those machines along, and it does not demand a glibc from a rolling snapshot you do not have.

There is no Electron wrapper in the tarball. You do not get a second browser, a second updater, or a second document format to make the two architectures agree. ARM64 and x86_64 are two builds of the same studio.

The x86_64 validation did not claim a physical x86_64 GPU pass. If you are on real x86_64 hardware, you are past the check that was written down. The check that was written down is glibc 2.35 through QEMU, plus the archive tests both packages did run: documents, live text, a pixel filter, batches, checksums, and the version string 0.5.8.

Run `~/.local/bin/omadesign --version` on the machine in front of you. You want to read 0.5.8 from the build that matches that machine.

## First five minutes

### The habit

The first five minutes in Illustrator are a new-document dialog. Artboard size. Color mode. Raster effects. Then the toolbar, if you have not hidden it. Photoshop starts from a canvas size or from Open, and the tools you need for type and vectors are a mode change inside a pixel document. Affinity Designer and Photo split the same way by app, with StudioLink when you want the other tool well without a second file. You spend the first minute choosing a room. You spend the next four remembering which key makes a rectangle.

You also know the template browser. A grid of starters, a search box, a size you override because the starter was US Letter and the job is a poster. The good versions open as a real document you can edit. The bad versions open as a locked preview you have to "apply" before the type is type.

On Linux you add one more first minute: did the app follow the desktop font, or did it ship a theme that fights the rest of the screen. The first five minutes should end with a mark on a page, not with a settings hunt.

### The constraint

One binary. One `.oma`. Five personas over one layer stack. The first session cannot ask you to pick an app. Design has to be the default, because a mark, a poster, and a layout are the work you can start on an empty page. Pixel paint needs a pixel layer, and that layer lives in the same document. Photo needs a folder of pictures, not a new blank board. Motion needs artwork already on the canvas, so it has no empty-workspace button on the welcome screen.

Undo is one step once you are drawing. The welcome screen is not allowed to become a cloud browser you must sign into before `R` does anything. Templates ship in the binary. They use fonts you already have. They need no network. Chrome follows the desktop: Omarchy colors, the font from `omarchy font current` or fontconfig, Phosphor Light icons. The first five minutes inherit that. You do not set a private light/dark switch before you can see the page.

The feature note lists a demo in the same breath as a size and the templates. The manual's first five minutes do not name a separate demo control. The doors the manual gives you are the ones below. Use those.

### What landed

Launch `omadesign`. The welcome screen is a local file browser. Creation actions sit in the center.

1. Choose **Vector** or **Layout** when you want templates. **+ Vector** opens 52 editable vector templates. **+ Layout** opens the frame starters: Fieldwork responsive prototype, mobile screen, landing hero, dashboard, and card stack. The file icon beside Vector or Layout opens a blank size chooser. Raster's file-side path is a blank raster size. You can also click a thumbnail of a document already on disk.
2. **Design** is the default persona once you are in a vector document. `R` draws a rectangle. `P` is the pen. `T` is type.
3. **Pixel** paints when you press `B`. Paint goes on a pixel layer. If the document is still vector-only, add that layer from the Layers studio first.
4. **Photo** opens a folder of pictures and grades them. Crop is `C`. The develop controls sit in Light, Color, and Detail. The camera file stays where it was.

Startup preferences live under **omadesign → Config**. You can start on the welcome screen, lock a mode, or remember the last mode. A separate setting picks the welcome tab: New, Templates, Recent, or Recovered, including remember-last-tab. That preference is how the first five minutes look the second time, not a different app.

Templates open as unsaved documents. Paper, artwork, and copy layers are editable. Work you already had stays in its tab. Search the 52 by name or idea, filter the nine categories, pick a built-in size or type width, height, and DPI. Double-click a card, or select it and choose **Use this template**. Very small sizes drop secondary copy that would be unreadable. Portrait, square, and wide pages each have their own artwork. The weekly drop plan is an editorial list. It does not schedule posts and it does not gate the files. All 52 are local on day one.

**+ Project** opens a brand editor. A project is a folder with `.omabrand` in it. It does not need an account. **Learn with AI** and **Create with agent** hand a prompt to whatever agent Omarchy has set as the default. If you have not chosen one, the screen tells you to set it under **Omarchy → Setup → Default → Agent**. The studio does not pick an agent for you. You can ignore both boxes and draw.

### In the hand

```sh
omadesign
```

If the command is not on `PATH`, call `~/.local/bin/omadesign`.

On the welcome screen, click **+ Vector**. The chooser opens on the 52. Click a card. Click **Use this template**, or double-click the card. A new unsaved document opens. Design is the persona in front of you.

Press `R`. Drag on the page. You have a rectangle. Press `P`. Click a corner, click-drag a smooth point, click the first point to close, or press Enter to finish an open path. Press `T`. Click once on the page. The word Type is a placeholder. The first character you type replaces it. Enter is a new line. Esc or a click away finishes the text.

Press `V` if you need to move what you just made. That is Move. Eight handles scale. The handle above the box rotates. You are still in the same `.oma`.

Switch to Pixel when you want paint. Add a pixel layer if Layers does not already have one. Press `B`. The brush paints on that layer. `[` and `]` change size. The vectors you drew stay vectors on their own layers.

For a photograph, go back to welcome or use the Photo creation action. **+ Photo** opens the Photo workspace. The folder icon is the folder chooser. The image icon picks a file. Grade there. **Place in Design** when the developed picture belongs on the poster. That placement is an 8-bit pixel layer. The RAW and its `.omaphoto` stay beside the original for the next grade.

Save with `Ctrl+S`. The document becomes an `.oma`. Templates do not need a save to be editable, and they do need a save if you want them in Recents as a file you actually kept.

### The edge

Motion has no empty-workspace creation button. The artboard you animate is the artboard you already drew. Open Motion after there is something on the canvas. Space plays. `K` keys transforms there. That letter is Fill when you are in Pixel. The persona decides.

The first five minutes also do not include a cloud login. **Sign up for cloud** is a link on the welcome column. Local templates, local folders, and local `.oma` files work with no account. **Team** shows up only after you are signed in and a shared project is actually there.

Photo will not rewrite the camera file while you learn the sliders. Design will not absorb the RAW into the `.oma` when you save the poster. Those boundaries hold on minute five the same way they hold on hour five.

Press `R`, then `P`, then `T`. That is the first drawing, in the document you just opened.
