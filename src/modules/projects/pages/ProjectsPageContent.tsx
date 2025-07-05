import { Breadcrumb } from "@/design-system/components/Breadcrumb";
import { URLS } from "@/shared/urls";
import { ProjectsList } from "../components";

export function ProjectsPageContent() {
  return (
    <>
      <Breadcrumb
        title="Projects"
        items={[{ title: "Home", url: URLS.home }, { title: "Projects" }]}
      />
      <ProjectsList />
    </>
  );
}
