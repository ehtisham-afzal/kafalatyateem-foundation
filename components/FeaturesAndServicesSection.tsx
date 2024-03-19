import { ServicesAndFacilities } from "@/lib/Data";
import FeaturesCard from "./Cards/FeaturesCard";
import {Link} from "../navigation";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

const FeaturesAndServicesSection = () => {
  const t = useTranslations();
  return (
    <section className="w-full pb-16 space-y-8 md:space-y-12">
      <div className="flex items-center justify-between w-full h-fit">
        <h2 className="text-3xl font-semibold tracking-tight scroll-m-20 first:mt-0">
          {t("ServicesAndFacilitiesSection.Title")}
        </h2>
        <Link
          href="/Services"
          className="items-center hidden gap-1 text-xl font-semibold tracking-tight sm:flex group text-muted-foreground scroll-m-20 first:mt-0 hover:text-primary"
        >
          {t('ServicesAndFacilitiesSection.SeeAll')}
          <ArrowRight className="p-0.5 transition-transform group-hover:translate-x-2 rtl:group-hover:-translate-x-2 rtl:rotate-180" />
        </Link>
      </div>
      <div className="flex flex-wrap items-center justify-between w-full gap-4">
        {ServicesAndFacilities.map(
          (id, index) =>
            index < 4 && (
              <FeaturesCard
                className={`${index == 3 ? "sm:hidden xl:flex" : ""}`}
                key={index}
                IconName={t(`ServicesAndFacilities.${id}.IconName`)}
                Title={t(`ServicesAndFacilities.${id}.Title`)}
                Description={t(`ServicesAndFacilities.${id}.Description`)}
              />
            )
        )}
        <Link
          href="/Services"
          className="flex items-center justify-center w-full p-4 overflow-hidden border rounded-lg shadow-sm h-fit sm:hidden hover:border-primary bg-card"
        >
          <p>{t('ReadMore')}</p>
        </Link>
      </div>
    </section>
  );
};

export default FeaturesAndServicesSection;
