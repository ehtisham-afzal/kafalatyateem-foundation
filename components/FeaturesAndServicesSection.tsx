import { ServicesAndFacilities } from "@/lib/Data";
import FeaturesCard from "./Cards/FeaturesCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const FeaturesAndServicesSection = () => {
  return (
    <section className="w-full pb-16 space-y-8 md:space-y-12">
      <div className="flex items-center justify-between w-full h-fit">
        <h2 className="text-3xl font-semibold tracking-tight scroll-m-20 first:mt-0">
          Services & Facilities we Providing{" "}
        </h2>
        <Link
          href="/Services"
          className="items-center hidden gap-1 text-xl font-semibold tracking-tight sm:flex group text-muted-foreground scroll-m-20 first:mt-0 hover:text-primary"
        >
          See All{" "}
          <ArrowRight className="p-0.5 transition-transform group-hover:translate-x-2" />
        </Link>
      </div>
      <div className="flex flex-wrap items-center justify-between w-full gap-4">
        {ServicesAndFacilities.map(
          ({ Title, Description, IconName }, index) =>
            index < 4 && (
              <FeaturesCard
                className={`${index == 3 ? "sm:hidden xl:flex" : ""}`}
                key={index}
                IconName={IconName}
                Title={Title}
                Description={Description}
              />
            )
        )}
        <Link
          href="/Services"
          className="flex items-center justify-center w-full p-4 overflow-hidden border rounded-lg shadow-sm h-fit sm:hidden hover:border-primary bg-card"
        >
          <p className="text-muted-foreground">
            Click here to see all Services & Facilities we providing
          </p>
        </Link>
      </div>
    </section>
  );
};

export default FeaturesAndServicesSection;
