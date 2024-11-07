import StatisticsCard from "./Cards/StatisticsCard";
import { PersonStanding, User2, Users } from "lucide-react";
import OrphansInfoMobile from "./OrphansInfoMobile";

const OrphansInfoSection = () => {
  const statistics = [
    {
      icon: <Users className="w-full h-full" />,
      title: "120",
      description: "Male&Female"
    },
    {
      icon: <PersonStanding className="w-full h-full" />,
      title: "85",
      description: "Male"
    },
    {
      icon: <User2 className="w-full h-full" />,
      title: "35",
      description: "Female"
    }
  ];

  return (
    <section className="w-full py-8 space-y-8 md:space-y-12">
      <h2 className="text-3xl font-semibold tracking-tight scroll-m-20 first:mt-0">
        Orphans we have
      </h2>
      <OrphansInfoMobile/>
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
