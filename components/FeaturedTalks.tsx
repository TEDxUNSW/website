"use client";

import { useEffect, useMemo, useState, useRef } from "react";

import VideoCard, { type VideoItem } from "./VideoCards";

interface FeaturedTalksProps {
  videos: VideoItem[];
  limit?: number;
}

const ROTATION_INTERVAL = 6000;
const TRANSITION_DURATION = 1000;

export default function FeaturedTalks({
  videos,
  limit = 6,
}: FeaturedTalksProps) {
  const featuredVideos = useMemo(() => videos.slice(0, limit), [videos, limit]);

  const [rotation, setRotation] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isSliding, setIsSliding] = useState(false);
  const [slideDistance, setSlideDistance] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  const trackRef = useRef<HTMLDivElement>(null);
  const slidingRef = useRef(false);
  const hoveredRef = useRef(false);
  const focusedRef = useRef(false);

  // Keep the number of visible cards responsive.
  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    function updateLayout() {
      setVisibleCount(desktopQuery.matches ? 3 : 2);
      setReducedMotion(motionQuery.matches);
    }

    updateLayout();

    desktopQuery.addEventListener("change", updateLayout);
    motionQuery.addEventListener("change", updateLayout);

    return () => {
      desktopQuery.removeEventListener("change", updateLayout);
      motionQuery.removeEventListener("change", updateLayout);
    };
  }, []);

  // Include one extra card for the slide-in animation.
  const visibleVideos = useMemo(() => {
    if (featuredVideos.length === 0) return [];

    const count = Math.min(visibleCount + 1, featuredVideos.length);

    return Array.from({ length: count }, (_, index) => {
      const videoIndex = (rotation + index) % featuredVideos.length;
      return featuredVideos[videoIndex];
    }).filter((video): video is VideoItem => video !== undefined);
  }, [featuredVideos, rotation, visibleCount]);

  function advance() {
    if (slidingRef.current || featuredVideos.length <= visibleCount) return;

    if (reducedMotion) {
      setRotation((current) => current + 1);
      return;
    }

    const track = trackRef.current;
    if (!track || track.children.length < 2) return;

    const first = track.children[0] as HTMLElement;
    const second = track.children[1] as HTMLElement;

    // Distance between the first two card positions.
    const distance = second.offsetLeft - first.offsetLeft;

    slidingRef.current = true;
    setSlideDistance(distance);
    setIsSliding(true);
  }

  function finishSlide() {
    if (!slidingRef.current) return;

    slidingRef.current = false;

    // Advance the data and reset the track together.
    setRotation((current) => current + 1);
    setIsSliding(false);
    setSlideDistance(0);
  }

  // Automatically advance every six seconds.
  useEffect(() => {
    if (
      isPaused ||
      isVideoOpen ||
      isSliding ||
      featuredVideos.length <= visibleCount
    ) {
      return;
    }

    const timer = window.setInterval(() => {
      if (document.visibilityState === "visible") {
        advance();
      }
    }, ROTATION_INTERVAL);

    return () => {
      window.clearInterval(timer);
    };
  }, [
    featuredVideos.length,
    visibleCount,
    isPaused,
    isVideoOpen,
    isSliding,
    reducedMotion,
  ]);

  // Stop an active transition safely when the layout changes.
  useEffect(() => {
    if (slidingRef.current) {
      finishSlide();
    }
  }, [visibleCount, reducedMotion]);

  function updatePause() {
    setIsPaused(hoveredRef.current || focusedRef.current);
  }

  return (
    <section
      className="w-full"
      aria-label="Featured talks"
      onMouseEnter={() => {
        hoveredRef.current = true;
        updatePause();
      }}
      onMouseLeave={() => {
        hoveredRef.current = false;
        updatePause();
      }}
      onFocusCapture={() => {
        focusedRef.current = true;
        updatePause();
      }}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          focusedRef.current = false;
          updatePause();
        }
      }}
    >
      {/* Clip the extra card outside the viewport */}
      <div className="overflow-hidden pb-2">
        <div
          ref={trackRef}
          onTransitionEnd={(event) => {
            if (
              event.target === event.currentTarget &&
              event.propertyName === "transform"
            ) {
              finishSlide();
            }
          }}
          className="flex gap-3"
          style={{
            transform: isSliding
              ? `translate3d(-${slideDistance.toString()}px, 0, 0)`
              : "translate3d(0, 0, 0)",
            transition: isSliding
              ? `transform ${TRANSITION_DURATION.toString()}ms cubic-bezier(0.22, 1, 0.36, 1)`
              : "none",
          }}
        >
          {visibleVideos.map((video, index) => {
            const videoKey =
              video.src || `${video.year.toString()}-${video.title}`;

            return (
              <div
                key={videoKey}
                className="min-w-0 shrink-0 basis-[calc((100%-0.75rem)/2)] lg:basis-[calc((100%-1.5rem)/3)]"
                style={{
                  opacity: isSliding && index === 0 ? 0 : 1,
                  transition:
                    isSliding && index === 0
                      ? "opacity 700ms ease-out"
                      : "none",
                }}
              >
                <VideoCard
                  {...video}
                  compact
                  onModalChange={(open) => {
                    setIsVideoOpen(open);
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
