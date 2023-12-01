import AboutTabs from "@/components/about/tabs";
import { Locale, getDictionary } from "../dictionaries";

export default async function About({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const t = (await getDictionary(lang)).about;

  return (
    <section className="w-full h-full flex flex-col items-center justify-between">
      <AboutTabs t={t} />
    </section>
  );
}
