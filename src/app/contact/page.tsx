"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const countryCodes = [
  { code: "+61", country: "AU" },
  { code: "+1", country: "US" },
  { code: "+44", country: "GB" },
  { code: "+64", country: "NZ" },
  { code: "+81", country: "JP" },
  { code: "+86", country: "CN" },
  { code: "+91", country: "IN" },
  { code: "+65", country: "SG" },
  { code: "+49", country: "DE" },
  { code: "+33", country: "FR" },
  { code: "+39", country: "IT" },
  { code: "+34", country: "ES" },
  { code: "+31", country: "NL" },
  { code: "+41", country: "CH" },
  { code: "+46", country: "SE" },
  { code: "+47", country: "NO" },
  { code: "+45", country: "DK" },
  { code: "+358", country: "FI" },
  { code: "+32", country: "BE" },
  { code: "+43", country: "AT" },
  { code: "+353", country: "IE" },
  { code: "+351", country: "PT" },
  { code: "+30", country: "GR" },
  { code: "+48", country: "PL" },
  { code: "+420", country: "CZ" },
  { code: "+7", country: "RU" },
  { code: "+380", country: "UA" },
  { code: "+90", country: "TR" },
  { code: "+971", country: "AE" },
  { code: "+966", country: "SA" },
  { code: "+972", country: "IL" },
  { code: "+27", country: "ZA" },
  { code: "+234", country: "NG" },
  { code: "+254", country: "KE" },
  { code: "+20", country: "EG" },
  { code: "+55", country: "BR" },
  { code: "+52", country: "MX" },
  { code: "+54", country: "AR" },
  { code: "+56", country: "CL" },
  { code: "+57", country: "CO" },
  { code: "+82", country: "KR" },
  { code: "+66", country: "TH" },
  { code: "+84", country: "VN" },
  { code: "+60", country: "MY" },
  { code: "+62", country: "ID" },
  { code: "+63", country: "PH" },
  { code: "+852", country: "HK" },
  { code: "+886", country: "TW" },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    countryCode: "+61",
    phone: "",
    businessName: "",
    businessType: "",
    website: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add form submission logic
    console.log("Form submitted:", formState);
  };

  return (
    <section className="pt-12 md:pt-16 pb-24 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="dm text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
          Let's Build Something <span className="brand-gradient animate-shimmer">Amazing</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white/75 max-w-2xl mx-auto">
          Ready to launch, automate, or add intelligence to your business? Fill out the form below and we'll get back to you within 24 hours.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8 mb-12">
        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-1 space-y-6"
        >
          <div className="bg-[var(--color-surface)]/60 ring-1 ring-white/[0.06] p-6 rounded-2xl">
            <h3 className="font-semibold mb-4 text-lg">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="text-2xl">📧</div>
                <div>
                  <p className="text-sm text-white/60 mb-1">Email</p>
                  <a href="mailto:hello@sidekicksystems.com" className="text-white/90 hover:text-white transition-colors">
                    hello@sidekicksystems.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-2xl">💬</div>
                <div>
                  <p className="text-sm text-white/60 mb-1">Response Time</p>
                  <p className="text-white/90">Within 24 hours</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-2xl">🌏</div>
                <div>
                  <p className="text-sm text-white/60 mb-1">Location</p>
                  <p className="text-white/90">Australia</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[var(--color-accent-1)]/10 to-[var(--color-accent-2)]/10 border border-white/10 p-6 rounded-2xl">
            <h4 className="font-semibold mb-2">Not sure where to start?</h4>
            <p className="text-sm text-white/70">
              No worries! Just tell us about your business and challenges. We'll recommend the best solution for you.
            </p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="lg:col-span-2"
        >
          <form onSubmit={handleSubmit} className="bg-[var(--color-surface)]/60 ring-1 ring-white/[0.06] p-6 md:p-8 rounded-2xl space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-1)]/50 focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-1)]/50 focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone (Optional)
                </label>
                <div className="flex gap-3">
                  <select
                    value={formState.countryCode}
                    onChange={(e) => setFormState({ ...formState, countryCode: e.target.value })}
                    className="w-[110px] flex-shrink-0 px-3 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-1)]/50 focus:border-transparent transition-all text-sm text-white [&>option]:bg-neutral-900 [&>option]:text-white"
                  >
                    {countryCodes.map((cc) => (
                      <option key={cc.code} value={cc.code}>
                        {cc.country} {cc.code}
                      </option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    id="phone"
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    className="flex-1 min-w-0 px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-1)]/50 focus:border-transparent transition-all"
                    placeholder="400 000 000"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="businessName" className="block text-sm font-medium mb-2">
                  Business Name (Optional)
                </label>
                <input
                  type="text"
                  id="businessName"
                  value={formState.businessName}
                  onChange={(e) => setFormState({ ...formState, businessName: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-1)]/50 focus:border-transparent transition-all"
                  placeholder="Acme Co."
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="businessType" className="block text-sm font-medium mb-2">
                  Type of Business (Optional)
                </label>
                <input
                  type="text"
                  id="businessType"
                  value={formState.businessType}
                  onChange={(e) => setFormState({ ...formState, businessType: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-1)]/50 focus:border-transparent transition-all"
                  placeholder="e.g., Restaurant, E-commerce, Consultant"
                />
              </div>
              <div>
                <label htmlFor="website" className="block text-sm font-medium mb-2">
                  Existing Website (Optional)
                </label>
                <input
                  type="url"
                  id="website"
                  value={formState.website}
                  onChange={(e) => setFormState({ ...formState, website: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-1)]/50 focus:border-transparent transition-all"
                  placeholder="https://yourwebsite.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium mb-2">
                What are you interested in? *
              </label>
              <select
                id="service"
                required
                value={formState.service}
                onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-1)]/50 focus:border-transparent transition-all text-white [&>option]:bg-neutral-900 [&>option]:text-white"
              >
                <option value="">Select a service</option>
                <option value="launch">Launch - Website Design</option>
                <option value="automate">Automate - Workflow Automation</option>
                <option value="intelligence">Intelligence - AI Solutions</option>
                <option value="all">All of the above</option>
                <option value="other">Other / Not sure</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Tell us about your project *
              </label>
              <textarea
                id="message"
                required
                rows={6}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-1)]/50 focus:border-transparent transition-all resize-none"
                placeholder="Tell us about your business, your goals, and what you're looking to achieve..."
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-gradient-to-r from-[var(--color-accent-1)] to-[var(--color-accent-2)] text-white font-medium px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:shadow-[var(--color-accent-1)]/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-[var(--color-bg)]"
            >
              Send Message
            </motion.button>

            <p className="text-xs text-white/50 text-center">
              We respect your privacy. Your information will never be shared with third parties.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
