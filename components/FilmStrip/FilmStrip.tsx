import Image from "next/image";
import clsx from "clsx";
import type { CSSProperties } from "react";

import "./FilmStrip.css";

interface FilmStripProps {
  photos: string[];
  /** Seconds for one frame to scroll past. */
  speed?: number;
  reverse?: boolean;
  /** Number printed on the first frame's edge. */
  startFrame?: number;
  /**
   * How many times to repeat the photos in one loop. Raise it if the loop is narrower
   * than the strip and a gap shows.
   */
  repeat?: number;
  /** Text printed along the top edge of every other frame. */
  edgeCode?: string;
  className?: string;
  /** Classes for each frame (photo and rails), which scroll with the strip. */
  frameClassName?: string;
  imageClassName?: string;
  /**
   * Out of focus: soft sprocket holes and faint edge printing. Pair with a small
   * imageSizes for soft photos.
   */
  soft?: boolean;
  /**
   * Width the photos load at. Make it smaller than the frame to soften them: a small
   * photo scaled up looks out of focus, without the cost of a blur filter.
   */
  imageSizes?: string;
  style?: CSSProperties;
}

// Endlessly scrolling 35mm strip. Set the frame height with the --film-frame-h CSS
// variable; everything else scales from it.
export default function FilmStrip({
  photos,
  speed = 6,
  reverse = false,
  startFrame = 1,
  repeat = 2,
  edgeCode,
  className,
  frameClassName,
  imageClassName,
  soft = false,
  imageSizes = "320px",
  style,
}: FilmStripProps) {
  const loop = Array.from({ length: repeat }, () => photos).flat();
  // Two copies of the loop, so shifting by half the track is seamless
  const frames = [...loop, ...loop];

  return (
    <div
      aria-hidden
      className={clsx(
        "film-strip",
        reverse && "film-strip-reverse",
        soft && "film-strip-soft",
        className,
      )}
      style={
        {
          "--film-duration": `${String(loop.length * speed)}s`,
          ...style,
        } as CSSProperties
      }
    >
      <div className="film-strip-track">
        {frames.map((src, i) => {
          const n = startFrame + (i % loop.length);
          return (
            <div key={i} className={clsx("film-strip-frame", frameClassName)}>
              <div className="film-strip-rail">
                {edgeCode && n % 2 === 0 && (
                  <span className="film-strip-mark" style={{ left: "18%" }}>
                    {edgeCode}
                  </span>
                )}
              </div>
              <div className="film-strip-image">
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes={imageSizes}
                  loading="eager"
                  draggable={false}
                  className={clsx("object-cover", imageClassName)}
                />
              </div>
              <div className="film-strip-rail film-strip-rail-bottom">
                <span className="film-strip-mark" style={{ left: "6%" }}>
                  {n}
                </span>
                <span className="film-strip-mark" style={{ left: "52%" }}>
                  ▸ {n}A
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
