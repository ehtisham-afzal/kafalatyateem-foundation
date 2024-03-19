import { BookText, School, IceCream2, Shirt, Moon, } from "lucide-react"; // Import the icons you plan to use
import { Card, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { cn } from "@/lib/utils";

 interface ServicesAndFacilitiesType {
  Title: string,
  IconName?: keyof typeof iconComponents,
  Description: string,
  className?: string
}

// Create a mapping of icon names to components
const iconComponents = {
  BookText,
  School,
  Shirt,
  IceCream2,
  Moon,
};

const FeaturesCard = ({
  IconName,
  Title,
  Description,
  className,
}: ServicesAndFacilitiesType) => {
  // Use the iconName prop to select the correct icon component
  const IconComponent = iconComponents[IconName ? IconName : "BookText"];
  return (
    <Card
      className={cn(
        "flex flex-row-reverse justify-between sm:flex-col w-full h-24  sm:justify-center items-center sm:size-60 gap-5 md:text-center hover:border-primary",
        className
      )}
    >
      {IconName && <IconComponent className="pr-2 rtl:pl-2 rtl:md:pl-0 size-16 md:pr-0" />}
      <CardHeader className="items-start px-4 py-2 md:items-center">
        <CardTitle className="text-lg md:text-2xl">
          {Title}
        </CardTitle>
        <CardDescription>{Description}</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default FeaturesCard;
