import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

interface HeroComponentProps {
  title: string;
  description: string;
  heroImage: {
    image: string;
    alt: string;
  };
  buttons: {
    text: string;
    href: string;
  }[];
}

const HeroComponent = ({
  title,
  description,
  heroImage,
  buttons,
}: HeroComponentProps) => {
  return (
    <section className="w-full py-4 sm:py-8 lg:py-12">
      <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
        <Image
          alt={heroImage.alt}
          className="hidden object-cover object-bottom h-full mx-auto overflow-hidden lg:block rounded-xl sm:w-full lg:order-last"
          height="310"
          src={heroImage.image}
          width="550"
          draggable="false"
        />
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h1 className="mb-4 text-4xl font-extrabold text-transparent title-font sm:text-5xl bg-clip-text bg-gradient-to-r from-primary to-lime-500">
              {title}
            </h1>
            <p className="mb-8 text-lg font-semibold leading-relaxed scroll-m-20 text-muted-foreground">
              {description}
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            {buttons.map((button, index) => (
              <Button
                asChild
                size="lg"
                variant={index === 0 ? "default" : "outline"}
                className={
                  index === 0
                    ? "w-full text-lg sm:w-40"
                    : "w-full text-lg sm:w-40"
                }
                key={button.href}
              >
                <Link href={button.href}>{button.text}</Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroComponent;
