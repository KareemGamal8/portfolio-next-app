import { projects } from "../data";
import { ProjectCard } from "./ProjectCard";

export function ProjectsList() {
  return (
    <div className="my-24 animate-fade-up animate-once animate-ease-linear animate-normal">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
