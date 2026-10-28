"use client";

import Title from "../components/Title";
import Event from "../components/Event";
import FeaturedTalks from "@/components/FeaturedTalks";
import videos from "@/data/videos";
import SpeakerCardBlocks from "@/components/SpeakerCardBlocks";
import Link from "next/link";

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
  return (
    <div className="bg-[url('/BlackBackground.png')] text-white bg-repeat bg-contain">
      <div className="flex flex-col items-center justify-items-center min-h-screen text-5xl w-full">
        <Event />
        {/* mission&&talks recommendation session */}
        <div className="flex flex-1 bg-[url('/BlackBackground.png')] bg-repeat bg-contain w-full">
          <div className="p-5 flex-col flex items-start justify-start gap-5 font-(family-name:--font-geist-mono) font-bold w-full text-3xl">
            <div className="flex flex-row flex-nowrap bg-repeat bg-contain overflow-x-scroll no-scrollbar overflow-y-hidden w-full h-90 gap-10 p-2">
              <Title titleLg="Speakers" color="white" />
              <SpeakerCardBlocks
                index_start={0}
                index_end={4}
                speakers={speakers}
                theme={"Wavelengths"}
                colour_and_font={"text-[var(--color-white)] font-perandory"}
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

            {/* Featured talks section */}
            <section className="flex w-full flex-col gap-8 py-12">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="mb-2 text-sm font-medium uppercase tracking-[0.25em] text-red-500">
                    Ideas worth spreading
                  </p>

                  <h2 className="text-3xl font-bold text-white md:text-4xl">
                    Featured Talks
                  </h2>
                </div>

                <Link
                  href="/talks"
                  className="group flex items-center gap-2 text-sm font-semibold text-red-500 transition-colors hover:text-white"
                >
                  View All Talks
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>

              <div className="mx-auto w-full max-w-6xl">
                <FeaturedTalks videos={videos} limit={6} />
              </div>
            </section>

            <Title
              titleLg="Contact Us"
              titleSm="More"
              color="white"
              route="/contact-us"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
