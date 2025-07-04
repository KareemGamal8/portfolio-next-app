import { BrandGmail } from "tabler-icons-react";
import { SocialLinkIcon } from "./SocialLinkIcon";

export function GmailLink() {
  return (
    <SocialLinkIcon
      className="hover:bg-red-700 absolute z-20 bottom-[-5%] start-[50%] translate-x-[-50%]"
      Icon={BrandGmail}
      href="mailto:kareemgmal7755@gmail.com"
    />
  );
}
