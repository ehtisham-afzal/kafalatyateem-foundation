import PersonCard from "@/components/Cards/PersonCard";
import React from "react";

const page = () => {
  return (
    <main className="w-full min-h-[50dvh] space-y-14">
      <h1 className="mb-4 text-4xl font-extrabold text-gray-900 title-font sm:text-5xl text-primary">
        Board of managment
      </h1>
      <div className="flex flex-wrap items-center justify-between gap-4">
        {Array(25)
          .fill(0)
          .map((_, i) => (
            <PersonCard
              key={i}
              ImageURL="/dove.jpg"
              Name="Ehtisham Afzal"
              Description="General member"
            />
          ))}
      </div>
    </main>
  );
};

export default page;
