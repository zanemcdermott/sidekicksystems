"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ErrorBoundary } from "@/components/errorboundary";
import { FormSkeleton } from "@/components/loadingskeletons";

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "+61",
    businessName: "",
    businessType: "",
    website: "",
    service: "",
    message: "",
  });

  const [submitState, setSubmitState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitState('loading');
    setErrorMessage('');
    setSuccessMessage('');

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
      setSuccessMessage(data.message || 'Message sent successfully!');
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormState({
          name: "",
          email: "",
          phone: "",
          countryCode: "+61",
          businessName: "",
          businessType: "",
          website: "",
          service: "",
          message: "",
        });
        setSubmitState('idle');
        setSuccessMessage('');
      }, 3000);

    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitState('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message. Please try again or email us directly at hello@sidekicksystems.com');
    }
  };

  return (
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
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-1)]/50 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder="John Doe"
            disabled={submitState === 'loading'}
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
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-1)]/50 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder="john@example.com"
            disabled={submitState === 'loading'}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-2">
            Phone (Optional)
          </label>
          <div className="flex gap-2">
            <select
              value={formState.countryCode}
              onChange={(e) => setFormState({ ...formState, countryCode: e.target.value })}
              className="w-24 px-3 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-1)]/50 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed text-white [&>option]:bg-neutral-900 [&>option]:text-white"
              disabled={submitState === 'loading'}
            >
              <option value="+61">+61</option>
              <option value="+1">+1</option>
              <option value="+44">+44</option>
              <option value="+64">+64</option>
            </select>
            <input
              type="tel"
              id="phone"
              value={formState.phone}
              onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
              className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-1)]/50 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder="400 000 000"
              disabled={submitState === 'loading'}
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
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-1)]/50 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder="Acme Co."
            disabled={submitState === 'loading'}
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
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-1)]/50 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder="e.g., Restaurant, E-commerce, Consultant"
            disabled={submitState === 'loading'}
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
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-1)]/50 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder="https://yourwebsite.com"
            disabled={submitState === 'loading'}
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
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-1)]/50 focus:border-transparent transition-all text-white [&>option]:bg-neutral-900 [&>option]:text-white disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={submitState === 'loading'}
        >
          <option value="">Select a service</option>
          <option value="launch">Launch - Website Design</option>
          <option value="automate">Automate - Workflow Automation</option>
          <option value="intelligence">Intelligence - AI Solutions</option>
          <option value="print">Print Design (Menus, Business Cards)</option>
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
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-1)]/50 focus:border-transparent transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
          placeholder="Tell us about your business, your goals, and what you're looking to achieve..."
          disabled={submitState === 'loading'}
        />
      </div>

      {/* Success Message */}
      {submitState === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400"
        >
          ✓ {successMessage}
        </motion.div>
      )}

      {/* Error Message */}
      {submitState === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400"
        >
          ✗ {errorMessage}
        </motion.div>
      )}

      <motion.button
        whileHover={{ scale: submitState === 'loading' ? 1 : 1.02 }}
        whileTap={{ scale: submitState === 'loading' ? 1 : 0.98 }}
        type="submit"
        disabled={submitState === 'loading'}
        className="w-full bg-gradient-to-r from-[var(--color-accent-1)] to-[var(--color-accent-2)] text-white font-medium px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:shadow-[var(--color-accent-1)]/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-[var(--color-bg)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {submitState === 'loading' ? (
          <>
            <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </motion.button>

      <p className="text-xs text-white/50 text-center">
        We respect your privacy. Your information will never be shared with third parties.
      </p>
    </form>
  );
}

export default function ContactPage() {
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
          Ready to launch, automate, or add intelligence to your business? Fill out the form below and we&apos;ll get back to you within 24 hours.
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
              No worries! Just tell us about your business and challenges. We&apos;ll recommend the best solution for you.
            </p>
          </div>
        </motion.div>

        {/* Contact Form with Error Boundary */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="lg:col-span-2"
        >
          <ErrorBoundary
            fallback={
              <div className="bg-[var(--color-surface)]/60 ring-1 ring-white/[0.06] p-6 md:p-8 rounded-2xl">
                <div className="text-center py-12">
                  <div className="text-4xl mb-4">⚠️</div>
                  <h3 className="text-xl font-bold mb-2">Form Temporarily Unavailable</h3>
                  <p className="text-white/70 mb-4">
                    Please email us directly at{' '}
                    <a href="mailto:hello@sidekicksystems.com" className="text-[var(--color-accent-1)] hover:underline">
                      hello@sidekicksystems.com
                    </a>
                  </p>
                </div>
              </div>
            }
          >
            <ContactForm />
          </ErrorBoundary>
        </motion.div>
      </div>
    </section>
  );
}