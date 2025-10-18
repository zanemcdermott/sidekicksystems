"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const parallaxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const target = parallaxRef.current;
    if (!section || !target) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches) {
      target.style.removeProperty("--hero-parallax");
      return;
    }

    let rafId = 0;
    const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));

    const updateParallax = () => {
      rafId = 0;
      const rect = section.getBoundingClientRect();
      const progress = rect.top / window.innerHeight;       // -1..1-ish
      const offset = clamp(progress * 64, -48, 48);          // softer ±48px
      target.style.setProperty("--hero-parallax", `${offset}px`);
    };

    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateParallax);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateParallax);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Hero"
      className="relative left-1/2 flex w-screen -translate-x-1/2 -mt-14 md:-mt-16 min-h-[100dvh] md:min-h-[100vh] overflow-hidden"
    >
      {/* Background image with parallax */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 will-change-transform"
        style={{ transform: "translate3d(0,var(--hero-parallax,0px),0)" }}
      >
        <Image
          src="/hero/desk.webp"         // ✅ use public path
          alt="Desk with laptop and plants in a bright studio"
          fill
          priority
          className="object-cover scale-[1.02] md:scale-[1.04] lg:scale-[1.01] object-[50%_42%] md:object-[53%_30%] lg:object-[58%_30%]"
          sizes="100vw"
        />
      </div>

      {/* Scrims for readability */}
      <div className="absolute inset-0 pointer-events-none">
        {/* left-to-right scrim (slightly stronger) */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-transparent md:from-black/70 md:via-black/45" />
        {/* bottom vignette */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/45 via-black/30 to-transparent md:from-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-[1] mx-auto flex min-h-full w-full max-w-7xl px-6 md:px-8">
        <div className="flex w-full max-w-3xl flex-1 flex-col justify-between gap-8 pt-6 md:pt-12 pb-[calc(env(safe-area-inset-bottom)+3.5rem)] md:pb-20">
          {/* Mobile-only glass card for contrast */}
          <div className="rounded-2xl bg-black/70 p-5 backdrop-blur-md ring-1 ring-white/10 shadow-[0_18px_60px_rgba(0,0,0,0.45)] md:bg-transparent md:p-0 md:ring-0 md:shadow-none md:backdrop-blur-0">
            <div className="space-y-4 md:space-y-6 text-balance">
              <h1 className="dm text-[clamp(2.1rem,5vw+1rem,3.5rem)] leading-[1.05] text-white md:text-[60px] md:leading-[1.02] tracking-tight">
                Not just <span className="brand-gradient">websites</span>.<br />
                We build <span className="brand-gradient">systems</span> that grow your business.
              </h1>

              <p className="max-w-2xl text-[clamp(1rem,0.75rem+0.9vw,1.2rem)] text-white/80 md:text-lg">
                Launch fast. Automate workflows. Add AI for instant responses and clear decisions.
              </p>
            </div>
          </div>

          <div className="space-y-5 md:space-y-6">
            <div className="flex flex-wrap gap-3 max-[420px]:flex-col">
              <a
                href="/contact"
                className="rounded-xl px-4 py-2.5 text-sm font-medium text-[#05131a] shadow-[var(--shadow-soft)] max-[420px]:w-full sm:text-base sm:px-5 sm:py-3"
                style={{
                  background:
                    "linear-gradient(90deg,var(--color-accent-1),var(--color-accent-2))",
                }}
              >
                Start a project
              </a>
              <a
                href="/intelligence"
                className="rounded-xl px-4 py-2.5 text-sm ring-1 ring-white/20 text-[var(--color-text)] hover:bg-white/5 max-[420px]:w-full sm:text-base sm:px-5 sm:py-3"
              >
                See AI in action
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs text-white/75 sm:gap-4 sm:text-sm">
              <span>⚡ Fast</span><span>•</span><span>🤖 Automated</span><span>•</span><span>📊 Insight-ready</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
