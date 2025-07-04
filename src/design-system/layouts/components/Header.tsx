"use client";

import { ModernDrawer } from "@/design-system/components";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Download, Menu2 } from "tabler-icons-react";
import { twMerge } from "tailwind-merge";
import { navLinks } from "../data";
import NavbarDrawer from "./NavbarDrawer";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="py-8 bg-background z-50 sticky top-0 animate-flip-down animate-duration-[1000ms] animate-delay-200 animate-ease-linear">
      <div className="flex container justify-between items-center gap-8 ">
        <h3 className="text-white uppercase font-extrabold text-3xl">
          Kareem.g
        </h3>
        <nav className="flex ma justify-between max-lg:hidden items-center gap-16">
          {navLinks.map((link, index) => (
            <Link
              className={twMerge(
                "text-oslo-grey relative nav-link text-xl font-semibold hover:text-white transition-all duration-500 ease-in-out",
                link.url === pathname && "text-white active-nav-link"
              )}
              key={index}
              href={link.url}
            >
              {link.text}
            </Link>
          ))}
        </nav>
        <Link
          href="https://drive.google.com/file/d/1tEsNOJ_j9Sbs11cZ_KlxVKQLWYfGhoVe/view?usp=drive_link"
          className="w-fit max-lg:hidden flex items-center gap-4 font-medium py-4 px-6 text-white border-gray-600 border rounded-full"
          target="_blank"
        >
          <span>Get Resume</span> <Download />
        </Link>
        <ModernDrawer
          containerClassName="min-lg:hidden"
          toggleButton={
            <button>
              <Menu2 color="#fff" size={40} />
            </button>
          }
          className="!bg-background !shadow-2xl w-[60%] max-md:w-[80%]"
        >
          <NavbarDrawer />
        </ModernDrawer>
      </div>
    </header>
  );
}
