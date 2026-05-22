import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { SiteNav, SiteFooter, StickyContact } from "@/components/site-chrome";
import { NEWS, type NewsItem } from "@/content/site";

export const Route = createFileRoute("/news/$slug")({
  loader: ({ params }) => {
    const article = NEWS.find((n) => n.slug === params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.article.title} — Yingting Smart Journal` },
          { name: "description", content: loaderData.article.body.find((b) => b.type === "p")?.text ?? loaderData.article.title },
          { property: "og:title", content: loaderData.article.title },
          { property: "og:image", content: loaderData.article.image },
          { property: "og:type", content: "article" },
        ]
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
  const { article } = Route.useLoaderData();
  const related = NEWS.filter((n) => n.slug !== article.slug).slice(0, 3);

  return (
    <main className="bg-background text-foreground">
      <SiteNav />
      <StickyContact />

      <article className="pt-32 md:pt-40 pb-24">
        <div className="mx-auto max-w-[1480px] px-6 md:px-12">
          <div className="text-eyebrow text-muted-foreground reveal in">
            <Link to="/" className="hover:text-accent">Home</Link>
            <span className="mx-3 text-border">/</span>
            <Link to="/#journal" className="hover:text-accent">Journal</Link>
            <span className="mx-3 text-border">/</span>
            <span className="text-foreground">{article.category}</span>
          </div>

          <div className="mt-10 grid grid-cols-12 gap-10 reveal in">
            <div className="col-span-12 md:col-span-8">
              <div className="text-eyebrow text-accent mb-6">{article.category} · {article.date}</div>
              <h1 className="text-display-md text-4xl md:text-6xl lg:text-[4.25rem] max-w-[20ch]">
                {article.title}
              </h1>
              <p className="mt-6 text-[15px] text-muted-foreground tracking-wide">{article.subtitle}</p>
            </div>
          </div>

          <div className="mt-14 relative aspect-[16/9] overflow-hidden bg-surface-2 reveal">
            <img src={article.image} alt={article.title} className="absolute inset-0 h-full w-full object-cover" />
          </div>

          <div className="mt-20 grid grid-cols-12 gap-10">
            <aside className="hidden md:block md:col-span-3">
              <div className="sticky top-32 text-eyebrow text-muted-foreground space-y-3">
                <div>— Journal</div>
                <div className="text-foreground">{article.date}</div>
                <div className="hairline w-12 bg-accent" />
                <div>{article.category}</div>
              </div>
            </aside>

            <div className="col-span-12 md:col-span-9 max-w-[68ch] reveal">
              {(article.body as NewsItem["body"]).map((b, i: number) => {
                if (b.type === "h2") return <h2 key={i} className="mt-14 mb-5 text-2xl md:text-3xl font-light tracking-tight">{b.text}</h2>;
                if (b.type === "h3") return <h3 key={i} className="mt-10 mb-4 text-xl font-normal tracking-tight">{b.text}</h3>;
                if (b.type === "ul") return (
                  <ul key={i} className="my-6 space-y-3 text-[16px] text-muted-foreground leading-[1.85]">
                    {(b.items ?? []).map((li: string, j: number) => (
                      <li key={j} className="flex gap-4">
                        <span className="mt-3 h-1 w-1 rounded-full bg-accent shrink-0" />
                        <span>{li}</span>
                      </li>
                    ))}
                  </ul>
                );
                return <p key={i} className="my-5 text-[16px] text-muted-foreground leading-[1.9]">{b.text}</p>;
              })}
            </div>
          </div>
        </div>
      </article>

      {/* Related */}
      <section className="py-24 md:py-32 bg-[var(--color-surface-2)]">
        <div className="mx-auto max-w-[1480px] px-6 md:px-12">
          <div className="flex items-end justify-between mb-12 reveal">
            <h2 className="text-display-md text-3xl md:text-5xl">Continue reading.</h2>
            <Link to="/" hash="journal" className="text-eyebrow text-muted-foreground hover:text-accent">All articles →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {related.map((r) => (
              <Link key={r.slug} to="/news/$slug" params={{ slug: r.slug }} className="group reveal block">
                <div className="relative aspect-[5/3] overflow-hidden bg-background">
                  <img src={r.image} alt={r.title} loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]" />
                </div>
                <div className="mt-5 text-eyebrow text-muted-foreground">{r.date}</div>
                <h3 className="mt-2 text-xl md:text-2xl font-light tracking-tight group-hover:text-accent transition-colors">
                  {r.title}
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
