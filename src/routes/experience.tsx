import { createFileRoute } from "@tanstack/react-router";
import { SectionOpener } from "@/components/SectionOpener";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — kamo, inc." },
      {
        name: "description",
        content:
          "Three decades of guiding clients into the Japanese market: entry, component supply, and APAC partnerships.",
      },
      { property: "og:title", content: "Experience — kamo, inc." },
      { property: "og:description", content: "How you can benefit from our experience." },
    ],
  }),
  component: ExperiencePage,
});

const BLOCKS = [
  {
    quote: "Three decades of market-entry hurdles overcome.",
    body: "As the third largest world economy, Japan has significant consumer markets — both corporate and individual — for quality services and solutions. kamo, inc. has helped clients overcome the hurdles to successful market entry.",
  },
  {
    quote: "Inside the products the world admires.",
    body: "The precision, reliability and quality of Japanese technical products are well regarded worldwide, but a fact often overlooked is that many contain components from overseas sources. kamo, inc. has helped clients win lucrative opportunities to supply critical components of Japanese products.",
  },
  {
    quote: "Japan as a gateway to APAC and beyond.",
    body: "Japanese companies can be valuable partners to realize opportunities in other world markets across APAC and elsewhere. We have helped successfully negotiate license agreements, VARs, OEMs, mergers/acquisitions, IP transfer agreements, banking partnerships and other relationships.",
  },
];

function RayBackdrop() {
  return (
    <svg
      viewBox="-200 -200 400 400"
      className="absolute -right-32 top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.07] pointer-events-none"
      aria-hidden
    >
      {Array.from({ length: 24 }).map((_, i) => (
        <line
          key={i}
          x1={0}
          y1={0}
          x2={0}
          y2={-220}
          stroke="oklch(0.508 0.214 22)"
          strokeWidth={1}
          transform={`rotate(${(i * 360) / 24})`}
        />
      ))}
      <circle r="80" fill="oklch(0.508 0.214 22)" />
    </svg>
  );
}

function ExperiencePage() {
  return (
    <main>
      <SectionOpener jp="実績" en="How you can benefit" kicker="03 — Experience" />

      <section className="relative mx-auto max-w-7xl px-6 pb-24 md:pb-32 overflow-hidden">
        <RayBackdrop />
        <div className="relative space-y-24">
          {BLOCKS.map((b, i) => (
            <article key={i} className="grid md:grid-cols-[1fr_2fr] gap-10 items-start">
              <div className="md:sticky md:top-24">
                <p className="text-[11px] tracking-[0.3em] uppercase text-ink/40 mb-3">0{i + 1}</p>
                <blockquote className="font-serif text-3xl leading-tight text-ink">
                  <span className="block w-8 h-[2px] bg-crimson mb-4" />
                  {b.quote}
                </blockquote>
              </div>
              <p className="text-lg text-ink/80 leading-relaxed">{b.body}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
