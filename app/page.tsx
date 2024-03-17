import CTA from "@/components/CTA";
import FeaturesAndServicesSection from "@/components/FeaturesAndServicesSection";
import GallerySection from "@/components/GallerySection";
import Hero from "@/components/Hero";
import OrphansInfoSection from "@/components/OrphansInfoSection";
import TeamBehindSection from "@/components/TeamBehindSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between w-full min-h-screen space-y-8 ">
      <Hero />
      <FeaturesAndServicesSection />
      <GallerySection />
      <OrphansInfoSection />
      <TeamBehindSection />
      <CTA />
    </main>
  );
}
