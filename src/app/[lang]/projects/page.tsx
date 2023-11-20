import PixelBackground from "@/components/pixelBackground";
import { Locale } from "../dictionaries";

export default async function Projects({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  return (
    <main className="flex flex-col items-center justify-between">
      <h1>Ceci est la page de mes projets</h1>
      <PixelBackground />
    </main>
  );
}
