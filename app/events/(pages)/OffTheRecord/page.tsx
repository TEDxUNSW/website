import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Off The Record | TEDxUNSW",
    description: "Everything about Off The Record",
}

export default function OffTheRecord () {
    return (
        <div className="flex flex-row p-5 justify-between">
            <p>Hello from Off The Record</p>
            <Link href='/events'>Back</Link>
            <Link href='/events/26T2'>Next</Link>
            <Link href='/events/25T3'>Prev</Link>
        </div>
    )
}