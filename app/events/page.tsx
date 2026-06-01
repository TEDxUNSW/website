// import Link from "next/link";
import { events } from "@/lib/events";
import EventCardBlocks from "@/components/EventCardBlocks";

export default function Events() {
    return (

        /*  I'm thinking of using the tilted card component from react bits
            reactbits.dev/components/tilted-card
        */
        <div className="h-screen pl-10 pr-10 pt-5 pb-10 place-items-stretch justify-between">
            <EventCardBlocks
                index_start={0}
                index_end={1}
                events={events}
                year={2026}
                colour_and_font={"text-[var(--color-gold)]"}
            />

            <EventCardBlocks
                index_start={1}
                index_end={3}
                events={events}
                year={2025}
                colour_and_font={"text-[vard(--colour-black)]"}
            />
        </div>
    )
}