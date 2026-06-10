import { createFileRoute, Link } from "@tanstack/react-router";
import { useLang, useT } from "@/lib/i18n";
import { ClientLogo } from "@/components/ClientLogo";
import logoSvg from "@/assets/kamo-inc-logo-2026.svg";
import inkanSvg from "@/assets/kamo-inc-inkan-trans.svg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Kamo, Inc. — High-Tech Marketing Catalyst | Japan Market Entry",
      },
      {
        name: "description",
        content:
          "Kamo, Inc. facilitates cross-border high-tech business entry, international technology exchange, and strategic marketing partnerships between Western high-tech firms and the Japanese market from Sakaki-machi, Nagano Prefecture.",
      },
      {
        name: "keywords",
        content:
          "High-tech marketing consultancy Japan, international technology transfer, cross-border business catalyst, Nagano high-tech consultant, technology business entry Japan, Sakaki-machi, Nagano Prefecture",
      },
      {
        property: "og:title",
        content: "Kamo, Inc. — High-Tech Marketing Catalyst | Japan Market Entry",
      },
      {
        property: "og:description",
        content:
          "Catalyzing cross-border high-tech business entry, international technology exchange, and strategic marketing partnerships between Western high-tech firms and the Japanese market.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://kamo.co.jp/" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Kamo, Inc. — High-Tech Marketing Catalyst Partner in Japan",
      },
      {
        name: "twitter:description",
        content:
          "Facilitating cross-border tech business entry, partnership matchmaking, and local market operations from Sakaki, Nagano, Japan.",
      },
    ],
  }),
  component: LandingPage,
});

const CLIENTS = [
  "Ambit Energy",
  "Computer Associates",
  "CTC",
  "Evans & Sutherland",
  "Fujitsu",
  "Gakken",
  "Hitachi",
  "Hitachi Zosen",
  "HP",
  "IBM",
  "Keio University",
  "Mannatech",
  "Nippon Steel",
  "Novell",
  "NTT DATA",
  "Oracle",
  "Panasonic",
  "Sun Microsystems",
  "Toshiba",
  "University of Tokyo",
];

function RisingSun() {
  // Concentric rays + crimson disc rendered as SVG behind the logo
  const rays = Array.from({ length: 24 });
  return (
    <svg
      viewBox="-200 -200 400 400"
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vmin] h-[120vmin] max-w-[900px] max-h-[900px] pointer-events-none"
      aria-hidden
    >
      <defs>
        <radialGradient id="sunGlow">
          <stop offset="0%" stopColor="oklch(0.508 0.214 22)" stopOpacity="1" />
          <stop offset="70%" stopColor="oklch(0.508 0.214 22)" stopOpacity="0.85" />
          <stop offset="100%" stopColor="oklch(0.508 0.214 22)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <g className="origin-center" style={{ transformBox: "fill-box" }}>
        {rays.map((_, i) => {
          const angle = (i * 360) / rays.length;
          return (
            <line
              key={i}
              x1={0}
              y1={0}
              x2={0}
              y2={-220}
              stroke="oklch(0.508 0.214 22)"
              strokeOpacity={0.18}
              strokeWidth={i % 2 === 0 ? 1.2 : 0.6}
              strokeDasharray="240"
              transform={`rotate(${angle})`}
              className="animate-ray"
              style={{ animationDelay: `${0.5 + (i % 6) * 0.08}s` }}
            />
          );
        })}
        <g
          className="animate-sun-rise"
          style={{ transformOrigin: "center", animationDelay: "0.1s" }}
        >
          <circle
            cx="0"
            cy="0"
            r="120"
            fill="url(#sunGlow)"
            className="hidden md:block"
            style={{ transformOrigin: "center" }}
          />
        </g>
      </g>
    </svg>
  );
}

