import PersonCard from "@/components/Cards/PersonCard";
import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import { TEAM_BEHINED_QUERRY } from "@/sanity/lib/queries";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services we providing",
};
export default async function page() {
  const content = await sanityFetch({ query: TEAM_BEHINED_QUERRY });
  return (
    <section className="w-full max-w-[52.5rem] space-y-14">
      <h1 className="pb-2 mb-4 text-3xl font-semibold tracking-tight border-b scroll-m-20 first:mt-0">
        {content.data ? content.data.name : "Team Behined"}
      </h1>
      <div className="flex flex-wrap items-center justify-between gap-4">
        {content.data?.teamBehined ? (
          content.data.teamBehined.map((member, index) => (
            <PersonCard
              className={index === 3 ? "md:hidden lg:flex" : ""}
              key={member.name}
              Name={member.name || ""}
              Description={member.desegnation || ""}
              ImageURL={member.image ? urlFor(member.image).url() : ""}
            />
          ))
        ) : (
          <p>Loading</p>
        )}
      </div>
    </section>
  );
}
