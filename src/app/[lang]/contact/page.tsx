import { Locale, getDictionary } from "../dictionaries";

import ContactForm from "@/components/contact/contactForm";

export default async function Contact({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const t = (await getDictionary(lang)).contact;

  return (
    <section className="w-full h-full flex items-center justify-center">
      <ContactForm t={t} />
    </section>
  );
}
