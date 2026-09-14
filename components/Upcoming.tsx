// component to show that the route is currently under construction
import { StarsBackground } from "./animate-ui/components/backgrounds/stars";
const centerStyle = "flex items-center justify-center mx-auto";

export default function Upcoming() {
  return (
    <div className="relative flex bg-none h-screen w-screen overflow-hidden">
      <StarsBackground className="z-0 absolute inset-0" />

      {/* Centering the block*/}
      <div className={`${centerStyle} z-10 w-full h-full`}>
        {/* the big card */}
        <div
          className={`${centerStyle} bg-yellow-600 border-transparent rounded-2xl 
          shadow-xl shadow-red-700 w-[40vw] h-[20vh] min-[329px]:w-[50vw] min-[711px]:w-[45vw] min-[711px]:h-[25vh] min-[890px]:w-[40vw] min[890px]:h-[28vh] min-[911px]:w-[45vw] min-[959px]:w-[55vw] @min-height-720px:h-[30vh] min-[1280px]:h-[40vh] min-[1280px]:w-[40vw]`}
        >
          {/* smaller inner card */}
          <div
            className={`${centerStyle} bg-stone-700 border-transparent rounded-2xl 
            min-[329px]:w-[45vw] min-[329px]:h-[15vh] min-[414px]:w-[45vw] min-[711px]:w-[40vw] min-[711px]:h-[20vh] min-[890px]:w-[35vw] min[890px]:h-[25vh] min-[911px]:w-[40vw] min-[959px]:w-[50vw] @min-height-720px:h-[28vh] min-[1280px]:h-[35vh] min-[1280px]:w-[35vw]`}
          >
            <h1 className="text-[3vw] font-bold text-white">
              Under construction
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
