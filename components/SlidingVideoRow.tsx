"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import VideoCard, { type VideoItem } from "./VideoCards";

interface SlidingVideoRowProps {
  videos: VideoItem[];
  incomingVideo: VideoItem;
  columns: number;
  sliding: boolean;
  onSlideComplete?: () => void;
  onModalChange: (open: boolean) => void;
}

const GAP = 28;
const DURATION = 1.1;

export default function SlidingVideoRow({
  videos,
  incomingVideo,
  columns,
  sliding,
  onSlideComplete,
  onModalChange,
}: SlidingVideoRowProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  // measure the available width
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new ResizeObserver(() => {
      setContainerWidth(container.clientWidth);
    });

    observer.observe(container);
    setContainerWidth(container.clientWidth);

    return () => {
      observer.disconnect();
    };
  }, []);

  const cardWidth =
    containerWidth > 0 ? (containerWidth - GAP * (columns - 1)) / columns : 0;

  const step = cardWidth + GAP;

  // Append one extra card, initially outside the viewport.
  const trackVideos = [...videos, incomingVideo];

  return (
    <div ref={containerRef} className="w-full overflow-hidden py-4">
      {cardWidth > 0 && (
        <motion.div
          initial={false}
          className="flex"
          style={{ gap: GAP }}
          animate={{ x: sliding ? -step : 0 }}
          transition={{
            duration: sliding ? DURATION : 0,
            ease: [0.22, 1, 0.36, 1],
          }}
          onAnimationComplete={() => {
            if (sliding) {
              onSlideComplete?.();
            }
          }}
        >
          {trackVideos.map((video, index) => {
            const videoKey =
              video.src || `${video.year.toString()}-${video.title}`;

            return (
              <div
                key={`${videoKey}-${index.toString()}`}
                className="min-w-0 shrink-0"
                style={{ width: cardWidth }}
              >
                <VideoCard {...video} onModalChange={onModalChange} />
              </div>
            );
          })}
        </motion.div>
      )}
    </div>
  );
}
