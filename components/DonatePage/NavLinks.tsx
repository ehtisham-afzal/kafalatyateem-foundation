"use client";

import { cn } from "@/lib/utils";
import { Link, usePathname } from "@/navigation";
import { CreditCard } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";

const links = [
  {
    name: "Pay via card online",
    href: "/Donate/PayViaCardOnline",
    iconUrl: "/Icons/CreditCard.svg",
  },
  {
    name: "Direct bank transfer",
    href: "/Donate/DirectBankTransfer",
    iconUrl: "/Icons/SmartPhone.svg",
  },
  { name: "Paypal", href: "/Donate/Paypal", iconUrl: "/Icons/Paypal.svg" },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <div
      className="grid grid-cols-2 gap-4 mb-4 sm:grid-cols-3 grid-flow-dense"
      dir="ltr"
    >
      {links.map((link) => {
        return (
          <Button
            key={link.name}
            className={cn(
              "flex flex-col items-center justify-center p-4 space-y-2 border rounded-md h-fit min-w-20",
              pathname === link.href ? "border-primary" : ""
            )}
            variant="outline"
            asChild
          >
            <Link key={link.name} href={link.href}>
              <Image
                className="size-8 sm:size-12"
                src={link.iconUrl}
                alt={link.name}
                width={24}
                height={24}
              />
              <p className="w-full text-center text-wrap sm:text-base">{link.name}</p>
            </Link>
          </Button>
        );
      })}
    </div>
  );
}
