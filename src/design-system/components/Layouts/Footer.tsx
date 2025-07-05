import AffixButton from "@/design-system/components/AffixButton";
import { SocialLinkIcon } from "@/modules/home/components";
import { URLS } from "@/shared/urls";
import Link from "next/link";
import { Mail, PhoneCall } from "tabler-icons-react";
import { footerSocialLinksData } from "../../data";
import { Copyrights } from "./Copyrights";

export function Footer() {
  return (
    <footer className="pt-8 relative mt-auto bg-background border-t border-cyan-600/20 text-white">
      <div className="container">
        <div className="flex max-lg:flex-col justify-between gap-8">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h3 className="text-white uppercase font-extrabold text-2xl">
                Kareem.g
              </h3>
              <p className="text-oslo-grey">
                Get a high-efficiency website built with modern technologies,{" "}
                <br />
                optimized for speed, responsiveness, and exceptional user
                experience.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <Link
                href="mailto:kareemgmal7755@gmail.com"
                className="flex items-center gap-2"
              >
                <Mail />
                <span>kareemgmal7755@gmail.com</span>
              </Link>
              <Link
                href="tel:+201151148634"
                className="flex items-center gap-2"
              >
                <PhoneCall />
                <span>+201151148634</span>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-white uppercase font-extrabold text-xl">
                Quick Links
              </h3>
              <div className="flex flex-col gap-2">
                <Link
                  href={URLS.projects}
                  className="font-medium nav-link relative after:!w-16 after:!h-8 after:!left-4"
                >
                  Projects
                </Link>
                <Link
                  href={URLS.contactUs}
                  className="font-medium nav-link relative after:!w-16 after:!h-8 after:!left-4"
                >
                  Contact Me
                </Link>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              {footerSocialLinksData.map((link, index) => {
                const { Icon, href, className } = link;
                return (
                  <SocialLinkIcon
                    className={`${className} h-13 w-13`}
                    key={index}
                    Icon={Icon}
                    href={href}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Copyrights />
      <AffixButton />
    </footer>
  );
}
