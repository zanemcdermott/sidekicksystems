"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

// Stats data
const stats = [
  { value: 50, suffix: "+", label: "Sites Launched" },
  { value: 10, suffix: "k+", label: "Hours Automated" },
  { value: 100, suffix: "%", label: "Custom Code" },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const parallaxRef = useRef<HTMLDivElement | null>(null);
  const spotlightRef = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  // Mouse spotlight effect (desktop only)
  useEffect(() => {
    if (shouldReduceMotion || window.innerWidth < 768) return;

    const handleMouseMove = (e: MouseEvent) => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [shouldReduceMotion]);

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
        <img
          src="/hero/desk.webp"
          alt="Desk with laptop and plants in a bright studio"
          className="w-full h-full object-cover scale-[1.02] md:scale-[1.04] lg:scale-[1.01] object-[50%_42%] md:object-[53%_30%] lg:object-[58%_30%]"
        />
      </div>

      {/* Animated grid overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.15]">
        <div 
          className="absolute inset-0 animate-grid-flow"
          style={{
            backgroundImage: `
              linear-gradient(rgba(96, 165, 250, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(96, 165, 250, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Spotlight effect - follows mouse on desktop, pulses on mobile */}
      <div
        ref={spotlightRef}
        className="absolute inset-0 pointer-events-none opacity-40 md:opacity-60 transition-opacity duration-500"
        style={{
          background: window.innerWidth >= 768
            ? `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(96, 165, 250, 0.15), transparent 60%)`
            : `radial-gradient(circle at 50% 50%, rgba(96, 165, 250, 0.1), transparent 60%)`,
        }}
      >
        {/* Mobile pulse animation */}
        {window.innerWidth < 768 && (
          <div className="absolute inset-0 animate-pulse-spotlight" />
        )}
      </div>

      {/* Scrims for readability */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-transparent md:from-black/70 md:via-black/45" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/45 via-black/30 to-transparent md:from-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-[1] mx-auto flex min-h-full w-full max-w-7xl px-6 md:px-8">
        <div className="flex w-full max-w-3xl flex-1 flex-col justify-between gap-8 pt-6 md:pt-12 pb-[calc(env(safe-area-inset-bottom)+3.5rem)] md:pb-20">
          {/* Main content with animations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="rounded-2xl bg-black/70 p-5 backdrop-blur-md ring-1 ring-white/10 shadow-[0_18px_60px_rgba(0,0,0,0.45)] md:bg-transparent md:p-0 md:ring-0 md:shadow-none md:backdrop-blur-0"
          >
            <div className="space-y-4 md:space-y-6 text-balance">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="dm text-[clamp(2.1rem,5vw+1rem,3.5rem)] leading-[1.05] text-white md:text-[60px] md:leading-[1.02] tracking-tight"
              >
                Not just <span className="brand-gradient animate-shimmer">websites</span>.<br />
                We build <span className="brand-gradient animate-shimmer">systems</span> that grow your business.
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

          {/* Stats counter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="hidden md:grid grid-cols-3 gap-6 max-w-2xl"
          >
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-bold brand-gradient mb-1">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
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

// Counter component with animation
function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      setCount(target);
      return;
    }

    let frame = 0;
    const totalFrames = 60;
    const increment = target / totalFrames;

    const animate = () => {
      frame++;
      if (frame <= totalFrames) {
        setCount(Math.min(Math.round(increment * frame), target));
        requestAnimationFrame(animate);
      }
    };

    const timer = setTimeout(animate, 600);
    return () => clearTimeout(timer);
  }, [target, shouldReduceMotion]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}