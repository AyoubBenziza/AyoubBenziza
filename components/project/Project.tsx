export const Project = ({
  name,
  description,
  stargazerCount,
  url,
  homepageUrl,
}: {
  name: string;
  description: string;
  stargazerCount: any;
  url: string;
  homepageUrl: string;
}) => {
  return (
    <div className="flex flex-col gap-4 p-4 transition-transform w-60 rounded-2xl bg-accent hover:scale-105 hover:shadow-accent hover:shadow-xl focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50 text-white md:w-80 md:p-8">
      <p className="w-full text-right">⭐ {stargazerCount}</p>
      <a className="font-semibold hover:underline" href={url}>
        {name}
      </a>
      <p>{description}</p>
      {homepageUrl ? (
        <a className="underline" href={homepageUrl}>
          {homepageUrl.replace("https://", "")}
        </a>
      ) : null}
    </div>
  );
};
