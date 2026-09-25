---
id: T001
title: One-line install
slug: omadesign-0-5-8-one-line-install
excerpt: "One command installs omadesign to ~/.local/bin and a desktop entry under your home directory. Nothing is written to /usr."
publishedAt: 2026-09-09T10:54:53Z
tags: [omadesign, 0.0.5-alpha, install, binaries, welcome]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-one-line-install/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-one-line-install/og.png
---

## The habit

Everyone knows the install routine. On a Mac you open a disk image, drag a bundle into Applications and eject the volume. On Windows you click through a setup wizard and hope it didn't add a second updater. Illustrator and Photoshop add a third habit: a manager app fetches the software, puts it where the manager wants, and keeps a login between you and the icon. Affinity is closer to a normal desktop install, but you still hunt for the menu entry when the wizard finishes.

Linux designers pick up more habits on top of that. You `sudo` into a package manager, approve a Flatpak portal, or `chmod +x` an AppImage and lose track of which folder it's in. Immutable desktops add a hard stop, because the system image isn't yours to edit. What you want is still one command and a launcher the menu can find.

You're also used to one download that pretends to fit every computer: a Mac universal binary, a Windows installer that detects the chip at the end, or an Electron app that ships a browser and a stack of shared libraries with the drawing code somewhere underneath. Illustrator and Photoshop arrive through a manager that hides the architecture until something fails. Affinity ships desktop builds you pick by operating system. On Linux the straightforward version is two files, one for ARM64 and one for x86_64, and you learn to read the filename before unpacking. Whether it's Asahi on a Mac, a Framework or ThinkPad on x86, a handheld's desktop session, an immutable image or a plain Ubuntu 22.04 box, the app has to be the same program on all of them. Otherwise you end up with two kinds of documents and two sets of habits.

Then come the first five minutes. In Illustrator that's a new-document dialog with artboard size, color mode and raster effects, then the toolbar if you haven't hidden it. Photoshop starts from a canvas size or Open, and type and vector tools are a mode change inside a pixel document. Affinity Designer and Photo split the same work by app, with StudioLink when you want the other app's tools without a second file. You spend the first minute choosing a room and the next four remembering which key draws a rectangle. Template browsers are familiar too: a grid of starters, a search box, and a size you override because the starter was US Letter and the job is a poster. Good ones open a real document you can edit. Bad ones open a locked preview you have to "apply" before the type becomes type. On Linux there's one more question, whether the app follows the desktop font or ships a theme that clashes with the rest of the screen. The first five minutes should end with a mark on a page, not a hunt through settings.

Omadesign answers the install with one shell line. Paste it, the binary lands where your user can run it, and the desktop entry lands with your other home-directory launchers. Then you open the app from the menu or the path.

## The constraint

The app is one native binary, and the file you save is one `.oma`. Undo is one step on the open document. There's no Creative Cloud stop between the download and the first rectangle, and nothing during install touches a camera file.

The machines people use include Silverblue, Bazzite, NixOS and SteamOS desktop mode. On those systems `/usr` belongs to the image. A package that needs root to copy itself into `/usr/bin` fails, asks you to layer the OS, or pushes you into a container you didn't ask for. Omarchy is on the same list. A mutable Ubuntu or Arch box can write `/usr`, but the install still avoids it so the command does the same thing on every one of these machines.

So the install is a script fetched over HTTPS, a binary in `~/.local/bin` and a desktop entry under your home directory. It's the same line on an immutable image and on a normal install. Preferences stay in `~/.config/omadesign` (or `XDG_CONFIG_HOME`), and documents you make later are `.oma` files on disk. The installer doesn't need a project, an account or a cloud session to finish.

The lower limit is glibc. If the binary demanded a glibc newer than the oldest machine in use, that machine would be left out. Ubuntu 22.04 still shows up on real desks. Asahi Omarchy is ARM64 and current. Arch moves fast and already has a newer glibc, which can run a binary built for an older one. So the binary requires glibc 2.35 and nothing newer, and both architectures share that limit. It's one program with two builds, not two products.

