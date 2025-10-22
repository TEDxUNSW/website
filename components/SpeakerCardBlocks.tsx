// Code from reactbits tilted cards.

import "./speakerCards.css";
import TiltedCard from "./SpeakerCards";

type speakerComponents = {
  index_start: number;
  index_end: number;
  speakers: {
    src: string;
    altText: string;
    speakerName: string;
    captionText: string;
  }[];
  theme: string;
  colour_and_font?: string;
};

export default function SpeakerCardBlocks({
  index_start,
  index_end,
  speakers,
  theme,
  colour_and_font,
}: speakerComponents) {
  colour_and_font = colour_and_font;
  return (
    <div className={colour_and_font}>
      {theme}
      <div className="flex flex-row gap-10 p-5 bg-contain text-end text-white">
        {speakers.slice(index_start, index_end).map((speakers) => {
          return (
            <TiltedCard
              key={speakers.captionText}
              imageSrc={speakers.src}
              altText={speakers.altText}
              captionText={speakers.captionText}
              overlayContent={
                <p className="tilted-card-demo-text">{speakers.speakerName}</p>
              }
            />
          );
        })}
      </div>
    </div>
  );
}
