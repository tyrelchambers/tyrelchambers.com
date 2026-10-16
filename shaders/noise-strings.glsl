precision highp float;

/** @resolution */
uniform vec2 u_resolution;

/** @time */
uniform float u_time;

/** @backdrop */
uniform sampler2D u_backdrop;

/**
 * @label Density
 * @default 0.5
 * @range 0, 1
 */
uniform float u_density;

/**
 * @label Bundle
 * @default 0.7
 * @range 0, 1
 */
uniform float u_bundle;

/**
 * @label Wind
 * @default 0.5
 * @range 0, 1
 */
uniform float u_wind;

/**
 * @label Angle
 * @default 0
 * @range -180, 180
 */
uniform float u_angle;

/**
 * @label Turbulence
 * @default 0.55
 * @range 0, 1
 */
uniform float u_turb;

/**
 * @label Tangle
 * @default 0.5
 * @range 0, 1
 */
uniform float u_tangle;

/**
 * @label Length
 * @default 0.55
 * @range 0, 1
 */
uniform float u_length;

/**
 * @label Width
 * @default 0.9
 * @range 0.3, 3
 */
uniform float u_width;

/**
 * @label Glow
 * @default 0.45
 * @range 0, 1
 */
uniform float u_glow;

/**
 * @label Speed
 * @default 0.5
 * @range 0, 1
 */
uniform float u_speed;

/**
 * @label Seed
 * @default 7
 * @range 0, 100
 */
uniform float u_seed;

/**
 * @label Feather
 * @default 0.18
 * @range 0, 0.5
 */
uniform float u_feather;

/**
 * @label Thread
 * @color
 * @default #ffffff
 */
uniform vec3 u_thread;

/**
 * @label Haze
 * @color
 * @default #e6ecff
 */
uniform vec3 u_haze;

const float TAU = 6.2831853;

const float CB = 48.0;

float aspect;
float tm;
float px;
vec3 bgCol;
vec2 ctr;
vec2 sc;

float NT;
float UW;
vec2 wdir;
float tangAmt;

float lockAt;

