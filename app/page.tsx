import CTA from "@/components/CTA";
import FeaturesAndServicesSection from "@/components/FeaturesAndServicesSection";
import Footer from "@/components/Footer";
import GallerySection from "@/components/GallerySection";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import OrphansInfoSection from "@/components/OrphansInfoSection";
import TeamBehindSection from "@/components/TeamBehindSection";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between w-full min-h-screen space-y-8 ">
      
      <Hero />
      <FeaturesAndServicesSection />
      <GallerySection />
      <OrphansInfoSection />
      <TeamBehindSection />
      <CTA />
      <Separator />
      
    </main>
  );
}
