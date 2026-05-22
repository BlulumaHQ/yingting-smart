import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useLang } from "@/lib/i18n";

function LangSwitcher({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLang();
  return (
    <div className={`inline-flex items-center gap-2 text-[12px] tracking-[0.18em] ${className}`}>
      {(["EN", "中"] as const).map((code, i) => (
        <span key={code} className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={lang === code}
            className={`transition-colors ${lang === code ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
          >
            {code}
          </button>
          {i === 0 && <span className="h-3 w-px bg-border" />}
        </span>
      ))}
    </div>
  );
}
import logo from "@/assets/logo.webp";
import iconTel from "@/assets/yt/icon-tel.svg";
import iconLine from "@/assets/yt/icon-line.svg";
import iconFb from "@/assets/yt/icon-fb.svg";
import iconIg from "@/assets/yt/icon-ig.svg";
import { CONTACT } from "@/content/site";
import footerLamp from "@/assets/yt/footer-lamp.png";

const NAV = [
  { n: "01", label: "Home",     zh: "首頁", to: "/#top" },
  { n: "02", label: "About",    zh: "關於", to: "/#about" },
  { n: "03", label: "Systems",  zh: "系統", to: "/#systems" },
  { n: "04", label: "FAQ",      zh: "常見問題", to: "/#faq" },
  { n: "05", label: "Insights", zh: "洞察", to: "/#insights" },
  { n: "06", label: "Contact",  zh: "聯絡", to: "/#contact" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { lang } = useLang();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-xl border-b border-border" : ""
      }`}
    >
      <div className="mx-auto flex max-w-[1480px] items-center justify-between px-6 py-3 md:px-12 md:py-4">
        <Link to="/" className="flex items-center" aria-label="穎庭智能 — Home">
          <img src={logo} alt="穎庭智能 Yingting Smart" width={96} height={96}
            className="h-16 w-auto md:h-20" />
        </Link>
        <nav className="hidden md:flex items-center gap-9 lg:gap-11">
          {NAV.map((l) => (
            <a key={l.to} href={l.to}
              className="group inline-flex items-baseline gap-2 text-[13px] tracking-wide text-muted-foreground hover:text-foreground transition-colors">
              <span className="text-[10px] font-medium tracking-[0.18em] text-accent">{l.n}</span>
              <span className="font-normal">{lang === "中" ? l.zh : l.label}</span>
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-5">
          <LangSwitcher />
          <a href={`tel:${CONTACT.phoneIntl}`}
            className="inline-flex items-center gap-3 text-[13px] tracking-wide text-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {CONTACT.phone}
          </a>
        </div>
        <div className="md:hidden flex items-center gap-4">
          <LangSwitcher />
          <button aria-label="Menu" onClick={() => setOpen(v => !v)} className="flex flex-col gap-1.5">
            <span className={`block h-px w-7 bg-foreground transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`} />
            <span className={`block h-px w-7 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block h-px w-7 bg-foreground transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="flex flex-col px-6 py-6">
            {NAV.map((l) => (
              <a key={l.to} href={l.to} onClick={() => setOpen(false)}
                className="py-3 flex items-baseline gap-3 text-2xl font-light tracking-tight">
                <span className="text-[11px] tracking-[0.2em] text-accent">{l.n}</span>
                {lang === "中" ? l.zh : l.label}
              </a>
            ))}
            <div className="flex items-center justify-between pt-6 mt-2 border-t border-border">
              <a href={`tel:${CONTACT.phoneIntl}`} className="text-eyebrow text-accent">{CONTACT.phone}</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}


export function StickyContact() {
  const items = [
    { icon: iconTel, label: "Call", href: `tel:${CONTACT.phoneIntl}` },
    { icon: iconLine, label: "LINE", href: CONTACT.lineUrl },
    { icon: iconFb, label: "Facebook", href: CONTACT.fb },
    { icon: iconIg, label: "Instagram", href: CONTACT.ig },
  ];
  return (
    <>
      {/* Desktop sticky right column */}
      <div className="hidden md:flex fixed right-5 top-1/2 -translate-y-1/2 z-40 flex-col gap-2">
        {items.map((it) => (
          <a key={it.label} href={it.href} target="_blank" rel="noreferrer"
            aria-label={it.label}
            className="group h-11 w-11 grid place-items-center rounded-full bg-accent shadow-[0_6px_24px_-12px_rgba(92,198,208,0.65)]
                       transition-transform hover:scale-110 hover:bg-foreground">
            <img src={it.icon} alt="" className="h-5 w-5 transition-transform group-hover:scale-110" />
          </a>
        ))}
      </div>
      {/* Mobile bottom bar — brand cyan, premium floating */}
      <div className="md:hidden fixed inset-x-4 bottom-4 z-40 flex items-center justify-around gap-2
                      rounded-full bg-accent px-4 py-2.5
                      shadow-[0_18px_40px_-12px_oklch(0.78_0.085_210/0.55)]
                      ring-1 ring-[oklch(0.78_0.085_210/0.4)]">
        {items.map((it) => (
          <a key={it.label} href={it.href} target="_blank" rel="noreferrer"
            aria-label={it.label}
            className="h-9 w-9 grid place-items-center rounded-full transition-transform active:scale-95">
            <img src={it.icon} alt="" className="h-5 w-5 [filter:brightness(0)_invert(1)]" />
          </a>
        ))}
      </div>
    </>
  );
}

export function SiteFooter() {
  const { t } = useLang();
  return (
    <footer
      className="relative overflow-hidden text-background"
      style={{ backgroundColor: "oklch(0.32 0.028 220)" }}
    >
      {/* Lamp atmosphere — quiet, almost imperceptible */}
      <img
        src={footerLamp}
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.18] select-none mix-blend-screen"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[oklch(0.32_0.028_220/0.55)] to-[oklch(0.28_0.028_220)]" />
      {/* Soft brand glow accents */}
      <div className="pointer-events-none absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full
                      bg-[radial-gradient(circle_at_center,oklch(0.78_0.085_210/0.25),transparent_70%)]" />
      <div className="pointer-events-none absolute -bottom-40 -left-24 h-[380px] w-[380px] rounded-full
                      bg-[radial-gradient(circle_at_center,oklch(0.78_0.085_210/0.18),transparent_70%)]" />

      <div className="relative mx-auto max-w-[1480px] px-6 md:px-12 pt-24 md:pt-32 pb-10">
        {/* Oversized brand statement */}
        <div className="grid grid-cols-12 gap-10 items-end">
          <div className="col-span-12 md:col-span-8 min-w-0">
            <div className="flex items-center gap-3 text-[11px] tracking-[0.28em] uppercase text-background/55 mb-8">
              <span className="h-px w-10 bg-accent shrink-0" />
              <span className="break-words">Yingting Smart · 穎庭國際智能科技</span>
            </div>
            {/* Bilingual oversized statement — keeps brand intact while supporting language toggle */}
            {t(
              "EN",
              "中",
            ) === "中" ? (
              <h2 className="font-light tracking-[-0.02em] leading-[0.95] break-words
                             text-[12vw] md:text-[8vw] lg:text-[7.5rem] xl:text-[8.5rem]">
                安靜的<span className="italic-serif text-accent">科技，</span>
                <br />溫暖的<span className="italic-serif text-accent">家。</span>
              </h2>
            ) : (
              <h2 className="font-light tracking-[-0.02em] leading-[0.95] break-words
                             text-[12vw] md:text-[9vw] lg:text-[8.2rem] xl:text-[9.5rem]">
                Quiet
                <span className="italic-serif text-accent"> technology,</span>
                <br />warm <span className="italic-serif text-accent">home.</span>
              </h2>
            )}
          </div>
          <div className="col-span-12 md:col-span-4 md:pl-6 min-w-0">
            <img src={logo} alt="穎庭智能 Yingting Smart" width={160} height={160}
              className="h-24 md:h-28 w-auto opacity-95 [filter:brightness(0)_invert(1)]" />
            <p className="mt-6 max-w-xs text-[13.5px] leading-[1.85] text-background/65 break-words">
              {t(
                "Yingting Smart designs and installs Apple HomeKit systems for homes that feel calm, intelligent and beautifully lived in.",
                "穎庭智能提供 Apple HomeKit 智慧家庭設計與安裝服務，打造安定、智慧、真正適合生活的居家空間。"
              )}
            </p>
          </div>
        </div>

        {/* Hairline divider */}
        <div className="mt-20 md:mt-28 h-px w-full bg-background/15" />

        {/* Lower nav row — minimal, no contact duplication */}
        <div className="mt-10 grid grid-cols-12 gap-8 items-start">
          <div className="col-span-12 md:col-span-5 min-w-0">
            <div className="text-[10px] tracking-[0.28em] uppercase text-background/45 mb-4">Explore</div>
            <nav className="flex flex-wrap gap-x-7 gap-y-2 text-[14px] text-background/85">
              <a href="/#about" className="hover:text-accent transition-colors">{t("About", "關於我們")}</a>
              <a href="/#systems" className="hover:text-accent transition-colors">{t("Systems", "智慧整合")}</a>
              <a href="/#faq" className="hover:text-accent transition-colors">{t("FAQ", "常見問題")}</a>
              <a href="/#insights" className="hover:text-accent transition-colors">{t("Insights", "專欄")}</a>
              <a href="/#contact" className="hover:text-accent transition-colors">{t("Contact", "聯絡我們")}</a>
            </nav>
          </div>
          <div className="col-span-12 md:col-span-4 min-w-0">
            <div className="text-[10px] tracking-[0.28em] uppercase text-background/45 mb-4">Studio</div>
            <p className="text-[14px] text-background/85 leading-[1.7] break-words">
              No. 500, Sec. 5, Zhonghua Rd.,
              <br />Xiangshan Dist., Hsinchu City
              <br /><span className="text-background/55">{CONTACT.addressZh}</span>
            </p>
          </div>
          <div className="col-span-12 md:col-span-3 md:text-right min-w-0">
            <div className="text-[10px] tracking-[0.28em] uppercase text-background/45 mb-4">Hours</div>
            <p className="text-[14px] text-background/85 break-words">{CONTACT.hours}</p>
          </div>
        </div>

        {/* Baseline */}
        <div className="mt-16 pt-6 border-t border-background/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[12px] text-background/55">
          <div className="break-words">
            © 2026 穎庭國際智能科技. All rights reserved. ·{" "}
            Web design by{" "}
            <a href="https://bluluma.com/" target="_blank" rel="noreferrer"
              className="text-background hover:text-accent transition-colors underline underline-offset-4 decoration-background/30">
              BluLuma
            </a>
          </div>
          <div className="opacity-80">統編 {CONTACT.taxId}</div>
        </div>
      </div>
    </footer>
  );
}
