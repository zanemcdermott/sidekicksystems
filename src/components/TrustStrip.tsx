const logos = [
  { src: "/logo/vscode.svg",       alt: "Visual Studio Code" },
  { src: "/logo/github.svg",       alt: "GitHub" },
  { src: "/logo/vercel.svg",       alt: "Vercel" },
  { src: "/logo/nextjs.svg",       alt: "Next.js" },
  { src: "/logo/cloudflare.svg",   alt: "Cloudflare" },
  { src: "/logo/openai.svg",       alt: "OpenAI" },
  { src: "/logo/claude.svg",       alt: "Claude" },
  { src: "/logo/twilio.svg",       alt: "Twilio" },
  { src: "/logo/elevenlabs.svg",   alt: "ElevenLabs" },
  { src: "/logo/n8n.svg",          alt: "n8n" },
  { src: "/logo/tailwindcss.svg",  alt: "Tailwind CSS" },
  { src: "/logo/typescript.svg",   alt: "TypeScript" },
];

const marqueeLogos = [...logos, ...logos];

export default function TrustStrip() {
  return (
    <section
      aria-label="Trusted platforms we implement"
      className="relative z-10 isolate overflow-hidden border-y border-white/10 bg-[radial-gradient(circle_at_top,var(--color-brand-purple)/15,transparent_55%)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-32 h-64 bg-gradient-to-b from-white/15 via-transparent to-transparent blur-3xl opacity-70"
      />
      <div className="relative mx-auto max-w-7xl px-6 py-12 sm:px-8 md:py-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/60">
              Trusted tools we build with
            </p>
            <p className="text-base text-white/75 md:text-lg">
              Platforms we lean on for dependable launches, automations, and AI-driven decision-making.
            </p>
          </div>
          <div className="hidden text-sm text-white/60 md:block">
            <span className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-2">
              <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-[#FF1E8C] via-[#D244F8] to-[#3C2EFF]" />
              Implementation partners you already trust.
            </span>
          </div>
        </div>

        <div className="mt-10 mask-fade-horizontal overflow-hidden">
          <div className="trust-marquee gap-8 sm:gap-10">
            {marqueeLogos.map((logo, index) => (
              <div
                key={`${logo.alt}-${index}`}
                className="group flex h-16 min-w-[190px] items-center justify-center rounded-2xl border border-white/15 bg-white px-7 py-3 shadow-[0_12px_30px_rgba(15,15,38,0.12)] hover:shadow-[0_20px_40px_rgba(15,15,38,0.18)] hover:border-white/25 transition-all duration-300"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-full w-auto max-h-12 object-contain"
                  loading={index < logos.length ? "eager" : "lazy"}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
