"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { ServiceSchema, BreadcrumbSchema } from "@/components/StructuredData";

const processSteps = [
  {
    week: "Week 1",
    title: "Data Audit & Strategy",
    description: "We review your existing knowledge base (FAQs, docs, customer data, business processes). You share what questions customers ask most and what decisions you make regularly.",
    deliverable: "AI strategy document, training data requirements"
  },
  {
    week: "Week 1-2",
    title: "Data Preparation & Training",
    description: "We organise your knowledge into AI-friendly formats. We train custom models on your business specifics, test responses, and refine accuracy.",
    deliverable: "Trained AI model, test results report"
  },
  {
    week: "Week 2-3",
    title: "Build & Integration",
    description: "We build your AI chatbot, dashboard, or analysis tools. We integrate with your website, CRM, and data sources. You review and provide feedback.",
    deliverable: "Working AI system in staging environment"
  },
  {
    week: "Week 3-4",
    title: "Testing & Refinement",
    description: "We test with real scenarios, handle edge cases, and improve accuracy. You verify AI responses are on-brand and accurate.",
    deliverable: "QA report, accuracy metrics"
  },
  {
    week: "Week 4",
    title: "Launch & Training",
    description: "We deploy your AI system, set up monitoring, train your team on using insights, and establish feedback loops for continuous improvement.",
    deliverable: "Live AI system, team training, documentation"
  }
];

const aiSolutions = [
  {
    name: "AI Customer Support Chatbot",
    description: "A smart chatbot trained on your products, services, FAQs, and policies. Answers customer questions instantly, 24/7, in natural conversation.",
    useCases: [
      "Answer product questions",
      "Explain pricing and plans",
      "Troubleshoot common issues",
      "Book appointments/demos",
      "Qualify leads before human handoff",
      "Provide order status updates"
    ],
    metrics: "Handles 60-80% of common questions instantly"
  },
  {
    name: "AI Voice Receptionist",
    description: "Never miss a call again. AI answers your phone 24/7, books appointments, qualifies leads, takes messages, and transfers complex calls to your team.",
    useCases: [
      "After-hours call handling",
      "Appointment booking & cancellations",
      "Lead qualification and routing",
      "Common questions (hours, location, pricing)",
      "Message taking with instant notifications",
      "Multi-language support"
    ],
    metrics: "Handles 70-85% of inbound calls automatically"
  },
  {
    name: "Custom Dashboards",
    description: "Real-time visual dashboards pulling data from all your tools into one view. See your key metrics at a glance, updated automatically.",
    useCases: [
      "Sales pipeline and revenue",
      "Website traffic and conversions",
      "Customer satisfaction scores",
      "Inventory and fulfilment status",
      "Marketing campaign performance",
      "Team productivity metrics"
    ],
    metrics: "Save 3-5 hours/week on manual reporting"
  },
  {
    name: "AI-Powered Insights & Recommendations",
    description: "AI analyses your business data to spot trends, predict outcomes, and recommend actions. Like having a data analyst working 24/7.",
    useCases: [
      "Identify at-risk customers",
      "Predict inventory needs",
      "Recommend pricing strategies",
      "Find best-performing content",
      "Optimise marketing spend",
      "Spot revenue opportunities"
    ],
    metrics: "Data-driven decisions in minutes, not days"
  },
  {
    name: "Automated Summaries & Reports",
    description: "AI reads through emails, meetings, support tickets, and documents to generate concise summaries and actionable reports.",
    useCases: [
      "Weekly performance summaries",
      "Customer feedback analysis",
      "Competitive intelligence reports",
      "Meeting notes and action items",
      "Contract key points extraction",
      "Support ticket categorisation"
    ],
    metrics: "Turn hours of reading into 5-minute summaries"
  }
];

