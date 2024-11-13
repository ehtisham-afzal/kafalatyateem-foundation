import { client } from "@/sanity/lib/client";
import { HOME_QUERY } from "@/sanity/lib/queries";
import CTA from "@/components/CTA";
import FeaturesAndServicesSection from "@/components/FeaturesAndServicesSection";
import GallerySection from "@/components/GallerySection";
import HeroComponent from "@/components/HeroComponent";
import OrphansInfoSection from "@/components/OrphansInfoSection";
import TeamBehindSection from "@/components/TeamBehindSection";
import HeroCarousel from "@/components/HeroCarousel";

export default async function Home() {
  const homeData = await client.fetch(HOME_QUERY);
  return (
    <main className="flex flex-col items-center justify-between w-full min-h-screen space-y-8 ">
      <HeroCarousel Images={homeData.herocarousel} />
      <HeroComponent
        title={homeData.heroSection.title}
        description={homeData.heroSection.description}
        heroImage={homeData.heroSection.heroimage}
        buttons={homeData.heroSection.buttons}
      />
      <FeaturesAndServicesSection
        title={homeData.servicesAndFacilitiesSection.title}
        facilities={homeData.servicesAndFacilitiesSection.facilities}
      />
      <GallerySection images={homeData.galleryImages} />
      <OrphansInfoSection
        title={homeData.orphansWeHave.mainTitle}
        orphans={homeData.orphansWeHave.orphans}
      />
      <TeamBehindSection
        team={homeData.teamBehined}
        title="Meet the Team Behind"
      />
      <CTA
        title={homeData.ctaSection.title}
        description={homeData.ctaSection.description}
        href={homeData.ctaSection.href}
      />
    </main>
  );
}
