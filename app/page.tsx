import CTA from "@/components/CTA";
import FeaturesAndServicesSection from "@/components/FeaturesAndServicesSection";
import GallerySection from "@/components/GallerySection";
import Hero from "@/components/Hero";
import OrphansInfoSection from "@/components/OrphansInfoSection";
import TeamBehindSection from "@/components/TeamBehindSection";

export default function Home() {
  return (
    <main className="flex min-h-screen max-w-[1400px] flex-col items-center justify-between px-3 sm:px-8 md:px-10 lg:px-32">
      <Hero />
      <FeaturesAndServicesSection/>
      <GallerySection/>
      <OrphansInfoSection/>
      <TeamBehindSection/>
      <CTA/>
    </main>
  );
}
