import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-start py-1 mx-auto sm:py-8 sm:justify-center sm:px-5 sm:container text-start sm:text-center">
      <Image
        className="object-cover object-center w-4/5 mb-10 rounded lg:w-2/6 md:w-3/6"
        alt="hero"
        height={500}
        width={500}
        src="/Hadith.png"
      />
      <div className="w-full lg:w-2/3">
        <h1 className="mb-4 text-4xl font-extrabold text-gray-900 title-font sm:text-5xl text-primary">
        أَنَا وَكَافِلُ الْيَتِيمِ فِي الْجَنَّةِ هَكَذَا
        </h1>
        <p className="mb-8 text-2xl font-semibold leading-relaxed scroll-m-20 text-muted-foreground">
          The Kafalate e Yateem Center Malakand is a home for orphans, abandoned
          children, and those in need. We provide them with a secure and loving
          environment where they can heal and grow. Our mission is to nurture
          young hearts with hope and compassion. Our center is a sanctuary where
          every child can thrive.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button size="lg" className="w-full text-lg sm:w-40">
            Donate now
          </Button>
          <Button size="lg" variant="outline" className="w-full text-lg sm:w-40">
            Know about us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
