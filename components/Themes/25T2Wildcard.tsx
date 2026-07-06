/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function WildCard25T2() {
  return (
    <div className="flex flex-col relative items-center font-imfellEng justify-center w-full h-full lg:h-screen bg-[#f8f7f2]">
      <div className="absolute bottom-0 left-0 w-full ">
        <div className="relative w-2/3 h-[200px]">
          <img
            src="/WildcardAsset/RedLip.png"
            alt="25T2 Wildcard"
            className="absolute bottom-0 left-0 w-2xl md:w-[600px] object-cover"
          />
          <img
            src="/WildcardAsset/Ribbon.png"
            alt="25T2 Wildcard Title"
            className="absolute bottom-0 right-1/2 w-60 md:right-1/3 md:w-48 min-w-14 object-cover"
          />
        </div>
      </div>
      <img
        src="/WildcardAsset/Rabbit.png"
        alt="25T2 Wildcard"
        className="absolute z-10 top-1/5 left-1/2 w-32 min-w-14 object-cover"
      />
      {/* right side */}
      <img
        src="/WildcardAsset/TopRightHand.png"
        alt="25T2 Wildcard"
        className="absolute top-0 right-0 w-80 md:w-[400px] min-w-14 object-cover"
      />
      <img
        src="/WildcardAsset/ChessPiece.png"
        alt="25T2 Wildcard"
        className="absolute z-5 bottom-0 hidden sm:block right-1/6 w-3xs md:w-2xs min-w-14 object-cover"
      />
      <img
        src="/WildcardAsset/RightCornerSquare.png"
        alt="25T2 Wildcard"
        className="absolute bottom-0 z-5 right-0 w-2xs md:w-[400px] min-w-14 object-cover"
      />
      <img
        src="/WildcardAsset/Outline.png"
        alt="25T2 Wildcard"
        className="absolute bottom-1/10 sm:top-1/5 right-0 md:right-1/10 w-2xs md:w-[400px] min-w-14 object-cover"
      />
      {/* left side */}
      <img
        src="/WildcardAsset/CardEye.png"
        alt="25T2 Wildcard"
        className="absolute z-5 top-0 left-0 w-2xs md:w-[360px] min-w-14 object-cover"
      />
      <img
        src="/WildcardAsset/MapStars.png"
        alt="25T2 Wildcard Title"
        className="absolute hidden md:w-[400px] left-1/10 md:left-1/4 md:block top-0 "
      />
      <img
        src="/WildcardAsset/DiceStamp.png"
        alt="25T2 Wildcard"
        className="absolute top-1/3 -left-20 w-3xs md:w-[300px] md:left-1/6 min-w-14 object-cover"
      />
      <img
        src="/WildcardAsset/RedDice.png"
        alt="25T2 Wildcard Title"
        className="absolute w-2xs z-5 right-0 bottom-1/12 lg:w-[400px] sm:left-1/3 lg:left-5/12 sm:bottom-1/6 lg:bottom-0  "
      />
      <img
        src="/WildcardAsset/Ball7.png"
        alt="25T2 Wildcard Title"
        className="absolute w-2xs right-0  lg:w-[400px] sm:left-1/3 lg:left-1/2 top-0 "
      />
      <img
        src="/WildcardAsset/WildcardTitle.png"
        alt="25T2 Wildcard Title"
        className="w-1/3 min-w-[300px] z-10 "
      />{" "}
      <div className="relative w-[200px] min-w-[100px] mx-auto z-50 transition-transform duration-150 hover:rotate-[-2deg]">
        <img
          src="/WildcardAsset/TicketBg.png"
          alt="25T2 Wildcard Ticket Button"
          className="w-full object-cover z-10"
        />
        <Link
          href="https://tedxunswwildcard.eventbrite.com.au/?aff=wb"
          className="absolute inset-0 text-black flex items-center justify-center text-lg font-bold p-2 hover:underline z-20 hover:text-red-500"
        >
          Get Tickets Now →
        </Link>
      </div>
      {/* Event details */}
    </div>
  );
}
