"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    icon: "🚀",
    title: "Launch",
    tagline: "Custom Websites That Convert",
    description: "We build high-performance, SEO-optimized websites from scratch. No templates, no compromises. Every site is custom-coded for speed, mobile responsiveness, and conversion.",
    features: [
      "Custom design & development",
      "Mobile-first responsive design",
      "SEO optimization built-in",
      "Fast loading speeds (Core Web Vitals)",
      "Content management system",
      "Analytics & tracking setup"
    ],
    href: "/launch",
    color: "from-[#FF1E8C] to-[#D244F8]"
  },
  {
    icon: "🤖",
    title: "Automate",
    tagline: "Save 10+ Hours Every Week",
    description: "Stop wasting time on repetitive tasks. We build custom automations that handle lead routing, email responses, CRM updates, and more—running 24/7 with zero errors.",
    features: [
      "Email & lead automation",
      "CRM integration & sync",
      "Custom workflow builders",
      "Form to database automation",
      "Notification systems",
      "Report generation"
    ],
    href: "/automate",
    color: "from-[#D244F8] to-[#3C2EFF]"
  },
  {
    icon: "📊",
    title: "Intelligence",
    tagline: "AI-Powered Business Insights",
    description: "Make smarter decisions faster with AI chatbots, custom dashboards, and data insights. Get instant answers to customer questions and clear visibility into your business metrics.",
    features: [
      "AI chatbot support (24/7)",
      "Custom analytics dashboards",
      "Data insights & recommendations",
      "Automated reporting",
      "Predictive analytics",
      "Customer behavior tracking"
    ],
    href: "/intelligence",
    color: "from-[#3C2EFF] to-[#60a5fa]"
  }
];

export default function WhatWeDo() {
  return (
    <section className="py-20 md:py-32 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-brand-purple)]/5 to-transparent pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 md:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="dm text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6">
            What we do
          </h2>
          <p className="text-lg md:text-xl text-white/75 max-w-3xl mx-auto">
            We build complete digital systems that help your business grow. From custom websites to AI-powered automation, we handle it all.
          </p>
        </motion.div>

        <div className="space-y-8 md:space-y-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Link href={service.href}>
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center bg-[var(--color-surface)]/40 ring-1 ring-white/[0.06] rounded-3xl p-8 md:p-12 hover:bg-white/[0.08] hover:ring-white/[0.12] transition-all duration-500 hover:scale-[1.01] hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
                  {/* Left side - Info */}
                  <div className={index % 2 === 1 ? "md:order-2" : ""}>
                    <div className="text-5xl md:text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-white/5 to-white/[0.02] border border-white/10 mb-4">
                      <span className={`inline-block h-2 w-2 rounded-full bg-gradient-to-r ${service.color}`} />
                      <span className="text-xs text-white/70 font-medium">{service.title}</span>
                    </div>
                    <h3 className="dm text-3xl md:text-4xl font-bold mb-4 group-hover:text-white transition-colors">
                      {service.tagline}
                    </h3>
                    <p className="text-white/70 text-lg mb-6 leading-relaxed group-hover:text-white/85 transition-colors">
                      {service.description}
                    </p>
                    <div className="flex items-center gap-2 text-white/80 group-hover:text-white font-medium transition-colors">
                      Learn more about {service.title}
                      <span className="text-xl group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </div>
                  </div>

                  {/* Right side - Features */}
                  <div className={index % 2 === 1 ? "md:order-1" : ""}>
                    <div className="bg-gradient-to-br from-white/[0.03] to-white/[0.01] rounded-2xl p-6 md:p-8 border border-white/5">
                      <h4 className="font-semibold mb-4 text-white/90">What's included:</h4>
                      <ul className="space-y-3">
                        {service.features.map((feature, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                            className="flex items-start gap-3"
                          >
                            <span className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center text-xs font-bold mt-0.5`}>
                              ✓
                            </span>
                            <span className="text-white/70 group-hover:text-white/85 transition-colors">
                              {feature}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-white/70 mb-6 text-lg">
            Not sure which service you need?
          </p>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[var(--color-accent-1)] to-[var(--color-accent-2)] text-white font-medium px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:shadow-[var(--color-accent-1)]/20 transition-all duration-300"
            >
              Let's Talk
              <span className="text-xl">→</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
