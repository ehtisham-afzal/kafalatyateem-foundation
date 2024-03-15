import StatisticsCard from "./Cards/StatisticsCard";
import { PersonStanding, User2, Users } from "lucide-react";

const OrphansInfoSection = () => {
  return (
    <section className="w-full space-y-8 md:space-y-12 py-8">
      <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
        Orphans we have
      </h2>
      <div className="w-full flex flex-wrap justify-center gap-4 items-center md:justify-between">
        <StatisticsCard Title="160" Description="Male & Female">
          <Users className="w-full h-full" />
        </StatisticsCard>
        <StatisticsCard Title="90" Description="Male">
          <PersonStanding className="w-full h-full" />
        </StatisticsCard>
        <StatisticsCard Title="70" Description="Female">
          <User2 className="w-full h-full" />
        </StatisticsCard>
      </div>
    </section>
  );
};

export default OrphansInfoSection;
