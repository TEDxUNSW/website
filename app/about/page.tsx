export default function AboutPage() {
  const sections = [
    {
      tag: "About TEDxUNSW",
      body: "Re-established in 2023, TEDxUNSW began as a small group of first-year students who wanted to spark something meaningful on campus. Since then, our community has grown to encompass students, changemakers, leaders, UNSW alumni and local businesses. \n\n After hosting multiple successful events on campus, TEDxUNSW has unlocked a new chapter. Our mission is to transform the experience of engaging with Talks, from a moment of inspiration to ongoing connection with transformative ideas. Long after the stage lights dim, we want our community to stay passionate.\n\nOur events are run by students, for students. Because ideas change everything.",
      imageRight: true,
      imageSrc: "/about-page-group.jpg",
      imageSrc2: "/about-page-clapping.jpg",
    },
    {
      tag: "About TEDx",
      body: "x = independently organized event. \n\n In the spirit of discovering and spreading ideas, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. These local, self-organized events are branded TEDx, where x = independently organized TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized. (Subject to certain rules and regulations.)",
      imageRight: false,
      imageSrc: "/about-page-x.jpg",
    },
    {
      tag: "About TED",
      body: "TED is a nonprofit, nonpartisan organization dedicated to discovering, debating and spreading ideas that spark conversation, deepen understanding and drive meaningful change. Our organization is devoted to curiosity, reason, wonder and the pursuit of knowledge — without an agenda. We welcome people from every discipline and culture who seek a deeper understanding of the world and connection with others, and we invite everyone to engage with ideas and activate them in your community.\n\n TED began in 1984 as a conference where Technology, Entertainment and Design converged, but today it spans a multitude of worldwide communities and initiatives exploring everything from science and business to education, arts and global issues. In addition to the TED Talks curated from our annual conferences and published on TED.com, we produce original podcasts, short video series, animated educational lessons (TED-Ed) and TV programs that are translated into more than 100 languages and distributed via partnerships around the world. Each year, thousands of independently run TEDx events. Through the Audacious Project, TED has helped catalyze $6.6 billion in funding for projects that support bold solutions to the world's most urgent challenges — working to make the world more beautiful, sustainable and just. In 2020, TED launched Countdown, an initiative to accelerate solutions to the climate crisis and mobilize a movement for a net-zero future, and in 2023 TED launched TED Democracy to spark a new kind of conversation focused on realistic pathways towards a more vibrant and equitable future. View a full list of TED's many programs and initiatives.\n\n Follow TED on Facebook, Instagram, LinkedIn, TikTok, and X.",
      imageRight: true,
      imageSrc: "/about-page-ted.jpg",
      imageSrc2: "/about-page-badges.jpg",
      imageSrc3: "/about-page-angie.jpg",
      imageSrc4: "/about-page-audience.jpg",
    },
  ];

  return (
    <div
      style={{
        fontFamily: "Georgia, serif",
        maxWidth: 900,
        margin: "0 auto",
        padding: "40px 24px",
        whiteSpace: "pre-line",
      }}
    >
      {sections.map((s, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            flexDirection: s.imageRight ? "row" : "row-reverse",
            gap: 40,
            alignItems: "center",
            marginBottom: 64,
          }}
        >
          <div style={{ flex: 1 }}>
            <h2 style={{ color: "var(--color-red)", marginBottom: 12 }}>
              {s.tag}
            </h2>
            <p style={{ lineHeight: 1.8, color: "white" }}>{s.body}</p>
          </div>
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            <img src={s.imageSrc} alt="TEDxUNSW" style={{ width: "100%" }} />
            {s.imageSrc2 && (
              <img src={s.imageSrc2} alt="TEDxUNSW" style={{ width: "100%" }} />
            )}
            {s.imageSrc3 && (
              <img src={s.imageSrc3} alt="TEDxUNSW" style={{ width: "100%" }} />
            )}
            {s.imageSrc4 && (
              <img src={s.imageSrc4} alt="TEDxUNSW" style={{ width: "100%" }} />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}