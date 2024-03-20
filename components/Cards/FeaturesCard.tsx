import { Card, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface ServicesAndFacilitiesType {
  Title: string;
  ImageUrl?: string;
  Description: string;
  className?: string;
}

const FeaturesCard = ({
  ImageUrl,
  Title,
  Description,
  className,
}: ServicesAndFacilitiesType) => {
  // Use the iconName prop to select the correct icon component
  return (
    <Card
      className={cn(
        "flex flex-row-reverse justify-between sm:flex-col w-full h-24  sm:justify-center items-center sm:size-60 gap-5 md:text-center hover:border-primary",
        className
      )}
    >
      {ImageUrl && (
        <Image
          className="pr-2 rtl:pl-2 rtl:md:pl-0 size-16 md:pr-0"
          width={24}
          height={24}
          alt={Title}
          src={ImageUrl}
        />
      )}
      <CardHeader className="items-start px-4 py-2 md:items-center">
        <CardTitle className="text-lg md:text-2xl">{Title}</CardTitle>
        <CardDescription>{Description}</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default FeaturesCard;
