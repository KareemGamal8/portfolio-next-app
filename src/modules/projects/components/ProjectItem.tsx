"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "tabler-icons-react";
import { Project } from "../types";

export function ProjectItem({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`flex flex-col ${
        isEven ? "xl:flex-row" : "xl:flex-row-reverse"
      } gap-12 xl:gap-20 items-center py-20 border-b border-white/5 last:border-0`}
    >
      {/* Image Container */}
      <div className="w-full xl:w-3/5 group relative">
        <Link
          href={project.url}
          target="_blank"
          className="block relative overflow-hidden rounded-[2.5rem] bg-zinc-900 border border-white/10 shadow-2xl"
        >
          <div className="aspect-[16/9] relative overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Floating Badge */}
            <div className="absolute top-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
              <div className="p-4 bg-cyan-500 text-black rounded-2xl shadow-xl">
                <ExternalLink size={24} strokeWidth={3} />
              </div>
            </div>
          </div>
        </Link>

        {/* Project Number (Decorative) */}
        <div
          className={`absolute -top-10 ${isEven ? "-left-10" : "-right-10"} text-[10rem] font-black text-white/5 pointer-events-none select-none hidden xl:block`}
        >
          {(index + 1).toString().padStart(2, "0")}
        </div>
      </div>

      {/* Content Container */}
      <div className="w-full xl:w-2/5 space-y-8">
        <div className="space-y-4">
          <motion.h3 className="text-4xl lg:text-6xl font-black text-white leading-tight tracking-tight uppercase">
            {project.title}
          </motion.h3>
          <div className="h-1.5 w-24 bg-cyan-500 rounded-full" />
        </div>

        <p className="text-xl text-white/60 leading-relaxed font-medium">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-4 pt-4">
          <Link
            href={project.url}
            target="_blank"
            className="group/btn flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-cyan-500 transition-all duration-300"
          >
            <span>VIEW PROJECT</span>
            <ArrowRight
              size={20}
              className="group-hover/btn:translate-x-1 transition-transform"
            />
          </Link>

          {/* <span className="px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-xs font-bold text-white/40 uppercase tracking-widest flex items-center">
            CASE STUDY COMING SOON
          </span> */}
        </div>
      </div>
    </motion.div>
  );
}
