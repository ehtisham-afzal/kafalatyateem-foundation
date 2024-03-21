"use client";
import { cn } from "@/lib/utils";
import { Link } from "@/navigation";
import { usePathname } from "next/navigation";
import React from "react";

type linksProsps = {
  Links: {
    Name: string;
    Link: string;
  }[];
};

const NavBarLinksClient = ({ Links }: linksProsps) => {
  const pathName = usePathname();
  return (
    <>
      {Links.map((link, i) => (
        <Link
          href={link.Link}
          key={i}
          className={cn(
            "px-2 hover:text-gray-800 w-fit",
            pathName.slice(3) == link.Link ? "text-primary hover:text-primary" : "text-muted-foreground"
          )}
        >
          {link.Name}
        </Link>
      ))}
    </>
  );
};

export default NavBarLinksClient;
