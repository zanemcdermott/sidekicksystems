import Image from "next/image";
import Link from "next/link";

export default function LaunchPage() {
  return (
    <section className="px-6 md:px-12 pt-20 md:pt-32 pb-24 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-balance">
          Custom <span className="brand-gradient">Website Design</span> & Launch
        </h1>
        <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
          We craft fast, beautiful, mobile-friendly websites from scratch – built to grow your business and make your first impression unforgettable.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {/* Service Card 1 */}
        <div className="bg-surface p-6 rounded-2xl shadow-lg border border-white/10">
          <h3 className="text-xl font-semibold mb-2">Made from Scratch</h3>
          <p className="text-muted text-sm">
            Every site we build is fully custom coded – no templates, no compromises. Optimized for speed, SEO, and wow factor.
          </p>
        </div>

        {/* Service Card 2 */}
        <div className="bg-surface p-6 rounded-2xl shadow-lg border border-white/10">
          <h3 className="text-xl font-semibold mb-2">Mobile-First & Responsive</h3>
          <p className="text-muted text-sm">
            Over half of your visitors are on mobile. We ensure your site looks perfect on every screen size.
          </p>
        </div>

        {/* Service Card 3 */}
        <div className="bg-surface p-6 rounded-2xl shadow-lg border border-white/10">
          <h3 className="text-xl font-semibold mb-2">Tailored for Every Industry</h3>
          <p className="text-muted text-sm">
            From tradies to cafés, ecommerce to creatives – we create digital experiences tailored to your unique business needs.
          </p>
        </div>
      </div>

      {/* Placeholder for laptop/phone mockup */}
      <div className="w-full mb-16">
        <div className="aspect-[16/9] w-full bg-muted/10 rounded-xl flex items-center justify-center border border-dashed border-white/20">
          <span className="text-muted">[Mockup Placeholder]</span>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-semibold text-balance mb-4">
          Pricing starts from <span className="text-accent font-bold">$750</span>
        </h2>
        <p className="text-muted max-w-xl mx-auto mb-6">
          Each project is custom-quoted based on your needs. Reach out to discuss the best solution for your business.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-accent text-[#05131a] font-medium px-6 py-3 rounded-xl shadow-lg hover:opacity-90"
        >
          Get a Quote
        </Link>
        <p className="mt-4 text-sm text-white/60">
          Optional: ask about running Google or Meta ads with your new website.
        </p>
      </div>
    </section>
  );
}
