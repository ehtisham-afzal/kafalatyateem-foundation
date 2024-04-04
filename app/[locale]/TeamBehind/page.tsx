import { getAllmembersData } from "@/actions/actions";
import PersonCard from "@/components/Cards/PersonCard";


const Page = async () => {
  const TeamBehind = await getAllmembersData()
  return (
    <section className="w-full max-w-[52.5rem] space-y-14">
      <h2 className="pb-2 mb-4 text-3xl font-semibold tracking-tight border-b scroll-m-20 first:mt-0">
        {/* {t("TeamBehind.Title")} */}
        Board of managment
      </h2>
      <div className="flex flex-wrap items-center justify-between gap-4">
        {TeamBehind.map((member, index) => (
          <PersonCard
            className={index === 3 ? "md:hidden lg:flex" : ""}
            key={member.id}
            Name={member.name}
            Description={member.designation}
            ImageURL={member.imageUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Page;
