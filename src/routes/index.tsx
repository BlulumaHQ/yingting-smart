import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { useIsMobile } from "@/hooks/use-mobile";
import { useLang } from "@/lib/i18n";
import { SiteNav, SiteFooter, StickyContact } from "@/components/site-chrome";
import { NEWS, PRODUCTS, CONTACT } from "@/content/site";
import heroA from "@/assets/yt/A176170525442.webp";
import heroB from "@/assets/yt/hero-b.jpg";
import bgLiving from "@/assets/yt/bg-living.png";
import bgDisplay from "@/assets/yt/bg-display.png";
import phoneCutout from "@/assets/yt/phone-cutout.png";
import aboutElevator from "@/assets/yt/about-elevator.png";

/* Subtle brand-tinted line decoration — replaces the brown photographic
   backdrops with something cohesive to the cyan/teal identity. */
function LineAccent({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 600 600"
      className={`pointer-events-none select-none text-accent/25 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="0.6"
    >
      <circle cx="300" cy="300" r="280" />
      <circle cx="300" cy="300" r="210" />
      <circle cx="300" cy="300" r="140" />
      <circle cx="300" cy="300" r="70" />
      <line x1="0" y1="300" x2="600" y2="300" />
      <line x1="300" y1="0" x2="300" y2="600" />
    </svg>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Yingting Smart — Apple HomeKit Smart Living | 穎庭國際智能科技" },
      { name: "description", content: "Apple HomeKit smart home design and installation in Hsinchu. Lighting, climate and voice composed into one calm, intelligent home — by Yingting Smart." },
      { property: "og:title", content: "Yingting Smart — Smart Living, Refined" },
      { property: "og:description", content: "Apple HomeKit smart home design and installation in Hsinchu. Quiet technology, warm home." },
      { property: "og:image", content: heroA },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function HeroSlideA() {
  const { t, lang } = useLang();
  return (
    <div className="mx-auto max-w-[1480px] px-6 md:px-12">
      <div className="reveal in">
        <div className="flex items-center gap-4 text-eyebrow text-muted-foreground mb-8">
          <span className="h-px w-10 bg-accent shrink-0" />
          <span className="break-words">Apple HomeKit · Smart Living 智能生活 · Hsinchu 新竹</span>
        </div>
        {lang === "中" ? (
          <h1 className="text-display text-[11vw] md:text-[7.5vw] lg:text-[7rem] max-w-[14ch] break-words">
            安靜的科技，
            <br /><span className="italic-serif text-accent">溫暖的家。</span>
          </h1>
        ) : (
          <h1 className="text-display text-[12vw] md:text-[7.5vw] lg:text-[7rem] max-w-[14ch] break-words">
            Smart living,
            <br /><span className="italic-serif text-accent">redefined.</span>
          </h1>
        )}
      </div>

      <div className="mt-10 grid grid-cols-12 gap-6 items-center">
        <div className="col-span-12 md:col-span-5 reveal in min-w-0">
          <p className="text-base md:text-[17px] text-muted-foreground leading-[1.8] max-w-md break-words">
            {t(
              "Apple HomeKit design & installation in Hsinchu. We make technology disappear so home can be felt.",
              "我們在新竹提供 Apple HomeKit 智慧家庭設計與安裝服務。讓科技隱於生活之中，讓家的溫度被真正感受。"
            )}
          </p>
          <div className="mt-8 flex items-center gap-6 flex-wrap">
            <a href="#systems"
              className="inline-flex items-center gap-3 text-eyebrow text-foreground border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-colors">
              {t("Explore systems", "探索系統")} <span aria-hidden>→</span>
            </a>
            <a href="#contact"
              className="text-eyebrow text-muted-foreground hover:text-foreground transition-colors">
              {t("Book a visit", "預約參觀")}
            </a>
          </div>
        </div>
        <div className="col-span-12 md:col-span-7 md:col-start-6 reveal in -mt-6 md:-mt-16 min-w-0">
          <div className="relative aspect-[16/10] overflow-hidden bg-surface">
            <img src={heroA} alt="Yingting Smart living showcase" fetchPriority="high"
              className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-background/15 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-eyebrow">
              <span className="bg-background/85 backdrop-blur px-3 py-1.5">Apple HomeKit</span>
              <span className="bg-background/85 backdrop-blur px-3 py-1.5">2026 · Showroom</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroSlideB() {
  const { t, lang } = useLang();
  return (
    <div className="absolute inset-0">
      <img src={heroB} alt="Smart home atmosphere" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
      <div className="relative h-full mx-auto max-w-[1480px] px-6 md:px-12 flex flex-col justify-end pb-20 md:pb-28">
        <div className="max-w-2xl min-w-0">
          <div className="flex items-center gap-4 text-eyebrow text-white/95 mb-6">
            <span className="h-px w-10 bg-accent shrink-0" />
            <span>The Quiet Home · 靜謐之家</span>
          </div>
          {lang === "中" ? (
            <h2 className="text-display text-white text-5xl md:text-7xl lg:text-[6.5rem] break-words [text-shadow:0_4px_32px_rgba(0,0,0,0.55)]">
              懂你的<br /><span className="italic-serif text-accent">家。</span>
            </h2>
          ) : (
            <h2 className="text-display text-white text-5xl md:text-7xl lg:text-[6.5rem] break-words [text-shadow:0_4px_32px_rgba(0,0,0,0.55)]">
              A home that<br /><span className="italic-serif text-accent">listens.</span>
            </h2>
          )}
          <p className="mt-8 max-w-md text-[15px] leading-[1.85] text-white/85 break-words [text-shadow:0_2px_16px_rgba(0,0,0,0.6)]">
            {t(
              "Ambient light, climate and voice — composed in quiet harmony, ready the moment you arrive.",
              "燈光、空調與語音以靜謐和諧的方式運作，在你抵達的那一刻就已準備好。"
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % 2), 7000);
    return () => clearInterval(t);
  }, []);
  return (
    <section id="top" className="relative pt-24 md:pt-32 pb-12 md:pb-20 overflow-hidden">
      <div className="relative min-h-[78vh] md:min-h-[82vh]">
        <div className={`transition-opacity duration-[1400ms] ease-out ${slide === 0 ? "opacity-100" : "opacity-0 pointer-events-none absolute inset-0"}`}>
          <HeroSlideA />
        </div>
        <div className={`absolute inset-0 transition-opacity duration-[1400ms] ease-out ${slide === 1 ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
          <HeroSlideB />
        </div>
        {/* slide indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-3">
          {[0,1].map((i) => (
            <button key={i} onClick={() => setSlide(i)} aria-label={`Slide ${i+1}`}
              className={`h-px transition-all duration-700 ${slide === i ? "w-12 bg-accent" : "w-6 bg-border"}`} />
          ))}
        </div>
      </div>

      <div className="mt-16 md:mt-20 border-y border-border py-5 overflow-hidden">
        <div className="flex gap-12 whitespace-nowrap text-eyebrow text-muted-foreground animate-[scroll_45s_linear_infinite]">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="flex items-center gap-12">
              <span className="text-foreground">Apple HomeKit</span>
              <span className="text-accent">✦</span>
              <span>Smart Home Design 智能設計</span>
              <span className="text-accent">✦</span>
              <span>Lighting · Climate · Voice 燈光 · 空調 · 語音</span>
              <span className="text-accent">✦</span>
              <span>Hsinchu · Xiangshan 新竹 香山</span>
              <span className="text-accent">✦</span>
            </span>
          ))}
        </div>
        <style>{`@keyframes scroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
      </div>
    </section>
  );
}


function About() {
  const { t } = useLang();
  return (
    <section id="about" className="relative py-28 md:py-44 overflow-hidden">
      {/* Subtle brand line decoration — kept inside overflow-hidden parent so it never causes horizontal scroll */}
      <LineAccent className="absolute -top-24 -right-32 h-[640px] w-[640px] max-w-none" />
      <div className="pointer-events-none absolute top-1/3 right-0 h-px w-[28%] bg-gradient-to-r from-transparent to-accent/40" />
      <div className="relative mx-auto max-w-[1480px] px-6 md:px-12">
        <div className="flex items-end justify-between mb-12 reveal gap-4">
          <div className="text-eyebrow text-accent">— About · 關於我們</div>
          <div className="text-eyebrow text-muted-foreground">02 — About</div>
        </div>
        <div className="grid grid-cols-12 gap-10 lg:gap-16">
          <div className="col-span-12 lg:col-span-5 reveal min-w-0">
            <div className="sticky top-32">
              <div className="aspect-[4/5] overflow-hidden bg-surface">
                <img src={aboutElevator} alt="Yingting Smart home entry — elevator hall with marble flooring" loading="lazy"
                  className="h-full w-full object-cover" />
              </div>
              <div className="mt-5 flex justify-between text-eyebrow text-muted-foreground">
                <span>— About</span><span>關於我們</span>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7 lg:pl-6 reveal min-w-0">
            <h2 className="text-display-md text-4xl md:text-6xl lg:text-[4.5rem] break-words">
              {t(
                "The value of a home isn't its luxury —",
                "家的價值不在於奢華，"
              )}
              <br /><span className="italic-serif text-accent">{t("it's whether it understands you.", "而在於它是否真正懂你。")}</span>
            </h2>

            <div className="mt-14 grid md:grid-cols-2 gap-10 text-[15px] text-muted-foreground leading-[1.85]">
              <p className="break-words">
                {t(
                  "Yingting Smart was founded by a team that cares deeply about technology and the quality of everyday living. Through Apple HomeKit we integrate lighting, climate and voice into the rhythm of daily life — making home a little more attentive, a little warmer, every day.",
                  "穎庭智能由一群重視科技與生活品質的團隊成立。我們透過 Apple HomeKit，將燈光、空調、語音控制整合進日常生活節奏，讓家每天都更貼心、更溫暖一點。"
                )}
              </p>
              <p className="break-words">
                {t(
                  "From the moment a light comes on to the way a room finds the right temperature, we believe technology shouldn't feel complicated. Whether you're starting a new chapter or refining a long-loved home, we build spaces that feel safe, comfortable, and quietly understood.",
                  "從燈光亮起的瞬間，到空間自動調整到舒適溫度，我們相信科技不應該讓人感到複雜。無論是新家規劃，或是既有住宅升級，我們都希望打造一個安全、舒適、安靜懂你的生活空間。"
                )}
              </p>
            </div>

            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
              {[
                { k: "Design", v: "設計" },
                { k: "Install", v: "安裝" },
                { k: "Planning", v: "規劃" },
                { k: "Renew", v: "改造" },
              ].map((i, idx) => (
                <div key={i.k} className="bg-background p-6 md:p-7 min-w-0">
                  <div className="text-eyebrow text-accent">0{idx + 1}</div>
                  <div className="text-3xl font-light tracking-tight mt-3">{t(i.k, i.v)}</div>
                  <div className="text-eyebrow text-muted-foreground mt-2">{i.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Systems() {
  const { t, lang } = useLang();
  return (
    <section id="systems" className="relative py-28 md:py-44 bg-[var(--color-surface-2)] overflow-hidden">
      <div className="mx-auto max-w-[1480px] px-6 md:px-12">
        <div className="grid grid-cols-12 gap-6 items-end mb-20 reveal">
          <div className="col-span-12 md:col-span-8 min-w-0">
            <div className="text-eyebrow text-accent mb-6">— Systems · 智能整合</div>

            <h2 className="text-display-md text-4xl md:text-6xl lg:text-7xl break-words">
              {lang === "中" ? (
                <>自然融入生活的<br /><span className="italic-serif">智慧系統。</span></>
              ) : (
                <>Smart systems that<br />feel <span className="italic-serif">natural.</span></>
              )}
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:text-right text-eyebrow text-muted-foreground">
            03 — Featured Systems
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
          {PRODUCTS.map((s, i) => (
            <Link
              key={s.slug}
              to="/products/$slug"
              params={{ slug: s.slug }}
              className="group bg-background p-8 md:p-10 flex flex-col reveal hover:bg-surface transition-colors min-w-0"
            >
              <div className="flex items-baseline justify-between">
                <span className="text-eyebrow text-accent">0{i + 1}</span>
                <span className="italic-serif text-xl text-muted-foreground">{["I","II","III"][i]}</span>
              </div>
              <div className="relative aspect-[4/3] mt-8 mb-8 overflow-hidden bg-[var(--color-surface-2)]">
                <img src={s.image} alt={s.name} loading="lazy"
                  className="h-full w-full object-contain p-8 transition-transform duration-[1400ms] ease-out group-hover:scale-105" />
              </div>
              <div className="mt-auto">
                <div className="text-eyebrow text-muted-foreground mb-2">{s.tagline}</div>
                <h3 className="text-3xl md:text-[2.25rem] font-light tracking-tight group-hover:text-accent transition-colors break-words">
                  {s.name}
                </h3>
                <p className="mt-5 text-sm text-muted-foreground leading-relaxed line-clamp-3 break-words">{s.description}</p>
                <div className="mt-8 inline-flex items-center gap-2 text-eyebrow text-foreground">
                  {t("Discover", "了解更多")} <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Showroom — uses original lifestyle bg image with transparent phone */}
        <div className="mt-24 md:mt-32 grid grid-cols-12 gap-6 items-center reveal">
          <div className="col-span-12 md:col-span-5 md:order-2 min-w-0">
            <div className="text-eyebrow text-accent mb-6">— Showroom · 展示中心</div>
            <h3 className="text-display-md text-3xl md:text-5xl break-words">
              {lang === "中" ? (
                <>日常的儀式，<br /><span className="italic-serif">只在一觸之間。</span></>
              ) : (
                <>The daily ritual,<br /><span className="italic-serif">a single touch away.</span></>
              )}
            </h3>
            <p className="mt-8 text-muted-foreground leading-[1.85] max-w-md break-words">
              {t(
                "We design Apple HomeKit systems around the way you live — not around devices. Lighting, climate, security and voice control work together quietly, so your home responds without feeling mechanical.",
                "我們依照你的生活方式規劃 Apple HomeKit 系統，而不是只堆疊設備。燈光、空調、安全與語音控制自然協作，讓家能即時回應，卻不顯得冰冷機械。"
              )}
            </p>
            <a href="#contact"
              className="mt-10 inline-flex items-center gap-3 text-eyebrow border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-colors">
              {t("Book a showroom visit", "預約展示參觀")} <span>→</span>
            </a>
          </div>
          <div className="col-span-12 md:col-span-7 md:order-1 min-w-0">
            <div className="relative aspect-[5/4] overflow-hidden bg-[var(--color-accent-soft)]/40">
              <img src={bgLiving} alt="Smart living atmosphere" loading="lazy"
                className="absolute inset-0 h-full w-full object-cover" />
              <img src={phoneCutout} alt="HomeKit app on iPhone" loading="lazy"
                className="absolute right-4 md:right-10 bottom-0 h-[95%] w-auto object-contain drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --- FAQ -------------------------------------------------------- */

type FaqItem = { q: string; a: string; qZh: string; aZh: string };

const FAQ_LEFT: FaqItem[] = [
  {
    q: "What is Apple HomeKit?",
    qZh: "什麼是 Apple HomeKit？",
    a: "Apple's smart-home platform. Every HomeKit-certified accessory in your home — lights, AC, locks, sensors — is managed from one place, the Home app on your Apple devices. The Home app is the conductor; HomeKit keeps everything in tune.",
    aZh: "Apple 的智慧家庭平台。家中所有 HomeKit 認證設備——燈光、空調、門鎖、感應器——都能在 Apple 裝置的「家庭」App 中集中管理。「家庭」App 是指揮者，HomeKit 讓所有設備協調一致。"
  },
  {
    q: "Do I need a HomePod or Apple TV?",
    qZh: "我需要 HomePod 或 Apple TV 嗎？",
    a: "Not for basic on/off control. But for remote access, reliable automations, and full voice — yes, a home hub is essential. We usually recommend HomePod for an Apple-first smart home.",
    aZh: "基本開關控制不需要。但若要遠端遙控、穩定的自動化與完整語音控制，就需要一台家庭中樞。我們通常建議以 HomePod 作為 Apple 智慧家庭的核心。"
  },
  {
    q: "What happens during a power outage?",
    qZh: "停電時會發生什麼事？",
    a: "Most smart home devices return to their previous state after power is restored. We also help plan essential circuits and explain what should remain manual for safety.",
    aZh: "多數智慧家庭設備會在復電後回到原本狀態。我們也會協助規劃必要迴路，並說明哪些設備基於安全考量應保留手動控制。"
  }
];

const FAQ_RIGHT: FaqItem[] = [
  {
    q: "Can older homes be upgraded to a smart home?",
    qZh: "老屋也可以升級成智慧家庭嗎？",
    a: "Yes. Most upgrades — smart switches, AC controllers, smart plugs — are direct replacements that don't require breaking walls or rewiring. We assess neutral-line, Wi-Fi coverage and the panel before planning.",
    aZh: "可以。多數升級項目，例如智慧開關、冷氣控制器、智慧插座，都能以替換方式安裝，不一定需要敲牆或重新配線。我們會先評估中性線、Wi-Fi 覆蓋與電箱狀況，再進行規劃。"
  },
  {
    q: "Where should we start?",
    qZh: "我們應該從哪裡開始？",
    a: "Start with lighting and climate. These are the two areas people feel every day, and they create the biggest improvement with the least disruption.",
    aZh: "建議從燈光與空調開始。這兩項是每天最直接感受到的生活體驗，也通常能以較低干擾帶來最明顯的改善。"
  },
  {
    q: "Do you offer on-site planning?",
    qZh: "你們提供現場規劃嗎？",
    a: "Yes. We can visit your home or showroom, review the space, understand your lifestyle and then recommend the right HomeKit setup.",
    aZh: "有。我們可以到住宅或展示空間現場了解環境、動線與生活需求，再建議合適的 HomeKit 規劃方式。"
  }
];

function FaqColumn({ items, startOpen }: { items: FaqItem[]; startOpen: number }) {
  const [open, setOpen] = useState<number>(startOpen);
  const { lang } = useLang();
  useEffect(() => { setOpen(startOpen); }, [startOpen]);
  return (
    <ul className="space-y-px bg-border min-w-0">
      {items.map((it, idx) => {
        const isOpen = open === idx;
        const q = lang === "中" ? it.qZh : it.q;
        const a = lang === "中" ? it.aZh : it.a;
        return (
          <li key={it.q} className="bg-background min-w-0">
            <button
              onClick={() => setOpen(isOpen ? -1 : idx)}
              className="w-full flex items-start justify-between gap-4 py-7 text-left group"
            >
              <span className="min-w-0 text-[18px] md:text-[20px] font-normal tracking-tight pr-2 group-hover:text-accent transition-colors break-words">
                {q}
              </span>
              <span className={`mt-1.5 grid place-items-center h-7 w-7 shrink-0 rounded-full border border-border
                              transition-all duration-500 ${isOpen ? "bg-accent border-accent rotate-45" : "bg-transparent"}`}>
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" className={isOpen ? "text-accent-foreground" : "text-foreground"}>
                  <path d="M5.5 1v9M1 5.5h9" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </span>
            </button>
            <div
              className="grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(.2,.6,.2,1)]"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="pb-7 pr-2 md:pr-10 text-[15px] text-muted-foreground leading-[1.85] max-w-prose break-words">
                  {a}
                </p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

function Faq() {
  return (
    <section id="faq" className="relative py-28 md:py-40 bg-background">
      <div className="mx-auto max-w-[1480px] px-6 md:px-12">
        <div className="grid grid-cols-12 gap-6 items-end mb-16 reveal">
          <div className="col-span-12 md:col-span-8">
            <div className="text-eyebrow text-accent mb-6">— FAQ · 常見問題</div>
            <h2 className="text-display-md text-4xl md:text-6xl lg:text-[4.5rem]">
              Questions, <span className="italic-serif">answered.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:text-right text-eyebrow text-muted-foreground">
            04 — Frequently Asked
          </div>
        </div>

        <FaqGrid />
      </div>
    </section>
  );
}

function FaqGrid() {
  const isMobile = useIsMobile();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 reveal">
      <FaqColumn items={FAQ_LEFT} startOpen={0} />
      <FaqColumn items={FAQ_RIGHT} startOpen={isMobile ? -1 : 0} />
    </div>
  );
}

/* --- Insights --------------------------------------------------- */

function Insights() {
  return (
    <section id="insights" className="relative py-28 md:py-44 bg-[var(--color-surface-2)] overflow-hidden">
      <LineAccent className="absolute -top-32 -left-32 h-[640px] w-[640px]" />
      <div className="pointer-events-none absolute top-1/4 left-0 h-px w-[28%] bg-gradient-to-l from-transparent to-accent/40" />
      <div className="relative mx-auto max-w-[1480px] px-6 md:px-12">
        <div className="flex items-end justify-between mb-16 reveal">
          <div>
            <div className="text-eyebrow text-accent mb-6">— Insights · 洞察觀點</div>
            <h2 className="text-display-md text-4xl md:text-6xl lg:text-7xl">
              News &<span className="italic-serif"> notes.</span>
            </h2>
          </div>
          <div className="text-eyebrow text-muted-foreground">05 — Insights</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
          {NEWS.map((p) => (
            <Link key={p.slug} to="/news/$slug" params={{ slug: p.slug }} className="group reveal block">
              <div className="relative aspect-[5/3] overflow-hidden bg-surface-2">
                <img src={p.image} alt={p.title} loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]" />
                <div className="absolute top-4 left-4 bg-background/90 backdrop-blur px-3 py-1.5 text-eyebrow">
                  {p.category}
                </div>
              </div>
              <div className="mt-6 flex items-baseline justify-between text-eyebrow text-muted-foreground">
                <span>{p.date}</span>
                <span className="text-accent">↗</span>
              </div>
              <h3 className="mt-3 text-2xl md:text-[1.6rem] leading-snug font-light tracking-tight group-hover:text-accent transition-colors">
                {p.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative py-28 md:py-44 overflow-hidden">
      <img src={bgDisplay} alt="" aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-[0.08]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      <div className="relative mx-auto max-w-[1480px] px-6 md:px-12">
        <div className="flex items-end justify-between mb-10 reveal">
          <div className="text-eyebrow text-accent">— Contact · 聯絡我們</div>
          <div className="text-eyebrow text-muted-foreground">06 — Contact</div>
        </div>
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-7 reveal">
            <h2 className="text-display text-5xl md:text-7xl lg:text-8xl">
              Let's design
              <br /><span className="italic-serif text-accent">your home.</span>
            </h2>
            <p className="mt-10 max-w-md text-[15px] leading-[1.85] text-muted-foreground">
              Visit our showroom in Hsinchu, or reach us by phone or LINE.
              We'll begin with the way you live, then design the home around it.
            </p>

            <div className="mt-14 flex flex-wrap gap-4">
              <a href={`tel:${CONTACT.phoneIntl}`}
                className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-7 py-4 text-eyebrow hover:bg-foreground hover:text-background transition-colors">
                Call · {CONTACT.phone} <span>→</span>
              </a>
              <a href={CONTACT.lineUrl} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-3 border border-foreground px-7 py-4 text-eyebrow hover:bg-foreground hover:text-background transition-colors">
                LINE · {CONTACT.line}
              </a>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5 reveal">
            <dl className="divide-y divide-border border-y border-border">
              {[
                { k: "Phone", v: CONTACT.phone, href: `tel:${CONTACT.phoneIntl}` },
                { k: "LINE", v: CONTACT.line, href: CONTACT.lineUrl },
                { k: "Facebook", v: "YouNeedSmartLife", href: CONTACT.fb },
                { k: "Instagram", v: "@yt_smartlife", href: CONTACT.ig },
                { k: "Studio", v: CONTACT.addressZh },
                { k: "Hours", v: CONTACT.hours },
                { k: "Tax ID", v: CONTACT.taxId },
              ].map((row) => {
                const inner = (
                  <div className="group grid grid-cols-12 items-baseline gap-4 py-5">
                    <dt className="col-span-4 text-eyebrow text-muted-foreground">{row.k}</dt>
                    <dd className="col-span-8 text-base md:text-xl font-light tracking-tight break-words group-hover:text-accent transition-colors">
                      {row.v}
                    </dd>
                  </div>
                );
                return row.href
                  ? <a key={row.k} href={row.href} className="block">{inner}</a>
                  : <div key={row.k}>{inner}</div>;
              })}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

function Index() {
  useReveal();
  return (
    <main className="relative bg-background text-foreground">
      <SiteNav />
      <StickyContact />
      <Hero />
      <About />
      <Systems />
      <Faq />
      <Insights />
      <Contact />
      <SiteFooter />
    </main>
  );
}
