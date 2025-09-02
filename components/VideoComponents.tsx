import VideoBlock, { src } from "./VideoBlock";

type videoComponentObject = { start: number; end: number; srcs: src[] };

export default function VideoComponents({
  start,
  end,
  srcs,
}: videoComponentObject) {
  return (
    <>
      <div className="grid grid-flow-col grid-rows-3 lg:grid-rows-2 gap-7">
        {srcs.slice(start, end).map((src) => {
          return (
            <VideoBlock
              key={src.src}
              src={src.src}
              titleImg={src.titleImg}
              title={src.title}
            />
          );
        })}
      </div>
      <div className="h-10"></div>
    </>
  );
}
