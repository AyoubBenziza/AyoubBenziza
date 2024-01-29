import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { CommentSection } from "@/components/comment/CommentSection";
import { HeroSection } from "@/components/hero/HeroSection";
import { ProjectSection } from "@/components/project/ProjectSection";
import { SkillSection } from "@/components/skill/SkillSection";

export const revalidate = 3;

export default function Home() {
  return (
    <main className="w-full h-screen flex flex-col">
      <Header />
      <div>
        <HeroSection />
        {/* <AboutSection /> */}
        <SkillSection />
        <ProjectSection />
        <CommentSection />
        <Footer />
      </div>
    </main>
  );
}
