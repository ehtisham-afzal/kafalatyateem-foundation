import { Languages } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Button } from "./ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const LanguageSelector = () => {
  const t = useTranslations("ChangeLanguageDropdown");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="p-1">
          <p className="px-2 text-base">{t("Language")}</p>
          <Languages />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{t("SelectLanguage")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link locale="en" href="/en">
            English
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link locale="ar" href="/ar">
            {t("Arbic")}
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
