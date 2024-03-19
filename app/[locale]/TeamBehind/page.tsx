import PersonCard from "@/components/Cards/PersonCard";
import { useTranslations } from "next-intl";
import React from "react";

const Page = () => {
  const t = useTranslations()
  return (
    <main className="w-full min-h-[50dvh] space-y-14">
      <h1 className="mb-4 text-4xl font-extrabold text-gray-900 title-font sm:text-5xl text-primary">
        {t('TeamBehind.Title')}
      </h1>
      <div className="flex flex-wrap items-center justify-between gap-4">
        {Array(25)
          .fill(0)
          .map((_, i) => (
            <PersonCard
            key={i}
            Name={t("TeamBehind.1.Name")}
            Description={t("TeamBehind.1.Role")}
            ImageURL={t("TeamBehind.1.ImageUrl")}
          />
          ))}
      </div>
    </main>
  );
};

export default Page;
