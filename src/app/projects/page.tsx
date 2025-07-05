import { ProjectsPageContent } from "@/modules/projects/pages";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return <ProjectsPageContent />;
}
