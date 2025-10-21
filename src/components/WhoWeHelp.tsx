"use client";

import { motion } from "framer-motion";

const industries = [
  { name: "Restaurants & Cafés", icon: "🍽️" },
  { name: "Trades & Services", icon: "🔧" },
  { name: "Professional Services", icon: "💼" },
  { name: "Medical & Dental", icon: "🏥" },
  { name: "E-commerce", icon: "🛍️" },
  { name: "Creative Studios", icon: "🎨" }
];

export default function WhoWeHelp() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-transparent via-[var(--color-brand-purple)]/5 to-transparent">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="dm text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Who We Help
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            We work with all kinds of businesses, but we're especially good at these
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
          {industries.map((industry, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-6 rounded-xl bg-[var(--color-surface)]/60 ring-1 ring-white/[0.06] text-center hover:ring-white/[0.12] hover:scale-105 transition-all"
            >
              <div className="text-4xl mb-3">{industry.icon}</div>
              <div className="text-sm font-medium text-white/80">{industry.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}