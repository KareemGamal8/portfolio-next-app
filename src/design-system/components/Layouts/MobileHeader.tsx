"use client";

import { headerAtom } from "@/design-system/atoms";
import { ModernDrawer } from "@/design-system/components";
import { motion } from "framer-motion";
import Link from "next/link";
import { Download, Menu2 } from "tabler-icons-react";
import NavbarDrawer from "./NavbarDrawer";

export default function MobileHeader() {
  return (
    <div className="flex items-center gap-4">
      <Link
        href="https://drive.google.com/file/d/1M13FhKPGg9gEQjUZo8zp-5EUZKvDx5Z4/view?usp=sharing"
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
  );
}
