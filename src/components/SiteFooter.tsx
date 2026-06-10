import { Linkedin, Facebook } from "lucide-react";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/10 pb-6">
      <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="text-left">
          <p className="text-sm font-sans text-ink/75">
            <span className="text-crimson">©</span> {currentYear} kamo, inc. ・Established 1991
            ・Sakaki, Japan - All Rights Reserved
          </p>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-ink/60 hover:text-crimson transition-colors duration-200"
          >
            <Linkedin className="w-5 h-5" strokeWidth={1.5} />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            aria-label="X (formerly Twitter)"
            className="text-ink/60 hover:text-crimson transition-colors duration-200"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="text-ink/60 hover:text-crimson transition-colors duration-200"
          >
            <Facebook className="w-5 h-5" strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </footer>
  );
}
