import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const CTA = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full gap-4 p-4 overflow-hidden text-center rounded-lg text-secondary h-fit bg-gradient-to-t from-primary to-gray-900">
      <Image
        width={130}
        height={130}
        className="absolute hidden md:block bottom-1 right-4"
        src="/Illustratuion-giving-money.png"
        alt="illustration"
      />
      <Image
        width={130}
        height={130}
        className="hidden md:block absolute -bottom-7 left-4 scale-x-[-1]"
        src="/Illustratuion-giving-money.png"
        alt="illustration"
      />
      <h3 className="text-xl font-semibold tracking-tight scroll-m-20 w-fit text-wrap text-start md:text-center">
        The Prophet Muhammad (peace be upon him) said
      </h3>
      <p className="text-wrap italic text-start w-full md:w-[30rem]">
        &ldquo;Whoever embraces an orphan of two Muslim parents by feeding him and giving him drink until he is independent of him, Paradise will certainly be necessary for him.&rdquo;(Musnad Ahmad)
      </p>
      <Button className="w-full md:w-fit" variant="secondary" asChild>
        <Link href="/Donate">Donate Now</Link>
      </Button>
    </div>
  );
};

export default CTA;
