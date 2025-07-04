import { AboutMe, Features, Hero } from "../components";

export function HomePageContent() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Features />
      <AboutMe />
    </div>
  );
}
