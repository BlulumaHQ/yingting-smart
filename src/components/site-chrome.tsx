import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.webp";
import iconTel from "@/assets/yt/icon-tel.svg";
import iconLine from "@/assets/yt/icon-line.svg";
import iconFb from "@/assets/yt/icon-fb.svg";
import iconIg from "@/assets/yt/icon-ig.svg";
import { CONTACT } from "@/content/site";

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
              <span className="font-normal">{l.label}</span>
            </a>
          ))}
        </nav>
        <a href={`tel:${CONTACT.phoneIntl}`}
          className="hidden md:inline-flex items-center gap-3 text-[13px] tracking-wide text-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {CONTACT.phone}
        </a>
        <button aria-label="Menu" onClick={() => setOpen(v => !v)} className="md:hidden flex flex-col gap-1.5">
          <span className={`block h-px w-7 bg-foreground transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`} />
          <span className={`block h-px w-7 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block h-px w-7 bg-foreground transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="flex flex-col px-6 py-6">
            {NAV.map((l) => (
              <a key={l.to} href={l.to} onClick={() => setOpen(false)}
                className="py-3 flex items-baseline gap-3 text-2xl font-light tracking-tight">
                <span className="text-[11px] tracking-[0.2em] text-accent">{l.n}</span>
                {l.label}
              </a>
            ))}
            <a href={`tel:${CONTACT.phoneIntl}`} className="text-eyebrow text-accent pt-6">{CONTACT.phone}</a>
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
      {/* Mobile bottom bar */}
      <div className="md:hidden fixed inset-x-4 bottom-4 z-40 flex items-center justify-around gap-2
                      rounded-full bg-foreground/95 backdrop-blur px-4 py-2.5
                      shadow-[0_18px_40px_-16px_rgba(34,55,75,0.45)]">
        {items.map((it) => (
          <a key={it.label} href={it.href} target="_blank" rel="noreferrer"
            aria-label={it.label}
            className="h-9 w-9 grid place-items-center rounded-full">
            <img src={it.icon} alt="" className="h-5 w-5" />
          </a>
        ))}
      </div>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-foreground text-background">
      {/* Soft brand glow accents */}
      <div className="pointer-events-none absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full
                      bg-[radial-gradient(circle_at_center,oklch(0.78_0.085_210/0.35),transparent_70%)]" />
      <div className="pointer-events-none absolute -bottom-40 -left-24 h-[380px] w-[380px] rounded-full
                      bg-[radial-gradient(circle_at_center,oklch(0.78_0.085_210/0.18),transparent_70%)]" />

      <div className="relative mx-auto max-w-[1480px] px-6 md:px-12 pt-24 md:pt-32 pb-10">
        {/* Oversized brand statement */}
        <div className="grid grid-cols-12 gap-10 items-end">
          <div className="col-span-12 md:col-span-8">
            <div className="flex items-center gap-3 text-[11px] tracking-[0.28em] uppercase text-background/55 mb-8">
              <span className="h-px w-10 bg-accent" />
              Yingting Smart · 穎庭國際智能科技
            </div>
            <h2 className="font-light tracking-[-0.02em] leading-[0.95]
                           text-[14vw] md:text-[9vw] lg:text-[8.2rem] xl:text-[9.5rem]">
              Quiet
              <span className="italic-serif text-accent"> technology,</span>
              <br />warm <span className="italic-serif text-accent">home.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:pl-6">
            <img src={logo} alt="穎庭智能 Yingting Smart" width={160} height={160}
              className="h-24 md:h-28 w-auto opacity-95 [filter:brightness(0)_invert(1)]" />
            <p className="mt-6 max-w-xs text-[13.5px] leading-[1.85] text-background/65">
              Apple HomeKit design & installation in Hsinchu. We make technology disappear so home can be felt.
            </p>
          </div>
        </div>

        {/* Hairline divider */}
        <div className="mt-20 md:mt-28 h-px w-full bg-background/15" />

        {/* Lower nav row — minimal, no contact duplication */}
        <div className="mt-10 grid grid-cols-12 gap-8 items-start">
          <div className="col-span-12 md:col-span-5">
            <div className="text-[10px] tracking-[0.28em] uppercase text-background/45 mb-4">Explore</div>
            <nav className="flex flex-wrap gap-x-7 gap-y-2 text-[14px] text-background/85">
              <a href="/#about" className="hover:text-accent transition-colors">About</a>
              <a href="/#systems" className="hover:text-accent transition-colors">Systems</a>
              <a href="/#faq" className="hover:text-accent transition-colors">FAQ</a>
              <a href="/#insights" className="hover:text-accent transition-colors">Insights</a>
              <a href="/#contact" className="hover:text-accent transition-colors">Contact</a>
            </nav>
          </div>
          <div className="col-span-12 md:col-span-4">
            <div className="text-[10px] tracking-[0.28em] uppercase text-background/45 mb-4">Studio</div>
            <p className="text-[14px] text-background/85 leading-[1.7]">
              {CONTACT.address}
              <br /><span className="text-background/55">{CONTACT.addressZh}</span>
            </p>
          </div>
          <div className="col-span-12 md:col-span-3 md:text-right">
            <div className="text-[10px] tracking-[0.28em] uppercase text-background/45 mb-4">Hours</div>
            <p className="text-[14px] text-background/85">{CONTACT.hours}</p>
          </div>
        </div>

        {/* Baseline */}
        <div className="mt-16 pt-6 border-t border-background/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[12px] text-background/55">
          <div>
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
