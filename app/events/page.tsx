import Link from "next/link";

export default function Events() {
    return (

        /*  I'm thinking of using the tilted card component from react bits
            reactbits.dev/components/tilted-card
        */
        <div className="h-screen pl-10 pr-10 pt-5 pb-10 place-items-stretch justify-between">
            <h1 className="font-bold text-3xl mb-3">2026</h1>
            <div className="gap-15 grid grid-cols-3">
                <Link href="/events/WaveLength" className="border-transparent rounded-md md:w-full w-[30vw]  md:h-[20vw] h-[15vh] p-4 shadow-md  shadow-red-500 bg-background">Wave Length</Link>
                <Link href="/events/26T3" className="border-transparent rounded-md md:w-full w-[30vw] md:h-[20vw] h-[15vh] p-4 shadow-md  shadow-red-500 bg-background">Events 26T3</Link>
            </div>

            <h1 className="font-bold text-3xl mb-3 mt-5 sticky right-0">2025</h1>
                <div className="gap-15 grid grid-cols-3">
                <Link href="/events/25T1" className="border-transparent rounded-md md:w-full md:h-[20vw] w-[30vw] h-[15vh] p-4 shadow-md  shadow-red-500 bg-background">Events 25T1</Link>
                <Link href="/events/WildCard" className="border-transparent rounded-md md:w-full md:h-[20vw] w-[30vw] h-[15vh] p-4 shadow-md  shadow-red-500 bg-background">Wild Card</Link>
                <Link href="/events/OffTheRecord" className="border-transparent rounded-md md:w-full md:h-[20vw] w-[30vw] h-[15vh] p-4 shadow-md  shadow-red-500 bg-background">Off The Record</Link>
            </div>
        </div>
    )
}