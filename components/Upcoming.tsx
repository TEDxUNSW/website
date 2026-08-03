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
          className={`${centerStyle} bg-yellow-600 border-transparent rounded-2xl w-[35vw] h-[40vh] shadow-xl shadow-red-700`}
        >
          {/* smaller inner card */}
          <div
            className={`${centerStyle} bg-stone-700 border-transparent rounded-2xl w-[32vw] h-[35vh]`}
          >
            <h1 className="text-3xl font-bold text-white">
              Under construction
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
