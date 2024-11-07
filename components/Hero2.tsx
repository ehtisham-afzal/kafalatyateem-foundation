import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

const Hero2 = () => {
  return (
    <section className="w-full py-4 sm:py-8 lg:py-12">
      <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
        <Image
          alt="YateemsReciewingBags"
          className="hidden object-cover object-bottom h-full mx-auto overflow-hidden lg:block rounded-xl sm:w-full lg:order-last"
          height="310"
          src="/YateemsReciewingBags.jpg"
          width="550"
          draggable="false"
        />
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h1 className="mb-4 text-4xl font-extrabold text-transparent title-font sm:text-5xl bg-clip-text bg-gradient-to-r from-primary to-lime-500">
              Kafalat e yateem foundation
            </h1>
            <p className="mb-8 text-lg font-semibold leading-relaxed scroll-m-20 text-muted-foreground">
              The Kafalate e Yateem Center Malakand is a home for orphans, abandoned children, and those in need. We provide them with a secure and loving environment where they can heal and grow. Our mission is to nurture young hearts with hope and compassion. Our center is a sanctuary where every child can thrive.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" className="w-full text-lg sm:w-40">
              <Link href="/Donate">Donate now</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full text-lg sm:w-40"
            >
              <Link href="/About">Know about us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
