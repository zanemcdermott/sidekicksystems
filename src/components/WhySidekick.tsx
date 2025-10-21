"use client";

import { motion } from "framer-motion";

const differentiators = [
  {
    title: "Actually Custom",
    description: "We write code from scratch. No WordPress, no templates, no 'premium themes'. Your business is unique—your website should be too."
  },
  {
    title: "Print Design Included",
    description: "Need menus, business cards, or flyers? We design and organise printing for you. Your digital and physical branding stays consistent."
  },
  {
    title: "Built to Scale",
    description: "Start with a website, add automation, layer in AI. We build systems that grow with you, not platforms you'll outgrow."
  },
  {
    title: "Honest Timelines",
    description: "We tell you upfront: 4-6 weeks for websites, 3-4 weeks for automation. No 'launching next week' promises we can't keep."
  },
  {
    title: "You Own Everything",
    description: "All code, all accounts, all data—it's yours. No vendor lock-in, no proprietary systems. Leave anytime (though we hope you won't)."
  }
];

export default function WhySidekick() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="dm text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Why Sidekick?
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            We're not like other agencies. Here's what makes us different.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {differentiators.map((diff, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-6 rounded-xl bg-[var(--color-surface)]/60 ring-1 ring-white/[0.06] hover:ring-white/[0.12] transition-all"
            >
              <h3 className="text-xl font-semibold mb-3">{diff.title}</h3>
              <p className="text-white/70 leading-relaxed">{diff.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}