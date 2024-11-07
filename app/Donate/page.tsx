import { Metadata } from "next";
import NavLinks from "@/components/DonatePage/NavLinks";

export const metadata: Metadata = {
  title: "Donate Now",
};

export default function DonatePage() {
  return (
    <main className="flex flex-col items-center justify-between gap-8 px-4 py-4 mx-auto sm:container">
      <h1 className="text-3xl font-semibold tracking-tight scroll-m-20 first:mt-0">
        Donate
      </h1>
      <p className="text-center text-muted-foreground">
        Select one of Payment Method first
      </p>
      <NavLinks />
    </main>
  );
}
