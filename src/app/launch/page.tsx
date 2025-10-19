"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function LaunchPage() {
  return (
    <section className="px-6 md:px-12 pt-12 md:pt-16 pb-24 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="dm text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
          Custom <span className="brand-gradient animate-shimmer">Website Design</span> & Launch
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white/75 max-w-2xl mx-auto">
          We craft fast, beautiful, mobile-friendly websites from scratch – built to grow your business and make your first impression unforgettable.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16">
        {/* Service Card 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="group relative bg-[var(--color-surface)]/60 ring-1 ring-white/[0.06] p-6 md:p-8 rounded-2xl hover:bg-white/[0.08] hover:ring-white/[0.12] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
        >
          <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">⚡</div>
          <h3 className="text-xl font-semibold mb-3 group-hover:text-white transition-colors">Made from Scratch</h3>
          <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/85 transition-colors">
            Every site we build is fully custom coded – no templates, no compromises. Optimized for speed, SEO, and wow factor.
          </p>
        </motion.div>

        {/* Service Card 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="group relative bg-[var(--color-surface)]/60 ring-1 ring-white/[0.06] p-6 md:p-8 rounded-2xl hover:bg-white/[0.08] hover:ring-white/[0.12] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
        >
          <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">📱</div>
          <h3 className="text-xl font-semibold mb-3 group-hover:text-white transition-colors">Mobile-First & Responsive</h3>
          <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/85 transition-colors">
            Over half of your visitors are on mobile. We ensure your site looks perfect on every screen size.
          </p>
        </motion.div>

        {/* Service Card 3 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="group relative bg-[var(--color-surface)]/60 ring-1 ring-white/[0.06] p-6 md:p-8 rounded-2xl hover:bg-white/[0.08] hover:ring-white/[0.12] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
        >
          <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">🎨</div>
          <h3 className="text-xl font-semibold mb-3 group-hover:text-white transition-colors">Tailored for Every Industry</h3>
          <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/85 transition-colors">
            From tradies to cafés, ecommerce to creatives – we create digital experiences tailored to your unique business needs.
          </p>
        </motion.div>
      </div>

      {/* Placeholder for laptop/phone mockup */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="w-full mb-16"
      >
        <div className="aspect-[16/9] w-full bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl flex items-center justify-center border border-dashed border-white/20 backdrop-blur-sm">
          <span className="text-white/40 text-lg">[Mockup Placeholder]</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-center"
      >
        <div className="inline-block mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--color-accent-1)]/10 to-[var(--color-accent-2)]/10 border border-white/10">
            <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-[var(--color-accent-1)] to-[var(--color-accent-2)]" />
            <span className="text-sm text-white/70">Transparent Pricing</span>
          </div>
        </div>
        <h2 className="dm text-3xl md:text-4xl font-semibold text-balance mb-4">
          Pricing starts from <span className="brand-gradient animate-shimmer">$750</span>
        </h2>
        <p className="text-white/70 max-w-xl mx-auto mb-8 text-lg">
          Each project is custom-quoted based on your needs. Reach out to discuss the best solution for your business.
        </p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[var(--color-accent-1)] to-[var(--color-accent-2)] text-white font-medium px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:shadow-[var(--color-accent-1)]/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-[var(--color-bg)]"
          >
            Get a Quote
            <span className="text-xl">→</span>
          </Link>
        </motion.div>
        <p className="mt-6 text-sm text-white/50">
          Optional: ask about running Google or Meta ads with your new website.
        </p>
      </motion.div>
    </section>
  );
}
