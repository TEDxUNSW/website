import Upcoming from "@/components/Upcoming";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Critical Angles | TEDxUNSW",
  description: "Events page for Critical Angles",
};

export default function CriticalAngles() {
  return (
    <div>
      <Upcoming />
    </div>
  );
}
