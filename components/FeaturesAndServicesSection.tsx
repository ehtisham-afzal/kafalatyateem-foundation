import { ServicesAndFacilities } from "@/lib/Data";
import FeaturesCard from "./Cards/FeaturesCard";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

type ServiceContent = {
  icon: string;
  title: string;
  description: string;
};

const getServiceContent = (id: number): ServiceContent => {
  const content: Record<number, ServiceContent> = {
    1: {
      icon: "BookText",
      title: "Education",
      description: "Nursery to 10th class English Medium School."
    },
    2: {
      icon: "IceCreamBowl",
      title: "Food",
      description: "Providing daily food."
    },
    3: {
      icon: "Shirt",
      title: "Cloths",
      description: "Provide annually two suit (i.e. school uniform)"
    },
    4: {
      icon: "School",
      title: "Shelter",
      description: "Accommodation twenty four hours in hostel"
    },
    5: {
      icon: "MoonStar",
      title: "Islamic Teaching",
      description: "Hifz & Tajweed, Islamic teachings."
    }
  };
  return content[id] || content[5];
};

const FeaturesAndServicesSection = () => {
  return (
    <section className="w-full pb-16 space-y-8 md:space-y-12">
      <div className="flex items-center justify-between w-full h-fit">
        <h1 className="text-3xl font-semibold tracking-tight scroll-m-20 first:mt-0">
          Services & Facilities we Providing
        </h1>
        <Link
          href="/Services"
          className="items-center hidden gap-1 text-xl font-semibold tracking-tight sm:flex group text-muted-foreground scroll-m-20 first:mt-0 hover:text-primary"
        >
          See All
          <ArrowRight className="p-0.5 transition-transform group-hover:translate-x-2 rtl:group-hover:-translate-x-2 rtl:rotate-180" />
        </Link>
      </div>
      <div className="flex flex-wrap items-center justify-center w-full gap-4 lg:justify-between">
        {ServicesAndFacilities.map(
          (id, index) =>
            index < 4 && (
              <FeaturesCard
                key={index}
                ImageUrl={`/Icons/${getServiceContent(Number(id)).icon}.svg`}
                Title={getServiceContent(Number(id)).title}
                Description={getServiceContent(Number(id)).description}
              />
            )
        )}
        <Link
          href="/Services"
          className="flex items-center justify-center w-full p-4 overflow-hidden border rounded-lg shadow-sm h-fit sm:hidden hover:border-primary bg-card"
        >
          <p>Click here to see all</p>
        </Link>
      </div>
    </section>
  );
};

export default FeaturesAndServicesSection;
