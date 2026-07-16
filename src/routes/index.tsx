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
  "IBM",
  "Oracle",
  "Hitachi",
  "Fujitsu",
  "NTT DATA",
  "Panasonic",
  "Nippon Steel",
  "Toshiba",
  "CTC",
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

  const row = [...CLIENTS, ...CLIENTS, ...CLIENTS, ...CLIENTS];

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
      <div className="relative">
        <div className="flex gap-16 whitespace-nowrap animate-marquee w-max items-center">
          {row.map((c, i) => (
            <div
              key={i}
              className="flex items-center gap-16 text-[#0F172A]/65 hover:text-crimson transition-colors duration-300 shrink-0"
              title={c}
            >
              <ClientLogo name={c} />
              <span className="block w-1.5 h-1.5 rounded-full bg-crimson/50 shrink-0" aria-hidden />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MenuCard({
  to,
  en,
  jp,
  subtitleEn,
  num,
  items,
  isContact,
}: {
  to: string;
  en: string;
  jp: string;
  subtitleEn: string;
  num: string;
  items?: { en: string; jp: string }[];
  isContact?: boolean;
}) {
  const gradientId = `sunGlowCard-${num}`;
  const { lang } = useLang();
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
      <div className="relative z-10 flex flex-col justify-between h-full">
        <div>
          <div className="flex items-baseline justify-between mb-6 border-b border-[#0F172A]/5 pb-3">
            <div className="flex items-baseline gap-3">
              <h3 className="font-serif text-3xl text-[#0F172A]">{en}</h3>
              <span className="text-xs font-sans text-[#0F172A]/50 tracking-wider menu-card-subtitle">
                {subtitleEn}
              </span>
            </div>
            <span
              className="font-jp text-[#0F172A]/50 text-xs tracking-widest"
              style={{ fontFamily: "var(--font-jp)" }}
            >
              {jp}
            </span>
          </div>

          {items && (
            <ul className="space-y-3.5 text-sm text-[#0F172A]/80 font-sans leading-relaxed text-left">
              {items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-crimson shrink-0 mt-1.5 text-[8px]">•</span>
                  <div>{lang === "jp" ? item.jp : item.en}</div>
                </li>
              ))}
            </ul>
          )}

          {isContact && (
            <div className="py-8 flex justify-center">
              <div className="inline-flex items-center justify-center bg-crimson text-white px-8 py-4 text-[12px] md:text-[13px] font-sans font-medium uppercase tracking-[0.2em] shadow-md transition-all duration-300 rounded-[2px] group-hover:bg-crimson/90 group-hover:shadow-lg group-hover:-translate-y-0.5 group-hover:scale-[1.05] border-none">
                <span>{lang === "jp" ? "対話を始める" : "Start a Conversation"}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

function LandingPage() {
  const t = useT();
  const { lang } = useLang();

  const bioItems = [
    {
      en: "Established 1991 with long-term Japan-market experience.",
      jp: "1991年設立、長年にわたる日本市場での豊富な実績と経験。",
    },
    {
      en: "Principal background in technology, research, and cross-border negotiations.",
      jp: "技術、研究開発、およびクロスボーダー交渉における代表者の深いバックグラウンド。",
    },
    {
      en: "Best place for trust, origin story, and relationship depth.",
      jp: "信頼、創業ストーリー、そして関係性の深さを築く最適なパートナー。",
    },
  ];

  const servicesItems = [
    { en: "Japan market entry and validation.", jp: "日本市場への参入および妥当性検証。" },
    {
      en: "Business development and strategic partnerships.",
      jp: "事業開発および戦略的パートナーシップ。",
    },
    {
      en: "Technology commercialization and academic-industry support.",
      jp: "技術の商業化および産学連携支援。",
    },
  ];

  const experienceItems = [
    {
      en: "Market-entry obstacles solved over multiple decades.",
      jp: "数十年にわたり市場参入における障害を克服・解決。",
    },
    {
      en: "Support for component supply and strategic relationships.",
      jp: "部品供給および戦略的関係構築へのサポート。",
    },
    {
      en: "Japan as a platform for wider APAC opportunities.",
      jp: "より広範なアジア太平洋（APAC）展開のためのプラットフォームとしての日本。",
    },
  ];

  const resourcesItems = [
    { en: "Doing Business in Japan - White papers", jp: "日本でのビジネス展開 - ホワイトペーパー" },
    {
      en: "Robotics and Industry briefings - Slides",
      jp: "ロボティクスおよび業界ブリーフィング - スライド資料",
    },
    {
      en: "Culture, technology, and market insight - Videos",
      jp: "文化、技術、および市場インサイト - ビデオ・動画",
    },
  ];

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
          <div
            id="menu-cards-grid"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[10px]"
          >
            <MenuCard
              num="01"
              to="/bio"
              en="Bio"
              jp="経歴"
              subtitleEn="who we are"
              items={bioItems}
            />
            <MenuCard
              num="02"
              to="/services"
              en="Services"
              jp="業務内容"
              subtitleEn="what we do"
              items={servicesItems}
            />
            <MenuCard
              num="03"
              to="/experience"
              en="Experience"
              jp="実績"
              subtitleEn="how you can benefit"
              items={experienceItems}
            />
            <MenuCard
              num="04"
              to="/resources"
              en="Resources"
              jp="資料"
              subtitleEn="useful links"
              items={resourcesItems}
            />
            <MenuCard
              num="05"
              to="/contact"
              en="Contact"
              jp="お問い合わせ"
              subtitleEn="get in touch"
              isContact
            />
            <div
              id="crest-card"
              className="group relative hidden border border-[#0F172A]/10 bg-paper p-8 transition-all duration-300 lg:flex flex-col items-center justify-center hover:bg-white hover:border-crimson/30 shadow-sm hover:shadow-md overflow-hidden rounded-[2px]"
            >
              <p className="mb-4 font-sans text-xs text-black opacity-0 max-h-0 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:max-h-12 text-center select-none pointer-events-none">
                This hanko (stamp) says: Kabushiki gaisha Kamo.
              </p>
              <img
                src={inkanSvg}
                alt=""
                className="w-32 h-32 opacity-55 transition-all duration-500 group-hover:scale-105 group-hover:opacity-85"
                aria-hidden
              />
              <p className="mt-4 font-sans text-xs text-black opacity-0 max-h-0 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:max-h-12 text-center select-none pointer-events-none">
                The meaning in English is: Kamo, Inc.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
