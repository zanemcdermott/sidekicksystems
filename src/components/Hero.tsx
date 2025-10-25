"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const parallaxRef = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  // Parallax effect for background image
  useEffect(() => {
    const section = sectionRef.current;
    const target = parallaxRef.current;
    if (!section || !target || shouldReduceMotion) return;

    let rafId = 0;
    const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));

    const updateParallax = () => {
      rafId = 0;
      const rect = section.getBoundingClientRect();
      const progress = rect.top / window.innerHeight;
      const offset = clamp(progress * 64, -48, 48);
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
  }, [shouldReduceMotion]);

  return (
    <section
      ref={sectionRef}
      aria-label="Hero"
      className="relative left-1/2 flex w-screen -translate-x-1/2 -mt-14 md:-mt-16 min-h-[100dvh] md:min-h-[100vh] overflow-hidden"
    >
      {/* Background image with parallax - OPTIMIZED: Single image */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 will-change-transform animate-in fade-in duration-700"
        style={{ transform: "translate3d(0,var(--hero-parallax,0px),0)" }}
      >
        {/* Single optimized image for both mobile and desktop */}
        <Image
          src="/hero/desk-landscape.png"
          alt="Desk with laptop and plants in a bright studio"
          fill
          priority
          quality={90}
          className="object-cover"
          sizes="100vw"
          style={{ 
            objectPosition: 'center 40%' // Adjust this to frame the image nicely on mobile
          }}
        />
      </div>

      {/* Scrims for readability */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-transparent md:bg-gradient-to-r md:from-black/85 md:via-black/40 md:to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/45 via-black/30 to-transparent md:from-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-[1] mx-auto flex min-h-full w-full max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="flex w-full flex-1 flex-col justify-between pt-16 pb-[calc(env(safe-area-inset-bottom)+3.5rem)] md:pt-8 lg:pt-10 md:pb-20 max-w-3xl lg:max-w-4xl">
          {/* Main content with animations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-4 md:space-y-6 text-balance">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="dm text-[clamp(2.1rem,5vw+1rem,3.5rem)] leading-[1.05] text-white md:text-[60px] md:leading-[1.02] tracking-tight"
              >
                Not just <span className="brand-gradient animate-shimmer">websites</span>.<br />
                We build <span className="brand-gradient animate-shimmer">systems</span> that<br className="hidden sm:inline" /> grow your business.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="max-w-2xl text-[clamp(1rem,0.75rem+0.9vw,1.2rem)] text-white/80 md:text-lg"
              >
                Launch fast. Automate workflows. Add AI for instant responses and clear decisions.
              </motion.p>
            </div>
          </motion.div>

          {/* CTAs with animated gradient borders */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="space-y-5 md:space-y-6"
          >
            <div className="flex flex-wrap gap-3 max-[420px]:flex-col">
              {/* Primary CTA with morphing border */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative max-[420px]:w-full"
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#60a5fa] via-[#22d3ee] to-[#60a5fa] opacity-75 blur-sm animate-gradient-border" />
                <a
                  href="/contact"
                  className="relative block rounded-xl px-4 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-[#60a5fa] to-[#22d3ee] shadow-lg sm:text-base sm:px-5 sm:py-3 overflow-hidden group"
                >
                  <span className="relative z-10">Start a project</span>
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: "linear-gradient(90deg, rgba(255,255,255,0.2), transparent)",
                    }}
                  />
                </a>
              </motion.div>

              {/* Secondary CTA */}
              <motion.a
                href="/intelligence"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-xl px-4 py-2.5 text-sm ring-1 ring-white/20 text-white hover:bg-white/5 hover:ring-white/30 max-[420px]:w-full sm:text-base sm:px-5 sm:py-3 transition-all"
              >
                See AI in action
              </motion.a>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs text-white/75 sm:gap-4 sm:text-sm">
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
              >
                ⚡ Fast
              </motion.span>
              <span>•</span>
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1 }}
              >
                🤖 Automated
              </motion.span>
              <span>•</span>
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
              >
                📊 Insight-ready
              </motion.span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}