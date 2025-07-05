import Image from "next/image";
import Link from "next/link";
import { Project } from "../types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-secondary rounded-xl lg:min-h-96 relative flex flex-col gap-4 group overflow-hidden">
      <Link href={project.url} target="_blank">
        <Image
          src={project.image}
          alt={project.title}
          width={600}
          height={400}
          loading="lazy"
          className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
        />
      </Link>

      {/* Info Panel */}
      <div className="lg:absolute max-lg:py-2 flex flex-col justify-center gap-2 h-[30%] text-white lg:bottom-0 px-4 z-10 bg-secondary/80 w-full lg:transform transition-all duration-500 ease-in-out lg:translate-y-full group-hover:translate-y-0">
        <Link
          href={project.url}
          target="_blank"
          className="uppercase text-xl font-bold relative hover:text-cyan-600 transition-all duration-500"
        >
          <>{project.title}</>
        </Link>
        <p className="line-clamp-2 text-sm font-medium">
          {project.description}
        </p>
      </div>
    </div>
  );
}
