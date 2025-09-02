"use client";

import { useState, useEffect } from "react";

import Title from "../components/Title";
import Event from "../components/Event";
import VideoComponents from "@/components/VideoComponents";
import TiltedCard from "@/components/SpeakerCards";

// https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs
function getWindowDimensions() {
  if (typeof window !== "undefined") {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return windowDimensions;
}

const srcs = [
  {
    src: "https://www.youtube.com/embed/abkWsmSdOVo?autoplay=1",
    titleImg: "LennyVartanian.png",
    title:
      "Refocusing the fitness industry on health | Lenny Vartanian | In Plain Sight",
  },
  {
    src: "https://www.youtube.com/embed/vE0cfk34YkQ?autoplay=1",
    titleImg: "JamesTran.png",
    title:
      "The beauty of taking a photo every day | James Tran | In Plain Sight",
  },
  {
    src: "https://www.youtube.com/embed/OajPRC_8WSk?autoplay=1",
    titleImg: "SashaVassar.png",
    title:
      "The Learning Blind Spot: Why We Miss What Matters | Sasha Vassar | In Plain Sight",
  },
  {
    src: "https://www.youtube.com/embed/ddogc3GvBN4?autoplay=1",
    titleImg: "KateBrandy.png",
    title:
      "We Prepare to Survive Disasters But Not to Cope With What Comes After | Kate Brady | TEDxUNSW Salon",
  },
  {
    src: "https://www.youtube.com/embed/seRkEyP6v5Q?autoplay=1",
    titleImg: "StevenMost.png",
    title:
      "Teaching and the vanishing art of connection | Steven Most | Red Threads",
  },
  {
    src: "https://www.youtube.com/embed/oGxSeX3_iIA?autoplay=1",
    titleImg: "CaitlinCreek.png",
    title:
      "A Deep Dive of Sydney’s Infamous Eight-Legged Serial Killers | Caitlin Creak | Critical Angles ",
  },
];

const speakers = [
  {
    src: "/image.png",
    altText: "Blank",
    speakerName: "Speaker 1",
    captionText: "Speaker 1",
  },
  {
    src: "/image.png",
    altText: "Blank",
    speakerName: "Speaker 2",
    captionText: "Speaker 2",
  },
  {
    src: "/image.png",
    altText: "Blank",
    speakerName: "Speaker 3",
    captionText: "Speaker 3",
  },
  {
    src: "/image.png",
    altText: "Blank",
    speakerName: "Speaker 4",
    captionText: "Speaker 4",
  },
  {
    src: "/image.png",
    altText: "Blank",
    speakerName: "Speaker 5",
    captionText: "Speaker 5",
  },
];

export default function Home() {
  const width: number | undefined = useWindowDimensions()?.width;

  let imageEndPoints = 10;

  if (typeof width !== "undefined") {
    if (width < 550) {
      imageEndPoints = 3;
    } else if (width < 900) {
      imageEndPoints = 6;
    }
  }

  return (
    <div className="bg-[url('/BlackBackground.png')] bg-repeat bg-contain">
      <div className="flex flex-col items-center justify-items-center min-h-screen text-5xl w-full">
        <Event />
        {/* mission&&talks recommendation session */}
        <div className="flex flex-1 bg-[url('/BlackBackground.png')] bg-repeat bg-contain w-full">
          <div className="p-4 flex-col flex items-start justify-start text-white gap-5 w-full font-[family-name:var(--font-geist-mono)] font-bold">
            <div className="grid grid-flex-row grid-cols-5 gap-5 p-10 px-10 bg-white bg-repeat bg-contain w-full">
              {speakers.slice(0, 5).map((speakers) => {
                return (
                  <TiltedCard
                    key={speakers.captionText}
                    imageSrc={speakers.src}
                    altText={speakers.altText}
                    captionText={speakers.captionText}
                    overlayContent={
                      <p className="tilted-card-demo-text">
                        {speakers.speakerName}
                      </p>
                    }
                  />
                );
              })}
            </div>
            <div className="flex gap-5 flex-col sm:flex-row md:gap-20">
              <Title
                titleLg="Mission"
                titleSm="About"
                color="white"
                route="/about"
              />
              <p className="text-sm font-light">
                To create a platform for changemakers of our community share
                ideas, with the aim of sparking conversations and igniting
                passion outside of the classroom.
              </p>
            </div>
            <div className="flex flex-col gap-10 md:gap-20 sm:flex-row">
              <Title
                titleLg="Talks"
                titleSm="More"
                color="white"
                route="/talks"
              />
              {/* this is where talks are recommended */}
              <div>
                <VideoComponents start={0} end={imageEndPoints} srcs={srcs} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
