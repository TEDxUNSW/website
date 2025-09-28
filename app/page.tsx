"use client";

import { useState, useEffect } from "react";

import Title from "../components/Title";
import Event from "../components/Event";
import VideoComponents from "@/components/VideoComponents";
import SpeakerCardBlocks from "@/components/SpeakerCardBlocks";

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
    src: "",
    altText: "Coming Soon",
    speakerName: "Speaker",
    captionText: "Speaker",
  },
  {
    src: "",
    altText: "Coming Soon",
    speakerName: "Speaker",
    captionText: "Speaker",
  },
  {
    src: "",
    altText: "Coming Soon",
    speakerName: "Speaker",
    captionText: "Speaker",
  },
  {
    src: "/speakerCards/Joe Kwon.jpg",
    altText: "Joe Kwon",
    speakerName: "Joe Kwon",
    captionText: "CEO at Confit Pathways",
  },
  {
    src: "/speakerCards/Adam Mada.jpg",
    altText: "Adam Mada",
    speakerName: "Adam Mada",
    captionText: "Entertainer and Magician",
  },
  {
    src: "/speakerCards/Rachael Bolton.jpg",
    altText: "Rachael Bolton",
    speakerName: "Rachael Bolton",
    captionText: "Journalist at AFR",
  },
  {
    src: "/speakerCards/Aaron Eger.jpg",
    altText: "Aaron Eger",
    speakerName: "Aaron Eger",
    captionText: "Marine Biologist",
  },
  {
    src: "/speakerCards/Dr Kate Brady.jpg",
    altText: "Dr Kate Brady",
    speakerName: "Dr Kate Brady",
    captionText:
      "Senior Research Fellow " + "for the How We Survive Initiative UNSW",
  },
  {
    src: "/speakerCards/James Tran.jpg",
    altText: "James Tran",
    speakerName: "James Tran",
    captionText: "Sydney Based Photographer",
  },
  {
    src: "/speakerCards/Lenny Vartanian.jpg",
    altText: "Lenny Vartanian",
    speakerName: "Lenny Vartanian",
    captionText: "Professor in the School of Pyschology at UNSW",
  },
  {
    src: "/speakerCards/Sasha Vassar.jpg",
    altText: "Sasha Vassar",
    speakerName: "Sasha Vassar",
    captionText: "Senior Lecturer in Computer Science and Engineering at UNSW",
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
          <div className="p-4 flex-col flex items-start justify-start text-white gap-5 font-[family-name:var(--font-geist-mono)] font-bold w-full">
            <div className="flex flex-row flex-nowrap bg-repeat bg-contain overflow-x-scroll overflow-y-hidden w-full bg-white">
              <SpeakerCardBlocks
                index_start={0}
                index_end={3}
                speakers={speakers}
                theme={"Off The Record"}
              />
              <SpeakerCardBlocks
                index_start={3}
                index_end={7}
                speakers={speakers}
                theme={"WILDCARD"}
              />
              <SpeakerCardBlocks
                index_start={7}
                index_end={11}
                speakers={speakers}
                theme={"In Plain Sight"}
              />
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
