"use client";

import { Breadcrumb } from "@/design-system/components/Breadcrumb";
import { URLS } from "@/shared/urls";
import { motion } from "framer-motion";
import { ProjectsList } from "../components";

export function ProjectsPageContent() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="pb-24 relative overflow-hidden min-h-screen"
    >
      {/* Background Decorative Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] -z-10" />

      <Breadcrumb
        title="My Projects"
        items={[{ title: "Home", url: URLS.home }, { title: "Projects" }]}
      />

      <ProjectsList />
    </motion.div>
  );
}
