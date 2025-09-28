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
};

export default function SpeakerCardBlocks({
  index_start,
  index_end,
  speakers,
  theme,
}: speakerComponents) {
  return (
    <div className="text-black">
      {theme}
      <div className="flex flex-row gap-5 p-10 bg-contain text-end">
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
