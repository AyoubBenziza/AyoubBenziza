"use client";

import { Locale } from "@/app/[lang]/dictionaries";
import { useRouter } from "next/navigation";
import { FC } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

type Props = {
  lang: Locale;
  t: any;
};

const SwitchLanguage: FC<Props> = ({ lang, t }) => {
  const router = useRouter();
  const changeLanguage = (lang: Locale) => {
    router.push(`/${lang}`);
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{lang.toUpperCase()}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{t.languages}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => changeLanguage("fr")}>
          FR
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage("en")}>
          EN
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SwitchLanguage;
