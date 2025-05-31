import Title from "../components/Title";
import VideoBlock from "@/components/VideoBlock";
import VideoComponents from "@/components/VideoComponents";

const srcs = [
  {
    src: "https://www.youtube.com/embed/oGxSeX3_iIA?autoplay=1",
    titleImg: "placeholder.svg",
    title:
      "A Deep Dive of Sydney’s Infamous Eight-Legged Serial Killers | Caitlin Creak | Critical Angles ",
  },
  {
    src: "https://www.youtube.com/embed/abkWsmSdOVo?autoplay=1",
    titleImg: "placeholder.svg",
    title:
      "Refocusing the fitness industry on health | Lenny Vartanian | In Plain Sight",
  },
  {
    src: "https://www.youtube.com/embed/vE0cfk34YkQ?autoplay=1",
    titleImg: "placeholder.svg",
    title:
      "The beauty of taking a photo every day | James Tran | In Plain Sight",
  },
  {
    src: "https://www.youtube.com/embed/OajPRC_8WSk?autoplay=1",
    titleImg: "placeholder.svg",
    title:
      "The Learning Blind Spot: Why We Miss What Matters | Sasha Vassar | In Plain Sight",
  },
  {
    src: "https://www.youtube.com/embed/seRkEyP6v5Q?autoplay=1",
    titleImg: "placeholder.svg",
    title:
      "Teaching and the vanishing art of connection | Steven Most | Red Threads",
  },
];

export default function Home() {
  return (
    <div className="bg-[url('/BlackBackground.png')] bg-repeat bg-contain">
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
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore
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
              <div>
                <VideoComponents start={0} end={3} srcs={srcs} />
                <VideoComponents start={3} end={5} srcs={srcs} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
