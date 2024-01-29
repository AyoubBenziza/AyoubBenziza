import { buttonVariants } from "@/components/ui/button";
import { DownloadIcon, PaperPlaneIcon } from "@radix-ui/react-icons";
import clsx from "clsx";
import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";

import avatar from "/public/images/profile.webp";

export const HeroSection = () => {
  return (
    <section id="home" className="h-screen pt-16 flex items-center">
      <div
        className={clsx(
          "container mx-auto flex flex-col-reverse lg:grid lg:grid-cols-12"
        )}
      >
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="my-4 text-4xl lg:text-6xl font-extrabold">
            Hello, I&apos;m Ayoub Benziza
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-secondary-foreground">
            <b>Software Enginner.</b> I love designing websites with good user
            experiences and discovering the latest technologies.
          </p>
          <ul className="flex flex-col space-y-1 md:flex-row md:space-x-2 md:space-y-0">
            <li>
              <a
                href="mailto:ayoub.cbenziza@gmail.com"
                key="hire"
                className={buttonVariants({ variant: "default" })}
              >
                Hire me <PaperPlaneIcon className="ml-2 h-4 w-4" />
              </a>
            </li>
            <li>
              <a
                href="/CVAyoubBenziza.pdf"
                key="cv"
                className={buttonVariants({ variant: "default" })}
                download
              >
                Download CV <DownloadIcon className="ml-2 h-4 w-4" />
              </a>
            </li>
          </ul>
        </div>
        <div className="max-[300px]:w-[250px] min-[300px]:w-[300px] col-span-5 place-self-center relative">
          <AspectRatio ratio={1 / 1}>
            <Image
              src={avatar}
              alt="avatar"
              fill
              priority
              sizes="(min-width=250px) 100vw"
              className="rounded-full shadow-lg w-full h-auto z-0"
            />
          </AspectRatio>
        </div>
      </div>
    </section>
  );
};
