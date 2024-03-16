import React from "react";
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
        <DropdownMenuLabel>Navigation</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {NavLinks.map((link, i) => (
          <DropdownMenuItem key={i}>
            <Link href={link.Link}>{link.Name}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu></div>
  );
};

export default DropDownMenuNav;
