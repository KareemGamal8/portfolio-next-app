import { AboutMe, Hero, Services } from "../components";
import { Skills } from "../components/Skills";

export function HomePageContent() {
  return (
    <div className="flex flex-col">
      <Hero />
      <AboutMe />
      {/* <Features /> */}
      <Services />
      <Skills />
    </div>
  );
}
