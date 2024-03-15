import { ServicesAndFacilities } from "@/lib/Data";
import React from "react";
import FeaturesCard from "./Cards/FeaturesCard";

const FeaturesAndServicesSection = () => {
  return (
    <section className="w-full py-16 space-y-8 md:space-y-12">
      <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
        Services & Facilities we Providing{" "}
      </h2>
      <div className="w-full flex items-center justify-center lg:justify-between flex-wrap gap-4">
        {ServicesAndFacilities.map(
          ({ Title, Description, IconName }, index) =>
            index < 4 && (
              <FeaturesCard
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
