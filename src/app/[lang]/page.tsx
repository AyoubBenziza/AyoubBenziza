"use client";

import { Reveal } from "@/components/utils/reveal";
import { Locale } from "./dictionaries";
import { TypeAnimation } from "react-type-animation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Props = {
  lang: Locale;
  t: any;
};

export default function Home({ lang, t }: Props) {
  return (
    <section className="w-full h-full flex flex-col items-center md:flex-row lg:flex-row justify-around">
      <div className="w-full md:w-1/2 lg:w-1/2 flex flex-col items-center md:items-start lg:items-start md:justify-start lg:justify-start">
        <Reveal>
          <h1 className="text-xl sm:text-5xl md:text-4xl lg:text-6xl font-extrabold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-purple-500">
              Bonjour, je suis
            </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Ayoub",
                1000,
                "Développeur Web",
                1000,
                "Français",
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
            J'aime réaliser des sites internets avec des bonnes expériences
            utilisateur
            <br />
            et découvrir les dernières technologies actuelles.
          </h3>
        </Reveal>
      </div>
      <Avatar className="w-[300px] h-[300px]">
        <AvatarImage src="profile.jpg" alt="Avatar" />
        <AvatarFallback>Avatar</AvatarFallback>
      </Avatar>
    </section>
  );
}
