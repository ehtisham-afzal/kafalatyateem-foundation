import { cn } from "@/lib/utils";
import { Card, CardFooter } from "../ui/card";
import Image from "next/image";

const PersonCard = ({
  Name,
  Description,
  ImageURL,
  className
}: {
  className? : string
  Name: string;
  Description: string;
  ImageURL: string;
}) => {
  return (
    <Card className={cn("flex w-full gap-1 p-2 overflow-hidden text-center sm:p-0 sm:flex-col sm:justify-center sm:items-center sm:w-48 sm:h-64 sm:gap-5 hover:border-primary",
    className)}>
      <Image
        className="object-cover size-14 rounded-full sm:w-40 sm:h-40 "
        width={100}
        height={100}
        alt={Name}
        src={ImageURL}
      />
      <CardFooter className="flex flex-col items-start px-3 py-0 h-fit sm:px-6 sm:items-center">
        <h4 className="text-lg font-semibold h-fit">{Name}</h4>
        <p className="text-muted-foreground">{Description}</p>
      </CardFooter>
    </Card>
  );
};

export default PersonCard;
