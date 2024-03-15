import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <Image
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          height={500}
          width={500}
          src="/heroImage.jpg"
        />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-5xl text-4xl mb-4 font-medium text-gray-900">
            Empowering Orphans, Nurturing Hearts
          </h1>
          <p className="mb-8 leading-relaxed text-xl">
            The Kafalate e Yateem Center Malakand is a home for orphans,
            abandoned children, and those in need. We provide them with a secure
            and loving environment where they can heal and grow. Our mission is
            to nurture young hearts with hope and compassion. Our center is a
            sanctuary where every child can thrive.
          </p>
          <div className="flex justify-center">
            <Button size="lg" className="mx-4 w-32">
              Button
            </Button>
            <Button size="lg" variant="outline" className="w-32">
              Button
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
