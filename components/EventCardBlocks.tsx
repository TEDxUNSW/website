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
      {year}
      <div className="flex flex-row gap-10 p-5 bg-contain text-end text-white">
        {events.slice(index_start, index_end).map((events) => {
          return (
            <Link href={events.url}>
            <TiltedCard
              key={events.eventName}
              imageSrc={events.src}
              altText={events.altText}
            //   captionText={speakers.captionText}
              overlayContent={
                <p className="tilted-card-demo-text">{events.eventName}</p>
              }
            />
            </Link>
          );
        })}
      </div>
    </div>
  );
}