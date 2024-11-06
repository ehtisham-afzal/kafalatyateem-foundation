import FeaturesCard from "@/components/Cards/FeaturesCard";
import { ServicesAndFacilities } from "@/lib/Data";
import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import React, { use } from "react";
type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: Props) {
  const params = await props.params;

  const {
    locale
  } = params;

  const t = await getTranslations({ locale, namespace: "Metadata" });
  return { title: t("SevicesPage.title") };
}

const Page = (props: Props) => {
  const params = use(props.params);

  const {
    locale
  } = params;

  unstable_setRequestLocale(locale);
  const t = useTranslations();
  return (
    <section className="w-full min-h-[50dvh] space-y-14">
      <h1 className="mb-4 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        {t("ServicesAndFacilities.Title")}
      </h1>
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
    </section>
  );
};

export default Page;
