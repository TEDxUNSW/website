import VideoCard, { VideoItem } from "./VideoCards";

type VideoGalleryProps = {
  videos: VideoItem[];
};

export default function VideoGallery({ videos }: VideoGalleryProps) {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {videos.map((video) => (
          <VideoCard
            key={video.src}
            src={video.src}
            titleImg={video.titleImg}
            title={video.title}
          />
        ))}
      </div>
    </section>
  );
}
