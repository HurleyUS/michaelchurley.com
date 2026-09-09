export type CornerRadii = {
  tl: number;
  tr: number;
  br: number;
  bl: number;
};

function clampRadii(width: number, height: number, radii: CornerRadii): CornerRadii {
  const hx = width * 0.5;
  const hy = height * 0.5;
  const cap = Math.min(hx, hy);
  return {
    tl: Math.min(Math.max(radii.tl, 0), cap),
    tr: Math.min(Math.max(radii.tr, 0), cap),
    br: Math.min(Math.max(radii.br, 0), cap),
    bl: Math.min(Math.max(radii.bl, 0), cap),
  };
}

function sdRoundBox(px: number, py: number, hx: number, hy: number, radii: CornerRadii) {
  let rx: number;
  let ry: number;
  if (px > 0) {
    rx = radii.tr;
    ry = radii.br;
  } else {
    rx = radii.tl;
    ry = radii.bl;
  }
  const r = py > 0 ? rx : ry;
  const qx = Math.abs(px) - hx + r;
  const qy = Math.abs(py) - hy + r;
  return Math.min(Math.max(qx, qy), 0) + Math.hypot(Math.max(qx, 0), Math.max(qy, 0)) - r;
}

function field(px: number, py: number, width: number, height: number, radii: CornerRadii) {
  const hx = width * 0.5;
  const hy = height * 0.5;
  return -sdRoundBox(px - hx, py - hy, hx, hy, radii);
}

const EDT_INF = 1e12;

function edt1d(f: Float64Array, n: number) {
  const d = new Float64Array(n);
  const v = new Int32Array(n);
  const z = new Float64Array(n + 1);
  let k = 0;
  v[0] = 0;
  z[0] = Number.NEGATIVE_INFINITY;
  z[1] = Number.POSITIVE_INFINITY;

  for (let q = 1; q < n; q++) {
    let s = 0;
    k += 1;
    do {
      k -= 1;
      const r = v[k] ?? 0;
      s = ((f[q] ?? 0) - (f[r] ?? 0) + q * q - r * r) / (2 * (q - r));
    } while (s <= (z[k] ?? Number.NEGATIVE_INFINITY));
    k += 1;
    v[k] = q;
    z[k] = s;
    z[k + 1] = Number.POSITIVE_INFINITY;
  }

  k = 0;
  for (let q = 0; q < n; q++) {
    while ((z[k + 1] ?? Number.POSITIVE_INFINITY) < q) k += 1;
    const r = v[k] ?? 0;
    d[q] = (q - r) * (q - r) + (f[r] ?? 0);
  }
  return d;
}

function edt2d(grid: Float64Array, width: number, height: number) {
  const column = new Float64Array(height);
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) column[y] = grid[y * width + x] ?? 0;
    const dt = edt1d(column, height);
    for (let y = 0; y < height; y++) grid[y * width + x] = dt[y] ?? 0;
  }

  const row = new Float64Array(width);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) row[x] = grid[y * width + x] ?? 0;
    const dt = edt1d(row, width);
    for (let x = 0; x < width; x++) grid[y * width + x] = dt[x] ?? 0;
  }
}

function alphaAt(
  pixels: ArrayLike<number>,
  width: number,
  height: number,
  x: number,
  y: number,
  rgba: boolean,
) {
  const srcY = height - 1 - y;
  if (rgba) return pixels[(srcY * width + x) * 4 + 3] ?? 0;
  return pixels[srcY * width + x] ?? 0;
}

export function writeAlphaSdf(
  out: Float32Array,
  width: number,
  height: number,
  pixels: ArrayLike<number>,
  threshold = 128,
) {
  const rgba = pixels.length === width * height * 4;
  const inside = new Float64Array(width * height);
  const outside = new Float64Array(width * height);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const filled = alphaAt(pixels, width, height, x, y, rgba) >= threshold;
      const i = y * width + x;
      inside[i] = filled ? 0 : EDT_INF;
      outside[i] = filled ? EDT_INF : 0;
    }
  }

  edt2d(inside, width, height);
  edt2d(outside, width, height);

  const fieldAt = (x: number, y: number) => {
    const cx = Math.min(Math.max(x, 0), width - 1);
    const cy = Math.min(Math.max(y, 0), height - 1);
    const i = cy * width + cx;
    return Math.sqrt(outside[i] ?? 0) - Math.sqrt(inside[i] ?? 0);
  };

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const d = fieldAt(x, y);
      const gx = fieldAt(x + 1, y) - fieldAt(x - 1, y);
      const gy = fieldAt(x, y + 1) - fieldAt(x, y - 1);
      const len = Math.hypot(gx, gy) || 1;
      const i = (y * width + x) * 4;
      out[i] = d;
      out[i + 1] = gx / len;
      out[i + 2] = gy / len;
      out[i + 3] = 1;
    }
  }
}

export function writeShapeSdf(
  out: Float32Array,
  width: number,
  height: number,
  radii: CornerRadii,
) {
  const r = clampRadii(width, height, radii);
  const eps = 0.5;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const px = x + 0.5;
      const py = y + 0.5;
      const d = field(px, py, width, height, r);
      const gx =
        (field(px + eps, py, width, height, r) - field(px - eps, py, width, height, r)) / (2 * eps);
      const gy =
        (field(px, py + eps, width, height, r) - field(px, py - eps, width, height, r)) / (2 * eps);
      const len = Math.hypot(gx, gy) || 1;
      const i = (y * width + x) * 4;
      out[i] = d;
      out[i + 1] = gx / len;
      out[i + 2] = gy / len;
      out[i + 3] = 1;
    }
  }
}