float hash21(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float hash11(float x) {
  return fract(sin(x * 12.9898 + 4.1414) * 43758.5453);
}

float vnoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = hash21(i);
  float b = hash21(i + vec2(1.0, 0.0));
  float c = hash21(i + vec2(0.0, 1.0));
  float d = hash21(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

vec3 vnoiseD(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  vec2 du = 6.0 * f * (1.0 - f);
  float a = hash21(i);
  float b = hash21(i + vec2(1.0, 0.0));
  float c = hash21(i + vec2(0.0, 1.0));
  float d = hash21(i + vec2(1.0, 1.0));
  float k = a - b - c + d;
  return vec3(mix(mix(a, b, u.x), mix(c, d, u.x), u.y),
    du * vec2(b - a + k * u.y, c - a + k * u.x));
}

vec2 vnoise2J(vec2 p, float s, inout vec2 jx, inout vec2 jy, float wt) {
  vec3 a = vnoiseD(p);
  vec3 b = vnoiseD(p.yx + vec2(7.3, 3.1));
  jx += wt * s * vec2(a.y, b.z);
  jy += wt * s * vec2(a.z, b.y);
  return wt * (vec2(a.x, b.x) - 0.5);
}

vec2 vnoise2(vec2 p) {
  return vec2(vnoise(p), vnoise(p.yx + vec2(7.3, 3.1))) - 0.5;
}

float tanhF(float x) {
  float e = exp(-2.0 * abs(x));
  return sign(x) * (1.0 - e) / (1.0 + e);
}

vec3 back(vec2 p) {
  vec2 uv = vec2(p.x / aspect, 1.0 - p.y);
  return texture2D(u_backdrop, clamp(uv, 0.0, 1.0)).rgb;
}

float inFrame(vec2 p) {
  vec2 uv = vec2(p.x / aspect, p.y);
  return step(0.002, uv.x) * step(uv.x, 0.998) * step(0.002, uv.y) * step(uv.y, 0.998);
}

float art(vec2 p) {
  return smoothstep(0.08, 0.6, distance(back(p), bgCol)) * inFrame(p);
}

float radius(vec2 q) {
  return length((q - ctr) / sc);
}

vec2 warpAt(vec2 p, float layer) {
  float re = radius(p);
  float amp = u_turb * (0.045 + 0.24 * smoothstep(0.7, 3.5, re));
  vec2 o = vec2(u_seed * 1.7 + layer * 31.0, layer * 17.0 - u_seed);
  vec2 n = vnoise2(p * 1.7 + o + vec2(0.0, -tm * 0.1))
    + 0.55 * vnoise2(p * 4.3 + o * 1.3 + vec2(tm * 0.17, tm * 0.05))
    + 0.25 * vnoise2(p * 9.0 - o + vec2(-tm * 0.2, 0.0));
  vec2 w = p + amp * 2.0 * n;

  if (tangAmt > 0.0) {
    w += tangAmt * 0.03 * (vnoise2(p * 38.0 + o + vec2(tm * 0.6, -tm * 0.4))
      + 0.6 * vnoise2(p * 80.0 - o + vec2(-tm * 0.5, 0.0)));
  }
  return w;
}

vec2 warpJ(vec2 p, float layer, out vec2 jx, out vec2 jy) {
  vec2 dd = (p - ctr) / sc;
  float re = length(dd);
  float t = clamp((re - 0.7) / 2.8, 0.0, 1.0);
  float amp = u_turb * (0.045 + 0.24 * t * t * (3.0 - 2.0 * t));
  vec2 ga = u_turb * 0.24 * 6.0 * t * (1.0 - t) / 2.8 * dd / (sc * max(re, 1e-6));
  vec2 o = vec2(u_seed * 1.7 + layer * 31.0, layer * 17.0 - u_seed);
  vec2 nx = vec2(0.0);
  vec2 ny = vec2(0.0);
  vec2 n = vnoise2J(p * 1.7 + o + vec2(0.0, -tm * 0.1), 1.7, nx, ny, 1.0)
    + vnoise2J(p * 4.3 + o * 1.3 + vec2(tm * 0.17, tm * 0.05), 4.3, nx, ny, 0.55)
    + vnoise2J(p * 9.0 - o + vec2(-tm * 0.2, 0.0), 9.0, nx, ny, 0.25);
  jx = vec2(1.0, 0.0) + 2.0 * (n * ga.x + amp * nx);
  jy = vec2(0.0, 1.0) + 2.0 * (n * ga.y + amp * ny);
  return p + amp * 2.0 * n;
}

const float SA = 0.75;
float lineSource(vec2 d) {
  float t1 = d.x + SA;
  float t2 = d.x - SA;
  float y = d.y;
  float F1 = t1 * atan(y, t1) + 0.5 * y * log(t1 * t1 + y * y + 1e-9);
  float F2 = t2 * atan(y, t2) + 0.5 * y * log(t2 * t2 + y * y + 1e-9);
  return (F1 - F2) / (TAU * 2.0 * SA);
}

float bundles(float x, float re, float layer) {
  float loose = mix(0.5, 0.05, u_bundle);
  float tight = mix(0.3, mix(0.24, 0.09, u_bundle), smoothstep(0.5, 2.0, re));
  float c = x / CB;
  float i = floor(c);
  float s = i - 2.0;
  float lk = 0.0;
  for (int k = -2; k <= 2; k++) {
    float j = i + float(k);
    float jm = mod(j, NT / CB);
    float h1 = hash11(jm * 3.17 + layer * 11.0 + floor(u_seed));
    float h2 = hash11(jm * 1.91 + layer * 5.0 + 3.0);
    float cc = j + 0.5 + 0.36 * (h1 - 0.5) + 0.14 * sin(tm * 0.35 + h2 * TAU);
    float h3 = hash11(jm * 4.53 + layer * 2.0 + 9.0);
    float w = tight * (0.2 + 1.6 * h2 * h2) * mix(1.0, 0.5 + h3, step(0.5, re));
    float th = tanhF((c - cc) / w);
    s += 0.5 + 0.5 * th;
    lk = max(lk, 1.0 - th * th);
  }
  lockAt = lk * smoothstep(0.4, 1.4, re);
  return loose * x + (1.0 - loose) * CB * s;
}

float psiQ(vec2 q, float layer) {
  vec2 d = (q - ctr) / sc;
  float x = NT * lineSource(d) + UW * (-wdir.y * q.x + wdir.x * q.y);
  return bundles(x, length(d), layer);
}

float psiF(vec2 p, float layer) {
  return psiQ(warpAt(p, layer), layer);
}

float wrapD(float d) {
  return d - NT * floor(d / NT + 0.5);
}

float pickD(float a, float b) {
  return abs(a) < abs(b) ? a : b;
}

vec2 gradF(vec2 p, float layer, float e, float f0) {
  float dxp = wrapD(psiF(p + vec2(e, 0.0), layer) - f0);
  float dxm = wrapD(f0 - psiF(p - vec2(e, 0.0), layer));
  float dyp = wrapD(psiF(p + vec2(0.0, e), layer) - f0);
  float dym = wrapD(f0 - psiF(p - vec2(0.0, e), layer));
  return vec2(pickD(dxp, dxm), pickD(dyp, dym)) / e;
}

vec2 gradT(vec2 p, float e) {
  vec2 jx, jy;
  vec2 q = warpJ(p, 0.0, jx, jy);
  jx *= e;
  jy *= e;
  float f0 = psiQ(q, 0.0);
  float dxp = wrapD(psiQ(q + jx, 0.0) - f0);
  float dxm = wrapD(f0 - psiQ(q - jx, 0.0));
  float dyp = wrapD(psiQ(q + jy, 0.0) - f0);
  float dym = wrapD(f0 - psiQ(q - jy, 0.0));
  return vec2(pickD(dxp, dxm), pickD(dyp, dym)) / e;
}

vec2 gradF0(vec2 p, vec2 o) {
  float e = 0.75 * px;
  float c0 = vnoise(p * 1.3 + o - vec2(0.0, tm * 0.06));
  float cx = vnoise((p + vec2(e, 0.0)) * 1.3 + o - vec2(0.0, tm * 0.06));
  float cy = vnoise((p + vec2(0.0, e)) * 1.3 + o - vec2(0.0, tm * 0.06));
  return 300.0 * vec2(cx - c0, cy - c0) / e;
}

vec2 trace(vec2 P, vec2 dlt, float len) {
  const int K = 24;
  float h = len / float(K);
  float hq = 0.25 * h;
  vec2 p = P;
  float cum = art(p + dlt);
  float found = step(0.25, cum);
  float dist = mix(1e3, 0.0, found);
  float s = 0.0;
  float gain = hq / 0.016;
  for (int k = 0; k < K; k++) {

    if (found > 0.5 && cum >= 0.6) break;
    vec2 g = gradT(p, 0.003);
    vec2 v = vec2(g.y, -g.x);
    vec2 dir = v / max(length(v), 1e-6);

    for (int j = 0; j < 4; j++) {
      p -= dir * hq;

      vec2 q = p + dlt;
      vec2 sd = dir * hq;
      vec2 nr = vec2(-dir.y, dir.x) * 0.013;
      float e = 0.3 * (art(q - sd * 0.25) + art(q + sd * 0.25)) + 0.2 * (art(q + nr) + art(q - nr));
      float c1 = cum + e * gain;
      float xing = step(0.25, c1) * (1.0 - found);
      float sx = s + hq * clamp((0.25 - cum) / max(c1 - cum, 1e-4), 0.0, 1.0);
      dist = mix(dist, sx, xing);
      found = max(found, xing);
      cum = c1;
      s += hq;
    }
  }

  return vec2(dist, smoothstep(0.05, 0.6, cum));
}

float strings(float f, vec2 g, float layer, float dist, float len, float lock) {
  float id = floor(f + 0.5);
  float m8 = mod(id, 8.0);
  float idw = mod(id, NT);
  float h1 = hash11(m8 * 1.37 + layer * 9.1 + floor(u_seed));
  float h2 = hash11(m8 * 2.71 + layer * 4.3 + 17.0);
  float h3 = hash11(idw * 0.0731 + layer * 7.7 + 31.0);
  float w = u_width * (0.6 + 0.9 * h2);
  float spacing = 1.0 / max(length(g), 1e-3) / px;
  float dpx = abs(f - id) * spacing;
  float a = clamp(0.5 + 0.5 * w - dpx, 0.0, 1.0) * min(1.0, 0.6 + 0.5 * w);
  float m2 = mod(id, 2.0);
  float m4 = mod(id, 4.0);
  float keep = 1.0 - m2 * smoothstep(4.0, 2.6, spacing);
  keep *= 1.0 - step(1.5, m4) * step(m4, 2.5) * smoothstep(2.0, 1.3, spacing);
  keep *= 1.0 - step(3.5, m8) * step(m8, 4.5) * smoothstep(1.0, 0.65, spacing);

  a = mix(a * keep, min(1.0, 0.3 * w / spacing), smoothstep(0.5, 0.3, spacing));

  float L = len * (0.1 + 1.4 * h3 * h3) * mix(0.25, 1.6, lock);
  float fade = exp(-dist / L);

  float pulse = 0.75 + 0.25 * sin(dist * 30.0 - tm * 2.5 + h3 * TAU);
  return a * (0.45 + 0.55 * h1) * fade * pulse;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;
  aspect = u_resolution.x / u_resolution.y;
  tm = u_time * u_speed * 1.6;
  vec2 P = vec2(uv.x * aspect, 1.0 - uv.y);
  px = 1.0 / u_resolution.y;

  bgCol = texture2D(u_backdrop, vec2(0.004)).rgb;

  vec3 m = vec3(0.0);
  vec2 mm = vec2(0.0);
  for (int j = 0; j < 14; j++) {
    for (int i = 0; i < 24; i++) {
      vec2 c = (vec2(float(i), float(j)) + 0.5) / vec2(24.0, 14.0) * vec2(aspect, 1.0);
      float a = art(c);
      m += vec3(c * a, a);
      mm += c * c * a;
    }
  }
  float has = step(0.5, m.z);
  ctr = m.xy / max(m.z, 1e-3);
  vec2 sd = sqrt(max(mm / max(m.z, 1e-3) - ctr * ctr, 1e-5));
  ctr = mix(vec2(0.5 * aspect, 0.5), ctr, has);
  sc = 2.0 * mix(vec2(0.25), sd, has);
  sc.y = mix(sc.y, sc.x, 0.25);

  float tot = CB * floor(mix(260.0, 1100.0, u_density) / CB);
  NT = tot;
  UW = tot / (1.1 + 6.0 * (1.0 - u_wind)) * step(0.001, u_wind);
  float ang = radians(u_angle);
  wdir = vec2(sin(ang), -cos(ang));
  tangAmt = 0.0;

  vec2 fq = floor(gl_FragCoord.xy * 0.5) * 2.0 + 0.5;
  vec2 Pq = vec2(fq.x / u_resolution.y, 1.0 - fq.y / u_resolution.y);
  vec2 dlt = P - Pq;
  float len = 0.1 + 0.9 * u_length;
  vec2 tr = trace(Pq, dlt, 1.6 * len);
  float dist = tr.x;
  float lit = tr.y;

  float aP = art(P);
  float core = aP;
  for (int i = 0; i < 8; i++) {
    float a = float(i) * 0.7853982 + 0.39;
    vec2 d = vec2(cos(a), sin(a));
    core += art(P + d * 0.006) + art(P + d * 0.016);
  }
  core /= 17.0;

  float near = max(smoothstep(0.1, 0.6, core), lit * exp(-dist / 0.07));
  float mottle = 0.3 + 1.1 * smoothstep(0.25, 0.8, 0.6 * vnoise(P * 9.0 + vec2(u_seed, tm * 0.08)) + 0.4 * vnoise(P * 26.0 - u_seed));

  tangAmt = u_tangle * near;
  float e = 0.75 * px;
  float f1 = psiF(P, 0.0);
  float lk1 = lockAt;
  vec2 g1 = gradF(P, 0.0, e, f1);
  float f2 = psiF(P, 1.0);
  float lk2 = lockAt;
  vec2 g2 = gradF(P, 1.0, e, f2);

  vec2 dn = (P - ctr) / sc;
  float band = 1.0 - smoothstep(0.2, 0.45, length(vec2(max(abs(dn.x) - SA, 0.0), dn.y)));
  float field = 1.0 - band;

  float halo = 1.0 + 0.9 * near * (1.0 - band);
  float t1 = strings(f1, g1, 0.0, dist, len, lk1) * lit * field * halo;
  float t2 = strings(f2, g2, 1.0, dist, len, lk2) * lit * 0.6 * field * halo;

  float fray = 0.55 * (vnoise(P * 45.0 + u_seed) - 0.5) + 0.3 * (vnoise(P * 14.0 - u_seed) - 0.35);
  float body = smoothstep(0.1, 0.7, core + fray * smoothstep(0.02, 0.35, core + 0.25 * near));
  float strand = 0.0;
  for (int i = 0; i < 3; i++) {
    float fi = float(i);
    vec2 o = vec2(fi * 7.1 + u_seed, fi * 3.3);
    vec2 kk = vnoise2(P * 30.0 + o * 2.0 + vec2(tm * 0.3, -tm * 0.2)) + 0.5 * vnoise2(P * 70.0 - o);
    vec2 pq = P + kk * (0.01 + 0.025 * u_tangle);
    float sf = 300.0 * vnoise(pq * 1.3 + o - vec2(0.0, tm * 0.06));
    vec2 sg = gradF0(pq, o);
    strand = 1.0 - (1.0 - strand) * (1.0 - strings(sf, sg, 3.0 + fi, 0.0, 1.0, 1.0));
  }

  float spill = max(body, 0.5 * band * smoothstep(0.0, 0.5, core));
  float hair = clamp(strand * 1.4, 0.0, 1.0) * spill * mottle;
  float T = 1.0 - (1.0 - t1) * (1.0 - t2) * (1.0 - hair);

  vec3 col = mix(back(P), bgCol, aP);
  col += u_haze * u_glow * core * mottle * 1.2;
  col = mix(col, u_thread, T);

  float gr = hash21(gl_FragCoord.xy * 0.91 + mod(floor(u_time * 12.0), 64.0) * step(0.001, u_speed) * 5.7) - 0.5;
  col += gr * 0.03;

  float edge = min(min(uv.x, 1.0 - uv.x) * aspect, min(uv.y, 1.0 - uv.y));
  float mask = smoothstep(0.0, max(u_feather, 1e-4), edge);
  gl_FragColor = vec4(clamp(col, 0.0, 1.0) * mask, mask);
}
