"use client";

import * as React from "react";
import Link from "next/link";

import { GlassStage } from "../glass/glass-stage";

import "./og.css";

const OPTIONS = ["Option 01", "Option 02", "Option 03", "Option 04", "Option 05"];
const PLANS = ["branding", "licensing", "support", "pricing"];
const WEEKDAYS = ["wk", "sun", "mon", "tue", "wed", "thu", "fri", "sat"];
const SEPT_2012 = [
  [35, 26, 27, 28, 29, 30, 31, 1],
  [36, 2, 3, 4, 5, 6, 7, 8],
  [37, 9, 10, 11, 12, 13, 14, 15],
  [38, 16, 17, 18, 19, 20, 21, 22],
  [39, 23, 24, 25, 26, 27, 28, 29],
  [40, 30, 1, 2, 3, 4, 5, 6],
];

export function OgMock() {
  return <TwelveMock variant="og" />;
}

export function GlassKitMock() {
  return <TwelveMock variant="glass" />;
}

export function TwelveMock({ variant }: { variant: "og" | "glass" }) {
  const [text, setText] = React.useState("");
  const [query, setQuery] = React.useState("");
  const [value, setValue] = React.useState(50);
  const [on, setOn] = React.useState(true);
  const [path, setPath] = React.useState("/MacSSD/Users...");
  const [selectA, setSelectA] = React.useState("Option 04");
  const [selectB, setSelectB] = React.useState("Option 04");
  const [openA, setOpenA] = React.useState(true);
  const [openB, setOpenB] = React.useState(true);
  const [openC, setOpenC] = React.useState(true);
  const [hotA, setHotA] = React.useState("Option 02");
  const [hotB, setHotB] = React.useState("Option 02");
  const [picked, setPicked] = React.useState(["Option 01", "Option 04", "Option 05"]);
  const [denied, setDenied] = React.useState(["Option 02", "Option 03"]);
  const [, setPlan] = React.useState("pricing");
  const [page, setPage] = React.useState(1);
  const [tab, setTab] = React.useState("Tab 01");
  const [acc, setAcc] = React.useState("Vertical");
  const [hAcc, setHAcc] = React.useState("Horizontal");
  const [day, setDay] = React.useState(13);
  const [openCal, setOpenCal] = React.useState(true);
  const glass = variant === "glass";

  const pageInner = (
    <div className={glass ? "theme-glass og-page" : "theme-og og-page"}>
      <div className="og-wrap">
        <header className="og-header">
          <Link href={glass ? "/twelveux/kit" : "/twelveux/og"} className="og-wordmark">
            twelve.ux
          </Link>
          <nav className="og-nav">
            <span className="og-nav-active" {...face(glass)}>
              components
            </span>
            <a href="#usage">usage</a>
            <a href="#download">download</a>
            <a href="#support">support</a>
          </nav>
          <div className="og-switch">
            <Link href="/twelveux/og" data-active={!glass}>
              og
            </Link>
            <Link href="/twelveux/kit" data-active={glass}>
              glass
            </Link>
          </div>
        </header>

        <section className="og-hero">
          <button
            className="og-arrow og-arrow-prev"
            type="button"
            aria-label="Previous"
            {...face(glass)}
          >
            ‹
          </button>
          <img src="/og/hero.jpg" alt="" />
          <button
            className="og-arrow og-arrow-next"
            type="button"
            aria-label="Next"
            {...face(glass)}
          >
            ›
          </button>
        </section>

        <div className="og-sheet">
          <div className="og-top">
            <div className="og-top-left">
              <section className="og-toolbar">
                <input
                  className="og-face og-input"
                  placeholder="text field"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  {...face(glass)}
                />
                <button className="og-face" type="button" {...face(glass)}>
                  button
                </button>
                <button
                  className="og-face"
                  type="button"
                  style={{ color: "#e2187a", fontStyle: "italic" }}
                  {...face(glass)}
                >
                  hovered
                </button>
                <button className="og-face" type="button" data-state="active" {...face(glass)}>
                  active
                </button>
                <div className="og-search" {...face(glass)}>
                  <input
                    className="og-face"
                    placeholder="Search..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                  <button className="og-face og-icon-btn" type="button" aria-label="Search">
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="11" cy="11" r="7" />
                      <path d="M20 20l-3.5-3.5" />
                    </svg>
                  </button>
                </div>
              </section>
              <section className="og-row2">
                <div className="og-slider">
                  <span className="og-bubble" style={{ left: `${value}%` }} {...face(glass)}>
                    {value}
                  </span>
                  <input
                    type="range"
                    min={0}
                    max={100}
                    value={value}
                    style={{ ["--pct" as string]: `${value}%` }}
                    onChange={(e) => setValue(Number(e.target.value))}
                  />
                  <div className="og-ticks">
                    {Array.from({ length: 21 }, (_, i) => (
                      <i key={i} style={{ height: i % 5 === 0 ? 11 : 6 }} />
                    ))}
                  </div>
                </div>
                <div className="og-toggle">
                  <span>off</span>
                  <button
                    type="button"
                    className="og-face"
                    data-on="false"
                    onClick={() => setOn(false)}
                    {...face(glass)}
                  />
                  <button
                    type="button"
                    className="og-face"
                    data-on="true"
                    onClick={() => setOn(true)}
                    {...face(glass)}
                  >
                    {on ? "on" : ""}
                  </button>
                  <span>on</span>
                </div>
                <div className="og-file" {...face(glass)}>
                  <input
                    className="og-face og-path"
                    value={path}
                    onChange={(e) => setPath(e.target.value)}
                  />
                  <button className="og-face" type="button">
                    browse
                  </button>
                </div>
              </section>
            </div>
            <div className="og-dateblock">
              <div className="og-date" {...face(glass)}>
                <button className="og-face" type="button" onClick={() => setOpenCal((v) => !v)}>
                  09/13/2012
                </button>
                <button
                  className="og-face og-icon-btn"
                  type="button"
                  onClick={() => setOpenCal((v) => !v)}
                >
                  ▾
                </button>
              </div>
            </div>
          </div>

          <div className="og-board">
            <section className="og-selects">
              <Select
                open={openA}
                value={selectA}
                hot={hotA}
                glass={glass}
                onOpen={() => setOpenA((v) => !v)}
                onChange={setSelectA}
                onHot={setHotA}
              />
              <Select
                open={openB}
                value={selectB}
                hot={hotB}
                glass={glass}
                onOpen={() => setOpenB((v) => !v)}
                onChange={setSelectB}
                onHot={setHotB}
              />
              <Multi
                open={openC}
                glass={glass}
                picked={picked}
                denied={denied}
                onOpen={() => setOpenC((v) => !v)}
                onToggle={(name) => {
                  setPicked((cur) =>
                    cur.includes(name) ? cur.filter((n) => n !== name) : [...cur, name],
                  );
                  setDenied((cur) => cur.filter((n) => n !== name));
                }}
                onDeny={(name) => {
                  setDenied((cur) =>
                    cur.includes(name) ? cur.filter((n) => n !== name) : [...cur, name],
                  );
                  setPicked((cur) => cur.filter((n) => n !== name));
                }}
              />
            </section>
            <div className="og-east-block">
              <div className="og-east-top">
                <div className="og-plans" {...face(glass)}>
                  <h3>Plans</h3>
                  {PLANS.map((item) => (
                    <button key={item} type="button" onClick={() => setPlan(item)}>
                      {item}
                    </button>
                  ))}
                </div>
                <div className="og-cal-price">
                  {openCal ? (
                    <div className="og-cal" {...face(glass)}>
                      <div className="og-cal-pointer" />
                      <div className="og-cal-head">
                        <button type="button" className="og-face">
                          ‹
                        </button>
                        <span>September</span>
                        <button type="button" className="og-face">
                          ›
                        </button>
                      </div>
                      <table>
                        <thead>
                          <tr>
                            {WEEKDAYS.map((d) => (
                              <th key={d}>{d}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {SEPT_2012.map((row) => (
                            <tr key={row[0]}>
                              {row.map((cell, i) => {
                                const out =
                                  i !== 0 &&
                                  ((cell > 23 && row[0] === 35) || (cell < 7 && row[0] === 40));
                                const selected = cell === day && i !== 0 && !out;
                                return (
                                  <td
                                    key={`${row[0]}-${i}`}
                                    className={[
                                      i === 0 ? "wk" : "",
                                      selected ? "sel" : "",
                                      out ? "out" : "",
                                      i === 0 && row[0] === 37 ? "mark" : "",
                                    ]
                                      .filter(Boolean)
                                      .join(" ")}
                                  >
                                    {i === 0 ? (
                                      cell
                                    ) : (
                                      <button type="button" onClick={() => setDay(cell)}>
                                        {cell}
                                      </button>
                                    )}
                                  </td>
                                );
                              })}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : null}
                  <div className="og-price" {...face(glass)}>
                    <span className="og-ribbon-wrap">
                      <span className="og-ribbon">blue</span>
                      <i className="og-ribbon-fold" aria-hidden />
                    </span>
                    <div className="og-price-lead">
                      <span>no</span>
                      <span>unlimited</span>
                    </div>
                    <div className="og-price-grid">
                      <span>tracker</span>
                      <span>+ live chat</span>
                      <span>+ 24/7 phone</span>
                      <span className="og-pill" data-tone="free">
                        free
                      </span>
                      <span className="og-pill" data-tone="mid">
                        $49/mo
                      </span>
                      <span className="og-pill" data-tone="pro">
                        $99/mo
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="og-pager">
                {["first", "‹", "01", "02", "03", "›", "last"].map((label) => (
                  <button
                    key={label}
                    type="button"
                    className="og-face"
                    data-state={label === String(page).padStart(2, "0") ? "active" : undefined}
                    onClick={() => {
                      if (label === "01" || label === "02" || label === "03")
                        setPage(Number(label));
                    }}
                    {...face(glass)}
                  >
                    {label === "first" || label === "last" ? (
                      <span className="og-dots">
                        <i />
                        <i />
                        <i />
                        <i />
                      </span>
                    ) : (
                      label
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <p className="og-copy">© 2012 twelve</p>

        <section className="og-lower" id="usage">
          <div className="og-tabs" {...face(glass)}>
            <div className="og-tabbar">
              {["Tab 01", "Tab 02", "Tab 03"].map((item) => (
                <button
                  key={item}
                  type="button"
                  data-active={tab === item}
                  onClick={() => setTab(item)}
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="og-tab-body">Basic Tab Navigation</div>
          </div>
          <div className="og-acc-stack">
            <div className="og-acc og-acc-h" {...face(glass)}>
              {[
                {
                  id: "Horizontal",
                  body: "This is a really cool addition to the user experience.",
                },
                { id: "Accordian", body: "Another really cool addition to the user experience." },
                { id: "Menu", body: "Menus belong in here too. Click the spine." },
              ].map((panel) => {
                const open = hAcc === panel.id;
                return (
                  <div key={panel.id} className="og-hacc-pane" data-open={open}>
                    <button
                      type="button"
                      className="og-side-label"
                      data-active={open}
                      onClick={() => setHAcc(panel.id)}
                    >
                      {panel.id.toUpperCase()}
                    </button>
                    {open ? <p>{panel.body}</p> : null}
                  </div>
                );
              })}
            </div>
            <div className="og-acc" {...face(glass)}>
              {["Vertical", "Accordian", "Menu"].map((item) => (
                <div key={item} className="og-acc-item">
                  <button type="button" onClick={() => setAcc(item)}>
                    {item}
                  </button>
                  {acc === item ? (
                    <p>Another really cool addition to the user experience.</p>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );

  if (!glass) return pageInner;

  return (
    <div data-glass-over-scene>
      <img
        data-glass-scene
        src="/og/hero.jpg"
        alt=""
        className="pointer-events-none fixed inset-0 z-0 h-svh w-full object-cover"
      />
      <div className="pointer-events-none fixed inset-0 z-0 bg-black/25" />
      <GlassStage>{pageInner}</GlassStage>
    </div>
  );
}

function face(glass: boolean) {
  if (!glass) return {};
  return { "data-glass-face": true as const };
}

function Select({
  open,
  value,
  hot,
  glass,
  onOpen,
  onChange,
  onHot,
}: {
  open: boolean;
  value: string;
  hot: string;
  glass: boolean;
  onOpen: () => void;
  onChange: (value: string) => void;
  onHot: (value: string) => void;
}) {
  return (
    <div className="og-select">
      <button type="button" className="og-select-head" onClick={onOpen} {...face(glass)}>
        <span>{value}</span>
        <em>▾</em>
      </button>
      {open ? (
        <div className="og-list" {...face(glass)}>
          {OPTIONS.map((item) => (
            <button
              key={item}
              type="button"
              data-hot={item === hot}
              data-chosen={item === value}
              onMouseEnter={() => onHot(item)}
              onClick={() => onChange(item)}
            >
              <span>{item}</span>
              {item === value ? <span className="og-check">✓</span> : null}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function Multi({
  open,
  glass,
  picked,
  denied,
  onOpen,
  onToggle,
  onDeny,
}: {
  open: boolean;
  glass: boolean;
  picked: string[];
  denied: string[];
  onOpen: () => void;
  onToggle: (name: string) => void;
  onDeny: (name: string) => void;
}) {
  return (
    <div className="og-multi">
      <button type="button" className="og-select-head" onClick={onOpen} {...face(glass)}>
        <span>Option 01...</span>
        <em>▾</em>
      </button>
      {open ? (
        <div className="og-list" {...face(glass)}>
          {OPTIONS.map((item) => (
            <div key={item} className="og-item">
              <span>{item}</span>
              <span style={{ display: "flex", gap: 6 }}>
                <button
                  type="button"
                  className="og-box"
                  onClick={() => onToggle(item)}
                  aria-label={`Allow ${item}`}
                >
                  {picked.includes(item) ? <span className="og-check">✓</span> : null}
                </button>
                <button
                  type="button"
                  className="og-box"
                  onClick={() => onDeny(item)}
                  aria-label={`Deny ${item}`}
                >
                  {denied.includes(item) ? <span className="og-x">✕</span> : null}
                </button>
              </span>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
