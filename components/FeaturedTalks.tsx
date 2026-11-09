"use client";

import { useEffect, useMemo, useState, useRef } from "react";
import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
} from "motion/react";
import VideoCard, { type VideoItem } from "./VideoCards";

interface FeaturedTalksProps {
  videos: VideoItem[];
  limit?: number;
}

const GAP = 12;
const SPEED = 35;

export default function FeaturedTalks({
  videos,
  limit = 6,
}: FeaturedTalksProps) {
  const featuredVideos = useMemo(() => videos.slice(0, limit), [videos, limit]);

  const containerRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<ReturnType<typeof animate> | null>(null);

  const x = useMotionValue(0);
  const reducedMotion = useReducedMotion();

  const [containerWidth, setContainerWidth] = useState(0);
  const [columns, setColumns] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Measure width and determine responsive columns.
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const desktopQuery = window.matchMedia("(min-width: 1024px)");

    const updateSize = () => {
      setContainerWidth(container.clientWidth);
      setColumns(desktopQuery.matches ? 3 : 2);
    };

    const observer = new ResizeObserver(updateSize);
    observer.observe(container);

    desktopQuery.addEventListener("change", updateSize);
    updateSize();

    return () => {
      observer.disconnect();
      desktopQuery.removeEventListener("change", updateSize);
    };
  }, []);

  // Pause scrolling when the section is outside the viewport.
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry?.isIntersecting ?? false);
      },
      { threshold: 0.1 },
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, []);

  const visibleColumns = Math.min(columns, featuredVideos.length);

  const cardWidth =
    containerWidth > 0 && visibleColumns > 0
      ? (containerWidth - GAP * (visibleColumns - 1)) / visibleColumns
      : 0;

  // Distance needed to scroll exactly one complete set.
  const loopDistance = featuredVideos.length * (cardWidth + GAP);

  const shouldScroll =
    featuredVideos.length > visibleColumns && !reducedMotion && cardWidth > 0;

  // Create one continuously repeating linear animation.
  useEffect(() => {
    if (!shouldScroll || loopDistance <= 0) {
      x.set(0);
      return;
    }

    const controls = animate(x, [0, -loopDistance], {
      duration: loopDistance / SPEED,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
    });

    controlsRef.current = controls;

    return () => {
      controls.stop();
      controlsRef.current = null;
    };
  }, [x, loopDistance, shouldScroll]);

  // Pause and resume without losing scroll position.
  useEffect(() => {
    const controls = controlsRef.current;
    if (!controls) return;

    if (isPaused || isVideoOpen || !isVisible) {
      controls.pause();
    } else {
      controls.play();
    }
  }, [isPaused, isVideoOpen, isVisible, loopDistance, shouldScroll]);

  const renderVideo = (video: VideoItem, index: number) => (
    <div
      key={`${video.year.toString()}-${video.title}-${index.toString()}`}
      className="min-w-0 shrink-0"
      style={{ width: cardWidth }}
    >
      <VideoCard {...video} compact onModalChange={setIsVideoOpen} />
    </div>
  );

  return (
    <section
      className="w-full"
      aria-label="Featured TEDxUNSW talks"
      onMouseEnter={() => {
        setIsPaused(true);
      }}
      onMouseLeave={() => {
        setIsPaused(false);
      }}
      onFocusCapture={() => {
        setIsPaused(true);
      }}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsPaused(false);
        }
      }}
    >
      <div ref={containerRef} className="w-full overflow-hidden py-3">
        {cardWidth > 0 && (
          <motion.div className="flex w-max" style={{ x, gap: GAP }}>
            {/* Original set of videos */}
            <div className="flex shrink-0" style={{ gap: GAP }}>
              {featuredVideos.map(renderVideo)}
            </div>

            {/* Identical set for seamless looping */}
            {shouldScroll && (
              <div className="flex shrink-0" style={{ gap: GAP }}>
                {featuredVideos.map(renderVideo)}
              </div>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}
