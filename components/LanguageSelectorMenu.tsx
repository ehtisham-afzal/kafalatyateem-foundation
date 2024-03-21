"use client";

import { usePathname, useRouter } from "../navigation";
import { DropdownMenuItem } from "./ui/dropdown-menu";

type LanguageProps = {
  Languages: {
    name: string;
    local: string;
  }[];
};

const LanguageSelectorMenu = ({ Languages }: LanguageProps) => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <>
      {Languages.map(({ name, local }) => (
        <DropdownMenuItem
          key={name}
          onClick={() => router.replace(pathname, { locale: local })}
          className="capitalize"
        >
          {name}
        </DropdownMenuItem>
      ))}
    </>
  );
};

export default LanguageSelectorMenu;
