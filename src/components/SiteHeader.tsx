import { Link } from "@tanstack/react-router";
import { useLang, useT } from "@/lib/i18n";
import { useEffect, useState } from "react";
import logoSvg from "@/assets/kamo-inc-logo-2026.svg";
import usFlag from "@/assets/us.png";
import jpFlag from "@/assets/jp.png";
import { Menu, X } from "lucide-react";

export function SiteHeader() {
  const { lang, setLang } = useLang();
  const t = useT();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const links = [
    { to: "/bio", label: t("nav.bio") },
    { to: "/services", label: t("nav.services") },
    { to: "/experience", label: t("nav.experience") },
    { to: "/resources", label: t("nav.resources") },
    { to: "/contact", label: t("nav.contact") },
  ] as const;

  return (
    <>
      <header
        className={`sticky top-0 z-50 backdrop-blur-md bg-paper/80 border-b transition-all duration-300 ${
          isScrolled
            ? "border-ink/10 shadow-[0_12px_40px_rgba(14,14,14,0.06)]"
            : "border-transparent shadow-none"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between gap-6">
          <Link
            to="/"
            onClick={(e) => {
              if (window.scrollY > 10) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="flex items-center gap-3 group relative"
          >
            <img src={logoSvg} alt="kamo, inc." className="h-9 w-auto" />
            {isScrolled && (
              <div className="absolute top-[125%] left-0 z-50 rounded-md bg-crimson px-2.5 py-1 text-[9px] font-sans font-medium tracking-[0.16em] text-white uppercase whitespace-nowrap shadow-md opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-350 pointer-events-none">
                <div className="absolute top-0 left-5 h-1.5 w-1.5 -translate-y-[40%] rotate-45 bg-crimson" />
                Return to top
              </div>
            )}
          </Link>

          <nav className="hidden lg:flex items-center gap-7 text-[13px] tracking-[0.18em] uppercase">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`text-ink/70 hover:text-crimson hover:font-extrabold transition-all duration-200 ${
                  lang === "jp" ? "font-jp" : "font-sans"
                }`}
                style={lang === "jp" ? { fontFamily: "var(--font-jp)" } : undefined}
                activeProps={{ className: "text-crimson font-extrabold" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setLang("en")}
                className="focus:outline-none"
                aria-label="English"
              >
                <img
                  src={usFlag}
                  alt="English"
                  referrerPolicy="no-referrer"
                  className={`h-[18px] w-auto object-contain rounded-[2px] border border-ink/10 shadow-xs transition-all duration-300 ${
                    lang === "en"
                      ? "brightness-100 opacity-100 cursor-default"
                      : "brightness-[0.75] opacity-70 hover:brightness-100 hover:opacity-100 cursor-pointer"
                  }`}
                />
              </button>
              <span className="text-ink/10 select-none">/</span>
              <button
                onClick={() => setLang("jp")}
                className="focus:outline-none"
                aria-label="日本語"
              >
                <img
                  src={jpFlag}
                  alt="日本語"
                  referrerPolicy="no-referrer"
                  className={`h-[18px] w-auto object-contain rounded-[2px] border border-ink/10 shadow-xs transition-all duration-300 ${
                    lang === "jp"
                      ? "brightness-100 opacity-100 cursor-default"
                      : "brightness-[0.75] opacity-70 hover:brightness-100 hover:opacity-100 cursor-pointer"
                  }`}
                />
              </button>
            </div>

            {/* Hamburger Button (Mobile, Tablet Portrait & Mobile Landscape) */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden flex items-center justify-center p-2 text-ink/70 hover:text-crimson transition-all duration-300 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Drawer Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-paper/98 flex flex-col lg:hidden transition-all duration-300 animate-fade-in animate-duration-200 overflow-y-auto">
          <div className="mx-auto w-full max-w-7xl px-6 h-16 flex items-center justify-between gap-6 border-b border-ink/5 bg-paper shrink-0">
            <Link
              to="/"
              onClick={() => {
                setIsMenuOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center gap-3"
            >
              <img src={logoSvg} alt="kamo, inc." className="h-9 w-auto" />
            </Link>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setLang("en")}
                  className="focus:outline-none"
                  aria-label="English"
                >
                  <img
                    src={usFlag}
                    alt="English"
                    referrerPolicy="no-referrer"
                    className={`h-[18px] w-auto object-contain rounded-[2px] border border-ink/10 shadow-xs transition-all duration-300 ${
                      lang === "en"
                        ? "brightness-100 opacity-100 cursor-default"
                        : "brightness-[0.75] opacity-70 hover:brightness-100 hover:opacity-100 cursor-pointer"
                    }`}
                  />
                </button>
                <span className="text-ink/10 select-none">/</span>
                <button
                  onClick={() => setLang("jp")}
                  className="focus:outline-none"
                  aria-label="日本語"
                >
                  <img
                    src={jpFlag}
                    alt="日本語"
                    referrerPolicy="no-referrer"
                    className={`h-[18px] w-auto object-contain rounded-[2px] border border-ink/10 shadow-xs transition-all duration-300 ${
                      lang === "jp"
                        ? "brightness-100 opacity-100 cursor-default"
                        : "brightness-[0.75] opacity-70 hover:brightness-100 hover:opacity-100 cursor-pointer"
                    }`}
                  />
                </button>
              </div>

              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-ink/70 hover:text-crimson transition-colors focus:outline-none"
                aria-label="Close Menu"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-start py-6 pt-12 md:pt-20 px-8 md:px-12 space-y-6 landscape:space-y-4 bg-paper min-h-[300px]">
            <div className="space-y-5 landscape:space-y-3 max-w-sm mx-auto w-full">
              {links.map((link, idx) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className="group flex items-baseline justify-between py-3 border-b border-ink/5 hover:border-crimson/30 transition-all duration-300"
                  activeProps={{ className: "text-crimson border-crimson/30 font-extrabold" }}
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-[10px] text-ink/40">0{idx + 1}</span>
                    <span
                      style={lang === "jp" ? { fontFamily: "var(--font-jp)" } : undefined}
                      className={`text-lg font-medium tracking-[0.16em] uppercase text-ink/80 group-hover:text-crimson group-hover:font-extrabold transition-all duration-200 ${
                        lang === "jp" ? "font-jp" : "font-sans"
                      }`}
                    >
                      {link.label}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-ink/30 group-hover:text-crimson/50 transition-colors">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
