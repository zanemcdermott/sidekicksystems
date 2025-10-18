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
  title: "Sidekick Systems — Modern systems: Launch • Automate • Intelligence",
  description: "We build high-performance websites, automations, and AI insights.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${dm.variable} ${spaceGrotesk.variable} bg-bg text-text antialiased`}>
        {/* Header */}
        <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/70 backdrop-blur">
          <nav className="container flex items-center justify-between py-4">
            <Link href="/" className="flex items-center gap-3">
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
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/launch" className="hover:text-white transition-colors">Launch</Link></li>
                <li><Link href="/automate" className="hover:text-white transition-colors">Automate</Link></li>
                <li><Link href="/intelligence" className="hover:text-white transition-colors">Intelligence</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
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