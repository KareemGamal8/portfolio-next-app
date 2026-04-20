"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "tabler-icons-react";
import { Project } from "../types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative bg-zinc-900 border border-white/5 rounded-[2rem] overflow-hidden shadow-2xl transition-all duration-500">
      <Link
        href={project.url}
        target="_blank"
        className="block relative aspect-video overflow-hidden"
      >
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={500}
          loading="lazy"
          className="w-full h-full scale-90 object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1 group-hover:blur-[2px]"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            className="p-4 bg-cyan-600 text-white rounded-full shadow-lg shadow-cyan-900/40"
          >
            <ExternalLink size={32} />
          </motion.div>
        </div>
      </Link>

      <div className="p-8 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <Link
            href={project.url}
            target="_blank"
            className="text-2xl font-black text-white hover:text-cyan-400 transition-colors uppercase tracking-tight"
          >
            {project.title}
          </Link>
          <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/30 group-hover:text-cyan-500 group-hover:bg-cyan-500/10 transition-all">
            <ExternalLink size={20} />
          </div>
        </div>
        <p className="text-white/60 font-medium font-sans leading-relaxed line-clamp-2">
          {project.description}
        </p>
      </div>
    </div>
  );
}
