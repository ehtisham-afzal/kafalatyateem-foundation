"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Pay via card online",
    href: "/Donate/PayViaCardOnline",
    iconUrl: "/Icons/CreditCard.svg",
  },
  {
    name: "via bank transfer",
    href: "/Donate/DirectBankTransfer",
    iconUrl: "/Icons/SmartPhone.svg",
  },
  {
    name: "Easypaise / Jazzcash",
    href: "/Donate/MicroFinance",
    iconUrl: "/Icons/SmartPhone.svg",
  },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <div
      className="grid grid-cols-2 gap-4 sm:gap-8 mb-4 sm:grid-cols-3 grid-flow-dense"
      dir="ltr"
    >
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            className={cn(
              "whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-background hover:bg-accent hover:text-accent-foreground flex flex-col items-center justify-center p-4 space-y-2 border rounded-md h-full min-w-20",
              pathname === link.href ? "border-primary bg-accent" : "",
            )}
            href={link.href}
          >
            <Image
              className="size-8 sm:size-12"
              src={link.iconUrl}
              alt={link.name}
              width={24}
              height={24}
            />
            <p className="w-full text-center text-wrap sm:text-base">
              {link.name}
            </p>
          </Link>
        );
      })}
    </div>
  );
}
