"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const processSteps = [
  {
    week: "Week 1",
    title: "Audit & Discovery",
    description: "We map out your current workflows, identify bottlenecks, and document every manual task that's eating your time. You show us your day-to-day processes.",
    deliverable: "Workflow map, automation opportunities report"
  },
  {
    week: "Week 1-2",
    title: "Design Automations",
    description: "We design custom workflows that connect your tools together. You review the logic and approve the approach before we build.",
    deliverable: "Workflow diagrams, integration plan"
  },
  {
    week: "Week 2-3",
    title: "Build & Connect",
    description: "We build your automations using n8n, Zapier, or custom code. We connect your CRM, email, forms, and other tools. You get progress updates.",
    deliverable: "Working automations in test environment"
  },
  {
    week: "Week 3-4",
    title: "Test & Refine",
    description: "We test with real data, handle edge cases, and make sure nothing breaks. You verify the automations work as expected.",
    deliverable: "QA report, test results"
  },
  {
    week: "Week 4",
    title: "Launch & Monitor",
    description: "We activate your automations, set up monitoring and alerts, train your team, and provide documentation for troubleshooting.",
    deliverable: "Live automations, training session, docs"
  }
];

const commonAutomations = [
  {
    name: "Lead Capture & Routing",
    description: "New lead fills out form → Automatically added to CRM → Email sent to lead → Notification to sales team → Task created for follow-up",
    timeSaved: "5-8 hours/week",
    tools: ["Website forms", "CRM", "Email", "Slack/Teams"]
  },
  {
    name: "Customer Onboarding",
    description: "New customer signs up → Welcome email sent → Account created → Onboarding tasks assigned → Training resources delivered → Follow-up scheduled",
    timeSaved: "3-5 hours/week",
    tools: ["CRM", "Email", "Project management", "Calendar"]
  },
  {
    name: "Invoice & Payment Follow-up",
    description: "Invoice sent → Automatic reminders at 7, 14, 30 days → Payment received → Receipt sent → Books updated → Team notified",
    timeSaved: "4-6 hours/week",
    tools: ["Accounting software", "Email", "Payment gateway"]
  },
  {
    name: "Social Media Management",
    description: "Create content once → Schedule across platforms → Auto-publish at optimal times → Track engagement → Compile weekly report",
    timeSaved: "6-10 hours/week",
    tools: ["Social platforms", "Scheduling tools", "Analytics"]
  },
  {
    name: "Data Sync & Reporting",
    description: "Sales data → Auto-sync between systems → Update dashboards → Generate weekly/monthly reports → Email to stakeholders",
    timeSaved: "4-7 hours/week",
    tools: ["CRM", "Spreadsheets", "Analytics", "Email"]
  },
  {
    name: "Customer Support Triage",
    description: "Support ticket created → Auto-categorise → Route to right team → Send acknowledgment → Escalate if urgent → Track resolution time",
    timeSaved: "8-12 hours/week",
    tools: ["Help desk", "Email", "CRM", "Notifications"]
  }
];

const examples = [
  {
    industry: "Dental Clinic",
    before: "Reception manually enters patient details into system, sends confirmation emails, calls to remind about appointments. Misses appointments common due to forgotten reminders.",
    after: "Booking form auto-creates patient record, sends instant confirmation, schedules reminder emails/SMS 24hrs before, updates calendar automatically.",
    results: ["12 hours/week saved", "40% reduction in no-shows", "100% of bookings get confirmations", "Staff focus on patient care, not admin"]
  },
  {
    industry: "Real Estate Agency",
    before: "Agents manually add new enquiries to CRM, send property info emails, follow up with calls, update spreadsheets, remind about viewings.",
    after: "Enquiry form auto-adds to CRM with lead source, sends property pack instantly, schedules follow-up tasks, sends viewing reminders, tracks all interactions.",
    results: ["15 hours/week saved", "Response time down to 2 minutes", "Zero leads fall through cracks", "Agents spend time selling, not on admin"]
  },
  {
    industry: "E-commerce Store",
    before: "Manually process orders, send tracking emails, update inventory spreadsheet, follow up for reviews, reconcile payments across platforms.",
    after: "Order received → Payment processed → Inventory updated → Fulfilment triggered → Tracking sent → Review request scheduled → Books updated automatically.",
    results: ["20+ hours/week saved", "Zero inventory mistakes", "5x more reviews collected", "Scaled 3x without hiring"]
  }
];

const integrationPartners = [
  { name: "n8n", type: "Workflow Automation" },
  { name: "Zapier", type: "App Integration" },
  { name: "Make", type: "Automation Platform" },
  { name: "Airtable", type: "Database" },
  { name: "Google Workspace", type: "Email & Docs" },
  { name: "Salesforce", type: "CRM" },
  { name: "HubSpot", type: "CRM & Marketing" },
  { name: "Monday.com", type: "Project Management" },
  { name: "Slack", type: "Team Communication" },
  { name: "Twilio", type: "SMS & Voice" },
  { name: "Stripe", type: "Payments" },
  { name: "Xero", type: "Accounting" }
];

