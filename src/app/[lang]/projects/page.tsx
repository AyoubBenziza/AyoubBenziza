import { Locale, getDictionary } from "../dictionaries";

export default async function Projects({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const t = (await getDictionary(lang)).projects;
  return (
    <section className="flex flex-col items-center justify-between">
      <h1>{t.title}</h1>
    </section>
  );
}
