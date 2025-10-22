"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const countryCodes = [
  { code: "+61", country: "AU" },
  { code: "+1", country: "US" },
  { code: "+44", country: "GB" },
  { code: "+64", country: "NZ" },
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

  const [submitState, setSubmitState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitState('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setSubmitState('success');
      
      setTimeout(() => {
        setFormState({
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
        setSubmitState('idle');
      }, 3000);

    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitState('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message. Please try again.');
    }
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
          Let&apos;s Build Something <span className="brand-gradient animate-shimmer">Amazing</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white/75 max-w-2xl mx-auto">
          Ready to launch, automate, or add intelligence to your business? Fill out the form and we&apos;ll get back within 24 hours.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8">
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
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="lg:col-span-2"
        >
          <form onSubmit={handleSubmit} className="bg-[var(--color-surface)]/60 ring-1 ring-white/[0.06] p-6 md:p-8 rounded-2xl space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name *</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-1)]/50 transition-all"
                  placeholder="John Doe"
                  disabled={submitState === 'loading'}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email *</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-1)]/50 transition-all"
                  placeholder="john@example.com"
                  disabled={submitState === 'loading'}
                />
              </div>
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium mb-2">What are you interested in? *</label>
              <select
                id="service"
                required
                value={formState.service}
                onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-1)]/50 transition-all"
                disabled={submitState === 'loading'}
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
              <label htmlFor="message" className="block text-sm font-medium mb-2">Tell us about your project *</label>
              <textarea
                id="message"
                required
                rows={6}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-1)]/50 transition-all resize-none"
                placeholder="Tell us about your business, goals, and what you're looking to achieve..."
                disabled={submitState === 'loading'}
              />
            </div>

            {submitState === 'success' && (
              <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400">
                ✓ Message sent! We&apos;ll get back to you within 24 hours.
              </div>
            )}

            {submitState === 'error' && (
              <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400">
                ✗ {errorMessage || 'Something went wrong. Please try again.'}
              </div>
            )}

            <button
              type="submit"
              disabled={submitState === 'loading'}
              className="w-full bg-gradient-to-r from-[var(--color-accent-1)] to-[var(--color-accent-2)] text-white font-medium px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
            >
              {submitState === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}