const goodFit = [
  "You're doing repetitive tasks daily/weekly",
  "You have 2+ tools that don't talk to each other",
  "You're missing leads or tasks falling through cracks",
  "Your team spends time on admin, not revenue work",
  "You're ready to invest in efficiency"
];

const notYetFit = [
  "You don't have established processes yet",
  "You're changing tools constantly",
  "You want automation tomorrow",
  "You're not willing to document your workflows",
  "You expect zero maintenance forever"
];

const faqs = [
  {
    q: "What if my tools aren't supported?",
    a: "Most popular business tools have integration options. If your tool has an API (application programming interface), we can likely connect it. For tools without APIs, we can often use workarounds like email parsing, webhooks, or CSV imports. We'll audit your tech stack during discovery and let you know what's possible."
  },
  {
    q: "Will automations break if I update my software?",
    a: "Sometimes, yes. When tools update their APIs, automations can need adjustment. This is why we offer monitoring and maintenance plans. We set up alerts to catch issues immediately and fix them before they impact your business. Most automation platforms also have version control and fallback options."
  },
  {
    q: "Can I make changes to automations myself?",
    a: "Depends on the complexity. Simple changes (like updating email text or adding a recipient) can be done through no-code interfaces we set up. Complex logic changes require technical knowledge. We provide documentation and training, plus optional retainer support for ongoing adjustments."
  },
  {
    q: "How long do automations take to build?",
    a: "Simple automations (3-5 steps) take 1-2 weeks. Complex workflows with multiple tools and conditional logic take 3-4 weeks. The timeline depends on number of integrations, data complexity, and how quickly you can provide access and feedback."
  },
  {
    q: "What happens if an automation fails?",
    a: "We build in error handling and notifications. If something breaks, you (and we) get alerted immediately. Automations can retry failed actions, log errors for debugging, and have fallback options. With monitoring plans, we fix issues proactively before they impact your business."
  },
  {
    q: "Do I need to change my current tools?",
    a: "Usually not. We work with your existing tech stack. Sometimes we'll recommend switching if a tool is causing bottlenecks or doesn't integrate well, but we never force tool changes. The goal is to make your current systems work together better."
  },
  {
    q: "Can you automate [specific task]?",
    a: "Probably! If it's a repetitive task that follows clear rules (if X happens, do Y), it can likely be automated. Things that are harder to automate: tasks requiring human judgment, handling unexpected situations, or creative work. Book a call and describe your process—we'll tell you honestly what's possible."
  }
];

