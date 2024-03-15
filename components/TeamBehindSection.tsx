import React from "react";
import PersonCard from "./Cards/PersonCard";

const TeamBehindSection = () => {
  return (
    <section className="w-full space-y-8 md:space-y-12">
      <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
        Team Behined
      </h2>
      <div className="w-full flex items-center justify-between flex-wrap gap-4">
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
