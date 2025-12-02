import { FACEBOOK_LINK, INSTAGRAM_LINK, LINKEDIN_LINK, WHATSAPP_LINK, YOUTUBE_LINK } from "@/src/constants/constants"
import { SocialNetworkItem } from "./SocialNetworkItem"

export const SocialNetworks = () => {
  return (
    <>
      <SocialNetworkItem src="/images/navbar-instagram.svg" href={INSTAGRAM_LINK} alt="instagram logo"/>
      <SocialNetworkItem src="/images/navbar-facebook.svg"  href={FACEBOOK_LINK} alt="facebook logo"/>
      <SocialNetworkItem src="/images/navbar-youtube.svg"   href={YOUTUBE_LINK} alt="youtube logo"/>
      <SocialNetworkItem src="/images/navbar-linkedin.svg"  href={LINKEDIN_LINK} alt="linkedin logo"/>
      <SocialNetworkItem src="/images/navbar-whatsapp.svg"  href={WHATSAPP_LINK} alt="whatsapp logo"/>
    </>
  )
}
