import { cn } from "@/lib/utils";
import { Card, CardFooter } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

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
      <Avatar className="object-cover rounded-full size-14 sm:size-40 ">
        <AvatarImage
          className="object-cover"
          width={100}
          height={100}
          alt={Name}
          src={ImageURL}
        />
        <AvatarFallback className="sm:text-4xl">
          {Name.toUpperCase().substring(0, 2)}
        </AvatarFallback>
      </Avatar>
      {/* <Image
        className="object-cover bg-gray-100 rounded-full size-14 sm:size-40"
        width={100}
        height={100}
        alt={Name}
        src={ImageURL}
      /> */}
      <CardFooter className="flex flex-col items-start px-3 py-0 h-fit sm:px-6 sm:items-center">
        <h4 className="text-lg font-semibold h-fit">{Name}</h4>
        <p className="text-muted-foreground">{Description}</p>
      </CardFooter>
    </Card>
  );
};

export default PersonCard;
