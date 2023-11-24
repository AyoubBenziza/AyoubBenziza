"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/utils/reveal";
import {
  DownloadIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  PaperPlaneIcon,
} from "@radix-ui/react-icons";
import { TypeAnimation } from "react-type-animation";
import { Locale, getDictionary } from "./dictionaries";
import Link from "next/link";
import PixelBackground from "@/components/pixelBackground";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const t = (await getDictionary(lang)).home;

  return (
    <section className="w-full h-full flex flex-col items-center md:flex-row lg:flex-row justify-evenly">
      <div className="w-full md:w-1/2 lg:w-1/2 flex flex-col items-center md:items-start lg:items-start md:justify-start lg:justify-start">
        <Reveal>
          <h1 className="h-full text-xl sm:text-5xl md:text-4xl lg:text-6xl font-extrabold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-purple-500">
              {t.welcome}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Ayoub",
                1000,
                t.job,
                1000,
                t.nationality,
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{
                display: "inline-block",
              }}
              repeat={Infinity}
            />
          </h1>
        </Reveal>
        <Reveal>
          <h3 className="w-full text-xs my-2 sm:text-xl lg:text-xl font-semibold text-center md:text-left lg:text-left">
            {t.description}
          </h3>
          <div className="w-full md:flex lg:flex grid grid-cols-2 justify-items-center gap-y-4 items-center md:space-x-2 md:justify-start lg:justify-start lg:space-x-2">
            <Link href={`/${lang}/contact`}>
              <Button>
                {t.hire} <PaperPlaneIcon className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <a href="/CVAyoubBenziza.pdf" download={true}>
              <Button>
                {t.download} CV <DownloadIcon className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <a href="https://github.com/AyoubBenziza" target="_blank">
              <Button>
                <GitHubLogoIcon className="mr-2 h-4 w-4" /> GitHub
              </Button>
            </a>
            <a
              href="https://www.linkedin.com/in/ayoub-benziza/"
              target="_blank"
            >
              <Button>
                <LinkedInLogoIcon className="mr-2 h-4 w-4" /> Linkedin
              </Button>
            </a>
          </div>
        </Reveal>
      </div>
      <Avatar className="w-[300px] h-[300px]">
        <AvatarImage src="profile.jpg" alt="Avatar" />
        <AvatarFallback>Avatar</AvatarFallback>
      </Avatar>
      <PixelBackground />
    </section>
  );
}
