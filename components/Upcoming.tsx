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
          w-[35vw] h-[40vh] shadow-xl shadow-red-700 max-[894px]:w-[20vw] max-[894px]:h-[35vh] max-[412px]:w-[45vw] max-[412px]:h-[20vh]`}
        >
          {/* smaller inner card */}
          <div
            className={`${centerStyle} bg-stone-700 border-transparent rounded-2xl 
            w-[32vw] h-[35vh] max-[894px]:w-[18vw] max-[894px]:h-[30vh] max-[412px]:w-[40vw] max-[412px]:h-[15vh]`}
          >
            <h1 className="text-3xl font-bold text-white max-[894px]:text-sm">
              Under construction
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
