"use client";

import { useMemo, useState } from "react";
import VideoCard, { VideoItem } from "./VideoCards";

type VideoGalleryProps = {
  videos: VideoItem[];
};

export default function VideoGallery({ videos }: VideoGalleryProps) {
  const years = useMemo(() => {
    return Array.from(new Set(videos.map((video) => video.year))).sort(
      (a, b) => b - a,
    );
  }, [videos]);

  const [activeYear, setActiveYear] = useState(years[0]);

  const filteredVideos = videos.filter((video) => video.year === activeYear);

  return (
    <section className="w-full">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-neutral-950 shadow-2xl">
        <div className="flex gap-1 overflow-x-auto border-b border-white/10 bg-neutral-900 px-3 pt-3">
          {years.map((year) => {
            const isActive = year === activeYear;

            return (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className={`rounded-t-2xl px-5 py-3 text-sm font-medium transition-all ${
                  isActive
                    ? "bg-black text-white"
                    : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
                }`}
              >
                {year}
              </button>
            );
          })}
        </div>

        <div className="bg-black p-6 md:p-8">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold">{activeYear} Talks</h2>
            <p className="text-sm text-white/50">
              {filteredVideos.length} videos
            </p>
          </div>

          {filteredVideos.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filteredVideos.map((video) => (
                <VideoCard
                  key={video.src}
                  src={video.src}
                  titleImg={video.titleImg}
                  title={video.title}
                  year={video.year}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-white/10 bg-white/5 p-10 text-center text-white/60">
              No videos available for {activeYear}.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
