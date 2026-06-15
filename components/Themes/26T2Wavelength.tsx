import Image from "next/image";

const titleGlow = {
  color: "#fffbe8",
  textShadow: "0 0 12px #fffbe8, 0 0 30px #fffbe899, 0 0 60px #fffbe866",
} as const;

const locationGlow = {
  color: "#fffdee",
  textShadow: "0 0 8px #fffdee, 0 0 18px #fffdee99, 0 0 32px #fffdee55",
} as const;

// Shared look for the free-floating taglines (same as the bottom-right tagline).
const taglineStyle = {
  fontFamily: "var(--font-crimson-pro)",
  color: "#fffbe8",
  fontSize: "3.5cqw",
  textShadow: "0 0 0.22em #fffbe8aa, 0 0 0.5em #fffbe855",
} as const;

export default function Wavelength26T2() {
  return (
    <div className="w-full h-full min-h-[60vh] sm:h-screen bg-[#000] relative overflow-hidden flex items-center justify-center px-5 sm:px-8 py-12">
      <Image
        src="/26T2Wavelength/space.jpg"
        alt="Wavelength background"
        fill
        className="object-cover opacity-40 z-[15]"
        priority
      />
      {/* Waves are a fixed rem size with fixed centre offsets, pinned to the top of the
          hero. They do not scale with the viewport — as the tab narrows they simply crop
          at the edges, so the overlap between them never changes. Mobile uses only the
          left wave, centred and large enough to crop on both sides and run under the
          location line while still reaching the top. */}
      <div className="absolute inset-0 z-10 pointer-events-none select-none">
        {/* Bottom wave: same fixed-rem / max-w-none / centred setup as the side
            waves so it crops (never scales) as the tab narrows. Kept on mobile.
            Listed first so it paints underneath the left/right waves.
            Height calc: image is 3240×717, so height = width × (717/3240) =
            width × 0.2213. Desktop 106rem → height ≈ 23.5rem (~376px); mobile
            70rem → height ≈ 15.5rem (~248px). On desktop the right edge is pinned
            to the right of the hero and it crops off the left; mobile stays
            centred. */}
        <Image
          src="/26T2Wavelength/wave-bottom.png"
          alt=""
          aria-hidden
          width={3240}
          height={717}
          className="absolute bottom-0 h-auto w-[var(--bw)] max-w-none opacity-60 left-1/2 [--bw:70rem] [--btx:-50%] sm:left-auto sm:right-0 sm:[--bw:106rem] sm:[--btx:0%]"
          style={{ transform: "translateX(var(--btx))" }}
        />
        <Image
          src="/26T2Wavelength/wave-left.png"
          alt=""
          aria-hidden
          width={3240}
          height={1350}
          className="absolute left-1/2 top-0 h-auto w-[var(--ww)] max-w-none [--ww:64rem] [--wx:0rem] sm:[--ww:110rem] sm:[--wx:-15rem]"
          style={{ transform: "translateX(-50%) translateX(var(--wx))" }}
        />
        <Image
          src="/26T2Wavelength/wave-right.png"
          alt=""
          aria-hidden
          width={3240}
          height={1350}
          className="absolute left-1/2 top-0 hidden h-auto w-[96rem] max-w-none [--rx:52rem] sm:block"
          style={{ transform: "translateX(-50%) translateX(var(--rx))" }}
        />
      </div>
      {/* Corner art + tagline share one box so the text scales and moves with the figures.
          Placement is % of the box, font size is cqw (1% of box width), glow is em. */}
      <div
        className="absolute bottom-0 right-0 w-[55%] z-[18] [container-type:inline-size] sm:w-[42rem]"
        style={{ aspectRatio: "1195 / 714" }}
      >
        <Image
          src="/26T2Wavelength/right-corner.png"
          alt=""
          aria-hidden
          fill
          className="object-contain pointer-events-none select-none"
        />
        <div
          className="absolute text-right leading-tight"
          style={{
            right: "40%",
            bottom: "58%",
            fontFamily: "var(--font-crimson-pro)",
            fontSize: "3.5cqw",
            color: "#fffbe8",
            textShadow: "0 0 0.22em #fffbe8aa, 0 0 0.5em #fffbe855",
          }}
        >
          <span className="block">Not all ideas arrive</span>
          <span className="block">Loudly.</span>
        </div>
      </div>
      {/* Album art tucked behind the bottom-left figure: its bottom-right corner
          overlaps the top-left of that figure by a small amount. z-[17] keeps it
          behind the people (z-[18]) but above the waves / space tint.
          Image is 888×1054 → height = width × (1054/888) = width × 1.187.
          Desktop 13rem → height ≈ 15.4rem; left 0.875rem and bottom 14rem put
          its right edge at ~13.875rem and its bottom at 14rem, overlapping the
          top-left of the figure (left 7rem, top ≈ 21.5rem) by a small corner.
          Vanish math: albums right edge ≈ 13.875rem; the right corner
          box (42rem, right-pinned) has its left edge at 100vw - 42rem, so they
          only collide near 100vw ≈ 54rem — far narrower than the people figure's
          own crowding point. Since albums is paired with and sits behind that
          figure (which hides below 68rem / 1088px), it shares the same 68rem
          threshold so the pair shows/hides together and stays well clear of the
          right image. Mobile (<sm) always shows it. */}
      <div
        className="absolute z-[17] block sm:hidden left-[-3vw] bottom-[26vw] w-[22vw] sm:left-[0.875rem] sm:bottom-[14rem] sm:w-[13rem] min-[68rem]:block"
        style={{ aspectRatio: "888 / 1054" }}
      >
        <Image
          src="/26T2Wavelength/albums.png"
          alt=""
          aria-hidden
          fill
          className="object-contain pointer-events-none select-none"
        />
      </div>
      {/* Bottom-left figure: touches the bottom, kept off the left edge with a gap.
          Same responsive sizing approach as the right corner — % of viewport on
          mobile, fixed rem on desktop.
          Visibility: the right box (42rem, right-pinned) and this left box
          (7rem + 15rem = right edge at 22rem) leave a gap of (100vw - 64rem).
          They touch at 100vw = 64rem (1024px). To keep a 4rem gap we only show
          this on desktop from 68rem (1088px) up; between mobile and there it's
          hidden to avoid crowding. Mobile (<sm) always shows it. */}
      <div
        className="absolute bottom-0 left-[6%] w-[28%] z-[18] block sm:hidden sm:left-[7rem] sm:w-[15rem] min-[68rem]:block"
        style={{ aspectRatio: "362 / 519" }}
      >
        <Image
          src="/26T2Wavelength/bottom-left.png"
          alt=""
          aria-hidden
          fill
          className="object-contain object-bottom pointer-events-none select-none"
        />
      </div>
      {/* Top-left taglines. Mirrors the bottom-right tagline's behaviour: a box that
          is 55% of the viewport on mobile and a fixed 42rem on desktop, with
          container-type so the text size is cqw (1% of box width) and positions are
          % of the box — so both lines scale and move together on resize / mobile.
          "Come find them" sits top-left with padding; "Listen closer" sits lower and
          further right (roughly halfway to the title, off-centre). One line each. */}
      <div
        className="absolute top-0 left-0 w-[55%] z-20 [container-type:inline-size] sm:w-[42rem]"
        style={{ aspectRatio: "1195 / 714" }}
      >
        <p
          className="absolute whitespace-nowrap leading-tight"
          style={{ top: "12%", left: "7%", ...taglineStyle }}
        >
          Come find them....
        </p>
        <p
          className="absolute whitespace-nowrap leading-tight"
          style={{ top: "55%", left: "32%", ...taglineStyle }}
        >
          Listen closer.
        </p>
      </div>
      {/* Top-right star. Width is vw-based (capped) so it scales down as the window
          shrinks, like the text. Only shown from 68rem up — it disappears together
          with the left content (people/albums) in the crowded middle zone and does
          NOT reappear on mobile. */}
      <Image
        src="/26T2Wavelength/star-right.png"
        alt=""
        aria-hidden
        width={334}
        height={318}
        className="absolute top-[8%] right-[13%] z-20 h-auto w-[min(15vw,12rem)] hidden min-[68rem]:block pointer-events-none select-none"
      />
      <div className="relative z-20 flex flex-col items-end gap-0 -translate-y-6 sm:-translate-y-10">
        <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3 mr-1 sm:mr-2">
          <Image
            src="/logos/logo-white-text.svg"
            alt="TEDxUNSW"
            width={140}
            height={35}
            className="h-6 sm:h-7 md:h-9 w-auto"
          />
          <Image
            src="/logos/arc-outline-white.png"
            alt="Arc"
            width={40}
            height={40}
            className="h-6 sm:h-7 md:h-9 w-auto"
          />
        </div>
        <div className="flex items-end leading-none">
          <span
            className="relative"
            style={{
              fontFamily: "var(--font-amoresa)",
              fontSize: "clamp(3.7rem, 14.5vw, 7.5rem)",
              top: "-0.22em",
              marginRight: "-0.08em",
              letterSpacing: "0.02em",
              ...titleGlow,
            }}
          >
            W
          </span>
          <span
            className="tracking-[0.02em]"
            style={{
              fontFamily: "var(--font-perandory)",
              fontSize: "clamp(3rem, 12vw, 6.5rem)",
              paddingBottom: "0.05em",
              ...titleGlow,
            }}
          >
            AVELENGTHS
          </span>
        </div>
        <p
          className="font-bold tracking-[0.12em] uppercase mr-1 sm:mr-2"
          style={{
            fontFamily: "var(--font-montserrat)",
            fontSize: "clamp(0.7rem, 2.6vw, 1rem)",
            marginTop: "-0.6em",
            ...locationGlow,
          }}
        >
          Location: UNSW Roundhouse
        </p>
        <a
          href="https://youtube.com/watch?v=dQw4w9WgXcQ"
          className="group mr-1 sm:mr-2 inline-flex items-center rounded-full border border-[#fffbe8]/70 font-semibold uppercase text-[#fffbe8] backdrop-blur-[2px] transition-all duration-300 hover:bg-[#fffbe8] hover:text-black hover:shadow-[0_0_30px_#fffbe899]"
          style={{
            fontFamily: "var(--font-montserrat)",
            // Linked to the AVELENGTHS title scale: font is a fraction of the title clamp,
            // and spacing/padding are em (of this font), so size and position track the title.
            fontSize: "calc(clamp(3rem, 12vw, 6.5rem) * 0.145)",
            marginTop: "2.2em",
            padding: "0.78em 2.2em",
            gap: "0.7em",
            letterSpacing: "0.2em",
            boxShadow: "0 0 1.2em #fffbe833",
          }}
        >
          <span>Get Tickets</span>
          <span
            aria-hidden
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </a>
      </div>
    </div>
  );
}
