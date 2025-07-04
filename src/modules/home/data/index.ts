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
  Briefcase,
  ChartArrowsVertical,
  Clipboard,
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
    Icon: Clipboard,
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
