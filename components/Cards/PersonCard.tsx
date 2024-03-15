import {
  Card, CardFooter
} from "../ui/card";
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
    <Card className="flex w-full p-2 md:p-0  md:flex-col md:justify-center md:items-center overflow-hidden md:w-48 md:h-64 gap-1 md:gap-5 text-center hover:border-primary">
      <Image
        className="h-16 w-16 md:w-40 md:h-40 object-cover rounded-full "
        width={100}
        height={100}
        alt={Name}
        src={ImageURL}
      />
      <CardFooter className="flex flex-col h-fit px-3 md:px-6 py-0 items-start md:items-center">
      <h4 className="text-lg font-semibold h-fit">{Name}</h4>
        {Description}</CardFooter>
    </Card>
  );
};

export default PersonCard;
