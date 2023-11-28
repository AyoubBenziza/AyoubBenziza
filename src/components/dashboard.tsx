"use client";

import Link from "next/link";
import * as React from "react";
import "./dashboard.css";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

import { Locale } from "@/app/[lang]/dictionaries";
import NavMobile from "./navMobile";
import SwitchLanguage from "./switchLanguage/switchLanguage";
import { ModeToggle } from "./theme/modeToggle";

type Props = {
  lang: Locale;
  t: any;
};

export function Dashboard({ lang, t }: Props) {
  return (
    <nav className="w-full sticky top-0 z-10 flex justify-between items-center pl-6 pr-1 py-2 bg-background">
      <h1>Ayoub</h1>
      <NavigationMenu className="hidden md:flex lg:flex">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href={`/${lang}`} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {t.dashboard.home}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href={`/${lang}/about`} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {t.dashboard.about}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href={`/${lang}/projects`} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {t.dashboard.projects}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href={`/${lang}/contact`} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {t.dashboard.contact}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <NavigationMenu>
        <ul className="list-none flex space-x-1">
          <NavigationMenuItem>
            <SwitchLanguage lang={lang} t={t} />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <ModeToggle t={t} />
          </NavigationMenuItem>
          <NavigationMenuItem className="md:hidden lg:hidden">
            <NavMobile lang={lang} dashboard={t.dashboard} />
          </NavigationMenuItem>
        </ul>
      </NavigationMenu>
    </nav>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
