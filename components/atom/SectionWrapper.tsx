/**
 * Wrapper for all section, with the title and layout.
 *
 * @param children Children of the section
 * @param title Title of the section
 * @returns {JSX.Element}
 * @constructor
 */
export const SectionWrapper = ({
  children,
  id,
  title,
}: {
  children: React.ReactNode;
  id: string;
  title: string;
}): JSX.Element => {
  return (
    <section
      id={id}
      className="w-full h-screen flex flex-col items-center justify-center"
    >
      <h2 className="text-6xl max-[316px]:text-4xl font-semibold">{title}</h2>
      {children}
    </section>
  );
};
