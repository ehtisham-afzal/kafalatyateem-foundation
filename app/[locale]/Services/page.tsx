import FeaturesCard from "@/components/Cards/FeaturesCard";
import { ServicesAndFacilities } from "@/lib/Data";
import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import React from "react";
type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props) {
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return { title: t("SevicesPage.title") };
}

const Page = ({ params: { locale } }: Props) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations();
  return (
    <main className="w-full min-h-[50dvh] space-y-14">
      <h2 className="mb-4 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        {t("ServicesAndFacilities.Title")}
      </h2>
      <div className="w-full prose prose-lg">
        <table>
          <thead>
            <tr>
              <th>{t('ServicesAndFacilitiesSection.TableHeader.Facility')}</th>
              <th>{t('ServicesAndFacilitiesSection.TableHeader.Description')}</th>
            </tr>
          </thead>
          <tbody>
            {ServicesAndFacilities.map((id, index) => (
              <tr className="hover:bg-muted" key={index}>
                <td>{t(`ServicesAndFacilities.${id}.Title`)}</td>
                <td>{t(`ServicesAndFacilities.${id}.Description`)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Page;
