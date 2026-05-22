import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.webp";
import heroA from "@/assets/yt/A176170525442.webp";
import heroB from "@/assets/yt/B.webp";
import indHomepod from "@/assets/yt/ind_01.png";
import indSwitch from "@/assets/yt/ind_02.png";
import indAc from "@/assets/yt/ind_03.png";
import ind04 from "@/assets/yt/ind_04.png";
import news1 from "@/assets/yt/news1.webp";
import news2 from "@/assets/yt/news2.webp";
import news3 from "@/assets/yt/news3.webp";
import news4 from "@/assets/yt/news4.webp";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "穎庭國際智能科技 — Apple HomeKit Smart Living" },
      { name: "description", content: "新竹智能家居 — 以 Apple HomeKit 為核心，整合燈光、空調與語音控制，為您打造安心、舒適、被理解的智慧空間。" },
      { property: "og:title", content: "穎庭國際智能科技 — Smart Living, Redefined" },
      { property: "og:description", content: "Apple HomeKit smart home design & installation in Hsinchu." },
      { property: "og:image", content: heroA },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

const NAV = [
  { label: "About", href: "#about", k: "01" },
  { label: "Systems", href: "#systems", k: "02" },
  { label: "Journal", href: "#journal", k: "03" },
  { label: "Contact", href: "#contact", k: "04" },
];

