import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Sidekick Systems. We respond within 24 hours. Let's discuss how we can help launch, automate, or add intelligence to your business.",
  keywords: ["contact web designer", "get quote website", "contact automation specialist", "AI consultation Australia"],
  alternates: {
    canonical: 'https://sidekicksystems.com/contact',
  },
  openGraph: {
    title: "Contact Us | Sidekick Systems",
    description: "Get in touch with Sidekick Systems. We respond within 24 hours.",
    url: "https://sidekicksystems.com/contact",
  },
  twitter: {
    title: "Contact Us | Sidekick Systems",
    description: "Get in touch with Sidekick Systems. We respond within 24 hours.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
