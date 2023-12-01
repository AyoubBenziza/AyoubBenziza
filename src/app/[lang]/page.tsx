import Presentation from "@/components/home/presentation";
import { Locale, getDictionary } from "./dictionaries";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const t = (await getDictionary(lang)).home;

  return <Presentation lang={lang} t={t} />;
}
