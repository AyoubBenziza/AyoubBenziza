"use client";

import Experiences from "@/components/about/experiences";
import Skills from "@/components/about/skills";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Locale, getDictionary } from "../dictionaries";

export default async function About({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const t = (await getDictionary(lang)).about;

  return (
    <main className="w-full h-full flex flex-col items-center justify-between">
      <Tabs defaultValue="skills" className="w-3/4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="skills">{t.dashboard.skills}</TabsTrigger>
          <TabsTrigger value="education">{t.dashboard.education}</TabsTrigger>
          <TabsTrigger value="experiences">
            {t.dashboard.experiences}
          </TabsTrigger>
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
    </main>
  );
}
