export const GLASS_DEFAULTS = {
  ior: 2,
  chromatic: 0.13,
  edgeWidth: 200,
  specPower: 55.61,
  specIntensity: 0.96,
  fresnelIntensity: 1.2,
  blur: 1.2,
  split: 0.45,
  splitAngle: 130,
  falloff: 168,
} as const;

export const GLASS_TEXT_DEFAULTS = {
  ior: 1.42,
  chromatic: 0.155,
  edgeWidth: 42,
  specPower: 15,
  specIntensity: 0.52,
  fresnelIntensity: 0.95,
  blur: 0.85,
  split: 0.26,
  splitAngle: 145,
  falloff: 255,
} as const;

export type GlassSettings = {
  [K in keyof typeof GLASS_DEFAULTS]: number;
};

export type GlassUniforms = {
  u_ior: number;
  u_chromatic: number;
  u_edgeWidth: number;
  u_specPower: number;
  u_specIntensity: number;
  u_fresnelIntensity: number;
  u_blur: number;
  u_split: number;
  u_splitAngle: number;
  u_falloff: number;
};

export function glassUniforms(overrides: Partial<GlassSettings> = {}): GlassUniforms {
  const settings = { ...GLASS_DEFAULTS, ...overrides };
  return {
    u_ior: settings.ior,
    u_chromatic: settings.chromatic,
    u_edgeWidth: settings.edgeWidth,
    u_specPower: settings.specPower,
    u_specIntensity: settings.specIntensity,
    u_fresnelIntensity: settings.fresnelIntensity,
    u_blur: settings.blur,
    u_split: settings.split,
    u_splitAngle: settings.splitAngle,
    u_falloff: settings.falloff,
  };
}
