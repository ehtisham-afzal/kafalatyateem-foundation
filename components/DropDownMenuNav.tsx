import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Menu } from "lucide-react";
import { NavLinks } from "@/lib/Data";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import { Button } from "./ui/button";

const DropDownMenuNav = () => {
  const t = useTranslations("NavLinks");
  return (
    <div className=" sm:hidden flex items-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="p-1">
            <Menu />
            <p className="sr-only">Menus</p>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel className="text-xl">Go to</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <Link href="/">
            <DropdownMenuItem className="pr-16 text-lg">
              {t("Home")}
            </DropdownMenuItem>
          </Link>
          {NavLinks.map((link, i) => (
            <Link key={i} href={link.Link}>
              <DropdownMenuItem className="pr-16 text-lg">
                {t(link.Name)}
              </DropdownMenuItem>
            </Link>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DropDownMenuNav;
