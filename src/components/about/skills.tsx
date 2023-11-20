"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Skills() {
  const skillsData: { name: string; logo: string }[] = [
    {
      name: "TypeScript",
      logo: "ts.png",
    },
    {
      name: "NextJS",
      logo: "next-js.png",
    },
    {
      name: "Angular",
      logo: "angular.png",
    },
    {
      name: "React",
      logo: "react.png",
    },
    {
      name: "Docker",
      logo: "docker.webp",
    },
    {
      name: "Node.js",
      logo: "node-js.png",
    },
    {
      name: "Express",
      logo: "express.png",
    },
    {
      name: "Framer Motion",
      logo: "framer-motion.png",
    },
    {
      name: "Tailwind CSS",
      logo: "tailwind.png",
    },
    {
      name: "MySQL",
      logo: "mysql.png",
    },
  ];

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };
  return (
    <section
      id="skills"
      className="w-full h-full flex flex-col items-center justify-between"
    >
      <ul className="w-full flex flex-wrap justify-center gap-2 text-lg">
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
            className="flex items-center"
          >
            <Image
              priority
              src={`/logo/${skill.logo}`}
              alt={`${skill.name} logo`}
              width={80}
              height={80}
              style={{ width: "auto", height: "auto" }}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
