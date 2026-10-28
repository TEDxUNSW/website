"use client";

import dynamic from "next/dynamic";
import {
  useEffect,
  useRef,
  useSyncExternalStore,
  type CSSProperties,
  type ReactNode,
} from "react";

import Facebook from "@/public/logos/facebook.svg";
import Instagram from "@/public/logos/instagram.svg";
import FilmStrip from "@/components/FilmStrip/FilmStrip";
import Noise from "@/components/Noise/Noise";
import RoughText from "@/components/RoughText/RoughText";

import { IRIS_MASK, IRIS_OPENING_RADIUS } from "./26T3Mask";

const Dither = dynamic(() => import("@/components/Dither/Dither"), {
  ssr: false,
});

/** Photos on the film strips (3:2 landscape crops best). */
const STRIP_PHOTOS = [
  "/26T3/strips/01.jpg",
  "/26T3/strips/02.jpg",
  "/26T3/strips/03.jpg",
  "/26T3/strips/04.jpg",
  "/26T3/strips/05.jpg",
  "/26T3/strips/06.jpg",
  "/26T3/strips/07.jpg",
  "/26T3/strips/08.jpg",
];

const TITLE = "Aperture";

const EVENT_DETAILS: { label: string; value: ReactNode }[] = [
  {
    label: "Date",
    value: (
      <>
        6<sup>th</sup> November, 7pm
      </>
    ),
  },
  { label: "Location", value: "Law Theatre, UNSW" },
];

const TICKETS_HREF =
  "https://www.eventbrite.com.au/e/tedxunsw-aperture-tickets-2003445733119?aff=wb";
// In the LCD font, "!" is a blank cell the width of a letter
const TICKETS_LABEL = "GET!TICKETS";

const SOCIALS = [
  {
    label: "TEDxUNSW on Instagram",
    href: "https://www.instagram.com/tedxunsw/",
    Icon: Instagram,
  },
  {
    label: "TEDxUNSW on Facebook",
    href: "https://www.facebook.com/TEDxUNSW",
    Icon: Facebook,
  },
];

/** Space between the event details and the edge of the opening, as a multiple of their height. */
const APERTURE_PADDING = 0.2;
/** How far below the hero's centre (where the aperture sits) the title and details sit. */
const CONTENT_DROP = "3svh";
/** Radius of the dark circle behind the event details, as a multiple of their reach. */
const HALO_SCALE = 1.45;
/** How dark that circle is, from 0 (invisible) to 1. */
const HALO_OPACITY = 0.7;
/** Glow around the aperture's edges, so it stands out from the strips' black film. */
const APERTURE_GLOW = "drop-shadow(0 0 16px #2727277c)";
/** How much to darken the background and strips behind the aperture, from 0 to 1. */
const BACKGROUND_DIM = 0.05;

/** Saturation of the dithered background; 1 is the full wave colour. */
const BACKGROUND_SATURATION = 0.8;
/** Colour of the brightest dithered waves (a lighter TEDx red). */
const BACKGROUND_WAVES = "#eb0028";

// The dither draws in grey and tints its output with this, rather than tinting and
// desaturating with CSS on top, which Firefox redraws every frame. Same maths as CSS
// saturate().
const BACKGROUND_TINT = ((hex: string, s: number): [number, number, number] => {
  const channel = (i: number) => parseInt(hex.slice(i, i + 2), 16) / 255;
  const r = channel(1);
  const g = channel(3);
  const b = channel(5);
  return [
    (0.213 + 0.787 * s) * r + (0.715 - 0.715 * s) * g + (0.072 - 0.072 * s) * b,
    (0.213 - 0.213 * s) * r + (0.715 + 0.285 * s) * g + (0.072 - 0.072 * s) * b,
    (0.213 - 0.213 * s) * r + (0.715 - 0.715 * s) * g + (0.072 + 0.928 * s) * b,
  ];
})(BACKGROUND_WAVES, BACKGROUND_SATURATION);

const CREAM = "#f4ecdf";
const STAMP = "#ff9638";
/** Cool off-white for the title and details, like fresh print. */
const PRINT = "#dde0e3";

// Parallel strips at one angle, evenly spaced, alternating direction. Each is placed by
// its centre (--cx/--cy). depth 1 is nearest: sharper and bigger. The middle one sits
// furthest back, behind the date.
const STRIP_ANGLE = "-12deg";
const STRIPS = [
  { cy: "16%", depth: 0.85, speed: 7, reverse: false, startFrame: 4 },
  { cy: "50%", depth: 0.45, speed: 10, reverse: true, startFrame: 12 },
  { cy: "84%", depth: 0.85, speed: 8, reverse: false, startFrame: 21 },
];

// The grey copy's photos load small and get scaled up, which softens them for free. A
// blur filter looks much the same, but Firefox redraws it every frame of the scroll.
const SOFT_SIZES = "48px";

