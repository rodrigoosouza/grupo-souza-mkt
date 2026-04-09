import { Hero } from "@/components/sections/hero";
import { AppShowcase } from "@/components/sections/app-showcase";
import { Results } from "@/components/sections/results";
import { FeaturesSection } from "@/components/sections/features-section";
import { PainPoints } from "@/components/sections/pain-points";
import { Cases } from "@/components/sections/cases";
import { Founder } from "@/components/sections/founder";
import { Marquee } from "@/components/sections/marquee";
import { Process } from "@/components/sections/process";
import { Testimonials } from "@/components/sections/testimonials";
import { Comparison } from "@/components/sections/comparison";
import { RecentPosts } from "@/components/sections/recent-posts";
import { FAQ } from "@/components/sections/faq";
import { WhoItsFor } from "@/components/sections/who-its-for";
import { CTAFinal } from "@/components/sections/cta-final";

export default function Home() {
  return (
    <>
      <Hero />
      <WhoItsFor />
      <Comparison />
      <AppShowcase />
      <Results />
      <FeaturesSection />
      <div className="h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent max-w-7xl mx-auto" />
      <PainPoints />
      <Marquee />
      <Cases />
      <div className="h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent max-w-7xl mx-auto" />
      <Founder />
      <div className="h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent max-w-7xl mx-auto" />
      <Process />
      <Testimonials />
      <div className="h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent max-w-7xl mx-auto" />
      <RecentPosts />
      <div className="h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent max-w-7xl mx-auto" />
      <FAQ />
      <CTAFinal />
    </>
  );
}
