"use client";

import Image from "next/image";

export type src = {
  src: string;
  titleImg: string;
  title: string;
};

import { Dialog, DialogPanel } from "@headlessui/react";
import { useState } from "react";

export default function VideoBlock({ src, titleImg, title }: src) {
  const [isOpen, setIsOpen] = useState(false);

  const srcImg: string = "/videoComponentImages/" + titleImg;

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="relative">
        <div className="w-100 max-[95rem]:w-90 max-[85rem]:w-70  max-[75rem]:w-50">
          <Image
            src={srcImg}
            width={3000}
            height={3000}
            style={{ width: "100%", height: "auto" }}
            alt="Youtube Preview for video"
          />
          <div className="flex bg-black/60 font-light text-sm max-[90rem]:text-xs absolute bottom-0 text-start">
            <div className="w-2"></div>
            <div>
              <p className="line-clamp-2">{title}</p>
            </div>
          </div>
        </div>
      </button>
      <div className="w-15 max-[100rem]:w-10 max-[80rem]:w-5" />

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-full items-center justify-center">
          <DialogPanel
            className="w-full h-full border content-center bg-black/90 p-12"
            onClick={() => setIsOpen(false)}
          >
            <div className="flex justify-center">
              <iframe src={src} id="dialogue" allow="autoplay" />
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
