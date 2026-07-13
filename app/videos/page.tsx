import VideoGallery from "@/components/VideoGallery";

const videos = [
  {
    src: "https://www.youtube.com/embed/vo64lKi-DiY&autoplay=1",
    titleImg: "ChristineAi.jpg",
    title: "We should all draw without an eraser | Christine Ai | Off The Record",
    year: 2025,
  },
  {
    src: "https://www.youtube.com/embed/TZDnLxnec80&autoplay=1",
    titleImg: "RyanJackNicholas.jpg",
    title: "How To Save A Life | Ryan Jack Nicholas | Off The Record",
    year: 2025,
  },
  {
    src: "https://www.youtube.com/embed/abkWsmSdOVo&autoplay=1",
    titleImg: "LennyVartanian.jpg",
    title: "Refocusing the fitness industry on health | Lenny Vartanian | In Plain Sight",
    year: 2025,
  },
  {
    src: "https://www.youtube.com/embed/vE0cfk34YkQ&autoplay=1",
    titleImg: "JamesTran.jpg",
    title: "The beauty of taking a photo every day | James Tran | In Plain Sight",
    year: 2025,
  },
  {
    src: "https://www.youtube.com/embed/OajPRC_8WSk&autoplay=1",
    titleImg: "SashaVassar.jpg",
    title: "The Learning Blind Spot: Why We Miss What Matters | Sasha Vassar | In Plain Sight",
    year: 2025,
  },
  {
    src: "https://www.youtube.com/embed/ddogc3GvBN4&autoplay=1",
    titleImg: "KateBrady.jpg",
    title: "We Prepare to Survive Disasters But Not to Cope With What Comes After | Kate Brady | In Plain Sight",
    year: 2025,
  },
  {
    src: "https://www.youtube.com/embed/gJzjbODDxcY&autoplay=1",
    titleImg: "JoeKwon.jpg",
    title: "Changing Our Perceptions Beyond the Headlines | Joe Kwon | Wildcard",
    year: 2025,
  },
  {
    src: "https://www.youtube.com/embed/0LcSiEy-pic&autoplay=1",
    titleImg: "AdamMada.jpg",
    title: "Solving the Impossible | Adam Mada | Wildcard",
    year: 2025,
  },
  {
    src: "https://www.youtube.com/embed/AzTzqoheQDw&autoplay=1",
    titleImg: "AaronEger.jpg",
    title: "We Know Enough to Save Our Planet | Aaron Eger | Wildcard",
    year: 2025,
  },
  {
    src: "",
    titleImg: "tedx4.jpg",
    title: "TEDxUNSW | Sample Talk Four",
    year: 2024,
  },
  {
    src: "https://www.youtube.com/embed/X47OO8rT9wc?si=fcNyXPHYXZ0BaJU6",
    titleImg: "tedx5.jpg",
    title: "TEDxUNSW | Sample Talk Five",
    year: 2024,
  },
  {
    src: "https://www.youtube.com/embed/JuSsvM8B4Jc?si=1pIvD38vrq5VA8Ia",
    titleImg: "tedx6.jpg",
    title: "TEDxUNSW | Sample Talk Six",
    year: 2023,
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
            Explore talks, moments, and ideas from TEDxUNSW across the years.
          </p>
        </div>

        <VideoGallery videos={videos} />
      </div>
    </main>
  );
}
