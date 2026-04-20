import VideoGallery from "@/components/VideoGallery";

const videos = [
  {
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    titleImg: "tedx1.jpg",
    title: "TEDxUNSW | Sample Talk One",
  },
  {
    src: "https://www.youtube.com/embed/nNXSSfSmbao?si=mU_OUTecKDDSKSRb",
    titleImg: "tedx2.jpg",
    title: "TEDxUNSW | Sample Talk Two",
  },
  {
    src: "https://www.youtube.com/embed/jNQXAC9IVRw",
    titleImg: "tedx3.jpg",
    title: "TEDxUNSW | Sample Talk Three",
  },
  {
    src: "https://www.youtube.com/embed/nky4me4NP70?si=mb3psKOrncNUFE1n",
    titleImg: "tedx4.jpg",
    title: "TEDxUNSW | Sample Talk Four",
  },
  {
    src: "https://www.youtube.com/embed/X47OO8rT9wc?si=fcNyXPHYXZ0BaJU6",
    titleImg: "tedx5.jpg",
    title: "TEDxUNSW | Sample Talk Five",
  },
  {
    src: "https://www.youtube.com/embed/JuSsvM8B4Jc?si=1pIvD38vrq5VA8Ia",
    titleImg: "tedx6.jpg",
    title: "TEDxUNSW | Sample Talk Six",
  },
];

export default function VideosPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-red-400">
            TEDxUNSW
          </p>
          <h1 className="text-4xl font-bold md:text-6xl">Video Gallery</h1>
          <p className="mt-4 max-w-2xl text-base text-white/70 md:text-lg">
            Work in Progress.....
          </p>
        </div>

        <VideoGallery videos={videos} />
      </div>
    </main>
  );
}
