---
id: T002
title: Portable ARM64 and x86_64
slug: omadesign-0-5-8-portable-arm64-and-x86-64
excerpt: "Omadesign 0.5.8 ships native ARM64 and x86_64 tarballs built for glibc 2.35. Same studio on Asahi, Ubuntu 22.04+, and current Arch."
tags: [omadesign, 0.5.8, binaries]
video: /blog/omadesign-0-5-8/omadesign-0-5-8-portable-arm64-and-x86-64/film.mp4
coverImage: /blog/omadesign-0-5-8/omadesign-0-5-8-portable-arm64-and-x86-64/og.png
---

## The habit

You are used to one download that pretends to be every computer. A Mac universal binary. A Windows installer that detects the chip at the end. An Electron app that ships a browser, a stack of shared libraries, and the actual drawing code somewhere underneath. Illustrator and Photoshop show up through a manager that hides the architecture until something fails. Affinity ships desktop builds you pick by operating system.

On Linux the honest version of that habit is two files. One for ARM64. One for x86_64. You learn to read the filename before you unpack it. Asahi on a Mac, a Framework or a ThinkPad on x86, a handheld desktop session, an immutable image, a plain Ubuntu 22.04 box. The studio has to be the same program on all of them, or you start keeping two kinds of documents and two sets of muscle memory.

The hand wants to download a tarball, see a version, and run it. The hand does not want a wrapper that boots a second browser so a designer can draw a rectangle.

## The constraint

One binary. One `.oma`. The same layer stack on every machine you sit down at. Undo stays one step on that document. There is no cloud round-trip required to open the file you saved on the other architecture. There is no dialog on install that rewrites a camera original so the two builds can "share" a photo.

The floor is glibc. If the binary demands a glibc newer than the oldest machine in the room, that machine is out. Ubuntu 22.04 is the line that still shows up on real desks. Asahi Omarchy is ARM64 and current. Arch moves fast and already has a newer glibc, which can run a binary built for an older one. The decision is a ceiling on what the binary requires: glibc 2.35, and nothing newer. Both architectures share that ceiling so "the studio" means one program with two builds, not two products.

Immutable systems still cannot take a write to `/usr`. The portable archive is what the home-directory installer unpacks. You can also take the tarball itself. The archive is the unit. The installer is only the fetch.

A native Rust binary (eframe, egui, one process) is the other half of the shape. The tarball does not carry an Electron wrapper. Lua, the RAW decoder, and the JPEG and C++ pieces the studio needs are bundled inside the package. You do not apt-install a second stack to grade a NEF or to run a plugin.

## What landed

Omadesign 0.5.8 ships portable ARM64 and x86_64 tarballs. Both archives report 0.5.8. Both require no glibc newer than 2.35. That is the build that runs on Asahi Omarchy, Ubuntu 22.04 and newer, and current Arch.

The 0.5.8 check ran both packages. They inspect and render native documents. They run live-text transforms, a custom pixel filter that preserves alpha, and a two-file batch. They refuse to clobber an output that already exists. They install the starter plugins, the docs, and the licenses. Reinstalling keeps a plugin you already edited in its installed copy. Thirty-nine packaged source files match their originals. The public downloads match the local archives and the published checksum files.

The x86_64 executable was tested through QEMU against Ubuntu 22.04 and glibc 2.35. That is a real glibc check. It is not a physical x86_64 GPU run. Say that plainly so you know what was proven. The ARM64 package was installed from the public installer on the local ARM64 machine, and the running binary matches the published hash. Welcome shows 0.5.8.

Dependencies that used to tempt a system package are inside the archive. Lua is bundled. The RAW decoder is bundled. You open a camera file with the binary you downloaded. The same `.oma` opens on either architecture. Format notes travel in the document when a feature had to be converted. The file does not grow an architecture tag you have to strip before the other machine will read it.

`omadesign --version` (or `-V`) prints the version without opening a window. Use it after you unpack if you want to see 0.5.8 before the welcome screen does.

The installer at `https://omadesign.app/install` selects the archive for the machine you are on, checksums it, and places `omadesign` at `~/.local/bin/omadesign`. Taking the tarball from the release page is the same bits without the script. Either way you get one native executable and the desktop entry story from the install, not a browser runtime sitting next to it.

## In the hand

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

## The edge

The binary will not run on glibc older than 2.35. That is the boundary. Ubuntu releases before 22.04 are outside it. The build does not ship a private newer glibc to drag those machines along, and it does not demand a glibc from a rolling snapshot you do not have.

There is no Electron wrapper in the tarball. You do not get a second browser, a second updater, or a second document format to make the two architectures agree. ARM64 and x86_64 are two builds of the same studio.

The x86_64 validation did not claim a physical x86_64 GPU pass. If you are on real x86_64 hardware, you are past the check that was written down. The check that was written down is glibc 2.35 through QEMU, plus the archive tests both packages did run: documents, live text, a pixel filter, batches, checksums, and the version string 0.5.8.

Run `~/.local/bin/omadesign --version` on the machine in front of you. You want to read 0.5.8 from the build that matches that machine.
