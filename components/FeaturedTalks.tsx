"use client";

import { useEffect, useMemo, useState } from "react";

import VideoCard, { type VideoItem } from "./VideoCards";

interface FeaturedTalksProps {
  videos: VideoItem[];
  limit?: number;
}

export default function FeaturedTalks({
  videos,
  limit = 6,
}: FeaturedTalksProps) {
  // Videos eligible to appear in the mini gallery
  const featuredVideos = useMemo(() => videos.slice(0, limit), [videos, limit]);

  const [rotation, setRotation] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Determine number of visible cards
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    function updateVisibleCount() {
      setVisibleCount(mediaQuery.matches ? 3 : 2);
    }

    updateVisibleCount();

    mediaQuery.addEventListener("change", updateVisibleCount);

    return () => {
      mediaQuery.removeEventListener("change", updateVisibleCount);
    };
  }, []);

  // Determine which videos are currently visible
  const visibleVideos = useMemo(() => {
    if (featuredVideos.length === 0) return [];

    const count = Math.min(visibleCount, featuredVideos.length);

    return Array.from({ length: count }, (_, index) => {
      const videoIndex = (rotation + index) % featuredVideos.length;

      return featuredVideos[videoIndex];
    }).filter((video): video is VideoItem => video !== undefined);
  }, [featuredVideos, rotation, visibleCount]);

  // Automatically advance the gallery
  useEffect(() => {
    if (
      isPaused ||
      isVideoOpen ||
      featuredVideos.length <= visibleCount ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const timer = window.setInterval(() => {
      if (document.visibilityState === "visible") {
        setRotation((current) => current + 1);
      }
    }, 6000);

    return () => {
      window.clearInterval(timer);
    };
  }, [featuredVideos.length, visibleCount, isPaused, isVideoOpen]);

  return (
    <section
      className="w-full"
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
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">
        {visibleVideos.map((video) => {
          const videoKey =
            video.src || `${video.year.toString()}-${video.title}`;

          return (
            <div key={videoKey} className="min-w-0">
              <VideoCard {...video} compact onModalChange={setIsVideoOpen} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
