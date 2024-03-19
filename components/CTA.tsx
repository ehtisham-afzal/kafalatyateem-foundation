import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";

const CTA = () => {
  const t = useTranslations();
  return (
    <div className="relative flex flex-col items-center justify-center w-full gap-4 p-4 overflow-hidden text-center rounded-lg h-fit bg-lime-50">
      <Image
        width={130}
        height={130}
        className="absolute hidden md:block bottom-1 right-4"
        src="/Illustratuion-giving-money.png"
        alt="illustration"
      />
      <Image
        width={130}
        height={130}
        className="hidden md:block absolute -bottom-7 left-4 scale-x-[-1]"
        src="/Illustratuion-giving-money.png"
        alt="illustration"
      />
      <h1 className="text-xl font-semibold tracking-tight scroll-m-20 w-fit text-wrap text-start md:text-center">
        {t("Hadith.Title")}
      </h1>
      <p className="text-wrap italic text-start w-full md:w-[30rem] ">
        {t("Hadith.Content")}
      </p>
      <Button className="w-full md:w-fit" asChild>
        <Link href="/Donate">{t('DonateNow')}</Link>
      </Button>
    </div>
  );
};

export default CTA;
