"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Fragment } from "react";
import { ChevronRight } from "tabler-icons-react";

type BreadcrumbItem = {
  title: string;
  url?: string;
};

type BreadcrumbProps = { title: string; items: BreadcrumbItem[] };

export function Breadcrumb({ items, title }: BreadcrumbProps) {
  return (
    <div className="relative overflow-hidden bg-zinc-950 border-b border-white/5 py-24 lg:py-32">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] -z-10" />
      
      <div className="container px-4">
        <div className="flex flex-col items-center text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter">
              {title.split(" ").map((word, i) => (
                <span key={i} className={i === title.split(" ").length - 1 ? "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500" : ""}>
                  {word + " "}
                </span>
              ))}
            </h1>
          </motion.div>

          <motion.nav 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest"
          >
            {items.map((item, index) => (
              <Fragment key={index}>
                {item.url ? (
                  <Link
                    className="text-white/40 hover:text-cyan-400 transition-colors duration-300"
                    href={item.url}
                  >
                    {item.title}
                  </Link>
                ) : (
                  <span className="text-cyan-500">
                    {item.title}
                  </span>
                )}
                {items.length !== index + 1 && (
                  <ChevronRight size={14} className="text-white/20" strokeWidth={3} />
                )}
              </Fragment>
            ))}
          </motion.nav>
        </div>
      </div>
    </div>
  );
}
