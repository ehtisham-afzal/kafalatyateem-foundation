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
import Link from "next/link";
import { Button } from "./ui/button";

const DropDownMenuNav = () => {
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

  return (
    <div className="flex items-center sm:hidden">
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
              Home
            </DropdownMenuItem>
          </Link>
          {NavLinks.map((link, i) => (
            <Link key={i} href={link.Link}>
              <DropdownMenuItem className="pr-16 text-lg">
                {getNavLinkName(link.Name)}
              </DropdownMenuItem>
            </Link>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DropDownMenuNav;