function Strips({ soft = false }: { soft?: boolean }) {
  const repeat = Math.ceil(16 / STRIP_PHOTOS.length);
  return STRIPS.map((strip, i) => (
    <div
      key={i}
      className="absolute left-1/2 w-[170%]"
      style={{
        top: strip.cy,
        transform: `translate(-50%, -50%) rotate(${STRIP_ANGLE}) scale(${(0.7 + 0.35 * strip.depth).toFixed(3)})`,
      }}
    >
      <FilmStrip
        photos={STRIP_PHOTOS}
        speed={strip.speed}
        reverse={strip.reverse}
        startFrame={strip.startFrame}
        repeat={repeat}
        edgeCode="TEDxUNSW  26T3  ▸"
        soft={soft}
        imageSizes={soft ? SOFT_SIZES : undefined}
        style={
          {
            "--film-frame-h": "clamp(5.5rem, 15svh, 10rem)",
          } as CSSProperties
        }
      />
    </div>
  ));
}

// Colour shows through a soft circle around the date, fading out between these
// multiples of the opening's radius
const DEVELOP_FROM = 0.45;
const DEVELOP_TO = 2.55;
const developRadius = (k: number) =>
  `calc(var(--aperture-size, 0px) * ${(IRIS_OPENING_RADIUS * k).toFixed(4)})`;
const DEVELOP_MASK = `radial-gradient(circle at var(--aperture-x, 50%) var(--aperture-y, 50%), #000 ${developRadius(DEVELOP_FROM)}, transparent ${developRadius(DEVELOP_TO)})`;

// Set on the hero by the effect below
const APERTURE_POSITION =
  "calc(var(--aperture-x, 0px) - var(--aperture-size, 0px) / 2) calc(var(--aperture-y, 0px) - var(--aperture-size, 0px) / 2)";
const APERTURE_SIZE = "var(--aperture-size, 0px) var(--aperture-size, 0px)";

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

function subscribeReducedMotion(onChange: () => void) {
  const query = window.matchMedia(REDUCED_MOTION);
  query.addEventListener("change", onChange);
  return () => {
    query.removeEventListener("change", onChange);
  };
}

function useReducedMotion() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia(REDUCED_MOTION).matches,
    () => false,
  );
}

