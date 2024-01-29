import { SectionWrapper } from "@/components/atom/SectionWrapper";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const AboutSection = () => {
  return (
    <SectionWrapper id="about" title="About Me">
      <div className="my-6">
        <Tabs
          defaultValue="education"
          className="flex flex-col w-full items-center"
        >
          <TabsList>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="experiences">Experiences</TabsTrigger>
          </TabsList>
          <TabsContent value="education">
            Make changes to your education here.
          </TabsContent>
          <TabsContent value="experiences">
            Change your experiences here.
          </TabsContent>
        </Tabs>
      </div>
    </SectionWrapper>
  );
};
