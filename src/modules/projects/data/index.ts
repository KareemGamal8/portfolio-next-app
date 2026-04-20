import cpPrint from "@shared/assets/projects/CP-20-2026_02_49_AM.jpg";
import zamil from "@shared/assets/projects/Discover-Zamil-AC-Innovative-Cooling-Solutions-Now-Zamil-AC-04-20-2026_02_40_AM.jpg";
import hirondelle from "@shared/assets/projects/Hirondelle-Properties-04-20-2026_02_40_AM.jpg";
import portfolio from "@shared/assets/projects/Hisham-04-202026_02_46_AM.jpg";
import asap from "@shared/assets/projects/Home-ASAP-04-20-2026_02_41_AM.jpg";
import kazlak from "@shared/assets/projects/Kazlak-04-20-2026_02_43_AM.jpg";
import market from "@shared/assets/projects/Market-04-20-2026_02_38_AM.jpg";
import nannisCakes from "@shared/assets/projects/Nanni-s-Cakes-04-20-2026_02_45_AM.jpg";
import olfa from "@shared/assets/projects/Olfa-Welfare-04-20-2026_02_42_AM.jpg";
import senaat from "@shared/assets/projects/Senaat-Industrial-Excellence-04-20-2026_02_44_AM.jpg";
import zodcon from "@shared/assets/projects/Zodcon-04-20-2026_02_47_AM.jpg";

import { Project } from "../types";

export const projects: Project[] = [
  {
    id: "1",
    title: "Market",
    description:
      "Developed a full-featured e-commerce platform featuring product categorization, promotional campaigns, trending items, and brand showcases. Implemented a user-friendly interface with optimized navigation, enhancing the overall shopping experience and customer engagement.",
    image: market,
    url: "https://market.mentoor.io/en",
  },
  {
    id: "2",
    title: "Zamil",
    description:
      "Developed a modern e-commerce platform for an air conditioning company, showcasing a wide range of products including split, window, and portable AC units. Implemented a user-friendly interface with detailed product specifications, smart features, and seamless navigation to enhance the online shopping experience.",
    image: zamil,
    url: "https://zamilac.com/",
  },
  {
    id: "3",
    title: "Hirondelle",
    description:
      "Built a responsive real estate platform featuring dynamic property listings, advanced search functionality, and categorized browsing for rentals and sales. Focused on enhancing user experience through clear data presentation and seamless navigation.",
    image: hirondelle,
    url: "https://hirondelle-properties.com/en",
  },
  {
    id: "4",
    title: "ASAP EG",
    description:
      "Built a responsive real estate platform featuring property listings, service sections, and structured content for real estate investment and property management. Focused on enhancing user experience through clear navigation and organized data presentation.",
    image: asap,
    url: "https://www.asapeg.com/en",
  },
  {
    id: "5",
    title: "OLfa",
    description:
      "Built a responsive platform for an animal welfare initiative focused on rescuing, rehabilitating, and rehoming stray animals. Implemented structured content for adoption, fostering, volunteering, and medical support services, enhancing user engagement and accessibility.",
    image: olfa,
    url: "https://www.olfawelfare.com/en/",
  },
  {
    id: "6",
    title: "Kazlak",
    description:
      "Built a responsive website for a restaurant brand focused on delivering a unique culinary experience, featuring menu sections, brand storytelling, and location-based content. Emphasized clean UI, smooth navigation, and engaging visual presentation.",
    image: kazlak,
    url: "https://kazlak.com/en",
  },
  {
    id: "7",
    title: "Senaat",
    description:
      "Built a responsive corporate platform for an industrial holding company operating across multiple sectors including construction, manufacturing, and energy. Focused on structured content presentation, clear navigation, and professional UI to highlight business operations and investments.",
    image: senaat,
    url: "https://senaat.com/en/",
  },
  {
    id: "8",
    title: "Nanni's cakes",
    description:
      "Built a responsive bakery platform showcasing a wide range of cakes, including wedding, birthday, and custom designs, with structured product categories and ordering features. Focused on delivering a seamless user experience and visually appealing product presentation.",
    image: nannisCakes,
    url: "https://nanniscakes.com/",
  },
  {
    id: "9",
    title: "Hisham Ashraf - Portfolio",
    description:
      "Developed and deployed a modern, responsive personal portfolio website to showcase graphic design projects and creative services. The platform is built with a focus on performance, clean UI/UX, and seamless user experience across all devices. The website includes structured sections such as About, Services, Portfolio Gallery, and Client Testimonials.",
    image: portfolio,
    url: "https://hisham-ashraf.vercel.app/",
  },
  {
    id: "10",
    title: "Zodcon",
    description:
      "ZODCON is a leading integrated construction and engineering solutions company specializing in delivering turnkey projects across industrial, commercial, and infrastructure sectors. The platform showcases ZODCON's expertise in steel structures, MEP systems, HVAC solutions, and more.",
    image: zodcon,
    url: "https://www.zodcon.com/en/",
  },
  {
    id: "11",
    title: "CP Print",
    description:
      "Developed a modern, scalable web application using Next.js and deployed on Vercel, designed as a modular project dashboard to manage and showcase multiple frontend projects and tools. The application follows a clean architecture with reusable components and optimized routing.",
    image: cpPrint,
    url: "https://cp-next-app-nine.vercel.app/",
  },
  {
    id: "12",
    title: "Doctoor Platform",
    description:
      "Developed a comprehensive digital platform (Doctoor) that enables doctors to create professional medical websites and manage patient bookings online. The platform provides tools for improving digital presence, organizing work schedules, and facilitating communication with patients through QR codes for prescriptions and shared links.",
    image: market, // Placeholder, I should ask the user for the image
    url: "https://doctoor-next-app.vercel.app/en",
  },
];
