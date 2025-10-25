"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { ServiceSchema, BreadcrumbSchema } from "@/components/StructuredData";

const processSteps = [
  {
    week: "Week 1",
    title: "Discovery & Strategy",
    description: "We dive deep into your business goals, target audience, and competitors. You provide content, branding assets, and examples of sites you love.",
    deliverable: "Site map, wireframes, project timeline"
  },
  {
    week: "Week 2",
    title: "Design & Mockups",
    description: "We create high-fidelity designs for desktop and mobile. You review and provide feedback. We iterate until it's perfect.",
    deliverable: "Design files, style guide, asset library"
  },
  {
    week: "Week 3-4",
    title: "Development",
    description: "We build your site with clean, custom code. Fast loading, SEO-optimised, mobile-responsive. You get weekly progress updates.",
    deliverable: "Staging site for your review"
  },
  {
    week: "Week 5",
    title: "Content & Testing",
    description: "We add your final content, set up analytics, test on all devices and browsers. You do final review and request any tweaks.",
    deliverable: "QA report, performance scores"
  },
  {
    week: "Week 6",
    title: "Launch & Training",
    description: "We launch your site, set up hosting, SSL, and monitoring. We train you on how to make updates and provide documentation.",
    deliverable: "Live website, training session, support docs"
  }
];

const includedFeatures = [
  {
    category: "Design & Development",
    items: [
      "Custom design tailored to your brand",
      "Mobile-first responsive design",
      "5-10 pages (customisable)",
      "Custom animations and interactions",
      "Professional photography integration",
      "Brand-consistent colour schemes and typography"
    ]
  },
  {
    category: "Performance & SEO",
    items: [
      "90+ Google PageSpeed score",
      "Core Web Vitals optimisation",
      "On-page SEO setup",
      "Meta tags and Open Graph tags",
      "XML sitemap generation",
      "Search console setup"
    ]
  },
  {
    category: "Functionality",
    items: [
      "Contact forms with spam protection",
      "Google Analytics integration",
      "Social media integration",
      "Blog/news section (optional)",
      "Image optimisation and lazy loading",
      "Newsletter signup integration"
    ]
  },
  {
    category: "Print & Branding (Optional)",
    items: [
      "Menu design for restaurants",
      "Business card design",
      "Flyer and promotional material design",
      "Print coordination and delivery",
      "Consistent digital + physical branding",
      "Professional, print-ready files"
    ]
  },
  {
    category: "Technical & Support",
    items: [
      "SSL certificate (HTTPS)",
      "Fast, reliable hosting setup",
      "Domain configuration",
      "Browser compatibility testing",
      "Mobile device testing",
      "2 rounds of revisions"
    ]
  }
];

const examples = [
  {
    industry: "Restaurant",
    problem: "Generic website with slow loading, no online ordering, hard to update menu. Printed menus look dated and don't match the vibe. Customers can't find current hours or pricing online.",
    solution: "Custom site with integrated ordering system, easily updatable menu CMS, beautiful food photography showcase. Plus professionally designed print menus that match the website perfectly.",
    results: ["40% increase in online orders", "Menu updates in 2 minutes vs 2 days", "50% faster page load", "Brand consistency across digital and print"]
  },
  {
    industry: "Professional Services",
    problem: "Outdated site from 2015, not mobile-friendly, hard to find on Google, no lead capture",
    solution: "Modern professional site, mobile-optimised, SEO-focused content, strategic CTAs and contact forms",
    results: ["3x increase in contact form submissions", "Ranking on page 1 for 5 key terms", "65% of traffic now mobile"]
  },
  {
    industry: "E-commerce",
    problem: "Shopify theme looked like everyone else, slow product pages, poor conversion rate",
    solution: "Custom-designed Shopify store, optimised product pages, streamlined checkout, brand storytelling",
    results: ["2.3x conversion rate improvement", "30% faster checkout flow", "Brand recognition increased"]
  }
];

