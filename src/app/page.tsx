import Hero from "@/components/Hero";
import ProblemStatement from "@/components/ProblemStatement";
import WhatWeDo from "@/components/WhatWeDo";
import TrustStrip from "@/components/TrustStrip";
import HowWeWork from "@/components/HowWeWork";
import CaseStudies from "@/components/CaseStudies";
import WhySidekick from "@/components/WhySidekick";
import WhoWeHelp from "@/components/WhoWeHelp";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemStatement />
      <WhatWeDo />
      <TrustStrip />
      <HowWeWork />
      <CaseStudies />
      <WhySidekick />
      <WhoWeHelp />
      <FAQ />
      <FinalCTA />
    </>
  );
}