It's a native Rust binary (eframe, egui, one process), and the tarball has no Electron wrapper. Lua, the RAW decoder, and the JPEG and C++ components the app needs are bundled in the package, so you don't apt-install a second stack to grade a NEF or run a plugin. The portable archive is what the home-directory installer unpacks, and you can also download the tarball directly. The archive is the unit, and the installer only fetches it.

The first session can't ask you to pick an app. There are five personas over one layer stack. Design is the default, because a mark, a poster or a layout can start on an empty page. Pixel painting needs a pixel layer, which lives in the same document. Photo needs a folder of pictures instead of a blank board. Motion needs artwork already on the canvas, so it has no empty-workspace button on the welcome screen.

The welcome screen can't become a cloud browser you must sign into before `R` works. Templates ship in the binary, use fonts you already have and need no network. The interface follows the desktop: Omarchy colors, the font from `omarchy font current` or fontconfig, and Phosphor Light icons. There's no private light/dark switch to set before you can see the page.

The feature note mentions a demo alongside a size and the templates, but the manual's first-five-minutes section doesn't name a separate demo control. The entry points it gives are the ones below.

## What landed

### The install line

The install line predates 0.5.8. The details below describe it as of the 0.5.8 build, because that's the release the checks mentioned here ran on.

```sh
curl -fsSL https://omadesign.app/install | sh
```

`curl -fsSL` fails on HTTP errors, stays quiet and follows redirects. The script at `https://omadesign.app/install` finds the current release, downloads the archive for your machine and verifies its checksum. The 0.5.8 validation ran that unmodified public script on a local ARM64 machine. It resolved the latest release, downloaded the ARM64 archive, checked the checksum and installed 0.5.8. The welcome screen on that install showed 0.5.8, and the running binary matched the published executable hash.

What gets written:

- The executable goes to `~/.local/bin/omadesign`.
- A desktop entry is written under your home directory. After the 0.5.8 install, one `omadesign.desktop` launcher remained.
- `.oma` and `.omaphoto` files default to that launcher.
- Existing preferences are left alone.
- The previous binary, icon and launcher are backed up before being replaced.

If your shell can't find `omadesign` after the script finishes, the binary is still at `~/.local/bin/omadesign`. Add `~/.local/bin` to `PATH`, or run it by its full path. `omadesign --version` (or `-V`) prints the installed version without opening a window. That flag came with the portable packages. You can also launch the app and read the version on the welcome screen.

Installed branding, plugin source and the offline plugin docs match the release. Lua and the RAW decoder are inside the package, so you don't install a second runtime to open the app or develop a camera file. Reinstalling keeps any plugin you changed in its installed copy. When you later update from the wordmark menu, the app runs this same official installer, waits for work in progress, writes a recovery snapshot, and restarts with the same documents and photo adjustments open.

### Two portable builds

The 0.5.8 release ships portable ARM64 and x86_64 tarballs. Both archives report 0.5.8, and both require nothing newer than glibc 2.35. That covers Asahi Omarchy, Ubuntu 22.04 and newer, and current Arch. The installer picks the archive that matches your machine.

The 0.5.8 check ran both packages. They inspected and rendered native documents, ran live-text transforms, a custom pixel filter that preserves alpha and a two-file batch, and refused to overwrite an existing output. They installed the starter plugins, the docs and the licenses. Reinstalling kept an already-edited plugin in its installed copy. Thirty-nine packaged source files matched their originals, and the public downloads matched the local archives and the published checksum files.

The x86_64 executable was tested through QEMU against Ubuntu 22.04 and glibc 2.35. That's a real glibc check, but it isn't a run on physical x86_64 hardware with a GPU, and I want to be clear about what was proven. The ARM64 package was installed from the public installer on the local ARM64 machine, as described above.

