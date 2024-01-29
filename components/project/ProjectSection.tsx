import { SectionWrapper } from "@/components/atom/SectionWrapper";
import { Project } from "./Project";
import { getGitHubRepositories } from "@/lib/actions";

export const ProjectSection = async () => {
  const projects = await getGitHubRepositories();

  return (
    <SectionWrapper id="projects" title="Projects">
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-3">
        {projects.map((project: any) => (
          <Project key={project.name} {...project} />
        ))}
      </div>
    </SectionWrapper>
  );
};
