import { createFileRoute } from "@tanstack/react-router";
import { SectionOpener } from "@/components/SectionOpener";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — kamo, inc." },
      {
        name: "description",
        content:
          "White papers, slide decks, and video playlists on doing business in Japan, EDI, robotics, and Industry X.0.",
      },
      { property: "og:title", content: "Resources — kamo, inc." },
      { property: "og:description", content: "Useful links and reference materials." },
    ],
  }),
  component: ResourcesPage,
});

type Item = { tag: string; title: string; desc: string; href?: string };

const PAPERS: Item[] = [
  {
    tag: "White paper · PDF",
    title: "Doing Business in Japan",
    desc: "A practical overview for entering the Japanese market.",
  },
  {
    tag: "White paper · PDF",
    title: "EDI / Payment Methods",
    desc: "An architecture and decision guide.",
  },
  {
    tag: "Philosophy · PDF",
    title: "Small is Beautiful — philosophy & links",
    desc: "References that have shaped our practice.",
  },
];
const DECKS: Item[] = [
  { tag: "Slides · PDF", title: "Robotics — Dec 18 presentation", desc: "Conference deck." },
  { tag: "Slides · PDF", title: "Private Space Exploration", desc: "Industry briefing." },
  { tag: "Slides · PDF", title: "Sakaki Industry", desc: "Sector deep-dive." },
];
const VIDEOS: Item[] = [
  { tag: "Playlist", title: "Industry X.0 — video playlist", desc: "" },
  { tag: "Video", title: "The Value of Culture", desc: "" },
  { tag: "Playlist", title: "Coffee — video playlist", desc: "" },
];

function Card({ tag, title, desc }: Item) {
  return (
    <a
      href="#"
      className="block border border-ink/5 bg-paper p-6 hover:bg-white hover:border-crimson/30 transition-all duration-300 group shadow-sm hover:shadow-md"
    >
      <p className="text-[10px] tracking-[0.3em] uppercase text-ink/40 mb-3">{tag}</p>
      <h3 className="font-serif text-xl mb-2 group-hover:text-crimson transition-colors">
        {title}
      </h3>
      {desc && <p className="text-sm text-ink/60">{desc}</p>}
    </a>
  );
}

function Group({ heading, items }: { heading: string; items: Item[] }) {
  return (
    <section>
      <h2 className="font-serif text-3xl mb-6">{heading}</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((i) => (
          <Card key={i.title} {...i} />
        ))}
      </div>
    </section>
  );
}

function ResourcesPage() {
  return (
    <main>
      <SectionOpener jp="資料" en="Useful links" kicker="04 — Resources" />
      <div className="mx-auto max-w-7xl px-6 space-y-20 pb-24 md:pb-32">
        <Group heading="White papers" items={PAPERS} />
        <Group heading="Slides" items={DECKS} />
        <Group heading="Video" items={VIDEOS} />
      </div>
    </main>
  );
}
