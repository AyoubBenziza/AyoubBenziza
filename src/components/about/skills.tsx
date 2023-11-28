import { motion } from "framer-motion";
import Image from "next/image";

export default function Skills() {
  const skillsData: { name: string; logo: string }[] = [
    {
      name: "TypeScript",
      logo: "ts.webp",
    },
    {
      name: "NextJS",
      logo: "next-js.webp",
    },
    {
      name: "Angular",
      logo: "angular.webp",
    },
    {
      name: "React",
      logo: "react.webp",
    },
    {
      name: "Docker",
      logo: "docker.webp",
    },
    {
      name: "Node.js",
      logo: "node-js.webp",
    },
    {
      name: "Express",
      logo: "express.webp",
    },
    {
      name: "Framer Motion",
      logo: "framer-motion.webp",
    },
    {
      name: "Tailwind CSS",
      logo: "tailwind.webp",
    },
    {
      name: "MySQL",
      logo: "mysql.webp",
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
