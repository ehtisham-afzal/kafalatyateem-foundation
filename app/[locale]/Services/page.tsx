import FeaturesCard from "@/components/Cards/FeaturesCard";
import { ServicesAndFacilities } from "@/lib/Data";
import { useTranslations } from "next-intl";
import React from "react";

const Page = () => {
  const t = useTranslations();
  return (
    <main className="w-full min-h-[50dvh] space-y-14">
      <h1 className="mb-4 text-4xl font-extrabold text-gray-900 title-font sm:text-5xl text-primary">
        {t("ServicesAndFacilities.Title")
        }
      </h1>
      <div className="flex flex-wrap items-center justify-between w-full gap-4">
        {ServicesAndFacilities.map((id, index) => (
          <FeaturesCard
            className={`${index == 3 ? "sm:hidden xl:flex" : ""}`}
            key={index}
            ImageUrl={t(`ServicesAndFacilities.${id}.ImageUrl`)}
            Title={t(`ServicesAndFacilities.${id}.Title`)}
            Description={t(`ServicesAndFacilities.${id}.Description`)}
          />
        ))}
        {ServicesAndFacilities.map((id, index) => (
          <FeaturesCard
            className={`${index == 3 ? "sm:hidden xl:flex" : ""}`}
            key={index}
            ImageUrl={t(`ServicesAndFacilities.${id}.ImageUrl`)}
            Title={t(`ServicesAndFacilities.${id}.Title`)}
            Description={t(`ServicesAndFacilities.${id}.Description`)}
          />
        ))}
        {ServicesAndFacilities.map((id, index) => (
          <FeaturesCard
            className={`${index == 3 ? "sm:hidden xl:flex" : ""}`}
            key={index}
            ImageUrl={t(`ServicesAndFacilities.${id}.ImageUrl`)}
            Title={t(`ServicesAndFacilities.${id}.Title`)}
            Description={t(`ServicesAndFacilities.${id}.Description`)}
          />
        ))}
      </div>
    </main>
  );
};

export default Page;
