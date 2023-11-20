import PixelBackground from "@/components/pixelBackground";
import { Locale } from "../dictionaries";
import Skills from "@/components/about/skills";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Experiences from "@/components/about/experiences";

export default async function About({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  return (
    <main className="w-full h-full flex flex-col items-center justify-between">
      <Tabs defaultValue="skills" className="w-2/3">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="experiences">Experiences</TabsTrigger>
        </TabsList>
        <TabsContent value="skills">
          <Skills />
        </TabsContent>
        <TabsContent value="education" className="flex justify-center">
          <h1>Education</h1>
        </TabsContent>
        <TabsContent value="experiences" className="flex justify-center">
          <Experiences />
        </TabsContent>
      </Tabs>
      <PixelBackground />
    </main>
  );
}
