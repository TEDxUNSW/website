// import Link from "next/link";
import { events } from "@/lib/events";
import EventCardBlocks from "@/components/EventCardBlocks";

export default function Events() {
    return (
        <div className="pl-10 pr-10 pt-[2vh] h-fit place-items-stretch justify-between">
            <EventCardBlocks
                index_start={0}
                index_end={1}
                events={events}
                year={2026}
                colour_and_font={"text-[var(--color-gold)]"}
            />

            <EventCardBlocks
                index_start={1}
                index_end={4}
                events={events}
                year={2025}
                colour_and_font={"text-[var(--color-white)]"}
            />
            
            <EventCardBlocks
                index_start={4}
                index_end={7}
                events={events}
                year={2024}
                colour_and_font={"text-[var(--color-white)]"}
            />
        </div>
    )
}