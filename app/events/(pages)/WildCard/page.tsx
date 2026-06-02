import Upcoming from "@/components/Upcoming"
import { Metadata } from "next"

export const metadata:Metadata = {
    title: "Wild Card | TEDxUNSW", 
    description: "Events page for Wild Card"
}

export default function WildCard () {
    return (
        <div>
            <Upcoming/>
        </div>
    )
}