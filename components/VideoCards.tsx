"use client";

import Image from "next/image";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Fragment, useRef, useState } from "react";

export interface VideoItem {
  src: string;
  titleImg: string;
  title: string;
  speaker?: string; /*currently optional due to sample talks*/
  event: string;
  year: number;
}

type VideoCardProps = VideoItem & {
  onModalChange?: (isOpen: boolean) => void;
  compact?: boolean;
};

export default function VideoCard({
  src,
  titleImg,
  title,
  speaker,
  event,
  year,
  onModalChange,
  compact = false,
}: VideoCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const srcImg = "/videoComponentImages/" + titleImg;

  const fullTitle = [title, speaker, event].filter(Boolean).join(" | ");

  function handleMouseMove(e: React.MouseEvent<HTMLButtonElement>) {
    const card = cardRef.current;
    if (!card) return;

    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 4;
    const rotateX = ((centerY - y) / centerY) * 4;

    card.style.transform = `perspective(1000px) rotateX(${rotateX.toString()}deg) rotateY(${rotateY.toString()}deg) translateY(-5px)`;
  }

  function handleMouseLeave() {
    if (cardRef.current) {
      cardRef.current.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    }
  }

  function setModalOpen(open: boolean) {
    setIsOpen(open);
    onModalChange?.(open);
  }

  return (
    <>
      {/* video thumbnail */}
      <button
        type="button"
        disabled={!src}
        onClick={() => {
          setModalOpen(true);
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group block w-full text-left disabled:cursor-not-allowed"
        aria-label={`Watch ${fullTitle}`}
      >
        <div
          ref={cardRef}
          className="overflow-hidden rounded-xl border border-white/10 bg-neutral-900 shadow-lg transition-[transform,border-color,box-shadow] duration-300 ease-out group-hover:border-red-500/40 group-hover:shadow-[0_15px_45px_rgba(220,38,38,0.12)] motion-reduce:transform-none"
        >
          {/* thumbnail image */}
          <div
            className={`relative w-full overflow-hidden ${
              compact ? "aspect-[2/1]" : "aspect-video"
            }`}
          >
            <Image
              src={srcImg}
              alt={`Preview for ${fullTitle}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-110 motion-reduce:transform-none"
            />

            {/* dark overlay */}
            <div className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/40" />

            {/* animated play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className={`flex translate-y-3 items-center justify-center rounded-full border border-white/20 bg-red-600/90 opacity-0 shadow-xl backdrop-blur-sm transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:scale-110 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 ${
                  compact ? "h-10 w-10" : "h-16 w-16"
                }`}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`ml-1 text-white ${
                    compact ? "h-5 w-5" : "h-7 w-7"
                  }`}
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>

            {/* year and event tags */}
            <div
              className={`absolute flex flex-wrap items-center ${
                compact
                  ? "bottom-2 left-2 right-2 gap-1"
                  : "bottom-3 left-3 right-3 gap-2"
              }`}
            >
              <span
                className={`rounded-md border border-white/20 bg-black/70 font-medium text-white/90 backdrop-blur-sm ${
                  compact ? "px-1.5 py-0.5 text-[10px]" : "px-2.5 py-1 text-xs"
                }`}
              >
                {year}
              </span>

              <span
                className={`rounded-md border border-red-500/30 bg-red-600/85 font-medium text-white shadow-sm backdrop-blur-sm ${
                  compact ? "px-1.5 py-0.5 text-[10px]" : "px-2.5 py-1 text-xs"
                }`}
              >
                {event}
              </span>
            </div>
          </div>

          {/* card title */}
          <div className={compact ? "p-3" : "p-5"}>
            <h4
              className={`line-clamp-2 font-semibold text-white/90 transition-colors duration-300 group-hover:text-white ${
                compact
                  ? "min-h-7 text-sm leading-4"
                  : "min-h-9 text-base leading-6"
              }`}
            >
              {title}
            </h4>

            <div className="mt-2 flex items-center gap-2">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-white/30">
                By
              </span>
              <p
                className={`truncate text-white/60 transition-colors group-hover:text-white/80 ${
                  compact ? "text-xs" : "text-sm"
                }`}
              >
                {speaker}
              </p>
            </div>
          </div>
        </div>
      </button>

      {/* video popup */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={setModalOpen}>
          {/* background overlay */}
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/85 backdrop-blur-md" />
          </TransitionChild>

          {/* player container */}
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95 translate-y-5"
                enterTo="opacity-100 scale-100 translate-y-0"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100 translate-y-0"
                leaveTo="opacity-0 scale-95 translate-y-5"
              >
                <DialogPanel className="w-full max-w-5xl transform overflow-hidden rounded-2xl border border-white/10 bg-neutral-950 shadow-2xl motion-reduce:transform-none">
                  {/* popup heading */}
                  <div className="flex items-start justify-between gap-4 border-b border-white/10 px-5 py-4">
                    <h2 className="text-sm font-semibold leading-6 text-white md:text-base">
                      {fullTitle}
                    </h2>

                    <button
                      type="button"
                      onClick={() => {
                        setModalOpen(false);
                      }}
                      aria-label="Close video"
                      className="shrink-0 rounded-lg p-2 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        className="h-5 w-5"
                        aria-hidden="true"
                      >
                        <path d="M18 6 6 18M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  {/* YouTube video */}
                  <div className="aspect-video w-full bg-black">
                    {isOpen && (
                      <iframe
                        src={src}
                        title={fullTitle}
                        className="h-full w-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    )}
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
