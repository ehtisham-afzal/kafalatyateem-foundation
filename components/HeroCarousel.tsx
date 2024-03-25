"use client";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "@/components/ui/carousel";
import { GalleryPhotos } from "@/lib/Data";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useRef } from "react";

const HeroCarousel = () => {
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
        {GalleryPhotos.map(({ src, alt }, i) => (
          <CarouselItem className="pl-2 md:pl-4" key={i}>
            <Image
              className="object-cover w-full h-full overflow-hidden rounded-lg"
              src={src}
              key={alt}
              width={300}
              height={150}
              alt={alt}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious  />
      <CarouselNext />
    </Carousel>
  );
};

export default HeroCarousel;
