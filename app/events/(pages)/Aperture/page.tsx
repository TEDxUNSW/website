import Upcoming from "@/components/Upcoming";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aperture | TEDxUNSW",
  description: "Events page for Aperture",
};

export default function Aperture() {
  return (
    <div>
      <Upcoming />
    </div>
  );
}
