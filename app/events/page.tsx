import Link from "next/link";

export default function Events() {
    return (
        <div className="h-screen pl-10 pr-10 pt-5 pb-5 place-items-stretch justify-between">
            <h1 className="font-bold text-3xl mb-3">2026</h1>
            <div className="gap-15 grid grid-cols-3">
                <Link href="/events/26T1" className="border-transparent rounded-md w-full h-[20vw] p-4 shadow-md shadow-red-500 bg-background">Events 26T1</Link>
                <Link href="/events/26T2" className="border-transparent rounded-md w-full h-[20vw] p-4 shadow-md  shadow-red-500 bg-background">Events 26T2</Link>
                <Link href="/events/26T3" className="border-transparent rounded-md w-full h-[20vw] p-4 shadow-md  shadow-red-500 bg-background">Events 26T3</Link>
            </div>

            <h1 className="font-bold text-3xl mb-3 mt-5 sticky right-0">2025</h1>
                <div className="gap-15 grid grid-cols-3">
                <Link href="/events/25T1" className="border-transparent rounded-md w-full h-[20vw] p-4 shadow-md  shadow-red-500 bg-background">Events 25T1</Link>
                <Link href="/events/25T2" className="border-transparent rounded-md w-full h-[20vw] p-4 shadow-md  shadow-red-500 bg-background">Events 25T2</Link>
                <Link href="/events/25T3" className="border-transparent rounded-md w-full h-[20vw] p-4 shadow-md  shadow-red-500 bg-background">Events 25T3</Link>
            </div>
        </div>
    )
}