const examples = [
  {
    industry: "Dental Clinic",
    problem: "Reception staff overwhelmed with calls during peak hours. Patients on hold for 5+ minutes. After-hours calls go to voicemail—many never call back. Missed appointments because no one available to send reminders.",
    solution: "AI voice receptionist answers all calls instantly. Books appointments, sends SMS confirmations, handles cancellations, answers common questions (hours, insurance, parking). Transfers urgent cases to staff immediately.",
    results: [
      "Zero missed calls (even after hours)",
      "85% of routine calls handled by AI",
      "35% reduction in no-shows (automated reminders)",
      "Staff focus on patients, not phones"
    ]
  },
  {
    industry: "Legal Firm",
    problem: "Junior staff spend 10+ hours/week answering basic legal queries via email. Phone constantly ringing with 'quick questions'. Potential clients drop off before consultation because they can't get simple answers after hours.",
    solution: "AI chatbot trained on firm's practice areas, common legal questions, and consultation process. Available 24/7 on website. Provides accurate general information, qualifies leads, books consultations.",
    results: [
      "70% of initial queries handled by AI",
      "3x more consultation bookings",
      "Staff focus on billable work",
      "After-hours leads captured automatically"
    ]
  },
  {
    industry: "E-commerce Store",
    problem: "Manually checking sales across 3 platforms daily. Compiling weekly reports takes 4 hours. Hard to spot trends until too late. Making inventory decisions based on gut feel, not data.",
    solution: "Custom dashboard aggregating Shopify, Amazon, eBay data. AI analyses trends, predicts demand, recommends reorder quantities. Automated weekly email reports to stakeholders.",
    results: [
      "Real-time revenue visibility",
      "Inventory waste reduced 35%",
      "Zero hours on manual reports",
      "Restocking decisions data-driven"
    ]
  },
  {
    industry: "Consulting Firm",
    problem: "Each consultant takes different notes. Hard to find past work for similar clients. Knowledge trapped in people's heads. New hires take months to get up to speed.",
    solution: "AI knowledge base that learns from past projects, proposals, and deliverables. Searchable by keywords, client industry, or problem type. Suggests relevant past work and templates.",
    results: [
      "Find relevant past work in 30 seconds",
      "New consultant onboarding cut from 3 months to 3 weeks",
      "Proposal writing 50% faster",
      "Cross-selling opportunities identified"
    ]
  }
];

const howAIWorks = [
  {
    step: "1. Knowledge Collection",
    description: "We gather your FAQs, product docs, policies, past conversations, and any other relevant information about your business."
  },
  {
    step: "2. Data Structuring",
    description: "We organise this information into formats AI can learn from, ensuring accuracy and completeness."
  },
  {
    step: "3. Model Training",
    description: "We train AI models (like GPT-4, Claude, or custom models) specifically on your business knowledge and tone of voice."
  },
  {
    step: "4. Testing & Refinement",
    description: "We test with hundreds of real questions, identify gaps, add missing information, and improve accuracy to 90%+."
  },
  {
    step: "5. Continuous Learning",
    description: "After launch, we monitor conversations, flag uncertainties, and regularly retrain the AI to stay current and accurate."
  }
];

const aiPoweredBy = [
  { name: "OpenAI GPT-4", strength: "Best for natural conversation" },
  { name: "Anthropic Claude", strength: "Excellent for complex analysis" },
  { name: "Custom Models", strength: "Tailored for specific tasks" }
];

const goodFit = [
  "You answer the same questions repeatedly",
  "You have knowledge in docs/FAQs/emails",
  "You want to scale support without hiring",
  "You're making decisions based on gut feel, not data",
  "You're ready to embrace AI technology"
];

const notYetFit = [
  "You have no documented processes or knowledge",
  "You need 100% perfection (AI is 90-95% accurate)",
  "You're not comfortable with AI technology",
  "You expect AI to handle complex human judgment",
  "You want instant results with zero training time"
];

