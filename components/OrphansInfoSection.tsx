import { useTranslations } from "next-intl";
import StatisticsCard from "./Cards/StatisticsCard";
import { PersonStanding, User2, Users } from "lucide-react";

const OrphansInfoSection = () => {
  const t = useTranslations("OrphansSection")
  return (
    <section className="w-full py-8 space-y-8 md:space-y-12">
      <h2 className="text-3xl font-semibold tracking-tight scroll-m-20 first:mt-0">
        {t('Title')}
      </h2>
      <div className="flex flex-wrap items-center justify-center w-full gap-4 md:justify-between">
        <StatisticsCard Title="120" Description={t('Cards.MaleFemale')}>
          <Users className="w-full h-full" />
        </StatisticsCard>
        <StatisticsCard Title="85" Description={t('Cards.Male')}>
          <PersonStanding className="w-full h-full" />
        </StatisticsCard>
        <StatisticsCard Title="35" Description={t('Cards.Female')}>
          <User2 className="w-full h-full" />
        </StatisticsCard>
      </div>
    </section>
  );
};

export default OrphansInfoSection;
