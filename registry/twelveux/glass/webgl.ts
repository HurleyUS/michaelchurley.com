import { glassUniforms, type GlassSettings } from "./defaults";
import { writeShapeSdf, type CornerRadii } from "./sdf";
import { GLASS_FRAGMENT_SHADER } from "./shader";

const VERTEX_SHADER = `#ifdef GL_ES
precision highp float;
#endif
attribute vec2 a_pos;
void main() {
  gl_Position = vec4(a_pos, 0.0, 1.0);
}
`;

function wrapFragment(source: string) {
  if (source.includes("precision")) return source;
  return `#ifdef GL_ES\nprecision highp float;\n#endif\n\n${source}`;
}

function compile(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type);
  if (!shader) throw new Error("Could not create shader");
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const log = gl.getShaderInfoLog(shader) ?? "shader compile failed";
    gl.deleteShader(shader);
    throw new Error(log);
  }
  return shader;
}

function setTextureParams(gl: WebGLRenderingContext, mag: number) {
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, mag);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, mag);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
}

export function createGlassRenderer(canvas: HTMLCanvasElement) {
  const context =
    canvas.getContext("webgl2", { premultipliedAlpha: true, alpha: true }) ??
    canvas.getContext("webgl", { premultipliedAlpha: true, alpha: true });
  if (!context) throw new Error("WebGL is required for Glass");
  const gl: WebGLRenderingContext = context;

  const isWebGL2 =
    typeof WebGL2RenderingContext !== "undefined" && gl instanceof WebGL2RenderingContext;
  if (!isWebGL2) {
    gl.getExtension("OES_texture_float");
    gl.getExtension("OES_texture_float_linear");
    gl.getExtension("OES_texture_half_float");
    gl.getExtension("OES_texture_half_float_linear");
  }

  const program = gl.createProgram();
  if (!program) throw new Error("Could not create program");
  gl.attachShader(program, compile(gl, gl.VERTEX_SHADER, VERTEX_SHADER));
  gl.attachShader(program, compile(gl, gl.FRAGMENT_SHADER, wrapFragment(GLASS_FRAGMENT_SHADER)));
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    throw new Error(gl.getProgramInfoLog(program) ?? "program link failed");
  }
  gl.useProgram(program);

  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
    gl.STATIC_DRAW,
  );
  const aPos = gl.getAttribLocation(program, "a_pos");
  gl.enableVertexAttribArray(aPos);
  gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

  const backdropTex = gl.createTexture();
  const sdfTex = gl.createTexture();
  if (!backdropTex || !sdfTex) throw new Error("Could not create textures");

  const loc = {
    resolution: gl.getUniformLocation(program, "u_resolution"),
    backdrop: gl.getUniformLocation(program, "u_backdrop"),
    sdf: gl.getUniformLocation(program, "u_sdf"),
    mouse: gl.getUniformLocation(program, "u_mouse"),
    ior: gl.getUniformLocation(program, "u_ior"),
    chromatic: gl.getUniformLocation(program, "u_chromatic"),
    edgeWidth: gl.getUniformLocation(program, "u_edgeWidth"),
    specPower: gl.getUniformLocation(program, "u_specPower"),
    specIntensity: gl.getUniformLocation(program, "u_specIntensity"),
    fresnelIntensity: gl.getUniformLocation(program, "u_fresnelIntensity"),
    blur: gl.getUniformLocation(program, "u_blur"),
    split: gl.getUniformLocation(program, "u_split"),
    splitAngle: gl.getUniformLocation(program, "u_splitAngle"),
    falloff: gl.getUniformLocation(program, "u_falloff"),
  };

  function uploadSdf(width: number, height: number, data: Float32Array) {
    gl.bindTexture(gl.TEXTURE_2D, sdfTex);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 0);
    if (isWebGL2) {
      const gl2 = gl as WebGL2RenderingContext;
      gl2.getExtension("EXT_color_buffer_float");
      gl2.texImage2D(gl2.TEXTURE_2D, 0, gl2.RGBA16F, width, height, 0, gl2.RGBA, gl2.FLOAT, data);
    } else {
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.FLOAT, data);
    }
    setTextureParams(gl, gl.NEAREST);
  }

  function setSdf(width: number, height: number, radii: CornerRadii) {
    const data = new Float32Array(width * height * 4);
    writeShapeSdf(data, width, height, radii);
    uploadSdf(width, height, data);
  }

  function setSdfData(width: number, height: number, data: Float32Array) {
    uploadSdf(width, height, data);
  }

  function setBackdrop(source: TexImageSource) {
    gl.bindTexture(gl.TEXTURE_2D, backdropTex);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, source);
    setTextureParams(gl, gl.LINEAR);
  }

  function draw(
    settings: Partial<GlassSettings>,
    mouse: { x: number; y: number },
    region?: { x: number; y: number; width: number; height: number },
  ) {
    const uniforms = glassUniforms(settings);
    if (region) {
      gl.viewport(region.x, region.y, region.width, region.height);
    } else {
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
    }
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    gl.useProgram(program);

    const resW = region?.width ?? canvas.width;
    const resH = region?.height ?? canvas.height;
    gl.uniform2f(loc.resolution, resW, resH);
    gl.uniform2f(loc.mouse, mouse.x, mouse.y);
    gl.uniform1f(loc.ior, uniforms.u_ior);
    gl.uniform1f(loc.chromatic, uniforms.u_chromatic);
    gl.uniform1f(loc.edgeWidth, uniforms.u_edgeWidth);
    gl.uniform1f(loc.specPower, uniforms.u_specPower);
    gl.uniform1f(loc.specIntensity, uniforms.u_specIntensity);
    gl.uniform1f(loc.fresnelIntensity, uniforms.u_fresnelIntensity);
    gl.uniform1f(loc.blur, uniforms.u_blur);
    gl.uniform1f(loc.split, uniforms.u_split);
    gl.uniform1f(loc.splitAngle, uniforms.u_splitAngle);
    gl.uniform1f(loc.falloff, uniforms.u_falloff);

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, backdropTex);
    gl.uniform1i(loc.backdrop, 0);
    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, sdfTex);
    gl.uniform1i(loc.sdf, 1);

    gl.drawArrays(gl.TRIANGLES, 0, 6);
  }

  function clear() {
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
  }

  function destroy() {
    gl.deleteTexture(backdropTex);
    gl.deleteTexture(sdfTex);
    gl.deleteBuffer(buffer);
    gl.deleteProgram(program);
  }

  return { setSdf, setSdfData, setBackdrop, draw, clear, destroy };
}
