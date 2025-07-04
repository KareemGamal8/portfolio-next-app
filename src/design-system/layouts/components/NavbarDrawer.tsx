import { useDrawer } from "@/design-system/hooks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { navLinks } from "../data";
import { Download } from "tabler-icons-react";

export default function NavbarDrawer() {
  const pathname = usePathname();

  const { toggleDrawer } = useDrawer();

  return (
    <section className="flex flex-col gap-6">
      {navLinks.map((link, index) => (
        <Link
          className={twMerge(
            "text-oslo-grey relative nav-link p-4 after:!left-12 text-xl font-semibold hover:text-white transition-all duration-500 ease-in-out",
            link.url === pathname && "text-white active-nav-link"
          )}
          key={index}
          href={link.url}
          onClick={toggleDrawer}
        >
          {link.text}
        </Link>
      ))}

      <Link
        href="https://drive.google.com/file/d/1tEsNOJ_j9Sbs11cZ_KlxVKQLWYfGhoVe/view?usp=drive_link"
        className="w-fit flex items-center gap-4 font-medium py-4 px-8 text-white border-gray-600 border rounded-full"
        target="_blank"
      >
        <span>Get Resume</span> <Download />
      </Link>
    </section>
  );
}
