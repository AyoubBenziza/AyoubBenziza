import { NavLinksType } from "@/lib/config";
import { Button, buttonVariants } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

export const Navbar = ({ navLinks }: { navLinks: NavLinksType[] }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="ml-1" variant="outline">
          Menu
        </Button>
      </SheetTrigger>
      <SheetContent side="top">
        <SheetHeader>
          <SheetTitle className="self-center underline">Navigation</SheetTitle>
        </SheetHeader>
        <ul className="w-full flex flex-col md:flex-row justify-around">
          {navLinks.map(({ url, name }, index) => (
            <a
              href={url}
              key={index}
              className={buttonVariants({ variant: "ghost" })}
            >
              {name}
            </a>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
};
