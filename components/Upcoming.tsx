// component to show that the route is currently under construction
import { StarsBackground } from "./animate-ui/components/backgrounds/stars";

export default function Upcoming() {
  return (
    <div className="bg-none">
      <div className="flex bg-none h-[100vh] w-screen items-center justify-center">
        <StarsBackground className="z-[0] absolute" />
        <div className="flex z-2 items-center justify-center bg-yellow-600 border-transparent rounded-2xl w-[35vw] h-[40vh] shadow-xl shadow-red-700">
          <div className="flex items-center justify-center bg-stone-700 border-transparent rounded-2xl w-[32vw] h-[35vh]">
            <h1 className="text-3xl font-bold text-white">
              Under construction
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
