import Hero from "@/components/sections/Hero";
import Intro from "@/components/sections/Intro";
import FeaturedWork from "@/components/sections/FeaturedWork";
import ServicesPreview from "@/components/sections/ServicesPreview";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <FeaturedWork />
      <ServicesPreview />
      <CTA />
    </>
  );
}
