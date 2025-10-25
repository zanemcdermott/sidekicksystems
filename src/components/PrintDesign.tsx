"use client";

import { motion } from "framer-motion";

const printServices = [
  {
    icon: "📋",
    name: "Restaurant Menus",
    description: "Beautiful, professional menus that match your website and brand perfectly",
    examples: ["Dine-in menus", "Takeaway menus", "Wine lists", "Seasonal specials"]
  },
  {
    icon: "💼",
    name: "Business Cards",
    description: "Stand out with custom-designed cards that leave a lasting impression",
    examples: ["Standard cards", "Premium finishes", "QR code integration", "Multiple designs"]
  },
  {
    icon: "📄",
    name: "Flyers & Posters",
    description: "Promotional materials that get attention and drive action",
    examples: ["Event flyers", "Promotional posters", "Product sheets", "Sale announcements"]
  },
  {
    icon: "📦",
    name: "Branded Materials",
    description: "Complete brand consistency across all your physical materials",
    examples: ["Letterheads", "Invoices", "Packaging", "Signage"]
  }
];

const benefits = [
  {
    title: "Digital + Print Harmony",
    description: "Your website colours, fonts, and style carried through to physical materials"
  },
  {
    title: "We Handle Everything",
    description: "Design, print coordination, and delivery—you don't lift a finger"
  },
  {
    title: "Print-Ready Files",
    description: "Professional files ready for any printer, with bleeds and crop marks"
  },
  {
    title: "Fast Turnaround",
    description: "Designed alongside your website, or as a standalone project in 1-2 weeks"
  }
];

export default function PrintDesign() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-transparent via-[var(--color-brand-purple)]/5 to-transparent">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--color-accent-1)]/20 to-[var(--color-accent-2)]/20 border border-[var(--color-accent-1)]/30 mb-6">
            <span className="text-sm font-semibold text-white/80">✨ Bonus Service</span>
          </div>
          <h2 className="dm text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Print Design Too
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Need menus, business cards, or flyers? We design beautiful print materials that match your digital brand perfectly. Most agencies don't offer this—we do.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {printServices.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-[var(--color-surface)]/60 ring-1 ring-white/[0.06] rounded-xl p-6 hover:ring-white/[0.12] transition-all"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
              <p className="text-sm text-white/70 mb-4 leading-relaxed">{service.description}</p>
              <div className="space-y-1">
                {service.examples.map((example, j) => (
                  <div key={j} className="flex items-center gap-2 text-xs text-white/60">
                    <span className="text-green-400">→</span>
                    <span>{example}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-[var(--color-accent-1)]/10 to-[var(--color-accent-2)]/10 border border-white/10"
            >
              <h4 className="font-semibold mb-2">{benefit.title}</h4>
              <p className="text-sm text-white/70">{benefit.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Example Use Case */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[var(--color-surface)]/60 to-[var(--color-surface)]/20 ring-1 ring-white/[0.06] rounded-xl p-8 md:p-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-white/5 to-white/[0.02] border border-white/10 mb-4">
            <span className="text-xs font-semibold text-white/70">Real Example</span>
          </div>
          
          <h3 className="text-2xl font-bold mb-4">Restaurant: Website + Menus</h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="text-sm font-semibold text-white/60 mb-2 uppercase tracking-wider">What We Built</h4>
              <ul className="space-y-2 text-white/80">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Custom website with online ordering</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Dine-in menu (A4, full colour, laminated)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Takeaway menu with QR code to website</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Business cards for staff</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white/60 mb-2 uppercase tracking-wider">The Impact</h4>
              <ul className="space-y-2 text-white/80">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">→</span>
                  <span>Brand consistency everywhere</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">→</span>
                  <span>Update menu in 2 min (website + print)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">→</span>
                  <span>Professional look impressed customers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">→</span>
                  <span>QR code drove 40% more online orders</span>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-center text-white/60 text-sm italic">
            "Most web designers can't help with menus. You guys handled everything—one less thing to stress about." - Restaurant Owner
          </p>
        </motion.div>

        {/* Pricing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-block p-6 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl">
            <h4 className="font-semibold mb-2">Print Design Pricing</h4>
            <p className="text-white/70 text-sm mb-4">
              Menu design from <span className="text-white font-semibold">$150</span> • 
              Business cards from <span className="text-white font-semibold">$100</span> • 
              Flyers from <span className="text-white font-semibold">$100</span>
            </p>
            <p className="text-xs text-white/50">
              Print coordination included. Printing costs separate (we get you wholesale pricing)
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}