import Upcoming from "@/components/Upcoming"
import { Metadata } from "next"

export const metadata:Metadata = {
    title: "Wave Length | TEDxUNSW", 
    description: "Events page for Wave Length",
}

export default function WaveLength () {
    return (

            <Upcoming/>

    )
}