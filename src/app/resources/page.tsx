"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const categories = [
  { id: "all", label: "All Topics" },
  { id: "seo", label: "SEO & Marketing" },
  { id: "automation", label: "Automation" },
  { id: "ai", label: "AI & Intelligence" },
  { id: "general", label: "General" }
];

const resources = [
  {
    category: "seo",
    question: "What is SEO and why does my business need it?",
    answer: "SEO (Search Engine Optimization) is the practice of optimizing your website to rank higher in search engine results like Google. When someone searches for services you offer, SEO helps your website appear near the top of the results. This drives more organic (free) traffic to your site, which means more potential customers finding you without paid ads. Good SEO includes fast loading speeds, mobile optimization, quality content, and proper technical setup."
  },
  {
    category: "seo",
    question: "How long does SEO take to show results?",
    answer: "SEO is a long-term strategy. Most businesses start seeing meaningful results in 3-6 months, with continued improvement over time. The timeline depends on your industry competition, current website state, and how aggressively you optimize. Unlike paid ads that stop working when you stop paying, SEO builds lasting value—once you rank well, you can maintain those positions with ongoing optimization."
  },
  {
    category: "seo",
    question: "What's the difference between SEO and paid ads?",
    answer: "SEO drives organic (free) traffic over time by improving your website's ranking in search results. Paid ads (like Google Ads) put you at the top of search results immediately, but you pay for each click. SEO requires upfront work but has lasting benefits. Paid ads give instant results but cost money continuously. The best approach? Use both—ads for immediate leads while building your SEO for long-term growth."
  },
  {
    category: "automation",
    question: "What can be automated in my business?",
    answer: "Almost any repetitive task! Common automations include: email responses and follow-ups, lead routing to sales teams, CRM data entry and updates, appointment scheduling, invoice generation, social media posting, report creation, inventory updates, customer onboarding, and notification systems. If you're doing the same task more than 3 times a week, it's probably worth automating."
  },
  {
    category: "automation",
    question: "Will automation replace my employees?",
    answer: "No! Automation handles repetitive, boring tasks so your team can focus on what humans do best—creative thinking, problem-solving, and building relationships with customers. Instead of replacing staff, automation makes them more productive and happier by removing tedious work. Think of it as giving your team superpowers, not replacing them."
  },
  {
    category: "automation",
    question: "How much time can automation really save?",
    answer: "Our clients typically save 10-20 hours per week after implementing key automations. For example: automated lead routing saves 2-3 hours/week, automated email responses save 5-7 hours/week, and automated reporting saves 3-5 hours/week. That's time you can spend growing your business, serving customers better, or achieving better work-life balance."
  },
  {
    category: "automation",
    question: "What tools do you use for automation?",
    answer: "We use industry-leading platforms like n8n (open-source workflow automation), Zapier, Make (formerly Integromat), and custom code when needed. The choice depends on your specific needs, existing tools, and budget. We'll recommend the best solution for your situation during our consultation."
  },
  {
    category: "ai",
    question: "What is an AI chatbot and how can it help my business?",
    answer: "An AI chatbot is software powered by artificial intelligence that can have natural conversations with your website visitors 24/7. Unlike basic chatbots with scripted responses, AI chatbots understand context and can answer complex questions about your business, products, or services. They qualify leads, answer FAQs, book appointments, and provide instant support—even when you're closed. It's like having a knowledgeable employee available around the clock."
  },
  {
    category: "ai",
    question: "How accurate are AI chatbots?",
    answer: "Modern AI chatbots (using GPT-4, Claude, or similar models) are highly accurate when properly trained on your business information. We train them on your FAQs, product details, policies, and common customer scenarios. They handle 80-90% of common questions perfectly, and can escalate complex issues to human staff. We also implement safeguards to ensure they don't provide incorrect information."
  },
  {
    category: "ai",
    question: "What's the difference between a dashboard and regular reports?",
    answer: "Traditional reports are static snapshots (like a PDF sent weekly), while dashboards are live, interactive views of your data that update in real-time. Instead of waiting for a weekly email, you can check your dashboard anytime to see current sales, website traffic, customer metrics, or any KPIs that matter to you. Dashboards put all your important numbers in one place, updated automatically."
  },
  {
    category: "ai",
    question: "Can AI help with decision-making?",
    answer: "Absolutely! AI excels at finding patterns in large amounts of data that humans might miss. It can predict customer behavior, recommend pricing strategies, identify your best-performing products, forecast demand, and highlight opportunities or risks. Think of AI as a data analyst that works 24/7, helping you make smarter decisions faster."
  },
  {
    category: "general",
    question: "How much do your services cost?",
    answer: "Every project is custom-quoted based on your specific needs. Websites start from $750, automation projects typically range from $500-$2,500, and AI solutions start around $1,000. We provide detailed quotes after understanding your requirements during a free consultation. No surprise costs—you'll know exactly what you're getting."
  },
  {
    category: "general",
    question: "Do you work with businesses outside Australia?",
    answer: "Yes! While we're based in Australia, we work with clients globally. All our services are delivered remotely, and we're experienced in working across time zones. Whether you're in Sydney or San Francisco, we can help build and grow your digital presence."
  },
  {
    category: "general",
    question: "What if I need changes after my website launches?",
    answer: "We offer ongoing support and maintenance packages for all our projects. Minor content updates are usually quick and affordable. Larger changes or new features can be scoped as additional projects. We're always here to help your digital presence grow as your business evolves."
  },
  {
    category: "general",
    question: "How do I get started?",
    answer: "Simple! Fill out our contact form or email us at hello@sidekicksystems.com. We'll schedule a free 30-minute consultation to discuss your business goals, challenges, and which of our services (Launch, Automate, Intelligence) would benefit you most. No pressure, no obligation—just a friendly chat about how we can help."
  }
];

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filteredResources = selectedCategory === "all"
    ? resources
    : resources.filter(r => r.category === selectedCategory);

  return (
    <section className="px-6 md:px-12 pt-12 md:pt-16 pb-24 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="dm text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance mb-6">
          Resources & <span className="brand-gradient animate-shimmer">FAQ</span>
        </h1>
        <p className="text-lg md:text-xl text-white/75 max-w-2xl mx-auto">
          Everything you need to know about websites, SEO, automation, and AI. Learn at your own pace.
        </p>
      </motion.div>

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex flex-wrap justify-center gap-3 mb-12"
      >
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedCategory === cat.id
                ? 'bg-gradient-to-r from-[var(--color-accent-1)] to-[var(--color-accent-2)] text-white shadow-lg'
                : 'bg-white/5 ring-1 ring-white/10 text-white/70 hover:bg-white/10 hover:text-white'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </motion.div>

      {/* FAQ Accordion */}
      <div className="space-y-4 mb-16">
        {filteredResources.map((resource, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="bg-[var(--color-surface)]/60 ring-1 ring-white/[0.06] rounded-xl overflow-hidden hover:ring-white/[0.12] transition-all duration-300"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-5 flex items-start justify-between text-left group"
            >
              <div className="pr-8">
                <div className="text-xs text-white/50 mb-2 uppercase tracking-wider">
                  {categories.find(c => c.id === resource.category)?.label}
                </div>
                <span className="font-semibold text-lg group-hover:text-white transition-colors">
                  {resource.question}
                </span>
              </div>
              <span className={`flex-shrink-0 text-2xl text-white/60 group-hover:text-white transition-all duration-300 ${openIndex === index ? 'rotate-45' : ''}`}>
                +
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-[500px]' : 'max-h-0'
              }`}
            >
              <div className="px-6 pb-5 text-white/70 leading-relaxed">
                {resource.answer}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center bg-gradient-to-br from-[var(--color-accent-1)]/10 to-[var(--color-accent-2)]/10 border border-white/10 rounded-2xl p-8 md:p-12"
      >
        <h2 className="dm text-2xl md:text-3xl font-semibold mb-4">
          Still have questions?
        </h2>
        <p className="text-white/70 mb-6 max-w-xl mx-auto">
          We'd love to chat about your specific situation and how we can help your business grow.
        </p>
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[var(--color-accent-1)] to-[var(--color-accent-2)] text-white font-medium px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:shadow-[var(--color-accent-1)]/20 transition-all duration-300"
          >
            Get in Touch
            <span className="text-xl">→</span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
