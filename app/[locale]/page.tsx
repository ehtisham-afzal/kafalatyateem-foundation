import CTA from "@/components/CTA";
import FeaturesAndServicesSection from "@/components/FeaturesAndServicesSection";
import GallerySection from "@/components/GallerySection";
import Hero2 from "@/components/Hero2";
import HomePageMainHero from "@/components/HomePageMainHero";
import OrphansInfoSection from "@/components/OrphansInfoSection";
import TeamBehindSection from "@/components/TeamBehindSection";
import { unstable_setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function Home(props: Props) {
  const params = await props.params;

  const {
    locale
  } = params;

  unstable_setRequestLocale(locale);
  return (
    <main className="flex flex-col items-center justify-between w-full min-h-screen space-y-8 ">
      <HomePageMainHero/>
      <Hero2 />
      <FeaturesAndServicesSection />
      <GallerySection />
      <OrphansInfoSection />
      <TeamBehindSection />
      <CTA />
    </main>
  );
}
