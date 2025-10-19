"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function AutomatePage() {
  return (
    <section className="px-6 md:px-12 pt-12 md:pt-16 pb-24 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="dm text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
          <span className="brand-gradient animate-shimmer">Automate</span> Your Workflow
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white/75 max-w-2xl mx-auto">
          Stop doing repetitive tasks manually. We build custom automations that save you hours every week and eliminate human error.
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
          <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">📧</div>
          <h3 className="text-xl font-semibold mb-3 group-hover:text-white transition-colors">Email & Lead Routing</h3>
          <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/85 transition-colors">
            Automatically capture leads from your website, send confirmation emails, and route them to the right team member.
          </p>
        </motion.div>

        {/* Feature Card 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="group relative bg-[var(--color-surface)]/60 ring-1 ring-white/[0.06] p-6 md:p-8 rounded-2xl hover:bg-white/[0.08] hover:ring-white/[0.12] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
        >
          <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">🔄</div>
          <h3 className="text-xl font-semibold mb-3 group-hover:text-white transition-colors">CRM Integration</h3>
          <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/85 transition-colors">
            Sync customer data across platforms automatically. No more manual data entry between systems.
          </p>
        </motion.div>

        {/* Feature Card 3 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="group relative bg-[var(--color-surface)]/60 ring-1 ring-white/[0.06] p-6 md:p-8 rounded-2xl hover:bg-white/[0.08] hover:ring-white/[0.12] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
        >
          <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">⚙️</div>
          <h3 className="text-xl font-semibold mb-3 group-hover:text-white transition-colors">Custom Workflows</h3>
          <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/85 transition-colors">
            Build tailored automation workflows for your unique business processes using tools like n8n, Zapier, and Make.
          </p>
        </motion.div>
      </div>

      {/* Benefits Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mb-16 bg-gradient-to-br from-[var(--color-accent-1)]/10 to-[var(--color-accent-2)]/10 border border-white/10 rounded-2xl p-8 md:p-12"
      >
        <h2 className="dm text-2xl md:text-3xl font-semibold mb-6 text-center">Why Automate?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-[var(--color-accent-1)] to-[var(--color-accent-2)] flex items-center justify-center text-sm font-bold">✓</div>
            <div>
              <h4 className="font-semibold mb-1">Save 10+ hours/week</h4>
              <p className="text-white/70 text-sm">Eliminate repetitive manual tasks and focus on what matters.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-[var(--color-accent-1)] to-[var(--color-accent-2)] flex items-center justify-center text-sm font-bold">✓</div>
            <div>
              <h4 className="font-semibold mb-1">Zero human error</h4>
              <p className="text-white/70 text-sm">Automations run perfectly every time, 24/7.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-[var(--color-accent-1)] to-[var(--color-accent-2)] flex items-center justify-center text-sm font-bold">✓</div>
            <div>
              <h4 className="font-semibold mb-1">Faster response times</h4>
              <p className="text-white/70 text-sm">Respond to leads instantly, even outside business hours.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-[var(--color-accent-1)] to-[var(--color-accent-2)] flex items-center justify-center text-sm font-bold">✓</div>
            <div>
              <h4 className="font-semibold mb-1">Scale effortlessly</h4>
              <p className="text-white/70 text-sm">Handle 10x more customers without hiring more staff.</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-center"
      >
        <div className="inline-block mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--color-accent-1)]/10 to-[var(--color-accent-2)]/10 border border-white/10">
            <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-[var(--color-accent-1)] to-[var(--color-accent-2)]" />
            <span className="text-sm text-white/70">Custom Solutions</span>
          </div>
        </div>
        <h2 className="dm text-3xl md:text-4xl font-semibold text-balance mb-4">
          Ready to save <span className="brand-gradient animate-shimmer">10+ hours</span> per week?
        </h2>
        <p className="text-white/70 max-w-xl mx-auto mb-8 text-lg">
          Let's discuss what tasks you're doing manually and how we can automate them.
        </p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[var(--color-accent-1)] to-[var(--color-accent-2)] text-white font-medium px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:shadow-[var(--color-accent-1)]/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-[var(--color-bg)]"
          >
            Start Automating
            <span className="text-xl">→</span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
