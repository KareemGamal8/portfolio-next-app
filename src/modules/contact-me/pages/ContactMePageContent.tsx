import { Breadcrumb } from "@/design-system/components/Breadcrumb";
import { URLS } from "@/shared/urls";
import { ContactMeForm } from "../components";

export function ContactMePageContent() {
  return (
    <>
      <Breadcrumb
        title="Contact Me"
        items={[{ title: "Home", url: URLS.home }, { title: "Contact Me" }]}
      />
      <ContactMeForm />
    </>
  );
}
