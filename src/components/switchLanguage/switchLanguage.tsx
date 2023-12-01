"use client";

import { Locale } from "@/app/[lang]/dictionaries";
import { usePathname, useRouter } from "next/navigation";
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
  const pathname = usePathname();
  const router = useRouter();

  const changeLanguage = (lang: Locale) => {
    let url = pathname.substring(pathname.lastIndexOf("/") + 1);
    console.log(url);
    url.length >= 4 ? router.push(`/${lang}/${url}`) : router.push(`/${lang}`);
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
