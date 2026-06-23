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
    src: "https://www.youtube.com/embed/7FpcfuqGLTw?autoplay=1",
    titleImg: "RachaelBolton.jpg",
    title:
      "Resilience is holding you back — here’s why | Rachael Bolton | TEDxUNSW Salon",
  },
  {
    src: "https://www.youtube.com/embed/AzTzqoheQDw?autoplay=1",
    titleImg: "AaronEger.jpg",
    title: "We Know Enough to Save Our Planet | Aaron Eger | TEDxUNSW Salon",
  },
  {
    src: "https://www.youtube.com/embed/0LcSiEy-pic?autoplay=1",
    titleImg: "AdamMada.jpg",
    title: "Solving the Impossible | Adam Mada | TEDxUNSW Salon",
  },
  {
    src: "https://www.youtube.com/embed/gJzjbODDxcY?autoplay=1",
    titleImg: "JoeKwon.jpg",
    title:
      "Changing Our Perceptions Beyond the Headlines | Joe Kwon | TEDxUNSW Salon",
  },
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
    src: "/speakerCards/Alex Lee.jpg",
    altText: "Alex Lee",
    speakerName: "Alex Lee",
    captionText: "CEO of Glen Group",
  },
  {
    src: "/speakerCards/Aditya Sharma.jpg",
    altText: "Aditya Sharma",
    speakerName: "Aditya Sharma",
    captionText: "Sydney-based Music Producer and International Touring DJ",
  },
  {
    src: "/speakerCards/Andrew Dempster.jpg",
    altText: "Andrew Dempster",
    speakerName: "Andrew Dempster",
    captionText: 
    "Director of the Australian Centre for Space Engineering Research at UNSW",
  },
  {
    src: "/speakerCards/Kaea Pearce.jpg",
    altText: "Kaea Pearce",
    speakerName: "Kaea Pearce",
    captionText: "Dancer, Choreographer and Creative Director",
  },
  {
    src: "/speakerCards/Ryan Jack Nicholas.jpg",
    altText: "Ryan Jack Nicholas",
    speakerName: "Ryan Jack Nicholas",
    captionText: "Music Psychology and Neurodiversity Researcher",
  },
  {
    src: "/speakerCards/Dr Jake Renzella.jpg",
    altText: "Dr Jake Renzella",
    speakerName: "Dr Jake Renzella",
    captionText:
      "Senior Lecturer in the School" +
      "of Computer Science and Engineering at UNSW",
  },
  {
    src: "/speakerCards/Dr Anastasia Hronis.jpg",
    altText: "Dr Anastasia Hronis",
    speakerName: "Dr Anastasia Hronis",
    captionText: "Clinical Psychologist and Author",
  },
  {
    src: "/speakerCards/Dr Marianne Jauncey.jpg",
    altText: "Dr Marianne Jauncey",
    speakerName: "Dr Marianne Jauncey",
    captionText:
      "Medical Director at Sydney " + "Medically Supervised Injecting Centre",
  },
  {
    src: "/speakerCards/Henry Brodaty.jpg",
    altText: "Henry Brodaty",
    speakerName: "Henry Brodaty",
    captionText: "Senior Psychiatrist & Psychogeriatrician",
  },
  {
    src: "/speakerCards/Christine Ai (Cai).jpg",
    altText: "Christine Ai (Cai)",
    speakerName: "Christine Ai (Cai)",
    captionText: "Illustrator and Creative Entrepreneur",
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

  let imageEndPoints = 9;

  if (typeof width !== "undefined") {
    if (width < 480) {
      imageEndPoints = 3;
    } else if (width < 1045) {
      imageEndPoints = 6;
    }
  }

  return (
    <div className="bg-[url('/BlackBackground.png')] bg-repeat bg-contain">
      <div className="flex flex-col items-center justify-items-center min-h-screen text-5xl w-full">
        <Event />
        {/* mission&&talks recommendation session */}
        <div className="flex flex-1 bg-[url('/BlackBackground.png')] bg-repeat bg-contain w-full">
          <div className="p-5 flex-col flex items-start justify-start gap-5 font-[family-name:var(--font-geist-mono)] font-bold w-full text-3xl">
            <div className="flex flex-row flex-nowrap bg-repeat bg-contain overflow-x-scroll no-scrollbar overflow-y-hidden w-full h-90 gap-10 p-2">
              <Title titleLg="Speakers" color="white" />
              <SpeakerCardBlocks
                index_start={0}
                index_end={4}
                speakers={speakers}
                theme={"Wavelengths"}
                colour_and_font={"font-perandory"}
              />
              <SpeakerCardBlocks
                index_start={4}
                index_end={10}
                speakers={speakers}
                theme={"Off The Record"}
                colour_and_font={"text-[var(--color-gold)]"}
              />
              <SpeakerCardBlocks
                index_start={10}
                index_end={14}
                speakers={speakers}
                theme={"WILDCARD"}
                colour_and_font={"text-[var(--color-red)] font-sourceSerif4"}
              />
              <SpeakerCardBlocks
                index_start={14}
                index_end={18}
                speakers={speakers}
                theme={"In Plain Sight"}
                colour_and_font={"font-handjet"}
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
            <Title
              titleLg="Contact Us"
              titleSm="More"
              color="white"
              route="/contactUs"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
