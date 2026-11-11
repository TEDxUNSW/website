import Upcoming from "@/components/Upcoming";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Red Threads| TEDxUNSW",
  description: "Events page Red Threads",
};

export default function RedThreads() {
  return (
    <div>
      <Upcoming />
    </div>
  );
}