Dependencies that might otherwise need a system package are inside the archive. Lua and the RAW decoder are bundled, so you open a camera file with the binary you downloaded. The same `.oma` opens on either architecture. When a feature has to be converted, format notes travel in the document. The file never gets an architecture tag you'd have to strip before another machine can read it.

Downloading the tarball from the release page gets you the same bits without the script. Either way you get one native executable, plus the desktop entry if you used the installer, with no browser runtime alongside it.

### First five minutes

Launch `omadesign`. The welcome screen is a local file browser with creation actions in the center.

1. Choose **Vector** or **Layout** when you want templates. **+ Vector** opens 52 editable vector templates. **+ Layout** opens the frame starters: Fieldwork responsive prototype, mobile screen, landing hero, dashboard and card stack. The file icon beside Vector or Layout opens a blank size chooser, and Raster's file icon opens a blank raster size. You can also click the thumbnail of a document already on disk.
2. **Design** is the default persona in a vector document. `R` draws a rectangle, `P` is the pen and `T` is type.
3. **Pixel** paints when you press `B`, on a pixel layer. If the document is still vector-only, add that layer from the Layers studio first.
4. **Photo** opens a folder of pictures for grading. Crop is `C`, and the develop controls are grouped into Light, Color and Detail. The camera file stays where it was.

Your Work lists `.oma` files, and Projects lists folders that contain `.omabrand`. You can close the welcome screen and come back to it from the desktop entry.

Startup preferences are under **omadesign > Config**. You can start on the welcome screen, lock a mode or remember the last mode. A separate setting picks the welcome tab (New, Templates, Recent or Recovered), including remembering the last tab. That's how you shape what the first five minutes look like the second time.

Templates open as unsaved documents with editable paper, artwork and copy layers. Work you already had stays in its own tab. You can search the 52 by name or idea, filter by the nine categories, and pick a built-in size or type a width, height and DPI. Double-click a card, or select it and choose **Use this template**. At very small sizes, secondary copy that would be unreadable is dropped. Portrait, square and wide pages each have their own artwork. The weekly drop plan is an editorial list. It doesn't schedule posts or hold back files, and all 52 templates are local from day one.

**+ Project** opens a brand editor. A project is a folder with `.omabrand` in it and doesn't need an account. **Learn with AI** and **Create with agent** hand a prompt to whatever agent Omarchy has set as the default. If you haven't chosen one, the screen tells you to set it under **Omarchy > Setup > Default > Agent**. The app doesn't pick an agent for you, and you can ignore both and just draw.

## In the hand

Open a terminal in your own user session and paste the line.

```sh
curl -fsSL https://omadesign.app/install | sh
```

Wait for the prompt to come back. Don't prefix it with `sudo`. The script is meant to run as you, writing into your home directory.

Then run:

```sh
omadesign
```

or, if the command isn't on `PATH`:

```sh
~/.local/bin/omadesign
```

The welcome screen opens. The menu entry is the launcher the script registered, and file associations for `.oma` and `.omaphoto` point to it, so double-clicking in the file manager opens the app you just installed.

To check the version without guessing which copy launched:

```sh
~/.local/bin/omadesign --version
```

The welcome screen shows the same version. If you already had a copy, the previous executable and launcher metadata were backed up, and your config directory wasn't wiped.

When a newer build comes out, the in-app update uses this same installer, not a second download path. You can keep using the shell line yourself, and either way the files land in the same places in your home directory.

If you'd rather have the script choose the archive and then confirm it:

```sh
curl -fsSL https://omadesign.app/install | sh
~/.local/bin/omadesign --version
```

To handle the tarball yourself, download the ARM64 or x86_64 archive from the release page and check it against the published SHA-256 before unpacking. A missing, malformed or mismatched checksum means stop, the same rule the installer follows. Unpack it as your user, then put the executable on `PATH` or run it by path.

