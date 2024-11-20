import { NavLinks } from "@/lib/Data";
import Link from "next/link";
import DropDownMenuNav from "./DropDownMenuNav";
import NavBarLinksClient from "./NavBarLinksClient";

const NavBar = () => {
  const TranslatedLinks = NavLinks.map((link) => ({
    ...link,
    Name: link.Name === "About" ? "About us" :
         link.Name === "Donate" ? "Donate" :
         link.Name === "TeamBehind" ? "Team Behind" :
         link.Name === "Services" ? "Services" :
         link.Name === "Contact" ? "Contact" :
         link.Name === "Home" ? "Home" : link.Name
  }));

  return (
    <nav className="flex items-center justify-between w-full h-16">
      <Link
        href="/"
        className="text-2xl font-semibold text-primary scroll-m-20"
      >
        K Y F Malakand
      </Link>
      <div className="flex gap-1">
        <div className="items-center justify-center hidden sm:flex ">
          <NavBarLinksClient Links={TranslatedLinks} />
        </div>
        <DropDownMenuNav />
      </div>
    </nav>
  );
};

export default NavBar;
