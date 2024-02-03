import { SectionWrapper } from "@/components/atom/SectionWrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  SiAngular,
  SiDocker,
  SiExpress,
  SiFigma,
  SiGit,
  SiLinux,
  SiMysql,
  SiPython,
  SiReact,
  SiWindows11,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export const SkillSection = () => {
  return (
    <SectionWrapper id="skills" title="Skills">
      <div className="flex flex-col items-center w-full max-w-2xl gap-4">
        <div className="my-6">
          <Tabs
            defaultValue="front-end"
            className="flex flex-col w-full items-center"
          >
            <TabsList className="bg-accent text-accent-foreground">
              <TabsTrigger value="front-end">Front-End</TabsTrigger>
              <TabsTrigger value="back-end">Back-End</TabsTrigger>
              <TabsTrigger value="tools">Tools</TabsTrigger>
              <TabsTrigger value="os">OS</TabsTrigger>
            </TabsList>
            <TabsContent className="text-center" value="front-end">
              <Card className="bg-accent text-accent-foreground">
                <CardHeader>
                  <CardTitle className="font-semibold text-lg sm:text-2xl">
                    Front-End
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-row space-x-1">
                  <TbBrandNextjs className="text-base sm:text-3xl text-neutral-400" />
                  <p className="text-xl">NextJS</p>
                </CardContent>
                <CardContent className="flex flex-row space-x-1">
                  <SiReact className="text-base sm:text-3xl text-sky-400" />
                  <p className="text-xl">React</p>
                </CardContent>
                <CardContent className="flex flex-row space-x-1">
                  <SiAngular className="text-base sm:text-3xl text-red-600" />
                  <p className="text-xl">Angular</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent className="text-center" value="back-end">
              <Card className="bg-accent text-accent-foreground">
                <CardHeader>
                  <CardTitle className="font-semibold text-2xl">
                    Back-End
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-row space-x-1">
                  <SiMysql className="text-base sm:text-3xl text-red-600" />
                  <p className="text-xl">MySQL</p>
                </CardContent>
                <CardContent className="flex flex-row space-x-1">
                  <SiPython className="text-base sm:text-3xl text-yellow-300" />
                  <p className="text-xl">Python</p>
                </CardContent>
                <CardContent className="flex flex-row space-x-1">
                  <SiExpress className="text-base sm:text-3xl text-gray-950" />
                  <p className="text-xl">Express.js</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent className="text-center" value="tools">
              <Card className="bg-accent text-accent-foreground">
                <CardHeader>
                  <CardTitle className="font-semibold text-2xl">
                    Tools
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-row space-x-1">
                  <SiDocker className="text-base sm:text-3xl text-blue-700" />
                  <p className="text-xl">Docker</p>
                </CardContent>
                <CardContent className="flex flex-row space-x-1">
                  <SiFigma className="text-base sm:text-3xl text-indigo-300" />
                  <p className="text-xl">Figma</p>
                </CardContent>
                <CardContent className="flex flex-row space-x-1">
                  <SiGit className="text-base sm:text-3xl text-orange-600" />
                  <p className="text-xl">Git</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent className="text-center" value="os">
              <Card className="bg-accent text-accent-foreground">
                <CardHeader>
                  <CardTitle className="font-semibold text-2xl">OS</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-row space-x-1">
                  <SiWindows11 className="text-base sm:text-3xl text-blue-800" />
                  <p className="text-xl">Windows</p>
                </CardContent>
                <CardContent className="flex flex-row space-x-1">
                  <SiLinux className="text-base sm:text-3xl text-black-600" />
                  <p className="text-xl">Linux</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </SectionWrapper>
  );
};
