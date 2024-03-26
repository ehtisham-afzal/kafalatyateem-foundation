import PersonCard from "./Cards/PersonCard";
import { Link } from "../navigation";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { TeamBehind } from "@/lib/Data";

const TeamBehindSection = () => {
  const t = useTranslations();
  return (
    <section className="w-full space-y-8 md:space-y-12">
      <div className="flex items-center justify-between w-full h-fit">
        <h2 className="text-3xl font-semibold tracking-tight scroll-m-20 first:mt-0">
          {t("TeamBehindSection.Title")}
        </h2>
        <Link
          href="/TeamBehind"
          className="items-center hidden gap-1 text-xl font-semibold tracking-tight sm:flex group text-muted-foreground scroll-m-20 first:mt-0 hover:text-primary"
        >
          {t("TeamBehindSection.SeeAll")}{" "}
          <ArrowRight className="p-0.5 transition-transform group-hover:translate-x-2 rtl:group-hover:-translate-x-2 rtl:rotate-180" />
        </Link>
      </div>

      <div className="flex flex-wrap items-center justify-between w-full gap-4 pb-8">
        {TeamBehind.map(
          (member, index) =>
            index < 4 && (
              <PersonCard
                className={index === 3 ? "md:hidden lg:flex" : ""}
                key={member.Name}
                Name={member.Name}
                Description={member.Designation}
                ImageURL={member.ImageUrl}
              />
            )
        )}

        <Link
          href="/TeamBehind"
          className="flex items-center justify-center w-full p-4 overflow-hidden border rounded-lg shadow-sm h-fit sm:hidden hover:border-primary bg-card"
        >
          <p>{t("TeamBehindSection.ReadMore")}</p>
        </Link>
      </div>
    </section>
  );
};

export default TeamBehindSection;
