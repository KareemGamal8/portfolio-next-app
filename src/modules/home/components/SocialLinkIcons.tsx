import { SocialLinkIcon } from "@modules/home/components";
import { socialLinksData } from "../data";

export default function SocialLinkIcons() {
  return (
    <>
      {socialLinksData.map((link, index) => {
        const { Icon, href, className } = link;
        return (
          <SocialLinkIcon
            key={index}
            Icon={Icon}
            className={className}
            href={href}
          />
        );
      })}
    </>
  );
}
