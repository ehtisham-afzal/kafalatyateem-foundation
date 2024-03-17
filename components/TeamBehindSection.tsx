import PersonCard from "./Cards/PersonCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const TeamBehindSection = () => {
  return (
    <section className="w-full space-y-8 md:space-y-12">
      <div className="flex items-center justify-between w-full h-fit">
        <h2 className="text-3xl font-semibold tracking-tight scroll-m-20 first:mt-0">
          Meet the Team Behined
        </h2>
        <Link
          href="/TeamBehind"
          className="items-center hidden gap-1 text-xl font-semibold tracking-tight sm:flex group text-muted-foreground scroll-m-20 first:mt-0 hover:text-primary"
        >
          See All{" "}
          <ArrowRight className="p-0.5 transition-transform group-hover:translate-x-2" />
        </Link>
      </div>

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
        <Link
          href="/TeamBehind"
          className="flex items-center justify-center w-full p-4 overflow-hidden border rounded-lg shadow-sm h-fit sm:hidden hover:border-primary bg-card"
        >
          <p>Click here to see all team members</p>
        </Link>
      </div>
    </section>
  );
};

export default TeamBehindSection;
