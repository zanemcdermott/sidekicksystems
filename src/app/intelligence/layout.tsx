import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI-Powered Business Intelligence",
  description: "Custom AI chatbots, real-time dashboards, and data insights powered by GPT-4 and Claude. Make smarter decisions with AI-powered business intelligence.",
  keywords: ["AI chatbot", "business intelligence", "custom dashboards", "GPT-4", "Claude AI", "data insights", "AI automation", "AI solutions Australia"],
  alternates: {
    canonical: 'https://sidekicksystems.com/intelligence',
  },
  openGraph: {
    title: "AI-Powered Business Intelligence | Sidekick Systems",
    description: "Custom AI chatbots, real-time dashboards, and data insights powered by GPT-4 and Claude.",
    url: "https://sidekicksystems.com/intelligence",
  },
  twitter: {
    title: "AI-Powered Business Intelligence | Sidekick Systems",
    description: "Custom AI chatbots, real-time dashboards, and data insights powered by GPT-4 and Claude.",
  },
};

export default function IntelligenceLayout({ children }: { children: React.ReactNode }) {
  return children;
}
