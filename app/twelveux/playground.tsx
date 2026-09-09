"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  GLASS_DEFAULTS,
  GLASS_TEXT_DEFAULTS,
  type GlassSettings,
} from "@/registry/twelveux/glass/defaults";
import { Glass } from "@/registry/twelveux/glass/glass";
import { GlassText } from "@/registry/twelveux/glass/glass-text";

export function Playground() {
  const [settings, setSettings] = React.useState<GlassSettings>({
    ...GLASS_DEFAULTS,
  });

  return (
    <div className="overflow-x-hidden text-[#f7f1e8] pb-[env(safe-area-inset-bottom)]">
      <img
        data-glass-scene
        src="/scene.jpg"
        alt=""
        className="pointer-events-none fixed inset-0 z-0 h-svh w-full object-cover"
      />
      <div className="relative z-10 bg-background">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-6 px-4 py-5 md:gap-8 md:px-6 md:py-8">
          <div className="flex min-h-[calc(100svh-1.25rem)] flex-col gap-4 md:min-h-0 md:contents">
            <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-sans text-[13px] tracking-[0.16em] text-white/70">TWELVEUX</p>
                <h1 className="mt-1 font-sans text-3xl tracking-tight md:text-4xl">Glass</h1>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <a href="/" className="text-sm text-muted-foreground hover:text-foreground">
                  michaelchurley.com
                </a>
                <a
                  href="/twelveux/og"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  og
                </a>
                <a
                  href="/twelveux/kit"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  glass kit
                </a>
                <code className="max-w-full overflow-x-auto rounded-full bg-white/8 px-3 py-2 font-mono text-[11px] text-white/80 sm:px-4 sm:text-xs">
                  npx shadcn add https://www.michaelchurley.com/r/glass.json
                </code>
              </div>
            </header>

            <Scene settings={settings} />
          </div>
          <Controls settings={settings} onChange={setSettings} />
          <ComponentsOnPhoto />
        </div>
      </div>
      <TextFillChapter />
    </div>
  );
}

function Scene({ settings }: { settings: GlassSettings }) {
  return (
    <section
      data-glass-capture
      className="relative isolate min-h-0 flex-1 overflow-hidden rounded-[24px] bg-[#14081c] md:min-h-[720px] md:flex-none md:rounded-[32px]"
    >
      <div className="pointer-events-none absolute -left-16 -top-10 size-[280px] rounded-full bg-[#ff3d8b]/80 md:size-[420px]" />
      <div className="pointer-events-none absolute -right-10 -top-8 size-[300px] rounded-full bg-[#ffb020]/75 md:size-[460px]" />
      <div className="pointer-events-none absolute bottom-[-80px] left-[28%] size-[340px] rounded-full bg-[#2ad4c9]/75 md:size-[520px]" />
      <div className="pointer-events-none absolute -bottom-10 -left-8 size-[220px] rounded-full bg-[#c8f542]/70 md:size-[340px]" />
      <div className="pointer-events-none absolute -bottom-8 -right-8 size-[240px] rounded-full bg-[#7c3aed]/70 md:size-[380px]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, rgba(255,255,255,0.16) 0 2px, transparent 2px 48px)",
        }}
      />

      <p className="absolute left-4 top-4 font-sans text-[11px] tracking-[0.14em] text-white/85 md:left-10 md:top-10 md:text-sm">
        pen.dev · shipped 14 Aug 2026
      </p>
      <p className="hidden font-sans text-[120px] font-light leading-none text-white/70 md:absolute md:left-10 md:top-20 md:block">
        26
      </p>
      <p className="hidden font-sans text-7xl font-semibold text-[#fff7cc] md:absolute md:right-16 md:top-24 md:block">
        vectors
      </p>
      <p className="hidden font-sans text-6xl text-[#fff4e0] md:absolute md:bottom-16 md:left-10 md:block">
        shaders
      </p>
      <p className="hidden font-sans text-6xl font-semibold text-[#081018] md:absolute md:bottom-20 md:right-16 md:block">
        bitmaps
      </p>
      <p className="absolute left-4 top-[42%] font-sans text-[20vw] font-semibold leading-none tracking-[-0.04em] text-[#f7f1e8] md:left-10 md:text-[180px]">
        GLASS
      </p>
      <p className="hidden font-sans text-5xl text-[#0b1020] md:absolute md:left-12 md:top-[68%] md:block">
        sits on type
      </p>

      <Glass
        className="absolute left-1/2 top-[30%] size-[min(52vw,220px)] -translate-x-1/2 rounded-full shadow-[0_18px_48px_-6px_#00000055] md:left-[72px] md:top-[250px] md:size-[320px] md:translate-x-0"
        {...settings}
      />

      <Glass
        className="absolute inset-x-3 bottom-3 h-auto w-auto rounded-[28px] p-4 shadow-[0_22px_56px_-8px_#00000055] md:inset-auto md:right-[72px] md:top-[240px] md:h-[360px] md:w-[420px] md:rounded-[36px] md:p-8"
        blur={2.2}
        edgeWidth={80}
        ior={1.85}
        split={0.08}
      >
        <div className="flex flex-col gap-2 text-[#0b1020] md:h-full md:justify-between md:gap-0">
          <p className="font-sans text-[11px] font-semibold tracking-[0.18em] text-white/80 md:text-xs">
            NEW MATERIAL
          </p>
          <div>
            <h2 className="font-sans text-[1.35rem] leading-tight md:text-4xl">
              It sits on everything.
            </h2>
            <p className="mt-1 max-w-[32ch] font-sans text-[13px] leading-snug md:mt-3 md:text-[15px] md:leading-relaxed">
              Official glass.glsl. Wrapper. Same defaults as the circle.
            </p>
          </div>
          <span className="mt-1 inline-flex w-fit rounded-full bg-[#0b1020] px-3 py-1.5 font-sans text-xs font-semibold text-[#f7f1e8] md:mt-0 md:px-4 md:py-2 md:text-sm">
            Move the light
          </span>
        </div>
      </Glass>
    </section>
  );
}