function Nav() {
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
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : ""
      }`}
    >
      <div className="mx-auto flex max-w-[1480px] items-center justify-between px-6 py-5 md:px-12">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="穎庭智能" width={40} height={40} className="h-10 w-auto" />
          <div className="hidden sm:block leading-tight">
            <div className="font-serif text-lg">Yingting Smart</div>
            <div className="text-eyebrow text-muted-foreground -mt-0.5">穎庭國際智能科技</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-10">
          {NAV.map((l) => (
            <a key={l.href} href={l.href}
              className="group relative text-eyebrow text-muted-foreground hover:text-foreground transition-colors">
              <span className="text-accent mr-2">{l.k}</span>{l.label}
            </a>
          ))}
        </nav>
        <a href="tel:+886-3-5335135"
          className="hidden md:inline-flex items-center gap-3 text-eyebrow text-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          03 · 5335135
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
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="py-3 font-serif text-3xl flex items-baseline gap-4">
                <span className="text-eyebrow text-accent">{l.k}</span>{l.label}
              </a>
            ))}
            <a href="tel:+886-3-5335135" className="text-eyebrow text-accent pt-6">03 · 5335135</a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden">
      <div className="mx-auto max-w-[1480px] px-6 md:px-12">
        <div className="reveal in">
          <div className="flex items-center gap-4 text-eyebrow text-muted-foreground mb-10">
            <span className="h-px w-10 bg-accent" />
            <span>Apple HomeKit · Smart Living · Hsinchu 新竹</span>
          </div>
          <h1 className="text-display text-[12vw] md:text-[8vw] lg:text-[7rem] max-w-[16ch]">
            訂製您的
            <span className="italic"> 專屬</span>
            <br />生活
            <span className="italic text-accent">風格。</span>
          </h1>
        </div>

        <div className="mt-16 grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 md:col-span-5 reveal in">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-md">
              穎庭國際智能科技 — 以 Apple HomeKit 為核心，
              將燈光、空調與語音控制融入日常，
              使生活更便利、更貼心、更有溫度。
            </p>
            <div className="mt-10 flex items-center gap-6">
              <a href="#systems"
                className="inline-flex items-center gap-3 text-eyebrow text-foreground border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-colors">
                探索系統 <span aria-hidden>→</span>
              </a>
              <a href="#contact"
                className="text-eyebrow text-muted-foreground hover:text-foreground transition-colors">
                預約諮詢
              </a>
            </div>
          </div>
          <div className="col-span-12 md:col-span-7 md:col-start-6 reveal in">
            <div className="relative aspect-[16/9] overflow-hidden bg-surface">
              <img src={heroA} alt="穎庭智能家居" fetchPriority="high"
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

      {/* marquee accent */}
      <div className="mt-24 md:mt-32 border-y border-border py-5 overflow-hidden">
        <div className="flex gap-12 whitespace-nowrap text-eyebrow text-muted-foreground animate-[scroll_40s_linear_infinite]">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="flex items-center gap-12">
              <span className="text-foreground">Apple HomeKit</span>
              <span className="text-accent">✦</span>
              <span>智能家居設計</span>
              <span className="text-accent">✦</span>
              <span>Lighting · Climate · Voice</span>
              <span className="text-accent">✦</span>
              <span>新竹 · 香山</span>
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
  return (
    <section id="about" className="relative py-32 md:py-44">
      <div className="mx-auto max-w-[1480px] px-6 md:px-12">
        <div className="grid grid-cols-12 gap-10 lg:gap-16">
          <div className="col-span-12 lg:col-span-5 reveal">
            <div className="sticky top-32">
              <div className="aspect-[4/5] overflow-hidden bg-surface">
                <img src={heroB} alt="穎庭智能家居生活" loading="lazy"
                  className="h-full w-full object-cover" />
              </div>
              <div className="mt-5 flex justify-between text-eyebrow text-muted-foreground">
                <span>— About</span><span>關於我們</span>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7 lg:pl-6 reveal">
            <div className="text-eyebrow text-accent mb-8">A philosophy of home</div>
            <h2 className="text-display text-4xl md:text-6xl lg:text-[4.5rem]">
              家的價值不在於華麗，
              <br /><span className="italic">而在於是否真正</span>
              <br /><span className="italic text-accent">懂你。</span>
            </h2>

            <div className="mt-14 grid md:grid-cols-2 gap-10 text-[15px] text-muted-foreground leading-[1.85]">
              <p>
                穎庭國際智能科技由一群熱愛科技、重視生活質感的專業團隊所組成，
                透過 Apple HomeKit 等智慧系統整合，將燈光、空調與語音控制
                融入日常，使生活更便利、更貼心、更有溫度。
              </p>
              <p>
                從每一盞燈光的點亮，到每一次舒適溫度的調整，
                我們希望科技不只是冷冰冰的功能，而是為團聚、為幸福而存在的橋樑。
                無論是新成家的你，或想升級生活品質的居所，
                我們都致力打造一個讓你每一次回家都感到安心、舒適、被理解的智慧空間。
              </p>
            </div>

            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
              {[
                { k: "設計", v: "Design" },
                { k: "安裝", v: "Install" },
                { k: "規劃", v: "Planning" },
                { k: "改造", v: "Renew" },
              ].map((i, idx) => (
                <div key={i.k} className="bg-background p-6 md:p-7">
                  <div className="text-eyebrow text-accent">0{idx + 1}</div>
                  <div className="font-serif text-3xl mt-3">{i.k}</div>
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

const SYSTEMS = [
  {
    idx: "I",
    name: "Apple HomePod",
    zh: "聲控中樞",
    desc: "以 HomePod 作為居家中樞，透過 Siri 串聯所有場景，讓聲音成為最自然的開關。",
    img: indHomepod,
    href: "https://www.ytsmartlife.com/paper/other_page.php?id=13585#A01",
  },
  {
    idx: "II",
    name: "Light Switch",
    zh: "智能燈光",
    desc: "為每一個空間打造專屬的燈光劇本——晨醒、用餐、閱讀、入眠，輕觸即達。",
    img: indSwitch,
    href: "https://www.ytsmartlife.com/paper/other_page.php?id=13585#A02",
  },
  {
    idx: "III",
    name: "AC Controller",
    zh: "空調溫控",
    desc: "依據時段、天氣與您的習慣自動調節舒適溫度，讓貼心如呼吸般自然。",
    img: indAc,
    href: "https://www.ytsmartlife.com/paper/other_page.php?id=13585#A03",
  },
];

function Systems() {
  return (
    <section id="systems" className="relative py-32 md:py-44 bg-surface-2">
      <div className="mx-auto max-w-[1480px] px-6 md:px-12">
        <div className="grid grid-cols-12 gap-6 items-end mb-20 reveal">
          <div className="col-span-12 md:col-span-8">
            <div className="text-eyebrow text-accent mb-6">— Systems · 智能整合</div>
            <h2 className="text-display text-4xl md:text-6xl lg:text-7xl">
              Three quiet
              <span className="italic"> instruments</span>
              <br />for one calm home.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:text-right text-eyebrow text-muted-foreground">
            03 — Featured Systems
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
          {SYSTEMS.map((s, i) => (
            <a key={s.idx} href={s.href}
              className="group bg-background p-8 md:p-10 flex flex-col reveal hover:bg-surface transition-colors">
              <div className="flex items-baseline justify-between">
                <span className="text-eyebrow text-accent">0{i + 1}</span>
                <span className="font-serif italic text-xl text-muted-foreground">{s.idx}</span>
              </div>
              <div className="relative aspect-[4/3] mt-8 mb-8 overflow-hidden bg-surface-2">
                <img src={s.img} alt={s.name} loading="lazy"
                  className="h-full w-full object-contain p-8 transition-transform duration-[1400ms] ease-out group-hover:scale-105" />
              </div>
              <div className="mt-auto">
                <div className="text-eyebrow text-muted-foreground mb-2">{s.zh}</div>
                <h3 className="font-serif text-3xl md:text-4xl group-hover:text-accent transition-colors">
                  {s.name}
                </h3>
                <p className="mt-5 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-8 inline-flex items-center gap-2 text-eyebrow text-foreground">
                  Discover <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* showcase */}
        <div className="mt-24 md:mt-32 grid grid-cols-12 gap-6 items-center reveal">
          <div className="col-span-12 md:col-span-5 md:order-2">
            <div className="text-eyebrow text-accent mb-6">— Showroom</div>
            <h3 className="text-display text-3xl md:text-5xl">
              一觸即達的
              <br /><span className="italic">日常儀式。</span>
            </h3>
            <p className="mt-8 text-muted-foreground leading-relaxed max-w-md">
              場景控制、節能管理、安全感知 — 透過單一介面整合，
              讓智能成為空間的安靜底色，而非干擾。
            </p>
            <a href="#contact"
              className="mt-10 inline-flex items-center gap-3 text-eyebrow border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-colors">
              預約展示間 <span>→</span>
            </a>
          </div>
          <div className="col-span-12 md:col-span-7 md:order-1">
            <div className="relative aspect-[4/5] md:aspect-[4/5] max-h-[680px] overflow-hidden bg-surface">
              <img src={ind04} alt="穎庭智能家居展示" loading="lazy"
                className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const JOURNAL = [
  { date: "2026 · 03 · 02", title: "智能家居如遇停電要怎麼辦？", cat: "智能家居規劃", img: news1, href: "https://www.ytsmartlife.com/news/details.php?id=34616" },
  { date: "2026 · 03 · 02", title: "使用 HomeKit 一定要有 HomePod 或 Apple TV 嗎？", cat: "Apple HomeKit 安裝", img: news2, href: "https://www.ytsmartlife.com/news/details.php?id=34615" },
  { date: "2026 · 03 · 02", title: "什麼是 Apple HomeKit？", cat: "Apple 智能家居安裝", img: news3, href: "https://www.ytsmartlife.com/news/details.php?id=34603" },
  { date: "2026 · 03 · 02", title: "舊屋可以裝智能家居嗎？", cat: "智能家居改造", img: news4, href: "https://www.ytsmartlife.com/news/details.php?id=34602" },
];

function Journal() {
  return (
    <section id="journal" className="relative py-32 md:py-44">
      <div className="mx-auto max-w-[1480px] px-6 md:px-12">
        <div className="flex items-end justify-between mb-16 reveal">
          <div>
            <div className="text-eyebrow text-accent mb-6">— Journal · 最新資訊</div>
            <h2 className="text-display text-4xl md:text-6xl lg:text-7xl">News &<span className="italic"> Notes.</span></h2>
          </div>
          <a href="https://www.ytsmartlife.com/news/index.php"
            className="text-eyebrow text-muted-foreground hover:text-accent transition-colors border-b border-border hover:border-accent pb-1">
            View all →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
          {JOURNAL.map((p) => (
            <a key={p.title} href={p.href} className="group reveal block">
              <div className="relative aspect-[5/3] overflow-hidden bg-surface-2">
                <img src={p.img} alt={p.title} loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]" />
                <div className="absolute top-4 left-4 bg-background/90 backdrop-blur px-3 py-1.5 text-eyebrow">
                  {p.cat}
                </div>
              </div>
              <div className="mt-6 flex items-baseline justify-between text-eyebrow text-muted-foreground">
                <span>{p.date}</span>
                <span className="text-accent">↗</span>
              </div>
              <h3 className="mt-3 font-serif text-2xl md:text-3xl leading-tight group-hover:text-accent transition-colors">
                {p.title}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative py-32 md:py-44 bg-foreground text-background">
      <div className="mx-auto max-w-[1480px] px-6 md:px-12">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-7 reveal">
            <div className="text-eyebrow text-accent mb-8">— Contact · 聯絡我們</div>
            <h2 className="text-display text-5xl md:text-7xl lg:text-8xl">
              Let’s design
              <br /><span className="italic">your home.</span>
            </h2>
            <p className="mt-10 max-w-md text-[15px] leading-relaxed opacity-70">
              歡迎預約展示間參觀，或透過電話、LINE 與我們聯繫，
              開始規劃您的智慧居家。
            </p>

            <div className="mt-16 flex flex-wrap gap-4">
              <a href="tel:+886-3-5335135"
                className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-7 py-4 text-eyebrow hover:bg-background hover:text-foreground transition-colors">
                致電 · Call <span>→</span>
              </a>
              <a href="https://line.me/R/ti/p/%40593ssbfh"
                className="inline-flex items-center gap-3 border border-background/30 px-7 py-4 text-eyebrow hover:border-accent hover:text-accent transition-colors">
                LINE · @593ssbfh
              </a>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5 reveal">
            <dl className="divide-y divide-background/15 border-y border-background/15">
              {[
                { k: "Phone", v: "03 · 5335135", href: "tel:+886-3-5335135" },
                { k: "LINE", v: "@593ssbfh", href: "https://line.me/R/ti/p/%40593ssbfh" },
                { k: "Facebook", v: "YouNeedSmartLife", href: "https://www.facebook.com/YouNeedSmartLife/" },
                { k: "Instagram", v: "@yt_smartlife", href: "https://www.instagram.com/yt_smartlife/" },
                { k: "Studio", v: "新竹市香山區中華路五段500號" },
                { k: "Hours", v: "週一 — 週日 10:00–20:00" },
                { k: "統編", v: "83061544" },
              ].map((row) => {
                const inner = (
                  <div className="group grid grid-cols-12 items-baseline gap-4 py-5">
                    <dt className="col-span-4 text-eyebrow opacity-60">{row.k}</dt>
                    <dd className="col-span-8 font-serif text-xl md:text-2xl group-hover:text-accent transition-colors">
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

function Footer() {
  return (
    <footer className="bg-foreground text-background border-t border-background/15">
      <div className="mx-auto max-w-[1480px] px-6 md:px-12 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="" width={32} height={32} className="h-8 w-auto bg-background rounded-sm p-1" />
          <div className="text-eyebrow opacity-70">
            穎庭國際智能科技 · Yingting Smart Living
          </div>
        </div>
        <div className="flex items-center gap-6 text-eyebrow opacity-70">
          <a href="https://www.ytsmartlife.com/paper/privacy_policy.php" className="hover:text-accent hover:opacity-100">Privacy</a>
          <a href="https://www.ytsmartlife.com/paper/terms.php" className="hover:text-accent hover:opacity-100">Terms</a>
          <span>© 2026</span>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  useReveal();
  return (
    <main className="relative bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Systems />
      <Journal />
      <Contact />
      <Footer />
    </main>
  );
}
