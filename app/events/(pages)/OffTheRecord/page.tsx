import Upcoming from "@/components/Upcoming"
import { Metadata } from "next"

export const metadata:Metadata = {
    title: "Off The Record | TEDxUNSW", 
    description: "Events page for Off The Record",
}

export default function OffTheRecord () {
    return (
        <div>
            <Upcoming/>
        </div>
    )
}