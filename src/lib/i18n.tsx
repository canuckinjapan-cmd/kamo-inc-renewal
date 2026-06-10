import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "jp";

type Dict = Record<string, { en: string; jp: string }>;

export const dict: Dict = {
  "nav.bio": { en: "Bio", jp: "経歴" },
  "nav.services": { en: "Services", jp: "業務内容" },
  "nav.experience": { en: "Experience", jp: "実績" },
  "nav.resources": { en: "Resources", jp: "資料" },
  "nav.contact": { en: "Contact", jp: "お問い合わせ" },

  "hero.tagline": {
    en: "A high-tech marketing catalyst — guiding multinationals, startups, and academic organizations to leverage innovative IT in the Japanese market.",
    jp: "ハイテク・マーケティングのカタリスト ― 多国籍企業、スタートアップ、研究機関の日本市場における革新的IT活用を支援します。",
  },
  "hero.subtitle": { en: "Established 1991 · Japan", jp: "1991年設立 · 日本" },
  "hero.cta.primary": {
    en: "Schedule Strategy Consultation",
    jp: "戦略コンサルティング相談を予約する",
  },
  "hero.cta.secondary": { en: "View Case Studies", jp: "実例・ケーススタディを見る" },

  "menu.bio.tag": { en: "who we are", jp: "私たちについて" },
  "menu.services.tag": { en: "what we do", jp: "提供サービス" },
  "menu.experience.tag": { en: "how you can benefit", jp: "実績と価値" },
  "menu.resources.tag": { en: "useful links", jp: "関連資料" },
  "menu.contact.tag": { en: "get in touch", jp: "ご連絡" },

  "section.clients": { en: "Selected clients & partners", jp: "主要クライアント・パートナー" },

  "footer.tagline": {
    en: "kamo, inc. · Established 1991 · Tokyo, Japan",
    jp: "株式会社 kamo · 1991年設立 · 東京",
  },
  "footer.rights": { en: "All rights reserved.", jp: "All rights reserved." },
};

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: "en",
  setLang: () => {},
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("kamo-lang") : null;
    if (stored === "jp" || stored === "en") setLang(stored);
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined") localStorage.setItem("kamo-lang", lang);
  }, [lang]);
  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}

export function useT() {
  const { lang } = useLang();
  return (key: keyof typeof dict) => dict[key]?.[lang] ?? key;
}
