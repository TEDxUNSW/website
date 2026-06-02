import Upcoming from "@/components/Upcoming"
import { Metadata } from "next"

export const metadata:Metadata = {
    title: "In Plain Sight | TEDxUNSW", 
    description: "Events page for In Plain Sight",
}

export default function OffTheRecord () {
    return (
        <div>
            <Upcoming/>
        </div>
    )
}