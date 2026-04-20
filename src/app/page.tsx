import { HomePageContent } from "@/modules/home/pages";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kareem Gamal",
};

export default function Home() {
  return <HomePageContent />;
}
