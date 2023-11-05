import { Locale } from "../dictionaries";

type Props = {
  lang: Locale;
  t: any;
};

export default async function Projects({ lang, t }: Props) {
  return (
    <main className="flex flex-col items-center justify-between">
      <h1>Ceci est la page de mes projets</h1>
    </main>
  );
}
