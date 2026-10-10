"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ProductHuntNaarchyBanner from "@/components/product-hunt-naarchy-banner";

const repo = "https://github.com/michaelmonetized/naarchy";
const chapters = [
  {
    name: "Home",
    title: "Your day. Within reach.",
    text: "A timer, your music, and the things you need next. Click the island. Carry on.",
    image: "home",
    command: "naarchy tab home",
    color: "#D5FE6B",
  },
  {
    name: "Files",
    title: "Put it down. Pick it up.",
    text: "Drop files, images, and text into Inbox. Pin what matters. Drag it back when you need it. Your originals stay where they belong.",
    image: "inbox",
    command: "naarchy tab inbox",
    color: "#BFC2FF",
  },
  {
    name: "Clipboard",
    title: "Copied. Never lost.",
    text: "Find the text or image you copied earlier. Search your history, keep favorites, and copy it again. All on your machine.",
    image: "clipboard",
    command: "naarchy tab clipboard",
    color: "#FFB8D2",
  },
  {
    name: "Calendar",
    title: "Make room for what's next.",
    text: "Your month and your calendar feeds in one place. Open a meeting link. Then get back to the work in front of you.",
    image: "calendar",
    command: "naarchy tab calendar",
    color: "#FFE797",
  },
] as const;
const install =
  "git clone https://github.com/michaelmonetized/naarchy.git\ncd naarchy\ncargo install --path . --locked\n~/.cargo/bin/naarchy run";

