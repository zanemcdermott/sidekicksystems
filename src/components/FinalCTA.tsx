"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-br from-[var(--color-accent-1)]/10 to-[var(--color-accent-2)]/10 border border-white/10 rounded-2xl p-8 md:p-12"
        >
          <h2 className="dm text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Build Something Better?
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Book a free 30-minute call. We'll talk about your business, your challenges, 
            and how we can help. No pressure, no sales pitch—just honest conversation.
          </p>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[var(--color-accent-1)] to-[var(--color-accent-2)] text-white font-medium px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:shadow-[var(--color-accent-1)]/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-[var(--color-bg)]"
            >
              Start Your Project
              <span className="text-xl">→</span>
            </Link>
          </motion.div>
          <p className="mt-6 text-sm text-white/50">
            Free consultation • Clear pricing • Honest timelines
          </p>
        </motion.div>
      </div>
    </section>
  );
}