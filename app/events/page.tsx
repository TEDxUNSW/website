// import Link from "next/link";
import { events } from "@/lib/events";
import EventCardBlocks from "@/components/EventsCardBlocks";

export default function Events() {
  return (
    <div className="pl-10 pt-[2vh] place-items-stretch justify-between">
      <EventCardBlocks
        index_start={0}
        index_end={2}
        events={events}
        year={2026}
        colour_and_font={"text-[var(--color-gold)]"}
      />

      <EventCardBlocks
        index_start={2}
        index_end={5}
        events={events}
        year={2025}
        colour_and_font={"text-[var(--color-white)]"}
      />

      <EventCardBlocks
        index_start={5}
        index_end={8}
        events={events}
        year={2024}
        colour_and_font={"text-[var(--color-white)]"}
      />
    </div>
  );
}
