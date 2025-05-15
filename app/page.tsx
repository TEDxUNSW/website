import Title from "../components/Title";
import VideoBlock from "@/components/VideoBlock";

const srcs = [
  { src: "https://www.youtube.com/embed/oGxSeX3_iIA?autoplay=1" },
  { src: "https://www.youtube.com/embed/abkWsmSdOVo?autoplay=1" },
  { src: "https://www.youtube.com/embed/vE0cfk34YkQ?autoplay=1" },
  { src: "https://www.youtube.com/embed/OajPRC_8WSk?autoplay=1" },
  { src: "https://www.youtube.com/embed/UpBuBXPv5Aw?autoplay=1" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen  gap-16 sm: font-[family-name:var(--font-handjet)] text-5xl">
      In Plain Sight
      {/* mission&&talks recommadation session */}
      <div className="flex flex-1 bg-[url('/BlackBackground.png')]  bg-repeat bg-contain w-screen h-screen ">
        <div className="p-8 px-12 flex-col flex items-start justify-between text-white gap-5 h-96 w-full font-[family-name:var(--font-geist-mono)] font-bold md:pr-52 md:px-20">
          <div className="flex gap-5 flex-col sm:flex-row md:gap-20">
            <Title
              titleLg="Mission"
              titleSm="About"
              color="white"
              route="/about"
            />
            <p className="text-sm font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore
            </p>
          </div>
          <div className="flex gap-20">
            <Title
              titleLg="Talks"
              titleSm="More"
              color="white"
              route="/talks"
            />
            {/* this is where talks are recommended */}
            <div className="bg-radial from-black to-proper-red border-4 ">
              <div className="flex justify-between">
                {srcs.map((src) => {
                  return <VideoBlock src={src.src} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
