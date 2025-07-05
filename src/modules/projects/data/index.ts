import asap from "@shared/assets/projects/asap.jpg";
import bziada from "@shared/assets/projects/bziada.jpg";
import hirondelle from "@shared/assets/projects/hirondelle.jpg";
import portfolio from "@shared/assets/projects/hisham-portfolio.jpg";
import kazlak from "@shared/assets/projects/kazlak.jpg";
import market from "@shared/assets/projects/market.jpg";
import mentoor from "@shared/assets/projects/mentoor.jpg";
import olfa from "@shared/assets/projects/olfa.jpg";
import sobek from "@shared/assets/projects/sobek.jpg";
import zamil from "@shared/assets/projects/zamil-residential.jpg";
import zamilBeta from "@shared/assets/projects/zamil.jpg";
import zodcon from "@shared/assets/projects/zodcon.jpg";

export const projects = [
  {
    id: Math.random().toString(36).substring(2, 15),
    title: "Hirondelle",
    description: "Modern, responsive website for selling real estate.",
    image: hirondelle,
    url: "https://hirondelle-properties.com/en",
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    title: "Zamil Residential",
    description: "E-commerce site for selling air conditioners",
    image: zamil,
    url: "https://zamilac.com/residential/en",
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    title: "Zamil",
    description: "E-commerce platform specializing in air conditioner sales.",
    image: zamilBeta,
    url: "https://zamil-beta.crafted-internet.com/en",
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    title: "Zodcon",
    description:
      "Innovative project delivery focused on quality, precision, impact, and leadership.",
    image: zodcon,
    url: "https://zodcon-beta.crafted-internet.com/en",
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    title: "Portfolio",
    description: "Portfolio for graphic designer.",
    image: portfolio,
    url: "https://hisham-ashraf.vercel.app/",
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    title: "Kazlak",
    description: "Restaurant website showcasing menu and services.",
    image: kazlak,
    url: "https://kazlak.com/en",
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    title: "Sobek",
    description:
      "Modern web application inspired by the spirit of the ancient Egyptian god Sobek.",
    image: sobek,
    url: "https://sobekarts.com/",
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    title: "Bziada",
    description:
      "Platform connecting individuals in need of medication with those willing to donate or sell it..",
    image: bziada,
    url: "https://bziada.com/",
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    title: "Mentoor",
    description: "An online mentoring platform connecting mentors and mentees.",
    image: mentoor,
    url: "https://mentoor.io/",
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    title: "Olfa",
    description:
      "Platform connecting compassionate individuals with stray animals in need of care.",
    image: olfa,
    url: "https://olfawelfare.com/en/",
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    title: "ASAP",
    description:
      "Real estate website, providing clients with accurate property information and a seamless browsing experience.",
    image: asap,
    url: "https://www.asapeg.com/en",
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    title: "Market",
    description:
      "E-commerce site for selling products like clothes, phones, etc.",
    image: market,
    url: "https://market.mentoor.io/en",
  },
];
