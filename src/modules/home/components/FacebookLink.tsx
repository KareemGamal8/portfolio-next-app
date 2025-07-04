import { BrandFacebook } from "tabler-icons-react";
import { SocialLinkIcon } from "./SocialLinkIcon";

export function FacebookLink() {
  return (
    <SocialLinkIcon
      className="hover:bg-indigo-800 absolute z-20 top-[-5%] start-[50%] translate-x-[-50%]"
      Icon={BrandFacebook}
      href="https://www.facebook.com/kareem.gamal.3344913"
    />
  );
}
