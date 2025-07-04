import { HomePageContent } from "@/modules/home/pages";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return <HomePageContent />;
}
