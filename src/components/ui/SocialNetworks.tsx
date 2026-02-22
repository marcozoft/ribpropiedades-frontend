import {
  FACEBOOK_LINK,
  INSTAGRAM_LINK,
  LINKEDIN_LINK,
  WHATSAPP_LINK,
  YOUTUBE_LINK,
} from "@/src/constants/constants";
import { SocialNetworkItem } from "./SocialNetworkItem";

export const SocialNetworks = () => {
  return (
    <div className="flex gap-2">
      <SocialNetworkItem
        className="hidden sm:flex"
        src="/images/navbar-instagram.svg"
        href={INSTAGRAM_LINK}
        alt="instagram logo"
      />
      <SocialNetworkItem
        className="hidden sm:flex"
        src="/images/navbar-facebook.svg"
        href={FACEBOOK_LINK}
        alt="facebook logo"
      />
      <SocialNetworkItem
        className="hidden sm:flex"
        src="/images/navbar-youtube.svg"
        href={YOUTUBE_LINK}
        alt="youtube logo"
      />
      <SocialNetworkItem
        className="hidden sm:flex"
        src="/images/navbar-linkedin.svg"
        href={LINKEDIN_LINK}
        alt="linkedin logo"
      />
      <SocialNetworkItem
        className="flex"
        src="/images/navbar-whatsapp.svg"
        href={WHATSAPP_LINK}
        alt="whatsapp logo"
      />
    </div>
  );
};
