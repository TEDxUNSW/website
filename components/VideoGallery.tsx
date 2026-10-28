"use client";

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import VideoCard, { type VideoItem } from "./VideoCards";

interface VideoGalleryProps {
  videos: VideoItem[];
}

type YearFilter = "all" | number;

const years = [2026, 2025, 2024];

export default function VideoGallery({ videos }: VideoGalleryProps) {
  const [activeYear, setActiveYear] = useState<YearFilter>("all");

  const [rotation, setRotation] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const cardRefs = useRef(new Map<string, HTMLDivElement>());
  const previousPositions = useRef(new Map<string, DOMRect>());
  const shouldAnimate = useRef(false);
  const gridRef = useRef<HTMLDivElement>(null);
  const outgoingKey = useRef<string | null>(null);

  const filteredVideos = useMemo(() => {
    if (activeYear === "all") {
      return [...videos].sort((a, b) => b.year - a.year);
    }

    return videos.filter((video) => video.year === activeYear);
  }, [videos, activeYear]);

  const rotatedVideos = useMemo(() => {
    if (filteredVideos.length === 0) return [];

    const offset = rotation % filteredVideos.length;

    return [
      ...filteredVideos.slice(offset),
      ...filteredVideos.slice(0, offset),
    ];
  }, [filteredVideos, rotation]);

  // rotate the gallery every 6 seconds.
  useEffect(() => {
    if (
      isPaused ||
      isVideoOpen ||
      filteredVideos.length <= 1 ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const timer = window.setInterval(() => {
      if (document.visibilityState !== "visible") return;

      // Record the current position of each card.
      const positions = new Map<string, DOMRect>();

      cardRefs.current.forEach((element, key) => {
        positions.set(key, element.getBoundingClientRect());
      });

      previousPositions.current = positions;
      shouldAnimate.current = true;

      // Find the first card in the current visual order.
      const firstCard = gridRef.current?.firstElementChild;

      if (firstCard instanceof HTMLElement) {
        const firstVideo = rotatedVideos[0];

        if (firstVideo) {
          outgoingKey.current =
            firstVideo.src ||
            `${firstVideo.year.toString()}-${firstVideo.title}`;
        }

        // Create a temporary visual copy of the outgoing card.
        const ghost = firstCard.cloneNode(true) as HTMLElement;
        const rect = firstCard.getBoundingClientRect();

        ghost.setAttribute("aria-hidden", "true");
        ghost.inert = true;

        Object.assign(ghost.style, {
          position: "fixed",
          left: `${rect.left.toString()}px`,
          top: `${rect.top.toString()}px`,
          width: `${rect.width.toString()}px`,
          height: `${rect.height.toString()}px`,
          margin: "0",
          pointerEvents: "none",
          zIndex: "40",
        });

        document.body.appendChild(ghost);

        // Animate the outgoing copy left and fade it away.
        const exitAnimation = ghost.animate(
          [
            {
              transform: "translateX(0px)",
              opacity: 1,
            },
            {
              transform: "translateX(-90px)",
              opacity: 0,
            },
          ],
          {
            duration: 900,
            easing: "ease-in-out",
            fill: "forwards",
          },
        );

        void exitAnimation.finished
          .catch(() => undefined)
          .then(() => {
            ghost.remove();
          });
      }

      // Move the real cards to their next grid positions.
      setRotation((current) => current + 1);
    }, 6000);

    return () => {
      window.clearInterval(timer);
    };
  }, [isVideoOpen, filteredVideos, rotatedVideos, isPaused]);

  // animate cards from their previous positions to their new ones
  useLayoutEffect(() => {
    if (!shouldAnimate.current) return;

    shouldAnimate.current = false;

    cardRefs.current.forEach((element, key) => {
      const previous = previousPositions.current.get(key);

      if (!previous) return;

      // Special animation for the card that wraps around.
      if (key === outgoingKey.current) {
        element.animate(
          [
            {
              opacity: 0,
              transform: "translateX(30px)",
            },
            {
              opacity: 1,
              transform: "translateX(0px)",
            },
          ],
          {
            duration: 800,
            delay: 250,
            easing: "ease-out",
            fill: "backwards",
          },
        );

        return;
      }

      // Normal FLIP animation for all other cards.
      const next = element.getBoundingClientRect();

      const deltaX = previous.left - next.left;
      const deltaY = previous.top - next.top;

      if (deltaX === 0 && deltaY === 0) return;

      element.animate(
        [
          {
            transform: `translate(${deltaX.toString()}px, ${deltaY.toString()}px)`,
          },
          {
            transform: "translate(0px, 0px)",
          },
        ],
        {
          duration: 1100,
          easing: "cubic-bezier(0.22, 1, 0.36, 1)",
        },
      );
    });

    outgoingKey.current = null;
  }, [rotatedVideos]);

  const tabs: { label: string; value: YearFilter }[] = [
    { label: "All Talks", value: "all" },
    ...years.map((year) => ({
      label: year.toString(),
      value: year,
    })),
  ];

  return (
    <section className="w-full">
      {/* year nav */}
      <div className="mb-10 flex items-center justify-between gap-4 border-b border-white/10">
        <div
          className="flex gap-8 overflow-x-auto"
          role="group"
          aria-label="Filter talks by year"
        >
          {tabs.map((tab) => {
            const isActive = tab.value === activeYear;

            return (
              <button
                key={tab.value}
                type="button"
                onClick={() => {
                  setActiveYear(tab.value);
                  setRotation(0);
                  shouldAnimate.current = false;
                  previousPositions.current.clear();
                  outgoingKey.current = null;
                }}
                aria-pressed={isActive}
                className={`group relative shrink-0 pb-5 text-lg font-medium transition-colors duration-300 ${
                  isActive ? "text-white" : "text-white/40 hover:text-white/80"
                }`}
              >
                {tab.label}

                {/* red underline */}
                <span
                  className={`absolute bottom-0 left-0 h-[3px] w-full origin-center rounded-full bg-red-500 transition-transform duration-300 ease-out ${
                    isActive ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </button>
            );
          })}
        </div>

        <p className="hidden shrink-0 pb-5 text-sm text-white/40 sm:block">
          {filteredVideos.length} talks
        </p>
      </div>

      {/* gallery heading */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
          {activeYear === "all"
            ? "All Talks"
            : `${activeYear.toString()} Talks`}
        </h3>

        <p className="mt-2 text-sm text-white/40">
          {activeYear === "all"
            ? "Explore inspiring talks from across the years."
            : `Explore ideas and perspectives from ${activeYear.toString()}.`}
        </p>
      </div>

      {/* rotating video grid */}
      {filteredVideos.length > 0 ? (
        <div
          ref={gridRef}
          onMouseEnter={() => {
            setIsPaused(true);
          }}
          onMouseLeave={() => {
            setIsPaused(false);
          }}
          onFocusCapture={() => {
            setIsPaused(true);
          }}
          onBlurCapture={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget)) {
              setIsPaused(false);
            }
          }}
          className="grid grid-cols-1 gap-7 sm:grid-cols-2 xl:grid-cols-3"
        >
          {rotatedVideos.map((video) => {
            const videoKey =
              video.src || `${video.year.toString()}-${video.title}`;

            return (
              <div
                key={videoKey}
                ref={(element) => {
                  if (element) {
                    cardRefs.current.set(videoKey, element);
                  } else {
                    cardRefs.current.delete(videoKey);
                  }
                }}
                className="min-w-0"
              >
                <VideoCard {...video} onModalChange={setIsVideoOpen} />
              </div>
            );
          })}
        </div>
      ) : (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-12 text-center">
          <p className="text-lg font-medium text-white/80">
            No talks available yet
          </p>

          <p className="mt-2 text-sm text-white/40">
            Talks from {activeYear} will appear here once added.
          </p>
        </div>
      )}
    </section>
  );
}
