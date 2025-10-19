import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import { Inter, DM_Serif_Display, Space_Grotesk } from "next/font/google";
import MobileNav from "@/components/MobileNav";

const inter = Inter({ subsets: ["latin"] });
const dm = DM_Serif_Display({ 
  weight: "400", 
  subsets: ["latin"], 
  variable: "--font-dm" 
});
const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"], 
  variable: "--font-space",
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sidekicksystems.com'),
  title: {
    default: "Sidekick Systems — Custom Websites, Automation & AI Solutions",
    template: "%s | Sidekick Systems"
  },
  description: "We build high-performance websites, automations, and AI insights for Australian businesses. Launch faster, automate workflows, and make smarter decisions with custom digital solutions.",
  keywords: ["web design Australia", "website development", "automation", "AI solutions", "custom websites", "workflow automation", "SEO", "digital marketing"],
  authors: [{ name: "Sidekick Systems" }],
  creator: "Sidekick Systems",
  publisher: "Sidekick Systems",
  alternates: {
    canonical: 'https://sidekicksystems.com',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0b0d11' },
  ],
  manifest: '/manifest.json',
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://sidekicksystems.com",
    siteName: "Sidekick Systems",
    title: "Sidekick Systems — Custom Websites, Automation & AI Solutions",
    description: "We build high-performance websites, automations, and AI insights for Australian businesses.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sidekick Systems - Launch, Automate, Intelligence"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Sidekick Systems — Custom Websites, Automation & AI Solutions",
    description: "We build high-performance websites, automations, and AI insights for Australian businesses.",
    images: ["/og-image.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Sidekick Systems',
    url: 'https://sidekicksystems.com',
    logo: 'https://sidekicksystems.com/logo.png',
    description: 'We build high-performance websites, automations, and AI insights for Australian businesses.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'AU',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'hello@sidekicksystems.com',
      contactType: 'Customer Service',
      availableLanguage: 'English',
    },
    sameAs: [
      'https://sidekicksystems.com',
    ],
    offers: [
      {
        '@type': 'Offer',
        name: 'Custom Website Design',
        description: 'Professional custom websites built from scratch',
        url: 'https://sidekicksystems.com/launch',
      },
      {
        '@type': 'Offer',
        name: 'Workflow Automation',
        description: 'Custom automation solutions to save time and eliminate errors',
        url: 'https://sidekicksystems.com/automate',
      },
      {
        '@type': 'Offer',
        name: 'AI-Powered Intelligence',
        description: 'Custom AI chatbots and business intelligence dashboards',
        url: 'https://sidekicksystems.com/intelligence',
      },
    ],
  };

  return (
    <html lang="en" className="overflow-x-hidden">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} ${dm.variable} ${spaceGrotesk.variable} bg-bg text-text antialiased overflow-x-hidden`}>
        {/* Header */}
        <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/70 backdrop-blur">
          <nav className="container flex items-center justify-between py-4">
            <Link href="/" className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-neutral-950 rounded-lg transition-all duration-200">
              <span
                className="inline-block h-7 w-7 rounded-full"
                style={{ background: "linear-gradient(90deg,#FF1E8C,#D244F8,#3C2EFF)" }}
                aria-hidden
              />
              <span className="font-[family-name:var(--font-space)] text-lg font-semibold tracking-tight">
                SIDEKICK <span className="text-white/70">SYSTEMS</span>
              </span>
            </Link>

            <div className="flex items-center gap-3">
              <ul className="hidden md:flex items-center gap-6 text-sm text-white/75 font-[family-name:var(--font-space)]">
                <li><Link href="/" className="hover:text-white focus:text-white focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-neutral-950 rounded-sm px-1 transition-all duration-200">Home</Link></li>
                <li><Link href="/launch" className="hover:text-white focus:text-white focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-neutral-950 rounded-sm px-1 transition-all duration-200">Launch</Link></li>
                <li><Link href="/automate" className="hover:text-white focus:text-white focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-neutral-950 rounded-sm px-1 transition-all duration-200">Automate</Link></li>
                <li><Link href="/intelligence" className="hover:text-white focus:text-white focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-neutral-950 rounded-sm px-1 transition-all duration-200">Intelligence</Link></li>
                <li><Link href="/resources" className="hover:text-white focus:text-white focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-neutral-950 rounded-sm px-1 transition-all duration-200">Resources</Link></li>
                <li><Link href="/contact" className="hover:text-white focus:text-white focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-neutral-950 rounded-sm px-1 transition-all duration-200">Contact</Link></li>
              </ul>
              <MobileNav />
            </div>
          </nav>
        </header>

        {/* Page content */}
        <main className="container py-10 md:py-14">{children}</main>

        {/* Footer */}
        <footer className="border-t border-white/10">
          <div className="container py-8 text-center text-sm text-white/60 font-[family-name:var(--font-space)]">
            © {new Date().getFullYear()} Sidekick Systems — Launch • Automate • Intelligence
          </div>
        </footer>
      </body>
    </html>
  );
}