import type { ReactNode } from "react";

interface SectionOpenerProps {
  jp: string;
  en: string;
  kicker?: string;
  children?: ReactNode;
}

export function SectionOpener({ jp, en, kicker, children }: SectionOpenerProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-24 pb-16 animate-fade-up">
      <div className="flex items-start gap-8">
        <div className="flex flex-col items-center gap-4 pt-2">
          <span className="block w-4 h-4 rounded-full bg-crimson" aria-hidden />
          <span
            className="font-jp text-ink/70 text-sm tategaki hidden sm:block"
            style={{ fontFamily: "var(--font-jp)" }}
          >
            {jp}
          </span>
        </div>
        <div className="flex-1">
          {kicker && (
            <p className="text-[11px] tracking-[0.3em] uppercase text-ink/50 mb-3">{kicker}</p>
          )}
          <h1 className="font-serif text-5xl md:text-6xl text-ink leading-[1.05]">{en}</h1>
          {children && <div className="mt-6 max-w-2xl text-ink/70 leading-relaxed">{children}</div>}
        </div>
      </div>
      <div className="hairline mt-16" />
    </section>
  );
}
