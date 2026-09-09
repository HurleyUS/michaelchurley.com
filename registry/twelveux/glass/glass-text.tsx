"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

import { GLASS_TEXT_DEFAULTS, type GlassSettings } from "./defaults";
import { writeTextSdf } from "./text-sdf";
import { useGlassRuntime } from "./use-glass";

export type GlassTextProps = Omit<React.ComponentProps<"div">, "children"> &
  Partial<GlassSettings> & {
    children?: React.ReactNode;
  };

export function GlassText({
  className,
  children,
  ior = GLASS_TEXT_DEFAULTS.ior,
  chromatic = GLASS_TEXT_DEFAULTS.chromatic,
  edgeWidth = GLASS_TEXT_DEFAULTS.edgeWidth,
  specPower = GLASS_TEXT_DEFAULTS.specPower,
  specIntensity = GLASS_TEXT_DEFAULTS.specIntensity,
  fresnelIntensity = GLASS_TEXT_DEFAULTS.fresnelIntensity,
  blur = GLASS_TEXT_DEFAULTS.blur,
  split = GLASS_TEXT_DEFAULTS.split,
  splitAngle = GLASS_TEXT_DEFAULTS.splitAngle,
  falloff = GLASS_TEXT_DEFAULTS.falloff,
  ...props
}: GlassTextProps) {
  const rootRef = React.useRef<HTMLDivElement>(null);
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const settings = {
    ior,
    chromatic,
    edgeWidth,
    specPower,
    specIntensity,
    fresnelIntensity,
    blur,
    split,
    splitAngle,
    falloff,
  };

  useGlassRuntime(rootRef, canvasRef, settings, writeTextSdf);

  const text = flattenText(children);

  return (
    <div
      ref={rootRef}
      data-slot="glass"
      data-glass-text=""
      className={cn("relative isolate", className)}
      {...props}
    >
      <span data-glass-measure className="invisible block whitespace-pre-wrap" aria-hidden>
        {text}
      </span>
      <canvas
        ref={canvasRef}
        aria-hidden
        className="pointer-events-none absolute inset-0 block size-full"
      />
      <span className="sr-only">{text}</span>
    </div>
  );
}

function flattenText(children: React.ReactNode) {
  return React.Children.toArray(children)
    .map((child) => (typeof child === "string" || typeof child === "number" ? String(child) : ""))
    .join("");
}
