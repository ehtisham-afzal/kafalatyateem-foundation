import StatisticsCard from "./Cards/StatisticsCard";
import { PersonStanding, User2, Users } from "lucide-react";
import OrphansInfoMobile from "./OrphansInfoMobile";

type orphansTypes = {
  male: number;
  female: number;
  total: number;
};

const OrphansInfoSection = ({
  title,
  orphans,
}: {
  title: string;
  orphans: orphansTypes;
}) => {
  const statistics = [
    {
      icon: <Users className="w-full h-full" />,
      title: `${orphans.total}`,
      description: "Male&Female",
    },
    {
      icon: <PersonStanding className="w-full h-full" />,
      title: `${orphans.male}`,
      description: "Male",
    },
    {
      icon: <User2 className="w-full h-full" />,
      title: `${orphans.female}`,
      description: "Female",
    },
  ];

  return (
    <section className="w-full py-8 space-y-8 md:space-y-12">
      <h2 className="text-3xl font-semibold tracking-tight scroll-m-20 first:mt-0">
        {title}
      </h2>
      <OrphansInfoMobile
        total={orphans.total}
        male={orphans.male}
        female={orphans.female}
      />
      <div className="flex-wrap items-center justify-center hidden w-full gap-4 sm:flex md:justify-between">
        {statistics.map((stat, index) => (
          <StatisticsCard
            key={index}
            Title={stat.title}
            Description={stat.description}
          >
            {stat.icon}
          </StatisticsCard>
        ))}
      </div>
    </section>
  );
};

export default OrphansInfoSection;
