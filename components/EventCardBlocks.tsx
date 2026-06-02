// Code from reactbits tilted cards.

import "./speakerCards.css";
import TiltedCard from "./SpeakerCards";
import Link from "next/link";

type eventComponents = {
  index_start: number;
  index_end: number;
  events: {
    src:string;
    altText: string;
    eventName: string;
    url: string;
  }[];
  year: number;
  colour_and_font?: string;
};

export default function EventCardBlocks({
  index_start,
  index_end,
  events,
  year,
  colour_and_font,
}: eventComponents) {
  colour_and_font = colour_and_font;
  return (
    <div className={colour_and_font}>
      <p className="text-xl font-bold">{year}</p>
      <div className="flex grid grid-cols-3 pb-[15vh] bg-contain text-end text-white">
        {events.slice(index_start, index_end).map((events) => {
          return (
            <Link href={events.url}>
            <TiltedCard
              key={events.eventName}
              containerHeight="40vh"
              containerWidth="30vw"
              imageHeight="54vh"
              imageWidth="27vw"
              imageSrc={events.src}
              altText={events.altText}
              scaleOnHover={1.05}
            />
            </Link>
          );
        })}
      </div>
    </div>
  );
}