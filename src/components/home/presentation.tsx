"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  PaperPlaneIcon,
  DownloadIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import { Reveal } from "../utils/reveal";
import { Locale } from "@/app/[lang]/dictionaries";

type TabsProps = {
  welcome: string;
  job: string;
  nationality: string;
  description: string;
  hire: string;
  download: string;
};

export default function Presentation({
  lang,
  t,
}: {
  lang: Locale;
  t: TabsProps;
}) {
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
          <h2 className="w-full text-xs my-2 sm:text-xl lg:text-xl font-semibold text-center md:text-left lg:text-left">
            {t.description}
          </h2>
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
      <div className="w-[300px] h-[300px]">
        <AspectRatio ratio={1 / 1}>
          <Image
            src="/profile.webp"
            alt="Avatar"
            fill
            priority
            sizes="(min-width=300px) 100vw, 300px"
            className="rounded-full"
          />
        </AspectRatio>
      </div>
    </section>
  );
}
