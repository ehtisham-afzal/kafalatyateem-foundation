import { Languages } from "lucide-react";
import LanguageSelectorMenu from "./LanguageSelectorMenu";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "./ui/dropdown-menu";

const LocalsMenus = [
  { local: "en", name: "English" },
  { local: "ar", name: "العربية"},
];

const LanguageSelector = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="p-1">
          <p className="px-2 text-base sm:text-muted-foreground">Language</p>
          <Languages />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Select Language</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <LanguageSelectorMenu Languages={LocalsMenus} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
