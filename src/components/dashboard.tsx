"use client";

import Link from "next/link";
import * as React from "react";
import "./dashboard.css";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Cross1Icon, PersonIcon } from "@radix-ui/react-icons";

import { Locale } from "@/app/[lang]/dictionaries";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import SwitchLanguage from "./switchLanguage/switchLanguage";
import { ModeToggle } from "./theme/modeToggle";
import NavMobile from "./navMobile";

const components: { title: string; href: string; description: string }[] = [
  //   {
  //     title: "Alert Dialog",
  //     href: "projects",
  //     description:
  //       "A modal dialog that interrupts the user with important content and expects a response.",
  //   },
  //   {
  //     title: "Hover Card",
  //     href: "/docs/primitives/hover-card",
  //     description:
  //       "For sighted users to preview content available behind a link.",
  //   },
  //   {
  //     title: "Progress",
  //     href: "/docs/primitives/progress",
  //     description:
  //       "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  //   },
  //   {
  //     title: "Scroll-area",
  //     href: "/docs/primitives/scroll-area",
  //     description: "Visually or semantically separates content.",
  //   },
  //   {
  //     title: "Tabs",
  //     href: "/docs/primitives/tabs",
  //     description:
  //       "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  //   },
  //   {
  //     title: "Tooltip",
  //     href: "/docs/primitives/tooltip",
  //     description:
  //       "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  //   },
];

type Props = {
  lang: Locale;
  t: any;
};

export function Dashboard({ lang, t }: Props) {
  return (
    <nav className="w-full sticky top-0 flex justify-between items-center pl-6 pr-1 py-2">
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
            <NavigationMenuTrigger>{t.dashboard.about}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href={`/${lang}/about`}
                    >
                      <PersonIcon className="h-6 w-6" />
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Profile
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        My Resume
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href={`/${lang}/about`} title="Compétences">
                  Toutes les compétences et technologies acquises
                </ListItem>
                <ListItem href={`/${lang}/about`} title="Parcours">
                  Tous mes formations et diplômes acquis
                </ListItem>
                <ListItem href={`/${lang}/about`} title="Expériences">
                  Toutes mes expériences professionnelles
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              {t.dashboard.projects}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              {components.length ? (
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={`/${lang}/${component.href}`}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              ) : (
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] lg:w-[600px]">
                  <Alert>
                    <Cross1Icon className="h-6 w-6" />
                    <AlertTitle>No Projects</AlertTitle>
                    <AlertDescription>
                      Il n'y a actuellement pas encore de projets
                    </AlertDescription>
                  </Alert>
                </ul>
              )}
            </NavigationMenuContent>
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
      <NavigationMenu className="space-x-1">
        <NavigationMenuItem>
          <SwitchLanguage lang={lang} t={t} />
        </NavigationMenuItem>
        <NavigationMenuItem>
          <ModeToggle t={t} />
        </NavigationMenuItem>
        <NavigationMenuItem className="md:hidden lg:hidden">
          <NavMobile lang={lang} dashboard={t.dashboard} />
        </NavigationMenuItem>
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
