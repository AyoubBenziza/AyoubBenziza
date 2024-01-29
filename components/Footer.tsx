import { EMAIL, SOCIAL_NETWORKS } from "@/lib/config";
import { SocialNetworks } from "./atom/SocialNetwork";

export const Footer = () => {
  return (
    <footer
      id="contact"
      className="flex flex-col items-center gap-8 p-4 md:p-8 "
    >
      <h2>Contact me !</h2>
      <div className="flex flex-col items-center gap-2">
        <h3>
          I’ll be happy to chat with you about a potential job or a freelance
        </h3>
        <SocialNetworks socialNetworks={SOCIAL_NETWORKS} />
      </div>
      <p>Made with NextJS</p>
    </footer>
  );
};
