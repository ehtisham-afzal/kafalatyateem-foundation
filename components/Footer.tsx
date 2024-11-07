import { NavLinks, SocialLinks } from "@/lib/Data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const getNavLinkName = (name: string) => {
    const names = {
      "About": "About us",
      "Donate": "Donate",
      "TeamBehind": "Team Behind",
      "Services": "Services",
      "Contact": "Contact",
      "Home": "Home"
    };
    return names[name as keyof typeof names] || name;
  };

  const getSocialName = (name: string) => {
    return name === "Facebook" ? "Facebook" : "Youtube";
  };

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
              Navigation
            </h2>
            <nav className="flex flex-col pr-3 mb-10">
              {NavLinks.map((link, i) => (
                <Link
                  href={link.Link}
                  key={i}
                  className="text-lg text-muted-foreground hover:text-gray-800"
                >
                  {getNavLinkName(link.Name)}
                </Link>
              ))}
            </nav>
          </div>
          <div className="w-fit">
            <h2 className="mb-3 text-xl font-medium tracking-widest text-gray-900 title-font">
              Socials
            </h2>
            <nav className="flex flex-col pr-3 mb-10">
              {SocialLinks.map((link, i) => (
                <a
                  href={link.IdURL}
                  key={i}
                  className="text-lg text-muted-foreground hover:text-gray-800"
                  target="__blank"
                >
                  {getSocialName(link.Name)}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <p className="py-3 text-base text-center text-muted-foreground sm:text-left">
        © 2024 Kafalat e yateem foundation malakand All Rights Reserved | Designed and devoloped by
        <a
          href="https://ehtisham.dev"
          className="ml-1 underline"
          target="__blank"
        >
          Ehtisham Afzal
        </a>
      </p>
    </footer>
  );
};

export default Footer;
