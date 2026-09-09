import type { CornerRadii } from "./sdf";

function parseRadius(value: string, width: number, height: number) {
  const token = value.trim().split(/\s+/)[0] ?? "0";
  if (token.endsWith("%")) {
    return (parseFloat(token) / 100) * Math.min(width, height);
  }
  const px = parseFloat(token);
  return Number.isFinite(px) ? px : 0;
}

export function readRadii(el: HTMLElement, texWidth: number, texHeight: number): CornerRadii {
  const style = getComputedStyle(el);
  const sx = texWidth / Math.max(el.clientWidth, 1);
  const sy = texHeight / Math.max(el.clientHeight, 1);
  const scale = Math.min(sx, sy);
  return {
    tl: parseRadius(style.borderTopLeftRadius, el.clientWidth, el.clientHeight) * scale,
    tr: parseRadius(style.borderTopRightRadius, el.clientWidth, el.clientHeight) * scale,
    br: parseRadius(style.borderBottomRightRadius, el.clientWidth, el.clientHeight) * scale,
    bl: parseRadius(style.borderBottomLeftRadius, el.clientWidth, el.clientHeight) * scale,
  };
}
