import PersonCard from "@/components/Cards/PersonCard";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { TEAM_BEHINED_QUERRY } from "@/sanity/lib/queries";

export default async function page() {
  const data = await client.fetch(TEAM_BEHINED_QUERRY);
  return (
    <section className="w-full max-w-[52.5rem] space-y-14">
      <h1 className="pb-2 mb-4 text-3xl font-semibold tracking-tight border-b scroll-m-20 first:mt-0">
        {data ? data.name : "Team Behined"}
      </h1>
      <div className="flex flex-wrap items-center justify-between gap-4">
        {data?.teamBehined ? (
          data.teamBehined.map((member, index) => (
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
