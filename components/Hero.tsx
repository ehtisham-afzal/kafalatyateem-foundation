import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="flex relative flex-col items-center rtl:min-h-[80vh] justify-start py-1 mx-auto sm:min-h-[90vh] sm:py-8 sm:justify-center sm:px-5 sm:container text-start sm:text-center">
      <Image
        className="absolute object-cover object-center w-auto h-screen opacity-25 -z-10"
        alt="hero"
        height={500}
        width={500}
        src="/HeroSectionIllustration.png"
      />
      <div className="w-full lg:w-2/3">
        <h1 className="mb-4 text-4xl font-extrabold text-gray-900 title-font sm:text-5xl">
          <span className="pr-2 text-muted-foreground">
            Prophet <span className="font-normal">(ﷺ)</span> said
          </span>
          I and the one who takes care of an orphan will be in Paradise like this ✌🏿
        </h1>
        <p className="mb-8 text-2xl font-semibold leading-relaxed scroll-m-20 text-muted-foreground">
          The Kafalate e Yateem Center Malakand is a home for orphans, abandoned children, and those in need. We provide them with a secure and loving environment where they can heal and grow. Our mission is to nurture young hearts with hope and compassion. Our center is a sanctuary where every child can thrive.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="w-full text-lg sm:w-40">
            <Link href="/Donate">Donate now</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full text-lg sm:w-40"
          >
            <Link href="/About">Know about us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
