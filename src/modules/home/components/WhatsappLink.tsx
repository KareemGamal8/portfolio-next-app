import { BrandWhatsapp } from "tabler-icons-react";
import { SocialLinkIcon } from "./SocialLinkIcon";

export function WhatsappLink() {
  return (
    <SocialLinkIcon
      className="hover:bg-emerald-600 absolute z-20 top-[50%] start-[-7.5%] translate-y-[-50%]"
      Icon={BrandWhatsapp}
      href="https://wa.me/201151148634"
    />
  );
}
