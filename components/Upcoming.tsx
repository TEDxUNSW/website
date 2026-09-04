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
          shadow-xl shadow-red-700 w-[35vw] h-[20vh] min-[712px]:w-[40vw] min-[712px]:h-[30vh] min-[894px]:w-[38vw] min-[894px]:h-[35vh]`}
        >
          {/* smaller inner card */}
          <div
            className={`${centerStyle} bg-stone-700 border-transparent rounded-2xl 
            min-[329px]:w-[30vw] min-[329px]:h-[15vh] min-[712px]:w-[30vw] min-[712px]:h-[25vh] min-[894px]:w-[35vw] min-[894px]:h-[30vh]`}
          >
            <h1 className="text-[10px] min-[330px]:text-md min-[712px]:text-lg min-[895px]:text-4xl font-bold text-white">
              Under construction
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
