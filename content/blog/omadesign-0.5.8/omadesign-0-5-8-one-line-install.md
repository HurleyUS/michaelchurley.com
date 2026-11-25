---
id: T001
title: One-line install
slug: omadesign-0-5-8-one-line-install
excerpt: "One command installs omadesign to ~/.local/bin and a desktop entry under your home directory. Nothing is written to /usr."
tags: [omadesign, 0.5.8, install]
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
