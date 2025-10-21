"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    icon: "🚀",
    title: "Launch",
    tagline: "Your Website, Done Right",
    metrics: ["4-6 weeks", "90+ speed score", "100% mobile"],
    description: "Custom-coded websites that actually convert. No templates, no compromises. Fast, beautiful, and built to grow your business.",
    href: "/launch"
  },
  {
    icon: "🤖",
    title: "Automate",
    tagline: "Stop Doing Repetitive Work",
    metrics: ["10-20hrs saved/week", "Zero errors", "24/7 operation"],
    description: "Connect your tools, automate workflows, and eliminate manual tasks. Your business runs while you sleep.",
    href: "/automate"
  },
  {
    icon: "📊",
    title: "Intelligence",
    tagline: "AI That Actually Helps",
    metrics: ["70-85% calls handled", "24/7 support", "Real-time data"],
    description: "AI chatbots, voice receptionists, and dashboards that turn data into decisions. Know what's happening, instantly.",
    href: "/intelligence"
  }
];

export default function WhatWeDo() {
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
            What We Build
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Three services. One goal: Make your business better.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <Link href={service.href} className="block group">
                <div className="h-full p-8 rounded-2xl bg-[var(--color-surface)]/60 ring-1 ring-white/[0.06] hover:bg-white/[0.08] hover:ring-white/[0.12] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-lg text-white/60 mb-6">{service.tagline}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.metrics.map((metric, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 rounded-full bg-gradient-to-r from-green-500/20 to-green-500/10 border border-green-500/30 text-green-400 text-xs font-semibold"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>

                  <p className="text-white/70 leading-relaxed mb-6 group-hover:text-white/85 transition-colors">
                    {service.description}
                  </p>

                  <div className="flex items-center gap-2 text-white/80 group-hover:text-white font-medium transition-colors">
                    Learn more
                    <span className="text-xl group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}