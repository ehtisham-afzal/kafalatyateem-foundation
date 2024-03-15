import { Book, Home, IceCream2, Shirt, Moon } from "lucide-react"; // Import the icons you plan to use
import { Card, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { ServicesAndFacilitiesType } from "@/lib/Data";

// Create a mapping of icon names to components
const iconComponents = {
  Book,
  Home,
  Shirt,
  IceCream2,
  Moon,
};

const FeaturesCard = ({
  IconName,
  Title,
  Description,
}: ServicesAndFacilitiesType) => {
  // Use the iconName prop to select the correct icon component
  const IconComponent = iconComponents[IconName ? IconName : "Book"];
  return (
    <Card className="flex flex-row-reverse justify-between md:flex-col w-full h-24  md:justify-center items-center md:size-60 gap-5 md:text-center hover:border-primary">
      {IconName && <IconComponent className="size-16 pr-2 md:pr-0" />}
      <CardHeader className="py-2 items-start md:items-center">
        <CardTitle className="font-normal text-lg md:text-2xl">{Title}</CardTitle>
        <CardDescription>{Description}</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default FeaturesCard;
