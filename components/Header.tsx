import { FULL_NAME, NAV_LINKS, SOCIAL_NETWORKS } from "@/lib/config";
import { ToggleThemeButton } from "./ToggleThemeButton";
import { SocialNetworks } from "./atom/SocialNetwork";
import { Navbar } from "./Navbar";

export const Header = () => {
  return (
    <header
      className={
        "fixed w-full flex py-4 mx-auto justify-between bg-background z-10 shadow-lg shadow-primary"
      }
    >
      <span className="hidden sm:block ml-3 text-2xl font-bold">
        {FULL_NAME}
      </span>
      <Navbar navLinks={NAV_LINKS} />
      <div className="inline-flex">
        <SocialNetworks socialNetworks={SOCIAL_NETWORKS} />
        <ToggleThemeButton />
      </div>
    </header>
  );
};
