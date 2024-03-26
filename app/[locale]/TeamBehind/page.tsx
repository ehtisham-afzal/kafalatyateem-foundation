import PersonCard from "@/components/Cards/PersonCard";
import { TeamBehind } from "@/lib/Data";
import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import React from "react";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props) {
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return { title: t("TeamBehindPage.title") };
}

const Page = ({ params: { locale } }: Props) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations();
  return (
    <section className="w-full max-w-[52.5rem] space-y-14">
      <h2 className="pb-2 mb-4 text-3xl font-semibold tracking-tight border-b scroll-m-20 first:mt-0">
        {t("TeamBehind.Title")}
      </h2>
      <div className="flex flex-wrap items-center justify-between gap-4">
        {TeamBehind.map((member, index) => (
          <PersonCard
            className={index === 3 ? "md:hidden lg:flex" : ""}
            key={member.Name}
            Name={member.Name}
            Description={member.Designation}
            ImageURL={member.ImageUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Page;
