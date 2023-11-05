import { Locale } from "../dictionaries";

type Props = {
  lang: Locale;
  t: any;
};

export default async function Contact({ lang, t }: Props) {
  return (
    <main className="flex flex-col items-center justify-between">
      <h1>Ceci est la page pour me contacter</h1>
    </main>
  );
}
