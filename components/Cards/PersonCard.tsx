import { cn } from "@/lib/utils";
import Image from "next/image";
import { Card, CardFooter } from "../ui/card";

const PersonCard = ({
  Name,
  Description,
  ImageURL,
  className,
}: {
  className?: string;
  Name: string;
  Description: string;
  ImageURL: string;
}) => {
  return (
    <Card
      className={cn(
        "flex w-full  gap-1 p-2 overflow-hidden text-center sm:p-0 sm:flex-col sm:justify-center sm:items-center sm:w-48 sm:h-fit sm:py-2 sm:gap-5 hover:border-primary",
        className
      )}
    >
      {ImageURL ? (
        <Image
          className="object-cover bg-gray-100 rounded-full size-14 sm:size-40"
          width={100}
          height={100}
          alt={Name}
          src={ImageURL}
        />
      ) : (
        <span className="flex items-center justify-center bg-gray-100 rounded-full sm:text-4xl size-14 sm:size-40">
          {Name.toUpperCase().substring(0, 2)}
        </span>
      )}
      <CardFooter className="flex flex-col items-start px-3 py-0 h-fit sm:px-6 sm:items-center">
        <h4 className="text-lg font-semibold h-fit">{Name}</h4>
        <p className="text-muted-foreground">{Description}</p>
      </CardFooter>
    </Card>
  );
};

export default PersonCard;
