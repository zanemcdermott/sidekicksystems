import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources & FAQ",
  description: "Learn about SEO, website design, automation, and AI solutions. Expert answers to common questions about digital marketing, workflow automation, and business technology.",
  keywords: ["SEO guide", "what is SEO", "website FAQ", "automation FAQ", "AI chatbot guide", "digital marketing tips", "business automation guide"],
  alternates: {
    canonical: 'https://sidekicksystems.com/resources',
  },
  openGraph: {
    title: "Resources & FAQ | Sidekick Systems",
    description: "Learn about SEO, website design, automation, and AI solutions. Expert answers to common questions.",
    url: "https://sidekicksystems.com/resources",
  },
  twitter: {
    title: "Resources & FAQ | Sidekick Systems",
    description: "Learn about SEO, website design, automation, and AI solutions. Expert answers to common questions.",
  },
};

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
