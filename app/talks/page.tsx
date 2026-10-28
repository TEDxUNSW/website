import VideoGallery from "@/components/VideoGallery";
import videos from "@/data/videos";

export default function TalksPage() {
  return (
    <main className="min-h-screen bg-[#090909] text-white">
      {/* Page introduction */}
      <section className="relative overflow-hidden border-b border-white/10 px-6 pb-16 pt-24 md:px-10 md:pb-20 md:pt-32">
        {/* Subtle red background glow */}
        <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-red-600/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
            TEDxUNSW / Our Talks
          </p>

          <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Ideas worth
            <span className="text-red-500"> spreading.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/60 md:text-lg">
            Discover bold perspectives, remarkable stories, and
            thought-provoking conversations from TEDxUNSW.
          </p>
        </div>
      </section>

      {/* video gallery */}
      <section className="px-6 py-14 md:px-10 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-xs uppercase tracking-widest text-red-500">
                Explore
              </p>
              <h2 className="text-3xl font-bold md:text-4xl"> The Talks </h2>
            </div>

            <p className="text-sm text-white/40"> Stories from every year </p>
          </div>

          <VideoGallery videos={videos} />
        </div>
      </section>
    </main>
  );
}
