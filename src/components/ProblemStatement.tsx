"use client";

import { motion } from "framer-motion";

const problems = [
  "Your website looks like it's from 2015",
  "You're answering the same questions every single day",
  "Manual tasks eating 10+ hours of your week",
  "Making decisions based on gut feel, not data",
  "Leads slipping through the cracks",
  "No idea what's actually working"
];

export default function ProblemStatement() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-transparent via-red-500/5 to-transparent">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="dm text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Sound Familiar?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-4 rounded-xl bg-red-500/10 ring-1 ring-red-500/20 text-center"
            >
              <p className="text-sm text-white/80">{problem}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-xl md:text-2xl text-white/90 font-semibold mb-4">
            We fix all of this.
          </p>
          <p className="text-white/70 max-w-2xl mx-auto">
            Launch modern websites, automate repetitive work, and add AI intelligence. 
            In 4-6 weeks, your business runs smoother and you get your time back.
          </p>
        </motion.div>
      </div>
    </section>
  );
}