function ClientMarquee() {
  const t = useT();
  const { lang } = useLang();
  const firstHalf = CLIENTS.slice(0, 10);
  const secondHalf = CLIENTS.slice(10);

  const row1 = [...firstHalf, ...firstHalf];
  const row2 = [...secondHalf, ...secondHalf];

  return (
    <section className="marquee-pause py-8 md:py-10 border-y border-[#0F172A]/10 bg-paper overflow-hidden">
      <p
        className={`text-center text-[13px] tracking-[0.18em] uppercase text-[#0F172A]/50 mb-6 -mt-2 font-normal ${
          lang === "jp" ? "font-jp" : "font-sans"
        }`}
        style={lang === "jp" ? { fontFamily: "var(--font-jp)" } : undefined}
      >
        {t("section.clients")}
      </p>
      <div className="flex flex-col gap-6 md:gap-7 relative">
        <div className="relative">
          <div className="flex gap-16 whitespace-nowrap animate-marquee w-max items-center">
            {row1.map((c, i) => (
              <div
                key={i}
                className="flex items-center gap-16 text-[#0F172A]/65 hover:text-crimson transition-colors duration-300 shrink-0"
                title={c}
              >
                <ClientLogo name={c} />
                <span
                  className="block w-1.5 h-1.5 rounded-full bg-crimson/50 shrink-0"
                  aria-hidden
                />
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="flex gap-16 whitespace-nowrap animate-marquee-reverse w-max items-center">
            {row2.map((c, i) => (
              <div
                key={i}
                className="flex items-center gap-16 text-[#0F172A]/65 hover:text-crimson transition-colors duration-300 shrink-0"
                title={c}
              >
                <ClientLogo name={c} />
                <span
                  className="block w-1.5 h-1.5 rounded-full bg-crimson/50 shrink-0"
                  aria-hidden
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MenuCard({
  to,
  en,
  jp,
  blurb,
  num,
}: {
  to: string;
  en: string;
  jp: string;
  blurb: string;
  num: string;
}) {
  const gradientId = `sunGlowCard-${num}`;
  return (
    <Link
      to={to}
      className="group relative block border border-[#0F172A]/10 bg-paper p-8 hover:bg-white hover:border-crimson/30 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-md rounded-[2px]"
    >
      <div className="absolute -right-12 -bottom-12 w-36 h-36 pointer-events-none transform scale-75 opacity-0 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500 ease-out z-0">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <radialGradient id={gradientId} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="oklch(0.508 0.214 22)" stopOpacity="1" />
              <stop offset="70%" stopColor="oklch(0.508 0.214 22)" stopOpacity="0.8" />
              <stop offset="100%" stopColor="oklch(0.508 0.214 22)" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="50" fill={`url(#${gradientId})`} />
        </svg>
      </div>
      <div className="relative z-10 flex items-start justify-between gap-4">
        <div>
          <p className="text-[11px] tracking-[0.3em] uppercase text-[#0F172A]/40 mb-3 font-mono">
            {num}
          </p>
          <h3 className="font-serif text-3xl mb-1 text-[#0F172A]">{en}</h3>
          <p
            className="font-jp text-[#0F172A]/60 text-sm mb-4"
            style={{ fontFamily: "var(--font-jp)" }}
          >
            {jp}
          </p>
          <p className="text-sm text-[#0F172A]/70 max-w-xs">{blurb}</p>
        </div>
      </div>
    </Link>
  );
}

function LandingPage() {
  const t = useT();
  const { lang } = useLang();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ConsultingBusiness",
    name: "Kamo, Inc.",
    alternateName: "株式会社Kamo",
    image: "https://kamo.co.jp/assets/kamo-inc-logo-2026.svg",
    "@id": "https://kamo.co.jp/#organization",
    url: "https://kamo.co.jp/",
    telephone: "+81-268-81-1111",
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Sakaki-machi",
      addressLocality: "Hanishina-gun",
      addressRegion: "Nagano",
      postalCode: "389-0601",
      addressCountry: "JP",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 36.4633,
      longitude: 138.1788,
    },
    description:
      "B2B enterprise corporate consultant facilitating cross-border high-tech business entry, international technology exchange, and strategic marketing partnerships between Western high-tech firms and the Japanese market.",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
  };

  return (
    <main className="bg-[#F8FAFC]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative min-h-[88vh] landscape:min-h-[520px] md:landscape:min-h-[88vh] flex items-center justify-center overflow-hidden bg-[#F8FAFC] pt-6 pb-10 landscape:pt-28 landscape:pb-24 md:landscape:py-0">
        <RisingSun />

        {/* Mobile top-left crimson sun disc container */}
        <div
          className="absolute -top-16 -left-16 w-[360px] h-[360px] pointer-events-none md:hidden overflow-visible"
          aria-hidden
        >
          <svg
            viewBox="0 0 400 400"
            className="w-full h-full animate-sun-rise"
            style={{ animationDelay: "0.1s", transformOrigin: "center" }}
          >
            <defs>
              <radialGradient id="sunGlowMobile" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="oklch(0.508 0.214 22)" stopOpacity="1" />
                <stop offset="70%" stopColor="oklch(0.508 0.214 22)" stopOpacity="0.85" />
                <stop offset="100%" stopColor="oklch(0.508 0.214 22)" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="200" cy="200" r="200" fill="url(#sunGlowMobile)" />
          </svg>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <img
            src={logoSvg}
            alt="kamo, inc."
            className="mx-auto w-full max-w-2xl landscape:max-w-sm md:landscape:max-w-2xl h-auto animate-logo-fade drop-shadow-[0_0_18px_rgba(248,250,252,0.85)]"
            style={{
              filter:
                "drop-shadow(0 1px 0 rgba(255,255,255,0.9)) drop-shadow(0 0 20px rgba(248,250,252,0.7))",
            }}
          />
          <p
            className="mt-10 font-serif text-xl md:text-2xl leading-snug text-[#0F172A] animate-logo-fade"
            style={{ animationDelay: "1.4s" }}
          >
            {t("hero.tagline")}
          </p>
          <p
            className={`mt-6 text-[13px] tracking-[0.18em] uppercase text-[#0F172A]/50 animate-logo-fade font-normal ${
              lang === "jp" ? "font-jp" : "font-sans"
            }`}
            style={{
              animationDelay: "1.7s",
              ...(lang === "jp" ? { fontFamily: "var(--font-jp)" } : {}),
            }}
          >
            {t("hero.subtitle")}
          </p>
          <div
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-5 animate-logo-fade"
            style={{ animationDelay: "1.9s" }}
          >
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-crimson hover:bg-crimson/90 text-[12px] md:text-[13px] font-sans font-medium uppercase tracking-[0.2em] text-white px-8 py-4 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 hover:scale-[1.1] sm:origin-right"
            >
              {t("hero.cta.primary")}
            </Link>
            <Link
              to="/experience"
              className="w-full sm:w-auto inline-flex items-center justify-center border border-[#0F172A]/20 hover:border-crimson text-[12px] md:text-[13px] font-sans font-medium uppercase tracking-[0.2em] text-[#0F172A]/80 hover:text-crimson px-8 py-4 transition-all duration-300 bg-white hover:-translate-y-0.5 hover:scale-[1.1] sm:origin-left"
            >
              {t("hero.cta.secondary")}
            </Link>
          </div>
        </div>
      </section>

      <ClientMarquee />

      {/* Menu / Bio card section background F8FAFC */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#0F172A]/10">
            <MenuCard num="01" to="/bio" en="Bio" jp="経歴" blurb={t("menu.bio.tag")} />
            <MenuCard
              num="02"
              to="/services"
              en="Services"
              jp="業務内容"
              blurb={t("menu.services.tag")}
            />
            <MenuCard
              num="03"
              to="/experience"
              en="Experience"
              jp="実績"
              blurb={t("menu.experience.tag")}
            />
            <MenuCard
              num="04"
              to="/resources"
              en="Resources"
              jp="資料"
              blurb={t("menu.resources.tag")}
            />
            <MenuCard
              num="05"
              to="/contact"
              en="Contact"
              jp="お問い合わせ"
              blurb={t("menu.contact.tag")}
            />
            <div className="group relative hidden border border-[#0F172A]/10 bg-paper p-8 transition-all duration-300 md:flex items-center justify-center hover:bg-white hover:border-crimson/30 shadow-sm hover:shadow-md overflow-hidden rounded-[2px]">
              <img
                src={inkanSvg}
                alt=""
                className="w-32 h-32 opacity-25 transition-all duration-500 group-hover:scale-105 group-hover:opacity-35"
                aria-hidden
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
