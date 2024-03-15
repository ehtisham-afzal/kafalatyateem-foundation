import { GalleryPhotos } from "@/lib/Data";
import Image from "next/image";
import React from "react";

const GallerySection = () => {
  return (
    <section className="w-full space-y-8 md:space-y-12 pb-8">
      <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
        Services & Facilities we Providing{" "}
      </h2>

      <div className=" w-full h-[90vh]  md:h-96 xl:h-[30rem] gap-2 grid grid-cols-2 md:grid-cols-4">
        {GalleryPhotos.map((ele, i) => (
          <Image
            className={`w-full h-full overflow-hidden object-cover ${"col-span-" + ele.colSpan} rounded-lg  `}
            src={ele.src}
            key={i}
            width={300}
            height={150}
            alt={ele.alt}
          />
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
