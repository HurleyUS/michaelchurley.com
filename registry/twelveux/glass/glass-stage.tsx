"use client";

import * as React from "react";

import { cropBackdropFromScene } from "./capture";
import { GLASS_DEFAULTS, type GlassSettings } from "./defaults";
import { readRadii } from "./radii";
import { writeShapeSdf } from "./sdf";
import { createGlassRenderer } from "./webgl";

type Renderer = ReturnType<typeof createGlassRenderer>;

/**
 * Shared glass stage
 *
 * One WebGL context draws every `[data-glass-face]` on the page.
 * Browsers cap WebGL contexts around 8–16, so a kit of controls
 * cannot each own a renderer.
 */
export function GlassStage({
  children,
  className,
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
}: React.PropsWithChildren<{ className?: string } & Partial<GlassSettings>>) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const rootRef = React.useRef<HTMLDivElement>(null);
  const settingsRef = React.useRef<Partial<GlassSettings>>({});
  settingsRef.current = {
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

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const root = rootRef.current;
    if (!canvas || !root) return;
    const stage = canvas;
    const host = root;

    let renderer: Renderer;
    try {
      renderer = createGlassRenderer(stage);
    } catch (error) {
      console.error("Glass stage failed", error);
      return;
    }

    const mouse = { x: 0, y: 0 };
    let raf = 0;
    let disposed = false;
    const sdfCache = new Map<string, Float32Array>();

    function sizeCanvas() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = Math.max(1, window.innerWidth);
      const height = Math.max(1, window.innerHeight);
      stage.width = Math.max(1, Math.round(width * dpr));
      stage.height = Math.max(1, Math.round(height * dpr));
      stage.style.width = `${width}px`;
      stage.style.height = `${height}px`;
    }

    function onPointerMove(event: PointerEvent) {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    }

    function frame() {
      if (disposed) return;
      const dpr = stage.width / Math.max(window.innerWidth, 1);
      renderer.clear();

      const faces = host.querySelectorAll<HTMLElement>("[data-glass-face]");
      for (const el of faces) {
        const rect = el.getBoundingClientRect();
        if (rect.width < 2 || rect.height < 2) continue;
        if (rect.bottom < 0 || rect.top > window.innerHeight) continue;
        if (rect.right < 0 || rect.left > window.innerWidth) continue;

        const w = Math.max(1, Math.round(rect.width * dpr));
        const h = Math.max(1, Math.round(rect.height * dpr));
        const x = Math.round(rect.left * dpr);
        const y = Math.round((window.innerHeight - rect.bottom) * dpr);

        const shot = cropBackdropFromScene(el, w, h);
        if (!shot) continue;

        const radii = readRadii(el, w, h);
        const key = `${w}x${h}:${Math.round(radii.tl)},${Math.round(radii.tr)},${Math.round(radii.br)},${Math.round(radii.bl)}`;
        let sdf = sdfCache.get(key);
        if (!sdf) {
          sdf = new Float32Array(w * h * 4);
          writeShapeSdf(sdf, w, h, radii);
          sdfCache.set(key, sdf);
        }
        renderer.setSdfData(w, h, sdf);
        renderer.setBackdrop(shot);

        const minSide = Math.min(rect.width, rect.height);
        const scale = Math.max(0.12, minSide / 180);
        const base = { ...GLASS_DEFAULTS, ...settingsRef.current };
        const local: GlassSettings = {
          ...base,
          edgeWidth: (settingsRef.current.edgeWidth ?? GLASS_DEFAULTS.edgeWidth) * scale,
          falloff: (settingsRef.current.falloff ?? GLASS_DEFAULTS.falloff) * scale,
        };

        const localMouse = {
          x: ((mouse.x - rect.left) / Math.max(rect.width, 1)) * w,
          y: ((rect.bottom - mouse.y) / Math.max(rect.height, 1)) * h,
        };

        renderer.draw(local, localMouse, { x, y, width: w, height: h });
      }

      raf = window.requestAnimationFrame(frame);
    }

    sizeCanvas();
    raf = window.requestAnimationFrame(frame);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("resize", sizeCanvas);

    return () => {
      disposed = true;
      window.cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("resize", sizeCanvas);
      renderer.destroy();
    };
  }, []);

  return (
    <div ref={rootRef} className={className}>
      <canvas
        ref={canvasRef}
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[1] block"
      />
      <div className="relative z-[2]">{children}</div>
    </div>
  );
}

export function GlassFace({
  className,
  children,
  as: Tag = "div",
  ...props
}: React.ComponentProps<"div"> & { as?: "div" | "span" }) {
  return (
    <Tag data-glass-face data-slot="glass" className={className} {...props}>
      {children}
    </Tag>
  );
}
