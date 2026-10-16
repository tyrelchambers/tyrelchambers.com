import fragmentSource from "../../shaders/noise-strings.glsl?raw";

// Uniform values copied from the "Noise Strings" layer in portfolio.pen.
const SETTINGS = {
  u_density: 0.5,
  u_bundle: 0.7,
  u_wind: 0.5,
  u_angle: 0,
  u_turb: 0.55,
  u_tangle: 0.5,
  u_length: 0.55,
  u_width: 0.5,
  u_glow: 0.35,
  u_speed: 0.5,
  u_seed: 7,
  u_feather: 0.188,
};
const THREAD = "#D6DAFF";
const HAZE = "#8E96FF";
const FRAME_MS = 1000 / 30;

const VERTEX_SOURCE = `
attribute vec2 a_position;
void main() { gl_Position = vec4(a_position, 0.0, 1.0); }
`;

interface Wordmark {
  text: string;
  accent: string;
  font: string;
  textColor: string;
  accentColor: string;
  background: string;
  widthRatio: number;
}

const hexToRgb = (hex: string) => {
  const n = parseInt(hex.slice(1), 16);
  return [(n >> 16) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255] as const;
};

const compile = (gl: WebGLRenderingContext, type: number, source: string) => {
  const shader = gl.createShader(type)!;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    throw new Error(gl.getShaderInfoLog(shader) ?? "Shader failed to compile");
  }
  return shader;
};

// Draws the wordmark the shader traces its strings around.
const drawBackdrop = (ctx: CanvasRenderingContext2D, w: number, h: number, mark: Wordmark) => {
  ctx.fillStyle = mark.background;
  ctx.fillRect(0, 0, w, h);

  ctx.font = `800 100px ${mark.font}`;
  ctx.letterSpacing = "-5px";
  const base = ctx.measureText(mark.text).width + ctx.measureText(mark.accent).width;
  const size = (100 * w * mark.widthRatio) / base;

  ctx.font = `800 ${size}px ${mark.font}`;
  ctx.letterSpacing = `${-size * 0.05}px`;
  const textWidth = ctx.measureText(mark.text).width;
  const total = textWidth + ctx.measureText(mark.accent).width;
  const metrics = ctx.measureText(mark.text);
  const ascent = metrics.actualBoundingBoxAscent;
  const x = (w - total) / 2;
  const y = (h + ascent - metrics.actualBoundingBoxDescent) / 2;

  ctx.textBaseline = "alphabetic";
  ctx.fillStyle = mark.textColor;
  ctx.fillText(mark.text, x, y);
  ctx.fillStyle = mark.accentColor;
  ctx.fillText(mark.accent, x + textWidth, y);
};

export const mountNoiseStrings = async (canvas: HTMLCanvasElement, mark: Wordmark) => {
  const gl = canvas.getContext("webgl", { premultipliedAlpha: true, antialias: false });
  if (!gl) return;

  await document.fonts.load(`800 100px ${mark.font}`);

  const program = gl.createProgram()!;
  gl.attachShader(program, compile(gl, gl.VERTEX_SHADER, VERTEX_SOURCE));
  gl.attachShader(program, compile(gl, gl.FRAGMENT_SHADER, fragmentSource));
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    throw new Error(gl.getProgramInfoLog(program) ?? "Shader program failed to link");
  }
  gl.useProgram(program);

  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const position = gl.getAttribLocation(program, "a_position");
  gl.enableVertexAttribArray(position);
  gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

  const loc = (name: string) => gl.getUniformLocation(program, name);
  for (const [name, value] of Object.entries(SETTINGS)) gl.uniform1f(loc(name), value);
  gl.uniform3fv(loc("u_thread"), hexToRgb(THREAD));
  gl.uniform3fv(loc("u_haze"), hexToRgb(HAZE));
  gl.uniform1i(loc("u_backdrop"), 0);
  const uResolution = loc("u_resolution");
  const uTime = loc("u_time");

  const texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);

  const backdrop = document.createElement("canvas");
  const backdropCtx = backdrop.getContext("2d")!;

  const resize = () => {
    const { width, height } = canvas.getBoundingClientRect();
    const w = Math.max(1, Math.round(width));
    const h = Math.max(1, Math.round(height));
    canvas.width = backdrop.width = w;
    canvas.height = backdrop.height = h;
    drawBackdrop(backdropCtx, w, h, mark);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, backdrop);
    gl.viewport(0, 0, w, h);
    gl.uniform2f(uResolution, w, h);
  };

  const render = (seconds: number) => {
    gl.uniform1f(uTime, seconds);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  };

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let visible = false;
  let frame = 0;
  let last = 0;
  const start = performance.now();

  const tick = (now: number) => {
    frame = requestAnimationFrame(tick);
    if (now - last < FRAME_MS) return;
    last = now;
    render((now - start) / 1000);
  };

  const update = () => {
    cancelAnimationFrame(frame);
    if (!visible) return;
    if (reducedMotion.matches) render(4);
    else frame = requestAnimationFrame(tick);
  };

  new ResizeObserver(() => {
    resize();
    render((performance.now() - start) / 1000);
  }).observe(canvas);

  new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    update();
  }).observe(canvas);

  reducedMotion.addEventListener("change", update);
};
