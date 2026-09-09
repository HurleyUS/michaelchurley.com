export function cropBackdropFromScene(el: HTMLElement, outWidth: number, outHeight: number) {
  const host = el.closest("[data-glass-over-scene]");
  if (!host) return null;
  const scene =
    host.querySelector<HTMLImageElement>("img[data-glass-scene]") ??
    document.querySelector<HTMLImageElement>("img[data-glass-scene]");
  if (!scene?.complete || scene.naturalWidth < 1) return null;

  const elRect = el.getBoundingClientRect();
  if (elRect.width < 1 || elRect.height < 1) return null;

  const sceneRect = scene.getBoundingClientRect();
  const scale = Math.max(
    sceneRect.width / scene.naturalWidth,
    sceneRect.height / scene.naturalHeight,
  );
  const drawnW = scene.naturalWidth * scale;
  const drawnH = scene.naturalHeight * scale;
  const originX = sceneRect.left + (sceneRect.width - drawnW) / 2;
  const originY = sceneRect.top + (sceneRect.height - drawnH) / 2;

  const crop = document.createElement("canvas");
  crop.width = Math.max(1, outWidth);
  crop.height = Math.max(1, outHeight);
  const ctx = crop.getContext("2d");
  if (!ctx) return null;

  ctx.drawImage(
    scene,
    (elRect.left - originX) / scale,
    (elRect.top - originY) / scale,
    elRect.width / scale,
    elRect.height / scale,
    0,
    0,
    crop.width,
    crop.height,
  );
  return crop;
}

export async function captureBackdrop(el: HTMLElement) {
  if (typeof window === "undefined") return null;
  const parent = el.closest<HTMLElement>("[data-glass-capture]") ?? el.parentElement;
  if (!parent) return null;

  const rect = el.getBoundingClientRect();
  if (rect.width < 1 || rect.height < 1) return null;

  const { toCanvas } = await import("html-to-image");
  const dpr = window.devicePixelRatio || 1;
  const parentRect = parent.getBoundingClientRect();

  const full = await toCanvas(parent, {
    pixelRatio: dpr,
    cacheBust: false,
    filter: (node) => {
      if (!(node instanceof Element)) return true;
      return node === parent || !node.closest("[data-slot='glass']");
    },
  });

  const width = Math.max(1, Math.round(rect.width * dpr));
  const height = Math.max(1, Math.round(rect.height * dpr));
  const crop = document.createElement("canvas");
  crop.width = width;
  crop.height = height;
  const ctx = crop.getContext("2d");
  if (!ctx) return null;

  ctx.drawImage(
    full,
    Math.round((rect.left - parentRect.left) * dpr),
    Math.round((rect.top - parentRect.top) * dpr),
    width,
    height,
    0,
    0,
    width,
    height,
  );
  return crop;
}
