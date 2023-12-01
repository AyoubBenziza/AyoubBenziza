"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Experiences from "./experiences";
import Skills from "./skills";

type TabsProps = {
  dashboard: {
    skills: string;
    education: string;
    experiences: string;
  };
};

export default function AboutTabs({ t }: { t: TabsProps }) {
  return (
    <Tabs defaultValue="skills" className="w-3/4">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="skills">{t.dashboard.skills}</TabsTrigger>
        <TabsTrigger value="education">{t.dashboard.education}</TabsTrigger>
        <TabsTrigger value="experiences">{t.dashboard.experiences}</TabsTrigger>
      </TabsList>
      <TabsContent value="skills">
        <Skills />
      </TabsContent>
      <TabsContent value="education" className="flex justify-center">
        <h1>{t.dashboard.education}</h1>
      </TabsContent>
      <TabsContent value="experiences" className="flex justify-center">
        <Experiences />
      </TabsContent>
    </Tabs>
  );
}
