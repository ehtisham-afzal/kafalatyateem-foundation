import { NavLinks } from "@/lib/Data";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import DropDownMenuNav from "./DropDownMenuNav";
import LanguageSelector from "./LanguageSelector";
import NavBarLinksClient from "./NavBarLinksClient";

const NavBar = () => {
  const t = useTranslations("NavLinks");
  const TranslatedLinks = NavLinks.map((link) => ({
    ...link,
    Name: t(link.Name),
  }));
  return (
    <nav className="flex items-center justify-between w-full h-16">
      <Link
        href="/"
        className="text-2xl font-semibold text-lime-500 scroll-m-20"
      >
        K Y F Malakand
      </Link>
      <div className="flex gap-1">
        <div className="items-center justify-center hidden sm:flex ">
          <NavBarLinksClient Links={TranslatedLinks} />
        </div>
        <LanguageSelector />
        <DropDownMenuNav />
      </div>
    </nav>
  );
};

export default NavBar;
