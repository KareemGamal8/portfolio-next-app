import { ContactMePageContent } from "@/modules/contact-me/pages";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Me",
};

export default function ContactMePage() {
  return <ContactMePageContent />;
}
