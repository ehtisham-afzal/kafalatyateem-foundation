"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useRef } from "react";

type Image = { id: number; imageUrl: string };

const HeroCarousel = ({ Images } : {Images : Image[]}) => {
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
      //   onMouseEnter={plugin.current.stop}
      //   onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="w-full h-full -ml-2 -md:ml-4">
        {Images.map(({ id, imageUrl }) => (
          <CarouselItem className="pl-2 w-full h-full md:pl-4" key={id}>
            <Image
              className="object-cover w-full h-full overflow-hidden rounded-lg"
              src={imageUrl}
              // We can't use fill mode bcz its coroasual
              // fill
              width={600}
              height={300}
              // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 33vw"
              alt="K Y F Malakand"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default HeroCarousel;
