"use client";

import { motion } from "framer-motion";

const steps = [
  {
    step: "1",
    title: "Discovery Call",
    description: "We talk about your business, your challenges, and your goals. No sales pitch—just honest conversation about what you need."
  },
  {
    step: "2",
    title: "Custom Proposal",
    description: "We create a detailed plan with timeline, deliverables, and pricing. No surprises, no hidden fees."
  },
  {
    step: "3",
    title: "We Build, You Review",
    description: "We work in sprints with regular check-ins. You see progress, provide feedback, and we adjust as needed."
  },
  {
    step: "4",
    title: "Launch & Support",
    description: "We launch your solution, train your team, and stick around to make sure everything works perfectly."
  }
];

export default function HowWeWork() {
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
            How We Work
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Simple process. Clear communication. No surprises.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-[var(--color-accent-1)]/20 to-[var(--color-accent-2)]/20 border border-white/10 flex items-center justify-center">
                <span className="text-2xl font-bold">{step.step}</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-sm text-white/70 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}