export default function NaarchyExperience() {
  const story = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const film = useRef<HTMLVideoElement>(null);
  const [chapter, setChapter] = useState(0);
  const activeChapter = chapters[chapter] ?? chapters[0];
  const [playing, setPlaying] = useState(false);
  const [copyStatus, setCopyStatus] = useState("");

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("naarchy-page");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let pending = 0;
    const update = () => {
      pending = 0;
      if (!story.current || !stage.current || reduced.matches) return;
      const rect = story.current.getBoundingClientRect();
      const range = Math.max(1, rect.height - window.innerHeight);
      const progress = Math.min(1, Math.max(0, -rect.top / range));
      setChapter(Math.min(3, Math.floor(progress * 4)));
      stage.current.style.setProperty("--island-open", String(Math.min(1, progress * 8)));
    };
    const schedule = () => {
      if (!pending) pending = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    reduced.addEventListener("change", schedule);
    update();
    return () => {
      root.classList.remove("naarchy-page");
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      reduced.removeEventListener("change", schedule);
      cancelAnimationFrame(pending);
    };
  }, []);

  function chooseChapter(index: number) {
    setChapter(index);
    if (!story.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const range = story.current.offsetHeight - window.innerHeight;
    window.scrollTo({
      top: story.current.offsetTop + range * ((index + 0.25) / 4),
      behavior: "smooth",
    });
  }

  async function copyInstall() {
    try {
      await navigator.clipboard.writeText(install);
      setCopyStatus("Copied. See you at the top.");
    } catch {
      setCopyStatus("Select the commands below to copy them.");
    }
  }

  return (
    <div className="naarchy-launch">
      <a className="n-skip" href="#n-install">
        Skip to installation
      </a>
      <nav className="n-nav" aria-label="Naarchy">
        <a href="#n-top" className="n-wordmark">
          <Image src="/naarchy/logo.svg" width={36} height={36} alt="" />
          naarchy<span className="n-version">0.4</span>
        </a>
        <div>
          <a href="#n-story">Explore</a>
          <a href="#n-film">The film</a>
          <a href="#n-install" className="n-nav-get">
            Get Naarchy <span aria-hidden="true">↗</span>
          </a>
        </div>
      </nav>

      <section className="n-hero" id="n-top">
        <div className="n-orbit n-orbit-one" aria-hidden="true" />
        <div className="n-orbit n-orbit-two" aria-hidden="true" />
        <ProductHuntNaarchyBanner className="n-ph-banner" siteLink={false} />
        <div className="n-hero-top">
          <span>
            <i /> MADE FOR YOUR LINUX DESKTOP
          </span>
          <span>OMARCHY / HYPRLAND</span>
        </div>
        <Image
          className="n-hero-logo"
          src="/naarchy/logo.svg"
          width={112}
          height={112}
          alt="Naarchy app icon"
          priority
        />
        <h1>
          A little space
          <br />
          for <em>everything.</em>
        </h1>
        <p>
          Your files. Your clipboard. Your music. Your day.
          <br />
          One little island. Right where you need it.
        </p>
        <div className="n-proof">
          <span>Free. MIT licensed.</span>
          <span>Native Rust + GTK4.</span>
          <a href={`${repo}/releases/tag/v0.4.0`}>
            Released on GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="n-actions">
          <a href="#n-install" className="n-button n-button-lime">
            Make a little space <span aria-hidden="true">↗</span>
          </a>
          <a href="#n-story" className="n-button n-button-ghost">
            Take a look <span aria-hidden="true">↓</span>
          </a>
        </div>
        <div className="n-hero-bottom">
          <span>
            A NOTCH IS OPTIONAL.
            <br />A GOOD WORKFLOW ISN'T.
          </span>
          <span>
            SCROLL TO OPEN THE ISLAND <span aria-hidden="true">↓</span>
          </span>
        </div>
      </section>

      <section className="n-story" id="n-story" ref={story} aria-label="Explore Naarchy">
        <div className="n-story-sticky" ref={stage}>
          <div className="n-story-heading">
            <span>01 — THE LITTLE THINGS, TOGETHER</span>
            <h2>
              Less reaching.
              <br />
              <em>More doing.</em>
            </h2>
          </div>
          <div className="n-desktop">
            <div className="n-desktop-bar">
              <span>naarchy / linux</span>
              <span>your desktop, your rules</span>
              <span aria-hidden="true">◉</span>
            </div>
            <div className="n-island">
              <span className="n-island-dot" />
              <span>Everything is here.</span>
              <span aria-hidden="true">⌄</span>
            </div>
            <div className="n-product-screen" style={{ backgroundColor: activeChapter.color }}>
              {chapters.map((item, index) => (
                <Image
                  key={item.image}
                  src={`/naarchy/${item.image}.png`}
                  width={960}
                  height={680}
                  sizes="(max-width: 700px) 90vw, 55vw"
                  alt={`Naarchy ${item.name} interface, captured on Hyprland with demonstration content`}
                  className={index === chapter ? "n-shot is-active" : "n-shot"}
                  priority={index === 0}
                />
              ))}
              <span className="n-capture-label">REAL APP · HYPRLAND CAPTURE</span>
            </div>
            <div className="n-desktop-footer">
              <span>Built to belong.</span>
              <code>{activeChapter.command}</code>
            </div>
          </div>
          <div className="n-story-copy" aria-live="polite">
            <span className="n-count">0{chapter + 1} / 04</span>
            <h3>{activeChapter.title}</h3>
            <p>{activeChapter.text}</p>
          </div>
          <div className="n-chapters" role="group" aria-label="Choose a feature">
            {chapters.map((item, index) => (
              <button
                key={item.name}
                type="button"
                onClick={() => chooseChapter(index)}
                aria-pressed={chapter === index}
              >
                <span>0{index + 1}</span>
                {item.name}
                <i />
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="n-details">
        <div>
          <span className="n-eyebrow">02 — ROOM TO BREATHE</span>
          <h2>
            Small island.
            <br />
            <em>Big everyday energy.</em>
          </h2>
        </div>
        <div className="n-detail-list">
          <article>
            <span aria-hidden="true">◷</span>
            <div>
              <h3>Find your focus.</h3>
              <p>
                Start a countdown. Pause it. Pick it back up. Let Naarchy keep the time while you do
                the work.
              </p>
              <code>naarchy timer 25m</code>
            </div>
          </article>
          <article>
            <span aria-hidden="true">♫</span>
            <div>
              <h3>Keep your soundtrack close.</h3>
              <p>
                Album art, track details, and playback controls for your MPRIS player. Start Spotify
                or cliamp right from Home.
              </p>
            </div>
          </article>
          <article>
            <span aria-hidden="true">↔</span>
            <div>
              <h3>At home on your desktop.</h3>
              <p>
                Follow your Omarchy colors. Choose your widgets. Set the island's size and position.
                Use your existing volume and brightness bindings.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="n-film" id="n-film">
        <div className="n-section-title">
          <span className="n-eyebrow">03 — SEE IT IN ACTION</span>
          <h2>Meet your little island.</h2>
        </div>
        <div className="n-film-frame">
          <video
            ref={film}
            controls={playing}
            playsInline
            preload="none"
            poster="/naarchy/film-poster.jpg"
            onEnded={() => setPlaying(false)}
            aria-label="Naarchy release film"
          >
            <source src="/naarchy/naarchy-release-1080p.mp4" type="video/mp4" />
            <track
              kind="captions"
              src="/naarchy/release-captions.vtt"
              srcLang="en"
              label="English"
              default
            />
          </video>
          {!playing && (
            <button
              type="button"
              className="n-play"
              onClick={() => {
                setPlaying(true);
                void film.current?.play().catch(() => setPlaying(false));
              }}
            >
              <span aria-hidden="true">▶</span> Play the release film
            </button>
          )}
        </div>
        <p className="n-film-note">
          Real Linux software. Identity and motion made in{" "}
          <a href="https://omadesign.app">Omadesign</a>. Film cut in Remotion.
        </p>
      </section>

      <section className="n-private">
        <span className="n-eyebrow">04 — YOUR DESKTOP. YOUR BUSINESS.</span>
        <h2>
          Keep your work
          <br />
          <em>on your machine.</em>
        </h2>
        <div>
          <p>Clipboard and shelf content stay local. No telemetry. No account needed.</p>
          <p className="n-fine">
            Clipboard history is not encrypted. Calendar feeds, media artwork, and optional travel
            estimates use the network. You choose what to enable.
          </p>
          <a href={`${repo}#preferences-and-privacy`}>
            Read the privacy details <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section className="n-install" id="n-install">
        <div>
          <span className="n-eyebrow">05 — COME ON IN</span>
          <h2>
            Your desktop.
            <br />
            <em>A little better.</em>
          </h2>
          <p>Free software. Yours to use, change, and keep.</p>
          <div className="n-proof">
            <a href={`${repo}/releases/tag/v0.4.0`}>Published release ↗</a>
            <span>MIT license</span>
            <span>Source included</span>
          </div>
          <a className="n-button n-button-lime" href={`${repo}/releases/latest`}>
            Get Naarchy <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="n-terminal">
          <div>
            <span>Build from source</span>
            <button type="button" onClick={copyInstall}>
              Copy commands
            </button>
          </div>
          <p>Arch Linux / Omarchy · Wayland · Rust 1.92+</p>
          <pre>
            <code>{install}</code>
          </pre>
          <p className="n-install-deps">
            First install:{" "}
            <code>sudo pacman -S --needed base-devel gtk4 gtk4-layer-shell rust</code>
          </p>
          <p role="status">{copyStatus}</p>
          <a href={`${repo}/blob/main/docs/INSTALL.md`}>
            Installation, autostart, and troubleshooting ↗
          </a>
        </div>
      </section>

      <section className="n-made">
        <Image src="/naarchy/logo.svg" width={72} height={72} alt="" />
        <div>
          <h3>Built on Linux. Designed on Linux.</h3>
          <p>Naarchy's identity and motion were made in Omadesign. Watch the design take shape.</p>
        </div>
        <a href="/naarchy/made-in-omadesign.mp4" className="n-button n-button-ghost">
          Watch the making <span aria-hidden="true">↗</span>
        </a>
      </section>
      <footer className="n-footer">
        <a href="/portfolio">← Michael C. Hurley / Portfolio</a>
        <a href="https://www.producthunt.com/products/naarchy?launch=naarchy">
          Product Hunt · October 6 ↗
        </a>
        <a href={repo}>Source & releases ↗</a>
      </footer>
    </div>
  );
}
