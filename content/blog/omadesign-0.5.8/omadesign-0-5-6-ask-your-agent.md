---
id: R056-02
title: Ask your agent: bundled docs and the omadesign-create skill
slug: omadesign-0-5-6-ask-your-agent
excerpt: "0.5.6 ships version-matched Markdown docs and an omadesign-create skill inside the package. Learn with AI and Create with agent hand them to your configured Omarchy agent from the welcome screen."
publishedAt: 2026-09-22T00:59:50Z
tags: [omadesign, 0.5.6, agents, docs]
coverImage: /blog/omadesign-0-5-6/omadesign-0-5-6-ask-your-agent/og.png
---

## The habit

You ask a coding agent how to do something in a design tool. It answers from whatever it half-remembers about some version of the tool, invents a menu that does not exist, and you lose ten minutes finding out.

Asking it to make something is worse. It writes a plausible-looking file, never renders it, and tells you it is done.

## The constraint

The agent needs the docs for the version you have installed, which may differ from the website's latest page. It needs them offline too.

For creation, the agent needs rules. It should deliver an editable `.oma`, respect the project's existing brand assets, avoid inventing file schemas or CLI flags, and check the real render before claiming anything.

Omadesign should not pick or install an agent for you. Omarchy already keeps track of your configured agent, and the app uses that one.

## What landed

**Two buttons on the welcome screen.**

- **Learn with AI** opens a question box and sends your question to the configured Omarchy agent along with the Markdown documentation index.
- **Create with agent** takes a brief, points the agent at the bundled Omadesign creation skill, and starts in the project you are browsing.

If no agent is selected, the app explains how to choose one. It never chooses or installs one on its own.

**Docs and skill in the package.** Both Linux archives include the creation skill, offline documentation and native-library licenses. The binary can print them:

```sh
omadesign --agent-docs manual
omadesign --agent-skill
```

The skill also names `--agent-docs layout` and `--agent-docs formats`, plus the online Markdown sources starting from `https://omadesign.app/llms.txt`. When the online docs describe something newer, the skill tells the agent that the installed binary is authoritative.

**What the skill asks for.** The skill is in the repo at [skills/omadesign-create/SKILL.md](https://github.com/michaelmonetized/omadesign/blob/master/skills/omadesign-create/SKILL.md). Its main rules are these:

- Run `--version` first. The command line supports inspection and conversion. It does not automate the editor.
- For vector work, author SVG with real text and paths, convert it to `.oma`, and read the conversion warnings.
- Check fonts with `fc-match` before setting type, and look at the rendered letters.
- Inspect the project's `.omacolors`, `.omatype` and `.omabrand/` before inventing a palette, type system or logo.
- Render a PNG with `--convert` and look at it. Revise until it matches the brief.
- Do not claim a file was opened or visually checked unless that step actually happened.

## In the hand

Open a project on the welcome screen. Click Create with agent and type a brief, such as "a square event poster using this project's palette." The agent runs in that project folder with the skill. It should return an editable `.oma`, any exports you asked for, and a note on any import limits it hit.

Or click Learn with AI and ask how breakpoint overrides work. The agent reads the docs that match your build.

## The edge

You bring the agent, and quality depends on which one you configured in Omarchy. Omadesign supplies docs, a skill and a CLI that can convert and render. It does not expose a live editor automation API, and the skill says so plainly.

The skill guides the agent. It cannot guarantee the result. Its own rule is to verify the render, and I would hold any agent to it.

The release notes are on [v0.5.6](https://github.com/michaelmonetized/omadesign/releases/tag/v0.5.6). Run `omadesign --agent-skill` to read what your agent will be told.