const faqs = [
  {
    q: "How accurate are AI chatbots really?",
    a: "When properly trained on your specific business knowledge, AI chatbots are 90-95% accurate for common questions within their training scope. They're trained to say 'I don't know' and escalate to humans when uncertain, rather than making up answers. We build in safeguards to prevent incorrect information. The accuracy improves over time as we refine training based on real conversations."
  },
  {
    q: "Can AI voice receptionists handle phone calls naturally?",
    a: "Yes—modern voice AI sounds remarkably natural and can handle conversational calls for routine tasks (booking, questions, messages). Callers can tell it's AI if they pay attention, but most don't mind as long as they get quick, helpful service. The AI can detect frustration or complexity and immediately transfer to a human. Best practice: be transparent with callers that they're speaking with an AI assistant backed by your team."
  },
  {
    q: "What if the AI gives wrong information?",
    a: "We implement multiple safeguards: 1) AI is trained to express uncertainty and defer to humans when not confident, 2) We set up monitoring to flag potentially incorrect responses, 3) We include disclaimers for legal/medical/financial topics, 4) We regularly review conversations and retrain on errors. Most importantly, we scope the AI to handle specific, well-documented topics where accuracy can be verified."
  },
  {
    q: "Can customers tell they're talking to AI?",
    a: "We can configure this either way. Best practice is transparency—we usually add a note like 'AI assistant (connected to human support if needed)'. Modern AI is conversational enough that many users don't notice or care, as long as they get helpful answers quickly. The goal isn't to trick anyone; it's to provide instant, accurate help."
  },
  {
    q: "How much does AI cost to run?",
    a: "After initial setup, AI costs are usage-based. For chatbots, typically $50-200/month depending on conversation volume. Voice receptionists run $100-400/month based on call minutes. For dashboards and analytics, costs depend on data sources and refresh frequency. We'll provide estimates during consultation based on your expected usage."
  },
  {
    q: "What data do you need to train AI?",
    a: "Depends on the AI solution. For chatbots: FAQs, product docs, policies, common customer questions. For voice receptionists: call scripts, common scenarios, appointment booking process. For dashboards: read-only access to your data sources (analytics, CRM, etc.). For insights: historical business data you want analysed. We help you identify and organise what's needed during the discovery phase."
  },
  {
    q: "Is my business data secure?",
    a: "Yes. We follow strict data handling practices: encrypted connections, minimal data retention, no sharing with third parties. For sensitive industries, we can use self-hosted AI models instead of cloud APIs. We're happy to sign NDAs and discuss specific security requirements during consultation."
  },
  {
    q: "Can AI replace my support team?",
    a: "No, and that's not the goal. AI handles repetitive, common questions (60-80% of volume), freeing your team to focus on complex issues that need human empathy and judgment. Think of AI as your team's assistant, not their replacement. Best results come from AI + human collaboration."
  },
  {
    q: "How long until AI starts working?",
    a: "Simple chatbots can be trained in 1-2 weeks. Voice receptionists take 2-3 weeks to train and test. Complex AI systems (dashboards, predictive analytics) take 3-4 weeks. The AI is functional from day one but improves over time as we refine training based on real usage. We typically see 'good enough to launch' at week 3-4, with continuous improvement after."
  }
];

