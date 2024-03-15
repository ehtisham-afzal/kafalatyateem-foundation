import React, { ReactNode } from "react";
import { Card, CardDescription, CardHeader } from "../ui/card";

const StatisticsCard = ({
  children,
  Title,
  Description,
}: {
  children: ReactNode;
  Title: string;
  Description: string;
}) => {
  return (
    <Card className="flex flex-col justify-center items-center size-44 md:size-52 gap-5 text-center hover:border-primary">
      <div className="size-16">{children}</div>
      <CardHeader className="h-fit py-0">
        <p className="font-normal text-4xl md:text-5xl h-fit">{Title}</p>
        <CardDescription>{Description}</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default StatisticsCard;
