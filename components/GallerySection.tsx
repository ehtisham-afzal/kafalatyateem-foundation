import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type GallerySectionProps = {
  images: {
    url: string;
    alt: string;
  }[];
};

const GallerySection = ({ images }: GallerySectionProps) => {
  return (
    <section className="w-full pb-8 space-y-8 md:space-y-12">
      <div className="w-full h-[90vh] md:h-[26rem] xl:h-[34rem] gap-2 grid grid-cols-2 md:grid-cols-4 md:row-span-2">
        {images.map(({ url, alt }, i) => (
          <Image
            className={cn(
              "w-full h-full overflow-hidden object-cover rounded-lg",
              "col-span-",
              (i === 0 || i === 5) && "col-span-2"
            )}
            src={url}
            key={alt}
            width={300}
            height={150}
            alt={alt}
          />
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
