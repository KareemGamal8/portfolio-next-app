"use client";

import { motion } from "framer-motion";
import { projects } from "../data";
import { ProjectItem } from "./ProjectItem";

export function ProjectsList() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="space-y-10 mb-20"
        >
          <h2 className="text-sm font-bold text-cyan-500 uppercase tracking-[0.3em] mb-4">
            Recent Work
          </h2>
          <h3 className="text-5xl lg:text-7xl font-black text-white leading-none uppercase italic">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-white/20">Projects</span>
          </h3>
        </motion.div>

        <div className="flex flex-col">
          {projects.map((project, index) => (
            <ProjectItem key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
