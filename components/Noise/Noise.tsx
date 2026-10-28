"use client";

// Film grain: one small random tile, drawn once and repeated at native resolution.
// Instead of redrawing, the tile jumps to a new offset a few times a second (pure CSS),
// which keeps the grain alive without strobing.

import clsx from "clsx";
import { useEffect, useRef } from "react";

import "./Noise.css";

interface NoiseProps {
  /** Size of the grain tile in px. */
  tileSize?: number;
  /** 0-1 */
  opacity?: number;
  className?: string;
}

export default function Noise({
  tileSize = 160,
  opacity = 0.05,
  className,
}: NoiseProps) {
  const grainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = grainRef.current;
    if (!el) return;

    const canvas = document.createElement("canvas");
    canvas.width = tileSize;
    canvas.height = tileSize;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const imageData = ctx.createImageData(tileSize, tileSize);
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
      const value = Math.random() * 255;
      data[i] = value;
      data[i + 1] = value;
      data[i + 2] = value;
      data[i + 3] = 255;
    }
    ctx.putImageData(imageData, 0, 0);
    el.style.backgroundImage = `url(${canvas.toDataURL()})`;
  }, [tileSize]);

  return (
    <div
      ref={grainRef}
      aria-hidden
      className={clsx("noise-grain", className)}
      style={{ opacity }}
    />
  );
}