export default function AutomatePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="pb-24">
      {/* Hero */}
      <section className="px-6 md:px-12 pt-12 md:pt-16 pb-16 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="dm text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance mb-6">
            <span className="brand-gradient animate-shimmer">Automate</span> the Boring Stuff
          </h1>
          <p className="text-lg md:text-xl text-white/75 max-w-2xl mx-auto">
            Stop wasting hours on repetitive tasks. We build custom automations that run 24/7, never make mistakes, and let your team focus on what actually matters.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <div className="text-4xl mb-3">⏰</div>
            <div className="text-2xl font-bold mb-2">10-20 hrs/week</div>
            <div className="text-white/60 text-sm">Typical time saved</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <div className="text-4xl mb-3">🎯</div>
            <div className="text-2xl font-bold mb-2">100% Accuracy</div>
            <div className="text-white/60 text-sm">Zero human errors</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <div className="text-4xl mb-3">🤖</div>
            <div className="text-2xl font-bold mb-2">24/7 Operation</div>
            <div className="text-white/60 text-sm">Even while you sleep</div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 md:px-12 py-16 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="dm text-3xl md:text-4xl font-bold mb-4">How We Build Your Automations</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            From audit to launch in 3-4 weeks
          </p>
        </motion.div>

        <div className="space-y-8">
          {processSteps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--color-accent-1)]/20 to-[var(--color-accent-2)]/20 border border-white/10 flex items-center justify-center">
                    <span className="font-bold text-lg">{i + 1}</span>
                  </div>
                </div>
                <div className="flex-1 bg-[var(--color-surface)]/60 ring-1 ring-white/[0.06] rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-white/50 uppercase tracking-wider">{step.week}</span>
                    <span className="h-px flex-1 bg-white/10"></span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-white/70 mb-3 leading-relaxed">{step.description}</p>
                  <div className="inline-flex items-center gap-2 text-sm text-white/60">
                    <span className="text-green-400">✓</span>
                    <span>Deliverable: {step.deliverable}</span>
                  </div>
                </div>
              </div>
              {i < processSteps.length - 1 && (
                <div className="ml-8 h-8 w-px bg-white/10"></div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Common Automations */}
      <section className="px-6 md:px-12 py-16 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="dm text-3xl md:text-4xl font-bold mb-4">What We Automate</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Here are the most common automations we build and the time they save
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {commonAutomations.map((auto, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[var(--color-surface)]/60 ring-1 ring-white/[0.06] rounded-xl p-6 hover:ring-white/[0.12] transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold flex-1">{auto.name}</h3>
                <span className="flex-shrink-0 px-3 py-1 rounded-full bg-gradient-to-r from-green-500/20 to-green-500/10 border border-green-500/30 text-green-400 text-xs font-semibold">
                  {auto.timeSaved}
                </span>
              </div>
              <p className="text-white/70 text-sm mb-4 leading-relaxed">{auto.description}</p>
              <div className="flex flex-wrap gap-2">
                {auto.tools.map((tool, j) => (
                  <span key={j} className="px-2 py-1 rounded bg-white/5 text-xs text-white/60">
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12 p-6 bg-gradient-to-br from-[var(--color-accent-1)]/10 to-[var(--color-accent-2)]/10 border border-white/10 rounded-xl"
        >
          <p className="text-white/80 mb-2">
            <strong>Average client saves 10-20 hours per week</strong> after implementing key automations
          </p>
          <p className="text-sm text-white/60">
            That's 520-1,040 hours per year. What would you do with that time?
          </p>
        </motion.div>
      </section>

      {/* Real Examples */}
      <section className="px-6 md:px-12 py-16 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="dm text-3xl md:text-4xl font-bold mb-4">Real-World Impact</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            See how automation transforms businesses like yours
          </p>
        </motion.div>

        <div className="space-y-8">
          {examples.map((ex, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-gradient-to-br from-[var(--color-surface)]/60 to-[var(--color-surface)]/20 ring-1 ring-white/[0.06] rounded-xl p-6 md:p-8"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-white/5 to-white/[0.02] border border-white/10 mb-4">
                <span className="text-xs font-semibold text-white/70">{ex.industry}</span>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-sm font-semibold text-red-400 mb-2">❌ Before Automation</h4>
                  <p className="text-sm text-white/70 leading-relaxed">{ex.before}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-green-400 mb-2">✓ After Automation</h4>
                  <p className="text-sm text-white/70 leading-relaxed">{ex.after}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <h4 className="text-sm font-semibold text-blue-400 mb-3">📊 Measurable Results</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {ex.results.map((result, j) => (
                    <div key={j} className="text-center p-3 rounded-lg bg-white/5">
                      <div className="text-xs text-white/60 mb-1">→</div>
                      <div className="text-sm text-white/80 font-medium">{result}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Integration Partners */}
      <section className="px-6 md:px-12 py-16 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="dm text-3xl md:text-4xl font-bold mb-4">We Connect Your Tools</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            We work with the platforms you already use (and thousands more)
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {integrationPartners.map((partner, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-[var(--color-surface)]/60 ring-1 ring-white/[0.06] rounded-xl p-4 text-center hover:ring-white/[0.12] transition-all"
            >
              <div className="font-semibold mb-1 text-sm">{partner.name}</div>
              <div className="text-xs text-white/60">{partner.type}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-8 text-white/60"
        >
          <p className="text-sm">
            Don't see your tool? We integrate with 1,000+ apps. <Link href="/contact" className="text-white/90 hover:text-white underline">Ask us</Link>
          </p>
        </motion.div>
      </section>

      {/* Who This Is For */}
      <section className="px-6 md:px-12 py-16 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="dm text-3xl md:text-4xl font-bold mb-4">Is Automation Right For You?</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Honest assessment of who benefits most
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-green-500/10 to-green-500/5 ring-1 ring-green-500/20 rounded-xl p-6"
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span className="text-2xl">✓</span>
              Perfect For You If
            </h3>
            <ul className="space-y-3">
              {goodFit.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/80">
                  <span className="text-green-400 flex-shrink-0 mt-1">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-orange-500/10 to-orange-500/5 ring-1 ring-orange-500/20 rounded-xl p-6"
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span className="text-2xl">⏳</span>
              Hold Off If
            </h3>
            <ul className="space-y-3">
              {notYetFit.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/80">
                  <span className="text-orange-400 flex-shrink-0 mt-1">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 md:px-12 py-16 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="dm text-3xl md:text-4xl font-bold mb-4">Common Questions</h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-[var(--color-surface)]/60 ring-1 ring-white/[0.06] rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full px-6 py-4 flex items-center justify-between text-left group"
              >
                <span className="font-semibold pr-8">{faq.q}</span>
                <span className={`text-2xl text-white/60 transition-transform ${openFaq === i ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
              <div className={`overflow-hidden transition-all ${openFaq === i ? 'max-h-96' : 'max-h-0'}`}>
                <div className="px-6 pb-4 text-white/70 leading-relaxed">{faq.a}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 py-16 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[var(--color-accent-1)]/10 to-[var(--color-accent-2)]/10 border border-white/10 rounded-2xl p-8 md:p-12"
        >
          <h2 className="dm text-3xl md:text-4xl font-bold mb-4">
            Ready to Reclaim Your Time?
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-xl mx-auto">
            Let's audit your workflows and show you exactly how much time (and money) you can save with automation.
          </p>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[var(--color-accent-1)] to-[var(--color-accent-2)] text-white font-medium px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              Get Your Free Automation Audit
              <span className="text-xl">→</span>
            </Link>
          </motion.div>
          <p className="mt-6 text-sm text-white/50">
            Free 30-min consultation • We'll map your workflows • No obligation
          </p>
        </motion.div>
      </section>
    </div>
  );
}