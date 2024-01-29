import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  EnvelopeClosedIcon,
} from "@radix-ui/react-icons";
import { HTMLAttributeAnchorTarget } from "react";

export const GITHUB_USERNAME = "AyoubBenziza";

export const EMAIL = "ayoub.cbenziza@gmail.com";

export const FULL_NAME = "Ayoub";

export type SocialNetworksType = {
  url: string;
  name: string;
  icon: React.ReactElement;
  target: HTMLAttributeAnchorTarget;
};

export type NavLinksType = {
  url: string;
  name: string;
};

export const SOCIAL_NETWORKS: SocialNetworksType[] = [
  {
    url: "https://www.linkedin.com/in/ayoub-benziza/",
    name: "Linkedin",
    icon: <LinkedInLogoIcon />,
    target: "_blank",
  },
  {
    url: `https://www.github.com/${GITHUB_USERNAME}`,
    name: "Github",
    icon: <GitHubLogoIcon />,
    target: "_blank",
  },
  {
    url: `mailto:${EMAIL}`,
    name: "Contact",
    icon: <EnvelopeClosedIcon />,
    target: "_self",
  },
];

export const NAV_LINKS: NavLinksType[] = [
  {
    url: "#home",
    name: "Home",
  },
  // {
  //   url: "#about",
  //   name: "About Me",
  // },
  {
    url: "#skills",
    name: "Skills",
  },
  {
    url: "#projects",
    name: "Projects",
  },
  {
    url: "#comments",
    name: "Comments",
  },
  {
    url: "#contact",
    name: "Contact",
  },
];
