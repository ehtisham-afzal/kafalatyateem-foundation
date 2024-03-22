import PersonCard from "@/components/Cards/PersonCard";
import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import React from "react";

type Props = {
  params: {locale: string};
};

export async function generateMetadata({ params: { locale } }: Props) {
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return { title: t("TeamBehindPage.title") };
}

const Page = ({params: {locale}}: Props) => {
  unstable_setRequestLocale(locale)
  const t = useTranslations()
  return (
    <main className="w-full min-h-[50dvh] space-y-14">
      <h2 className="mb-4 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        {t('TeamBehind.Title')}
      </h2>
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
