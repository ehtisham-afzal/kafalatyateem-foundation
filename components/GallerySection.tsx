import { GalleryPhotos } from "@/lib/Data";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const GallerySection = () => {
  return (
    <section className="w-full pb-8 space-y-8 md:space-y-12">
      {/* <h2 className="text-3xl font-semibold tracking-tight scroll-m-20 first:mt-0">
        Gallery
      </h2> */}

      <div className=" w-full h-[90vh]  md:h-96 xl:h-[30rem] gap-2 grid grid-cols-2 md:grid-cols-4 md:row-span-2">
        {GalleryPhotos.map(({ src, alt, colSpan }, i) => (
          <Image
            className={cn(
              "w-full h-full overflow-hidden object-cover  rounded-lg",
              "col-span-" + colSpan,
              i == 0 && "col-span-2"
            )}
            src={src}
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
