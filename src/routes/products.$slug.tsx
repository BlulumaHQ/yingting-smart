import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { SiteNav, SiteFooter, StickyContact } from "@/components/site-chrome";
import { PRODUCTS, CONTACT, type Product } from "@/content/site";
import { useLang } from "@/lib/i18n";
import bgLiving from "@/assets/yt/bg-living.png";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = PRODUCTS.find((p) => p.slug === params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.product.name} — Yingting Smart` },
          { name: "description", content: `${loaderData.product.name} by Yingting Smart — ${loaderData.product.tagline}. Apple HomeKit-ready, designed and installed in Hsinchu.` },
          { property: "og:title", content: `${loaderData.product.name} — Yingting Smart` },
          { property: "og:description", content: `${loaderData.product.tagline}. Apple HomeKit smart home design and installation.` },
          { property: "og:image", content: loaderData.product.image },
          { property: "og:type", content: "product" },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center bg-background">
      <div className="text-center px-6">
        <div className="text-eyebrow text-accent mb-4">404</div>
        <h1 className="text-4xl font-light tracking-tight">Product not found.</h1>
        <Link to="/" className="mt-8 inline-flex text-eyebrow border-b border-foreground pb-1 hover:text-accent hover:border-accent">
          Back to home →
        </Link>
      </div>
    </div>
  ),
  component: ProductDetail,
});

function ProductDetail() {
  useReveal();
  const { lang, t } = useLang();
  const { product } = Route.useLoaderData();
  const others = PRODUCTS.filter((p) => p.slug !== product.slug);
  const productName = lang === "中" ? (product.nameZh ?? product.name) : product.name;
  const productTagline = lang === "中" ? (product.taglineZh ?? product.tagline) : product.tagline;
  const productDescription = lang === "中" ? (product.descriptionZh ?? product.description) : product.description;
  const productFeatures = lang === "中" ? (product.featuresZh ?? product.features) : product.features;
  const productSpecs = lang === "中" ? (product.specsZh ?? product.specs) : product.specs;

  return (
    <main className="bg-background text-foreground">
      <SiteNav />
      <StickyContact />

      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-20 md:pb-28 relative overflow-hidden">
        <div className="mx-auto max-w-[1480px] px-6 md:px-12">
          <div className="text-eyebrow text-muted-foreground reveal in">
            <Link to="/" className="hover:text-accent">{t("Home", "首頁")}</Link>
            <span className="mx-3 text-border">/</span>
            <Link to="/" hash="systems" className="hover:text-accent">{t("Systems", "系統")}</Link>
            <span className="mx-3 text-border">/</span>
            <span className="text-foreground">{productName}</span>
          </div>

          <div className="mt-10 grid grid-cols-12 gap-10 items-center">
            <div className="col-span-12 md:col-span-6 reveal in">
              <div className="text-eyebrow text-accent mb-6">{productTagline}</div>
              <h1 className="text-display text-5xl md:text-7xl lg:text-[5.5rem] break-words">
                {productName}
              </h1>
              <p className="mt-10 text-[16px] md:text-[17px] text-muted-foreground leading-[1.9] max-w-xl break-words">
                {productDescription}
              </p>
              <div className="mt-12 flex flex-wrap gap-4">
                <a href="/#contact"
                  className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-7 py-4 text-eyebrow hover:bg-foreground hover:text-background transition-colors">
                  {t("Inquire about", "諮詢")} {productName} <span>→</span>
                </a>
                <a href={CONTACT.lineUrl} target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-3 border border-foreground px-7 py-4 text-eyebrow hover:bg-foreground hover:text-background transition-colors">
                  LINE · {CONTACT.line}
                </a>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 reveal in">
              <div className="relative aspect-square bg-[var(--color-accent-soft)]/40 overflow-hidden">
                <img src={bgLiving} alt="" aria-hidden
                  className="absolute inset-0 h-full w-full object-cover opacity-30" />
                <img src={product.image} alt={product.name} fetchPriority="high"
                  className="absolute inset-0 h-full w-full object-contain p-12 md:p-20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features + Specs */}
      <section className="py-24 md:py-32 bg-[var(--color-surface-2)]">
        <div className="mx-auto max-w-[1480px] px-6 md:px-12 grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-7 reveal">
            <div className="text-eyebrow text-accent mb-6">— Features</div>
            <h2 className="text-display-md text-3xl md:text-5xl mb-12">
              Considered in <span className="italic-serif">every detail.</span>
            </h2>
            <ul className="divide-y divide-border border-y border-border">
              {(productFeatures as string[]).map((f: string, i: number) => (
                <li key={f} className="grid grid-cols-12 items-baseline gap-4 py-6">
                  <span className="col-span-2 text-eyebrow text-accent">0{i + 1}</span>
                  <span className="col-span-10 text-[17px] font-light tracking-tight">{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-12 md:col-span-5 reveal">
            <div className="text-eyebrow text-accent mb-6">— Specifications</div>
            <h3 className="text-display-md text-2xl md:text-3xl mb-10">Technical notes.</h3>
            <dl className="space-y-px bg-border">
              {(productSpecs as Product["specs"]).map((s: Product["specs"][number]) => (
                <div key={s.label} className="bg-background p-5 grid grid-cols-12 gap-4">
                  <dt className="col-span-4 text-eyebrow text-muted-foreground">{s.label}</dt>
                  <dd className="col-span-8 text-[15px]">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Other products */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1480px] px-6 md:px-12">
          <div className="flex items-end justify-between mb-12 reveal">
            <h2 className="text-display-md text-3xl md:text-5xl">{t("Other instruments.", "其他智慧系統。")}</h2>
            <Link to="/" hash="systems" className="text-eyebrow text-muted-foreground hover:text-accent">{t("All systems", "所有系統")} →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
            {others.map((p) => (
              <Link key={p.slug} to="/products/$slug" params={{ slug: p.slug }} className="group bg-background p-8 md:p-10 reveal block hover:bg-[var(--color-surface-2)] transition-colors">
                <div className="relative aspect-[5/3] overflow-hidden bg-[var(--color-surface-2)]">
                  <img src={p.image} alt={p.name} loading="lazy"
                    className="absolute inset-0 h-full w-full object-contain p-8 transition-transform duration-[1400ms] ease-out group-hover:scale-105" />
                </div>
                <div className="mt-6 text-eyebrow text-muted-foreground">{lang === "中" ? (p.taglineZh ?? p.tagline) : p.tagline}</div>
                <h3 className="mt-2 text-3xl font-light tracking-tight group-hover:text-accent transition-colors break-words">{lang === "中" ? (p.nameZh ?? p.name) : p.name}</h3>
                <div className="mt-6 inline-flex items-center gap-2 text-eyebrow text-foreground">
                  {t("Discover", "了解更多")} <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
