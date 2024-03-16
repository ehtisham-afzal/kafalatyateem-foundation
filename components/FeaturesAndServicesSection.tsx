import { ServicesAndFacilities } from "@/lib/Data";
import React from "react";
import FeaturesCard from "./Cards/FeaturesCard";

const FeaturesAndServicesSection = () => {
  return (
    <section className="w-full pb-16 space-y-8 md:space-y-12">
      <h2 className="text-3xl font-semibold tracking-tight scroll-m-20 first:mt-0">
        Services & Facilities we Providing{" "}
      </h2>
      <div className="flex flex-wrap items-center justify-between w-full gap-4">
        {ServicesAndFacilities.map(
          ({ Title, Description, IconName }, index) =>
            index < 4 && (
              <FeaturesCard
                className={`${index == 3 ? "hidden xl:flex" : ""}`}
                key={index}
                IconName={IconName}
                Title={Title}
                Description={Description}
              />
            )
        )}
      </div>
    </section>
  );
};

export default FeaturesAndServicesSection;
