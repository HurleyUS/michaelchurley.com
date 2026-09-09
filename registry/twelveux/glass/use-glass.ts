"use client";

import * as React from "react";

import { captureBackdrop, cropBackdropFromScene } from "./capture";
import type { GlassSettings } from "./defaults";
import { readRadii } from "./radii";
import { createGlassRenderer } from "./webgl";

type WriteSdf = (out: Float32Array, width: number, height: number, root: HTMLElement) => void;

export function useGlassRuntime(
  rootRef: React.RefObject<HTMLElement | null>,
  canvasRef: React.RefObject<HTMLCanvasElement | null>,
  settings: GlassSettings,
  writeSdf?: WriteSdf,
) {
  const settingsRef = React.useRef(settings);
  settingsRef.current = settings;
  const writeSdfRef = React.useRef(writeSdf);
  writeSdfRef.current = writeSdf;

  React.useEffect(() => {
    if (!rootRef.current || !canvasRef.current) return;
    const root: HTMLElement = rootRef.current;
    const canvas: HTMLCanvasElement = canvasRef.current;

    let renderer: ReturnType<typeof createGlassRenderer>;
    try {
      renderer = createGlassRenderer(canvas);
    } catch (error) {
      console.error("Glass renderer failed", error);
      return;
    }

    const mouse = { x: 0, y: 0 };
    let raf = 0;
    let capturing = false;
    let disposed = false;

    function applySdf() {
      const width = canvas.width;
      const height = canvas.height;
      if (writeSdfRef.current) {
        const data = new Float32Array(width * height * 4);
        writeSdfRef.current(data, width, height, root);
        renderer.setSdfData(width, height, data);
        return;
      }
      renderer.setSdf(width, height, readRadii(root, width, height));
    }

    function sizeCanvas() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = Math.max(1, root.clientWidth);
      const height = Math.max(1, root.clientHeight);
      canvas.width = Math.max(1, Math.round(width * dpr));
      canvas.height = Math.max(1, Math.round(height * dpr));
      mouse.x = canvas.width * 0.5;
      mouse.y = canvas.height * 0.72;
      applySdf();
    }

    function applySceneBackdrop() {
      const shot = cropBackdropFromScene(root, canvas.width, canvas.height);
      if (shot) renderer.setBackdrop(shot);
      return shot;
    }

    async function recapture() {
      if (disposed || capturing) return;
      if (applySceneBackdrop()) return;
      capturing = true;
      try {
        const shot = await captureBackdrop(root);
        if (!disposed && shot) renderer.setBackdrop(shot);
      } catch (error) {
        console.error("Glass backdrop capture failed", error);
      } finally {
        capturing = false;
      }
    }

    function onPointerMove(event: PointerEvent) {
      const rect = canvas.getBoundingClientRect();
      if (rect.width < 1 || rect.height < 1) return;
      mouse.x = ((event.clientX - rect.left) / rect.width) * canvas.width;
      mouse.y = ((rect.bottom - event.clientY) / rect.height) * canvas.height;
    }

    function frame() {
      applySceneBackdrop();
      renderer.draw(settingsRef.current, mouse);
      raf = window.requestAnimationFrame(frame);
    }

    sizeCanvas();
    void recapture();
    const later = window.setTimeout(() => {
      applySdf();
      void recapture();
    }, 400);
    const settled = window.setTimeout(() => {
      applySdf();
      void recapture();
    }, 1200);
    raf = window.requestAnimationFrame(frame);

    const fonts = document.fonts?.ready.then(() => {
      if (disposed) return;
      applySdf();
      void recapture();
    });

    const resize = new ResizeObserver(() => {
      sizeCanvas();
      void recapture();
    });
    resize.observe(root);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("scroll", recapture, { passive: true });

    return () => {
      disposed = true;
      window.clearTimeout(later);
      window.clearTimeout(settled);
      window.cancelAnimationFrame(raf);
      resize.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", recapture);
      renderer.destroy();
      void fonts;
    };
  }, [canvasRef, rootRef]);
}
