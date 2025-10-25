"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    q: "How much does it cost?",
    a: "Websites start from $750. Automation projects typically $500-2,500. AI solutions from $1,000. Every project is custom-quoted based on your specific needs. We'll give you a detailed proposal after our discovery call—no surprises."
  },
  {
    q: "How long does it really take?",
    a: "Websites: 4-6 weeks. Automation: 3-4 weeks. AI solutions: 3-4 weeks. We work in sprints with regular updates. Rush projects are possible for an additional fee, but we'd rather do it right than do it fast."
  },
  {
    q: "Do I need all three services?",
    a: "Nope. Most clients start with Launch (website), then add Automate and Intelligence as they grow. You can pick what makes sense for your business right now."
  },
  {
    q: "What if I already have a website?",
    a: "We can work with it! We audit, redesign, optimise, or build features on top of existing sites. If it's beyond saving, we'll tell you honestly and help you start fresh."
  },
  {
    q: "Do you work with businesses outside Australia?",
    a: "Yes! We work with clients globally. Everything is delivered remotely, and we're experienced working across time zones."
  },
  {
    q: "What happens after launch?",
    a: "You get 30 days of free bug fixes and support. After that, we offer ongoing partnership plans for updates, monitoring, and optimisation. Or you can manage it yourself—you own everything."
  }
];

export default function FAQ() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="dm text-3xl md:text-4xl font-bold mb-4">
            Common Questions
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors group"
          >
            <span className="text-sm">Have more questions? Browse our complete</span>
            <span className="font-semibold brand-gradient">FAQ & Resources</span>
            <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function FAQItem({ faq, index }: { faq: { q: string; a: string }; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="bg-[var(--color-surface)]/60 ring-1 ring-white/[0.06] rounded-xl overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-6 py-4 flex items-center justify-between text-left group"
      >
        <span className="font-semibold pr-8">{faq.q}</span>
        <span className={`text-2xl text-white/60 transition-transform ${open ? 'rotate-45' : ''}`}>
          +
        </span>
      </button>
      <div className={`overflow-hidden transition-all ${open ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-6 pb-4 text-white/70 leading-relaxed">{faq.a}</div>
      </div>
    </motion.div>
  );
}