export default function IntelligencePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedSolution, setSelectedSolution] = useState(0);

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
            AI-Powered <span className="brand-gradient animate-shimmer">Intelligence</span>
          </h1>
          <p className="text-lg md:text-xl text-white/75 max-w-2xl mx-auto">
            Stop guessing. Start knowing. We build AI systems that answer customer questions instantly, visualise your data clearly, and help you make smarter decisions faster.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <div className="text-4xl mb-3">🤖</div>
            <div className="text-2xl font-bold mb-2">24/7 Support</div>
            <div className="text-white/60 text-sm">AI never sleeps</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <div className="text-4xl mb-3">📊</div>
            <div className="text-2xl font-bold mb-2">Real-Time Data</div>
            <div className="text-white/60 text-sm">Updated automatically</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <div className="text-4xl mb-3">💡</div>
            <div className="text-2xl font-bold mb-2">Smart Insights</div>
            <div className="text-white/60 text-sm">Data-driven decisions</div>
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
          <h2 className="dm text-3xl md:text-4xl font-bold mb-4">How We Build Your AI System</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            From data to deployment in 3-4 weeks
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

      {/* What We Build */}
      <section className="px-6 md:px-12 py-16 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="dm text-3xl md:text-4xl font-bold mb-4">What We Build With AI</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Custom AI solutions tailored to your business needs
          </p>
        </motion.div>

        {/* Solution Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {aiSolutions.map((solution, i) => (
            <button
              key={i}
              onClick={() => setSelectedSolution(i)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedSolution === i
                  ? 'bg-gradient-to-r from-[var(--color-accent-1)] to-[var(--color-accent-2)] text-white'
                  : 'bg-white/5 text-white/70 hover:bg-white/10'
              }`}
            >
              {solution.name}
            </button>
          ))}
        </div>

        {/* Selected Solution Detail */}
        <motion.div
          key={selectedSolution}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-[var(--color-surface)]/60 ring-1 ring-white/[0.06] rounded-2xl p-8"
        >
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-3">{aiSolutions[selectedSolution].name}</h3>
            <p className="text-white/70 leading-relaxed">{aiSolutions[selectedSolution].description}</p>
          </div>

          <div className="mb-6">
            <h4 className="font-semibold mb-3 text-lg">What it can do:</h4>
            <div className="grid md:grid-cols-2 gap-3">
              {aiSolutions[selectedSolution].useCases.map((useCase, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-green-400 flex-shrink-0 mt-1">✓</span>
                  <span className="text-white/70 text-sm">{useCase}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-gradient-to-r from-[var(--color-accent-1)]/10 to-[var(--color-accent-2)]/10 border border-white/10">
            <p className="text-sm text-white/80">
              <strong>Impact:</strong> {aiSolutions[selectedSolution].metrics}
            </p>
          </div>
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
          <h2 className="dm text-3xl md:text-4xl font-bold mb-4">Real-World Transformations</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            See how AI solves actual business challenges
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
                  <h4 className="text-sm font-semibold text-red-400 mb-2">❌ The Problem</h4>
                  <p className="text-sm text-white/70 leading-relaxed">{ex.problem}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">💡 The AI Solution</h4>
                  <p className="text-sm text-white/70 leading-relaxed">{ex.solution}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <h4 className="text-sm font-semibold text-green-400 mb-3">✓ Measurable Impact</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {ex.results.map((result, j) => (
                    <div key={j} className="text-center p-3 rounded-lg bg-white/5">
                      <div className="text-sm text-white/80 font-medium">{result}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How AI Training Works */}
      <section className="px-6 md:px-12 py-16 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="dm text-3xl md:text-4xl font-bold mb-4">Demystifying AI Training</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Here's how we make AI understand your business
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-6">
          {howAIWorks.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-[var(--color-accent-1)]/20 to-[var(--color-accent-2)]/20 border border-white/10 flex items-center justify-center font-bold">
                {i + 1}
              </div>
              <h4 className="font-semibold mb-2 text-sm">{item.step}</h4>
              <p className="text-xs text-white/60 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-block p-6 bg-gradient-to-br from-[var(--color-accent-1)]/10 to-[var(--color-accent-2)]/10 border border-white/10 rounded-xl">
            <h4 className="font-semibold mb-3">Powered by Leading AI</h4>
            <div className="flex flex-wrap justify-center gap-6">
              {aiPoweredBy.map((ai, i) => (
                <div key={i} className="text-center">
                  <div className="font-semibold text-sm mb-1">{ai.name}</div>
                  <div className="text-xs text-white/60">{ai.strength}</div>
                </div>
              ))}
            </div>
          </div>
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
          <h2 className="dm text-3xl md:text-4xl font-bold mb-4">Is AI Right For Your Business?</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Honest assessment of who benefits from AI
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
              AI Will Help If
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

      {/* Related Services */}
      <section className="px-6 md:px-12 py-16 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="dm text-3xl md:text-4xl font-bold mb-4">Build a Complete Digital Ecosystem</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            AI is powerful, but it's even better when combined with a strong foundation.
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
                <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors">Launch</h3>
                <p className="text-sm text-white/60">Give your AI a home</p>
              </div>
              <div className="text-3xl">🚀</div>
            </div>
            <p className="text-white/70 mb-4 text-sm leading-relaxed">
              AI chatbots need a website. Dashboards need data sources. We build fast, conversion-optimized sites designed to integrate seamlessly with AI tools—giving your intelligence a professional platform.
            </p>
            <Link
              href="/launch"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              Explore Website Design
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
                <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors">Automate</h3>
                <p className="text-sm text-white/60">Let AI trigger actions</p>
              </div>
              <div className="text-3xl">🤖</div>
            </div>
            <p className="text-white/70 mb-4 text-sm leading-relaxed">
              Combine AI insights with automation workflows. When your AI chatbot qualifies a lead, automatically add them to your CRM and trigger a follow-up sequence. Intelligence + automation = unstoppable.
            </p>
            <Link
              href="/automate"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              Explore Automation
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
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
          <h2 className="dm text-3xl md:text-4xl font-bold mb-4">Common AI Questions</h2>
          <p className="text-white/70">The concerns everyone has about AI (and honest answers)</p>
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
              <div className={`overflow-hidden transition-all ${openFaq === i ? 'max-h-[500px]' : 'max-h-0'}`}>
                <div className="px-6 pb-4 text-white/70 leading-relaxed">{faq.a}</div>
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
      <section className="px-6 md:px-12 py-16 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[var(--color-accent-1)]/10 to-[var(--color-accent-2)]/10 border border-white/10 rounded-2xl p-8 md:p-12"
        >
          <h2 className="dm text-3xl md:text-4xl font-bold mb-4">
            Ready to Add Intelligence?
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-xl mx-auto">
            Let's discuss how AI can help you serve customers better, make smarter decisions, and scale without the chaos.
          </p>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[var(--color-accent-1)] to-[var(--color-accent-2)] text-white font-medium px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              See What AI Can Do For You
              <span className="text-xl">→</span>
            </Link>
          </motion.div>
          <p className="mt-6 text-sm text-white/50">
            Free consultation • We'll assess your AI readiness • No pressure
          </p>
        </motion.div>
      </section>
    </div>
  );
}