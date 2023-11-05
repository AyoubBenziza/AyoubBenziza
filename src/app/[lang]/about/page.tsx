import { Locale } from "../dictionaries";

type Props = {
  lang: Locale;
  t: any;
};

export default async function About({ lang, t }: Props) {
  return (
    <main className="flex flex-col items-center justify-between">
      <h1>Ceci est la page d'informations à propos de moi</h1>
    </main>
  );
}
