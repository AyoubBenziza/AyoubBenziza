"use client";

import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";

import TimelineElement from "./timeline-element";

import { LuGraduationCap } from "react-icons/lu";
import { FaRunning } from "react-icons/fa";

const experiencesData = [
  {
    title: "InQompass",
    location: "Distanciel",
    description: "Projet sur Angular",
    icon: React.createElement(LuGraduationCap),
    date: "Mai-Juillet 2023",
  },
  {
    title: "Hackathon",
    location: "Montpellier, France",
    description: "Projet sur Angular",
    icon: React.createElement(FaRunning),
    date: "Octobre 2023",
  },
];

export default function Experiences() {
  return (
    <section
      id="experiences"
      className="w-full h-full flex flex-col items-center justify-between"
    >
      <h1>My Experiences</h1>
      <VerticalTimeline className="w-full" lineColor="#e5e7eb">
        {experiencesData.map((experience, index) => (
          <TimelineElement key={index} item={experience} />
        ))}
      </VerticalTimeline>
    </section>
  );
}
