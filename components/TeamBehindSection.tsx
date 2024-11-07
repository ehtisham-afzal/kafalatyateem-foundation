import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HomeScreenEBodyMembers from "./HomeScreenEBodyMembers";

const TeamBehindSection = () => {
  return (
    <section className="w-full space-y-8 md:space-y-12">
      <div className="flex items-center justify-between w-full h-fit">
        <h1 className="text-3xl font-semibold tracking-tight scroll-m-20 first:mt-0">
          Meet the Team Behind
        </h1>
        <Link
          href="/TeamBehind"
          className="items-center hidden gap-1 text-xl font-semibold tracking-tight sm:flex group text-muted-foreground scroll-m-20 first:mt-0 hover:text-primary"
        >
          See All
          <ArrowRight className="p-0.5 transition-transform group-hover:translate-x-2 rtl:group-hover:-translate-x-2 rtl:rotate-180" />
        </Link>
      </div>

      <div className="flex flex-wrap items-center justify-between w-full gap-4 pb-8">
        <HomeScreenEBodyMembers />
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
