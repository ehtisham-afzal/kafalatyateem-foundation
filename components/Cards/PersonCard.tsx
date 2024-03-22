import { Card, CardFooter } from "../ui/card";
import Image from "next/image";

const PersonCard = ({
  Name,
  Description,
  ImageURL,
}: {
  Name: string;
  Description: string;
  ImageURL: string;
}) => {
  return (
    <Card className="flex w-full gap-1 p-2 overflow-hidden text-center md:p-0 md:flex-col md:justify-center md:items-center md:w-48 md:h-64 md:gap-5 hover:border-primary">
      <Image
        className="object-cover size-14 rounded-full md:w-40 md:h-40 "
        width={100}
        height={100}
        alt={Name}
        src={ImageURL}
      />
      <CardFooter className="flex flex-col items-start px-3 py-0 h-fit md:px-6 md:items-center">
        <h4 className="text-lg font-semibold h-fit">{Name}</h4>
        <p className="text-muted-foreground">{Description}</p>
      </CardFooter>
    </Card>
  );
};

export default PersonCard;
