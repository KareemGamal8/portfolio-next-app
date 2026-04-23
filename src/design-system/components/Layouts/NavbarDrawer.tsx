"use client";

import { headerAtom } from "@/design-system/atoms";
import { URLS } from "@/shared/urls";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Download } from "tabler-icons-react";
import { twMerge } from "tailwind-merge";
import { navLinks } from "../../data";

export default function NavbarDrawer() {
  const pathname = usePathname();

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <section className="flex flex-col h-full p-8 relative overflow-hidden">
      {/* Decorative Glows */}
      {/* <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-600/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-600/5 rounded-full blur-[80px] -z-10" /> */}

      {/* Drawer Header */}
      <div className="flex items-center justify-between mb-12">
        <Link
          href="/"
          onClick={headerAtom.close}
          className="text-white uppercase font-black text-2xl tracking-tighter"
        >
          Kareem<span className="text-cyan-500">.</span>g
        </Link>
        {/* <button 
          onClick={headerAtom.close}
          className="p-2 bg-white/5 rounded-xl text-white/50 hover:text-white transition-colors"
        >
          <X size={24} />
        </button> */}
      </div>

      {/* Nav Links */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex flex-col gap-2"
      >
        {[{ text: "Home", url: URLS.home }, ...navLinks].map((link, index) => {
          const isActive = link.url === pathname;
          return (
            <motion.div key={index} variants={itemVariants}>
              <Link
                href={link.url}
                onClick={headerAtom.close}
                className={twMerge(
                  "group relative flex items-center justify-between p-4 rounded-2xl transition-all duration-300",
                  isActive
                    ? "bg-white/5 text-white"
                    : "text-white/50 hover:text-white hover:bg-white/[0.02]",
                )}
              >
                <div className="flex items-center gap-4">
                  <span
                    className={twMerge(
                      "text-2xl font-bold tracking-tight transition-colors",
                      isActive &&
                        "bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent",
                    )}
                  >
                    {link.text}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="drawerActiveDot"
                      className="w-1.5 h-1.5 bg-cyan-500 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.8)]"
                    />
                  )}
                </div>
                <ArrowRight
                  size={20}
                  className={twMerge(
                    "transition-all duration-300",
                    isActive
                      ? "opacity-100 text-cyan-500"
                      : "opacity-0 -translate-x-4 group-hover:opacity-50 group-hover:translate-x-0",
                  )}
                />
              </Link>
            </motion.div>
          );
        })}
        {/* Action Button */}
        <motion.div variants={itemVariants} className="mt-12">
          <Link
            href="https://drive.google.com/file/d/1Q8-NJU2Wi7tyjJSMfWbeQC8AmsvDKcXy/view?usp=sharing"
            className="group relative w-fit z-100 bg-white/5 hover:bg-cyan-600 transition-all duration-500 flex items-center gap-3 font-bold py-3 px-6 text-white border-white/10 hover:border-cyan-600 border rounded-full shadow-lg"
            target="_blank"
          >
            <span className="text-lg">Get Resume</span>
            <div className="p-2 bg-white/20 rounded-full group-hover:bg-white/30 transition-colors">
              <Download size={24} />
            </div>
          </Link>
        </motion.div>
      </motion.div>

      {/* Footer Info in Drawer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-auto border-t border-white/5 py-8"
      >
        <p className="text-white/30 text-xs uppercase tracking-widest font-bold mb-4">
          Let&apos;s Connect
        </p>
        <p className="text-white font-medium text-sm mb-1">
          kareemgmal7755@gmail.com
        </p>
        <p className="text-white/50 text-xs">Based in Egypt</p>
      </motion.div>
    </section>
  );
}