export default function Aperture26T3() {
  const heroRef = useRef<HTMLElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  // Centre the aperture in the hero, sized to the event details just below it. The
  // title above is wider and runs across the blades.
  useEffect(() => {
    const hero = heroRef.current;
    const details = detailsRef.current;
    if (!hero || !details) return;

    const update = () => {
      const h = hero.getBoundingClientRect();
      const d = details.getBoundingClientRect();
      const cx = d.left + d.width / 2;
      const cy = h.top + h.height / 2;
      // Sized by the details' own reach, centre to corner, so moving them doesn't
      // resize the aperture
      const reach = Math.hypot(d.width, d.height) / 2;
      const radius = reach + d.height * APERTURE_PADDING;
      hero.style.setProperty("--aperture-x", `${(cx - h.left).toFixed(1)}px`);
      hero.style.setProperty("--aperture-y", `${(cy - h.top).toFixed(1)}px`);
      // The halo stays on the details, which sit a little below the aperture's centre
      hero.style.setProperty(
        "--halo-y",
        `${(d.top + d.height / 2 - h.top).toFixed(1)}px`,
      );
      hero.style.setProperty(
        "--halo-r",
        `${(reach * HALO_SCALE).toFixed(1)}px`,
      );
      hero.style.setProperty(
        "--aperture-size",
        `${(radius / IRIS_OPENING_RADIUS).toFixed(1)}px`,
      );
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(hero);
    observer.observe(details);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    // Fills the screen below the navbar (h-15)
    <section
      ref={heroRef}
      className="relative isolate h-[calc(100svh-3.75rem)] min-h-[580px] w-full overflow-hidden bg-[#0b0203]"
      style={{ color: CREAM }}
    >
      {/* Dithered background */}
      <div className="absolute inset-0">
        <Dither
          waveColor={[1, 1, 1]}
          tint={BACKGROUND_TINT}
          colorNum={4}
          pixelSize={6}
          waveAmplitude={0.25}
          waveFrequency={3}
          waveSpeed={0.01}
          enableMouseInteraction={false}
          disableAnimation={reducedMotion}
        />
      </div>

      {/* Film strips: grey and soft everywhere, with a colour, sharp copy on top that
          only shows through the lens. Both copies start together, so they stay in step.
          One greyscale over all the grey strips is far cheaper in Firefox than one per
          frame. */}
      <div className="absolute inset-0 grayscale">
        <Strips soft />
      </div>
      <div
        className="absolute inset-0"
        style={{ maskImage: DEVELOP_MASK, WebkitMaskImage: DEVELOP_MASK }}
      >
        <Strips />
      </div>

      {/* Dim the background and strips */}
      <div
        className="absolute inset-0 bg-[#000]"
        style={{ opacity: BACKGROUND_DIM }}
      />

      {/* The aperture. The glow sits on a wrapper because a filter on the masked
          element itself would be masked away. */}
      <div className="absolute inset-0" style={{ filter: APERTURE_GLOW }}>
        <div
          className="absolute inset-0 bg-[#000]"
          style={{
            maskImage: IRIS_MASK,
            maskRepeat: "no-repeat",
            maskPosition: APERTURE_POSITION,
            maskSize: APERTURE_SIZE,
            WebkitMaskImage: IRIS_MASK,
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskPosition: APERTURE_POSITION,
            WebkitMaskSize: APERTURE_SIZE,
          }}
        />
      </div>

      {/* Keep the details readable */}
      <div
        className="absolute inset-0"
        style={{
          opacity: HALO_OPACITY,
          background:
            "radial-gradient(circle var(--halo-r, 0px) at var(--aperture-x, 50%) var(--halo-y, 50%), #0b0203e0, #0b0203b3 55%, transparent)",
        }}
      />

      {/* Film grain and vignette over everything */}
      <div className="pointer-events-none absolute inset-0">
        <Noise />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_90%_at_50%_50%,transparent_50%,#00000080_100%)]" />
      </div>

      {/* Title, with the details, tickets and socials below it. The details block is
          what the aperture centres on. */}
      <div
        className="absolute left-1/2 flex w-max -translate-x-1/2 -translate-y-1/2 flex-col items-center"
        style={{ top: `calc(50% + ${CONTENT_DROP})` }}
      >
        <RoughText
          as="h1"
          roughness={0.8}
          className="block uppercase leading-none"
          style={{
            color: PRINT,
            fontSize: "clamp(3rem, min(12.5vw, 19svh), 11rem)",
            letterSpacing: "0.15em",
            // The tracking also trails the last letter, so even out the centring
            paddingLeft: "0.15em",
          }}
        >
          {TITLE}
        </RoughText>

        <div
          ref={detailsRef}
          className="mt-[clamp(0.5rem,1.5svh,1.25rem)] flex flex-col items-center"
        >
          <dl
            className="flex flex-col items-center font-(family-name:--font-crimson-pro) leading-[1.2] tracking-[0.01em]"
            style={{
              color: PRINT,
              fontSize: "clamp(1.15rem, min(3.6svh, 5.2vw), 2.15rem)",
            }}
          >
            {EVENT_DETAILS.map(({ label, value }) => (
              <div key={label} className="flex gap-[0.3em]">
                <dt className="italic opacity-75">{label}:</dt>
                <dd className="[&_sup]:text-[0.6em]">{value}</dd>
              </div>
            ))}
          </dl>

          {/* LCD readout. Unlit segments sit behind each cell, like the camera's. */}
          <a
            href={TICKETS_HREF}
            className="group mt-[clamp(1rem,3svh,2rem)] block rounded-[0.35em] border bg-[#0b0203]/85 px-[0.9em] py-[0.65em] font-(family-name:--font-dseg14) font-bold italic leading-none transition-[border-color,box-shadow] duration-300 hover:border-[#ff9638] focus-visible:border-[#ff9638] focus-visible:outline-none"
            style={{
              color: STAMP,
              borderColor: `${STAMP}59`,
              fontSize: "clamp(0.9rem, min(2.4svh, 3.8vw), 1.45rem)",
              boxShadow: `inset 0 0 1.2em #00000099, 0 0 1.2em ${STAMP}1f`,
            }}
          >
            <span
              aria-hidden
              className="relative block [text-shadow:0_0_0.15em_#ff9638b3,0_0_0.6em_#ff5a1466] group-hover:[text-shadow:0_0_0.2em_#ff9638,0_0_0.9em_#ff5a14aa] group-focus-visible:[text-shadow:0_0_0.2em_#ff9638,0_0_0.9em_#ff5a14aa]"
            >
              <span className="absolute inset-0 opacity-[0.09] [text-shadow:none]">
                {"~".repeat(TICKETS_LABEL.length)}
              </span>
              <span className="relative">{TICKETS_LABEL}</span>
            </span>
            <span className="sr-only">Get tickets</span>
          </a>

          <ul className="mt-[clamp(1rem,2.6svh,1.75rem)] flex items-center gap-[clamp(1.25rem,2.6svh,2rem)]">
            {SOCIALS.map(({ label, href, Icon }) => (
              <li key={href}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="block fill-[#f4ecdf]/70 transition-colors duration-300 hover:fill-[#eb0028] focus-visible:fill-[#eb0028]"
                >
                  <Icon
                    aria-hidden
                    className="size-[clamp(1.6rem,min(3.4svh,5.5vw),2.6rem)]"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
