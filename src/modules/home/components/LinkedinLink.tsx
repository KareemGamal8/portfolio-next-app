import { BrandLinkedin } from "tabler-icons-react";
import { SocialLinkIcon } from "./SocialLinkIcon";

export function LinkedinLink() {
  return (
    <SocialLinkIcon
      className="hover:bg-blue-600 absolute z-20 top-[50%] end-[-7.5%] translate-y-[-50%]"
      Icon={BrandLinkedin}
      href="https://www.linkedin.com/in/kareem-gamal-1889a8230/"
    />
  );
}
