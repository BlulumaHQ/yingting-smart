import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.webp";
import hero from "@/assets/hero.jpg";
import about from "@/assets/about.jpg";
import homepod from "@/assets/homepod.jpg";
import switchImg from "@/assets/switch.jpg";
import ac from "@/assets/ac.jpg";
import ambience from "@/assets/ambience.jpg";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "穎庭國際智能科技 — Apple HomeKit Smart Living" },
      { name: "description", content: "新竹智能家居 — 以 Apple HomeKit 為核心，整合燈光、空調與語音控制，為您打造安心、舒適、被理解的智慧空間。" },
      { property: "og:title", content: "穎庭國際智能科技 — Smart Living, Redefined" },
      { property: "og:description", content: "Luxury Apple HomeKit smart home design & installation in Hsinchu." },
      { property: "og:image", content: hero },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "About", href: "#about" },
    { label: "Systems", href: "#systems" },
    { label: "Atmosphere", href: "#atmosphere" },
    { label: "Journal", href: "#journal" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled ? "backdrop-blur-xl bg-background/60 border-b border-border" : ""
      }`}
    >
      <div className="mx-auto flex max-w-[1480px] items-center justify-between px-6 py-5 md:px-12">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="穎庭智能" width={36} height={36} className="invert brightness-200" />
          <div className="hidden sm:block leading-tight">
            <div className="font-serif text-lg">Yingting</div>
            <div className="text-eyebrow text-muted-foreground -mt-0.5">Smart Living</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-eyebrow text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="tel:+886-3-5335135"
          className="hidden md:inline-flex text-eyebrow text-foreground border-b border-accent pb-1 hover:text-accent transition-colors"
        >
          03 · 5335135
        </a>
        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col gap-1.5"
        >
          <span className={`block h-px w-7 bg-foreground transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`} />
          <span className={`block h-px w-7 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block h-px w-7 bg-foreground transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="flex flex-col gap-1 px-6 py-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 font-serif text-2xl"
              >
                {l.label}
              </a>
            ))}
            <a href="tel:+886-3-5335135" className="text-eyebrow text-accent pt-4">03 · 5335135</a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <img
        src={hero}
        alt="Cinematic smart home interior at dusk"
        className="absolute inset-0 h-full w-full object-cover scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/30 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,transparent_0%,var(--color-background)_85%)]" />
      <div className="grain" />

      <div className="relative z-10 mx-auto flex h-full max-w-[1480px] flex-col justify-end px-6 pb-20 md:px-12 md:pb-28">
        <div className="reveal in max-w-3xl">
          <div className="flex items-center gap-4 text-eyebrow text-muted-foreground mb-8">
            <span className="h-px w-10 bg-accent" />
            <span>Apple HomeKit · 新竹 Hsinchu</span>
          </div>
          <h1 className="text-display text-[12vw] md:text-[7.2vw] lg:text-[6.4rem]">
            Living,
            <span className="italic text-accent"> reimagined</span>
            <br />in light & quiet.
          </h1>
          <p className="mt-10 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
            穎庭國際智能科技 — 以 Apple HomeKit 為核心，將燈光、空調與語音控制
            融入日常，使生活更便利、更貼心、更有溫度。
          </p>
        </div>

        <div className="reveal in mt-16 flex items-end justify-between border-t border-border pt-6">
          <div className="flex items-center gap-3 text-eyebrow text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            <span>Scroll</span>
          </div>
          <div className="hidden md:grid grid-cols-3 gap-12 text-right">
            <Stat k="01" v="Apple HomeKit" />
            <Stat k="02" v="Lighting & Climate" />
            <Stat k="03" v="Voice & Scenes" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div className="text-left">
      <div className="text-eyebrow text-accent">{k}</div>
      <div className="font-serif text-xl mt-1">{v}</div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="relative py-32 md:py-48">
      <div className="mx-auto max-w-[1480px] px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5 reveal">
            <div className="sticky top-32">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={about} alt="Hand touching glowing smart panel" loading="lazy"
                  className="h-full w-full object-cover" />
              </div>
              <div className="mt-6 text-eyebrow text-muted-foreground flex justify-between">
                <span>— About</span><span>關於我們</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 reveal">
            <div className="text-eyebrow text-accent mb-8">A philosophy of home</div>
            <h2 className="text-display text-[10vw] md:text-6xl lg:text-7xl">
              We believe a home’s value
              <span className="italic"> isn’t in its grandeur</span>—
              but in whether it truly
              <span className="italic"> understands you.</span>
            </h2>
            <div className="mt-14 grid md:grid-cols-2 gap-10 text-muted-foreground leading-relaxed">
              <p>
                穎庭國際智能科技由一群熱愛科技、重視生活質感的專業團隊所組成，
                透過 Apple HomeKit 等智慧系統整合，將燈光、空調與語音控制
                融入日常，使生活更便利、更貼心、更有溫度。
              </p>
              <p>
                從每一盞燈光的點亮，到每一次舒適溫度的調整，我們希望科技
                不只是冷冰冰的功能，而是為團聚、為幸福而存在的橋樑。
                讓我們用智慧科技重新定義家的新樣貌。
              </p>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-6">
              {[
                { k: "Design", v: "智能家居設計" },
                { k: "Install", v: "智能家居安裝" },
                { k: "Renew", v: "智能家居改造" },
              ].map((i) => (
                <div key={i.k} className="border-t border-border pt-5">
                  <div className="text-eyebrow text-accent">{i.k}</div>
                  <div className="font-serif text-xl mt-2">{i.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const systems = [
  {
    idx: "I",
    name: "Apple HomePod",
    sub: "Voice. Presence. The hub of home.",
    desc: "以 HomePod 作為居家中樞，透過 Siri 串聯所有場景，讓聲音成為最自然的開關。",
    img: homepod,
  },
  {
    idx: "II",
    name: "Light Switch",
    sub: "Quiet panels. Cinematic moods.",
    desc: "為每一個空間打造專屬的燈光劇本——晨醒、用餐、閱讀、入眠，輕觸即達。",
    img: switchImg,
  },
  {
    idx: "III",
    name: "AC Controller",
    sub: "Temperature, sensed before you ask.",
    desc: "依據時段、天氣與您的習慣自動調節，讓舒適如呼吸般自然，無需察覺。",
    img: ac,
  },
];

function Systems() {
  return (
    <section id="systems" className="relative py-32 md:py-48 bg-surface">
      <div className="mx-auto max-w-[1480px] px-6 md:px-12">
        <div className="flex items-end justify-between mb-20 reveal">
          <div>
            <div className="text-eyebrow text-accent mb-6">— Systems</div>
            <h2 className="text-display text-5xl md:text-7xl max-w-2xl">
              Three quiet
              <span className="italic"> instruments</span>
              <br />for one calm home.
            </h2>
          </div>
          <div className="hidden md:block text-eyebrow text-muted-foreground">
            03 / Selected works
          </div>
        </div>

        <div className="space-y-32 md:space-y-44">
          {systems.map((s, i) => (
            <article
              key={s.idx}
              className={`reveal grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${
                i % 2 ? "lg:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="lg:col-span-7">
                <div className="relative aspect-[4/5] md:aspect-[5/6] overflow-hidden group">
                  <img
                    src={s.img}
                    alt={s.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                  <div className="absolute top-6 left-6 text-eyebrow text-foreground/80">{s.idx}</div>
                </div>
              </div>
              <div className="lg:col-span-5 lg:px-6">
                <div className="text-eyebrow text-accent mb-5">0{i + 1} · System</div>
                <h3 className="text-display text-5xl md:text-6xl">{s.name}</h3>
                <p className="font-serif italic text-2xl text-muted-foreground mt-6">{s.sub}</p>
                <div className="hairline my-10" />
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                <a
                  href="#contact"
                  className="mt-10 inline-flex items-center gap-3 text-eyebrow border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-colors"
                >
                  Inquire
                  <span aria-hidden>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Atmosphere() {
  return (
    <section id="atmosphere" className="relative h-[90vh] min-h-[560px] overflow-hidden">
      <img src={ambience} alt="Cinematic ambient living room at night" loading="lazy"
        className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-background/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/70" />
      <div className="grain" />
      <div className="relative z-10 mx-auto h-full max-w-[1480px] px-6 md:px-12 flex items-center">
        <div className="reveal max-w-3xl">
          <div className="text-eyebrow text-accent mb-8">— Atmosphere</div>
          <p className="text-display text-3xl md:text-5xl lg:text-6xl">
            “照亮每一個值得珍藏的瞬間，
            <span className="italic block mt-3 text-accent/90">開啟屬於你的理想生活。”</span>
          </p>
          <div className="mt-12 text-eyebrow text-muted-foreground">穎庭國際智能科技 · 2026</div>
        </div>
      </div>
    </section>
  );
}

const journal = [
  { date: "2026 · 03 · 02", title: "智能家居如遇停電要怎麼辦？", cat: "智能家居規劃", href: "https://www.ytsmartlife.com/news/details.php?id=34616" },
  { date: "2026 · 03 · 02", title: "使用 HomeKit 一定要有 HomePod 或 Apple TV 嗎？", cat: "Apple HomeKit 安裝", href: "https://www.ytsmartlife.com/news/details.php?id=34615" },
  { date: "2026 · 03 · 02", title: "什麼是 Apple HomeKit？", cat: "Apple 智能家居安裝", href: "https://www.ytsmartlife.com/news/details.php?id=34603" },
  { date: "2026 · 03 · 02", title: "舊屋可以裝智能家居嗎？", cat: "智能家居改造", href: "https://www.ytsmartlife.com/news/details.php?id=34602" },
];

function Journal() {
  return (
    <section id="journal" className="relative py-32 md:py-48">
      <div className="mx-auto max-w-[1480px] px-6 md:px-12">
        <div className="flex items-end justify-between mb-16 reveal">
          <div>
            <div className="text-eyebrow text-accent mb-6">— Journal</div>
            <h2 className="text-display text-5xl md:text-7xl">最新資訊</h2>
          </div>
          <a
            href="https://www.ytsmartlife.com/news/index.php"
            className="text-eyebrow text-muted-foreground hover:text-accent transition-colors border-b border-border hover:border-accent pb-1"
          >
            View all →
          </a>
        </div>

        <ul>
          {journal.map((p, i) => (
            <li key={i} className="reveal border-t border-border last:border-b">
              <a
                href={p.href}
                className="group grid grid-cols-12 items-center gap-6 py-8 md:py-10 transition-colors"
              >
                <div className="col-span-12 md:col-span-2 text-eyebrow text-muted-foreground">
                  {p.date}
                </div>
                <div className="col-span-12 md:col-span-7">
                  <h3 className="font-serif text-2xl md:text-3xl leading-tight transition-transform duration-700 group-hover:translate-x-3">
                    {p.title}
                  </h3>
                </div>
                <div className="col-span-10 md:col-span-2 text-eyebrow text-muted-foreground">
                  {p.cat}
                </div>
                <div className="col-span-2 md:col-span-1 text-right text-accent text-xl">→</div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative py-32 md:py-48 bg-surface">
      <div className="mx-auto max-w-[1480px] px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6 reveal">
            <div className="text-eyebrow text-accent mb-8">— Contact</div>
            <h2 className="text-display text-5xl md:text-7xl lg:text-8xl">
              Let’s design
              <br /><span className="italic">your home.</span>
            </h2>
            <p className="mt-10 max-w-md text-muted-foreground leading-relaxed">
              歡迎預約展示間參觀，或透過電話、LINE 與我們聯繫，
              開始規劃您的智慧居家。
            </p>
          </div>

          <div className="lg:col-span-6 lg:pl-12 reveal">
            <dl className="space-y-8">
              <Row label="Phone" value="03 · 5335135" href="tel:+886-3-5335135" />
              <Row label="LINE" value="@593ssbfh" href="https://line.me/R/ti/p/%40593ssbfh" />
              <Row label="Facebook" value="YouNeedSmartLife" href="https://www.facebook.com/YouNeedSmartLife/" />
              <Row label="Instagram" value="@yt_smartlife" href="https://www.instagram.com/yt_smartlife/" />
              <Row label="Studio" value="新竹市香山區中華路五段500號" />
              <Row label="Hours" value="週一 — 週日 · 10:00 — 20:00" />
              <Row label="統編" value="83061544" />
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ label, value, href }: { label: string; value: string; href?: string }) {
  const inner = (
    <div className="group grid grid-cols-12 items-baseline gap-4 border-t border-border pt-6">
      <dt className="col-span-3 text-eyebrow text-muted-foreground">{label}</dt>
      <dd className="col-span-9 font-serif text-2xl md:text-3xl group-hover:text-accent transition-colors">
        {value}
      </dd>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-[1480px] px-6 md:px-12 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="" width={28} height={28} className="invert brightness-200" />
          <div className="text-eyebrow text-muted-foreground">
            穎庭國際智能科技 · Yingting Smart Living
          </div>
        </div>
        <div className="text-eyebrow text-muted-foreground">
          © 2026 · Crafted in Hsinchu
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
      <Atmosphere />
      <Journal />
      <Contact />
      <Footer />
    </main>
  );
}
