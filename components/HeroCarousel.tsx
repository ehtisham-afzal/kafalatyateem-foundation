"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useRef } from "react";

type ImagesTypes = { id: number; imageUrl: string };

const HeroCarousel = ({ Images }: { Images: ImagesTypes[] }) => {
  const plugin = useRef(Autoplay({ delay: 5000 }));

  return (
    <Carousel
      dir="ltr"
      className="w-full h-[50vh] lg:h-[80vh] flex"
      plugins={[plugin.current]}
      opts={{
        align: "center",
        loop: true,
      }}
    >
      <CarouselContent className="w-full h-full -ml-2 -md:ml-4">
        {Images.map(({ id, imageUrl }) => (
          <CarouselItem className="pl-2 w-full h-full md:pl-4" key={id}>
            <Image
              className="object-cover w-full h-full overflow-hidden rounded-lg"
              src={imageUrl}
              width={1000}
              height={600}
              alt="K Y F Malakand"
            />
          </CarouselItem>
        ))}
        <CarouselItem className="pl-2 w-full h-full md:pl-4">
          <Link href="/Books/40hadiths">
            <Image
              className="object-cover w-full h-full overflow-hidden rounded-lg"
              src="/FarooqiBookCover.jpg"
              width={1000}
              height={600}
              alt="/Iftikhar Farooqi Book cover"
            />
          </Link>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default HeroCarousel;
