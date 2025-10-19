"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer: "Most custom websites take 2-4 weeks from start to launch. Timeline depends on complexity, content readiness, and feedback cycles. We'll give you a detailed timeline during our first consultation."
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer: "Absolutely! We offer ongoing maintenance, updates, and support packages. Whether you need monthly retainers or ad-hoc support, we're here to help your digital presence grow."
  },
  {
    question: "Can you help with existing websites?",
    answer: "Yes! We can audit, redesign, optimize, or add new features to existing sites. We work with all major platforms and custom-built solutions."
  },
  {
    question: "What's the difference between your services?",
    answer: "Launch builds your website, Automate connects your tools and eliminates manual work, and Intelligence adds AI for smarter decisions. Most clients benefit from combining all three for a complete system."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto max-w-4xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="dm text-4xl md:text-5xl tracking-tight mb-4">
            Common Questions
          </h2>
          <p className="text-lg text-white/75">
            Everything you need to know about working with us
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-[var(--color-surface)]/60 ring-1 ring-white/[0.06] rounded-xl overflow-hidden hover:ring-white/[0.12] transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left group"
              >
                <span className="font-semibold text-lg pr-8 group-hover:text-white transition-colors">
                  {faq.question}
                </span>
                <span className={`flex-shrink-0 text-2xl text-white/60 group-hover:text-white transition-all duration-300 ${openIndex === index ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 text-white/70 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-white/70 mb-4">
            Still have questions?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white font-medium transition-colors"
          >
            Get in touch
            <span className="text-xl">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
