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

const DropDownMenuNav = () => {
  return (
    <div className="pt-2 sm:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Menu />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel className="text-xl">Go to</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <Link href="/">
            <DropdownMenuItem className="pr-16 text-lg">Home</DropdownMenuItem>
          </Link>
          {NavLinks.map((link, i) => (
            <Link key={i} href={link.Link}>
              <DropdownMenuItem className="pr-16 text-lg">
                {link.Name}
              </DropdownMenuItem>
            </Link>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DropDownMenuNav;
