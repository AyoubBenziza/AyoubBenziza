import { Locale } from "@/app/[lang]/dictionaries";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";

type Props = {
  lang: Locale;
  dashboard: any;
};

export function NavMobile({ lang, dashboard }: Props) {
  const navLinks: { name: string; path: string }[] = [
    { name: dashboard.home, path: "/" },
    {
      name: dashboard.about,
      path: "/about",
    },
    {
      name: dashboard.projects,
      path: "/projects",
    },
    {
      name: dashboard.contact,
      path: "/contact",
    },
  ];

  type Props = {
    lang: Locale;
    dashboard: any;
  };
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          name="navMobile"
          aria-label="navMobile"
          variant="outline"
          size="icon"
        >
          <HamburgerMenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col py-4 items-center">
          {navLinks.map((link, index) => {
            return (
              <ul key={index} className="w-full grid justify-items-center">
                <li>
                  <Link href={`/${lang}${link.path}`}>
                    <h3 key={index}>{link.name}</h3>
                  </Link>
                </li>
                <Separator key={index} className="w-1/2 py-1 my-2 rounded" />
              </ul>
            );
          })}
        </nav>
        <SheetFooter>
          <h3 className="text-center">Réalisé avec NextJS</h3>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default NavMobile;
