import React from "react";
import PersonCard from "./Cards/PersonCard";

const TeamBehindSection = () => {
  return (
    <section className="w-full space-y-8 md:space-y-12">
      <h2 className="text-3xl font-semibold tracking-tight scroll-m-20 first:mt-0">
        Team Behined
      </h2>
      <div className="flex flex-wrap items-center justify-between w-full gap-4 pb-8">
        <PersonCard
          Name="Ehtisham Afzal"
          Description="President"
          ImageURL="/dove.jpg"
        />
        <PersonCard
          Name="Ehtisham Afzal"
          Description="President"
          ImageURL="/dove.jpg"
        />
        <PersonCard
          Name="Ehtisham Afzal"
          Description="President"
          ImageURL="/dove.jpg"
        />
        <PersonCard
          Name="Ehtisham Afzal"
          Description="President"
          ImageURL="/dove.jpg"
        />
      </div>
    </section>
  );
};

export default TeamBehindSection;
