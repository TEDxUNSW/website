// Flat iris icon (outer ring, curved blades, open centre) drawn as an SVG for use as a
// CSS mask image: opaque where the icon is solid, transparent in the gaps and opening.
// Sizes are fractions of the outer radius.

const BLADES = 6;
/** Inner edge of the outer ring. */
const RING_INNER = 0.88;
/** Outer edge of the blades; the band between this and RING_INNER is a gap. */
const BLADE_OUTER = 0.82;
/** Distance from the centre to the corners of the opening. */
const OPENING = 0.42;
/** Radius of the arc each blade edge follows. Smaller bends more. */
const EDGE_CURVE = 1.2;
/** Width of the lines between blades. */
const GAP = 0.032;
const ROTATION = -0.3;

type Point = [number, number];

// Points along the arc through a and b (bulging away from the centre), from a, through b,
// and on until it reaches stopRadius. Without stopRadius, it ends at b.
function edgePoints(a: Point, b: Point, stopRadius?: number): Point[] {
  const mx = (a[0] + b[0]) / 2;
  const my = (a[1] + b[1]) / 2;
  const half = Math.hypot(b[0] - a[0], b[1] - a[1]) / 2;
  const mLength = Math.hypot(mx, my);
  const toCentre = Math.sqrt(EDGE_CURVE ** 2 - half ** 2);
  const cx = mx - (mx / mLength) * toCentre;
  const cy = my - (my / mLength) * toCentre;

  const start = Math.atan2(a[1] - cy, a[0] - cx);
  let sweep = Math.atan2(b[1] - cy, b[0] - cx) - start;
  sweep = Math.atan2(Math.sin(sweep), Math.cos(sweep));
  const step = sweep / 24;

  const points: Point[] = [];
  for (let i = 0; i < 400; i++) {
    const angle = start + step * i;
    const point: Point = [
      cx + EDGE_CURVE * Math.cos(angle),
      cy + EDGE_CURVE * Math.sin(angle),
    ];
    points.push(point);
    if (stopRadius === undefined ? i === 24 : Math.hypot(...point) > stopRadius)
      break;
  }
  return points;
}

const fmt = (n: number) => n.toFixed(4);

function toPath(points: Point[]) {
  return points
    .map(([x, y], i) => `${i ? "L" : "M"}${fmt(x)} ${fmt(y)}`)
    .join("");
}

function irisSvg() {
  const corners = Array.from({ length: BLADES }, (_, k): Point => {
    const angle = ROTATION + (k / BLADES) * Math.PI * 2;
    return [OPENING * Math.cos(angle), OPENING * Math.sin(angle)];
  });
  const next = (k: number) => corners[(k + 1) % BLADES] ?? [0, 0];

  const opening =
    toPath(
      corners.flatMap((corner, k) => edgePoints(corner, next(k)).slice(0, -1)),
    ) + "Z";
  // Each edge carries on past the next corner to the rim, splitting two blades
  const stopRadius = (RING_INNER + BLADE_OUTER) / 2;
  const dividers = corners
    .map((corner, k) => toPath(edgePoints(corner, next(k), stopRadius)))
    .join("");

  return (
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 2 2">` +
    `<mask id="m">` +
    `<circle r="1" fill="#fff"/>` +
    `<circle r="${fmt(RING_INNER)}" fill="#000"/>` +
    `<circle r="${fmt(BLADE_OUTER)}" fill="#fff"/>` +
    `<path d="${opening}" fill="#000"/>` +
    `<path d="${dividers}" fill="none" stroke="#000" stroke-width="${fmt(GAP)}" stroke-linejoin="round"/>` +
    `</mask>` +
    `<rect x="-1" y="-1" width="2" height="2" mask="url(#m)"/>` +
    `</svg>`
  );
}

/** CSS url() for the iris icon, square, filling its box. */
export const IRIS_MASK = `url("data:image/svg+xml,${encodeURIComponent(irisSvg())}")`;

/**
 * Radius of the largest circle that fits in the opening, as a fraction of the mask's
 * width. It touches the middle of each curved edge.
 */
export const IRIS_OPENING_RADIUS = (() => {
  const half = OPENING * Math.sin(Math.PI / BLADES);
  const bulge = EDGE_CURVE - Math.sqrt(EDGE_CURVE ** 2 - half ** 2);
  return (OPENING * Math.cos(Math.PI / BLADES) + bulge) / 2;
})();