const goodFit = [
  "You're doing $50k+ annual revenue",
  "Your current site is hurting your business",
  "You want to stand out from competitors",
  "You're ready to invest in quality",
  "You have (or can create) content and imagery"
];

const notYetFit = [
  "You're pre-revenue or just validating an idea",
  "You need something live tomorrow",
  "You want the cheapest option possible",
  "You're not willing to be involved in the process",
  "You expect unlimited free changes forever"
];

const techStack = [
  { name: "Next.js", why: "Lightning-fast React framework" },
  { name: "Tailwind CSS", why: "Beautiful, maintainable styling" },
  { name: "Vercel", why: "Best-in-class hosting & performance" },
  { name: "TypeScript", why: "Fewer bugs, better code" },
  { name: "Sanity/Contentful", why: "Easy content management" }
];

const faqs = [
  {
    q: "How long does it really take?",
    a: "Most projects take 4-6 weeks from kickoff to launch. Timeline depends on your content readiness and feedback speed. Rush projects (2-3 weeks) are possible for an additional fee."
  },
  {
    q: "What if I need changes after launch?",
    a: "You get 2 rounds of revisions during development. After launch, minor tweaks (typos, small text changes) are included for 30 days. Larger changes can be quoted as additional work, or covered under a monthly partnership plan."
  },
  {
    q: "Can I update the site myself?",
    a: "Yes! We can build you a simple CMS (Content Management System) so you can update text, images, and blog posts without touching code. We provide training and documentation."
  },
  {
    q: "Do you provide hosting?",
    a: "We set up and configure hosting for you (included in project cost). Hosting fees are separate and typically run $20-50/month depending on your traffic."
  },
  {
    q: "What if my site breaks?",
    a: "We provide 30 days of free bug fixes after launch. Beyond that, we offer monthly partnership plans that include monitoring, updates, and priority support."
  },
  {
    q: "Can you work with my existing domain?",
    a: "Absolutely. We can work with any domain provider. If you don't have a domain yet, we'll help you choose and register one."
  }
];

