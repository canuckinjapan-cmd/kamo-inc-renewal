import { createFileRoute } from "@tanstack/react-router";
import { SectionOpener } from "@/components/SectionOpener";
import { Linkedin } from "lucide-react";

export const Route = createFileRoute("/bio")({
  head: () => ({
    meta: [
      { title: "Bio — kamo, inc." },
      {
        name: "description",
        content:
          "Christopher Keener and kamo, inc.: three decades of bilingual technology business development in Japan.",
      },
      { property: "og:title", content: "Bio — kamo, inc." },
      {
        property: "og:description",
        content: "Who we are: kamo, inc., established 1991, and principal Christopher Keener.",
      },
    ],
  }),
  component: BioPage,
});

const VIDEOS = [
  { title: "Why I Do What I Do", caption: "Principal's perspective" },
  { title: "What I Do", caption: "A walk through the practice" },
  { title: "Most Unusual Project", caption: "Case study" },
  { title: "Japan and Me", caption: "How I got here & culture" },
];

function VideoCard({ title, caption }: { title: string; caption: string }) {
  return (
    <div className="group">
      <div className="aspect-video bg-ink/5 border border-ink/10 flex items-center justify-center relative overflow-hidden">
        <span
          className="block w-14 h-14 rounded-full bg-crimson/90 flex items-center justify-center text-paper"
          aria-hidden
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </div>
      <p className="mt-3 font-serif text-lg">{title}</p>
      <p className="text-xs text-ink/50 tracking-wider uppercase">{caption}</p>
    </div>
  );
}

function BioPage() {
  return (
    <main>
      <SectionOpener jp="経歴" en="Who we are" kicker="01 — Bio">
        kamo, inc. is a Japanese corporation established in 1991 and capitalized at ¥10 million. We
        have successfully delivered results for dozens of corporate clients in the US and Japan.
      </SectionOpener>

      <section className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-16">
        <div className="space-y-6">
          <h2 className="font-serif text-2xl">The company</h2>
          <dl className="space-y-4 text-ink/80">
            <div className="flex gap-6 border-b border-ink/10 pb-3">
              <dt className="text-[11px] tracking-[0.25em] uppercase text-ink/50 w-32 shrink-0">
                Established
              </dt>
              <dd>1991</dd>
            </div>
            <div className="flex gap-6 border-b border-ink/10 pb-3">
              <dt className="text-[11px] tracking-[0.25em] uppercase text-ink/50 w-32 shrink-0">
                Capital
              </dt>
              <dd>¥10,000,000</dd>
            </div>
            <div className="flex gap-6 border-b border-ink/10 pb-3">
              <dt className="text-[11px] tracking-[0.25em] uppercase text-ink/50 w-32 shrink-0">
                Clients
              </dt>
              <dd>Dozens of corporations across US & Japan</dd>
            </div>
            <div className="flex gap-6 border-b border-ink/10 pb-3">
              <dt className="text-[11px] tracking-[0.25em] uppercase text-ink/50 w-32 shrink-0">
                Engagements
              </dt>
              <dd>From 6 months to over 10 years</dd>
            </div>
          </dl>
          <p className="text-ink/70 leading-relaxed">
            kamo, inc. utilizes a network of bilingual professionals with specialized skills and
            experience to devise practical and effective solutions based on client needs.
          </p>
        </div>

        <div className="space-y-5 text-ink/80 leading-relaxed">
          <h2 className="font-serif text-2xl">Christopher Keener — principal</h2>
          <p>
            An American citizen who has lived and worked in Japan for over thirty years, with both a
            technical background and extensive experience negotiating business relationships between
            partners in Japan and the US.
          </p>
          <p>
            Ph.D. from the University of California at Berkeley, where he was a National Science
            Foundation and Fulbright fellow. B.S. with honors from Brown University in Computer
            Science. Fluent in Japanese and English.
          </p>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 mt-2 px-5 py-3 bg-ink text-paper text-[12px] tracking-[0.2em] uppercase hover:bg-crimson transition-all duration-200"
          >
            <Linkedin className="w-4 h-4" strokeWidth={1.5} />
            View LinkedIn
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 mt-24 pb-24">
        <h2 className="font-serif text-3xl mb-8">Videos</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {VIDEOS.map((v) => (
            <VideoCard key={v.title} {...v} />
          ))}
        </div>

        <div className="mt-16 grid sm:grid-cols-2 gap-6">
          <a
            href="#"
            className="group flex items-center justify-between border border-ink/10 bg-paper px-6 py-5 hover:bg-white hover:border-crimson/30 hover:text-crimson transition-all duration-300 shadow-sm hover:shadow-md rounded-[2px]"
          >
            <span className="font-serif text-xl">Industry 4.0 — playlist</span>
            <span className="text-ink/40 group-hover:text-crimson transition-colors">→</span>
          </a>
          <a
            href="#"
            className="group flex items-center justify-between border border-ink/10 bg-paper px-6 py-5 hover:bg-white hover:border-crimson/30 hover:text-crimson transition-all duration-300 shadow-sm hover:shadow-md rounded-[2px]"
          >
            <span className="font-serif text-xl">Coffee — playlist</span>
            <span className="text-ink/40 group-hover:text-crimson transition-colors">→</span>
          </a>
        </div>
      </section>
    </main>
  );
}
