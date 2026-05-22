import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "EN" | "中";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (en: string, zh: string) => string;
};

const LangContext = createContext<Ctx | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("EN");
  useEffect(() => {
    try {
      const stored = localStorage.getItem("yt-lang") as Lang | null;
      if (stored === "EN" || stored === "中") setLang(stored);
    } catch { /* noop */ }
  }, []);
  useEffect(() => {
    try { localStorage.setItem("yt-lang", lang); } catch { /* noop */ }
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang === "中" ? "zh-Hant" : "en";
    }
  }, [lang]);
  const t = (en: string, zh: string) => (lang === "中" ? zh : en);
  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>;
}

export function useLang(): Ctx {
  const ctx = useContext(LangContext);
  if (!ctx) {
    // Safe fallback so consumers don't crash if used outside provider during SSR
    return { lang: "EN", setLang: () => {}, t: (en) => en };
  }
  return ctx;
}
