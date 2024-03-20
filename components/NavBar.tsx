import { NavLinks } from "@/lib/Data";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import DropDownMenuNav from "./DropDownMenuNav";
import LanguageSelector from "./LanguageSelector";

const NavBar = () => {
  const t = useTranslations("NavLinks");
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
        {NavLinks.map((link, i) => (
          <Link
            href={link.Link}
            key={i}
            className="px-2 text-muted-foreground hover:text-gray-800 w-fit"
          >
            {t(link.Name)}
          </Link>
        ))}
      </div>
      <LanguageSelector />
      <DropDownMenuNav /></div>
    </nav>
  );
};

export default NavBar;