function Controls({
  settings,
  onChange,
  title = "CIRCLE PROPS",
  resetLabel = "Reset to circle",
  hideHeader = false,
}: {
  settings: GlassSettings;
  onChange: (next: GlassSettings) => void;
  title?: string;
  resetLabel?: string;
  hideHeader?: boolean;
}) {
  const fields: Array<{
    key: keyof GlassSettings;
    min: number;
    max: number;
    step: number;
  }> = [
    { key: "ior", min: 1, max: 2, step: 0.01 },
    { key: "chromatic", min: 0, max: 0.2, step: 0.005 },
    { key: "edgeWidth", min: 1, max: 200, step: 1 },
    { key: "specPower", min: 1, max: 128, step: 0.1 },
    { key: "specIntensity", min: 0, max: 2, step: 0.01 },
    { key: "fresnelIntensity", min: 0, max: 2, step: 0.01 },
    { key: "blur", min: 0, max: 5, step: 0.05 },
    { key: "split", min: 0, max: 1, step: 0.01 },
    { key: "splitAngle", min: 0, max: 360, step: 1 },
    { key: "falloff", min: 0, max: 300, step: 1 },
  ];

  return (
    <section
      className={
        hideHeader
          ? "grid gap-4 p-0"
          : "grid gap-4 rounded-[24px] border border-white/10 bg-white/5 p-6"
      }
    >
      {hideHeader ? null : (
        <div className="flex items-center justify-between">
          <h2 className="font-sans text-sm tracking-[0.14em] text-white/70">{title}</h2>
          <button
            type="button"
            className="font-sans text-xs text-white/60 underline-offset-4 hover:text-white hover:underline"
            onClick={() => onChange({ ...GLASS_DEFAULTS })}
          >
            {resetLabel}
          </button>
        </div>
      )}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {fields.map((field) => (
          <label key={field.key} className="flex flex-col gap-2">
            <span className="flex items-center justify-between font-[family-name:var(--font-mono)] text-[11px] text-white/60">
              {field.key}
              <span className="text-white/90">{settings[field.key]}</span>
            </span>
            <input
              type="range"
              min={field.min}
              max={field.max}
              step={field.step}
              value={settings[field.key]}
              className="h-11 w-full accent-white"
              onChange={(event) =>
                onChange({
                  ...settings,
                  [field.key]: Number(event.target.value),
                })
              }
            />
          </label>
        ))}
      </div>
    </section>
  );
}

