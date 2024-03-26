import { PersonStanding, User2, Users } from "lucide-react";
import { Separator } from "./ui/separator";

const OrphansInfoMobile = () => {
  return (
    <div className="flex items-center h-36 sm:hidden">
      <div className="flex flex-col items-center justify-center gap-2 text-center text-card-foreground">
        <Users className="size-8" />
        <div className="flex flex-col space-y-1.5 p-6 h-fit py-0">
          <p className="text-4xl font-normal h-fit">120</p>
          <p className="text-sm text-muted-foreground">Male&amp;Female</p>
        </div>
      </div>
      <Separator orientation="vertical" className=" h-1/2" />
      <div className="flex flex-col items-center justify-center gap-2 text-center text-card-foreground">
        <PersonStanding className="size-8" />
        <div className="flex flex-col space-y-1.5 p-6 h-fit py-0">
          <p className="text-4xl font-normal h-fit">85</p>
          <p className="text-sm text-muted-foreground">Male</p>
        </div>
      </div>
      <Separator orientation="vertical" className=" h-1/2" />
      <div className="flex flex-col items-center justify-center gap-2 text-center text-card-foreground">
        <User2 className="size-8" />
        <div className="flex flex-col space-y-1.5 p-6 h-fit py-0">
          <p className="text-4xl font-normal h-fit">35</p>
          <p className="text-sm text-muted-foreground">Female</p>
        </div>
      </div>
    </div>
  );
};

export default OrphansInfoMobile;
