import { NavLinks } from "@/lib/Data";
import React from "react";
import DropDownMenuNav from "./DropDownMenuNav";
import { Link } from "@/navigation";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between w-full h-16">
      <Link
        href="/"
        className="text-2xl font-semibold text-lime-500 scroll-m-20"
      >
        K Y F Malakand
      </Link>
      <div className="items-center justify-center hidden sm:flex ">
        {NavLinks.map((link, i) => (
          <Link
            href={link.Link}
            key={i}
            className="px-2 text-muted-foreground hover:text-gray-800 w-fit"
          >
            {link.Name}
          </Link>
        ))}
      </div>
      <DropDownMenuNav/>
    </nav>
  );
};

export default NavBar;
