// import Link from "next/link";

export default function OffTheRecord25T3() {
  return (
    <div
      className="flex flex-col relative items-center justify-center w-full h-full lg:h-screen bg-[#0d0a03]"
      style={{
        fontFamily: "'Times New Roman', Times, serif",
      }}
    >
      <div className="text-[#ffd144]">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-row items-center space-x-3">
            <div
              className="text-[18rem] font-tnr-condensed mb-[-4.5rem]"
              style={{
                fontWeight: "bold",
              }}
            >
              OFF
            </div>
            <div className="w-[21rem] text-[1.3rem] flex flex-col justify-center">
              <p className="font-tnr-condensed font-bold">
                we celebrate conversations that have slipped through the cracks;
                voices unheard, tales untold, unsung heroes and lovers in the
                shadows. we champion ideas that never made it into the
                spotlight, stories lost to time, and the characters hiding in
                the margins.
              </p>
            </div>
          </div>
          <div
            className="text-[7rem] font-tnr-condensed mt-[0.4rem]"
            style={{
              transform: "scaleY(1.5)",
            }}
          >
            THE RECORD
          </div>
        </div>
      </div>
    </div>
  );
}
