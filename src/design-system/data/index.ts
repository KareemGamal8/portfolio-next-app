import { URLS } from "@/shared/urls";
import {
  BrandFacebook,
  BrandGmail,
  BrandLinkedin,
  BrandWhatsapp,
} from "tabler-icons-react";

export const navLinks = [
  {
    text: "Home",
    url: URLS.home,
  },
  {
    text: "Projects",
    url: URLS.projects,
  },
  {
    text: "Contact Me",
    url: URLS.contactUs,
  },
];

export const footerSocialLinksData = [
  {
    Icon: BrandFacebook,
    href: "https://www.facebook.com/kareem.gamal.3344913",
    className: "hover:bg-indigo-800",
  },
  {
    Icon: BrandGmail,
    href: "mailto:kareemgmal7755@gmail.com",
    className: "hover:bg-red-700",
  },
  {
    Icon: BrandWhatsapp,
    href: "https://wa.me/201151148634",
    className: "hover:bg-emerald-600",
  },
  {
    Icon: BrandLinkedin,
    href: "https://www.linkedin.com/in/kareem-gamal-1889a8230/",
    className: "hover:bg-blue-600",
  },
];
