import { NavLinks, SocialLinks } from "@/lib/Data";
import { useTranslations } from "next-intl";
import Image from "next/image";
import {Link} from "@/navigation";
import React from "react";

const Footer = () => {
  const f = useTranslations()
  const t  = useTranslations("NavLinks")
  return (
    <footer className="w-full text-muted-foreground body-font">
      <div className="flex flex-wrap items-center justify-center py-4 mx-auto md:justify-between">
        <Image
          className="w-4/5 md:size-40"
          width={150}
          height={150}
          src="/KafalatEYateemLogo.png"
          alt="Kafalt yateem foundataion malakand logo"
        />
        <div className="flex justify-between w-full p-8 md:gap-12 md:w-fit h-fit">
          <div className="w-fit">
            <h2 className="mb-3 text-xl font-medium tracking-widest text-gray-900 title-font">
              {t('NavigationTitle')}
            </h2>
            <nav className="flex flex-col pr-3 mb-10">
              {NavLinks.map((link, i) => (
                <Link
                  href={link.Link}
                  key={i}
                  className="text-lg text-muted-foreground hover:text-gray-800"
                >
                  {t(link.Name)}
                </Link>
              ))}
            </nav>
          </div>
          <div className="w-fit">
            <h2 className="mb-3 text-xl font-medium tracking-widest text-gray-900 title-font">
              {t('Socials.NavigationTitle')}
            </h2>
            <nav className="flex flex-col pr-3 mb-10">
              {SocialLinks.map((link, i) => (
                <a
                  href={link.IdURL}
                  key={i}
                  className="text-lg text-muted-foreground hover:text-gray-800"
                  target="__blank"
                >
                 {t(`Socials.${link.Name}`)}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <p className="py-3 text-base text-center text-muted-foreground sm:text-left">
        {f("FooterRightsText")}
        <a
          href="https://ehtisham.dev"
          className="ml-1 underline"
          target="__blank"
        >
          {f('ehtisham-afzal')}
        </a>
      </p>
    </footer>
  );
};

export default Footer;
