// import Link from "next/link";
import Image from "next/image";
import Link from "next/link";
export default function OffTheRecord25T3() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-[640px] md:h-screen bg-[#0d0a03]">
      <div className="flex flex-col items-center w-full md:gap-2">
        {/* Give the fill image a sized, positioned wrapper */}
        <div className="relative w-5/6 md:w-2/3 h-[220px] md:h-[360px] lg:h-[440px] -ml-2">
          <Image
            src="/25T3OffTheRecordAssets/EventThemeTitle.png"
            alt="25T3 Off The Record"
            fill
            className="object-contain"
            sizes="(min-width:1024px) 66vw, 83vw"
            priority
          />
        </div>
        <div className="relative">
          <div className="pointer-events-none absolute rounded-2xl border border-[#fdd144] opacity-90 animate-ping w-full h-full"></div>
          <Link
            href="https://tedxunsw.eventbrite.com.au/?aff=wb"
            className="w-40 md:w-60 rounded-2xl bg-[#fdd144] text-black flex font-serif font-thin-condensed items-center justify-center text-base lg:text-lg p-2 hover:underline hover:bg-amber-300 hover:transition-all-0.3s ease-in-out hover:scale-105"
            aria-label="Get tickets now"
          >
            Get Tickets Now →
          </Link>
        </div>
        <div className="relative w-[200px] h-[100px] md:w-[400px] md:h-[200px] ">
          <Image
            src="/25T3OffTheRecordAssets/VinylPlayer.png"
            alt="25T3 Off The Record Logos"
            className="flex flex-row object-contain items-center justify-end"
            fill
          />
        </div>
      </div>
    </div>
  );
}
