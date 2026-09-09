"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

import { GLASS_DEFAULTS, type GlassSettings } from "./defaults";
import { useGlassRuntime } from "./use-glass";

export type GlassProps = React.ComponentProps<"div"> & Partial<GlassSettings>;

export { GLASS_DEFAULTS } from "./defaults";

export function Glass({
  className,
  children,
  ior = GLASS_DEFAULTS.ior,
  chromatic = GLASS_DEFAULTS.chromatic,
  edgeWidth = GLASS_DEFAULTS.edgeWidth,
  specPower = GLASS_DEFAULTS.specPower,
  specIntensity = GLASS_DEFAULTS.specIntensity,
  fresnelIntensity = GLASS_DEFAULTS.fresnelIntensity,
  blur = GLASS_DEFAULTS.blur,
  split = GLASS_DEFAULTS.split,
  splitAngle = GLASS_DEFAULTS.splitAngle,
  falloff = GLASS_DEFAULTS.falloff,
  ...props
}: GlassProps) {
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

  useGlassRuntime(rootRef, canvasRef, settings);

  return (
    <div
      ref={rootRef}
      data-slot="glass"
      className={cn("relative overflow-hidden", className)}
      {...props}
    >
      <canvas
        ref={canvasRef}
        aria-hidden
        className="pointer-events-none absolute inset-0 block size-full"
      />
      {children != null ? <div className="relative z-10 h-full w-full">{children}</div> : null}
    </div>
  );
}
