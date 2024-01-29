import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { SocialNetworksType } from "@/lib/config";
import clsx from "clsx";

export const SocialNetworks = ({
  socialNetworks,
}: {
  socialNetworks: SocialNetworksType[];
}) => {
  return (
    <div className={clsx("flex space-x-1")}>
      {socialNetworks.map(({ url, name, icon, target }, index) => (
        <TooltipProvider key={index}>
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                key={url}
                href={url}
                aria-label={name}
                target={target}
                className={
                  "text-primary text flex items-center text-base" +
                  buttonVariants({ variant: "ghost" })
                }
              >
                {icon}
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>{name}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  );
};
