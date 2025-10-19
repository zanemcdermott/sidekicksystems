import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Workflow Automation Solutions",
  description: "Save 10+ hours per week with custom workflow automation. Email routing, CRM integration, and custom workflows using n8n, Zapier, and Make. Eliminate manual tasks.",
  keywords: ["workflow automation", "business automation", "n8n automation", "Zapier integration", "Make workflows", "CRM automation", "email automation"],
  alternates: {
    canonical: 'https://sidekicksystems.com/automate',
  },
  openGraph: {
    title: "Workflow Automation Solutions | Sidekick Systems",
    description: "Save 10+ hours per week with custom workflow automation. Email routing, CRM integration, and custom workflows.",
    url: "https://sidekicksystems.com/automate",
  },
  twitter: {
    title: "Workflow Automation Solutions | Sidekick Systems",
    description: "Save 10+ hours per week with custom workflow automation. Email routing, CRM integration, and custom workflows.",
  },
};

export default function AutomateLayout({ children }: { children: React.ReactNode }) {
  return children;
}
