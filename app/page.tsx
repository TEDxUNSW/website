"use client";


import { useState, useEffect } from 'react';

import Title from "../components/Title";
import VideoComponents from "@/components/VideoComponents";

// https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs
function getWindowDimensions() {
  if (typeof window !== "undefined") {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    if (typeof window !== "undefined") {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return windowDimensions;
}
//

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

export default function Home() {
  const width: number|undefined = useWindowDimensions()?.width;

  let imageEndPoints = 3

  if (typeof width !== "undefined") {
    if (width < 500) {
      imageEndPoints = 1;
    } else if (width < 900) {
      imageEndPoints = 2;
    } 
  }

  return (
    <div className="bg-[url('/BlackBackground.png')] bg-repeat bg-contain">
      <div className="flex flex-col items-center justify-items-center min-h-screen  gap-16 sm: font-[family-name:var(--font-handjet)] text-5xl">
        In Plain Sight
        {/* mission&&talks recommadation session */}
        <div className="flex flex-1 bg-[url('/BlackBackground.png')]  bg-repeat bg-contain w-screen h-screen ">
          <div className="p-8 px-12 flex-col flex items-start justify-between text-white gap-5 h-96 w-full font-[family-name:var(--font-geist-mono)] font-bold md:pr-52 md:px-20">
            <div className="flex gap-5 flex-col sm:flex-row md:gap-20">
              <Title
                titleLg="Mission"
                titleSm="About"
                color="white"
                route="/about"
              />
              <p className="text-sm font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore
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
                <VideoComponents start={0} end={imageEndPoints *1} srcs={srcs} />
                <VideoComponents start={imageEndPoints * 1} end={imageEndPoints * 2} srcs={srcs} />
                <VideoComponents start={imageEndPoints * 2} end={imageEndPoints * 3} srcs={srcs} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
