"use client";

import Image from "next/image";
import { Dialog, DialogPanel } from "@headlessui/react";
import { useState } from "react";

export type VideoItem = {
  src: string;
  titleImg: string;
  title: string;
};

type VideoCardProps = VideoItem;

export default function VideoCard({ src, titleImg, title }: VideoCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [transform, setTransform] = useState(
    "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)",
  );

  const srcImg = "/videoComponentImages/" + titleImg;

  function handleMouseMove(e: React.MouseEvent<HTMLButtonElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 8;
    const rotateX = ((centerY - y) / centerY) * 8;

    setTransform(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`,
    );
  }

  function handleMouseLeave() {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)");
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative w-full text-left transition-transform duration-200"
      >
        <div
          className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg transition-all duration-200"
          style={{ transform }}
        >
          <div className="relative aspect-video w-full overflow-hidden">
            <Image
              src={srcImg}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              alt={`Preview for ${title}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="line-clamp-2 text-sm font-medium text-white md:text-base">
                {title}
              </p>
            </div>
          </div>
        </div>
      </button>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" />

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <DialogPanel className="w-full max-w-5xl overflow-hidden rounded-2xl bg-black shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <h2 className="text-sm font-semibold text-white md:text-base">
                {title}
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-md px-3 py-1 text-sm text-white/80 hover:bg-white/10 hover:text-white"
              >
                Close
              </button>
            </div>

            <div className="aspect-video w-full">
              <iframe
                src={src}
                className="h-full w-full"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
