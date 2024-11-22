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
  console.log("Fetched Home Data:", homeData); // Log the fetched data

  return (
    <main className="flex flex-col items-center justify-between w-full min-h-screen space-y-8 ">
      <HeroCarousel Images={homeData?.herocarousel?.map(img => ({
        url: img.url ?? "",
        alt: img.alt ?? ""
      })) ?? [{url: "", alt: ""}]} />
      <HeroComponent
        title={homeData?.heroSection?.title || ""}
        description={homeData?.heroSection?.description || ""}
        heroImage={{
          image: homeData?.heroSection?.heroimage?.image ?? "",
          alt: homeData?.heroSection?.heroimage?.alt ?? ""
        }}
        buttons={homeData?.heroSection?.buttons?.map(button => ({
          text: button.text ?? "",
          href: button.href ?? ""
        })) || []}
      />
      <FeaturesAndServicesSection
        title={homeData?.servicesAndFacilitiesSection?.title || ""}
        facilities={homeData?.servicesAndFacilitiesSection?.facilities?.map(f => ({
          ...f,
          lucidiconname: f.lucidiconname ?? 'Home',
          facility: f.facility ?? '',
          description: f.description ?? ''
        })) || []}
      />
      <GallerySection images={homeData?.galleryImages?.map(img => ({
        url: img.url ?? "",
        alt: img.alt ?? ""
      })) ?? [{url: "", alt: ""}]}  />
      <OrphansInfoSection 
        title={homeData?.orphansWeHave?.mainTitle || ""} 
        orphans={{
          male: homeData?.orphansWeHave?.orphans?.male ?? 0,
          female: homeData?.orphansWeHave?.orphans?.female ?? 0,
          total: homeData?.orphansWeHave?.orphans?.total ?? 0
        }} 
      />
      <TeamBehindSection 
        team={homeData?.teamBehined?.slice(0, 4).map(member => ({
          name: member.name ?? '',
          desegnation: member.desegnation ?? '',
          imageUrl: member.imageUrl ?? ''
        })) || []} 
        title="Meet the Team Behind" 
      />
      <CTA
        title={homeData?.ctaSection?.title || ""}
        description={homeData?.ctaSection?.description || ""}
        href={{
          url: homeData?.ctaSection?.href?.url ?? "",
          text: homeData?.ctaSection?.href?.text ?? ""
        }}
      />
    </main>
  );
}
