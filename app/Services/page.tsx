import FeaturesCard from "@/components/Cards/FeaturesCard";
import { ServicesAndFacilities } from "@/lib/Data";
import React from "react";

const page = () => {
  return (
    <main className="w-full min-h-[50dvh] space-y-14">
      <h1 className="mb-4 text-4xl font-extrabold text-gray-900 title-font sm:text-5xl text-primary">
        Services we provided
      </h1>
      <div className="flex flex-wrap items-center justify-between w-full gap-4">
        {ServicesAndFacilities.map(
          ({ Title, Description, IconName }, index) => (
            <FeaturesCard
              key={index}
              IconName={IconName}
              Title={Title}
              Description={Description}
            />
          )
        )}
        {ServicesAndFacilities.map(
          ({ Title, Description, IconName }, index) => (
            <FeaturesCard
              key={index}
              IconName={IconName}
              Title={Title}
              Description={Description}
            />
          )
        )}
        {ServicesAndFacilities.map(
          ({ Title, Description, IconName }, index) => (
            <FeaturesCard
              key={index}
              IconName={IconName}
              Title={Title}
              Description={Description}
            />
          )
        )}
        {ServicesAndFacilities.map(
          ({ Title, Description, IconName }, index) => (
            <FeaturesCard
              key={index}
              IconName={IconName}
              Title={Title}
              Description={Description}
            />
          )
        )}
      </div>
    </main>
  );
};

export default page;
