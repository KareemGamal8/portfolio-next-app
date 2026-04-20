"use client";

import { headerAtom } from "@/design-system/atoms";
import { ModernDrawer } from "@/design-system/components";
import { URLS } from "@/shared/urls";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Download, Menu2 } from "tabler-icons-react";
import { twMerge } from "tailwind-merge";
import { navLinks } from "../../data";
import NavbarDrawer from "./NavbarDrawer";

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={twMerge(
        "py-4 z-50 sticky top-0 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-3 shadow-xl"
          : "bg-transparent py-5",
      )}
    >
      <div className="flex container justify-between items-center gap-8">
        <Link href={URLS.home} className="group flex items-center gap-1">
          <motion.span
            className="text-white uppercase font-black text-3xl tracking-tighter"
            whileHover={{ scale: 1.05 }}
          >
            Kareem
            <span className="text-cyan-500 group-hover:text-blue-500 transition-colors">
              .
            </span>
            g
          </motion.span>
        </Link>

        <motion.nav
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.4,
              },
            },
          }}
          className="flex justify-between max-lg:hidden items-center gap-2"
        >
          {[{ text: "Home", url: URLS.home }, ...navLinks].map(
            (link, index) => {
              const isActive = link.url === pathname;
              return (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: -10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <Link
                    href={link.url}
                    className={twMerge(
                      "relative px-5 py-2 group text-oslo-grey text-[1.05rem] font-bold transition-all duration-300 rounded-full hover:text-white flex items-center gap-2 overflow-hidden",
                      isActive && "text-white",
                    )}
                  >
                    {/* Hover Pill Background */}
                    <span
                      className={twMerge(
                        "absolute inset-0 bg-white/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-out -z-10",
                        isActive && "scale-100 bg-cyan-500/10",
                      )}
                    />

                    <motion.span
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={twMerge(
                        "relative z-10 tracking-tight transition-colors duration-300",
                        isActive &&
                          "bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent",
                      )}
                    >
                      {link.text}
                    </motion.span>

                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-0.5"
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                      >
                        <div className="w-1 h-1 bg-cyan-500 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
                      </motion.div>
                    )}
                  </Link>
                </motion.div>
              );
            },
          )}
        </motion.nav>

        <div className="flex items-center gap-4">
          <Link
            href="https://drive.google.com/file/d/1DdqoXsN4Nh9OvdXKOFje-rWci999um9C/view?usp=sharing"
            className="group w-fit bg-white/5 hover:bg-cyan-600 transition-all duration-500 max-lg:hidden flex items-center gap-3 font-bold py-3 px-6 text-white border-white/10 hover:border-cyan-600 border rounded-full shadow-lg"
            target="_blank"
          >
            <span className="text-sm uppercase tracking-wider">Get Resume</span>
            <motion.div
              animate={{ y: [0, 2, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Download size={20} />
            </motion.div>
          </Link>

          <ModernDrawer
            atom={headerAtom}
            containerClassName="lg:hidden"
            toggleButton={
              <button className="p-2 hover:bg-white/5 rounded-lg transition-colors">
                <Menu2 color="#fff" size={32} />
              </button>
            }
            className="!bg-background !shadow-2xl w-[70%] max-sm:w-[85%]"
          >
            <NavbarDrawer />
          </ModernDrawer>
        </div>
      </div>
    </motion.header>
  );
}
