import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Website Design & Development",
  description: "Professional custom website design from scratch. Fast, mobile-friendly, SEO-optimized websites starting from $750. Built for Australian businesses to grow online.",
  keywords: ["custom website design", "web development Australia", "mobile-friendly websites", "SEO websites", "professional web design", "business websites"],
  alternates: {
    canonical: 'https://sidekicksystems.com/launch',
  },
  openGraph: {
    title: "Custom Website Design & Development | Sidekick Systems",
    description: "Professional custom website design from scratch. Fast, mobile-friendly, SEO-optimized websites starting from $750.",
    url: "https://sidekicksystems.com/launch",
  },
  twitter: {
    title: "Custom Website Design & Development | Sidekick Systems",
    description: "Professional custom website design from scratch. Fast, mobile-friendly, SEO-optimized websites starting from $750.",
  },
};

export default function LaunchLayout({ children }: { children: React.ReactNode }) {
  return children;
}
