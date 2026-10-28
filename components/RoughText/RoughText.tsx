"use client";

// Worn, letterpress-style edges for display type.
// Two noise passes push the glyph outlines around: a slow one for a gentle wobble,
// a fine one for small nicks. A blur + alpha threshold then re-sharpens the result,
// which also softly rounds the corners. The fill stays solid.
//
// Scales with the rendered font size, so the wear looks the same at any size.
// Not for body copy: the threshold step eats thin strokes at small sizes.

import clsx from "clsx";
import {
  useEffect,
  useId,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

/** Font size, in px, the filter values below were tuned at. */
const TUNED_FONT_SIZE = 150;

interface RoughTextProps {
  children: ReactNode;
  /** Element to render, e.g. "h1". */
  as?: "span" | "div" | "p" | "h1" | "h2" | "h3";
  /** Multiplier on edge wear; 0 turns the effect off. */
  roughness?: number;
  className?: string;
  style?: CSSProperties;
}

export default function RoughText({
  children,
  as: Tag = "span",
  roughness = 1,
  className,
  style,
}: RoughTextProps) {
  const filterId = `rough-text-${useId().replace(/:/g, "")}`;
  const [text, setText] = useState<HTMLElement | null>(null);
  const [fontSize, setFontSize] = useState(TUNED_FONT_SIZE);

  // Follow fluid sizes like clamp() and vw as the viewport changes
  useEffect(() => {
    if (!text) return;

    const update = () => {
      setFontSize(parseFloat(getComputedStyle(text).fontSize));
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(text);
    return () => {
      observer.disconnect();
    };
  }, [text]);

  const wear = (roughness * fontSize) / TUNED_FONT_SIZE;
  const enabled = wear > 0;

  return (
    <>
      {/* Not display:none, or some browsers drop the filter */}
      {enabled && (
        <svg aria-hidden width="0" height="0" className="absolute">
          <filter id={filterId} x="-5%" y="-10%" width="110%" height="120%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency={0.03 / wear}
              numOctaves={2}
              seed={7}
              result="wobbleNoise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="wobbleNoise"
              scale={3 * wear}
              xChannelSelector="R"
              yChannelSelector="G"
              result="wobbled"
            />
            <feTurbulence
              type="fractalNoise"
              baseFrequency={0.3 / wear}
              numOctaves={2}
              seed={3}
              result="nickNoise"
            />
            <feDisplacementMap
              in="wobbled"
              in2="nickNoise"
              scale={3.5 * wear}
              xChannelSelector="R"
              yChannelSelector="G"
              result="nicked"
            />
            <feGaussianBlur in="nicked" stdDeviation={1.4 * wear} />
            <feComponentTransfer>
              <feFuncA type="linear" slope={10} intercept={-4.5} />
            </feComponentTransfer>
          </filter>
        </svg>
      )}
      <Tag
        ref={setText}
        className={clsx("font-(family-name:--font-rubik) font-bold", className)}
        style={enabled ? { ...style, filter: `url(#${filterId})` } : style}
      >
        {children}
      </Tag>
    </>
  );
}
