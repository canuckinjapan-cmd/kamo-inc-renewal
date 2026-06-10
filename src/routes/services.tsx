import { createFileRoute } from "@tanstack/react-router";
import { SectionOpener } from "@/components/SectionOpener";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — kamo, inc." },
      {
        name: "description",
        content:
          "What we do: business operations, partner facilitation, technical specifications, licensing, hiring, and standards advocacy in Japan.",
      },
      { property: "og:title", content: "Services — kamo, inc." },
      {
        property: "og:description",
        content: "Eight focused practice areas catalyzing IT business in Japan.",
      },
    ],
  }),
  component: ServicesPage,
});

const SERVICES = [
  "Leading the design and implementation of business operations systems for Japan.",
  "Facilitating discussions with Japanese partners to launch business operations and enhance business processes.",
  "Catalyzing the creation of detailed specifications for technical interfaces with Japanese counterparts.",
  "Helping to navigate difficult-to-understand cultural and organizational contexts of doing business in Japan.",
  "Negotiating license agreements, subscription arrangements, VARs, OEMs, mergers / acquisitions, IP transfer, and banking partnerships.",
  "Overseeing hiring and management of engineering, technical support, and operations talent for global cross-functional teams.",
  "Developing functional business processes to maximize cost-benefit and handle exceptions.",
  "Promoting emerging international technical standards in Japan.",
];

function ServicesPage() {
  return (
    <main>
      <SectionOpener jp="業務内容" en="What we do" kicker="02 — Services">
        kamo, inc. operates as a catalyst — translating intent into operational reality across
        language, culture, and engineering boundaries.
      </SectionOpener>

      <section className="mx-auto max-w-5xl px-6">
        <ol className="grid gap-4">
          {SERVICES.map((s, i) => (
            <li
              key={i}
              className="grid grid-cols-[48px_1fr] sm:grid-cols-[64px_1fr] gap-4 p-6 sm:p-8 border border-ink/10 bg-paper hover:bg-white hover:border-crimson/30 transition-all duration-300 shadow-sm hover:shadow-md rounded-[2px] items-start"
            >
              <span className="font-serif text-3xl text-crimson tabular-nums leading-none">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-lg text-ink/85 leading-relaxed">{s}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-7xl px-6 mt-28 pb-24 md:pb-32">
        <h2 className="font-serif text-3xl mb-8">Resources</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          <a
            href="#"
            className="block border border-ink/10 bg-paper p-6 hover:bg-white hover:border-crimson/30 transition-all duration-300 group shadow-sm hover:shadow-md rounded-[2px]"
          >
            <p className="text-[10px] tracking-[0.3em] uppercase text-ink/40 mb-3">
              White paper · PDF
            </p>
            <h3 className="font-serif text-xl mb-2 group-hover:text-crimson transition-colors">
              EDI / Payment Systems
            </h3>
            <p className="text-sm text-ink/60">Reference architecture and lessons learned.</p>
          </a>
          <a
            href="#"
            className="block border border-ink/10 bg-paper p-6 hover:bg-white hover:border-crimson/30 transition-all duration-300 group shadow-sm hover:shadow-md rounded-[2px]"
          >
            <p className="text-[10px] tracking-[0.3em] uppercase text-ink/40 mb-3">
              Case study · Video
            </p>
            <h3 className="font-serif text-xl mb-2 group-hover:text-crimson transition-colors">
              Most Unusual Project
            </h3>
            <p className="text-sm text-ink/60">A walk through an unconventional engagement.</p>
          </a>
          <a
            href="#"
            className="block border border-ink/10 bg-paper p-6 hover:bg-white hover:border-crimson/30 transition-all duration-300 group shadow-sm hover:shadow-md rounded-[2px]"
          >
            <p className="text-[10px] tracking-[0.3em] uppercase text-ink/40 mb-3">
              Case study · Video
            </p>
            <h3 className="font-serif text-xl mb-2 group-hover:text-crimson transition-colors">
              XML & OpenGL
            </h3>
            <p className="text-sm text-ink/60">
              Bridging standards work with productization in Japan.
            </p>
          </a>
        </div>
      </section>
    </main>
  );
}
