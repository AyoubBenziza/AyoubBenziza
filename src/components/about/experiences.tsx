"use client";

import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";

import TimelineElement from "./timeline-element";

import Image from "next/image";
import { FaRunning } from "react-icons/fa";

const experiencesData = [
  {
    title: "InQompass",
    location: "Remote",
    description: "Angular/Typescript/Firebase",
    icon: (
      <Image
        src={`/logo/angular.webp`}
        alt="Angular"
        fill
        sizes="(min-width=300px) 100vw, 100vh"
      />
    ),
    date: "May-July 2023",
  },
  {
    title: "Hackathon",
    location: "Montpellier, France",
    description: "Flutter/MySQL/PHPMyAdmin",
    icon: React.createElement(FaRunning),
    date: "14-15 October 2023",
  },
];

export default function Experiences() {
  return (
    <section
      id="experiences"
      className="w-full h-full flex flex-col items-center justify-between"
    >
      <VerticalTimeline className="w-full" lineColor="#e5e7eb">
        {experiencesData.map((experience, index) => (
          <TimelineElement key={index} item={experience} />
        ))}
      </VerticalTimeline>
    </section>
  );
}
