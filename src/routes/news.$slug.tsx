import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { SiteNav, SiteFooter, StickyContact } from "@/components/site-chrome";
import { NEWS, type NewsItem } from "@/content/site";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/news/$slug")({
  loader: ({ params }) => {
    const article = NEWS.find((n) => n.slug === params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData, params }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.article.title} — Yingting Smart Journal` },
          { name: "description", content: (loaderData.article.body.find((b) => b.type === "p")?.text ?? loaderData.article.title).slice(0, 158) },
          { property: "og:title", content: loaderData.article.title },
          { property: "og:description", content: (loaderData.article.body.find((b) => b.type === "p")?.text ?? "Notes from Yingting Smart on Apple HomeKit, smart living and the quiet craft of home.").slice(0, 158) },
          { property: "og:image", content: `https://cinematic-reimagine-project.lovable.app${loaderData.article.image}` },
          { property: "og:url", content: `https://cinematic-reimagine-project.lovable.app/news/${params.slug}` },
          { property: "og:type", content: "article" },
          { name: "twitter:title", content: loaderData.article.title },
          { name: "twitter:description", content: (loaderData.article.body.find((b) => b.type === "p")?.text ?? "Notes from Yingting Smart on Apple HomeKit, smart living and the quiet craft of home.").slice(0, 158) },
          { name: "twitter:image", content: `https://cinematic-reimagine-project.lovable.app${loaderData.article.image}` },
        ]
      : [],
    links: loaderData
      ? [{ rel: "canonical", href: `https://cinematic-reimagine-project.lovable.app/news/${params.slug}` }]
      : [],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center bg-background">
      <div className="text-center px-6">
        <div className="text-eyebrow text-accent mb-4">404</div>
        <h1 className="text-4xl font-light tracking-tight">Article not found.</h1>
        <Link to="/" className="mt-8 inline-flex text-eyebrow border-b border-foreground pb-1 hover:text-accent hover:border-accent">
          Back to home →
        </Link>
      </div>
    </div>
  ),
  component: NewsDetail,
});

function NewsDetail() {
  useReveal();
  const { lang, t } = useLang();
  const { article } = Route.useLoaderData();
  const related = NEWS.filter((n) => n.slug !== article.slug).slice(0, 3);
  const category = lang === "中" ? (article.categoryZh ?? article.category) : article.category;
  const title = lang === "中" ? (article.titleZh ?? article.title) : article.title;
  const subtitle = lang === "中" ? (article.subtitleZh ?? article.subtitle) : article.subtitle;

  return (
    <main className="bg-background text-foreground">
      <SiteNav />
      <StickyContact />

      <article className="pt-32 md:pt-40 pb-24">
        <div className="mx-auto max-w-[1480px] px-6 md:px-12">
          <div className="text-eyebrow text-muted-foreground reveal in">
            <Link to="/" className="hover:text-accent">{t("Home", "首頁")}</Link>
            <span className="mx-3 text-border">/</span>
            <Link to="/#journal" className="hover:text-accent">{t("Journal", "專欄")}</Link>
            <span className="mx-3 text-border">/</span>
            <span className="text-foreground">{category}</span>
          </div>

          <div className="mt-10 grid grid-cols-12 gap-10 reveal in">
            <div className="col-span-12 md:col-span-8">
              <div className="text-eyebrow text-accent mb-6">{category} · {article.date}</div>
              <h1 className="text-display-md text-4xl md:text-6xl lg:text-[4.25rem] max-w-[20ch] break-words">
                {title}
              </h1>
              <p className="mt-6 text-[15px] text-muted-foreground tracking-wide break-words">{subtitle}</p>
            </div>
          </div>

          <div className="mt-14 relative aspect-[16/9] overflow-hidden bg-surface-2 reveal">
            <img src={article.image} alt={title} className="absolute inset-0 h-full w-full object-cover" />
          </div>

          <div className="mt-20 grid grid-cols-12 gap-10">
            <aside className="hidden md:block md:col-span-3">
              <div className="sticky top-32 text-eyebrow text-muted-foreground space-y-3">
                <div>— Journal</div>
                <div className="text-foreground">{article.date}</div>
                <div className="hairline w-12 bg-accent" />
                <div>{category}</div>
              </div>
            </aside>

            <div className="col-span-12 md:col-span-9 max-w-[68ch] reveal">
              {(article.body as NewsItem["body"]).map((b, i: number) => {
                const text = lang === "中" ? (b.textZh ?? b.text) : b.text;
                if (b.type === "h2") return <h2 key={i} className="mt-14 mb-5 text-2xl md:text-3xl font-light tracking-tight break-words">{text}</h2>;
                if (b.type === "h3") return <h3 key={i} className="mt-10 mb-4 text-xl font-normal tracking-tight break-words">{text}</h3>;
                if (b.type === "ul") return (
                  <ul key={i} className="my-6 space-y-3 text-[16px] text-muted-foreground leading-[1.85]">
                    {((lang === "中" ? (b.itemsZh ?? b.items) : b.items) ?? []).map((li: string, j: number) => (
                      <li key={j} className="flex gap-4">
                        <span className="mt-3 h-1 w-1 rounded-full bg-accent shrink-0" />
                        <span className="break-words">{li}</span>
                      </li>
                    ))}
                  </ul>
                );
                return <p key={i} className="my-5 text-[16px] text-muted-foreground leading-[1.9] break-words">{text}</p>;
              })}
            </div>
          </div>
        </div>
      </article>

      {/* Related */}
      <section className="py-24 md:py-32 bg-[var(--color-surface-2)]">
        <div className="mx-auto max-w-[1480px] px-6 md:px-12">
          <div className="flex items-end justify-between mb-12 reveal">
            <h2 className="text-display-md text-3xl md:text-5xl">{t("Continue reading.", "繼續閱讀。")}</h2>
            <Link to="/" hash="journal" className="text-eyebrow text-muted-foreground hover:text-accent">{t("All articles", "所有文章")} →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {related.map((r) => (
              <Link key={r.slug} to="/news/$slug" params={{ slug: r.slug }} className="group reveal block">
                <div className="relative aspect-[5/3] overflow-hidden bg-background">
                <img src={r.image} alt={lang === "中" ? (r.titleZh ?? r.title) : r.title} loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]" />
                </div>
                <div className="mt-5 text-eyebrow text-muted-foreground">{r.date}</div>
                <h3 className="mt-2 text-xl md:text-2xl font-light tracking-tight group-hover:text-accent transition-colors">
                  {lang === "中" ? (r.titleZh ?? r.title) : r.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
