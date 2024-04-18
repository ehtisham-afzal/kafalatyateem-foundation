import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";

const Hero2 = () => {
  const t = useTranslations("HeroSection");
  return (
    <section className="w-full py-4 sm:py-8 lg:py-12">
      <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
        <Image
          alt="YateemsReciewingBags"
          className="hidden object-cover object-bottom h-full mx-auto overflow-hidden lg:block rounded-xl sm:w-full lg:order-last"
          height="310"
          src="/YateemsReciewingBags.jpg"
          width="550"
          draggable="false"
        />
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h1 className="mb-4 text-4xl font-extrabold text-transparent title-font sm:text-5xl bg-clip-text bg-gradient-to-r from-primary to-lime-500">
              Kafalat e yateem foundation
            </h1>
            <p className="mb-8 text-lg font-semibold leading-relaxed scroll-m-20 text-muted-foreground">
              {t("SubTitle")}
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" className="w-full text-lg sm:w-40">
              <Link href="/Donate">{t("Buttons.DonateNow")}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full text-lg sm:w-40"
            >
              <Link href="/About">{t("Buttons.KnowAbouteUs")}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