```sh
~/.local/bin/omadesign
```

Design is the default persona. Open a document you saved on the other architecture and it opens at its own size in its own tab. Save still writes `.oma`, photo settings still write a `.omaphoto` next to the original, and the camera file is untouched on both chips.

On Ubuntu 22.04, the glibc you already have is the version these binaries were built for, and current Arch's newer glibc runs them too. Use the ARM64 archive on Asahi Omarchy and the x86_64 archive on an x86_64 desktop. Mixing them up fails at load time, like any ELF binary the machine can't execute. The filename and checksum tell them apart before that happens.

If the installer wrote the desktop entry, launch from there. There's one `omadesign.desktop` launcher, `.oma` and `.omaphoto` open with it, and you shouldn't see two menu entries competing for the same file types.

For the first drawing, click **+ Vector** on the welcome screen. The chooser opens on the 52 templates. Click a card and choose **Use this template**, or double-click it. A new unsaved document opens in Design.

Press `R` and drag on the page to draw a rectangle. Press `P`, click a corner, click-drag a smooth point, then click the first point to close or press Enter to leave the path open. Press `T` and click once on the page. The word Type is a placeholder that your first character replaces. Enter starts a new line, and Esc or a click elsewhere finishes the text.

Press `V` to move what you made. That's the Move tool. The eight handles scale and the handle above the box rotates. You're still in the same `.oma`.

For paint, switch to Pixel. Add a pixel layer if Layers doesn't have one, then press `B` and paint. `[` and `]` change the brush size. Your vectors stay vectors on their own layers.

For a photograph, go back to the welcome screen or use the Photo creation action. **+ Photo** opens the Photo workspace. The folder icon opens the folder chooser and the image icon picks a single file. Grade the photo there, then use **Place in Design** when it belongs on the poster. The placed picture is an 8-bit pixel layer, and the RAW and its `.omaphoto` stay next to the original for the next grade.

Save with `Ctrl+S` and the document becomes an `.oma`. A template is editable without saving, but you need to save it if you want it in Recents as a file you kept.

## The edge

Nothing is written to `/usr`. The desktop entry stays under your home directory, and system directories are outside the job.

The checksum is a hard stop. A missing, malformed or mismatched checksum stops the installation, and the installer's failure tests confirm that an invalid download stops before extraction. A bad archive never becomes the binary you launch the next morning.

The line doesn't set up a distro package, a Flatpak or a root-owned service. Silverblue, Bazzite, NixOS, SteamOS desktop mode and Omarchy get the same home-directory result as Ubuntu and Arch. If your policy forbids piping a script into a shell, download the ARM64 or x86_64 tarball from the release and unpack it yourself. The command above is the supported one-line path, and it's the one the 0.5.8 test machine ran.

The binary won't run on glibc older than 2.35, so Ubuntu releases before 22.04 are out. The build doesn't bundle a newer glibc to support those machines, and it doesn't require a glibc from a rolling snapshot you don't have.

There's no Electron wrapper in the tarball, so no second browser, second updater or second document format. ARM64 and x86_64 are two builds of the same app.

The x86_64 validation didn't include a physical x86_64 GPU pass. If you're on real x86_64 hardware, you're beyond what was tested. What was tested is glibc 2.35 through QEMU, plus the archive tests both packages passed: documents, live text, a pixel filter, batches, checksums and the version string 0.5.8.

Motion has no empty-workspace creation button, because you animate artwork you've already drawn. Open Motion once there's something on the canvas. Space plays, and `K` keys transforms. In Pixel, the same letter is Fill, so the persona decides.

The first five minutes don't include a cloud login. **Sign up for cloud** is a link on the welcome column, and local templates, folders and `.oma` files work without an account. **Team** only appears after you sign in and a shared project exists.

Photo won't rewrite the camera file while you learn the sliders, and Design won't pull the RAW into the `.oma` when you save the poster. Those rules are the same on minute five as on hour five.