export default function LaunchPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* SEO Structured Data */}
      <ServiceSchema service="launch" />
      <BreadcrumbSchema 
        items={[
          { name: "Home", url: "https://sidekicksystems.com" },
          { name: "Launch", url: "https://sidekicksystems.com/launch" }
        ]}
      />

      <section className="px-6 md:px-12 pt-12 md:pt-16 pb-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="dm text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance mb-6">
            Custom <span className="brand-gradient animate-shimmer">Website Design</span> That Converts
          </h1>
          <p className="text-lg md:text-xl text-white/75 max-w-2xl mx-auto mb-4">
            We don't use templates. Every site is built from scratch, optimised for speed, mobile-friendly, and designed to turn visitors into customers.
          </p>
          <p className="text-base text-white/60 max-w-2xl mx-auto">
            Bonus: Need menus, business cards, or flyers? We handle print design too—keeping your digital and physical branding perfectly aligned.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <div className="text-4xl mb-3">⚡</div>
            <div className="text-2xl font-bold mb-2">4-6 Weeks</div>
            <div className="text-white/60 text-sm">From kickoff to launch</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <div className="text-4xl mb-3">🚀</div>
            <div className="text-2xl font-bold mb-2">90+ Score</div>
            <div className="text-white/60 text-sm">Google PageSpeed optimised</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <div className="text-4xl mb-3">📱</div>
            <div className="text-2xl font-bold mb-2">100% Mobile</div>
            <div className="text-white/60 text-sm">Perfect on every device</div>
          </motion.div>
        </div>

        {/* How It Works */}
        <section className="py-16 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="dm text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              A clear, collaborative process from start to launch
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

        {/* What's Included */}
        <section className="py-16 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="dm text-3xl md:text-4xl font-bold mb-4">What's Included</h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Everything you need for a professional web presence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {includedFeatures.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[var(--color-surface)]/60 ring-1 ring-white/[0.06] rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-[var(--color-accent-1)] to-[var(--color-accent-2)]"></span>
                  {section.category}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-white/70">
                      <span className="text-green-400 flex-shrink-0 mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Real Examples */}
        <section className="py-16 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="dm text-3xl md:text-4xl font-bold mb-4">Real-World Examples</h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              See how custom websites solve actual business problems
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
                
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold text-red-400 mb-2">❌ Problem</h4>
                    <p className="text-sm text-white/70">{ex.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-blue-400 mb-2">💡 Solution</h4>
                    <p className="text-sm text-white/70">{ex.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-green-400 mb-2">✓ Results</h4>
                    <ul className="space-y-1">
                      {ex.results.map((result, j) => (
                        <li key={j} className="text-sm text-white/70 flex items-start gap-2">
                          <span className="text-green-400">→</span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Who This Is For */}
        <section className="py-16 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="dm text-3xl md:text-4xl font-bold mb-4">Is This Right For You?</h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              We're honest about who we can help best
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
                Good Fit
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
                Not Yet (But Maybe Soon!)
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

        {/* Tech Stack */}
        <section className="py-16 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="dm text-3xl md:text-4xl font-bold mb-4">Built With Modern Tech</h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              We use the best tools in the industry for speed, reliability, and maintainability
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {techStack.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[var(--color-surface)]/60 ring-1 ring-white/[0.06] rounded-xl p-4 text-center hover:ring-white/[0.12] transition-all"
              >
                <div className="font-semibold mb-1">{tech.name}</div>
                <div className="text-xs text-white/60">{tech.why}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="dm text-3xl md:text-4xl font-bold mb-4">Maximize Your Website's Impact</h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              A great website is just the start. Here's how to get even more value from it.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[var(--color-surface)]/60 to-[var(--color-surface)]/20 ring-1 ring-white/[0.06] rounded-xl p-6 hover:ring-white/[0.12] transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors">Automate</h3>
                  <p className="text-sm text-white/60">Save 10-20 hours/week</p>
                </div>
                <div className="text-3xl">🤖</div>
              </div>
              <p className="text-white/70 mb-4 text-sm leading-relaxed">
                Once your website is live, automate the workflows it creates. Connect form submissions to your CRM, send automated follow-ups, and eliminate manual data entry.
              </p>
              <Link
                href="/automate"
                className="inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
              >
                Explore Automation
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[var(--color-surface)]/60 to-[var(--color-surface)]/20 ring-1 ring-white/[0.06] rounded-xl p-6 hover:ring-white/[0.12] transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors">Intelligence</h3>
                  <p className="text-sm text-white/60">AI-powered insights & support</p>
                </div>
                <div className="text-3xl">💡</div>
              </div>
              <p className="text-white/70 mb-4 text-sm leading-relaxed">
                Add an AI chatbot to answer visitor questions 24/7, or build dashboards to track how your website performs. Turn your site into an intelligent, always-on sales tool.
              </p>
              <Link
                href="/intelligence"
                className="inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
              >
                Explore AI Solutions
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 max-w-4xl mx-auto">
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
                  <div className="px-6 pb-4 text-white/70">{faq.a}</div>
                </div>
              </motion.div>
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
        </section>

        {/* CTA */}
        <section className="py-16 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[var(--color-accent-1)]/10 to-[var(--color-accent-2)]/10 border border-white/10 rounded-2xl p-8 md:p-12"
          >
            <h2 className="dm text-3xl md:text-4xl font-bold mb-4">
              Ready to Launch Your Website?
            </h2>
            <p className="text-lg text-white/70 mb-8 max-w-xl mx-auto">
              Let's talk about your business goals and create a website that actually grows your revenue.
            </p>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[var(--color-accent-1)] to-[var(--color-accent-2)] text-white font-medium px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                Start Your Project
                <span className="text-xl">→</span>
              </Link>
            </motion.div>
            <p className="mt-6 text-sm text-white/50">
              Free consultation • No pressure • Clear pricing
            </p>
          </motion.div>
        </section>
      </section>
    </>
  );
}