"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import Facebook from "../../public/logos/facebook.svg";

const Dither = dynamic(() => import("../Dither/Dither"), { ssr: false });

export default function SaveTheDate25T3() {
  return (
    <div className="font-brixton relative w-full h-[700px]">
      <div className="absolute inset-0 pointer-events-none">
        <Image src="/hero-frame.png" alt="Background" fill objectFit="cover" />
        <Dither
          waveColor={[0.85, 0.75, 0.75]}
          disableAnimation={false}
          enableMouseInteraction={false}
          mouseRadius={1}
          colorNum={5}
          waveAmplitude={0.1}
          waveFrequency={4}
          waveSpeed={0.03}
        />
      </div>
      <div className="h-full w-full relative flex flex-col items-center justify-center px-6 text-center">
        <h1
          className="text-white text-6xl md:text-9xl"
          style={{ textShadow: "4px 4px 0 #eb0028" }}
        >
          SAVE THE DATE
        </h1>
        <h1
          className="text-white text-5xl md:text-8xl mt-4"
          style={{ textShadow: "3px 3px 0 #eb0028" }}
        >
          30.10.2025
        </h1>
        <a
          href="https://www.facebook.com/tedxunsw"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#eb0028] px-6 py-2 text-white text-lg font-semibold shadow-md hover:bg-[#a10c0c] transition"
        >
          <Facebook
            width={20}
            className="shrink-0 grow-0"
            style={{ fill: "#FFFFFF" }}
          />
          <span className="relative top-[2px]">FOLLOW FOR UPDATES</span>
        </a>
      </div>
    </div>
  );
}
