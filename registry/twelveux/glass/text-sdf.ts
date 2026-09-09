import { writeAlphaSdf } from "./sdf";

export function writeTextSdf(out: Float32Array, width: number, height: number, root: HTMLElement) {
  const measure = root.querySelector<HTMLElement>("[data-glass-measure]");
  const text = measure?.textContent ?? root.textContent ?? "";
  const style = getComputedStyle(measure ?? root);
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const dpr = width / Math.max(root.clientWidth, 1);
  const fontSize = parseFloat(style.fontSize) * dpr;
  const parsedLine = parseFloat(style.lineHeight);
  const lineHeight = Number.isFinite(parsedLine) ? parsedLine * dpr : fontSize;
  const letter = parseFloat(style.letterSpacing);

  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#ffffff";
  ctx.font = `${style.fontStyle} ${style.fontWeight} ${fontSize}px ${style.fontFamily}`;
  if (Number.isFinite(letter)) {
    ctx.letterSpacing = `${letter * dpr}px`;
  }

  const align = style.textAlign;
  ctx.textAlign =
    align === "right" || align === "end" ? "right" : align === "center" ? "center" : "left";
  ctx.textBaseline = "middle";

  const lines = text.replace(/\r/g, "").split("\n");
  const block = lines.length * lineHeight;
  let y = (height - block) / 2 + lineHeight / 2;
  const x = ctx.textAlign === "center" ? width / 2 : ctx.textAlign === "right" ? width : 0;

  for (const line of lines) {
    ctx.fillText(line, x, y);
    y += lineHeight;
  }

  writeAlphaSdf(out, width, height, ctx.getImageData(0, 0, width, height).data);
}
