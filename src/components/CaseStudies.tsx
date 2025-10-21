"use client";

import { motion } from "framer-motion";

const caseStudies = [
  {
    industry: "Restaurant Owner",
    problem: "You're manually updating your menu on 3 different platforms. Someone calls at 9pm asking if you're open tomorrow. Your Google listing still has last year's hours and old menus. Your printed menus look dated and unprofessional. Customers can't book online so they call during service—but you're slammed and miss the booking.",
    solution: "Custom website with easy menu updates. Beautifully designed print menus that match your brand. Online booking system. AI phone assistant handles after-hours calls.",
    outcomes: [
      "Menu updated in 2 minutes, synced everywhere",
      "Professional print menus designed & delivered",
      "Zero missed bookings (even at 2am)",
      "30% more reservations captured"
    ]
  },
  {
    industry: "Tradie",
    problem: "Quote requests come in via email, text, Facebook, and phone calls. You're driving between jobs scribbling notes on paper. You send quotes 3 days late because you're too busy actually working. Customers ghost because you didn't follow up fast enough.",
    solution: "All enquiries auto-routed to one place. Quote templates with automation. Follow-up reminders. SMS notifications.",
    outcomes: [
      "Quotes sent same day, automatically",
      "Zero leads forgotten or lost",
      "15 hours/week saved on admin",
      "45% higher quote-to-job conversion"
    ]
  },
  {
    industry: "Professional Services",
    problem: "You spend 2 hours every Monday morning compiling reports from 5 different tools. Clients ask the same questions you've answered 100 times. Your best knowledge is trapped in old emails and your team's heads. New hires take 6 months to get up to speed.",
    solution: "AI chatbot answers common questions 24/7. Custom dashboard shows all metrics in one place. Automated weekly reports.",
    outcomes: [
      "Zero hours on manual reporting",
      "Clients get instant answers anytime",
      "New staff productive in 3 weeks",
      "Team focuses on billable work"
    ]
  }
];

export default function CaseStudies() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-transparent via-[var(--color-brand-purple)]/5 to-transparent">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="dm text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            This Could Be You
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Real problems. Real solutions. Real results.
          </p>
        </motion.div>

        <div className="space-y-8">
          {caseStudies.map((study, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-[var(--color-surface)]/60 ring-1 ring-white/[0.06] rounded-2xl p-6 md:p-10"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-white/5 to-white/[0.02] border border-white/10 mb-6">
                <span className="text-sm font-semibold text-white/70">{study.industry}</span>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-sm font-semibold text-red-400 mb-3 uppercase tracking-wider">
                    The Problem
                  </h4>
                  <p className="text-white/80 leading-relaxed italic">
                    "{study.problem}"
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-blue-400 mb-3 uppercase tracking-wider">
                    The Solution
                  </h4>
                  <p className="text-white/80 leading-relaxed">
                    {study.solution}
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10">
                <h4 className="text-sm font-semibold text-green-400 mb-4 uppercase tracking-wider">
                  The Outcomes
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {study.outcomes.map((outcome, j) => (
                    <div key={j} className="p-4 rounded-lg bg-gradient-to-br from-green-500/10 to-green-500/5 ring-1 ring-green-500/20 text-center">
                      <p className="text-sm text-white/80 font-medium">{outcome}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-white/60 text-sm italic">
                  This could be your business in 4-6 weeks.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}