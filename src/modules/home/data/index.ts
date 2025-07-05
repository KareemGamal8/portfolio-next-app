import {
  CSSIcon,
  HTMLIcon,
  JavaScriptIcon,
  MantineIcon,
  NextIcon,
  ReactFormIcon,
  ReactIcon,
  ReduxIcon,
  RemixIcon,
  TailwindIcon,
  TypescriptIcon,
} from "@/design-system/components";
import {
  Ballpen,
  BrandFacebook,
  BrandGmail,
  BrandLinkedin,
  BrandWhatsapp,
  Briefcase,
  ChartArrowsVertical,
  Devices,
  Settings,
  ShoppingCart,
} from "tabler-icons-react";

export const featuresData = [
  {
    count: 3,
    text: "Years",
  },
  {
    count: 15,
    text: "Projects",
  },
  {
    count: 10,
    text: "Happy Clients",
  },
];

export const servicesData = [
  {
    title: "Responsive UI/UX Design",
    services: [
      "Responsive layouts for all screens",
      "Pixel-perfect component design",
      "User-friendly and modern interfaces",
    ],
    Icon: Devices,
  },
  {
    title: "E-Commerces",
    services: [
      "Product listing with filters",
      "Interactive shopping cart",
      "Multi-step checkout process",
    ],
    Icon: ShoppingCart,
  },
  {
    title: "Admin Panel UI",
    services: [
      "Product and order control",
      "User role management",
      "Analytics dashboard",
    ],
    Icon: Settings,
  },
  {
    title: "Educational Platforms",
    services: [
      "Course and lesson pages",
      "Progress tracking system",
      "Quiz and certificate features",
    ],
    Icon: Ballpen,
  },
  {
    title: "Personal Portfolios",
    services: [
      "Project showcase galleries",
      "Responsive personal layout",
      "Smooth animations and effects",
    ],
    Icon: Briefcase,
  },
  {
    title: "Performance & Optimization",
    services: [
      "Lazy loading assets",
      "Code splitting techniques",
      "Accessibility improvements",
    ],
    Icon: ChartArrowsVertical,
  },
];

export const skillsData = [
  {
    title: "HTML",
    Icon: HTMLIcon,
  },
  {
    title: "CSS",
    Icon: CSSIcon,
  },
  {
    title: "JavaScript",
    Icon: JavaScriptIcon,
  },
  {
    title: "React JS",
    Icon: ReactIcon,
  },
  {
    title: "Next.js",
    Icon: NextIcon,
  },
  {
    title: "Remix",
    Icon: RemixIcon,
  },
  {
    title: "TypeScript",
    Icon: TypescriptIcon,
  },
  {
    title: "Tailwind CSS",
    Icon: TailwindIcon,
  },
  {
    title: "Mantine UI",
    Icon: MantineIcon,
  },
  {
    title: "React Hook Form",
    Icon: ReactFormIcon,
  },
  {
    title: "Redux Toolkit",
    Icon: ReduxIcon,
  },
];

export const socialLinksData = [
  {
    Icon: BrandFacebook,
    href: "https://www.facebook.com/kareem.gamal.3344913",
    className:
      "hover:bg-indigo-800 absolute z-20 top-[-5%] start-[50%] translate-x-[-50%]",
  },
  {
    Icon: BrandGmail,
    href: "mailto:kareemgmal7755@gmail.com",
    className:
      "hover:bg-red-700 absolute z-20 bottom-[-5%] start-[50%] translate-x-[-50%]",
  },
  {
    Icon: BrandWhatsapp,
    href: "https://wa.me/201151148634",
    className:
      "hover:bg-emerald-600 absolute z-20 top-[50%] start-[-7.5%] translate-y-[-50%]",
  },
  {
    Icon: BrandLinkedin,
    href: "https://www.linkedin.com/in/kareem-gamal-1889a8230/",
    className:
      "hover:bg-blue-600 absolute z-20 top-[50%] end-[-7.5%] translate-y-[-50%]",
  },
];
