import CTA from "@/components/CTA";
import FeaturesAndServicesSection from "@/components/FeaturesAndServicesSection";
import GallerySection from "@/components/GallerySection";
import Hero from "@/components/Hero";
import OrphansInfoSection from "@/components/OrphansInfoSection";
import TeamBehindSection from "@/components/TeamBehindSection";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

type Props = {
  params: {
    locale: string;
  };
};

export default function Home({params: {locale}} : Props) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Home");
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
