type Card = { title: string; blurb: string; href: string; emoji: string };
const cards: Card[] = [
  {
    title: "Launch",
    blurb: "High-performance sites that convert. SEO, analytics, and a clean CMS.",
    href: "/launch",
    emoji: "🚀",
  },
  {
    title: "Automate",
    blurb: "CRM, forms, and workflows that route leads and save hours every week.",
    href: "/automate",
    emoji: "🤖",
  },
  {
    title: "Intelligence",
    blurb: "AI chat, dashboards, and summaries so decisions are faster and clearer.",
    href: "/intelligence",
    emoji: "📊",
  },
];

export default function ServiceCards() {
  return (
    <section aria-labelledby="whatwedo" className="py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <h2 id="whatwedo" className="dm text-3xl md:text-4xl tracking-tight mb-6">
          What we do
        </h2>
        <div className="grid gap-4 md:gap-6 lg:grid-cols-3">
          {cards.map((c) => (
            <a
              key={c.title}
              href={c.href}
              className="group relative rounded-2xl bg-[var(--color-surface)]/60 ring-1 ring-white/[0.06] p-5 md:p-6 hover:bg-white/[0.08] hover:ring-white/[0.12] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-[var(--color-bg)]"
            >
              <div className="text-2xl md:text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">{c.emoji}</div>
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-semibold text-lg md:text-xl group-hover:text-white transition-colors">{c.title}</h3>
                <span
                  className="inline-block rounded-lg px-2 py-1 text-xs font-medium text-[#05131a] group-hover:shadow-lg transition-shadow duration-300"
                  style={{ background: "linear-gradient(90deg,var(--color-accent-1),var(--color-accent-2))" }}
                >
                  Learn more
                </span>
              </div>
              <p className="mt-3 text-sm text-white/70 group-hover:text-white/85 transition-colors">{c.blurb}</p>
              <div className="mt-5 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-white/20 transition-colors" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