function ComponentsOnPhoto() {
  return (
    <section
      data-glass-capture
      data-glass-over-scene
      className="relative isolate overflow-hidden rounded-[24px] md:rounded-[32px]"
    >
      <img
        data-glass-scene
        src="/scene.jpg"
        alt=""
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative flex min-h-[280px] flex-col justify-between gap-10 p-4 md:min-h-[420px] md:gap-16 md:p-8">
        <Glass
          className="mx-auto flex h-12 w-full max-w-[720px] items-center justify-between rounded-full px-2 shadow-[0_16px_40px_-8px_#00000066] md:h-14"
          edgeWidth={22}
          blur={1.6}
          ior={1.55}
          chromatic={0.06}
          split={0.1}
          falloff={48}
        >
          <div className="flex h-full w-full items-center justify-between px-1 text-[#0b1020] sm:px-2">
            <span className="px-2 font-sans text-sm sm:px-3 sm:text-base">twelveux</span>
            <div className="hidden items-center gap-1 sm:flex">
              {["Home", "Material", "Docs", "Ship"].map((item) => (
                <span key={item} className="rounded-full px-3 py-1.5 font-sans text-sm font-medium">
                  {item}
                </span>
              ))}
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="rounded-full bg-transparent px-3 text-[#0b1020] hover:bg-transparent hover:text-[#0b1020]"
            >
              <span className="sm:hidden">Start</span>
              <span className="hidden sm:inline">Get started</span>
            </Button>
          </div>
        </Glass>

        <div className="flex flex-wrap items-end justify-between gap-6">
          <p className="max-w-sm font-sans text-sm text-white/80">
            Same wrapper on a shadcn button and a navbar. Shape comes from the radius.
          </p>
          <div className="flex flex-wrap gap-3">
            <Glass
              className="rounded-xl"
              edgeWidth={12}
              blur={0.8}
              ior={1.8}
              split={0.12}
              falloff={28}
            >
              <Button
                size="lg"
                variant="ghost"
                className="h-12 border-0 bg-transparent px-8 text-[#0b1020] shadow-none hover:bg-transparent hover:text-[#0b1020]"
              >
                Get started
              </Button>
            </Glass>
            <Glass
              className="rounded-xl"
              edgeWidth={12}
              blur={0.8}
              ior={1.8}
              split={0.12}
              falloff={28}
            >
              <Button
                size="lg"
                variant="ghost"
                className="h-12 border-0 bg-transparent px-8 text-[#0b1020] shadow-none hover:bg-transparent hover:text-[#0b1020]"
              >
                View registry
              </Button>
            </Glass>
          </div>
        </div>
      </div>
    </section>
  );
}

function TextFillChapter() {
  const [settings, setSettings] = React.useState<GlassSettings>({
    ...GLASS_TEXT_DEFAULTS,
  });
  const payload = JSON.stringify(
    {
      component: "GlassText",
      className: "text-center font-sans font-semibold leading-none tracking-[-0.06em]",
      props: settings,
    },
    null,
    2,
  );

  return (
    <section data-glass-over-scene className="relative z-10">
      <div className="sticky top-3 z-20 mx-auto w-[min(720px,calc(100%-1.5rem))] md:top-4">
        <Glass
          className="flex h-12 items-center justify-between rounded-full px-2 shadow-[0_16px_40px_-8px_#00000066] md:h-14"
          edgeWidth={22}
          blur={1.6}
          ior={1.55}
          chromatic={0.06}
          split={0.1}
          falloff={48}
        >
          <div className="flex h-full w-full items-center justify-between px-3 text-[#0b1020]">
            <span className="font-sans text-sm md:text-base">twelveux</span>
            <span className="font-sans text-[10px] tracking-[0.16em] md:text-xs">
              SCROLL THE TYPE
            </span>
          </div>
        </Glass>
      </div>

      <div className="h-[18vh] md:h-[35vh]" />
      <GlassText
        className="mx-auto w-full px-3 text-center font-sans text-[22vw] font-black leading-none tracking-[-0.06em] md:px-4 md:text-[24vw]"
        {...settings}
      >
        GLASS
      </GlassText>
      <div className="h-[22vh] md:h-[45vh]" />
      <GlassText
        className="mx-auto w-full px-3 text-center font-sans text-[16vw] font-black leading-none tracking-[-0.05em] md:px-4"
        {...settings}
      >
        SITS ON
      </GlassText>
      <div className="h-[22vh] md:h-[40vh]" />
      <GlassText
        className="mx-auto w-full px-3 text-center font-sans text-[13vw] font-black leading-none tracking-[-0.05em] md:px-4 md:text-[14vw]"
        {...settings}
      >
        EVERYTHING
      </GlassText>
      <div className="h-[16vh] md:h-[30vh]" />

      <div className="relative z-30 mx-auto mb-4 w-[min(920px,calc(100%-1.5rem))] md:sticky md:bottom-4">
        <div className="grid max-h-[70svh] gap-3 overflow-y-auto rounded-2xl border border-border bg-card/90 p-3 text-card-foreground shadow-lg backdrop-blur-md md:max-h-none md:gap-4 md:p-4">
          <div className="flex items-center justify-between gap-3">
            <p className="text-xs tracking-[0.14em] text-muted-foreground md:text-sm">
              GLASS TEXT PROPS
            </p>
            <button
              type="button"
              className="text-xs text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
              onClick={() => setSettings({ ...GLASS_TEXT_DEFAULTS })}
            >
              Reset
            </button>
          </div>
          <Controls settings={settings} onChange={setSettings} hideHeader />
          <label className="grid gap-2">
            <span className="text-xs tracking-[0.14em] text-muted-foreground">PASTE THIS BACK</span>
            <textarea
              readOnly
              value={payload}
              rows={8}
              className="w-full resize-y rounded-xl border border-border bg-background p-3 font-mono text-xs leading-relaxed text-foreground"
            />
          </label>
        </div>
      </div>
      <div className="h-[8vh]" />
    </section>
  );
}
