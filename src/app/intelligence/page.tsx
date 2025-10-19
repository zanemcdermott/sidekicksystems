"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function IntelligencePage() {
  return (
    <section className="px-6 md:px-12 pt-12 md:pt-16 pb-24 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="dm text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
          AI-Powered <span className="brand-gradient animate-shimmer">Intelligence</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white/75 max-w-2xl mx-auto">
          Make faster, smarter decisions with AI chat, custom dashboards, and instant insights from your business data.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16">
        {/* Feature Card 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="group relative bg-[var(--color-surface)]/60 ring-1 ring-white/[0.06] p-6 md:p-8 rounded-2xl hover:bg-white/[0.08] hover:ring-white/[0.12] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
        >
          <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">🤖</div>
          <h3 className="text-xl font-semibold mb-3 group-hover:text-white transition-colors">AI Chat Support</h3>
          <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/85 transition-colors">
            Custom AI chatbots trained on your business knowledge to answer customer questions instantly, 24/7.
          </p>
        </motion.div>

        {/* Feature Card 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="group relative bg-[var(--color-surface)]/60 ring-1 ring-white/[0.06] p-6 md:p-8 rounded-2xl hover:bg-white/[0.08] hover:ring-white/[0.12] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
        >
          <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">📊</div>
          <h3 className="text-xl font-semibold mb-3 group-hover:text-white transition-colors">Custom Dashboards</h3>
          <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/85 transition-colors">
            Real-time dashboards that pull data from all your tools into one beautiful, easy-to-understand view.
          </p>
        </motion.div>

        {/* Feature Card 3 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="group relative bg-[var(--color-surface)]/60 ring-1 ring-white/[0.06] p-6 md:p-8 rounded-2xl hover:bg-white/[0.08] hover:ring-white/[0.12] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
        >
          <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">✨</div>
          <h3 className="text-xl font-semibold mb-3 group-hover:text-white transition-colors">Data Insights</h3>
          <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/85 transition-colors">
            AI-powered summaries and recommendations that turn raw data into clear, actionable business insights.
          </p>
        </motion.div>
      </div>

      {/* Use Cases Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mb-16"
      >
        <h2 className="dm text-2xl md:text-3xl font-semibold mb-8 text-center">What You Can Do</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[var(--color-surface)]/40 ring-1 ring-white/[0.06] p-6 rounded-xl">
            <h4 className="font-semibold mb-3 text-lg">💬 Answer customer questions instantly</h4>
            <p className="text-white/70 text-sm">
              Deploy an AI chatbot trained on your FAQs, product docs, and company knowledge. Never miss a lead because you were offline.
            </p>
          </div>
          <div className="bg-[var(--color-surface)]/40 ring-1 ring-white/[0.06] p-6 rounded-xl">
            <h4 className="font-semibold mb-3 text-lg">📈 Track metrics in real-time</h4>
            <p className="text-white/70 text-sm">
              See your sales, website traffic, and customer engagement in one dashboard. Make data-driven decisions faster.
            </p>
          </div>
          <div className="bg-[var(--color-surface)]/40 ring-1 ring-white/[0.06] p-6 rounded-xl">
            <h4 className="font-semibold mb-3 text-lg">🎯 Get AI-powered recommendations</h4>
            <p className="text-white/70 text-sm">
              Receive intelligent suggestions on inventory, marketing campaigns, and customer outreach based on your data patterns.
            </p>
          </div>
          <div className="bg-[var(--color-surface)]/40 ring-1 ring-white/[0.06] p-6 rounded-xl">
            <h4 className="font-semibold mb-3 text-lg">📝 Auto-generate reports</h4>
            <p className="text-white/70 text-sm">
              Let AI create weekly summaries, performance reports, and insights automatically. Save hours on manual reporting.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Tech Stack Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mb-16 text-center"
      >
        <p className="text-sm text-white/60 mb-4">Powered by industry-leading AI</p>
        <div className="flex flex-wrap justify-center gap-4">
          <span className="px-4 py-2 rounded-full bg-white/5 ring-1 ring-white/10 text-sm">OpenAI GPT-4</span>
          <span className="px-4 py-2 rounded-full bg-white/5 ring-1 ring-white/10 text-sm">Claude</span>
          <span className="px-4 py-2 rounded-full bg-white/5 ring-1 ring-white/10 text-sm">Custom Models</span>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="text-center"
      >
        <div className="inline-block mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--color-accent-1)]/10 to-[var(--color-accent-2)]/10 border border-white/10">
            <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-[var(--color-accent-1)] to-[var(--color-accent-2)]" />
            <span className="text-sm text-white/70">Tailored AI Solutions</span>
          </div>
        </div>
        <h2 className="dm text-3xl md:text-4xl font-semibold text-balance mb-4">
          Ready to add <span className="brand-gradient animate-shimmer">AI intelligence</span> to your business?
        </h2>
        <p className="text-white/70 max-w-xl mx-auto mb-8 text-lg">
          Let's explore how AI can help you serve customers better and make smarter decisions.
        </p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[var(--color-accent-1)] to-[var(--color-accent-2)] text-white font-medium px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:shadow-[var(--color-accent-1)]/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-[var(--color-bg)]"
          >
            See AI in Action
            <span className="text-xl">→</span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
